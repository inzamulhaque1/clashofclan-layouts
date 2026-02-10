import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';
import { GAME_IMAGES } from '@/lib/blog/images';

const images = GUIDE_IMAGES.cardUpgradeGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Clash Royale Card Upgrade Priority 2026 - What Cards to Max",
  description: "Learn which Clash Royale cards to upgrade first in 2026. Complete tier list of best cards to max, gold management tips, wild card strategy, and magic items guide.",
  keywords: [
    "card upgrade priority",
    "what cards to max",
    "clash royale upgrade guide",
    "best cards to level up",
    "clash royale gold management",
    "wild card strategy",
    "magic items guide",
    "clash royale progression"
  ],
  openGraph: {
    title: "Clash Royale Card Upgrade Priority 2026 - What Cards to Max",
    description: "Complete guide to upgrading cards efficiently. Tier list, gold management, and progression tips.",
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
    title: "Clash Royale Card Upgrade Priority 2026",
    description: "Max the right cards first and dominate ladder!",
  },
  alternates: {
    canonical: "/clash-royale/guides/card-upgrade-priority"
  }
};

export default function CardUpgradePriorityPage() {
  const publishDate = "2026-02-08";
  const updateDate = "2026-02-08";

  const faqs = [
    { question: "What card should I upgrade first in Clash Royale?", answer: "Upgrade your win condition first (Hog Rider, Giant, Goblin Barrel, etc.) since it's the card that deals the most tower damage. A level 14 Hog Rider does significantly more damage than a level 11 and survives more hits." },
    { question: "Is it worth upgrading common cards first?", answer: "Yes! Common cards are the cheapest and easiest to max because you naturally collect more of them. Cards like Knight, Ice Spirit, and Skeletons are used in many meta decks and give great value when maxed." },
    { question: "How should I spend my gold efficiently?", answer: "Only upgrade cards in your main deck. Avoid upgrading random cards for donation XP - the gold cost isn't worth it. Save gold for your core 8 cards, and only branch out to a second deck once your first is fully maxed." },
    { question: "What are the best magic items to use?", answer: "Book of Books is the most valuable magic item - use it on Legendary cards since they're hardest to collect. Wild Cards should be used on Legendary or Epic cards. Chests of Fortune give the best overall value." },
    { question: "Should I upgrade spells or troops first?", answer: "Upgrade win conditions first, then your key defensive troops (like Musketeer or PEKKA), then spells. Spells are less level-dependent - a Fireball kills the same interactions at most levels. However, The Log and Zap have important level interactions." },
    { question: "How long does it take to max a deck?", answer: "For free-to-play players, maxing a single deck takes roughly 6-12 months depending on activity. Using Pass Royale and playing every war significantly speeds this up. Focus on one deck at a time for the fastest progression." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Clash Royale Card Upgrade Priority 2026: What Cards to Max First"
        description="Complete guide to card upgrade priority in Clash Royale 2026. Tier list, gold management, wild cards, and magic items."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/guides/card-upgrade-priority`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Guides", url: `${baseUrl}/clash-royale/guides` },
          { name: "Card Upgrade Priority", url: `${baseUrl}/clash-royale/guides/card-upgrade-priority` }
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
          <span style={{ color: 'var(--text-primary)' }}>Card Upgrade Priority</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255, 215, 0, 0.1)', color: '#FFD700' }}>
            Progression Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 8, 2026</time>
          <span>14 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Clash Royale Card Upgrade Priority 2026: What Cards to Max First
        </h1>

        {/* Intro */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Gold is the <strong style={{ color: 'var(--text-primary)' }}>biggest bottleneck</strong> in Clash Royale progression. Upgrading the wrong cards wastes thousands of gold that could have gone toward maxing your main deck. This guide shows you exactly which cards to prioritize, how to manage your gold, and the smartest way to use wild cards and magic items.
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
            Upgrading the right cards first is key to climbing ladder efficiently
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#upgrade-order", text: "Card Upgrade Order" },
              { href: "#tier-list", text: "Best Cards to Max (Tier List)" },
              { href: "#gold-management", text: "Gold Management Strategy" },
              { href: "#wild-cards", text: "Wild Card Strategy" },
              { href: "#magic-items", text: "Magic Items Usage Guide" },
              { href: "#upgrade-costs", text: "Upgrade Cost Table" },
              { href: "#progression-tips", text: "Progression Tips" },
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

        {/* Section 1: Upgrade Order */}
        <section id="upgrade-order" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Card Upgrade Order: What to Level First
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Follow this priority system to maximize your ladder performance while minimizing wasted gold:
          </p>

          <div className="space-y-4">
            {[
              { num: "1", title: "Win Condition", desc: "Hog Rider, Giant, Golem, Goblin Barrel, X-Bow - your primary tower damage source. Level differences matter most here.", color: "#EF4444" },
              { num: "2", title: "Key Defensive Troop", desc: "Musketeer, PEKKA, Inferno Tower - your main defensive card. Needs to survive key interactions at higher levels.", color: "#3B82F6" },
              { num: "3", title: "Small Spell", desc: "The Log, Zap, Arrows - level-dependent interactions (killing Princess, Goblin Barrel goblins) make these critical.", color: "#F59E0B" },
              { num: "4", title: "Support Troops", desc: "Baby Dragon, Mega Minion, Knight - important cards that fill roles in your deck's strategy.", color: "#8B5CF6" },
              { num: "5", title: "Big Spell", desc: "Fireball, Poison, Lightning - less level-dependent but still important for killing Musketeer, Wizard, etc.", color: "#10B981" },
              { num: "6", title: "Cycle Cards", desc: "Ice Spirit, Skeletons, Ice Golem - cheapest to upgrade and least level-dependent. Save for last.", color: "#06B6D4" },
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

        {/* Section 2: Tier List */}
        <section id="tier-list" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Best Cards to Max: Upgrade Tier List
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            These cards appear in the most meta decks and provide the best return on your gold investment:
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crCardTiers.url}
              alt={GAME_IMAGES.crCardTiers.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Card tier list - prioritize S and A tier cards for your main deck
            </figcaption>
          </figure>

          <div className="space-y-4">
            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#EF4444' }}>S-Tier (Max First)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Conditions:</strong> Hog Rider, Goblin Barrel, Royal Giant, Giant | <strong>Spells:</strong> The Log, Zap | <strong>Troops:</strong> Musketeer, Knight, Valkyrie
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), transparent)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#F59E0B' }}>A-Tier (High Priority)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Conditions:</strong> Golem, X-Bow, Balloon, Miner | <strong>Spells:</strong> Fireball, Poison, Arrows | <strong>Troops:</strong> PEKKA, Baby Dragon, Mega Minion, Inferno Dragon
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#10B981' }}>B-Tier (Medium Priority)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Win Conditions:</strong> Mortar, Graveyard, Ram Rider | <strong>Spells:</strong> Lightning, Tornado | <strong>Troops:</strong> Electro Wizard, Bandit, Lumberjack, Guards
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent)', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
              <h3 className="font-bold text-lg mb-2" style={{ color: '#3B82F6' }}>C-Tier (Only If In Your Deck)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                <strong>Troops:</strong> Witch, Wizard, Sparky, Executioner | <strong>Spells:</strong> Rage, Clone, Mirror | <strong>Note:</strong> These cards are deck-specific - only upgrade if they're core to your strategy.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Gold Management */}
        <section id="gold-management" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Gold Management Strategy
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Gold is the scarcest resource in Clash Royale. Here's how to maximize every coin:
          </p>

          <figure className="mb-6">
            <img
              src={GAME_IMAGES.crGoldManagement.url}
              alt={GAME_IMAGES.crGoldManagement.alt}
              className="w-full rounded-xl"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Smart gold management is the key to fast progression
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #10B981' }}>
              <h3 className="font-bold" style={{ color: '#10B981' }}>DO</h3>
              <ul className="text-sm space-y-1 mt-2" style={{ color: 'var(--text-muted)' }}>
                <li>Focus on one deck at a time</li>
                <li>Play every Clan War for gold rewards</li>
                <li>Complete all daily challenges</li>
                <li>Open every free chest on time</li>
                <li>Play Special Challenges for gold</li>
                <li>Save gold for your main deck cards</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: '4px solid #EF4444' }}>
              <h3 className="font-bold" style={{ color: '#EF4444' }}>DON'T</h3>
              <ul className="text-sm space-y-1 mt-2" style={{ color: 'var(--text-muted)' }}>
                <li>Upgrade random cards for donations</li>
                <li>Spread gold across multiple decks</li>
                <li>Buy cards from the shop with gold</li>
                <li>Upgrade cards just because you can</li>
                <li>Waste gold on cards below B-tier</li>
                <li>Ignore Clan War free gold rewards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 4: Wild Card Strategy */}
        <section id="wild-cards" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Wild Card Strategy
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Wild Cards can substitute for any card of the same rarity. Use them strategically:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#8B5CF6' }}>Legendary Wild Cards</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Most valuable wild cards. Use on Legendaries in your main deck (The Log, Miner, Inferno Dragon, Lumberjack). Never waste on Legendaries you don't use.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#EC4899' }}>Epic Wild Cards</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Use on key Epics like PEKKA, Golem, X-Bow, Goblin Barrel, or Baby Dragon. Epics are slow to collect naturally, so wild cards help significantly.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#3B82F6' }}>Rare Wild Cards</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Use on Rares in your main deck like Hog Rider, Musketeer, Fireball, or Mega Minion. Rares are moderate to collect - wild cards provide a nice boost.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#6B7280' }}>Common Wild Cards</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Least valuable since Commons are easy to collect. Use on Knight, Zap, Archers, or Minions if they're in your deck and you need a quick level up.</p>
            </div>
          </div>
        </section>

        {/* Section 5: Magic Items */}
        <section id="magic-items" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Magic Items Usage Guide
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Magic items accelerate your progression dramatically when used correctly:
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { item: "Book of Books", desc: "Use on Legendary cards only. Gives the maximum number of cards needed for next upgrade. Most valuable magic item.", color: "#8B5CF6" },
              { item: "Book of Cards", desc: "Use on the highest rarity version you have. Epic Book on your key Epic, Rare Book on your main Rare.", color: "#3B82F6" },
              { item: "Chest of Fortune", desc: "Best overall value. Contains gold, gems, and cards. Use whenever available - no strategic saving needed.", color: "#F59E0B" },
              { item: "Magic Coin", desc: "Instantly upgrades one card to next level for free (no gold). Save for level 13→14 upgrades which cost 100,000 gold.", color: "#10B981" },
            ].map((item) => (
              <div key={item.item} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', borderLeft: `4px solid ${item.color}` }}>
                <h3 className="font-bold" style={{ color: item.color }}>{item.item}</h3>
                <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Upgrade Cost Table */}
        <section id="upgrade-costs" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Card Upgrade Cost Table
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Plan your gold spending with this complete upgrade cost breakdown:
          </p>

          <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  <th className="text-left p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Level</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Gold Cost</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Common Cards</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Rare Cards</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Epic Cards</th>
                  <th className="text-center p-3 font-bold" style={{ color: 'var(--text-primary)' }}>Legendary Cards</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { level: "10 → 11", gold: "8,000", common: "800", rare: "200", epic: "20", legendary: "2" },
                  { level: "11 → 12", gold: "20,000", common: "1,000", rare: "400", epic: "50", legendary: "4" },
                  { level: "12 → 13", gold: "50,000", common: "2,000", rare: "800", epic: "100", legendary: "6" },
                  { level: "13 → 14", gold: "100,000", common: "5,000", rare: "2,000", epic: "200", legendary: "10" },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium" style={{ color: 'var(--text-primary)' }}>{row.level}</td>
                    <td className="p-3 text-center font-bold" style={{ color: '#F59E0B' }}>{row.gold}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.common}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.rare}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.epic}</td>
                    <td className="p-3 text-center" style={{ color: 'var(--text-muted)' }}>{row.legendary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-xl" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: '#F59E0B' }}>Total to max one card (Level 1→14):</strong> ~186,000 gold per card. Maxing a full 8-card deck costs approximately 1,488,000 gold total.
            </p>
          </div>
        </section>

        {/* Section 7: Progression Tips */}
        <section id="progression-tips" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Top Progression Tips for 2026
          </h2>

          <div className="space-y-4">
            {[
              { tip: "Stick to One Deck", detail: "The fastest way to climb ladder is maxing one deck. Resist the urge to spread resources across multiple decks.", icon: "1" },
              { tip: "Always Play Clan War", detail: "Clan War rewards include significant gold, wild cards, and magic items. Missing wars is missing free progression.", icon: "2" },
              { tip: "Complete Pass Royale Challenges", detail: "Pass Royale is the best value purchase. Even free players should complete all challenge tiers for gold and cards.", icon: "3" },
              { tip: "Request Cards Strategically", detail: "Always request Rares over Commons (they're harder to collect). On Epic Sunday, request the Epic you need most.", icon: "4" },
              { tip: "Trade Smartly", detail: "Only trade for cards in your main deck. Never trade away cards you might need later unless you have excess copies.", icon: "5" },
              { tip: "Max Champions Last", detail: "Champions are the hardest to level since you can only get them from specific chests. Focus on your other 7 cards first.", icon: "6" },
            ].map((item) => (
              <div key={item.icon} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-black text-white" style={{ background: '#1E90FF' }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.tip}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.detail}</p>
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
            Upgrade Smart, Climb Faster!
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Smart upgrading is the shortcut to a maxed deck. Follow this priority guide, manage your gold carefully, and use magic items on the right cards. You'll be competing at max level before you know it.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/clash-royale/guides/best-decks"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              ← Best Meta Decks
            </Link>
            <Link
              href="/clash-royale/guides/clan-war"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Clan War Guide →
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
