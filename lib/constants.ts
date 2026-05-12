export const SITE_NAME = "Game365Hub";
export const SITE_URL = "https://game365hub.com";
export const SITE_DESCRIPTION =
  "Daily redeem codes, tier lists, and guides for Genshin Impact, Honkai Star Rail, Free Fire, Mobile Legends, Roblox & more. Updated every day.";

export type GameId =
  | "genshin-impact"
  | "honkai-star-rail"
  | "wuthering-waves"
  | "zenless-zone-zero"
  | "free-fire"
  | "mobile-legends"
  | "pubg-mobile"
  | "roblox-blox-fruits"
  | "afk-journey";

export interface GameInfo {
  id: GameId;
  name: string;
  shortName: string;
  description: string;
  color: string;
  developer: string;
  category: "Gacha" | "Battle Royale" | "MOBA" | "Roblox";
}

export const GAMES: GameInfo[] = [
  {
    id: "genshin-impact",
    name: "Genshin Impact",
    shortName: "Genshin",
    description: "Daily codes, character tier list & build guides",
    color: "#4A90E2",
    developer: "HoYoverse",
    category: "Gacha",
  },
  {
    id: "honkai-star-rail",
    name: "Honkai: Star Rail",
    shortName: "HSR",
    description: "Redeem codes, light cones & character builds",
    color: "#8B5CF6",
    developer: "HoYoverse",
    category: "Gacha",
  },
  {
    id: "wuthering-waves",
    name: "Wuthering Waves",
    shortName: "WuWa",
    description: "Active codes, resonator tier list & echo guides",
    color: "#06B6D4",
    developer: "Kuro Games",
    category: "Gacha",
  },
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    shortName: "ZZZ",
    description: "Polychrome codes, agent tier list & team comps",
    color: "#F59E0B",
    developer: "HoYoverse",
    category: "Gacha",
  },
  {
    id: "free-fire",
    name: "Garena Free Fire",
    shortName: "Free Fire",
    description: "Daily redeem codes, weapon guides & loadouts",
    color: "#EF4444",
    developer: "Garena",
    category: "Battle Royale",
  },
  {
    id: "mobile-legends",
    name: "Mobile Legends: Bang Bang",
    shortName: "MLBB",
    description: "Redemption codes, hero tier list & meta builds",
    color: "#3B82F6",
    developer: "Moonton",
    category: "MOBA",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    shortName: "PUBG",
    description: "Redeem codes, sensitivity settings & weapon stats",
    color: "#FBBF24",
    developer: "Tencent",
    category: "Battle Royale",
  },
  {
    id: "roblox-blox-fruits",
    name: "Blox Fruits (Roblox)",
    shortName: "Blox Fruits",
    description: "Active codes, fruit tier list & update guides",
    color: "#10B981",
    developer: "Gamer Robot",
    category: "Roblox",
  },
  {
    id: "afk-journey",
    name: "AFK Journey",
    shortName: "AFK",
    description: "Redeem codes, hero tier list & team formations",
    color: "#A855F7",
    developer: "Lilith Games",
    category: "Gacha",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Codes", href: "/codes" },
  { label: "Guides", href: "/guides" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
