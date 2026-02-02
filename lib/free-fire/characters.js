// Free Fire Characters Data
// All characters with abilities, roles, and stats

import { getCharacterImage } from './images';

// ============================================
// ROLE DEFINITIONS
// ============================================
export const ROLES = {
  rusher: {
    id: 'rusher',
    name: 'Rusher',
    description: 'Aggressive close-combat specialists who excel at pushing enemies',
    color: '#EF4444',
    icon: '⚔️'
  },
  support: {
    id: 'support',
    name: 'Support',
    description: 'Team players who heal, buff allies, or provide utility',
    color: '#10B981',
    icon: '💚'
  },
  sniper: {
    id: 'sniper',
    name: 'Sniper',
    description: 'Long-range specialists with accuracy and stealth abilities',
    color: '#6366F1',
    icon: '🎯'
  },
  scout: {
    id: 'scout',
    name: 'Scout',
    description: 'Information gatherers who reveal enemy positions',
    color: '#F59E0B',
    icon: '👁️'
  },
  tank: {
    id: 'tank',
    name: 'Tank',
    description: 'Durable characters who can absorb damage and survive longer',
    color: '#8B5CF6',
    icon: '🛡️'
  },
  utility: {
    id: 'utility',
    name: 'Utility',
    description: 'Versatile characters with unique situational abilities',
    color: '#EC4899',
    icon: '🔧'
  },
};

// ============================================
// ABILITY TYPES
// ============================================
export const ABILITY_TYPES = {
  active: {
    id: 'active',
    name: 'Active',
    description: 'Must be manually activated, has cooldown',
    color: '#3B82F6'
  },
  passive: {
    id: 'passive',
    name: 'Passive',
    description: 'Always active, no cooldown required',
    color: '#10B981'
  },
};

