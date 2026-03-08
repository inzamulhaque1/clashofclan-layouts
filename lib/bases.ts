import { images } from "./images";

export type BaseType = "war" | "farming" | "trophy" | "cwl" | "hybrid" | "anti-3-star" | "anti-2-star";
export type THLevel = 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

export interface BaseLayout {
  id: string;
  slug: string;
  title: string;
  thLevel: THLevel;
  type: BaseType;
  description: string;
  image: string;
  copyLink: string;
  views: number;
  rating: number;
  ratingCount: number;
  author: string;
  date: string;
  tags: string[];
  featured: boolean;
  strengths: string[];
  weaknesses: string[];
}

export const TH_LEVELS: { level: THLevel; label: string; color: string; bases?: number }[] = [
  { level: 17, label: "TH17", color: "#7C3AED" },
  { level: 16, label: "TH16", color: "#DC2626" },
  { level: 15, label: "TH15", color: "#059669" },
  { level: 14, label: "TH14", color: "#2563EB" },
  { level: 13, label: "TH13", color: "#D97706" },
  { level: 12, label: "TH12", color: "#0891B2" },
  { level: 11, label: "TH11", color: "#4F46E5" },
  { level: 10, label: "TH10", color: "#E11D48" },
  { level: 9, label: "TH9", color: "#CA8A04" },
  { level: 8, label: "TH8", color: "#16A34A" },
  { level: 7, label: "TH7", color: "#9333EA" },
];

export const BASE_TYPES: { type: BaseType; label: string; description: string }[] = [
  { type: "war", label: "War", description: "Optimized for Clan Wars — designed to prevent 3-stars from common attack strategies." },
  { type: "farming", label: "Farming", description: "Protect your resources with centralized storages and spread-out collectors." },
  { type: "trophy", label: "Trophy", description: "Push trophies to Legend League with balanced defense layouts." },
  { type: "cwl", label: "CWL", description: "Clan War League bases designed for competitive 15v15 and 30v30 wars." },
  { type: "hybrid", label: "Hybrid", description: "Balanced base that protects both trophies and resources effectively." },
  { type: "anti-3-star", label: "Anti 3 Star", description: "Force opponents into 2-star attacks with spread defenses and tricky trap placements." },
  { type: "anti-2-star", label: "Anti 2 Star", description: "Protect your Town Hall at all costs — centered TH with maximum defense coverage." },
];

