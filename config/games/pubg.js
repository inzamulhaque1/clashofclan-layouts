// PUBG Mobile Game Configuration

const pubg = {
  id: 'pubg',
  slug: 'pubg',
  name: 'PUBG Mobile',
  shortName: 'PUBG',
  description: 'Tactical battle royale experience',
  developer: 'Krafton / Tencent',
  category: 'battle-royale',
  featured: true,

  // Theme colors
  theme: {
    primary: '#F59E0B',      // Amber/Gold - PUBG signature
    primaryHover: '#D97706',
    secondary: '#78350F',
    accent: '#FCD34D',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },

  // Content types this game supports
  contentTypes: ['loadout', 'guide', 'tier-list', 'settings'],

  // Game modes
  gameModes: [
    { key: 'classic', label: 'Classic', description: 'Standard battle royale' },
    { key: 'ranked', label: 'Ranked', description: 'Competitive mode' },
    { key: 'tdm', label: 'TDM', description: 'Team Deathmatch' },
    { key: 'payload', label: 'Payload', description: 'Helicopters and rockets' },
    { key: 'metro-royale', label: 'Metro Royale', description: 'PvPvE survival' },
  ],

  // Maps
  maps: [
    { key: 'erangel', label: 'Erangel', size: '8x8 km' },
    { key: 'miramar', label: 'Miramar', size: '8x8 km' },
    { key: 'sanhok', label: 'Sanhok', size: '4x4 km' },
    { key: 'vikendi', label: 'Vikendi', size: '6x6 km' },
    { key: 'livik', label: 'Livik', size: '2x2 km' },
    { key: 'karakin', label: 'Karakin', size: '2x2 km' },
  ],

  // Weapon categories
  weaponTypes: [
    { key: 'assault-rifle', label: 'Assault Rifle', shortName: 'AR' },
    { key: 'dmr', label: 'DMR', shortName: 'DMR' },
    { key: 'sniper', label: 'Sniper', shortName: 'SR' },
    { key: 'smg', label: 'SMG', shortName: 'SMG' },
    { key: 'shotgun', label: 'Shotgun', shortName: 'SG' },
    { key: 'lmg', label: 'LMG', shortName: 'LMG' },
    { key: 'pistol', label: 'Pistol', shortName: 'Pistol' },
  ],

  // Content categories
  categories: [
    { key: 'competitive', label: 'Competitive', description: 'Tournament setups' },
    { key: 'aggressive', label: 'Aggressive', description: 'Hot drop loadouts' },
    { key: 'passive', label: 'Passive', description: 'Safe zone play' },
    { key: 'sniper', label: 'Sniper', description: 'Long range focus' },
  ],

  // Navigation links
  navigation: [
    { href: '/pubg/loadouts', label: 'Loadouts' },
    { href: '/pubg/tier-list', label: 'Tier List' },
    { href: '/pubg/settings', label: 'Settings' },
    { href: '/pubg/guides', label: 'Guides' },
  ],

  // Icon/logo
  icon: '/games/pubg/icon.png',
  logo: '/games/pubg/logo.png',

  // SEO metadata
  seo: {
    title: 'PUBG Mobile Loadouts & Guides',
    description: 'Best PUBG Mobile loadouts, weapon tier lists, and pro settings. Learn strategies for Erangel, Miramar, and all maps.',
    keywords: ['pubg mobile', 'loadout', 'weapons', 'tier list', 'settings', 'sensitivity'],
  },
};

export default pubg;
