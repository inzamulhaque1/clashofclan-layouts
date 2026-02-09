import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Hypercharge Guide 2026 | Best Hypercharges Ranked in Brawl Stars",
  description: "Complete Brawl Stars Hypercharge guide 2026. Learn how Hypercharges work, which are the best, and how to unlock and use them effectively.",
  keywords: [
    "brawl stars hypercharge",
    "hypercharge guide 2026",
    "best hypercharges brawl stars",
    "how to get hypercharge",
    "hypercharge tier list",
    "brawl stars hypercharge unlock",
    "power 11 hypercharge",
    "hypercharge abilities"
  ],
  openGraph: {
    title: "Hypercharge Guide 2026 | Brawl Stars",
    description: "Master Hypercharges and dominate with powered-up Supers!",
    images: [{
      url: GUIDE_IMAGES.hyperchargeGuide.hero.url,
      width: 1200,
      height: 630,
      alt: "Brawl Stars Hypercharge Guide 2026"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Hypercharge Guide 2026",
    description: "Unlock the power of Hypercharges!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/hypercharge-guide"
  }
};

export default function HyperchargeGuidePage() {
  const publishDate = "2026-02-10";
  const updateDate = "2026-02-10";
  const baseUrl = "https://www.game365hub.com";
  const images = GUIDE_IMAGES.hyperchargeGuide;

  const faqs = [
    { question: "What is Hypercharge in Brawl Stars?", answer: "Hypercharge is a powered-up version of a brawler's Super that activates when your Hypercharge meter is full. It adds extra effects, stat boosts, and visual changes to your Super." },
    { question: "How do I unlock Hypercharge?", answer: "You need to upgrade a brawler to Power 11 first. Then you can unlock their Hypercharge from the shop, Brawl Pass, or special offers." },
    { question: "How do I charge Hypercharge?", answer: "Hypercharge charges by dealing and taking damage, just like your regular Super. Once your Super is ready and Hypercharge meter is full, your next Super will be Hypercharged." },
    { question: "Does every brawler have Hypercharge?", answer: "Not yet. Supercell is adding Hypercharges gradually. Currently about 50+ brawlers have Hypercharges, with more added each update." },
    { question: "Is Hypercharge worth upgrading to Power 11?", answer: "Absolutely. Hypercharges provide significant advantages in competitive modes. The stat boosts alone (5% speed, 5% damage, 5% shield) are valuable." },
    { question: "Can I use Hypercharge in Power League?", answer: "Yes, if your brawler is Power 11 with Hypercharge unlocked, you can use it in all game modes including Power League." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Hypercharge Guide 2026 - Best Hypercharges Ranked in Brawl Stars"
        description="Complete Brawl Stars Hypercharge guide 2026. Learn how Hypercharges work and which are the best."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/hypercharge-guide`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Hypercharge Guide", url: `${baseUrl}/brawl-stars/guides/hypercharge-guide` }
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
          <span style={{ color: 'var(--accent-secondary)' }}>Hypercharge Guide</span>
        </nav>

        {/* Title Section */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{ background: 'var(--accent-primary)', color: 'white' }}>
              Advanced Guide
            </span>
            <span className="px-3 py-1 text-sm rounded-full"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
              Updated Feb 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Hypercharge Guide 2026: Best Hypercharges Ranked
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            Master the Hypercharge system and unleash devastating powered-up Supers to dominate every match.
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
              { id: 'what-is-hypercharge', title: 'What is Hypercharge?' },
              { id: 'how-to-unlock', title: 'How to Unlock Hypercharge' },
              { id: 'how-it-works', title: 'How Hypercharge Works' },
              { id: 'best-hypercharges', title: 'Best Hypercharges Tier List' },
              { id: 's-tier', title: 'S-Tier Hypercharges' },
              { id: 'a-tier', title: 'A-Tier Hypercharges' },
              { id: 'worst-hypercharges', title: 'Worst Hypercharges' },
              { id: 'tips', title: 'Hypercharge Tips & Tricks' },
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
          {/* What is Hypercharge */}
          <section id="what-is-hypercharge" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              What is Hypercharge?
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Hypercharge is the ultimate power boost for your brawler's Super.</strong> When activated, it transforms your regular Super into a supercharged version with additional effects, stat boosts, and flashy visuals.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Base Stat Boosts</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• +5% Movement Speed</li>
                  <li>• +5% Damage</li>
                  <li>• +5% Shield (damage reduction)</li>
                  <li>• Lasts for the Super duration</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Unique Effects</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Each brawler has unique bonus</li>
                  <li>• Changes Super behavior</li>
                  <li>• Visual transformation</li>
                  <li>• Can be game-changing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to Unlock */}
          <section id="how-to-unlock" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              How to Unlock Hypercharge
            </h2>
            <div className="p-6 rounded-xl mb-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-primary)' }}>
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Step-by-Step Process</h3>
              <ol className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>1</span>
                  <div>
                    <strong>Upgrade to Power 11</strong>
                    <p>Your brawler must be maxed at Power 11 with all gears unlocked.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>2</span>
                  <div>
                    <strong>Check Availability</strong>
                    <p>Not all brawlers have Hypercharges yet. Check your brawler's page.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>3</span>
                  <div>
                    <strong>Acquire Hypercharge</strong>
                    <p>Get from Brawl Pass, Shop offers, or Starr Drops.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'var(--accent-primary)', color: 'white' }}>4</span>
                  <div>
                    <strong>Equip Automatically</strong>
                    <p>Once unlocked, Hypercharge is always active - no need to equip!</p>
                  </div>
                </li>
              </ol>
            </div>
          </section>

          {/* How it Works */}
          <section id="how-it-works" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              How Hypercharge Works In-Game
            </h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={images.charging.url}
                alt={images.charging.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Charging the Meter</h3>
                <p>The Hypercharge meter appears below your Super button. It fills by dealing damage, taking damage, and using abilities. It charges faster than your Super.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Activation</h3>
                <p>When both your Super AND Hypercharge meter are full, your next Super automatically becomes Hypercharged. The button glows to indicate it is ready.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Duration</h3>
                <p>Hypercharge effects last for the duration of your Super. For transformation Supers (like Surge), the boost lasts until Super ends.</p>
              </div>
            </div>
          </section>

          {/* Best Hypercharges Tier List */}
          <section id="best-hypercharges" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Best Hypercharges Tier List 2026
            </h2>
            <div className="mb-6 rounded-xl overflow-hidden">
              <img
                src={images.hyperchargeList.url}
                alt={images.hyperchargeList.alt}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Not all Hypercharges are created equal. Some are game-breaking while others barely make a difference.
            </p>
          </section>

          {/* S-Tier */}
          <section id="s-tier" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              S-Tier Hypercharges (Must Have)
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Brawler</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Hypercharge Effect</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Why It Is Broken</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Cordelius</td>
                    <td className="p-3">Shadow Realm lasts longer, enemies take more damage</td>
                    <td className="p-3">Almost guaranteed kill in realm</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Spike</td>
                    <td className="p-3">Super slows more and covers larger area</td>
                    <td className="p-3">Zone denial becomes oppressive</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Buster</td>
                    <td className="p-3">Shield blocks more damage, reflects projectiles</td>
                    <td className="p-3">Team becomes nearly unkillable</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Frank</td>
                    <td className="p-3">Stun duration increased, immunity during animation</td>
                    <td className="p-3">Unstoppable team wipes</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Mortis</td>
                    <td className="p-3">Bats heal more, Super charges faster after</td>
                    <td className="p-3">Infinite sustain in fights</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* A-Tier */}
          <section id="a-tier" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              A-Tier Hypercharges (Very Strong)
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Leon</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Invisibility lasts longer and he moves faster. Perfect for assassinations.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Crow</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Daggers on landing deal more damage and poison lasts longer.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Tara</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Black hole pulls harder and deals damage over time.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>EMZ</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Hairspray cloud is larger and slows enemies more.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Gene</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Hand grabs faster and stuns briefly on pull.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Byron</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Healing wave heals more and damages enemies caught in it.</p>
              </div>
            </div>
          </section>

          {/* Worst Hypercharges */}
          <section id="worst-hypercharges" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Weakest Hypercharges (Skip These)
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Some Hypercharges barely improve the brawler. Save your resources for better options.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Brawler</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Why It Is Weak</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3">Dynamike</td>
                    <td className="p-3">Jump is slightly higher - barely noticeable improvement</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3">Jessie</td>
                    <td className="p-3">Turret shoots slightly faster - turret still dies quickly</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3">Nita</td>
                    <td className="p-3">Bear has more HP - bear is still easy to kite</td>
                  </tr>
                  <tr>
                    <td className="p-3">Poco</td>
                    <td className="p-3">Healing is slightly more - Poco already heals enough</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Tips */}
          <section id="tips" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Hypercharge Tips & Tricks
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>1. Save for Key Moments</h3>
                <p>Do not waste Hypercharge on regular fights. Save it for clutch plays, overtime, or when you need to win a crucial engagement.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>2. Prioritize S-Tier Brawlers</h3>
                <p>Invest Power 11 resources into brawlers with broken Hypercharges first. Cordelius, Spike, and Buster should be priorities.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>3. Track Enemy Hypercharges</h3>
                <p>Watch for the glow on enemy Supers. Know when they have Hypercharge ready and play more carefully.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>4. Charge Proactively</h3>
                <p>In the early game, focus on charging your Hypercharge for mid-game fights. Poke enemies to build meter.</p>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>5. Combo with Teammates</h3>
                <p>Stack Hypercharges with teammates for devastating combos. Frank Hypercharge stun + Spike Hypercharge zone = team wipe.</p>
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
              Hypercharges add a new layer of strategy to Brawl Stars. Prioritize unlocking S-tier Hypercharges, save them for crucial moments, and coordinate with your team for maximum impact.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Focus your Power 11 upgrades on brawlers with strong Hypercharges. The difference between a regular Super and a Hypercharged Super can win or lose matches.
            </p>
          </section>
        </div>

        {/* Social Share */}
        <div className="mt-8 mb-12">
          <SocialShare
            url={`${baseUrl}/brawl-stars/guides/hypercharge-guide`}
            title="Hypercharge Guide 2026 - Best Hypercharges Ranked"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides
          currentSlug="hypercharge-guide"
          guides={[
            { slug: 'star-powers-gadgets', title: 'Star Powers & Gadgets', icon: '⭐' },
            { slug: 'tier-list-2026', title: 'Brawler Tier List 2026', icon: '📊' },
            { slug: 'power-league', title: 'Power League Guide', icon: '🏆' },
            { slug: 'trophy-pushing', title: 'Trophy Pushing Guide', icon: '🏅' }
          ]}
        />
      </article>
    </div>
  );
}
