import { getAllBases } from '@/lib/bases';
import { getAllGuideSlugs } from '@/lib/guides';
import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/th`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/bh`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/lookup`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/leaderboards`, lastModified: new Date(), changeFrequency: 'hourly', priority: 0.95 },
    { url: `${baseUrl}/stats`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/events`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.95 },
    { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];

  // TH level pages (TH3 to TH18)
  const thLevels = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const thPages = thLevels.map(level => ({
    url: `${baseUrl}/th/${level}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // BH level pages
  const bhLevels = [3, 4, 5, 6, 7, 8, 9, 10];
  const bhPages = bhLevels.map(level => ({
    url: `${baseUrl}/bh/${level}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Individual base pages
  const bases = getAllBases();
  const basePages = bases.map(base => ({
    url: `${baseUrl}/bases/${base.hallType?.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`,
    lastModified: base.scrapedAt ? new Date(base.scrapedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Guide pages
  const guideSlugs = getAllGuideSlugs();
  const guidePages = guideSlugs.map(slug => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticPages, ...thPages, ...bhPages, ...guidePages, ...basePages];
}
