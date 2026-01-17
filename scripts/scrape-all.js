#!/usr/bin/env node

/**
 * Bulk Scraper for clashofclans-layouts.com
 * Scrapes all TH3-TH18 bases
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://clashofclans-layouts.com';
const DATA_FILE = path.join(__dirname, '..', 'data', 'bases.json');

// TH levels to scrape (3 to 18)
const TH_LEVELS = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];

// Delay between requests (ms) - be respectful to the server
const REQUEST_DELAY = 500;
const PAGE_DELAY = 1000;

// Stats
let totalScraped = 0;
let errors = 0;

/**
 * Sleep utility
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch with retry
 */
async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
        },
      });

      if (response.status === 404) {
        return null;
      }

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      return await response.text();
    } catch (error) {
      console.log(`  Retry ${i + 1}/${retries} for ${url}: ${error.message}`);
      await sleep(2000);
    }
  }
  return null;
}

/**
 * Extract base links from a listing page
 */
function extractBaseLinks(html, thLevel) {
  const links = [];

  // Pattern: /plans/th_XX/type_number.html
  const pattern = new RegExp(`/plans/th_${thLevel}/(war|farm|trophy|hybrid|cwl|defence|defense)_(\\d+)\\.html`, 'gi');

  let match;
  while ((match = pattern.exec(html)) !== null) {
    const fullUrl = `${BASE_URL}${match[0]}`;
    if (!links.includes(fullUrl)) {
      links.push(fullUrl);
    }
  }

  return links;
}

/**
 * Check if there's a next page
 */
function hasNextPage(html, currentPage) {
  const nextPage = currentPage + 1;
  return html.includes(`/page_${nextPage}/`) || html.includes(`page_${nextPage}`);
}

/**
 * Get total pages from HTML
 */
function getTotalPages(html) {
  const matches = html.match(/page_(\d+)/g);
  if (!matches) return 1;

  const pages = matches.map(m => parseInt(m.replace('page_', ''), 10));
  return Math.max(...pages, 1);
}

/**
 * Scrape a single base page
 */
