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

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Games", href: "/#games" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
