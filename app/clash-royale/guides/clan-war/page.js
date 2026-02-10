import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';
import { GAME_IMAGES } from '@/lib/blog/images';

const images = GUIDE_IMAGES.clanWarGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Clash Royale Clan War Guide 2026 - Win More Wars",
  description: "Master Clash Royale Clan Wars in 2026. Complete guide to River Race, best war decks, boat battles, medal maximization, and coordination tips to win every war.",
  keywords: [
    "clan war guide",
    "river race",
    "clan war decks",
    "boat battles",
    "war day",
    "clash royale clan war 2026",
    "clan war medals",
    "war deck building"
  ],
  openGraph: {
    title: "Clash Royale Clan War Guide 2026 - Win More Wars",
    description: "Complete guide to Clan Wars: River Race, best decks, boat battles, and winning strategies.",
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
    title: "Clash Royale Clan War Guide 2026",
    description: "Win more Clan Wars with the best strategies and decks!",
  },
  alternates: {
    canonical: "/clash-royale/guides/clan-war"
  }
};

export default function ClanWarGuidePage() {
  const publishDate = "2026-02-08";
  const updateDate = "2026-02-08";

  const faqs = [
    { question: "How do Clan Wars work in Clash Royale?", answer: "Clan Wars use the River Race format. Your clan races against 4 other clans to cross the river first. You earn Fame (medals) by winning battles with your war decks. The first clan to reach the finish line wins the best rewards." },
    { question: "How many war decks do I need?", answer: "You need 4 war decks for Clan War. Each deck can only be used once per war day, so you need 32 unique cards across all 4 decks. Plan your decks carefully so each one is competitive." },
    { question: "What are boat battles?", answer: "Boat battles let you attack enemy clan boats to slow their progress. You fight against a pre-set deck and if you win, you damage their boat. When a boat is fully damaged, that clan can't earn Fame until they repair it." },
    { question: "How do I earn more medals in war?", answer: "Win all 4 deck battles each war day for maximum medals. Use your strongest deck first. If you lose, you earn fewer medals. Boat battles also give medals but less than deck wins. Complete all attacks every day." },
    { question: "What happens if my cards aren't high level?", answer: "In Clan War, cards are boosted to a minimum tournament standard (Level 11). However, if your cards are above Level 11, they stay at their higher level. This means maxed players have an advantage, but anyone can compete." },
    { question: "How do I coordinate with my clan for war?", answer: "Communication is key. Use clan chat to coordinate attack times, share successful decks, and plan boat battle attacks. Top clans assign specific roles - some members focus on deck battles while others target boats." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Clash Royale Clan War Guide 2026: Win More Wars"
        description="Master Clan Wars with River Race strategies, best war decks, boat battles, and coordination tips."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/clan-war`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Clan War", url: `${baseUrl}/clash-royale/guides/clan-war` }
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
          <span style={{ color: 'var(--text-primary)' }}>Clan War</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' }}>
            War Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 8, 2026</time>
          <span>16 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Clash Royale Clan War Guide 2026: Win More Wars
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Clan Wars are the <strong style={{ color: 'var(--text-primary)' }}>best source of rewards</strong> in Clash Royale, providing gold, cards, wild cards, and magic items every week. This guide covers everything you need to know about the River Race format, building 4 competitive war decks, winning boat battles, and maximizing your clan's war performance.
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
            Clan War River Race - compete against 4 other clans for the best rewards
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#river-race", text: "River Race Format Explained" },
              { href: "#war-decks", text: "Building 4 War Decks" },
              { href: "#best-war-decks", text: "Best War Deck Builds" },
              { href: "#boat-battles", text: "Boat Battles Strategy" },
              { href: "#medals", text: "Maximizing Medals" },
              { href: "#coordination", text: "Clan Coordination Tips" },
              { href: "#rewards", text: "War Rewards Breakdown" },
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

        {/* Section 1: River Race Format */}
        <section id="river-race" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            River Race Format Explained
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The River Race is Clash Royale's Clan War format. Here's how it works:
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crRiverRace.url}
              alt={GAME_IMAGES.crRiverRace.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              River Race pits your clan against 4 others in a race to the finish
            </figcaption>
          </figure>

          <div className="space-y-4">
            {[
              { num: "1", title: "5 Clans Compete", desc: "Your clan is matched with 4 other clans of similar strength. All 5 clans race along the river simultaneously.", color: "#EF4444" },
              { num: "2", title: "Earn Fame Daily", desc: "Each day, clan members battle using their 4 war decks to earn Fame (medals). More wins = more Fame for your clan.", color: "#3B82F6" },
              { num: "3", title: "Race Duration", desc: "The race lasts one week. The clan that reaches the finish line first gets 1st place rewards. Even if you don't finish first, you still earn rewards based on placement.", color: "#F59E0B" },
              { num: "4", title: "Boat Battles", desc: "You can attack enemy clan boats to slow their progress. Damaged boats prevent clans from earning Fame until repaired.", color: "#8B5CF6" },
              { num: "5", title: "Weekly Reset", desc: "After the race ends, clans are re-matched and a new race begins. Your war league determines matchmaking quality.", color: "#10B981" },
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

        {/* Section 2: Building 4 War Decks */}
        <section id="war-decks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Building 4 Competitive War Decks
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The biggest challenge in Clan War is building <strong style={{ color: 'var(--text-primary)' }}>4 separate decks with 32 unique cards</strong>. Here's the strategy:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#EF4444' }}>Deck 1: Your Main Deck (Strongest)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Use your fully maxed or highest-level ladder deck. This is your guaranteed win. Play it against the strongest opponents.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#3B82F6' }}>Deck 2: Secondary Meta Deck</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Build a second meta deck using your next-highest-level cards. A different archetype than Deck 1 ensures you're prepared for various matchups.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#10B981' }}>Deck 3: Solid Backup</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                A functional deck built around remaining high-level cards. Focus on proven combos: Giant + Musketeer, Balloon + Freeze, or Mega Knight + Bats.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#F59E0B' }}>Deck 4: Remaining Cards</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Built from whatever cards remain. Focus on having a win condition, spell, and basic defense. Even your weakest deck should follow deck-building fundamentals.
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: '#3B82F6' }}>Pro Tip:</strong> Plan all 4 decks before building them. Write down which 32 cards you'll use so you don't accidentally put a key card in the wrong deck.
            </p>
          </div>
        </section>

        {/* Section 3: Best War Decks */}
        <section id="best-war-decks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best War Deck Builds
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Here are 4 proven war decks that use completely different cards:
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crWarDeck.url}
              alt={GAME_IMAGES.crWarDeck.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Build 4 balanced war decks with no overlapping cards
            </figcaption>
          </figure>

          <div className="space-y-6">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>War Deck 1: Hog Cycle</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>2.9 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Hog Rider, Musketeer, Ice Golem, Fireball, The Log, Skeletons, Ice Spirit, Cannon
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Fast cycle, out-rotate opponent's counters.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>War Deck 2: PEKKA Bridge Spam</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>3.8 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> PEKKA, Battle Ram, Bandit, Royal Ghost, Electro Wizard, Poison, Zap, Minions
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Defend with PEKKA, counter-push with bridge spam pressure.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>War Deck 3: Golem Beatdown</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>4.1 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Golem, Night Witch, Lumberjack, Baby Dragon, Mega Minion, Lightning, Tornado, Barb Barrel
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Survive single elixir, build massive pushes in double.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>War Deck 4: Giant Graveyard</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>3.6 Avg</span>
              </div>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Giant, Graveyard, Archers, Knight, Arrows, Goblin Cage, Dart Goblin, Snowball
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Tank with Giant, drop Graveyard for tower damage.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Boat Battles */}
        <section id="boat-battles" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Boat Battles Strategy
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Boat battles are a strategic element that can swing the entire war. Here's how to use them effectively:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #EF4444' }}>
              <h3 className="font-bold" style={{ color: '#EF4444' }}>When to Attack Boats</h3>
              <ul className="text-sm space-y-1 mt-2" style={{ color: 'var(--text-muted)' }}>
                <li>When a clan is close to finishing</li>
                <li>When your clan has a comfortable lead</li>
                <li>Coordinate with clan to focus one boat</li>
                <li>Early in the day to delay their progress</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #10B981' }}>
              <h3 className="font-bold" style={{ color: '#10B981' }}>Boat Battle Tips</h3>
              <ul className="text-sm space-y-1 mt-2" style={{ color: 'var(--text-muted)' }}>
                <li>You face a pre-set deck, not a real player</li>
                <li>Study the deck before attacking</li>
                <li>Use counters specific to their cards</li>
                <li>3-crown for maximum boat damage</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: '#F59E0B' }}>Important:</strong> Boat battles use one of your 4 war decks. Only attack boats when the strategic advantage outweighs using that deck for Fame battles.
            </p>
          </div>
        </section>

        {/* Section 5: Maximizing Medals */}
        <section id="medals" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Maximizing Medals (Fame)
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Every medal counts in a tight race. Here's how to earn the most Fame each day:
          </p>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="text-left p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Action</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Fame Earned</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { action: "Deck Battle Win", fame: "200 Fame", notes: "Best source of Fame per attack" },
                  { action: "Deck Battle Loss", fame: "100 Fame", notes: "Still earn Fame even when losing" },
                  { action: "Boat Battle Win", fame: "50-100 Fame", notes: "Less Fame but damages enemy boat" },
                  { action: "Duel Win (Bo3)", fame: "500 Fame", notes: "Highest single reward, but risky" },
                  { action: "Duel Loss", fame: "250 Fame", notes: "Still decent Fame for losing" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium" style={{ color: 'var(--text-primary)' }}>{row.action}</td>
                    <td className="p-3 text-center font-bold" style={{ color: '#10B981' }}>{row.fame}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 6: Coordination */}
        <section id="coordination" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Clan Coordination Tips
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            War is a team effort. Well-coordinated clans consistently outperform clans with stronger individual players:
          </p>

          <div className="space-y-4">
            {[
              { tip: "Set Attack Windows", detail: "Agree on specific times when all members attack. This prevents scattered progress and ensures maximum daily impact.", color: "#EF4444" },
              { tip: "Share Winning Decks", detail: "When a member finds a deck that works well against the current opponents, share it in clan chat so others can copy it.", color: "#3B82F6" },
              { tip: "Assign Boat Duty", detail: "Designate 2-3 members specifically for boat battles. Don't have random people wasting deck uses on boats.", color: "#F59E0B" },
              { tip: "Track Participation", detail: "Leaders should monitor who attacks daily. Members who don't use all 4 decks are hurting the clan. Set minimum participation rules.", color: "#8B5CF6" },
              { tip: "Plan for Colosseum", detail: "The final stretch (Colosseum) awards bonus Fame. Save your strongest players' attacks for this phase when it matters most.", color: "#10B981" },
            ].map((item) => (
              <div key={item.tip} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold" style={{ color: item.color }}>{item.tip}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Rewards */}
        <section id="rewards" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            War Rewards Breakdown
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Clan War rewards are some of the best in the game. Here's what each placement earns:
          </p>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="text-left p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Placement</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Gold</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Cards</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Bonus</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { place: "1st Place", gold: "~4,500", cards: "Best Chest", bonus: "Magic Item chance" },
                  { place: "2nd Place", gold: "~3,500", cards: "Great Chest", bonus: "Wild Card chance" },
                  { place: "3rd Place", gold: "~2,500", cards: "Good Chest", bonus: "Minor bonus" },
                  { place: "4th Place", gold: "~1,500", cards: "Basic Chest", bonus: "None" },
                  { place: "5th Place", gold: "~1,000", cards: "Small Chest", bonus: "None" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium" style={{ color: i === 0 ? '#FFD700' : i === 1 ? '#C0C0C0' : i === 2 ? '#CD7F32' : 'var(--text-primary)' }}>{row.place}</td>
                    <td className="p-3 text-center font-bold" style={{ color: '#F59E0B' }}>{row.gold}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.cards}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.bonus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
            Lead Your Clan to Victory!
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Clan Wars reward teamwork, strategy, and consistency. Build your 4 war decks, attack every day, coordinate with your clan, and those 1st place chests will become the norm. Remember: every attack matters, even losses earn Fame.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/guides/card-upgrade-priority"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              ← Card Upgrade Priority
            </Link>
            <Link
              href="/clash-royale/guides/trophy-pushing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Trophy Pushing Guide →
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
