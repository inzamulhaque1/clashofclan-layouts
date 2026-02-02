// Free Fire Image Library - Centralized image management
// Using Fandom Wiki images via proxy to bypass hotlink protection

const WIKI_BASE = 'https://static.wikia.nocookie.net/garena-freefire/images';

// Helper to create proxied URL for Wiki images
const wikiImg = (path) => `/api/proxy-image?url=${encodeURIComponent(`${WIKI_BASE}${path}`)}`;

// ============================================
// CHARACTER IMAGES - Fandom Wiki URLs (proxied)
// ============================================
export const CHARACTER_IMAGES = {
  // Rushers
  alok: { url: wikiImg('/7/71/Alok.png/revision/latest'), alt: 'DJ Alok - Drop the Beat', title: 'DJ Alok' },
  chrono: { url: wikiImg('/d/d8/Chrono.png/revision/latest'), alt: 'Chrono - Time Turner', title: 'Chrono' },
  tatsuya: { url: wikiImg('/2/29/Tatsuya.png/revision/latest'), alt: 'Tatsuya - Rebel Rush', title: 'Tatsuya' },
  hayato: { url: wikiImg('/4/46/Hayato.png/revision/latest'), alt: 'Hayato - Bushido', title: 'Hayato' },
  jota: { url: 'https://ui-avatars.com/api/?name=Jota&background=EF4444&color=fff&size=256&bold=true', alt: 'Jota - Sustained Raids', title: 'Jota' },
  kla: { url: wikiImg('/c/c8/Kla.png/revision/latest'), alt: 'Kla - Muay Thai', title: 'Kla' },
  xayne: { url: wikiImg('/5/52/Xayne.png/revision/latest'), alt: 'Xayne - Xtreme Encounter', title: 'Xayne' },
  skyler: { url: wikiImg('/1/1c/Skyler.png/revision/latest'), alt: 'Skyler - Riptide Rhythm', title: 'Skyler' },
  wukong: { url: wikiImg('/b/b0/Wukong.png/revision/latest'), alt: 'Wukong - Camouflage', title: 'Wukong' },

  // Support
  dimitri: { url: wikiImg('/5/5d/Dimitri.png/revision/latest'), alt: 'Dimitri - Healing Heartbeat', title: 'Dimitri' },
  kapella: { url: wikiImg('/0/09/Kapella.png/revision/latest'), alt: 'Kapella - Healing Song', title: 'Kapella' },
  olivia: { url: wikiImg('/f/f3/Olivia.png/revision/latest'), alt: 'Olivia - Healing Touch', title: 'Olivia' },
  k: { url: wikiImg('/9/99/K.png/revision/latest'), alt: 'K - Master of All', title: 'K' },
  thiva: { url: wikiImg('/1/17/Thiva.png/revision/latest'), alt: 'Thiva - Vital Vibes', title: 'Thiva' },
  notora: { url: wikiImg('/7/76/Notora.png/revision/latest'), alt: 'Notora - Racer Blessing', title: 'Notora' },
  steffie: { url: wikiImg('/0/07/Steffie.png/revision/latest'), alt: 'Steffie - Painted Refuge', title: 'Steffie' },

  // Scouts
  moco: { url: wikiImg('/6/6c/Moco.png/revision/latest'), alt: 'Moco - Hacker Eye', title: 'Moco' },
  clu: { url: wikiImg('/3/35/Clu.png/revision/latest'), alt: 'Clu - Tracing Steps', title: 'Clu' },
  shirou: { url: wikiImg('/5/5c/Shirou.png/revision/latest'), alt: 'Shirou - Damage Delivered', title: 'Shirou' },
  otho: { url: wikiImg('/8/80/Otho.png/revision/latest'), alt: 'Otho - Memory Mist', title: 'Otho' },
  homer: { url: 'https://ui-avatars.com/api/?name=Homer&background=F59E0B&color=fff&size=256&bold=true', alt: 'Homer - Drone Shockwave', title: 'Homer' },

  // Snipers
  laura: { url: wikiImg('/7/7c/Laura.png/revision/latest'), alt: 'Laura - Sharp Shooter', title: 'Laura' },
  rafael: { url: wikiImg('/c/cb/Rafael.png/revision/latest'), alt: 'Rafael - Dead Silent', title: 'Rafael' },
  maro: { url: 'https://ui-avatars.com/api/?name=Maro&background=6366F1&color=fff&size=256&bold=true', alt: 'Maro - Falcon Fervor', title: 'Maro' },

  // Tanks
  andrew: { url: wikiImg('/e/e3/Andrew.png/revision/latest'), alt: 'Andrew - Armor Specialist', title: 'Andrew' },
  antonio: { url: wikiImg('/f/f0/Antonio.png/revision/latest'), alt: 'Antonio - Gangster Spirit', title: 'Antonio' },
  kenta: { url: wikiImg('/b/bc/Kenta.png/revision/latest'), alt: 'Kenta - Swordsman Wrath', title: 'Kenta' },
  a124: { url: wikiImg('/7/76/A124.png/revision/latest'), alt: 'A124 - Thrill of Battle', title: 'A124' },
  luqueta: { url: wikiImg('/e/e7/Luqueta.png/revision/latest'), alt: 'Luqueta - Hat Trick', title: 'Luqueta' },
  shani: { url: wikiImg('/1/1f/Shani.png/revision/latest'), alt: 'Shani - Gear Recycle', title: 'Shani' },
  ford: { url: wikiImg('/1/1c/Ford.png/revision/latest'), alt: 'Ford - Iron Will', title: 'Ford' },

  // Utility
  kelly: { url: wikiImg('/3/3c/Kelly.png/revision/latest'), alt: 'Kelly - Dash', title: 'Kelly' },
  joseph: { url: wikiImg('/7/7a/Joseph.png/revision/latest'), alt: 'Joseph - Nutty Movement', title: 'Joseph' },
  dasha: { url: wikiImg('/d/d4/Dasha.png/revision/latest'), alt: 'Dasha - Partying On', title: 'Dasha' },
  maxim: { url: wikiImg('/5/53/Maxim.png/revision/latest'), alt: 'Maxim - Gluttony', title: 'Maxim' },
  caroline: { url: wikiImg('/8/87/Caroline.png/revision/latest'), alt: 'Caroline - Agility', title: 'Caroline' },
  nikita: { url: wikiImg('/5/54/Nikita.png/revision/latest'), alt: 'Nikita - Firearms Expert', title: 'Nikita' },
  miguel: { url: wikiImg('/6/6a/Miguel.png/revision/latest'), alt: 'Miguel - Crazy Slayer', title: 'Miguel' },
  alvaro: { url: wikiImg('/f/fc/Alvaro.png/revision/latest'), alt: 'Alvaro - Art of Demolition', title: 'Alvaro' },
  paloma: { url: wikiImg('/e/ee/Paloma.png/revision/latest'), alt: 'Paloma - Arms Dealing', title: 'Paloma' },
  misha: { url: wikiImg('/f/f1/Misha2.png/revision/latest'), alt: 'Misha - Afterburner', title: 'Misha' },
  jai: { url: wikiImg('/6/63/Jai.png/revision/latest'), alt: 'Jai - Raging Reload', title: 'Jai' },
  leon: { url: wikiImg('/2/21/Leon.png/revision/latest'), alt: 'Leon - Buzzer Beater', title: 'Leon' },
  dBee: { url: wikiImg('/9/9a/D-bee.png/revision/latest'), alt: 'D-Bee - Bullet Beats', title: 'D-Bee' },
  nairi: { url: wikiImg('/3/38/FreeFire23345.jpg/revision/latest'), alt: 'Nairi - Ice Iron', title: 'Nairi' },
  iris: { url: 'https://ui-avatars.com/api/?name=Iris&background=EC4899&color=fff&size=256&bold=true', alt: 'Iris - Wall Blossom', title: 'Iris' },
  luna: { url: 'https://ui-avatars.com/api/?name=Luna&background=EC4899&color=fff&size=256&bold=true', alt: 'Luna - Bullet Blast', title: 'Luna' },

  // New characters
  ryden: { url: wikiImg('/d/d6/Ryden.png/revision/latest'), alt: 'Ryden', title: 'Ryden' },
  ignis: { url: wikiImg('/b/bf/Ignis.png/revision/latest'), alt: 'Ignis', title: 'Ignis' },
  orion: { url: wikiImg('/0/0e/Orion.png/revision/latest'), alt: 'Orion', title: 'Orion' },

  // Default fallback
  default: {
    url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&q=80',
    alt: 'Free Fire character',
    title: 'Free Fire Character'
  }
};

