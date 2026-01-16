import { NextResponse } from 'next/server';
import { getBaseListFromLevel, scrapeBasePage, getLevelUrl, getAvailableLevels } from '@/lib/scraper';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'bases.json');

// In-memory job tracking (in production, use Redis or a database)
const scrapeJobs = new Map();

/**
 * GET - Get scrape job status or available levels
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');
  const jobId = searchParams.get('jobId');

  if (action === 'levels') {
    const levels = await getAvailableLevels();
    return NextResponse.json(levels);
  }

  if (action === 'status' && jobId) {
    const job = scrapeJobs.get(jobId);
    if (!job) {
      return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    return NextResponse.json(job);
  }

  if (action === 'jobs') {
    const jobs = Array.from(scrapeJobs.entries()).map(([id, job]) => ({
      id,
      ...job,
    }));
    return NextResponse.json({ jobs });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}

/**
 * POST - Start a new scrape job
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { hallType, level, url } = body;

    // Generate job ID
    const jobId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Initialize job
    scrapeJobs.set(jobId, {
      status: 'running',
      hallType,
      level,
      startedAt: new Date().toISOString(),
      progress: 0,
      total: 0,
      scraped: 0,
      results: [],
      errors: [],
    });

    // Start scraping in the background (non-blocking)
    runScrapeJob(jobId, hallType, level, url);

    return NextResponse.json({
      success: true,
      jobId,
      message: `Started scraping ${hallType}${level}`,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * Run the scrape job
 */
async function runScrapeJob(jobId, hallType, level, singleUrl) {
  const job = scrapeJobs.get(jobId);
  if (!job) return;

  try {
    let baseUrls = [];

    if (singleUrl) {
      // Single URL scrape
      baseUrls = [singleUrl];
    } else {
      // Get all base URLs for this level
      const levelUrl = getLevelUrl(hallType, level);
      job.status = 'fetching_list';
      scrapeJobs.set(jobId, { ...job });

      baseUrls = await getBaseListFromLevel(levelUrl);
    }

    job.total = baseUrls.length;
    job.status = 'scraping';
    scrapeJobs.set(jobId, { ...job });

    // Scrape each base
    for (let i = 0; i < baseUrls.length; i++) {
      const url = baseUrls[i];

      try {
        const baseData = await scrapeBasePage(url);
        if (baseData && baseData.copyLink) {
          job.results.push(baseData);
        }
      } catch (err) {
        job.errors.push({ url, error: err.message });
      }

      job.scraped = i + 1;
      job.progress = Math.round((job.scraped / job.total) * 100);
      scrapeJobs.set(jobId, { ...job });

      // Rate limiting
      await new Promise(r => setTimeout(r, 500));
    }

    // Save results to file
    if (job.results.length > 0) {
      await saveResults(job.results);
    }

    job.status = 'completed';
    job.completedAt = new Date().toISOString();
    scrapeJobs.set(jobId, { ...job });

  } catch (error) {
    job.status = 'failed';
    job.error = error.message;
    scrapeJobs.set(jobId, { ...job });
  }
}

/**
 * Save scraped results to the data file
 */
async function saveResults(newBases) {
  // Load existing data
  let existingData = { bases: [] };
  if (fs.existsSync(DATA_FILE)) {
    try {
      existingData = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } catch (e) {
      existingData = { bases: [] };
    }
  }

  // Merge bases (dedupe by copyLink)
  const basesMap = new Map();
  (existingData.bases || []).forEach(base => {
    if (base.copyLink) basesMap.set(base.copyLink, base);
  });

  newBases.forEach(base => {
    if (base.copyLink) basesMap.set(base.copyLink, base);
  });

  const allBases = Array.from(basesMap.values());

  // Sort
  allBases.sort((a, b) => {
    if (a.hallType !== b.hallType) return a.hallType === 'TH' ? -1 : 1;
    if (a.hallLevel !== b.hallLevel) return b.hallLevel - a.hallLevel;
    return (b.baseNumber || 0) - (a.baseNumber || 0);
  });

  // Save
  const data = {
    updatedAt: new Date().toISOString(),
    totalBases: allBases.length,
    bases: allBases,
  };

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}
