import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Best Duo Showdown Comps 2026 - Top Brawler Pairs to Win",
  description: "Best Duo Showdown compositions in Brawl Stars 2026. Top brawler pairs, synergy breakdowns, map-specific comps, positioning tips, and respawn mechanics.",
  keywords: [
    "duo showdown",
    "best duo comps",
    "brawler pairs",
    "duo showdown tips",
    "duo strategy",
    "brawl stars duo",
    "duo showdown best brawlers",
    "duo showdown comps 2026",
    "showdown team compositions"
  ],
  openGraph: {
    title: "Best Duo Showdown Comps 2026 | Brawl Stars",
    description: "Top brawler pairs and synergies to dominate Duo Showdown!",
    images: [{
      url: GUIDE_IMAGES.duoShowdownGuide.hero.url,
      width: 1200,
      height: 630,
      alt: "Best Duo Showdown Compositions 2026"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Duo Showdown Comps 2026",
    description: "Best brawler pairs to win Duo Showdown!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/duo-showdown"
  }
};

export default function DuoShowdownGuidePage() {
  const publishDate = "2026-02-10";
  const updateDate = "2026-02-10";
  const baseUrl = "https://www.game365hub.com";
  const images = GUIDE_IMAGES.duoShowdownGuide;

  const faqs = [
    { question: "What is Duo Showdown in Brawl Stars?", answer: "Duo Showdown is a 2v2v2v2v2 battle royale mode where you pair with a teammate. Five teams compete to be the last duo standing. When your partner is eliminated, they respawn near you after a short delay." },
    { question: "What are the best brawler pairs for Duo Showdown?", answer: "Top pairs include Spike + Byron (control and healing), Pam + Bull (sustain and aggression), and Leon + Crow (double assassin pressure). The best pair depends on the map and meta." },
    { question: "How does respawning work in Duo Showdown?", answer: "When your partner is eliminated, they respawn next to you after about 4 seconds with full health but lose all their collected Power Cubes. Your partner gets a brief spawn shield." },
    { question: "Should I stick with my partner in Duo Showdown?", answer: "Generally yes, but not too close. Stay within rescue range (about 5-6 tiles apart) so you can support each other while avoiding being hit by the same area attacks." },
    { question: "What happens to Power Cubes when you die in Duo?", answer: "When eliminated, you drop all your Power Cubes. Your teammate keeps theirs. When you respawn, you start with zero cubes. This makes survival crucial for the cube holder." },
    { question: "What is the best strategy for Duo Showdown?", answer: "Focus on early cube collection, avoid unnecessary fights, position near the center as the poison closes in, and coordinate attacks with your partner. Communication is key." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Best Duo Showdown Comps 2026 - Top Brawler Pairs to Win"
        description="Best Duo Showdown compositions in Brawl Stars 2026. Top brawler pairs and synergy breakdowns."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/duo-showdown`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Duo Showdown Comps", url: `${baseUrl}/brawl-stars/guides/duo-showdown` }
        ]}
      />

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap" style={{ color: 'var(--text-tertiary)' }}>
          <Link href="/" className="hover:text-[var(--accent-secondary)] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/brawl-stars" className="hover:text-[var(--accent-secondary)] transition-colors">Brawl Stars</Link>
          <span>/</span>
          <Link href="/brawl-stars/guides" className="hover:text-[var(--accent-secondary)] transition-colors">Guides</Link>
          <span>/</span>
          <span style={{ color: 'var(--accent-secondary)' }}>Duo Showdown Comps</span>
        </nav>

        {/* Title Section */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{ background: 'var(--accent-primary)', color: 'white' }}>
              Strategy Guide
            </span>
            <span className="px-3 py-1 text-sm rounded-full"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
              Updated Feb 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Duo Showdown Comps 2026: Top Brawler Pairs
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Dominate Duo Showdown with the strongest brawler pairings, proven synergies, map-specific strategies, and positioning tips to finish first every match.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src={images.hero.url}
            alt={images.hero.alt}
            className="w-full h-auto"
            loading="eager"
          />
        </div>

        {/* Table of Contents */}
        <nav className="mb-10 p-6 rounded-xl" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <ul className="space-y-2">
            {[
              { id: 'duo-showdown-basics', title: 'Duo Showdown Basics' },
              { id: 'best-duo-comps', title: 'Best Duo Compositions (Tier List)' },
              { id: 'synergy-types', title: 'Synergy Types Explained' },
              { id: 'map-specific-comps', title: 'Map-Specific Compositions' },
              { id: 'positioning-tips', title: 'Positioning & Teamwork Tips' },
              { id: 'respawn-mechanics', title: 'Respawn Mechanics Guide' },
              { id: 'common-mistakes', title: 'Common Mistakes to Avoid' },
              { id: 'faqs', title: 'FAQs' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:text-[var(--accent-secondary)] transition-colors"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <div className="prose-custom">
          {/* Duo Showdown Basics */}
          <section id="duo-showdown-basics" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Duo Showdown Basics
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Duo Showdown is a 5-team battle royale mode</strong> where you and a partner fight against 4 other pairs. The goal is to be the last team standing. Unlike Solo Showdown, coordination and brawler synergy are critical to success.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Mode Rules</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• 5 teams of 2 (10 players total)</li>
                  <li>• Power Cubes boost your stats</li>
                  <li>• Poison gas shrinks the map</li>
                  <li>• Last team alive wins</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Mechanics</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Partners respawn when eliminated</li>
                  <li>• Cubes drop on death</li>
                  <li>• Spawn shield on respawn</li>
                  <li>• Shared trophies with your partner</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Best Duo Compositions */}
          <section id="best-duo-comps" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Best Duo Compositions (Tier List)
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              These are the strongest brawler pairings for Duo Showdown based on synergy, win rates, and meta performance:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#22c55e' }}>
                <h3 className="font-bold mb-2" style={{ color: '#22c55e' }}>S-Tier Duos (Dominant)</h3>
                <div className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Spike + Byron</strong> — Byron provides infinite sustain while Spike controls zones with his Super. Nearly unbeatable in mid-range fights.</p>
                  <p><strong>Pam + Bull</strong> — Pam heals and controls, Bull rushes in as the frontline. Pam's healing station makes Bull nearly unkillable.</p>
                  <p><strong>Leon + Crow</strong> — Double assassin pressure. Crow poisons and slows, Leon finishes with his burst damage. Terrifying at all stages.</p>
                </div>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#3b82f6' }}>
                <h3 className="font-bold mb-2" style={{ color: '#3b82f6' }}>A-Tier Duos (Strong)</h3>
                <div className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>Poco + Frank</strong> — Poco keeps Frank alive through everything. Frank's stuns combined with Poco's healing creates an unstoppable deathball.</p>
                  <p><strong>Belle + Bea</strong> — Double sharpshooter dominance. Belle marks targets and Bea finishes them. Controls the map from long range.</p>
                  <p><strong>Sandy + Gene</strong> — Sandy's sandstorm provides invisibility, Gene pulls enemies into certain death. Incredible combo at higher trophies.</p>
                </div>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#f59e0b' }}>
                <h3 className="font-bold mb-2" style={{ color: '#f59e0b' }}>B-Tier Duos (Solid)</h3>
                <div className="space-y-2" style={{ color: 'var(--text-secondary)' }}>
                  <p><strong>El Primo + Rosa</strong> — Double tank aggression. Rush enemies early, collect cubes, and brawl your way to first place. Simple but effective.</p>
                  <p><strong>Piper + Nani</strong> — Long-range control pair. Keeps enemies at max distance and punishes anyone pushing forward.</p>
                  <p><strong>Mortis + Max</strong> — Max speeds up Mortis for devastating dashes. Fast rotation and flanking potential. High skill cap.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Synergy Types */}
          <section id="synergy-types" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Synergy Types Explained
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Understanding why certain brawler pairs work together helps you create your own effective compositions:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Synergy Type</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>How It Works</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Example Pairs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Healer + Tank</td>
                    <td className="p-3">Healer keeps the tank alive while the tank absorbs damage and creates space</td>
                    <td className="p-3">Poco + Frank, Byron + Bull</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Control + Finisher</td>
                    <td className="p-3">Controller slows or zones enemies, finisher picks off weakened targets</td>
                    <td className="p-3">Spike + Crow, Gene + Leon</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Sustain + Sustain</td>
                    <td className="p-3">Both brawlers sustain independently, outlasting opponents in long fights</td>
                    <td className="p-3">Pam + Rosa, Byron + Spike</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Double Aggro</td>
                    <td className="p-3">Both brawlers rush together for overwhelming pressure and quick eliminations</td>
                    <td className="p-3">El Primo + Bull, Mortis + Leon</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Range + Range</td>
                    <td className="p-3">Both brawlers poke from distance, never letting enemies get close</td>
                    <td className="p-3">Belle + Bea, Piper + Nani</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Map-Specific Compositions */}
          <section id="map-specific-comps" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Map-Specific Compositions
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Different maps favor different playstyles. Choose your comp based on the map layout:
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Map Type</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Best Comp Style</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Top Pairs</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Avoid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Open Maps</td>
                    <td className="p-3">Long-range control</td>
                    <td className="p-3">Belle + Bea, Piper + Nani</td>
                    <td className="p-3">Tanks, melee brawlers</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Bush-Heavy Maps</td>
                    <td className="p-3">Assassins, ambush</td>
                    <td className="p-3">Leon + Crow, Bull + Rosa</td>
                    <td className="p-3">Snipers without vision</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Walled Maps</td>
                    <td className="p-3">Throwers, wallbreakers</td>
                    <td className="p-3">Barley + Dynamike, Sprout + Spike</td>
                    <td className="p-3">Short-range without gap closers</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Mixed Maps</td>
                    <td className="p-3">Versatile pairs</td>
                    <td className="p-3">Spike + Byron, Pam + Bull</td>
                    <td className="p-3">One-dimensional comps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Positioning & Teamwork Tips */}
          <section id="positioning-tips" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Positioning and Teamwork Tips
            </h2>
            <div className="p-6 rounded-xl mb-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
              <ol className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>1</span>
                  <div>
                    <strong>Maintain 5-6 Tile Spacing</strong>
                    <p>Stay close enough to support each other but far enough to avoid being hit by the same AoE attack. This is the golden zone for duo positioning.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>2</span>
                  <div>
                    <strong>Let the Tank Lead</strong>
                    <p>If your duo has a tank, let them go in first to absorb damage while the ranged partner deals damage from behind. Never reverse this.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>3</span>
                  <div>
                    <strong>Focus the Same Target</strong>
                    <p>When engaging an enemy pair, both of you should focus the same target to eliminate them quickly. Splitting damage lets both enemies survive.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>4</span>
                  <div>
                    <strong>Cube Priority — Give Cubes to the Carry</strong>
                    <p>The brawler who benefits most from Power Cubes (usually the damage dealer) should collect most cubes. A 10-cube Leon is far scarier than 5-5 split cubes.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>5</span>
                  <div>
                    <strong>Rotate Towards Center Early</strong>
                    <p>As poison closes in, position yourselves toward the center before other teams. Being forced into a corner with poison behind you is a death sentence.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Respawn Mechanics */}
          <section id="respawn-mechanics" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Respawn Mechanics Guide
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Understanding respawn mechanics is crucial in Duo Showdown. Here is everything you need to know:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Respawn Rules</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Respawn delay: ~4 seconds</li>
                  <li>• Respawn location: near your partner</li>
                  <li>• You get a brief spawn shield</li>
                  <li>• You lose ALL Power Cubes on death</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Respawn Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Surviving partner: retreat to safety</li>
                  <li>• Avoid fights during respawn delay</li>
                  <li>• Use spawn shield aggressively</li>
                  <li>• Collect your own dropped cubes if safe</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-secondary)' }}>Pro Tip:</strong> If your high-cube partner dies, do not panic-fight. Retreat to a safe bush and wait for them to respawn. Their cubes are on the ground — if you die too, your team is eliminated. Survival is always the priority.
              </p>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Common Mistakes to Avoid
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Splitting Up Across the Map</h3>
                <p>Going to opposite corners of the map means you cannot support each other. If one of you gets teamed on, the other cannot help. Always stay within support range.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Picking Two of the Same Role</h3>
                <p>Running two tanks with no range or two snipers with no close-range presence leaves you vulnerable. Pair complementary brawlers for coverage at all ranges.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Fighting Too Early</h3>
                <p>Unnecessary fights before collecting cubes means you risk elimination with few cubes. Gather resources first, then look for fights when you have an advantage.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Ignoring the Poison</h3>
                <p>Getting caught in poison while fighting another team is a common way to lose. Always be aware of the shrinking zone and reposition proactively.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Revenge-Chasing After Partner Dies</h3>
                <p>When your partner gets eliminated, the instinct is to rush in for revenge. This often leads to a double elimination. Retreat, wait for respawn, then re-engage together.</p>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section id="faqs" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-lg" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Conclusion
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Duo Showdown rewards coordination, synergy, and smart positioning far more than individual skill. Choose brawler pairs that complement each other, adapt your comp to the map, and always stay within support range of your partner.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Focus on collecting cubes early, avoid unnecessary fights, and rotate toward the center before other teams. Master these fundamentals and you will consistently finish in the top 2.
            </p>
          </section>
        </div>

        {/* Social Share */}
        <div className="mt-8 mb-12">
          <SocialShare
            url={`${baseUrl}/brawl-stars/guides/duo-showdown`}
            title="Best Duo Showdown Comps 2026 - Top Brawler Pairs to Win"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides
          currentSlug="duo-showdown"
          guides={[
            { slug: 'best-brawlers-by-mode', title: 'Best Brawlers by Mode', icon: '🎯' },
            { slug: 'tier-list-2026', title: 'Brawler Tier List 2026', icon: '📊' },
            { slug: 'map-control', title: 'Map Control Guide', icon: '🗺️' },
            { slug: 'trophy-pushing', title: 'Trophy Pushing Guide', icon: '🏆' }
          ]}
        />
      </article>
    </div>
  );
}
