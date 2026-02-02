import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';

const images = GUIDE_IMAGES.deckBuildingGuide;
const generalImages = GUIDE_IMAGES.beginnersGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Clash Royale Deck Building Guide 2026 | Build Winning Decks",
  description: "Learn how to build the perfect Clash Royale deck in 2026. Win conditions, synergies, archetypes, and deck building rules to climb to Ultimate Champion.",
  keywords: [
    "clash royale deck building",
    "how to build a deck clash royale",
    "clash royale deck guide",
    "best clash royale deck 2026",
    "win condition clash royale",
    "deck synergy",
    "clash royale archetypes",
    "meta deck clash royale"
  ],
  openGraph: {
    title: "Clash Royale Deck Building Guide 2026 | Build Winning Decks",
    description: "Master deck building with win conditions, synergies, and pro strategies.",
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
    title: "Clash Royale Deck Building Guide 2026",
    description: "Build balanced decks that dominate the meta!",
  },
  alternates: {
    canonical: "/clash-royale/guides/deck-building"
  }
};

export default function DeckBuildingPage() {
  const publishDate = "2026-02-02";
  const updateDate = "2026-02-02";

  const faqs = [
    { question: "What is a win condition in Clash Royale?", answer: "A win condition is a card that reliably damages towers. Examples include Hog Rider, Giant, Golem, X-Bow, Goblin Barrel, and Miner. Every deck needs at least one win condition." },
    { question: "What's the best average elixir cost for a deck?", answer: "Most competitive decks range from 2.6 to 4.2 average elixir. Cycle decks (2.6-3.2) are fast but require skill. Beatdown decks (3.5-4.2) are slower but more powerful in double elixir." },
    { question: "How many spells should I have?", answer: "Most decks run 2 spells: one small spell (Zap, Log, Arrows) for swarms and one big spell (Fireball, Poison, Lightning) for value and tower chip damage." },
    { question: "Do I need air defense?", answer: "Absolutely! Always include at least one or two cards that can target air troops (Musketeer, Archers, Mega Minion, etc.). Otherwise, Balloon and Lava Hound decks will destroy you." },
    { question: "What are deck archetypes?", answer: "Archetypes are playstyles: Beatdown (heavy tanks), Control (defense to counter-push), Cycle (fast win condition spam), Siege (X-Bow/Mortar from your side), and Bridge Spam (aggressive pressure cards)." },
    { question: "Should I copy meta decks or create my own?", answer: "For beginners, start with proven meta decks to learn the game. As you improve, you can modify decks or create your own. Meta decks are optimized by top players and have proven success rates." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Clash Royale Deck Building Guide 2026: Build Winning Decks"
        description="Learn how to build the perfect Clash Royale deck. Win conditions, synergies, archetypes, and deck building rules."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/deck-building`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Deck Building", url: `${baseUrl}/clash-royale/guides/deck-building` }
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
          <span style={{ color: 'var(--text-primary)' }}>Deck Building</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' }}>
            Deck Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 2, 2026</time>
          <span>15 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Clash Royale Deck Building Guide 2026: Build Winning Decks
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          A well-built deck is the foundation of success in Clash Royale. In this comprehensive guide, you'll learn the <strong style={{ color: 'var(--text-primary)' }}>essential rules of deck building</strong>, understand win conditions, master synergies, and discover which archetype fits your playstyle.
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
            Building the right deck is crucial for climbing the ladder
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#deck-building-rules", text: "The 8 Rules of Deck Building" },
              { href: "#win-conditions", text: "Win Conditions Explained" },
              { href: "#archetypes", text: "Deck Archetypes" },
              { href: "#card-roles", text: "Essential Card Roles" },
              { href: "#synergies", text: "Building Synergies" },
              { href: "#sample-decks", text: "Sample Balanced Decks" },
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

        {/* Section 1: Deck Building Rules */}
        <section id="deck-building-rules" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            The 8 Golden Rules of Deck Building
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Every successful deck follows these fundamental rules. Memorize them and your decks will be balanced and competitive.
          </p>

          <div className="space-y-4">
            {[
              { num: "1", title: "Always Have a Win Condition", desc: "Without a reliable way to damage towers, you can't win. Hog Rider, Giant, Golem, X-Bow - pick one!", color: "#EF4444" },
              { num: "2", title: "Include Air Defense", desc: "At least 2 cards that can hit air troops. Musketeer, Archers, Mega Minion, Baby Dragon, etc.", color: "#3B82F6" },
              { num: "3", title: "Have Splash Damage", desc: "Counter swarm units with splash. Valkyrie, Baby Dragon, Wizard, or spells like Fireball.", color: "#F59E0B" },
              { num: "4", title: "Carry a Mini Tank", desc: "Knight, Valkyrie, or Ice Golem to absorb damage on defense and support pushes.", color: "#8B5CF6" },
              { num: "5", title: "Two Spells Minimum", desc: "One small spell (Zap, Log) and one big spell (Fireball, Poison) for flexibility.", color: "#EC4899" },
              { num: "6", title: "Balance Your Elixir", desc: "Aim for 3.0-4.0 average elixir. Too high = slow cycle. Too low = weak defense.", color: "#10B981" },
              { num: "7", title: "Cover All Card Types", desc: "Mix troops, spells, and maybe one building for a well-rounded deck.", color: "#06B6D4" },
              { num: "8", title: "Have a Game Plan", desc: "Know how your deck wins. Is it fast pressure? Big pushes? Counter-attacks? Chip damage?", color: "#F97316" },
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

        {/* Section 2: Win Conditions */}
        <section id="win-conditions" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Win Conditions Explained
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Your <strong style={{ color: 'var(--text-primary)' }}>win condition</strong> is the card that deals primary damage to towers. Without one, you're relying on chip damage and luck.
          </p>

          {/* Deck Screen Image */}
          <figure className="mb-6">
            <img
              src={images.deckScreen.url}
              alt={images.deckScreen.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              A good deck always centers around a reliable win condition
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Popular Win Conditions by Type:</h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h4 className="font-bold mb-2" style={{ color: '#EF4444' }}>Tank Win Conditions</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
                <li>• Giant (5 elixir)</li>
                <li>• Golem (8 elixir)</li>
                <li>• Royal Giant (6 elixir)</li>
                <li>• Lava Hound (7 elixir)</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h4 className="font-bold mb-2" style={{ color: '#3B82F6' }}>Fast Win Conditions</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
                <li>• Hog Rider (4 elixir)</li>
                <li>• Ram Rider (5 elixir)</li>
                <li>• Wall Breakers (2 elixir)</li>
                <li>• Balloon (5 elixir)</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h4 className="font-bold mb-2" style={{ color: '#10B981' }}>Siege Win Conditions</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
                <li>• X-Bow (6 elixir)</li>
                <li>• Mortar (4 elixir)</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h4 className="font-bold mb-2" style={{ color: '#8B5CF6' }}>Spell Win Conditions</h4>
              <ul className="text-sm space-y-1" style={{ color: 'var(--text-muted)' }}>
                <li>• Goblin Barrel (3 elixir)</li>
                <li>• Miner (3 elixir)</li>
                <li>• Graveyard (5 elixir)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Archetypes */}
        <section id="archetypes" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Deck Archetypes - Find Your Playstyle
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Every deck falls into an archetype that determines how you should play it:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#EF4444' }}>Beatdown</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Build massive pushes behind tanks in double elixir.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Cons:</strong> Golem, Giant, Lava Hound | <strong>Avg Elixir:</strong> 3.8-4.5
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#3B82F6' }}>Control</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Defend efficiently, then counter-attack with surviving troops.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Cons:</strong> Graveyard, Miner | <strong>Avg Elixir:</strong> 3.2-3.8
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#10B981' }}>Cycle</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Out-cycle opponent's counters with cheap cards.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Cons:</strong> Hog Rider, X-Bow | <strong>Avg Elixir:</strong> 2.6-3.0
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.1), transparent)', border: '1px solid rgba(249, 115, 22, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#F97316' }}>Bridge Spam</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Apply constant pressure at the bridge with fast cards.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Cons:</strong> Ram Rider, Battle Ram | <strong>Avg Elixir:</strong> 3.3-3.8
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#8B5CF6' }}>Siege</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Damage towers from your side using X-Bow or Mortar.
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Cons:</strong> X-Bow, Mortar | <strong>Avg Elixir:</strong> 3.0-3.5
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Card Roles */}
        <section id="card-roles" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Essential Card Roles in Every Deck
          </h2>

          {/* Cards Image */}
          <figure className="mb-6">
            <img
              src={generalImages.cards.url}
              alt={generalImages.cards.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              A balanced deck includes cards that fill different roles
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { role: "Win Condition", examples: "Hog Rider, Giant, Golem", desc: "Your main tower damage source", color: "#EF4444" },
              { role: "Splash Damage", examples: "Valkyrie, Baby Dragon, Wizard", desc: "Handles swarm units", color: "#F59E0B" },
              { role: "Air Defense", examples: "Musketeer, Archers, Mega Minion", desc: "Counters flying units", color: "#3B82F6" },
              { role: "Mini Tank", examples: "Knight, Ice Golem, Valkyrie", desc: "Absorbs damage", color: "#8B5CF6" },
              { role: "Small Spell", examples: "Zap, Log, Arrows", desc: "Clears small units, resets", color: "#10B981" },
              { role: "Big Spell", examples: "Fireball, Poison, Lightning", desc: "Value damage + tower chip", color: "#EC4899" },
            ].map((item) => (
              <div key={item.role} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: `4px solid ${item.color}` }}>
                <h3 className="font-bold" style={{ color: item.color }}>{item.role}</h3>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Synergies */}
        <section id="synergies" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Building Card Synergies
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Synergy</strong> is when cards work together to be stronger than they would be alone.
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Giant + Witch</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Giant tanks while Witch spawns skeletons and deals splash. A classic combo that handles most defenses.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Hog Rider + Ice Golem</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Ice Golem tanks and slows defenders with death damage. Hog gets extra hits on tower.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Lava Hound + Balloon</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Lava Hound tanks air while Balloon reaches tower. "LavaLoon" is one of the strongest air combos.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#1E90FF' }}>Goblin Barrel + Miner</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Both threaten towers. Opponent doesn't know which one to Log. Classic bait synergy.</p>
            </div>
          </div>
        </section>

        {/* Section 6: Sample Decks */}
        <section id="sample-decks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Sample Balanced Decks for Beginners
          </h2>

          <div className="space-y-6">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Giant Beatdown</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>3.8 Avg</span>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Giant, Musketeer, Mini PEKKA, Fireball, Zap, Minions, Knight, Archers
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Defend with Mini PEKKA/Musketeer, counter-push behind Giant.
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>Hog Cycle</h3>
                <span className="text-sm px-3 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>2.9 Avg</span>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                <strong>Cards:</strong> Hog Rider, Musketeer, Ice Golem, Fireball, Log, Skeletons, Ice Spirit, Cannon
              </p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Strategy:</strong> Cycle Hog quickly, defend efficiently, out-cycle their counter.
              </p>
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
            Start Building Your Perfect Deck!
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Follow the 8 rules, pick a win condition that fits your style, and practice! Remember: one well-leveled deck beats eight half-leveled decks every time.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/tier-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              View Card Tier List
            </Link>
            <Link
              href="/clash-royale/guides/elixir-management"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              ← Elixir Management
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