export const baseLayouts: BaseLayout[] = [
  // ===== TH17 =====
  {
    id: "th17-001",
    slug: "th17-anti-root-rider-war-base-2026",
    title: "TH17 Anti Root Rider War Base",
    thLevel: 17,
    type: "war",
    description: "The ultimate TH17 war base designed to counter Root Rider attacks. Features spread-out defenses, anti-funnel wall segments, and strategically placed traps to break ground pushes. Tested against top Legend League players with a 78% defense rate.",
    image: images.bases?.["th17-war-1"] || "/images/bases/th17-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH17-war-001",
    views: 45200,
    rating: 4.8,
    ratingCount: 342,
    author: "Game365Hub",
    date: "2026-03-05",
    tags: ["anti-root-rider", "anti-3-star", "legend-league", "new"],
    featured: true,
    strengths: ["Anti Root Rider", "Anti LavaLoon", "Spread defenses prevent value spells"],
    weaknesses: ["Can be vulnerable to Yeti Smash from south side"],
  },
  {
    id: "th17-002",
    slug: "th17-legend-league-trophy-base",
    title: "TH17 Legend League Trophy Base",
    thLevel: 17,
    type: "trophy",
    description: "A proven TH17 trophy pushing base for Legend League. Centered Town Hall with overlapping defenses and anti-Queen Charge design. Consistently holds above 6000 trophies in Legend League.",
    image: images.bases?.["th17-trophy-1"] || "/images/bases/th17-trophy-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH17-trophy-001",
    views: 38700,
    rating: 4.7,
    ratingCount: 289,
    author: "Game365Hub",
    date: "2026-03-03",
    tags: ["legend-league", "trophy-push", "anti-queen-charge"],
    featured: true,
    strengths: ["Centered TH", "Anti Queen Charge", "Overlapping splash damage"],
    weaknesses: ["Resources are exposed on the edges"],
  },
  {
    id: "th17-003",
    slug: "th17-cwl-anti-3-star-base",
    title: "TH17 CWL Anti 3 Star Base",
    thLevel: 17,
    type: "cwl",
    description: "Competitive CWL base for TH17 designed to force 2-star attacks. Asymmetric layout confuses attack planning with multiple possible entry points that all lead to traps.",
    image: images.bases?.["th17-cwl-1"] || "/images/bases/th17-cwl-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH17-cwl-001",
    views: 29400,
    rating: 4.6,
    ratingCount: 198,
    author: "Game365Hub",
    date: "2026-03-01",
    tags: ["cwl", "anti-3-star", "competitive"],
    featured: false,
    strengths: ["Asymmetric layout", "Multi-compartment", "Strong against ground attacks"],
    weaknesses: ["Air attacks can bypass compartments"],
  },

  // ===== TH16 =====
  {
    id: "th16-001",
    slug: "th16-best-war-base-anti-root-rider",
    title: "TH16 Best War Base (Anti Root Rider)",
    thLevel: 16,
    type: "war",
    description: "Top-rated TH16 war base with proven defense against Root Rider and Electro Titan compositions. Features ring-style layout with well-placed Spring Traps and Seeking Air Mines.",
    image: images.bases?.["th16-war-1"] || "/images/bases/th16-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16-war-001",
    views: 67800,
    rating: 4.9,
    ratingCount: 512,
    author: "Game365Hub",
    date: "2026-02-28",
    tags: ["war", "anti-root-rider", "anti-electro-titan", "top-rated"],
    featured: true,
    strengths: ["Ring base layout", "Anti Root Rider", "Anti Electro Titan", "Well-placed Spring Traps"],
    weaknesses: ["Queen Charge from 9 o'clock can access core"],
  },
  {
    id: "th16-002",
    slug: "th16-farming-base-resource-protection",
    title: "TH16 Farming Base - Max Resource Protection",
    thLevel: 16,
    type: "farming",
    description: "Protect your Dark Elixir and resources while farming. Centralized storages with spread-out defenses to discourage attackers. TH is placed outside for easy shield farming.",
    image: images.bases?.["th16-farming-1"] || "/images/bases/th16-farming-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16-farm-001",
    views: 42300,
    rating: 4.5,
    ratingCount: 367,
    author: "Game365Hub",
    date: "2026-02-25",
    tags: ["farming", "resource-protection", "dark-elixir"],
    featured: false,
    strengths: ["Centralized DE storage", "Outside TH for shields", "Hard to reach inner storages"],
    weaknesses: ["TH is easy to snipe for trophies"],
  },
  {
    id: "th16-003",
    slug: "th16-hybrid-base-trophy-farming",
    title: "TH16 Hybrid Base - Trophy & Farming",
    thLevel: 16,
    type: "hybrid",
    description: "The best of both worlds — protect your trophies and resources simultaneously. Balanced layout with centralized TH and distributed storages behind strong defense layers.",
    image: images.bases?.["th16-hybrid-1"] || "/images/bases/th16-hybrid-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16-hybrid-001",
    views: 35600,
    rating: 4.6,
    ratingCount: 278,
    author: "Game365Hub",
    date: "2026-02-22",
    tags: ["hybrid", "balanced", "trophy-farming"],
    featured: false,
    strengths: ["Balanced resource and trophy protection", "Centered TH", "Good trap placement"],
    weaknesses: ["Not specialized — dedicated war bases defend better"],
  },
  {
    id: "th16-004",
    slug: "th16-anti-3-star-war-base-2026",
    title: "TH16 Anti 3 Star War Base (March 2026)",
    thLevel: 16,
    type: "anti-3-star",
    description: "Updated for March 2026 meta. This anti 3-star base uses Tesla farm and Giant Bomb placements to devastate Hog Riders and Miners. Tornado Trap pulls Root Riders away from core.",
    image: images.bases?.["th16-anti3-1"] || "/images/bases/th16-anti3-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH16-anti3-001",
    views: 51200,
    rating: 4.7,
    ratingCount: 423,
    author: "Game365Hub",
    date: "2026-03-07",
    tags: ["anti-3-star", "war", "march-2026", "new"],
    featured: true,
    strengths: ["Tesla farm core", "Giant Bomb vs Hog/Miners", "Tornado vs Root Rider"],
    weaknesses: ["Electro Dragon spam can chain through east side"],
  },

  // ===== TH15 =====
  {
    id: "th15-001",
    slug: "th15-best-war-base-anti-yeti-smash",
    title: "TH15 Best War Base (Anti Yeti Smash)",
    thLevel: 15,
    type: "war",
    description: "Top TH15 war base specifically designed to counter Yeti Smash and Bowler-Witch attacks. Multi-compartment layout breaks up ground pushes and forces spell waste.",
    image: images.bases?.["th15-war-1"] || "/images/bases/th15-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15-war-001",
    views: 58900,
    rating: 4.7,
    ratingCount: 445,
    author: "Game365Hub",
    date: "2026-02-20",
    tags: ["war", "anti-yeti-smash", "anti-bowitch", "multi-compartment"],
    featured: false,
    strengths: ["Anti Yeti Smash", "Anti Bowler-Witch", "Forces spell waste"],
    weaknesses: ["LavaLoon from south can be effective"],
  },
  {
    id: "th15-002",
    slug: "th15-cwl-base-anti-electro-dragon",
    title: "TH15 CWL Base (Anti Electro Dragon)",
    thLevel: 15,
    type: "cwl",
    description: "Spread-out CWL base that prevents Electro Dragon chain attacks. Buildings are spaced to minimize chain lightning value while maintaining strong air defense coverage.",
    image: images.bases?.["th15-cwl-1"] || "/images/bases/th15-cwl-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15-cwl-001",
    views: 33200,
    rating: 4.5,
    ratingCount: 256,
    author: "Game365Hub",
    date: "2026-02-18",
    tags: ["cwl", "anti-edrag", "spread-base"],
    featured: false,
    strengths: ["Anti Electro Dragon chains", "Spread air defenses", "Good SAM coverage"],
    weaknesses: ["Ground attacks can path through gaps"],
  },
  {
    id: "th15-003",
    slug: "th15-trophy-push-base-titan-league",
    title: "TH15 Trophy Push Base - Titan League",
    thLevel: 15,
    type: "trophy",
    description: "Push to Titan League with this TH15 trophy base. Centered TH with Monolith protection and overlapping Inferno Tower coverage. Proven to hold above 5500 trophies.",
    image: images.bases?.["th15-trophy-1"] || "/images/bases/th15-trophy-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH15-trophy-001",
    views: 27800,
    rating: 4.4,
    ratingCount: 189,
    author: "Game365Hub",
    date: "2026-02-15",
    tags: ["trophy", "titan-league", "centered-th"],
    featured: false,
    strengths: ["Centered TH with Monolith", "Overlapping Inferno coverage", "Anti Queen Walk"],
    weaknesses: ["Blizzard Lalo can take TH with blimp"],
  },

  // ===== TH14 =====
  {
    id: "th14-001",
    slug: "th14-war-base-anti-electro-dragon-2026",
    title: "TH14 War Base (Anti Electro Dragon)",
    thLevel: 14,
    type: "war",
    description: "The best TH14 war base for defending against mass Electro Dragon attacks. Spread layout prevents chain damage while Seeking Air Mines are positioned to take out key dragons.",
    image: images.bases?.["th14-war-1"] || "/images/bases/th14-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14-war-001",
    views: 44100,
    rating: 4.6,
    ratingCount: 334,
    author: "Game365Hub",
    date: "2026-02-12",
    tags: ["war", "anti-edrag", "th14"],
    featured: false,
    strengths: ["Anti Electro Dragon", "Spread defenses", "Well-placed SAMs"],
    weaknesses: ["Hybrid attacks from north can path well"],
  },
  {
    id: "th14-002",
    slug: "th14-farming-base-dark-elixir-protection",
    title: "TH14 Farming Base - DE Protection",
    thLevel: 14,
    type: "farming",
    description: "Maximize your Dark Elixir protection with this TH14 farming layout. Triple-layer defense around the DE storage with Town Hall placed outside for easy shield farming.",
    image: images.bases?.["th14-farming-1"] || "/images/bases/th14-farming-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH14-farm-001",
    views: 31500,
    rating: 4.4,
    ratingCount: 212,
    author: "Game365Hub",
    date: "2026-02-10",
    tags: ["farming", "dark-elixir", "shield-farming"],
    featured: false,
    strengths: ["Triple-layer DE protection", "Easy shield from TH snipe", "Spread collectors"],
    weaknesses: ["TH gives easy trophies to attackers"],
  },

  // ===== TH13 =====
  {
    id: "th13-001",
    slug: "th13-war-base-anti-yeti-witch",
    title: "TH13 War Base (Anti Yeti Witch)",
    thLevel: 13,
    type: "war",
    description: "Solid TH13 war base designed to counter the dominant Yeti-Witch strategy. Island-style inferno placement with bomb tower coverage in key pathing areas.",
    image: images.bases?.["th13-war-1"] || "/images/bases/th13-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13-war-001",
    views: 39200,
    rating: 4.5,
    ratingCount: 298,
    author: "Game365Hub",
    date: "2026-02-05",
    tags: ["war", "anti-yeti-witch", "island-inferno"],
    featured: false,
    strengths: ["Anti Yeti-Witch", "Island Infernos", "Bomb Tower pathing"],
    weaknesses: ["Queen Charge can take both Infernos from east"],
  },
  {
    id: "th13-002",
    slug: "th13-hybrid-base-balanced-defense",
    title: "TH13 Hybrid Base - Balanced Defense",
    thLevel: 13,
    type: "hybrid",
    description: "A versatile TH13 hybrid base that works for both regular multiplayer and war. Balanced defense coverage with centralized Eagle Artillery and distributed storages.",
    image: images.bases?.["th13-hybrid-1"] || "/images/bases/th13-hybrid-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH13-hybrid-001",
    views: 25600,
    rating: 4.3,
    ratingCount: 176,
    author: "Game365Hub",
    date: "2026-02-01",
    tags: ["hybrid", "balanced", "eagle-centered"],
    featured: false,
    strengths: ["Centered Eagle Artillery", "Balanced trophy/resource defense", "Works for war too"],
    weaknesses: ["Predictable Eagle placement"],
  },

  // ===== TH12 =====
  {
    id: "th12-001",
    slug: "th12-war-base-anti-electro-dragon-spam",
    title: "TH12 War Base (Anti E-Drag Spam)",
    thLevel: 12,
    type: "war",
    description: "Stop E-Drag spam in its tracks with this TH12 war base. Maximum spacing between buildings to prevent chain lightning while maintaining defensive coverage.",
    image: images.bases?.["th12-war-1"] || "/images/bases/th12-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH12-war-001",
    views: 28900,
    rating: 4.4,
    ratingCount: 221,
    author: "Game365Hub",
    date: "2026-01-28",
    tags: ["war", "anti-edrag", "spread-buildings"],
    featured: false,
    strengths: ["Anti E-Drag chain", "Spread buildings", "Strong air defense"],
    weaknesses: ["Ground attacks like Bowler-Witch can exploit gaps"],
  },

  // ===== TH11 =====
  {
    id: "th11-001",
    slug: "th11-war-base-anti-witch-slap",
    title: "TH11 War Base (Anti Witch Slap)",
    thLevel: 11,
    type: "war",
    description: "Counter the popular Witch Slap strategy at TH11 with this anti-ground war base. Multi-target Infernos and well-placed Bomb Towers shut down skeleton hordes.",
    image: images.bases?.["th11-war-1"] || "/images/bases/th11-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH11-war-001",
    views: 22400,
    rating: 4.3,
    ratingCount: 167,
    author: "Game365Hub",
    date: "2026-01-25",
    tags: ["war", "anti-witch-slap", "multi-inferno"],
    featured: false,
    strengths: ["Anti Witch Slap", "Multi-target Infernos", "Bomb Tower placement"],
    weaknesses: ["LavaLoon can be effective if air defenses are taken out"],
  },

  // ===== TH10 =====
  {
    id: "th10-001",
    slug: "th10-war-base-anti-hog-miner",
    title: "TH10 War Base (Anti Hog & Miner)",
    thLevel: 10,
    type: "war",
    description: "Strong TH10 war base with giant bomb placements targeting Hog Rider and Miner paths. Asymmetric layout makes attack planning difficult.",
    image: images.bases?.["th10-war-1"] || "/images/bases/th10-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH10-war-001",
    views: 19800,
    rating: 4.2,
    ratingCount: 143,
    author: "Game365Hub",
    date: "2026-01-20",
    tags: ["war", "anti-hog", "anti-miner"],
    featured: false,
    strengths: ["Anti Hog Rider paths", "Giant Bomb placements", "Asymmetric design"],
    weaknesses: ["Electro Dragon attacks can overwhelm air defenses"],
  },

  // ===== TH9 =====
  {
    id: "th9-001",
    slug: "th9-war-base-anti-lavaloon-2026",
    title: "TH9 War Base (Anti LavaLoon)",
    thLevel: 9,
    type: "war",
    description: "Classic TH9 war base designed to counter LavaLoon — the most common TH9 attack strategy. Air defenses are centralized with Seeking Air Mines covering all angles.",
    image: images.bases?.["th9-war-1"] || "/images/bases/th9-war-1.jpg",
    copyLink: "https://link.clashofclans.com/en?action=OpenLayout&id=TH9-war-001",
    views: 16500,
    rating: 4.3,
    ratingCount: 124,
    author: "Game365Hub",
    date: "2026-01-15",
    tags: ["war", "anti-lavaloon", "centralized-ad"],
    featured: false,
    strengths: ["Anti LavaLoon", "Centralized Air Defenses", "Good SAM coverage"],
    weaknesses: ["GoWiPe can brute-force through compartments"],
  },
];

