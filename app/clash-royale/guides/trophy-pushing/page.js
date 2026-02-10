import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';
import { GAME_IMAGES } from '@/lib/blog/images';

const images = GUIDE_IMAGES.trophyPushGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Clash Royale Trophy Pushing Guide 2026 - Reach Ultimate Champion",
  description: "Learn how to push trophies in Clash Royale 2026. Arena progression, league system, best pushing decks, tilt management, matchup knowledge, and the path to Ultimate Champion.",
  keywords: [
    "trophy pushing",
    "ultimate champion",
    "how to push trophies",
    "ladder guide",
    "arena progression",
    "clash royale leagues",
    "tilt management",
    "ladder tips"
  ],
  openGraph: {
    title: "Clash Royale Trophy Pushing Guide 2026 - Reach Ultimate Champion",
    description: "The complete guide to climbing the Clash Royale ladder from Arena 1 to Ultimate Champion.",
    images: [{
      url: images.hero.url,
      width: 1200,
      height: 630,
      alt: images.hero.alt
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clash Royale Trophy Pushing Guide 2026",
    description: "Reach Ultimate Champion with proven ladder strategies!",
  },
  alternates: {
    canonical: "/clash-royale/guides/trophy-pushing"
  }
};

export default function TrophyPushingPage() {
  const publishDate = "2026-02-08";
  const updateDate = "2026-02-08";

  const faqs = [
    { question: "How many trophies do I need for Ultimate Champion?", answer: "You need 8,000+ trophies to reach Ultimate Champion, the highest league in Clash Royale. The path goes: Challenger I (4,000) → Challenger II (4,300) → Challenger III (4,600) → Master I (5,000) → Master II (5,300) → Master III (5,600) → Champion (6,000) → Grand Champion (6,300) → Royal Champion (6,600) → Ultimate Champion (8,000)." },
    { question: "What is the best deck for pushing trophies?", answer: "The best pushing decks are ones you've fully maxed and mastered. 2.6 Hog Cycle, Log Bait, and Golem Beatdown are popular choices. The key is consistency - play one deck you know inside and out rather than switching constantly." },
    { question: "How do I stop tilting in Clash Royale?", answer: "Set a loss limit (stop after 3 losses in a row). Take breaks between matches. Play when mentally fresh, not tired or frustrated. Remember that losing streaks are normal - even pro players lose 40% of their matches." },
    { question: "Does card level matter for pushing?", answer: "Absolutely. Card levels become critical above 5,000 trophies where most players have maxed or near-maxed cards. Being even 1-2 levels below your opponent is a significant disadvantage. Focus on maxing one deck before pushing seriously." },
    { question: "What time is best to push trophies?", answer: "Early morning and late night tend to have fewer players, meaning faster matches but potentially harder opponents. Weekends have more casual players. Avoid pushing right after a season reset when the ladder is compressed with top players." },
    { question: "Should I push with one deck or switch decks?", answer: "Always push with one deck. Mastering one deck means you know every matchup, every interaction, and every optimal play. Switching decks resets your muscle memory and leads to mistakes. Only switch if your deck gets hard-countered by a balance change." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Clash Royale Trophy Pushing Guide 2026: Reach Ultimate Champion"
        description="Complete guide to pushing trophies in Clash Royale. Arena progression, league system, best decks, and mindset tips."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/trophy-pushing`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Trophy Pushing", url: `${baseUrl}/clash-royale/guides/trophy-pushing` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/clash-royale" className="hover:text-blue-500">Clash Royale</Link>
          <span className="mx-2">/</span>
          <Link href="/clash-royale/guides" className="hover:text-blue-500">Guides</Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Trophy Pushing</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' }}>
            Ladder Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 8, 2026</time>
          <span>17 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Clash Royale Trophy Pushing Guide 2026: Reach Ultimate Champion
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Climbing the Clash Royale ladder is the ultimate test of skill, deck mastery, and mental fortitude. Whether you're stuck in <strong style={{ color: 'var(--text-primary)' }}>Challenger leagues</strong> or pushing for Ultimate Champion, this guide gives you the strategies, mindset tips, and deck recommendations to reach your highest trophies ever.
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
            Push through the leagues to reach Ultimate Champion at 8,000 trophies
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#arena-progression", text: "Arena & League Progression" },
              { href: "#best-pushing-decks", text: "Best Decks for Pushing" },
              { href: "#mindset", text: "Winning Mindset & Tilt Management" },
              { href: "#matchup-knowledge", text: "Matchup Knowledge" },
              { href: "#pushing-tips", text: "Advanced Pushing Tips" },
              { href: "#league-breakdown", text: "League-by-League Breakdown" },
              { href: "#season-strategy", text: "Season Reset Strategy" },
              { href: "#faq", text: "FAQ" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block hover:text-blue-500 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {i + 1}. {item.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 1: Arena Progression */}
        <section id="arena-progression" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Arena & League Progression
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Clash Royale's ladder system takes you through themed arenas, then into the competitive league system. Here's the full progression path:
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crArenas.url}
              alt={GAME_IMAGES.crArenas.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Progress through arenas to unlock all cards, then climb the league ladder
            </figcaption>
          </figure>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="text-left p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Arena / League</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Trophies</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Key Milestone</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Arenas 1-15", trophies: "0-4,000", milestone: "Unlock all cards" },
                  { name: "Challenger I", trophies: "4,000", milestone: "League ladder begins" },
                  { name: "Challenger II", trophies: "4,300", milestone: "Better season chest" },
                  { name: "Challenger III", trophies: "4,600", milestone: "Solid rewards tier" },
                  { name: "Master I", trophies: "5,000", milestone: "Competitive territory" },
                  { name: "Master II", trophies: "5,300", milestone: "Need maxed cards" },
                  { name: "Master III", trophies: "5,600", milestone: "High-skill players" },
                  { name: "Champion", trophies: "6,000", milestone: "Elite player tier" },
                  { name: "Grand Champion", trophies: "6,300", milestone: "Top 1% of players" },
                  { name: "Royal Champion", trophies: "6,600", milestone: "Near-pro level" },
                  { name: "Ultimate Champion", trophies: "8,000+", milestone: "The pinnacle" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium" style={{ color: i >= 7 ? '#FFD700' : 'var(--text-primary)' }}>{row.name}</td>
                    <td className="p-3 text-center font-bold" style={{ color: '#3B82F6' }}>{row.trophies}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.milestone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Best Pushing Decks */}
        <section id="best-pushing-decks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Decks for Pushing Trophies
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The best pushing deck is the one you've <strong style={{ color: 'var(--text-primary)' }}>maxed and mastered</strong>. However, these archetypes perform best on ladder:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>2.6 Hog Cycle (Best for Skilled Players)</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>2.6 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Hog Rider, Musketeer, Ice Golem, Fireball, The Log, Skeletons, Ice Spirit, Cannon
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Why It Works:</strong> Cheap cycle means you always have an answer. Punishes mistakes instantly. Gets better the more skilled you become.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Log Bait (Best Win Rate)</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>3.3 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Goblin Barrel, Princess, Goblin Gang, Knight, Inferno Tower, Rocket, Ice Spirit, The Log
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Why It Works:</strong> Consistent damage through bait mechanics. Works well even against overleveled opponents. Strong defense with Inferno Tower.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Golem Beatdown (Best for Easy Wins)</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>4.1 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Golem, Night Witch, Lumberjack, Baby Dragon, Mega Minion, Lightning, Tornado, Barb Barrel
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Why It Works:</strong> Overwhelming pushes in double elixir. Straightforward game plan. Punishes passive play hard.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Mindset */}
        <section id="mindset" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Winning Mindset & Tilt Management
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Your mental state is as important as your deck. <strong style={{ color: 'var(--text-primary)' }}>Tilt</strong> (playing worse after losses due to frustration) is the number one reason players drop trophies.
          </p>

          <div className="space-y-4">
            {[
              { num: "1", title: "Set a Loss Limit", desc: "Stop playing after 3 consecutive losses. No exceptions. Come back in 30 minutes or switch to challenges/party mode to reset your mental state.", color: "#EF4444" },
              { num: "2", title: "Play When Fresh", desc: "Push trophies when you're alert and focused - not when tired, distracted, or frustrated. Your reaction time and decision-making suffer when you're not at 100%.", color: "#3B82F6" },
              { num: "3", title: "Focus on Improvement, Not Trophies", desc: "Instead of obsessing over your trophy count, focus on making better plays each game. Did you manage elixir well? Did you read their cards correctly? Trophy gains follow skill gains.", color: "#10B981" },
              { num: "4", title: "Accept Hard Counters", desc: "Some matchups are nearly unwinnable. Losing to a hard counter isn't your fault - it's matchmaking. Don't tilt over a 20/80 matchup. Focus on winning the 50/50s and 60/40s.", color: "#F59E0B" },
              { num: "5", title: "Review Your Replays", desc: "After a loss, watch the replay to find your mistake. Was it an elixir leak? Bad placement? Overcommitting? Learning from losses is what separates average players from great ones.", color: "#8B5CF6" },
            ].map((rule) => (
              <div key={rule.num} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white" style={{ background: rule.color }}>
                  {rule.num}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: rule.color }}>{rule.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{rule.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Matchup Knowledge */}
        <section id="matchup-knowledge" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Matchup Knowledge
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Understanding matchups is critical for high-level pushing. Know how your deck performs against every archetype:
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crLeagues.url}
              alt={GAME_IMAGES.crLeagues.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Climb through the leagues with strong matchup knowledge
            </figcaption>
          </figure>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="text-left p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Your Deck</th>
                  <th className="text-center p-3 font-bold" style={{ color: '#10B981' }}>Favorable</th>
                  <th className="text-center p-3 font-bold" style={{ color: '#F59E0B' }}>Even</th>
                  <th className="text-center p-3 font-bold" style={{ color: '#EF4444' }}>Unfavorable</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { deck: "Hog Cycle", favorable: "Beatdown, Graveyard", even: "Bridge Spam", unfavorable: "X-Bow, Tornado decks" },
                  { deck: "Log Bait", favorable: "Beatdown, Spell-heavy", even: "Hog Cycle", unfavorable: "Arrows + Log, Triple spell" },
                  { deck: "Golem", favorable: "Cycle decks, Siege", even: "Other Beatdown", unfavorable: "PEKKA, Inferno + fast cycle" },
                  { deck: "LavaLoon", favorable: "Ground decks, X-Bow", even: "Other air decks", unfavorable: "Heavy air defense, Cycle" },
                  { deck: "PEKKA BS", favorable: "Golem, RG, Tanks", even: "Graveyard", unfavorable: "Log Bait, Cycle decks" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium" style={{ color: 'var(--text-primary)' }}>{row.deck}</td>
                    <td className="p-3 text-center" style={{ color: '#10B981' }}>{row.favorable}</td>
                    <td className="p-3 text-center" style={{ color: '#F59E0B' }}>{row.even}</td>
                    <td className="p-3 text-center" style={{ color: '#EF4444' }}>{row.unfavorable}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: '#3B82F6' }}>Pro Tip:</strong> Track your matchup win rates. If you're losing 70%+ against a specific deck, watch YouTube guides for that specific matchup. There's almost always a winning strategy if you know it.
            </p>
          </div>
        </section>

        {/* Section 5: Advanced Pushing Tips */}
        <section id="pushing-tips" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Advanced Pushing Tips
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            These advanced strategies separate Master-level players from Champion-level players:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { tip: "Track Opponent's Elixir", desc: "Count their elixir by tracking what they play. If they're low, punish immediately with a quick push.", color: "#EF4444" },
              { tip: "Card Counting", desc: "Remember all 8 of their cards. Once you've seen them all, you know exactly what they have in hand for perfect predictions.", color: "#3B82F6" },
              { tip: "Lane Pressure", desc: "When losing one lane, pressure the opposite lane. This forces them to split elixir between attack and defense.", color: "#F59E0B" },
              { tip: "Spell Cycling", desc: "In overtime with a tower at 500 HP or less, cycle Fireballs or Rockets to chip it down. A safe win when defense is solid.", color: "#8B5CF6" },
              { tip: "King Tower Activation", desc: "Intentionally activate your King Tower early using Tornado or building placement. The extra tower DPS wins games.", color: "#10B981" },
              { tip: "Save Win Condition", desc: "Don't play your win condition into their counter. Wait until you've baited it out or they've used elixir on something else.", color: "#EC4899" },
            ].map((item) => (
              <div key={item.tip} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: `4px solid ${item.color}` }}>
                <h3 className="font-bold" style={{ color: item.color }}>{item.tip}</h3>
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: League Breakdown */}
        <section id="league-breakdown" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            League-by-League Breakdown
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Each league range has its own meta and challenges. Here's what to expect:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#10B981' }}>4,000-5,000: Challenger Leagues</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>What to Expect:</strong> Mixed card levels (10-13), lots of Mega Knight and Wizard, inconsistent opponents.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>How to Climb:</strong> A solid meta deck at level 11-12 is enough. Focus on basic fundamentals: elixir management, troop placement, and not over-committing.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#3B82F6' }}>5,000-6,000: Master Leagues</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>What to Expect:</strong> Mostly maxed cards, meta decks become common, opponents know basic strategy.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>How to Climb:</strong> You need a maxed or near-maxed deck. Focus on matchup knowledge and reducing mistakes. Learn when to pressure and when to defend.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#F59E0B' }}>6,000-7,000: Champion Leagues</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>What to Expect:</strong> All maxed cards, skilled opponents, tight matches decided by small advantages.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>How to Climb:</strong> Perfect your micro-plays: tile-perfect placements, optimal timing, prediction spells. Watch pro player replays of your deck.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1), transparent)', border: '1px solid rgba(255, 215, 0, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#FFD700' }}>7,000-8,000+: Ultimate Champion Push</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>What to Expect:</strong> Pro-level players, every match is intense, longest queue times.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>How to Climb:</strong> You need complete deck mastery and near-perfect play. Grind consistently, track your stats, and study every loss. This is the top 0.1% of players.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Season Strategy */}
        <section id="season-strategy" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Season Reset Strategy
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Every season, trophies reset and you'll need to climb again. Here's how to maximize each season:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #EF4444' }}>
              <h3 className="font-bold" style={{ color: '#EF4444' }}>Week 1: Wait</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Don't push immediately after reset. Top players are compressed into lower trophy ranges, making matches extremely hard. Play challenges or party mode instead.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #F59E0B' }}>
              <h3 className="font-bold" style={{ color: '#F59E0B' }}>Week 2: Warm Up</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Start pushing casually. The ladder has spread out and matchmaking is more fair. Use this week to warm up your deck skills and get back into rhythm.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #10B981' }}>
              <h3 className="font-bold" style={{ color: '#10B981' }}>Week 3: Push Hard</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>This is the best time to push. Trophy inflation means easier opponents at higher ranges. Dedicate focused sessions to climbing as high as possible.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #8B5CF6' }}>
              <h3 className="font-bold" style={{ color: '#8B5CF6' }}>Week 4: Final Push</h3>
              <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>Last chance to reach your season goal. Play your best sessions and stop when you hit your target. The season chest reward is based on your highest trophies.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Start Your Climb to Ultimate Champion!
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Trophy pushing is a marathon, not a sprint. Master one deck, manage your tilt, learn your matchups, and push during the right times. Every player who reaches Ultimate Champion started exactly where you are now. The ladder is waiting - go claim your trophies!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/guides/best-decks"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              Best Meta Decks
            </Link>
            <Link
              href="/clash-royale/guides/clan-war"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              ← Clan War Guide
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
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Game Version:</span> Season 56
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
