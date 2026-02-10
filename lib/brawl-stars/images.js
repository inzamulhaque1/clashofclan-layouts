// Brawl Stars Image Library - Centralized image management for reusability
// All images used across Brawl Stars guides, pages, and components

// ============================================
// BRAWLER IMAGES (from PixelCrux)
// ============================================
const IMG_BASE = 'https://pixelcrux.com/Brawl_Stars/Images/Brawlers/Med';
const IMG_PORT = 'https://pixelcrux.com/Brawl_Stars/Images/Brawler_Portraits/Med';

// Helper to generate brawler image URLs
export const getBrawlerImage = (name) => `${IMG_PORT}/${name}.png`;
export const getBrawlerFullImage = (name) => `${IMG_BASE}/${name}.png`;

// All brawler portrait images
export const BRAWLER_IMAGES = {
  spike: getBrawlerImage('Spike'),
  mortis: getBrawlerImage('Mortis'),
  emz: getBrawlerImage('Emz'),
  buster: getBrawlerImage('Buster'),
  gray: getBrawlerImage('Gray'),
  cordelius: getBrawlerImage('Cordelius'),
  colt: getBrawlerImage('Colt'),
  piper: getBrawlerImage('Piper'),
  byron: getBrawlerImage('Byron'),
  frank: getBrawlerImage('Frank'),
  fang: getBrawlerImage('Fang'),
  tara: getBrawlerImage('Tara'),
  max: getBrawlerImage('Max'),
  stu: getBrawlerImage('Stu'),
  colonelRuffs: getBrawlerImage('Colonel_Ruffs'),
  belle: getBrawlerImage('Belle'),
  mandy: getBrawlerImage('Mandy'),
  shelly: getBrawlerImage('Shelly'),
  nita: getBrawlerImage('Nita'),
  bull: getBrawlerImage('Bull'),
  jessie: getBrawlerImage('Jessie'),
  brock: getBrawlerImage('Brock'),
  dynamike: getBrawlerImage('Dynamike'),
  bo: getBrawlerImage('Bo'),
  tick: getBrawlerImage('Tick'),
  elPrimo: getBrawlerImage('El_Primo'),
  barley: getBrawlerImage('Barley'),
  poco: getBrawlerImage('Poco'),
  rosa: getBrawlerImage('Rosa'),
  gene: getBrawlerImage('Gene'),
  sprout: getBrawlerImage('Sprout'),
  lola: getBrawlerImage('Lola'),
  ash: getBrawlerImage('Ash'),
  gus: getBrawlerImage('Gus'),
  sam: getBrawlerImage('Sam'),
  rico: getBrawlerImage('Rico'),
  darryl: getBrawlerImage('Darryl'),
  penny: getBrawlerImage('Penny'),
  carl: getBrawlerImage('Carl'),
  bibi: getBrawlerImage('Bibi'),
  bea: getBrawlerImage('Bea'),
  edgar: getBrawlerImage('Edgar'),
  griff: getBrawlerImage('Griff'),
  colette: getBrawlerImage('Colette'),
  lou: getBrawlerImage('Lou'),
  nani: getBrawlerImage('Nani'),
  squeak: getBrawlerImage('Squeak'),
  mrP: getBrawlerImage('Mr_P'),
  amber: getBrawlerImage('Amber'),
  pam: getBrawlerImage('Pam'),
  crow: getBrawlerImage('Crow'),
  leon: getBrawlerImage('Leon'),
  sandy: getBrawlerImage('Sandy'),
  meg: getBrawlerImage('Meg'),
  surge: getBrawlerImage('Surge'),
  eve: getBrawlerImage('Eve'),
  janet: getBrawlerImage('Janet'),
  bonnie: getBrawlerImage('Bonnie'),
  otis: getBrawlerImage('Otis'),
  grom: getBrawlerImage('Grom'),
  buzz: getBrawlerImage('Buzz'),
  ruffs: getBrawlerImage('Ruffs'),
  jacky: getBrawlerImage('Jacky'),
  gale: getBrawlerImage('Gale'),
  eightBit: getBrawlerImage('8-Bit'),
  mortis: getBrawlerImage('Mortis'),
};

