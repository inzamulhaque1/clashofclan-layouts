// =============================================================================
// BASE CONTENT GENERATION LIBRARY
// Deterministic content generation for 4,600+ pages
// Day 1: Core game data (TOWN_HALL_DATA + BUILDER_HALL_DATA)
// =============================================================================

// -----------------------------------------------------------------------------
// TOWN HALL DATA (TH3 - TH18)
// Real Clash of Clans buildings, troops, heroes, and spells per level
// -----------------------------------------------------------------------------
const TOWN_HALL_DATA = {
  3: {
    name: 'Town Hall 3',
    maxLevel: 3,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin'],
    newBuildings: ['Mortar', '2nd Cannon', '2nd Archer Tower'],
    heroesAvailable: [],
    spellsAvailable: [],
    armyCampSpace: 70,
    wallCount: 50,
    trapCount: 2,
    description: 'an early-game level where players learn the fundamentals of base building and troop deployment',
    tier: 'beginner',
  },
  4: {
    name: 'Town Hall 4',
    maxLevel: 4,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon'],
    newBuildings: ['Air Defense', '2nd Mortar', 'additional Cannon and Archer Tower'],
    heroesAvailable: [],
    spellsAvailable: [],
    armyCampSpace: 80,
    wallCount: 75,
    trapCount: 4,
    description: 'the first level where air attacks become a factor thanks to the introduction of the Air Defense',
    tier: 'beginner',
  },
  5: {
    name: 'Town Hall 5',
    maxLevel: 5,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard'],
    newBuildings: ['Wizard Tower', 'Spell Factory', '3rd Cannon', '3rd Archer Tower'],
    heroesAvailable: [],
    spellsAvailable: ['Lightning Spell'],
    armyCampSpace: 135,
    wallCount: 100,
    trapCount: 6,
    description: 'a key milestone where the Wizard Tower and Spell Factory unlock, adding splash damage defense and offensive spell support',
    tier: 'beginner',
  },
  6: {
    name: 'Town Hall 6',
    maxLevel: 6,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer'],
    newBuildings: ['Air Sweeper', '2nd Air Defense', '2nd Wizard Tower'],
    heroesAvailable: [],
    spellsAvailable: ['Lightning Spell', 'Healing Spell'],
    armyCampSpace: 150,
    wallCount: 125,
    trapCount: 6,
    description: 'an important defensive upgrade with the Air Sweeper that pushes back air units and a second Air Defense',
    tier: 'beginner',
  },
  7: {
    name: 'Town Hall 7',
    maxLevel: 7,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'Hog Rider', 'Minion'],
    newBuildings: ['Hidden Tesla', 'Dark Elixir Drill', 'Dark Elixir Storage', 'Dark Barracks'],
    heroesAvailable: ['Barbarian King'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell'],
    armyCampSpace: 200,
    wallCount: 175,
    trapCount: 8,
    description: 'a game-changing level that introduces the Barbarian King hero, Dark Elixir economy, Dragons for powerful air attacks, and the Hidden Tesla defense',
    tier: 'intermediate',
  },
  8: {
    name: 'Town Hall 8',
    maxLevel: 8,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem'],
    newBuildings: ['Bomb Tower', 'Dark Spell Factory', '3rd Air Defense', '2nd Hidden Tesla'],
    heroesAvailable: ['Barbarian King'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Poison Spell', 'Earthquake Spell'],
    armyCampSpace: 200,
    wallCount: 225,
    trapCount: 10,
    description: 'a crucial competitive level where GoWiPe and Hog Rider attacks dominate, with the Dark Spell Factory adding Poison and Earthquake Spells',
    tier: 'intermediate',
  },
  9: {
    name: 'Town Hall 9',
    maxLevel: 9,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon'],
    newBuildings: ['X-Bow (x2)', '4th Air Defense', '2nd Air Sweeper', 'additional Wizard Tower'],
    heroesAvailable: ['Barbarian King', 'Archer Queen'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell'],
    armyCampSpace: 220,
    wallCount: 250,
    trapCount: 12,
    description: 'widely considered the most strategic Town Hall level, introducing the Archer Queen hero, X-Bows, and classic attack strategies like GoHo and LavaLoon',
    tier: 'intermediate',
  },
  10: {
    name: 'Town Hall 10',
    maxLevel: 10,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner'],
    newBuildings: ['Inferno Tower (x2)', '3rd X-Bow', 'Bomb Tower', 'additional Cannon and Archer Tower'],
    heroesAvailable: ['Barbarian King', 'Archer Queen'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    armyCampSpace: 240,
    wallCount: 275,
    trapCount: 14,
    description: 'a major power spike with the devastating Inferno Towers that melt high-HP troops, alongside Bowlers and Miners for versatile attack strategies',
    tier: 'advanced',
  },
  11: {
    name: 'Town Hall 11',
    maxLevel: 11,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem'],
    newBuildings: ['Eagle Artillery', '4th X-Bow', '3rd Inferno Tower', 'additional Wizard Tower and Archer Tower'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    armyCampSpace: 260,
    wallCount: 300,
    trapCount: 15,
    description: 'a massive leap with the Eagle Artillery providing map-wide splash damage, the Grand Warden hero with his life-saving ability, and powerful Electro Dragons',
    tier: 'advanced',
  },
  12: {
    name: 'Town Hall 12',
    maxLevel: 12,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Tesla'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter'],
    newBuildings: ['Giga Tesla (on Town Hall)', 'Siege Workshop', 'additional Tesla and Bomb Tower'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher'],
    armyCampSpace: 280,
    wallCount: 300,
    trapCount: 16,
    description: 'an end-game milestone featuring the Giga Tesla built into the Town Hall, the Siege Workshop for powerful siege machines like Wall Wrecker and Battle Blimp, plus Yeti and Headhunter troops',
    tier: 'advanced',
  },
  13: {
    name: 'Town Hall 13',
    maxLevel: 13,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Inferno', 'Scattershot'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter', 'Super Troops'],
    newBuildings: ['Giga Inferno (replaces Giga Tesla)', 'Scattershot (x2)', 'Royal Champion Altar'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden', 'Royal Champion'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher', 'Flame Flinger'],
    armyCampSpace: 300,
    wallCount: 300,
    trapCount: 17,
    description: 'a pivotal level introducing the Royal Champion as the fourth hero, the Giga Inferno upgrade for the Town Hall, devastating Scattershots, and the ability to unlock Super Troops',
    tier: 'endgame',
  },
  14: {
    name: 'Town Hall 14',
    maxLevel: 14,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Inferno', 'Scattershot'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Super Troops'],
    newBuildings: ['Pet House', 'additional Inferno Tower and X-Bow upgrades'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden', 'Royal Champion'],
    pets: ['L.A.S.S.I', 'Electro Owl', 'Mighty Yak', 'Unicorn'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher', 'Flame Flinger'],
    armyCampSpace: 300,
    wallCount: 300,
    trapCount: 18,
    description: 'a transformative level that introduces Hero Pets including L.A.S.S.I, Electro Owl, Mighty Yak, and Unicorn, which pair with heroes to dramatically increase their effectiveness',
    tier: 'endgame',
  },
  15: {
    name: 'Town Hall 15',
    maxLevel: 15,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Inferno', 'Scattershot', 'Monolith', 'Spell Tower'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Super Troops'],
    newBuildings: ['Monolith', 'Spell Tower (x2)', '3rd Scattershot', 'additional traps'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden', 'Royal Champion'],
    pets: ['L.A.S.S.I', 'Electro Owl', 'Mighty Yak', 'Unicorn', 'Frosty', 'Diggy', 'Poison Lizard', 'Phoenix'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Recall Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher', 'Flame Flinger', 'Battle Drill'],
    armyCampSpace: 320,
    wallCount: 325,
    trapCount: 20,
    description: 'a massive content update featuring the Monolith that deals percentage-based damage, Spell Towers that cast spells automatically, the Recall Spell for repositioning troops, and four new Hero Pets including the powerful Phoenix',
    tier: 'endgame',
  },
  16: {
    name: 'Town Hall 16',
    maxLevel: 16,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Inferno', 'Scattershot', 'Monolith', 'Spell Tower', 'Multi-Archer Tower', 'Ricochet Cannon'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Root Rider', 'Super Troops'],
    newBuildings: ['Multi-Archer Tower', 'Ricochet Cannon', 'Merged Defense buildings'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden', 'Royal Champion'],
    pets: ['L.A.S.S.I', 'Electro Owl', 'Mighty Yak', 'Unicorn', 'Frosty', 'Diggy', 'Poison Lizard', 'Phoenix', 'Spirit Fox'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Recall Spell', 'Overgrowth Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher', 'Flame Flinger', 'Battle Drill'],
    armyCampSpace: 320,
    wallCount: 325,
    trapCount: 21,
    description: 'the Merged Defense era introducing the Multi-Archer Tower and Ricochet Cannon, the devastating Root Rider troop, Spirit Fox pet, and the ability to merge certain defense buildings for increased power',
    tier: 'endgame',
  },
  17: {
    name: 'Town Hall 17',
    maxLevel: 17,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Inferno', 'Scattershot', 'Monolith', 'Spell Tower', 'Multi-Archer Tower', 'Ricochet Cannon', 'Merged Mortar', 'Zap Trap'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Root Rider', 'Super Troops'],
    newBuildings: ['Merged Mortar', 'Zap Trap', 'Apprentice Warden Altar'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden', 'Royal Champion', 'Apprentice Warden'],
    pets: ['L.A.S.S.I', 'Electro Owl', 'Mighty Yak', 'Unicorn', 'Frosty', 'Diggy', 'Poison Lizard', 'Phoenix', 'Spirit Fox', 'Angry Jelly'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Recall Spell', 'Overgrowth Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher', 'Flame Flinger', 'Battle Drill'],
    armyCampSpace: 330,
    wallCount: 325,
    trapCount: 22,
    description: 'a landmark update introducing the Apprentice Warden as the fifth hero, the Merged Mortar for concentrated splash damage, the Zap Trap for stunning attackers, and the Angry Jelly pet',
    tier: 'endgame',
  },
  18: {
    name: 'Town Hall 18',
    maxLevel: 18,
    keyDefenses: ['Cannon', 'Archer Tower', 'Mortar', 'Air Defense', 'Wizard Tower', 'Air Sweeper', 'Hidden Tesla', 'Bomb Tower', 'X-Bow', 'Inferno Tower', 'Eagle Artillery', 'Giga Inferno', 'Scattershot', 'Monolith', 'Spell Tower', 'Multi-Archer Tower', 'Ricochet Cannon', 'Merged Mortar', 'Zap Trap', 'Merged Wizard Tower', 'Reflector'],
    keyTroops: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Balloon', 'Wizard', 'Healer', 'Dragon', 'PEKKA', 'Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound', 'Baby Dragon', 'Bowler', 'Miner', 'Electro Dragon', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Root Rider', 'Druid', 'Super Troops'],
    newBuildings: ['Merged Wizard Tower', 'Reflector', 'additional defense upgrades'],
    heroesAvailable: ['Barbarian King', 'Archer Queen', 'Grand Warden', 'Royal Champion', 'Apprentice Warden'],
    pets: ['L.A.S.S.I', 'Electro Owl', 'Mighty Yak', 'Unicorn', 'Frosty', 'Diggy', 'Poison Lizard', 'Phoenix', 'Spirit Fox', 'Angry Jelly'],
    spellsAvailable: ['Lightning Spell', 'Healing Spell', 'Rage Spell', 'Jump Spell', 'Freeze Spell', 'Clone Spell', 'Invisibility Spell', 'Recall Spell', 'Overgrowth Spell', 'Poison Spell', 'Earthquake Spell', 'Haste Spell', 'Bat Spell'],
    siegeMachines: ['Wall Wrecker', 'Battle Blimp', 'Stone Slammer', 'Siege Barracks', 'Log Launcher', 'Flame Flinger', 'Battle Drill'],
    armyCampSpace: 340,
    wallCount: 325,
    trapCount: 23,
    description: 'the current maximum Town Hall level featuring the Merged Wizard Tower for devastating splash damage, the Reflector defense that bounces projectiles, and the Druid troop with healing and rage aura abilities',
    tier: 'endgame',
  },
};

// -----------------------------------------------------------------------------
// BUILDER HALL DATA (BH3 - BH10)
// Real Clash of Clans Builder Base buildings, troops, and abilities
// -----------------------------------------------------------------------------
const BUILDER_HALL_DATA = {
  3: {
    name: 'Builder Hall 3',
    maxLevel: 3,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant'],
    newBuildings: ['Crusher', 'Gem Mine', '2nd Army Camp'],
    heroesAvailable: [],
    starLaboratory: true,
    description: 'an introductory Builder Base level where the Crusher provides devastating melee damage against ground troops and players learn versus battle mechanics',
    tier: 'beginner',
  },
  4: {
    name: 'Builder Hall 4',
    maxLevel: 4,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber'],
    newBuildings: ['Guard Post', '2nd Firecracker', 'additional walls'],
    heroesAvailable: [],
    starLaboratory: true,
    description: 'the level where the Guard Post introduces defending troops and Beta Minions add air attack capabilities to your army',
    tier: 'beginner',
  },
  5: {
    name: 'Builder Hall 5',
    maxLevel: 5,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post', 'Multi Mortar'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber', 'Cannon Cart'],
    newBuildings: ['Multi Mortar', 'Battle Machine Altar', '2nd Double Cannon'],
    heroesAvailable: ['Battle Machine'],
    starLaboratory: true,
    description: 'a critical milestone that unlocks the Battle Machine hero with its Electric Hammer ability and the Multi Mortar for multi-directional splash damage',
    tier: 'intermediate',
  },
  6: {
    name: 'Builder Hall 6',
    maxLevel: 6,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post', 'Multi Mortar', 'Roaster'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber', 'Cannon Cart', 'Night Witch'],
    newBuildings: ['Roaster', '2nd Guard Post', 'additional traps'],
    heroesAvailable: ['Battle Machine'],
    starLaboratory: true,
    description: 'a strong defensive upgrade with the Roaster that shoots streams of fire at both ground and air units, and the Night Witch troop that summons Bats',
    tier: 'intermediate',
  },
  7: {
    name: 'Builder Hall 7',
    maxLevel: 7,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post', 'Multi Mortar', 'Roaster', 'Giant Cannon'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber', 'Cannon Cart', 'Night Witch', 'Drop Ship'],
    newBuildings: ['Giant Cannon', '2nd Crusher', 'additional Archer Tower'],
    heroesAvailable: ['Battle Machine'],
    starLaboratory: true,
    description: 'a powerful defensive level with the Giant Cannon that fires long-range explosive shells and a second Crusher, while Drop Ships provide tanking from the air',
    tier: 'intermediate',
  },
  8: {
    name: 'Builder Hall 8',
    maxLevel: 8,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post', 'Multi Mortar', 'Roaster', 'Giant Cannon', 'Mega Tesla'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber', 'Cannon Cart', 'Night Witch', 'Drop Ship', 'Super PEKKA', 'Hog Glider'],
    newBuildings: ['Mega Tesla', 'additional defenses and walls'],
    heroesAvailable: ['Battle Machine'],
    starLaboratory: true,
    description: 'a high-level Builder Base featuring the Mega Tesla that charges up to deal massive damage, the Super PEKKA with its explosive Overcharge ability on death, and the versatile Hog Glider',
    tier: 'advanced',
  },
  9: {
    name: 'Builder Hall 9',
    maxLevel: 9,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post', 'Multi Mortar', 'Roaster', 'Giant Cannon', 'Mega Tesla', 'Lava Launcher'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber', 'Cannon Cart', 'Night Witch', 'Drop Ship', 'Super PEKKA', 'Hog Glider', 'Electrofire Wizard'],
    newBuildings: ['O.T.T.O Hut', 'Lava Launcher', '2nd Mega Tesla'],
    heroesAvailable: ['Battle Machine'],
    ottoHut: true,
    starLaboratory: true,
    description: 'a game-changing level featuring the O.T.T.O Hut that unlocks a second builder for your Home Village, the Lava Launcher that shoots lava over walls, and the Electrofire Wizard with dual attack modes',
    tier: 'advanced',
  },
  10: {
    name: 'Builder Hall 10',
    maxLevel: 10,
    keyDefenses: ['Cannon', 'Archer Tower', 'Double Cannon', 'Crusher', 'Firecracker', 'Guard Post', 'Multi Mortar', 'Roaster', 'Giant Cannon', 'Mega Tesla', 'Lava Launcher', 'X-Bow'],
    keyTroops: ['Raged Barbarian', 'Sneaky Archer', 'Boxer Giant', 'Beta Minion', 'Bomber', 'Cannon Cart', 'Night Witch', 'Drop Ship', 'Super PEKKA', 'Hog Glider', 'Electrofire Wizard', 'Power PEKKA'],
    newBuildings: ['X-Bow', '2nd Lava Launcher', 'additional high-level defenses'],
    heroesAvailable: ['Battle Machine'],
    ottoHut: true,
    starLaboratory: true,
    description: 'the maximum Builder Hall level featuring the X-Bow for rapid-fire long-range defense, the Power PEKKA with its devastating charge attack, and maximum-level defenses across the board',
    tier: 'advanced',
  },
};

// -----------------------------------------------------------------------------
// BASE TYPE STRATEGIES
// Purpose, principles, threats, and design goals for each base type
// -----------------------------------------------------------------------------
const BASE_TYPE_STRATEGIES = {
  war: {
    purpose: 'Defend against enemy attacks in Clan Wars to prevent 3-stars',
    principles: [
      'Centralize Clan Castle and heroes to force attackers into difficult engagements',
      'Create anti-3-star compartments that waste attacker time and spells',
      'Spread high-value defenses like Inferno Towers and X-Bows to prevent value spell hits',
      'Force attackers to choose between taking the Town Hall and earning percentage',
      'Use asymmetric design to make attack planning unpredictable',
      'Place traps in locations that punish common pathing mistakes',
    ],
    primaryThreats: [
      'Queen Charge into core',
      'Siege Machine entry with kill squad',
      'Hybrid (Hog Rider + Miner) cleanup',
      'LavaLoon air attacks',
      'Zap Witch spam',
      'Blizzard Lalo (TH13+)',
      'Root Rider Smash (TH15+)',
    ],
    designGoals: [
      'Anti-3-star compartment layout',
      'Difficult hero pathing',
      'Trap-heavy kill zones',
      'Spread splash defenses',
      'Centralized Clan Castle',
    ],
  },
  farm: {
    purpose: 'Protect Gold, Elixir, and Dark Elixir storages from raiders',
    principles: [
      'Centralize all resource storages within the strongest compartments',
      'Town Hall can be placed outside to give attackers a free star and discourage full attacks',
      'Spread collectors around the perimeter as distractions',
      'Layer splash defenses like Wizard Towers and Mortars around storages',
      'Use high-HP buildings as shields in front of storage compartments',
      'Create multiple storage pockets so attackers cannot reach all resources in one push',
    ],
    primaryThreats: [
      'Barch (Barbarian + Archer) raids targeting collectors',
      'Sneaky Goblin attacks diving straight to storages',
      'Goblin knife strategies tunneling to the core',
      'Mass Miner farming attacks',
      'Super Barbarian raids',
    ],
    designGoals: [
      'Maximum resource protection',
      'Storages spread across multiple compartments',
      'Splash damage coverage over storage areas',
      'Collector ring as distraction buffer',
      'Dark Elixir storage deep in the core',
    ],
  },
  trophy: {
    purpose: 'Protect trophies and Town Hall for Legend League and trophy pushing',
    principles: [
      'Centralize Town Hall in the strongest compartment possible',
      'Build a strong outer ring with high-HP buildings to absorb damage',
      'Anti-Queen-Walk perimeter that prevents easy value from the outside',
      'Create multiple overlapping kill zones around the Town Hall',
      'Use seeking air mines and Tornado traps to disrupt air pathing',
      'Position heroes near the Town Hall for maximum defensive value',
    ],
    primaryThreats: [
      'Queen Walk/Charge for percentage and Town Hall snipe',
      'Zap Witch attacks targeting the core',
      'Hybrid attacks with precise funneling',
      'Electro Dragon spam overwhelming air defenses',
      'Yeti Smash with siege machines',
      'Blizzard spell combos (TH13+)',
    ],
    designGoals: [
      'Anti-1-star design focused on Town Hall protection',
      'High defense coverage on outer ring',
      'Anti-Queen-Walk building placement',
      'Multiple air-targeting defenses near core',
      'Trap placement that punishes predictable pathing',
    ],
  },
  hybrid: {
    purpose: 'Balance war defense with resource protection for versatile everyday use',
    principles: [
      'Position Town Hall centrally but also protect key resource storages',
      'Create balanced compartments that defend both trophies and loot',
      'Use a mix of anti-air and anti-ground defense placement',
      'Ensure Clan Castle is centralized for defensive troops',
      'Spread storages so that no single attack can grab all resources',
      'Design flexible trap placement that works against multiple attack styles',
    ],
    primaryThreats: [
      'All-purpose ground attacks like GoWiPe or Hybrid',
      'Air attacks including LavaLoon and Electro Dragon',
      'Resource-targeting strategies like Goblin Knife',
      'Queen Charge followed by any backend strategy',
      'Mass Hog Rider attacks',
    ],
    designGoals: [
      'Balanced defense against all attack types',
      'Town Hall and storages both protected',
      'Versatile trap placement',
      'Strong against both air and ground',
      'Good for both war and multiplayer',
    ],
  },
  cwl: {
    purpose: 'Optimize defense for Clan War League single-attack format where every star matters',
    principles: [
      'Prioritize anti-2-star design since opponents only get one attack in CWL',
      'Make the Town Hall extremely difficult to reach to deny the crucial second star',
      'Use heavy compartmentalization to slow down attackers and waste their time',
      'Position Clan Castle centrally with strong defensive troops',
      'Create wide funnel-breaking gaps that make troop pathing unpredictable',
      'Place Eagle Artillery and Scattershots to cover the largest area possible',
    ],
    primaryThreats: [
      'Max-level attacks from higher Town Hall opponents (mismatches)',
      'Well-practiced Queen Charge Hybrid',
      'Siege Machine-based kill squad entries',
      'Super Witch spam for easy 2-stars',
      'Root Rider Smash strategies (TH15+)',
      'Blizzard LaLoon combo attacks (TH13+)',
    ],
    designGoals: [
      'Anti-2-star focused layout',
      'Extremely difficult Town Hall access',
      'Heavy compartmentalization',
      'Time-wasting design that forces attackers to fail on percentage',
      'Strong against common CWL meta attacks',
    ],
  },
  defense: {
    purpose: 'Maximum defensive strength against all possible attack strategies',
    principles: [
      'Optimize every defense placement for maximum coverage overlap',
      'Create interlocking kill zones where multiple defenses target the same area',
      'Use wall segments strategically to funnel troops into high-damage areas',
      'Position all splash defenses to cover the widest possible range',
      'Layer defenses in rings so attackers face continuous fire as they push inward',
      'Maximize trap value by placing them in high-traffic pathing locations',
    ],
    primaryThreats: [
      'Any and all attack strategies',
      'Queen Charge with backend troops',
      'Mass air attacks',
      'Ground smash strategies with siege machines',
      'Hybrid combinations',
      'Specialized meta attacks for the current patch',
    ],
    designGoals: [
      'Maximum DPS coverage across the entire base',
      'Overlapping defense ranges',
      'Optimized wall usage for funneling',
      'High trap density in likely attack paths',
      'Ring-based defense layering',
    ],
  },
  progress: {
    purpose: 'Organized layout for tracking and planning building upgrades efficiently',
    principles: [
      'Group buildings by type for easy visual tracking of upgrade progress',
      'Arrange defenses in rows or sections by category (point, splash, air)',
      'Keep Army buildings separate from defensive buildings for clarity',
      'Position resource buildings together to monitor upgrade priorities',
      'Use clear visual separation between upgraded and pending buildings',
      'Maintain functional defense while providing upgrade visibility',
    ],
    primaryThreats: [
      'Not designed for competitive defense',
      'Vulnerable to most organized attack strategies',
      'Prioritizes organization over protection',
    ],
    designGoals: [
      'Clear visual upgrade tracking',
      'Buildings grouped by category',
      'Easy identification of next upgrade targets',
      'Functional but not optimized defense',
      'Quick reference layout for planning',
    ],
  },
};

// -----------------------------------------------------------------------------
// ATTACK STRATEGIES BY TH LEVEL
// Real strategy names commonly used at each Town Hall range
// -----------------------------------------------------------------------------
const ATTACK_STRATEGIES = {
  3: ['Giant-Archer', 'Barbarian Rush', 'Giant-Goblin'],
  4: ['Giant-Archer', 'Balloon Rush', 'Barbarian-Archer (Barch)'],
  5: ['Giant-Wizard', 'Barch', 'Giant-Healer', 'Balloon-Wizard (Balloonion)'],
  6: ['Giant-Healer', 'Barch', 'Giant-Wizard', 'Balloon Parade'],
  7: ['Dragon Spam', 'Mass Hog Riders', 'Dragon-Lightning (DragLoon)', 'Giant-Wizard-Healer'],
  8: ['GoWiPe', 'Mass Hog Riders', 'DragLoon', 'GoHo', 'GoVaHo'],
  9: ['GoHo', 'LavaLoon (LaLoon)', 'Queen Charge LaLoon', 'GoVaHo', 'Witch Slap', 'GoWiWi', 'Hog Miner Hybrid'],
  10: ['Queen Walk Miners', 'Frozen Witch', 'BoWitch', 'Mass Hog Riders', 'DragBat', 'Hybrid (Hog Miner)', 'Zap Witch'],
  11: ['Electro Dragon Spam', 'Queen Charge Hybrid', 'Yeti Smash', 'Zap Witch', 'Sui LaLoon', 'Mass Hog Riders', 'DragBat', 'Pekka BoBat'],
  12: ['Yeti Smash', 'Queen Charge Hybrid', 'Log Launcher BoWitch', 'Electrone LaLoon', 'DragBat', 'Super Witch Spam', 'Pekka Smash', 'Bat Slap'],
  13: ['Blizzard LaLoon', 'Super Witch Spam', 'Queen Charge Hybrid', 'Yeti Smash', 'Sui Hero Hybrid', 'Log Launcher GoWitch', 'Super Dragon Spam'],
  14: ['Blizzard LaLoon', 'Super Witch Spam', 'Queen Charge Hybrid', 'Yeti Smash', 'Flame Flinger LaLoon', 'Root Rider Smash', 'Hydra (Hybrid + Dragon Rider)'],
  15: ['Root Rider Smash', 'Recall Hybrid', 'Super Bowler Smash', 'Queen Charge Root Rider', 'Blizzard LaLoon', 'Monolith Snipe Hybrid', 'Yeti Smash'],
  16: ['Root Rider Smash', 'Queen Charge Root Rider', 'Recall Hybrid', 'Super Bowler Smash', 'Overgrowth LaLoon', 'Multi-Archer Tower strategies', 'Spirit Fox Hybrid'],
  17: ['Druid Hybrid', 'Root Rider Smash', 'Apprentice Warden strategies', 'Angry Jelly comps', 'Recall Root Rider', 'Super Bowler Smash', 'Zap Witch with Apprentice Warden'],
  18: ['Druid Hybrid', 'Root Rider Smash', 'Apprentice Warden strategies', 'Angry Jelly comps', 'Recall Druid Hybrid', 'Reflector-counter strategies', 'Mass Root Rider', 'Super Bowler Smash'],
};

// -----------------------------------------------------------------------------
// BUILDER BASE ATTACK STRATEGIES BY BH LEVEL
// -----------------------------------------------------------------------------
const BH_ATTACK_STRATEGIES = {
  3: ['Mass Sneaky Archer', 'Boxer Giant + Sneaky Archer', 'Raged Barbarian Rush'],
  4: ['Beta Minion Spam', 'Boxer Giant + Bomber', 'Sneaky Archer Snipe'],
  5: ['Cannon Cart Rush', 'Battle Machine + Giants', 'Mass Baby Dragon', 'Bomber + Cannon Cart'],
  6: ['Night Witch Spam', 'Mass Baby Dragon', 'Cannon Cart + Night Witch', 'Drop Ship + Minion'],
  7: ['Drop Ship + Minion', 'Mass Cannon Cart', 'Night Witch + Drop Ship', 'Super PEKKA Smash'],
  8: ['Super PEKKA Smash', 'Hog Glider + Cannon Cart', 'Drop Ship + Minion', 'Mass Night Witch'],
  9: ['Hog Glider + Cannon Cart', 'Electrofire Wizard + PEKKA', 'Drop Ship Spam', 'Super PEKKA + Hog Glider'],
  10: ['Power PEKKA Smash', 'Hog Glider + Cannon Cart', 'Electrofire Wizard combo', 'Mass Power PEKKA', 'Drop Ship + Power PEKKA'],
};

// -----------------------------------------------------------------------------
// TROOPS BY TH LEVEL (cumulative - all troops available at each level)
// Used for generating troop composition content
// -----------------------------------------------------------------------------
const TROOPS_BY_TH_LEVEL = {
  3: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin'], air: [], dark: [] },
  4: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker'], air: ['Balloon'], dark: [] },
  5: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard'], air: ['Balloon'], dark: [] },
  6: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard'], air: ['Balloon', 'Healer'], dark: [] },
  7: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard'], air: ['Balloon', 'Healer', 'Dragon'], dark: ['Hog Rider', 'Minion'] },
  8: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA'], air: ['Balloon', 'Healer', 'Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem'] },
  9: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'] },
  10: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'] },
  11: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'] },
  12: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'] },
  13: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'], super: ['Super Barbarian', 'Super Archer', 'Super Wall Breaker', 'Super Giant', 'Sneaky Goblin', 'Super Wizard', 'Super Dragon', 'Inferno Dragon', 'Super Witch', 'Super Minion', 'Super Valkyrie', 'Super Hog Rider'] },
  14: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'], super: ['Super Barbarian', 'Super Archer', 'Super Wall Breaker', 'Super Giant', 'Sneaky Goblin', 'Super Wizard', 'Super Dragon', 'Inferno Dragon', 'Super Witch', 'Super Minion', 'Super Valkyrie', 'Super Hog Rider', 'Super Bowler'] },
  15: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'], super: ['Super Barbarian', 'Super Archer', 'Super Wall Breaker', 'Super Giant', 'Sneaky Goblin', 'Super Wizard', 'Super Dragon', 'Inferno Dragon', 'Super Witch', 'Super Minion', 'Super Valkyrie', 'Super Hog Rider', 'Super Bowler'] },
  16: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Root Rider'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'], super: ['Super Barbarian', 'Super Archer', 'Super Wall Breaker', 'Super Giant', 'Sneaky Goblin', 'Super Wizard', 'Super Dragon', 'Inferno Dragon', 'Super Witch', 'Super Minion', 'Super Valkyrie', 'Super Hog Rider', 'Super Bowler'] },
  17: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Root Rider'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'], super: ['Super Barbarian', 'Super Archer', 'Super Wall Breaker', 'Super Giant', 'Sneaky Goblin', 'Super Wizard', 'Super Dragon', 'Inferno Dragon', 'Super Witch', 'Super Minion', 'Super Valkyrie', 'Super Hog Rider', 'Super Bowler'] },
  18: { ground: ['Barbarian', 'Archer', 'Giant', 'Goblin', 'Wall Breaker', 'Wizard', 'PEKKA', 'Bowler', 'Miner', 'Ice Golem', 'Yeti', 'Headhunter', 'Dragon Rider', 'Electro Titan', 'Root Rider', 'Druid'], air: ['Balloon', 'Healer', 'Dragon', 'Baby Dragon', 'Electro Dragon'], dark: ['Hog Rider', 'Minion', 'Valkyrie', 'Golem', 'Witch', 'Lava Hound'], super: ['Super Barbarian', 'Super Archer', 'Super Wall Breaker', 'Super Giant', 'Sneaky Goblin', 'Super Wizard', 'Super Dragon', 'Inferno Dragon', 'Super Witch', 'Super Minion', 'Super Valkyrie', 'Super Hog Rider', 'Super Bowler'] },
};

