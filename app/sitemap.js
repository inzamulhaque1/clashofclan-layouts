import { getAllBases } from '@/lib/bases';
import { SITE_CONFIG } from '@/lib/seo';

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  // Static pages
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/search`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
  ];

  // TH level pages
  const thLevels = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
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

  return [...staticPages, ...thPages, ...bhPages, ...basePages];
}
