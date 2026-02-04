import { getAllBases } from '@/lib/bases';
import { getAllGuideSlugs } from '@/lib/guides';
import { SITE_CONFIG } from '@/lib/seo';
import { getAllArticles } from '@/data/blog-index';
import { BRAWLERS, GAME_MODES } from '@/lib/brawl-stars/brawlers';
import { CARDS as CR_CARDS, META_DECKS as CR_DECKS } from '@/lib/clash-royale/cards';
import { CHARACTERS as FF_CHARACTERS } from '@/lib/free-fire/characters';
import { WEAPONS as FF_WEAPONS } from '@/lib/free-fire/weapons';

export default function sitemap() {
  const baseUrl = SITE_CONFIG.url;

  // Static pages - using canonical URLs (no redirects)
  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    // Clash of Clans canonical URLs
    { url: `${baseUrl}/clash-of-clans`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/clash-of-clans/th`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/clash-of-clans/bh`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/clash-of-clans/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/clash-of-clans/search`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    // Other games
    { url: `${baseUrl}/brawl-stars`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/clash-royale`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/free-fire`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    // General pages
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ];

  // TH level pages (TH3 to TH18) - canonical URLs
  const thLevels = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const thPages = thLevels.map(level => ({
    url: `${baseUrl}/clash-of-clans/th/${level}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.9,
  }));

  // BH level pages - canonical URLs
  const bhLevels = [3, 4, 5, 6, 7, 8, 9, 10];
  const bhPages = bhLevels.map(level => ({
    url: `${baseUrl}/clash-of-clans/bh/${level}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Individual base pages - canonical URLs
  const bases = getAllBases();
  const basePages = bases.map(base => ({
    url: `${baseUrl}/clash-of-clans/bases/${base.hallType?.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`,
    lastModified: base.scrapedAt ? new Date(base.scrapedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Guide pages - canonical URLs
  const guideSlugs = getAllGuideSlugs();
  const guidePages = guideSlugs.map(slug => ({
    url: `${baseUrl}/clash-of-clans/guides/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Blog article pages
  const articles = getAllArticles();
  const blogPages = articles.map(article => ({
    url: `${baseUrl}/blog/${article.slug}`,
    lastModified: article.date ? new Date(article.date) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Brawl Stars pages
  const brawlStarsPages = [
    { url: `${baseUrl}/brawl-stars`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/brawl-stars/tier-list`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/brawl-stars/brawlers`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/brawl-stars/modes`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/brawl-stars/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/brawl-stars/guides/beginners-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/brawl-stars/guides/ranked-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/brawl-stars/guides/star-powers-gadgets`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/brawl-stars/guides/gem-spending`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/brawl-stars/guides/club-league`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/brawl-stars/guides/map-control`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Individual brawler pages
  const brawlerPages = BRAWLERS.map(brawler => ({
    url: `${baseUrl}/brawl-stars/brawlers/${brawler.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Game mode pages
  const gameModePages = GAME_MODES.map(mode => ({
    url: `${baseUrl}/brawl-stars/modes/${mode.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Clash Royale pages
  const clashRoyalePages = [
    { url: `${baseUrl}/clash-royale`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/clash-royale/tier-list`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/clash-royale/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/clash-royale/guides/beginners-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/clash-royale/guides/elixir-management`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/clash-royale/guides/deck-building`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Individual Clash Royale card pages
  const crCardPages = CR_CARDS.map(card => ({
    url: `${baseUrl}/clash-royale/cards/${card.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Clash Royale deck pages
  const crDeckPages = CR_DECKS.map(deck => ({
    url: `${baseUrl}/clash-royale/decks/${deck.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Free Fire pages
  const freeFirePages = [
    { url: `${baseUrl}/free-fire`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/free-fire/characters`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/free-fire/weapons`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/free-fire/guides`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
  ];

  // Individual Free Fire character pages
  const ffCharacterPages = FF_CHARACTERS.map(character => ({
    url: `${baseUrl}/free-fire/characters/${character.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Individual Free Fire weapon pages
  const ffWeaponPages = FF_WEAPONS.map(weapon => ({
    url: `${baseUrl}/free-fire/weapons/${weapon.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...staticPages, ...thPages, ...bhPages, ...guidePages, ...blogPages, ...basePages, ...brawlStarsPages, ...brawlerPages, ...gameModePages, ...clashRoyalePages, ...crCardPages, ...crDeckPages, ...freeFirePages, ...ffCharacterPages, ...ffWeaponPages];
}