// -----------------------------------------------------------------------------
// VARIATION POOLS
// Adjectives, challenges, and other fill-in pools for template interpolation
// -----------------------------------------------------------------------------
const ADJECTIVES = [
  'strategic', 'optimized', 'battle-tested', 'competitive', 'well-designed',
  'carefully crafted', 'professional-grade', 'tournament-level', 'anti-meta',
  'innovative', 'sophisticated', 'expert-level', 'field-proven', 'high-performance',
  'meticulously planned', 'cleverly engineered',
];

const CHALLENGES = [
  'split their army and attack from multiple angles',
  'use excessive spells just to reach the core',
  'commit their heroes early and lose them to traps',
  'waste their siege machine on the wrong compartment',
  'deal with unexpected trap placements that disrupt funneling',
  'navigate through a maze of compartments under heavy fire',
  'sacrifice percentage trying to reach high-value targets',
  'abandon their initial plan and improvise under pressure',
  'spread their troops too thin across multiple compartments',
  'overcommit to one side and run out of time',
  'choose between the Town Hall and percentage buildings',
  'deplete their spell inventory before reaching the core',
  'face overlapping splash damage from multiple directions',
  'restart their funnel after troops walk around walls',
];

// -----------------------------------------------------------------------------
// CONTENT VARIATIONS - OVERVIEW TEMPLATES
// 12 templates per base type, use placeholders filled at generation time:
// {level}, {hallType}, {keyDefense}, {hero}, {threat}, {adjective},
// {challenge}, {feature}, {baseNumber}, {year}
// Each template produces ~150-200 words when filled
// -----------------------------------------------------------------------------
const OVERVIEW_TEMPLATES = {
  war: [
    'This {hallType}{level} war base layout uses a {adjective} compartment design that forces attackers to {challenge}. The {keyDefense} placement creates overlapping kill zones that make it extremely difficult for {threat} strategies to achieve a three-star result. Defensive buildings are spread across isolated sections so that no single spell combination can neutralize multiple key targets at once. {hero} guards a critical junction point where troops are most likely to converge, ensuring that attackers face stiff resistance at every stage of their push. The wall structure channels troops away from the Town Hall while exposing them to concentrated fire from point and splash defenses alike. This design has been refined for the current meta and performs consistently well against the most popular war attack strategies at this Town Hall level.',

    'Designed specifically for Clan War performance, this {adjective} {hallType}{level} base separates high-value defenses into distinct compartments that cannot be reached with a single entry point. Attackers attempting {threat} will find that the {keyDefense} coverage overlaps in critical areas, creating zones where troops take damage from multiple sources simultaneously. The Clan Castle sits deep within the layout, requiring attackers to invest significant resources just to lure and eliminate defensive troops. {hero} is positioned to intercept common pathing routes, adding an unpredictable element that disrupts carefully planned attacks. Trap placement focuses on punishing the most common entry points, and spring traps are arranged along likely Hog Rider paths. This war base consistently denies three-star attempts when paired with strong defensive Clan Castle troops.',

    'Anti-3-star defense is the primary goal of this {hallType}{level} war base, which employs a {adjective} ring-based structure with isolated defensive islands. The {keyDefense} anchors the core compartment, providing high DPS coverage over the Town Hall area while splash defenses handle cleanup troops in the outer rings. Attackers who attempt {threat} will struggle because the layout forces them to {challenge}. {hero} patrols a section of the base that overlaps with key trap locations, making hero dives extremely risky. The design uses dead zones between compartments to break troop AI targeting, causing groups to split and wander into kill zones. Every wall segment serves a purpose in this layout, either channeling troops or protecting a critical defensive structure.',

    'This {hallType}{level} war layout takes an unconventional approach by using offset compartments that break standard attack pathing. The {adjective} design places the {keyDefense} in positions that cover both the Town Hall and outer percentage buildings, making it difficult for attackers to plan a clean funnel. {threat} attempts are countered by strategic trap placement that punishes predictable troop deployment. {hero} covers a wide area from a semi-centralized position, engaging attackers regardless of their chosen entry point. The base creates natural choke points where ground troops stack up and become vulnerable to splash damage, while air defenses are spread to prevent Lightning Spell value. This layout works exceptionally well in competitive war environments where opponents scout and plan their attacks carefully.',

    'Built to withstand repeated attack attempts, this {adjective} {hallType}{level} war base features a multi-layer defense system with the {keyDefense} at its center. The layout is specifically designed to counter {threat} by forcing attackers to {challenge}. Each compartment contains a balanced mix of point and splash defenses so that even partial breaches result in significant troop losses. {hero} is positioned near the Eagle Artillery zone to create a devastating double threat that punishes hero-based kill squads. The outer ring uses high-HP buildings to absorb initial damage while internal defenses whittle down attacking forces. This base design recognizes that the best defense is not about stopping every attack completely, but about making three-star attempts as difficult and risky as possible.',

    'This {hallType}{level} war base uses a {adjective} island layout where key defenses are separated by open spaces that disrupt troop pathing. The {keyDefense} sits in a position that maximizes its effective range while being protected by surrounding compartments. Attackers running {threat} will be forced to {challenge}, which significantly reduces their chances of a clean three-star. {hero} defends a crucial section where the base transitions from the outer ring to the core, acting as a speed bump that buys time for defenses to eliminate troops. The trap placement in this design targets the most statistically common attack angles, with Giant Bombs positioned to devastate grouped Hog Riders and Seeking Air Mines protecting against LaLoon sweeps.',

    'Consistency is the hallmark of this {adjective} {hallType}{level} war base design. The {keyDefense} anchors a central compartment surrounded by progressively weaker rings that serve as damage buffers. Attackers attempting {threat} discover that the layout forces them to {challenge}, burning through their spell inventory before reaching the core. {hero} occupies a position that intersects with multiple attack paths, ensuring engagement regardless of the attacker\'s approach. Defensive buildings are arranged so that destroying one compartment does not create a pathway to the next, requiring attackers to break through walls at every stage. This base performs reliably across multiple attack styles, making it an excellent choice for Clan Wars where you cannot predict what strategy your opponent will use.',

    'This {adjective} {hallType}{level} war base prioritizes anti-Queen-Charge design by creating an outer ring that punishes early hero deployment. The {keyDefense} is positioned to engage Queen Walk attempts from any angle, while the interior compartments protect against backend troops. Attackers using {threat} face the challenge of having to {challenge}. {hero} covers a dead zone in the base that ground troops must cross, providing burst damage against funneling units. The layout uses a combination of single-target and multi-target Inferno Towers (where available) to handle both swarm and tank-based attacks. Air defenses are triangulated around the core to prevent any easy air approach, and the sweeper angles are set to push back the most common LaLoon deployment arcs.',

    'Strategic depth defines this {hallType}{level} war base, which uses a {adjective} asymmetric layout to confuse attack planning. The {keyDefense} appears accessible from one side but is actually heavily trapped, luring attackers into making critical mistakes. {threat} strategies are neutralized because the design forces attackers to {challenge}. {hero} defends a compartment that houses both the Clan Castle and a key splash defense, creating a combined threat that is expensive to deal with. The base features intentional bait sections that appear weak but lead into kill zones where overlapping defenses create deadly crossfire. This layout rewards defenders who understand that the best war bases are not perfectly symmetrical but instead exploit attacker assumptions.',

    'This {hallType}{level} war base features a {adjective} design philosophy centered around maximizing defensive value per compartment. The {keyDefense} is paired with complementary defenses that cover its weaknesses, creating self-sufficient defensive islands. Attackers using {threat} will find that they need to {challenge}, which rarely succeeds without perfect execution. {hero} patrols an area between two major compartments, threatening troops that attempt to transition between base sections. Spring traps line the likely paths between defensive islands, and Giant Bombs are doubled up in locations where Hog Riders or Miners typically group together. The wall layout creates a deceptive appearance that makes the base look simpler than it actually is, leading to overconfident attacks that fall short of three stars.',

    'Designed for the current competitive meta, this {adjective} {hallType}{level} war base addresses the most popular attack strategies head-on. The {keyDefense} placement directly counters {threat} by creating coverage gaps that do not actually exist once traps are triggered. Attackers must {challenge} to have any hope of reaching the Town Hall, and even then face stiff resistance from well-positioned defenses. {hero} serves as the anchor of the interior defense, engaging troops that break through the outer walls and slowing their advance toward the core. The base uses moat-style spacing between walls to prevent Wall Breaker value and forces Jump Spell usage on suboptimal locations. This design has been tested extensively against top-level attacks and holds up well in competitive war environments.',

    'This {hallType}{level} war base employs a {adjective} diamond-style core with extended arms that create multiple attack phases. The {keyDefense} dominates the core, protected by layers of walls and flanked by supporting defenses. {threat} attempts are challenged because the layout requires attackers to {challenge}. {hero} is placed at a chokepoint where troops must pass after clearing the first compartment layer, providing crucial defensive damage during the mid-attack phase. The outer buildings are arranged to waste attacker time and force premature spell usage, while the interior concentrates defensive DPS in overlapping arcs. This base design excels in war scenarios where preventing three stars is the primary objective, even if two-star results occur.',
  ],

  farm: [
    'This {hallType}{level} farming base positions all resource storages deep within {adjective} compartments that are extremely difficult to reach without a full army commitment. The {keyDefense} provides splash coverage over the storage areas, ensuring that small raiding parties are eliminated before they can steal significant resources. Collectors and mines are arranged around the perimeter as sacrificial distractions, giving attackers easy loot to discourage them from pushing deeper into the base. The Town Hall sits outside or in a less-protected position, offering a free star to raiders who might otherwise invest a full attack to reach your storages. {hero} guards the Dark Elixir storage compartment specifically, as Dark Elixir is typically the most valuable and hardest-to-replace resource at this level.',

    'Resource protection is the sole focus of this {adjective} {hallType}{level} farming layout. Gold and Elixir storages are split across four separate compartments, each defended by a combination of splash and point defenses anchored by the {keyDefense}. This design ensures that even successful attacks can only reach a portion of your total resources. {hero} patrols the core where the Dark Elixir storage sits behind multiple wall layers. Attackers using Sneaky Goblins or Barch raids will find that the splash defense coverage eliminates their troops before they can reach storage buildings. The outer ring of collectors provides enough exposed loot to satisfy casual raiders, reducing the likelihood of a full attack against your protected reserves.',

    'This {adjective} {hallType}{level} farming base uses a centralized storage cluster protected by concentric rings of defenses. The {keyDefense} covers the main storage area from a position that cannot be easily sniped or zapquaked. Splash defenses like Wizard Towers and Mortars are layered between storage compartments, creating overlapping damage zones that devastate farming troops. {hero} is positioned adjacent to the Dark Elixir storage, adding burst damage against any troops that breach the inner walls. The layout places collectors in exposed positions around the edges, encouraging attackers to grab the easy loot and leave without investing the resources needed to crack the core. This base is ideal for overnight protection and passive farming.',

    'Designed for players who are actively upgrading, this {adjective} {hallType}{level} farming base maximizes resource retention against common raiding strategies. The {keyDefense} anchors a compartment containing two storages, while the remaining storages are distributed across other protected sections. This spread design ensures that attackers using {threat} cannot reach more than 25-30 percent of your total resources in a single raid. {hero} defends the section with the highest-value storages, providing an additional layer of protection against dedicated attacks. The base features wide gaps between outer buildings that prevent easy funneling, forcing attackers to deploy troops in scattered formations that are quickly picked off by defenses.',

    'This {hallType}{level} farming layout takes a {adjective} approach to resource protection by creating a donut-shaped defense ring around the core storages. The {keyDefense} occupies a position in the inner ring where it can target troops that breach the outer walls. All four storage types are placed within the protected inner area, surrounded by defensive buildings that provide continuous DPS coverage. {hero} sits near the center, ready to engage any troops that make it past the defensive ring. The outer buildings serve as a buffer zone, and the Town Hall is deliberately placed in an accessible location to encourage trophy-droppers to take the easy star and move on. This design works exceptionally well against Barch raids and other quick farming attacks.',

    'Storage separation is the key principle behind this {adjective} {hallType}{level} farming base. Each resource storage sits in its own mini-compartment, defended by nearby splash and point defenses with the {keyDefense} providing overarching coverage. Attackers must break through multiple wall layers and face fresh defenses for every storage they attempt to reach. {hero} patrols the largest storage compartment, adding significant defensive value against troops that penetrate the outer defenses. The layout uses a combination of air and ground targeting defenses around each storage pocket, making both air and ground farming strategies equally difficult. Collector buildings form a loose perimeter that absorbs the initial wave of any attack.',

    'This {adjective} {hallType}{level} farming base features a crow-style offset design that funnels attacking troops around the core rather than through it. The {keyDefense} covers the central storage area from a protected position, while the off-center Town Hall draws attacks away from your resources. Trash buildings are strategically placed to create pathing traps that send troops on long walks around the base perimeter. {hero} guards the Dark Elixir compartment, which is positioned in the part of the base furthest from the most common attack entry points. This layout is specifically designed to waste attacker time and troops, making full-army raids unprofitable and encouraging opponents to simply take the Town Hall star and move on.',

    'Protecting your hard-earned resources during upgrade pushes is critical, and this {adjective} {hallType}{level} farming base delivers reliable protection against common raid strategies. The {keyDefense} is positioned to cover the highest concentration of storage buildings, while secondary defenses fill coverage gaps around isolated storages. {hero} actively defends the core area where the Dark Elixir storage and one of each resource storage create a high-value target. The base uses walls efficiently to create multiple small compartments rather than a few large ones, which forces attackers to use more Wall Breakers or Jump Spells than they typically carry. Outer collectors are left exposed intentionally, providing a loot buffer that satisfies raiders looking for quick profit.',

    'This {hallType}{level} farming layout uses a {adjective} box-within-a-box design that creates multiple defensive layers attackers must penetrate to reach resources. The {keyDefense} dominates the second layer, catching troops that breach the outer walls in a crossfire zone. Storages are evenly distributed between the inner two layers, ensuring that surface-level attacks yield minimal loot. {hero} anchors the innermost compartment alongside the Dark Elixir storage, providing a last line of defense against deep penetration attacks. The design is particularly effective against mass Goblin and Sneaky Goblin strategies because the pathing forces them through multiple high-damage zones before reaching any storage building.',

    'Economy-focused players will appreciate this {adjective} {hallType}{level} farming base that balances protection across all resource types. The {keyDefense} covers a triangulated storage layout where Gold, Elixir, and Dark Elixir storages form a protected triangle in the core. Splash defenses are positioned at the vertices of this triangle, providing maximum coverage over the storage area. {hero} patrols one side of the triangle, adding defensive depth against the most common attack direction. The outer ring consists of Army Camps, Barracks, and collectors that absorb initial attack waves and give defenses time to work. This layout consistently protects 70-80 percent of stored resources against typical multiplayer raids.',

    'This {adjective} {hallType}{level} farming base uses a Southern Teaser design philosophy where the bottom of the base appears weak but actually funnels troops into a kill zone. The {keyDefense} sits behind this apparent weakness, ready to devastate any troops that take the bait. Storages are concentrated in the upper portion of the base, away from the decoy opening, protected by the bulk of the defensive buildings. {hero} defends the storage cluster from the most likely secondary attack angle. The Town Hall is placed near the teaser opening, encouraging attackers to enter from the bottom and take the easy star while leaving your resources in the protected northern compartments untouched.',

    'This {hallType}{level} farming layout employs a {adjective} wheel design with storages placed in alternating spokes protected by defensive hubs. The {keyDefense} sits at the wheel center providing 360-degree coverage over all storage spokes. Each spoke contains one major storage building flanked by two defensive structures, creating self-sufficient defensive pockets that function independently. {hero} roams the hub area, engaging troops that enter from any direction. The gaps between spokes serve as kill zones where troops are exposed to fire from adjacent defensive hubs. This design is excellent for protecting resources because attackers can typically only clear one or two spokes before running out of troops, leaving the majority of your resources safely intact.',
  ],

  trophy: [
    'This {hallType}{level} trophy base places the Town Hall in the most {adjective} central compartment possible, surrounded by the strongest defenses available at this level. The {keyDefense} provides maximum coverage over the Town Hall zone, making it extremely difficult for attackers to secure even a single star. Outer buildings are arranged to waste attacker time and prevent easy funneling, while {hero} patrols the area immediately surrounding the Town Hall. The anti-Queen-Walk perimeter uses alternating high-HP and low-HP buildings to disrupt targeting AI, causing heroes to wander unpredictably instead of circling the base efficiently. Seeking Air Mines are positioned to intercept Healers that support Queen Walk attempts. This layout is built for players pushing trophies in Legend League or Champions League.',

    'Trophy protection demands a different design philosophy, and this {adjective} {hallType}{level} base delivers by making the Town Hall nearly impossible to reach. The {keyDefense} creates a damage umbrella over the core that eliminates kill squad troops before they can tank for backend units. {hero} is placed adjacent to the Town Hall, providing burst damage against any troops that breach the inner walls. The base uses a ring design where each layer must be fully cleared before troops can advance, creating a time sink that causes attacks to fail on percentage even if the Town Hall remains unreached. Anti-air coverage is dense around the core to prevent LavaLoon sweeps, and the sweeper angles push back air attacks from the most common deployment arc.',

    'This {adjective} {hallType}{level} trophy base uses a square core design with the Town Hall at the absolute center, protected by four symmetrical compartments that each house major defensive buildings. The {keyDefense} anchors one of these compartments, and together they create a crossfire zone that is lethal for any troops entering the core. {hero} defends the Town Hall from a position that also covers a key trap junction. The outer ring is designed to be time-consuming to clear, with buildings spread apart enough to slow troop progression but close enough to maintain defensive coverage. This layout consistently prevents one-star results against attacks that do not fully commit, making it ideal for high-trophy-range defense.',

    'Pushing trophies requires a base that punishes incomplete attacks, and this {adjective} {hallType}{level} design does exactly that. The Town Hall sits behind the {keyDefense} in a heavily fortified core that requires attackers to commit their entire army to reach. {hero} patrols the space between the outer and inner rings, intercepting troops during the vulnerable transition phase of attacks. The layout features intentional dead zones that break troop targeting AI, causing units to wander into kill zones instead of advancing toward the Town Hall. Air defenses form a tight triangle around the core, making air-based Town Hall snipes extremely risky. This base is designed for players in the 5000+ trophy range who need every defense to count.',

    'This {hallType}{level} trophy base features a {adjective} offset core design where the Town Hall is surrounded by an asymmetric arrangement of high-DPS defenses. The {keyDefense} covers the Town Hall from one angle while a complementary defense covers the opposite angle, eliminating blind spots. {hero} is positioned to engage attackers from the most statistically common deployment side. The outer ring uses storage buildings as high-HP shields that absorb damage while internal defenses focus fire on attacking troops. {threat} attempts are countered by deep trap placement that activates only when troops penetrate past the outer ring. This design sacrifices some resource protection to maximize Town Hall defense, which is the correct trade-off for serious trophy pushers.',

    'Anti-1-star defense is the core philosophy of this {adjective} {hallType}{level} trophy base. Every design decision serves the goal of keeping the Town Hall standing. The {keyDefense} and its supporting defenses create an impenetrable zone around the Town Hall that requires overwhelming force to breach. {hero} occupies a position that covers both ground and air approach paths to the core. The base uses a compact design with minimal dead space, ensuring that defensive buildings maintain continuous fire on any troops within range. Double Giant Bomb sets and Tornado Traps are placed in the paths most likely used by Hog Riders or ground-based kill squads. This layout trades percentage defense for maximum Town Hall protection.',

    'This {adjective} {hallType}{level} trophy layout uses an island Town Hall design surrounded by a moat of open space that disrupts troop pathing. The {keyDefense} sits within the core island, providing point-blank defense of the Town Hall. Troops must cross the moat under fire from both the island defenses and the outer ring, taking significant damage before they can even begin attacking the core. {hero} defends the bridge point between the outer ring and the core island, acting as a chokepoint guardian. The outer ring is heavily fortified with splash defenses that handle cleanup troops, while the core focuses on single-target DPS to melt tanks. This design excels against hybrid strategies that rely on a smooth transition from the outer base to the core.',

    'Designed for the highest trophy leagues, this {adjective} {hallType}{level} base features a diamond core that maximizes the distance attackers must travel to reach the Town Hall from any direction. The {keyDefense} provides coverage over the longest axis of the diamond, while splash defenses cover the shorter diagonals. {hero} patrols the diamond perimeter, engaging troops at the earliest possible moment. The base uses collector buildings as a false outer layer that wastes attacker deployment time, while the real defensive ring begins behind this screen. {threat} attacks are specifically countered by the spacing between air defenses, which prevents chain Lightning attacks from neutralizing multiple air-targeting buildings. This layout is a proven performer in Legend League.',

    'This {hallType}{level} trophy base employs a {adjective} petal design where defensive compartments radiate outward from the centralized Town Hall. Each petal contains a mix of defenses that can independently defend against partial attacks. The {keyDefense} occupies the largest petal, providing dominant coverage over the approach that leads most directly to the Town Hall. {hero} guards the junction where multiple petals meet, ensuring engagement with any attacking force. The design forces attackers to clear entire petals before advancing, and each petal cleared only gives access to the Town Hall from one narrow angle. Traps are concentrated at petal junctions where troops naturally converge after clearing a section.',

    'Maximum Town Hall protection with {adjective} design is what this {hallType}{level} trophy base offers. The {keyDefense} sits in a position that covers both the Town Hall and the most vulnerable approach path. The base features a double-wall design around the core, requiring attackers to use two sets of Wall Breakers or multiple Jump Spells just to reach the Town Hall. {hero} is placed between the two wall layers, engaging troops in the space between walls where they are most vulnerable. Outer buildings are spread to create a time buffer, and the base uses seeking air mines paired with air defenses to create an anti-air kill zone. This layout is specifically designed for competitive trophy pushing where every defense matters.',

    'This {adjective} {hallType}{level} trophy base uses a cog-wheel design with interlocking compartments that rotate around the central Town Hall. The {keyDefense} anchors the largest compartment, which serves as both a defensive strongpoint and a barrier that attackers must overcome. Each compartment connects to the next through narrow passages defended by traps and point defenses. {hero} occupies a compartment adjacent to the Town Hall, providing rapid response to any breach. The design makes Queen Walk extremely difficult because the outer buildings alternate between high-HP and low-HP structures in a pattern that causes targeting AI to behave unpredictably. This is a top-tier trophy base for players who need reliable defense against skilled opponents.',

    'Built for players competing in the highest leagues, this {adjective} {hallType}{level} trophy base prioritizes Town Hall survivability above all else. The {keyDefense} and surrounding structures create a fortress core where attacking troops face concentrated fire from every direction. {hero} defends a crucial section of the core perimeter, adding significant DPS against ground-based attacks. The base uses a combination of compact core design and extended outer structures that waste attacker time. Air defenses are positioned in an anti-LavaLoon formation with sweepers angled to push back the most common Balloon deployment paths. {threat} strategies are countered by the sheer density of defenses around the Town Hall, which can absorb and repel even well-executed attacks.',
  ],

  hybrid: [
    'This {hallType}{level} hybrid base strikes a {adjective} balance between protecting the Town Hall and safeguarding your resources. The {keyDefense} covers both the Town Hall compartment and an adjacent storage area, providing dual-purpose defense. Storages are distributed between the core and secondary compartments so that even successful attacks cannot claim all of your resources. {hero} patrols a section that bridges the Town Hall defense and a storage pocket, adding value on both fronts. The layout works equally well as a war base and a multiplayer defense, making it an excellent all-purpose choice for players who do not want to constantly switch layouts.',

    'Versatility is the defining feature of this {adjective} {hallType}{level} hybrid layout. The Town Hall sits in a centralized position surrounded by storages, creating a high-value core that attackers must fully commit to breach. The {keyDefense} provides splash coverage over both the Town Hall and nearby resource buildings. {hero} defends the core from a position that also intercepts troops targeting the Dark Elixir storage. The outer ring balances defensive buildings with collector placements, providing adequate protection without leaving obvious weaknesses. This base handles both air and ground attacks effectively, making it suitable for Clan Wars, CWL, and everyday multiplayer defense.',

    'This {adjective} {hallType}{level} hybrid base combines war-level compartmentalization with strategic storage placement. The {keyDefense} anchors a central section that houses the Town Hall alongside Gold and Elixir storages, creating a multi-layered target that attackers must invest heavily to reach. {hero} guards the Dark Elixir storage in an adjacent compartment, ensuring that the most valuable resource receives dedicated protection. The design uses balanced air and ground defense placement so that no single attack type has a clear advantage. Traps are positioned along common attack paths, providing bonus defensive value against organized attacks. This layout is perfect for players who participate in wars while also needing to protect their farming progress.',

    'This {hallType}{level} hybrid layout uses a {adjective} clover design where each leaf protects different high-value targets. One leaf houses the Town Hall, two contain resource storages, and the fourth holds the Dark Elixir storage with supporting defenses. The {keyDefense} sits at the center where all four leaves connect, providing coverage over every section. {hero} defends the leaf containing the highest-value targets at your current upgrade stage. The design ensures that attackers can typically only clear two of the four leaves in a single attack, forcing them to choose between the Town Hall star and resource theft. This balanced approach makes the base effective for both competitive and casual play.',

    'This {adjective} {hallType}{level} hybrid base uses ring-based design with the Town Hall and key storages sharing the inner ring. The {keyDefense} provides coverage from the inner ring outward, catching troops as they transition between layers. Resource buildings are evenly distributed between the inner and middle rings, so partial attacks still leave significant resources protected. {hero} patrols the boundary between rings, engaging troops during their most vulnerable phase. The outer ring contains a mix of defenses and collector buildings that slow attacks and provide early warning damage. This layout performs consistently in both war attacks and trophy defense scenarios.',

    'Balancing offense and defense, this {adjective} {hallType}{level} hybrid base positions the Town Hall and storages in an interlocked arrangement where protecting one inherently protects the others. The {keyDefense} covers the largest cluster of high-value buildings, while secondary defenses fill gaps in the coverage. {hero} defends the intersection of the Town Hall compartment and the primary storage cluster. The layout uses wide compartments that provide room for traps and defensive buildings to work together, creating kill zones that punish attackers regardless of their target. Air defenses are spread evenly to handle LavaLoon and Dragon attacks, while ground defenses focus on the likely entry points for hybrid and GoWiPe-style attacks.',

    'This {hallType}{level} hybrid layout features a {adjective} honeycomb structure where hexagonal compartments each serve both offensive and defensive purposes. The {keyDefense} occupies a central hexagon that overlaps with multiple surrounding compartments. The Town Hall and storages are distributed across different hexagons so that no single breach gives access to everything. {hero} defends the hexagon with the highest combined value of Town Hall proximity and resource density. The honeycomb structure naturally creates excellent trap placements at compartment junctions, and the wall efficiency is high because hexagonal layouts share walls between adjacent compartments. This design provides reliable all-around performance.',

    'This {adjective} {hallType}{level} hybrid base prioritizes flexibility by creating a layout that adapts well to different attack strategies. The {keyDefense} sits in a semi-centralized position that provides value against both air and ground attacks. The Town Hall is centralized but not overly concentrated with resources, preventing attackers from getting maximum value from a core dive. {hero} defends a corridor that connects the Town Hall zone to the main storage area. Storages are spread across three distinct compartments, each with its own defensive support, ensuring that attackers must clear multiple sections to steal significant resources. This layout is ideal for active players who want one base that handles everything.',

    'Designed for the player who does it all, this {adjective} {hallType}{level} hybrid base provides strong defense in wars while keeping resources safe during farming sessions. The {keyDefense} creates a protective umbrella over the core where the Town Hall and two storages are co-located. The remaining storages sit in well-defended pockets connected to the core by narrow passages that act as funneling traps. {hero} anchors the defensive formation near the core, providing burst damage against breakthrough attempts. The design uses a balanced mix of single-target and splash defenses throughout every section, preventing any attack type from having an easy path to victory.',

    'This {hallType}{level} hybrid base features a {adjective} figure-eight layout where two connected loops create a dual-purpose defense. One loop protects the Town Hall with war-grade compartmentalization, while the other loop shields resource storages with farming-optimized defense density. The {keyDefense} sits at the intersection of both loops, providing coverage to both zones simultaneously. {hero} defends the connection point, intercepting troops trying to transition from one loop to the other. This unique design means that attackers focused on the Town Hall naturally avoid the storage loop, and vice versa, providing excellent returns against single-objective attacks.',

    'This {adjective} {hallType}{level} hybrid layout combines the best principles of war and farming base design into a cohesive structure. The {keyDefense} defends a core area containing the Town Hall flanked by Dark Elixir storage, creating a high-value center that requires full commitment to breach. Gold and Elixir storages are placed in secondary compartments that benefit from the core\'s defensive strength while being independently defended. {hero} patrols the core perimeter, adding defensive depth against troops that penetrate the outer walls. The base uses time-wasting outer buildings to prevent attackers from reaching the core before their troops are weakened.',

    'Multi-purpose defense at its finest, this {adjective} {hallType}{level} hybrid base uses a cross layout where each arm protects different strategic assets. The {keyDefense} sits at the center of the cross, providing equidistant coverage to every arm. The Town Hall occupies one arm while storages fill the remaining three, each defended by compartment walls and dedicated defenses. {hero} guards the junction where all arms meet, engaging troops regardless of their approach direction. The cross arms create natural kill zones in the spaces between them, where troops are exposed to fire from two adjacent arms simultaneously. This design offers genuinely balanced protection for trophy defense and resource security.',
  ],

  cwl: [
    'This {hallType}{level} CWL base is {adjective} designed for the single-attack format where preventing even a two-star result can win the war. The {keyDefense} creates a fortress around the Town Hall that requires exceptional execution to breach. The layout maximizes the distance between the outer buildings and the Town Hall, forcing attackers to use their full spell complement just to reach the core. {hero} guards the most direct path to the Town Hall, acting as a skill check that separates average attacks from expert ones. Heavy compartmentalization ensures that time becomes the attacker\'s greatest enemy, as clearing each section requires deliberate effort. This base is optimized for CWL where opponent attack quality varies and many players only get one chance.',

    'In Clan War League, every star matters, and this {adjective} {hallType}{level} base is built to deny them. The {keyDefense} anchors a deep core that requires attackers to {challenge} before they can even threaten the Town Hall. The Clan Castle sits in a position that forces early engagement, wasting attacker troops and spells on defensive CC troops before the real fight begins. {hero} patrols a kill zone between the second and third compartment layers, catching troops in a crossfire. The base uses time-wasting design principles that cause even successful attacks to end at 89-94 percent, turning potential three-stars into two-stars and two-stars into one-stars.',

    'CWL matchmaking often creates mismatches, and this {adjective} {hallType}{level} base is designed to hold up even against attacks from higher Town Hall levels. The {keyDefense} provides maximum DPS coverage over the core, while compartment walls force even max-level troops to take extended paths. {hero} defends a critical junction that higher-level attackers often underestimate, providing surprise defensive value. The layout uses a time-based defense strategy where the goal is not to prevent damage but to prevent completion, causing attacks to time out at two stars instead of three. Trap placement targets the most common CWL attack strategies at this Town Hall range.',

    'This {adjective} {hallType}{level} CWL base uses extreme compartmentalization with eight or more distinct sections that attackers must clear individually. The {keyDefense} sits in the largest compartment, which also contains the Town Hall, requiring a dedicated push to breach. Each surrounding compartment contains two to three defensive buildings that must be dealt with before advancing. {hero} is positioned to intercept troops moving between compartments, adding an unpredictable element that disrupts attack flow. The base is specifically designed for CWL\'s single-attack format where opponents cannot adjust their strategy after a failed attempt.',

    'This {hallType}{level} CWL layout features a {adjective} anti-2-star design where the Town Hall is buried so deep that reaching it requires perfect execution. The {keyDefense} covers both the Town Hall and the most likely entry point, creating a double threat that forces early spell usage. {hero} guards the Town Hall compartment directly, providing last-stand defense that can deny the crucial second star. The outer sections are designed to be cleared slowly, eating into the attacker\'s 3-minute timer. Even when attackers manage to break through to the core, the remaining defenses often kill their troops before they can destroy the Town Hall.',

    'Designed by competitive CWL players, this {adjective} {hallType}{level} base forces opponents to bring their best attack and execute it perfectly. The {keyDefense} anchors a core that is surrounded by four symmetrical approach paths, each equally difficult and equally trapped. {hero} covers the most commonly chosen path, adding a skill check that many CWL opponents fail. The Clan Castle placement forces a lure that costs 20-30 seconds of attack time, and the remaining layout is designed to consume the rest. This base capitalizes on the fact that many CWL attacks come from less experienced clan members who struggle with complex base designs.',

    'This {adjective} {hallType}{level} CWL base uses a layered onion design where each defensive ring must be completely peeled away before the next is accessible. The {keyDefense} occupies the third ring, providing concentrated fire on troops that have already been weakened by the outer layers. {hero} defends the fourth and innermost ring where the Town Hall sits, acting as the final line of defense. The design takes advantage of CWL\'s single-attack format by creating a base that is extremely difficult to read and plan against from a single scout. Even experienced attackers often misjudge the depth of the compartments.',

    'This {hallType}{level} CWL layout employs a {adjective} spread design that maximizes the number of troops needed to earn percentage stars. The {keyDefense} provides centralized coverage while defensive buildings are distributed to cover every corner of the base. {hero} defends the Town Hall section, which is offset from the geometric center to make attack planning more complex. Buildings are arranged so that earning 50 percent destruction requires clearing almost two-thirds of the base area, making even a second star extremely expensive. This design philosophy works exceptionally well in CWL where star differentials between clans are often decided by a single star.',

    'Anti-meta design defines this {adjective} {hallType}{level} CWL base. The layout specifically counters the three most popular CWL attack strategies at this Town Hall level by creating defensive arrangements that exploit their weaknesses. The {keyDefense} is positioned to counter {threat} directly, while supporting defenses handle secondary attack angles. {hero} occupies a position that surprises attackers who plan based on typical base designs. Trap placement is aggressive and concentrated in the areas where meta attacks typically succeed, turning reliable strategies into high-risk gambles. This base rewards clans that need an edge against opponents using cookie-cutter attacks.',

    'This {adjective} {hallType}{level} CWL base prioritizes denying the second star through an innovative moat design around the Town Hall. The {keyDefense} fires across the moat gap, providing cover fire over the open space that troops must cross to reach the core. {hero} defends the narrowest crossing point, creating a chokepoint that is lethal for ground troops. The moat design forces air-based Town Hall snipes, but air defenses are specifically arranged to counter that approach as well. This base regularly denies two-star results in CWL, which is often the difference between winning and losing a war day.',

    'This {hallType}{level} CWL layout features a {adjective} offset design where the Town Hall sits in one corner of the base rather than the center. This unusual placement forces attackers to rethink their standard approaches and often leads to improvised attacks that fail. The {keyDefense} covers the Town Hall from the base interior, and the corner position means attackers can only approach from limited angles. {hero} guards the accessible side of the Town Hall compartment. The remainder of the base is densely packed with defenses that make percentage extremely difficult to accumulate, often resulting in one-star results even from strong attacks.',

    'Built for CWL excellence, this {adjective} {hallType}{level} base uses a switchback design where the path to the Town Hall reverses direction multiple times. The {keyDefense} covers the first switchback point where troops are most likely to group up. {hero} defends the second switchback, providing burst damage against weakened troops. Each direction change costs attackers time and troop HP, and the tight corridors between sections create natural kill zones. The design is specifically tuned for CWL\'s competitive environment where opponents study bases before attacking, yet the switchback pathing is extremely difficult to execute against cleanly even with perfect planning.',
  ],

  defense: [
    'This {hallType}{level} defense base uses a {adjective} design that maximizes overlapping fire from every defensive building. The {keyDefense} sits at the center of a defense web where its range intersects with at least four other major defenses. Every square of the base falls within range of multiple defensive buildings, ensuring that troops face continuous damage regardless of their path. {hero} patrols a high-traffic area where attacking troops naturally converge, adding burst damage during critical moments. The layout achieves near-perfect defensive DPS coverage through careful placement that eliminates dead zones and maximizes the time troops spend under fire from multiple sources simultaneously.',

    'Maximum DPS output is the goal of this {adjective} {hallType}{level} defense layout. The {keyDefense} is positioned for optimal range coverage, and every surrounding defense is placed to create interlocking fields of fire. The base uses carefully calculated spacing between defenses so that troops cannot engage one without being hit by its neighbors. {hero} occupies a central position that provides burst damage across the widest possible area. Walls are used primarily as funneling tools rather than barriers, directing troops into kill zones where overlapping defense ranges create devastating damage output. This base trades clever base-building tricks for raw defensive power.',

    'This {adjective} {hallType}{level} defense base employs a star-pattern layout where defensive buildings radiate outward from a central hub. The {keyDefense} dominates the hub, providing the longest possible engagement time with attacking troops. Each ray of the star contains a progression of increasingly powerful defenses that troops must fight through. {hero} defends the hub from a position that allows engagement with troops approaching from any ray. The spaces between rays serve as kill zones where troops crossing from one ray to another face concentrated fire from both sides. This design maximizes total damage output per attack attempt.',

    'Built purely for defensive dominance, this {adjective} {hallType}{level} base arranges every building to maximize the punishment attackers receive. The {keyDefense} and its supporting defenses create a core kill zone where troops face the highest DPS concentration. Outer defenses are arranged in a graduated pattern where each ring provides increasing damage, luring attackers deeper into a trap. {hero} serves as a mobile defense that fills gaps in the static defense coverage. The layout uses strategic open spaces that break troop AI pathing, causing units to wander into kill zones instead of progressing toward their targets.',

    'This {hallType}{level} defense base features {adjective} ring-based layering where each ring provides a different type of defensive punishment. The outer ring focuses on splash damage to handle swarm troops, the middle ring provides point DPS for tanks, and the inner ring combines both for maximum effect. The {keyDefense} transitions between rings, covering the handoff zones where troops move from one ring to the next. {hero} defends the inner ring, providing burst damage against troops that have already been weakened by the outer layers. This layered approach ensures that no single troop composition can efficiently clear the entire base.',

    'This {adjective} {hallType}{level} defense layout uses a hexagonal grid pattern that optimizes defense placement geometry. The {keyDefense} sits at one hexagonal vertex where it provides coverage across multiple grid cells. Each hexagonal cell contains a combination of defenses that cover ground and air, ensuring no cell is weak against any specific attack type. {hero} moves between cells, providing reinforcement to whichever section is under attack. The hexagonal arrangement naturally creates efficient wall usage and minimizes dead space between compartments, resulting in a base where nearly every tile is within range of at least two defensive buildings.',

    'Pure defensive efficiency drives this {adjective} {hallType}{level} base design. The {keyDefense} is placed at the mathematical center of the base to maximize its effective coverage area. Every defense around it is positioned based on range calculations to ensure maximum overlap with adjacent defenses. {hero} covers the widest gap in the static defense network, acting as a roaming plug for the one area where defensive coverage is thinnest. The layout uses corner buildings to extend the defensive perimeter, forcing attackers to deploy troops further from the core and spend more time under fire during their approach. Traps are placed at the intersections of multiple defense ranges for maximum impact.',

    'This {adjective} {hallType}{level} defense base creates a layered fortress where breaking through each layer comes at a steep cost in troops and spells. The {keyDefense} provides backbone damage from a position that attackers cannot easily neutralize without significant investment. Splash defenses are paired with point defenses throughout the base, so that every encounter involves both types of damage. {hero} defends a critical chokepoint where troops must pass to advance from the second layer to the third. The base uses double wall segments in key locations to slow down Wall Breaker efficiency, forcing attackers to spend additional housing space on breaching tools.',

    'This {hallType}{level} defense layout takes a {adjective} approach by combining compact core design with extended defensive wings. The {keyDefense} covers the core while wing defenses extend the base\'s defensive reach outward. Troops that attack the wings are engaged by wing defenses and core defenses simultaneously, while troops that target the core must first clear the wings. {hero} occupies the junction between core and wings, engaging any attacking force. The wing design also creates natural flanking positions where defenses can hit troops from the side as they path toward the center.',

    'Every defense in this {adjective} {hallType}{level} base is placed to achieve the maximum possible engagement time with attacking troops. The {keyDefense} has the longest engagement window, positioned so that troops enter its range early and remain within range for their entire path through the base. Supporting defenses are staggered so that as troops leave one defense\'s range they enter another\'s, maintaining continuous damage output. {hero} provides supplemental damage in the zone where defensive coverage transitions between major buildings. The base achieves an exceptionally high theoretical DPS-per-second-of-attack metric.',

    'This {adjective} {hallType}{level} defense base uses a compressed layout that fits maximum defensive buildings into the smallest possible area. The {keyDefense} benefits from this compression by having its range overlap with more adjacent defenses than in a spread design. Every defensive building fires on troops within the compressed zone, creating an overwhelming volume of fire that melts even the tankiest armies. {hero} occupies the densest section, adding significant burst damage on top of the already-high passive DPS. The trade-off of this design is that area-of-effect spells gain extra value, but the raw damage output typically overwhelms attackers before they can use enough spells to make a difference.',

    'This {hallType}{level} defense base features a {adjective} spiral design where defenses wrap around a central point in increasingly powerful layers. The {keyDefense} guards the center of the spiral, providing constant fire on troops as they navigate the curving path. Each curve of the spiral contains a mix of defense types that handle different troop compositions. {hero} patrols the innermost curve, providing the final defensive barrier. The spiral naturally creates a long path for attacking troops, maximizing the time they spend under fire and allowing defenses at the beginning of the spiral to reset and engage second waves of troops.',
  ],

  progress: [
    'This {hallType}{level} progress base organizes all buildings into clearly defined sections for easy upgrade tracking. The {keyDefense} and other point defenses are grouped in one area, splash defenses in another, and resource buildings in a third. {hero} sits in a designated hero section alongside hero altars and pets. This organizational layout lets you see at a glance which building categories still need upgrades, making your upgrade planning efficient and systematic. While not optimized for competitive defense, the base maintains functional defensive coverage through basic compartmentalization that discourages casual raids.',

    'Upgrade tracking becomes effortless with this {adjective} {hallType}{level} progress base that arranges buildings in rows by type and level. The {keyDefense} sits alongside other defenses of the same category, making it easy to spot which ones are behind in upgrades. Each row progresses from lowest to highest level, giving you a visual upgrade roadmap. {hero} is placed in a hero showcase area that highlights current hero levels. Resource buildings form their own section so you can prioritize collectors and storages independently from defensive upgrades. This layout is essential for players managing complex upgrade paths at higher Town Hall levels.',

    'This {adjective} {hallType}{level} progress base uses a grid layout where each cell contains buildings of the same type. The {keyDefense} occupies a cell with its counterparts, arranged by upgrade level for immediate visual comparison. Defensive buildings are separated by category: cannons, archer towers, mortars, wizard towers, air defenses, and special defenses each get their own grid section. {hero} is placed in a dedicated hero tracking area. Resource buildings fill the remaining grid cells with clear separation between Gold, Elixir, and Dark Elixir economy buildings. This systematic approach to base organization saves time when planning your next builder assignment.',

    'Managing upgrades at {hallType}{level} requires clear visibility into your progress, and this {adjective} progress base delivers exactly that. The {keyDefense} is grouped with similar defenses in a section labeled by type, making it obvious which buildings need attention. The layout separates offensive buildings from defensive buildings, and further subdivides defenses into point damage, splash damage, and air-targeting categories. {hero} has a prominent position that showcases your hero upgrade status. Traps and walls are organized in their own sections, reminding you not to neglect these often-forgotten upgrades.',

    'This {hallType}{level} progress layout uses a {adjective} campus-style design where different building categories occupy distinct zones like departments in a university. The {keyDefense} sits in the defense department alongside all other defensive buildings, arranged for easy comparison. The army zone contains Barracks, Army Camps, and spell factories. The economy zone houses all resource buildings. {hero} occupies the hero zone with space for future hero additions. This zoned approach provides excellent upgrade visibility while maintaining enough structural integrity to discourage opportunistic attacks.',

    'Designed for the organized player, this {adjective} {hallType}{level} progress base transforms your village into a clear upgrade dashboard. The {keyDefense} and all defenses are sorted into rows by type, creating a visual checklist where maxed buildings at one end and underleveled buildings at the other tell you exactly where to focus. {hero} is displayed prominently with space to see hero level progress at a glance. Resource buildings are arranged to show collection and storage capacity clearly. This layout turns the otherwise chaotic village view into an organized planning tool that makes every builder decision faster and more informed.',

    'This {adjective} {hallType}{level} progress base takes a unique spreadsheet approach, arranging buildings in columns by category with the strongest at the top and weakest at the bottom. The {keyDefense} heads its column, with lower-level counterparts below it. This top-to-bottom arrangement makes it instantly clear where your defensive gaps are. {hero} anchors a dedicated column for heroes and their equipment. The border of the base uses walls arranged in level order, so even wall upgrades are visually tracked. While not built for competitive play, this layout provides invaluable planning utility for serious players managing their upgrade journey.',

    'Efficient upgrade management is the purpose of this {adjective} {hallType}{level} progress base. The {keyDefense} sits in a clearly defined defensive cluster that separates point defenses from splash defenses from air defenses. Each cluster is arranged so that underleveled buildings stand out visually against their maxed neighbors. {hero} occupies a position that reflects upgrade priority at this Town Hall level. The base includes dedicated zones for Army buildings, resource buildings, and special buildings like the Clan Castle and Siege Workshop. Trap positions are organized rather than hidden, making them easy to locate for upgrades.',

    'This {hallType}{level} progress layout features a {adjective} calendar-style arrangement where buildings are positioned in a structured grid that mirrors a planning board. The {keyDefense} and other high-priority upgrades are placed in prominent positions that draw your eye first. Lower-priority buildings occupy peripheral positions. {hero} sits at the top of the layout as a reminder to keep hero upgrades active. The base provides enough compartmentalization to offer basic defense while primarily serving as an upgrade tracking tool that saves you from manually checking every building when your builder becomes available.',

    'This {adjective} {hallType}{level} progress base uses concentric rings where each ring represents a different upgrade priority tier. The innermost ring contains your highest-priority upgrades including the {keyDefense} and other essential defenses. The middle ring holds medium-priority buildings, and the outer ring contains buildings that can wait. {hero} sits inside the priority ring as a reminder of hero upgrade importance. This tier-based organization lets you instantly identify which building your next builder should work on, eliminating the guesswork from upgrade planning and ensuring you progress through your Town Hall level efficiently.',

    'Organization meets functionality in this {adjective} {hallType}{level} progress base that groups buildings by their upgrade cost resource type. Gold-costing buildings occupy one section with the {keyDefense} prominently placed, Elixir-costing buildings in another, and Dark Elixir buildings in a third. This arrangement makes it easy to plan upgrades based on which resource you currently have available. {hero} sits in the Dark Elixir section as a reminder that hero upgrades compete with dark troop upgrades for the same resource. Each section maintains basic defensive coverage so that the base is not completely defenseless while you focus on upgrading.',

    'This {hallType}{level} progress base features a {adjective} museum-style layout where every building type gets its own exhibit space. The {keyDefense} anchors the defense exhibit, showcased alongside its fellow defensive buildings in an organized display. The troop exhibit contains all army-related buildings, the economy exhibit houses resource buildings, and the special exhibit features unique structures. {hero} gets a dedicated hero exhibit with enough space to showcase all available heroes at this level. While purely functional rather than competitive, this layout makes upgrade planning a breeze and ensures you never overlook a building that needs attention.',
  ],
};

