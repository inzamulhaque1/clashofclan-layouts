export const SITE_NAME = "Game365Hub";
export const SITE_URL = "https://game365hub.com";
export const SITE_DESCRIPTION = "Your ultimate mobile gaming resource hub. Guides, strategies, tier lists for Clash of Clans, Brawl Stars, Clash Royale, Free Fire & more.";

export type GameId = "clash-of-clans" | "brawl-stars" | "clash-royale" | "free-fire" | "pubg";

export interface GameInfo {
  id: GameId;
  name: string;
  shortName: string;
  description: string;
  color: string;
  gradient: string;
  stats: string;
  active: boolean;
  comingSoon?: boolean;
}

export const GAMES: GameInfo[] = [
  {
    id: "clash-of-clans",
    name: "Clash of Clans",
    shortName: "CoC",
    description: "Base layouts, attack strategies & clan war tips",
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-600",
    stats: "18 Guides",
    active: true,
  },
  {
    id: "brawl-stars",
    name: "Brawl Stars",
    shortName: "BS",
    description: "Brawler tier lists, meta guides & game modes",
    color: "#FF6B35",
    gradient: "from-orange-500 to-rose-500",
    stats: "15 Guides",
    active: true,
  },
  {
    id: "clash-royale",
    name: "Clash Royale",
    shortName: "CR",
    description: "Best decks, card tier lists & arena strategies",
    color: "#2563EB",
    gradient: "from-blue-600 to-blue-800",
    stats: "7 Guides",
    active: true,
  },
  {
    id: "free-fire",
    name: "Free Fire",
    shortName: "FF",
    description: "Character combos, weapon guides & settings",
    color: "#EF4444",
    gradient: "from-red-500 to-red-700",
    stats: "6 Guides",
    active: true,
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    shortName: "PUBG",
    description: "Weapon stats, sensitivity settings & pro tips",
    color: "#F59E0B",
    gradient: "from-yellow-500 to-orange-500",
    stats: "Coming Soon",
    active: false,
    comingSoon: true,
  },
];

// Extended game details for game detail pages
export interface ContentSection {
  id: string; // matches hash in GAME_SUB_ROUTES (without #)
  title: string;
  description: string;
  items: { title: string; description: string; tag?: string }[];
}

export interface GameDetail {
  id: GameId;
  developer: string;
  genre: string;
  platforms: string;
  releaseYear: number;
  rating: string;
  downloads: string;
  overview: string[];
  features: { title: string; description: string }[];
  sections: ContentSection[];
}

