import type { GameId } from "./constants";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  game: GameId | "general";
  gameName: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "best-th16-attack-strategies-2026",
    title: "Best TH16 Attack Strategies 2026 - Complete Guide",
    description:
      "Master the top TH16 attack strategies for Clan Wars and Legend League in 2026. Covers Root Rider, Hydra, Yeti Smash and more.",
    game: "clash-of-clans",
    gameName: "Clash of Clans",
    date: "2026-03-08",
    readTime: "8 min read",
    image: "/images/games/clash-of-clans.jpg",
    content: `
## Best TH16 Attack Strategies in 2026

Town Hall 16 brought major changes to Clash of Clans, and knowing the right attack strategies is crucial for both Clan Wars and Legend League. In this guide, we break down the top attack strategies that are dominating the current meta.

### 1. Root Rider Smash

Root Rider remains one of the strongest troops at TH16. This strategy works well against most base designs.

**Army Composition:**
- 5 Root Riders
- 8 Witches
- 1 Log Launcher (Clan Castle)
- 4 Healers
- 3 Freeze Spells, 2 Rage Spells, 1 Poison Spell

**How to Execute:**
1. Start by deploying 2 Root Riders to create a funnel on one side
2. Deploy Witches behind the Root Riders to build up skeleton count
3. Use your main group of Root Riders through the center
4. Drop Healers on the Root Rider pack
5. Use Rage when your troops reach the core
6. Freeze Inferno Towers and Eagle Artillery

**Why It Works:** Root Riders target defenses and their high HP combined with Healer support makes them nearly unstoppable. The Witches provide a constant stream of distraction troops.

### 2. Hydra Attack (Dragon + Electro Dragon)

The Hydra strategy combines regular Dragons with Electro Dragons for devastating chain lightning damage.

**Army Composition:**
- 4 Electro Dragons
- 6 Dragons
- 5 Balloons
- 3 Rage Spells, 2 Freeze Spells, 1 Haste Spell

**How to Execute:**
1. Create a wide funnel using 2 Dragons on each side
2. Deploy Electro Dragons behind the funnel
3. Send Balloons to tank for air defenses
4. Rage your main push through the core
5. Freeze key defenses like Scattershots

**Why It Works:** The chain lightning from Electro Dragons clears packed buildings quickly, while regular Dragons clean up the remaining structures.

### 3. Yeti Smash

Yeti Smash is a reliable ground strategy that works against almost any base layout.

**Army Composition:**
- 10 Yetis
- 6 Witches
- 2 Golems
- 1 Wall Wrecker (Clan Castle)
- 3 Rage Spells, 1 Heal Spell, 2 Freeze Spells

**How to Execute:**
1. Deploy Golems at two points to create a wide funnel
2. Send Witches behind each Golem
3. Once the funnel is set, deploy all Yetis with the Wall Wrecker
4. Rage the Yeti pack as they enter the base
5. Use Heal Spell on Yetis when they take splash damage
6. Freeze Infernos and Town Hall

**Why It Works:** Yetis deal massive damage and their Yetimites spawn when destroyed, continuing the assault even after the main troop falls.

### Tips for All TH16 Attacks

- **Scout first:** Always check the base for trap locations and CC troops
- **Hero Equipment matters:** Choose the right equipment based on your strategy
- **Timing is key:** Do not rush your spells — wait for the right moment
- **Practice in Friendly Challenges:** Test your army before using it in war

### Which Strategy Should You Use?

| Strategy | Best For | Difficulty |
|----------|----------|------------|
| Root Rider Smash | Anti-ring bases | Medium |
| Hydra Attack | Spread-out bases | Easy |
| Yeti Smash | Compact bases | Medium |

Choose based on the base layout you are attacking. Root Rider Smash is the most versatile and works in most situations.

### Final Thoughts

TH16 attacks require good planning and execution. Practice these strategies in friendly challenges before using them in Clan Wars or Legend League. The meta may shift with future updates, so stay tuned for updated guides.
    `.trim(),
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByGame(game: string): BlogPost[] {
  return blogPosts.filter((post) => post.game === game);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