// ===== Helper Functions =====

export function getBaseBySlug(slug: string): BaseLayout | undefined {
  return baseLayouts.find((b) => b.slug === slug);
}

export function getBasesByTH(thLevel: THLevel): BaseLayout[] {
  return baseLayouts.filter((b) => b.thLevel === thLevel);
}

export function getBasesByType(type: BaseType): BaseLayout[] {
  return baseLayouts.filter((b) => b.type === type);
}

export function getBasesByTHAndType(thLevel: THLevel, type: BaseType): BaseLayout[] {
  return baseLayouts.filter((b) => b.thLevel === thLevel && b.type === type);
}

export function getFeaturedBases(): BaseLayout[] {
  return baseLayouts.filter((b) => b.featured);
}

export function getLatestBases(count: number = 6): BaseLayout[] {
  return [...baseLayouts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAllBaseSlugs(): string[] {
  return baseLayouts.map((b) => b.slug);
}

export function getRelatedBases(slug: string, count: number = 4): BaseLayout[] {
  const base = getBaseBySlug(slug);
  if (!base) return [];
  return baseLayouts
    .filter((b) => b.slug !== slug && (b.thLevel === base.thLevel || b.type === base.type))
    .sort((a, b) => {
      // Prioritize same TH level
      const aScore = (a.thLevel === base.thLevel ? 2 : 0) + (a.type === base.type ? 1 : 0);
      const bScore = (b.thLevel === base.thLevel ? 2 : 0) + (b.type === base.type ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, count);
}

export function getBaseCountByTH(thLevel: THLevel): number {
  return baseLayouts.filter((b) => b.thLevel === thLevel).length;
}

export function formatViews(views: number): string {
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return String(views);
}