export const GAME_DETAILS: Record<string, GameDetail> = {
  "clash-of-clans": {
    id: "clash-of-clans",
    developer: "Supercell",
    genre: "Strategy / Base Building",
    platforms: "Android, iOS",
    releaseYear: 2012,
    rating: "4.5/5",
    downloads: "500M+",
    overview: [
      "Clash of Clans is one of the most iconic mobile strategy games ever created. Build your village, train troops, and battle with millions of players worldwide. From strategic base layouts to devastating attack strategies, mastering CoC requires both skill and planning.",
      "With the introduction of Town Hall 16, Clan Capital, and regular balance updates, the game continues to evolve with fresh content and meta shifts. Whether you are a casual farmer or a competitive war player pushing for Legend League, there is always something new to master.",
      "Our guides cover everything from beginner base-building tips to advanced three-star attack strategies used by top-ranked players in Clan War Leagues and Legend League.",
    ],
    features: [
      { title: "Base Building", description: "Design and upgrade your village with strategic defenses, walls, and traps to protect your resources." },
      { title: "Clan Wars", description: "Team up with your clanmates in epic Clan Wars and Clan War Leagues for glory and rewards." },
      { title: "Attack Strategies", description: "Master powerful army compositions like LavaLoon, Hybrid, and Yeti Smash to three-star any base." },
      { title: "Clan Capital", description: "Collaborate with your clan to build and upgrade a shared Clan Capital for massive raid weekends." },
      { title: "Hero Equipment", description: "Customize your Heroes with powerful equipment that changes their abilities on the battlefield." },
      { title: "Legend League", description: "Compete against the best players in the world in the ultimate competitive league." },
    ],
    sections: [
      {
        id: "bases",
        title: "Base Layouts",
        description: "Strategic base designs for every Town Hall level — war bases, trophy bases, and farming layouts tested against meta attacks.",
        items: [
          { title: "TH16 War Base", description: "Anti-3-star war base with centered Town Hall and spread-out defenses to counter LavaLoon and Hybrid.", tag: "War" },
          { title: "TH16 Trophy Base", description: "Legend League pushing base with anti-root rider design and optimized trap placement.", tag: "Trophy" },
          { title: "TH15 CWL Base", description: "Compact CWL base designed to defend against Yeti Smash and Queen Charge attacks.", tag: "CWL" },
          { title: "TH15 Farming Base", description: "Resource protection layout with centralized storages and spread collectors.", tag: "Farming" },
          { title: "TH14 War Base", description: "Anti-Electro Dragon base with air-targeting defenses grouped and seeking mines.", tag: "War" },
          { title: "TH13 Push Base", description: "Balanced defense base for TH13 players pushing to Titan and Legend League.", tag: "Trophy" },
        ],
      },
      {
        id: "attacks",
        title: "Attack Strategies",
        description: "Master the most powerful army compositions in the current meta — step-by-step breakdowns with troop compositions and spell placement.",
        items: [
          { title: "LavaLoon (TH16)", description: "Deploy Lava Hounds to tank for Balloons while using Haste spells for fast destruction. Best against spread bases.", tag: "Air" },
          { title: "Hybrid (Hog/Miner)", description: "Queen Charge into Hog Rider + Miner hybrid. Devastating against compact bases with a kill squad entry.", tag: "Ground" },
          { title: "Yeti Smash", description: "Yeti-Bowler-Witch spam with Log Launcher siege. Overpowering ground push that crushes compartment bases.", tag: "Ground" },
          { title: "Root Rider", description: "The TH16 meta — Root Riders with Electro Titan and Overgrowth spell. Destroys walls and defenses in one push.", tag: "Meta" },
          { title: "Blizzard LaLo", description: "Super Wizard blimp into LaLo follow-up. Take out key defenses with the blimp, then clean with air.", tag: "Air" },
          { title: "Electro Dragon Spam", description: "Mass Electro Dragons with Rage and Freeze spells. Simple but effective against bases with clustered buildings.", tag: "Air" },
        ],
      },
      {
        id: "wars",
        title: "Clan Wars",
        description: "Strategies and tips for dominating Clan Wars, CWL, and Clan Capital raids. Coordination guides for your clan.",
        items: [
          { title: "CWL Strategy Guide", description: "How to plan your Clan War League lineup — which Town Halls to include, mirror vs. dip strategy, and bonus distribution.", tag: "CWL" },
          { title: "War Base Scouting", description: "How to analyze enemy war bases — identify weaknesses, trap locations, and choose the right attack strategy.", tag: "War" },
          { title: "Clan Capital Raids", description: "Optimal raid strategies for Clan Capital districts. Maximize destruction percentage and capital gold earned.", tag: "Capital" },
          { title: "War Lineup Tips", description: "How to set up your war map for success — base ordering, defensive CC troops, and trap placement.", tag: "War" },
        ],
      },
      {
        id: "tiers",
        title: "Tier Lists",
        description: "Rankings of troops, heroes, spells, and hero equipment based on the current meta. Updated after every balance change.",
        items: [
          { title: "Troop Tier List (TH16)", description: "S-tier: Root Rider, Electro Titan, Hog Rider. A-tier: Yeti, Bowler, Lava Hound. Full rankings inside.", tag: "Troops" },
          { title: "Hero Equipment Ranking", description: "Best hero equipment for each hero — Barbarian King, Archer Queen, Grand Warden, and Royal Champion.", tag: "Heroes" },
          { title: "Spell Tier List", description: "Which spells to prioritize upgrading and when to use each one. Overgrowth, Rage, Freeze ranked.", tag: "Spells" },
          { title: "Siege Machine Rankings", description: "Log Launcher vs Battle Blimp vs Stone Slammer — when to use each siege machine.", tag: "Siege" },
        ],
      },
    ],
  },
  "brawl-stars": {
    id: "brawl-stars",
    developer: "Supercell",
    genre: "Action / MOBA",
    platforms: "Android, iOS",
    releaseYear: 2018,
    rating: "4.3/5",
    downloads: "500M+",
    overview: [
      "Brawl Stars is a fast-paced 3v3 multiplayer and battle royale game from Supercell. With a roster of 80+ unique Brawlers, each with distinct abilities and playstyles, the game offers endless strategic depth across multiple game modes.",
      "The competitive scene is thriving with monthly balance changes, new Brawlers, and seasonal content. From Gem Grab and Brawl Ball to Showdown and Club League, every mode demands a different approach and team composition.",
      "Our guides help you master individual Brawlers, build optimal team comps, push trophies efficiently, and stay ahead of the ever-shifting meta.",
    ],
    features: [
      { title: "80+ Brawlers", description: "Unlock and master a massive roster of unique characters, each with special attacks and abilities." },
      { title: "Multiple Modes", description: "Play Gem Grab, Brawl Ball, Showdown, Heist, Bounty, and rotating special events." },
      { title: "Club League", description: "Join a club and compete in weekly Club League matches for rewards and glory." },
      { title: "Ranked Mode", description: "Test your skills in competitive ranked play with seasonal rewards and leaderboards." },
      { title: "Star Powers & Gadgets", description: "Customize your Brawlers with powerful Star Powers and tactical Gadgets." },
      { title: "Seasonal Content", description: "New Brawlers, skins, maps, and game modes added every season." },
    ],
    sections: [
      {
        id: "tiers",
        title: "Brawler Tier List",
        description: "Rankings of every Brawler based on the current meta. Updated after every balance change and new Brawler release.",
        items: [
          { title: "S-Tier Brawlers", description: "Cordelius, Melodie, and Kit dominate the meta with insane win rates across all modes.", tag: "Meta" },
          { title: "A-Tier Brawlers", description: "Surge, Piper, and Frank remain strong picks with high skill ceilings and versatile kits.", tag: "Strong" },
          { title: "Best for Gem Grab", description: "Poco, Gene, and Sandy excel as gem carriers and mid-lane controllers.", tag: "Gem Grab" },
          { title: "Best for Brawl Ball", description: "El Primo, Frank, and Bibi dominate close-range Brawl Ball matches.", tag: "Brawl Ball" },
          { title: "Best for Showdown", description: "Leon, Edgar, and Shelly thrive in solo Showdown with burst and survivability.", tag: "Showdown" },
          { title: "Worst Brawlers", description: "Jessie, Dynamike, and Tick struggle in the current meta — avoid in competitive play.", tag: "Weak" },
        ],
      },
      {
        id: "comps",
        title: "Best Team Comps",
        description: "Optimized 3v3 team compositions for every game mode. Synergy-focused picks to maximize your win rate.",
        items: [
          { title: "Gem Grab Meta Comp", description: "Sandy (mid) + Gene (aggro) + Poco (support). Control the map with Sandy's super and Gene pulls.", tag: "Gem Grab" },
          { title: "Brawl Ball Rush", description: "El Primo + Frank + Poco. Overwhelming frontline pressure with Poco healing both tanks.", tag: "Brawl Ball" },
          { title: "Heist Burst Comp", description: "Colt + Rico + 8-Bit. Maximum DPS output to melt safes in seconds.", tag: "Heist" },
          { title: "Bounty Sniper Comp", description: "Piper + Brock + Byron. Long-range control with Byron keeping your snipers alive.", tag: "Bounty" },
          { title: "Hot Zone Control", description: "Gale + Sandy + Poco. Zone control with knockback, sandstorm, and sustain.", tag: "Hot Zone" },
        ],
      },
      {
        id: "modes",
        title: "Game Mode Guides",
        description: "Detailed strategies for every game mode. Map control, positioning, and Brawler picks to dominate ranked play.",
        items: [
          { title: "Gem Grab Strategy", description: "Control the center, hold gems safe, and counter-push when you reach 10 gems. Avoid unnecessary aggression.", tag: "3v3" },
          { title: "Brawl Ball Tips", description: "Pass the ball to teammates, use supers to break walls, and score during respawn windows.", tag: "3v3" },
          { title: "Showdown Survival", description: "Land safe, collect power cubes, use bushes for ambushes, and avoid the center early.", tag: "Solo" },
          { title: "Heist Offense Guide", description: "Focus fire on the safe, use wall-breakers, and coordinate pushes with teammates.", tag: "3v3" },
          { title: "Club League Tips", description: "Use your best comps first, communicate bans, and prioritize Power League matches.", tag: "Club" },
        ],
      },
    ],
  },
  "clash-royale": {
    id: "clash-royale",
    developer: "Supercell",
    genre: "Strategy / Card Game",
    platforms: "Android, iOS",
    releaseYear: 2016,
    rating: "4.2/5",
    downloads: "500M+",
    overview: [
      "Clash Royale combines collectible card games, tower defense, and real-time PvP battles into one addictive package. Build your deck from 100+ cards, deploy troops, cast spells, and destroy your opponent's towers in fast-paced 3-minute matches.",
      "The game features a deep strategic layer with card levels, elixir management, and deck archetypes like cycle, beatdown, control, and siege. Regular balance changes keep the meta fresh and challenging.",
      "Our guides cover the best decks for every arena, card upgrade priorities, challenge strategies, and tips from top-ladder players.",
    ],
    features: [
      { title: "Real-Time PvP", description: "Battle players worldwide in intense 1v1 and 2v2 real-time matches." },
      { title: "100+ Cards", description: "Collect and upgrade troops, spells, and buildings to build your ultimate deck." },
      { title: "Clan Wars 2", description: "Compete with your clan in river races and boat battles for massive rewards." },
      { title: "Challenges", description: "Test your skills in Grand Challenges, Classic Challenges, and special events." },
      { title: "Path of Legends", description: "Climb the competitive ranked ladder to earn exclusive rewards." },
      { title: "Champions", description: "Deploy powerful Champion cards with unique cycling abilities." },
    ],
    sections: [
      {
        id: "decks",
        title: "Best Decks",
        description: "Top-performing decks for ladder, challenges, and clan wars. Tested at 7000+ trophies and Grand Challenge 12-wins.",
        items: [
          { title: "Log Bait 3.3", description: "Goblin Barrel + Princess + Goblin Gang. Bait out the Log and punish with Barrel. Classic cycle deck.", tag: "Cycle" },
          { title: "Golem Beatdown", description: "Golem + Night Witch + Lightning. Build massive pushes behind Golem and overwhelm with support troops.", tag: "Beatdown" },
          { title: "Hog 2.6 Cycle", description: "Hog Rider + Musketeer + Ice Golem + Cannon. Fast cycle to out-rotate your opponent's counters.", tag: "Cycle" },
          { title: "Lava Hound Balloon", description: "Lava Hound tanks for Balloon while Minions clean up. Devastating air push.", tag: "Air" },
          { title: "X-Bow Siege", description: "X-Bow + Tesla + Ice Wizard. Plant X-Bow at the bridge and defend it with buildings and spells.", tag: "Siege" },
          { title: "Royal Giant", description: "Royal Giant + Fisherman + Hunter. Outrange towers and use Fisherman to pull threats away.", tag: "Control" },
        ],
      },
      {
        id: "tiers",
        title: "Card Tier List",
        description: "Rankings of every card in the current meta. Which cards to upgrade first and which to avoid.",
        items: [
          { title: "S-Tier Cards", description: "The Log, Arrows, Goblin Barrel, and Hog Rider dominate the meta with high use and win rates.", tag: "Meta" },
          { title: "Best Champions", description: "Monk and Golden Knight lead the Champion tier. Monk's ability to reflect spells is game-changing.", tag: "Champions" },
          { title: "Best Spells", description: "Lightning, Fireball, and Arrows are the most versatile spells for ladder and challenges.", tag: "Spells" },
          { title: "Best Buildings", description: "Tesla, Cannon, and Goblin Hut provide the best defensive value per elixir.", tag: "Buildings" },
          { title: "Underrated Cards", description: "Dart Goblin, Royal Delivery, and Goblin Drill are sleeper picks with high skill ceilings.", tag: "Sleepers" },
        ],
      },
      {
        id: "strategies",
        title: "Strategies",
        description: "Advanced tips and strategies for climbing ladder, winning challenges, and mastering elixir management.",
        items: [
          { title: "Elixir Management", description: "Never leak elixir, count your opponent's cards, and punish overcommitments with opposite-lane pressure.", tag: "Basics" },
          { title: "Deck Archetypes Guide", description: "Understand Cycle, Beatdown, Control, Siege, and Bridge Spam — when to use each and how they counter each other.", tag: "Theory" },
          { title: "Double Elixir Tips", description: "Save your big push for double elixir time. Stack troops behind your King Tower for maximum pressure.", tag: "Advanced" },
          { title: "Challenge Strategy", description: "How to go 12-0 in Grand Challenges — deck selection, matchup knowledge, and tilt management.", tag: "Competitive" },
          { title: "Clan Wars 2 Guide", description: "Best decks for river race, how to coordinate boat attacks, and maximize clan points.", tag: "Clan" },
        ],
      },
    ],
  },
  "free-fire": {
    id: "free-fire",
    developer: "Garena",
    genre: "Battle Royale / Shooter",
    platforms: "Android, iOS",
    releaseYear: 2017,
    rating: "4.1/5",
    downloads: "1B+",
    overview: [
      "Free Fire is one of the world's most popular mobile battle royale games. Drop into a map with 49 other players, scavenge for weapons and gear, and fight to be the last one standing in fast-paced 10-minute matches.",
      "What sets Free Fire apart is its character system — each character has unique abilities that can be combined for powerful synergies. Combined with a wide arsenal of weapons and tactical items, the game offers deep strategic possibilities.",
      "Our guides cover the best character combinations, weapon tier lists, sensitivity settings, and landing strategies to help you claim more Booyahs.",
    ],
    features: [
      { title: "Character Abilities", description: "Choose from 40+ characters, each with unique active and passive abilities." },
      { title: "Fast Matches", description: "10-minute battle royale matches — perfect for quick gaming sessions on mobile." },
      { title: "Clash Squad", description: "Play 4v4 round-based combat for intense, tactical team fights." },
      { title: "Craftland", description: "Create and share custom maps with the in-game map editor." },
      { title: "Weapon Skins", description: "Upgrade weapons with skins that provide stat bonuses and visual upgrades." },
      { title: "Ranked Mode", description: "Climb from Bronze to Heroic in competitive ranked battle royale and Clash Squad." },
    ],
    sections: [
      {
        id: "characters",
        title: "Character Combos",
        description: "Best character ability combinations for battle royale and Clash Squad. Maximize synergies for every playstyle.",
        items: [
          { title: "Aggressive Rusher", description: "Alok (Drop the Beat) + Kelly (Dash) + Hayato (Bushido) + Moco (Hacker's Eye). Rush enemies with speed and healing.", tag: "Aggro" },
          { title: "Sniper Build", description: "Rafael (Dead Silent) + Laura (Sharp Shooter) + Moco (Hacker's Eye) + Shirou (Damage Delivered). Silent long-range kills.", tag: "Sniper" },
          { title: "Healer Support", description: "Alok (Drop the Beat) + K (Master of All) + Dimitri (Healing Heartbeat) + Kapella (Healing Song). Unkillable sustain combo.", tag: "Support" },
          { title: "Clash Squad Best", description: "Chrono (Time Turner) + Alok + D-Bee (Bullet Beats) + Jota (Sustained Raids). Perfect for round-based combat.", tag: "Clash Squad" },
          { title: "Stealth Flanker", description: "Wukong (Camouflage) + Rafael + Moco + Laura. Disappear, reposition, and eliminate unsuspecting enemies.", tag: "Stealth" },
        ],
      },
      {
        id: "weapons",
        title: "Weapon Guides",
        description: "Tier lists and detailed stats for every weapon. Best attachments, damage numbers, and recoil patterns.",
        items: [
          { title: "AR Tier List", description: "SCAR dominates mid-range. AK deals highest damage but has strong recoil. M4A1 is the most balanced.", tag: "AR" },
          { title: "SMG Rankings", description: "MP40 is king of close range. UMP offers great accuracy. Vector shreds at point-blank.", tag: "SMG" },
          { title: "Sniper Rankings", description: "AWM one-shots with headshots. Kar98k is the best bolt-action. M82B destroys vehicles and gloo walls.", tag: "Sniper" },
          { title: "Shotgun Guide", description: "M1887 is devastating up close. SPAS12 is consistent. MAG-7 has the fastest fire rate.", tag: "Shotgun" },
          { title: "Best Attachments", description: "Muzzle for range, Foregrip for recoil, Magazine for capacity. Optimal setups for every weapon class.", tag: "Gear" },
        ],
      },
      {
        id: "settings",
        title: "Settings & Sensitivity",
        description: "Optimal sensitivity settings, HUD layouts, and graphics configurations used by pro players.",
        items: [
          { title: "Pro Sensitivity Guide", description: "General: 80-100, Red Dot: 75-85, 2x: 65-75, 4x: 55-65, AWM: 40-50. Fine-tune for your device.", tag: "Sensitivity" },
          { title: "HUD Layout Guide", description: "Custom button placement for two-thumb and claw players. Fire button positions and sizes for fast reactions.", tag: "HUD" },
          { title: "Graphics Settings", description: "Best FPS settings for smooth gameplay. Ultra > High for competitive. How to reduce lag on low-end devices.", tag: "Performance" },
          { title: "Aim Assist Settings", description: "When to use aim assist and when to disable it. Pro vs casual settings explained.", tag: "Aiming" },
        ],
      },
    ],
  },
};