// -----------------------------------------------------------------------------
// KEY FEATURES POOL
// 20+ per base type, selected via baseNumber modulo
// Each: { title, description }
// -----------------------------------------------------------------------------
const KEY_FEATURES = {
  war: [
    { title: 'Anti-Queen-Walk Perimeter', description: 'Alternating high-HP and low-HP buildings around the outer ring disrupt Archer Queen targeting AI, preventing efficient value farming from the outside.' },
    { title: 'Centralized Clan Castle', description: 'The Clan Castle is positioned deep within the base, requiring attackers to invest troops and spells just to lure and eliminate defensive CC troops.' },
    { title: 'Spread Air Defenses', description: 'Air Defenses are placed in separate compartments so that no Lightning Spell combination can take out more than one at a time.' },
    { title: 'Double Giant Bomb Spots', description: 'Paired Giant Bombs are positioned along common Hog Rider pathing routes, capable of eliminating an entire Hog Rider pack instantly.' },
    { title: 'Anti-Siege-Machine Entry', description: 'The base layout makes it difficult for siege machines to path directly to the Town Hall, forcing them into off-target compartments.' },
    { title: 'Isolated Hero Platforms', description: 'Heroes are placed on isolated islands where attacking troops cannot easily engage them without entering kill zones.' },
    { title: 'Tornado Trap Placement', description: 'Tornado Traps pull troops away from the Town Hall at critical moments, disrupting timing-dependent attacks.' },
    { title: 'Asymmetric Layout', description: 'The non-symmetrical design prevents attackers from predicting trap locations based on visual symmetry.' },
    { title: 'Multi-Layer Walls', description: 'Three or more wall layers surround the core, requiring multiple Jump Spells or Wall Breaker groups to breach.' },
    { title: 'Dead Zone Funneling', description: 'Strategic empty spaces between compartments break troop AI targeting, causing groups to split unpredictably.' },
    { title: 'Eagle Artillery Protection', description: 'The Eagle Artillery sits in a compartment that is difficult to reach without fully committing to a core dive.' },
    { title: 'Sweeper Angle Optimization', description: 'Air Sweepers are angled to push back the most common LavaLoon and Electro Dragon deployment arcs.' },
    { title: 'Spring Trap Corridors', description: 'Narrow corridors between defenses contain Spring Traps that eliminate groups of Hog Riders or Valkyries.' },
    { title: 'Inferno Tower Positioning', description: 'Inferno Towers are placed where they can target tanks without being easily reached by Lightning or Freeze Spells.' },
    { title: 'Anti-Funnel Design', description: 'Corner buildings and outer structures are positioned to make clean funneling extremely difficult.' },
    { title: 'Compartment Independence', description: 'Each compartment functions as an independent defensive unit, so breaching one does not create access to others.' },
    { title: 'Seeking Air Mine Coverage', description: 'Seeking Air Mines are positioned to intercept Healers supporting Queen Walk and Lava Hounds in air attacks.' },
    { title: 'X-Bow Coverage Angles', description: 'X-Bows are set to cover the widest possible area, with overlapping ranges that create no-fly zones.' },
    { title: 'Trap Variety', description: 'A mix of trap types ensures that no single troop composition can avoid all trap damage.' },
    { title: 'Scattershot Positioning', description: 'Scattershots are placed to cover high-traffic areas where troops naturally group up during attacks.' },
    { title: 'Anti-Recall Design', description: 'Defensive buildings are positioned to punish Recall Spell usage by maintaining fire on repositioned troops.' },
  ],
  farm: [
    { title: 'Centralized Storage Cluster', description: 'All resource storages are grouped in the most protected area of the base, requiring a full attack to reach any significant loot.' },
    { title: 'Dark Elixir Deep Core', description: 'The Dark Elixir storage sits behind the most wall layers, making it the hardest single resource to steal.' },
    { title: 'Collector Distraction Ring', description: 'Resource collectors form an outer ring that provides easy loot to discourage raiders from pushing deeper.' },
    { title: 'Splash Defense Coverage', description: 'Wizard Towers and Mortars cover all storage positions, quickly eliminating farming troops like Goblins and Archers.' },
    { title: 'Exposed Town Hall', description: 'The Town Hall is placed in an accessible position, offering a free star to discourage full attacks on your resources.' },
    { title: 'Storage Separation', description: 'Storages are split across multiple compartments so that breaching one area only exposes a fraction of total resources.' },
    { title: 'Anti-Goblin Pathing', description: 'Wall segments channel Goblins and Sneaky Goblins through splash damage zones before they can reach storages.' },
    { title: 'High-HP Building Shields', description: 'Army Camps and Barracks serve as high-HP shields that absorb damage before troops reach storage compartments.' },
    { title: 'Wizard Tower Coverage', description: 'Every storage is within range of at least one Wizard Tower, providing reliable splash damage against swarm raids.' },
    { title: 'Mortar Kill Zones', description: 'Mortars are positioned to cover the approaches to storage areas, softening troops before they engage point defenses.' },
    { title: 'Anti-Miner Design', description: 'Defenses are arranged to continuously damage Miners as they underground between targets near storages.' },
    { title: 'Resource Spread Strategy', description: 'Gold, Elixir, and Dark Elixir storages are in different sections, preventing any single attack from looting all three types.' },
    { title: 'Trap-Protected Storages', description: 'Giant Bombs and Spring Traps protect the paths leading to storage compartments, eliminating raiding troops before they arrive.' },
    { title: 'Double Wall Storage Pockets', description: 'Each storage pocket uses double walls that require extra Wall Breakers to penetrate.' },
    { title: 'Cannon Coverage', description: 'Cannons provide consistent point damage against tanky farming troops like Giants and Golems near storage areas.' },
    { title: 'Air Defense Near Storages', description: 'Air Defenses protect storage areas from Balloon-based farming and Healer-supported raids.' },
    { title: 'Tesla Surprise', description: 'Hidden Teslas near storages activate when troops approach, providing unexpected burst damage on raiding parties.' },
    { title: 'Bomb Tower Protection', description: 'Bomb Towers near storage clusters deal area damage that devastates groups of Hog Riders or Miners.' },
    { title: 'Anti-Barch Spacing', description: 'Buildings are spaced to prevent Barbarians and Archers from quickly progressing toward storages.' },
    { title: 'Funnel-Breaking Perimeter', description: 'Outer buildings are arranged to prevent clean funneling toward storage compartments.' },
  ],
  trophy: [
    { title: 'Centralized Town Hall', description: 'The Town Hall sits at the absolute center of the base behind maximum wall layers and defensive coverage.' },
    { title: 'Anti-Queen-Walk Ring', description: 'The outer ring uses building placement that disrupts Queen Walk pathing and prevents easy percentage.' },
    { title: 'Dense Air Defense Core', description: 'Air Defenses form a tight triangle around the Town Hall, making air-based snipes extremely risky.' },
    { title: 'Seeking Air Mine Placement', description: 'Seeking Air Mines intercept Healers and Lava Hounds approaching from the most common deployment angles.' },
    { title: 'Double Wall Core', description: 'Two layers of walls surround the Town Hall, requiring multiple breaching attempts to reach it.' },
    { title: 'Kill Zone Design', description: 'Multiple overlapping defense ranges create kill zones around the Town Hall that melt attacking troops.' },
    { title: 'Hero Placement Near TH', description: 'Heroes are positioned adjacent to the Town Hall for maximum defensive value during core pushes.' },
    { title: 'Tornado Trap Core Defense', description: 'Tornado Traps pull troops away from the Town Hall at the critical moment of a core push.' },
    { title: 'Time-Wasting Outer Ring', description: 'Outer buildings are spread to consume attacker time, often resulting in timeout failures.' },
    { title: 'Sweeper Protection', description: 'Air Sweepers angle toward the most common air deployment directions to push back aerial attacks.' },
    { title: 'High DPS Core', description: 'The highest DPS defenses are concentrated around the Town Hall for maximum defensive output.' },
    { title: 'Anti-Siege Pathing', description: 'The layout prevents siege machines from pathing directly to the Town Hall compartment.' },
    { title: 'Inferno Tower Guard', description: 'Inferno Towers are positioned to engage troops during the critical last phase of attacks near the Town Hall.' },
    { title: 'Eagle Artillery Overwatch', description: 'The Eagle Artillery provides map-wide damage that weakens attacking forces before they reach the core.' },
    { title: 'Storage Shields', description: 'High-HP storage buildings surround the Town Hall, absorbing damage and slowing troop progression.' },
    { title: 'Anti-Blizzard Layout', description: 'Town Hall positioning counters Blizzard Spell combinations that attempt to destroy it from outside walls.' },
    { title: 'Compact Core Design', description: 'The core is compact to minimize the area attackers need to breach for the Town Hall star.' },
    { title: 'Trap Density', description: 'High trap concentration around the Town Hall ensures that breakthrough attempts trigger multiple traps.' },
    { title: 'X-Bow Core Coverage', description: 'X-Bows set to both ground and air provide versatile defense over the Town Hall area.' },
    { title: 'Monolith Protection', description: 'The Monolith provides percentage-based damage that counters high-HP troops pushing toward the Town Hall.' },
    { title: 'Anti-Recall Positioning', description: 'Defense placement ensures Recall Spell usage near the Town Hall still results in troop losses.' },
  ],
  hybrid: [
    { title: 'Balanced Core Layout', description: 'The Town Hall and key storages share the central compartment, providing dual-purpose protection.' },
    { title: 'Distributed Storages', description: 'Resource storages are spread between the core and secondary compartments for balanced protection.' },
    { title: 'Versatile Defense Mix', description: 'Equal focus on anti-air and anti-ground defenses handles all attack types effectively.' },
    { title: 'Centralized Clan Castle', description: 'The Clan Castle sits centrally to provide defensive troops against war attacks and raids alike.' },
    { title: 'Multi-Purpose Traps', description: 'Trap placement works against both organized war attacks and casual farming raids.' },
    { title: 'Flexible Wall Layout', description: 'Wall segments create compartments that protect both the Town Hall and resources simultaneously.' },
    { title: 'Hero Bridge Position', description: 'Heroes patrol between the Town Hall and storage sections, providing value regardless of attack target.' },
    { title: 'Air and Ground Balance', description: 'Defense placement handles both air and ground strategies without leaving gaps in either.' },
    { title: 'Splash Over Storages and TH', description: 'Splash defenses are positioned to cover both the Town Hall and nearby storage buildings.' },
    { title: 'Dark Elixir Priority', description: 'The Dark Elixir storage receives extra protection as the most valuable resource at higher levels.' },
    { title: 'War-Ready Structure', description: 'The compartmentalization is strong enough for Clan War defense while also protecting resources.' },
    { title: 'Anti-Snipe Design', description: 'No building can be easily sniped from outside the walls, forcing full attacks for any value.' },
    { title: 'Resource-Trophy Balance', description: 'The design sacrifices neither trophies nor resources, providing 70-80% protection for both.' },
    { title: 'Collector Placement', description: 'Collectors sit in semi-protected positions that are annoying to reach but not worth a full attack.' },
    { title: 'Dual Kill Zones', description: 'Kill zones protect both the Town Hall approach and the main storage cluster.' },
    { title: 'Inferno Coverage', description: 'Inferno Towers cover both the Town Hall section and the largest storage compartment.' },
    { title: 'Point Defense Spread', description: 'Cannons and Archer Towers are spread evenly to handle both war and farming attacks.' },
    { title: 'Bomb Tower Utility', description: 'Bomb Towers are placed where they protect resources while also countering Hog Rider pathing.' },
    { title: 'Eagle Coverage', description: 'The Eagle Artillery covers both the Town Hall area and the primary storage cluster.' },
    { title: 'Everyday Versatility', description: 'Works well for daily multiplayer defense, Clan Wars, and CWL without needing to swap layouts.' },
    { title: 'Anti-Hero-Dive Core', description: 'The core design punishes hero dives targeting either the Town Hall or the Dark Elixir storage.' },
  ],
  cwl: [
    { title: 'Anti-2-Star Focus', description: 'Every design decision prioritizes preventing the second star, which is the most impactful in CWL scoring.' },
    { title: 'Deep Town Hall Placement', description: 'The Town Hall is buried behind maximum compartments, requiring perfect execution to reach.' },
    { title: 'Heavy Compartmentalization', description: 'Eight or more distinct compartments force attackers to clear each one individually, eating into attack time.' },
    { title: 'Time-Wasting Design', description: 'Outer buildings are spread to consume clock time, causing attacks to timeout before reaching the core.' },
    { title: 'Anti-Mismatch Structure', description: 'The design holds up even against attacks from one or two Town Hall levels higher, which is common in CWL.' },
    { title: 'Centralized CC for Early Lure', description: 'The Clan Castle position forces early troop commitment, wasting 20-30 seconds of attack time.' },
    { title: 'Kill Squad Trap', description: 'The most obvious entry point leads into a trap-heavy kill zone that eliminates entire kill squads.' },
    { title: 'Wide Funnel Requirements', description: 'Attackers need extensive funneling to prevent troops from walking around the base instead of through it.' },
    { title: 'Percentage Defense', description: 'Buildings are distributed to make reaching 50% destruction require clearing nearly two-thirds of the base.' },
    { title: 'Single-Attack Optimization', description: 'Designed for CWL format where opponents cannot adjust strategy after seeing defenses in action.' },
    { title: 'Moat-Style Spacing', description: 'Open spaces between walls prevent easy Wall Breaker connections and waste Jump Spell value.' },
    { title: 'Anti-Cookie-Cutter Design', description: 'The layout counters common CWL attack templates that many clans distribute to their members.' },
    { title: 'Scattershot Spread', description: 'Scattershots cover different base sections, preventing attackers from avoiding splash damage.' },
    { title: 'Eagle Coverage Arc', description: 'The Eagle Artillery covers the largest possible area to damage troops throughout their attack.' },
    { title: 'Hero Skill Check', description: 'Heroes are positioned to create a decisive engagement that separates successful attacks from failures.' },
    { title: 'Spell Drain Design', description: 'The layout forces early spell usage so attackers run out before reaching the Town Hall.' },
    { title: 'Trap Variety Against Meta', description: 'Traps are chosen and placed to counter the most popular CWL attack strategies at this level.' },
    { title: 'X-Bow Fire Lanes', description: 'X-Bows create long fire lanes that damage troops throughout their journey through the base.' },
    { title: 'Corner Hut Prevention', description: 'All buildings are within the main base structure, preventing troll corner hut time-wasters.' },
    { title: 'Inferno Tower Zones', description: 'Inferno Towers create distinct zones that attackers must respect, limiting approach options.' },
    { title: 'Monolith as Star Denial', description: 'The Monolith provides percentage-based damage that counters high-HP troops used in CWL smash attacks.' },
  ],
  defense: [
    { title: 'Maximum DPS Coverage', description: 'Every tile within the base falls within range of at least two defensive buildings, ensuring continuous damage.' },
    { title: 'Overlapping Splash Zones', description: 'Wizard Towers and Mortars have overlapping ranges that create devastating splash damage pockets.' },
    { title: 'Interlocking Kill Zones', description: 'Multiple defenses focus fire on the same areas, creating zones where troop survival is measured in seconds.' },
    { title: 'Optimized Wall Funneling', description: 'Walls channel troops into predetermined paths where defensive fire is at maximum concentration.' },
    { title: 'Ring Defense Layering', description: 'Defenses are arranged in concentric rings where each ring provides increasing DPS output.' },
    { title: 'Point Defense Grid', description: 'Cannons and Archer Towers form a grid pattern that provides continuous single-target damage across the base.' },
    { title: 'Air Defense Network', description: 'Air-targeting defenses are networked to provide overlapping coverage that eliminates air attacks.' },
    { title: 'Trap Saturation', description: 'Traps are concentrated in high-traffic paths, ensuring maximum activation rate during attacks.' },
    { title: 'Tesla Farm Zone', description: 'Hidden Teslas are clustered to create a surprise DPS zone that overwhelms troops in a specific area.' },
    { title: 'Bomb Tower Kill Box', description: 'Bomb Towers are placed where troops naturally group up, maximizing their splash damage value.' },
    { title: 'Sweeper Field Control', description: 'Air Sweepers control the approach vectors available to air-based attacks.' },
    { title: 'X-Bow Crossfire', description: 'X-Bows are positioned to create intersecting fire lanes that cover the entire base interior.' },
    { title: 'Inferno Melt Zones', description: 'Inferno Towers are placed where their increasing damage over time can fully ramp up against tanks.' },
    { title: 'Eagle Overwatch', description: 'The Eagle Artillery provides base-wide splash damage that softens all incoming troops.' },
    { title: 'Scattershot Spread', description: 'Scattershots cover wide areas where troops naturally spread out during the mid-attack phase.' },
    { title: 'Monolith Anchor', description: 'The Monolith provides percentage-based damage that scales against any troop HP level.' },
    { title: 'Spell Tower Automation', description: 'Spell Towers automatically cast defensive spells at optimal moments without defender input.' },
    { title: 'Hero Kill Squad', description: 'Defending heroes are positioned to form their own mini kill squad against attacking troops.' },
    { title: 'Anti-Funnel Perimeter', description: 'The outer base structure prevents clean funneling, causing troops to spread into kill zones.' },
    { title: 'Continuous Damage Chain', description: 'As troops move through the base, they are never outside of defensive range, taking continuous damage.' },
    { title: 'Reflector Bounce Damage', description: 'The Reflector bounces projectiles to hit additional targets, multiplying effective defensive output.' },
  ],
  progress: [
    { title: 'Building Category Rows', description: 'All buildings of the same type are arranged in rows, making upgrade status instantly visible.' },
    { title: 'Defense Section Organization', description: 'Defenses are grouped by category: point, splash, and air-targeting in separate sections.' },
    { title: 'Resource Zone', description: 'All resource buildings occupy a dedicated zone for easy monitoring of economy upgrades.' },
    { title: 'Hero Showcase', description: 'Heroes are displayed prominently with clear visibility of their current levels.' },
    { title: 'Army Building Section', description: 'Barracks, Army Camps, and Spell Factories are grouped for quick assessment of army upgrades.' },
    { title: 'Upgrade Priority Layout', description: 'Buildings are arranged by upgrade priority, with highest-priority buildings in the most visible positions.' },
    { title: 'Level Comparison Setup', description: 'Same-type buildings are placed side by side so level differences are immediately obvious.' },
    { title: 'Wall Tracking Row', description: 'Walls are arranged in visible rows that show wall upgrade progress at a glance.' },
    { title: 'Trap Visibility', description: 'Traps are placed in visible locations rather than hidden spots, making their upgrade status easy to check.' },
    { title: 'Builder Priority Guide', description: 'The layout visually suggests which building should receive your next available builder.' },
    { title: 'Functional Basic Defense', description: 'Despite being organizational, the base maintains enough defensive structure to discourage casual raids.' },
    { title: 'Siege Workshop Display', description: 'Siege-related buildings are displayed for easy tracking of siege machine upgrades.' },
    { title: 'Pet House Section', description: 'The Pet House and pet-related buildings have their own dedicated display area.' },
    { title: 'Cost-Based Grouping', description: 'Buildings are grouped by upgrade cost type (Gold, Elixir, Dark Elixir) for resource planning.' },
    { title: 'Quick Scan Design', description: 'The entire base can be scanned in seconds to identify what needs upgrading next.' },
    { title: 'Spell Factory Zone', description: 'Spell Factories are prominently placed to remind you of spell upgrade priorities.' },
    { title: 'Laboratory Highlight', description: 'The Laboratory is centrally placed as a reminder to keep troop upgrades running.' },
    { title: 'Clan Castle Position', description: 'The Clan Castle is placed where you can easily check its level and plan its upgrade.' },
    { title: 'Town Hall Visibility', description: 'The Town Hall is displayed prominently as the centerpiece of your upgrade journey.' },
    { title: 'Clean Grid Layout', description: 'The grid pattern makes it easy to count buildings and verify you have placed everything.' },
  ],
};

