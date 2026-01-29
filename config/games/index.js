// Game Registry - Central configuration for all supported games

import clashOfClans from './clash-of-clans';
import brawlStars from './brawl-stars';
import clashRoyale from './clash-royale';
import frozenCity from './frozen-city';
import freeFire from './free-fire';
import pubg from './pubg';

// All registered games
export const GAMES = {
  'clash-of-clans': clashOfClans,
  'brawl-stars': brawlStars,
  'clash-royale': clashRoyale,
  'frozen-city': frozenCity,
  'free-fire': freeFire,
  'pubg': pubg,
};

// Get all games as array
export function getAllGames() {
  return Object.values(GAMES);
}

// Get game by slug
export function getGameBySlug(slug) {
  return GAMES[slug] || null;
}

// Get all game slugs
export function getGameSlugs() {
  return Object.keys(GAMES);
}

// Check if slug is a valid game
export function isValidGameSlug(slug) {
  return slug in GAMES;
}

// Get games by category
export function getGamesByCategory(category) {
  return getAllGames().filter(game => game.category === category);
}

// Get featured games (for homepage)
export function getFeaturedGames() {
  return getAllGames().filter(game => game.featured);
}

// Get game navigation for a specific game
export function getGameNavigation(slug) {
  const game = getGameBySlug(slug);
  if (!game) return [];
  return game.navigation || [];
}

// Get game theme colors
export function getGameTheme(slug) {
  const game = getGameBySlug(slug);
  if (!game) return null;
  return game.theme;
}

// Content type helpers
export function getGameContentTypes(slug) {
  const game = getGameBySlug(slug);
  if (!game) return [];
  return game.contentTypes || [];
}

export function gameHasContentType(slug, contentType) {
  const contentTypes = getGameContentTypes(slug);
  return contentTypes.includes(contentType);
}

// Default export
export default GAMES;
