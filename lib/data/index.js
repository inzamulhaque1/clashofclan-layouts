// Unified Data Layer for Multi-Game Portal
// Provides consistent data access patterns across all games

import fs from 'fs';
import path from 'path';
import { getGameBySlug, isValidGameSlug } from '@/config/games';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Get the data directory for a specific game
 */
function getGameDataDir(gameSlug) {
  return path.join(DATA_DIR, gameSlug);
}

/**
 * Read JSON data file for a game
 */
function readGameData(gameSlug, filename) {
  const filePath = path.join(getGameDataDir(gameSlug), filename);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return null;
  }
}

/**
 * Write JSON data file for a game
 */
function writeGameData(gameSlug, filename, data) {
  const gameDir = getGameDataDir(gameSlug);

  // Ensure directory exists
  if (!fs.existsSync(gameDir)) {
    fs.mkdirSync(gameDir, { recursive: true });
  }

  const filePath = path.join(gameDir, filename);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

// ============================================================
// UNIFIED CONTENT QUERIES
// ============================================================

/**
 * Query content from any game with flexible filters
 * @param {string} gameSlug - Game identifier
 * @param {string} contentType - Type of content (base, deck, brawler, etc.)
 * @param {object} filters - Optional filters
 * @returns {array} Array of content items
 */
export function queryContent(gameSlug, contentType, filters = {}) {
  if (!isValidGameSlug(gameSlug)) {
    console.warn(`Invalid game slug: ${gameSlug}`);
    return [];
  }

  // Route to game-specific adapter
  switch (gameSlug) {
    case 'clash-of-clans':
      return queryClashOfClansContent(contentType, filters);
    case 'brawl-stars':
      return queryBrawlStarsContent(contentType, filters);
    case 'clash-royale':
      return queryClashRoyaleContent(contentType, filters);
    default:
      return queryGenericContent(gameSlug, contentType, filters);
  }
}

/**
 * Get a single content item by ID
 * @param {string} gameSlug - Game identifier
 * @param {string} contentType - Type of content
 * @param {string|object} id - Content identifier (format varies by game)
 * @returns {object|null} Content item or null
 */
export function getContentById(gameSlug, contentType, id) {
  if (!isValidGameSlug(gameSlug)) {
    return null;
  }

  switch (gameSlug) {
    case 'clash-of-clans':
      return getClashOfClansContentById(contentType, id);
    case 'brawl-stars':
      return getBrawlStarsContentById(contentType, id);
    case 'clash-royale':
      return getClashRoyaleContentById(contentType, id);
    default:
      return getGenericContentById(gameSlug, contentType, id);
  }
}

/**
 * Get content statistics for a game
 * @param {string} gameSlug - Game identifier
 * @param {string} contentType - Type of content (optional)
 * @returns {object} Statistics object
 */
export function getContentStats(gameSlug, contentType = null) {
  if (!isValidGameSlug(gameSlug)) {
    return { total: 0 };
  }

  switch (gameSlug) {
    case 'clash-of-clans':
      return getClashOfClansStats(contentType);
    default:
      return { total: 0 };
  }
}

/**
 * Search content across a game
 * @param {string} gameSlug - Game identifier
 * @param {string} query - Search query
 * @param {object} options - Search options
 * @returns {array} Search results
 */
export function searchContent(gameSlug, query, options = {}) {
  if (!isValidGameSlug(gameSlug) || !query) {
    return [];
  }

  switch (gameSlug) {
    case 'clash-of-clans':
      return searchClashOfClansContent(query, options);
    default:
      return [];
  }
}

// ============================================================
// CLASH OF CLANS SPECIFIC FUNCTIONS
// ============================================================

function getClashOfClansBases() {
  const data = readGameData('clash-of-clans', 'bases.json');
  return data?.bases || data || [];
}

function queryClashOfClansContent(contentType, filters) {
  if (contentType === 'base') {
    let bases = getClashOfClansBases();

    // Apply filters
    if (filters.hallType) {
      bases = bases.filter(b =>
        b.hallType?.toLowerCase() === filters.hallType.toLowerCase()
      );
    }

    if (filters.hallLevel) {
      bases = bases.filter(b =>
        b.hallLevel === parseInt(filters.hallLevel, 10)
      );
    }

    if (filters.baseType) {
      bases = bases.filter(b =>
        b.baseType?.toLowerCase() === filters.baseType.toLowerCase()
      );
    }

    // Apply limit
    if (filters.limit) {
      bases = bases.slice(0, filters.limit);
    }

    return bases;
  }

  if (contentType === 'guide') {
    // Import guides from the existing guides module
    const { GUIDES } = require('@/lib/guides');
    let guides = Object.entries(GUIDES).map(([slug, guide]) => ({
      slug,
      ...guide,
    }));

    if (filters.category) {
      guides = guides.filter(g =>
        g.category?.toLowerCase() === filters.category.toLowerCase()
      );
    }

    return guides;
  }

  return [];
}

function getClashOfClansContentById(contentType, id) {
  if (contentType === 'base') {
    const bases = getClashOfClansBases();

    // ID can be an object { hallType, hallLevel, baseType, baseNumber }
    if (typeof id === 'object') {
      return bases.find(b =>
        b.hallType?.toLowerCase() === id.hallType?.toLowerCase() &&
        b.hallLevel === parseInt(id.hallLevel, 10) &&
        b.baseType?.toLowerCase() === id.baseType?.toLowerCase() &&
        b.baseNumber === parseInt(id.baseNumber, 10)
      ) || null;
    }

    // ID might be a string identifier
    return bases.find(b => b.id === id) || null;
  }

  if (contentType === 'guide') {
    const { getGuide } = require('@/lib/guides');
    return getGuide(id);
  }

  return null;
}

function getClashOfClansStats(contentType) {
  const bases = getClashOfClansBases();

  if (contentType === 'base' || !contentType) {
    const stats = {
      total: bases.length,
      byHallType: {},
      byBaseType: {},
    };

    bases.forEach(base => {
      const hallKey = `${base.hallType}${base.hallLevel}`;
      stats.byHallType[hallKey] = (stats.byHallType[hallKey] || 0) + 1;

      const typeKey = base.baseType || 'unknown';
      stats.byBaseType[typeKey] = (stats.byBaseType[typeKey] || 0) + 1;
    });

    return stats;
  }

  return { total: 0 };
}

function searchClashOfClansContent(query, options = {}) {
  const bases = getClashOfClansBases();
  const lowerQuery = query.toLowerCase();

  let results = bases.filter(base => {
    const searchableText = [
      base.title,
      base.hallType,
      base.baseType,
      `th${base.hallLevel}`,
      `bh${base.hallLevel}`,
    ].filter(Boolean).join(' ').toLowerCase();

    return searchableText.includes(lowerQuery);
  });

  // Apply additional filters from options
  if (options.hallType) {
    results = results.filter(b =>
      b.hallType?.toLowerCase() === options.hallType.toLowerCase()
    );
  }

  if (options.baseType) {
    results = results.filter(b =>
      b.baseType?.toLowerCase() === options.baseType.toLowerCase()
    );
  }

  if (options.limit) {
    results = results.slice(0, options.limit);
  }

  return results;
}

// ============================================================
// BRAWL STARS SPECIFIC FUNCTIONS (Placeholder)
// ============================================================

function queryBrawlStarsContent(contentType, filters) {
  // TODO: Implement when Brawl Stars data is added
  return [];
}

function getBrawlStarsContentById(contentType, id) {
  // TODO: Implement when Brawl Stars data is added
  return null;
}

// ============================================================
// CLASH ROYALE SPECIFIC FUNCTIONS (Placeholder)
// ============================================================

function queryClashRoyaleContent(contentType, filters) {
  // TODO: Implement when Clash Royale data is added
  return [];
}

function getClashRoyaleContentById(contentType, id) {
  // TODO: Implement when Clash Royale data is added
  return null;
}

// ============================================================
// GENERIC CONTENT FUNCTIONS (Fallback)
// ============================================================

function queryGenericContent(gameSlug, contentType, filters) {
  const data = readGameData(gameSlug, `${contentType}s.json`);
  if (!data) return [];

  let items = Array.isArray(data) ? data : data[`${contentType}s`] || data.items || [];

  // Apply generic filters
  Object.entries(filters).forEach(([key, value]) => {
    if (key !== 'limit' && value) {
      items = items.filter(item => item[key] === value);
    }
  });

  if (filters.limit) {
    items = items.slice(0, filters.limit);
  }

  return items;
}

function getGenericContentById(gameSlug, contentType, id) {
  const items = queryGenericContent(gameSlug, contentType, {});
  return items.find(item => item.id === id || item.slug === id) || null;
}

// ============================================================
// LEGACY COMPATIBILITY EXPORTS
// These maintain backwards compatibility with existing code
// ============================================================

export function getAllBases() {
  return queryContent('clash-of-clans', 'base');
}

export function getBasesByLevel(hallType, level) {
  return queryContent('clash-of-clans', 'base', {
    hallType,
    hallLevel: level,
  });
}

export function getBasesByType(baseType) {
  return queryContent('clash-of-clans', 'base', { baseType });
}

export function getBaseById(hallType, level, baseType, number) {
  return getContentById('clash-of-clans', 'base', {
    hallType,
    hallLevel: level,
    baseType,
    baseNumber: number,
  });
}

export function getBaseStats() {
  return getContentStats('clash-of-clans', 'base');
}

export function searchBases(query) {
  return searchContent('clash-of-clans', query);
}

export function getTownHallLevels() {
  const bases = getAllBases();
  const levels = new Set();

  bases.forEach(base => {
    if (base.hallType?.toUpperCase() === 'TH') {
      levels.add(base.hallLevel);
    }
  });

  return Array.from(levels).sort((a, b) => a - b);
}

export function getBuilderHallLevels() {
  const bases = getAllBases();
  const levels = new Set();

  bases.forEach(base => {
    if (base.hallType?.toUpperCase() === 'BH') {
      levels.add(base.hallLevel);
    }
  });

  return Array.from(levels).sort((a, b) => a - b);
}

// Default export for easy importing
export default {
  queryContent,
  getContentById,
  getContentStats,
  searchContent,
  // Legacy
  getAllBases,
  getBasesByLevel,
  getBasesByType,
  getBaseById,
  getBaseStats,
  searchBases,
  getTownHallLevels,
  getBuilderHallLevels,
};