// ============================================
// GUIDE IMAGES
// ============================================
export const GUIDE_IMAGES = {
  // ============================================
  // BEGINNER'S GUIDE IMAGES
  // ============================================
  beginnersGuide: {
    hero: {
      url: "https://wowvendor.com/app/uploads/2024/09/Brawl-Stars-beginners-guide-best-tips-for-new-players.png",
      alt: "Brawl Stars Beginner Guide 2026 - Complete Tutorial for New Players"
    },
    mainMenu: {
      url: "https://i.redd.it/6ko96lfznaw41.jpg",
      alt: "Brawl Stars main menu interface and game modes selection screen"
    },
    firstBrawler: {
      url: "https://preview.redd.it/wouldnt-it-be-cool-if-you-could-choose-your-starting-v0-rno2urcfcvgb1.png?width=640&crop=smart&auto=webp&s=0a4ac5623905f01d5c679ad74ab93476b9e831d1",
      alt: "How to choose your first brawler in Brawl Stars - Shelly starter guide"
    },
    trophyRoad: {
      url: "https://i.redd.it/hd6ojhmo6aob1.jpg",
      alt: "Brawl Stars trophy road rewards and progression system explained"
    },
    gemGrab: {
      url: "https://gamingonphone.com/wp-content/uploads/2020/05/gem.jpg",
      alt: "Gem Grab game mode tutorial - best beginner strategy Brawl Stars"
    },
    brawlBall: {
      url: "https://preview.redd.it/i-do-not-understand-brawl-ball-how-do-you-actually-get-good-v0-5iwtn3i3yrge1.jpeg?auto=webp&s=c29378f5ccbe2586240464560760975915e1751b",
      alt: "Brawl Ball tips for beginners - scoring goals in Brawl Stars"
    },
    showdown: {
      url: "https://i.ytimg.com/vi/guRK3JMBpBM/maxresdefault.jpg",
      alt: "Solo Showdown survival guide - Brawl Stars battle royale tips"
    },
    controls: {
      url: "https://i.ytimg.com/vi/v9UYAHMxIsY/maxresdefault.jpg",
      alt: "Brawl Stars controls and movement mechanics tutorial for beginners"
    },
    upgradeBrawlers: {
      url: "https://preview.redd.it/literally-the-most-simple-fix-to-having-too-many-power-v0-jvyklso112wc1.jpeg?auto=webp&s=3c801b3a508bc0d0294e66852dff4e1d5f904099",
      alt: "How to upgrade brawlers with power points and coins in Brawl Stars"
    },
    starPowers: {
      url: "https://skycoach.gg/storage/uploads/products/description/product_67d9c77fbc351.jpg",
      alt: "Unlocking star powers and gadgets - Brawl Stars progression guide"
    },
    clubs: {
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/brawl-stars/5/50/2019-01-28_14-08-05_000.png?width=1280",
      alt: "Joining a club in Brawl Stars - social features and club league"
    },
    brawlPass: {
      url: "https://www.thexboxhub.com/wp-content/uploads/2025/12/image-3-640x288.png",
      alt: "Brawl Pass explained - free vs premium rewards guide 2026"
    },
  },

  // ============================================
  // RANKED GUIDE IMAGES
  // ============================================
  rankedGuide: {
    hero: {
      url: "https://brawlhub.co/wp-content/uploads/2024/03/HowRankedWorks-1024x461.jpg",
      alt: "Brawl Stars Ranked Mode Guide 2026 - How to Push to Mythic"
    },
    rankedTiers: {
      url: "https://brawlhub.co/wp-content/uploads/2024/03/RanksRoadV3.png",
      alt: "Brawl Stars ranked tiers from Bronze to Mythic explained"
    },
    bestBrawlers: {
      url: "https://i.ytimg.com/vi/qe4nKmuQAC8/maxresdefault.jpg",
      alt: "Best brawlers for ranked mode in Brawl Stars 2026"
    },
    teamComposition: {
      url: "https://cdn-0001.qstv.on.epicgames.com/YYlHBTrPRuAfTITEpX/image/landscape_comp.jpeg",
      alt: "Optimal team composition for Brawl Stars ranked matches"
    },
    mapRotation: {
      url: "https://prod.assets.earlygamecdn.com/images/BrawlStarsMapRotation.jpg?mtime=1740557027",
      alt: "Brawl Stars ranked map rotation and selection tips"
    },
    winStreak: {
      url: "https://preview.redd.it/did-the-new-ranking-system-make-it-easier-to-gain-trophies-v0-6jsjcddjli2e1.jpeg?auto=webp&s=6cb19b355d7dfe9be30ad8f4a44ce0e9a2b8e5b1",
      alt: "How win streaks affect rank progression in Brawl Stars"
    },
  },

  // ============================================
  // STAR POWERS & GADGETS GUIDE IMAGES
  // ============================================
  starPowersGuide: {
    hero: {
      url: "https://skycoach.gg/storage/uploads/products/description/product_67d9c77fbc351.jpg",
      alt: "Best Star Powers and Gadgets Guide Brawl Stars 2026"
    },
    starPowersTierList: {
      url: "https://i.ytimg.com/vi/PJNIcDI8wS4/maxresdefault.jpg",
      alt: "Best star powers tier list Brawl Stars 2026"
    },
    gadgetsTierList: {
      url: "https://www.destructoid.com/wp-content/uploads/2025/03/b-tier-gadgets-mo-co.jpg?resize=1200%2C675",
      alt: "Best gadgets tier list Brawl Stars 2026"
    },
    hypercharge: {
      url: "https://s.yimg.com/ny/api/res/1.2/V9P7fIIPJ1Ezd9QakhuQig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzQ2/https://media.zenfs.com/en/clutchpoints_articles_939/1d88bd1cad15b3542d8b0c29b3ef59de",
      alt: "Brawl Stars hypercharge system explained"
    },
    upgradeBrawlers: {
      url: "https://preview.redd.it/literally-the-most-simple-fix-to-having-too-many-power-v0-jvyklso112wc1.jpeg?auto=webp&s=3c801b3a508bc0d0294e66852dff4e1d5f904099",
      alt: "How to upgrade brawlers to unlock star powers and gadgets"
    },
  },

  // ============================================
  // GEM SPENDING GUIDE IMAGES
  // ============================================
  gemSpendingGuide: {
    hero: {
      url: "https://www.thexboxhub.com/wp-content/uploads/2025/12/image-3-640x288.png",
      alt: "Brawl Stars Gem Spending Guide 2026 - Best Value Purchases"
    },
    gemShop: {
      url: "https://res.ldrescdn.com/rms/ldplayer/process/img/d2de72cfc8cf4b4cb1ef8d12b5da13af1755586476.jpg?x-oss-process=image/format,webp/quality,Q_100/resize,w_1024",
      alt: "Brawl Stars gem shop offers and deals guide 2026"
    },
    trophyRoad: {
      url: "https://i.redd.it/hd6ojhmo6aob1.jpg",
      alt: "Free gems from Brawl Stars trophy road rewards"
    },
  },

  // ============================================
  // CLUB LEAGUE GUIDE IMAGES
  // ============================================
  clubLeagueGuide: {
    hero: {
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/brawl-stars/5/50/2019-01-28_14-08-05_000.png?width=1280",
      alt: "Brawl Stars Club League Strategy Guide 2026"
    },
    rewards: {
      url: "https://i.ytimg.com/vi/nDnnkvySuMg/maxresdefault.jpg",
      alt: "Brawl Stars club league rewards and tiers guide"
    },
    matchmaking: {
      url: "https://preview.redd.it/they-should-have-better-matchmaking-for-club-league-v0-hxnuz3od3zqb1.jpg?width=1080&crop=smart&auto=webp&s=13aa53e2f2950e49a693420fb88b09c78c204d85",
      alt: "Club league matchmaking and ticket system explained"
    },
    teamCoordination: {
      url: "https://mmonster.co/media/7a/56/8d/1719668102/brawl-stars-characters%20(1).webp",
      alt: "Club league team coordination strategies"
    },
  },

  // ============================================
  // MAP CONTROL GUIDE IMAGES
  // ============================================
  mapControlGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/lmVLVYGqQqE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNyXvYpo0kP390h_f2Of50IMkwLQ",
      alt: "Brawl Stars positioning and map control guide"
    },
    positioning: {
      url: "https://i.ytimg.com/vi/lmVLVYGqQqE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCNyXvYpo0kP390h_f2Of50IMkwLQ",
      alt: "Brawl Stars positioning and map control guide"
    },
    zoneControl: {
      url: "https://i.redd.it/bd49fflc83i81.jpg",
      alt: "Zone control strategies in Brawl Stars"
    },
    wallUsage: {
      url: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/12/Brawl-Stars-Brawl-Ball-Cropped.jpg?w=1600&h=900&fit=crop",
      alt: "Using walls and cover effectively in Brawl Stars"
    },
  },

  // ============================================
  // TIER LIST 2026 GUIDE IMAGES
  // ============================================
  tierListGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/_McRY1lbk6I/maxresdefault.jpg",
      alt: "Best Brawl Stars Brawlers Tier List 2026"
    },
    sTier: {
      url: "https://games.lol/wp-content/uploads/2022/05/Brawl-Stars-Tier-List-Best-to-Worst-1024x538.png",
      alt: "Brawl Stars S-Tier Best Brawlers 2026"
    },
    aTier: {
      url: "https://esportsinsider.com/wp-content/uploads/2025/05/A-Tier-Brawler.jpeg",
      alt: "Brawl Stars A-Tier Brawlers 2026"
    },
    bTier: {
      url: "https://esportsinsider.com/wp-content/uploads/2025/05/B-Tier-Spike.jpg",
      alt: "Brawl Stars B-Tier Brawlers 2026"
    },
    gemGrab: {
      url: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/12/BS-feature2.jpeg?w=1200&h=675&fit=crop",
      alt: "Best Brawlers for Gem Grab Mode"
    },
    brawlBall: {
      url: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2021/12/Brawl-Stars-Brawl-Ball-Cropped.jpg",
      alt: "Best Brawlers for Brawl Ball Mode"
    },
    showdown: {
      url: "https://i.redd.it/ykewquibwh941.png",
      alt: "Best Brawlers for Showdown Mode"
    },
  },

  // ============================================
  // GAME MODES GUIDE IMAGES
  // ============================================
  gameModesGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/guRK3JMBpBM/maxresdefault.jpg",
      alt: "Brawl Stars Best Brawlers for Every Game Mode 2026"
    },
    gemGrab: {
      url: "https://gamingonphone.com/wp-content/uploads/2020/05/gem.jpg",
      alt: "Best Brawlers for Gem Grab Mode"
    },
    brawlBall: {
      url: "https://preview.redd.it/i-do-not-understand-brawl-ball-how-do-you-actually-get-good-v0-5iwtn3i3yrge1.jpeg?auto=webp&s=c29378f5ccbe2586240464560760975915e1751b",
      alt: "Best Brawlers for Brawl Ball Mode"
    },
    showdown: {
      url: "https://i.ytimg.com/vi/guRK3JMBpBM/maxresdefault.jpg",
      alt: "Best Brawlers for Showdown Mode"
    },
    heist: {
      url: "https://i.ytimg.com/vi/lmVLVYGqQqE/hq720.jpg",
      alt: "Best Brawlers for Heist Mode"
    },
    bounty: {
      url: "https://i.redd.it/bd49fflc83i81.jpg",
      alt: "Best Brawlers for Bounty Mode"
    },
  },

  // ============================================
  // TROPHY PUSHING GUIDE IMAGES
  // ============================================
  trophyPushingGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/_McRY1lbk6I/maxresdefault.jpg",
      alt: "Brawl Stars Trophy Pushing Guide 2026"
    },
    trophyRoad: {
      url: "https://i.redd.it/hd6ojhmo6aob1.jpg",
      alt: "Brawl Stars Trophy Road Progression"
    },
    rankings: {
      url: "https://i.ytimg.com/vi/guRK3JMBpBM/maxresdefault.jpg",
      alt: "Brawl Stars Trophy Rankings and Leagues"
    },
  },

  // ============================================
  // POWER LEAGUE GUIDE IMAGES
  // ============================================
  powerLeagueGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/qe4nKmuQAC8/maxresdefault.jpg",
      alt: "Brawl Stars Power League Guide 2026 - How to Rank Up"
    },
    ranks: {
      url: "https://brawlhub.co/wp-content/uploads/2024/03/RanksRoadV3.png",
      alt: "Power League rank progression from Bronze to Masters"
    },
    drafting: {
      url: "https://cdn-0001.qstv.on.epicgames.com/YYlHBTrPRuAfTITEpX/image/landscape_comp.jpeg",
      alt: "Power League draft phase and brawler selection"
    },
    bans: {
      url: "https://i.ytimg.com/vi/PJNIcDI8wS4/maxresdefault.jpg",
      alt: "Power League ban strategies and meta picks"
    },
  },

  // ============================================
  // HYPERCHARGE GUIDE IMAGES
  // ============================================
  hyperchargeGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/PJNIcDI8wS4/maxresdefault.jpg",
      alt: "Brawl Stars Hypercharge Guide 2026 - Best Hypercharges Ranked"
    },
    hyperchargeList: {
      url: "https://s.yimg.com/ny/api/res/1.2/V9P7fIIPJ1Ezd9QakhuQig--/YXBwaWQ9aGlnaGxhbmRlcjt3PTI0MDA7aD0xMzQ2/https://media.zenfs.com/en/clutchpoints_articles_939/1d88bd1cad15b3542d8b0c29b3ef59de",
      alt: "All Hypercharges in Brawl Stars tier list"
    },
    charging: {
      url: "https://i.ytimg.com/vi/qe4nKmuQAC8/maxresdefault.jpg",
      alt: "How to charge Hypercharge meter in Brawl Stars"
    },
  },

  // ============================================
  // GEARS GUIDE IMAGES
  // ============================================
  gearsGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/_McRY1lbk6I/maxresdefault.jpg",
      alt: "Brawl Stars Gears Guide 2026 - Best Gears for Every Brawler"
    },
    gearsList: {
      url: "https://i.ytimg.com/vi/PJNIcDI8wS4/maxresdefault.jpg",
      alt: "All Gears in Brawl Stars explained"
    },
    gearTokens: {
      url: "https://i.ytimg.com/vi/qe4nKmuQAC8/maxresdefault.jpg",
      alt: "How to get Gear Tokens in Brawl Stars"
    },
  },

  // ============================================
  // BRAWL PASS GUIDE IMAGES
  // ============================================
  brawlPassGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/y20HW5DJqEo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCKXlqzRIh0LPpvE3eODwNrfcZ6lA",
      alt: "Brawl Pass Guide 2026 - Is It Worth Buying?"
    },
  },

  // ============================================
  // DUO SHOWDOWN COMPS GUIDE IMAGES
  // ============================================
  duoShowdownGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/CYXcgL-EFto/maxresdefault.jpg",
      alt: "Best Duo Showdown Compositions 2026"
    },
  },

  // ============================================
  // EVENTS & MODES GUIDE IMAGES
  // ============================================
  eventsModesGuide: {
    hero: {
      url: "https://www.exitlag.com/blog/wp-content/uploads/2025/03/all-about-brawl-stars-events-1.webp",
      alt: "Brawl Stars Events and Modes Guide 2026"
    },
  },
};

