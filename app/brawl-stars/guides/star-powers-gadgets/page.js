import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';

const images = GUIDE_IMAGES.starPowersGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Best Star Powers & Gadgets in Brawl Stars 2026 | Complete Tier List",
  description: "Discover the best star powers and gadgets for every brawler in Brawl Stars 2026. Complete tier list with optimal builds, unlock priorities, and hypercharge guide.",
  keywords: [
    "brawl stars best star powers",
    "brawl stars best gadgets",
    "star power tier list",
    "gadget tier list brawl stars",
    "brawl stars builds 2026",
    "which star power to use",
    "best gadgets brawl stars",
    "brawl stars hypercharge",
    "star power guide",
    "gadget guide brawl stars"
  ],
  openGraph: {
    title: "Best Star Powers & Gadgets in Brawl Stars 2026 | Complete Tier List",
    description: "Complete guide to the best star powers and gadgets for every brawler in the current meta.",
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
    title: "Best Star Powers & Gadgets - Brawl Stars 2026",
    description: "Complete tier list with optimal builds for every brawler!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/star-powers-gadgets"
  }
};

export default function StarPowersGadgetsPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Best Star Powers & Gadgets in Brawl Stars 2026: Complete Tier List"
        description="Discover the best star powers and gadgets for every brawler in Brawl Stars 2026. Complete tier list with optimal builds, unlock priorities, and hypercharge guide."
        image={images.hero.url}
        datePublished="2026-02-02"
        dateModified="2026-02-02"
        url={`${baseUrl}/brawl-stars/guides/star-powers-gadgets`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Star Powers & Gadgets", url: `${baseUrl}/brawl-stars/guides/star-powers-gadgets` }
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
          <span style={{ color: 'var(--text-primary)' }}>Star Powers & Gadgets</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#EAB308' }}>
            Builds Guide
          </span>
          <time dateTime="2026-02-02">Published: Feb 2, 2026</time>
          <span>10 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Best Star Powers & Gadgets in Brawl Stars 2026: Complete Tier List
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Choosing the right <strong style={{ color: 'var(--text-primary)' }}>Star Powers and Gadgets</strong> can make or break your brawler's effectiveness. This comprehensive guide covers the best builds for every brawler in the current meta, helping you decide which abilities to unlock first and when to use them.
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
            Star Powers and Gadgets are key to maximizing your brawler's potential
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#what-are-star-powers", text: "What Are Star Powers?" },
              { href: "#what-are-gadgets", text: "What Are Gadgets?" },
              { href: "#how-to-unlock", text: "How to Unlock Them" },
              { href: "#best-star-powers", text: "Best Star Powers Tier List" },
              { href: "#best-gadgets", text: "Best Gadgets Tier List" },
              { href: "#hypercharges", text: "Hypercharges Explained" },
              { href: "#upgrade-priority", text: "Upgrade Priority Guide" },
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

        {/* Section 1: What Are Star Powers */}
        <section id="what-are-star-powers" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What Are Star Powers?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Star Powers</strong> are passive abilities that are always active during a match. They provide significant buffs to your brawler's capabilities and can completely change how you play them.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>Key Features</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Unlocked at Power Level 9</li>
                <li>• Each brawler has 2 Star Powers</li>
                <li>• Passive - always active</li>
                <li>• No cooldown or charges</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FFD700' }}>How to Get Them</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Brawl Boxes (random drop)</li>
                <li>• Shop offers (2000 coins)</li>
                <li>• Brawl Pass rewards</li>
                <li>• Starr Road</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FFD700' }}>Example - Mortis:</p>
            <p style={{ color: 'var(--text-muted)' }}><strong>Creepy Harvest:</strong> Mortis heals 1800 HP when he kills an enemy. <strong>Coiled Snake:</strong> Mortis gains a speed boost bar that enables a longer first dash. Both completely change his playstyle!</p>
          </div>
        </section>

        {/* Section 2: What Are Gadgets */}
        <section id="what-are-gadgets" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What Are Gadgets?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Gadgets</strong> are active abilities with limited uses per match (usually 3). Unlike Star Powers, you must manually activate them at the right moment for maximum impact.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#3B82F6' }}>Key Features</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Unlocked at Power Level 7</li>
                <li>• Each brawler has 2 Gadgets</li>
                <li>• Active - press button to use</li>
                <li>• Limited to 3 uses per match</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#3B82F6' }}>When to Use</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Escape dangerous situations</li>
                <li>• Secure crucial kills</li>
                <li>• Win important team fights</li>
                <li>• Turn around losing games</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(59, 130, 246, 0.1)', border: '1px solid rgba(59, 130, 246, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#3B82F6' }}>Pro Tip:</p>
            <p style={{ color: 'var(--text-muted)' }}>Don't waste gadgets early! Save at least 1-2 uses for crucial moments in the late game when matches are decided.</p>
          </div>
        </section>

        {/* Section 3: How to Unlock */}
        <section id="how-to-unlock" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How to Unlock Star Powers & Gadgets
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The unlock process is tied to your brawler's Power Level. Here's the progression:
          </p>

          <figure className="mb-6">
            <img
              src={images.upgradeBrawlers.url}
              alt={images.upgradeBrawlers.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Upgrading brawlers to unlock abilities
            </figcaption>
          </figure>

          <div className="space-y-3 mb-6">
            {[
              { level: "Power 1-6", unlock: "No abilities", color: "#9E9E9E" },
              { level: "Power 7", unlock: "First Gadget slot unlocked", color: "#3B82F6" },
              { level: "Power 8", unlock: "Second Gadget slot unlocked", color: "#3B82F6" },
              { level: "Power 9", unlock: "First Star Power slot unlocked", color: "#FFD700" },
              { level: "Power 10", unlock: "Second Star Power slot unlocked", color: "#FFD700" },
              { level: "Power 11", unlock: "Hypercharge slot unlocked + Gears", color: "#8B5CF6" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'var(--surface-100)', border: `1px solid ${item.color}30` }}>
                <span className="font-bold w-24" style={{ color: item.color }}>{item.level}</span>
                <span style={{ color: 'var(--text-muted)' }}>{item.unlock}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 107, 53, 0.1)', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FF6B35' }}>Important:</p>
            <p style={{ color: 'var(--text-muted)' }}>Unlocking the slot doesn't give you the ability automatically! You still need to find or purchase the specific Star Power/Gadget from boxes or the shop.</p>
          </div>
        </section>

        {/* Section 4: Best Star Powers Tier List */}
        <section id="best-star-powers" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Star Powers Tier List (2026)
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Here are the most impactful Star Powers in the current meta. These abilities significantly boost their brawler's effectiveness.
          </p>

          <figure className="mb-6">
            <img
              src={images.starPowersTierList.url}
              alt={images.starPowersTierList.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Star Powers tier list for the current meta
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: '#FF6B6B' }}>S-Tier Star Powers</h3>
          <div className="grid gap-3 mb-6">
            {[
              { brawler: "Mortis", sp: "Coiled Snake", effect: "Dash bar charges for 75% longer first dash. Essential for engages.", why: "Enables assassination combos" },
              { brawler: "Spike", sp: "Curveball", effect: "Spike needles curve, making them much harder to dodge.", why: "Massive damage increase" },
              { brawler: "Byron", sp: "Injection", effect: "Byron's Super heals/damages over time instead of instantly.", why: "Better sustained value" },
              { brawler: "Max", sp: "Run n Gun", effect: "Max can reload while moving.", why: "Constant aggression" },
              { brawler: "Gray", sp: "Walking Cane", effect: "Gray moves faster while his portal is active.", why: "Better positioning" },
              { brawler: "Emz", sp: "Bad Karma", effect: "Enemies in her spray take increasing damage.", why: "Zone control dominance" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-bold" style={{ color: '#FF6B35' }}>{item.brawler}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.2)', color: '#FFD700' }}>{item.sp}</span>
                </div>
                <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{item.effect}</p>
                <p className="text-xs font-semibold" style={{ color: '#10B981' }}>Why it's S-Tier: {item.why}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: '#4ECDC4' }}>A-Tier Star Powers</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Frank - Sponge",
              "Piper - Ambush",
              "Bea - Honeycomb",
              "Tara - Healing Shade",
              "Stu - Gaso-Heal",
              "Fang - Divine Soles",
              "Belle - Positive Feedback",
              "Mandy - In My Sights",
              "Poco - Da Capo!",
              "Gene - Magic Puffs",
            ].map((sp, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-sm" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
                {sp}
              </span>
            ))}
          </div>
        </section>

        {/* Section 5: Best Gadgets Tier List */}
        <section id="best-gadgets" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Gadgets Tier List (2026)
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The best gadgets can turn losing fights into wins. These are the most impactful gadgets in the current meta.
          </p>

          <figure className="mb-6">
            <img
              src={images.gadgetsTierList.url}
              alt={images.gadgetsTierList.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Gadgets tier list for the current meta
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: '#FF6B6B' }}>S-Tier Gadgets</h3>
          <div className="grid gap-3 mb-6">
            {[
              { brawler: "Mortis", gadget: "Survival Shovel", effect: "Reloads all ammo instantly.", why: "Extends combos, escapes danger" },
              { brawler: "Max", gadget: "Phase Shifter", effect: "Dash forward and become immune briefly.", why: "Dodge anything, reposition" },
              { brawler: "Gray", gadget: "Grand Piano", effect: "Drops a piano dealing massive damage.", why: "Zone denial, burst damage" },
              { brawler: "Stu", gadget: "Speed Zone", effect: "Creates a speed boost area.", why: "Team mobility, objective control" },
              { brawler: "Cordelius", gadget: "Mushroom Kingdom", effect: "Creates mushrooms that heal and charge super.", why: "Sustain and super cycling" },
              { brawler: "Frank", gadget: "Active Noise Canceling", effect: "Immune to stuns/knockbacks briefly.", why: "Guarantees super completion" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-bold" style={{ color: '#FF6B35' }}>{item.brawler}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#3B82F6' }}>{item.gadget}</span>
                </div>
                <p className="text-sm mb-1" style={{ color: 'var(--text-muted)' }}>{item.effect}</p>
                <p className="text-xs font-semibold" style={{ color: '#10B981' }}>Why it's S-Tier: {item.why}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: '#4ECDC4' }}>A-Tier Gadgets</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Spike - Life Plant",
              "Piper - Auto Aimer",
              "Bo - Tripwire",
              "Tara - Support from Beyond",
              "Bea - Rattled Hive",
              "Leon - Clone Projector",
              "Sandy - Sleep Stimulator",
              "Buzz - Reserve Buoy",
              "Fang - Roundhouse Kick",
              "Surge - Power Surge",
            ].map((gadget, i) => (
              <span key={i} className="px-3 py-1.5 rounded-lg text-sm" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}>
                {gadget}
              </span>
            ))}
          </div>
        </section>

        {/* Section 6: Hypercharges */}
        <section id="hypercharges" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Hypercharges Explained
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Hypercharges</strong> are the newest ability type, available at Power Level 11. They supercharge your Super ability for one use, adding extra effects and power.
          </p>

          <figure className="mb-6">
            <img
              src={images.hypercharge.url}
              alt={images.hypercharge.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Hypercharges add powerful enhancements to your Super
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#8B5CF6' }}>How Hypercharges Work</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Unlocked at Power 11</li>
                <li>• Requires full Hypercharge bar</li>
                <li>• Bar fills from dealing/taking damage</li>
                <li>• One enhanced Super per charge</li>
                <li>• +25% damage, +5% speed, +5% shield</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#8B5CF6' }}>Best Hypercharges</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• <strong>Buster</strong> - Massive shield increase</li>
                <li>• <strong>Cordelius</strong> - Longer shadow realm</li>
                <li>• <strong>Frank</strong> - Wider stun area</li>
                <li>• <strong>Mortis</strong> - Bigger heal radius</li>
                <li>• <strong>Surge</strong> - Instant upgrade</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#8B5CF6' }}>When to Use Hypercharge:</p>
            <p style={{ color: 'var(--text-muted)' }}>Save your Hypercharge for crucial moments - team fights, securing objectives, or clutch plays. Using it randomly wastes its game-changing potential.</p>
          </div>
        </section>

        {/* Section 7: Upgrade Priority */}
        <section id="upgrade-priority" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Upgrade Priority Guide
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Resources are limited, so prioritize wisely. Here's which brawlers benefit most from upgrades:
          </p>

          <div className="space-y-4 mb-6">
            {[
              { priority: "1", title: "High Priority - Upgrade First", brawlers: "Mortis, Spike, Gray, Byron, Max, Cordelius, Emz", reason: "Star Powers/Gadgets are essential for these brawlers to function at their best." },
              { priority: "2", title: "Medium Priority", brawlers: "Frank, Tara, Piper, Stu, Fang, Belle, Bea, Poco", reason: "Abilities significantly improve their effectiveness but they're still usable without." },
              { priority: "3", title: "Lower Priority", brawlers: "Shelly, Nita, Bull, El Primo, Jessie, Colt", reason: "Basic kits are already solid. Abilities help but aren't transformative." },
            ].map((item) => (
              <div key={item.priority} className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold" style={{ background: 'linear-gradient(135deg, #FF6B35, #F43F5E)', color: '#fff' }}>
                    {item.priority}
                  </div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                </div>
                <p className="text-sm mb-2" style={{ color: '#FF6B35' }}>{item.brawlers}</p>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.reason}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#10B981' }}>Resource Tip:</p>
            <p style={{ color: 'var(--text-muted)' }}>Focus on getting 5-6 brawlers to Power 9 before spreading thin. This gives you competitive options without wasting resources on brawlers you don't play.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              { q: "Can I equip both Star Powers at once?", a: "No, you can only have one Star Power active at a time. Same with Gadgets - choose one per match based on the mode and map." },
              { q: "Which should I prioritize: Star Powers or Gadgets?", a: "Generally Star Powers have more impact since they're always active. However, some gadgets like Mortis's Survival Shovel are essential. It depends on the brawler." },
              { q: "Do Star Powers work in all game modes?", a: "Yes! Star Powers are active in every game mode including friendly matches. Gadgets also work everywhere." },
              { q: "How long does it take to get all abilities?", a: "As a F2P player, expect several months to max a brawler. Brawl Pass significantly speeds this up with guaranteed drops." },
              { q: "Should I buy Star Powers from the shop?", a: "Only buy them if you're close to maxing the brawler AND you play them frequently. 2000 coins is expensive - boxes might be more efficient." },
              { q: "What's the difference between Power 9 and 11?", a: "Power 9 unlocks Star Powers. Power 10 unlocks the second Star Power. Power 11 adds Hypercharge and Gears, which are significant but expensive upgrades." },
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
            Build Your Brawlers Right!
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Star Powers and Gadgets are what separate good players from great ones. Understanding which abilities to prioritize and when to use them will dramatically improve your gameplay.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Focus on upgrading your most-played brawlers first, learn the optimal builds, and practice using gadgets at the right moments. Good luck!
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
              href="/brawl-stars/brawlers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Browse All Brawlers
            </Link>
            <Link
              href="/brawl-stars/guides/ranked-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Ranked Guide
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
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Meta Season:</span> Season 34
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <SocialShare
            url="/brawl-stars/guides/star-powers-gadgets"
            title="Best Star Powers & Gadgets in Brawl Stars 2026"
            description="Optimal builds for every brawler in the meta"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides currentSlug="star-powers-gadgets" />
      </article>
    </div>
  );
}