// -----------------------------------------------------------------------------
// PROS POOL
// 30+ per base type, selected via baseNumber modulo
// -----------------------------------------------------------------------------
const PROS_POOL = {
  war: [
    'Excellent anti-3-star design that consistently holds against common attack strategies',
    'Well-spaced air defenses that counter LavaLoon approaches from any angle',
    'Centralized Clan Castle makes it expensive for attackers to deal with defensive troops',
    'Strong compartmentalization prevents chain-breaking through multiple sections',
    'Hero positioning creates a natural skill check that weaker attackers fail',
    'Trap placement punishes the most popular attack entries at this level',
    'Asymmetric design prevents attackers from guessing trap locations',
    'Works well with various Clan Castle defensive troop combinations',
    'Outer ring wastes attacker time and troops before the real fight begins',
    'Dead zones between compartments break troop AI pathing effectively',
    'Eagle Artillery coverage extends over the majority of the base area',
    'Anti-Queen-Walk perimeter discourages easy value from the outside',
    'Multiple Giant Bomb locations threaten Hog Rider and Miner pathing',
    'Inferno Tower placement makes it difficult to Freeze both simultaneously',
    'The layout transitions well between single and multi-target Inferno modes',
    'Sweeper angles effectively counter the most common air deployment directions',
    'Scattershot positions prevent super troop spam from succeeding easily',
    'The base design looks deceptively simple, leading to overconfident attacks',
    'Wall structure forces multiple Jump Spell usage or Wall Breaker groups',
    'Spring Trap corridors eliminate groups of medium-weight troops efficiently',
    'Tornado Trap placement disrupts critical attack timing windows',
    'The design holds up well even after being scouted by opponents',
    'X-Bow positions provide consistent DPS coverage during all attack phases',
    'Seeking Air Mines are positioned to intercept Healers at key moments',
    'The base forces attackers to split their army, reducing coordinated push power',
    'Bomb Tower positions counter both Hog Riders and ground-based kill squads',
    'The core design makes it very difficult to get a clean hero dive',
    'Defensive buildings provide overlapping coverage that eliminates blind spots',
    'The layout punishes attackers who do not properly funnel their troops',
    'Strong against both spam attacks and skilled strategic approaches',
    'Anti-siege design prevents Wall Wreckers from reaching the Town Hall directly',
  ],
  farm: [
    'Resource storages are extremely well-protected in deep compartments',
    'Dark Elixir storage has the maximum possible protection in the core',
    'Collector ring provides enough exposed loot to satisfy casual raiders',
    'Splash defenses cover all storage approaches effectively',
    'Town Hall placement discourages full army attacks on your resources',
    'Storage separation means attackers can only reach a portion of your loot',
    'Anti-Goblin pathing forces Sneaky Goblins through splash damage zones',
    'High-HP building shields absorb damage before raiders reach storages',
    'The layout retains 70-80% of resources against most farming attacks',
    'Wizard Tower coverage ensures swarm raids are eliminated quickly',
    'Double wall segments around storages slow down Wall Breaker efficiency',
    'The design works well during both active play and overnight shielding',
    'Mortar coverage softens farming troops before they reach point defenses',
    'Hidden Teslas near storages provide surprise burst damage on raiders',
    'The base discourages full attacks by making resources hard to reach',
    'Bomb Tower placement devastates grouped farming troops near storages',
    'Anti-Barch spacing prevents quick Barbarian-Archer raids from succeeding',
    'Resource buildings are balanced between all compartments evenly',
    'Spring Traps eliminate Giants and other tanks approaching storage areas',
    'The layout is effective across all trophy ranges for resource protection',
    'Collector buildings serve as effective time-wasters for attacking troops',
    'Each storage pocket has its own dedicated defensive coverage',
    'The base design minimizes total resource loss per attack on average',
    'Air Defense placement protects against Balloon-based farming strategies',
    'The design maintains effectiveness even as collectors fill with resources',
    'Trap placement near storages catches raiders off guard consistently',
    'The layout makes it unprofitable for attackers to push past the outer ring',
    'Cannon coverage provides reliable point damage against farming tanks',
    'Storage compartments are designed to waste attacker spells on non-core areas',
    'The base is easy to adjust as you upgrade defenses during farming periods',
    'X-Bow coverage protects the innermost storage compartments from all angles',
  ],
  trophy: [
    'Town Hall is nearly impossible to reach without a full committed attack',
    'Anti-Queen-Walk perimeter prevents easy percentage from the outside',
    'Dense air defense core makes aerial Town Hall snipes extremely risky',
    'Double wall layers require multiple breaching attempts to penetrate',
    'Kill zones around the Town Hall melt attacking troops rapidly',
    'Hero placement provides burst damage against core push attempts',
    'Tornado Traps disrupt critical attack timing near the Town Hall',
    'Time-wasting outer ring causes many attacks to fail on the clock',
    'Seeking Air Mines intercept Healers at the most impactful moments',
    'The design consistently denies 1-star results against incomplete attacks',
    'Sweeper angles push back the most common aerial deployment paths',
    'Storage buildings serve as high-HP shields around the Town Hall',
    'Compact core minimizes the area attackers need to breach for the star',
    'The base performs well in Legend League against top-level attacks',
    'Trap concentration around the core provides multiple defensive surprises',
    'X-Bows cover the Town Hall area from multiple angles simultaneously',
    'Anti-Blizzard positioning prevents spell-based Town Hall destruction',
    'Inferno Towers create no-go zones that restrict approach options',
    'Eagle Artillery weakens attacking forces before they reach the core',
    'The design forces attackers to use their entire army for any star',
    'Monolith placement provides percentage-based damage against any tank',
    'Anti-siege pathing prevents direct siege machine routes to the Town Hall',
    'The base punishes partial attacks with zero stars consistently',
    'Multiple defense types overlap near the Town Hall for maximum protection',
    'Spell Tower automation provides defensive spells at optimal timing',
    'The layout adapts well to different trophy ranges and attack styles',
    'Air and ground defenses are balanced around the Town Hall zone',
    'Anti-funnel design makes it difficult to create a clean path to the core',
    'The base performs consistently across multiple defense logs',
    'Corner buildings extend the time needed for percentage-based attacks',
    'Scattershot coverage around the core handles multi-troop compositions',
  ],
  hybrid: [
    'Provides balanced protection for both Town Hall and resource storages',
    'Works effectively as both a war base and a multiplayer defense',
    'Eliminates the need to constantly switch between different base layouts',
    'Town Hall and storages benefit from shared defensive coverage',
    'Versatile trap placement handles both organized and casual attacks',
    'Balanced air and ground defense prevents any single attack type advantage',
    'Heroes provide defensive value against attacks targeting either trophies or resources',
    'The design retains 70-80% of resources while also protecting trophies',
    'Strong compartmentalization serves both war defense and resource protection',
    'Suitable for CWL, Clan Wars, and everyday multiplayer defense',
    'Dark Elixir storage receives dedicated protection as the highest-priority resource',
    'The layout handles mismatch attacks reasonably well in war scenarios',
    'Splash defenses cover both the Town Hall area and storage compartments',
    'Collector placement provides enough distraction value without being wasteful',
    'The base design scales well across different attack strategies',
    'Inferno Tower positions protect both high-value targets simultaneously',
    'Kill zones serve dual purpose protecting both the TH and storage areas',
    'Eagle Artillery coverage spans both the Town Hall zone and storage clusters',
    'Anti-hero-dive design protects both the Town Hall and Dark Elixir storage',
    'The base performs consistently without needing frequent layout adjustments',
    'Bomb Tower placement counters common farming and war attacks equally',
    'The design maintains its effectiveness as collectors accumulate resources',
    'X-Bow coverage provides continuous DPS over both defensive objectives',
    'Seeking Air Mines protect both the Town Hall area and storage sections from air raids',
    'The layout offers genuine versatility rather than compromising on everything',
    'Spring Traps cover paths to both the Town Hall and key storage buildings',
    'The base gives a solid defense in both Legend League and Clan Wars',
    'Scattershot positions cover both defensive priorities without favoritism',
    'Tornado Traps protect both the Town Hall and the highest-value storage area',
    'Works well with any Clan Castle troop combination for defense',
    'The layout minimizes weaknesses rather than maximizing a single strength',
  ],
  cwl: [
    'Optimized for single-attack format where opponents cannot adjust strategies',
    'Anti-2-star design denies the crucial second star that decides CWL wars',
    'Heavy compartmentalization wastes attacker time and spell inventory',
    'Holds up against attacks from one or two Town Hall levels above',
    'Town Hall is buried deep enough that many attacks timeout before reaching it',
    'Clan Castle placement forces early and costly troop engagement',
    'Kill zones at common entry points eliminate entire kill squads',
    'Wide funnel requirements prevent easy troop deployment',
    'Percentage defense makes even 50% destruction difficult to achieve',
    'The design capitalizes on the pressure of single-attack CWL format',
    'Anti-cookie-cutter design counters common distributed attack plans',
    'Scattershot spread prevents attackers from avoiding splash damage',
    'Eagle Artillery coverage arc damages troops throughout their entire attack',
    'Hero positioning creates decisive engagements that many CWL attackers fail',
    'The layout drains spells early, leaving attackers without resources for the core',
    'Trap variety handles the most popular CWL meta attacks at this level',
    'X-Bow fire lanes provide consistent damage throughout the attack timeline',
    'Inferno Tower zones force attackers to respect specific areas',
    'Monolith counters high-HP smash troops commonly used in CWL',
    'The base forces opponents to bring their absolute best execution',
    'Moat-style spacing prevents efficient Wall Breaker usage',
    'The design regularly produces one-star results against strong attacks',
    'Building distribution makes percentage-based stars extremely costly',
    'Anti-siege design limits the effectiveness of siege machine entries',
    'The base works well regardless of your clan\'s defensive CC troop choices',
    'Corner buildings extend attack time requirements to punish slow starts',
    'The layout confuses attackers who rely on common base reading techniques',
    'Sweeper angles counter the most popular CWL air attack deployments',
    'Bomb Tower positions catch off-guard attackers who underestimate ground defense',
    'The design rewards patient CWL clans who trust their defensive bases',
    'Tornado Trap placement disrupts the timing of CWL-specific attack combinations',
  ],
  defense: [
    'Maximum defensive DPS output across the entire base area',
    'Overlapping defense ranges eliminate dead zones completely',
    'Kill zones where troops face fire from four or more defenses simultaneously',
    'Optimized wall funneling channels troops into predetermined paths',
    'Ring-based layering provides continuous increasing damage as troops advance',
    'Point defense grid ensures single-target DPS coverage everywhere',
    'Air defense network handles any aerial attack composition',
    'High trap activation rate due to placement in natural pathing routes',
    'Tesla farm creates a surprise burst zone that overwhelms troops',
    'Bomb Tower placement maximizes splash damage against grouped troops',
    'Sweeper field control limits available approach vectors for air attacks',
    'X-Bow crossfire lanes cover the entire base interior without gaps',
    'Inferno Tower ramp-up zones melt tanks that try to soak damage',
    'Eagle Artillery overwatch softens troops throughout their entire attack',
    'Scattershot coverage handles wide troop spreads during mid-attack phases',
    'Monolith scaling damage counters any HP level of attacking troops',
    'Spell Tower automation provides perfectly-timed defensive spell support',
    'Defending heroes form a mini kill squad against attacking troops',
    'Anti-funnel perimeter forces troops into kill zones involuntarily',
    'Continuous damage chain means troops are never outside defensive range',
    'Defense placement geometry is mathematically optimized for coverage',
    'The base can handle both swarm and tank compositions effectively',
    'Multiple defense types engage every troop that enters the base',
    'The layout forces attackers to bring more healing than normal',
    'Spring Traps and Giant Bombs provide burst damage spikes in key areas',
    'Every compartment is self-sufficient in defensive capability',
    'The design punishes both air and ground attacks equally',
    'Defensive building levels are maximized for output at this Town Hall',
    'The base achieves the theoretical maximum DPS-per-tile ratio',
    'Attackers consistently underestimate the total damage output of this design',
    'Reflector positioning multiplies effective damage against grouped troops',
  ],
  progress: [
    'Clear visual organization makes upgrade tracking effortless',
    'Buildings grouped by type allow instant identification of upgrade gaps',
    'Hero showcase area makes hero upgrade status immediately visible',
    'Resource section lets you quickly assess economy building priorities',
    'Defense grouping shows exactly which defenses need leveling up',
    'Army building section keeps offensive upgrade tracking separate and clear',
    'Wall tracking row provides a visual progress bar for wall upgrades',
    'Trap visibility ensures you do not forget to upgrade traps',
    'Cost-based grouping helps plan which resource to save for upgrades',
    'Quick-scan design lets you decide builder assignments in seconds',
    'Level comparison setup highlights underleveled buildings immediately',
    'Grid layout makes it easy to count and verify all buildings are placed',
    'Upgrade priority positions draw your eye to the most important upgrades',
    'Laboratory highlight reminds you to keep troop research running',
    'Clan Castle placement reminds you of this often-neglected upgrade',
    'Pet House display tracks pet upgrade progress visually',
    'Siege Workshop visibility shows siege machine upgrade opportunities',
    'Spell Factory zone tracks spell upgrade status at a glance',
    'Functional basic defense discourages casual raids despite organizational focus',
    'The layout can be quickly reorganized when upgrading to the next Town Hall',
    'Town Hall prominence reminds you of the ultimate upgrade goal',
    'Builder allocation becomes intuitive with the organized layout',
    'The design reduces the time spent searching for buildings to upgrade',
    'Clean organization reduces decision fatigue during upgrade planning',
    'Category separation makes it obvious when an entire section is maxed',
    'The layout serves as a visual checklist for Town Hall upgrade completion',
    'Dedicated sections prevent overlooking less obvious upgrade targets',
    'The design is easy to recreate after layout resets',
    'Building relationships are clear, showing which upgrades unlock others',
    'The base functions as a planning tool that also provides minimal defense',
    'Progress visibility motivates continued upgrading across all building types',
  ],
};