// ============================================
// GENERAL/REUSABLE IMAGES
// ============================================
export const GENERAL_IMAGES = {
  // Game Modes
  gameModes: {
    gemGrab: {
      url: "https://gamingonphone.com/wp-content/uploads/2020/05/gem.jpg",
      alt: "Gem Grab game mode in Brawl Stars"
    },
    brawlBall: {
      url: "https://preview.redd.it/i-do-not-understand-brawl-ball-how-do-you-actually-get-good-v0-5iwtn3i3yrge1.jpeg?auto=webp&s=c29378f5ccbe2586240464560760975915e1751b",
      alt: "Brawl Ball game mode in Brawl Stars"
    },
    showdown: {
      url: "https://i.ytimg.com/vi/guRK3JMBpBM/maxresdefault.jpg",
      alt: "Showdown battle royale mode in Brawl Stars"
    },
    heist: {
      url: "",
      alt: "Heist game mode in Brawl Stars"
    },
    bounty: {
      url: "",
      alt: "Bounty game mode in Brawl Stars"
    },
    hotZone: {
      url: "",
      alt: "Hot Zone game mode in Brawl Stars"
    },
    knockout: {
      url: "",
      alt: "Knockout game mode in Brawl Stars"
    },
    siege: {
      url: "",
      alt: "Siege game mode in Brawl Stars"
    },
  },

  // UI & Progression
  ui: {
    trophyRoad: {
      url: "https://i.redd.it/hd6ojhmo6aob1.jpg",
      alt: "Brawl Stars trophy road progression"
    },
    brawlPass: {
      url: "https://www.thexboxhub.com/wp-content/uploads/2025/12/image-3-640x288.png",
      alt: "Brawl Pass rewards in Brawl Stars"
    },
    clubs: {
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/brawl-stars/5/50/2019-01-28_14-08-05_000.png?width=1280",
      alt: "Club feature in Brawl Stars"
    },
    starPowers: {
      url: "https://skycoach.gg/storage/uploads/products/description/product_67d9c77fbc351.jpg",
      alt: "Star Powers and Gadgets in Brawl Stars"
    },
    controls: {
      url: "https://i.ytimg.com/vi/v9UYAHMxIsY/maxresdefault.jpg",
      alt: "Brawl Stars controls tutorial"
    },
    upgrades: {
      url: "https://preview.redd.it/literally-the-most-simple-fix-to-having-too-many-power-v0-jvyklso112wc1.jpeg?auto=webp&s=3c801b3a508bc0d0294e66852dff4e1d5f904099",
      alt: "Upgrading brawlers in Brawl Stars"
    },
  },

  // Ranked Mode
  ranked: {
    tiers: {
      url: "https://brawlhub.co/wp-content/uploads/2024/03/RanksRoadV3.png",
      alt: "Brawl Stars ranked tiers"
    },
    overview: {
      url: "https://brawlhub.co/wp-content/uploads/2024/03/HowRankedWorks-1024x461.jpg",
      alt: "Brawl Stars ranked mode overview"
    },
    mapRotation: {
      url: "https://prod.assets.earlygamecdn.com/images/BrawlStarsMapRotation.jpg?mtime=1740557027",
      alt: "Brawl Stars map rotation"
    },
  },

  // Misc
  misc: {
    mainMenu: {
      url: "https://i.redd.it/6ko96lfznaw41.jpg",
      alt: "Brawl Stars main menu"
    },
  },

  // Brawl Pass Guide
  brawlPassGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/y20HW5DJqEo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCKXlqzRIh0LPpvE3eODwNrfcZ6lA",
      alt: "Brawl Pass Guide 2026 - Is It Worth Buying?"
    },
  },

  // Duo Showdown Comps Guide
  duoShowdownGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/CYXcgL-EFto/maxresdefault.jpg",
      alt: "Best Duo Showdown Compositions 2026"
    },
  },

  // Events & Modes Guide
  eventsModesGuide: {
    hero: {
      url: "https://www.exitlag.com/blog/wp-content/uploads/2025/03/all-about-brawl-stars-events-1.webp",
      alt: "Brawl Stars Events and Modes Guide 2026"
    },
  },
};

