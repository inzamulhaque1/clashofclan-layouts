import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';

const images = GUIDE_IMAGES.gemSpendingGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Brawl Stars Gem Spending Guide 2026 | Best Value & What to Buy",
  description: "Learn how to spend gems wisely in Brawl Stars. Complete guide on Brawl Pass value, best purchases, what to avoid, and how to get free gems as F2P in 2026.",
  keywords: [
    "brawl stars gem guide",
    "how to spend gems brawl stars",
    "brawl stars best gem purchases",
    "is brawl pass worth it",
    "brawl stars f2p guide",
    "free gems brawl stars",
    "brawl stars gem value",
    "what to buy with gems",
    "brawl stars spending guide",
    "gem tips brawl stars 2026"
  ],
  openGraph: {
    title: "Brawl Stars Gem Spending Guide 2026 | Best Value & What to Buy",
    description: "Maximize your gems with our complete spending guide. Learn what's worth buying and what to avoid.",
    images: [{
      url: images.hero.url,
      width: 640,
      height: 288,
      alt: images.hero.alt
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Gem Spending Guide 2026",
    description: "Best value purchases and F2P tips for maximizing your gems!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/gem-spending"
  }
};

export default function GemSpendingGuidePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Brawl Stars Gem Spending Guide 2026: Best Value & What to Buy"
        description="Learn how to spend gems wisely in Brawl Stars. Complete guide on Brawl Pass value, best purchases, what to avoid, and how to get free gems as F2P in 2026."
        image={images.hero.url}
        datePublished="2026-02-02"
        dateModified="2026-02-02"
        url={`${baseUrl}/brawl-stars/guides/gem-spending`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Gem Spending Guide", url: `${baseUrl}/brawl-stars/guides/gem-spending` }
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/brawl-stars" className="hover:text-orange-500">Brawl Stars</Link>
          <span className="mx-2">/</span>
          <Link href="/brawl-stars/guides" className="hover:text-orange-500">Guides</Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Gem Spending Guide</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(6, 182, 212, 0.1)', color: '#06B6D4' }}>
            F2P Guide
          </span>
          <time dateTime="2026-02-02">Published: Feb 2, 2026</time>
          <span>8 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Brawl Stars Gem Spending Guide 2026: Maximize Your Value
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Gems are the premium currency</strong> in Brawl Stars, and spending them wisely can dramatically accelerate your progression. This guide covers the best purchases, worst gem traps, and how to maximize value whether you're F2P or spending money.
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
            Understanding gem value is key to smart spending
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#gem-sources", text: "How to Get Free Gems" },
              { href: "#brawl-pass", text: "Is Brawl Pass Worth It?" },
              { href: "#best-purchases", text: "Best Gem Purchases" },
              { href: "#avoid-buying", text: "What to Avoid Buying" },
              { href: "#f2p-strategy", text: "F2P Gem Strategy" },
              { href: "#spending-tips", text: "Smart Spending Tips" },
              { href: "#faq", text: "FAQ" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="block hover:text-orange-500 transition-colors"
                style={{ color: 'var(--text-muted)' }}
              >
                {i + 1}. {item.text}
              </a>
            ))}
          </nav>
        </div>

        {/* Section 1: How to Get Free Gems */}
        <section id="gem-sources" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How to Get Free Gems
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Before spending, know where your gems come from. Brawl Stars gives <strong style={{ color: 'var(--text-primary)' }}>plenty of free gems</strong> if you play regularly.
          </p>

          <figure className="mb-6">
            <img
              src={images.trophyRoad.url}
              alt={images.trophyRoad.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Trophy Road provides free gems at various milestones
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Free Gem Sources</h3>
          <div className="space-y-3 mb-6">
            {[
              { source: "Brawl Pass (Free Track)", gems: "~90 gems/season", frequency: "Every 2 months", color: "#10B981" },
              { source: "Trophy Road", gems: "~170 gems total", frequency: "One-time rewards", color: "#F59E0B" },
              { source: "Special Events", gems: "Varies", frequency: "Occasional", color: "#8B5CF6" },
              { source: "Challenges", gems: "10-30 gems", frequency: "Weekly", color: "#3B82F6" },
              { source: "Starr Road", gems: "~50 gems", frequency: "One-time per tier", color: "#EC4899" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: `1px solid ${item.color}30` }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-xl" style={{ background: `${item.color}15` }}>
                  💎
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.source}</span>
                    <span className="font-bold" style={{ color: item.color }}>{item.gems}</span>
                  </div>
                  <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.frequency}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#10B981' }}>F2P Reality:</p>
            <p style={{ color: 'var(--text-muted)' }}>A dedicated F2P player can earn approximately <strong>90-100 gems per season</strong> from the free Brawl Pass track alone. That's enough for a Brawl Pass every 2 seasons!</p>
          </div>
        </section>

        {/* Section 2: Is Brawl Pass Worth It? */}
        <section id="brawl-pass" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Is Brawl Pass Worth It?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Yes, absolutely.</strong> The Brawl Pass is the single best value purchase in Brawl Stars. Here's the breakdown:
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>Brawl Pass (169 Gems)</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> 1 Chromatic Brawler (guaranteed)
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> 2 Exclusive Skins
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> Pins, Sprays, Player Icons
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> ~2500 Power Points
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> ~5000 Coins
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> Multiple Brawl Boxes
                </li>
              </ul>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Estimated Value:</span>
                <span className="block text-xl font-bold" style={{ color: '#10B981' }}>~5000+ Gems Worth</span>
              </div>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>Brawl Pass Plus (249 Gems)</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> Everything in Brawl Pass
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> +1 Extra Exclusive Skin
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> +1 Hypercharge Skin
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> Instant tier unlocks
                </li>
                <li className="flex items-center gap-2">
                  <span style={{ color: '#10B981' }}>✓</span> Extra cosmetics
                </li>
              </ul>
              <div className="mt-4 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Best For:</span>
                <span className="block text-xl font-bold" style={{ color: '#8B5CF6' }}>Skin Collectors</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 107, 53, 0.1)', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FF6B35' }}>Verdict:</p>
            <p style={{ color: 'var(--text-muted)' }}>Regular Brawl Pass (169 gems) offers <strong>30x+ value</strong> compared to buying items individually. Brawl Pass Plus is only worth it if you really want the extra skins.</p>
          </div>
        </section>

        {/* Section 3: Best Gem Purchases */}
        <section id="best-purchases" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Gem Purchases (Ranked)
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            If you're going to spend gems, here's what gives you the most value:
          </p>

          <figure className="mb-6">
            <img
              src={images.gemShop.url}
              alt={images.gemShop.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              The shop offers various deals - know which are worth it
            </figcaption>
          </figure>

          <div className="space-y-4 mb-6">
            {[
              { rank: "1", item: "Brawl Pass", cost: "169 Gems", value: "S-Tier", reason: "Best value by far. Guaranteed brawler, skins, and massive progression.", color: "#FF6B6B" },
              { rank: "2", item: "Brawl Pass Plus", cost: "249 Gems", value: "A-Tier", reason: "Only if you want extra skins. Regular pass is usually enough.", color: "#4ECDC4" },
              { rank: "3", item: "Token Doublers", cost: "Varies", value: "B-Tier", reason: "Good value if you play a lot. Doubles rewards over time.", color: "#45B7D1" },
              { rank: "4", item: "Special Event Offers", cost: "Varies", value: "B-Tier", reason: "Some limited offers have great value. Check each one carefully.", color: "#96CEB4" },
              { rank: "5", item: "Discounted Skins (50%+)", cost: "Varies", value: "C-Tier", reason: "Only if you really want that specific skin. Cosmetic only.", color: "#9E9E9E" },
            ].map((item) => (
              <div key={item.rank} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: item.color, color: '#fff' }}>
                  {item.rank}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.item}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35' }}>{item.cost}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${item.color}20`, color: item.color }}>{item.value}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: What to Avoid */}
        <section id="avoid-buying" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What to AVOID Buying
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            These purchases are <strong style={{ color: '#EF4444' }}>gem traps</strong> with terrible value. Never buy these:
          </p>

          <div className="space-y-3 mb-6">
            {[
              { item: "Regular Brawl Boxes", reason: "Terrible value. You get these free constantly. Brawl Pass gives way more.", gems: "30+ gems" },
              { item: "Big Boxes", reason: "Same problem as regular boxes. Just 3x the bad value.", gems: "80+ gems" },
              { item: "Mega Boxes", reason: "Still not worth it. Save for Brawl Pass instead.", gems: "160+ gems" },
              { item: "Full-Price Skins", reason: "Wait for sales. Skins regularly go 50%+ off.", gems: "79-299 gems" },
              { item: "Power Points (direct purchase)", reason: "Extremely inefficient. Brawl Pass gives thousands more.", gems: "Varies" },
              { item: "Coins (direct purchase)", reason: "Worst value in the game. Never ever buy coins.", gems: "Varies" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-xl" style={{ background: 'rgba(239, 68, 68, 0.1)' }}>
                  ❌
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-bold" style={{ color: '#EF4444' }}>{item.item}</span>
                    <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444' }}>{item.gems}</span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.reason}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#EF4444' }}>Golden Rule:</p>
            <p style={{ color: 'var(--text-muted)' }}>If something can be obtained for free through normal gameplay, DON'T spend gems on it. Save gems exclusively for Brawl Pass.</p>
          </div>
        </section>

        {/* Section 5: F2P Gem Strategy */}
        <section id="f2p-strategy" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            F2P Gem Strategy
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Here's the optimal strategy for free-to-play players to maximize progression:
          </p>

          <div className="space-y-4 mb-6">
            {[
              { step: "1", title: "Save Every Gem", desc: "Never spend gems on anything except Brawl Pass. Collect from free pass, trophy road, and events." },
              { step: "2", title: "Wait 2 Seasons", desc: "It takes about 2 seasons (~4 months) to save 169 gems for Brawl Pass as pure F2P." },
              { step: "3", title: "Buy Brawl Pass", desc: "When you have 169+ gems, buy the Brawl Pass on a season with a brawler/skins you want." },
              { step: "4", title: "Complete the Pass", desc: "Play regularly to complete all tiers. The value is in finishing the entire pass." },
              { step: "5", title: "Repeat", desc: "Start saving again for the next pass. You'll buy every other season." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #06B6D4, #3B82F6)', color: '#fff' }}>
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(6, 182, 212, 0.1)', border: '1px solid rgba(6, 182, 212, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#06B6D4' }}>F2P Timeline:</p>
            <p style={{ color: 'var(--text-muted)' }}>Following this strategy, you'll get a Brawl Pass every 2 seasons. That's 3 Chromatic brawlers per year, plus tons of progression - completely free!</p>
          </div>
        </section>

        {/* Section 6: Smart Spending Tips */}
        <section id="spending-tips" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Smart Spending Tips
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Check Skin Sales", tip: "Skins go on sale regularly. Never buy full price - wait for 50%+ discounts." },
              { title: "Evaluate Special Offers", tip: "Some limited offers are great value. Calculate gem-per-item before buying." },
              { title: "Don't Impulse Buy", tip: "Sleep on purchases. If you still want it tomorrow, consider buying." },
              { title: "Prioritize Progression", tip: "Skins don't make you better. Power Points and brawlers do." },
              { title: "Complete Events First", tip: "Free rewards from challenges often include gems. Don't miss them." },
              { title: "Watch for Gem Gifts", tip: "Supercell occasionally gives free gems during anniversaries and holidays." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-2" style={{ color: '#FF6B35' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.tip}</p>
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
            {[
              { q: "Should I buy gems with real money?", a: "Only if you want to speed up progression significantly. The base gem prices aren't great value - wait for special offers that include bonus gems." },
              { q: "Is Brawl Pass worth it if I can't complete it?", a: "Try to complete at least 80% of the tiers. Even partial completion gives great value, but full completion is ideal." },
              { q: "Should I save gems for a specific Brawl Pass?", a: "Yes! If you don't like the current season's brawler or skins, wait. There will always be more passes." },
              { q: "Are Token Doublers worth buying?", a: "They're decent value if you play a lot (5+ matches daily). Otherwise, stick to Brawl Pass." },
              { q: "Can I get Chromatic brawlers without Brawl Pass?", a: "Yes, but it's much harder. After their release season, Chromatics drop to Legendary, then Mythic, then Epic rarity over time." },
              { q: "What's the best offer to buy with real money?", a: "Look for 'Mega Value' or anniversary bundles that include gems + brawlers + skins. These typically offer 3-5x normal value." },
            ].map((faq, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{faq.q}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Spend Smart, Progress Fast!
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Remember: gems are valuable. Don't waste them on boxes or full-price skins. Save for Brawl Pass, and you'll progress faster than players who spend randomly.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Whether you're F2P or spending money, smart gem management is the key to building a strong account efficiently. Good luck!
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/brawl-stars/tier-list"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)' }}
            >
              View Tier List
            </Link>
            <Link
              href="/brawl-stars/guides/beginners-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Beginner's Guide
            </Link>
            <Link
              href="/brawl-stars/guides/star-powers-gadgets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Star Powers Guide
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
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Brawl Pass Price:</span> 169 Gems
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <SocialShare
            url="/brawl-stars/guides/gem-spending"
            title="Brawl Stars Gem Spending Guide 2026"
            description="Maximize value from your gems and Brawl Pass"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides currentSlug="gem-spending" />
      </article>
    </div>
  );
}
