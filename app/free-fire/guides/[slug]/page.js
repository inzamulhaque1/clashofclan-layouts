import Link from 'next/link';
import { notFound } from 'next/navigation';

const baseUrl = "https://www.game365hub.com";

// Guide content data
const GUIDES = {
  'beginners-guide': {
    title: "Beginner's Complete Guide 2026",
    description: "Everything new players need to know about Free Fire - from basic controls to winning your first match.",
    category: "Basics",
    readTime: "12 min",
    color: "#FF5722",
    image: "https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg",
    sections: [
      {
        title: "Getting Started",
        content: `Welcome to Free Fire! This guide will teach you everything you need to know to start winning matches.

**What is Free Fire?**
Free Fire is a fast-paced battle royale game where 50 players drop onto an island, scavenge for weapons, and fight to be the last one standing. Matches last about 10-15 minutes, making it perfect for mobile gaming.

**Basic Controls:**
- Move using the left joystick
- Look around by dragging on the right side
- Fire button shoots your weapon
- Jump, crouch, and prone buttons for movement
- Backpack icon to manage inventory`
      },
      {
        title: "Looting Essentials",
        content: `**Priority Loot Order:**
1. **Weapons** - Grab any gun immediately
2. **Armor** - Vest and helmet for protection
3. **Healing** - Medkits, mushrooms, and inhalers
4. **Ammo** - Stock up for your weapons
5. **Gloo Walls** - Essential for cover

**Best Starter Weapons:**
- **SCAR** - Balanced AR, easy recoil
- **MP40** - Fast SMG for close range
- **M1014** - Powerful shotgun
- **Kar98k** - Good sniper for beginners`
      },
      {
        title: "Combat Basics",
        content: `**Combat Tips:**
- Always use cover - never stand in the open
- Aim for the head for bonus damage
- Use gloo walls when caught in the open
- Learn to peek and shoot from cover

**Engagement Ranges:**
- **Close (0-20m):** Shotguns, SMGs
- **Medium (20-50m):** Assault Rifles
- **Long (50m+):** Snipers, Marksman Rifles

**Pro Tip:** Don't engage every enemy. Sometimes hiding and letting others fight is the best strategy.`
      },
      {
        title: "Survival Tips",
        content: `**Stay Alive Longer:**
1. Land at the edge of the map to loot safely
2. Always stay inside the safe zone
3. Use vehicles to rotate quickly
4. Keep healing items ready
5. Check your surroundings constantly

**Zone Management:**
- The play zone shrinks over time
- Being outside deals damage
- Plan your rotations early
- Use natural cover when moving

**Character Recommendation for Beginners:**
Start with **Kelly** (free, +6% speed) or **Andrew** (free, armor durability). Once comfortable, try **DJ Alok** for his healing ability.`
      }
    ]
  },
  'clash-squad': {
    title: "Clash Squad Mastery Guide",
    description: "Dominate 4v4 Clash Squad mode with team strategies, economy management, and winning tactics.",
    category: "Game Modes",
    readTime: "10 min",
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    sections: [
      {
        title: "Clash Squad Basics",
        content: `**What is Clash Squad?**
Clash Squad is a 4v4 round-based mode. First team to win 4 rounds wins the match. You buy weapons with money earned from kills and round wins.

**Economy System:**
- Starting money: $500
- Kill reward: $200
- Round win: $600
- Round loss: $400

**First Round Strategy:**
With $500, buy either:
- MP40 ($460) - Best budget SMG
- M1014 ($390) - High burst damage
- Save for round 2 AWM/M82B`
      },
      {
        title: "Team Composition",
        content: `**Ideal Team Setup:**
- 1 Rusher (Chrono, Skyler)
- 1 Support (DJ Alok, K)
- 1 Scout (Moco, Clu)
- 1 Sniper/Flex (Laura, Rafael)

**Communication is Key:**
- Call out enemy positions
- Coordinate pushes together
- Share information about enemy abilities
- Plan eco rounds as a team`
      },
      {
        title: "Round Strategies",
        content: `**Attack Strategies:**
1. **Rush** - All 4 push together fast
2. **Split** - 2-2 from different angles
3. **Bait** - One player draws attention, others flank

**Defense Strategies:**
1. **Stack** - All defend one area
2. **Spread** - Cover multiple angles
3. **Rotate** - Quickly move to support teammates

**Buy Priorities:**
Round 1: SMG/Shotgun
Round 2: AR + Vest
Round 3+: Full loadout + utilities`
      },
      {
        title: "Clutch Situations",
        content: `**1v2 or 1v3 Tips:**
- Don't panic - stay calm
- Isolate enemies - fight 1v1
- Use abilities wisely
- Position near cover
- Let enemies make mistakes

**Time Management:**
- Attackers: Don't rush if winning
- Defenders: Stall if outnumbered
- Use the clock to your advantage

**Pro Tip:** In 1vX, the enemy team often gets overconfident. Use gloo walls and movement to separate them.`
      }
    ]
  },
  'rank-push': {
    title: "Rank Push to Grandmaster",
    description: "Complete guide to climbing ranked from Bronze to Grandmaster with proven strategies.",
    category: "Ranked",
    readTime: "15 min",
    color: "#F59E0B",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    sections: [
      {
        title: "Understanding Ranked",
        content: `**Rank Tiers:**
- Bronze → Silver → Gold → Platinum → Diamond → Heroic → Grandmaster

**Point System:**
- Placement points (survive longer = more points)
- Kill points (+20 per kill in higher ranks)
- Negative points for early deaths

**Key Insight:** Placement gives more points than kills in lower ranks. Survival is priority until Diamond.`
      },
      {
        title: "Best Landing Spots",
        content: `**Safe Landing Spots (High Loot, Low Traffic):**
- Rim Nam Village
- Shipyard (edges)
- Mill
- Bullseye

**Hot Drops (High Risk, High Reward):**
- Peak
- Bimasakti Strip
- Clock Tower

**Strategy by Rank:**
- Bronze-Gold: Land safe, loot up
- Platinum-Diamond: Contest medium spots
- Heroic+: Adapt based on flight path`
      },
      {
        title: "Mid Game Rotations",
        content: `**Rotation Tips:**
1. Move early before zone closes
2. Use vehicles for long rotations
3. Stay on zone edge, not center
4. Avoid unnecessary fights
5. Third-party ongoing battles

**Positioning:**
- High ground advantage
- Compounds for cover
- Zone edge for escape routes

**When to Fight:**
- When you have advantage
- Third-party opportunities
- Need kills for points (Heroic+)`
      },
      {
        title: "End Game Mastery",
        content: `**Final Circles:**
- Save gloo walls for end game
- Pre-position before zone moves
- Track remaining players
- Don't reveal position early

**Top 5 Strategy:**
1. Count players and positions
2. Let others fight first
3. Save abilities for final fight
4. Aim for placement, then kills

**Character Loadout for Ranked:**
- DJ Alok (healing)
- Moco (enemy tracking)
- Kelly (movement speed)
- Jota or Shirou (combat advantage)`
      }
    ]
  },
  'sensitivity': {
    title: "Best Sensitivity Settings 2026",
    description: "Optimize your aim with perfect sensitivity settings. Includes pro player settings and device-specific recommendations.",
    category: "Settings",
    readTime: "8 min",
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=800&q=80",
    sections: [
      {
        title: "Understanding Sensitivity",
        content: `**What Each Setting Does:**
- **General:** Overall look sensitivity
- **Red Dot:** Aim with red dot sight
- **2x Scope:** Medium range aiming
- **4x Scope:** Long range aiming
- **Sniper Scope:** AWM, Kar98k, etc.
- **Free Look:** Looking around without moving

**Higher vs Lower Sensitivity:**
- Higher = Faster turns, less precision
- Lower = Slower turns, more precision

**Find Your Style:**
- Aggressive players: Higher sensitivity
- Snipers: Lower scope sensitivity
- Balanced: Medium all around`
      },
      {
        title: "Recommended Settings",
        content: `**Balanced Settings (Good Starting Point):**
| Setting | Value |
|---------|-------|
| General | 80-90 |
| Red Dot | 70-80 |
| 2x Scope | 60-70 |
| 4x Scope | 50-60 |
| Sniper | 40-50 |
| Free Look | 70-80 |

**For Mobile (Small Screen):**
- Increase all by 5-10
- Higher free look for awareness

**For Tablet (Large Screen):**
- Decrease all by 5-10
- More precision possible`
      },
      {
        title: "Pro Player Settings",
        content: `**Aggressive Pro Settings:**
| Setting | Value |
|---------|-------|
| General | 95-100 |
| Red Dot | 85-90 |
| 2x Scope | 75-80 |
| 4x Scope | 60-65 |
| Sniper | 50-55 |

**Sniper Pro Settings:**
| Setting | Value |
|---------|-------|
| General | 75-80 |
| Red Dot | 65-70 |
| 2x Scope | 55-60 |
| 4x Scope | 45-50 |
| Sniper | 35-40 |

**Note:** Pro settings require practice. Start with balanced and adjust gradually.`
      },
      {
        title: "How to Find Your Perfect Settings",
        content: `**Step-by-Step Process:**
1. Start with recommended balanced settings
2. Play 5-10 matches in training mode
3. If overshooting targets → lower sensitivity
4. If too slow to track → increase sensitivity
5. Adjust by 5 points at a time
6. Test for 20+ matches before changing again

**Training Routine:**
- Aim training for 10 min daily
- Practice tracking moving targets
- Snap aim between targets
- Test all scope types

**Common Mistakes:**
- Changing too often
- Copying pros without practice
- Same settings for all scopes
- Ignoring free look sensitivity`
      }
    ]
  },
  'character-combos': {
    title: "Best Character Combinations",
    description: "Learn the most powerful character skill combinations for dominating in Free Fire.",
    category: "Strategy",
    readTime: "10 min",
    color: "#EC4899",
    image: "https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg",
    sections: [
      {
        title: "How Character Skills Work",
        content: `**Skill Slots:**
- 1 Active ability (manual activation)
- 3 Passive abilities (always on)

**Building Your Combo:**
1. Choose active based on playstyle
2. Add passives that complement it
3. Consider game mode (BR vs CS)

**Meta Consideration:**
Your combo should cover:
- Survival/Healing
- Combat advantage
- Information/Utility`
      },
      {
        title: "Best Rush Combos",
        content: `**Aggressive Rusher Build:**
- **Active:** Chrono (Time Turner shield)
- **Passive 1:** Jota (HP on kills)
- **Passive 2:** Kelly (Speed boost)
- **Passive 3:** Hayato (Armor pen when low HP)

**Alternative Rush Build:**
- **Active:** Skyler (Destroy gloo walls)
- **Passive 1:** Shirou (Mark attackers)
- **Passive 2:** D-Bee (Accuracy while moving)
- **Passive 3:** Dasha (Recoil control)

**Playstyle:** Push aggressively, use abilities to break enemy defense.`
      },
      {
        title: "Best Support Combos",
        content: `**Team Support Build:**
- **Active:** DJ Alok (Healing aura + speed)
- **Passive 1:** Kapella (Boost healing effects)
- **Passive 2:** Moco (Tag enemies for team)
- **Passive 3:** Olivia (Extra HP on revives)

**Solo Support Build:**
- **Active:** K (EP recovery modes)
- **Passive 1:** A124 (Convert EP to HP)
- **Passive 2:** Miguel (EP on kills)
- **Passive 3:** Jota (HP on gun kills)

**Playstyle:** Stay alive, support team, provide information.`
      },
      {
        title: "Best Solo vs Squad Combos",
        content: `**Ultimate Solo vs Squad:**
- **Active:** Chrono (Shield for 1vX)
- **Passive 1:** Jota (Sustain through fights)
- **Passive 2:** Shirou (Know who's shooting you)
- **Passive 3:** Kelly (Escape speed)

**Stealth Solo Build:**
- **Active:** Wukong (Bush camouflage)
- **Passive 1:** Rafael (Silent sniping)
- **Passive 2:** Moco (Track enemies)
- **Passive 3:** Laura (Scoped accuracy)

**Key Tips for Solo vs Squad:**
- Never fight all 4 at once
- Use abilities to isolate enemies
- Third-party when squads fight
- Positioning over aggression`
      }
    ]
  },
  'weapon-mastery': {
    title: "Weapon Mastery Guide",
    description: "Master every weapon type in Free Fire with recoil patterns, attachments, and usage tips.",
    category: "Weapons",
    readTime: "14 min",
    color: "#3B82F6",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&q=80",
    sections: [
      {
        title: "Assault Rifles",
        content: `**Top ARs Ranked:**
1. **Groza** - Highest damage AR, airdrop only
2. **AK** - High damage, harder recoil
3. **M4A1** - Balanced, easy recoil
4. **SCAR** - Good for beginners

**AR Tips:**
- Tap fire at long range
- Full auto for close-medium
- Use foregrip to reduce recoil
- 2x scope is ideal for most situations

**Best Attachments:**
- Muzzle: Silencer (stealth) or Flash Hider
- Magazine: Extended for more ammo
- Foregrip: Bipod for stability
- Scope: 2x or Red Dot`
      },
      {
        title: "SMGs",
        content: `**Top SMGs Ranked:**
1. **MP40** - Fast fire rate, high DPS
2. **Vector** - Fastest TTK up close
3. **UMP** - Balanced, good range
4. **Thompson** - High damage per shot

**SMG Tips:**
- Best for close range (0-30m)
- Hip fire in close encounters
- Strafe while shooting
- Pair with AR or Sniper

**Movement Technique:**
SMGs have high mobility - use it! Crouch spam and strafe to be harder to hit while maintaining accuracy.`
      },
      {
        title: "Snipers",
        content: `**Top Snipers Ranked:**
1. **AWM** - One shot headshot (airdrop)
2. **M82B** - Penetrates gloo walls
3. **Kar98k** - Good damage, common
4. **SVD** - Semi-auto, consistent

**Sniping Tips:**
- Always aim for headshots
- Hold breath for stability
- Pre-aim common positions
- Don't stay scoped too long

**Best Practices:**
- Find elevated positions
- Keep distance from enemies
- Have secondary for close range
- Practice flick shots in training`
      },
      {
        title: "Shotguns",
        content: `**Top Shotguns Ranked:**
1. **M1887** - Highest burst, 2 shots
2. **M1014** - Fast follow-up shots
3. **SPAS12** - Good range for shotgun

**Shotgun Tips:**
- ADS for tighter spread
- Jump shot for surprise
- Aim center mass, not head
- Best in buildings/close quarters

**When to Use Shotguns:**
- Clash Squad early rounds
- Building clearing
- Finishing downed enemies
- Close range ambushes

**Pro Technique:** Jump + Shoot for aerial advantage, then crouch immediately after landing.`
      }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(GUIDES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = GUIDES[slug];

  if (!guide) {
    return { title: 'Guide Not Found' };
  }

  return {
    title: `${guide.title} | Free Fire Guide`,
    description: guide.description,
    keywords: [guide.title, 'free fire guide', guide.category, 'free fire tips', 'free fire strategy'],
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${baseUrl}/free-fire/guides/${slug}`,
      images: [{ url: guide.image, alt: guide.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: guide.title,
      description: guide.description,
    },
    alternates: {
      canonical: `${baseUrl}/free-fire/guides/${slug}`,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = GUIDES[slug];

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <img src={guide.image} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${guide.color}90, ${guide.color}50)` }} />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire" className="hover:opacity-80">Free Fire</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire/guides" className="hover:opacity-80">Guides</Link>
            <span className="mx-2">/</span>
            <span style={{ color: '#fff' }}>{guide.title}</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-sm font-bold"
              style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
            >
              {guide.category}
            </span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>•</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{guide.readTime} read</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            {guide.title}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">
            {guide.description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        {/* Table of Contents */}
        <div
          className="mb-12 p-6 rounded-2xl"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <h2 className="font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
            📑 Table of Contents
          </h2>
          <ul className="space-y-2">
            {guide.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                  style={{ color: guide.color }}
                >
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: `${guide.color}20` }}>
                    {i + 1}
                  </span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {guide.sections.map((section, i) => (
          <div
            key={i}
            id={`section-${i}`}
            className="mb-12 scroll-mt-24"
          >
            <h2
              className="text-2xl font-bold mb-6 pb-2 border-b-2"
              style={{ color: 'var(--text-primary)', borderColor: guide.color }}
            >
              {section.title}
            </h2>
            <div
              className="prose prose-lg max-w-none"
              style={{ color: 'var(--text-muted)' }}
            >
              {section.content.split('\n\n').map((paragraph, pi) => (
                <div key={pi} className="mb-4">
                  {paragraph.startsWith('**') && paragraph.includes(':**') ? (
                    <div className="mb-4">
                      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--text-primary)' }}>
                        {paragraph.split(':**')[0].replace(/\*\*/g, '')}
                      </h3>
                      <p style={{ whiteSpace: 'pre-line' }}>
                        {paragraph.split(':**')[1]}
                      </p>
                    </div>
                  ) : paragraph.startsWith('|') ? (
                    <div className="overflow-x-auto mb-4">
                      <table className="w-full border-collapse">
                        <tbody>
                          {paragraph.split('\n').filter(row => row.includes('|') && !row.includes('---')).map((row, ri) => (
                            <tr key={ri} style={{ background: ri === 0 ? 'var(--surface-200)' : 'transparent' }}>
                              {row.split('|').filter(cell => cell.trim()).map((cell, ci) => (
                                ri === 0 ? (
                                  <th key={ci} className="px-4 py-2 text-left font-bold" style={{ color: 'var(--text-primary)', borderBottom: '1px solid var(--border)' }}>
                                    {cell.trim()}
                                  </th>
                                ) : (
                                  <td key={ci} className="px-4 py-2" style={{ borderBottom: '1px solid var(--border)' }}>
                                    {cell.trim()}
                                  </td>
                                )
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : paragraph.startsWith('- ') || paragraph.match(/^\d+\./) ? (
                    <ul className="list-disc list-inside space-y-1 mb-4">
                      {paragraph.split('\n').map((item, ii) => (
                        <li key={ii}>{item.replace(/^[-\d.]+\s*/, '').replace(/\*\*/g, '')}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ whiteSpace: 'pre-line' }}>
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <Link
            href="/free-fire/guides"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:gap-3"
            style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Guides
          </Link>
          <Link
            href="/free-fire/characters"
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover:gap-3"
            style={{ background: guide.color, color: '#fff' }}
          >
            View Characters
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