// -----------------------------------------------------------------------------
// CONS POOL
// 30+ per base type, selected via baseNumber modulo
// -----------------------------------------------------------------------------
const CONS_POOL = {
  war: [
    'May be vulnerable to well-executed Queen Charge Hybrid with precise timing',
    'Requires max-level Clan Castle troops for optimal defense performance',
    'Experienced attackers with perfect funneling can still find paths to the core',
    'Air-heavy attacks may succeed if air defenses are not fully upgraded',
    'The layout requires all traps to be properly placed for maximum effectiveness',
    'Attackers with Siege Barracks can bypass some compartment defenses',
    'May struggle against max-level Root Rider Smash at higher Town Halls',
    'Repeated attacks from the same clan member can reveal trap locations',
    'Requires heroes to be active for full defensive value',
    'Super Witch spam can sometimes overwhelm compartment defenses',
    'Blizzard Spell combinations may threaten key defensive buildings',
    'The base is less effective if defensive buildings are underleveled',
    'Skilled attackers who identify the kill zone can plan around it',
    'Log Launcher entry from the right angle can open the core',
    'The design may need trap adjustments after being attacked multiple times',
    'Electro Dragon chain attacks can damage multiple compartments',
    'Recall Spell can bypass some of the intended defensive interactions',
    'The base relies on the attacker making mistakes for anti-3-star success',
    'Battle Blimp loaded with Super Goblins can threaten the Town Hall',
    'High-level Flame Flingers can damage key defenses from outside walls',
    'The layout may be less effective during Clan Games with attack challenges',
    'Time-limited events may bring attack strategies the base is less prepared for',
    'Bat Spell strategies can sometimes bypass ground-focused defenses',
    'Wall Wrecker paths may need periodic rotation to stay unpredictable',
    'The base design may need updating when new troops or spells are released',
    'Grand Warden ability can protect troops through key kill zones',
    'Jump Spell placed correctly can bypass intended wall funneling',
    'Freeze Spells on Inferno Towers can temporarily neutralize key defenses',
    'The anti-3-star design may sometimes give up easier 2-star results',
    'Overgrowth Spell can create unexpected pathing through walls',
    'Earthquake Spell combinations can open compartments the design relies on',
  ],
  farm: [
    'Town Hall is deliberately vulnerable, so you will lose trophies',
    'Very determined attackers with full armies can still reach storages',
    'The base is not suitable for Clan Wars or CWL defense',
    'Trophy droppers may not offer shields, leading to repeated attacks',
    'Sneaky Goblin attacks with Invisibility Spell can sometimes bypass splash coverage',
    'Super Barbarian raids can power through outer defenses to reach storages',
    'Mass Miner attacks can underground past splash defenses to storages',
    'The layout trades Town Hall protection entirely for resource defense',
    'Collectors still lose resources even though storages are protected',
    'The base may attract more attacks in trophy ranges where farmers are common',
    'High-level attackers may use full war armies just for loot at your expense',
    'The design is less effective when storages are nearly empty',
    'Air-based farming attacks like mass Balloons can reach some storages',
    'The outer collector ring provides free loot that adds up over time',
    'Wall Breaker pathing may occasionally open unexpected routes to storages',
    'The base loses value during Clan War League where defense matters',
    'Queen Walk can reach storage compartments from the perimeter',
    'Earthquake Spell can open storage compartments from a safe distance',
    'The design requires regular trap re-arming for maximum protection',
    'Siege machines can punch directly to storage compartments',
    'Super Wall Breakers can breach double wall segments easily',
    'The base may need adjustment based on which resource you are prioritizing',
    'Lightning Spell can eliminate key splash defenses protecting storages',
    'Hero dives can reach the Dark Elixir storage in some configurations',
    'The layout is not suitable for trophy pushing or Legend League',
    'Battle Blimp can deliver troops directly to interior storage pockets',
    'The design provides no protection against town hall snipers',
    'Some storage compartments may be weaker than others depending on defense placement',
    'Goblin Knife with Jump Spell can sometimes reach the DE storage directly',
    'The base needs updated trap placement after meta changes',
    'Hog Rider attacks can clear defenses before storages are targeted',
  ],
  trophy: [
    'Resource storages are exposed and will lose loot in attacks',
    'The design sacrifices resource protection for Town Hall defense',
    'Heavy air attacks with perfect deployment can sometimes reach the Town Hall',
    'Blizzard Spell combinations at higher levels can threaten the core',
    'Root Rider Smash with Recall can breach even well-defended cores',
    'The base is not ideal for farming resources while pushing trophies',
    'Anti-Queen-Walk design may be less effective against ground-only attacks',
    'Siege machines with Wall Wrecker can sometimes path to the Town Hall',
    'The design requires maxed defenses for optimal Trophy League performance',
    'Skilled attackers with perfect planning can still secure 2-star results',
    'The compact core can be vulnerable to Earthquake Spell combinations',
    'Super Witch spam with Bats can overwhelm single-target air defenses near the core',
    'The outer time-wasting buildings may be cleared quickly by efficient attackers',
    'Freeze Spell on key core defenses can create a window for Town Hall destruction',
    'The base trades percentage defense for Town Hall protection',
    'LavaLoon with precise Haste timing can reach the Town Hall from some angles',
    'The design becomes less effective if heroes are upgrading',
    'Recall Spell allows attackers to reposition troops past defensive kill zones',
    'Multiple Inferno Towers frozen simultaneously creates a fatal gap',
    'Grand Warden ability can shield troops through the core kill zone',
    'The base needs regular maintenance to update trap placement after attacks',
    'High-trophy ranges attract only the most skilled attackers',
    'Super Bowler Smash can break through multiple wall layers quickly',
    'The design may need adjustment as the meta shifts with game updates',
    'Electro Titan with support can tank through core defenses',
    'Jump Spell can bypass the intended double wall core protection',
    'Battle Drill siege can emerge inside the core if not properly countered',
    'The anti-air focus can leave ground approaches slightly weaker',
    'Time-based defenses rely on the attacker being slow, which skilled players are not',
    'Druid healing can sustain troops through kill zones at higher Town Halls',
    'The Monolith can be sniped from outside if not well-protected',
  ],
  hybrid: [
    'Does not excel at either war defense or resource protection individually',
    'Pure war bases will outperform this in Clan War scenarios',
    'Pure farming bases protect resources more effectively',
    'The balanced approach means some compromises in both trophy and loot defense',
    'Skilled attackers can choose to target either the TH or storages successfully',
    'The design is a jack-of-all-trades rather than a master of any single defense',
    'Dedicated farming armies can still reach some storage compartments',
    'War attacks with proper planning can still achieve 3-star results',
    'The split focus means neither defensive priority gets maximum protection',
    'Anti-Queen-Walk may be weaker compared to dedicated trophy bases',
    'Storage protection is not as strong as in dedicated farming layouts',
    'The base may need more frequent adjustments than specialized designs',
    'Town Hall protection is weaker than in dedicated trophy bases',
    'Attackers with specific objectives can choose the easier target',
    'The layout may not be the best choice for serious CWL competition',
    'Hybrid design requires more skill to build correctly than single-purpose bases',
    'Trap placement compromises may leave some paths under-protected',
    'The base relies on balance, which attackers can exploit with focused attacks',
    'Resource protection decreases as collectors fill and attract more raiders',
    'Heroes must be active for the hybrid defense to function at full effectiveness',
    'Siege machines can bypass balanced defenses targeting either the TH or storages',
    'The design cannot match the specialty performance of dedicated base types',
    'Air attacks may find balanced air defense weaker than in trophy designs',
    'The base may give up easier 2-star results compared to dedicated war bases',
    'Ground smash attacks can overwhelm balanced compartments',
    'The layout requires careful builder planning to maintain balanced upgrade levels',
    'The design may need complete reworking when progressing to the next TH level',
    'Freeze Spell value is higher against balanced defenses than concentrated ones',
    'The compromise design may frustrate players who want maximum performance in one area',
    'Spell Tower placement must balance both defensive objectives',
    'The base provides good but not great performance in every scenario',
  ],
  cwl: [
    'May give up easier 2-star results if the attacker ignores the Town Hall',
    'Extreme compartmentalization can be overwhelmed by high-powered smash attacks',
    'Time-wasting design is less effective against fast, efficient attackers',
    'Higher TH mismatch attacks may have enough power to breach deep compartments',
    'The anti-2-star focus may allow easier 1-star results for percentage',
    'Moat-style spacing can be bypassed by Jump Spell or siege machines',
    'The design becomes predictable after multiple CWL wars against the same opponents',
    'Cookie-cutter counter design is only effective against cookie-cutter attacks',
    'Attackers with specific anti-CWL strategies can read the defensive intent',
    'The deep Town Hall may encourage attackers to focus purely on percentage',
    'Heavy compartmentalization uses more walls, leaving some sections thinner',
    'The layout may struggle against Super Witch spam in lower CWL leagues',
    'Single-attack optimization means the base may not adapt well to friendly challenges',
    'Kill squad traps can be avoided by experienced attackers who read the base',
    'Percentage-focused defense spreads defenses thinner across the base',
    'The design relies on attacker mistakes that top CWL players rarely make',
    'Anti-meta design may not work against clans using unconventional strategies',
    'Eagle Artillery coverage limitations leave some base areas less protected',
    'Hero skill check positions can be bypassed by hero-free attack strategies',
    'Spell drain design fails against attackers who carry extra freeze spells',
    'Wide funnel requirements can be overcome by Super Wall Breakers',
    'The base may not perform well outside of the CWL format',
    'Root Rider Smash with Recall can ignore time-wasting design elements',
    'Blizzard combos can threaten deep Town Halls if not specifically countered',
    'The design trades some percentage defense for Town Hall protection',
    'Mismatch situations in CWL can render the anti-2-star design ineffective',
    'The layout may need rotation between CWL seasons to prevent opponents from studying it',
    'Corner building absence means faster percentage accumulation in some cases',
    'Trap variety becomes less effective once opponents figure out the pattern',
    'The base requires strong defensive CC troops that some clans cannot provide',
    'Inferno Tower zone restrictions limit attacker approaches but can be predicted',
  ],
  defense: [
    'Pure defensive optimization may leave the Town Hall somewhat exposed',
    'The DPS-focused layout trades cleverness for raw damage output',
    'Resource protection is not a priority in this design philosophy',
    'Area-of-effect spells gain extra value against overlapping defense clusters',
    'The compact design may be vulnerable to Earthquake Spell openings',
    'Pure defense bases may not hold up as well in war as strategic war bases',
    'The design prioritizes defense placement over wall efficiency',
    'Freeze Spells on overlapping defenses can neutralize multiple buildings at once',
    'Lightning Spell value may be higher against clustered defensive buildings',
    'The layout may be predictable to experienced attackers who recognize the pattern',
    'Kill zones can be avoided by attackers who properly scout the base',
    'The defensive optimization does not account for specific attack strategies',
    'Siege machines can disrupt the carefully planned defense arrangement',
    'The design may need complete rebuilding when new defenses are added',
    'Ring-based layering can be pierced by Log Launcher entries at the right angle',
    'The base trades strategic base building for mathematical optimization',
    'Anti-funnel perimeter can be overcome by Super Wall Breaker usage',
    'The continuous damage chain assumes troops path through the base linearly',
    'Tesla farm surprise zones only work once per attacker',
    'The design does not account for the attacker\'s spell inventory specifically',
    'Maximum DPS coverage may be less effective than strategic compartmentalization',
    'The raw damage approach may fail against heal-heavy attack compositions',
    'Overlapping splash zones are less effective against high-HP single troops',
    'The layout may not adapt well to meta changes without full redesign',
    'Inferno Tower melt zones can be countered with Freeze and Warden ability',
    'The base is optimized for defense metrics rather than practical war performance',
    'Attackers with proper healing can sustain through continuous damage zones',
    'The grid pattern of point defenses can be disrupted by earthquake combos',
    'Eagle Artillery overwatch is less effective against fast-moving troops',
    'The design may sacrifice trap variety for DPS optimization',
    'Recall Spell can reposition troops past the carefully planned kill zones',
  ],
  progress: [
    'Not designed for competitive defense and will lose most attacks',
    'Provides minimal protection against organized war attacks',
    'Resource storages are not optimally protected in the organizational layout',
    'Not suitable for Clan Wars, CWL, or trophy pushing',
    'The layout prioritizes visibility over defensive performance',
    'Attackers can easily identify and target high-value buildings',
    'Traps placed for visibility are not in optimal defensive positions',
    'The base will lose more resources than a dedicated farming layout',
    'You will lose more trophies than with a dedicated trophy base',
    'The organizational layout may not be useful at lower Town Halls with fewer buildings',
    'The grid pattern makes attack planning very easy for opponents',
    'Hero placement for showcase rather than defense reduces their value',
    'The base requires complete redesign when switching to competitive play',
    'Wall organization means walls are not in defensive positions',
    'Collectors are grouped rather than spread, making them easy targets',
    'The layout does not scale well for higher leagues where defense matters',
    'The base is purely a planning tool and should not be used during active play sessions',
    'Trap visibility means attackers can see and avoid all trap positions',
    'The design offers zero anti-air defense coordination',
    'The base gives opponents easy 3-star results in competitive formats',
    'Building grouping creates spell value opportunities for attackers',
    'The layout does not support effective Clan Castle defense',
    'Defense buildings grouped by type create predictable defense patterns',
    'The progress base should be swapped before going offline',
    'Trophy loss from using this base can set back pushing progress',
    'The organizational benefit decreases as you get closer to maxing your Town Hall',
    'Resource loss from poor defense can slow down the upgrades you are tracking',
    'The base provides false confidence about upgrade progress if key buildings are hidden',
    'The grid layout uses more wall segments for organization than defense',
    'The design assumes you have a separate competitive base ready to swap in',
    'Progress tracking is less useful if you already know your upgrade priority',
  ],
};

