// Free Fire Weapons Data
// All weapons with stats and categories

import { getWeaponImage } from './images';

// ============================================
// WEAPON TYPES
// ============================================
export const WEAPON_TYPES = {
  ar: {
    id: 'ar',
    name: 'Assault Rifle',
    shortName: 'AR',
    description: 'Versatile mid-range weapons with balanced stats',
    color: '#3B82F6',
    icon: '🔫'
  },
  smg: {
    id: 'smg',
    name: 'SMG',
    shortName: 'SMG',
    description: 'Fast-firing close-range weapons',
    color: '#F59E0B',
    icon: '⚡'
  },
  shotgun: {
    id: 'shotgun',
    name: 'Shotgun',
    shortName: 'SG',
    description: 'Devastating close-range damage',
    color: '#EF4444',
    icon: '💥'
  },
  sniper: {
    id: 'sniper',
    name: 'Sniper Rifle',
    shortName: 'SR',
    description: 'Long-range precision weapons',
    color: '#8B5CF6',
    icon: '🎯'
  },
  lmg: {
    id: 'lmg',
    name: 'LMG',
    shortName: 'LMG',
    description: 'High-capacity suppressive fire weapons',
    color: '#6366F1',
    icon: '🔥'
  },
  pistol: {
    id: 'pistol',
    name: 'Pistol',
    shortName: 'Pistol',
    description: 'Sidearm backup weapons',
    color: '#10B981',
    icon: '🔫'
  },
  melee: {
    id: 'melee',
    name: 'Melee',
    shortName: 'Melee',
    description: 'Close-quarters combat weapons',
    color: '#EC4899',
    icon: '⚔️'
  },
  launcher: {
    id: 'launcher',
    name: 'Launcher',
    shortName: 'Launcher',
    description: 'Explosive area damage weapons',
    color: '#F97316',
    icon: '🚀'
  },
};

