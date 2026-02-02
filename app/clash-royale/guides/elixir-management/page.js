import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';

const images = GUIDE_IMAGES.elixirGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Clash Royale Elixir Management Guide 2026 | Master Positive Trades",
  description: "Master elixir management in Clash Royale with our complete guide 2026. Learn elixir counting, positive trades, when to push, and pro strategies to outplay opponents.",
  keywords: [
    "clash royale elixir management",
    "clash royale elixir guide",
    "elixir counting clash royale",
    "positive elixir trade",
    "clash royale strategy",
    "how to manage elixir",
    "clash royale tips 2026",
    "elixir advantage clash royale"
  ],
  openGraph: {
    title: "Clash Royale Elixir Management Guide 2026 | Master Positive Trades",
    description: "Master elixir management and dominate your opponents with smart trades.",
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
    title: "Clash Royale Elixir Management Guide 2026",
    description: "Master positive trades and elixir counting to climb trophies!",
  },
  alternates: {
    canonical: "/clash-royale/guides/elixir-management"
  }
};

export default function ElixirManagementPage() {
  const publishDate = "2026-02-02";
  const updateDate = "2026-02-02";

  const faqs = [
    { question: "What is elixir in Clash Royale?", answer: "Elixir is the purple resource used to play cards. You start with 5 elixir and regenerate 1 elixir every 2.8 seconds (faster in double/triple elixir). Maximum capacity is 10 elixir." },
    { question: "What is a positive elixir trade?", answer: "A positive elixir trade is when you spend less elixir defending than your opponent spent attacking. For example, using 2-elixir Log to kill 3-elixir Goblin Barrel is a +1 trade." },
    { question: "How do I count elixir?", answer: "Track every card your opponent plays and add up the elixir cost. If they play Golem (8) + Witch (5), they spent 13 elixir. In single elixir, this means they're very low on elixir - punish the opposite lane!" },
    { question: "When should I push in Clash Royale?", answer: "Push when you have an elixir advantage (opponent just spent big), when your defensive troops survive and can counter-push, or during double/triple elixir when you can build bigger pushes." },
    { question: "What does leaking elixir mean?", answer: "Leaking elixir happens when you're at 10/10 elixir and not playing cards. Since you stop generating elixir at max capacity, every second at 10 elixir is wasted potential." },
    { question: "What's the average elixir cost I should aim for?", answer: "Most competitive decks range from 2.6 to 4.0 average elixir. Cycle decks (2.6-3.2) require excellent elixir management, while beatdown decks (3.5-4.2) focus on building big pushes in double elixir." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Clash Royale Elixir Management Guide 2026: Master Positive Trades"
        description="Master elixir management in Clash Royale. Learn elixir counting, positive trades, when to push, and pro strategies."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/elixir-management`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Elixir Management", url: `${baseUrl}/clash-royale/guides/elixir-management` }
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
          <span style={{ color: 'var(--text-primary)' }}>Elixir Management</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(138, 43, 226, 0.1)', color: '#8A2BE2' }}>
            Strategy Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 2, 2026</time>
          <span>10 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Clash Royale Elixir Management Guide 2026: Master Positive Trades
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Elixir management</strong> is the single most important skill in Clash Royale. It separates average players from champions. In this guide, you'll learn how to count elixir, make positive trades, and gain advantages that win games consistently.
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
            Elixir is the key resource that determines every play in Clash Royale
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#what-is-elixir", text: "What is Elixir?" },
              { href: "#elixir-generation", text: "Elixir Generation Rates" },
              { href: "#positive-trades", text: "Positive Elixir Trades" },
              { href: "#elixir-counting", text: "How to Count Elixir" },
              { href: "#when-to-push", text: "When to Push" },
              { href: "#common-mistakes", text: "Common Mistakes" },
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

        {/* Section 1: What is Elixir */}
        <section id="what-is-elixir" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What is Elixir in Clash Royale?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Elixir</strong> is the purple resource displayed at the bottom of your screen. Every card in Clash Royale costs elixir to play, ranging from 1 elixir (Skeletons, Ice Spirit) to 9 elixir (Three Musketeers).
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            You start each match with 5 elixir and can hold a maximum of 10. Understanding how elixir works is fundamental to every strategy in the game.
          </p>

          {/* Elixir Bar Image */}
          <figure className="mb-6">
            <img
              src={images.elixirCounter.url}
              alt={images.elixirCounter.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              The elixir bar at the bottom shows your current elixir (purple) out of 10 maximum
            </figcaption>
          </figure>
        </section>

        {/* Section 2: Elixir Generation */}
        <section id="elixir-generation" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Elixir Generation Rates
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Elixir generates automatically throughout the match, but the rate changes as the battle progresses:
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '2px solid #1E90FF30' }}>
              <div className="text-3xl font-black mb-2" style={{ color: '#1E90FF' }}>2.8s</div>
              <h3 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Single Elixir</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>First 2 minutes</p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>1 elixir per 2.8 seconds</p>
            </div>
            <div className="p-5 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '2px solid #8A2BE630' }}>
              <div className="text-3xl font-black mb-2" style={{ color: '#8A2BE2' }}>1.4s</div>
              <h3 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Double Elixir</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>2:00 - 3:00</p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>1 elixir per 1.4 seconds</p>
            </div>
            <div className="p-5 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '2px solid #FFD70030' }}>
              <div className="text-3xl font-black mb-2" style={{ color: '#FFD700' }}>0.9s</div>
              <h3 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>Triple Elixir</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Overtime (if tied)</p>
              <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>1 elixir per 0.9 seconds</p>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(30, 144, 255, 0.1)', border: '1px solid rgba(30, 144, 255, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#1E90FF' }}>Pro Tip:</p>
            <p style={{ color: 'var(--text-muted)' }}>In single elixir, play defensively and make positive trades. Save your big pushes for double elixir when you can build larger attacks and recover faster.</p>
          </div>
        </section>

        {/* Section 3: Positive Trades */}
        <section id="positive-trades" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Positive Elixir Trades - The Key to Winning
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            A <strong style={{ color: 'var(--text-primary)' }}>positive elixir trade</strong> means spending less elixir than your opponent while achieving equal or better results. Consistently making positive trades builds an elixir advantage that eventually becomes unstoppable.
          </p>

          {/* Battle Image */}
          <figure className="mb-6">
            <img
              src={images.battleElixir.url}
              alt={images.battleElixir.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Making smart trades on defense leads to elixir advantages
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Examples of Positive Trades:</h3>

          <div className="space-y-3 mb-6">
            {[
              { attack: "Minion Horde (5)", defense: "Arrows (3)", trade: "+2", color: "#10B981" },
              { attack: "Goblin Barrel (3)", defense: "Log (2)", trade: "+1", color: "#10B981" },
              { attack: "Skeleton Army (3)", defense: "Zap (2)", trade: "+1", color: "#10B981" },
              { attack: "Wizard (5)", defense: "Fireball (4)", trade: "+1", color: "#10B981" },
              { attack: "Hog Rider (4)", defense: "Cannon (3)", trade: "+1", color: "#10B981" },
            ].map((example, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
                <div className="flex-1">
                  <span className="text-sm" style={{ color: '#EF4444' }}>Attack: {example.attack}</span>
                </div>
                <div className="text-xl">→</div>
                <div className="flex-1">
                  <span className="text-sm" style={{ color: '#1E90FF' }}>Defense: {example.defense}</span>
                </div>
                <div className="px-3 py-1 rounded-full font-bold text-sm" style={{ background: `${example.color}20`, color: example.color }}>
                  {example.trade}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Elixir Counting */}
        <section id="elixir-counting" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How to Count Elixir Like a Pro
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Elixir counting</strong> is tracking how much elixir your opponent has spent. This tells you when they're low on elixir and vulnerable to a counter-push.
          </p>

          {/* Elixir Cost Image */}
          <figure className="mb-6">
            <img
              src={images.elixirCost.url}
              alt={images.elixirCost.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Every card has an elixir cost - memorize the costs of popular cards
            </figcaption>
          </figure>

          <div className="space-y-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#8A2BE2' }}>Step 1: Watch Their Plays</h3>
              <p style={{ color: 'var(--text-muted)' }}>Opponent plays Golem (8 elixir) in the back. You now know they have very little elixir.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#8A2BE2' }}>Step 2: Calculate Advantage</h3>
              <p style={{ color: 'var(--text-muted)' }}>If you have 7 elixir when they play Golem, you have a 7+ elixir advantage!</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#8A2BE2' }}>Step 3: Punish</h3>
              <p style={{ color: 'var(--text-muted)' }}>Rush the opposite lane with Hog Rider + support. They can't defend both lanes!</p>
            </div>
          </div>
        </section>

        {/* Section 5: When to Push */}
        <section id="when-to-push" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            When to Push (And When to Wait)
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#10B981' }}>✓ Push When:</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Opponent spent big (Golem, PEKKA, etc.)</li>
                <li>• Your defensive troops survived</li>
                <li>• Double/Triple elixir time</li>
                <li>• You have elixir advantage</li>
                <li>• Their counter is out of cycle</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#EF4444' }}>✗ Don't Push When:</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• You're low on elixir</li>
                <li>• Single elixir (first 2 minutes)</li>
                <li>• Opponent has full elixir</li>
                <li>• You don't know their deck yet</li>
                <li>• They have counter in hand</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6: Common Mistakes */}
        <section id="common-mistakes" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Common Elixir Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {[
              { num: "1", title: "Leaking Elixir", desc: "Sitting at 10 elixir without playing. You're losing potential elixir every second!" },
              { num: "2", title: "Panic Playing", desc: "Spam-dropping troops when scared. This wastes elixir and creates bad trades." },
              { num: "3", title: "Overcommitting", desc: "Putting too much elixir in one push. One spell can destroy 15+ elixir of troops." },
              { num: "4", title: "Playing First", desc: "Making the first move in single elixir. Let opponent commit first, then counter." },
              { num: "5", title: "Ignoring Elixir Count", desc: "Not tracking opponent's elixir. You miss opportunities to punish their low elixir." },
            ].map((mistake) => (
              <div key={mistake.num} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #EF4444, #DC2626)', color: '#fff' }}>
                  {mistake.num}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{mistake.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{mistake.desc}</p>
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
            Master Elixir, Master the Game
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Elixir management separates good players from great ones. Focus on making positive trades, counting your opponent's elixir, and knowing when to push. With practice, these skills become second nature!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/guides/deck-building"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #8A2BE2, #9400D3)' }}
            >
              Deck Building Guide →
            </Link>
            <Link
              href="/clash-royale/tier-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              View Tier List
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