// ============================================
// ALL CHARACTERS
// ============================================
export const CHARACTERS = [
  // ========== RUSHERS ==========
  {
    id: 'alok',
    name: 'DJ Alok',
    role: 'rusher',
    abilityType: 'active',
    ability: {
      name: 'Drop the Beat',
      description: 'Creates a 5m aura that increases movement speed by 10-15% and restores 5 HP/second for 5-10 seconds.',
      cooldown: 45,
      maxLevel: 6,
      stats: {
        speedBoost: '10-15%',
        healing: '5 HP/s',
        duration: '5-10s',
        radius: '5m'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store / Events',
    recommended: true,
    tags: ['meta', 'healing', 'speed', 'team'],
  },
  {
    id: 'chrono',
    name: 'Chrono',
    role: 'rusher',
    abilityType: 'active',
    ability: {
      name: 'Time Turner',
      description: 'Creates a force field that blocks 600 damage. Can shoot from inside. Movement speed +15%.',
      cooldown: 120,
      maxLevel: 6,
      stats: {
        damageBlocked: '600',
        speedBoost: '15%',
        duration: '4-9s'
      }
    },
    gender: 'Male',
    releaseYear: 2020,
    obtainMethod: 'Store / Events',
    collaboration: 'Cristiano Ronaldo',
    recommended: true,
    tags: ['meta', 'shield', 'aggressive', 'collab'],
  },
  {
    id: 'tatsuya',
    name: 'Tatsuya',
    role: 'rusher',
    abilityType: 'active',
    ability: {
      name: 'Rebel Rush',
      description: 'Dash forward rapidly. Can be used twice before cooldown.',
      cooldown: 48,
      maxLevel: 6,
      stats: {
        charges: '2',
        distance: 'Medium'
      }
    },
    gender: 'Male',
    releaseYear: 2022,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['mobility', 'flank', 'aggressive'],
  },
  {
    id: 'hayato',
    name: 'Hayato',
    role: 'rusher',
    abilityType: 'passive',
    ability: {
      name: 'Bushido',
      description: 'For every 10% HP lost, armor penetration increases by 7.5-10%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        armorPenPerStack: '7.5-10%',
        trigger: 'Every 10% HP lost'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['aggressive', 'low-hp', 'damage'],
  },
  {
    id: 'jota',
    name: 'Jota',
    role: 'rusher',
    abilityType: 'passive',
    ability: {
      name: 'Sustained Raids',
      description: 'Gun kills with SMG/Shotgun restore 25-40 HP instantly.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        hpRestored: '25-40 HP',
        weapons: 'SMG, Shotgun'
      }
    },
    gender: 'Male',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['sustain', 'aggressive', 'smg', 'shotgun'],
  },
  {
    id: 'moco',
    name: 'Moco',
    role: 'scout',
    abilityType: 'passive',
    ability: {
      name: 'Hacker\'s Eye',
      description: 'Tags enemies shot for 2-5 seconds, making them visible to the whole team.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        tagDuration: '2-5s',
        teamVisible: 'Yes'
      }
    },
    gender: 'Female',
    releaseYear: 2018,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['info', 'team', 'meta', 'wallhack'],
  },
  {
    id: 'kla',
    name: 'Kla',
    role: 'rusher',
    abilityType: 'passive',
    ability: {
      name: 'Muay Thai',
      description: 'Increases fist damage by 100-400%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        fistDamage: '+100-400%'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store',
    tags: ['melee', 'fun', 'early-game'],
  },
  {
    id: 'xayne',
    name: 'Xayne',
    role: 'rusher',
    abilityType: 'active',
    ability: {
      name: 'Xtreme Encounter',
      description: 'Gains 80 temporary HP and deals 40-100% more damage to gloo walls and shields.',
      cooldown: 150,
      maxLevel: 6,
      stats: {
        tempHP: '80',
        glooWallDamage: '+40-100%',
        duration: '10s'
      }
    },
    gender: 'Female',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['anti-gloo', 'aggressive', 'push'],
  },
  {
    id: 'skyler',
    name: 'Skyler',
    role: 'rusher',
    abilityType: 'active',
    ability: {
      name: 'Riptide Rhythm',
      description: 'Unleashes sonic wave destroying 5 gloo walls within 100m. Using gloo wall restores HP.',
      cooldown: 60,
      maxLevel: 6,
      stats: {
        glooWallsDestroyed: '5',
        range: '100m',
        hpPerGloo: '4-9 HP'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['anti-gloo', 'meta', 'push'],
  },
  {
    id: 'wukong',
    name: 'Wukong',
    role: 'rusher',
    abilityType: 'active',
    ability: {
      name: 'Camouflage',
      description: 'Transforms into a bush. Transformation ends when attacking or taking damage.',
      cooldown: 200,
      maxLevel: 6,
      stats: {
        duration: '10-15s'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store',
    tags: ['stealth', 'ambush', 'fun'],
  },

  // ========== SUPPORT ==========
  {
    id: 'dimitri',
    name: 'Dimitri',
    role: 'support',
    abilityType: 'active',
    ability: {
      name: 'Healing Heartbeat',
      description: 'Creates a 3.5m healing zone. Users inside recover 3 HP/second and can self-recover when downed.',
      cooldown: 60,
      maxLevel: 6,
      stats: {
        healing: '3 HP/s',
        radius: '3.5m',
        duration: '10-15s',
        selfRevive: 'Yes'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    collaboration: 'Dimitri Vegas',
    recommended: true,
    tags: ['healing', 'team', 'revive', 'collab'],
  },
  {
    id: 'kapella',
    name: 'Kapella',
    role: 'support',
    abilityType: 'passive',
    ability: {
      name: 'Healing Song',
      description: 'Increases healing items effect by 10-20%. Reduces ally HP loss when downed by 20-30%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        healingBoost: '+10-20%',
        downedHPLoss: '-20-30%'
      }
    },
    gender: 'Female',
    releaseYear: 2020,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['healing', 'team', 'passive'],
  },
  {
    id: 'olivia',
    name: 'Olivia',
    role: 'support',
    abilityType: 'passive',
    ability: {
      name: 'Healing Touch',
      description: 'When reviving allies, they gain 6-10 extra HP.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        extraHP: '6-10 HP'
      }
    },
    gender: 'Female',
    releaseYear: 2017,
    obtainMethod: 'Free (Tutorial)',
    tags: ['revive', 'beginner', 'free'],
  },
  {
    id: 'k',
    name: 'K',
    role: 'support',
    abilityType: 'active',
    ability: {
      name: 'Master of All',
      description: 'Max EP +50. Psychology mode: recover 2-3 EP every 3s. Jiujitsu mode: allies in 6m get +500% EP conversion.',
      cooldown: 3,
      maxLevel: 6,
      stats: {
        maxEP: '+50',
        psychologyEP: '2-3 EP/3s',
        jiujitsuBoost: '+500% conversion',
        radius: '6m'
      }
    },
    gender: 'Male',
    releaseYear: 2020,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['EP', 'versatile', 'team', 'meta'],
  },
  {
    id: 'thiva',
    name: 'Thiva',
    role: 'support',
    abilityType: 'passive',
    ability: {
      name: 'Vital Vibes',
      description: 'Rescue speed +5-20%. Successfully rescued allies recover 15-40 HP.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        rescueSpeed: '+5-20%',
        rescuedHP: '15-40 HP'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['revive', 'team', 'clutch'],
  },
  {
    id: 'notora',
    name: 'Notora',
    role: 'support',
    abilityType: 'passive',
    ability: {
      name: 'Racer\'s Blessing',
      description: 'While driving, all passengers recover 3-5 HP every 4.5-4 seconds.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        healing: '3-5 HP',
        interval: '4.5-4s'
      }
    },
    gender: 'Female',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['vehicle', 'team', 'niche'],
  },
  {
    id: 'steffie',
    name: 'Steffie',
    role: 'support',
    abilityType: 'active',
    ability: {
      name: 'Painted Refuge',
      description: 'Creates graffiti that reduces explosive damage by 15-25% and bullet damage by 5% for allies.',
      cooldown: 45,
      maxLevel: 6,
      stats: {
        explosiveDmgReduction: '-15-25%',
        bulletDmgReduction: '-5%',
        duration: '10s'
      }
    },
    gender: 'Female',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['defensive', 'team', 'zone'],
  },

  // ========== SCOUTS ==========
  {
    id: 'clu',
    name: 'Clu',
    role: 'scout',
    abilityType: 'active',
    ability: {
      name: 'Tracing Steps',
      description: 'Reveals enemies within 30-50m who are not in prone or squat position.',
      cooldown: 50,
      maxLevel: 6,
      stats: {
        range: '30-50m',
        duration: '5-7.5s',
        restriction: 'Standing enemies only'
      }
    },
    gender: 'Female',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['info', 'reveal', 'tactical'],
  },
  {
    id: 'shirou',
    name: 'Shirou',
    role: 'scout',
    abilityType: 'passive',
    ability: {
      name: 'Damage Delivered',
      description: 'When hit within 80m, attacker is marked for 3-6s. First shot on marked enemy has 50-100% armor pen.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        range: '80m',
        markDuration: '3-6s',
        armorPen: '50-100%'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['counter', 'info', 'revenge', 'meta'],
  },
  {
    id: 'otho',
    name: 'Otho',
    role: 'scout',
    abilityType: 'passive',
    ability: {
      name: 'Memory Mist',
      description: 'After killing enemy, reveals other enemies within 25-50m of the dead enemy for 2-4s.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        revealRange: '25-50m',
        duration: '2-4s'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['info', 'chain-kill', 'aggressive'],
  },
  {
    id: 'homer',
    name: 'Homer',
    role: 'scout',
    abilityType: 'active',
    ability: {
      name: 'Drone Shockwave',
      description: 'Releases a drone that flies toward nearest enemy and explodes, dealing damage and slowing.',
      cooldown: 90,
      maxLevel: 6,
      stats: {
        damage: '25-50',
        slowEffect: 'Yes',
        range: '100m'
      }
    },
    gender: 'Male',
    releaseYear: 2022,
    obtainMethod: 'Store',
    tags: ['drone', 'damage', 'slow', 'reveal'],
  },

  // ========== SNIPERS ==========
  {
    id: 'laura',
    name: 'Laura',
    role: 'sniper',
    abilityType: 'passive',
    ability: {
      name: 'Sharp Shooter',
      description: 'Accuracy increases by 10-30 points when scoped in.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        accuracyBoost: '+10-30'
      }
    },
    gender: 'Female',
    releaseYear: 2018,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['accuracy', 'sniper', 'AR', 'meta'],
  },
  {
    id: 'rafael',
    name: 'Rafael',
    role: 'sniper',
    abilityType: 'passive',
    ability: {
      name: 'Dead Silent',
      description: 'Sniper rifles and marksman rifles are silenced. Enemies downed by you lose 20-45% more HP when downed.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        silenced: 'SR, Marksman',
        downedHPLoss: '+20-45%'
      }
    },
    gender: 'Male',
    releaseYear: 2017,
    obtainMethod: 'Store',
    tags: ['stealth', 'sniper', 'finish'],
  },
  {
    id: 'maro',
    name: 'Maro',
    role: 'sniper',
    abilityType: 'passive',
    ability: {
      name: 'Falcon Fervor',
      description: 'Damage increases with distance up to 5-25%. Damage to marked enemies +1-3.5%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        distanceDmg: '+5-25%',
        markedDmg: '+1-3.5%'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['long-range', 'sniper', 'damage'],
  },

  // ========== TANKS ==========
  {
    id: 'andrew',
    name: 'Andrew',
    role: 'tank',
    abilityType: 'passive',
    ability: {
      name: 'Armor Specialist',
      description: 'Vest durability loss reduced by 2-12%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        vestDurability: '-2-12% loss'
      }
    },
    gender: 'Male',
    releaseYear: 2017,
    obtainMethod: 'Free (Default)',
    tags: ['armor', 'beginner', 'free', 'survival'],
  },
  {
    id: 'antonio',
    name: 'Antonio',
    role: 'tank',
    abilityType: 'passive',
    ability: {
      name: 'Gangster\'s Spirit',
      description: 'Gains 10-35 extra HP at the start of each round.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        bonusHP: '10-35'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store',
    tags: ['HP', 'clash-squad', 'early'],
  },
  {
    id: 'kenta',
    name: 'Kenta',
    role: 'tank',
    abilityType: 'active',
    ability: {
      name: 'Swordsman\'s Wrath',
      description: 'Creates a frontal shield reducing damage from front by 50% when not moving. When moving, -5-20% from front.',
      cooldown: 50,
      maxLevel: 6,
      stats: {
        stationaryReduction: '-50%',
        movingReduction: '-5-20%',
        duration: '4-8s'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['defensive', 'tank', 'frontal'],
  },
  {
    id: 'a124',
    name: 'A124',
    role: 'tank',
    abilityType: 'active',
    ability: {
      name: 'Thrill of Battle',
      description: 'Converts 25-50 EP to HP instantly.',
      cooldown: 60,
      maxLevel: 6,
      stats: {
        conversion: '25-50 EP → HP'
      }
    },
    gender: 'Female',
    releaseYear: 2019,
    obtainMethod: 'Store',
    recommended: true,
    tags: ['healing', 'EP', 'sustain'],
  },
  {
    id: 'luqueta',
    name: 'Luqueta',
    role: 'tank',
    abilityType: 'passive',
    ability: {
      name: 'Hat Trick',
      description: 'Each kill increases max HP by 8-18, up to 35 HP.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        hpPerKill: '+8-18',
        maxBonus: '35 HP'
      }
    },
    gender: 'Male',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['HP', 'snowball', 'aggressive'],
  },
  {
    id: 'shani',
    name: 'Shani',
    role: 'tank',
    abilityType: 'passive',
    ability: {
      name: 'Gear Recycle',
      description: 'Each kill recovers 10-30 armor durability.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        armorRecovery: '10-30 per kill'
      }
    },
    gender: 'Female',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['armor', 'sustain', 'aggressive'],
  },
  {
    id: 'ford',
    name: 'Ford',
    role: 'tank',
    abilityType: 'passive',
    ability: {
      name: 'Iron Will',
      description: 'Reduces damage taken from the play zone by 4-24%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        zoneReduction: '-4-24%'
      }
    },
    gender: 'Male',
    releaseYear: 2017,
    obtainMethod: 'Free (Default)',
    tags: ['zone', 'survival', 'free', 'niche'],
  },

  // ========== UTILITY ==========
  {
    id: 'kelly',
    name: 'Kelly',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Dash',
      description: 'Increases sprinting speed by 1-6%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        speedBoost: '+1-6%'
      }
    },
    gender: 'Female',
    releaseYear: 2017,
    obtainMethod: 'Free (Default)',
    tags: ['speed', 'rotation', 'free', 'beginner'],
  },
  {
    id: 'joseph',
    name: 'Joseph',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Nutty Movement',
      description: 'When taking damage, movement speed increases by 10-20% for 1 second.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        speedBoost: '+10-20%',
        duration: '1s'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store',
    tags: ['escape', 'reactive', 'survival'],
  },
  {
    id: 'dasha',
    name: 'Dasha',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Partying On',
      description: 'Fall damage reduced by 30-50%. Reduces recoil buildup by 6-10% and max recoil by 6-10%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        fallDamage: '-30-50%',
        recoilBuildup: '-6-10%',
        maxRecoil: '-6-10%'
      }
    },
    gender: 'Female',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['recoil', 'movement', 'versatile'],
  },
  {
    id: 'maxim',
    name: 'Maxim',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Gluttony',
      description: 'Reduces medkit and mushroom consumption time by 2-15%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        consumeSpeed: '+2-15%'
      }
    },
    gender: 'Male',
    releaseYear: 2017,
    obtainMethod: 'Free (Default)',
    tags: ['healing', 'fast', 'free'],
  },
  {
    id: 'caroline',
    name: 'Caroline',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Agility',
      description: 'Movement speed increases by 3-8% while holding a shotgun.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        speedBoost: '+3-8%',
        requirement: 'Holding shotgun'
      }
    },
    gender: 'Female',
    releaseYear: 2018,
    obtainMethod: 'Store',
    tags: ['shotgun', 'speed', 'niche'],
  },
  {
    id: 'nikita',
    name: 'Nikita',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Firearms Expert',
      description: 'SMG reload speed increased by 4-24%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        reloadSpeed: '+4-24%',
        weapons: 'SMG only'
      }
    },
    gender: 'Female',
    releaseYear: 2017,
    obtainMethod: 'Free (Default)',
    tags: ['smg', 'reload', 'free'],
  },
  {
    id: 'miguel',
    name: 'Miguel',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Crazy Slayer',
      description: 'Gains 30-80 EP with each kill.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        epPerKill: '+30-80'
      }
    },
    gender: 'Male',
    releaseYear: 2018,
    obtainMethod: 'Store',
    tags: ['EP', 'aggressive', 'sustain'],
  },
  {
    id: 'alvaro',
    name: 'Alvaro',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Art of Demolition',
      description: 'Explosive weapon damage +6-16% and explosion radius +7-10%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        explosiveDmg: '+6-16%',
        explosionRadius: '+7-10%'
      }
    },
    gender: 'Male',
    releaseYear: 2019,
    obtainMethod: 'Store',
    tags: ['explosive', 'grenade', 'niche'],
  },
  {
    id: 'paloma',
    name: 'Paloma',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Arms Dealing',
      description: 'Can carry 30-120 AR ammo without taking backpack space.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        freeAmmo: '30-120 AR rounds'
      }
    },
    gender: 'Female',
    releaseYear: 2018,
    obtainMethod: 'Store',
    tags: ['ammo', 'AR', 'inventory'],
  },
  {
    id: 'misha',
    name: 'Misha',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Afterburner',
      description: 'Driving speed +2-8%. Damage taken in vehicle reduced by 5-15%.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        driveSpeed: '+2-8%',
        vehicleDmgReduction: '-5-15%'
      }
    },
    gender: 'Female',
    releaseYear: 2018,
    obtainMethod: 'Store',
    tags: ['vehicle', 'speed', 'niche'],
  },
  {
    id: 'jai',
    name: 'Jai',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Raging Reload',
      description: 'Knocking down enemy reloads magazine by 10-45% (AR, Pistol, SMG, SG).',
      cooldown: null,
      maxLevel: 6,
      stats: {
        reloadAmount: '10-45%',
        weapons: 'AR, Pistol, SMG, SG'
      }
    },
    gender: 'Male',
    releaseYear: 2020,
    obtainMethod: 'Store',
    tags: ['reload', 'aggressive', 'sustain'],
  },
  {
    id: 'leon',
    name: 'Leon',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Buzzer Beater',
      description: 'Recover 5-10 HP after surviving a combat (no kills/damage received for 5s).',
      cooldown: null,
      maxLevel: 6,
      stats: {
        hpRecovery: '5-10 HP',
        trigger: 'After 5s no combat'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['healing', 'passive', 'survival'],
  },
  {
    id: 'dBee',
    name: 'D-Bee',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Bullet Beats',
      description: 'Movement speed +5-15% and accuracy +10-35% while firing and moving.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        speedBoost: '+5-15%',
        accuracy: '+10-35%',
        requirement: 'While moving and shooting'
      }
    },
    gender: 'Male',
    releaseYear: 2021,
    obtainMethod: 'Store',
    tags: ['movement', 'accuracy', 'aggressive'],
  },
  {
    id: 'nairi',
    name: 'Nairi',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Ice Iron',
      description: 'Gloo walls gain 20-30% HP. Each gloo deployed restores 15-30 HP (max 2 per gloo).',
      cooldown: null,
      maxLevel: 6,
      stats: {
        glooHP: '+20-30%',
        healPerGloo: '15-30 HP',
        maxHealPerGloo: '2'
      }
    },
    gender: 'Female',
    releaseYear: 2022,
    obtainMethod: 'Store',
    tags: ['gloo', 'defensive', 'healing'],
  },
  {
    id: 'iris',
    name: 'Iris',
    role: 'utility',
    abilityType: 'active',
    ability: {
      name: 'Wall Blossom',
      description: 'Creates a frosty wall that blocks damage and deals 25 damage to enemies who enter.',
      cooldown: 55,
      maxLevel: 6,
      stats: {
        damage: '25',
        duration: '5s'
      }
    },
    gender: 'Female',
    releaseYear: 2022,
    obtainMethod: 'Store',
    tags: ['wall', 'defensive', 'damage'],
  },
  {
    id: 'luna',
    name: 'Luna',
    role: 'utility',
    abilityType: 'passive',
    ability: {
      name: 'Bullet Blast',
      description: 'After landing shots, the next reload restores 3-8 HP. Max 2 stacks.',
      cooldown: null,
      maxLevel: 6,
      stats: {
        hpPerReload: '3-8',
        maxStacks: '2'
      }
    },
    gender: 'Female',
    releaseYear: 2022,
    obtainMethod: 'Store',
    tags: ['healing', 'aggressive', 'sustain'],
  },
];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get all characters
 */
