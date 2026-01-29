// Clash Royale Game Configuration

const clashRoyale = {
  id: 'clash-royale',
  slug: 'clash-royale',
  name: 'Clash Royale',
  shortName: 'CR',
  description: 'Real-time strategy card battles',
  developer: 'Supercell',
  category: 'strategy',
  featured: true,

  // Theme colors
  theme: {
    primary: '#2563EB',      // Blue - Clash Royale signature
    primaryHover: '#1D4ED8',
    secondary: '#1E3A8A',
    accent: '#60A5FA',
    gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
  },

  // Content types this game supports
  contentTypes: ['deck', 'card', 'tier-list', 'guide'],

  // Card rarities
  rarities: [
    { key: 'common', label: 'Common', color: '#B0B0B0' },
    { key: 'rare', label: 'Rare', color: '#FF9500' },
    { key: 'epic', label: 'Epic', color: '#9B59B6' },
    { key: 'legendary', label: 'Legendary', color: '#F1C40F' },
    { key: 'champion', label: 'Champion', color: '#E74C3C' },
  ],

  // Arena/Trophy ranges
  arenas: [
    { level: 1, name: 'Goblin Stadium', trophies: '0-299' },
    { level: 2, name: 'Bone Pit', trophies: '300-599' },
    { level: 3, name: 'Barbarian Bowl', trophies: '600-999' },
    { level: 4, name: "P.E.K.K.A's Playhouse", trophies: '1000-1299' },
    { level: 5, name: 'Spell Valley', trophies: '1300-1599' },
    { level: 6, name: "Builder's Workshop", trophies: '1600-1999' },
    { level: 7, name: 'Royal Arena', trophies: '2000-2299' },
    { level: 8, name: 'Frozen Peak', trophies: '2300-2599' },
    { level: 9, name: 'Jungle Arena', trophies: '2600-2999' },
    { level: 10, name: 'Hog Mountain', trophies: '3000-3299' },
    { level: 11, name: 'Electro Valley', trophies: '3300-3599' },
    { level: 12, name: 'Spooky Town', trophies: '3600-3999' },
    { level: 13, name: 'Rascals Hideout', trophies: '4000-4299' },
    { level: 14, name: 'Serenity Peak', trophies: '4300-4599' },
    { level: 15, name: 'Legendary Arena', trophies: '5000+' },
  ],

  // Deck archetypes
  categories: [
    { key: 'beatdown', label: 'Beatdown', description: 'Heavy push decks' },
    { key: 'control', label: 'Control', description: 'Defensive counter-push' },
    { key: 'siege', label: 'Siege', description: 'X-Bow and Mortar' },
    { key: 'cycle', label: 'Cycle', description: 'Fast rotation decks' },
    { key: 'bridge-spam', label: 'Bridge Spam', description: 'Aggressive pressure' },
  ],

  // Navigation links
  navigation: [
    { href: '/clash-royale/decks', label: 'Decks' },
    { href: '/clash-royale/cards', label: 'Cards' },
    { href: '/clash-royale/tier-list', label: 'Tier List' },
    { href: '/clash-royale/guides', label: 'Guides' },
  ],

  // Icon/logo
  icon: '/games/clash-royale/icon.png',
  logo: '/games/clash-royale/logo.png',

  // SEO metadata
  seo: {
    title: 'Clash Royale Decks & Guides',
    description: 'Best Clash Royale decks, card tier lists, and strategy guides. Find winning decks for every arena and learn from pro players.',
    keywords: ['clash royale', 'decks', 'cards', 'tier list', 'meta decks', 'best deck'],
  },
};

export default clashRoyale;
