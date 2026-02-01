const fs = require('fs');
const path = require('path');

const guidesPath = path.join(__dirname, '..', 'lib', 'guides.js');
let content = fs.readFileSync(guidesPath, 'utf8');

// Normalize line endings to LF for matching
content = content.replace(/\r\n/g, '\n');

// Find and replace CWL article
const cwlStart = content.indexOf("'cwl-base-building-tips': {");
const cwlEnd = content.indexOf("'farming-vs-war-base':");
if (cwlStart > -1 && cwlEnd > -1) {
  const cwlNew = `'cwl-base-building-tips': {
    title: 'CWL Base Building Tips 2026: Build Anti-3 Star Bases That Win Wars',
    description: 'Master CWL base building with anti-3 star design principles, trap placement strategies, and defense tips for TH12-TH18.',
    metaDescription: 'Master CWL base building in 2026. Anti-3 star design, trap placement & defense tips for TH12-TH18 in Clan War Leagues.',
    category: 'Defense',
    icon: '🏰',
    image: GUIDE_IMAGES['cwl-base-building-tips'],
    contentImages: [
      'https://i.ytimg.com/vi/JnM0mn4caEA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBpjFUJZOzmu8gQbnoN6-lzeYGObA',
      'https://i.ytimg.com/vi/oMD16duHzJc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCD6DTA-dT2_g_vWCLQkggLTo1How',
      'https://i.ytimg.com/vi/dY2LtvLHGpk/sddefault.jpg',
      'https://darkbarbarian.com/wp-content/uploads/2025/01/storages-2.jpg',
      'https://i.ytimg.com/vi/XNXzE9ClgCE/sddefault.jpg'
    ],
    content: \`
## CWL Base Building Tips 2026: The Ultimate Anti-3 Star Guide

**Clan War Leagues (CWL)** are the ultimate test of your base design skills in Clash of Clans. Unlike regular wars, CWL doesn't allow scouting—meaning your base must defend against every possible attack strategy without knowing what's coming. A single 3-star can cost your clan the promotion.

This comprehensive guide teaches you exactly how to build **anti-3 star CWL bases** that consistently hold attackers to 2-stars or less. Whether you're TH12 or TH18, these proven strategies will transform your war defense and help your clan climb the CWL ranks.

*Related: [Anti 3-Star Base Design Principles](/clash-of-clans/guides/anti-3-star-base-design) | [Best TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies)*

### Why CWL Bases Need Special Design

CWL is fundamentally different from regular clan wars. Here's why your base strategy must adapt:

| Factor | Regular War | Clan War League |
|--------|-------------|-----------------|
| **Scouting** | Opponents scout before attacking | No scouting allowed |
| **Attacks per player** | 2 attacks | 1 attack only |
| **Consequences** | Miss bonus loot | League demotion |
| **Base changes** | Adjust between attacks | Commit for entire week |

**Key Insight:** Your CWL base must defend against ALL meta attacks simultaneously—Root Riders, Super Witches, Hydra, and more.

### Core Principles of Anti-3 Star CWL Bases

#### Principle 1: Strategic Defense Spreading

The biggest CWL mistake is **clustering powerful defenses**. When Inferno Towers, Eagle Artillery, and Scattershots sit together, one Freeze Spell neutralizes everything.

**Defense Placement Rules:**
- **Inferno Towers** - Opposite quadrants, never adjacent
- **Eagle Artillery** - Offset from Town Hall, not centered together
- **Scattershots** - Different sides of the base
- **X-Bows** - Cover separate entry points
- **Monolith (TH15+)** - Away from Infernos
- **Multi-Archer Tower (TH16+)** - Protected from early funnel

#### Principle 2: Town Hall Positioning

Your Town Hall is worth 1 star, but protecting it isn't always the priority. The **offset TH strategy** works better in 2026:

- Place TH slightly off-center toward one side
- Position Eagle Artillery on the opposite side
- Attackers must choose: Town Hall OR Eagle?
- Either choice leaves key defenses standing

#### Principle 3: Compartment Design

**Time kills attacks.** Build bases with 8-12 distinct compartments:

- Each compartment contains 1-2 defenses
- Multiple wall layers around Town Hall
- High-HP buildings (Clan Castle, storages) in key spots
- Dead zones that waste troop pathing time

### Advanced Trap Placement for CWL

Traps win more defenses than buildings. Here's exactly where to place them:

#### Giant Bomb Placement

| Location | Why It Works |
|----------|--------------|
| Between defenses (2-3 tiles) | Catches Hogs/Miners mid-path |
| Near Wizard Towers | Combo damage destroys groups |
| Behind second wall layer | Catches cleanup troops |

**Never place Giant Bombs** where heroes trigger them—save them for backend troops.

#### Seeking Air Mine Placement
- Near Air Defenses (protects from Lava Hound distraction)
- Between Inferno Towers and base edge (catches Queen walks)
- On likely Electro Dragon paths

#### Tornado Trap Strategy (TH13+)
- Pull troops AWAY from Town Hall
- Drag attackers INTO multi-target Infernos
- Disrupt Queen Charge pathing

### CWL Base Patterns That Work in 2026

#### Ring Bases
**Best for:** TH12-14
- Forces troops around the core
- Excellent against Hog/Miner Hybrid
- **Weakness:** Root Riders ignore walls

#### Island Bases
**Best for:** TH14-18
- Key defenses on isolated "islands"
- Forces spell usage for each section
- Excellent against Queen Charge strategies

### Town Hall-Specific CWL Tips

**TH12-13:**
- Giga Tesla/Inferno in center
- Eagle Artillery offset
- Tornado Trap near TH

**TH14-15:**
- Monolith covers high-traffic areas
- Spread Scattershots from Monolith
- Poison Giga Inferno counters bats

**TH16-18:**
- Protect Multi-Archer Tower from Lightning
- Root Riders are #1 threat—spread buildings wide
- Update weekly for shifting meta

### Common CWL Base Mistakes

| Mistake | Problem | Solution |
|---------|---------|----------|
| Clustering Infernos | One Freeze = both dead | Opposite quadrants |
| Eagle next to TH | Kill squad gets both | Offset Eagle |
| Predictable traps | Attackers trigger safely | Randomize placement |
| Same base all week | Opponents share counters | Rotate 2-3 bases |

### Pro Tips for CWL Success

1. **Prepare 2-3 bases** before CWL week starts—rotate every 2-3 days
2. **Watch every defense replay** and note which attacks succeeded
3. **Test against meta attacks** in Friendly Challenges: Root Rider, Super Witch, Hydra
4. **Update immediately** when you see a new attack beating your base
5. **Check your time remaining**—if attackers have 30+ seconds left, base is too weak
6. **Never skip trap placement**—it's 50% of your defense
7. **Copy successful clanmates** if their bases hold better than yours

### Frequently Asked Questions

**Q: Should I use the same base for all 7 CWL days?**
A: No. Prepare 2-3 bases and rotate every 2-3 days. Opponents share successful attack strategies within their clan.

**Q: Ring base or island base for TH15+?**
A: Island bases perform better at TH15+ because they counter Queen Charge and force more spell investment against Root Riders.

**Q: How important is Clan Castle placement?**
A: Critical. Your CC troops should be deep in the base where the kill squad can't lure them early.

**Q: How often should I update my CWL base?**
A: After every major game update and whenever new meta attacks emerge. Minimum: once per season.

**Q: What's the best Inferno Tower setting for CWL?**
A: Multi-target is generally better in 2026 due to Super Witch Big Boys and Root Rider spam.

### Conclusion

Building **winning CWL bases** isn't about stopping every attack—it's about forcing 2-stars instead of 3-stars. Every defense that holds to 2 stars gives your clan the edge needed for promotion.

Focus on **spreading defenses**, **strategic trap placement**, and **testing extensively** before CWL week. Rotate your bases, watch your replays, and adapt to the meta.

Ready to dominate CWL? Browse our collection of [anti-3 star bases](/clash-of-clans/bases) with instant copy links!

---

**Image Credits:**
- CWL War Map - YouTube / Clash of Clans Official
- TH15 Anti-3 Star Layout - YouTube / Clash Base Builders
- Trap Placement Guide - YouTube / Dark Barbarian
- Compartment Design - DarkBarbarian.com
- Defense Log - YouTube / Clash Community

*Last Updated: February 2026*
    \`,
  },

  `;
  content = content.substring(0, cwlStart) + cwlNew + content.substring(cwlEnd);
  console.log('✅ CWL article updated');
}

