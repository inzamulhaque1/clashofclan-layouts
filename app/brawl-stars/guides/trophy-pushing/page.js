import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Trophy Pushing Guide 2026 | How to Climb Trophies Fast in Brawl Stars",
  description: "Complete Brawl Stars trophy pushing guide 2026. Learn the best strategies, brawlers, and tips to climb trophies fast and reach high ranks on every brawler.",
  keywords: [
    "brawl stars trophy pushing",
    "how to get trophies brawl stars",
    "best brawlers for trophies",
    "brawl stars climb ranks",
    "trophy pushing tips 2026",
    "brawl stars high trophies",
    "fastest way to get trophies",
    "brawl stars ranking guide",
    "push trophies brawl stars"
  ],
  openGraph: {
    title: "Trophy Pushing Guide 2026 | Brawl Stars",
    description: "Learn how to climb trophies fast with our complete pushing guide!",
    images: [{
      url: GUIDE_IMAGES.trophyPushingGuide.hero.url,
      width: 1200,
      height: 630,
      alt: "Brawl Stars Trophy Pushing Guide 2026"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Trophy Pushing Guide 2026",
    description: "Climb trophies fast with pro strategies!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/trophy-pushing"
  }
};

export default function TrophyPushingGuidePage() {
  const publishDate = "2026-02-10";
  const updateDate = "2026-02-10";
  const baseUrl = "https://www.game365hub.com";
  const images = GUIDE_IMAGES.trophyPushingGuide;

  const faqs = [
    { question: "What's the fastest way to get trophies?", answer: "Play 3v3 modes like Gem Grab or Brawl Ball with S-tier brawlers. 3v3 gives consistent trophy gains compared to the variance of Showdown." },
    { question: "When do I start losing trophies?", answer: "Below 500 trophies, you don't lose trophies for losses. Above 500, you lose trophies on losses, with more loss at higher trophy counts." },
    { question: "Should I push one brawler or all brawlers?", answer: "Push all brawlers to around 500-750 first for easy trophies. Then focus on your best brawlers for higher pushes." },
    { question: "What trophies should I aim for?", answer: "50,000 total trophies unlocks all trophy road rewards. For individual brawlers, 750+ is impressive, 1000+ is elite." },
    { question: "Does matchmaking get harder at high trophies?", answer: "Yes, you'll face better players and more organized teams. This is why pushing above 750 requires better gameplay and often a team." },
    { question: "What's the trophy reset?", answer: "Every season (about 2 months), brawlers above 500 trophies get reset. You keep star points based on how high you were." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Trophy Pushing Guide 2026 - How to Climb Trophies Fast in Brawl Stars"
        description="Complete Brawl Stars trophy pushing guide 2026. Learn the best strategies, brawlers, and tips to climb trophies fast."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/trophy-pushing`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Trophy Pushing", url: `${baseUrl}/brawl-stars/guides/trophy-pushing` }
        ]}
      />

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/brawl-stars" className="hover:text-white transition-colors">Brawl Stars</Link>
          <span>/</span>
          <Link href="/brawl-stars/guides" className="hover:text-white transition-colors">Guides</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-primary)' }}>Trophy Pushing</span>
        </nav>

        {/* Hero Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
          <img
            src={images.hero.url}
            alt={images.hero.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full mb-3"
                  style={{ background: 'var(--brawl-primary)', color: 'white' }}>
              Progression
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-white">
              Trophy Pushing Guide 2026: Climb Fast
            </h1>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span>Updated: February 2026</span>
          <span>•</span>
          <span>12 min read</span>
          <span>•</span>
          <span>By Game365Hub Team</span>
        </div>

        {/* Share Buttons */}
        <div className="mb-8">
          <SocialShare
            url={`${baseUrl}/brawl-stars/guides/trophy-pushing`}
            title="Trophy Pushing Guide 2026 - Brawl Stars"
          />
        </div>

        {/* Table of Contents */}
        <div className="rounded-xl p-6 mb-10" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li><a href="#intro" className="hover:text-white transition-colors">→ How Trophies Work</a></li>
            <li><a href="#trophy-ranges" className="hover:text-white transition-colors">→ Trophy Ranges Explained</a></li>
            <li><a href="#best-brawlers" className="hover:text-white transition-colors">→ Best Brawlers for Pushing</a></li>
            <li><a href="#best-modes" className="hover:text-white transition-colors">→ Best Modes for Trophies</a></li>
            <li><a href="#strategies" className="hover:text-white transition-colors">→ Pushing Strategies</a></li>
            <li><a href="#mindset" className="hover:text-white transition-colors">→ Mindset & Tilt Prevention</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">→ FAQ</a></li>
          </ul>
        </div>

        {/* Introduction */}
        <section id="intro" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏆</span> How Trophies Work
          </h2>

          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Trophies are the main progression metric in Brawl Stars.</strong> Every
            brawler has individual trophies, and your total trophies determine your trophy road progress and matchmaking.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Trophy Range</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Win</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Loss</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Notes</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>0-49</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">No trophy loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>50-99</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">No trophy loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>100-199</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">No trophy loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>200-299</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">No trophy loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>300-499</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">0</td>
                  <td className="px-4 py-3">No trophy loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>500-599</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">-3</td>
                  <td className="px-4 py-3">Trophy loss begins</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>600-699</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">-4</td>
                  <td className="px-4 py-3">Harder opponents</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>700-799</td>
                  <td className="px-4 py-3">+8</td>
                  <td className="px-4 py-3">-5</td>
                  <td className="px-4 py-3">Competitive level</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>800-899</td>
                  <td className="px-4 py-3">+7</td>
                  <td className="px-4 py-3">-6</td>
                  <td className="px-4 py-3">Less gain per win</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>900-999</td>
                  <td className="px-4 py-3">+6</td>
                  <td className="px-4 py-3">-7</td>
                  <td className="px-4 py-3">Need high win rate</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>1000+</td>
                  <td className="px-4 py-3">+5</td>
                  <td className="px-4 py-3">-8</td>
                  <td className="px-4 py-3">Elite territory</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Key Insight:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Below 500 trophies, you literally cannot lose trophies. Push every brawler to 500 for easy total trophy gains!</p>
          </div>
        </section>

        {/* Trophy Ranges Section */}
        <section id="trophy-ranges" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">📊</span> Trophy Ranges Explained
          </h2>

          <img
            src={images.trophyRoad.url}
            alt={images.trophyRoad.alt}
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: '300px' }}
          />

          <div className="space-y-4 mb-6">
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: '#10B981' }}>0-500: Beginner Zone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>No trophy loss. Focus on learning brawler mechanics. Push every brawler here easily.</p>
            </div>

            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: '#3B82F6' }}>500-750: Intermediate Zone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Trophy loss begins but gains still exceed losses. Good stopping point for casual players.</p>
            </div>

            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: '#8B5CF6' }}>750-1000: Competitive Zone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Skilled players. Need good brawlers, star powers, and game sense. Consider playing with a team.</p>
            </div>

            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-2" style={{ color: '#EF4444' }}>1000+: Elite Zone</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Top players only. Requires mastery, meta brawlers, and usually a coordinated team.</p>
            </div>
          </div>
        </section>

        {/* Best Brawlers Section */}
        <section id="best-brawlers" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">⭐</span> Best Brawlers for Trophy Pushing
          </h2>

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Not all brawlers are equal for pushing.</strong> These brawlers
            are consistently strong across multiple modes, making them reliable for climbing.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Best Modes</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why Great for Pushing</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Spike</td>
                  <td className="px-4 py-3">All modes</td>
                  <td className="px-4 py-3">Versatile, high damage, area control</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Mandy</td>
                  <td className="px-4 py-3">Bounty, Knockout, Gem Grab</td>
                  <td className="px-4 py-3">Long range, consistent damage</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Frank</td>
                  <td className="px-4 py-3">Brawl Ball, Hot Zone</td>
                  <td className="px-4 py-3">Tanky, game-changing stuns</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Gene</td>
                  <td className="px-4 py-3">Gem Grab, Bounty</td>
                  <td className="px-4 py-3">Pull ability creates picks</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Sandy</td>
                  <td className="px-4 py-3">Gem Grab, Hot Zone</td>
                  <td className="px-4 py-3">Sandstorm is insanely strong</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Leon</td>
                  <td className="px-4 py-3">Showdown, Gem Grab</td>
                  <td className="px-4 py-3">Invisibility for assassinations</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Fang</td>
                  <td className="px-4 py-3">Brawl Ball, Knockout</td>
                  <td className="px-4 py-3">Chain kills snowball games</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Byron</td>
                  <td className="px-4 py-3">All modes</td>
                  <td className="px-4 py-3">Heals team, anti-heal enemies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Pro Tip:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Master 2-3 brawlers deeply rather than playing many poorly. Expertise beats variety.</p>
          </div>
        </section>

        {/* Best Modes Section */}
        <section id="best-modes" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🎮</span> Best Modes for Trophy Pushing
          </h2>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Mode</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Rating</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Pros</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Cons</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Brawl Ball</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-3">Fast matches, carry potential</td>
                  <td className="px-4 py-3">Bad randoms can throw</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Gem Grab</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐⭐</td>
                  <td className="px-4 py-3">Consistent, skill-based</td>
                  <td className="px-4 py-3">Randoms don't understand gems</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Knockout</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐</td>
                  <td className="px-4 py-3">Individual skill matters</td>
                  <td className="px-4 py-3">One mistake = round loss</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Showdown Solo</td>
                  <td className="px-4 py-3">⭐⭐⭐</td>
                  <td className="px-4 py-3">No teammates needed</td>
                  <td className="px-4 py-3">High variance, teaming</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Showdown Duo</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐</td>
                  <td className="px-4 py-3">Only need 1 good teammate</td>
                  <td className="px-4 py-3">Less consistent than 3v3</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Hot Zone</td>
                  <td className="px-4 py-3">⭐⭐⭐⭐</td>
                  <td className="px-4 py-3">Objective is simple</td>
                  <td className="px-4 py-3">Randoms don't stand on point</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Heist</td>
                  <td className="px-4 py-3">⭐⭐⭐</td>
                  <td className="px-4 py-3">DPS brawlers shine</td>
                  <td className="px-4 py-3">Very composition dependent</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Bounty</td>
                  <td className="px-4 py-3">⭐⭐⭐</td>
                  <td className="px-4 py-3">Snipers excel</td>
                  <td className="px-4 py-3">One death can lose the game</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Recommendation:</p>
            <p style={{ color: 'var(--text-secondary)' }}>For consistent climbing, stick to Brawl Ball or Gem Grab with meta brawlers. Showdown is good for quick sessions but has high variance.</p>
          </div>
        </section>

        {/* Strategies Section */}
        <section id="strategies" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🧠</span> Trophy Pushing Strategies
          </h2>

          <div className="space-y-6">
            <div className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-3 text-lg">1. Push All Brawlers to 500 First</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Since you can't lose trophies below 500, push every brawler there for easy total trophies. This also unlocks star points from season reset.</p>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-3 text-lg">2. Play During Off-Peak Hours</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Late night/early morning has fewer pro players online. Matchmaking is often easier, leading to more wins.</p>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-3 text-lg">3. Use Map-Specific Brawlers</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Every map rotation favors certain brawlers. Check the current maps and pick accordingly. A B-tier brawler on a good map beats an S-tier on a bad map.</p>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-3 text-lg">4. Play With a Team Above 750</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Randoms become unreliable at higher trophies. Find a team through clubs or Discord for coordinated play.</p>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-3 text-lg">5. Master One Mode</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Rather than playing all modes, become an expert in one. Learn every map, every brawler matchup, every strategy for that mode.</p>
            </div>

            <div className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-3 text-lg">6. Push Early in the Season</h3>
              <p style={{ color: 'var(--text-secondary)' }}>After trophy reset, everyone is at lower trophies. It's easier to push in the first week of a new season when skill gaps are compressed.</p>
            </div>
          </div>
        </section>

        {/* Mindset Section */}
        <section id="mindset" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">😤</span> Mindset & Tilt Prevention
          </h2>

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Tilting (playing worse after losses) is the #1 trophy killer.</strong> Here's how to manage your mental game:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#10B981' }}>✅ DO</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>• Stop after 2 losses in a row</li>
                <li>• Take a 5-minute break between sessions</li>
                <li>• Switch brawlers/modes if frustrated</li>
                <li>• Accept that losses happen</li>
                <li>• Focus on YOUR gameplay, not teammates</li>
              </ul>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h4 className="font-semibold mb-2" style={{ color: '#EF4444' }}>❌ DON'T</h4>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <li>• Rage-queue after a loss</li>
                <li>• Blame teammates exclusively</li>
                <li>• Play when tired/tilted</li>
                <li>• Chase trophy milestones desperately</li>
                <li>• Use thumbs-down pins on teammates</li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'linear-gradient(135deg, var(--brawl-primary) 0%, #1a1a2e 100%)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">The Rule of 3:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Win 3? Keep playing. Lose 2 in a row? Take a break. This simple rule prevents massive trophy losses from tilt.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">❓</span> Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl p-5" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                <p style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 rounded-xl p-6" style={{ background: 'linear-gradient(135deg, var(--brawl-primary) 0%, #1a1a2e 100%)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4">Start Climbing Today!</h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            Trophy pushing is a marathon, not a sprint. Focus on:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
            <li>Pushing all brawlers to 500 first (no loss zone)</li>
            <li>Mastering 2-3 strong brawlers deeply</li>
            <li>Playing Brawl Ball or Gem Grab for consistency</li>
            <li>Managing tilt with the Rule of 3</li>
            <li>Finding a team for 750+ pushing</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)' }}>
            Good luck on your climb!
          </p>
        </section>

        {/* Related Guides */}
        <RelatedGuides currentSlug="trophy-pushing" />
      </article>
    </div>
  );
}
