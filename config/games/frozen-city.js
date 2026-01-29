// Frozen City Game Configuration

const frozenCity = {
  id: 'frozen-city',
  slug: 'frozen-city',
  name: 'Frozen City',
  shortName: 'FC',
  description: 'Post-apocalyptic survival city builder',
  developer: 'Century Games',
  category: 'survival',
  featured: false,

  // Theme colors
  theme: {
    primary: '#06B6D4',      // Cyan/Ice - Frozen theme
    primaryHover: '#0891B2',
    secondary: '#164E63',
    accent: '#67E8F9',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
  },

  // Content types this game supports
  contentTypes: ['guide', 'tier-list', 'build'],

  // Survivor types/roles
  survivorRoles: [
    { key: 'gatherer', label: 'Gatherer', description: 'Resource collection' },
    { key: 'hunter', label: 'Hunter', description: 'Food production' },
    { key: 'builder', label: 'Builder', description: 'Construction speed' },
    { key: 'medic', label: 'Medic', description: 'Healing and health' },
    { key: 'guard', label: 'Guard', description: 'Defense and combat' },
  ],

  // Building categories
  categories: [
    { key: 'production', label: 'Production', description: 'Resource buildings' },
    { key: 'housing', label: 'Housing', description: 'Survivor capacity' },
    { key: 'defense', label: 'Defense', description: 'City protection' },
    { key: 'special', label: 'Special', description: 'Unique buildings' },
  ],

  // Navigation links
  navigation: [
    { href: '/frozen-city/guides', label: 'Guides' },
    { href: '/frozen-city/tier-list', label: 'Tier List' },
    { href: '/frozen-city/builds', label: 'Builds' },
  ],

  // Icon/logo
  icon: '/games/frozen-city/icon.png',
  logo: '/games/frozen-city/logo.png',

  // SEO metadata
  seo: {
    title: 'Frozen City Guides & Tips',
    description: 'Frozen City survival guides, best survivor builds, and city management tips. Learn how to survive the frozen apocalypse.',
    keywords: ['frozen city', 'survival', 'guides', 'tips', 'survivors', 'city builder'],
  },
};

export default frozenCity;
