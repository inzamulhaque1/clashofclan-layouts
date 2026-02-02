import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';

export const metadata = {
  title: "Brawl Stars Beginner Guide 2026 | Complete Tutorial for New Players",
  description: "Master Brawl Stars with our ultimate beginner guide 2026. Learn game modes, best starter brawlers, trophy road tips, controls, upgrading, and pro strategies to dominate from day one.",
  keywords: [
    "brawl stars beginner guide",
    "brawl stars tips for beginners",
    "how to play brawl stars",
    "brawl stars tutorial 2026",
    "brawl stars new player guide",
    "brawl stars starter tips",
    "brawl stars game modes explained",
    "brawl stars trophy road guide",
    "best brawlers for beginners",
    "brawl stars controls guide"
  ],
  openGraph: {
    title: "Brawl Stars Beginner Guide 2026 | Complete Tutorial for New Players",
    description: "Master Brawl Stars with our ultimate beginner guide. Learn everything from controls to winning strategies.",
    images: [{
      url: "https://wowvendor.com/app/uploads/2024/09/Brawl-Stars-beginners-guide-best-tips-for-new-players.png",
      width: 1200,
      height: 630,
      alt: "Brawl Stars Beginner Guide 2026 - Complete Tutorial for New Players"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Beginner Guide 2026",
    description: "Complete tutorial for new players - master the game from day one!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/beginners-guide"
  }
};

export default function BeginnersGuidePage() {
  const publishDate = "2026-02-01";
  const updateDate = "2026-02-01";
  const baseUrl = "https://www.game365hub.com";

  const faqs = [
    { question: "Is Brawl Stars free to play?", answer: "Yes! Brawl Stars is completely free to download and play. You can enjoy all game modes and unlock all brawlers without spending money. Purchases are optional and mainly for cosmetics or faster progression." },
    { question: "How do I get more brawlers?", answer: "Brawlers are unlocked through Brawl Boxes (free and paid), Trophy Road rewards, Brawl Pass, and special events. Play regularly and you'll steadily unlock more!" },
    { question: "What's the best brawler for beginners?", answer: "Shelly (your starting brawler) is excellent. Nita, Colt, Bull, and Poco are also great beginner-friendly options that teach different playstyles." },
    { question: "How do trophies work?", answer: "You earn trophies by winning and lose them by losing (above 500 trophies per brawler). Each brawler has individual trophies, and your total is the sum of all brawlers." },
    { question: "Should I spend gems on Brawl Boxes?", answer: "No! Save gems for Brawl Pass - it offers much better value. Never spend gems on regular Brawl Boxes." },
    { question: "When should I play Ranked mode?", answer: "Unlock Ranked at 5000 total trophies. We recommend having at least 15 brawlers at Power 9+ before seriously pushing Ranked." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Brawl Stars Beginner Guide 2026: Complete Tutorial for New Players"
        description="Master Brawl Stars with our ultimate beginner guide 2026. Learn game modes, best starter brawlers, trophy road tips, controls, upgrading, and pro strategies to dominate from day one."
        image="https://wowvendor.com/app/uploads/2024/09/Brawl-Stars-beginners-guide-best-tips-for-new-players.png"
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/beginners-guide`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Beginner's Guide", url: `${baseUrl}/brawl-stars/guides/beginners-guide` }
        ]}
      />

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-orange-500">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/brawl-stars" className="hover:text-orange-500">Brawl Stars</Link>
          <span className="mx-2">/</span>
          <Link href="/brawl-stars/guides" className="hover:text-orange-500">Guides</Link>
          <span className="mx-2">/</span>
          <span style={{ color: 'var(--text-primary)' }}>Beginner's Guide</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35' }}>
            Beginner Guide
          </span>
          <time dateTime={publishDate}>Published: Feb 1, 2026</time>
          <span>15 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Brawl Stars Beginner Guide 2026: Complete Tutorial for New Players
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          Welcome to the ultimate <strong style={{ color: 'var(--text-primary)' }}>Brawl Stars beginner guide for 2026</strong>! Whether you just downloaded the game or want to improve your skills, this comprehensive tutorial covers everything you need to know. From understanding game modes and choosing your first brawler to mastering controls and climbing the trophy road, we've got you covered.
        </p>

        {/* Hero Image */}
        <figure className="mb-10">
          <img
            src="https://wowvendor.com/app/uploads/2024/09/Brawl-Stars-beginners-guide-best-tips-for-new-players.png"
            alt="Brawl Stars Beginner Guide 2026 - Complete Tutorial for New Players"
            className="w-full rounded-2xl"
            loading="eager"
          />
          <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
            Your complete guide to mastering Brawl Stars in 2026
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#what-is-brawl-stars", text: "What is Brawl Stars?" },
              { href: "#understanding-the-interface", text: "Understanding the Main Interface" },
              { href: "#choosing-your-first-brawler", text: "Choosing Your First Brawler" },
              { href: "#trophy-road-explained", text: "Trophy Road Explained" },
              { href: "#game-modes-guide", text: "Game Modes Guide" },
              { href: "#mastering-controls", text: "Mastering Controls & Movement" },
              { href: "#upgrading-brawlers", text: "How to Upgrade Your Brawlers" },
              { href: "#star-powers-gadgets", text: "Star Powers & Gadgets" },
              { href: "#joining-a-club", text: "Joining a Club" },
              { href: "#brawl-pass-guide", text: "Brawl Pass Explained" },
              { href: "#tips-and-tricks", text: "Pro Tips for Beginners" },
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

        {/* Section 1: What is Brawl Stars */}
        <section id="what-is-brawl-stars" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            What is Brawl Stars?
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Brawl Stars</strong> is a free-to-play multiplayer mobile game developed by Supercell, the creators of Clash of Clans and Clash Royale. Launched globally in December 2018, it has become one of the most popular mobile games worldwide with millions of active players.
          </p>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            The game features fast-paced 3v3 battles and battle royale modes where you control unique characters called "Brawlers." Each brawler has distinct abilities, attack styles, and super moves that make gameplay diverse and strategic.
          </p>
          <p style={{ color: 'var(--text-muted)' }}>
            What makes Brawl Stars special is its quick match times (typically 2-3 minutes), variety of game modes, and the constant addition of new brawlers and content. It's easy to pick up but offers deep strategic gameplay for competitive players.
          </p>
        </section>

        {/* Section 2: Understanding the Interface */}
        <section id="understanding-the-interface" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Understanding the Main Interface
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            When you first open Brawl Stars, the main menu might seem overwhelming. Let's break down the key elements you need to know:
          </p>

          <figure className="mb-6">
            <img
              src="https://i.redd.it/6ko96lfznaw41.jpg"
              alt="Brawl Stars main menu interface and game modes selection screen"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              The Brawl Stars main menu with game mode selection
            </figcaption>
          </figure>

          <div className="space-y-4" style={{ color: 'var(--text-muted)' }}>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Trophy Count</h3>
              <p>Located at the top, this shows your total trophies earned across all brawlers. Trophies determine your progression and unlock new content.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Game Mode Selection</h3>
              <p>The center of the screen displays available game modes. Different modes rotate daily, with some being permanent and others event-based.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Brawlers Tab</h3>
              <p>Access your brawler collection, upgrade them, and customize with skins. This is where you'll spend time improving your roster.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Shop</h3>
              <p>Purchase gems, offers, skins, and brawl boxes. Free rewards appear here daily, so check regularly!</p>
            </div>
          </div>
        </section>

        {/* Section 3: Choosing Your First Brawler */}
        <section id="choosing-your-first-brawler" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Choosing Your First Brawler
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            When you start Brawl Stars, you'll begin with <strong style={{ color: 'var(--text-primary)' }}>Shelly</strong> - and she's actually one of the best brawlers for learning the game. Here's why she's perfect for beginners:
          </p>

          <figure className="mb-6">
            <img
              src="https://preview.redd.it/wouldnt-it-be-cool-if-you-could-choose-your-starting-v0-rno2urcfcvgb1.png?width=640&crop=smart&auto=webp&s=0a4ac5623905f01d5c679ad74ab93476b9e831d1"
              alt="How to choose your first brawler in Brawl Stars - Shelly starter guide"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Starting brawler selection in Brawl Stars
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Why Shelly is Great for Beginners</h3>
          <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--text-muted)' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Balanced Stats:</strong> Good health, decent damage, medium range - perfect for learning</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Easy Super:</strong> Her Super (shotgun blast) charges quickly and deals massive damage</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Versatile:</strong> Works well in almost every game mode</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Forgiving:</strong> Spread attack means you don't need perfect aim</li>
          </ul>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Best Beginner Brawlers to Unlock Next</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { name: "Nita", desc: "Summons a bear, easy to use, great for 3v3 modes" },
              { name: "Colt", desc: "Long range damage dealer, teaches aiming skills" },
              { name: "Bull", desc: "Tank brawler, perfect for aggressive playstyles" },
              { name: "Poco", desc: "Support healer, excellent for team play" },
            ].map((brawler, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h4 className="font-bold" style={{ color: '#FF6B35' }}>{brawler.name}</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{brawler.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Trophy Road */}
        <section id="trophy-road-explained" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Trophy Road Explained
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The <strong style={{ color: 'var(--text-primary)' }}>Trophy Road</strong> is your main progression system in Brawl Stars. As you earn trophies by winning matches, you unlock new brawlers, game modes, and rewards.
          </p>

          <figure className="mb-6">
            <img
              src="https://i.redd.it/hd6ojhmo6aob1.jpg"
              alt="Brawl Stars trophy road rewards and progression system explained"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Trophy Road progression with rewards at each milestone
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Key Trophy Road Milestones</h3>
          <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
            <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <span className="font-bold text-orange-500 w-20">0-500</span>
              <span>Tutorial phase - unlock basic brawlers and game modes</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <span className="font-bold text-orange-500 w-20">500-2000</span>
              <span>Unlock all core game modes and several brawlers</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <span className="font-bold text-orange-500 w-20">2000-5000</span>
              <span>Access to Club League and competitive features</span>
            </div>
            <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: 'var(--surface-100)' }}>
              <span className="font-bold text-orange-500 w-20">5000+</span>
              <span>Ranked mode unlocked - climb to Mythic!</span>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl" style={{ background: 'rgba(255, 107, 53, 0.1)', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FF6B35' }}>Pro Tip:</p>
            <p style={{ color: 'var(--text-muted)' }}>Focus on pushing multiple brawlers evenly rather than one brawler to high trophies. You earn more total trophies and unlock content faster this way.</p>
          </div>
        </section>

        {/* Section 5: Game Modes Guide */}
        <section id="game-modes-guide" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Game Modes Guide for Beginners
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Brawl Stars offers various game modes, each requiring different strategies. Here are the main modes you'll encounter:
          </p>

          {/* Gem Grab */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Gem Grab (3v3)</h3>
            <figure className="mb-4">
              <img
                src="https://gamingonphone.com/wp-content/uploads/2020/05/gem.jpg"
                alt="Gem Grab game mode tutorial - best beginner strategy Brawl Stars"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </figure>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Objective:</strong> Collect 10 gems from the center mine and hold them for 15 seconds to win.
            </p>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Beginner Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text-muted)' }}>
              <li>Don't rush to grab gems if enemies are nearby</li>
              <li>Assign one teammate as the "gem carrier"</li>
              <li>When you have 10 gems, fall back and play defensive</li>
              <li>Best starter brawlers: Poco, Nita, Jessie</li>
            </ul>
          </div>

          {/* Brawl Ball */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Brawl Ball (3v3)</h3>
            <figure className="mb-4">
              <img
                src="https://preview.redd.it/i-do-not-understand-brawl-ball-how-do-you-actually-get-good-v0-5iwtn3i3yrge1.jpeg?auto=webp&s=c29378f5ccbe2586240464560760975915e1751b"
                alt="Brawl Ball tips for beginners - scoring goals in Brawl Stars"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </figure>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Objective:</strong> Score 2 goals by carrying the ball into the enemy goal. It's like soccer with shooting!
            </p>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Beginner Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text-muted)' }}>
              <li>Pass the ball to teammates to dodge enemy fire</li>
              <li>Use your Super to break walls near the goal</li>
              <li>Don't auto-aim the ball - aim carefully for passes and shots</li>
              <li>Best starter brawlers: El Primo, Bull, Frank</li>
            </ul>
          </div>

          {/* Showdown */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Showdown (Solo/Duo)</h3>
            <figure className="mb-4">
              <img
                src="https://i.ytimg.com/vi/guRK3JMBpBM/maxresdefault.jpg"
                alt="Solo Showdown survival guide - Brawl Stars battle royale tips"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </figure>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Objective:</strong> Battle royale mode - last brawler (or duo) standing wins!
            </p>
            <p className="mb-3" style={{ color: 'var(--text-muted)' }}>
              <strong style={{ color: 'var(--text-primary)' }}>Beginner Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1" style={{ color: 'var(--text-muted)' }}>
              <li>Collect power cubes from boxes to get stronger</li>
              <li>Bush camping is a valid strategy - use it!</li>
              <li>Don't engage every fight - sometimes it's better to hide</li>
              <li>Stay away from the poison gas that shrinks the map</li>
              <li>Best starter brawlers: Shelly, Bull, Rosa</li>
            </ul>
          </div>
        </section>

        {/* Section 6: Controls */}
        <section id="mastering-controls" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Mastering Controls & Movement
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Good control over your brawler is essential for winning. Here's how to master the basic mechanics:
          </p>

          <figure className="mb-6">
            <img
              src="https://i.ytimg.com/vi/v9UYAHMxIsY/maxresdefault.jpg"
              alt="Brawl Stars controls and movement mechanics tutorial for beginners"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Understanding Brawl Stars control scheme
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FF6B35' }}>Movement (Left Side)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Use the left virtual joystick to move your brawler. Smooth, continuous movement is key to dodging enemy shots.</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FF6B35' }}>Attack (Right Side)</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Tap for quick auto-aim or drag to manually aim. Manual aim is crucial for longer-range brawlers!</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FF6B35' }}>Super Ability</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Once charged (yellow button), tap or drag to use your Super. Save it for crucial moments!</p>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#FF6B35' }}>Gadget</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Unlocked at Power 7. Limited uses per match - use strategically!</p>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#10B981' }}>Important Setting:</p>
            <p style={{ color: 'var(--text-muted)' }}>Go to Settings and enable "Joystick" mode if you prefer fixed joystick positions. Many pro players use this for consistent muscle memory.</p>
          </div>
        </section>

        {/* Section 7: Upgrading Brawlers */}
        <section id="upgrading-brawlers" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            How to Upgrade Your Brawlers
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Upgrading brawlers increases their health, damage, and unlocks special abilities. Here's how the system works:
          </p>

          <figure className="mb-6">
            <img
              src="https://preview.redd.it/literally-the-most-simple-fix-to-having-too-many-power-v0-jvyklso112wc1.jpeg?auto=webp&s=3c801b3a508bc0d0294e66852dff4e1d5f904099"
              alt="How to upgrade brawlers with power points and coins in Brawl Stars"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Brawler upgrade screen with power points
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Upgrade Requirements</h3>
          <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--text-muted)' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Power Points:</strong> Collected from Brawl Boxes, Trophy Road, and Brawl Pass</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Coins:</strong> Used alongside Power Points to upgrade</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Power Level 1-9:</strong> Basic stat increases</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Power Level 10-11:</strong> Unlock Gadgets and Star Powers</li>
          </ul>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 107, 53, 0.1)', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FF6B35' }}>Beginner Strategy:</p>
            <p style={{ color: 'var(--text-muted)' }}>Focus on upgrading 3-5 brawlers to Power 9 before spreading resources thin. This gives you competitive options for different modes.</p>
          </div>
        </section>

        {/* Section 8: Star Powers & Gadgets */}
        <section id="star-powers-gadgets" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Star Powers & Gadgets
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            These special abilities significantly boost your brawler's effectiveness. Understanding them is key to competitive play.
          </p>

          <figure className="mb-6">
            <img
              src="https://skycoach.gg/storage/uploads/products/description/product_67d9c77fbc351.jpg"
              alt="Unlocking star powers and gadgets - Brawl Stars progression guide"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Star Powers and Gadgets enhance your brawler's abilities
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#FFD700' }}>Star Powers</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>Unlocked at Power Level 9+</li>
                <li>Passive abilities that are always active</li>
                <li>Each brawler has 2 Star Powers</li>
                <li>Found in Brawl Boxes or bought in Shop</li>
                <li>Example: Shelly's "Shell Shock" slows enemies hit by her Super</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#3B82F6' }}>Gadgets</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>Unlocked at Power Level 7+</li>
                <li>Active abilities with limited uses (usually 3 per match)</li>
                <li>Each brawler has 2 Gadgets</li>
                <li>Can turn the tide of battle when used correctly</li>
                <li>Example: Shelly's "Fast Forward" dashes forward instantly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 9: Joining a Club */}
        <section id="joining-a-club" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Joining a Club
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Clubs are Brawl Stars' social feature. Joining a club provides significant benefits and is highly recommended!
          </p>

          <figure className="mb-6">
            <img
              src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/brawl-stars/5/50/2019-01-28_14-08-05_000.png?width=1280"
              alt="Joining a club in Brawl Stars - social features and club league"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Club interface showing members and club activities
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Benefits of Joining a Club</h3>
          <ul className="list-disc list-inside space-y-2 mb-6" style={{ color: 'var(--text-muted)' }}>
            <li><strong style={{ color: 'var(--text-primary)' }}>Club League:</strong> Compete for amazing rewards including Power Points, Coins, and exclusive skins</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Club Quests:</strong> Complete quests together for bonus rewards</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Social Features:</strong> Chat, share replays, and find teammates</li>
            <li><strong style={{ color: 'var(--text-primary)' }}>Learning:</strong> Play with experienced players and improve faster</li>
          </ul>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#8B5CF6' }}>Finding the Right Club:</p>
            <p style={{ color: 'var(--text-muted)' }}>Look for clubs with active members (check recent activity), similar trophy range, and a friendly community. Don't hesitate to try multiple clubs until you find one that fits!</p>
          </div>
        </section>

        {/* Section 10: Brawl Pass */}
        <section id="brawl-pass-guide" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Brawl Pass Explained
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            The Brawl Pass is a seasonal progression system offering rewards as you play. Should beginners buy it? Let's break it down:
          </p>

          <figure className="mb-6">
            <img
              src="https://www.thexboxhub.com/wp-content/uploads/2025/12/image-3-640x288.png"
              alt="Brawl Pass explained - free vs premium rewards guide 2026"
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Brawl Pass reward track showing free and premium tiers
            </figcaption>
          </figure>

          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--text-primary)' }}>Free Track</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>Available to all players</li>
                <li>Brawl Boxes and Big Boxes</li>
                <li>Coins and Power Points</li>
                <li>Limited cosmetic items</li>
                <li>Great value for F2P players</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(139, 92, 246, 0.1))', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#FF6B35' }}>Brawl Pass Plus</h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>Costs 169 Gems</li>
                <li>Exclusive new Brawler (Chromatic)</li>
                <li>Exclusive skins and pins</li>
                <li>5x more rewards than free track</li>
                <li>Best value purchase in the game</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#10B981' }}>Should Beginners Buy Brawl Pass?</p>
            <p style={{ color: 'var(--text-muted)' }}>Yes, if you can afford it! It's the best gem value in the game. Save your free gems (from Trophy Road and free rewards) for 2-3 seasons, then buy the Brawl Pass for massive progression.</p>
          </div>
        </section>

        {/* Section 11: Tips and Tricks */}
        <section id="tips-and-tricks" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Pro Tips for Beginners
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Here are essential tips that will accelerate your improvement:
          </p>

          <div className="space-y-4">
            {[
              { num: "1", title: "Don't Auto-Aim Everything", desc: "Auto-aim is great for close range, but learn to manually aim for better accuracy at distance. This is the #1 skill that separates beginners from intermediate players." },
              { num: "2", title: "Play the Objective", desc: "Kills mean nothing if you lose the match. Focus on gems, balls, zones, or survival - not just eliminating enemies." },
              { num: "3", title: "Use Walls Wisely", desc: "Walls block shots. Always position yourself near cover, and peek out to attack before retreating." },
              { num: "4", title: "Know When to Retreat", desc: "If you're low on health, back off and heal (brawlers auto-heal after not taking damage). A dead brawler helps no one." },
              { num: "5", title: "Save Your Super", desc: "Don't waste your Super on a single low-health enemy. Save it for game-changing moments or when multiple enemies are grouped." },
              { num: "6", title: "Check the Map", desc: "Before the match starts, look at the map. Identify choke points, hiding spots, and the best routes." },
              { num: "7", title: "Collect Free Rewards Daily", desc: "Log in every day to collect free rewards from the shop. These add up significantly over time!" },
              { num: "8", title: "Watch Your Replays", desc: "After losses, watch the replay to see what went wrong. This is the fastest way to improve." },
            ].map((tip) => (
              <div key={tip.num} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #FF6B35, #F43F5E)', color: '#fff' }}>
                  {tip.num}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{tip.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{tip.desc}</p>
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
            {[
              { q: "Is Brawl Stars free to play?", a: "Yes! Brawl Stars is completely free to download and play. You can enjoy all game modes and unlock all brawlers without spending money. Purchases are optional and mainly for cosmetics or faster progression." },
              { q: "How do I get more brawlers?", a: "Brawlers are unlocked through Brawl Boxes (free and paid), Trophy Road rewards, Brawl Pass, and special events. Play regularly and you'll steadily unlock more!" },
              { q: "What's the best brawler for beginners?", a: "Shelly (your starting brawler) is excellent. Nita, Colt, Bull, and Poco are also great beginner-friendly options that teach different playstyles." },
              { q: "How do trophies work?", a: "You earn trophies by winning and lose them by losing (above 500 trophies per brawler). Each brawler has individual trophies, and your total is the sum of all brawlers." },
              { q: "Should I spend gems on Brawl Boxes?", a: "No! Save gems for Brawl Pass - it offers much better value. Never spend gems on regular Brawl Boxes." },
              { q: "When should I play Ranked mode?", a: "Unlock Ranked at 5000 total trophies. We recommend having at least 15 brawlers at Power 9+ before seriously pushing Ranked." },
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
            Start Your Brawl Stars Journey Today!
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Congratulations! You now have all the knowledge you need to start dominating in Brawl Stars. Remember, the key to improvement is consistent practice and learning from your mistakes.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Start with Shelly, focus on one game mode at a time, and don't forget to have fun! The Brawl Stars community is welcoming, and there's always something new to discover.
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
              href="/brawl-stars/modes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Game Mode Guides
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
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Game Version:</span> Season 34
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <SocialShare
            url="/brawl-stars/guides/beginners-guide"
            title="Brawl Stars Beginner Guide 2026 - Complete Tutorial"
            description="Everything new players need to know to start winning in Brawl Stars"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides currentSlug="beginners-guide" />
      </article>
    </div>
  );
}
