import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Gears Guide 2026 | Best Gears for Every Brawler in Brawl Stars",
  description: "Complete Brawl Stars Gears guide 2026. Learn which gears are best for every brawler, how to unlock gears, and gear token farming tips.",
  keywords: [
    "brawl stars gears",
    "gears guide 2026",
    "best gears brawl stars",
    "damage gear",
    "speed gear",
    "shield gear",
    "how to get gears",
    "gear tokens",
    "power 10 power 11"
  ],
  openGraph: {
    title: "Gears Guide 2026 | Brawl Stars",
    description: "Master Gears and power up your brawlers to Power 11!",
    images: [{
      url: GUIDE_IMAGES.gearsGuide.hero.url,
      width: 1200,
      height: 630,
      alt: "Brawl Stars Gears Guide 2026"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Gears Guide 2026",
    description: "Best gears for every brawler!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/gears-guide"
  }
};

export default function GearsGuidePage() {
  const publishDate = "2026-02-10";
  const updateDate = "2026-02-10";
  const baseUrl = "https://www.game365hub.com";
  const images = GUIDE_IMAGES.gearsGuide;

  const faqs = [
    { question: "What are Gears in Brawl Stars?", answer: "Gears are equipment you can attach to Power 10+ brawlers. They provide passive stat boosts like extra damage when low on health, faster movement in bushes, or shields when spawning." },
    { question: "When can I unlock Gears?", answer: "Gears become available once you upgrade a brawler to Power 10. At Power 10 you get 1 gear slot, at Power 11 you get 2 gear slots." },
    { question: "What are the best Gears?", answer: "Damage Gear and Speed Gear are the most universally useful. Damage gives +15% damage when below 50% health. Speed gives +15% movement in bushes." },
    { question: "How do I get Gear Tokens?", answer: "Gear Tokens come from Starr Drops, Brawl Pass, special offers, and sometimes events. They are one of the rarest resources in the game." },
    { question: "Can I change Gears for free?", answer: "Yes! Once unlocked, you can swap gears freely before matches. There is no cost to change equipped gears." },
    { question: "Should I prioritize Power 10 or Power 11?", answer: "Get your main brawlers to Power 10 first for the gear slot advantage. Then push key brawlers to Power 11 for Hypercharge access." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Gears Guide 2026 - Best Gears for Every Brawler in Brawl Stars"
        description="Complete Brawl Stars Gears guide 2026. Learn which gears are best for every brawler."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/gears-guide`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Gears Guide", url: `${baseUrl}/brawl-stars/guides/gears-guide` }
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
          <span style={{ color: 'var(--accent-secondary)' }}>Gears Guide</span>
        </nav>

        {/* Title Section */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{ background: 'var(--accent-primary)', color: 'white' }}>
              Progression Guide
            </span>
            <span className="px-3 py-1 text-sm rounded-full"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
              Updated Feb 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Gears Guide 2026: Best Gears for Every Brawler
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Master the Gear system and optimize your brawlers with the perfect gear combinations for maximum competitive advantage.
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
              { id: 'what-are-gears', title: 'What Are Gears?' },
              { id: 'all-gears', title: 'All Gears Explained' },
              { id: 'best-gears', title: 'Best Gears Tier List' },
              { id: 'gears-by-role', title: 'Gears by Brawler Role' },
              { id: 'how-to-unlock', title: 'How to Unlock Gears' },
              { id: 'gear-tokens', title: 'Gear Token Farming' },
              { id: 'upgrade-priority', title: 'Upgrade Priority' },
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
          {/* What Are Gears */}
          <section id="what-are-gears" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              What Are Gears?
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Gears are passive equipment that enhance your brawler's abilities.</strong> Unlike Star Powers that change how abilities work, Gears provide consistent stat boosts under certain conditions.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Gear Slots</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Power 10: 1 Gear Slot</li>
                  <li>• Power 11: 2 Gear Slots</li>
                  <li>• Gears are swappable for free</li>
                  <li>• Once unlocked, available for all modes</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Points</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Gears are brawler-specific</li>
                  <li>• Unlock once, use forever</li>
                  <li>• Must be upgraded with Gear Tokens</li>
                  <li>• Max level is Level 3</li>
                </ul>
              </div>
            </div>
          </section>

          {/* All Gears Explained */}
          <section id="all-gears" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              All Gears Explained
            </h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={images.gearsList.url}
                alt={images.gearsList.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Gear</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Effect (Max Level)</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Damage</td>
                    <td className="p-3">+15% damage when below 50% health</td>
                    <td className="p-3">Assassins, Tanks</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Speed</td>
                    <td className="p-3">+15% speed in bushes</td>
                    <td className="p-3">Bush campers, Assassins</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Shield</td>
                    <td className="p-3">900 HP shield when spawning</td>
                    <td className="p-3">Everyone (situational)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Health</td>
                    <td className="p-3">Heal 100% of max HP over 2s in bush</td>
                    <td className="p-3">Tanks, Bruisers</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Vision</td>
                    <td className="p-3">+150% vision range in bushes</td>
                    <td className="p-3">Snipers, Controllers</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Gadget Charge</td>
                    <td className="p-3">Get gadget charge 15% faster</td>
                    <td className="p-3">Gadget-reliant brawlers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Best Gears Tier List */}
          <section id="best-gears" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Best Gears Tier List 2026
            </h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#22c55e' }}>
                <h3 className="font-bold mb-2" style={{ color: '#22c55e' }}>S-Tier (Must Have)</h3>
                <p style={{ color: 'var(--text-secondary)' }}><strong>Damage Gear</strong> — The most versatile gear. +15% damage when you need it most (low health clutch plays).</p>
                <p className="mt-2" style={{ color: 'var(--text-secondary)' }}><strong>Speed Gear</strong> — Essential for bush-heavy maps. Faster movement = better positioning.</p>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#3b82f6' }}>
                <h3 className="font-bold mb-2" style={{ color: '#3b82f6' }}>A-Tier (Strong)</h3>
                <p style={{ color: 'var(--text-secondary)' }}><strong>Shield Gear</strong> — Great for respawn-heavy modes (Knockout, Wipeout). The spawn shield can turn fights.</p>
                <p className="mt-2" style={{ color: 'var(--text-secondary)' }}><strong>Health Gear</strong> — Amazing on tanks who dip into bushes to heal and re-engage.</p>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#f59e0b' }}>
                <h3 className="font-bold mb-2" style={{ color: '#f59e0b' }}>B-Tier (Situational)</h3>
                <p style={{ color: 'var(--text-secondary)' }}><strong>Vision Gear</strong> — Good on snipers like Piper or Bea on bush maps. Niche but strong when it works.</p>
                <p className="mt-2" style={{ color: 'var(--text-secondary)' }}><strong>Gadget Charge</strong> — Only worth it on brawlers with game-changing gadgets.</p>
              </div>
            </div>
          </section>

          {/* Gears by Role */}
          <section id="gears-by-role" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Best Gears by Brawler Role
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Role</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Best Gear 1</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Best Gear 2</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Example Brawlers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Tanks</td>
                    <td className="p-3">Damage</td>
                    <td className="p-3">Health</td>
                    <td className="p-3">Frank, Bull, El Primo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Assassins</td>
                    <td className="p-3">Damage</td>
                    <td className="p-3">Speed</td>
                    <td className="p-3">Mortis, Leon, Crow</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Sharpshooters</td>
                    <td className="p-3">Damage</td>
                    <td className="p-3">Vision</td>
                    <td className="p-3">Piper, Bea, Belle</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Controllers</td>
                    <td className="p-3">Speed</td>
                    <td className="p-3">Damage</td>
                    <td className="p-3">Spike, Sandy, Gene</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold">Supports</td>
                    <td className="p-3">Speed</td>
                    <td className="p-3">Shield</td>
                    <td className="p-3">Byron, Poco, Max</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold">Throwers</td>
                    <td className="p-3">Damage</td>
                    <td className="p-3">Speed</td>
                    <td className="p-3">Barley, Dynamike, Sprout</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* How to Unlock */}
          <section id="how-to-unlock" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              How to Unlock Gears
            </h2>
            <div className="p-6 rounded-xl mb-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
              <ol className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>1</span>
                  <div>
                    <strong>Upgrade Brawler to Power 10</strong>
                    <p>This unlocks the first gear slot. Requires Power Points and Coins.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>2</span>
                  <div>
                    <strong>Collect Gear Tokens</strong>
                    <p>Get tokens from Starr Drops, Brawl Pass, and special offers.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>3</span>
                  <div>
                    <strong>Unlock Specific Gears</strong>
                    <p>Spend tokens to unlock gears for individual brawlers.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>4</span>
                  <div>
                    <strong>Upgrade to Level 3</strong>
                    <p>More tokens upgrade gears for maximum effect.</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* Gear Token Farming */}
          <section id="gear-tokens" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Gear Token Farming Tips
            </h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={images.gearTokens.url}
                alt={images.gearTokens.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Sources</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Brawl Pass (Premium track)</li>
                  <li>• Starr Drops (Rare+ drops)</li>
                  <li>• Special event rewards</li>
                  <li>• Shop offers (gem cost)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Tips</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Focus tokens on main brawlers</li>
                  <li>• Damage Gear first (most versatile)</li>
                  <li>• Brawl Pass is best value</li>
                  <li>• Do not spread tokens thin</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Upgrade Priority */}
          <section id="upgrade-priority" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Gear Upgrade Priority
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Focus your limited gear tokens on these priorities:
            </p>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Priority 1: Your Main Brawlers</h3>
                <p>Pick 3-5 brawlers you play most. Max their gears first.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Priority 2: Meta S-Tier Brawlers</h3>
                <p>Spike, Cordelius, Byron, etc. These dominate Power League.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Priority 3: Damage Gear First</h3>
                <p>Damage Gear works on almost every brawler. Start here.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Priority 4: Speed Gear Second</h3>
                <p>Speed Gear is the second most versatile option.</p>
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
              Gears provide meaningful power boosts for Power 10+ brawlers. Focus on Damage and Speed gears first, prioritize your most-played brawlers, and spend tokens wisely.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              The difference between Level 1 and Level 3 gears is significant. Concentrate resources rather than spreading thin across many brawlers.
            </p>
          </section>
        </div>

        {/* Social Share */}
        <div className="mt-8 mb-12">
          <SocialShare
            url={`${baseUrl}/brawl-stars/guides/gears-guide`}
            title="Gears Guide 2026 - Best Gears for Every Brawler"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides
          currentSlug="gears-guide"
          guides={[
            { slug: 'hypercharge-guide', title: 'Hypercharge Guide', icon: '⚡' },
            { slug: 'star-powers-gadgets', title: 'Star Powers & Gadgets', icon: '⭐' },
            { slug: 'tier-list-2026', title: 'Brawler Tier List 2026', icon: '📊' },
            { slug: 'power-league', title: 'Power League Guide', icon: '🏆' }
          ]}
        />
      </article>
    </div>
  );
}
