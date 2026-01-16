// Scraper module for the website
const BASE_URL = 'https://clashofclans-layouts.com';

/**
 * Fetch HTML content from a URL
 */
export async function fetchPage(url) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      next: { revalidate: 0 }, // No caching for scraping
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    return null;
  }
}

/**
 * Parse HTML to extract data (simple regex-based parsing for server-side)
 */
function extractLinks(html, pattern) {
  const matches = [];
  const regex = new RegExp(pattern, 'g');
  let match;
  while ((match = regex.exec(html)) !== null) {
    matches.push(match[1] || match[0]);
  }
  return [...new Set(matches)];
}

/**
 * Get all base page URLs from a TH/BH listing page
 */
export async function getBaseListFromLevel(levelUrl) {
  const bases = [];
  let page = 1;
  let hasMore = true;

  while (hasMore && page <= 20) { // Max 20 pages per level
    const url = page === 1 ? levelUrl : `${levelUrl}page/${page}/`;
    const html = await fetchPage(url);

    if (!html) {
      hasMore = false;
      break;
    }

    // Extract base page links
    const linkPattern = /href="([^"]*(?:war|farm|trophy|hybrid|cwl)_\d+\.html)"/g;
    const pageLinks = [];
    let match;

    while ((match = linkPattern.exec(html)) !== null) {
      let href = match[1];
      if (!href.startsWith('http')) {
        href = href.startsWith('/') ? `${BASE_URL}${href}` : `${BASE_URL}/${href}`;
      }
      if (!pageLinks.includes(href)) {
        pageLinks.push(href);
      }
    }

    if (pageLinks.length === 0) {
      hasMore = false;
    } else {
      bases.push(...pageLinks);
      page++;

      // Check if there's a next page
      if (!html.includes(`/page/${page}/`)) {
        hasMore = false;
      }
    }

    // Small delay between pages
    await new Promise(r => setTimeout(r, 300));
  }

  return [...new Set(bases)];
}

/**
 * Extract base data from an individual base page
 */
export async function scrapeBasePage(url) {
  const html = await fetchPage(url);
  if (!html) return null;

  // Extract copy link
  let copyLink = null;
  const copyLinkMatch = html.match(/(https:\/\/link\.clashofclans\.com\/[^\s"'<>]+)/);
  if (copyLinkMatch) {
    copyLink = copyLinkMatch[1];
  }

  // Extract images
  let thumbnailUrl = null;
  let originalImageUrl = null;

  const thumbMatch = html.match(/src="([^"]*_plans\/[^"]*\/thumb\/[^"]+\.jpg)"/);
  if (thumbMatch) {
    thumbnailUrl = thumbMatch[1].startsWith('http') ? thumbMatch[1] : `${BASE_URL}${thumbMatch[1]}`;
  }

  const originalMatch = html.match(/(?:src|href)="([^"]*_plans\/[^"]*\/original\/[^"]+\.jpg)"/);
  if (originalMatch) {
    originalImageUrl = originalMatch[1].startsWith('http') ? originalMatch[1] : `${BASE_URL}${originalMatch[1]}`;
  }

  // If no original, try preview
  if (!originalImageUrl) {
    const previewMatch = html.match(/src="([^"]*_plans\/[^"]*\/preview\/[^"]+\.jpg)"/);
    if (previewMatch) {
      originalImageUrl = previewMatch[1].startsWith('http') ? previewMatch[1] : `${BASE_URL}${previewMatch[1]}`;
    }
  }

  // Extract base info from URL
  const urlMatch = url.match(/\/(war|farm|trophy|hybrid|cwl)_(\d+)\.html/);
  const baseType = urlMatch ? urlMatch[1] : 'unknown';
  const baseNumber = urlMatch ? parseInt(urlMatch[2], 10) : 0;

  const thMatch = url.match(/th_?(\d+)/i);
  const bhMatch = url.match(/bh_?(\d+)/i);
  const hallLevel = thMatch ? parseInt(thMatch[1], 10) : (bhMatch ? parseInt(bhMatch[1], 10) : 0);
  const hallType = thMatch ? 'TH' : (bhMatch ? 'BH' : 'unknown');

  // Extract title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : '';

  return {
    url,
    title,
    hallType,
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
 * Get available levels from the site
 */
export async function getAvailableLevels() {
  const html = await fetchPage(BASE_URL);
  if (!html) return { th: [], bh: [] };

  const thLevels = new Set();
  const bhLevels = new Set();

  // Find TH levels
  const thMatches = html.matchAll(/\/plans\/th_(\d+)/g);
  for (const match of thMatches) {
    thLevels.add(parseInt(match[1], 10));
  }

  // Find BH levels
  const bhMatches = html.matchAll(/\/builder_hall_bases\/bh_(\d+)/g);
  for (const match of bhMatches) {
    bhLevels.add(parseInt(match[1], 10));
  }

  return {
    th: Array.from(thLevels).sort((a, b) => b - a),
    bh: Array.from(bhLevels).sort((a, b) => b - a),
  };
}

/**
 * Build level URL
 */
export function getLevelUrl(hallType, level) {
  if (hallType === 'TH') {
    return `${BASE_URL}/plans/th_${level}/`;
  } else {
    return `${BASE_URL}/builder_hall_bases/bh_${level}/`;
  }
}
