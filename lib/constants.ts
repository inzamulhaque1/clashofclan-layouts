export const SITE_NAME = "Game365Hub";
export const SITE_URL = "https://game365hub.com";
export const SITE_DESCRIPTION =
  "Daily redemption codes for Genshin Impact, Honkai: Star Rail, Wuthering Waves, ZZZ, Free Fire, Mobile Legends, PUBG Mobile, Blox Fruits, and AFK Journey. Verified and refreshed every 2 hours.";

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
    description: "Active redemption codes for free primogems and rewards",
    color: "#4A90E2",
    developer: "HoYoverse",
    category: "Gacha",
  },
  {
    id: "honkai-star-rail",
    name: "Honkai: Star Rail",
    shortName: "HSR",
    description: "Active redemption codes for free stellar jade and credits",
    color: "#8B5CF6",
    developer: "HoYoverse",
    category: "Gacha",
  },
  {
    id: "wuthering-waves",
    name: "Wuthering Waves",
    shortName: "WuWa",
    description: "Active redemption codes for free astrites and shell credits",
    color: "#06B6D4",
    developer: "Kuro Games",
    category: "Gacha",
  },
  {
    id: "zenless-zone-zero",
    name: "Zenless Zone Zero",
    shortName: "ZZZ",
    description: "Active redemption codes for free polychrome and dennies",
    color: "#F59E0B",
    developer: "HoYoverse",
    category: "Gacha",
  },
  {
    id: "free-fire",
    name: "Garena Free Fire",
    shortName: "Free Fire",
    description: "Daily redeem codes for diamonds, skins, and weapon crates",
    color: "#EF4444",
    developer: "Garena",
    category: "Battle Royale",
  },
  {
    id: "mobile-legends",
    name: "Mobile Legends: Bang Bang",
    shortName: "MLBB",
    description: "Redemption codes for diamonds, skins, and in-game items",
    color: "#3B82F6",
    developer: "Moonton",
    category: "MOBA",
  },
  {
    id: "pubg-mobile",
    name: "PUBG Mobile",
    shortName: "PUBG",
    description: "Redeem codes for UC, outfits, and weapon skins",
    color: "#FBBF24",
    developer: "Tencent / Krafton",
    category: "Battle Royale",
  },
  {
    id: "roblox-blox-fruits",
    name: "Blox Fruits (Roblox)",
    shortName: "Blox Fruits",
    description: "Active codes for EXP boosts, stat refunds, and Beli",
    color: "#10B981",
    developer: "Gamer Robot",
    category: "Roblox",
  },
  {
    id: "afk-journey",
    name: "AFK Journey",
    shortName: "AFK",
    description: "Active codes for diamonds, summon letters, and gold",
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
