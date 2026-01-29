// Brawl Stars Game Configuration

const brawlStars = {
  id: 'brawl-stars',
  slug: 'brawl-stars',
  name: 'Brawl Stars',
  shortName: 'BS',
  description: 'Fast-paced multiplayer battles with unique brawlers',
  developer: 'Supercell',
  category: 'action',
  featured: true,

  // Theme colors
  theme: {
    primary: '#FF6B35',      // Orange - Brawl Stars signature
    primaryHover: '#E85A2A',
    secondary: '#7C2D12',
    accent: '#FDBA74',
    gradient: 'linear-gradient(135deg, #FF6B35 0%, #E85A2A 100%)',
  },

  // Content types this game supports
  contentTypes: ['brawler', 'tier-list', 'guide', 'map'],

  // Game-specific data
  gameModes: [
    { key: 'gem-grab', label: 'Gem Grab', icon: 'gem' },
    { key: 'brawl-ball', label: 'Brawl Ball', icon: 'ball' },
    { key: 'heist', label: 'Heist', icon: 'safe' },
    { key: 'bounty', label: 'Bounty', icon: 'star' },
    { key: 'siege', label: 'Siege', icon: 'robot' },
    { key: 'hot-zone', label: 'Hot Zone', icon: 'zone' },
    { key: 'knockout', label: 'Knockout', icon: 'skull' },
    { key: 'showdown', label: 'Showdown', icon: 'crown' },
    { key: 'duo-showdown', label: 'Duo Showdown', icon: 'duo' },
  ],

  // Brawler rarities
  rarities: [
    { key: 'common', label: 'Common', color: '#B0C3D9' },
    { key: 'rare', label: 'Rare', color: '#4FC3F7' },
    { key: 'super-rare', label: 'Super Rare', color: '#81C784' },
    { key: 'epic', label: 'Epic', color: '#BA68C8' },
    { key: 'mythic', label: 'Mythic', color: '#EF5350' },
    { key: 'legendary', label: 'Legendary', color: '#FFD54F' },
    { key: 'chromatic', label: 'Chromatic', color: '#FF8A65' },
  ],

  // Categories for content
  categories: [
    { key: 'meta', label: 'Meta', description: 'Current meta picks' },
    { key: 'beginner', label: 'Beginner', description: 'Easy to learn' },
    { key: 'advanced', label: 'Advanced', description: 'High skill ceiling' },
  ],

  // Navigation links
  navigation: [
    { href: '/brawl-stars/brawlers', label: 'Brawlers' },
    { href: '/brawl-stars/tier-list', label: 'Tier List' },
    { href: '/brawl-stars/guides', label: 'Guides' },
    { href: '/brawl-stars/maps', label: 'Maps' },
  ],

  // Icon/logo
  icon: '/games/brawl-stars/icon.png',
  logo: '/games/brawl-stars/logo.png',

  // SEO metadata
  seo: {
    title: 'Brawl Stars Guides & Tier Lists',
    description: 'Brawl Stars tier lists, brawler guides, and best builds. Learn which brawlers are meta and how to dominate every game mode.',
    keywords: ['brawl stars', 'tier list', 'brawlers', 'best brawler', 'meta', 'guides'],
  },
};

export default brawlStars;