// Find and replace Anti-3-Star article
const anti3Start = content.indexOf("'anti-3-star-base-design': {");
const anti3End = content.indexOf("'legend-league-pushing':");
if (anti3Start > -1 && anti3End > -1) {
  const anti3New = `'anti-3-star-base-design': {
    title: 'Anti 3-Star Base Design Principles 2026: Complete Defense Guide',
    description: 'Master anti-3 star base design for Clash of Clans. Learn compartment design, trap placement, defense spacing to counter all meta attacks.',
    metaDescription: 'Learn anti 3-star base design for Clash of Clans 2026. Master compartments, traps & defense spacing to stop all meta attacks.',
    category: 'Defense',
    icon: '🛡️',
    image: GUIDE_IMAGES['anti-3-star-base-design'],
    contentImages: [
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/3087482.jpg?457',
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/3305026_orig.jpg',
      'https://i.ytimg.com/vi/KpoWkDq2SR4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCf623FwsgQiacbhKCoZc2RXkNkWA',
      'https://akiyume.weebly.com/uploads/4/4/8/2/44827693/145780771.png',
      'https://preview.redd.it/base-types-best-island-box-type-ring-v0-fw4qbg2rvnob1.jpg?width=1080&crop=smart&auto=webp&s=172f0c4945a8dad26e2cc886351c5b587141f6bc',
      'https://i.ytimg.com/vi/HWbECabjA-M/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDLgDlEXu8othAwsK_VFpGxRxVdcg'
    ],
    content: \`
## Anti 3-Star Base Design Principles: The Complete 2026 Guide

Want to build bases that **consistently defend against 3-stars**? The secret isn't luck—it's understanding fundamental design principles that make bases nearly impossible to fully destroy.

An anti-3 star base doesn't stop attacks completely—that's unrealistic against skilled players. Instead, it forces attackers to settle for 2-stars by **wasting their time**, **forcing bad spell usage**, and **separating their army**. This guide reveals the exact principles used by top war clans worldwide.

*Related: [CWL Base Building Tips](/clash-of-clans/guides/cwl-base-building-tips) | [Legend League Pushing Guide](/clash-of-clans/guides/legend-league-pushing)*

### The 7 Core Principles of Anti-3 Star Design

#### Principle 1: Time Is Your Greatest Weapon

**Most 3-star failures happen because attackers run out of time.** A perfectly executed attack means nothing if troops are still clearing buildings at 0:00.

| Strategy | How to Implement | Time Wasted |
|----------|-----------------|-------------|
| Multiple compartments | 8-12 wall sections | 15-30 seconds |
| Spread trash buildings | Buildings at edges | 20-40 seconds |
| Long pathing | Force circular movement | 20-35 seconds |
| High HP buildings | Storages in key spots | 10-20 seconds |

**Pro Tip:** If attackers finish with 30+ seconds remaining, your base needs more time-wasting elements.

#### Principle 2: Defense Spreading

**Clustered defenses = easy spells.** When Inferno Towers, Eagle Artillery, and Scattershots are grouped, one Freeze Spell neutralizes everything.

**Spreading Rules:**
- **Inferno Towers** - Opposite quadrants, never adjacent
- **Eagle Artillery** - NOT centered with Town Hall
- **Scattershots** - Different sides, minimal overlap
- **Monolith** - Away from Infernos

#### Principle 3: Kill Squad Separation

The **kill squad** (Heroes + Siege + CC troops) targets your key defenses early. Counter it:

- **Expensive entry** - Giant Bombs near likely entry points
- **Separate targets** - TH and Eagle in different compartments
- **Kill zones** - Areas where Infernos + splash overlap
- **Protected CC** - Troops survive until attackers commit

#### Principle 4: Strategic Compartments

Compartments slow everything down. Each wall layer requires Wall Breakers or spells.

**Ideal Structure:**
- 8-12 distinct compartments
- 1-2 defenses per compartment
- Multiple wall layers around TH
- Varied sizes (identical = predictable)

#### Principle 5: Trap Psychology

**Traps win defenses that buildings can't.**

**Giant Bomb Zones:**

| Location | Target |
|----------|--------|
| Between defenses (2-3 tiles) | Hogs/Miners |
| Near Wizard Towers | Combo damage |
| Behind 2nd wall layer | Cleanup troops |

**Never place Giant Bombs** where heroes trigger them.

#### Principle 6: Defense Synergy

Defenses must protect each other:

| Defense A | Defense B | Why |
|-----------|-----------|-----|
| Air Defense | Wizard Tower | AD kills tanks, WT kills Loons |
| Inferno | Air Defense | AD protects Inferno from air |
| Scattershot | Inferno | Scatter weakens, Inferno finishes |

#### Principle 7: Anti-Meta Adaptation

Your base must counter current attacks:

**Root Rider Smash (2026 Meta King):**
- Root Riders ignore walls
- Counter: Spread buildings far apart
- Counter: Monolith in their path

**Super Witch Spam:**
- Big Boys overwhelm single Infernos
- Counter: Multi-target Inferno setting

**Hydra (Hog/Miner):**
- Counter: Giant Bomb pairs
- Counter: Spring Traps on Hog circuits

### Base Type Comparison

| Type | Best Against | Weak Against | Best TH |
|------|--------------|--------------|---------|
| **Ring** | Hog/Miner | Root Riders | TH12-14 |
| **Island** | Queen Charge | E-Drag spam | TH14-18 |
| **Box** | Time attacks | Wall Breakers | TH11-13 |

### Testing Your Anti-3 Star Base

**Never use untested bases in war.**

1. **Friendly Challenge** your clan
2. **Request specific attacks:** Root Rider, Super Witch, Hydra
3. **Watch every replay** - note troop pathing
4. **Check time remaining** - 30+ seconds = too weak
5. **Iterate and re-test** after changes

### Pro Tips for Anti-3 Star Success

1. **Offset your Town Hall** from Eagle Artillery—force attackers to choose
2. **Vary compartment sizes**—identical compartments are predictable
3. **Update monthly**—meta shifts require base changes
4. **Use Tornado Trap** to pull troops away from TH
5. **Test against your clan's best attacker**—if they fail, opponents will too
6. **Never cluster storages**—they're HP shields, spread them
7. **Watch top player defenses** on YouTube for trap placement ideas

### Frequently Asked Questions

**Q: What's more important—protecting Town Hall or Eagle Artillery?**
A: Neither exclusively. **Separate them** so attackers can't get both easily.

**Q: How many compartments is ideal?**
A: 8-12 compartments. More than 12 becomes counterproductive.

**Q: Single-target or multi-target Infernos?**
A: Multi-target in 2026 meta due to Super Witch Big Boys and Root Rider spam.

**Q: How often should I update my base?**
A: After every game update. Minimum: monthly.

**Q: Ring or island base?**
A: Island bases perform better at TH15+ against current meta.

### Conclusion

**Anti-3 star design is a skill**, not luck. By mastering these 7 principles—time wasting, defense spreading, kill squad separation, compartments, traps, synergy, and meta adaptation—you'll build bases that frustrate even the best attackers.

The goal isn't stopping attacks. It's **forcing 2-stars** while making 3-stars nearly impossible.

Ready to apply these principles? Browse our [proven anti-3 star bases](/clash-of-clans/bases) with instant copy links!

---

**Image Credits:**
- Base Overview - ClashCodes.com
- Compartment Guide - Akiyume CoC Strategy
- Defense Spreading - YouTube / Clash Base Building
- Trap Zones - Akiyume CoC Strategy
- Base Comparison - Reddit / r/ClashOfClans
- Defense Replay - YouTube / Clash Defense Logs

*Last Updated: February 2026*
    \`,
  },

  `;
  content = content.substring(0, anti3Start) + anti3New + content.substring(anti3End);
  console.log('✅ Anti 3-Star article updated');
}

