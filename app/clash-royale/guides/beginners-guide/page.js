import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';

const images = GUIDE_IMAGES.beginnersGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Clash Royale Beginner Guide 2026 | Complete Tutorial for New Players",
  description: "Master Clash Royale with our ultimate beginner guide 2026. Learn elixir management, deck building, card types, arena progression, and pro strategies to climb to Legendary Arena.",
  keywords: [
    "clash royale beginner guide",
    "clash royale tips for beginners",
    "how to play clash royale",
    "clash royale tutorial 2026",
    "clash royale new player guide",
    "clash royale starter tips",
    "clash royale elixir guide",
    "clash royale deck building",
    "best cards for beginners",
    "clash royale arena guide"
  ],
  openGraph: {
    title: "Clash Royale Beginner Guide 2026 | Complete Tutorial for New Players",
    description: "Master Clash Royale with our ultimate beginner guide. Learn everything from elixir management to winning strategies.",
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
    title: "Clash Royale Beginner Guide 2026",
    description: "Complete tutorial for new players - master the game from day one!",
  },
  alternates: {
    canonical: "/clash-royale/guides/beginners-guide"
  }
};

export default function BeginnersGuidePage() {
  const publishDate = "2026-02-02";
  const updateDate = "2026-02-02";

  const faqs = [
    { question: "Is Clash Royale free to play?", answer: "Yes! Clash Royale is free to download and play. You can enjoy all game modes and unlock all cards without spending money. Purchases are optional for faster progression." },
    { question: "What's the best deck for beginners?", answer: "Start with a balanced deck around 3.5-4.0 average elixir with one win condition (like Hog Rider or Giant), splash damage, air defense, and a small spell. The Giant-Witch-Musketeer combo is great for beginners." },
    { question: "How do trophies work?", answer: "You gain trophies by winning matches and lose them by losing. Trophies determine your arena and unlock new cards. Higher arenas have better rewards." },
    { question: "Should I upgrade all my cards?", answer: "No! Focus on upgrading one main deck to keep card levels even. Having one strong deck is better than many weak ones. Prioritize your win condition and key support cards." },
    { question: "What's elixir management?", answer: "Elixir is your resource for playing cards. Good players track their opponent's elixir and never waste their own. Wait for full elixir before starting a push, and make positive elixir trades on defense." },
    { question: "When should I use spells?", answer: "Use spells to get value - hit multiple troops or chip tower damage. Don't waste spells on single troops unless it's a high-value target like a Musketeer hitting your tower." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Clash Royale Beginner Guide 2026: Complete Tutorial for New Players"
        description="Master Clash Royale with our ultimate beginner guide 2026. Learn elixir management, deck building, card types, arena progression, and pro strategies."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/beginners-guide`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Beginner's Guide", url: `${baseUrl}/clash-royale/guides/beginners-guide` }
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
          <span style={{ color: 'var(--text-primary)' }}>Beginner's Guide</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(30, 144, 255, 0.1)', color: '#1E90FF' }}>
            Beginner Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 2, 2026</time>
          <span>12 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Clash Royale Beginner Guide 2026: Complete Tutorial for New Players
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Welcome to the ultimate <strong style={{ color: 'var(--text-primary)' }}>Clash Royale beginner guide for 2026</strong>! Whether you just downloaded the game or want to break through your trophy plateau, this comprehensive tutorial covers everything you need. From mastering elixir management to building winning decks, we'll help you climb to Legendary Arena and beyond.
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
            Your complete guide to mastering Clash Royale in 2026
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#what-is-clash-royale", text: "What is Clash Royale?" },
              { href: "#understanding-elixir", text: "Understanding Elixir" },
              { href: "#card-types", text: "Card Types Explained" },
              { href: "#deck-building", text: "Deck Building Basics" },
              { href: "#arena-progression", text: "Arena Progression" },
              { href: "#battle-tips", text: "Battle Tips & Strategy" },
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

        {/* Section 1: What is Clash Royale */}
        <section id="what-is-clash-royale" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What is Clash Royale?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Clash Royale</strong> is a real-time strategy card game developed by Supercell. Released in 2016, it combines elements of collectible card games, tower defense, and multiplayer online battle arena (MOBA) games.
          </p>

          {/* Arena Image */}
          <figure className="mb-6">
            <img
              src={images.arena.url}
              alt={images.arena.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              The Clash Royale arena where all battles take place
            </figcaption>
          </figure>

          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            In each match, two players face off with decks of 8 cards. The goal is to destroy your opponent's towers while defending your own. Matches last 3 minutes (plus overtime if needed), making it perfect for quick gaming sessions.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            With over 100 cards featuring troops, spells, and buildings, there's incredible strategic depth. Every card can be countered, and success depends on making smart trades and reading your opponent.
          </p>
        </section>

        {/* Section 2: Understanding Elixir */}
        <section id="understanding-elixir" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Understanding Elixir - The Key to Winning
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Elixir</strong> is your resource for playing cards. You start with 5 elixir and gain 1 more every 2.8 seconds (faster in double/triple elixir time). Managing elixir is the most important skill in Clash Royale.
          </p>

          {/* Game UI Image */}
          <figure className="mb-6">
            <img
              src={images.gameUI.url}
              alt={images.gameUI.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              The elixir bar (purple) at the bottom shows your available elixir
            </figcaption>
          </figure>

          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Positive Elixir Trades</h3>
              <p style={{ color: 'var(--text-muted)' }}>Always try to defend with less elixir than your opponent spends attacking. For example, using 3-elixir Skeletons to distract a 5-elixir Hog Rider is a +2 trade.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Elixir Counting</h3>
              <p style={{ color: 'var(--text-muted)' }}>Track how much elixir your opponent spends. If they play an 8-elixir Golem, you have an elixir advantage - push the opposite lane!</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Never Leak Elixir</h3>
              <p style={{ color: 'var(--text-muted)' }}>Once you hit 10 elixir, you stop generating more. Play a card before you cap out to avoid wasting elixir.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(30, 144, 255, 0.1)', border: '1px solid rgba(30, 144, 255, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#1E90FF' }}>Pro Tip:</p>
            <p style={{ color: 'var(--text-muted)' }}>In single elixir (first 2 minutes), play defensively and make positive trades. Save your big pushes for double elixir when you can build larger attacks.</p>
          </div>
        </section>

        {/* Section 3: Card Types */}
        <section id="card-types" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Card Types Explained
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Cards fall into three main categories. Understanding each type helps you build balanced decks and counter opponents effectively.
          </p>

          {/* Cards Collection Image */}
          <figure className="mb-6">
            <img
              src={images.cards.url}
              alt={images.cards.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Clash Royale features over 100 unique cards across different types
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '2px solid #E74C3C30' }}>
              <div className="text-3xl mb-2">⚔️</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#E74C3C' }}>Troops</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Units that move and attack. Includes tanks (Giant, Golem), damage dealers (Mini PEKKA), and swarm units (Skeleton Army).
              </p>
            </div>
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '2px solid #9B59B630' }}>
              <div className="text-3xl mb-2">✨</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#9B59B6' }}>Spells</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Instant effects on the arena. Damage spells (Fireball), utility spells (Tornado), and chip damage (Goblin Barrel).
              </p>
            </div>
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '2px solid #3498DB30' }}>
              <div className="text-3xl mb-2">🏰</div>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#3498DB' }}>Buildings</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Stationary structures. Defensive buildings (Tesla, Inferno Tower) and spawners (Goblin Hut, Furnace).
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Card Rarities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              { name: 'Common', color: '#B0B0B0', desc: 'Easy to level' },
              { name: 'Rare', color: '#FF8C00', desc: 'Versatile picks' },
              { name: 'Epic', color: '#C800FF', desc: 'Powerful effects' },
              { name: 'Legendary', color: '#FFD700', desc: 'Unique abilities' },
              { name: 'Champion', color: '#00BFFF', desc: 'Special powers' },
            ].map((rarity) => (
              <div key={rarity.name} className="p-3 rounded-xl text-center" style={{ background: 'var(--surface-100)' }}>
                <div className="font-bold text-sm" style={{ color: rarity.color }}>{rarity.name}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{rarity.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Deck Building */}
        <section id="deck-building" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Deck Building Basics
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            A well-built deck is balanced and has answers for every situation. Here's what every deck needs:
          </p>

          <div className="space-y-4 mb-6">
            {[
              { title: "Win Condition", desc: "Your main tower damage source. Examples: Hog Rider, Giant, Golem, X-Bow, Goblin Barrel", color: "#E74C3C" },
              { title: "Splash Damage", desc: "Handles swarm units. Examples: Wizard, Baby Dragon, Valkyrie, Fireball", color: "#FF8C00" },
              { title: "Air Defense", desc: "Counters flying units. Examples: Musketeer, Archers, Electro Wizard, Minions", color: "#3498DB" },
              { title: "Mini Tank", desc: "Absorbs damage on defense. Examples: Knight, Valkyrie, Ice Golem", color: "#8A2BE2" },
              { title: "Small Spell", desc: "Clears small units. Examples: Zap, Log, Arrows, Snowball", color: "#FFD700" },
              { title: "Big Spell", desc: "Damage and tower chip. Examples: Fireball, Poison, Lightning, Rocket", color: "#C800FF" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
                <div className="w-2 rounded-full flex-shrink-0" style={{ background: item.color }} />
                <div>
                  <h3 className="font-bold" style={{ color: item.color }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#10B981' }}>Beginner Deck Suggestion:</p>
            <p style={{ color: 'var(--text-muted)' }}>Giant + Musketeer + Mini PEKKA + Fireball + Zap + Minions + Knight + Archers (3.8 average elixir)</p>
          </div>
        </section>

        {/* Section 5: Arena Progression */}
        <section id="arena-progression" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Arena Progression
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Arenas unlock new cards and better rewards as you climb. Here are the key milestones:
          </p>

          <div className="space-y-3">
            {[
              { arena: "Arena 1-3", trophies: "0-600", tip: "Learn basic mechanics. Use simple decks." },
              { arena: "Arena 4-6", trophies: "1000-1600", tip: "Start focusing on one deck. Learn elixir counting." },
              { arena: "Arena 7-9", trophies: "2000-2600", tip: "All card rarities available. Master your main deck." },
              { arena: "Arena 10-12", trophies: "3000-3800", tip: "Competition increases. Card levels matter more." },
              { arena: "Arena 13-15", trophies: "4200-5000", tip: "Legendary Arena! Top tier gameplay." },
            ].map((item) => (
              <div key={item.arena} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
                <div className="font-bold w-24 flex-shrink-0" style={{ color: '#1E90FF' }}>{item.arena}</div>
                <div className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.2)', color: '#FFD700' }}>{item.trophies}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.tip}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Battle Tips */}
        <section id="battle-tips" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Battle Tips & Strategy
          </h2>

          <div className="space-y-4">
            {[
              { num: "1", title: "Don't Play First", desc: "Wait for your opponent to make the first move. React to their play rather than wasting elixir." },
              { num: "2", title: "Defend, Then Counter-Attack", desc: "Use your surviving defensive troops to start a counter-push. Don't let them go to waste!" },
              { num: "3", title: "Split Push When Behind", desc: "If you're losing, pressure both lanes. Your opponent can't defend everything." },
              { num: "4", title: "Learn Card Interactions", desc: "Know which cards counter what. Mini PEKKA kills Hog, Skeletons distract PEKKA, etc." },
              { num: "5", title: "Don't Overcommit", desc: "Placing too many troops in one push is risky. One spell can destroy your entire attack." },
              { num: "6", title: "Spell Cycle for Finish", desc: "When towers are low HP, finish with spells. Fireball + Zap can deal 500+ damage!" },
            ].map((tip) => (
              <div key={tip.num} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #1E90FF, #8A2BE2)', color: '#fff' }}>
                  {tip.num}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{tip.desc}</p>
                </div>
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
            Start Your Clash Royale Journey!
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            You now have the knowledge to start climbing. Focus on one deck, master elixir management, and learn from every loss. See you in Legendary Arena!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/tier-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              View Tier List
            </Link>
            <Link
              href="/clash-royale"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Explore Meta Decks
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
