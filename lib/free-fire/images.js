// Free Fire Image Library - Centralized image management
// Using reliable public CDN sources

// Helper to generate UI Avatar placeholder
const uiAvatar = (name, bg = 'FF5722', color = 'fff') =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=${bg}&color=${color}&size=256&bold=true&format=png`;

// Gaming placeholder images from Unsplash
const GAMING_PLACEHOLDER = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80';
const WEAPON_PLACEHOLDER = 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80';

// ============================================
// CHARACTER IMAGES - Using UI Avatars as placeholders
// ============================================
export const CHARACTER_IMAGES = {
  // Rushers - Red theme
  alok: { url: uiAvatar('DJ Alok', 'EF4444'), alt: 'DJ Alok - Drop the Beat', title: 'DJ Alok' },
  chrono: { url: uiAvatar('Chrono', 'EF4444'), alt: 'Chrono - Time Turner', title: 'Chrono' },
  tatsuya: { url: uiAvatar('Tatsuya', 'EF4444'), alt: 'Tatsuya - Rebel Rush', title: 'Tatsuya' },
  hayato: { url: uiAvatar('Hayato', 'EF4444'), alt: 'Hayato - Bushido', title: 'Hayato' },
  jota: { url: uiAvatar('Jota', 'EF4444'), alt: 'Jota - Sustained Raids', title: 'Jota' },
  kla: { url: uiAvatar('Kla', 'EF4444'), alt: 'Kla - Muay Thai', title: 'Kla' },
  xayne: { url: uiAvatar('Xayne', 'EF4444'), alt: 'Xayne - Xtreme Encounter', title: 'Xayne' },
  skyler: { url: uiAvatar('Skyler', 'EF4444'), alt: 'Skyler - Riptide Rhythm', title: 'Skyler' },
  wukong: { url: uiAvatar('Wukong', 'EF4444'), alt: 'Wukong - Camouflage', title: 'Wukong' },

  // Support - Green theme
  dimitri: { url: uiAvatar('Dimitri', '10B981'), alt: 'Dimitri - Healing Heartbeat', title: 'Dimitri' },
  kapella: { url: uiAvatar('Kapella', '10B981'), alt: 'Kapella - Healing Song', title: 'Kapella' },
  olivia: { url: uiAvatar('Olivia', '10B981'), alt: 'Olivia - Healing Touch', title: 'Olivia' },
  k: { url: uiAvatar('K', '10B981'), alt: 'K - Master of All', title: 'K' },
  thiva: { url: uiAvatar('Thiva', '10B981'), alt: 'Thiva - Vital Vibes', title: 'Thiva' },
  notora: { url: uiAvatar('Notora', '10B981'), alt: 'Notora - Racer Blessing', title: 'Notora' },
  steffie: { url: uiAvatar('Steffie', '10B981'), alt: 'Steffie - Painted Refuge', title: 'Steffie' },

  // Scouts - Yellow theme
  moco: { url: uiAvatar('Moco', 'F59E0B'), alt: 'Moco - Hacker Eye', title: 'Moco' },
  clu: { url: uiAvatar('Clu', 'F59E0B'), alt: 'Clu - Tracing Steps', title: 'Clu' },
  shirou: { url: uiAvatar('Shirou', 'F59E0B'), alt: 'Shirou - Damage Delivered', title: 'Shirou' },
  otho: { url: uiAvatar('Otho', 'F59E0B'), alt: 'Otho - Memory Mist', title: 'Otho' },
  homer: { url: uiAvatar('Homer', 'F59E0B'), alt: 'Homer - Drone Shockwave', title: 'Homer' },

  // Snipers - Indigo theme
  laura: { url: uiAvatar('Laura', '6366F1'), alt: 'Laura - Sharp Shooter', title: 'Laura' },
  rafael: { url: uiAvatar('Rafael', '6366F1'), alt: 'Rafael - Dead Silent', title: 'Rafael' },
  maro: { url: uiAvatar('Maro', '6366F1'), alt: 'Maro - Falcon Fervor', title: 'Maro' },

  // Tanks - Purple theme
  andrew: { url: uiAvatar('Andrew', '8B5CF6'), alt: 'Andrew - Armor Specialist', title: 'Andrew' },
  antonio: { url: uiAvatar('Antonio', '8B5CF6'), alt: 'Antonio - Gangster Spirit', title: 'Antonio' },
  kenta: { url: uiAvatar('Kenta', '8B5CF6'), alt: 'Kenta - Swordsman Wrath', title: 'Kenta' },
  a124: { url: uiAvatar('A124', '8B5CF6'), alt: 'A124 - Thrill of Battle', title: 'A124' },
  luqueta: { url: uiAvatar('Luqueta', '8B5CF6'), alt: 'Luqueta - Hat Trick', title: 'Luqueta' },
  shani: { url: uiAvatar('Shani', '8B5CF6'), alt: 'Shani - Gear Recycle', title: 'Shani' },
  ford: { url: uiAvatar('Ford', '8B5CF6'), alt: 'Ford - Iron Will', title: 'Ford' },

  // Utility - Pink theme
  kelly: { url: uiAvatar('Kelly', 'EC4899'), alt: 'Kelly - Dash', title: 'Kelly' },
  joseph: { url: uiAvatar('Joseph', 'EC4899'), alt: 'Joseph - Nutty Movement', title: 'Joseph' },
  dasha: { url: uiAvatar('Dasha', 'EC4899'), alt: 'Dasha - Partying On', title: 'Dasha' },
  maxim: { url: uiAvatar('Maxim', 'EC4899'), alt: 'Maxim - Gluttony', title: 'Maxim' },
  caroline: { url: uiAvatar('Caroline', 'EC4899'), alt: 'Caroline - Agility', title: 'Caroline' },
  nikita: { url: uiAvatar('Nikita', 'EC4899'), alt: 'Nikita - Firearms Expert', title: 'Nikita' },
  miguel: { url: uiAvatar('Miguel', 'EC4899'), alt: 'Miguel - Crazy Slayer', title: 'Miguel' },
  alvaro: { url: uiAvatar('Alvaro', 'EC4899'), alt: 'Alvaro - Art of Demolition', title: 'Alvaro' },
  paloma: { url: uiAvatar('Paloma', 'EC4899'), alt: 'Paloma - Arms Dealing', title: 'Paloma' },
  misha: { url: uiAvatar('Misha', 'EC4899'), alt: 'Misha - Afterburner', title: 'Misha' },
  jai: { url: uiAvatar('Jai', 'EC4899'), alt: 'Jai - Raging Reload', title: 'Jai' },
  leon: { url: uiAvatar('Leon', 'EC4899'), alt: 'Leon - Buzzer Beater', title: 'Leon' },
  dBee: { url: uiAvatar('D-Bee', 'EC4899'), alt: 'D-Bee - Bullet Beats', title: 'D-Bee' },
  nairi: { url: uiAvatar('Nairi', 'EC4899'), alt: 'Nairi - Ice Iron', title: 'Nairi' },
  iris: { url: uiAvatar('Iris', 'EC4899'), alt: 'Iris - Wall Blossom', title: 'Iris' },
  luna: { url: uiAvatar('Luna', 'EC4899'), alt: 'Luna - Bullet Blast', title: 'Luna' },

  // Default fallback
  default: {
    url: GAMING_PLACEHOLDER,
    alt: 'Free Fire character',
    title: 'Free Fire Character'
  }
};

// ============================================
// WEAPON IMAGES - Using UI Avatars with weapon type colors
// ============================================
export const WEAPON_IMAGES = {
  // Assault Rifles - Blue
  ak: { url: uiAvatar('AK', '3B82F6'), alt: 'AK assault rifle', title: 'AK' },
  m4a1: { url: uiAvatar('M4A1', '3B82F6'), alt: 'M4A1 assault rifle', title: 'M4A1' },
  scar: { url: uiAvatar('SCAR', '3B82F6'), alt: 'SCAR assault rifle', title: 'SCAR' },
  famas: { url: uiAvatar('FAMAS', '3B82F6'), alt: 'FAMAS assault rifle', title: 'FAMAS' },
  groza: { url: uiAvatar('Groza', '3B82F6'), alt: 'Groza assault rifle', title: 'Groza' },
  aug: { url: uiAvatar('AUG', '3B82F6'), alt: 'AUG assault rifle', title: 'AUG' },
  an94: { url: uiAvatar('AN94', '3B82F6'), alt: 'AN94 assault rifle', title: 'AN94' },
  xm8: { url: uiAvatar('XM8', '3B82F6'), alt: 'XM8 assault rifle', title: 'XM8' },
  parafal: { url: uiAvatar('Parafal', '3B82F6'), alt: 'Parafal assault rifle', title: 'Parafal' },

  // SMGs - Orange
  mp40: { url: uiAvatar('MP40', 'F59E0B'), alt: 'MP40 SMG', title: 'MP40' },
  ump: { url: uiAvatar('UMP', 'F59E0B'), alt: 'UMP SMG', title: 'UMP' },
  p90: { url: uiAvatar('P90', 'F59E0B'), alt: 'P90 SMG', title: 'P90' },
  thompson: { url: uiAvatar('Thompson', 'F59E0B'), alt: 'Thompson SMG', title: 'Thompson' },
  vss: { url: uiAvatar('VSS', 'F59E0B'), alt: 'VSS SMG', title: 'VSS' },
  mac10: { url: uiAvatar('MAC10', 'F59E0B'), alt: 'MAC10 SMG', title: 'MAC10' },

  // Shotguns - Red
  m1014: { url: uiAvatar('M1014', 'EF4444'), alt: 'M1014 shotgun', title: 'M1014' },
  m1887: { url: uiAvatar('M1887', 'EF4444'), alt: 'M1887 shotgun', title: 'M1887' },
  spas12: { url: uiAvatar('SPAS12', 'EF4444'), alt: 'SPAS12 shotgun', title: 'SPAS12' },

  // Snipers - Purple
  awm: { url: uiAvatar('AWM', '8B5CF6'), alt: 'AWM sniper rifle', title: 'AWM' },
  kar98k: { url: uiAvatar('Kar98k', '8B5CF6'), alt: 'Kar98k sniper rifle', title: 'Kar98k' },
  m82b: { url: uiAvatar('M82B', '8B5CF6'), alt: 'M82B sniper rifle', title: 'M82B' },
  svd: { url: uiAvatar('SVD', '8B5CF6'), alt: 'SVD sniper rifle', title: 'SVD' },
  woodpecker: { url: uiAvatar('Woodpecker', '8B5CF6'), alt: 'Woodpecker marksman', title: 'Woodpecker' },

  // LMGs - Indigo
  m249: { url: uiAvatar('M249', '6366F1'), alt: 'M249 LMG', title: 'M249' },
  gatling: { url: uiAvatar('Gatling', '6366F1'), alt: 'Gatling gun', title: 'Gatling' },

  // Pistols - Green
  desertEagle: { url: uiAvatar('Deagle', '10B981'), alt: 'Desert Eagle pistol', title: 'Desert Eagle' },
  m500: { url: uiAvatar('M500', '10B981'), alt: 'M500 pistol', title: 'M500' },
  g18: { url: uiAvatar('G18', '10B981'), alt: 'G18 pistol', title: 'G18' },
  usp: { url: uiAvatar('USP', '10B981'), alt: 'USP pistol', title: 'USP' },

  // Melee - Pink
  katana: { url: uiAvatar('Katana', 'EC4899'), alt: 'Katana melee', title: 'Katana' },
  pan: { url: uiAvatar('Pan', 'EC4899'), alt: 'Pan melee', title: 'Pan' },
  bat: { url: uiAvatar('Bat', 'EC4899'), alt: 'Baseball bat melee', title: 'Bat' },

  // Launchers - Orange Red
  m79: { url: uiAvatar('M79', 'F97316'), alt: 'M79 grenade launcher', title: 'M79' },
  rgs50: { url: uiAvatar('RGS50', 'F97316'), alt: 'RGS50 rocket launcher', title: 'RGS50' },

  // Default fallback
  default: {
    url: WEAPON_PLACEHOLDER,
    alt: 'Free Fire weapon',
    title: 'Free Fire Weapon'
  }
};

// ============================================
// GENERAL FREE FIRE IMAGES
// ============================================
export const GENERAL_IMAGES = {
  logo: {
    url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
    alt: 'Free Fire Logo',
    title: 'Free Fire'
  },
  heroBanner: {
    url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
    alt: 'Free Fire Battle Royale - Best characters, weapons and guides 2026',
    title: 'Free Fire Hero Banner'
  },
  battleRoyale: {
    url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/hq720.jpg',
    alt: 'Free Fire Battle Royale gameplay',
    title: 'Battle Royale Mode'
  },
  clashSquad: {
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
    alt: 'Free Fire Clash Squad 4v4 mode',
    title: 'Clash Squad Mode'
  },
  ranked: {
    url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
    alt: 'Free Fire Ranked Mode - climb to Grandmaster',
    title: 'Ranked Mode'
  },
};

// ============================================
// GUIDE IMAGES
// ============================================
export const GUIDE_IMAGES = {
  beginnersGuide: {
    hero: {
      url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
      alt: 'Free Fire Beginner Guide 2026 - Complete Tutorial',
      title: 'Beginners Guide'
    }
  },
  clashSquadGuide: {
    hero: {
      url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80',
      alt: 'Free Fire Clash Squad Guide - 4v4 Tips and Strategies',
      title: 'Clash Squad Guide'
    }
  },
  rankPushGuide: {
    hero: {
      url: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80',
      alt: 'Free Fire Rank Push Guide - Reach Grandmaster',
      title: 'Rank Push Guide'
    }
  },
  sensitivityGuide: {
    hero: {
      url: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80',
      alt: 'Free Fire Best Sensitivity Settings 2026',
      title: 'Sensitivity Guide'
    }
  },
  landingSpotsGuide: {
    hero: {
      url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&q=80',
      alt: 'Free Fire Best Landing Spots - Map Guide',
      title: 'Landing Spots Guide'
    }
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get character image by ID - returns default if not found
 */
export function getCharacterImage(characterId) {
  return CHARACTER_IMAGES[characterId] || CHARACTER_IMAGES.default;
}

/**
 * Get weapon image by ID - returns default if not found
 */
export function getWeaponImage(weaponId) {
  return WEAPON_IMAGES[weaponId] || WEAPON_IMAGES.default;
}

// Default export
export default {
  CHARACTER_IMAGES,
  WEAPON_IMAGES,
  GENERAL_IMAGES,
  GUIDE_IMAGES,
  getCharacterImage,
  getWeaponImage,
};