async function scrapeBasePage(url) {
  const html = await fetchWithRetry(url);
  if (!html) return null;

  // Extract copy link
  let copyLink = null;
  const copyLinkMatch = html.match(/(https:\/\/link\.clashofclans\.com\/[^\s"'<>]+)/);
  if (copyLinkMatch) {
    copyLink = decodeURIComponent(copyLinkMatch[1].replace(/&amp;/g, '&'));
  }

  // Extract images - try multiple patterns
  let thumbnailUrl = null;
  let originalImageUrl = null;

  // Original image
  const originalPatterns = [
    /src="([^"]*\/original\/[^"]+\.(?:jpg|png|webp))"/i,
    /href="([^"]*\/original\/[^"]+\.(?:jpg|png|webp))"/i,
    /data-src="([^"]*\/original\/[^"]+\.(?:jpg|png|webp))"/i,
  ];

  for (const pattern of originalPatterns) {
    const match = html.match(pattern);
    if (match) {
      originalImageUrl = match[1].startsWith('http') ? match[1] : `${BASE_URL}${match[1]}`;
      break;
    }
  }

  // Preview/thumb as fallback
  if (!originalImageUrl) {
    const previewMatch = html.match(/src="([^"]*\/(?:preview|thumb)\/[^"]+\.(?:jpg|png|webp))"/i);
    if (previewMatch) {
      originalImageUrl = previewMatch[1].startsWith('http') ? previewMatch[1] : `${BASE_URL}${previewMatch[1]}`;
    }
  }

  // Thumbnail
  const thumbMatch = html.match(/src="([^"]*\/thumb\/[^"]+\.(?:jpg|png|webp))"/i);
  if (thumbMatch) {
    thumbnailUrl = thumbMatch[1].startsWith('http') ? thumbMatch[1] : `${BASE_URL}${thumbMatch[1]}`;
  }

  // Extract base info from URL
  const urlMatch = url.match(/\/(war|farm|trophy|hybrid|cwl|defence|defense)_(\d+)\.html/i);
  let baseType = urlMatch ? urlMatch[1].toLowerCase() : 'unknown';
  // Normalize defence to defense
  if (baseType === 'defence') baseType = 'defense';

  const baseNumber = urlMatch ? parseInt(urlMatch[2], 10) : 0;

  const thMatch = url.match(/th_(\d+)/i);
  const hallLevel = thMatch ? parseInt(thMatch[1], 10) : 0;

  // Extract title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : `TH${hallLevel} ${baseType} #${baseNumber}`;

  return {
    url,
    title,
    hallType: 'TH',
    hallLevel,
    baseType,
    baseNumber,
    copyLink,
    thumbnailUrl,
    originalImageUrl,
    scrapedAt: new Date().toISOString(),
  };
}

/**
 * Scrape all pages for a TH level
 */
async function scrapeTHLevel(level) {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Scraping TH${level}...`);
  console.log('='.repeat(50));

  const bases = [];
  const baseUrls = new Set();
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const pageUrl = page === 1
      ? `${BASE_URL}/plans/th_${level}/`
      : `${BASE_URL}/plans/th_${level}/page_${page}/`;

    console.log(`  Page ${page}: ${pageUrl}`);

    const html = await fetchWithRetry(pageUrl);

    if (!html) {
      console.log(`  No content for page ${page}, stopping.`);
      hasMore = false;
      break;
    }

    // Extract base links
    const links = extractBaseLinks(html, level);
    const newLinks = links.filter(l => !baseUrls.has(l));

    console.log(`  Found ${links.length} links (${newLinks.length} new)`);

    if (newLinks.length === 0) {
      hasMore = false;
      break;
    }

    // Add to set
    newLinks.forEach(l => baseUrls.add(l));

    // Check for next page
    hasMore = hasNextPage(html, page);
    page++;

    // Limit pages to avoid infinite loops
    if (page > 50) {
      console.log('  Reached page limit (50), stopping.');
      hasMore = false;
    }

    await sleep(PAGE_DELAY);
  }

  console.log(`  Total unique base URLs for TH${level}: ${baseUrls.size}`);

  // Now scrape each base
  const allUrls = Array.from(baseUrls);
  let scraped = 0;

  for (const url of allUrls) {
    try {
      const base = await scrapeBasePage(url);
      if (base && base.copyLink) {
        bases.push(base);
        scraped++;
        totalScraped++;

        if (scraped % 10 === 0) {
          console.log(`  Scraped ${scraped}/${allUrls.length} bases...`);
        }
      }
    } catch (error) {
      console.log(`  Error scraping ${url}: ${error.message}`);
      errors++;
    }

    await sleep(REQUEST_DELAY);
  }

  console.log(`  Completed TH${level}: ${bases.length} bases with copy links`);
  return bases;
}

/**
 * Main function
 */
async function main() {
  console.log('');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║     Clash of Clans Base Scraper - TH3 to TH18              ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`Target: ${TH_LEVELS.length} TH levels (TH${TH_LEVELS[TH_LEVELS.length-1]} to TH${TH_LEVELS[0]})`);
  console.log(`Output: ${DATA_FILE}`);
  console.log('');

  const startTime = Date.now();
  const allBases = [];

  // Scrape each TH level
  for (const level of TH_LEVELS) {
    try {
      const bases = await scrapeTHLevel(level);
      allBases.push(...bases);

      // Save progress after each level
      saveData(allBases);
      console.log(`  Progress saved. Total bases so far: ${allBases.length}`);
    } catch (error) {
      console.error(`Error scraping TH${level}:`, error.message);
      errors++;
    }
  }

  const duration = Math.round((Date.now() - startTime) / 1000);

  console.log('');
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║                     SCRAPING COMPLETE                       ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log('');
  console.log(`Total bases scraped: ${allBases.length}`);
  console.log(`Errors encountered: ${errors}`);
  console.log(`Time taken: ${Math.floor(duration / 60)}m ${duration % 60}s`);
  console.log('');

  // Final save
  saveData(allBases);
  console.log(`Data saved to: ${DATA_FILE}`);

  // Print stats by level
  console.log('\nBases by TH level:');
  const byLevel = {};
  allBases.forEach(b => {
    byLevel[b.hallLevel] = (byLevel[b.hallLevel] || 0) + 1;
  });
  Object.keys(byLevel).sort((a, b) => b - a).forEach(level => {
    console.log(`  TH${level}: ${byLevel[level]} bases`);
  });
}

/**
 * Save data to JSON file
 */
function saveData(bases) {
  const data = {
    updatedAt: new Date().toISOString(),
    totalBases: bases.length,
    bases: bases.sort((a, b) => {
      // Sort by TH level desc, then by base number desc
      if (b.hallLevel !== a.hallLevel) return b.hallLevel - a.hallLevel;
      return b.baseNumber - a.baseNumber;
    }),
  };

  // Ensure data directory exists
  const dataDir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

// Run
main().catch(console.error);
