import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';
import { GAME_IMAGES } from '@/lib/blog/images';

const images = GUIDE_IMAGES.bestDecksGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Best Clash Royale Decks 2026 - Top Meta Decks Every Arena",
  description: "Discover the best Clash Royale meta decks for 2026. Log Bait, Hog Cycle, Golem Beatdown, LavaLoon, X-Bow, and more top ladder decks with cards, strategies, and tips.",
  keywords: [
    "best clash royale decks",
    "meta decks 2026",
    "log bait",
    "hog cycle",
    "golem beatdown",
    "lavaloon",
    "clash royale top decks",
    "best ladder decks"
  ],
  openGraph: {
    title: "Best Clash Royale Decks 2026 - Top Meta Decks Every Arena",
    description: "Top meta decks dominating Clash Royale in 2026. Full card lists, strategies, and tips.",
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
    title: "Best Clash Royale Decks 2026 - Top Meta Decks",
    description: "Dominate every arena with the strongest meta decks!",
  },
  alternates: {
    canonical: "/clash-royale/guides/best-decks"
  }
};

export default function BestDecksPage() {
  const publishDate = "2026-02-08";
  const updateDate = "2026-02-08";

  const faqs = [
    { question: "What is the best deck in Clash Royale 2026?", answer: "The best overall deck depends on your skill level and card levels. Log Bait, 2.6 Hog Cycle, and Golem Beatdown are consistently top-tier. Log Bait has the highest win rate across all arenas, while Hog Cycle rewards skilled players with fast cycling." },
    { question: "What is a meta deck in Clash Royale?", answer: "A meta deck is a deck that performs well in the current competitive environment. Meta stands for 'Most Effective Tactics Available.' These decks are refined by top players and have proven high win rates on ladder and in challenges." },
    { question: "Is Log Bait still good in 2026?", answer: "Yes! Log Bait remains one of the strongest decks in 2026. The core of Goblin Barrel, Princess, and Goblin Gang continues to bait out small spells effectively. Some variations now include Evolved Goblin Barrel for even more pressure." },
    { question: "What is the easiest meta deck to play?", answer: "Golem Beatdown is considered the easiest meta deck because the strategy is straightforward: build massive pushes behind Golem in double elixir. Royal Giant decks are also relatively easy since Royal Giant provides immediate tower pressure with minimal setup." },
    { question: "How do I choose the right meta deck?", answer: "Consider three factors: your card levels (pick a deck where most cards are high level), your playstyle (aggressive, defensive, or control), and your trophy range. Cycle decks reward skilled players, while beatdown decks are more forgiving." },
    { question: "How often does the meta change?", answer: "The meta shifts every balance update, which typically happens monthly. However, core archetypes like Hog Cycle and Log Bait rarely fall out of the meta entirely. It's wise to master 2-3 decks so you always have a viable option." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Best Clash Royale Decks 2026: Top Meta Decks Every Arena"
        description="Discover the best Clash Royale meta decks for 2026. Full card lists, elixir costs, difficulty ratings, and winning strategies."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/best-decks`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Best Decks", url: `${baseUrl}/clash-royale/guides/best-decks` }
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
          <span style={{ color: 'var(--text-primary)' }}>Best Decks</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' }}>
            Meta Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 8, 2026</time>
          <span>18 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Best Clash Royale Decks 2026: Top Meta Decks for Every Arena
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Looking for the <strong style={{ color: 'var(--text-primary)' }}>strongest meta decks</strong> to dominate Clash Royale ladder in 2026? We've compiled the top-performing decks used by pro players and Grand Challenge winners. Each deck includes the full card list, average elixir cost, difficulty rating, and a complete strategy breakdown.
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
            The best meta decks dominating Clash Royale in 2026
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#log-bait", text: "Log Bait (Classic)" },
              { href: "#golem-beatdown", text: "Golem Beatdown" },
              { href: "#hog-cycle", text: "2.6 Hog Cycle" },
              { href: "#lavaloon", text: "LavaLoon" },
              { href: "#xbow-cycle", text: "X-Bow Cycle" },
              { href: "#royal-giant", text: "Royal Giant" },
              { href: "#pekka-bridge-spam", text: "PEKKA Bridge Spam" },
              { href: "#graveyard-control", text: "Graveyard Control" },
              { href: "#deck-comparison", text: "Meta Deck Comparison Table" },
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

        {/* Section 1: Log Bait */}
        <section id="log-bait" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            1. Log Bait (Classic)
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Log Bait has been a <strong style={{ color: 'var(--text-primary)' }}>top-tier deck</strong> for years, and it remains dominant in 2026. The strategy is simple yet effective: bait out your opponent's Log or Zap with Princess and Goblin Gang, then punish with an uncontested Goblin Barrel on the tower.
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crLogBait.url}
              alt={GAME_IMAGES.crLogBait.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Classic Log Bait remains one of the highest win-rate decks on ladder
            </figcaption>
          </figure>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Classic Log Bait</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>3.3 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>Medium</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> Goblin Barrel, Princess, Goblin Gang, Knight, Inferno Tower, Rocket, Ice Spirit, The Log
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Defend with Knight + Inferno Tower, chip with Princess and Goblin Barrel. Use Rocket for big spell value and tower chip. Bait out The Log before sending Goblin Barrel for maximum damage.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Beatdown decks, heavy spell decks | <strong>Weak Against:</strong> Arrows + Log decks, Valkyrie-heavy control
            </p>
          </div>
        </section>

        {/* Section 2: Golem Beatdown */}
        <section id="golem-beatdown" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            2. Golem Beatdown
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Golem Beatdown is the ultimate <strong style={{ color: 'var(--text-primary)' }}>heavy push deck</strong>. The game plan is to survive single elixir, then build unstoppable pushes behind the Golem in double and triple elixir. When executed properly, the opponent simply cannot defend the massive push.
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crGolemBeatdown.url}
              alt={GAME_IMAGES.crGolemBeatdown.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Golem Beatdown creates overwhelming pushes in double elixir
            </figcaption>
          </figure>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Golem Night Witch</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>4.1 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>Easy</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> Golem, Night Witch, Lumberjack, Baby Dragon, Mega Minion, Lightning, Tornado, Barb Barrel
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Play Golem in the back during double elixir. Stack Night Witch and Baby Dragon behind it. Use Lumberjack for rage effect when he dies. Lightning to remove Inferno Tower or heavy defenses. Tornado pulls everything into Baby Dragon splash.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Cycle decks, Siege | <strong>Weak Against:</strong> Inferno Dragon + PEKKA control, fast bridge spam
            </p>
          </div>
        </section>

        {/* Section 3: 2.6 Hog Cycle */}
        <section id="hog-cycle" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            3. 2.6 Hog Cycle
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The legendary <strong style={{ color: 'var(--text-primary)' }}>2.6 Hog Cycle</strong> is the most skill-rewarding deck in Clash Royale. With an incredibly low 2.6 average elixir, you cycle back to Hog Rider faster than your opponent can cycle back to their counter. Mastery of this deck separates good players from great ones.
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crHogCycle.url}
              alt={GAME_IMAGES.crHogCycle.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              2.6 Hog Cycle rewards precise elixir management and quick rotations
            </figcaption>
          </figure>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>2.6 Hog Rider Cycle</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>2.6 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>Hard</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> Hog Rider, Musketeer, Ice Golem, Fireball, The Log, Skeletons, Ice Spirit, Cannon
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Defend efficiently with Cannon, Musketeer, and cheap cycle cards. Push Hog Rider with Ice Golem in front to tank. Out-cycle the opponent's building or counter card. Use Fireball + Log for value on grouped troops and tower chip.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Beatdown (with skill), Graveyard | <strong>Weak Against:</strong> Tornado + building decks, overleveled opponents
            </p>
          </div>
        </section>

        {/* Section 4: LavaLoon */}
        <section id="lavaloon" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            4. LavaLoon
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>LavaLoon</strong> is one of the most feared air decks in the game. Lava Hound tanks all damage while Balloon reaches the tower for devastating death damage. If your opponent lacks strong air defense, this deck is nearly impossible to stop.
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crLavaLoon.url}
              alt={GAME_IMAGES.crLavaLoon.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              LavaLoon air attacks overwhelm opponents without proper air defense
            </figcaption>
          </figure>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>LavaLoon Classic</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>4.0 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>Medium</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> Lava Hound, Balloon, Mega Minion, Tombstone, Fireball, Zap, Skeleton Dragons, Miner
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Play Lava Hound in the back and stack Balloon behind it. Miner tanks for Lava Pups after Hound pops. Tombstone and Mega Minion handle ground defense. Fireball + Zap clear swarm counters like Minion Horde.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Ground-heavy decks, Graveyard, X-Bow | <strong>Weak Against:</strong> Musketeer cycle, Inferno Tower + Archers
            </p>
          </div>
        </section>

        {/* Section 5: X-Bow Cycle */}
        <section id="xbow-cycle" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            5. X-Bow Cycle
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            X-Bow Cycle is the premier <strong style={{ color: 'var(--text-primary)' }}>siege deck</strong> that damages towers from your own side of the arena. X-Bow locks onto the opponent's tower from a safe distance while you defend it with Tesla, Ice Golem, and Archers.
          </p>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>2.9 X-Bow Cycle</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>2.9 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>Hard</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> X-Bow, Tesla, Ice Golem, Archers, Skeletons, Ice Spirit, Fireball, The Log
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Plant X-Bow at the bridge with Tesla behind for defense. Ice Golem tanks for X-Bow against swarms. In tough matchups, play X-Bow defensively. Cycle cheap cards to get back to X-Bow quickly.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Log Bait, Hog Cycle | <strong>Weak Against:</strong> Golem Beatdown, Royal Giant
            </p>
          </div>
        </section>

        {/* Section 6: Royal Giant */}
        <section id="royal-giant" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            6. Royal Giant
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Royal Giant</strong> decks are excellent for players who want consistent tower damage without complex setups. RG has long range and immediately locks onto towers when placed at the bridge, making it a reliable win condition at all skill levels.
          </p>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Royal Giant Fisherman</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>3.6 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>Easy</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> Royal Giant, Fisherman, Mother Witch, Mega Minion, Lightning, The Log, Guards, Heal Spirit
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Drop Royal Giant at the bridge and support with Fisherman to pull defenders away. Mother Witch converts swarms into cursed hogs. Lightning destroys heavy defenses like Inferno Tower. Guards provide cheap, spell-resistant defense.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> X-Bow, Siege decks | <strong>Weak Against:</strong> PEKKA, Inferno Dragon cycle
            </p>
          </div>
        </section>

        {/* Section 7: PEKKA Bridge Spam */}
        <section id="pekka-bridge-spam" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            7. PEKKA Bridge Spam
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>PEKKA Bridge Spam</strong> combines a monster defender (PEKKA) with aggressive bridge pressure cards. PEKKA shuts down tanks and counter-pushes, while Battle Ram, Bandit, and Royal Ghost apply constant pressure at the bridge.
          </p>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>PEKKA Bridge Spam</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>3.8 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>Medium</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> PEKKA, Battle Ram, Bandit, Royal Ghost, Electro Wizard, Poison, Zap, Minions
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Use PEKKA on defense to destroy tanks (Golem, Giant, Royal Giant). Counter-push with surviving PEKKA + bridge spam cards. Pressure both lanes with Battle Ram and Bandit. Poison clears swarms and provides tower chip.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Golem Beatdown, Royal Giant, tank decks | <strong>Weak Against:</strong> Log Bait, fast cycle decks
            </p>
          </div>
        </section>

        {/* Section 8: Graveyard Control */}
        <section id="graveyard-control" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            8. Graveyard Control
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Graveyard Control</strong> is a defensive deck that wins through patient play and well-timed Graveyard pushes. You defend everything your opponent throws at you, then counter-attack with a tank plus Graveyard on their tower.
          </p>

          <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Splashyard</h3>
              <div className="flex gap-2">
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>3.5 Avg</span>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>Medium</span>
              </div>
            </div>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Cards:</strong> Graveyard, Baby Dragon, Knight, Tornado, Poison, Barbarian Barrel, Ice Wizard, Tombstone
            </p>
            <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong>Strategy:</strong> Defend with Baby Dragon + Tornado splash combo and Ice Wizard for slow effect. Tank with Knight and drop Graveyard on their tower. Poison to kill any small troops they use to counter the Graveyard skeletons. Tombstone for building bait.
            </p>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Best Against:</strong> Bridge Spam, beatdown decks | <strong>Weak Against:</strong> Poison + small spell combos, fast Hog Cycle
            </p>
          </div>
        </section>

        {/* Section 9: Meta Deck Comparison Table */}
        <section id="deck-comparison" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Meta Deck Comparison Table
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Compare all eight meta decks at a glance to find the perfect fit for your playstyle:
          </p>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="text-left p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Deck</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Avg Elixir</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Difficulty</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Archetype</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Win Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { deck: "Log Bait", elixir: "3.3", difficulty: "Medium", archetype: "Control/Bait", winRate: "54%" },
                  { deck: "Golem Beatdown", elixir: "4.1", difficulty: "Easy", archetype: "Beatdown", winRate: "52%" },
                  { deck: "2.6 Hog Cycle", elixir: "2.6", difficulty: "Hard", archetype: "Cycle", winRate: "53%" },
                  { deck: "LavaLoon", elixir: "4.0", difficulty: "Medium", archetype: "Beatdown/Air", winRate: "51%" },
                  { deck: "X-Bow Cycle", elixir: "2.9", difficulty: "Hard", archetype: "Siege", winRate: "50%" },
                  { deck: "Royal Giant", elixir: "3.6", difficulty: "Easy", archetype: "Beatdown", winRate: "52%" },
                  { deck: "PEKKA BS", elixir: "3.8", difficulty: "Medium", archetype: "Bridge Spam", winRate: "53%" },
                  { deck: "Splashyard", elixir: "3.5", difficulty: "Medium", archetype: "Control", winRate: "51%" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium" style={{ color: 'var(--text-primary)' }}>{row.deck}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.elixir}</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-1 rounded-full text-xs" style={{
                        background: row.difficulty === 'Easy' ? 'rgba(16, 185, 129, 0.1)' : row.difficulty === 'Hard' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                        color: row.difficulty === 'Easy' ? '#10B981' : row.difficulty === 'Hard' ? '#EF4444' : '#F59E0B'
                      }}>{row.difficulty}</span>
                    </td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.archetype}</td>
                    <td className="p-3 text-center font-bold" style={{ color: '#10B981' }}>{row.winRate}</td>
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
            Pick Your Deck and Start Climbing!
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The best deck is the one you master. Pick a meta deck that fits your playstyle and card levels, then practice it until you know every matchup. Remember: consistency beats variety on the ladder. One maxed deck will always outperform eight half-leveled decks.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/guides/deck-building"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              Deck Building Guide
            </Link>
            <Link
              href="/clash-royale/guides/card-upgrade-priority"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Card Upgrade Priority →
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