// Game-specific sub-navigation routes
export const GAME_SUB_ROUTES: Record<string, { label: string; hash: string }[]> = {
  "clash-of-clans": [
    { label: "Overview", hash: "" },
    { label: "Base Layouts", hash: "#bases" },
    { label: "Attack Strategies", hash: "#attacks" },
    { label: "Clan Wars", hash: "#wars" },
    { label: "Tier Lists", hash: "#tiers" },
    { label: "Guides", hash: "#guides" },
  ],
  "brawl-stars": [
    { label: "Overview", hash: "" },
    { label: "Brawler Tier List", hash: "#tiers" },
    { label: "Best Comps", hash: "#comps" },
    { label: "Game Modes", hash: "#modes" },
    { label: "Guides", hash: "#guides" },
  ],
  "clash-royale": [
    { label: "Overview", hash: "" },
    { label: "Best Decks", hash: "#decks" },
    { label: "Card Tier List", hash: "#tiers" },
    { label: "Strategies", hash: "#strategies" },
    { label: "Guides", hash: "#guides" },
  ],
  "free-fire": [
    { label: "Overview", hash: "" },
    { label: "Characters", hash: "#characters" },
    { label: "Weapons", hash: "#weapons" },
    { label: "Settings", hash: "#settings" },
    { label: "Guides", hash: "#guides" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/#games" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