// ============================================
// ALL WEAPONS
// ============================================
export const WEAPONS = [
  // ========== ASSAULT RIFLES ==========
  {
    id: 'ak',
    name: 'AK',
    type: 'ar',
    stats: {
      damage: 61,
      range: 72,
      magazine: 30,
      rateOfFire: 56,
      accuracy: 41,
      reloadSpeed: 41,
      mobility: 62,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Foregrip'],
    description: 'High damage AR with slower fire rate. Best for tap-firing at medium range.',
    recommended: true,
    tags: ['high-damage', 'mid-range', 'popular'],
  },
  {
    id: 'm4a1',
    name: 'M4A1',
    type: 'ar',
    stats: {
      damage: 54,
      range: 68,
      magazine: 30,
      rateOfFire: 57,
      accuracy: 55,
      reloadSpeed: 48,
      mobility: 74,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Foregrip', 'Scope'],
    description: 'Balanced AR with good accuracy. Great for beginners and versatile in all ranges.',
    recommended: true,
    tags: ['balanced', 'beginner-friendly', 'versatile'],
  },
  {
    id: 'scar',
    name: 'SCAR',
    type: 'ar',
    stats: {
      damage: 53,
      range: 60,
      magazine: 30,
      rateOfFire: 61,
      accuracy: 42,
      reloadSpeed: 41,
      mobility: 65,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Foregrip'],
    description: 'Fast-firing AR with controllable recoil. Good for aggressive playstyles.',
    recommended: true,
    tags: ['fast-fire', 'aggressive', 'popular'],
  },
  {
    id: 'famas',
    name: 'FAMAS',
    type: 'ar',
    stats: {
      damage: 53,
      range: 55,
      magazine: 25,
      rateOfFire: 67,
      accuracy: 46,
      reloadSpeed: 48,
      mobility: 67,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle'],
    description: 'Burst-fire AR with high rate of fire. Deadly accurate in bursts.',
    tags: ['burst', 'high-rof', 'skill-based'],
  },
  {
    id: 'groza',
    name: 'Groza',
    type: 'ar',
    stats: {
      damage: 61,
      range: 54,
      magazine: 30,
      rateOfFire: 61,
      accuracy: 50,
      reloadSpeed: 48,
      mobility: 62,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine'],
    description: 'Airdrop exclusive AR with high damage and fire rate. One of the best ARs.',
    recommended: true,
    tags: ['airdrop', 'high-damage', 'fast-fire', 'rare'],
  },
  {
    id: 'aug',
    name: 'AUG',
    type: 'ar',
    stats: {
      damage: 52,
      range: 69,
      magazine: 35,
      rateOfFire: 63,
      accuracy: 52,
      reloadSpeed: 41,
      mobility: 62,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Foregrip'],
    description: 'Accurate AR with built-in scope. Great for mid-long range engagements.',
    tags: ['accurate', 'scoped', 'mid-range'],
  },
  {
    id: 'an94',
    name: 'AN94',
    type: 'ar',
    stats: {
      damage: 60,
      range: 66,
      magazine: 30,
      rateOfFire: 58,
      accuracy: 47,
      reloadSpeed: 41,
      mobility: 62,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Foregrip'],
    description: 'High damage AR with first two shots firing faster. Rewards skilled players.',
    tags: ['high-damage', 'skill-based', 'burst-mechanic'],
  },
  {
    id: 'xm8',
    name: 'XM8',
    type: 'ar',
    stats: {
      damage: 48,
      range: 78,
      magazine: 30,
      rateOfFire: 57,
      accuracy: 57,
      reloadSpeed: 48,
      mobility: 67,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle'],
    description: 'Long range AR with built-in 2x scope. Best AR for range.',
    tags: ['long-range', 'scoped', 'accurate'],
  },
  {
    id: 'parafal',
    name: 'Parafal',
    type: 'ar',
    stats: {
      damage: 57,
      range: 70,
      magazine: 20,
      rateOfFire: 50,
      accuracy: 47,
      reloadSpeed: 48,
      mobility: 62,
      armorPenetration: 10,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Foregrip'],
    description: 'Armor-piercing AR with high damage per shot. Low mag but hits hard.',
    tags: ['armor-pen', 'high-damage', 'slow-fire'],
  },

  // ========== SMGs ==========
  {
    id: 'mp40',
    name: 'MP40',
    type: 'smg',
    stats: {
      damage: 48,
      range: 22,
      magazine: 20,
      rateOfFire: 83,
      accuracy: 17,
      reloadSpeed: 48,
      mobility: 79,
      armorPenetration: 0,
    },
    ammoType: 'SMG',
    attachments: ['Magazine', 'Foregrip'],
    description: 'Fastest firing SMG. Deadly at close range but burns through ammo.',
    recommended: true,
    tags: ['fast-fire', 'close-range', 'popular', 'rusher'],
  },
  {
    id: 'ump',
    name: 'UMP',
    type: 'smg',
    stats: {
      damage: 39,
      range: 37,
      magazine: 30,
      rateOfFire: 67,
      accuracy: 40,
      reloadSpeed: 55,
      mobility: 74,
      armorPenetration: 0,
    },
    ammoType: 'SMG',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Foregrip'],
    description: 'Balanced SMG with good accuracy. Best SMG for versatility.',
    recommended: true,
    tags: ['balanced', 'accurate', 'versatile'],
  },
  {
    id: 'p90',
    name: 'P90',
    type: 'smg',
    stats: {
      damage: 47,
      range: 28,
      magazine: 50,
      rateOfFire: 73,
      accuracy: 14,
      reloadSpeed: 41,
      mobility: 71,
      armorPenetration: 0,
    },
    ammoType: 'SMG',
    attachments: ['Muzzle', 'Scope'],
    description: 'High capacity SMG with 50 round mag. Great for extended fights.',
    tags: ['high-capacity', 'spray', 'extended-fights'],
  },
  {
    id: 'thompson',
    name: 'Thompson',
    type: 'smg',
    stats: {
      damage: 50,
      range: 26,
      magazine: 40,
      rateOfFire: 67,
      accuracy: 25,
      reloadSpeed: 55,
      mobility: 67,
      armorPenetration: 0,
    },
    ammoType: 'SMG',
    attachments: ['Magazine', 'Foregrip'],
    description: 'High damage SMG with large magazine. Classic gangster vibes.',
    tags: ['high-damage', 'large-mag', 'classic'],
  },
  {
    id: 'vss',
    name: 'VSS',
    type: 'smg',
    stats: {
      damage: 43,
      range: 63,
      magazine: 15,
      rateOfFire: 67,
      accuracy: 68,
      reloadSpeed: 55,
      mobility: 74,
      armorPenetration: 0,
    },
    ammoType: 'SMG',
    attachments: ['Magazine'],
    description: 'Silenced SMG with built-in 4x scope. Stealthy mid-range option.',
    tags: ['silenced', 'scoped', 'stealth', 'unique'],
  },
  {
    id: 'mac10',
    name: 'MAC10',
    type: 'smg',
    stats: {
      damage: 39,
      range: 20,
      magazine: 32,
      rateOfFire: 80,
      accuracy: 10,
      reloadSpeed: 55,
      mobility: 79,
      armorPenetration: 0,
    },
    ammoType: 'SMG',
    attachments: ['Magazine', 'Muzzle'],
    description: 'Extremely fast firing SMG. Pure spray and pray.',
    tags: ['fast-fire', 'spray', 'close-range'],
  },

  // ========== SHOTGUNS ==========
  {
    id: 'm1014',
    name: 'M1014',
    type: 'shotgun',
    stats: {
      damage: 94,
      range: 15,
      magazine: 6,
      rateOfFire: 45,
      accuracy: 14,
      reloadSpeed: 55,
      mobility: 67,
      armorPenetration: 0,
    },
    ammoType: 'SG',
    attachments: ['Magazine', 'Muzzle', 'Stock'],
    description: 'Semi-auto shotgun with good fire rate. Best all-around shotgun.',
    recommended: true,
    tags: ['semi-auto', 'versatile', 'popular'],
  },
  {
    id: 'm1887',
    name: 'M1887',
    type: 'shotgun',
    stats: {
      damage: 100,
      range: 18,
      magazine: 5,
      rateOfFire: 36,
      accuracy: 17,
      reloadSpeed: 55,
      mobility: 67,
      armorPenetration: 0,
    },
    ammoType: 'SG',
    attachments: ['Muzzle'],
    description: 'Highest damage shotgun. One-shot potential at close range.',
    recommended: true,
    tags: ['high-damage', 'one-shot', 'lever-action'],
  },
  {
    id: 'spas12',
    name: 'SPAS12',
    type: 'shotgun',
    stats: {
      damage: 97,
      range: 12,
      magazine: 5,
      rateOfFire: 33,
      accuracy: 11,
      reloadSpeed: 48,
      mobility: 65,
      armorPenetration: 0,
    },
    ammoType: 'SG',
    attachments: ['Magazine', 'Muzzle'],
    description: 'Pump-action shotgun with high damage. Slow but deadly.',
    tags: ['pump-action', 'high-damage', 'slow'],
  },

  // ========== SNIPERS ==========
  {
    id: 'awm',
    name: 'AWM',
    type: 'sniper',
    stats: {
      damage: 90,
      range: 91,
      magazine: 5,
      rateOfFire: 27,
      accuracy: 90,
      reloadSpeed: 34,
      mobility: 44,
      armorPenetration: 0,
    },
    ammoType: 'Sniper',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Scope'],
    description: 'Most powerful sniper rifle. One-shot headshot at any range.',
    recommended: true,
    tags: ['airdrop', 'one-shot', 'long-range', 'powerful'],
  },
  {
    id: 'kar98k',
    name: 'Kar98k',
    type: 'sniper',
    stats: {
      damage: 90,
      range: 84,
      magazine: 5,
      rateOfFire: 27,
      accuracy: 90,
      reloadSpeed: 41,
      mobility: 50,
      armorPenetration: 0,
    },
    ammoType: 'Sniper',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Scope'],
    description: 'Classic bolt-action sniper. High damage and accuracy.',
    recommended: true,
    tags: ['bolt-action', 'high-damage', 'classic'],
  },
  {
    id: 'm82b',
    name: 'M82B',
    type: 'sniper',
    stats: {
      damage: 90,
      range: 85,
      magazine: 8,
      rateOfFire: 33,
      accuracy: 90,
      reloadSpeed: 41,
      mobility: 38,
      armorPenetration: 0,
    },
    ammoType: 'Sniper',
    attachments: ['Magazine', 'Scope'],
    description: 'Anti-materiel rifle. Can shoot through gloo walls!',
    tags: ['anti-gloo', 'penetration', 'powerful', 'unique'],
  },
  {
    id: 'svd',
    name: 'SVD',
    type: 'sniper',
    stats: {
      damage: 89,
      range: 80,
      magazine: 10,
      rateOfFire: 40,
      accuracy: 71,
      reloadSpeed: 41,
      mobility: 53,
      armorPenetration: 0,
    },
    ammoType: 'Sniper',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Scope'],
    description: 'Semi-auto sniper with fast follow-up shots. DMR style.',
    tags: ['semi-auto', 'dmr', 'fast-follow-up'],
  },
  {
    id: 'woodpecker',
    name: 'Woodpecker',
    type: 'sniper',
    stats: {
      damage: 85,
      range: 77,
      magazine: 10,
      rateOfFire: 43,
      accuracy: 65,
      reloadSpeed: 41,
      mobility: 59,
      armorPenetration: 75,
    },
    ammoType: 'AR',
    attachments: ['Magazine', 'Muzzle', 'Stock', 'Scope'],
    description: 'Marksman rifle with high armor penetration. Uses AR ammo.',
    recommended: true,
    tags: ['marksman', 'armor-pen', 'ar-ammo', 'versatile'],
  },

  // ========== LMGs ==========
  {
    id: 'm249',
    name: 'M249',
    type: 'lmg',
    stats: {
      damage: 57,
      range: 75,
      magazine: 100,
      rateOfFire: 67,
      accuracy: 33,
      reloadSpeed: 20,
      mobility: 44,
      armorPenetration: 0,
    },
    ammoType: 'AR',
    attachments: ['Muzzle', 'Scope'],
    description: 'High capacity LMG for suppressive fire. 100 rounds of mayhem.',
    tags: ['high-capacity', 'suppressive', 'slow-reload'],
  },
  {
    id: 'gatling',
    name: 'Gatling',
    type: 'lmg',
    stats: {
      damage: 56,
      range: 68,
      magazine: 1200,
      rateOfFire: 73,
      accuracy: 27,
      reloadSpeed: 0,
      mobility: 35,
      armorPenetration: 0,
    },
    ammoType: 'None',
    attachments: [],
    description: 'Minigun with infinite ammo. Cannot move while firing.',
    tags: ['minigun', 'infinite-ammo', 'stationary', 'airdrop'],
  },

  // ========== PISTOLS ==========
  {
    id: 'desertEagle',
    name: 'Desert Eagle',
    type: 'pistol',
    stats: {
      damage: 90,
      range: 45,
      magazine: 7,
      rateOfFire: 36,
      accuracy: 59,
      reloadSpeed: 62,
      mobility: 83,
      armorPenetration: 0,
    },
    ammoType: 'Pistol',
    attachments: ['Magazine', 'Muzzle', 'Scope'],
    description: 'Powerful hand cannon. Highest damage pistol.',
    recommended: true,
    tags: ['high-damage', 'powerful', 'skill-based'],
  },
  {
    id: 'm500',
    name: 'M500',
    type: 'pistol',
    stats: {
      damage: 89,
      range: 38,
      magazine: 5,
      rateOfFire: 25,
      accuracy: 54,
      reloadSpeed: 55,
      mobility: 83,
      armorPenetration: 0,
    },
    ammoType: 'Pistol',
    attachments: ['Muzzle'],
    description: 'Revolver with high damage. Slow but deadly.',
    tags: ['revolver', 'high-damage', 'slow'],
  },
  {
    id: 'g18',
    name: 'G18',
    type: 'pistol',
    stats: {
      damage: 35,
      range: 20,
      magazine: 15,
      rateOfFire: 80,
      accuracy: 20,
      reloadSpeed: 69,
      mobility: 86,
      armorPenetration: 0,
    },
    ammoType: 'Pistol',
    attachments: ['Magazine', 'Muzzle'],
    description: 'Full-auto pistol. Fast firing backup option.',
    tags: ['auto', 'fast-fire', 'backup'],
  },
  {
    id: 'usp',
    name: 'USP',
    type: 'pistol',
    stats: {
      damage: 48,
      range: 30,
      magazine: 12,
      rateOfFire: 50,
      accuracy: 40,
      reloadSpeed: 69,
      mobility: 86,
      armorPenetration: 0,
    },
    ammoType: 'Pistol',
    attachments: ['Magazine', 'Muzzle', 'Scope'],
    description: 'Standard sidearm with balanced stats. Reliable backup.',
    tags: ['balanced', 'reliable', 'backup'],
  },

  // ========== MELEE ==========
  {
    id: 'katana',
    name: 'Katana',
    type: 'melee',
    stats: {
      damage: 50,
      range: 2,
      magazine: null,
      rateOfFire: 50,
      accuracy: null,
      reloadSpeed: null,
      mobility: 90,
      armorPenetration: 0,
    },
    ammoType: 'None',
    attachments: [],
    description: 'Sword with good damage and range. Popular melee choice.',
    recommended: true,
    tags: ['sword', 'popular', 'style'],
  },
  {
    id: 'pan',
    name: 'Pan',
    type: 'melee',
    stats: {
      damage: 40,
      range: 1,
      magazine: null,
      rateOfFire: 50,
      accuracy: null,
      reloadSpeed: null,
      mobility: 90,
      armorPenetration: 0,
    },
    ammoType: 'None',
    attachments: [],
    description: 'Frying pan. Blocks bullets when on your back!',
    tags: ['pan', 'blocks-bullets', 'utility', 'meme'],
  },
  {
    id: 'bat',
    name: 'Bat',
    type: 'melee',
    stats: {
      damage: 45,
      range: 2,
      magazine: null,
      rateOfFire: 50,
      accuracy: null,
      reloadSpeed: null,
      mobility: 90,
      armorPenetration: 0,
    },
    ammoType: 'None',
    attachments: [],
    description: 'Baseball bat with decent damage and reach.',
    tags: ['bat', 'reach', 'classic'],
  },

  // ========== LAUNCHERS ==========
  {
    id: 'm79',
    name: 'M79',
    type: 'launcher',
    stats: {
      damage: 100,
      range: 50,
      magazine: 1,
      rateOfFire: 15,
      accuracy: 30,
      reloadSpeed: 34,
      mobility: 67,
      armorPenetration: 0,
    },
    ammoType: 'Launcher',
    attachments: [],
    description: 'Grenade launcher. Single shot explosive damage.',
    tags: ['explosive', 'single-shot', 'area-damage'],
  },
  {
    id: 'rgs50',
    name: 'RGS50',
    type: 'launcher',
    stats: {
      damage: 100,
      range: 70,
      magazine: 1,
      rateOfFire: 20,
      accuracy: 40,
      reloadSpeed: 48,
      mobility: 50,
      armorPenetration: 0,
    },
    ammoType: 'Launcher',
    attachments: ['Scope'],
    description: 'Rocket launcher. High damage explosive with scope.',
    tags: ['rocket', 'explosive', 'scoped', 'powerful'],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all weapons
 */
export function getAllWeapons() {
  return WEAPONS.map(weapon => ({
    ...weapon,
    image: getWeaponImage(weapon.id),
    typeInfo: WEAPON_TYPES[weapon.type],
  }));
}

/**
 * Get weapon by ID
 */
export function getWeaponById(id) {
  const weapon = WEAPONS.find(w => w.id === id);
  if (!weapon) return null;
  return {
    ...weapon,
    image: getWeaponImage(weapon.id),
    typeInfo: WEAPON_TYPES[weapon.type],
  };
}

/**
 * Get weapons by type
 */
export function getWeaponsByType(typeId) {
  return WEAPONS
    .filter(w => w.type === typeId)
    .map(weapon => ({
      ...weapon,
      image: getWeaponImage(weapon.id),
      typeInfo: WEAPON_TYPES[weapon.type],
    }));
}

/**
 * Get recommended weapons
 */
export function getRecommendedWeapons() {
  return WEAPONS
    .filter(w => w.recommended)
    .map(weapon => ({
      ...weapon,
      image: getWeaponImage(weapon.id),
      typeInfo: WEAPON_TYPES[weapon.type],
    }));
}

/**
 * Get weapons sorted by stat
 */
export function getWeaponsBystat(statName, ascending = false) {
  return [...WEAPONS]
    .filter(w => w.stats[statName] !== null)
    .sort((a, b) => ascending
      ? a.stats[statName] - b.stats[statName]
      : b.stats[statName] - a.stats[statName]
    )
    .map(weapon => ({
      ...weapon,
      image: getWeaponImage(weapon.id),
      typeInfo: WEAPON_TYPES[weapon.type],
    }));
}

/**
 * Search weapons by tag
 */
export function getWeaponsByTag(tag) {
  return WEAPONS
    .filter(w => w.tags.includes(tag.toLowerCase()))
    .map(weapon => ({
      ...weapon,
      image: getWeaponImage(weapon.id),
      typeInfo: WEAPON_TYPES[weapon.type],
    }));
}

export default {
  WEAPONS,
  WEAPON_TYPES,
  getAllWeapons,
  getWeaponById,
  getWeaponsByType,
  getRecommendedWeapons,
  getWeaponsBystat,
  getWeaponsByTag,
};
