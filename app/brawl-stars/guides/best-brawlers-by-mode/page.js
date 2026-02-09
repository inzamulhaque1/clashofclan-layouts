import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';
import { GUIDE_IMAGES, BRAWLER_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Best Brawlers for Every Game Mode 2026 | Brawl Stars Guide",
  description: "Complete guide to the best brawlers for each Brawl Stars game mode in 2026. Dominate Gem Grab, Brawl Ball, Showdown, Heist, Bounty, Hot Zone, and Knockout with our picks.",
  keywords: [
    "best brawlers gem grab",
    "best brawlers brawl ball",
    "best brawlers showdown",
    "best brawlers heist",
    "best brawlers bounty",
    "best brawlers hot zone",
    "best brawlers knockout",
    "brawl stars game modes guide",
    "brawl stars best picks 2026",
    "brawl stars mode tier list"
  ],
  openGraph: {
    title: "Best Brawlers for Every Game Mode 2026",
    description: "Dominate every Brawl Stars game mode with our expert brawler picks.",
    images: [{
      url: GUIDE_IMAGES.gameModesGuide.hero.url,
      width: 1200,
      height: 630,
      alt: "Brawl Stars Best Brawlers by Game Mode 2026"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Brawlers for Every Game Mode 2026",
    description: "Complete guide to dominate all Brawl Stars game modes!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/best-brawlers-by-mode"
  }
};

export default function BestBrawlersByModePage() {
  const publishDate = "2026-02-10";
  const updateDate = "2026-02-10";
  const baseUrl = "https://www.game365hub.com";
  const images = GUIDE_IMAGES.gameModesGuide;

  const faqs = [
    { question: "Which brawler is good in all game modes?", answer: "Spike, Mandy, and Pierce are versatile brawlers that perform well in most game modes. However, specialists often outperform generalists on their best maps." },
    { question: "Should I only play the best brawlers for each mode?", answer: "While recommended, skill matters more than tier. A well-played B-tier brawler beats a poorly-played S-tier. Pick brawlers you're comfortable with." },
    { question: "How often does the meta change?", answer: "The meta shifts every 2-3 weeks with balance updates. Major changes happen at season starts. Check back regularly for updated picks." },
    { question: "What's the best mode for trophy pushing?", answer: "Brawl Ball and Gem Grab are fastest for trophies due to shorter matches and team play. Showdown is riskier but can yield big trophy swings." },
    { question: "Which mode should beginners focus on?", answer: "Start with Gem Grab — it teaches teamwork, map control, and objective play. Avoid Showdown Solo until you understand brawler matchups." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Best Brawlers for Every Game Mode 2026 - Brawl Stars Guide"
        description="Complete guide to the best brawlers for each Brawl Stars game mode in 2026. Dominate Gem Grab, Brawl Ball, Showdown, Heist, Bounty, Hot Zone, and Knockout."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/best-brawlers-by-mode`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Best Brawlers by Mode", url: `${baseUrl}/brawl-stars/guides/best-brawlers-by-mode` }
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
          <span style={{ color: 'var(--text-primary)' }}>Best Brawlers by Mode</span>
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
              Game Modes
            </span>
            <h1 className="text-2xl sm:text-4xl font-bold text-white">
              Best Brawlers for Every Game Mode 2026
            </h1>
          </div>
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span>Updated: February 2026</span>
          <span>•</span>
          <span>15 min read</span>
          <span>•</span>
          <span>By Game365Hub Team</span>
        </div>

        {/* Share Buttons */}
        <div className="mb-8">
          <SocialShare
            url={`${baseUrl}/brawl-stars/guides/best-brawlers-by-mode`}
            title="Best Brawlers for Every Game Mode 2026 - Brawl Stars Guide"
          />
        </div>

        {/* Table of Contents */}
        <div className="rounded-xl p-6 mb-10" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
            <li><a href="#intro" className="hover:text-white transition-colors">→ Introduction</a></li>
            <li><a href="#gem-grab" className="hover:text-white transition-colors">→ Best Brawlers for Gem Grab</a></li>
            <li><a href="#brawl-ball" className="hover:text-white transition-colors">→ Best Brawlers for Brawl Ball</a></li>
            <li><a href="#showdown" className="hover:text-white transition-colors">→ Best Brawlers for Showdown</a></li>
            <li><a href="#heist" className="hover:text-white transition-colors">→ Best Brawlers for Heist</a></li>
            <li><a href="#bounty" className="hover:text-white transition-colors">→ Best Brawlers for Bounty</a></li>
            <li><a href="#hot-zone" className="hover:text-white transition-colors">→ Best Brawlers for Hot Zone</a></li>
            <li><a href="#knockout" className="hover:text-white transition-colors">→ Best Brawlers for Knockout</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">→ FAQ</a></li>
          </ul>
        </div>

        {/* Introduction */}
        <section id="intro" className="mb-12">
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Picking the right brawler for each game mode is half the battle in Brawl Stars.</strong> While
            a skilled player can win with almost anyone, choosing a brawler that fits the mode's objectives gives you a massive advantage.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Each mode has different win conditions — Gem Grab rewards control, Brawl Ball rewards aggression, Showdown rewards survival.
            This guide breaks down the <strong style={{ color: 'var(--text-primary)' }}>best brawlers for every game mode</strong> in 2026,
            with team compositions and strategies for each.
          </p>
          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong>Note:</strong> This guide is updated for February 2026. Meta changes with balance patches — check back after major updates!
            </p>
          </div>
        </section>

        {/* Gem Grab Section */}
        <section id="gem-grab" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💎</span> Best Brawlers for Gem Grab
          </h2>

          <img
            src={images.gemGrab.url}
            alt={images.gemGrab.alt}
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: '300px' }}
          />

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Gem Grab is all about <strong style={{ color: 'var(--text-primary)' }}>control and survival</strong>.
            Hold 10 gems and stay alive for 15 seconds to win. The best brawlers either control the mine area or assassinate gem carriers.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Role</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Spike</td>
                  <td className="px-4 py-3">Control</td>
                  <td className="px-4 py-3">Area denial, high burst damage, slows enemies</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Gene</td>
                  <td className="px-4 py-3">Support/Aggro</td>
                  <td className="px-4 py-3">Pulls gem carriers, great poke damage</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Sandy</td>
                  <td className="px-4 py-3">Control</td>
                  <td className="px-4 py-3">Sandstorm provides team invisibility at mine</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Tara</td>
                  <td className="px-4 py-3">Aggro</td>
                  <td className="px-4 py-3">Super pulls grouped enemies for team wipes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Poco</td>
                  <td className="px-4 py-3">Support</td>
                  <td className="px-4 py-3">Heals team, keeps gem carrier alive</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Recommended Team Comp:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Spike (Control) + Gene (Aggro) + Poco (Support)</p>
          </div>
        </section>

        {/* Brawl Ball Section */}
        <section id="brawl-ball" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">⚽</span> Best Brawlers for Brawl Ball
          </h2>

          <img
            src={images.brawlBall.url}
            alt={images.brawlBall.alt}
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: '300px' }}
          />

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Brawl Ball rewards <strong style={{ color: 'var(--text-primary)' }}>aggression and wall-breaking</strong>.
            Score 2 goals to win. The best brawlers can clear paths, tank damage, or quickly eliminate defenders.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Role</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Frank</td>
                  <td className="px-4 py-3">Tank</td>
                  <td className="px-4 py-3">Stuns entire teams, breaks walls with Super</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Bibi</td>
                  <td className="px-4 py-3">Aggro</td>
                  <td className="px-4 py-3">Fast movement, knockback, ball carrier</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>El Primo</td>
                  <td className="px-4 py-3">Tank</td>
                  <td className="px-4 py-3">Super jumps over walls with ball, tanky</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Fang</td>
                  <td className="px-4 py-3">Assassin</td>
                  <td className="px-4 py-3">Chain Super eliminates grouped enemies</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Mortis</td>
                  <td className="px-4 py-3">Assassin</td>
                  <td className="px-4 py-3">Ball tricks, high skill ceiling, clutch plays</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Recommended Team Comp:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Frank (Tank) + Fang (Assassin) + Spike (Control)</p>
          </div>
        </section>

        {/* Showdown Section */}
        <section id="showdown" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💀</span> Best Brawlers for Showdown
          </h2>

          <img
            src={images.showdown.url}
            alt={images.showdown.alt}
            className="w-full rounded-xl mb-6 object-cover"
            style={{ maxHeight: '300px' }}
          />

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Showdown is <strong style={{ color: 'var(--text-primary)' }}>survival of the fittest</strong>.
            Solo or Duo, the goal is to be the last one standing. Best brawlers can 1v1 consistently or escape danger.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Playstyle</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Leon</td>
                  <td className="px-4 py-3">Assassin</td>
                  <td className="px-4 py-3">Invisibility for ambushes, high burst</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Crow</td>
                  <td className="px-4 py-3">Chip/Poke</td>
                  <td className="px-4 py-3">Poison prevents healing, jump escape</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Surge</td>
                  <td className="px-4 py-3">Aggro</td>
                  <td className="px-4 py-3">Upgrades with each power cube, teleport</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Edgar</td>
                  <td className="px-4 py-3">Assassin</td>
                  <td className="px-4 py-3">Auto-charging jump, lifesteal for sustain</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Bo</td>
                  <td className="px-4 py-3">Control</td>
                  <td className="px-4 py-3">Mines for area denial, bush detection</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Showdown Tip:</p>
            <p style={{ color: 'var(--text-secondary)' }}>In Duo Showdown, pair an assassin (Leon, Edgar) with a support (Poco, Byron) for max efficiency.</p>
          </div>
        </section>

        {/* Heist Section */}
        <section id="heist" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💰</span> Best Brawlers for Heist
          </h2>

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Heist is a <strong style={{ color: 'var(--text-primary)' }}>race to destroy the enemy safe</strong>.
            High DPS brawlers and wall-breakers dominate this mode.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Role</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Colt</td>
                  <td className="px-4 py-3">DPS</td>
                  <td className="px-4 py-3">Massive safe damage, breaks walls with Super</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Brock</td>
                  <td className="px-4 py-3">DPS/Control</td>
                  <td className="px-4 py-3">Long range, wall break, high safe damage</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Bull</td>
                  <td className="px-4 py-3">Tank</td>
                  <td className="px-4 py-3">Super into safe for burst damage</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Darryl</td>
                  <td className="px-4 py-3">Aggro</td>
                  <td className="px-4 py-3">Roll to safe, high close-range DPS</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Amber</td>
                  <td className="px-4 py-3">DPS</td>
                  <td className="px-4 py-3">Continuous fire melts safes quickly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Recommended Team Comp:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Colt (DPS) + Bull (Tank) + Byron (Support)</p>
          </div>
        </section>

        {/* Bounty Section */}
        <section id="bounty" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">⭐</span> Best Brawlers for Bounty
          </h2>

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Bounty is about <strong style={{ color: 'var(--text-primary)' }}>collecting stars through eliminations</strong>.
            Long-range brawlers and snipers dominate, as staying alive is crucial.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Role</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Piper</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">Highest long-range damage, Super escape</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Bea</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">Charged shot deals massive damage</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Mandy</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">Piercing shots, candy trail control</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Byron</td>
                  <td className="px-4 py-3">Support</td>
                  <td className="px-4 py-3">Long range heals + damage, keeps team alive</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Belle</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">Mark increases damage taken, bouncing shots</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Bounty Strategy:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Stay back, poke safely, and protect your star carrier. Avoid dying with 7 stars!</p>
          </div>
        </section>

        {/* Hot Zone Section */}
        <section id="hot-zone" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔥</span> Best Brawlers for Hot Zone
          </h2>

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Hot Zone rewards <strong style={{ color: 'var(--text-primary)' }}>area control and sustain</strong>.
            Hold the zones to gain percentage. High HP brawlers and healers excel here.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Role</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Gale</td>
                  <td className="px-4 py-3">Control</td>
                  <td className="px-4 py-3">Pushes enemies off zones, spring trap</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Rosa</td>
                  <td className="px-4 py-3">Tank</td>
                  <td className="px-4 py-3">Shield lets her hold zones forever</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Poco</td>
                  <td className="px-4 py-3">Support</td>
                  <td className="px-4 py-3">Heals team holding zones, Da Capo OP</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Jacky</td>
                  <td className="px-4 py-3">Tank</td>
                  <td className="px-4 py-3">Tanky, area damage clears zones</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Sandy</td>
                  <td className="px-4 py-3">Control</td>
                  <td className="px-4 py-3">Sandstorm lets team hold invisibly</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Recommended Team Comp:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Rosa (Tank) + Poco (Healer) + Sandy (Control) — The ultimate zone-holding trio!</p>
          </div>
        </section>

        {/* Knockout Section */}
        <section id="knockout" className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💥</span> Best Brawlers for Knockout
          </h2>

          <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
            Knockout is <strong style={{ color: 'var(--text-primary)' }}>elimination-based with no respawns</strong>.
            First to win 3 rounds wins. Brawlers with high burst damage and clutch potential shine here.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm" style={{ borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Brawler</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Role</th>
                  <th className="px-4 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>Why They're Good</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-secondary)' }}>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Piper</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">One-shots low HP brawlers from range</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Brock</td>
                  <td className="px-4 py-3">DPS</td>
                  <td className="px-4 py-3">Burst damage, rocket fuel for escapes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Byron</td>
                  <td className="px-4 py-3">Support</td>
                  <td className="px-4 py-3">Keeps team alive, denies enemy healing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Nani</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">Insane burst damage with Peep</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td className="px-4 py-3 font-medium" style={{ color: 'var(--text-primary)' }}>Belle</td>
                  <td className="px-4 py-3">Sniper</td>
                  <td className="px-4 py-3">Mark + team focus = instant eliminations</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <p className="font-semibold mb-2">Knockout Tip:</p>
            <p style={{ color: 'var(--text-secondary)' }}>Focus fire one enemy at a time. 3v2 advantage is almost always a round win.</p>
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
          <h2 className="text-xl font-bold mb-4">Master Every Mode!</h2>
          <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
            Now you know the best brawlers for every game mode. Remember:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4" style={{ color: 'var(--text-secondary)' }}>
            <li><strong>Gem Grab:</strong> Control and survival</li>
            <li><strong>Brawl Ball:</strong> Aggression and wall-breaking</li>
            <li><strong>Showdown:</strong> 1v1 power and escape options</li>
            <li><strong>Heist:</strong> Raw DPS on safe</li>
            <li><strong>Bounty:</strong> Long range and staying alive</li>
            <li><strong>Hot Zone:</strong> Sustain and zone control</li>
            <li><strong>Knockout:</strong> Burst damage and clutch plays</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)' }}>
            Pick the right brawler, master their mechanics, and climb those trophies!
          </p>
        </section>

        {/* Related Guides */}
        <RelatedGuides currentSlug="best-brawlers-by-mode" />
      </article>
    </div>
  );
}