export function getAllCharacters() {
  return CHARACTERS.map(char => ({
    ...char,
    image: getCharacterImage(char.id),
  }));
}

/**
 * Get character by ID
 */
export function getCharacterById(id) {
  const char = CHARACTERS.find(c => c.id === id);
  if (!char) return null;
  return {
    ...char,
    image: getCharacterImage(char.id),
  };
}

/**
 * Get characters by role
 */
export function getCharactersByRole(roleId) {
  return CHARACTERS
    .filter(c => c.role === roleId)
    .map(char => ({
      ...char,
      image: getCharacterImage(char.id),
    }));
}

/**
 * Get characters by ability type
 */
export function getCharactersByAbilityType(type) {
  return CHARACTERS
    .filter(c => c.abilityType === type)
    .map(char => ({
      ...char,
      image: getCharacterImage(char.id),
    }));
}

/**
 * Get recommended characters
 */
export function getRecommendedCharacters() {
  return CHARACTERS
    .filter(c => c.recommended)
    .map(char => ({
      ...char,
      image: getCharacterImage(char.id),
    }));
}

/**
 * Get free characters
 */
export function getFreeCharacters() {
  return CHARACTERS
    .filter(c => c.obtainMethod.toLowerCase().includes('free'))
    .map(char => ({
      ...char,
      image: getCharacterImage(char.id),
    }));
}

/**
 * Search characters by tag
 */
export function getCharactersByTag(tag) {
  return CHARACTERS
    .filter(c => c.tags.includes(tag.toLowerCase()))
    .map(char => ({
      ...char,
      image: getCharacterImage(char.id),
    }));
}

export default {
  CHARACTERS,
  ROLES,
  ABILITY_TYPES,
  getAllCharacters,
  getCharacterById,
  getCharactersByRole,
  getCharactersByAbilityType,
  getRecommendedCharacters,
  getFreeCharacters,
  getCharactersByTag,
};
