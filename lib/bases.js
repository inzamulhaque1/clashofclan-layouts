// Base data utilities
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

/**
 * Get all bases from JSON files
 */
export function getAllBases() {
  const basesFile = path.join(DATA_DIR, 'bases.json');

  if (!fs.existsSync(basesFile)) {
    return [];
  }

  const data = JSON.parse(fs.readFileSync(basesFile, 'utf-8'));
  return data.bases || data || [];
}

/**
 * Get bases filtered by hall type and level
 */
export function getBasesByLevel(hallType, level) {
  const allBases = getAllBases();
  return allBases.filter(
    base => base.hallType?.toLowerCase() === hallType.toLowerCase() &&
            base.hallLevel === parseInt(level, 10)
  );
}

/**
 * Get bases filtered by type (war, farm, trophy, etc.)
 */
export function getBasesByType(baseType) {
  const allBases = getAllBases();
  return allBases.filter(
    base => base.baseType?.toLowerCase() === baseType.toLowerCase()
  );
}

/**
 * Get a single base by its ID (hallType + level + type + number)
 */
export function getBaseById(hallType, level, baseType, number) {
  const allBases = getAllBases();
  return allBases.find(
    base =>
      base.hallType?.toLowerCase() === hallType.toLowerCase() &&
      base.hallLevel === parseInt(level, 10) &&
      base.baseType?.toLowerCase() === baseType.toLowerCase() &&
      base.baseNumber === parseInt(number, 10)
  );
}

/**
 * Get all unique town hall levels
 */
export function getTownHallLevels() {
  const allBases = getAllBases();
  const levels = new Set();

  allBases.forEach(base => {
    if (base.hallType?.toUpperCase() === 'TH') {
      levels.add(base.hallLevel);
    }
  });

  return Array.from(levels).sort((a, b) => a - b);
}

/**
 * Get all unique builder hall levels
 */
export function getBuilderHallLevels() {
  const allBases = getAllBases();
  const levels = new Set();

  allBases.forEach(base => {
    if (base.hallType?.toUpperCase() === 'BH') {
      levels.add(base.hallLevel);
    }
  });

  return Array.from(levels).sort((a, b) => a - b);
}

/**
 * Get base statistics
 */
export function getBaseStats() {
  const allBases = getAllBases();

  const stats = {
    total: allBases.length,
    byHallType: {},
    byBaseType: {},
  };

  allBases.forEach(base => {
    const hallKey = `${base.hallType}${base.hallLevel}`;
    stats.byHallType[hallKey] = (stats.byHallType[hallKey] || 0) + 1;

    const typeKey = base.baseType || 'unknown';
    stats.byBaseType[typeKey] = (stats.byBaseType[typeKey] || 0) + 1;
  });

  return stats;
}

/**
 * Search bases by query
 */
export function searchBases(query) {
  const allBases = getAllBases();
  const lowerQuery = query.toLowerCase();

  return allBases.filter(base => {
    const searchableText = [
      base.title,
      base.hallType,
      base.baseType,
      `th${base.hallLevel}`,
      `bh${base.hallLevel}`,
    ].filter(Boolean).join(' ').toLowerCase();

    return searchableText.includes(lowerQuery);
  });
}