// -----------------------------------------------------------------------------
// TROOP COMPOSITIONS BY TH LEVEL
// 6+ compositions per level, 3 selected per page via baseNumber modulo
// Each: { name, troops, spells, description }
// -----------------------------------------------------------------------------
const TROOP_COMPOSITIONS = {
  3: [
    { name: 'Giant Rush', troops: '8 Giants, 30 Archers, 10 Barbarians', spells: 'None', description: 'Giants tank while Archers deal damage from behind. Deploy Giants first to absorb hits, then spread Archers in an arc.' },
    { name: 'Goblin Raid', troops: '6 Giants, 20 Goblins, 20 Archers', spells: 'None', description: 'Use Giants to distract defenses, then deploy Goblins to rush resource buildings. Archers clean up remaining buildings.' },
    { name: 'Barch Basic', troops: '35 Barbarians, 35 Archers', spells: 'None', description: 'The classic Barch attack. Spread Barbarians as a meat shield, then deploy Archers behind them for damage.' },
  ],
  4: [
    { name: 'Balloon Blitz', troops: '12 Balloons, 20 Archers', spells: 'None', description: 'Mass Balloon attack targeting defenses. Deploy all Balloons from one side, use Archers to clean up remaining buildings.' },
    { name: 'Giant-Archer Push', troops: '10 Giants, 5 Wall Breakers, 25 Archers', spells: 'None', description: 'Giants tank, Wall Breakers open compartments, and Archers provide ranged DPS from a safe distance.' },
    { name: 'Barch Farm', troops: '40 Barbarians, 40 Archers', spells: 'None', description: 'Quick farming composition. Spread along the base perimeter to grab collectors and exposed resources efficiently.' },
  ],
  5: [
    { name: 'Giant-Wizard', troops: '8 Giants, 5 Wall Breakers, 12 Wizards, 10 Archers', spells: '1 Lightning Spell', description: 'Giants tank while Wizards provide devastating splash damage. Use Lightning on the strongest splash defense.' },
    { name: 'Balloon Parade', troops: '16 Balloons, 8 Wizards', spells: '1 Lightning Spell', description: 'Lightning the Air Defense, then mass deploy Balloons. Wizards clean up ground buildings afterward.' },
    { name: 'Barch with Spells', troops: '50 Barbarians, 50 Archers, 5 Wall Breakers', spells: '1 Lightning Spell', description: 'Enhanced Barch with Wall Breakers for compartment access and Lightning to remove a key defense.' },
  ],
  6: [
    { name: 'Giant-Healer', troops: '10 Giants, 2 Healers, 10 Wizards, 5 Wall Breakers', spells: '1 Healing Spell, 1 Lightning Spell', description: 'Healers keep Giants alive indefinitely while Wizards destroy everything. A powerful ground push strategy.' },
    { name: 'Balloon-Wizard', troops: '20 Balloons, 10 Wizards', spells: '1 Healing Spell, 1 Lightning Spell', description: 'Lightning one Air Defense, deploy Balloons in waves. Wizards clean ground buildings for percentage.' },
    { name: 'Mass Giant', troops: '14 Giants, 6 Wall Breakers, 8 Wizards, 6 Archers', spells: '1 Healing Spell, 1 Lightning Spell', description: 'Overwhelming Giant force that tanks through the entire base. Healing Spell keeps them alive through splash damage.' },
  ],
  7: [
    { name: 'DragLoon', troops: '10 Dragons, 4 Balloons', spells: '3 Lightning Spells', description: 'Lightning two Air Defenses, mass deploy Dragons with Balloon support. The classic TH7 3-star strategy.' },
    { name: 'Mass Dragon', troops: '10 Dragons, 5 Archers', spells: '3 Lightning Spells', description: 'Pure Dragon spam. Zap the hardest Air Defense to reach, deploy Dragons in a line, and watch them destroy everything.' },
    { name: 'Mass Hog Riders', troops: '30 Hog Riders, 5 Wizards, 5 Archers', spells: '2 Healing Spells, 1 Rage Spell', description: 'Surgical Hog deployment with Healing Spells over Giant Bomb locations. Wizards clean up remaining buildings.' },
    { name: 'Giant-Wizard Push', troops: '12 Giants, 5 Wall Breakers, 12 Wizards, Barbarian King', spells: '2 Healing Spells, 1 Rage Spell', description: 'A powerful ground push using the Barbarian King as a tank. Rage through the core and Heal through splash.' },
  ],
  8: [
    { name: 'GoWiPe', troops: '2 Golems, 3 PEKKAs, 10 Wizards, 5 Wall Breakers, Barbarian King', spells: '1 Rage, 2 Heal, 1 Poison', description: 'Golems tank while PEKKAs and Wizards devastate the core. A reliable 2-3 star strategy at TH8.' },
    { name: 'Mass Hog Riders', troops: '32 Hog Riders, 5 Wizards, 3 Archers, Barbarian King', spells: '3 Healing Spells, 1 Poison Spell', description: 'Surgical Hog deployment clockwise or counterclockwise. Pre-trigger Giant Bombs, then Heal through damage zones.' },
    { name: 'GoHo', troops: '1 Golem, 22 Hog Riders, 8 Wizards, 4 Wall Breakers, BK', spells: '3 Heal, 1 Poison', description: 'Golem kill squad eliminates the CC and Barbarian King, then Hog Riders clean the remaining defenses.' },
    { name: 'DragLoon', troops: '9 Dragons, 8 Balloons, Barbarian King', spells: '3 Lightning, 1 Earthquake, 1 Poison', description: 'Zapquake two Air Defenses, funnel Dragons from one side with Balloon support. Reliable for 3 stars.' },
    { name: 'GoVaHo', troops: '1 Golem, 8 Valkyries, 16 Hog Riders, 6 Wizards, 3 WB, BK', spells: '2 Heal, 1 Rage, 1 Poison', description: 'Golem-Valkyrie kill squad takes the core, then Hog Riders finish the remaining outside defenses.' },
  ],
  9: [
    { name: 'Queen Charge LaLoon', troops: '2 Lava Hounds, 18 Balloons, 4 Healers, 5 Wall Breakers, BK, AQ', spells: '2 Rage, 1 Freeze, 1 Haste, 1 Poison', description: 'Archer Queen charges one side with Healer support while LaLoon sweeps the opposite side.' },
    { name: 'GoHo', troops: '2 Golems, 20 Hog Riders, 8 Wizards, 4 Wall Breakers, BK, AQ', spells: '3 Heal, 1 Jump, 1 Poison', description: 'Golem kill squad takes out the enemy Queen and CC, then mass Hogs clean the rest with Healing Spells.' },
    { name: 'Witch Slap', troops: '2 Golems, 12 Witches, 4 Healers, BK, AQ', spells: '2 Heal, 1 Rage, 1 Jump, 1 Poison', description: 'Witches behind Golems create an unstoppable wave of skeletons. Healers keep the Witches alive throughout.' },
    { name: 'GoVaHo', troops: '1 Golem, 8 Valkyries, 18 Hog Riders, 6 Wizards, BK, AQ', spells: '3 Heal, 1 Jump, 1 Poison', description: 'Valkyries devastate the core with Jump Spell, then Hogs surgically clean remaining defenses.' },
    { name: 'LavaLoon', troops: '3 Lava Hounds, 22 Balloons, 6 Minions, BK, AQ', spells: '2 Rage, 2 Haste, 1 Poison', description: 'Pure air attack. Lava Hounds tank air defenses while Balloons destroy everything beneath them.' },
    { name: 'Hog Miner Hybrid', troops: '16 Hog Riders, 14 Miners, 4 Healers, BK, AQ', spells: '3 Heal, 1 Rage, 1 Poison', description: 'Queen Walk to take value, then Hogs and Miners push together through the remaining base.' },
  ],
  10: [
    { name: 'Queen Walk Miners', troops: '30 Miners, 4 Healers, 3 Wall Breakers, BK, AQ', spells: '4 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Queen Walk takes one side for value, then mass Miners push through the base with Healing Spell support.' },
    { name: 'Hybrid (Hog Miner)', troops: '16 Hog Riders, 14 Miners, 4 Healers, BK, AQ', spells: '4 Heal, 1 Rage, 1 Poison', description: 'The iconic Hybrid strategy. Queen Walk into Hog-Miner push that handles both air and ground defenses.' },
    { name: 'Zap Witch', troops: '2 Golems, 12 Witches, 6 Bowlers, BK, AQ', spells: '4 Lightning, 1 Earthquake, 1 Rage, 1 Freeze', description: 'Lightning key defenses, then Witch-Bowler push overwhelms the remaining base with skeleton swarms.' },
    { name: 'DragBat', troops: '8 Dragons, 4 Balloons, BK, AQ', spells: '2 Rage, 3 Bat Spell, 1 Freeze, 1 Poison', description: 'Dragons clear one side, then Bat Spells deployed from the opposite side overwhelm remaining defenses.' },
    { name: 'BoWitch', troops: '2 Golems, 8 Witches, 8 Bowlers, 4 Wall Breakers, BK, AQ', spells: '2 Heal, 1 Rage, 1 Jump, 1 Freeze, 1 Poison', description: 'Bowlers and Witches create a powerful ground push behind Golem tanks. Jump Spell accesses the core.' },
    { name: 'Frozen Witch', troops: '3 Golems, 14 Witches, 4 Bowlers, BK, AQ', spells: '2 Rage, 2 Freeze, 1 Jump, 1 Heal, 1 Poison', description: 'Mass Witch push with Freeze Spells on Inferno Towers. The skeleton army overwhelms defenses through sheer numbers.' },
  ],
  11: [
    { name: 'Queen Charge Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK, AQ, GW', spells: '4 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Queen Walk takes the Eagle Artillery side, then Hog-Miner hybrid pushes through the remaining base. Grand Warden ability saves troops through splash.' },
    { name: 'Electro Dragon Spam', troops: '8 Electro Dragons, 8 Balloons, BK, AQ, GW', spells: '3 Rage, 2 Freeze, 1 Poison', description: 'Mass Electro Dragons with Grand Warden in air mode. Chain lightning devastates clustered buildings. Simple but effective.' },
    { name: 'Yeti Smash', troops: '8 Yetis, 2 Golems, 8 Witches, BK, AQ, GW', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Yetis and Witches behind Golems create an unstoppable ground push. Yetimites spawn to overwhelm defenses.' },
    { name: 'Zap Witch', troops: '3 Golems, 14 Witches, 4 Bowlers, BK, AQ, GW', spells: '5 Lightning, 1 Earthquake, 1 Rage, 1 Freeze', description: 'Zapquake key defenses like Eagle Artillery, then mass Witch push crushes the weakened base.' },
    { name: 'Sui LaLoon', troops: '3 Lava Hounds, 22 Balloons, 6 Minions, BK, AQ, GW', spells: '3 Rage, 3 Haste, 1 Poison', description: 'King and Queen suicide into the enemy Queen side, then full LaLoon push from the opposite side.' },
    { name: 'Pekka BoBat', troops: '4 PEKKAs, 8 Bowlers, 4 Healers, BK, AQ, GW', spells: '2 Rage, 1 Heal, 3 Bat Spell, 1 Freeze', description: 'PEKKA-Bowler push clears half the base, then Bat Spells overwhelm defenses on the opposite side.' },
  ],
  12: [
    { name: 'Yeti Smash', troops: '8 Yetis, 2 Golems, 6 Witches, 4 Bowlers, BK, AQ, GW + Siege', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Log Launcher opens the base while Yetis and support troops smash through. Grand Warden ability is key for surviving splash.' },
    { name: 'Queen Charge Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK, AQ, GW + Siege', spells: '5 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Queen Walk into Hybrid with siege machine support. The Warden ability covers the Hog-Miner push through the core.' },
    { name: 'Electrone LaLoon', troops: '2 Lava Hounds, 20 Balloons, 1 Electro Dragon, BK, AQ, GW + Battle Blimp', spells: '3 Rage, 3 Haste, 1 Freeze, 1 Poison', description: 'Battle Blimp carrying Electro Dragon and Loons reaches the core, then LaLoon sweeps the rest.' },
    { name: 'Super Witch Spam', troops: '8 Super Witches, 2 Golems, 4 Healers, BK, AQ, GW + Siege', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Super Witches spawn Big Boys that tank for the entire army. A devastating ground push at TH12.' },
    { name: 'DragBat', troops: '7 Dragons, 6 Balloons, BK, AQ, GW + Siege', spells: '2 Rage, 1 Freeze, 4 Bat Spell, 1 Poison', description: 'Dragons clear the Wizard Tower side, then Bat Spells from the opposite side clean remaining defenses.' },
    { name: 'Pekka Smash', troops: '5 PEKKAs, 8 Bowlers, 2 Golems, BK, AQ, GW + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Log Launcher opens a path, PEKKAs and Bowlers smash through the entire base with Warden ability timing.' },
  ],
  13: [
    { name: 'Blizzard LaLoon', troops: '2 Lava Hounds, 22 Balloons, BK, AQ, GW, RC + Battle Blimp (Super Wizards + Invis)', spells: '3 Rage, 2 Haste, 2 Invisibility, 1 Freeze', description: 'Battle Blimp with Super Wizards and Invisibility Spells destroys the Town Hall area, then LaLoon finishes the base.' },
    { name: 'Queen Charge Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK, AQ, GW, RC + Siege', spells: '5 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Royal Champion provides additional hero power. Queen Walk takes a bigger section while Hybrid cleans the rest.' },
    { name: 'Yeti Smash', troops: '8 Yetis, 10 Witches, 2 Golems, BK, AQ, GW, RC + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Four heroes plus Yeti-Witch push create an overwhelming ground assault. RC dives to secure the Town Hall.' },
    { name: 'Super Witch Spam', troops: '8 Super Witches, 3 Golems, BK, AQ, GW, RC + Siege', spells: '3 Rage, 1 Heal, 1 Jump, 1 Freeze, 1 Poison', description: 'Super Witches with Big Boy spawns create an army that grows as it pushes. RC secures key buildings.' },
    { name: 'Sui Hero Hybrid', troops: '16 Hog Riders, 14 Miners, 5 Healers, BK, AQ, GW, RC', spells: '5 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'King and Queen suicide into the base to take value, then Hybrid push with Warden and RC finishes.' },
    { name: 'Log Launcher GoWitch', troops: '2 Golems, 14 Witches, 6 Bowlers, BK, AQ, GW, RC + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Log Launcher creates a highway into the core. Golem-Witch-Bowler army marches straight to the Town Hall.' },
  ],
  14: [
    { name: 'Blizzard LaLoon', troops: '3 Lava Hounds, 20 Balloons, BK, AQ, GW, RC + Battle Blimp (Super Wizards)', spells: '3 Rage, 2 Haste, 2 Invisibility, 1 Freeze', description: 'Blizzard combo takes out the Town Hall area and key defenses, then LaLoon sweeps the remaining base with hero pet support.' },
    { name: 'Queen Charge Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK+Yak, AQ+Owl, GW, RC + Siege', spells: '5 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Hero Pets enhance the Hybrid strategy. Mighty Yak helps the King funnel while Electro Owl supports the Queen.' },
    { name: 'Yeti Smash', troops: '8 Yetis, 10 Witches, 2 Golems, BK+Yak, AQ, GW, RC + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'L.A.S.S.I and Mighty Yak boost hero performance while Yeti-Witch smash devastates the core.' },
    { name: 'Super Witch Spam', troops: '8 Super Witches, 3 Golems, BK, AQ, GW+Unicorn, RC + Siege', spells: '3 Rage, 1 Heal, 1 Jump, 1 Freeze, 1 Poison', description: 'Unicorn keeps the Warden alive through heavy fire while Super Witches overwhelm with Big Boy spawns.' },
    { name: 'Flame Flinger LaLoon', troops: '3 Lava Hounds, 22 Balloons, BK, AQ, GW, RC + Flame Flinger', spells: '3 Rage, 3 Haste, 1 Freeze, 1 Poison', description: 'Flame Flinger snipes key defenses from outside the base, then LaLoon push cleans the weakened layout.' },
    { name: 'Hydra Attack', troops: '12 Hog Riders, 8 Miners, 3 Dragon Riders, 5 Healers, BK, AQ, GW, RC', spells: '4 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Dragon Riders add air DPS to the classic Hybrid composition. Queen Walk opens while Hydra push finishes.' },
  ],
  15: [
    { name: 'Root Rider Smash', troops: '8 Root Riders, 8 Witches, 2 Golems, BK+Yak, AQ+Owl, GW+Phoenix, RC + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Root Riders break through walls automatically while Phoenix saves the Warden. A devastating smash attack.' },
    { name: 'Recall Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK, AQ, GW+Phoenix, RC + Siege', spells: '4 Heal, 1 Rage, 1 Recall, 1 Freeze, 1 Poison', description: 'Recall Spell repositions the Hybrid army past dangerous zones. Phoenix provides Warden a second life.' },
    { name: 'Super Bowler Smash', troops: '14 Super Bowlers, 2 Golems, 6 Witches, BK+Yak, AQ, GW+Phoenix, RC + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Super Bowlers bounce through compartments while Witches provide skeleton support. Log Launcher opens the core.' },
    { name: 'Queen Charge Root Rider', troops: '6 Root Riders, 5 Healers, 6 Witches, 1 Golem, BK, AQ, GW+Phoenix, RC + Siege', spells: '2 Rage, 1 Heal, 1 Jump, 1 Recall, 1 Freeze, 1 Poison', description: 'Queen charges one side while Root Riders handle the rest. Recall Spell used for emergency repositioning.' },
    { name: 'Blizzard LaLoon', troops: '3 Lava Hounds, 20 Balloons, BK, AQ, GW+Phoenix, RC + Battle Blimp', spells: '3 Rage, 2 Haste, 2 Invisibility, 1 Freeze', description: 'Blizzard combo destroys Monolith and nearby defenses, then LaLoon sweeps the rest with Phoenix safety net.' },
    { name: 'Monolith Snipe Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK, AQ, GW, RC + Siege', spells: '5 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Hero kill squad snipes the Monolith, then Hybrid push finishes the base without worrying about percentage damage.' },
  ],
  16: [
    { name: 'Root Rider Smash', troops: '8 Root Riders, 8 Witches, 2 Golems, BK+Yak, AQ+Owl, GW+Phoenix, RC+Fox + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Spirit Fox provides invisibility for the RC dive. Root Riders power through walls with full pet support.' },
    { name: 'Queen Charge Root Rider', troops: '6 Root Riders, 5 Healers, 6 Witches, 1 Golem, BK, AQ, GW+Phoenix, RC+Fox + Siege', spells: '2 Rage, 1 Heal, 1 Jump, 1 Recall, 1 Freeze, 1 Poison', description: 'Queen Walk takes value from the Multi-Archer Tower side, then Root Riders smash through the remaining base.' },
    { name: 'Recall Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK, AQ, GW+Phoenix, RC+Fox + Siege', spells: '4 Heal, 1 Rage, 1 Recall, 1 Freeze, 1 Poison', description: 'Recall Spell bypasses Ricochet Cannon zones. Spirit Fox keeps the RC alive for a critical Town Hall dive.' },
    { name: 'Super Bowler Smash', troops: '14 Super Bowlers, 2 Golems, 6 Witches, BK+Yak, AQ, GW+Phoenix, RC+Fox + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Super Bowlers bounce over merged defenses while the full hero-pet lineup provides overwhelming firepower.' },
    { name: 'Overgrowth LaLoon', troops: '3 Lava Hounds, 20 Balloons, BK, AQ, GW+Phoenix, RC+Fox + Siege', spells: '3 Rage, 2 Haste, 1 Overgrowth, 1 Freeze', description: 'Overgrowth Spell creates a wall breach for hero entry, then LaLoon sweeps the base from the opposite side.' },
    { name: 'Spirit Fox Hybrid', troops: '16 Hog Riders, 12 Miners, 5 Healers, BK+Yak, AQ+Owl, GW+Phoenix, RC+Fox', spells: '5 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Full pet support enhances every hero. Spirit Fox cloaks the RC for a safe Town Hall elimination.' },
  ],
  17: [
    { name: 'Druid Hybrid', troops: '12 Hog Riders, 10 Miners, 4 Druids, 5 Healers, BK, AQ, GW+Phoenix, RC+Fox, AW+Jelly', spells: '4 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Druids provide healing aura and rage aura for the Hybrid army. Apprentice Warden with Angry Jelly adds a 5th hero.' },
    { name: 'Root Rider Smash', troops: '8 Root Riders, 8 Witches, 2 Golems, BK+Yak, AQ+Owl, GW+Phoenix, RC+Fox, AW+Jelly + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Five heroes make this the most powerful Root Rider Smash ever. Angry Jelly supports the Apprentice Warden dive.' },
    { name: 'Apprentice Warden Zap Witch', troops: '3 Golems, 14 Witches, 4 Bowlers, BK, AQ, GW+Phoenix, RC, AW+Jelly', spells: '5 Lightning, 1 Earthquake, 1 Rage, 1 Freeze', description: 'Zapquake key defenses while five heroes support the Witch army. AW ability provides crucial support.' },
    { name: 'Recall Root Rider', troops: '6 Root Riders, 6 Witches, 1 Golem, 5 Healers, BK, AQ, GW+Phoenix, RC+Fox, AW+Jelly + Siege', spells: '2 Rage, 1 Heal, 1 Recall, 1 Jump, 1 Freeze, 1 Poison', description: 'Recall repositions the army past Merged Mortars. Five heroes provide massive firepower throughout the attack.' },
    { name: 'Super Bowler Smash', troops: '14 Super Bowlers, 2 Golems, 4 Witches, BK+Yak, AQ, GW+Phoenix, RC+Fox, AW+Jelly + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Log Launcher opens the base for Super Bowlers while all five heroes create an unstoppable ground push.' },
    { name: 'Angry Jelly LaLoon', troops: '3 Lava Hounds, 20 Balloons, BK, AQ, GW+Phoenix, RC+Fox, AW+Jelly + Battle Blimp', spells: '3 Rage, 2 Haste, 1 Invisibility, 1 Freeze', description: 'Angry Jelly provides area damage support while the 5-hero LaLoon push overwhelms air defenses.' },
  ],
  18: [
    { name: 'Druid Hybrid', troops: '12 Hog Riders, 10 Miners, 5 Druids, 5 Healers, BK, AQ, GW+Phoenix, RC+Fox, AW+Jelly', spells: '4 Heal, 1 Rage, 1 Freeze, 1 Poison', description: 'Druids heal and rage the entire Hybrid army. Five heroes dominate. Druid auras keep troops alive through Reflector damage.' },
    { name: 'Root Rider Smash', troops: '8 Root Riders, 6 Witches, 3 Druids, 2 Golems, BK+Yak, AQ+Owl, GW+Phoenix, RC+Fox, AW+Jelly + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Druids sustain the Root Rider push through Merged Wizard Tower splash. Five heroes and full pets create maximum power.' },
    { name: 'Recall Druid Hybrid', troops: '12 Hog Riders, 10 Miners, 4 Druids, 5 Healers, BK, AQ, GW+Phoenix, RC+Fox, AW+Jelly + Siege', spells: '3 Heal, 1 Rage, 1 Recall, 1 Freeze, 1 Poison', description: 'Recall bypasses the Reflector defense. Druids provide continuous healing that counters Reflector bounce damage.' },
    { name: 'Mass Root Rider', troops: '10 Root Riders, 4 Druids, 1 Golem, BK+Yak, AQ+Owl, GW+Phoenix, RC+Fox, AW+Jelly + Log Launcher', spells: '3 Rage, 1 Heal, 1 Jump, 1 Freeze, 1 Poison', description: 'Pure Root Rider army with Druid support smashes through everything. Five heroes provide overwhelming hero damage.' },
    { name: 'Super Bowler Smash', troops: '12 Super Bowlers, 4 Druids, 2 Golems, BK+Yak, AQ, GW+Phoenix, RC+Fox, AW+Jelly + Log Launcher', spells: '2 Rage, 1 Heal, 1 Jump, 2 Freeze, 1 Poison', description: 'Super Bowlers bounce over Merged Wizard Towers while Druids heal through splash. Reflector countered by spread deployment.' },
    { name: 'Reflector-Counter LaLoon', troops: '3 Lava Hounds, 20 Balloons, 2 Druids, BK, AQ, GW+Phoenix, RC+Fox, AW+Jelly + Battle Blimp', spells: '3 Rage, 2 Haste, 1 Freeze, 1 Poison', description: 'Air attacks bypass the ground-focused Reflector. Five heroes create the entry while LaLoon sweeps cleanly.' },
  ],
};

// -----------------------------------------------------------------------------
// BUILDING PLACEMENT TIPS
// Per base type, 8+ tips per type, 4 selected per page via baseNumber modulo
// -----------------------------------------------------------------------------
const BUILDING_PLACEMENT_TIPS = {
  war: [
    'Place your Clan Castle at the center of the base so attackers must invest heavily to lure defensive troops.',
    'Separate your Inferno Towers by at least 8 tiles so a single Freeze Spell cannot hit both simultaneously.',
    'Position your Eagle Artillery where it covers the most common attack entry points but is hard to reach directly.',
    'Use 2x2 buildings like Army Camps as filler to create distance between key defenses and prevent spell value.',
    'Place Seeking Air Mines between Air Defenses and the outer ring to intercept Healers during Queen Walks.',
    'Set your X-Bows to cover the direction most attackers will approach from based on your base layout.',
    'Place Hidden Teslas near the Town Hall as a last line of defense that surprises attackers during core dives.',
    'Position Scattershots where their wide splash radius covers the most buildings without being easily zapquaked together.',
  ],
  farm: [
    'Place your Town Hall outside or in a corner to give attackers a free star and discourage full attacks.',
    'Position splash defenses like Wizard Towers between your storage buildings for maximum coverage.',
    'Keep your Dark Elixir storage in the absolute center with at least 3 layers of walls around it.',
    'Spread Gold and Elixir storages across different compartments so attackers cannot grab all loot in one push.',
    'Place collectors on the outside as a loot buffer that satisfies raiders without them touching your storages.',
    'Use Mortars to cover the approaches leading to your storage compartments from common raiding angles.',
    'Position Bomb Towers near storage clusters to devastate groups of Hog Riders or Miners targeting resources.',
    'Place Hidden Teslas near your most valuable storage to surprise raiders who think they have a clear path.',
  ],
  trophy: [
    'Place your Town Hall at the exact center of the base with maximum wall layers surrounding it.',
    'Position your strongest single-target defenses (Inferno Towers, X-Bows) to cover the Town Hall from all angles.',
    'Use high-HP storage buildings as shields around the Town Hall to absorb damage from attacking troops.',
    'Place Air Defenses in a tight triangle around the Town Hall to prevent aerial snipe attempts.',
    'Position Air Sweepers to push back the most common LavaLoon and Electro Dragon deployment directions.',
    'Place Tornado Traps near the Town Hall to pull attacking troops away at the critical moment.',
    'Set up a double wall layer around the core that requires multiple Jump Spells or Wall Breaker groups.',
    'Position your heroes adjacent to the Town Hall so their defensive AI engages any troops that breach the core.',
  ],
  hybrid: [
    'Position the Town Hall centrally but with storages nearby so both benefit from the same defenses.',
    'Balance your splash and point defenses evenly across all sections of the base.',
    'Place the Dark Elixir storage near the Town Hall so both high-value targets share defensive coverage.',
    'Spread remaining storages to secondary compartments that have their own dedicated defensive support.',
    'Use your heroes to cover the transition zone between the Town Hall area and storage compartments.',
    'Position Inferno Towers where they can target troops heading for either the Town Hall or storages.',
    'Place Air Defenses to cover both the Town Hall zone and the major storage cluster simultaneously.',
    'Use traps that work against both organized war attacks and casual farming raids in shared paths.',
  ],
  cwl: [
    'Bury the Town Hall behind the maximum possible number of compartments to drain attacker time.',
    'Place the Clan Castle where it forces an early lure that costs 20-30 seconds of attack time.',
    'Create wider-than-normal gaps between compartments to waste Jump Spell and Wall Breaker value.',
    'Position Eagle Artillery to cover the largest possible area, as CWL attacks often come from unexpected angles.',
    'Place defenses to make reaching 50% destruction require clearing nearly two-thirds of the base area.',
    'Use Inferno Towers to create distinct zones that force attackers to commit to one approach angle.',
    'Position Scattershots to cover different halves of the base so attackers always face splash damage.',
    'Place traps to counter the most popular CWL meta attacks at your Town Hall level specifically.',
  ],
  defense: [
    'Arrange defenses so every tile within the base is covered by at least two defensive buildings.',
    'Create overlapping splash zones by positioning Wizard Towers and Mortars with intersecting ranges.',
    'Place point defenses in a grid pattern that provides continuous single-target DPS across the entire base.',
    'Use walls as funneling tools that direct troops into predetermined paths with maximum defense coverage.',
    'Position Air Defenses to create an overlapping network that eliminates all air attack approaches.',
    'Place Hidden Teslas in clusters to create surprise burst zones that overwhelm troops in specific areas.',
    'Set up Inferno Towers where their increasing damage can fully ramp up against tanks.',
    'Position the Eagle Artillery at the center for maximum range coverage across the entire base area.',
  ],
  progress: [
    'Group all Cannons together in a row so you can see which ones still need upgrading at a glance.',
    'Place Archer Towers in their own section adjacent to Cannons for easy point defense comparison.',
    'Create a splash defense zone with Wizard Towers, Mortars, and Bomb Towers grouped by type.',
    'Set up a dedicated hero area that showcases all heroes and makes their levels immediately visible.',
    'Group resource buildings by type: all Gold buildings together, all Elixir together, all Dark Elixir together.',
    'Place Army Camps, Barracks, and Spell Factories in an army section separate from defenses.',
    'Arrange walls in visible rows by level so wall upgrade progress is trackable at a glance.',
    'Position traps in visible locations rather than hidden spots so their upgrade status is easy to check.',
  ],
};

// -----------------------------------------------------------------------------
// FAQ TEMPLATES FOR BASE DETAIL PAGES
// Per base type, 8+ FAQ pairs, 4 selected per page via baseNumber modulo
// Each answer: 50-80 words
// -----------------------------------------------------------------------------
const BASE_FAQ_TEMPLATES = {
  war: [
    { q: 'Is this {hallType}{level} war base good for Clan Wars?', a: 'Yes, this {hallType}{level} war base is designed specifically for Clan War defense. The compartmentalized layout and strategic defense placement make it very difficult for attackers to achieve a 3-star result. The anti-3-star design focuses on protecting the Town Hall while using traps and heroes to disrupt common attack strategies. It performs best when paired with strong Clan Castle troops.' },
    { q: 'What troops should I put in my Clan Castle for this war base?', a: 'For optimal defense, consider using a combination that counters common attacks at {hallType}{level}. Popular choices include Super Minions for air coverage, a Lava Hound to tank, or an Ice Golem with Headhunters to slow and eliminate heroes. The right CC troops depend on what attacks are popular in your war league.' },
    { q: 'How do I copy this {hallType}{level} war base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'What are the best defenses to upgrade first at {hallType}{level} for war?', a: 'Prioritize your Clan Castle first for stronger defensive troops, then focus on new defenses unlocked at this level. After that, upgrade splash defenses like Wizard Towers and Bomb Towers that handle swarm attacks. Inferno Towers and X-Bows should follow, as they provide the highest sustained DPS against tank-heavy war compositions.' },
    { q: 'Can this war base defend against air attacks?', a: 'This war base has strategically placed Air Defenses spread across different compartments to prevent Lightning Spell value. Air Sweepers are angled to counter the most common LavaLoon deployment paths. Seeking Air Mines intercept Healers during Queen Walk attempts. While no base is invulnerable to air, this layout makes air attacks significantly more difficult.' },
    { q: 'Does this base work for CWL as well as regular wars?', a: 'This war base works well in CWL because its anti-3-star design is equally effective in the single-attack CWL format. The compartmentalized layout wastes attacker time, which is even more valuable in CWL where opponents cannot retry. For dedicated CWL defense, check our CWL-specific base designs.' },
    { q: 'How often should I change my war base layout?', a: 'Change your war base layout every 2-3 weeks or whenever your clan faces the same opponents repeatedly. Opponents who have seen your base can plan attacks around your trap placements. After each war, review attack replays to identify weaknesses and adjust trap positions accordingly.' },
    { q: 'Is this war base anti-3-star or anti-2-star?', a: 'This is primarily an anti-3-star war base design. The layout allows opponents to potentially earn 2 stars but makes achieving the crucial third star extremely difficult. The Town Hall is protected by multiple compartments and heroes that create obstacles even for well-planned attacks.' },
  ],
  farm: [
    { q: 'How well does this {hallType}{level} farming base protect resources?', a: 'This farming base is designed to protect 70-80% of your stored resources against most raid strategies. All storages are placed in deep compartments with splash defense coverage, while collectors form a distraction ring. The Town Hall is exposed to discourage full attacks, and the Dark Elixir storage has maximum protection in the core.' },
    { q: 'Why is the Town Hall outside the walls in this farming base?', a: 'Placing the Town Hall outside gives attackers a free star and shield. Most raiders will take the easy Town Hall star and leave without investing a full army to reach your storages. This strategy minimizes resource losses by discouraging deep attacks, which is the primary goal of a farming base.' },
    { q: 'How do I copy this {hallType}{level} farming base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'Does this farming base work for protecting Dark Elixir?', a: 'Yes, Dark Elixir protection is a top priority in this farming base design. The Dark Elixir storage is placed at the absolute center behind the maximum number of wall layers. Splash defenses surround the DE storage to eliminate Sneaky Goblins and other troops before they reach it. Heroes guard the core for extra protection.' },
    { q: 'Can I use this farming base in Clan Wars?', a: 'This base is not recommended for Clan Wars. Farming bases deliberately expose the Town Hall, which gives war opponents an easy star. For war defense, you should use a dedicated war base where the Town Hall is centralized and protected. Switch to a war layout before war day starts.' },
    { q: 'What trophy range is best for farming with this base?', a: 'This farming base works best in Crystal to Master league where the loot bonus is decent but attackers are not max level. In lower leagues you face more full attacks that can reach storages, while higher leagues bring stronger opponents. Adjust your trophy range based on which resources you need most.' },
    { q: 'How do I protect my collectors with this base?', a: 'Collectors are intentionally placed outside the walls as a loot buffer. While they cannot be fully protected, keeping them upgraded and collecting frequently minimizes collector losses. The base philosophy is to sacrifice collector loot to keep stored resources safe in deep compartments.' },
    { q: 'What defenses should I upgrade first for farming?', a: 'For farming, prioritize splash defenses like Wizard Towers and Mortars that eliminate swarm troops targeting your storages. Bomb Towers are also high priority as they counter Hog Riders and Miners. After splash defenses, upgrade point defenses near your storage compartments for maximum coverage.' },
  ],
  trophy: [
    { q: 'Is this {hallType}{level} trophy base good for Legend League?', a: 'Yes, this trophy base is designed for high-level trophy pushing including Legend League. The centralized Town Hall with dense defensive coverage makes it extremely difficult for attackers to secure even a single star. The layout is optimized for preventing 1-star results against skilled opponents in the 5000+ trophy range.' },
    { q: 'How does this trophy base prevent Town Hall snipes?', a: 'The Town Hall is surrounded by multiple wall layers and positioned at the exact center of the base. Dense Air Defense placement prevents air-based snipe attempts, while ground-targeting defenses create kill zones around the core. Tornado Traps pull troops away from the Town Hall at critical moments during core pushes.' },
    { q: 'How do I copy this {hallType}{level} trophy base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'Does this trophy base protect resources too?', a: 'This trophy base prioritizes Town Hall protection over resource defense. While some storages are used as high-HP shields around the Town Hall, they are positioned for defensive value rather than loot protection. If you need to protect resources while pushing trophies, consider our hybrid base designs.' },
    { q: 'What Clan Castle troops work best with this trophy base?', a: 'For trophy defense, use troops that can delay or eliminate attackers near the Town Hall. Popular choices include Super Minions for high DPS against ground and air, Ice Golem to slow and freeze attackers, or a Lava Hound to soak damage and spawn Lava Pups. Headhunters are also excellent for eliminating attacking heroes.' },
    { q: 'How often should I update my trophy base?', a: 'Update your trophy base every 1-2 weeks or when you notice consistent attack strategies succeeding against it. Review defense logs regularly to identify patterns and adjust trap placement. Meta changes from game updates may also require base adjustments to counter new strategies.' },
    { q: 'Can I use this trophy base in Clan Wars?', a: 'While this base protects the Town Hall well, it may not be ideal for Clan Wars because it sacrifices resource and percentage defense. War bases need to prevent 3-star results specifically, while this base focuses on preventing any stars at all. A dedicated war base may perform better in war scenarios.' },
    { q: 'What makes this different from a war base?', a: 'A trophy base focuses on preventing the first star by protecting the Town Hall at all costs, even sacrificing percentage defense. War bases focus on preventing the third star, accepting that opponents may get 2 stars. Trophy bases have denser core defenses while war bases use more compartmentalization.' },
  ],
  hybrid: [
    { q: 'Can this {hallType}{level} hybrid base be used in Clan Wars?', a: 'Yes, this hybrid base provides solid war defense thanks to its compartmentalized layout and centralized Town Hall. While a dedicated war base may perform slightly better, this hybrid design offers 80-90% of the war defense effectiveness while also protecting your resources during multiplayer battles.' },
    { q: 'Does this hybrid base protect resources effectively?', a: 'This hybrid base protects approximately 70-80% of your stored resources while also defending the Town Hall. Storages are distributed across multiple compartments so attackers cannot grab all your loot in one push. The Dark Elixir storage receives extra protection near the Town Hall area.' },
    { q: 'How do I copy this {hallType}{level} hybrid base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'Why choose a hybrid base over a war or farming base?', a: 'A hybrid base eliminates the need to constantly switch between war and farming layouts. It provides balanced protection for both trophies and resources in a single layout. This is ideal for active players who participate in wars but also need resource protection during regular gameplay.' },
    { q: 'Is this hybrid base good for CWL?', a: 'This hybrid base works reasonably well in CWL thanks to its compartmentalized design that wastes attacker time and resources. The Town Hall is centralized enough to deny easy 2-star results. For serious CWL competition, a dedicated CWL base may be preferable.' },
    { q: 'What are the trade-offs of using a hybrid base?', a: 'The main trade-off is that a hybrid base does not excel at either war defense or resource protection individually. Dedicated war bases protect the Town Hall better, and dedicated farming bases protect resources better. The hybrid is a jack-of-all-trades that provides good all-around performance.' },
    { q: 'What defenses should I prioritize for a hybrid base?', a: 'Prioritize splash defenses like Wizard Towers that protect both the Town Hall and storages. Inferno Towers and X-Bows should cover both defensive objectives. Upgrade Air Defenses to handle versatile air attacks. Focus on defenses positioned at the intersection of Town Hall and storage compartments.' },
    { q: 'How often should I update this hybrid base layout?', a: 'Update your hybrid base every 2-3 weeks or when defense logs show consistent attack patterns succeeding. After game updates that change troop or defense mechanics, review and adjust the layout. The balanced design means updates can be less frequent than specialized bases.' },
  ],
  cwl: [
    { q: 'Why is this {hallType}{level} CWL base different from a regular war base?', a: 'CWL bases are optimized for the single-attack format where opponents get only one chance. This means the base focuses more on anti-2-star design, time-wasting, and punishing imperfect execution. Regular war bases allow opponents to adjust after a failed attempt, but CWL bases exploit the single-chance pressure.' },
    { q: 'Can this CWL base handle attacks from higher Town Hall levels?', a: 'This CWL base is designed to hold up against mismatch attacks that are common in Clan War Leagues. The deep Town Hall placement and heavy compartmentalization waste attacker time and resources even when opponents have stronger troops. The design may give up percentage but protects the second star.' },
    { q: 'How do I copy this {hallType}{level} CWL base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'What Clan Castle troops should I use for CWL defense?', a: 'For CWL defense, use troops that maximize time waste and defensive value. Super Minions provide excellent DPS, Headhunters eliminate heroes quickly, and an Ice Golem can slow down entire kill squads. The key is choosing CC troops that complement your base layout and counter the most popular CWL attacks.' },
    { q: 'Should I use the same CWL base every season?', a: 'It is recommended to rotate CWL bases between seasons, especially if you face the same clans repeatedly. Opponents who have seen your base can plan specific attacks against it. Keep 2-3 CWL base layouts ready and switch between them each season for maximum effectiveness.' },
    { q: 'Is anti-2-star more important than anti-3-star in CWL?', a: 'In CWL, anti-2-star design is often more impactful because the difference between a 1-star and 2-star result frequently decides war outcomes. Most CWL attackers can earn 2 stars against standard war bases. Denying that second star by burying the Town Hall deep is a winning CWL strategy.' },
    { q: 'How do I deal with mismatch attacks in CWL?', a: 'Mismatches are inevitable in CWL. This base handles them by maximizing the distance to the Town Hall and creating time-wasting compartments. Even higher-level attackers struggle to 3-star when the base forces them to clear many sections individually. Focus on denying stars rather than preventing all damage.' },
    { q: 'Can I use this CWL base for regular wars too?', a: 'While this CWL base can work in regular wars, it is optimized for single-attack format. In regular wars where opponents get two attacks, they can scout with the first attempt and plan a precise second attack. A dedicated anti-3-star war base may be more effective for regular Clan Wars.' },
  ],
  defense: [
    { q: 'Is this {hallType}{level} defense base the strongest layout available?', a: 'This defense base maximizes raw defensive output by optimizing every defense placement for maximum coverage and overlap. While it prioritizes DPS over strategic tricks, the concentrated firepower makes it extremely punishing for any attack strategy. It is one of the strongest defensive layouts available for this Town Hall level.' },
    { q: 'What makes a defense base different from a war base?', a: 'A defense base focuses purely on maximizing defensive damage output through overlapping ranges and kill zones. War bases use strategic tricks like compartmentalization and trap placement to prevent specific attacks. Defense bases trade cleverness for raw power, while war bases trade some DPS for anti-strategy positioning.' },
    { q: 'How do I copy this {hallType}{level} defense base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'Does this defense base work for multiplayer defense?', a: 'Yes, this defense base performs very well in multiplayer because it provides overwhelming firepower against all troop compositions. The overlapping defense ranges mean that troops face continuous heavy damage from the moment they enter the base, making even farming raids expensive for attackers.' },
    { q: 'What are the weaknesses of a pure defense base?', a: 'Pure defense bases can be vulnerable to area-of-effect spells like Earthquake and Lightning because defenses are closer together. Strategic war bases use wider spacing to reduce spell value. Additionally, defense bases focus on raw DPS rather than anti-specific-strategy design.' },
    { q: 'Should I use this for Clan Wars?', a: 'This defense base can work in wars but may not perform as well as a strategic war base against skilled opponents who plan their spell usage around the overlapping defenses. For competitive wars, a compartmentalized war base with strategic trap placement may be more effective.' },
    { q: 'What defenses should I upgrade first for maximum output?', a: 'Prioritize defenses with the highest DPS output per upgrade level. Inferno Towers, X-Bows, and Eagle Artillery provide the most defensive value per upgrade. After those, focus on Wizard Towers and Bomb Towers for splash damage, then Archer Towers and Cannons for consistent single-target DPS.' },
    { q: 'How does this base handle air attacks?', a: 'The defense base includes a comprehensive air defense network with overlapping Air Defense ranges, strategically positioned Air Sweepers, and Seeking Air Mines in high-traffic air paths. The concentrated defensive power means air troops face heavy damage from multiple sources simultaneously.' },
  ],
  progress: [
    { q: 'Should I use this {hallType}{level} progress base during active play?', a: 'No, this progress base is designed purely for upgrade tracking and planning. Switch to a war, farming, or hybrid base during active play sessions and before going offline. The organizational layout does not provide competitive defense and will lose most attacks.' },
    { q: 'How does this progress base help with upgrades?', a: 'This progress base organizes all buildings by type and category, making it easy to see which buildings need upgrading. Same-type buildings are placed side by side for level comparison, and the layout highlights underleveled buildings visually. It saves time when deciding which building should receive your next available builder.' },
    { q: 'How do I copy this {hallType}{level} progress base layout?', a: 'Click the "Copy Base Link" button on this page. Then open Clash of Clans, go to your village, tap the layout editor icon, and select "New Layout" or an empty slot. The game will automatically prompt you to import the copied base. Make sure you have an empty layout slot available before copying.' },
    { q: 'Can I modify this progress base for my needs?', a: 'Absolutely. Copy the base and then rearrange buildings in the editor to match your preferred organization system. Some players sort by upgrade cost type, others by priority level. The base provides a starting template that you can customize for your specific upgrade tracking preferences.' },
    { q: 'What is the best upgrade order at {hallType}{level}?', a: 'Start with Clan Castle and Laboratory for improved troops, then focus on new defenses unlocked at this level. After that, upgrade Army Camps for more troop space, followed by resource buildings for faster income. Finally, upgrade existing defenses starting with the ones that have the largest level gaps.' },
    { q: 'Do I need a progress base at every Town Hall level?', a: 'Progress bases are most useful at TH10 and above where the number of buildings and upgrade levels becomes overwhelming. At lower Town Halls with fewer buildings, you can usually track upgrades without a dedicated layout. The complexity of upgrade management scales with your Town Hall level.' },
    { q: 'Should I keep traps upgraded in a progress base?', a: 'Yes, traps are often overlooked in upgrade planning. This progress base places traps in visible locations to remind you they exist and need upgrading. While traps are among the cheaper upgrades, they provide significant defensive value and should not be neglected during your upgrade journey.' },
    { q: 'How do I transition from this progress base to a competitive layout?', a: 'Save this progress base in one layout slot and keep your competitive base in another slot. Switch to the competitive layout before going offline or entering wars. You can quickly switch between layouts from the village editor. Most players keep 2-3 layouts saved for different purposes.' },
  ],
};

// -----------------------------------------------------------------------------
// FAQ TEMPLATES FOR TH/BH LEVEL PAGES
// 8 FAQ pairs per hall type, 5-6 selected per page via level modulo
// Each answer: 60-100 words
// -----------------------------------------------------------------------------
const LEVEL_PAGE_FAQ_TEMPLATES = {
  TH: [
    { q: 'What is the best base layout for Town Hall {level}?', a: 'The best TH{level} base layout depends on your primary goal. For Clan Wars, choose a war base with anti-3-star compartments and centralized Clan Castle. For farming, pick a layout that protects storages with splash defense coverage. For trophy pushing, select a base with a heavily defended centralized Town Hall. Our collection includes all base types so you can find the perfect layout for your playstyle.' },
    { q: 'What should I upgrade first at Town Hall {level}?', a: 'At TH{level}, prioritize your Clan Castle and Laboratory first to access stronger troops and defenses. Next, upgrade Army Camps for increased troop capacity, followed by any new defenses unlocked at this level. After that, focus on upgrading your strongest existing defenses and heroes. Resource buildings should be upgraded to keep income flowing for the expensive upgrades ahead.' },
    { q: 'How do I copy a TH{level} base layout?', a: 'Click the "Copy Base Link" button on any base page. Open Clash of Clans on your device, navigate to your village editor by tapping the layout icon, and select an empty layout slot or create a new one. The game will automatically detect the copied link and prompt you to import the base layout. You need a Town Hall {level} or higher to use these layouts.' },
    { q: 'What are the best attack strategies for TH{level}?', a: 'Popular attack strategies at TH{level} vary based on your troop levels and the base you are attacking. Check the attack strategies section on each base page for specific recommendations. Generally, practice 2-3 strategies until you master them rather than switching between many. Focus on strategies that work well against the bases you encounter most often in your trophy range or war matchups.' },
    { q: 'How many bases should I have saved at TH{level}?', a: 'We recommend saving at least 3-4 base layouts: a war base for Clan Wars and CWL, a farming base for resource protection during upgrades, a trophy base if you are pushing, and optionally a progress base for tracking upgrades. You can save up to 9 layouts in the game, so having multiple options for different situations is ideal.' },
    { q: 'Are these TH{level} bases updated for the current meta?', a: 'Yes, our TH{level} base layouts are regularly reviewed and updated to account for game balance changes, new troops, and evolving attack strategies. We monitor the competitive meta and add new bases that counter popular current strategies. Check the date on each base page to see when it was last verified.' },
    { q: 'Can I use a TH{level} base if I am still upgrading defenses?', a: 'Yes, these base layouts work even if your defenses are not fully maxed. The strategic placement and compartmentalization provide value regardless of defense levels. However, bases with higher-level defenses will perform better. Focus on upgrading the key defenses highlighted in the base descriptions for maximum effectiveness.' },
    { q: 'What is the difference between war and CWL bases at TH{level}?', a: 'War bases focus on preventing 3-star results and use compartmentalization to slow attackers. CWL bases prioritize preventing 2-star results since CWL uses a single-attack format where every star matters more. CWL bases typically bury the Town Hall deeper and use more time-wasting design. Both can be effective in either format, but specialized designs perform better.' },
  ],
  BH: [
    { q: 'What is the best Builder Hall {level} base layout?', a: 'The best BH{level} base layout depends on your trophy range and the attacks you face most often. Focus on bases that protect the Builder Hall from common strategies at your level. Unlike the Home Village, Builder Base battles are versus format, so your base needs to consistently perform better than your opponent\'s attack, not stop attacks completely.' },
    { q: 'What should I upgrade first at Builder Hall {level}?', a: 'At BH{level}, start by upgrading your strongest offensive troops to maximize attack performance, since you need to attack well to gain trophies. Then upgrade key defenses that counter the most common attack strategies you face. The Battle Machine hero should be an ongoing upgrade priority. Resource buildings help fund future upgrades faster.' },
    { q: 'How do I copy a BH{level} base layout?', a: 'Click the "Copy Base Link" button on any base page. Open Clash of Clans, switch to your Builder Base, tap the layout editor icon, and select an empty slot. The game will automatically detect the copied link and import the base. You need Builder Hall {level} or higher to use these layouts.' },
    { q: 'How does Builder Base defense differ from Home Village?', a: 'Builder Base uses a versus battle format where both players attack simultaneously. You only need to defend better than your opponent attacks, not stop attacks completely. This means Builder Base design focuses on maximizing percentage defense and protecting the Builder Hall star. Guard Post troops and the unique BH defenses like Crusher and Mega Tesla play crucial roles.' },
    { q: 'What are the best troops at Builder Hall {level}?', a: 'The strongest troops at BH{level} depend on your upgrade levels and the bases you face. Generally, focus on upgrading one or two troop types to maximum rather than spreading upgrades across all troops. The most versatile troops at higher BH levels tend to be Cannon Cart and Super PEKKA for ground, and Drop Ship with Beta Minion for air.' },
    { q: 'Should I rush my Builder Hall?', a: 'Many experienced players recommend rushing Builder Hall to unlock higher-level troops and defenses faster, especially to reach BH9 for the O.T.T.O Hut. Unlike the Home Village, Builder Base has fewer penalties for rushing because the versus format means you face opponents of similar strength regardless. Focus on upgrading key troops and the Battle Machine while rushing.' },
    { q: 'What is the O.T.T.O Hut and why does it matter?', a: 'The O.T.T.O Hut unlocks at BH9 and provides a second builder for your Home Village when fully upgraded. This is one of the most valuable upgrades in the entire game because it dramatically speeds up Home Village progress. Reaching and completing the O.T.T.O Hut requirements should be a primary Builder Base goal.' },
    { q: 'How important is the Battle Machine at BH{level}?', a: 'The Battle Machine is extremely important at every Builder Hall level. Its Electric Hammer ability deals massive damage and provides temporary invincibility. Keep the Battle Machine upgrading whenever possible, as higher levels significantly improve both your attack and defense performance. The Battle Machine often determines the outcome of close versus battles.' },
  ],
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Select a single item from a pool using deterministic index (modulo).
 */
function selectFromPool(pool, index) {
  if (!pool || pool.length === 0) return null;
  return pool[Math.abs(index) % pool.length];
}

/**
 * Select multiple items from a pool starting at a deterministic index.
 * Items are picked sequentially with wrap-around, no duplicates.
 */
function selectMultipleFromPool(pool, startIndex, count) {
  if (!pool || pool.length === 0) return [];
  const results = [];
  const start = Math.abs(startIndex) % pool.length;
  for (let i = 0; i < Math.min(count, pool.length); i++) {
    results.push(pool[(start + i) % pool.length]);
  }
  return results;
}

/**
 * Fill template placeholders with real data.
 * Replaces {level}, {hallType}, {keyDefense}, {hero}, {threat},
 * {adjective}, {challenge}, {feature}, {baseNumber}, {year}
 */
function fillTemplate(template, data) {
  const year = new Date().getFullYear();
  return template
    .replace(/\{level\}/g, data.level || '')
    .replace(/\{hallType\}/g, data.hallType || '')
    .replace(/\{keyDefense\}/g, data.keyDefense || '')
    .replace(/\{hero\}/g, data.hero || '')
    .replace(/\{threat\}/g, data.threat || '')
    .replace(/\{adjective\}/g, data.adjective || '')
    .replace(/\{challenge\}/g, data.challenge || '')
    .replace(/\{feature\}/g, data.feature || '')
    .replace(/\{baseNumber\}/g, data.baseNumber || '')
    .replace(/\{year\}/g, String(year));
}

/**
 * Fill FAQ template placeholders.
 */
function fillFaqTemplate(faq, hallType, level) {
  return {
    question: faq.q.replace(/\{hallType\}/g, hallType).replace(/\{level\}/g, level),
    answer: faq.a.replace(/\{hallType\}/g, hallType).replace(/\{level\}/g, level),
  };
}

// =============================================================================
// generateBaseContent(base)
// Main export: produces 7 content sections for base detail pages
// Content is deterministic based on (hallType, hallLevel, baseType, baseNumber)
// =============================================================================

/**
 * Generate rich content for a base detail page.
 * @param {Object} base - { hallType, hallLevel, baseType, baseNumber }
 * @returns {Object} - overview, keyFeatures, attackStrategies, troopCompositions,
 *                      buildingPlacement, prosAndCons, faq
 */
function generateBaseContent(base) {
  const { hallType, hallLevel, baseType, baseNumber } = base;
  const level = hallLevel;
  const num = baseNumber || 1;

  // Get level-specific game data
  const isBH = hallType === 'BH';
  const hallData = isBH ? BUILDER_HALL_DATA[level] : TOWN_HALL_DATA[level];
  if (!hallData) {
    return null;
  }

  // Get type-specific strategy data
  const typeStrategy = BASE_TYPE_STRATEGIES[baseType];
  const baseTypeLabel = baseType.charAt(0).toUpperCase() + baseType.slice(1);

  // Determine key values for template filling
  const keyDefense = selectFromPool(hallData.keyDefenses, num + 3) || 'defense';
  const hero = hallData.heroesAvailable.length > 0
    ? selectFromPool(hallData.heroesAvailable, num)
    : 'your defending troops';
  const threats = isBH
    ? (BH_ATTACK_STRATEGIES[level] || [])
    : (ATTACK_STRATEGIES[level] || []);
  const threat = selectFromPool(threats, num + 2) || 'common attacks';
  const adjective = selectFromPool(ADJECTIVES, num);
  const challenge = selectFromPool(CHALLENGES, num + 1);

  const templateData = {
    level: String(level),
    hallType,
    keyDefense,
    hero,
    threat,
    adjective,
    challenge,
    feature: selectFromPool(hallData.keyDefenses, num + 5) || 'defenses',
    baseNumber: String(num),
  };

  // --- 1. OVERVIEW ---
  const templates = OVERVIEW_TEMPLATES[baseType] || OVERVIEW_TEMPLATES.war;
  const overviewTemplate = selectFromPool(templates, num);
  const overview = fillTemplate(overviewTemplate, templateData);

  // --- 2. KEY FEATURES ---
  const featurePool = KEY_FEATURES[baseType] || KEY_FEATURES.war;
  const keyFeatures = selectMultipleFromPool(featurePool, num, 5);

  // --- 3. ATTACK STRATEGIES ---
  const attackPool = isBH
    ? (BH_ATTACK_STRATEGIES[level] || [])
    : (ATTACK_STRATEGIES[level] || []);

  const selectedAttacks = selectMultipleFromPool(attackPool, num, Math.min(4, attackPool.length));
  const effectivenessLabels = ['High', 'High', 'Medium', 'Medium', 'Low'];
  const attackStrategies = {
    intro: `Understanding what attacks this ${hallType}${level} ${baseType} base defends against helps you evaluate its effectiveness. ${typeStrategy ? typeStrategy.purpose + '.' : ''} Here are the most relevant attack strategies and how this base handles them:`,
    strategies: selectedAttacks.map((name, i) => ({
      name,
      description: `${name} is a ${i < 2 ? 'popular' : 'common'} strategy at ${hallType}${level} that this ${baseType} base is designed to counter through its ${selectFromPool(typeStrategy ? typeStrategy.designGoals : ['compartmentalized layout'], i)} and strategic defense placement.`,
      effectiveness: selectFromPool(effectivenessLabels, num + i),
    })),
  };

  // --- 4. TROOP COMPOSITIONS ---
  const troopPool = isBH ? null : TROOP_COMPOSITIONS[level];
  let troopCompositions = [];
  if (troopPool && troopPool.length > 0) {
    troopCompositions = selectMultipleFromPool(troopPool, num, 3);
  } else if (isBH) {
    // For BH, generate from BH attack strategies
    const bhAttacks = BH_ATTACK_STRATEGIES[level] || [];
    troopCompositions = selectMultipleFromPool(bhAttacks, num, 3).map(name => ({
      name,
      troops: `${name} composition using BH${level} troops`,
      spells: 'N/A (Builder Base)',
      description: `${name} is an effective versus battle strategy at Builder Hall ${level}. Deploy troops strategically to maximize percentage destruction and secure the Builder Hall star.`,
    }));
  }

  // --- 5. BUILDING PLACEMENT ---
  const tipsPool = BUILDING_PLACEMENT_TIPS[baseType] || BUILDING_PLACEMENT_TIPS.war;
  const selectedTips = selectMultipleFromPool(tipsPool, num, 4);
  const buildingPlacement = {
    intro: `Proper building placement is essential for a strong ${hallType}${level} ${baseType} base. ${typeStrategy ? typeStrategy.principles[0] + '.' : ''} Here are key placement tips for this layout:`,
    tips: selectedTips,
  };

  // --- 6. PROS AND CONS ---
  const prosPool = PROS_POOL[baseType] || PROS_POOL.war;
  const consPool = CONS_POOL[baseType] || CONS_POOL.war;
  const prosAndCons = {
    pros: selectMultipleFromPool(prosPool, num, 4),
    cons: selectMultipleFromPool(consPool, num + 7, 3),
  };

  // --- 7. FAQ ---
  const faqPool = BASE_FAQ_TEMPLATES[baseType] || BASE_FAQ_TEMPLATES.war;
  const selectedFaqs = selectMultipleFromPool(faqPool, num, 4);
  const faq = selectedFaqs.map(f => fillFaqTemplate(f, hallType, String(level)));

  return {
    overview,
    keyFeatures,
    attackStrategies,
    troopCompositions,
    buildingPlacement,
    prosAndCons,
    faq,
  };
}

// =============================================================================
// generateLevelPageContent(hallType, hallLevel)
// Produces rich content for TH/BH level listing pages
// Returns 1,500-2,000 words of unique level-specific content
// =============================================================================

/**
 * Generate rich content for a TH or BH level page.
 * @param {string} hallType - 'TH' or 'BH'
 * @param {number} hallLevel - the level number
 * @returns {Object} - introduction, whatsNew, bestBaseTypes, defensePriority, upgradeOrder, faq
 */
function generateLevelPageContent(hallType, hallLevel) {
  const isBH = hallType === 'BH';
  const hallData = isBH ? BUILDER_HALL_DATA[hallLevel] : TOWN_HALL_DATA[hallLevel];
  if (!hallData) return null;

  const level = hallLevel;
  const hallName = isBH ? 'Builder Hall' : 'Town Hall';
  const year = new Date().getFullYear();

  // --- 1. INTRODUCTION (500+ words) ---
  const introduction = generateIntroduction(hallType, level, hallData, isBH, hallName, year);

  // --- 2. WHAT'S NEW ---
  const whatsNew = generateWhatsNew(hallType, level, hallData, isBH);

  // --- 3. BEST BASE TYPES ---
  const bestBaseTypes = generateBestBaseTypes(hallType, level, hallData, isBH);

  // --- 4. DEFENSE PRIORITY ---
  const defensePriority = generateDefensePriority(hallType, level, hallData, isBH);

  // --- 5. UPGRADE ORDER ---
  const upgradeOrder = generateUpgradeOrder(hallType, level, hallData, isBH);

  // --- 6. FAQ ---
  const faqPool = LEVEL_PAGE_FAQ_TEMPLATES[hallType] || LEVEL_PAGE_FAQ_TEMPLATES.TH;
  const selectedFaqs = selectMultipleFromPool(faqPool, level, Math.min(6, faqPool.length));
  const faq = selectedFaqs.map(f => fillFaqTemplate(f, hallType, String(level)));

  return {
    introduction,
    whatsNew,
    bestBaseTypes,
    defensePriority,
    upgradeOrder,
    faq,
  };
}

// ---------------------------------------------------------------------------
// Introduction generator - 500+ words about this TH/BH level
// ---------------------------------------------------------------------------
function generateIntroduction(hallType, level, hallData, isBH, hallName, year) {
  const tierDescriptions = {
    beginner: 'an early-game level where players are still learning the fundamentals of base design and attack strategy',
    intermediate: 'a mid-game level that introduces critical strategic elements and marks the transition from casual to competitive play',
    advanced: 'a late-game level with complex defense mechanics and sophisticated attack strategies that challenge even experienced players',
    endgame: 'an end-game level where mastery of both offense and defense is essential for competitive success',
  };

  const tierDesc = tierDescriptions[hallData.tier] || tierDescriptions.intermediate;

  // Build hero paragraph
  let heroParagraph = '';
  if (hallData.heroesAvailable && hallData.heroesAvailable.length > 0) {
    const heroes = hallData.heroesAvailable;
    if (isBH) {
      heroParagraph = `At ${hallType}${level}, the ${heroes[0]} is your primary hero unit. The Battle Machine\'s Electric Hammer ability deals massive burst damage and provides temporary invincibility, making it a game-changer in versus battles. Keeping the Battle Machine upgraded should be an ongoing priority, as its level directly impacts both your offensive and defensive capabilities. A higher-level Battle Machine can survive longer on defense and deal more damage on offense, often determining the outcome of close matches.`;
    } else {
      const heroList = heroes.join(', ');
      const newestHero = heroes[heroes.length - 1];
      heroParagraph = `At Town Hall ${level}, you have access to ${heroes.length} ${heroes.length === 1 ? 'hero' : 'heroes'}: ${heroList}. ${heroes.length > 1 ? `The ${newestHero} becomes a critical part of both your attack strategy and base defense at this level.` : `The ${newestHero} is a powerful unit that changes both your offensive and defensive capabilities significantly.`} Heroes should be upgraded continuously, even if it means sitting out of a few wars, because their combat effectiveness scales dramatically with level. At ${hallType}${level}, having max-level heroes gives you a significant advantage in both Clan Wars and Legend League.`;
    }
  }

  // Build defense paragraph
  const topDefenses = hallData.keyDefenses.slice(-4);
  const defenseParagraph = isBH
    ? `Builder Hall ${level} features key defensive buildings including ${topDefenses.join(', ')}. In versus battles, your base layout must counter the most popular attack strategies at this level while protecting the Builder Hall for that crucial star denial. Unlike the Home Village, Builder Base defense is about doing better than your opponent\'s attack rather than stopping attacks entirely. This means every percentage point of destruction denied can make the difference between winning and losing.`
    : `Town Hall ${level} features powerful defenses including ${topDefenses.join(', ')}. Proper placement of these defenses is critical for both Clan War performance and multiplayer defense. Each defense serves a specific role in your base layout, and understanding how they interact with each other determines whether your base will hold against skilled attacks or crumble under pressure. The key to a strong TH${level} defense is creating overlapping coverage zones where multiple defenses target the same area.`;

  // Build attack paragraph
  const attacks = isBH
    ? (BH_ATTACK_STRATEGIES[level] || []).slice(0, 4)
    : (ATTACK_STRATEGIES[level] || []).slice(0, 5);
  const attackParagraph = attacks.length > 0
    ? `The most popular attack strategies at ${hallType}${level} include ${attacks.join(', ')}. Understanding these strategies is essential not only for attacking enemy bases but also for designing your own base to counter them. A well-designed ${hallType}${level} base should account for the most common attacks you will face at this level, using trap placement and defensive positioning to exploit the weaknesses in each strategy. We recommend mastering two to three attack strategies before branching out, as consistent execution beats variety in competitive play.`
    : '';

  // Build pets/siege paragraph for higher TH levels
  let extraParagraph = '';
  if (!isBH && hallData.pets && hallData.pets.length > 0) {
    extraParagraph = `Hero Pets add another layer of strategic depth at Town Hall ${level}. Available pets include ${hallData.pets.join(', ')}. Each pet pairs with a specific hero to enhance their abilities, and choosing the right pet-hero combination for each attack is an important skill to develop. On defense, pets follow their assigned heroes and contribute additional damage and utility that attackers must account for in their planning.`;
  } else if (!isBH && hallData.siegeMachines && hallData.siegeMachines.length > 0) {
    extraParagraph = `Siege Machines play a crucial role at Town Hall ${level}, with options including ${hallData.siegeMachines.join(', ')}. The right siege machine choice can make or break an attack, as each one offers a different way to access the enemy base core. When designing your base, consider how to counter common siege machine entries by positioning defenses and walls to minimize their effectiveness.`;
  } else if (isBH && hallData.ottoHut) {
    extraParagraph = `One of the most important features at Builder Hall ${level} is the O.T.T.O Hut. When fully upgraded, it provides a second builder for your Home Village, dramatically accelerating your overall Clash of Clans progress. Completing the O.T.T.O Hut requirements should be a top priority at this Builder Hall level, as the benefit of an extra builder compounds over time and is considered one of the most valuable upgrades in the entire game.`;
  }

  // Build base design paragraph
  const baseDesignParagraph = isBH
    ? `Choosing the right Builder Hall ${level} base layout is essential for climbing the versus battle trophy ladder. Your base needs to handle the diverse range of attacks you will face, from ground-heavy strategies to air-based compositions. The best BH${level} bases use the unique Builder Base defenses like the Crusher and ${hallData.keyDefenses.length > 3 ? hallData.keyDefenses[hallData.keyDefenses.length - 2] : 'key defenses'} to create kill zones that punish predictable troop deployment patterns. Browse our collection of BH${level} bases below and use the copy link feature to import them directly into your game.`
    : `Choosing the right Town Hall ${level} base layout can make a significant difference in your Clash of Clans experience. Whether you are focused on Clan Wars, CWL, trophy pushing, or simply protecting your resources while upgrading, having a well-designed base for each purpose is important. Our collection of TH${level} bases has been curated for the ${year} meta and includes war, farming, trophy, hybrid, and CWL designs, each with a one-click copy link for easy import. Browse the layouts below and find the perfect base for your current goals.`;

  // Combine all paragraphs
  const paragraphs = [
    `${hallName} ${level} is ${tierDesc}. ${hallData.description.charAt(0).toUpperCase() + hallData.description.slice(1)}. This level ${isBH ? 'brings' : 'introduces'} new strategic options that change how you approach both offense and defense, making it ${level >= 10 || (isBH && level >= 7) ? 'a pivotal point in your Clash of Clans journey' : 'an exciting step forward in your progression'}.`,
    heroParagraph,
    defenseParagraph,
    attackParagraph,
    extraParagraph,
    baseDesignParagraph,
  ].filter(p => p.length > 0);

  return paragraphs.join('\n\n');
}

// ---------------------------------------------------------------------------
// What's New generator
// ---------------------------------------------------------------------------
function generateWhatsNew(hallType, level, hallData, isBH) {
  const categories = [];

  if (hallData.newBuildings && hallData.newBuildings.length > 0) {
    categories.push({
      category: 'New Buildings & Defenses',
      items: hallData.newBuildings,
    });
  }

  if (!isBH && hallData.heroesAvailable && hallData.heroesAvailable.length > 0) {
    // Find heroes new at this level by comparing to previous
    const prevData = TOWN_HALL_DATA[level - 1];
    const prevHeroes = prevData ? prevData.heroesAvailable : [];
    const newHeroes = hallData.heroesAvailable.filter(h => !prevHeroes.includes(h));
    if (newHeroes.length > 0) {
      categories.push({
        category: 'New Heroes',
        items: newHeroes.map(h => `${h} unlocked`),
      });
    }
  }

  if (isBH && level === 5) {
    categories.push({
      category: 'New Hero',
      items: ['Battle Machine unlocked with Electric Hammer ability'],
    });
  }

  // New troops (compare to previous level)
  const prevData = isBH ? BUILDER_HALL_DATA[level - 1] : TOWN_HALL_DATA[level - 1];
  if (prevData) {
    const prevTroops = prevData.keyTroops || [];
    const newTroops = hallData.keyTroops.filter(t => !prevTroops.includes(t));
    if (newTroops.length > 0) {
      categories.push({
        category: 'New Troops',
        items: newTroops,
      });
    }
  }

  // New spells (TH only)
  if (!isBH && prevData && hallData.spellsAvailable) {
    const prevSpells = prevData.spellsAvailable || [];
    const newSpells = hallData.spellsAvailable.filter(s => !prevSpells.includes(s));
    if (newSpells.length > 0) {
      categories.push({
        category: 'New Spells',
        items: newSpells,
      });
    }
  }

  // Pets (TH only)
  if (!isBH && hallData.pets && prevData) {
    const prevPets = prevData.pets || [];
    const newPets = hallData.pets.filter(p => !prevPets.includes(p));
    if (newPets.length > 0) {
      categories.push({
        category: 'New Hero Pets',
        items: newPets,
      });
    }
  }

  // Siege machines
  if (!isBH && hallData.siegeMachines && prevData) {
    const prevSiege = prevData.siegeMachines || [];
    const newSiege = hallData.siegeMachines.filter(s => !prevSiege.includes(s));
    if (newSiege.length > 0) {
      categories.push({
        category: 'New Siege Machines',
        items: newSiege,
      });
    }
  }

  // Army camp / wall increases
  const statChanges = [];
  if (prevData && hallData.armyCampSpace && prevData.armyCampSpace && hallData.armyCampSpace > prevData.armyCampSpace) {
    statChanges.push(`Army Camp capacity increased to ${hallData.armyCampSpace} (from ${prevData.armyCampSpace})`);
  }
  if (prevData && hallData.wallCount && prevData.wallCount && hallData.wallCount > prevData.wallCount) {
    statChanges.push(`Wall count increased to ${hallData.wallCount} (from ${prevData.wallCount})`);
  }
  if (statChanges.length > 0) {
    categories.push({
      category: 'Capacity Increases',
      items: statChanges,
    });
  }

  // O.T.T.O for BH
  if (isBH && hallData.ottoHut && (!prevData || !prevData.ottoHut)) {
    categories.push({
      category: 'Special Feature',
      items: ['O.T.T.O Hut - unlocks a second builder for your Home Village when fully upgraded'],
    });
  }

  return categories;
}

// ---------------------------------------------------------------------------
// Best Base Types generator
// ---------------------------------------------------------------------------
function generateBestBaseTypes(hallType, level, hallData, isBH) {
  if (isBH) {
    return [
      {
        type: 'Versus Battle Base',
        description: `The primary base type for Builder Hall ${level}. Focus on protecting the Builder Hall while making it difficult for opponents to reach high destruction percentages. Position the Crusher and ${hallData.keyDefenses.length > 3 ? hallData.keyDefenses[hallData.keyDefenses.length - 1] : 'key defenses'} to create kill zones at common attack entry points.`,
        recommended: true,
      },
      {
        type: 'Anti-Ground Base',
        description: `Specifically designed to counter ground-heavy strategies like ${(BH_ATTACK_STRATEGIES[level] || ['ground attacks'])[0]}. Uses the Crusher and walls to funnel ground troops into splash damage zones.`,
        recommended: level >= 7,
      },
      {
        type: 'Anti-Air Base',
        description: `Optimized against air attacks with Firecrackers and Air Bombs positioned to intercept common air deployment angles. Useful when you face many air-based opponents in your trophy range.`,
        recommended: level >= 6,
      },
    ];
  }

  const baseTypes = [
    {
      type: 'War Base',
      description: `Essential for Clan Wars at TH${level}. Anti-3-star design with compartmentalized layout, centralized Clan Castle, and strategic trap placement. ${level >= 13 ? 'At this level, anti-siege and anti-Super-Troop design elements become critical.' : level >= 10 ? 'Inferno Tower and Eagle Artillery placement are key design considerations.' : 'Focus on centralized heroes and spread air defenses.'}`,
      recommended: true,
    },
    {
      type: 'Farming Base',
      description: `Protect your resources during the long TH${level} upgrade grind. Centralized storages with splash defense coverage and an exposed Town Hall to discourage full attacks. ${level >= 12 ? 'Dark Elixir protection is especially important for hero and pet upgrades.' : 'Prioritize protecting whichever resource you need most for current upgrades.'}`,
      recommended: true,
    },
    {
      type: 'Trophy Base',
      description: `For players pushing trophies or competing in Legend League at TH${level}. Heavily defended centralized Town Hall with dense air defense coverage. ${level >= 15 ? 'Anti-Root-Rider and anti-Recall design elements are important at this level.' : 'Focus on anti-Queen-Walk perimeter and kill zones around the Town Hall.'}`,
      recommended: level >= 9,
    },
    {
      type: 'CWL Base',
      description: `Optimized for Clan War League\'s single-attack format. Anti-2-star design with deep Town Hall placement and time-wasting compartments. ${level >= 13 ? 'CWL mismatches are common, so the base should hold against attacks from higher Town Hall levels.' : 'Focus on making the Town Hall extremely difficult to reach.'}`,
      recommended: level >= 10,
    },
    {
      type: 'Hybrid Base',
      description: `All-purpose layout that balances Town Hall protection with resource defense. Ideal for players who want one base for everything. ${level >= 11 ? 'At TH' + level + ', hybrid bases benefit from the additional defenses that allow dual-purpose placement.' : 'A great choice if you participate in wars but also need to protect farming progress.'}`,
      recommended: true,
    },
  ];

  // Add progress base for higher levels
  if (level >= 10) {
    baseTypes.push({
      type: 'Progress Base',
      description: `Organizational layout for tracking your TH${level} upgrade progress. Buildings grouped by type and level make it easy to plan builder assignments. ${level >= 14 ? 'With pets, siege machines, and dozens of defenses to upgrade, a progress base is extremely helpful.' : 'Useful for managing the increasing number of upgrade targets at this level.'}`,
      recommended: false,
    });
  }

  return baseTypes;
}

// ---------------------------------------------------------------------------
// Defense Priority generator
// ---------------------------------------------------------------------------
function generateDefensePriority(hallType, level, hallData, isBH) {
  if (isBH) {
    const priorities = [
      { building: 'Battle Machine', priority: 'High', reason: 'Your hero directly impacts both offense and defense. Higher levels mean more damage and survivability in versus battles.' },
    ];

    // Add new buildings as high priority
    if (hallData.newBuildings) {
      hallData.newBuildings.forEach(b => {
        if (b.toLowerCase().includes('o.t.t.o')) {
          priorities.push({ building: 'O.T.T.O Hut', priority: 'High', reason: 'Unlocks a second builder for your Home Village. Complete this as soon as possible for massive long-term value.' });
        } else {
          priorities.push({ building: b, priority: 'High', reason: `New defense at BH${level}. Build and upgrade it immediately to strengthen your base against current-level attacks.` });
        }
      });
    }

    // Add key existing defenses
    const topDefenses = hallData.keyDefenses.slice(-3);
    topDefenses.forEach(d => {
      if (!priorities.find(p => p.building === d)) {
        priorities.push({ building: d, priority: 'Medium', reason: `Key defense at BH${level}. Upgrade to keep pace with attacking troops at your trophy range.` });
      }
    });

    priorities.push({ building: 'Walls', priority: 'Medium', reason: 'Walls channel troops into kill zones and protect key defenses. Upgrade between major defense upgrades.' });
    priorities.push({ building: 'Traps', priority: 'Low', reason: 'Affordable upgrades that provide incremental defensive value. Upgrade when other builders are busy with longer upgrades.' });

    return priorities;
  }

  // TH priorities
  const priorities = [];

  // Clan Castle always high
  priorities.push({ building: 'Clan Castle', priority: 'High', reason: 'Higher-level Clan Castle holds more and stronger defensive troops. This single upgrade impacts every defense you play.' });

  // Laboratory
  priorities.push({ building: 'Laboratory', priority: 'High', reason: 'Keeps troop research running. Stronger troops improve both your attack power and Clan War contributions.' });

  // New heroes at this level
  const prevData = TOWN_HALL_DATA[level - 1];
  if (prevData) {
    const newHeroes = hallData.heroesAvailable.filter(h => !(prevData.heroesAvailable || []).includes(h));
    newHeroes.forEach(h => {
      priorities.push({ building: h, priority: 'High', reason: `New hero at TH${level}. Build immediately and prioritize upgrading for both offensive and defensive power.` });
    });
  }

  // Army Camps
  if (prevData && hallData.armyCampSpace > (prevData.armyCampSpace || 0)) {
    priorities.push({ building: 'Army Camps', priority: 'High', reason: `Increased troop capacity to ${hallData.armyCampSpace}. More troops means stronger attacks in both war and farming.` });
  }

  // New defenses
  if (hallData.newBuildings) {
    hallData.newBuildings.slice(0, 3).forEach(b => {
      if (!b.toLowerCase().includes('additional') && !priorities.find(p => p.building === b)) {
        priorities.push({ building: b, priority: 'High', reason: `New at TH${level}. Build immediately to add this powerful defense to your base layout.` });
      }
    });
  }

  // Existing key defenses
  const highPriorityDefenses = ['Eagle Artillery', 'Inferno Tower', 'X-Bow', 'Scattershot', 'Monolith', 'Giga Tesla', 'Giga Inferno'];
  hallData.keyDefenses.forEach(d => {
    if (highPriorityDefenses.includes(d) && !priorities.find(p => p.building === d)) {
      priorities.push({ building: d, priority: 'High', reason: `One of the strongest defenses at TH${level}. Max this to significantly improve your base\'s defensive capability.` });
    }
  });

  // Splash defenses medium
  const mediumDefenses = ['Wizard Tower', 'Bomb Tower', 'Mortar', 'Spell Tower'];
  hallData.keyDefenses.forEach(d => {
    if (mediumDefenses.includes(d) && !priorities.find(p => p.building === d)) {
      priorities.push({ building: d, priority: 'Medium', reason: `Splash defense that handles swarm troops. Important for both war defense and farming protection.` });
    }
  });

  // Point defenses
  const pointDefenses = ['Cannon', 'Archer Tower', 'Hidden Tesla'];
  pointDefenses.forEach(d => {
    if (hallData.keyDefenses.includes(d) && !priorities.find(p => p.building === d)) {
      priorities.push({ building: d, priority: 'Medium', reason: `Consistent point damage defense. Upgrade steadily between major defense upgrades.` });
    }
  });

  // Walls and traps
  priorities.push({ building: 'Walls', priority: 'Medium', reason: 'Walls are the backbone of compartmentalization. Upgrade to current max between defense upgrades using excess resources.' });
  priorities.push({ building: 'Traps', priority: 'Low', reason: 'Quick, affordable upgrades that provide incremental defensive value. Good for using builders while saving for expensive upgrades.' });

  // Heroes ongoing
  hallData.heroesAvailable.forEach(h => {
    if (!priorities.find(p => p.building === h)) {
      priorities.push({ building: h, priority: 'High', reason: `Keep ${h} upgrading continuously. Hero levels have the highest impact on both attack and defense performance.` });
    }
  });

  return priorities.slice(0, 12); // Cap at 12 items
}

// ---------------------------------------------------------------------------
// Upgrade Order generator - phased guide
// ---------------------------------------------------------------------------
function generateUpgradeOrder(hallType, level, hallData, isBH) {
  if (isBH) {
    const phases = [
      {
        phase: 1,
        title: 'Immediate Priorities',
        items: [
          `Build all new buildings: ${(hallData.newBuildings || []).join(', ')}`,
          'Upgrade Star Laboratory to unlock new troop levels',
          hallData.heroesAvailable.length > 0 ? `Start ${hallData.heroesAvailable[0]} upgrade` : 'Upgrade army camps for more troop space',
          'Upgrade your strongest attack troop to the new max level',
        ],
      },
      {
        phase: 2,
        title: 'Core Upgrades',
        items: [
          `Upgrade key defenses: ${hallData.keyDefenses.slice(-3).join(', ')}`,
          'Continue Battle Machine upgrades between wars',
          'Upgrade secondary attack troops for versatility',
          'Upgrade Gem Mine for passive gem income',
        ],
      },
      {
        phase: 3,
        title: 'Finishing Up',
        items: [
          'Max remaining defenses to current level cap',
          'Upgrade walls to current maximum',
          'Finish all trap upgrades',
          hallData.ottoHut ? 'Complete O.T.T.O Hut requirements for the second Home Village builder' : 'Max all remaining buildings before upgrading to the next BH level',
        ],
      },
    ];
    return phases;
  }

  // TH upgrade phases
  const prevData = TOWN_HALL_DATA[level - 1];
  const newHeroes = prevData
    ? hallData.heroesAvailable.filter(h => !(prevData.heroesAvailable || []).includes(h))
    : [];

  const newSpells = prevData && hallData.spellsAvailable
    ? hallData.spellsAvailable.filter(s => !(prevData.spellsAvailable || []).includes(s))
    : [];

  const phases = [
    {
      phase: 1,
      title: 'First Week - Critical Upgrades',
      items: [
        'Upgrade Clan Castle for stronger defensive troops and siege machine access',
        'Upgrade Laboratory and start researching your primary war army',
        `Build all new buildings: ${(hallData.newBuildings || []).join(', ')}`,
        newHeroes.length > 0 ? `Build ${newHeroes.join(' and ')} altar and start upgrading` : `Continue upgrading ${hallData.heroesAvailable[hallData.heroesAvailable.length - 1]}`,
        hallData.armyCampSpace && prevData && hallData.armyCampSpace > (prevData.armyCampSpace || 0)
          ? `Upgrade Army Camps to ${hallData.armyCampSpace} capacity`
          : 'Upgrade Barracks to unlock new troop levels',
      ].filter(Boolean),
    },
    {
      phase: 2,
      title: 'Weeks 2-4 - Offense & Key Defenses',
      items: [
        'Upgrade Spell Factory and Dark Spell Factory for new spell levels',
        newSpells.length > 0 ? `Research new spells: ${newSpells.join(', ')}` : 'Continue researching core army troops',
        `Upgrade key defenses: ${hallData.keyDefenses.slice(-3).join(', ')}`,
        'Upgrade resource storages and collectors to fund expensive upgrades',
        'Keep heroes upgrading continuously between wars',
      ].filter(Boolean),
    },
    {
      phase: 3,
      title: 'Weeks 4-8 - Defense & Infrastructure',
      items: [
        'Upgrade remaining splash defenses: Wizard Towers, Bomb Towers, Mortars',
        'Upgrade point defenses: Cannons, Archer Towers, Hidden Teslas',
        'Upgrade Air Defenses and Air Sweepers to counter air attacks',
        'Start wall upgrades using excess Gold and Elixir',
        hallData.pets ? `Upgrade Pet House and train pets: ${hallData.pets.slice(0, 3).join(', ')}` : 'Upgrade traps between major defense upgrades',
      ].filter(Boolean),
    },
    {
      phase: 4,
      title: 'Final Phase - Maxing Out',
      items: [
        'Finish all remaining defense upgrades',
        'Complete wall upgrades to current maximum level',
        'Max all heroes to current level cap',
        'Upgrade all remaining traps to maximum',
        hallData.pets ? `Max all Hero Pets: ${hallData.pets.join(', ')}` : 'Finish all Laboratory research',
        'Verify all buildings are maxed before considering the next Town Hall upgrade',
      ].filter(Boolean),
    },
  ];

  return phases;
}

// =============================================================================
// EXPORTS
// =============================================================================
module.exports = {
  TOWN_HALL_DATA,
  BUILDER_HALL_DATA,
  BASE_TYPE_STRATEGIES,
  ATTACK_STRATEGIES,
  BH_ATTACK_STRATEGIES,
  TROOPS_BY_TH_LEVEL,
  ADJECTIVES,
  CHALLENGES,
  OVERVIEW_TEMPLATES,
  KEY_FEATURES,
  PROS_POOL,
  CONS_POOL,
  TROOP_COMPOSITIONS,
  BUILDING_PLACEMENT_TIPS,
  BASE_FAQ_TEMPLATES,
  LEVEL_PAGE_FAQ_TEMPLATES,
  // Functions
  selectFromPool,
  selectMultipleFromPool,
  generateBaseContent,
  generateLevelPageContent,
};