// ============================================
// HELPER FUNCTIONS
// ============================================

// Get a specific guide's images
export function getGuideImages(guideName) {
  return GUIDE_IMAGES[guideName] || {};
}

// Get a specific image from any category
export function getImage(category, subCategory, key) {
  if (category === 'guide' && GUIDE_IMAGES[subCategory]) {
    return GUIDE_IMAGES[subCategory][key] || null;
  }
  if (category === 'general' && GENERAL_IMAGES[subCategory]) {
    return GENERAL_IMAGES[subCategory][key] || null;
  }
  if (category === 'brawler') {
    return BRAWLER_IMAGES[subCategory] || null;
  }
  return null;
}

// Check if an image exists
export function hasImage(guideName, imageKey) {
  return !!(GUIDE_IMAGES[guideName] && GUIDE_IMAGES[guideName][imageKey]?.url);
}

// Get all images for a guide as an array (useful for preloading)
export function getGuideImageArray(guideName) {
  const images = GUIDE_IMAGES[guideName];
  if (!images) return [];
  return Object.values(images).filter(img => img.url);
}

export default {
  BRAWLER_IMAGES,
  GUIDE_IMAGES,
  GENERAL_IMAGES,
  getBrawlerImage,
  getBrawlerFullImage,
  getGuideImages,
  getImage,
  hasImage,
  getGuideImageArray,
};
