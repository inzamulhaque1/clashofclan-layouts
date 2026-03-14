import { images } from "./images";

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const cocGuides: Guide[] = [
  {
    slug: "clash-of-clans-beginners-guide-2026",
    title: "Clash of Clans Beginners Guide 2026 — Everything You Need to Know",
    description:
      "The complete Clash of Clans beginners guide for 2026. Learn base building, troop training, resource management, clan wars, heroes, and how to progress fast from TH1 to TH18.",
    category: "Beginner",
    date: "2026-03-13",
    readTime: "30 min read",
    image: images.blog["coc-beginners-featured"],
    content: `
Clash of Clans has been one of the most popular mobile strategy games since its release in 2012, and in 2026 it is bigger than ever. With Town Hall 18, new hero equipment, Clan Capital, and constant balance updates, the game has evolved far beyond what early players remember. But for new players, all of this content can feel overwhelming. Where do you start? What should you upgrade first? How do you avoid common mistakes that waste days or even weeks of progress?

This guide covers **everything a new Clash of Clans player needs to know** in 2026 — from your very first login to joining your first Clan War. Whether you have never played a strategy game before or you are returning after years away, this guide will help you build a strong foundation and progress efficiently.

---

## Understanding the Basics

Clash of Clans is a **base-building strategy game** where you build and defend your village while training troops to attack other players. The core gameplay loop is simple: collect resources, upgrade buildings, train armies, and attack. But the depth comes from how you do each of these things.

![Clash of Clans village overview](${images.blog["coc-base-layout"]})

### Your Village

Your village is your home base. It contains all your buildings, defenses, resource collectors, and storage facilities. Every building serves a purpose, and how you arrange them matters — this is called your **base layout**. A good base layout protects your resources and makes it harder for attackers to destroy your base.

The most important building in your village is the **Town Hall**. Your Town Hall level determines what buildings, troops, and upgrades are available to you. Upgrading your Town Hall unlocks new content but also makes you a target for stronger attackers, so it is important to max out your buildings before moving to the next level.

### Resources

There are four main resources in Clash of Clans:

- **Gold** — Used to build and upgrade defenses, walls, and certain buildings. Collected from Gold Mines and Gold Storage.
- **Elixir** — Used to train troops, upgrade army buildings, and research upgrades. Collected from Elixir Collectors and Elixir Storage.
- **Dark Elixir** — A rare resource unlocked at TH7. Used to train dark troops, upgrade heroes, and research dark troop upgrades. Collected from Dark Elixir Drills.
- **Gems** — The premium currency. Can be earned for free by completing achievements, clearing obstacles, and from the Gem Mine in Builder Base. Use gems wisely — the best use is buying Builders.

![Clash of Clans resources and collectors](${images.blog["coc-resources"]})

### Builders

Builders are the workers who construct and upgrade your buildings. You start with two Builders, and you can unlock up to five by spending Gems. Later, at TH14, you can unlock the **6th Builder** through Builder Base progression.

**Getting your third, fourth, and fifth Builder should be your top gem priority.** Every extra Builder means faster progress. Do not waste Gems on speeding up upgrades or buying resources — save them for Builders.

Here is the Gem cost for each Builder:

| Builder | Gem Cost | Priority |
|---------|----------|----------|
| 1st & 2nd | Free | Start with these |
| 3rd Builder | 500 Gems | Buy ASAP |
| 4th Builder | 1,000 Gems | High priority |
| 5th Builder | 2,000 Gems | Essential for TH9+ |
| 6th Builder | Free (Builder Base) | TH14+ requirement |

---

## Town Hall Progression Guide

Your Town Hall level is the backbone of your entire progression. Here is what to expect at each stage and how to approach upgrades efficiently.

![Town Hall building](${images.blog["coc-town-hall"]})

### Early Game: TH1 to TH6

The early Town Hall levels go fast. You will breeze through TH1 to TH5 in a few days if you play actively. During this phase:

- **Focus on offense first.** Upgrade your Army Camps, Barracks, and Laboratory before defenses. Stronger troops mean more loot from attacks, which funds everything else.
- **Do not rush your Town Hall.** Max out all buildings, troops, and walls at each level before upgrading. Rushing makes you weaker relative to your opponents and slows long-term progress.
- **Learn to attack.** Use simple army compositions like all Barbarians or Barbarians and Archers (called "Barch") to farm resources efficiently.
- **Join a clan early.** Even at TH3, being in a clan gives you access to Clan Castle troops for defense and attack, which are incredibly powerful at low levels.

**TH6 Key Unlocks:**
- Clan Castle upgrade (hold more troops)
- Healing Spell
- Air Defense (critical against air attacks)

### Mid Game: TH7 to TH10

This is where the game really opens up. You unlock Heroes, Dark Elixir, and significantly more strategic depth.

**TH7 Milestones:**
- **Barbarian King** — Your first Hero. He is a powerful melee fighter who can turn raids in your favor. Upgrade him whenever possible.
- **Dark Elixir** — Start building your Dark Elixir Drill and Storage immediately. Dark Elixir is always scarce, so protect it.
- **Dragons** — The dominant attack strategy at TH7. Mass Dragon attacks can 3-star almost any TH7 base.

**TH8 Milestones:**
- **GoWiPe** — Golems, Wizards, and P.E.K.K.As become your go-to war army.
- **Dark Elixir Troops** — Hog Riders and Valkyries unlock. Both are essential for war.
- Walls become expensive. Start grinding them early.

**TH9 Milestones:**
- **Archer Queen** — Your second Hero and arguably the most important unit in the game. She deals massive damage from range and her Royal Cloak ability can solo entire base sections.
- **Lava Hounds** — LaLoon (Lava Hounds + Balloons) becomes a top-tier attack strategy.
- **X-Bows** — Your first really powerful defense. Place them to cover as much of your base as possible.

**TH10 Milestones:**
- **Inferno Towers** — Game-changing defenses that melt high-HP troops.
- **Siege Machines** — Unlocked at TH12 but usable at TH10 via Clan Castle donations.
- **Miners and Bowlers** — Two of the strongest farming troops in the game.

For base layouts at these levels, check out our [TH7 bases](/clash-of-clans/bases/th/7), [TH8 bases](/clash-of-clans/bases/th/8), [TH9 bases](/clash-of-clans/bases/th/9), and [TH10 bases](/clash-of-clans/bases/th/10).

### Late Game: TH11 to TH14

The late game introduces the most powerful units and defenses in Clash of Clans. Upgrades take days, so patience and planning become critical.

**TH11:**
- **Grand Warden** — Your third Hero. He provides an aura that boosts nearby troops and his Eternal Tome ability makes all nearby troops temporarily invincible.
- **Eagle Artillery** — A devastating long-range defense that activates once enough troops are deployed.
- **Electro Dragon** — A powerful air troop that chains lightning between targets.

**TH12:**
- **Siege Machines** — Workshop unlocked. Build your own Wall Wreckers, Battle Blimps, and more.
- **Giga Tesla** — Your Town Hall now fights back when destroyed.
- **Yeti** — A strong ground troop that releases Yetimites when defeated.

**TH13:**
- **Royal Champion** — The fourth Hero with incredible damage output and her Seeking Shield ability targets defenses directly.
- **Scattershot** — A powerful splash damage defense.

**TH14:**
- **Hero Pets** — Companions that follow your Heroes into battle, each with unique abilities.
- **6th Builder** — Unlocked through Builder Base progression (requires OTTO Hut).
- **Poison Tower** — Slows and damages nearby troops.

Browse layouts for these levels: [TH11 bases](/clash-of-clans/bases/th/11), [TH12 bases](/clash-of-clans/bases/th/12), [TH13 bases](/clash-of-clans/bases/th/13), [TH14 bases](/clash-of-clans/bases/th/14).

### End Game: TH15 to TH18

The highest Town Hall levels represent the pinnacle of Clash of Clans. Strategies become incredibly complex and every upgrade matters.

**TH15:**
- **Monolith** — A new defense that deals percentage-based damage, melting high-HP troops.
- **Spell Tower** — A defense that casts spells on attacking troops.
- **Battle Drill** — A new Siege Machine.

**TH16:**
- **Multi-Archer Tower** and **Ricochet Cannon** — Merged defenses that combine two buildings into one powerful structure.
- **Hero Equipment** — A major new system where Heroes equip items that change their abilities.
- **Spirit Fox** — A new Hero Pet.

**TH17 and TH18** continue to add new defenses, troops, and Hero Equipment. The meta shifts frequently at these levels, so staying updated with balance changes is important.

Explore our extensive collection of end-game layouts: [TH15 bases](/clash-of-clans/bases/th/15), [TH16 bases](/clash-of-clans/bases/th/16), [TH17 bases](/clash-of-clans/bases/th/17), and [TH18 bases](/clash-of-clans/bases/th/18).

---

## Troops and Army Building

Understanding troops is essential. In Clash of Clans, you train armies in Barracks and spell in Spell Factories, then deploy them to attack enemy bases.

![Clash of Clans troops](${images.blog["coc-troops"]})

### Troop Categories

**Elixir Troops (Regular):**
- **Barbarians** — Cheap melee fighters, great for farming in large numbers
- **Archers** — Ranged units, excellent paired with Barbarians ("Barch")
- **Giants** — High-HP tanks that target defenses
- **Wizards** — Powerful splash damage from behind tanks
- **Dragons** — Flying units immune to ground defenses, dominant at TH7-8
- **P.E.K.K.A** — Massive damage dealer, slow but devastating
- **Miners** — Tunnel underground, ignoring walls entirely
- **Electro Dragon** — Chain lightning hits multiple buildings
- **Yeti** — Releases Yetimites that distract defenses

**Dark Elixir Troops:**
- **Hog Riders** — Jump over walls to target defenses directly
- **Valkyries** — Spin attack hits all nearby buildings
- **Golems** — The ultimate tank, splits into Golemites when destroyed
- **Witch** — Summons Skeletons to overwhelm defenses
- **Lava Hound** — Air tank that absorbs damage and splits into Pups
- **Bowlers** — Boulders bounce to hit buildings behind the target
- **Ice Golem** — Freezes nearby defenses on death
- **Headhunter** — Targets Heroes specifically

### Best Farming Armies by Town Hall

| TH Level | Army | Why It Works |
|----------|------|-------------|
| TH5-6 | Barch (Barbarians + Archers) | Cheap, fast to train, targets collectors |
| TH7 | Mass Dragons | 3-stars everything at TH7, simple to use |
| TH8 | GoWiPe | Reliable 2-3 star on any TH8 base |
| TH9 | LaLoon (Lava Hound + Balloons) | Devastating air attack |
| TH10 | Miners + Healers | "Queen Walk Miners" farms any base |
| TH11+ | Sneaky Goblins | Super Goblin farming is the fastest loot method |

### Spells

Spells support your army during attacks. The most important spells are:

- **Rage Spell** — Increases troop speed and damage in an area. Essential for Dragon and Balloon attacks.
- **Heal Spell** — Heals troops over time. Critical for Hog Rider and Miner strategies.
- **Freeze Spell** — Freezes defenses and Clan Castle troops for a few seconds. Huge against Inferno Towers and Eagle Artillery.
- **Lightning Spell** — Damages buildings in an area. Can destroy Air Defenses at lower TH levels.
- **Jump Spell** — Allows ground troops to leap over walls. Essential for ground-based war attacks.

---

## Heroes — Your Most Powerful Units

Heroes are permanent, upgradeable units that fight alongside your army. They are the strongest units in the game and upgrading them should always be a priority.

![Barbarian King — the first hero](${images.blog["coc-heroes"]})

### 1. Barbarian King (Unlocked at TH7)

A melee fighter with high HP and damage. His ability, **Iron Fist**, partially heals him and summons Barbarians. At early levels he is mainly a tank, but at higher levels he becomes a serious threat.

**Upgrade Priority:** Always keep your Barbarian King upgrading. Dark Elixir spent on King levels is never wasted.

### 2. Archer Queen (Unlocked at TH9)

The most important Hero in the game. She is a ranged attacker with excellent damage per second. Her ability, **Royal Cloak**, makes her invisible and summons Archers. This ability is what makes "Queen Walk" and "Queen Charge" strategies possible — she can solo entire sections of a base with Healer support.

**Upgrade Priority:** Absolute top priority at TH9 and beyond. A max Archer Queen wins wars.

### 3. Grand Warden (Unlocked at TH11)

A support Hero who provides a passive aura to nearby troops (either HP boost or damage boost depending on mode). His ability, **Eternal Tome**, makes all troops within range **invincible** for a few seconds. This ability is game-changing at higher Town Hall levels.

**Key Tip:** The Grand Warden can switch between **Ground mode** and **Air mode**. Match his mode to your army composition.

### 4. Royal Champion (Unlocked at TH13)

A high-damage Hero that targets defenses. Her ability, **Seeking Shield**, throws her shield which bounces between defenses, dealing massive damage. She excels at clearing core defenses quickly.

**Upgrade Priority:** High priority. Her Seeking Shield can take out multiple key defenses in seconds.

### Hero Equipment (TH16+)

Starting at TH16, Heroes can equip special items that modify their abilities. For example, the Barbarian King can equip a **Giant Gauntlet** that gives him a larger fist ability, or a **Vampstache** that heals him per hit. Hero Equipment adds another layer of strategy to army planning.

---

## Base Building and Layouts

Your base layout is your defense. A well-designed base can protect your resources from farmers and prevent 3-stars in Clan Wars. A poorly designed base gives away easy loot and war stars.

![Clash of Clans base building](${images.blog["coc-builders"]})

### Base Layout Types

- **Farming Base** — Prioritizes protecting resources (Gold, Elixir, Dark Elixir storages) deep inside the base. The Town Hall can be outside since you do not care about trophies.
- **Trophy Base** — Protects the Town Hall to prevent stars and maintain your trophy count.
- **War Base** — Designed to prevent 3-stars in Clan Wars. The Town Hall is centralized and the base is anti-meta.
- **Hybrid Base** — Tries to protect both resources and the Town Hall. Good all-around option for active players.

### Base Building Tips for Beginners

1. **Centralize your most important buildings.** Town Hall in war, Dark Elixir storage when farming.
2. **Spread out splash defenses.** Wizard Towers, Mortars, and Bomb Towers should cover different areas so a single army cannot take them all out.
3. **Use compartments.** Divide your base into sections with walls. This slows down attackers and makes them use more spells.
4. **Protect Air Defenses.** Air attacks are extremely powerful. Make sure your Air Defenses are well-protected and not easy to snipe.
5. **Do not put all storages together.** Spread them across different compartments so an attacker cannot take all your loot from one side.
6. **Use trap placements wisely.** Spring Traps near Giant/Hog pathing, Seeking Air Mines near Air Defense approach paths, and Giant Bombs between defenses.

### Where to Find Good Layouts

Building a good base from scratch is hard, especially as a beginner. Instead of experimenting and losing resources, use proven layouts from experienced players. We have a collection of **tested base layouts for every Town Hall level** on our site:

- [All Clash of Clans Base Layouts](/clash-of-clans/bases) — Browse by Town Hall level and base type
- Layouts for [TH7](/clash-of-clans/bases/th/7) through [TH18](/clash-of-clans/bases/th/18)
- War, farming, trophy, hybrid, CWL, and anti-3 layouts available

---

## Clans and Clan Wars

Joining a clan is one of the best things you can do in Clash of Clans. Clans provide social interaction, Clan Castle troop donations, Clan Wars, Clan War League, Clan Games, and access to the Clan Capital.

![Clan Wars in Clash of Clans](${images.blog["coc-clan-castle"]})

### Joining a Clan

You can join a clan once you repair your Clan Castle (costs 40,000 Gold at TH3). When looking for a clan:

- **Look for active clans** that donate troops regularly and participate in wars.
- **Check the clan requirements** — some clans require minimum Town Hall levels or trophy counts.
- **Start with a beginner-friendly clan** that has lower requirements. You can always move to a more competitive clan later.
- **Request troops regularly.** Clan Castle troops are incredibly powerful at all levels.

### Clan Wars

Clan Wars are team-based events where your clan fights another clan. Each player gets two attacks over a 24-hour battle period. The clan with the most stars wins.

**Clan War Tips for Beginners:**
- **Always use both attacks.** Not attacking hurts your entire clan.
- **Attack your mirror first.** Attack the base at your same position in the war map before hitting higher or lower.
- **Use a proper war army.** Do not use your farming army in war. Use a composition designed to 3-star.
- **Scout before attacking.** Look at the base layout, identify weaknesses, and plan your deployment.
- **Practice in friendly challenges.** Ask clanmates to share their war bases so you can practice.

### Clan War League (CWL)

CWL is a monthly competitive event where 8 clans compete over 7 days. Unlike regular wars, each player only gets **one attack per day**. CWL rewards League Medals, which can be spent on exclusive items including Hero Equipment and Magic Items.

**CWL Tip:** Even if your base is low level, participating in CWL earns you League Medals. Many clans include lower players in their CWL roster.

### Clan Capital

The Clan Capital is a shared base that your entire clan builds together. Each weekend, your clan defends against enemy clans in **Raid Weekends**. Contributing to the Clan Capital earns Raid Medals, which can be used to buy Builder Potions, Research Potions, and other useful items.

---

## Top 10 Beginner Mistakes to Avoid

1. **Rushing your Town Hall** — The most common mistake. Maxing your base at each TH level ensures you stay competitive.
2. **Wasting Gems on speedups** — Save every Gem for Builders until you have all five.
3. **Ignoring your Heroes** — Always keep at least one Hero upgrading. Hero levels are the biggest factor in attack success.
4. **Not joining a clan** — Solo players miss out on Clan War loot, CWL rewards, Clan Games, and Clan Castle troops.
5. **Neglecting walls** — Walls are boring to upgrade but they significantly slow down ground attacks.
6. **Using the same base layout forever** — Change your base regularly, especially your war base. Opponents can scout and plan against a base they have seen before.
7. **Attacking without a plan** — Do not just spam troops. Identify the goal (loot, stars, or both), scout the base, and deploy in a logical order.
8. **Ignoring the Laboratory** — Troop and spell upgrades in the Laboratory are just as important as building upgrades. Keep your Lab running 24/7.
9. **Upgrading everything evenly** — Prioritize offense (Army Camps, Barracks, Lab, Spell Factory) before defense at each new TH level.
10. **Not using shields and guard** — After a defense, you get a shield. Use that time to save up resources for your next upgrade before logging off.

---

## Resource Management Tips

Resource management is what separates efficient players from players who feel like they are always broke.

### Farming Strategies

- **Drop trophies to find easier bases.** At lower trophy ranges (Gold and Silver leagues), bases have more loot in collectors.
- **Use cheap armies for farming.** Barch, Goblin Knife, and Sneaky Goblins are the most resource-efficient farming strategies.
- **Attack dead bases.** Look for bases with full collectors (gold and purple bubbles visible). These give the most loot for the least effort.
- **Farm during events.** Supercell regularly runs events that boost loot, reduce training time, or give bonus rewards.

### Protecting Your Resources

- **Spend resources before logging off.** Start an upgrade, train troops, or donate to clanmates before you close the game.
- **Use a farming base layout** that puts storages deep inside compartments.
- **Keep your Town Hall outside** if you only care about resources. Attackers will snipe it for trophies and give you a free shield.
- **Stagger your storage amounts.** Do not fill all your Gold Storages if you are saving Elixir — make your base less attractive to attackers.

---

## Builder Base Guide

The Builder Base (also called Builder Village) is a separate village accessible via the boat on the edge of your main village. It has its own troops, defenses, and progression system.

### Why Builder Base Matters

- **6th Builder** — The main reason to progress in Builder Base. At Builder Hall 9, completing the O.T.T.O Hut requirements unlocks a 6th Builder for your main village. This is a massive boost to progression.
- **Clan Games** — Some Clan Games challenges require Builder Base activities.
- **Gems** — The Gem Mine in Builder Base produces free Gems over time.

### O.T.T.O Hut Requirements (6th Builder)

To unlock the 6th Builder, you need:
1. Gear Up 3 buildings in your main village (requires Builder Base upgrades)
2. Upgrade Cannon Cart to level 18
3. Upgrade Mega Tesla to level 9
4. Upgrade Battle Machine to level 30

This is a long grind but absolutely worth it. The 6th Builder accelerates your main village progression significantly.

Check out our [Builder Base layouts](/clash-of-clans/bases/bh/9) to optimize your Builder Hall progression.

---

## Quick Start Checklist

If you are just starting Clash of Clans today, follow this priority list:

1. Complete the tutorial and upgrade to TH3
2. Repair your Clan Castle and join a clan
3. Save 500 Gems and buy your 3rd Builder
4. Max all buildings, troops, and walls at each TH level before upgrading
5. Keep your Laboratory running 24/7
6. Upgrade offense before defense at each new TH level
7. Save 1,000 Gems for 4th Builder, then 2,000 for 5th Builder
8. Start upgrading your Barbarian King the moment you unlock Dark Elixir at TH7
9. Never stop upgrading your Archer Queen once you reach TH9
10. Use [proven base layouts](/clash-of-clans/bases) instead of building from scratch

---

## Frequently Asked Questions

**Is Clash of Clans pay-to-win?**

No. Clash of Clans is one of the fairest free-to-play games on mobile. Gems can speed up progress but they cannot buy skill. A free-to-play player who attacks well will beat a spender with poor strategy every time.

**How long does it take to max TH18?**

Without spending money, it takes roughly 3-4 years of consistent play to max TH18 from scratch. However, the journey is the fun part — every Town Hall level feels like a new game with new troops and strategies.

**Should I rush to TH12 for Siege Machines?**

No. While having your own Siege Machines is nice, you can receive them from clanmates via the Clan Castle. Rushing to TH12 with weak troops and heroes will make you a liability in wars. Max your base at each level instead.

**What is the best league for farming?**

For most players, **Gold League** to **Crystal League** offers the best balance of loot and easy bases. Higher leagues like Masters and Champions offer loot bonuses but the bases are harder to attack.

**How do I get better at attacking?**

Practice. Watch YouTube attack replays for your TH level, try strategies in Friendly Challenges with clanmates, and do not be afraid to fail. Every failed attack teaches you something about troop pathing, spell timing, and base reading.

---

Clash of Clans is a marathon, not a sprint. The players who progress fastest are the ones who play consistently, attack smart, join active clans, and never stop learning. Use the tips in this guide, find layouts that work for your Town Hall level in our [base layout collection](/clash-of-clans/bases), and most importantly — have fun building your village.

**Welcome to Clash of Clans. Chief, your village awaits.**
    `.trim(),
  },
  {
    slug: "best-th18-attack-strategies-2026",
    title: "Best TH18 Attack Strategies 2026 — Top War & CWL Armies",
    description:
      "Master the best TH18 attack strategies for 2026. Complete guide to Root Rider Smash, Hydra, Yeti Smash, LaLo, and more top war armies with step-by-step deployment guides.",
    category: "Attack Strategy",
    date: "2026-03-14",
    readTime: "35 min read",
    image: images.blog["th18-attack-featured"],
    content: `
Town Hall 18 is the highest level in Clash of Clans as of 2026, and attacking at this level requires mastery of troop compositions, hero abilities, spell timing, and funnel management. With the introduction of the Spirit Fox hero, new hero equipment, and rebalanced defenses, TH18 attacks look very different from even a year ago.

Whether you are pushing in Legend League, competing in Clan War League, or just trying to 3-star in regular clan wars, this guide breaks down the **best TH18 attack strategies** in the current meta. Each strategy includes the full army composition, spell selection, hero equipment recommendations, and a step-by-step deployment guide.

---

## What Changed at TH18

Town Hall 18 introduced several game-changing features that directly impact attack strategies:

![Town Hall 18 building](${images.blog["th18-town-hall"]})

- **Spirit Fox** — The fifth hero. The Spirit Fox phases through walls, targets defenses, and has a cloak ability that makes it temporarily invisible. This hero changes how you approach funneling and core dives.
- **New Hero Equipment** — TH18 unlocks additional hero equipment options including upgrades that can drastically change how your heroes perform in battle.
- **Merged Defenses** — Some defenses received upgrades and new levels, making bases harder to crack with brute force. Multi-target Inferno Towers, Scattershots, and Eagle Artillery all hit harder at max TH18 levels.
- **Spell Tower Level 4** — The Spell Tower at TH18 can hold stronger spells, adding another layer of defensive complexity.
- **New Troop Levels** — Several troops received new upgrade levels, shifting the meta toward specific compositions.

Understanding these changes is crucial. The strategies below are built around the TH18 meta as of early 2026.

---

## Strategy 1: Root Rider Smash

Root Rider Smash is the **most dominant TH18 attack strategy** in 2026. Root Riders are incredibly tanky troops that ride on massive roots, smashing through walls and buildings. When paired with support troops and properly funneled, they can steamroll even the most well-designed bases.

![Root Rider troop](${images.blog["th18-root-rider"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Root Rider | 6 | Main damage + wall breaking |
| Witch | 6 | Skeleton spawns for distraction |
| Ice Golem | 2 | Tank + freeze on death |
| Healer | 2 | Keep Root Riders alive |
| Archer | 5 | Funnel cleanup |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 3 | Boost Root Rider damage in core |
| Freeze Spell | 2 | Disable Inferno Towers |
| Heal Spell | 1 | Sustain through splash damage |
| Earthquake Spell | 4 | Open core compartments |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (air mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet
- **Spirit Fox:** Default equipment

### Step-by-Step Deployment

1. **Earthquake the core.** Use all 4 Earthquake Spells to open up the center of the base where the Town Hall, Eagle Artillery, and key defenses sit. This saves your Root Riders from pathing around walls.

2. **Create a funnel.** Deploy 2-3 Archers on each side of your entry point to clear trash buildings. Send the Barbarian King on one side and the Royal Champion on the other to widen the funnel.

3. **Deploy Ice Golems.** Drop 2 Ice Golems at your entry point to absorb initial damage from defenses near the edge.

4. **Send in Root Riders.** Deploy all 6 Root Riders in a line behind the Ice Golems. They will root-dash through walls and head toward the core.

5. **Support with Witches.** Place all 6 Witches behind the Root Riders. The skeletons they spawn absorb single-target Inferno damage and distract defenses.

6. **Deploy Healers.** Place 2 Healers behind the group to keep the Root Riders alive as they push through.

7. **Grand Warden follows.** Deploy the Grand Warden in air mode to follow the Root Rider push. Save Eternal Tome for when the group reaches the core or encounters heavy splash damage.

8. **Rage through the core.** As your troops enter the center, drop Rage Spells to amplify Root Rider damage. Use Freeze Spells on multi-target Infernos or Scattershots.

9. **Spirit Fox for cleanup.** Deploy the Spirit Fox on the opposite side of the base to pick off remaining defenses. Its wall-phasing ability lets it reach buildings other troops cannot.

10. **Heal Spell as needed.** Drop the Heal Spell on your main group if they are taking heavy damage from Wizard Towers or Bomb Towers.

### When to Use Root Rider Smash

- Works on almost any base layout — it is the most versatile TH18 strategy
- Best against bases with centralized Town Halls and compact compartments
- Strong against single-target Inferno bases (Witches counter them)
- Avoid using against spread-out bases with many isolated compartments

---

## Strategy 2: Hydra (Electro Dragon + Root Rider)

Hydra is a hybrid strategy that combines the aerial power of Electro Dragons with the ground tanking of Root Riders. The name comes from the multi-headed attack approach — ground and air working simultaneously. This strategy is excellent for bases where a pure ground approach would get shredded by splash defenses.

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Electro Dragon | 4 | Aerial chain damage |
| Root Rider | 4 | Ground tank + wall break |
| Balloon | 8 | Target defenses behind E-Drags |
| Ice Golem | 1 | Front-line tank |
| Archer | 3 | Funnel |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 3 | Boost E-Drag chain damage |
| Freeze Spell | 3 | Disable Infernos + Air Defenses |
| Poison Spell | 1 | Kill CC troops |

### Hero Equipment

- **Barbarian King:** Rage Vial + Earthquake Boots
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (air mode) + Life Gem
- **Royal Champion:** Seeking Shield + Hog Rider Puppet
- **Spirit Fox:** Default equipment

### Step-by-Step Deployment

1. **Funnel both sides.** Use Archers, Barbarian King on one side, and Royal Champion on the other to create a wide entry path.

2. **Deploy Ice Golem + Root Riders.** Send the Ice Golem first, then 4 Root Riders behind it. They will charge toward the core and break walls open.

3. **Electro Dragons behind.** Deploy 4 Electro Dragons in a line behind the ground troops. Their chain lightning will clear buildings in clusters.

4. **Balloons for defense targeting.** Send Balloons in pairs toward remaining Air Defenses and other key defenses. Time them with Rage Spells.

5. **Grand Warden air mode.** Deploy Warden to follow the E-Drags. Save Tome for when they hit the core or encounter heavy anti-air.

6. **Rage the E-Drag chain.** Drop Rage Spells on clumps of buildings where E-Drags can chain maximum damage. A raged E-Dragon chain can clear half a base.

7. **Freeze key defenses.** Freeze multi-target Infernos, Scattershots, or Air Defenses that threaten your E-Drags.

8. **Spirit Fox cleanup.** Send Spirit Fox through walls to snipe remaining defenses on the back side.

### When to Use Hydra

- Best against bases with clustered buildings (E-Drag chains do massive damage)
- Strong against bases with anti-ground layouts heavy on splash
- Good choice when you see weak anti-air coverage
- Avoid on spread-out bases where E-Drag chain lightning cannot connect

---

## Strategy 3: Yeti Smash

Yeti Smash is a raw power strategy that relies on the sheer HP and damage of Yetis combined with Bowlers and Witches. This is one of the most consistent TH18 strategies because it is hard to mess up — the troops naturally group and push through bases.

![Yeti troop](${images.blog["th18-yeti"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Yeti | 7 | Main tank + damage |
| Bowler | 5 | Ranged splash behind Yetis |
| Witch | 4 | Skeleton distraction |
| Ice Golem | 2 | Front-line freeze tank |
| Healer | 2 | Support healing |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 3 | Core push |
| Heal Spell | 1 | Sustain through splash |
| Freeze Spell | 2 | Inferno + Scattershot control |
| Bat Spell | 3 | Backend cleanup |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet
- **Spirit Fox:** Default equipment

### Step-by-Step Deployment

1. **Funnel carefully.** Yetis have unpredictable pathing if the funnel is not wide enough. Use Barbarian King + Archers on one side and Royal Champion on the other to clear at least 2-3 buildings per side.

2. **Ice Golems first.** Deploy both Ice Golems at the center of your entry point to absorb initial fire.

3. **Yetis in a line.** Deploy all 7 Yetis in a spread line behind the Ice Golems. Do not bunch them — a spread deployment ensures they cover more ground.

4. **Bowlers behind Yetis.** Place all 5 Bowlers behind the Yetis. Their bouncing boulders will hit buildings over the Yetis' heads, dealing massive splash damage.

5. **Witches on flanks.** Place 2 Witches on each side of the main push. Skeletons create distractions and absorb single-target Inferno beams.

6. **Grand Warden ground mode.** Deploy Warden with the ground push. His aura boosts the HP of your entire group. Save Tome for the core.

7. **Healers on Yetis.** Deploy 2 Healers to keep the Yeti frontline alive as they push through.

8. **Rage the core.** Drop Rage Spells as the group enters high-value areas. A raged Bowler behind a Yeti is one of the highest DPS combinations in the game.

9. **Freeze Infernos.** Multi-target Infernos shred Yeti Smash. Freeze them immediately when your group is in range.

10. **Bat Spells for backend.** Once the main push clears 50-60% of the base, deploy all 3 Bat Spells on the remaining defenses at the back. Pair with a Freeze if needed to protect the bats from Wizard Towers.

### When to Use Yeti Smash

- Best against compact, symmetrical bases
- Excellent when single-target Infernos are used (Witches counter them)
- Strong when Wizard Towers and Bomb Towers are centralized (Yetis tank through them)
- Avoid against bases with multi-target Infernos covering the core

---

## Strategy 4: Sui LaLo (Lava Hound + Balloon)

LaLo (Lava Hound + Balloon) has been a top-tier strategy since the early days of Clash of Clans, and it remains incredibly strong at TH18. The "Sui" prefix means Suicide Heroes — you sacrifice your heroes to take out key defenses (usually the Queen, Eagle, or Infernos) before deploying the LaLo backend.

![Lava Hound troop](${images.blog["th18-lava-hound"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Lava Hound | 4 | Air tank |
| Balloon | 20 | Main damage vs defenses |
| Ice Golem | 2 | Hero kill squad tank |
| Wizard | 3 | Funnel for heroes |
| Archer | 3 | Funnel support |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Haste Spell | 5 | Speed up Balloons |
| Rage Spell | 1 | Hero kill squad |
| Freeze Spell | 2 | Disable Infernos during LaLo |
| Poison Spell | 1 | Kill CC troops during hero phase |

### Hero Equipment

- **Barbarian King:** Rage Vial + Earthquake Boots
- **Archer Queen:** Giant Arrow + Healer Puppet
- **Grand Warden:** Eternal Tome (air mode) + Life Gem
- **Royal Champion:** Seeking Shield + Hog Rider Puppet
- **Spirit Fox:** Default equipment

### Step-by-Step Deployment

1. **Identify the kill squad target.** Before attacking, decide what your heroes need to eliminate: usually the Eagle Artillery, an Inferno Tower, or a key Air Defense. Plan a side of the base where heroes can reach these targets.

2. **Deploy Ice Golems + Heroes.** Send 2 Ice Golems to tank, then deploy Barbarian King behind them. Deploy Wizards to funnel. Once the path is clear, send the Archer Queen with her ability ready.

3. **Rage the hero push.** Drop a Rage Spell on your heroes as they approach the target. Use the Queen's Giant Arrow ability to snipe the high-value defense.

4. **Poison enemy CC.** When the enemy Clan Castle troops come out, drop Poison on them. Let your heroes clean them up with the kill squad.

5. **Royal Champion to snipe.** Deploy the Royal Champion on a different angle to take out another key defense (second Inferno or Air Defense).

6. **Start LaLo.** Once key defenses are down, begin the Lava Hound + Balloon deployment. Send Lava Hounds first toward remaining Air Defenses.

7. **Balloons in surgical groups.** Deploy 2-3 Balloons per defense point, working around the base in a clockwise or counterclockwise sweep. Do not deploy all Balloons at once.

8. **Haste the Balloons.** Drop Haste Spells ahead of your Balloon path so they move quickly between defenses. Speed prevents splash damage from stacking.

9. **Grand Warden air mode.** Deploy Warden to follow the LaLo push. Save Tome for when Balloons cluster near Scattershots or Wizard Towers.

10. **Freeze remaining threats.** Use Freeze Spells on multi-target Infernos or Wizard Towers that threaten your Balloon groups.

11. **Spirit Fox for cleanup.** The Spirit Fox can phase through walls to reach the last few percentage points of buildings that Balloons miss.

### When to Use Sui LaLo

- Best against bases with exposed or reachable key defenses (Eagle, Infernos)
- Strong when Air Defenses are spread out (each Lava Hound covers one)
- Excellent against bases with few multi-target Infernos
- Requires high skill — hero kill squad timing is critical
- Avoid against bases with centralized, unreachable Air Defenses

---

## Strategy 5: Blizzard LaLo

Blizzard LaLo is a variation that uses an Invisibility Spell + Super Witch Blimp to destroy the Town Hall or core defenses before following up with LaLo. The "Blizzard" refers to the Super Witch's big boy ability combined with Invisibility to sneak past defenses.

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Lava Hound | 3 | Air tank for LaLo |
| Balloon | 22 | Defense targeting |
| Ice Golem | 1 | Tanking |
| Archer | 5 | Funnel cleanup |

**Clan Castle:** Super Witch + Ice Golem + Invisibility Spell in a Battle Blimp

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Invisibility Spell | 2 | Blimp payload protection |
| Haste Spell | 5 | Balloon speed |
| Freeze Spell | 2 | Inferno control |

### Step-by-Step Deployment

1. **Send the Battle Blimp.** Aim the Blimp directly at the Town Hall. The Blimp needs to reach the core and pop.

2. **Invisibility on payload.** As soon as the Blimp pops, drop 2 Invisibility Spells on the Super Witch and Ice Golem. The Super Witch spawns a Big Boy that targets the Town Hall while invisible.

3. **Town Hall destroyed.** If executed correctly, the Blizzard destroys the Town Hall and surrounding defenses before the base can react.

4. **Deploy LaLo.** With the core destroyed, send Lava Hounds toward remaining Air Defenses and follow with surgical Balloon deployment.

5. **Haste the sweep.** Haste Spells keep Balloons moving quickly around the base.

6. **Heroes for value.** Deploy heroes to clean up one side — Barbarian King + Archer Queen can clear a flank while LaLo handles the rest.

7. **Freeze Infernos.** Save Freezes for any multi-target Infernos that survived the Blizzard.

### When to Use Blizzard LaLo

- Best when the Town Hall is reachable by a Battle Blimp straight line
- Strong against bases where destroying the TH removes Giga Inferno + surrounding defenses
- Requires good CC coordination — you need a Super Witch in your Blimp
- Avoid when the base has Seeking Air Mines near the TH that will pop the Blimp early

---

## Strategy 6: DragBat (Mass Dragon + Bat Spell)

DragBat is a straightforward but effective strategy that uses mass Dragons to push through one side of the base while Bat Spells clean up the other. It is less skill-intensive than LaLo and works well in war situations where you need a reliable 3-star.

![Dragon troop](${images.blog["th18-dragon"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Dragon | 9 | Main damage |
| Balloon | 6 | Defense targeting |
| Ice Golem | 1 | Tank for funnel |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 2 | Boost Dragons in core |
| Freeze Spell | 3 | Protect Bats + disable defenses |
| Bat Spell | 5 | Backend cleanup |

### Step-by-Step Deployment

1. **Choose your split.** Identify which half of the base has Wizard Towers and Bomb Towers. Your Dragons go to that side. Bats go to the side without splash defenses.

2. **Funnel with heroes.** Barbarian King on one flank, Royal Champion on the other. Clear corner buildings.

3. **Deploy Dragons in a line.** Spread 9 Dragons across your entry side. Follow with Balloons targeting defenses behind the Dragons.

4. **Grand Warden in air.** Send Warden with the Dragon push. Save Tome for Eagle Artillery fire or Scattershot.

5. **Rage through the core.** Drop Rage Spells as Dragons enter the base interior. Raged Dragons deal devastating damage.

6. **Bat Spell on the backend.** Once your Dragons clear 50-60% of the base, deploy all 5 Bat Spells on the remaining defenses on the opposite side.

7. **Freeze for Bats.** Immediately Freeze any Wizard Towers or multi-target Infernos near your Bats. A single Wizard Tower will destroy your entire Bat wave.

8. **Spirit Fox for percentage.** Clean up remaining buildings with Spirit Fox.

### When to Use DragBat

- Best against bases with splash defenses concentrated on one side
- Strong when you can identify a clear "Dragon side" vs "Bat side"
- Lower skill requirement — good for CWL when you need consistent results
- Avoid against bases with Wizard Towers spread evenly across the layout

---

## Hero Equipment Meta at TH18

Hero equipment choices can make or break an attack at TH18. Here are the current meta picks:

### Barbarian King

| Equipment | When to Use |
|-----------|------------|
| Rage Vial | Default pick — boosts damage and speed |
| Giant Gauntlet | Against bases where King needs to tank heavy damage |
| Earthquake Boots | When King needs to open walls for the kill squad |

### Archer Queen

| Equipment | When to Use |
|-----------|------------|
| Healer Puppet | Default pick — gives Queen self-sustain |
| Giant Arrow | Essential for sniping key defenses in kill squad |
| Frozen Arrow | Against bases where you need to freeze + snipe |

### Grand Warden

| Equipment | When to Use |
|-----------|------------|
| Eternal Tome | Always — the invincibility is irreplaceable |
| Healing Tome | Default second pick for sustain |
| Life Gem | Alternative second pick for LaLo strategies |

### Royal Champion

| Equipment | When to Use |
|-----------|------------|
| Seeking Shield | Always — the shield snipe is her core ability |
| Hog Rider Puppet | Default second pick for additional defense targeting |

### Spirit Fox

The Spirit Fox is relatively new and its equipment options are still evolving. Use the default loadout while experimenting with new releases.

---

## Spell Timing Tips

Spell timing separates average TH18 attackers from great ones. Here are key principles:

- **Rage Spell:** Drop it 1-2 seconds BEFORE your troops enter the area. Troops need to be inside the radius to benefit.
- **Freeze Spell:** Use reactively, not preemptively. Wait until your troops are actually being hit by the defense before freezing it.
- **Heal Spell:** Drop on your troops when they are at 50-70% HP, not when they are already almost dead. Heal has a duration — you want maximum healing ticks.
- **Haste Spell:** Drop AHEAD of your Balloons, not on them. Balloons are slow — they need the speed boost before they reach the next defense.
- **Invisibility Spell:** Timing is critical. Drop immediately when the Blimp pops — even a 1-second delay means your troops take lethal damage.
- **Bat Spell:** Always deploy with a Freeze ready. Bats die instantly to splash. Freeze the nearest Wizard Tower the moment you deploy Bats.

---

## Common TH18 Attack Mistakes

Even experienced attackers make these errors at TH18:

1. **Poor funneling** — The number one reason attacks fail. If your troops go around the base instead of into it, the attack is over. Always verify your funnel before sending the main army.

2. **Ignoring the Eagle Artillery** — Eagle does massive damage when it activates. Either destroy it with your kill squad, Blizzard it, or time your Warden Tome for the first volley.

3. **Wasting Eternal Tome** — The Grand Warden's Tome is the most valuable ability in the game. Do not use it early. Save it for the moment your entire army is taking maximum damage in the core.

4. **Bat Spell without Freeze** — Deploying Bats without a Freeze ready for the nearest Wizard Tower is a guaranteed fail. Always pair Bat deployment with Freeze.

5. **Deploying all troops at once** — Stagger your deployment. Heroes funnel first, then tanks, then damage dealers, then support. A staged deployment ensures your troops path correctly.

6. **Not scouting Clan Castle** — At TH18, a well-timed CC defense (Super Minions, Ice Golems) can ruin an attack. Always carry a Poison Spell or have a plan for CC troops.

7. **Attacking the wrong side** — Before deploying a single troop, rotate the base and identify where key defenses are. The side with the Eagle, Infernos, and TH is usually where you want your main push.

---

## Best TH18 Base Layouts to Practice Against

Improving at TH18 attacks requires practice. Use Friendly Challenges in your clan to test these strategies against different base layouts. Check out our [TH18 base layout collection](/clash-of-clans/bases/th/18) for bases you can copy and practice against.

Key base types to practice:

- **Anti-3 War Bases** — Designed to prevent 3-stars with spread-out defenses and tricky trap placements
- **Ring Bases** — Troops circle the base instead of pushing through the center
- **Island Bases** — Key defenses are isolated in moat-style compartments
- **CWL Bases** — Optimized for CWL where the attacker only gets one attempt

---

## Frequently Asked Questions

**What is the best TH18 attack strategy in 2026?**

Root Rider Smash is the most consistent and versatile TH18 strategy in 2026. It works against almost any base layout and has a high 3-star rate even with imperfect execution.

**Is LaLo still viable at TH18?**

Yes. LaLo remains one of the highest skill-ceiling strategies at TH18. In the hands of a skilled attacker, Sui LaLo and Blizzard LaLo can 3-star bases that ground strategies cannot touch.

**What hero equipment should I max first at TH18?**

Prioritize Rage Vial (King), Healer Puppet (Queen), Eternal Tome (Warden), and Seeking Shield (Royal Champion). These are the core equipment pieces used in almost every strategy.

**How do I deal with multi-target Infernos at TH18?**

Multi-target Infernos are the biggest threat at TH18. Use Freeze Spells to disable them during your push, or choose strategies like LaLo where Lava Hounds absorb the damage while Balloons destroy the Inferno.

**Should I use Super Troops at TH18?**

Yes. Super Witch (in Blizzard Blimp), Super Bowler, and Super Minion are all strong choices at TH18. Super Witch is essential for Blizzard LaLo, and Super Bowler can replace regular Bowlers in Yeti Smash for more damage.

**How do I practice TH18 attacks?**

Use Friendly Challenges in your clan. Ask clanmates to set TH18 war bases and practice your strategies. Watch replays of Legend League attacks on YouTube to learn pathing and timing. Join a competitive war clan where experienced attackers can coach you.

---

Mastering TH18 attacks takes practice, patience, and willingness to learn from failures. Start with Root Rider Smash for consistency, then branch out to LaLo and Hydra as you improve. Check out our [TH18 base layouts](/clash-of-clans/bases/th/18) for bases to practice against, and read our other [Clash of Clans guides](/clash-of-clans/guides) for more tips on dominating at every level.

**Now get out there and start crushing TH18 bases, Chief.**
    `.trim(),
  },
  {
    slug: "best-th17-attack-strategies-2026",
    title: "Best TH17 Attack Strategies 2026 — Top War & CWL Armies",
    description:
      "Master the best TH17 attack strategies for 2026. Complete guide to Root Rider Smash, GoWitch, Hybrid, LaLo, DragBat, and more with step-by-step deployment guides and army compositions.",
    category: "Attack Strategy",
    date: "2026-03-15",
    readTime: "32 min read",
    image: images.blog["th17-attack-featured"],
    content: `
Town Hall 17 is the second-highest Town Hall level in Clash of Clans, and it remains one of the most competitive tiers in the game. With access to four heroes, powerful hero equipment, and nearly every troop in the game at high levels, TH17 attackers have a wide arsenal to work with. But the defenses at TH17 are punishing — max Scattershots, Inferno Towers, Eagle Artillery, and Spell Towers mean that sloppy attacks get shut down fast.

This guide covers the **best TH17 attack strategies** for 2026, including full army compositions, spell loadouts, hero equipment recommendations, and step-by-step deployment instructions. Whether you are competing in CWL, pushing trophies, or 3-starring in regular wars, these strategies will give you the tools to succeed.

---

## TH17 Overview — What You Have to Work With

Before diving into strategies, here is what TH17 gives you compared to TH16:

![Town Hall 17 building](${images.blog["th17-town-hall"]})

- **All 4 Heroes** — Barbarian King, Archer Queen, Grand Warden, and Royal Champion are all available with high upgrade levels.
- **Hero Equipment** — Full access to hero equipment system. Your equipment choices significantly impact which strategies work best.
- **Max Troop Levels** — Nearly every troop in the game is available at near-max level, giving you maximum flexibility in army building.
- **Powerful Defenses** — Scattershots, multi-target and single-target Inferno Towers, Eagle Artillery, Spell Tower, and Monolith make TH17 bases extremely dangerous.
- **Clan Capital Access** — Full Clan Capital participation for Raid Medals and rewards.
- **Siege Machines** — All Siege Machines available including Log Launcher, Battle Blimp, Wall Wrecker, Stone Slammer, and Siege Barracks.

The key difference from TH18 is the absence of the Spirit Fox hero. At TH17, you work with 4 heroes instead of 5, which means your hero deployment needs to be more efficient — each hero needs to contribute maximum value.

---

## Strategy 1: Root Rider Smash

Root Rider Smash is just as dominant at TH17 as it is at TH18. Root Riders break through walls effortlessly and deal massive damage to buildings. Combined with Witches for skeleton distractions and proper spell support, this strategy has the highest consistent 3-star rate at TH17.

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Root Rider | 7 | Main damage + wall breaking |
| Witch | 6 | Skeleton spawns for distraction |
| Ice Golem | 2 | Tank + freeze on death |
| Healer | 2 | Keep Root Riders alive |
| Archer | 5 | Funnel cleanup |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 3 | Boost damage through core |
| Heal Spell | 1 | Sustain through splash zones |
| Freeze Spell | 2 | Disable Inferno Towers |
| Earthquake Spell | 4 | Open core compartments |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Earthquake the core.** Use all 4 Earthquake Spells to open up the center compartments. Target the area around the Town Hall, Eagle Artillery, and Inferno Towers for maximum value.

2. **Create a wide funnel.** Deploy Archers to pick off corner buildings. Send the Barbarian King on one side with his Rage Vial to clear 2-3 buildings. Deploy the Royal Champion on the opposite side — her Seeking Shield will snipe a defense and start clearing that flank.

3. **Ice Golems at entry.** Once both sides are funneled, deploy 2 Ice Golems at the center of your intended entry point. They absorb the first wave of defensive fire.

4. **Root Riders in a line.** Deploy all 7 Root Riders in a spread line behind the Ice Golems. Spread deployment prevents them from bunching up and getting destroyed by splash damage.

5. **Witches behind.** Place 6 Witches behind the Root Riders. The constant stream of skeletons they produce absorbs single-target Inferno beams and distracts point defenses.

6. **Grand Warden ground mode.** Deploy the Warden behind your main group. His life aura boosts the HP of all nearby troops. Save Eternal Tome for when the group enters the core and faces concentrated fire.

7. **Healers on the push.** Deploy 2 Healers to sustain the Root Rider frontline as they push through compartments.

8. **Rage the core push.** Drop Rage Spells as your troops enter high-value areas. Raged Root Riders deal devastating damage and move faster.

9. **Freeze Infernos.** Multi-target Infernos are the biggest threat to this comp. Freeze them the moment your troops are in range. Single-target Infernos are handled by the Witch skeletons.

10. **Heal through splash.** Drop the Heal Spell when your group is taking concentrated Wizard Tower or Bomb Tower damage.

### When to Use

- Most versatile TH17 strategy — works against nearly any base
- Best against compact bases with centralized defenses
- Earthquake opening makes it effective against heavy-wall bases
- Avoid against extremely spread bases with isolated compartments

---

## Strategy 2: GoWitch (Golem + Witch)

GoWitch is one of the oldest and most reliable strategies in Clash of Clans, and it still works beautifully at TH17. The combination of tanky Golems soaking damage while Witches spawn an endless army of skeletons behind them is incredibly hard for bases to deal with.

![Witch troop](${images.blog["th17-witch"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Golem | 3 | Front-line tanks |
| Witch | 12 | Main damage + skeleton spawns |
| Ice Golem | 1 | Additional tank + freeze |
| Bowler | 3 | Ranged splash damage |
| Archer | 5 | Funnel |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 2 | Core push |
| Heal Spell | 2 | Sustain Witch army |
| Freeze Spell | 2 | Inferno control |
| Jump Spell | 1 | Core access |
| Poison Spell | 1 | CC troops |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Funnel both sides.** Deploy Archers and heroes on the flanks. Barbarian King on one side to tank and clear, Royal Champion on the other to snipe defenses.

2. **Golems at entry points.** Deploy 2 Golems spread across your entry side to create multiple tanking points. The 3rd Golem goes in the center.

3. **Witches behind Golems.** Deploy all 12 Witches in a line behind the Golems. The skeletons will flood forward and overwhelm defenses.

4. **Bowlers behind Witches.** Place 3 Bowlers in the center — their bouncing boulders hit buildings over the heads of Golems and Witches.

5. **Jump Spell for core access.** Once your push is moving, drop a Jump Spell to give your troops a path into the core compartment.

6. **Grand Warden with the push.** Deploy the Warden to walk with the ground army. His aura makes the entire push significantly harder to kill.

7. **Rage inside the core.** Drop Rage Spells when your Witches and Bowlers enter the core. Raged Witches spawn skeletons faster and deal more damage.

8. **Heal through damage.** Use Heal Spells on your Witch group when they take splash damage. Witches are fragile — keeping them alive means constant skeleton production.

9. **Freeze Infernos.** Multi-target Infernos melt skeletons instantly. Freeze them to keep your skeleton swarm alive.

10. **Poison enemy CC.** When CC troops emerge, drop Poison to slow and damage them. Witches struggle against high-HP CC troops like Electro Dragons.

### When to Use

- Best against bases with single-target Infernos (skeletons counter them perfectly)
- Strong against symmetrical bases where the push naturally flows to the center
- Reliable in CWL where you need consistent results
- Avoid against bases with multiple multi-target Infernos and heavy splash coverage

---

## Strategy 3: Hybrid (Hog Riders + Miners)

Hybrid is a precision strategy that uses a hero kill squad to eliminate key defenses, then deploys Hog Riders and Miners together to surgically destroy the remaining base. At TH17, Hybrid requires more skill than Smash strategies but rewards that skill with incredibly clean 3-stars.

![Hog Rider troop](${images.blog["th17-hog-rider"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Hog Rider | 16 | Defense targeting |
| Miner | 8 | Ground damage + self-heal |
| Ice Golem | 2 | Kill squad tank |
| Wizard | 3 | Kill squad funnel |
| Archer | 5 | Funnel support |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Heal Spell | 5 | Keep Hog/Miner pack alive |
| Rage Spell | 1 | Kill squad boost |
| Poison Spell | 1 | Enemy CC troops |

**Clan Castle:** Siege Barracks or Log Launcher + Freeze Spell

### Hero Equipment

- **Barbarian King:** Rage Vial + Earthquake Boots
- **Archer Queen:** Giant Arrow + Healer Puppet
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Plan the kill squad target.** Identify the enemy Clan Castle, Archer Queen (if defending), and one key defense (Eagle Artillery or multi-target Inferno). Your heroes need to take these out.

2. **Deploy kill squad.** Ice Golems first, then Barbarian King. Use Wizards to funnel. Deploy Archer Queen once the path is clear — use Giant Arrow to snipe the key target.

3. **Rage the kill squad.** Drop a Rage Spell on your heroes as they engage the target. The combination of King tanking and Queen sniping should eliminate the threat.

4. **Poison CC troops.** When enemy CC troops appear, Poison them. Your kill squad heroes can clean them up.

5. **Deploy Hog Riders + Miners.** Once the kill squad has done its job, deploy all Hog Riders and Miners in a line on the opposite side of the base. Deploy them together — Miners provide sustained ground damage while Hogs target defenses.

6. **Grand Warden with Hybrid pack.** Deploy the Warden to walk with the Hog/Miner group. His aura and Tome are crucial for keeping the pack alive.

7. **Heal Spell placement.** Pre-drop Heal Spells AHEAD of your Hog/Miner path. They move fast — you need the Heal in place before they arrive. Space your 5 Heals evenly around the base.

8. **Eternal Tome timing.** Save the Tome for when the pack hits the heaviest concentration of defenses — usually near the Eagle Artillery or clustered Infernos.

9. **Royal Champion for cleanup.** Deploy the Royal Champion to snipe remaining defenses that the pack might miss. Her Seeking Shield ability is perfect for picking off isolated buildings.

### When to Use

- Best against bases with spread-out defenses (Hogs cover ground quickly)
- Strong when key defenses are accessible to a kill squad from one side
- Excellent against bases with weak spots that a surgical approach can exploit
- Avoid against bases with heavy Giant Bomb placements (they shred Hogs)
- Avoid against ring bases where Hogs can get pulled in circles

---

## Strategy 4: Sui LaLo (Lava Hound + Balloon)

LaLo is the skill-ceiling strategy of Clash of Clans. At TH17, Sui LaLo (Suicide Hero LaLo) uses your heroes to take out 1-2 critical defenses, then follows up with Lava Hounds tanking for Balloons to systematically destroy every remaining defense.

![Balloon troop](${images.blog["th17-balloon"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Lava Hound | 4 | Air tank |
| Balloon | 22 | Main damage |
| Ice Golem | 2 | Kill squad tank |
| Wizard | 3 | Kill squad funnel |
| Archer | 3 | Funnel support |
| Minion | 3 | Cleanup |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Haste Spell | 5 | Speed Balloons between defenses |
| Rage Spell | 1 | Kill squad |
| Freeze Spell | 2 | Disable multi-Infernos |
| Poison Spell | 1 | CC troops |

### Hero Equipment

- **Barbarian King:** Rage Vial + Earthquake Boots
- **Archer Queen:** Giant Arrow + Healer Puppet
- **Grand Warden:** Eternal Tome (air mode) + Life Gem
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Identify kill squad targets.** The hero kill squad needs to eliminate 1-2 Air Defenses, the Eagle Artillery, or an Inferno Tower. Pick a side of the base where these are accessible.

2. **Deploy Ice Golems + King.** Send 2 Ice Golems to tank, followed by the Barbarian King. Use Wizards on the flanks to funnel.

3. **Queen walks in.** Once the funnel is set, deploy the Archer Queen. Use Giant Arrow to snipe the primary target (Air Defense or Eagle).

4. **Rage the heroes.** Drop a Rage Spell when your heroes engage the key defenses. The Queen needs to connect with her target before dying.

5. **Poison CC.** Drop Poison on enemy CC troops. CC troops left alive can distract your LaLo badly.

6. **Royal Champion on another angle.** Send the RC to snipe an Air Defense or Inferno on a different side. Her Seeking Shield can reach defenses deep in compartments.

7. **Start LaLo.** Send 1 Lava Hound per remaining Air Defense. If there are 4 Air Defenses left, use all 4 Hounds. If the kill squad took out 1-2, adjust accordingly.

8. **Surgical Balloon deployment.** Deploy 2-3 Balloons per defense, sweeping around the base. Do NOT mass deploy — surgical deployment ensures every defense gets targeted.

9. **Haste ahead of Balloons.** Drop Haste Spells in the path your Balloons will travel. Speed is everything — fast Balloons take less splash damage.

10. **Grand Warden air mode.** Deploy the Warden to follow the main LaLo push. Save Eternal Tome for when Balloons hit Scattershots or clustered defenses.

11. **Freeze threats.** Freeze multi-target Infernos or Wizard Towers that threaten your Balloon groups.

12. **Minions for cleanup.** Drop Minions on remaining buildings to secure the 3-star.

### When to Use

- Best against bases with accessible key defenses for the kill squad
- Strong when Air Defenses are spread around the perimeter
- Excellent against bases with single-target Infernos (Lava Hound pups absorb them)
- Highest skill ceiling — practice in Friendly Challenges before using in war
- Avoid against bases with all Air Defenses centralized and unreachable

---

## Strategy 5: Electro Dragon Spam

Electro Dragon Spam is the go-to strategy for players who want reliable 2-stars with 3-star potential. At TH17, mass Electro Dragons with Balloon support can chain through clustered bases for devastating damage. While it requires less technical skill than LaLo or Hybrid, proper deployment still matters.

![Electro Dragon troop](${images.blog["th17-electro-dragon"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Electro Dragon | 7 | Main damage (chain lightning) |
| Balloon | 8 | Target defenses ahead of E-Drags |
| Ice Golem | 1 | Funnel tank |

**Clan Castle:** Stone Slammer with Electro Dragon + Balloon

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 4 | Boost E-Drag chain damage |
| Freeze Spell | 3 | Disable Infernos + Air Defenses |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (air mode) + Life Gem
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Choose entry side.** Pick the side with the most clustered buildings. E-Drag chain lightning deals maximum damage when buildings are close together.

2. **Funnel with heroes.** Barbarian King on one edge, Royal Champion on the other. Clear corner buildings so E-Drags path into the base.

3. **Balloons first.** Deploy 2 Balloons per Air Defense on your entry side to distract and damage them before E-Drags arrive.

4. **E-Drags in a line.** Deploy all 7 Electro Dragons in a spread line. Do not bunch them — a spread line ensures chain lightning covers more area.

5. **Stone Slammer.** Send the Stone Slammer toward the center of the base. It tanks while the CC E-Drag chains from within the core.

6. **Grand Warden air.** Deploy Warden to follow the E-Drag push. His aura extends the survivability of the entire group.

7. **Rage the chains.** Drop Rage Spells on clusters of buildings where E-Drags are chaining. A raged E-Dragon chain obliterates everything in its path.

8. **Freeze Air Defenses.** Freeze Air Defenses and Inferno Towers that threaten your E-Drags. Timing matters — Freeze when your E-Drags are actually in range.

9. **Eternal Tome for Eagle.** Save the Warden's Tome for when the Eagle Artillery starts firing on your E-Drag group. Eagle damage stacks up fast on slow air troops.

### When to Use

- Best against bases with tightly clustered buildings
- Strong when Air Defenses are on the perimeter (Balloons take them out early)
- Good for CWL when you need a safe, consistent strategy
- Lower skill floor — easier to execute under pressure
- Avoid against spread-out bases where chain lightning cannot connect between buildings

---

## Strategy 6: Yeti Bowler Smash

Yeti Bowler Smash is a brute-force ground strategy that pushes through one side of the base with overwhelming power. Yetis provide massive HP tanks while Bowlers deal ranged splash damage from behind. Add Bat Spells for backend cleanup and you have a reliable 3-star strategy.

![Bowler troop](${images.blog["th17-bowler"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Yeti | 8 | Front-line tank + damage |
| Bowler | 6 | Ranged splash behind Yetis |
| Ice Golem | 2 | Initial tanking |
| Healer | 2 | Sustain the push |
| Archer | 4 | Funnel |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 2 | Core push |
| Heal Spell | 1 | Sustain through splash zones |
| Freeze Spell | 2 | Inferno control |
| Bat Spell | 4 | Backend cleanup |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Wide funnel.** Use Archers on both sides, Barbarian King on one flank and Royal Champion on the other. You need at least 3 buildings cleared on each side.

2. **Ice Golems forward.** Deploy 2 Ice Golems at the center entry to absorb the initial defensive fire.

3. **Yetis in a line.** Deploy all 8 Yetis spread behind the Ice Golems. They march forward and start breaking through buildings and walls.

4. **Bowlers behind.** Deploy 6 Bowlers behind the Yetis. Their boulders bounce over the Yetis into buildings further ahead, dealing splash damage to clustered defenses.

5. **Healers on the group.** Deploy 2 Healers to keep the Yeti frontline alive longer.

6. **Grand Warden ground.** Deploy Warden with the push. His life aura is critical for keeping Yetis and Bowlers alive through concentrated fire.

7. **Rage through the core.** Drop Rage Spells as the group enters the center of the base. Raged Bowlers behind Yetis is one of the highest sustained DPS combos in the game.

8. **Freeze Infernos.** Multi-target Infernos are the biggest threat. Freeze them immediately when your group is in range.

9. **Heal through splash.** Drop the Heal Spell when your group takes Wizard Tower and Bomb Tower damage.

10. **Bat Spells for cleanup.** Once your main push has cleared 50-60% of the base, deploy all 4 Bat Spells on the remaining defenses on the back side. Immediately Freeze the nearest Wizard Tower to protect the bats.

### When to Use

- Best against compact bases with defenses grouped together
- Strong against single-target Inferno bases (Yetis absorb while Bowlers destroy)
- Reliable when you need the front push to clear most of the base before Bats handle the rest
- Avoid against wide, spread-out bases where Yetis can get separated

---

## Hero Equipment Meta at TH17

Hero equipment choices are just as important at TH17 as they are at TH18. Here is the current meta:

### Barbarian King

| Equipment | Best For |
|-----------|---------|
| Rage Vial | Default pick — nearly every strategy benefits from the speed + damage boost |
| Giant Gauntlet | Smash strategies where King needs to survive tanking |
| Earthquake Boots | Kill squad strategies where King needs to open compartments for the Queen |

### Archer Queen

| Equipment | Best For |
|-----------|---------|
| Healer Puppet | Default pick — self-sustain keeps Queen alive for maximum sniping value |
| Giant Arrow | Kill squad strategies — snipes Eagle, Inferno, or other high-value targets |
| Frozen Arrow | Niche pick for freezing + sniping a specific defense |

### Grand Warden

| Equipment | Best For |
|-----------|---------|
| Eternal Tome | Always — invincibility is the most powerful ability in the game |
| Healing Tome | Ground strategies (Smash, Hybrid, GoWitch) |
| Life Gem | Air strategies (LaLo, E-Drag) where raw HP boost matters more |

### Royal Champion

| Equipment | Best For |
|-----------|---------|
| Seeking Shield | Always — the shield snipe is her defining ability |
| Hog Rider Puppet | Default second — adds defense-targeting value |

---

## Spell Timing Guide for TH17

Getting spell timing right is what separates 2-stars from 3-stars:

- **Rage Spell:** Drop 1 tile ahead of where your troops are heading. They need to walk INTO the Rage, not past it.
- **Heal Spell:** Drop directly on your troop group when they hit 60-70% HP. Too early wastes ticks, too late means troops die before the heal kicks in.
- **Freeze Spell:** Use reactively. Wait until your troops are actually being damaged by the defense, then Freeze. Pre-emptive Freezes often expire before your troops arrive.
- **Haste Spell:** Drop 3-4 tiles ahead of your Balloons. They are slow — the Haste needs to be waiting for them, not dropped on them.
- **Earthquake Spell:** Always drop all 4 together at the start. The damage stacks — 4 Earthquakes destroy any wall and deal significant damage to buildings in the radius.
- **Bat Spell:** Deploy all Bats at once from one spot, paired with an immediate Freeze on the nearest Wizard Tower. Staggered Bat deployment is weaker because bats spread out and die individually.
- **Poison Spell:** Drop on CC troops the moment they emerge. Poison stacks over time — the earlier you drop it, the more damage it does.

---

## Common TH17 Attack Mistakes

These mistakes cost TH17 attackers 3-stars more than anything else:

1. **Weak funneling** — If your troops walk around the base instead of through it, the attack fails. Invest 30-45 seconds into funneling before sending your main army.

2. **Wrong strategy for the base** — Not every strategy works against every base. A spread base kills Root Rider Smash. A clustered base with splash kills LaLo. Learn to match strategy to base layout.

3. **Early Warden Tome** — The Grand Warden Eternal Tome is the most valuable ability in your arsenal. Using it early on perimeter defenses wastes it. Save it for the core where damage concentration is highest.

4. **Ignoring Clan Castle** — Enemy CC troops at TH17 are deadly. An Electro Dragon or Super Minion horde from the CC can destroy your attack. Always carry Poison and plan for CC.

5. **Bat Spells near Wizard Towers** — Bats die instantly to Wizard Towers. Always identify where Wizard Towers are and either avoid deploying Bats near them or Freeze the Wizard Tower first.

6. **All troops at once** — Dumping everything simultaneously leads to poor pathing. Deploy in stages: funnel heroes, then tanks, then damage dealers, then support.

7. **Not scouting the base** — Rotate the base before attacking. Look for trap locations (based on layout), CC range, Air Defense placement, and Inferno Tower types (single vs multi).

---

## Best TH17 Base Layouts to Practice Against

Practice is the fastest way to improve at TH17 attacks. We have the largest collection of TH17 base layouts on the site with **46 bases** across all categories:

- [TH17 War Bases](/clash-of-clans/bases/th/17) — Anti-3-star layouts optimized for clan wars
- [TH17 Trophy Bases](/clash-of-clans/bases/th/17) — Designed to protect trophies for Legend League pushing
- [TH17 Farming Bases](/clash-of-clans/bases/th/17) — Protect resources while you upgrade
- [TH17 CWL Bases](/clash-of-clans/bases/th/17) — Specialized for Clan War League defense

Use Friendly Challenges in your clan to test these strategies against real TH17 bases. The more you practice, the better your timing, funneling, and spell placement becomes.

---

## Frequently Asked Questions

**What is the best TH17 attack strategy for war?**

Root Rider Smash is the most consistent TH17 war strategy. It works against the widest range of base layouts and has the highest 3-star rate. For skilled attackers, Sui LaLo offers even higher potential against the right bases.

**Is Hybrid still good at TH17?**

Yes. Hybrid (Hog Rider + Miner) is one of the strongest TH17 strategies when executed properly. It requires more skill than Smash but rewards precision with clean 3-stars against spread bases that Smash struggles with.

**What is the easiest TH17 attack strategy?**

Electro Dragon Spam is the easiest to execute. Line deployment with Rage Spells requires the least decision-making during the attack. GoWitch is another beginner-friendly option with simple deployment.

**Should I use ground or air at TH17?**

It depends on the base. Use ground (Root Rider Smash, Yeti Bowler, GoWitch) against bases with weak ground defenses or single-target Infernos. Use air (LaLo, E-Drag) against bases with weak Air Defenses or heavy ground splash.

**How important is hero equipment at TH17?**

Extremely important. The difference between correct and incorrect hero equipment can change a 2-star into a 3-star. Always match your equipment to your strategy — Rage Vial for Smash, Giant Arrow for kill squad, Life Gem for LaLo.

**How do I deal with Scattershots at TH17?**

Scattershots deal splash damage that shreds groups of troops. Freeze them when your main army is in range, or target them early with your hero kill squad. In LaLo, time the Warden Tome for when Balloons cluster near Scattershots.

---

Mastering TH17 attacks is about matching the right strategy to the right base, executing clean funnels, and timing your spells perfectly. Start with Root Rider Smash for reliable results, then expand your toolkit with Hybrid and LaLo for bases that require surgical precision.

Browse our [TH17 base layouts](/clash-of-clans/bases/th/17) to find practice targets, and check out our [TH18 Attack Strategies guide](/clash-of-clans/guides/best-th18-attack-strategies-2026) if you are ready to push to the next level.

**Go claim those 3-stars, Chief.**
    `.trim(),
  },
  {
    slug: "best-th16-attack-strategies-2026",
    title: "Best TH16 Attack Strategies 2026 — Top War & CWL Armies",
    description:
      "Master the best TH16 attack strategies for 2026. Complete guide to Root Rider Smash, GoBoWitch, Hybrid, Electro Dragon, and more with full army compositions and deployment guides.",
    category: "Attack Strategy",
    date: "2026-03-16",
    readTime: "30 min read",
    image: images.blog["th16-attack-featured"],
    content: `
Town Hall 16 is where Clash of Clans starts to feel truly competitive. With access to all four heroes at high levels, Root Riders, powerful hero equipment, and Siege Machines, TH16 players have a massive toolkit to work with. But TH16 defenses are no joke — Scattershots, max Inferno Towers, Eagle Artillery, Monolith, and Spell Towers can shut down poorly planned attacks in seconds.

This guide covers the **best TH16 attack strategies** for 2026, with complete army compositions, spell loadouts, hero equipment picks, and step-by-step deployment instructions for each one. Whether you are warring, pushing trophies, or competing in CWL, these are the strategies that consistently deliver 3-stars.

---

## TH16 Overview — Your Arsenal

Before jumping into strategies, here is what makes TH16 a pivotal Town Hall level:

![Town Hall 16 building](${images.blog["th16-town-hall"]})

- **Four Heroes** — Barbarian King, Archer Queen, Grand Warden, and Royal Champion all available at high levels. Hero equipment plays a major role in every strategy.
- **Root Riders** — Unlocked at TH15, Root Riders are fully upgraded at TH16 and form the backbone of the most dominant strategies.
- **Monolith** — The Monolith defense deals percentage-based damage that shreds high-HP troops. Positioning around it is critical for every attack.
- **Spell Tower Level 3** — Can hold Rage, Poison, or Invisibility, adding unpredictable defensive power.
- **All Siege Machines** — Wall Wrecker, Battle Blimp, Stone Slammer, Log Launcher, Siege Barracks, and Flame Flinger are all available.
- **Hero Equipment System** — TH16 has access to most hero equipment. Your equipment choices often determine whether an attack is a 2-star or 3-star.

The biggest challenge at TH16 is the Monolith. Unlike other defenses that deal flat damage, the Monolith deals damage based on the troop's max HP — meaning tanky troops like Golems and Yetis melt faster than expected. Strategies at TH16 need to account for this.

---

## Strategy 1: Root Rider Smash

Root Rider Smash dominates TH16 just as it does at higher Town Hall levels. Root Riders ignore walls, deal heavy damage, and have enough HP to push through multiple compartments. Combined with Witches for distraction and proper spell support, this is the most reliable TH16 war strategy.

![Root Rider troop](${images.blog["th16-root-rider"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Root Rider | 7 | Main damage + wall breaking |
| Witch | 6 | Skeleton distractions |
| Ice Golem | 2 | Front-line tank + freeze |
| Healer | 2 | Sustain the push |
| Archer | 5 | Funnel cleanup |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 3 | Boost Root Riders in core |
| Heal Spell | 1 | Sustain through splash |
| Freeze Spell | 2 | Disable Infernos |
| Earthquake Spell | 4 | Open core compartments |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Earthquake the core.** Stack all 4 Earthquake Spells on the center compartment, targeting the area around the Town Hall, Eagle Artillery, and Monolith. This eliminates wall pathing issues for your Root Riders.

2. **Funnel both sides.** Use Archers on corners, Barbarian King on one flank, and Royal Champion on the other. You need at least 2-3 buildings cleared per side so Root Riders path into the base, not around it.

3. **Ice Golems at entry.** Deploy both Ice Golems at the center of your entry point to absorb the initial defensive fire from perimeter defenses.

4. **Root Riders in a spread line.** Deploy all 7 Root Riders behind the Ice Golems. Spread them across your entry to ensure they cover the maximum area.

5. **Witches behind.** Deploy 6 Witches behind the Root Riders. Their skeletons absorb single-target Inferno beams and distract point defenses while Root Riders deal damage.

6. **Grand Warden ground mode.** Deploy the Warden to walk with the main push. His life aura boosts the HP of your entire group. Save Eternal Tome for when the group hits the core or the Monolith.

7. **Healers on Root Riders.** Deploy 2 Healers behind the push to keep the Root Rider frontline alive.

8. **Rage the core.** Drop Rage Spells as your troops enter the center. Raged Root Riders destroy buildings incredibly fast.

9. **Freeze Infernos.** Multi-target Infernos shred this comp. Freeze them the moment your troops are in range. Single-target Infernos are handled by Witch skeletons.

10. **Heal through Monolith zone.** The Monolith deals percentage damage that stacks up. Drop the Heal Spell when your group is near it. Alternatively, use a Freeze on the Monolith if your troops are low HP.

### When to Use

- Most versatile TH16 strategy — works against most base layouts
- Best against compact bases with centralized defenses
- Earthquake opening handles wall-heavy bases
- Avoid against extremely spread ring bases

---

## Strategy 2: GoBoWitch (Golem + Bowler + Witch)

GoBoWitch is a classic ground strategy that remains powerful at TH16. Golems tank the front while Bowlers deal ranged splash damage and Witches spawn skeletons for distraction. The key advantage of GoBoWitch at TH16 is its reliability — the deployment is straightforward and it works against a wide range of base designs.

![Golem troop](${images.blog["th16-golem"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Golem | 3 | Front-line tanks |
| Bowler | 8 | Main ranged splash damage |
| Witch | 6 | Skeleton spawns |
| Ice Golem | 1 | Additional tank + freeze |
| Archer | 4 | Funnel |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 2 | Core push |
| Heal Spell | 2 | Sustain Bowler/Witch group |
| Jump Spell | 1 | Core access |
| Freeze Spell | 2 | Inferno + Monolith control |
| Poison Spell | 1 | CC troops |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Funnel with heroes.** Barbarian King on one side, Royal Champion on the other. Clear 2-3 buildings per side.

2. **Golems at entry.** Deploy 2 Golems spread across the entry side, with the 3rd Golem slightly offset. Ice Golem goes in the center.

3. **Bowlers behind Golems.** Deploy all 8 Bowlers in a line behind the Golems. Their bouncing boulders hit buildings behind the ones Golems are tanking, creating devastating chain damage.

4. **Witches on flanks.** Deploy 3 Witches on each side of the main push. Skeletons flood forward and overwhelm point defenses.

5. **Jump Spell for core.** Once the push reaches the first set of walls around the core, drop a Jump Spell to give troops direct access.

6. **Grand Warden ground.** Deploy Warden with the push. Save Tome for when the group enters the core and faces Eagle + Inferno + Monolith fire.

7. **Rage inside the core.** Drop Rage Spells when Bowlers and Witches enter high-value areas. Raged Bowlers deal massive splash damage.

8. **Heal through damage.** Use Heal Spells when your group takes concentrated splash from Wizard Towers or Bomb Towers.

9. **Freeze threats.** Freeze multi-target Infernos and the Monolith when your troops are in range. The Monolith's percentage damage is especially dangerous to Golems.

10. **Poison CC troops.** Drop Poison on enemy CC troops immediately. Super Minions or Electro Dragons from the CC can wreck your Witch army.

### When to Use

- Best against symmetrical bases with a clear core
- Strong against single-target Inferno bases (skeletons counter them)
- Reliable for CWL — low fail rate with proper execution
- Avoid against bases with multi-target Infernos covering the entire core

---

## Strategy 3: Hybrid (Hog Rider + Miner)

Hybrid is the precision scalpel of TH16 strategies. While Smash and GoBoWitch use brute force, Hybrid uses a kill squad to eliminate key defenses, then deploys Hog Riders and Miners to surgically dismantle the remaining base. It requires more skill but rewards it with clean 3-stars.

![Miner troop](${images.blog["th16-miner"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Hog Rider | 16 | Defense targeting |
| Miner | 10 | Ground damage + self-heal |
| Ice Golem | 2 | Kill squad tank |
| Wizard | 3 | Kill squad funnel |
| Archer | 3 | Funnel support |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Heal Spell | 5 | Keep Hog/Miner pack alive |
| Rage Spell | 1 | Kill squad |
| Poison Spell | 1 | CC troops |

**Clan Castle:** Log Launcher or Siege Barracks + Freeze Spell

### Hero Equipment

- **Barbarian King:** Rage Vial + Earthquake Boots
- **Archer Queen:** Giant Arrow + Healer Puppet
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Identify kill squad targets.** Before the attack, find the enemy CC, Eagle Artillery, and any key defense (Monolith or multi-Inferno) accessible from one side.

2. **Deploy kill squad.** Ice Golems first, then Barbarian King. Use Wizards to funnel. Send Archer Queen once the path is clear — her Giant Arrow snipes the priority target.

3. **Rage the heroes.** Drop Rage Spell on your hero group as they engage the key defenses.

4. **Poison CC.** When enemy CC troops emerge, drop Poison immediately. Let your kill squad heroes clean them up.

5. **Deploy Hybrid pack.** Once the kill squad does its job, deploy Hogs and Miners together on the opposite side. Send them in a line — Miners fill gaps between Hog targets.

6. **Grand Warden with pack.** Deploy the Warden to walk with the Hybrid group. His aura and Tome are essential for surviving concentrated fire.

7. **Pre-place Heal Spells.** Drop Heals AHEAD of where your Hog/Miner pack is heading. They move fast — you need Heals waiting for them, not catching up. Space 5 Heals evenly around their path.

8. **Warden Tome for danger zone.** Save Eternal Tome for when the pack hits the heaviest cluster of defenses — often near the Monolith or remaining Infernos.

9. **Royal Champion cleanup.** Send RC to snipe remaining defenses on a third angle. Her Seeking Shield reaches deep into compartments.

### When to Use

- Best against bases with spread defenses (Hogs cover ground fast)
- Strong when key defenses are accessible from one side for the kill squad
- Excellent against bases with weak Giant Bomb placements
- Highest skill requirement — practice in Friendly Challenges first
- Avoid against bases with clustered Giant Bombs or ring layouts

---

## Strategy 4: Electro Dragon + Balloon (E-Drag Spam)

E-Drag Spam remains a go-to at TH16 for players wanting reliable results without complex deployments. Electro Dragons chain lightning through clustered buildings while Balloons target defenses ahead. The key at TH16 is proper funnel management and Rage placement to maximize chain damage.

![Electro Dragon troop](${images.blog["th16-electro-dragon"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Electro Dragon | 7 | Main chain damage |
| Balloon | 10 | Defense targeting |
| Ice Golem | 1 | Funnel tank |

**Clan Castle:** Stone Slammer with Electro Dragon + Balloon

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 4 | Boost E-Drag chains |
| Freeze Spell | 3 | Disable Air Defenses + Infernos |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (air mode) + Life Gem
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Pick the clustered side.** Identify which side of the base has the most tightly packed buildings. E-Drag chain lightning needs buildings close together.

2. **Funnel with heroes.** Barbarian King on one flank, Royal Champion on the other. Clear corner and edge buildings.

3. **Balloons first.** Deploy 2 Balloons per Air Defense on your entry side. They distract and damage Air Defenses before E-Drags arrive.

4. **E-Drags in a spread line.** Deploy all 7 Electro Dragons across your entry side. Do not bunch them — spreading ensures maximum chain coverage.

5. **Stone Slammer to core.** Send the CC Stone Slammer toward the Town Hall. It tanks while the CC E-Drag chains from deep inside the base.

6. **Grand Warden air mode.** Deploy Warden behind the E-Drags. His aura keeps them alive longer. Save Tome for Eagle Artillery volleys.

7. **Rage the chains.** Drop Rage Spells on building clusters where E-Drags are actively chaining. A raged E-Dragon chain can clear an entire section.

8. **Freeze key defenses.** Freeze Air Defenses, multi-Infernos, or the Monolith when they threaten your E-Drags.

9. **Remaining Balloons.** Deploy leftover Balloons to clean up defenses on the flanks that E-Drags might miss.

### When to Use

- Best against compact bases with tightly clustered buildings
- Strong when Air Defenses are on the perimeter
- Easiest deployment of any TH16 strategy — great for CWL consistency
- Avoid against spread bases where chain lightning cannot connect

---

## Strategy 5: PEKKABoBat (PEKKA + Bowler + Bat Spell)

PEKKABoBat is a powerful split strategy. PEKKAs and Bowlers push through one side of the base with raw damage, while Bat Spells clean up the opposite side. The combination of ground power and Bat cleanup makes this incredibly efficient when used against the right bases.

![PEKKA troop](${images.blog["th16-pekka"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| P.E.K.K.A | 4 | Heavy tank + damage |
| Bowler | 8 | Ranged splash |
| Ice Golem | 2 | Front-line tank |
| Witch | 2 | Skeleton support |
| Archer | 4 | Funnel |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Rage Spell | 2 | Core push |
| Heal Spell | 1 | Sustain the push |
| Freeze Spell | 3 | Protect Bats + disable defenses |
| Bat Spell | 4 | Backend cleanup |

### Hero Equipment

- **Barbarian King:** Rage Vial + Giant Gauntlet
- **Archer Queen:** Healer Puppet + Giant Arrow
- **Grand Warden:** Eternal Tome (ground mode) + Healing Tome
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Identify the split.** Look at the base and find where Wizard Towers and Bomb Towers are. Your ground push goes to the side WITH splash defenses. Bats go to the side WITHOUT splash.

2. **Funnel with heroes.** Barbarian King and Archers on one side, Royal Champion on the other.

3. **Ice Golems first.** Deploy 2 Ice Golems at the entry point to absorb initial fire.

4. **PEKKAs behind Ice Golems.** Deploy 4 PEKKAs in a line. They hit extremely hard and can tank significant damage.

5. **Bowlers behind PEKKAs.** Deploy 8 Bowlers — their bouncing boulders hit buildings behind PEKKAs for massive splash damage.

6. **Witches on flanks.** Deploy 1 Witch on each side to provide skeleton distraction support.

7. **Grand Warden ground.** Deploy Warden with the main push. Tome when entering the core.

8. **Rage through the core.** Drop Rage Spells as PEKKAs and Bowlers enter high-value areas.

9. **Bat Spells on backend.** Once the ground push clears 50-60% of the base, deploy all 4 Bat Spells on the remaining defenses on the opposite side.

10. **Freeze for Bats.** Immediately Freeze the nearest Wizard Tower when deploying Bats. A second Freeze on another splash defense if needed. Never deploy Bats without a Freeze ready.

### When to Use

- Best against bases with splash defenses concentrated on one side
- Strong when you can clearly identify a "push side" vs "bat side"
- PEKKAs handle the Monolith better than Golems (fewer HP means less percentage damage)
- Avoid against bases with Wizard Towers evenly spread across the layout

---

## Strategy 6: Sui LaLo (Lava Hound + Balloon)

LaLo at TH16 follows the same principles as higher Town Hall levels — sacrifice heroes to eliminate key defenses, then sweep the base with Lava Hounds and Balloons. At TH16, the Monolith adds an air-targeting threat that must be accounted for.

![Bowler troop](${images.blog["th16-bowler"]})

### Army Composition

| Troop | Quantity | Role |
|-------|----------|------|
| Lava Hound | 4 | Air tank |
| Balloon | 22 | Main damage |
| Ice Golem | 2 | Kill squad tank |
| Wizard | 3 | Kill squad funnel |
| Minion | 5 | Cleanup |

### Spells

| Spell | Quantity | Purpose |
|-------|----------|---------|
| Haste Spell | 5 | Speed up Balloons |
| Rage Spell | 1 | Kill squad boost |
| Freeze Spell | 2 | Disable Infernos during LaLo |
| Poison Spell | 1 | CC troops |

### Hero Equipment

- **Barbarian King:** Rage Vial + Earthquake Boots
- **Archer Queen:** Giant Arrow + Healer Puppet
- **Grand Warden:** Eternal Tome (air mode) + Life Gem
- **Royal Champion:** Seeking Shield + Hog Rider Puppet

### Step-by-Step Deployment

1. **Plan the kill squad.** Identify 1-2 Air Defenses, the Eagle Artillery, or Monolith that your heroes need to take out. Choose an entry side where these are reachable.

2. **Ice Golems + King.** Deploy Ice Golems to tank, then Barbarian King behind. Use Wizards for funnel.

3. **Queen for snipe.** Deploy Archer Queen once funneled. Use Giant Arrow to snipe the Eagle, Air Defense, or Monolith.

4. **Rage heroes + Poison CC.** Rage the hero kill squad. Poison enemy CC troops when they emerge.

5. **Royal Champion on different angle.** Send RC to eliminate another Air Defense or key defense from a different side.

6. **Start LaLo.** Deploy 1 Lava Hound per remaining Air Defense. Lava Hounds go first, then Balloons follow.

7. **Surgical Balloons.** Deploy 2-3 Balloons per defense, sweeping clockwise or counterclockwise around the base. Do not mass deploy.

8. **Haste ahead of path.** Drop Haste Spells 3-4 tiles ahead of where your Balloons are heading.

9. **Grand Warden air.** Deploy Warden to follow LaLo. Save Tome for Scattershot clusters or when Balloons group near splash.

10. **Freeze remaining threats.** Freeze multi-target Infernos or Wizard Towers that threaten your Balloon groups.

11. **Minions for cleanup.** Deploy Minions on remaining buildings for the 3-star finish.

### When to Use

- Best against bases with accessible key defenses for hero kill squad
- Strong when Air Defenses are spread along the perimeter
- Highest skill ceiling at TH16 — devastating when executed well
- Avoid against centralized, unreachable Air Defenses

---

## Hero Equipment Guide for TH16

### Barbarian King

| Equipment | When |
|-----------|------|
| Rage Vial | Default — used in almost every strategy |
| Giant Gauntlet | When King needs to survive heavy tanking |
| Earthquake Boots | Kill squad strategies needing wall access |

### Archer Queen

| Equipment | When |
|-----------|------|
| Healer Puppet | Default — self-sustain for maximum snipe value |
| Giant Arrow | Kill squad — essential for sniping Eagle/Monolith/AD |
| Frozen Arrow | Niche — freeze + snipe a specific target |

### Grand Warden

| Equipment | When |
|-----------|------|
| Eternal Tome | Always — invincibility is irreplaceable |
| Healing Tome | Ground strategies (Smash, GoBoWitch, Hybrid) |
| Life Gem | Air strategies (LaLo, E-Drag) |

### Royal Champion

| Equipment | When |
|-----------|------|
| Seeking Shield | Always — the shield snipe defines her role |
| Hog Rider Puppet | Default second — extra defense targeting |

---

## Dealing with the Monolith

The Monolith is the defining defense at TH16. It deals percentage-based damage, meaning high-HP troops lose HP faster than you might expect. Here is how to handle it:

- **In Smash strategies:** Use Earthquake Spells to open the core so your troops reach the Monolith faster. Freeze it when your main group is in range. Do not let troops sit under Monolith fire without Heal or Freeze support.
- **In Hybrid:** Include the Monolith in your kill squad targets. If the Queen can snipe it with Giant Arrow, the rest of the attack becomes much easier.
- **In LaLo:** Target the Monolith with your hero kill squad. The Monolith targets air troops too, and its percentage damage makes Lava Hounds melt faster than expected.
- **In E-Drag:** Freeze the Monolith when your E-Drags are in range. E-Drags have high HP but the Monolith shreds them with percentage damage.
- **In PEKKABoBat:** PEKKAs handle the Monolith better than Golems because they have lower total HP, meaning the percentage damage is less devastating. Still Freeze it for safety.

---

## Common TH16 Mistakes

1. **Ignoring the Monolith** — The Monolith is not just another defense. Its percentage damage punishes any troop that lingers in range. Always have a plan for it.

2. **Bad funneling** — At TH16, one misplaced troop can cause your entire army to walk around the base. Invest 30-45 seconds into creating a wide funnel before committing.

3. **Early Warden Tome** — Save the Tome for the core, not the perimeter. The core is where damage concentrates most.

4. **Wrong Inferno counter** — Single-target Infernos are countered by skeleton swarms (Witches). Multi-target Infernos require Freeze Spells. Know which type the base uses before choosing your strategy.

5. **Bat deployment without Freeze** — Bats die instantly to Wizard Towers. Always have a Freeze ready when deploying Bat Spells.

6. **Not checking Spell Tower** — The Spell Tower at TH16 can hold Rage (dangerous if it speeds up defenses near your troops) or Poison (kills your small troops). Check where it is and plan around it.

7. **Neglecting Royal Champion** — The RC is one of the most powerful units at TH16. Deploy her intentionally to snipe key defenses, not as an afterthought.

---

## Best TH16 Bases to Practice Against

The best way to improve at TH16 attacks is practice. Browse our [TH16 base layout collection](/clash-of-clans/bases/th/16) to find war, trophy, farming, and CWL bases you can copy and practice against in Friendly Challenges.

Focus on practicing against:

- **Anti-3 War Bases** — Designed to prevent 3-stars with tricky pathing
- **Ring Bases** — Force troops to circle instead of pushing through
- **Asymmetrical Bases** — Require different attack angles than mirrored layouts
- **Anti-Root Rider Bases** — Specifically designed with spread compartments to counter Root Rider Smash

---

## Frequently Asked Questions

**What is the best TH16 attack strategy?**

Root Rider Smash is the most consistent TH16 strategy in 2026. It works against the widest range of bases and has the highest average 3-star rate. For skilled attackers, Hybrid and LaLo offer even higher potential against specific base types.

**Is GoBoWitch still good at TH16?**

Yes. GoBoWitch is one of the most reliable TH16 strategies, especially for CWL. Its straightforward deployment makes it forgiving for less experienced attackers while still delivering 3-stars against many base designs.

**How do I deal with the Monolith at TH16?**

The Monolith deals percentage-based HP damage. Freeze it when your main army is in range, include it in your kill squad targets if possible, or avoid lingering troops near it. In Hybrid, the Queen with Giant Arrow can snipe it from the kill squad side.

**What Siege Machine should I use at TH16?**

Log Launcher for ground strategies (breaks walls on a path to the core), Stone Slammer for E-Drag (tanks air while heading to the center), and Siege Barracks for Hybrid (extra troops from a different angle). Wall Wrecker is also viable for GoBoWitch.

**Should I use Bat Spells at TH16?**

Bat Spells are excellent at TH16 in PEKKABoBat and Yeti Smash strategies. The key rule: always identify where Wizard Towers are and always have a Freeze ready when deploying Bats. Without Freeze protection, Bats are worthless.

**What is the easiest TH16 attack?**

Electro Dragon Spam is the easiest to execute. Line deployment with Rage Spells requires minimal real-time decision making. GoBoWitch is also beginner-friendly with a straightforward deployment sequence.

---

TH16 is the proving ground where good attackers become great ones. Master Root Rider Smash for consistency, learn Hybrid for precision, and practice LaLo for the hardest bases. Check out our [TH16 base layouts](/clash-of-clans/bases/th/16) for practice targets, and read our [TH17](/clash-of-clans/guides/best-th17-attack-strategies-2026) and [TH18](/clash-of-clans/guides/best-th18-attack-strategies-2026) guides when you are ready to level up.

**Time to dominate TH16, Chief.**
    `.trim(),
  },
  {
    slug: "best-army-compositions-every-town-hall-level",
    title: "Best Army Compositions for Every Town Hall Level 2026",
    description:
      "The complete guide to the best army compositions for every Town Hall level in Clash of Clans 2026. From TH7 to TH18, find the best war, farming, and trophy pushing armies for your level.",
    category: "Army Guide",
    date: "2026-03-17",
    readTime: "28 min read",
    image: images.blog["army-comp-featured"],
    content: `
Choosing the right army composition is one of the most important decisions you make in every Clash of Clans attack. The wrong army against the wrong base means a guaranteed fail, while the right composition can make even difficult bases look easy. But with dozens of troops, spells, and hero equipment combinations available, knowing what works best at your Town Hall level can be overwhelming.

This guide covers the **best army compositions for every Town Hall level** from TH7 to TH18. For each level, you will find the top war army, the best farming army, and a trophy pushing option — with full troop counts, spell loadouts, and tips on when to use each one.

---

## How to Read This Guide

For each Town Hall level, we list:

- **Best War Army** — The composition most likely to 3-star in clan wars
- **Best Farming Army** — The cheapest and fastest army for collecting resources
- **Best Trophy Army** — The army that wins the most attacks for trophy pushing

All compositions include Clan Castle (CC) troop recommendations where applicable. Spell counts assume max spell capacity for that Town Hall level.

---

## TH7 — Best Armies

Town Hall 7 is where Clash of Clans starts to get interesting. You unlock Dragons, the Barbarian King, and Dark Elixir troops.

![Barbarian troop](${images.blog["army-barbarian"]})

### Best War Army: Mass Dragon

| Troop | Quantity |
|-------|----------|
| Dragon | 10 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 3 |

**CC:** Balloons or Dragon

**How to use:** Deploy all Dragons in a line from one side. Drop Rage Spells as they move through the base. At TH7, mass Dragon is almost unbeatable — Air Defenses cannot handle 10 Dragons.

### Best Farming Army: Barch (Barbarian + Archer)

| Troop | Quantity |
|-------|----------|
| Barbarian | 100 |
| Archer | 100 |

**How to use:** Find dead bases with full collectors. Deploy Barbarians in a line to tank, then Archers behind them to collect from exposed collectors. Cheap, fast training, and gets the job done.

### Best Trophy Army: Mass Dragon

Same as war army. At TH7, Dragons dominate everything.

---

## TH8 — Best Armies

TH8 unlocks Golems, Valkyries, P.E.K.K.A, and the powerful GoWiPe strategy. You also get Dark Spells.

### Best War Army: GoWiPe

| Troop | Quantity |
|-------|----------|
| Golem | 2 |
| Wizard | 14 |
| P.E.K.K.A | 3 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 2 |
| Heal Spell | 1 |
| Poison Spell | 1 |

**CC:** P.E.K.K.A or Valkyrie

**How to use:** Deploy Golems to tank, Wizards behind to funnel, then P.E.K.K.As through the center. Rage and Heal as they push through the core. Poison enemy CC troops.

### Best Farming Army: Barch

| Troop | Quantity |
|-------|----------|
| Barbarian | 100 |
| Archer | 100 |

Still the most efficient farming army. Fast training, zero Dark Elixir cost.

### Best Trophy Army: DragLoon

| Troop | Quantity |
|-------|----------|
| Dragon | 9 |
| Balloon | 8 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 3 |
| Poison Spell | 1 |

**How to use:** Deploy Dragons to tank, Balloons behind targeting Air Defenses. Rage through the core.

---

## TH9 — Best Armies

TH9 is a major power spike. You unlock the Archer Queen, Lava Hounds, Baby Dragons, Witch, and Jump Spell. This opens up GoWiWi, LaLo, and Queen Walk strategies.

### Best War Army: GoWiWi (Golem + Witch + Wizard)

| Troop | Quantity |
|-------|----------|
| Golem | 2 |
| Witch | 4 |
| Wizard | 12 |
| Archer | 5 |
| Wall Breaker | 4 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 1 |
| Heal Spell | 2 |
| Jump Spell | 1 |
| Poison Spell | 1 |

**CC:** Golem or Bowler

**How to use:** Golems tank the front, Wizards funnel, Witches spawn skeletons behind. Jump into the core, Rage for damage, Heal through splash.

### Best Farming Army: GiBarch

| Troop | Quantity |
|-------|----------|
| Giant | 16 |
| Barbarian | 40 |
| Archer | 80 |
| Wall Breaker | 4 |

| Spell | Quantity |
|-------|----------|
| Heal Spell | 2 |

**How to use:** Giants tank defenses, Wall Breakers open compartments, Barch grabs resources. Heal Giants when needed.

### Best Trophy Army: LaLo (Lava Hound + Balloon)

| Troop | Quantity |
|-------|----------|
| Lava Hound | 2 |
| Balloon | 22 |
| Minion | 10 |

| Spell | Quantity |
|-------|----------|
| Haste Spell | 4 |
| Rage Spell | 1 |
| Poison Spell | 1 |

**CC:** Lava Hound

**How to use:** Use heroes to take out one Air Defense, deploy Lava Hounds toward remaining ADs, surgical Balloons behind. Haste to speed them along. Minions for cleanup.

---

## TH10 — Best Armies

TH10 unlocks Inferno Towers on defense and Miners on offense. The Siege Machine donation system becomes available for receiving from TH12+ clanmates.

### Best War Army: GoBoWitch

| Troop | Quantity |
|-------|----------|
| Golem | 2 |
| Bowler | 10 |
| Witch | 5 |
| Wizard | 3 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 2 |
| Heal Spell | 1 |
| Jump Spell | 1 |
| Freeze Spell | 1 |
| Poison Spell | 1 |

**CC:** Siege Machine (Wall Wrecker) + Bowlers

**How to use:** Golems tank, Bowlers and Witches push through with Jump and Rage. Freeze Infernos. The Wall Wrecker opens a path straight to the core.

### Best Farming Army: Mass Miner

| Troop | Quantity |
|-------|----------|
| Miner | 32 |
| Wizard | 3 |

| Spell | Quantity |
|-------|----------|
| Heal Spell | 4 |
| Poison Spell | 1 |

**How to use:** Deploy all Miners in a group from one side. Pre-place Heal Spells along their path. Miners burrow underground and self-heal, making this incredibly efficient.

### Best Trophy Army: Queen Walk + Miners

| Troop | Quantity |
|-------|----------|
| Healer | 5 |
| Miner | 22 |
| Wizard | 3 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Heal Spell | 3 |
| Rage Spell | 1 |
| Freeze Spell | 1 |
| Poison Spell | 1 |

**How to use:** Queen Walk one side to create a funnel and take value. Deploy Miners on the other side with Heals. Rage the Queen if she takes heavy fire.

---

## TH11 — Best Armies

TH11 unlocks the Grand Warden, Eagle Artillery, and Electro Dragon. The Warden changes everything — his Eternal Tome ability makes army groups temporarily invincible.

![Electro Dragon troop](${images.blog["army-electro-dragon"]})

### Best War Army: E-Drag + Loon

| Troop | Quantity |
|-------|----------|
| Electro Dragon | 6 |
| Balloon | 10 |
| Baby Dragon | 1 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 3 |
| Freeze Spell | 3 |

**CC:** Stone Slammer + E-Drag

**How to use:** Baby Dragon + heroes funnel the sides. Deploy E-Drags in a line, Balloons behind targeting defenses. Stone Slammer goes to the core. Rage the chain lightning, Freeze Air Defenses and Infernos. Warden Tome when Eagle fires.

### Best Farming Army: Sneaky Goblin

| Troop | Quantity |
|-------|----------|
| Sneaky Goblin | 35 |
| Jump Spell | 2 |
| Haste Spell | 2 |
| Earthquake Spell | 2 |

**How to use:** Sneaky Goblins are invisible for the first seconds after deployment. Drop them in waves targeting resource storages and the Town Hall. Jump or Earthquake to access deeper storage compartments. Fastest loot in the game.

### Best Trophy Army: GoWitch + Bat

| Troop | Quantity |
|-------|----------|
| Golem | 2 |
| Witch | 8 |
| Ice Golem | 1 |
| Bowler | 4 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 1 |
| Heal Spell | 1 |
| Freeze Spell | 3 |
| Bat Spell | 3 |

**CC:** Log Launcher + Yeti

**How to use:** Ground push with Golems, Witches, and Bowlers through one side. Warden Tome for the core. Deploy Bat Spells on the opposite side with Freeze support on Wizard Towers.

---

## TH12 — Best Armies

TH12 unlocks Siege Machines (you can build your own), Yeti, and the Giga Tesla on the Town Hall. Having your own Siege Machines is a massive power boost.

### Best War Army: Yeti Smash

| Troop | Quantity |
|-------|----------|
| Yeti | 7 |
| Witch | 6 |
| Ice Golem | 2 |
| Healer | 2 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 2 |
| Heal Spell | 1 |
| Freeze Spell | 3 |
| Bat Spell | 2 |

**CC:** Log Launcher + Yeti

**How to use:** Ice Golems tank, Yetis and Witches push through with Rage. Healers sustain the push. Warden Tome in the core. Bat Spells for backend cleanup with Freeze on Wizard Towers.

### Best Farming Army: Sneaky Goblin + Super Wall Breaker

| Troop | Quantity |
|-------|----------|
| Sneaky Goblin | 30 |
| Super Wall Breaker | 6 |

| Spell | Quantity |
|-------|----------|
| Jump Spell | 3 |
| Haste Spell | 3 |

**How to use:** Super Wall Breakers open compartments, Sneaky Goblins dive in for resources. Extremely fast and efficient.

### Best Trophy Army: Hybrid (Hog + Miner)

| Troop | Quantity |
|-------|----------|
| Hog Rider | 16 |
| Miner | 10 |
| Ice Golem | 2 |
| Wizard | 3 |
| Archer | 3 |

| Spell | Quantity |
|-------|----------|
| Heal Spell | 5 |
| Rage Spell | 1 |
| Poison Spell | 1 |

**CC:** Siege Barracks or Log Launcher

**How to use:** Kill squad with heroes to take out key defenses. Deploy Hog/Miner pack on the opposite side with Heal Spells. Warden walks with the Hybrid pack.

---

## TH13 — Best Armies

TH13 unlocks the Royal Champion — the fourth hero. Having 4 heroes changes the game entirely. You also get the Scattershot defense and access to more powerful troop levels.

![PEKKA troop](${images.blog["army-pekka"]})

### Best War Army: GoBoWitch + RC

| Troop | Quantity |
|-------|----------|
| Golem | 2 |
| Bowler | 8 |
| Witch | 6 |
| Ice Golem | 1 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 2 |
| Heal Spell | 1 |
| Jump Spell | 1 |
| Freeze Spell | 2 |
| Poison Spell | 1 |

**CC:** Log Launcher + Yeti

**How to use:** Standard GoBoWitch push with the addition of the Royal Champion on a separate angle. RC snipes key defenses with her Seeking Shield while the main army pushes through.

### Best Farming Army: Sneaky Goblin

Same as TH11-12. Still the fastest resource collector.

### Best Trophy Army: Hybrid

Same as TH12 Hybrid but with the Royal Champion adding a third attack angle. RC goes to a separate side to snipe defenses the Hybrid pack would otherwise miss.

---

## TH14 — Best Armies

TH14 adds the 6th Builder (from Builder Base), upgraded hero pets, and stronger troop levels. Bases are more fortified but your offensive tools are significantly more powerful.

### Best War Army: Super Witch Smash

| Troop | Quantity |
|-------|----------|
| Super Witch | 5 |
| Ice Golem | 3 |
| Healer | 4 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 3 |
| Heal Spell | 1 |
| Freeze Spell | 2 |
| Earthquake Spell | 4 |

**CC:** Log Launcher + Yeti

**How to use:** Earthquake the core. Ice Golems tank, Super Witches spawn Big Boys that deal massive damage. Healers keep the push alive. Rage through the center. Warden Tome for concentrated fire.

### Best Farming Army: Sneaky Goblin + Super Wall Breaker

Still the king of farming efficiency at TH14.

### Best Trophy Army: Root Rider Smash

Root Riders become available at TH15, but TH14 players use a Yeti Bowler variation:

| Troop | Quantity |
|-------|----------|
| Yeti | 8 |
| Bowler | 6 |
| Ice Golem | 2 |
| Healer | 2 |
| Archer | 4 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 2 |
| Heal Spell | 1 |
| Freeze Spell | 2 |
| Bat Spell | 4 |

---

## TH15 — Best Armies

TH15 unlocks Root Riders — the game-changing troop that redefined the meta. Root Riders ignore walls and deal massive damage, making them the core of most strategies from TH15 onward.

### Best War Army: Root Rider Smash

| Troop | Quantity |
|-------|----------|
| Root Rider | 7 |
| Witch | 6 |
| Ice Golem | 2 |
| Healer | 2 |
| Archer | 5 |

| Spell | Quantity |
|-------|----------|
| Rage Spell | 3 |
| Heal Spell | 1 |
| Freeze Spell | 2 |
| Earthquake Spell | 4 |

**How to use:** Earthquake the core, funnel with heroes, Root Riders + Witches push through. Rage the core, Freeze Infernos. This is the start of the Root Rider era.

### Best Farming Army: Sneaky Goblin

Unchanged. Sneaky Goblins dominate farming at every TH level once unlocked.

### Best Trophy Army: Hybrid

| Troop | Quantity |
|-------|----------|
| Hog Rider | 18 |
| Miner | 10 |
| Ice Golem | 2 |
| Wizard | 3 |

| Spell | Quantity |
|-------|----------|
| Heal Spell | 5 |
| Rage Spell | 1 |
| Poison Spell | 1 |

Hybrid with all 4 heroes and RC providing a third attack angle remains one of the cleanest trophy pushing strategies.

---

## TH16 — Best Armies

TH16 adds the Monolith defense and hero equipment system. See our full [TH16 Attack Strategies guide](/clash-of-clans/guides/best-th16-attack-strategies-2026) for detailed breakdowns.

![Bowler troop](${images.blog["army-bowler"]})

### Best War Army: Root Rider Smash

Same core composition as TH15 but with max-level troops and hero equipment. The Monolith requires Freeze or kill squad planning.

### Best Farming Army: Sneaky Goblin

Same as previous levels.

### Best Trophy Army: Hybrid or PEKKABoBat

Both are strong at TH16. Hybrid for spread bases, PEKKABoBat for bases where you can split ground push and bat cleanup.

---

## TH17 — Best Armies

TH17 brings all 4 heroes to near-max levels with full equipment access. See our [TH17 Attack Strategies guide](/clash-of-clans/guides/best-th17-attack-strategies-2026) for full details.

### Best War Army: Root Rider Smash

The dominant strategy continues. Full equipment access makes the push even more devastating.

### Best Farming Army: Sneaky Goblin

Still unmatched for farming efficiency.

### Best Trophy Army: Sui LaLo

At TH17, skilled LaLo attackers can 3-star bases that ground strategies struggle with.

---

## TH18 — Best Armies

TH18 introduces the Spirit Fox — the fifth hero. See our [TH18 Attack Strategies guide](/clash-of-clans/guides/best-th18-attack-strategies-2026) for complete breakdowns of all strategies.

![Root Rider troop](${images.blog["army-root-rider"]})

### Best War Army: Root Rider Smash

Root Rider Smash with 5 heroes and max equipment is the most consistent 3-star strategy at TH18.

### Best Farming Army: Sneaky Goblin

Sneaky Goblins remain the best farming army at every level from TH11 onward.

### Best Trophy Army: Hydra (E-Drag + Root Rider)

The Hydra strategy combines air and ground for devastating multi-angle attacks in Legend League.

---

## Universal Farming Tips

No matter your Town Hall level, these farming principles apply:

- **Use cheap armies.** Barch (TH7-10) and Sneaky Goblins (TH11-18) cost a fraction of war armies and train in minutes.
- **Target dead bases.** Look for bases with full collectors — gold and purple bubbles visible on collectors and drills.
- **Drop trophies if needed.** Lower leagues (Gold, Crystal) have more dead bases with exposed loot.
- **Farm during events.** Supercell events often boost loot or reduce training costs.
- **Always have an army ready.** Start training your next army before attacking so there is no downtime.

---

## How to Choose the Right Army

Picking the right army depends on three factors:

1. **Your goal** — War 3-star, farming loot, or pushing trophies each require different compositions.
2. **The base layout** — Compact bases favor Smash strategies. Spread bases favor Hybrid or LaLo. Clustered buildings favor E-Drags.
3. **Your skill level** — Start with simpler strategies (Smash, E-Drag) and work up to Hybrid and LaLo as you improve your funneling and spell timing.

**General rule:** When in doubt, use Root Rider Smash (TH15+) or GoWiPe/GoBoWitch (TH8-14). These strategies are the most forgiving and work against the widest range of bases.

---

## Frequently Asked Questions

**What is the best army in Clash of Clans 2026?**

Root Rider Smash is the best overall army from TH15 to TH18. For lower Town Hall levels, Mass Dragon (TH7), GoWiPe (TH8), GoWiWi (TH9), and GoBoWitch (TH10-14) are the top picks.

**What is the best farming army?**

Barch (Barbarian + Archer) from TH7-10, and Sneaky Goblins from TH11-18. Both are cheap, train fast, and grab maximum resources with minimal effort.

**Is LaLo better than Root Rider Smash?**

LaLo has a higher skill ceiling — a perfect LaLo attack can 3-star bases that Smash cannot. But Root Rider Smash is more consistent and forgiving. Use Smash as your default and LaLo for bases where ground strategies struggle.

**What CC troops should I request?**

For war: Yeti (ground strategies) or Electro Dragon (air strategies) in a Siege Machine. For farming: anything is fine — farming armies do not rely on CC.

**How important are spells?**

Extremely important. Spells are often the difference between a 2-star and a 3-star. Learn when to Rage (entering the core), Heal (through splash zones), Freeze (on Infernos), and Haste (ahead of Balloons).

**Should I upgrade troops or spells first?**

Always upgrade your primary war army troops first. If you use Root Rider Smash, prioritize Root Rider, Witch, and Rage Spell upgrades. Then upgrade your farming troops (Sneaky Goblin, Barbarian, Archer).

---

Find the perfect base layout for your Town Hall level in our [base layout collection](/clash-of-clans/bases), and check out our TH-specific attack guides for detailed strategy breakdowns:

- [TH16 Attack Strategies](/clash-of-clans/guides/best-th16-attack-strategies-2026)
- [TH17 Attack Strategies](/clash-of-clans/guides/best-th17-attack-strategies-2026)
- [TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies-2026)

**Now go build the perfect army, Chief.**
    `.trim(),
  },
  {
    slug: "how-to-max-your-base-fast-f2p-guide",
    title: "How to Max Your Base Fast — F2P Guide 2026",
    description:
      "The ultimate free-to-play guide to maxing your Clash of Clans base in 2026. Learn the fastest upgrade order, resource management, magic item usage, and time-saving strategies for every Town Hall level — no gems required.",
    category: "Progression",
    date: "2026-03-18",
    readTime: "22 min read",
    image: images.blog["f2p-guide-featured"],
    content: `
Maxing your base in Clash of Clans as a free-to-play (F2P) player can feel like it takes forever. With upgrade times stretching into weeks at higher Town Hall levels and resource costs in the hundreds of millions, it is easy to wonder whether it is even possible without spending money.

The good news: **it is absolutely possible**, and with the right strategy, you can max your base significantly faster than most players — including many who spend money but spend it poorly. Supercell has added so many free progression tools (Clan Games, CWL Medals, Raid Medals, Season Challenges, events) that smart F2P players can keep pace with moderate spenders.

This guide covers the **exact strategies, upgrade orders, and habits** that will help you max every Town Hall level as efficiently as possible — without spending a single gem on resources.

---

## The Golden Rules of F2P Progression

Before diving into specifics, these five rules should guide every decision you make:

![Builder working on upgrade](${images.blog["f2p-builder"]})

**1. Never let builders sleep.** Every idle builder is wasted time. If a builder finishes and you do not have resources to start the next upgrade, you have planned poorly. Always know what your next 3-5 upgrades will be.

**2. Never let your laboratory idle.** The lab takes longer to complete than building upgrades at most TH levels. Start your most important research immediately after upgrading the lab.

**3. Max before upgrading your Town Hall.** Rushing your Town Hall means weaker troops, weaker defenses, and a loot penalty when attacking lower-level bases. The only exception is strategic rushing (covered below).

**4. Prioritize offense over defense.** Stronger troops mean more loot from attacks, which funds everything else. A maxed offense with weak defenses is always better than the reverse.

**5. Use every free resource the game gives you.** Clan Games, CWL medals, Raid Medals, Season Challenges, events, and obstacles — all of these add up massively over time.

---

## Step 1: Get 6 Builders ASAP

| Builders | How to Unlock | Priority |
|----------|--------------|----------|
| Builder 1 | Free (starting) | — |
| Builder 2 | 250 Gems | Immediate |
| Builder 3 | 500 Gems | Week 1 |
| Builder 4 | 1,000 Gems | Week 2-3 |
| Builder 5 | 2,000 Gems | Month 1-2 |
| Builder 6 (O.T.T.O) | Builder Base tasks | Month 3-6 |

The **6th Builder** comes from completing the O.T.T.O Hut tasks in Builder Base. This is one of the most impactful things you can do for your progression. The tasks are:

- Gear Up 3 buildings (Cannon, Archer Tower, Mortar)
- Upgrade Cannon Cart to level 18
- Upgrade Mega Tesla to level 9
- Upgrade Battle Machine to level 30
- Upgrade Builder Hall to level 9

CC: The 6th builder alone saves months of total upgrade time. Prioritize Builder Base O.T.T.O tasks even if you don't enjoy Builder Base.

### Where to Get Free Gems

You need 3,750 gems for builders 2-5. Here is how to get them without paying:

- **Achievements** — Completing achievements like Sweet Victory, Friend in Need, and Gold Grab gives 1,000+ gems total
- **Obstacles** — Clear trees, bushes, and gem boxes for 3-6 gems each. Never remove decorations that block obstacle spawns
- **Gem Mine** — Build it in Builder Base. It generates ~5 gems per day (150/month)
- **Clan Games** — Top tier rewards sometimes include gems
- **Events** — Special events occasionally award gems

How to use: Stop spending gems on ANYTHING except builders. No boosting barracks, no buying resources, no buying shields. Every gem goes toward your next builder until you have all 5.

---

## Step 2: The Optimal Upgrade Order

At every Town Hall level, follow this priority order:

![Laboratory for research](${images.blog["f2p-lab"]})

### Tier 1 — Do These First (Day 1-3)

1. **Clan Castle** — Unlocks stronger war troops and donation capacity
2. **Laboratory** — Start researching immediately
3. **Army Camps** — More troop space = stronger attacks = more loot
4. **Spell Factory / Dark Spell Factory** — More spell slots
5. **Barracks / Dark Barracks** — Unlock new troops (only if new troop is unlocked at this TH)

### Tier 2 — Offense & Resources (Week 1-2)

1. **Heroes** — Keep them upgrading constantly. Heroes should never be idle
2. **New defenses** — Place new buildings first (they are cheap and fast)
3. **Resource collectors** — Higher level collectors generate passive income 24/7
4. **Resource storages** — Only if needed for the next big upgrade cost

### Tier 3 — Defenses (Week 2+)

1. **Clan Castle troops** (war-relevant)
2. **Eagle Artillery / Scattershot / Monolith / Multi-Archer Tower** — High-impact defenses first
3. **Inferno Towers / X-Bows** — Core defenses
4. **Air Defenses / Wizard Towers / Bomb Towers** — Anti-air and splash
5. **Cannons / Archer Towers** — Point defenses last
6. **Traps** — Upgrade between big upgrades
7. **Walls** — Last priority (dump excess resources into walls)

CC: At TH12+, always upgrade your Town Hall weapon (Giga Tesla/Giga Inferno) first — it is one of your strongest defenses and the upgrade is relatively cheap.

---

## Step 3: Hero Upgrade Strategy

Heroes are the **single biggest bottleneck** for F2P players. They take the longest to upgrade and use Dark Elixir, which is the hardest resource to farm.

| Hero | Unlocked At | Max Level (TH18) |
|------|-------------|-------------------|
| Barbarian King | TH7 | 100 |
| Archer Queen | TH9 | 100 |
| Grand Warden | TH11 | 80 |
| Royal Champion | TH13 | 45 |
| Minion Prince | TH17 | 20 |

### The Hero Upgrade Rules

**Rule 1: Never stop upgrading heroes.** If you have the Dark Elixir, start a hero upgrade. Use a Book of Heroes or Hammer of Heroes to skip time if you need them for war.

**Rule 2: Alternate heroes.** Upgrade King → Queen → King → Queen to keep both progressing. At TH11+, add Grand Warden into the rotation (Warden uses Elixir, so it does not compete for Dark Elixir).

**Rule 3: Farm with heroes down.** Many players refuse to attack without heroes. This is the biggest mistake. Farm with mass Sneaky Goblins, Super Barbarians, or Baby Dragons — none of these need heroes. War attacks need heroes, farming does not.

**Rule 4: Use CWL medals on Hammers of Heroes.** A Hammer of Heroes (165 medals) instantly completes a hero upgrade. At TH14+, where hero upgrades take 7+ days, this saves massive time.

---

## Step 4: Resource Farming Strategies

The faster you farm resources, the faster you max. Here are the best farming strategies by TH level:

![Sneaky Goblin — the best farming troop](${images.blog["f2p-sneaky-goblin"]})

### TH7-TH9: Mass Dragons / BARCH

| Strategy | Army | Cost | Best For |
|----------|------|------|----------|
| BARCH | Barbarians + Archers | Very Low | Dead bases, Gold/Elixir |
| Mass Dragons | 10-11 Dragons, Lightning | Medium | Dark Elixir, trophy pushing |
| GiBARCH | Giants + BARCH | Low | Active bases with full collectors |

At lower TH levels, resource costs are low enough that BARCH (mass Barbarians + Archers) is incredibly efficient. Target dead bases with full collectors.

### TH10-TH12: Miners / Baby Dragons

| Strategy | Army | Cost | Best For |
|----------|------|------|----------|
| Mass Miners | 40+ Miners, Heal spells | Medium | Dark Elixir, all resources |
| Baby Dragons | 20+ Baby Dragons | Medium | Dark Elixir farming |
| Sneaky Goblins | Super Goblins + Jump spells | Low | Dead bases, fast farming |

### TH13-TH18: Sneaky Goblins / Super BARCH

| Strategy | Army | Cost | Best For |
|----------|------|------|----------|
| Sneaky Goblins | 80 Sneaky Goblins, Jump + Invis | Very Low | All resources, fastest method |
| Super BARCH | Super Barbs + Super Archers | Low | Dead bases in Legend League |
| Super Miners | 30+ Super Miners, Heal spells | Medium | Dark Elixir, active bases |

CC: Sneaky Goblins are the single best farming troop in the game. At TH13+, use them with Jump Spells and Invisibility Spells to snipe Town Halls, storages, and collectors for massive loot in under 30 seconds per attack.

### Farming Trophy Range

Your trophy range matters for loot quality:

| TH Level | Best Trophy Range | Why |
|----------|-------------------|-----|
| TH7-TH8 | Silver I – Gold III | Dead bases with full collectors |
| TH9-TH10 | Gold I – Crystal III | Mix of dead bases and active loot |
| TH11-TH12 | Crystal I – Master III | Higher loot bonuses, good dead bases |
| TH13-TH15 | Champion III – Titan III | Strong loot bonuses, competitive loot |
| TH16-TH18 | Titan I – Legend League | Maximum loot bonus, strongest bases |

---

## Step 5: Maximize Free Progression Tools

This is where smart F2P players gain the biggest advantage. The game gives you enormous value for free — but only if you actively claim it.

![Clan Games and events](${images.blog["f2p-clan-games"]})

### Clan Games (Monthly)

Clan Games run every month and offer magic items worth hundreds of gems:

- **Always hit the 4,000 point max** — This unlocks all reward tiers
- **Best picks**: Book of Heroes > Book of Building > Book of Spells > Rune of Dark Elixir > Builder Potion
- **Builder Potion** is underrated: it speeds up ALL builders by 9 hours each. With 6 builders, that is 54 hours of total time saved for one potion

### CWL Medals (Monthly)

Clan War League gives medals based on your league and performance:

| CWL League | Medals (8 stars) | Best Purchase |
|------------|-----------------|---------------|
| Champion I+ | 250+ | Hammer of Heroes (165) |
| Master | 150-200 | Hammer of Heroes (165) |
| Crystal | 100-150 | Hammer of Building (120) |
| Gold/Silver | 50-100 | Wall Rings or Book of Heroes |

How to use: If you are TH12+ with hero levels to grind, ALWAYS buy Hammer of Heroes. It is the single best value for CWL medals. At lower TH levels, Builder Potions or Wall Rings give more total value.

### Raid Medals (Weekly)

Clan Capital raids give Raid Medals every weekend:

- **Best purchase**: Research Potion (50 medals, speeds lab by 23 hours) or Builder Potion (30 medals)
- **Avoid**: Buying resources with Raid Medals (terrible value compared to farming)

### Season Challenges (Monthly)

The free Season Pass tier gives:

- Resource rewards (millions of Gold/Elixir/Dark Elixir)
- Magic items (Research Potion, Builder Potion)
- Experience points

How to use: Complete Season Challenges passively while you farm. Never go out of your way — most challenges complete naturally through normal gameplay.

### Events & Special Challenges

Supercell runs frequent events with free rewards:

- **Clan Games events** — Extra magic items
- **Troop events** — Reduced training cost/time
- **Challenge events** — Free gems and magic items
- **Holiday events** — Special obstacles worth gems

---

## Step 6: Walls — The Smart Approach

![Walls are the biggest grind](${images.blog["f2p-wall"]})

Walls are the most expensive upgrade in the game. At TH18, a single wall segment costs 9 million Gold or Elixir. With 350 wall segments, that is over 3 BILLION resources just for walls.

### Wall Upgrade Strategy

**1. Dump excess resources.** When your builders are all busy and your storages are full, spend the overflow on walls. Never let resources sit in full storages — that is loot for attackers.

**2. Upgrade walls last in each TH level.** Focus on buildings and defenses first. Walls should be what you spend excess resources on, not what you save for.

**3. Use Wall Rings wisely.** Wall Rings from Clan Games and CWL are most valuable at high TH levels where each wall costs millions. Do not waste Wall Rings on walls that cost under 1 million.

**4. Do not let walls hold you back.** If everything else is maxed but your walls are behind, upgrade your Town Hall anyway. Wall levels matter less than troop and defense levels.

---

## Step 7: What NOT to Do (Common F2P Mistakes)

These mistakes cost F2P players weeks or months of progress:

**1. Rushing your Town Hall without maxing troops.** Having TH15 buildings with TH12-level troops means you cannot farm effectively, cannot contribute in war, and face opponents with much stronger defenses.

**2. Wasting gems on resources or boosts.** Every gem spent on anything other than builders is a gem wasted. 500 gems of resources is gone in one upgrade. 500 gems on a builder saves you months.

**3. Not attacking daily.** F2P progression is directly tied to how much you farm. Players who attack 6-10 times daily progress 3-4x faster than players who attack twice a day.

**4. Ignoring Clan Games and CWL.** The free magic items from Clan Games alone save weeks per month. CWL medals buy Hammers that skip 14+ day upgrades. Not participating is leaving massive value on the table.

**5. Upgrading everything evenly.** Do not upgrade all cannons, then all archer towers, then all wizard towers. Instead, follow the priority order in Step 2. Upgrade what matters most first.

**6. Keeping heroes for war instead of upgrading.** Yes, your war attacks will be weaker without heroes. But if you only upgrade heroes between CWL months, a hero that should take 4 months to max will take over a year.

**7. Spending Dark Elixir on troop research before heroes.** Heroes are always the priority for Dark Elixir. Only research Dark Elixir troops when your heroes are upgrading and your storage is full.

---

## Strategic Rushing — An Alternative Approach

While maxing is the traditional advice, **strategic rushing** to TH12-13 has become a legitimate F2P strategy:

### Why Some Players Rush

- **Siege Machines** unlock at TH12. These are game-changing for war and farming
- **Super Troops** unlock at TH11. Sneaky Goblins transform farming speed
- **Higher level collectors** generate more passive income
- **Season Pass rewards** scale with TH level (more resources at higher TH)

### How to Rush Strategically

If you choose to rush, follow these rules:

1. **Max your farming army** at every TH level before upgrading
2. **Max your Clan Castle** at every TH level
3. **Max Army Camps and Spell Factory** before upgrading
4. **Rush heroes to at least 75% of max** before upgrading TH
5. **Skip walls and most defenses** — you will catch up later

CC: Strategic rushing is NOT the same as mindless rushing. A strategic rusher maxes offense and rushes everything else. A mindless rusher upgrades nothing and struggles at every level. Know the difference.

---

## Town Hall-by-Town Hall Time Estimates

Here is how long each TH level takes to fully max as a F2P player with 5-6 builders:

| TH Level | Approx. Time to Max | Key Bottleneck |
|----------|---------------------|----------------|
| TH1-TH6 | 1-2 weeks | Nothing — just play |
| TH7 | 2-3 weeks | Barbarian King, Dark Elixir |
| TH8 | 3-4 weeks | Lab research, walls |
| TH9 | 6-8 weeks | Archer Queen, lab research |
| TH10 | 8-10 weeks | Heroes, Inferno Towers |
| TH11 | 10-14 weeks | Grand Warden, Eagle Artillery |
| TH12 | 12-16 weeks | Giga Tesla, hero levels |
| TH13 | 14-18 weeks | Royal Champion, Scattershot |
| TH14 | 16-20 weeks | Hero levels (80+), Monolith |
| TH15 | 18-22 weeks | Hero levels (90+), new defenses |
| TH16 | 20-24 weeks | Hero levels (95+), walls |
| TH17 | 22-28 weeks | Minion Prince, hero levels |
| TH18 | 24-30+ weeks | Everything (final grind) |

**Total from TH1 to fully maxed TH18: approximately 3-4 years** of active F2P play.

How to use: These estimates assume active daily play with 6 builders and consistent Clan Games/CWL participation. Casual players should expect 50-100% longer timelines.

---

## Daily Checklist for Maximum Progress

Follow this checklist every day to maximize your F2P progression:

1. **Collect resources** from collectors and treasury
2. **Start builder upgrades** — never leave builders idle
3. **Start lab research** — always have something researching
4. **Attack 6-10 times** — farm with a cheap army
5. **Donate troops** — earn XP and help your clan
6. **Request CC troops** — free powerful troops for war attacks
7. **Complete any active events or challenges**
8. **Do your Clan Capital raids** on weekends
9. **Dump excess resources into walls** before logging off

---

## Frequently Asked Questions

**Is it possible to max TH18 as a completely F2P player?**

Yes, absolutely. It takes approximately 3-4 years of active play, but with consistent farming, Clan Games, CWL, and smart upgrade planning, thousands of players have fully maxed without spending any money.

**What is the best use of gems for F2P?**

Builders. All 5 builders should be your first priority for gems. After that, save gems for occasional 1-gem resource boosts during special events or for training potions.

**Should I buy the Gold Pass?**

The Gold Pass is technically not F2P, but if you are willing to spend $5/month, it is by far the best value in the game. The 20% builder boost alone saves months over time. The magic items and resources are a massive bonus.

**How much time per day do I need to spend?**

For optimal progress, 30-60 minutes spread across 3-4 sessions. You need to collect resources, start upgrades, and farm 6-10 attacks. You can do a session in 10-15 minutes.

**Should I stay in a lower league to find easier bases?**

Not necessarily. Higher leagues have better loot bonuses that often outweigh the difficulty increase. Find the sweet spot for your TH level using the trophy range table above.

**When should I upgrade my Town Hall?**

When ALL of these are done: all buildings maxed (or very close), all important troops maxed in the lab, heroes at max level for your TH, and walls at least 80% maxed. The only exception is if you are strategically rushing.

---

Find the perfect base layout for your Town Hall level in our [base layout collection](/clash-of-clans/bases), and check out our other guides:

- [Clash of Clans Beginners Guide 2026](/clash-of-clans/guides/clash-of-clans-beginners-guide-2026)
- [Best Army Compositions for Every TH Level](/clash-of-clans/guides/best-army-compositions-every-town-hall-level)
- [TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies-2026)

**Now go max that base, Chief — no wallet required.**
    `.trim(),
  },
  {
    slug: "best-clan-war-league-strategy-guide",
    title: "Best Clan War League (CWL) Strategy Guide 2026",
    description:
      "The complete Clan War League strategy guide for 2026. Learn CWL matchmaking, roster planning, base selection, attack strategies, medal optimization, and how to push your clan to Champion League.",
    category: "War Strategy",
    date: "2026-03-19",
    readTime: "20 min read",
    image: images.blog["cwl-guide-featured"],
    content: `
Clan War League (CWL) is the most competitive monthly event in Clash of Clans. Every month, clans compete in a round-robin format over 7 days, fighting for league promotions, bonus medals, and bragging rights. Unlike regular clan wars, CWL uses a **no-match weight system** — meaning your war weight does not matter. You face clans in your same league, regardless of base strength.

This makes CWL both exciting and punishing. A well-organized clan with smart strategy can punch above its weight, while a disorganized clan will hemorrhage stars. This guide covers **everything your clan needs** to dominate CWL in 2026 — from roster selection to attack assignments to medal distribution.

---

## How CWL Works

Before diving into strategy, let's make sure the mechanics are clear:

### Format

- **8 clans** are placed in a group within the same league
- Each clan wars against every other clan once (7 wars over 7 days)
- **15v15** format (15 bases per side in most leagues; 30v30 in Champion leagues)
- Each player gets **ONE attack per war** (not two like regular wars)
- Stars and destruction determine war wins. Total stars across all 7 wars determine final placement
- Top 2 clans **promote**, bottom 2 clans **demote**, middle 4 stay

### Leagues & Medal Rewards

| League | Medal Range (8 stars) | Bonus Medals (1st place) |
|--------|----------------------|--------------------------|
| Champion I | 282 | +100 |
| Champion II | 266 | +90 |
| Champion III | 250 | +80 |
| Master I | 218 | +70 |
| Master II | 202 | +60 |
| Master III | 186 | +50 |
| Crystal I | 154 | +40 |
| Crystal II | 138 | +35 |
| Crystal III | 122 | +30 |
| Gold I | 90 | +25 |
| Gold II | 74 | +20 |
| Gold III | 58 | +15 |

CC: Medal rewards are based on stars earned (max 8 per player across all 7 wars) AND league placement. Getting 8 stars is the minimum every participant should aim for.

---

## Step 1: Roster Selection

The roster is the **single most important decision** in CWL. You select 15-30 members (depending on league size) before CWL begins, and you cannot change the roster mid-season.

![Choosing the right roster](${images.blog["cwl-lineup"]})

### Who Should Be on the Roster

**Include:**
- All max or near-max TH players (your strongest attackers)
- Players who attack consistently (reliability > skill)
- Players willing to follow attack assignments
- Lower TH players who need medals (rotate them in on easier matchups)

**Exclude:**
- Players with a history of missing attacks
- Players who refuse to follow assignments
- Inactive members (even if they have strong bases)

### Roster Size Strategy

- **15-player wars**: Select exactly 15 strong attackers if everyone is reliable. Select 17-20 if you need rotation flexibility
- **30-player wars** (Champion leagues): Fill all 30 slots. Use lower THs for the bottom positions
- Always have 2-3 backup players in case someone cannot attack on a given day

CC: A TH15 who attacks every day is more valuable than a TH18 who misses 2 of 7 attacks. Reliability wins CWL, not raw power.

---

## Step 2: Base Lineup Strategy

In CWL, you choose which 15 (or 30) members to put in the war lineup each day. This is different from the roster — you can rotate players in and out of the daily lineup.

### Lineup Principles

**1. Front-load your strongest bases.** Positions 1-5 should always be your highest TH players with the best defenses. These bases face the toughest opponents.

**2. Protect your weakest link.** If you must include a lower TH, put them at position 15 (bottom). The opponent's weakest attacker will likely hit them.

**3. Rotate medal earners.** If a player already has 8 stars (medal cap), consider rotating them out for someone who needs stars. But only do this if it does not weaken your lineup significantly.

**4. Match your lineup to the opponent.** Before each war, scout the enemy clan. If they have a weak bottom half, you can afford to run a lighter lineup.

### War Base Selection

Every player should use a **dedicated CWL base** — not their farming base.

| Base Feature | Why It Matters |
|-------------|----------------|
| Anti-3-star design | CWL is about preventing 3-stars, not stopping attacks entirely |
| Spread out key defenses | Prevents one Freeze/Rage from hitting multiple targets |
| Off-center Town Hall | Makes it harder to Sui Hero the TH for a free 2-star |
| Trapped corners | Punishes lazy attackers who send cleanup troops to corners |
| Anti-Zap spacing | Air Defenses and Infernos spaced to avoid Lightning value |

How to use: Change your CWL base between wars if possible. Opponents can scout your base all day before attacking, so switching bases makes their planning worthless.

---

## Step 3: Attack Assignment Strategy

This is where most clans fail. Without proper attack assignments, you get wasted attacks — strong players hitting weak bases, or everyone piling onto the same target.

![Planning your attacks](${images.blog["cwl-attack"]})

### The Mirror System (Simple but Effective)

The easiest assignment system: **each player hits their mirror** (same position number on the enemy side).

- Player #1 hits Enemy #1
- Player #5 hits Enemy #5
- Player #15 hits Enemy #15

**Pros:** Simple, no confusion, fair
**Cons:** Does not optimize for matchups, weaker players may face hard bases

### The Hit-Down System (Competitive Clans)

Better clans use a **hit-down-one** approach where each player hits one position below their mirror:

- Player #1 hits Enemy #2 (almost guaranteed 3-star)
- Player #2 hits Enemy #3
- Enemy #1 gets 2-starred by your mid-level player

**Why this works:** You sacrifice the top base (likely a 2-star regardless) but gain more guaranteed 3-stars throughout the lineup.

### The Assignment Sheet (Elite Clans)

Top clans use a detailed assignment system:

1. **Leaders scout all 15 enemy bases** before war starts
2. Each base is assigned to the player **best suited to 3-star it**
3. Assignments consider: TH level, army specialty, hero availability, base weakness
4. Each player gets ONE assigned target with a backup in case someone else already hits it

| Player | Primary Target | Backup Target | Army |
|--------|---------------|---------------|------|
| Player 1 | Enemy #3 | Enemy #1 | Root Rider Smash |
| Player 2 | Enemy #2 | Enemy #4 | Hydra |
| Player 3 | Enemy #5 | Enemy #6 | Sui LaLo |

CC: In CWL, every attack matters because each player gets only ONE. A wasted attack (hitting a base someone already 3-starred) can cost you the entire war by 1-2 stars.

---

## Step 4: Best CWL Attack Strategies by TH Level

In CWL, you need **high-percentage 3-star strategies**. Save the risky plays for regular wars.

### TH18 (Top of War)

| Strategy | Difficulty | 3-Star Rate | Best Against |
|----------|-----------|-------------|--------------|
| Root Rider Smash | Medium | 85-90% | Most bases |
| Hydra (Hog + Balloon) | Hard | 80-85% | Open bases |
| Yeti Smash | Medium | 80-85% | Compact bases |
| Blizzard LaLo | Hard | 75-80% | Spread bases |

**Recommended:** Root Rider Smash is the safest and most consistent for CWL. Use 7-8 Root Riders, 3-4 Witches, Rage + Heal + Freeze spells.

### TH16-TH17 (Mid-Top)

| Strategy | Difficulty | 3-Star Rate | Best Against |
|----------|-----------|-------------|--------------|
| Root Rider Smash | Medium | 85-90% | All-around |
| GoBoWitch | Easy | 80-85% | Compact bases |
| Hybrid (Hog/Miner) | Medium | 80-85% | Ring bases |
| E-Drag Spam | Easy | 75-80% | Clustered bases |

### TH13-TH15 (Mid)

| Strategy | Difficulty | 3-Star Rate | Best Against |
|----------|-----------|-------------|--------------|
| Yeti Bowler Smash | Easy | 85% | Most bases |
| Hybrid | Medium | 80-85% | Open bases |
| PEKKABoBat | Medium | 80% | Compact bases |
| Mass Hog | Medium | 75-80% | Anti-ground |

### TH10-TH12 (Bottom)

| Strategy | Difficulty | 3-Star Rate | Best Against |
|----------|-----------|-------------|--------------|
| Zap Dragon | Easy | 90%+ | Any TH10 |
| GoWitch | Easy | 85-90% | TH11-12 |
| Mass Hog | Medium | 85% | Open bases |
| E-Drag | Easy | 80-85% | Clustered |

How to use: Choose ONE strategy and master it. Being great at one army is far better than being mediocre at three. Practice your chosen strategy in Friendly Challenges before CWL starts.

---

## Step 5: CWL Medal Optimization

Medals are the ultimate reward of CWL. Smart medal management is crucial for progression.

![CWL medals and rewards](${images.blog["cwl-medals"]})

### How Medals Are Earned

- **Base medals**: Earned by ALL roster members based on final league placement
- **Star bonus**: 0-8 stars = proportional medals added to base amount
- **Bonus medals**: Clan leaders distribute bonus medals to top performers (usually 1-2 members per war)

### Bonus Medal Distribution

| Method | How It Works | Best For |
|--------|-------------|----------|
| Performance-based | Give bonuses to players with most 3-stars | Competitive clans |
| Rotation | Distribute evenly across CWL months | Casual clans |
| Need-based | Give to players who need Hammers most | Progression-focused clans |
| Hybrid | Performance for top 3, rotation for rest | Balanced clans |

### Best Medal Purchases

| Item | Cost | Value | Priority |
|------|------|-------|----------|
| Hammer of Heroes | 165 | Skips 7-14 day hero upgrade | #1 for TH12+ |
| Hammer of Building | 120 | Skips longest building upgrade | #2 |
| Hammer of Fighting | 120 | Skips longest troop research | #3 |
| Hammer of Spells | 120 | Skips longest spell research | #4 |
| Wall Rings (5) | 50 | Instant 5 wall upgrades | Good at TH15+ |
| Builder Potion | 30 | 9hr boost to all builders | Best value per medal |
| Research Potion | 30 | 23hr boost to lab | Great value |

CC: You can only buy ONE Hammer per type per month. If you have 300+ medals, buy Hammer of Heroes + Hammer of Building. If you have under 165 medals, buy Builder Potions and Research Potions — they give more total value at lower medal counts.

---

## Step 6: Promotion Strategy

Getting promoted means more medals every month going forward. Here is how to push your clan up the leagues.

![Climbing the CWL leagues](${images.blog["cwl-strategy"]})

### Short-Term (This Month)

1. **Win the first 2 wars.** Momentum matters — clans that start strong often stay strong
2. **Never miss an attack.** A missed attack is 3 stars handed to the opponent
3. **Scout before attacking.** Spend 5 minutes studying the base. Identify traps, CC range, and hero positions
4. **Use Clan Chat for coordination.** Call your targets early. Announce when you are attacking. Share replays

### Medium-Term (3-6 Months)

1. **Recruit strong attackers.** One maxed TH18 who 3-stars every war is worth three TH15s
2. **Practice with Friendly Challenges.** Run FC sessions the week before CWL
3. **Track performance.** Keep a simple spreadsheet of each player's stars per CWL month
4. **Cut dead weight.** Remove players who consistently miss attacks or underperform

### Long-Term (Reaching Champion)

1. **Build a deep roster.** Champion League uses 30v30 — you need 30+ strong players
2. **Develop specialists.** Have dedicated LaLo attackers, ground smash players, etc.
3. **Study meta shifts.** When Supercell releases balance changes, adapt your strategies immediately
4. **Network with other clans.** Top clans share strategies and FC opponents

---

## CWL Mistakes That Cost Wars

### Mistake 1: Not Using All Attacks

This is the #1 reason clans lose CWL. Every missed attack is essentially giving the opponent a free 3-star advantage. Even a bad 1-star attack is infinitely better than no attack.

### Mistake 2: Everyone Hitting #1

When the top enemy base looks "easy," three players pile onto it. Now you have 2 wasted attacks and 2 bases at the bottom with no one to hit them. Use assignments.

### Mistake 3: Attacking Too Early

In CWL, you have 24 hours per war. Do not attack in the first hour unless you have scouted the base thoroughly. Wait for clanmates to discuss assignments.

### Mistake 4: Using Unfamiliar Armies

CWL is not the time to try a new army composition you saw on YouTube. Use the army you know best and have practiced. Consistency beats flashiness.

### Mistake 5: Ignoring the Scoreboard

If you are behind by 10 stars, you need 3-stars to catch up. If you are ahead by 15, safe 2-stars are fine. Adjust your risk level based on the war score.

### Mistake 6: Poor CC Troops

In CWL, Clan Castle troops matter. Fill war CCs with strong defensive troops (Super Minion, Headhunter, Ice Golem, Archers). A good CC defense can turn a 3-star into a 1-star.

### Mistake 7: Not Rotating Players

If a player already earned 8 stars (medal cap) and you have roster players sitting out, rotate them in. They will earn zero additional medals while the benched player earns nothing.

---

## CWL Calendar & Planning

### Before CWL (2-3 Days Prior)

- Finalize roster selections
- Ensure all members have CWL war bases set
- Run Friendly Challenge sessions to practice
- Discuss attack assignment system with leadership
- Ensure CC troops are ready

### During CWL (Each War Day)

- Scout opponent bases as soon as war starts
- Assign targets within the first 2 hours
- Coordinate in clan chat — avoid duplicate attacks
- Track stars vs opponent throughout the day
- Ensure all 15 attacks are used before war ends

### After CWL

- Distribute bonus medals fairly
- Review performance — who 3-starred, who struggled
- Identify areas for improvement
- Plan recruitment if roster has gaps
- Spend medals wisely (Hammers > Potions > Wall Rings)

---

## Frequently Asked Questions

**What happens if a player does not attack in CWL?**

Their attack is lost — there is no cleanup mechanic. The war counts with fewer total attacks for your clan, which almost always results in a loss. This is why reliability is the most important factor in roster selection.

**Can I change my war base between CWL wars?**

Yes! You can and should change your war base between each of the 7 wars. Opponents can scout your base during preparation day, so changing it forces them to re-plan.

**How many stars do I need to get maximum medals?**

8 stars across all 7 wars. After 8 stars, additional stars do not increase your personal medal count (but they still help your clan win).

**Is it better to be at the top of a lower league or bottom of a higher league?**

Higher league, always. Even the bottom placement in Master III gives more medals than 1st place in Crystal I. Push for promotion whenever possible.

**Should we run 15v15 or 30v30?**

15v15 is available in all leagues. 30v30 is mandatory in Champion leagues. If you have 30 reliable attackers, 30v30 gives more total medals to your clan. If you struggle to fill 15 reliable slots, stick with 15v15.

**What Clan Castle troops should I use for defense in CWL?**

The best defensive CC in 2026: Super Minion + Headhunter + Ice Golem (for ground support). Super Minion is extremely hard to deal with and shreds hero dives. Headhunter targets enemy heroes directly.

---

Find the perfect war base for CWL in our [base layout collection](/clash-of-clans/bases), and check out our attack guides:

- [TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies-2026)
- [TH17 Attack Strategies](/clash-of-clans/guides/best-th17-attack-strategies-2026)
- [TH16 Attack Strategies](/clash-of-clans/guides/best-th16-attack-strategies-2026)
- [Best Army Compositions](/clash-of-clans/guides/best-army-compositions-every-town-hall-level)

**Now go lead your clan to Champion League, Chief.**
    `.trim(),
  },
  {
    slug: "best-hero-equipment-rankings-2026",
    title: "Best Hero Equipment Rankings 2026 — Complete Tier List",
    description:
      "The definitive hero equipment tier list for Clash of Clans 2026. Rankings for every Barbarian King, Archer Queen, Grand Warden, Royal Champion, and Minion Prince equipment — for war, farming, and trophy pushing.",
    category: "Equipment",
    date: "2026-03-20",
    readTime: "24 min read",
    image: images.blog["hero-equip-featured"],
    content: `
Hero Equipment changed everything in Clash of Clans. Introduced in late 2023, equipment gives each hero **two customizable abilities** that completely alter how they function in battle. The right equipment can turn a mediocre attack into a 3-star, while the wrong equipment can waste your hero entirely.

With dozens of equipment pieces available across all five heroes, choosing the right loadout is overwhelming — especially since equipment costs Ores and Starry Ores to upgrade. This guide provides a **complete tier list** for every piece of hero equipment in 2026, ranked for war, farming, and trophy pushing.

---

## How Hero Equipment Works

### The Basics

- Each hero can equip **2 pieces of equipment** at a time
- Equipment modifies the hero's ability (the ability you activate during battle)
- Equipment is leveled up using **Ores** (Common, Shiny, Glowy, Starry)
- Ores are earned from Clan Games, Season Pass, events, and the Blacksmith
- Equipment comes in two rarities: **Common** (ore-only) and **Epic** (requires Starry Ores)

### Equipment Level Caps

| Equipment Rarity | Max Level | Ore Cost (Total) |
|-----------------|-----------|-------------------|
| Common | 27 | ~2,400 Common Ores |
| Epic | 27 | ~180 Starry Ores + Common Ores |

CC: Epic equipment is significantly harder to max due to Starry Ore requirements. Prioritize upgrading the Epic equipment you actually use before spreading Starry Ores across multiple pieces.

---

## Tier List Overview

We rank equipment across four tiers:

- **S Tier** — Best in class. Use these in almost every situation
- **A Tier** — Excellent. Strong alternatives or situational picks
- **B Tier** — Decent. Works in specific strategies or for farming
- **C Tier** — Weak. Rarely worth using over other options

---

## Barbarian King Equipment

![Barbarian King equipment](${images.blog["hero-equip-king"]})

The Barbarian King is your frontline tank and damage dealer. His equipment determines whether he is a mindless meat shield or a strategic game-changer.

### S Tier

**Giant Gauntlet** (Epic)
- Gives the King a massive HP boost and increased damage during ability
- Makes the King nearly unkillable during his ability
- Essential for Sui Hero strategies where the King dives deep into the base
- Best all-around King equipment for war

How to use: Pair Giant Gauntlet with Rage Vial or Vampstache for maximum Sui Hero value. The King can tank through multi-target Infernos and Eagle Artillery hits.

**Rage Vial** (Common)
- Gives the King a Rage effect during his ability
- Boosts attack speed and movement speed dramatically
- Synergizes perfectly with Giant Gauntlet for devastating dives
- Great for both war and farming

### A Tier

**Vampstache** (Common)
- King heals himself while dealing damage during ability
- Great sustain in prolonged fights
- Excellent for farming where you want the King to survive longer
- Pairs well with Giant Gauntlet for Sui Hero plays

**Earthquake Boots** (Epic)
- King creates earthquake effects while walking during ability
- Damages buildings and walls in a radius around the King
- Excellent for opening compartments without Wall Breakers
- Strong in ground smash strategies

### B Tier

**Barbarian Puppet** (Common)
- Spawns extra Barbarians during ability
- The Barbarians help tank and deal damage
- Decent for farming, weak for war (Barbarians die instantly to splash)

**Spiky Ball** (Epic)
- King throws a spiky ball that deals area damage
- Decent AoE damage but inconsistent targeting
- Outclassed by Giant Gauntlet and Rage Vial in most situations

### C Tier

**Royal Gem** (Common)
- Slight stat boost during ability
- The weakest King equipment — outclassed by everything above
- Only use if you have nothing else unlocked

---

## Archer Queen Equipment

![Archer Queen equipment](${images.blog["hero-equip-queen"]})

The Archer Queen is the most versatile hero in the game. Her equipment choices define whether she is a sniper, a tank killer, or an area damage dealer.

### S Tier

**Frozen Arrow** (Epic)
- Queen's arrows freeze targets during ability
- Freezes defenses she targets, acting like a free Freeze Spell
- Incredible value — saves a spell slot every time she freezes an Inferno or Eagle
- The single best equipment piece in the entire game for war

How to use: Frozen Arrow is mandatory for war attacks at TH14+. The Queen can freeze Infernos, Scattershots, and Eagle Artillery while dealing damage. This replaces a Freeze Spell in your army.

**Healer Puppet** (Common)
- Spawns a Healer that follows the Queen during ability
- Keeps the Queen alive much longer
- Essential for Queen Walk/Queen Charge strategies
- Great in both war and farming

### A Tier

**Invisibility Vial** (Epic)
- Queen becomes invisible during ability
- Can bypass defenses to snipe key targets (Town Hall, Eagle, etc.)
- Extremely powerful in specific strategies (Sui Queen to TH)
- Less consistent than Frozen Arrow but higher ceiling in certain bases

**Giant Arrow** (Common)
- Queen fires a powerful arrow that pierces through buildings
- Deals massive damage in a line
- Great for sniping grouped defenses or the Town Hall
- Strong for farming and trophy pushing

### B Tier

**Seeking Shield** (Epic)
- Provides a shield that blocks incoming damage
- Decent survivability boost but less impactful than Healer Puppet
- Useful when combined with Invisibility Vial for deep dives

**Magic Mirror** (Common)
- Creates a clone of the Queen during ability
- The clone deals decent damage but has low HP
- Outclassed by Frozen Arrow and Healer Puppet in most scenarios

### C Tier

**Archer Puppet** (Common)
- Spawns extra Archers during ability
- Archers are too fragile to provide meaningful value
- Weakest Queen equipment

---

## Grand Warden Equipment

![Grand Warden equipment](${images.blog["hero-equip-warden"]})

The Grand Warden's equipment affects his aura and Eternal Tome ability. The right equipment can protect your entire army or boost its damage output significantly.

### S Tier

**Eternal Tome** (Built-in ability — enhanced by equipment)
- The Warden's base ability grants invincibility to nearby troops
- All equipment modifies how this ability works

**Rage Gem** (Epic)
- Warden's aura provides a Rage effect to nearby troops during ability
- Essentially a free Rage Spell centered on the Warden
- Incredible value in any ground or air attack
- The best Warden equipment for war

How to use: Rage Gem turns the Warden's ability activation into both invincibility AND a Rage Spell. Time it when your main army enters the core for devastating results.

**Life Gem** (Common)
- Warden's aura heals nearby troops during ability
- Acts like a Heal Spell centered on the Warden
- Great for keeping troops alive through splash damage zones
- Excellent in Hybrid and mass Hog attacks

### A Tier

**Healing Tome** (Common)
- Extended healing effect after the Tome expires
- Helps troops survive the transition from invincibility back to normal
- Good fallback if you do not have Rage Gem

**Fireball** (Epic)
- Warden launches a fireball that deals area damage
- Can one-shot grouped Clan Castle troops
- Useful against specific CC compositions (Witches, Archers)
- Situational but powerful when needed

### B Tier

**Lavaloon Puppet** (Common)
- Spawns Lava Pups during ability
- The Pups provide minor tanking and damage
- Only useful in air attacks, outclassed in ground strategies

### C Tier

**Haste Vial** (Common)
- Provides a minor speed boost to nearby troops
- The speed boost is too small to be impactful
- Outclassed by Rage Gem in every situation

---

## Royal Champion Equipment

![Royal Champion equipment](${images.blog["hero-equip-champion"]})

The Royal Champion specializes in diving deep into bases to destroy key defenses. Her equipment determines whether she survives long enough to reach her targets.

### S Tier

**Seeking Shield** (Built-in ability)
- Champion throws her shield, which bounces between defenses
- One of the strongest hero abilities for clearing defense clusters

**Hog Rider Puppet** (Epic)
- Spawns Hog Riders during ability that target defenses
- The Hogs tank for the Champion and deal additional damage
- Best RC equipment for war — provides both tanking and DPS
- Synergizes perfectly with her dive-heavy playstyle

How to use: Deploy the Royal Champion toward a cluster of defenses. When she activates her ability, the Hog Riders spread out and tank hits while she uses Seeking Shield to bounce damage across multiple buildings.

### A Tier

**Rocket Spear** (Epic)
- Champion throws a rocket spear that deals massive single-target damage
- Can one-shot key defenses (Monolith, Scattershot, Eagle)
- Excellent for eliminating high-value targets
- Strong alternative to Hog Rider Puppet

**Haste Vial** (Common)
- Provides a speed boost during ability
- Helps the Champion reach her targets faster
- Decent pairing with Hog Rider Puppet or Rocket Spear

### B Tier

**Royal Gem** (Common)
- Generic stat boost during ability
- Decent but uninspiring
- Use when you do not have Epic equipment unlocked

**Giant Arrow** (Common)
- Fires a piercing arrow during ability
- Less effective on the Champion than on the Queen
- Outclassed by Hog Rider Puppet and Rocket Spear

### C Tier

**Barbarian Puppet** (Common)
- Spawns Barbarians during ability
- Barbarians die instantly at higher TH levels
- Worst RC equipment

---

## Minion Prince Equipment

![Minion Prince equipment](${images.blog["hero-equip-minion"]})

The Minion Prince (unlocked at TH17) is the newest hero. His equipment options are still limited but growing.

### S Tier

**Dark Orb** (Epic)
- Minion Prince fires a dark orb that deals area damage
- The orb has a large radius and hits both ground and air troops
- Best Minion Prince equipment for war
- Strong in both offensive and defensive scenarios

### A Tier

**Minion Puppet** (Common)
- Spawns extra Minions during ability
- Minions provide decent air support DPS
- Good pairing with Dark Orb

**Rage Vial** (Common)
- Boosts attack speed during ability
- Solid all-around choice
- Good for farming and war

### B Tier

**Haste Vial** (Common)
- Speed boost during ability
- Less impactful than Rage Vial
- Only use if Rage Vial is not available

---

## Best Equipment Loadouts by Strategy

Here are the recommended equipment combinations for the most popular attack strategies:

### Root Rider Smash (TH16-18)

| Hero | Equipment 1 | Equipment 2 |
|------|------------|------------|
| Barbarian King | Giant Gauntlet | Rage Vial |
| Archer Queen | Frozen Arrow | Healer Puppet |
| Grand Warden | Rage Gem | Life Gem |
| Royal Champion | Hog Rider Puppet | Rocket Spear |

### LaLo / Sui LaLo (TH13-18)

| Hero | Equipment 1 | Equipment 2 |
|------|------------|------------|
| Barbarian King | Giant Gauntlet | Vampstache |
| Archer Queen | Frozen Arrow | Healer Puppet |
| Grand Warden | Rage Gem | Healing Tome |
| Royal Champion | Hog Rider Puppet | Haste Vial |

### Hybrid — Hog/Miner (TH12-17)

| Hero | Equipment 1 | Equipment 2 |
|------|------------|------------|
| Barbarian King | Giant Gauntlet | Rage Vial |
| Archer Queen | Healer Puppet | Giant Arrow |
| Grand Warden | Life Gem | Healing Tome |
| Royal Champion | Hog Rider Puppet | Haste Vial |

### Queen Charge (Any TH with Queen)

| Hero | Equipment 1 | Equipment 2 |
|------|------------|------------|
| Archer Queen | Healer Puppet | Frozen Arrow |
| Grand Warden | Life Gem | Rage Gem |

CC: For Queen Charge strategies, Healer Puppet + Frozen Arrow is non-negotiable. The Healer keeps her alive while Frozen Arrow lets her disable defenses as she walks through the base.

### Farming (All TH Levels)

| Hero | Equipment 1 | Equipment 2 |
|------|------------|------------|
| Barbarian King | Vampstache | Rage Vial |
| Archer Queen | Giant Arrow | Healer Puppet |
| Grand Warden | Life Gem | Healing Tome |
| Royal Champion | Haste Vial | Royal Gem |

---

## Equipment Upgrade Priority

Starry Ores are the biggest bottleneck. Here is the order to upgrade your Epic equipment:

### Priority 1 (Max These First)

1. **Frozen Arrow** (Queen) — Best equipment in the game
2. **Giant Gauntlet** (King) — Essential for Sui Hero
3. **Rage Gem** (Warden) — Free Rage on ability activation
4. **Hog Rider Puppet** (RC) — Best RC equipment

### Priority 2 (Upgrade Next)

5. **Invisibility Vial** (Queen) — Situational but powerful
6. **Earthquake Boots** (King) — Strong in ground strategies
7. **Rocket Spear** (RC) — One-shot key defenses
8. **Dark Orb** (Minion Prince) — Best MP equipment

### Priority 3 (When Resources Allow)

9. **Fireball** (Warden) — Anti-CC utility
10. **Spiky Ball** (King) — Niche AoE option
11. **Seeking Shield** (Queen) — Defensive option

### Common Equipment (Upgrade with Regular Ores)

Upgrade Common equipment in this order:
1. Healer Puppet (Queen) → Rage Vial (King) → Life Gem (Warden)
2. Giant Arrow (Queen) → Vampstache (King) → Healing Tome (Warden)
3. Everything else as resources allow

---

## Frequently Asked Questions

**Can I change equipment between attacks?**

Yes! You can swap equipment freely before each attack. Use different loadouts for war vs farming. There is no cost to swap equipment.

**Does equipment level matter a lot?**

Yes. Higher-level equipment provides significantly stronger effects. A maxed Frozen Arrow freezes for much longer than a level 1 Frozen Arrow. Always prioritize upgrading equipment you use frequently.

**Should I upgrade Common or Epic equipment first?**

Focus on your most-used Epic equipment first (Frozen Arrow, Giant Gauntlet), then max your most-used Common equipment (Healer Puppet, Rage Vial). Epic equipment has a higher ceiling but is harder to upgrade.

**What is the fastest way to get Starry Ores?**

Clan Games (top tier), Season Pass (Gold Pass gives more), special events, and the Blacksmith. There is no way to buy Starry Ores directly — you must earn them through gameplay.

**Which hero should I prioritize equipment upgrades for?**

Archer Queen > Barbarian King > Grand Warden > Royal Champion > Minion Prince. The Queen's equipment (Frozen Arrow, Healer Puppet) has the biggest impact on attack success rates.

**Is Epic equipment always better than Common?**

Not always. Healer Puppet (Common) is better than Seeking Shield (Epic) on the Queen. Rage Vial (Common) is arguably as good as Earthquake Boots (Epic) on the King. Judge each piece individually.

---

Browse our [base layout collection](/clash-of-clans/bases) for the best war and farming bases, and check out our strategy guides:

- [TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies-2026)
- [TH17 Attack Strategies](/clash-of-clans/guides/best-th17-attack-strategies-2026)
- [Best Army Compositions](/clash-of-clans/guides/best-army-compositions-every-town-hall-level)
- [CWL Strategy Guide](/clash-of-clans/guides/best-clan-war-league-strategy-guide)

**Now go upgrade that Frozen Arrow, Chief.**
    `.trim(),
  },
  {
    slug: "legend-league-push-guide-2026",
    title: "Legend League Push Guide 2026 — How to Reach & Stay in Legends",
    description:
      "The complete Legend League push guide for Clash of Clans 2026. Learn trophy ranges, base defense, attack strategies, sign-up mechanics, daily attack planning, and how to hit top 1000 global.",
    category: "Trophy Pushing",
    date: "2026-03-21",
    readTime: "21 min read",
    image: images.blog["legend-featured"],
    content: `
Legend League is the pinnacle of competitive Clash of Clans. Reaching 5,000 trophies and signing up for Legend League puts you among the best players in the world. But getting there is only half the battle — **staying in Legends** and climbing the global leaderboard requires a completely different skill set than regular multiplayer.

In Legend League, you get exactly **8 attacks per day** and defend against **8 attacks per day**. There is no next-ing, no choosing opponents, and no shield management. It is pure skill vs skill, attack vs defense.

This guide covers **everything you need** to push to Legend League, sign up, and compete at the highest level in 2026.

---

## How Legend League Works

### Getting There

- Reach **5,000 trophies** in the regular multiplayer ladder
- Once you hit 5,000, you are prompted to **sign up** for Legend League
- You can choose to sign up or stay in Titan League

### The Legend League System

Once signed up:

- You get exactly **8 attacks per day** (attacks reset at 5:00 AM UTC)
- You face **8 defenses per day** (opponents are matched automatically)
- No searching for bases — opponents are assigned to you
- No shields or guard — you always defend 8 times
- Trophies are calculated daily: **trophies gained from attacks minus trophies lost from defenses**
- Season resets monthly — everyone above 5,000 is reset to 5,000

### Trophy Calculation

| Attack Result | Trophies Gained |
|--------------|-----------------|
| 3-star | 40 |
| 2-star (high %) | 28-32 |
| 2-star (low %) | 20-26 |
| 1-star | 8-16 |
| 0-star | 0 |

| Defense Result | Trophies Lost |
|---------------|---------------|
| Attacker 3-stars you | -40 |
| Attacker 2-stars you | -20 to -32 |
| Attacker 1-stars you | -8 to -16 |
| Attacker 0-stars you | 0 |

CC: To climb in Legend League, you need to average more trophies per attack than you lose per defense. The math is simple: if you average 35 trophies per attack (mostly 3-stars) and lose 25 per defense (mostly 2-stars), you gain +80 trophies per day (8×35 - 8×25).

---

## Step 1: Preparing for the Push

Before pushing to 5,000 trophies, make sure you are ready:

![Preparing for Legend League](${images.blog["legend-trophy"]})

### Minimum Requirements

| Requirement | Recommended |
|-------------|-------------|
| Town Hall Level | TH16 minimum, TH17-18 ideal |
| Hero Levels | 90%+ of max for your TH |
| Troop Levels | Max war troops for your TH |
| Equipment | Frozen Arrow + Giant Gauntlet maxed |
| Base | Dedicated anti-3-star Legend base |

### Pre-Push Checklist

- **Max your primary attack army** — You need one army that you can 3-star any base with
- **Max your heroes** — Heroes are essential. Every level matters in Legends
- **Upgrade key equipment** — Frozen Arrow, Giant Gauntlet, Rage Gem, Hog Rider Puppet
- **Build a Legend-specific defense base** — Your farming base will get destroyed
- **Practice in Friendly Challenges** — Attack max-level bases to simulate Legend opponents

How to use: Do NOT push to Legend League with rushed heroes or troops. You will hemorrhage trophies on defense and struggle to 3-star on offense. Wait until you are truly ready.

---

## Step 2: Pushing from Titan to Legend (4,000-5,000)

The push from Titan League to 5,000 trophies uses the regular matchmaking system. Here is how to do it efficiently:

### Trophy Range Strategy

| Trophy Range | Strategy |
|-------------|----------|
| 4,000-4,400 | Attack normally, skip hard bases |
| 4,400-4,700 | Be selective — only hit bases you can 3-star |
| 4,700-4,900 | Use full war army every attack, no farming |
| 4,900-5,000 | Cloud times increase — patience required |

### Cloud Management

Above 4,700 trophies, **clouds** (search times) increase significantly. You may wait 5-30 minutes between opponents.

- **Best time to push**: During events when more players are active (shorter clouds)
- **Worst time**: Late night in your region (fewer players = longer clouds)
- **Tip**: Start your push on a weekend when player activity is highest

### Shield Strategy During the Push

- Use your **shield timer wisely** — attack right before your shield expires
- **Guard** (2 hours for 10 gems) can extend your protection
- If you are at 4,950+ trophies, consider buying a guard to protect your trophies while you wait for clouds

---

## Step 3: Best Legend League Attack Strategies

In Legend League, you need to 3-star TH17-18 max bases consistently. These are the best strategies:

![Best Legend League armies](${images.blog["legend-attack"]})

### Tier 1: Highest 3-Star Rate

**Root Rider Smash (TH16-18)**

| Component | Details |
|-----------|---------|
| Army | 7 Root Riders, 4 Witches, 1 Log Launcher |
| Spells | 3 Rage, 2 Freeze, 1 Heal, 1 Poison |
| CC | Yeti + Barbarians in Log Launcher |
| Equipment | King: Giant Gauntlet + Rage Vial, Queen: Frozen Arrow + Healer Puppet |
| 3-Star Rate | 85-90% |

How to use: Funnel with heroes on one side. Deploy Root Riders in a line behind the Log Launcher. Rage through the core. Use Frozen Arrow to disable Infernos and Scattershots. This is the #1 Legend League army in 2026.

**Hydra — Hog + Balloon (TH17-18)**

| Component | Details |
|-----------|---------|
| Army | 16 Hogs, 12 Balloons, 2 Healers, cleanup troops |
| Spells | 3 Heal, 2 Haste, 1 Freeze, 1 Poison |
| CC | Siege Barracks with Hog Riders |
| Equipment | Queen: Frozen Arrow + Healer Puppet, Warden: Rage Gem + Life Gem |
| 3-Star Rate | 80-85% |

### Tier 2: Consistent but Lower Ceiling

**Yeti Smash (TH16-18)**

| Component | Details |
|-----------|---------|
| Army | 8 Yetis, 4 Witches, 2 Healers, cleanup |
| Spells | 3 Rage, 1 Heal, 2 Freeze, 1 Poison |
| 3-Star Rate | 80-85% |

**Blizzard LaLo (TH15-18)**

| Component | Details |
|-----------|---------|
| Army | 2 Super Wizards, 30 Balloons, 3 Lava Hounds |
| Spells | 4 Haste, 1 Rage, 2 Freeze, 1 Invisibility |
| 3-Star Rate | 75-80% |

### Army Selection Tips

- **Stick to ONE army.** Master it completely. Do not switch armies mid-season
- **Have a backup army** for bases that counter your main army
- **Adjust spells per base.** Some bases need more Freeze, others need more Rage
- **Always bring Poison** for CC troops

---

## Step 4: Legend League Base Design

Your defense base is just as important as your attack army. In Legends, you defend 8 times daily — a strong base can save 50-80 trophies per day.

![Defensive base design](${images.blog["legend-defense"]})

### Base Design Principles

**1. Anti-3-Star Focus**

In Legend League, almost every attacker will get 2 stars. Your goal is to prevent 3-stars. Design your base to waste the attacker's time, spells, and troops.

**2. Spread Key Defenses**

| Defense | Spacing Rule |
|---------|-------------|
| Eagle Artillery | Away from TH, deep in base |
| Scattershots | Opposite sides of the base |
| Inferno Towers | Spaced to avoid one Freeze hitting two |
| Monolith | Central, protected by multiple compartments |
| Multi-Archer Tower | Cover key chokepoints |
| Clan Castle | Central, hard to lure |

**3. Anti-Root Rider Design**

Root Riders are the #1 Legend army. Counter them with:
- **Spread compartments** — Root Riders follow walls, so spread layouts waste their time
- **Single-target Infernos** — Melt Root Riders before they reach the core
- **Spring Traps on pathing** — Root Riders walk predictably along walls
- **Tornado Trap in core** — Pulls Root Riders away from key buildings

**4. Anti-Air Design (for LaLo/E-Drag)**

- Space Air Defenses across the base
- Use Seeking Air Mines near Air Defenses
- Place Air Sweepers pointing toward likely balloon paths
- Keep CC central with anti-air troops (Headhunter, Super Minion)

### Base Rotation

CC: Change your Legend base every 2-3 days. If you use the same base all season, attackers who face you multiple times will learn its weaknesses. Rotate between 3-4 bases throughout the season.

---

## Step 5: Daily Legend League Routine

Legend League has a strict daily structure. Here is the optimal routine:

### Attack Schedule

Attacks reset at **5:00 AM UTC** daily. You have until the next reset to complete all 8 attacks.

| Time | Action |
|------|--------|
| Morning (1-2 hrs after reset) | Scout your 8 opponents, plan attacks |
| Mid-day | Complete 4-5 attacks |
| Evening | Complete remaining attacks |
| Before bed | Verify all 8 attacks are done |

### Attack Planning Process

For each of your 8 opponents:

1. **Scout the base** — Identify Town Hall location, CC position, key defenses
2. **Choose your army** — Usually your main army, adjust spells if needed
3. **Plan your entry point** — Where will you funnel? Where do heroes go?
4. **Identify kill squad targets** — What must your Sui Hero take out?
5. **Execute** — Follow the plan, adjust in real-time

### Trophy Tracking

Keep a simple daily log:

| Day | Attack Trophies | Defense Trophies | Net |
|-----|----------------|------------------|-----|
| Day 1 | +296 (7×40 + 1×16) | -208 (5×32 + 3×16) | +88 |
| Day 2 | +280 (6×40 + 2×20) | -224 (6×32 + 2×16) | +56 |
| Day 3 | +312 (8×40 - 1 fail) | -192 (4×32 + 4×16) | +120 |

How to use: Tracking your daily performance helps you identify whether your attacks or defenses need improvement. If you consistently lose more than 240 trophies on defense, your base needs work. If you gain less than 280 on offense, practice your army.

---

## Step 6: Climbing the Global Leaderboard

Once you are in Legend League and stable, here is how to push for top rankings:

### Monthly Season Strategy

| Week | Strategy |
|------|----------|
| Week 1 (Days 1-7) | Settle in, test army, build momentum |
| Week 2 (Days 8-14) | Push hard — this is where you gain ground |
| Week 3 (Days 15-21) | Maintain position, perfect your attacks |
| Week 4 (Days 22-30) | Final push — every trophy counts |

### What Separates Top 1000 from Top 10000

| Factor | Top 10000 | Top 1000 |
|--------|-----------|----------|
| Attack 3-star rate | 70-80% | 90%+ |
| Defense hold rate | 20-30% | 35-45% |
| Missed attacks | 1-2 per season | 0 |
| Base rotation | 1-2 bases | 3-4 bases |
| Army mastery | Good | Perfect |

### Tips for Top Players

1. **Never miss a single attack.** One missed day = -320 potential trophies
2. **3-star rate is everything.** The difference between 6 and 8 three-stars per day is +80 trophies
3. **Rotate bases frequently.** Top players use 3-4 different bases per season
4. **Watch replays.** Study how attackers beat your base and adjust
5. **Play during optimal hours.** Some time slots have weaker average opponents

---

## Common Legend League Mistakes

### Mistake 1: Rushing Into Legends Unprepared

If your heroes are 10+ levels below max, you will struggle. Every level matters when facing max bases 8 times daily. Push when you are truly ready.

### Mistake 2: Using Multiple Armies

Pick ONE army and master it. Players who switch between 3 armies are mediocre at all of them. Players who use one army 500+ times are nearly perfect at it.

### Mistake 3: Ignoring Defense

Some players spend hours perfecting their attack but use a random internet base for defense. Your base matters — it saves 50-100 trophies per day. That is 1,500-3,000 per season.

### Mistake 4: Not Completing All 8 Attacks

Every attack you skip is ~35 trophies lost. Over a 30-day season, missing just one attack per day means losing ~1,050 trophies. Complete all 8 attacks every single day.

### Mistake 5: Tilting After Bad Attacks

If you fail 2 attacks in a row, do not rush the next one out of frustration. Take a break, review what went wrong, and come back focused. Emotional attacks lead to more failures.

---

## Frequently Asked Questions

**What Town Hall level do I need for Legend League?**

TH16 is the minimum viable level. TH17-18 is recommended. Some skilled TH15 players reach Legends, but staying there is extremely difficult without max-level defenses.

**How many trophies do I need to reach Top 1000 Global?**

It varies by season, but typically 5,800-6,200 trophies by the end of the month puts you in the top 1000. Top 100 usually requires 6,500+.

**Can I drop out of Legend League?**

Yes. If your trophies fall below 4,900 at the end of a Legend League day, you are removed from Legend League and placed back in Titan I. You can re-sign up when you reach 5,000 again.

**What is the best time to sign up for Legend League?**

Sign up at the start of the season (day 1) for maximum time to climb. Signing up mid-season means fewer days to accumulate trophies.

**Should I use my Clan Castle for offense or defense in Legends?**

Both. Request offensive CC troops before attacking, then switch to defensive CC troops. Most clans coordinate CC donations for Legend players.

**Do season bank rewards scale with Legend League?**

No. Season bank rewards are based on Town Hall level, not league. However, the Season Pass and global ranking rewards are separate bonuses for Legend League players.

---

Browse our [base layout collection](/clash-of-clans/bases) for war and trophy bases, and check out our other guides:

- [TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies-2026)
- [Best Hero Equipment Rankings](/clash-of-clans/guides/best-hero-equipment-rankings-2026)
- [Best Army Compositions](/clash-of-clans/guides/best-army-compositions-every-town-hall-level)
- [CWL Strategy Guide](/clash-of-clans/guides/best-clan-war-league-strategy-guide)

**Now go claim your spot in Legend League, Chief.**
    `.trim(),
  },
  {
    slug: "best-defensive-cc-troops-for-war",
    title: "Best Defensive CC Troops for War 2026 — Complete Guide",
    description:
      "The ultimate guide to Clan Castle defensive troops in Clash of Clans 2026. Learn the best CC combinations for war, CWL, and trophy pushing at every Town Hall level — with counters and placement tips.",
    category: "Defense",
    date: "2026-03-22",
    readTime: "18 min read",
    image: images.blog["def-cc-featured"],
    content: `
Your Clan Castle defensive troops are one of the most underrated aspects of Clash of Clans defense. A well-chosen CC can turn a confident 3-star attack into a desperate 1-star. A poorly chosen CC gets killed in seconds and contributes nothing.

In war, CWL, and Legend League, the **right CC troops** can swing entire matches. Yet most players throw in whatever troops are available without thinking. This guide ranks every viable defensive CC combination, explains **why each one works**, and tells you exactly what to use at every Town Hall level in 2026.

---

## How Defensive CC Works

### Activation

- CC troops activate when an enemy troop enters their **trigger radius** (a circle around the CC)
- Once triggered, CC troops deploy and chase the nearest enemy
- CC troops have **infinite range** once deployed — they will walk across the entire base to reach an attacker
- If all attacking troops are killed or removed, CC troops return to the Castle

### Key Defensive CC Principles

**1. Space matters.** Your CC troop housing depends on your CC level. A TH13+ CC holds 45+ troop space — use every slot wisely.

**2. Surprise value.** The attacker cannot see your CC troops until they deploy. Unexpected troops cause panic and misplays.

**3. Synergy matters.** A mix of tanky + DPS + anti-hero troops outperforms a single-type CC.

**4. Placement affects trigger timing.** A centrally placed CC triggers later in the attack, when the attacker has already committed their army and spells.

---

## Tier List: Best Defensive CC Troops

### S Tier — Elite Defensive Troops

![Top defensive CC troops](${images.blog["def-cc-dragon"]})

**Super Minion** (12 space)
- Fires long-range projectiles that shred heroes and medium-HP troops
- Has a ranged attack that outranges most defenses, making it hard to lure
- Survives Poison Spell long enough to deal massive damage
- The single best defensive CC troop in the game

How to use: Super Minion is devastating against Queen Walks and hero dives. Its long-range attack means it starts dealing damage before the attacker can even react. Include at least one in every war CC.

**Headhunter** (6 space)
- Specifically targets enemy heroes with bonus damage
- Applies a slow/poison effect to heroes it hits
- Can single-handedly ruin a Sui Hero play
- Small housing space means you can fit 2-3 alongside other troops

**Ice Golem** (15 space)
- Tanks enormous damage, buying time for other CC troops to deal DPS
- Freezes nearby enemy troops on death (death freeze)
- The death freeze disrupts troop pathing and stalls the attack
- Pairs perfectly with DPS troops like Super Minion

### A Tier — Strong Defensive Troops

**Super Wizard** (10 space)
- Chain lightning attack hits multiple troops at once
- Devastating against grouped armies (Witches, Bowlers, mass troops)
- Can wipe a pack of Witches or support troops in seconds
- Vulnerable to single-target troops but excellent against swarms

**Witch** (12 space)
- Continuously spawns Skeletons that distract and damage enemy troops
- Skeletons waste attacker's spells and troop targeting
- Forces the attacker to deal with the Witch or get overwhelmed
- Best used alongside a tank (Ice Golem)

![Electro Dragon for CC defense](${images.blog["def-cc-edrag"]})

**Electro Dragon** (30 space)
- Chain lightning deals damage to multiple nearby troops
- Massive HP pool — survives Poison Spell and requires significant firepower to kill
- A single E-Drag fills most of the CC, leaving room for small filler troops
- Effective against mass army compositions

**Dragon** (20 space)
- Solid HP pool and consistent splash damage
- Hard to kill with Poison alone
- Good all-around choice at lower TH levels
- Outclassed by Super Minion + Headhunter combinations at higher THs

### B Tier — Situational Troops

![Golem for tanking](${images.blog["def-cc-golem"]})

**Lava Hound** (30 space)
- Massive HP pool tanks damage for a long time
- Splits into Lava Pups on death, creating additional distractions
- Weak DPS but excels at wasting attacker's time
- Best against air attacks (LaLo, E-Drag)

**Valkyrie** (8 space)
- High DPS and moderate HP
- Spins attack hits multiple troops
- Good against ground armies, weak against air
- Best used as filler alongside a tank

**Baby Dragon** (10 space)
- Gets an enrage buff when no other air troops are nearby
- Decent DPS with the enrage active
- Flies, so ground-only troops cannot target it
- Good budget option at TH10-12

### C Tier — Weak but Usable

**Archers** (1 space each)
- Used as filler troops to fill remaining CC space
- Individually weak but add up in groups
- Die instantly to Poison Spell
- Only use to fill 1-4 remaining space after main troops

**Goblins** (1 space each)
- Target resources, not enemy troops — terrible for defense
- Never use Goblins in a defensive CC

**Barbarians** (1 space each)
- Weak stats, die instantly
- Marginally better than Goblins as filler
- Use Archers instead if you have the choice

---

## Best CC Combinations by Town Hall Level

### TH7-TH8 (CC Space: 20-25)

| Combo | Troops | Why |
|-------|--------|-----|
| Best | Dragon (20) + Archers (5) | Dragon tanks and splashes |
| Budget | Wizard (4) x5 + Archers (5) | High DPS, glass cannon |
| Anti-Dragon | Baby Dragon (10) + Wizard (4) x3 + Archer (1) | Counters mass Dragon |

### TH9-TH10 (CC Space: 30-35)

| Combo | Troops | Why |
|-------|--------|-----|
| Best | E-Dragon (30) + Archers (5) | E-Drag chains destroy grouped troops |
| Anti-Ground | Dragon (20) + Baby Dragon (10) + Archers (5) | Mixed air DPS |
| Anti-Hog | Witch (12) + Wizard (4) x4 + Archers (3) | Skeletons distract Hogs |

### TH11-TH12 (CC Space: 35-40)

| Combo | Troops | Why |
|-------|--------|-----|
| Best | Ice Golem (15) + Super Minion (12) + Headhunter (6) x2 + Archer (1) | Tank + DPS + anti-hero |
| Anti-Queen Walk | Super Minion (12) + Headhunter (6) x3 + Archers (4) | Shreds Queen |
| Budget | E-Dragon (30) + Headhunter (6) + Archers (4) | Simple, effective |

### TH13-TH15 (CC Space: 40-45)

| Combo | Troops | Why |
|-------|--------|-----|
| Best | Ice Golem (15) + Super Minion (12) + Headhunter (6) x2 + Archers (4) | Elite combo |
| Anti-Smash | Ice Golem (15) + Witch (12) + Super Wizard (10) + Archers (3) | Counters ground smash |
| Anti-LaLo | Super Minion (12) x2 + Headhunter (6) x2 + Archers (2) | All-air DPS |

![Bowler for splash defense](${images.blog["def-cc-bowler"]})

### TH16-TH18 (CC Space: 45-50)

| Combo | Troops | Why |
|-------|--------|-----|
| Best War | Ice Golem (15) + Super Minion (12) + Headhunter (6) x3 + Archer (1) | Maximum anti-hero |
| Anti-Root Rider | Ice Golem (15) + Super Wizard (10) + Witch (12) + Headhunter (6) + Archers (2) | Counters ground meta |
| Anti-Air | Super Minion (12) x2 + Headhunter (6) x2 + Baby Dragon (10) + Archers (2) | Shreds air armies |
| CWL | Ice Golem (15) + Super Minion (12) + Headhunter (6) x2 + Witch (12) | Tank + DPS + distraction |

CC: At TH16+, the Ice Golem + Super Minion + Headhunter core is the gold standard for war CC. The Ice Golem tanks, the Super Minion deals devastating long-range damage, and the Headhunters target enemy heroes directly.

---

## How Attackers Deal with CC — And How to Counter Them

Understanding how attackers handle your CC helps you choose troops that are hardest to deal with.

### Poison Spell

Most attackers bring 1-2 Poison Spells for CC troops.

**Troops that survive Poison well:**
- Ice Golem — Too much HP to die to Poison
- E-Dragon — Survives long enough to chain multiple times
- Dragon — High HP pool outlasts Poison

**Troops that die to Poison:**
- Archers — Dead instantly
- Wizards — Die within seconds
- Headhunters — Survive long enough to be useful if behind a tank

How to use: Always pair squishy CC troops (Headhunter, Super Minion) behind a tanky troop (Ice Golem). The attacker's Poison hits the tank first, giving your DPS troops time to deal damage.

### Queen Walk Lure

Many attackers use a Queen Walk to lure and kill CC troops early.

**Troops that counter Queen Walk lures:**
- Super Minion — Outranges the Queen, deals damage before she can target it
- Headhunter — Targets the Queen directly with bonus damage
- Witch — Skeleton spam distracts the Queen and wastes her time

### Sui Hero Dive

Attackers send Barbarian King + Archer Queen to dive into the base and kill CC.

**Troops that counter hero dives:**
- Headhunter — Specifically designed to kill heroes
- Ice Golem — Death freeze stalls hero movement
- Super Wizard — Chain lightning hits heroes and their spawned troops

---

## CC Placement Tips

Where you place your Clan Castle on your base matters as much as what troops are inside:

### Central CC (Recommended for War)

- Triggers late in the attack, after the attacker has committed spells
- Forces attackers to push deep into the base to lure
- Most effective for anti-3-star defense

### Off-Center CC (Situational)

- Can catch attackers off-guard if placed on the opposite side from expected attack angle
- Triggers at an unexpected time, disrupting attack flow
- Best on asymmetrical base designs

### Tips for Maximum Impact

1. **Never place CC on the edge** — It will be easily lured and killed before the attack begins
2. **Place CC near high-value defenses** — When CC troops deploy near Infernos or Eagle, the attacker must choose what to deal with first
3. **Overlap CC range with traps** — Spring Traps near the CC trigger point can eliminate the lure troops
4. **Adjust CC radius awareness** — Know exactly where the trigger circle is and design your base so the attacker cannot reach it without committing significant forces

---

## Frequently Asked Questions

**What is the single best defensive CC troop?**

Super Minion. Its long-range attack, high DPS, and survivability make it the best individual CC troop. However, it works best when paired with an Ice Golem tank.

**Should I use the same CC for war and CWL?**

Yes, use the same elite combo (Ice Golem + Super Minion + Headhunter) for both war and CWL. There is no reason to use a weaker CC in CWL.

**How important are filler troops (Archers)?**

They matter more than you think. 3-4 Archers add extra targets that waste the attacker's Poison Spell duration and troop targeting. Always fill your remaining CC space.

**Should I use single-type CC (all one troop) or mixed?**

Mixed is almost always better. A single troop type is easier to counter. Mixed CC forces the attacker to deal with multiple threats simultaneously.

**What about defensive Siege Machines?**

At TH12+, you can receive Siege Machines in your CC. For defense, the best option is the **Siege Barracks** filled with strong troops, or simply fill the CC with regular troops. Siege Machines on defense are inconsistent.

**How do I counter Super Minion in enemy CC?**

Use a high-HP troop to tank its shots (Golem, Ice Golem), then Poison + Queen or Wizard to kill it. The Queen with Frozen Arrow can freeze and kill a Super Minion efficiently.

---

Browse our [base layout collection](/clash-of-clans/bases) for anti-3-star war bases, and check out our strategy guides:

- [CWL Strategy Guide](/clash-of-clans/guides/best-clan-war-league-strategy-guide)
- [Best Hero Equipment Rankings](/clash-of-clans/guides/best-hero-equipment-rankings-2026)
- [Legend League Push Guide](/clash-of-clans/guides/legend-league-push-guide-2026)
- [TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies-2026)

**Now go fill those Clan Castles, Chief.**
    `.trim(),
  },
];

export function getGuide(slug: string): Guide | undefined {
  return cocGuides.find((g) => g.slug === slug);
}

export function getAllGuideSlugs(): string[] {
  return cocGuides.map((g) => g.slug);
}
