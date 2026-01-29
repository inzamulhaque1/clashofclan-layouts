// Clash of Clans Game Configuration

const clashOfClans = {
  id: 'clash-of-clans',
  slug: 'clash-of-clans',
  name: 'Clash of Clans',
  shortName: 'CoC',
  description: 'Strategic base building and clan warfare',
  developer: 'Supercell',
  category: 'strategy',
  featured: true,

  // Theme colors
  theme: {
    primary: '#F59E0B',      // Gold/amber - CoC signature color
    primaryHover: '#D97706',
    secondary: '#78350F',
    accent: '#FCD34D',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  },

  // Content types this game supports
  contentTypes: ['base', 'guide'],

  // Game-specific level systems
  levels: {
    townHall: {
      name: 'Town Hall',
      shortName: 'TH',
      min: 3,
      max: 18,
      current: 18,
      images: {
        3: 'https://coc.guide/static/imgs/other/town-hall-3.png',
        4: 'https://coc.guide/static/imgs/other/town-hall-4.png',
        5: 'https://coc.guide/static/imgs/other/town-hall-5.png',
        6: 'https://coc.guide/static/imgs/other/town-hall-6.png',
        7: 'https://coc.guide/static/imgs/other/town-hall-7.png',
        8: 'https://coc.guide/static/imgs/other/town-hall-8.png',
        9: 'https://coc.guide/static/imgs/other/town-hall-9.png',
        10: 'https://coc.guide/static/imgs/other/town-hall-10.png',
        11: 'https://coc.guide/static/imgs/other/town-hall-11.png',
        12: 'https://coc.guide/static/imgs/other/town-hall-12.png',
        13: 'https://coc.guide/static/imgs/other/town-hall-13.png',
        14: 'https://coc.guide/static/imgs/other/town-hall-14.png',
        15: 'https://coc.guide/static/imgs/other/town-hall-15.png',
        16: 'https://coc.guide/static/imgs/other/town-hall-16.png',
        17: 'https://coc.guide/static/imgs/other/town-hall-17.png',
        18: 'https://coc.guide/static/imgs/other/town-hall-17.png',
      },
      descriptions: {
        18: 'Spirit Fox and Monolith',
        17: 'Merged Defenses and Battle Drill',
        16: 'Root Rider and Angry Jelly',
        15: 'Pet House and Recall Spell',
        14: 'Pet House and Siege Barracks',
        13: 'Royal Champion and Scattershot',
        12: 'Giga Tesla and Siege Machines',
        11: 'Grand Warden and Eagle Artillery',
        10: 'Inferno Towers',
        9: 'Archer Queen and X-Bows',
        8: 'Dark Elixir and Barbarian King',
        7: 'Dragons and Hidden Teslas',
        6: 'Healers and Air Defense',
        5: 'Wizards and Spell Factory',
        4: 'Air Troops Unlocked',
        3: 'Clan Castle Available',
      },
    },
    builderHall: {
      name: 'Builder Hall',
      shortName: 'BH',
      min: 3,
      max: 10,
      current: 10,
      images: {
        3: 'https://coc.guide/static/imgs/other/town-hall2-3.png',
        4: 'https://coc.guide/static/imgs/other/town-hall2-4.png',
        5: 'https://coc.guide/static/imgs/other/town-hall2-5.png',
        6: 'https://coc.guide/static/imgs/other/town-hall2-6.png',
        7: 'https://coc.guide/static/imgs/other/town-hall2-7.png',
        8: 'https://coc.guide/static/imgs/other/town-hall2-8.png',
        9: 'https://coc.guide/static/imgs/other/town-hall2-9.png',
        10: 'https://coc.guide/static/imgs/other/town-hall2-10.png',
      },
    },
  },

  // Base type categories
  categories: [
    { key: 'war', label: 'War', description: 'Clan Wars & CWL', badgeClass: 'badge-war' },
    { key: 'farm', label: 'Farming', description: 'Protect resources', badgeClass: 'badge-farm' },
    { key: 'trophy', label: 'Trophy', description: 'Push trophies', badgeClass: 'badge-trophy' },
    { key: 'hybrid', label: 'Hybrid', description: 'Balanced defense', badgeClass: 'badge-hybrid' },
  ],

  // Navigation links for this game
  navigation: [
    { href: '/clash-of-clans/th', label: 'Town Hall' },
    { href: '/clash-of-clans/bh', label: 'Builder Hall' },
    { href: '/clash-of-clans/guides', label: 'Guides' },
    { href: '/clash-of-clans/search', label: 'Search' },
  ],

  // Icon/logo for the game
  icon: '/games/clash-of-clans/icon.png',
  logo: '/games/clash-of-clans/logo.png',

  // SEO metadata
  seo: {
    title: 'Clash of Clans Base Layouts',
    description: 'Download the best Clash of Clans base layouts with one-click copy links. War bases, farming bases, trophy bases for TH3-TH18 and BH3-BH10.',
    keywords: ['clash of clans', 'coc bases', 'town hall', 'war base', 'farming base', 'trophy base'],
  },
};

export default clashOfClans;