// Find and replace Legend League article
const legendStart = content.indexOf("'legend-league-pushing': {");
const legendEnd = content.indexOf("};", legendStart);
if (legendStart > -1 && legendEnd > -1) {
  const legendNew = `'legend-league-pushing': {
    title: 'Legend League Pushing Guide 2026: Reach & Dominate 5000+ Trophies',
    description: 'Complete Legend League guide for Clash of Clans 2026. Trophy pushing strategies, best armies, defense tips, and daily routines for 5000+ trophies.',
    metaDescription: 'Master Legend League in CoC 2026. Trophy pushing strategies, best armies, base defense & daily routines to reach and dominate 5000+ trophies.',
    category: 'Trophy',
    icon: '🏆',
    image: GUIDE_IMAGES['legend-league-pushing'],
    contentImages: [
      'https://static.wikia.nocookie.net/clashofclans/images/1/13/Trophy_Leagues_Main_Banner.png/revision/latest?cb=20171220173449',
      'https://preview.redd.it/attack-stratergies-used-by-top-legend-league-players-v0-gjrzdc81a4gc1.jpeg?width=640&crop=smart&auto=webp&s=ac296ebc1afb985c86bc59653f87a0d7020d1c27',
      'https://preview.redd.it/legend-league-players-do-you-use-a-custom-display-base-or-v0-zj3lxgcwwd8f1.jpeg?width=2400&format=pjpg&auto=webp&s=47dc36ed720312c302c0197f38556b4a7bec539d',
      'https://external-preview.redd.it/legends-league-top-10-leaderboard-armies-april-2023-v0-A8Z6ry93xzS5aPWu_JUp8a2jxP16bxxVU-p3_C0ZJHo.jpg?auto=webp&s=10418adf76d13b89355b8565f1b98214d8520562',
      'https://i.ytimg.com/vi/IoZZ2vm7cec/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCjOtPVrYVzhLsay1AGl_3dAW72Dw'
    ],
    content: \`
## Legend League Pushing Guide 2026: The Complete Trophy Champion Blueprint

**Legend League** is the pinnacle of Clash of Clans competitive play. Reaching 5000+ trophies and competing against the world's best players is the ultimate achievement. But getting there—and staying there—requires strategy, consistency, and dedication.

This guide covers everything you need: the push to 5000 trophies, Legend League mechanics, the best attack strategies for 2026, optimal daily routines, and secrets from top-ranked players.

*Related: [Best TH18 Attack Strategies](/clash-of-clans/guides/best-th18-attack-strategies) | [Anti 3-Star Base Design](/clash-of-clans/guides/anti-3-star-base-design)*

### What Is Legend League?

Legend League unlocks at **5000 trophies** with completely different mechanics:

| Feature | Regular Leagues | Legend League |
|---------|-----------------|---------------|
| **Trophy Range** | 0-4999 | 5000+ |
| **Attacks** | Unlimited | 8 per day |
| **Defenses** | Unlimited | 8 per day |
| **Matchmaking** | Search for opponents | Auto-assigned |
| **Shields** | Earned from defense | None |

### Requirements to Reach Legend League

**Minimum:**
- 5000+ trophies
- Town Hall 11+ (realistically TH14+)
- All heroes available

**Recommended:**
- Town Hall 15+ for competitive play
- Near-maxed offense
- 8 attacks daily commitment

**Hero Levels by TH:**

| Town Hall | Minimum | Competitive |
|-----------|---------|-------------|
| TH14 | 75/75/50/25 | 80/80/55/30 |
| TH15 | 80/80/55/30 | 90/90/65/40 |
| TH16+ | 90/90/65/40 | Max |

### Phase 1: Pushing to 5000 Trophies

**The Golden Rule:** Only attack when you can **guarantee 2+ stars**.

**Strategy:**
- Attack only with all heroes ready
- Skip bases you can't confidently 2-star
- Use your BEST attack strategy, no experiments
- Play during shield downtime

**Best Pushing Armies:**

| Army | TH Level | Consistency |
|------|----------|-------------|
| Root Rider Smash | TH15-18 | Very High |
| Super Witch | TH14-18 | High |
| Hydra | TH13-18 | Very High |

### Phase 2: Legend League Mechanics

**Attack System:**
- **8 attacks per day** (exactly)
- Resets at **5:00 AM local time**
- Unused attacks = 0 trophies gained

**Trophy Calculation:**

| Result | Trophies |
|--------|----------|
| 3-Star Attack | +40 |
| 2-Star (80%+) | +32 |
| 1-Star | +16-24 |
| 0-Star | +8 |
| Opponent 3-Stars You | -40 |
| Opponent 2-Stars You | -24 to -32 |

**Daily Trophy Math:**
- Max gain: 8 × 40 = **+320 trophies**
- Max loss: 8 × 40 = **-320 trophies**
- Goal: Average **+50 to +100 net daily**

### Best Legend League Strategies 2026

**Tier S (Highest Consistency):**

1. **Root Rider Smash** - TH15-18 | 70-85% 3-star rate
2. **Super Witch Spam** - TH14-18 | 60-75% 3-star rate

**Tier A:**

3. **Hydra (Hog/Miner)** - All TH | 55-70% 3-star rate
4. **Queen Charge LaLo** - TH14-18 | 65-80% 3-star rate

**Pro Tip:** Master ONE strategy completely before learning others.

### Optimal Daily Routine

| Time | Activity | Attacks |
|------|----------|---------|
| 6-9 AM | Morning session | 4 attacks |
| Afternoon | Analyze replays | 0 |
| 6-10 PM | Evening session | 4 attacks |

**Daily Checklist:**
- ✅ All 8 attacks completed
- ✅ Defense replays watched
- ✅ Army trained for tomorrow

### Legend League Defense

**Your base matters.** You're attacked exactly 8 times daily.

**Base Requirements:**
- Anti-3 star design
- Updated for current meta
- Tested in Friendly Challenges
- Rotated weekly

**Warning:** Base changes take **24 hours** to apply!

### Reaching the Global Leaderboard

**Trophy Requirements:**
- **Top 1000:** ~5600-5800 trophies
- **Top 200:** ~5900-6100 trophies
- **Top 50:** ~6200+ trophies

**What Top Players Do Differently:**

| Factor | Average Legend | Top 200 |
|--------|----------------|---------|
| 3-star rate | 60-70% | 85-95% |
| Time/day | 30-45 min | 1-2 hours |
| Consistency | Most days | Every day |

### Pro Tips for Legend League Success

1. **Never miss a day**—even one day off costs 200-300 trophies
2. **Attack immediately after reset** for potentially weaker opponents
3. **Stop attacking when tilted**—losses compound when frustrated
4. **Watch top player streams** on YouTube for current meta
5. **Track your 3-star rate**—below 60% means you need practice
6. **Use all heroes always**—never attack with heroes upgrading
7. **Fill Clan Castle** before every attack

### Frequently Asked Questions

**Q: What's the minimum TH for Legend League?**
A: Technically TH11, but TH14+ is realistic for sustained success.

**Q: What happens if I miss a day?**
A: You lose up to -320 trophies from defenses and gain 0 from attacks.

**Q: How do I handle losing streaks?**
A: Stop attacking. Take a break. Watch your loss replays. Return fresh.

**Q: Is Legend League worth the time?**
A: If you enjoy competitive play—absolutely. Casual players may prefer regular leagues.

**Q: How do I improve my 3-star rate?**
A: Practice in Friendly Challenges and master ONE strategy before learning others.

### Conclusion

**Legend League** isn't just a trophy count—it's proof of dedication and skill. Success comes from **consistency** (all 8 attacks daily), **strategy mastery** (one army perfected), and **continuous improvement** (watching every replay).

Start your push at TH14+, master Root Rider or Super Witch, and commit to the daily grind. The Legend League badge awaits.

Ready to climb? Browse our [pro attack guides](/clash-of-clans/guides) and [base collections](/clash-of-clans/bases)!

---

**Image Credits:**
- Trophy Leagues - Clash of Clans Wiki / Supercell
- Army Compositions - Reddit / r/ClashOfClans
- Base Scouting - Reddit / r/ClashOfClans
- Leaderboard - Reddit / r/ClashOfClans
- Attack Replay - YouTube / Clash Legend League

*Last Updated: February 2026*
    \`,
  },
};`;
  content = content.substring(0, legendStart) + legendNew;
  console.log('✅ Legend League article updated');
}

// Write back with CRLF line endings for Windows
content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(guidesPath, content, 'utf8');
console.log('\n✅ All 3 articles updated successfully!');