// ============================================
// WEAPON IMAGES - Fandom Wiki URLs (proxied)
// ============================================
export const WEAPON_IMAGES = {
  // Assault Rifles
  ak: { url: wikiImg('/b/b7/AK.png/revision/latest'), alt: 'AK assault rifle', title: 'AK' },
  m4a1: { url: wikiImg('/a/a1/M4A1.png/revision/latest'), alt: 'M4A1 assault rifle', title: 'M4A1' },
  scar: { url: wikiImg('/1/16/SCAR.png/revision/latest'), alt: 'SCAR assault rifle', title: 'SCAR' },
  famas: { url: wikiImg('/1/1c/Famas.png/revision/latest'), alt: 'FAMAS assault rifle', title: 'FAMAS' },
  groza: { url: wikiImg('/a/a6/GROZA.png/revision/latest'), alt: 'Groza assault rifle', title: 'Groza' },
  aug: { url: wikiImg('/9/97/AUG.png/revision/latest'), alt: 'AUG assault rifle', title: 'AUG' },
  an94: { url: wikiImg('/3/3d/AN94.png/revision/latest'), alt: 'AN94 assault rifle', title: 'AN94' },
  xm8: { url: wikiImg('/3/3c/XM8.png/revision/latest'), alt: 'XM8 assault rifle', title: 'XM8' },
  parafal: { url: wikiImg('/c/c8/Parafal.png/revision/latest'), alt: 'Parafal assault rifle', title: 'Parafal' },
  m14: { url: wikiImg('/b/b4/M14.png/revision/latest'), alt: 'M14 marksman rifle', title: 'M14' },

  // SMGs
  mp40: { url: wikiImg('/1/1b/MP40.png/revision/latest'), alt: 'MP40 SMG', title: 'MP40' },
  ump: { url: wikiImg('/5/55/UMPSG.png/revision/latest'), alt: 'UMP SMG', title: 'UMP' },
  p90: { url: wikiImg('/c/c2/P90.png/revision/latest'), alt: 'P90 SMG', title: 'P90' },
  thompson: { url: wikiImg('/c/c5/Thompson.png/revision/latest'), alt: 'Thompson SMG', title: 'Thompson' },
  vss: { url: wikiImg('/f/fc/VSS.png/revision/latest'), alt: 'VSS SMG', title: 'VSS' },
  mac10: { url: wikiImg('/8/8b/MAC10.png/revision/latest'), alt: 'MAC10 SMG', title: 'MAC10' },
  mp5: { url: wikiImg('/d/d5/MP5.png/revision/latest'), alt: 'MP5 SMG', title: 'MP5' },
  vector: { url: wikiImg('/2/27/Vector.png/revision/latest'), alt: 'Vector SMG', title: 'Vector' },

  // Shotguns
  m1014: { url: wikiImg('/a/a0/M1014.png/revision/latest'), alt: 'M1014 shotgun', title: 'M1014' },
  m1887: { url: wikiImg('/4/4f/M1887.png/revision/latest'), alt: 'M1887 shotgun', title: 'M1887' },
  spas12: { url: wikiImg('/6/60/SPAS12.png/revision/latest'), alt: 'SPAS12 shotgun', title: 'SPAS12' },
  m1873: { url: wikiImg('/c/c7/M1873.png/revision/latest'), alt: 'M1873 shotgun', title: 'M1873' },

  // Snipers
  awm: { url: wikiImg('/c/ce/AWM.png/revision/latest'), alt: 'AWM sniper rifle', title: 'AWM' },
  kar98k: { url: wikiImg('/6/65/Kar98k.png/revision/latest'), alt: 'Kar98k sniper rifle', title: 'Kar98k' },
  m82b: { url: wikiImg('/0/06/M82B.png/revision/latest'), alt: 'M82B sniper rifle', title: 'M82B' },
  svd: { url: wikiImg('/3/33/SVD.png/revision/latest'), alt: 'SVD sniper rifle', title: 'SVD' },
  woodpecker: { url: wikiImg('/c/ce/Woodpecker.png/revision/latest'), alt: 'Woodpecker marksman', title: 'Woodpecker' },
  sks: { url: wikiImg('/f/fe/SKS.png/revision/latest'), alt: 'SKS marksman rifle', title: 'SKS' },

  // LMGs
  m249: { url: wikiImg('/9/96/M249.png/revision/latest'), alt: 'M249 LMG', title: 'M249' },
  gatling: { url: wikiImg('/7/7c/Gatling.png/revision/latest'), alt: 'Gatling gun', title: 'Gatling' },
  m60: { url: wikiImg('/2/2a/M60.png/revision/latest'), alt: 'M60 LMG', title: 'M60' },

  // Pistols
  desertEagle: { url: wikiImg('/b/bc/EAGLE.png/revision/latest'), alt: 'Desert Eagle pistol', title: 'Desert Eagle' },
  m500: { url: wikiImg('/1/17/M500.png/revision/latest'), alt: 'M500 pistol', title: 'M500' },
  g18: { url: wikiImg('/4/43/G18.png/revision/latest'), alt: 'G18 pistol', title: 'G18' },
  usp: { url: wikiImg('/6/6f/USP.png/revision/latest'), alt: 'USP pistol', title: 'USP' },
  handCannon: { url: wikiImg('/6/61/Hand_Cannon.png/revision/latest'), alt: 'Hand Cannon pistol', title: 'Hand Cannon' },

  // Melee
  katana: { url: wikiImg('/e/e9/Katana.png/revision/latest'), alt: 'Katana melee', title: 'Katana' },
  pan: { url: wikiImg('/c/ca/Pan.png/revision/latest'), alt: 'Pan melee', title: 'Pan' },
  bat: { url: wikiImg('/a/ad/Bat.png/revision/latest'), alt: 'Baseball bat melee', title: 'Bat' },
  parang: { url: wikiImg('/b/bd/Parang.png/revision/latest'), alt: 'Parang melee', title: 'Parang' },
  scythe: { url: wikiImg('/c/cd/Scythe.png/revision/latest'), alt: 'Scythe melee', title: 'Scythe' },

  // Launchers
  m79: { url: wikiImg('/b/b7/M79.png/revision/latest'), alt: 'M79 grenade launcher', title: 'M79' },
  rgs50: { url: wikiImg('/5/50/RGS50.png/revision/latest'), alt: 'RGS50 rocket launcher', title: 'RGS50' },
  mgl140: { url: wikiImg('/a/a1/Mgl140.png/revision/latest'), alt: 'MGL140 grenade launcher', title: 'MGL140' },

  // Special
  crossbow: { url: wikiImg('/7/79/Crossbow.png/revision/latest'), alt: 'Crossbow', title: 'Crossbow' },
  cg15: { url: wikiImg('/d/d8/CG15.png/revision/latest'), alt: 'CG15 laser gun', title: 'CG15' },
  treatmentGun: { url: wikiImg('/5/57/HealingGun.png/revision/latest'), alt: 'Treatment Gun', title: 'Treatment Gun' },
  heatGun: { url: wikiImg('/9/95/Heat_Gun.png/revision/latest'), alt: 'Heat Gun', title: 'Heat Gun' },
  trogon: { url: wikiImg('/6/6f/Trogon.png/revision/latest'), alt: 'Trogon shotgun', title: 'Trogon' },

  // Throwables
  grenade: { url: wikiImg('/f/fb/Grenade.png/revision/latest'), alt: 'Grenade', title: 'Grenade' },
  smokeGrenade: { url: wikiImg('/d/d5/Smoke_Grenade.png/revision/latest'), alt: 'Smoke Grenade', title: 'Smoke Grenade' },
  flashFreeze: { url: wikiImg('/7/7a/Flash_Freeze.png/revision/latest'), alt: 'Flash Freeze grenade', title: 'Flash Freeze' },
  glooMelter: { url: wikiImg('/e/e4/Gloo_Melter.png/revision/latest'), alt: 'Gloo Melter', title: 'Gloo Melter' },

  // Default fallback
  default: {
    url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=80',
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
