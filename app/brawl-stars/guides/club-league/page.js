import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';

const images = GUIDE_IMAGES.clubLeagueGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Brawl Stars Club League Strategy Guide 2026 | Maximize Rewards",
  description: "Master Club League with our complete strategy guide. Learn ticket management, team coordination, best brawlers, and how to climb leagues for maximum rewards in 2026.",
  keywords: [
    "brawl stars club league",
    "club league strategy",
    "club league guide",
    "club league rewards",
    "club league tips",
    "how to win club league",
    "club league brawlers",
    "club league tickets",
    "brawl stars club guide",
    "club league 2026"
  ],
  openGraph: {
    title: "Brawl Stars Club League Strategy Guide 2026 | Maximize Rewards",
    description: "Complete guide to dominating Club League with team coordination and smart strategies.",
    images: [{
      url: images.hero.url,
      width: 1280,
      height: 720,
      alt: images.hero.alt
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Club League Strategy Guide - Brawl Stars 2026",
    description: "Dominate Club League and maximize your rewards!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/club-league"
  }
};

export default function ClubLeagueGuidePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Brawl Stars Club League Strategy Guide 2026: Maximize Rewards"
        description="Master Club League with our complete strategy guide. Learn ticket management, team coordination, best brawlers, and how to climb leagues for maximum rewards in 2026."
        image={images.hero.url}
        datePublished="2026-02-02"
        dateModified="2026-02-02"
        url={`${baseUrl}/brawl-stars/guides/club-league`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Club League Guide", url: `${baseUrl}/brawl-stars/guides/club-league` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/brawl-stars" className="hover:text-orange-500">Brawl Stars</Link>
          <span className="mx-2">/</span>
          <Link href="/brawl-stars/guides" className="hover:text-orange-500">Guides</Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Club League</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
            Competitive Guide
          </span>
          <time dateTime="2026-02-02">Published: Feb 2, 2026</time>
          <span>10 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Club League Strategy Guide 2026: Dominate & Maximize Rewards
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Club League</strong> is the best way to earn Power Points, Coins, and Club Coins in Brawl Stars. This guide covers everything from finding the right club to coordinating with teammates for maximum wins.
        </p>

        {/* Hero Image */}
        <figure className="mb-10">
          <img
            src={images.hero.url}
            alt={images.hero.alt}
            className="w-full rounded-2xl"
            loading="eager"
          />
          <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
            Club League is the premier competitive team mode in Brawl Stars
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#what-is-club-league", text: "What is Club League?" },
              { href: "#how-it-works", text: "How Club League Works" },
              { href: "#rewards", text: "Club League Rewards" },
              { href: "#finding-club", text: "Finding the Right Club" },
              { href: "#ticket-strategy", text: "Ticket Management Strategy" },
              { href: "#best-brawlers", text: "Best Brawlers for Club League" },
              { href: "#team-coordination", text: "Team Coordination Tips" },
              { href: "#faq", text: "FAQ" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block hover:text-orange-500 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {i + 1}. {item.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 1: What is Club League */}
        <section id="what-is-club-league" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What is Club League?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Club League</strong> is a weekly competitive event where clubs battle against other clubs to climb leagues and earn rewards. It's the primary way to earn Club Coins, which are essential for progression.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Unlike regular matches, Club League rewards <strong style={{ color: 'var(--text-primary)' }}>team coordination</strong> and consistent participation from all club members. A well-organized club can earn significantly more rewards than a disorganized one.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#10B981' }}>Why Club League Matters</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Primary source of Club Coins</li>
                <li>• Exclusive rewards each season</li>
                <li>• Team-based competitive play</li>
                <li>• Weekly progression opportunities</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#F59E0B' }}>Requirements</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Be in a club with 4+ members</li>
                <li>• Club must opt into Club League</li>
                <li>• Play during Club League days</li>
                <li>• Use tickets before they expire</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: How It Works */}
        <section id="how-it-works" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How Club League Works
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Club League runs on a weekly cycle with three play days. Here's the structure:
          </p>

          <figure className="mb-6">
            <img
              src={images.matchmaking.url}
              alt={images.matchmaking.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Club League matchmaking and ticket system
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Weekly Schedule</h3>
          <div className="space-y-3 mb-6">
            {[
              { day: "Wednesday", action: "Day 1 - First 4 tickets available", tip: "Use all tickets before reset" },
              { day: "Friday", action: "Day 2 - Next 4 tickets available", tip: "Coordinate with clubmates" },
              { day: "Sunday", action: "Day 3 - Final 4 tickets available", tip: "Last chance for the week" },
              { day: "Monday", action: "Season ends - Rewards distributed", tip: "Check your Club Coins!" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-24 text-center">
                  <span className="font-bold" style={{ color: '#8B5CF6' }}>{item.day}</span>
                </div>
                <div className="flex-1">
                  <p className="font-medium" style={{ color: 'var(--text-primary)' }}>{item.action}</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.tip}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Ticket System</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl mb-2">🎟️</div>
              <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>4 Tickets/Day</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Each player gets 4 tickets per play day</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl mb-2">⏰</div>
              <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>Use or Lose</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Tickets don't carry over - use them!</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl mb-2">👥</div>
              <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>Team Play</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Play with clubmates for bonus trophies</p>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#8B5CF6' }}>Team Bonus:</p>
            <p style={{ color: 'var(--text-muted)' }}>Playing with clubmates gives <strong>bonus Club Trophies</strong>! A full team of 3 clubmates earns the maximum bonus. Solo queue still helps, but team play is optimal.</p>
          </div>
        </section>

        {/* Section 3: Rewards */}
        <section id="rewards" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Club League Rewards
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Rewards scale based on your club's league and final placement. Higher leagues mean significantly better rewards.
          </p>

          <figure className="mb-6">
            <img
              src={images.rewards.url}
              alt={images.rewards.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Club League rewards by tier
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>League Tiers</h3>
          <div className="space-y-3 mb-6">
            {[
              { tier: "Legendary", color: "#FFD700", coins: "1200+", desc: "Top tier - maximum rewards" },
              { tier: "Mythic", color: "#9B59B6", coins: "900-1100", desc: "Excellent rewards for active clubs" },
              { tier: "Diamond", color: "#3B82F6", coins: "600-800", desc: "Good rewards, competitive league" },
              { tier: "Gold", color: "#F59E0B", coins: "400-550", desc: "Solid rewards for growing clubs" },
              { tier: "Silver", color: "#9E9E9E", coins: "250-350", desc: "Entry-level competitive play" },
              { tier: "Bronze", color: "#CD7F32", coins: "100-200", desc: "Starting league for new clubs" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'var(--surface-100)', border: `1px solid ${item.color}30` }}>
                <div className="w-24 text-center">
                  <span className="font-bold" style={{ color: item.color }}>{item.tier}</span>
                </div>
                <div className="flex-1">
                  <span style={{ color: 'var(--text-muted)' }}>{item.desc}</span>
                </div>
                <div className="text-right">
                  <span className="font-bold" style={{ color: item.color }}>{item.coins}</span>
                  <span className="text-xs block" style={{ color: 'var(--text-muted)' }}>Club Coins</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FFD700' }}>Club Coins Usage:</p>
            <p style={{ color: 'var(--text-muted)' }}>Club Coins buy Power Points from the Club Shop - the best source of progression materials. A Legendary league club can max brawlers much faster than lower leagues!</p>
          </div>
        </section>

        {/* Section 4: Finding the Right Club */}
        <section id="finding-club" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Finding the Right Club
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Your club choice dramatically affects your Club League success. Here's what to look for:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Active Members", desc: "Look for clubs with 25+ members who play regularly. Check recent activity before joining.", icon: "👥" },
              { title: "High League Tier", desc: "Join the highest league club that will accept you. Higher tiers = better rewards.", icon: "🏆" },
              { title: "Organized Leadership", desc: "Good clubs have clear rules, Discord servers, and coordinate ticket usage.", icon: "📋" },
              { title: "Similar Skill Level", desc: "Join a club where members match your trophy range for better team play.", icon: "⚖️" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold mb-1" style={{ color: '#FF6B35' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#EF4444' }}>Red Flags to Avoid:</p>
            <ul className="text-sm mt-2 space-y-1" style={{ color: 'var(--text-muted)' }}>
              <li>• Clubs with many inactive members (no recent games)</li>
              <li>• No requirement to use Club League tickets</li>
              <li>• Low trophy requirements with high league (carried by few players)</li>
              <li>• No communication channel (Discord, in-game chat)</li>
            </ul>
          </div>
        </section>

        {/* Section 5: Ticket Strategy */}
        <section id="ticket-strategy" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Ticket Management Strategy
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Smart ticket usage can make the difference between promotion and demotion.
          </p>

          <div className="space-y-4 mb-6">
            {[
              { tip: "Never Let Tickets Expire", desc: "Even solo queue is better than wasting tickets. Use all 4 each day, no matter what.", priority: "Critical" },
              { tip: "Coordinate Play Times", desc: "Schedule with clubmates so you can play together. Use Discord or club chat to organize.", priority: "High" },
              { tip: "Play Your Best Brawlers", desc: "Club League isn't the time to practice. Use your highest power level, most comfortable brawlers.", priority: "High" },
              { tip: "Check Map Rotation", desc: "Know which maps are active and prepare brawler picks accordingly.", priority: "Medium" },
              { tip: "Play Early in the Day", desc: "Don't wait until last minute. Server issues or real life can cause missed tickets.", priority: "Medium" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm" style={{
                  background: item.priority === 'Critical' ? '#EF4444' : item.priority === 'High' ? '#F59E0B' : '#3B82F6',
                  color: '#fff'
                }}>
                  {i + 1}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.tip}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{
                      background: item.priority === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : item.priority === 'High' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                      color: item.priority === 'Critical' ? '#EF4444' : item.priority === 'High' ? '#F59E0B' : '#3B82F6'
                    }}>{item.priority}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Best Brawlers */}
        <section id="best-brawlers" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Brawlers for Club League
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            These brawlers perform consistently well across Club League game modes:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '2px solid #FF6B6B' }}>
              <h3 className="font-bold mb-3" style={{ color: '#FF6B6B' }}>S-Tier (Always Strong)</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li><strong style={{ color: 'var(--text-primary)' }}>Gray</strong> - Portal enables team plays</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Cordelius</strong> - 1v1 elimination machine</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Spike</strong> - Area control in all modes</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Mortis</strong> - Brawl Ball dominance</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Byron</strong> - Best support for teams</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '2px solid #4ECDC4' }}>
              <h3 className="font-bold mb-3" style={{ color: '#4ECDC4' }}>A-Tier (Very Reliable)</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li><strong style={{ color: 'var(--text-primary)' }}>Frank</strong> - Tank for Brawl Ball</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Emz</strong> - Zone control specialist</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Poco</strong> - Double tank enabler</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Piper</strong> - Long-range picks</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Max</strong> - Team speed boost</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 107, 53, 0.1)', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FF6B35' }}>Power Level Matters:</p>
            <p style={{ color: 'var(--text-muted)' }}>In Club League, a Power 11 average brawler often beats a Power 7 meta brawler. Prioritize your highest level brawlers that fit the mode.</p>
          </div>
        </section>

        {/* Section 7: Team Coordination */}
        <section id="team-coordination" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Team Coordination Tips
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Coordinated teams win more than random groups. Here's how to maximize team synergy:
          </p>

          <figure className="mb-6">
            <img
              src={images.teamCoordination.url}
              alt={images.teamCoordination.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Team coordination is key to Club League success
            </figcaption>
          </figure>

          <div className="space-y-4 mb-6">
            {[
              { title: "Use Voice Chat", desc: "Discord voice chat enables real-time callouts. Even simple communication like 'I have Super' helps tremendously." },
              { title: "Plan Compositions", desc: "Before queuing, discuss who plays what. Balance your team with damage, tank, and support." },
              { title: "Call Out Enemy Positions", desc: "Share information about enemy locations, Super charges, and low health targets." },
              { title: "Coordinate Supers", desc: "Chain Supers for devastating combos. Example: Frank stun → Spike Super → team wipe." },
              { title: "Support Your Carry", desc: "If one player is clearly better, play support roles and enable them to carry." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-1" style={{ color: '#8B5CF6' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Recommended Team Comps</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { mode: "Gem Grab", comp: "Gray + Byron + Spike", why: "Portal rotations, healing, area control" },
              { mode: "Brawl Ball", comp: "Frank + Poco + Mortis", why: "Tank wall break, sustain, ball carrier" },
              { mode: "Knockout", comp: "Piper + Cordelius + Max", why: "Picks, assassinations, team mobility" },
              { mode: "Hot Zone", comp: "Emz + Poco + Spike", why: "Zone denial, sustain, control" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <span className="text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block" style={{ background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35' }}>{item.mode}</span>
                <p className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.comp}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.why}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              { q: "What happens if I don't use all my tickets?", a: "Unused tickets are wasted forever. Always use all 4 tickets each day, even if you have to solo queue. Any contribution helps your club." },
              { q: "Can I play Club League with randoms?", a: "Yes, but you earn fewer Club Trophies than playing with clubmates. Team play gives significant bonuses." },
              { q: "How do promotions work?", a: "Top clubs in each group get promoted to higher leagues. Bottom clubs get demoted. Middle stays the same. Exact numbers depend on the league." },
              { q: "Should I leave a club for a better one?", a: "If your current club is inactive or in a low league, yes! Better clubs = better rewards. Just don't hop constantly." },
              { q: "What if my clubmates are bad?", a: "Either help them improve, find better clubmates, or consider joining a more competitive club. Club League requires team effort." },
              { q: "How important is Club League for progression?", a: "Very important! Club Coins from Club League are the best source of Power Points. A Legendary league club can progress 2-3x faster than Bronze." },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Dominate Club League!
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Club League is the key to fast progression in Brawl Stars. Find an active club, use every ticket, and coordinate with your teammates for maximum success.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Remember: consistency beats skill in Club League. A reliable player who uses all tickets is more valuable than a pro who misses half the days. Good luck climbing!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/brawl-stars/tier-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)' }}
            >
              View Tier List
            </Link>
            <Link
              href="/brawl-stars/guides/ranked-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Ranked Guide
            </Link>
            <Link
              href="/brawl-stars/modes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Game Modes
            </Link>
          </div>
        </section>

        {/* Author/Update Info */}
        <div className="p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            <div>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Last Updated:</span> February 2026
            </div>
            <div>
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Club League Season:</span> Active
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <SocialShare
            url="/brawl-stars/guides/club-league"
            title="Brawl Stars Club League Strategy Guide 2026"
            description="Dominate Club League with coordinated team play"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides currentSlug="club-league" />
      </article>
    </div>
  );
}
