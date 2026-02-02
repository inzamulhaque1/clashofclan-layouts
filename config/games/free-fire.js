// Free Fire Game Configuration

const freeFire = {
  id: 'free-fire',
  slug: 'free-fire',
  name: 'Free Fire',
  shortName: 'FF',
  description: 'Battle royale survival shooter',
  developer: 'Garena',
  category: 'battle-royale',
  featured: true,

  // Theme colors
  theme: {
    primary: '#EF4444',      // Red - Free Fire signature
    primaryHover: '#DC2626',
    secondary: '#7F1D1D',
    accent: '#FCA5A5',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  },

  // Content types this game supports
  contentTypes: ['loadout', 'character', 'guide', 'tier-list'],

  // Character classes/types
  characterTypes: [
    { key: 'offensive', label: 'Offensive', description: 'Combat focused' },
    { key: 'defensive', label: 'Defensive', description: 'Survival focused' },
    { key: 'support', label: 'Support', description: 'Team utility' },
    { key: 'recon', label: 'Recon', description: 'Information gathering' },
  ],

  // Weapon categories
  weaponTypes: [
    { key: 'assault-rifle', label: 'Assault Rifle', shortName: 'AR' },
    { key: 'smg', label: 'SMG', shortName: 'SMG' },
    { key: 'sniper', label: 'Sniper', shortName: 'SR' },
    { key: 'shotgun', label: 'Shotgun', shortName: 'SG' },
    { key: 'pistol', label: 'Pistol', shortName: 'Pistol' },
    { key: 'lmg', label: 'LMG', shortName: 'LMG' },
  ],

  // Content categories
  categories: [
    { key: 'ranked', label: 'Ranked', description: 'Competitive loadouts' },
    { key: 'rush', label: 'Rush', description: 'Aggressive playstyle' },
    { key: 'camping', label: 'Camping', description: 'Defensive playstyle' },
    { key: 'squad', label: 'Squad', description: 'Team compositions' },
  ],

  // Navigation links
  navigation: [
    { href: '/free-fire', label: 'Overview' },
    { href: '/free-fire/characters', label: 'Characters' },
    { href: '/free-fire/weapons', label: 'Weapons' },
    { href: '/free-fire/guides', label: 'Guides' },
  ],

  // Icon/logo
  icon: '/games/free-fire/icon.png',
  logo: '/games/free-fire/logo.png',

  // SEO metadata
  seo: {
    title: 'Free Fire Loadouts & Guides',
    description: 'Best Free Fire loadouts, character builds, and weapon guides. Dominate the battlefield with pro strategies and tier lists.',
    keywords: ['free fire', 'loadout', 'characters', 'weapons', 'tier list', 'best character'],
  },
};

export default freeFire;
