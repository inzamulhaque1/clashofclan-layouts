import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';
import { ArticleJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';

const images = GUIDE_IMAGES.mapControlGuide;
const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: "Brawl Stars Map Control Guide 2026 | Positioning & Zone Control Tips",
  description: "Master map control in Brawl Stars with our complete positioning guide. Learn zone control, wall usage, lane management, and advanced movement techniques for every game mode.",
  keywords: [
    "brawl stars map control",
    "brawl stars positioning",
    "zone control brawl stars",
    "brawl stars movement tips",
    "how to position brawl stars",
    "brawl stars lane control",
    "wall usage brawl stars",
    "brawl stars pro tips",
    "map awareness brawl stars",
    "brawl stars advanced guide"
  ],
  openGraph: {
    title: "Brawl Stars Map Control Guide 2026 | Positioning & Zone Control",
    description: "Master positioning and zone control to dominate every game mode in Brawl Stars.",
    images: [{
      url: images.hero.url,
      width: 720,
      height: 404,
      alt: images.hero.alt
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Map Control Guide - Brawl Stars 2026",
    description: "Master positioning and zone control to win more games!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/map-control"
  }
};

export default function MapControlGuidePage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Brawl Stars Map Control Guide 2026: Positioning & Zone Control Tips"
        description="Master map control in Brawl Stars with our complete positioning guide. Learn zone control, wall usage, lane management, and advanced movement techniques for every game mode."
        image={images.hero.url}
        datePublished="2026-02-02"
        dateModified="2026-02-02"
        url={`${baseUrl}/brawl-stars/guides/map-control`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Map Control Guide", url: `${baseUrl}/brawl-stars/guides/map-control` }
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
          <span style={{ color: 'var(--text-primary)' }}>Map Control</span>
        </nav>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-muted)' }}>
          <span className="px-3 py-1 rounded-full" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#EC4899' }}>
            Advanced Guide
          </span>
          <time dateTime="2026-02-02">Published: Feb 2, 2026</time>
          <span>12 min read</span>
        </div>

        {/* H1 Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
          Map Control Guide 2026: Master Positioning & Zone Control
        </h1>

        {/* Intro Paragraph */}
        <p className="text-lg mb-8" style={{ color: 'var(--text-muted)' }}>
          <strong style={{ color: 'var(--text-primary)' }}>Map control</strong> separates good players from great ones. While mechanics matter, understanding where to be and when is what truly wins games. This guide covers positioning fundamentals, zone control strategies, and advanced movement techniques.
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
            Good positioning wins more games than raw mechanics
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h2>
          <nav className="space-y-2">
            {[
              { href: "#why-positioning", text: "Why Positioning Matters" },
              { href: "#basic-principles", text: "Basic Positioning Principles" },
              { href: "#zone-control", text: "Zone Control Strategies" },
              { href: "#wall-usage", text: "Using Walls & Cover" },
              { href: "#lane-management", text: "Lane Management" },
              { href: "#mode-specific", text: "Mode-Specific Positioning" },
              { href: "#advanced-tips", text: "Advanced Movement Tips" },
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

        {/* Section 1: Why Positioning Matters */}
        <section id="why-positioning" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Why Positioning Matters
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            In Brawl Stars, <strong style={{ color: 'var(--text-primary)' }}>positioning determines 70% of fight outcomes</strong> before the first shot is fired. A well-positioned average player will consistently beat a mechanically skilled player with poor positioning.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Good positioning means being in the right place at the right time - maximizing your damage output while minimizing damage taken. It's about controlling space, not just chasing kills.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#10B981' }}>Good Positioning Gets You</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• First shot advantage in fights</li>
                <li>• Easy escapes when low HP</li>
                <li>• Better angles for attacks</li>
                <li>• Control of key map areas</li>
                <li>• Ability to support teammates</li>
              </ul>
            </div>
            <div className="p-4 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
              <h3 className="font-bold mb-2" style={{ color: '#EF4444' }}>Poor Positioning Leads To</h3>
              <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                <li>• Getting caught in crossfire</li>
                <li>• Dying without contributing</li>
                <li>• Losing objective control</li>
                <li>• Team fights becoming 2v3</li>
                <li>• Giving enemies free supers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 2: Basic Principles */}
        <section id="basic-principles" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Basic Positioning Principles
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            These fundamental principles apply to every brawler and game mode:
          </p>

          <div className="space-y-4 mb-6">
            {[
              { num: "1", title: "Stay Near Cover", desc: "Always have a wall, bush, or obstacle within 2-3 tiles. If a fight goes bad, you need an escape route." },
              { num: "2", title: "Don't Overextend", desc: "Pushing too deep alone is the #1 cause of deaths. If teammates aren't with you, don't go past mid." },
              { num: "3", title: "Maintain Range Advantage", desc: "If you're long-range, stay back. If you're short-range, close the gap using cover. Fight at YOUR optimal range." },
              { num: "4", title: "Watch the Minimap", desc: "Check enemy positions constantly. Missing enemies = danger. Always know where threats are." },
              { num: "5", title: "Triangle Formation", desc: "Your team should form a triangle, not a line. This creates crossfire and makes you harder to hit." },
              { num: "6", title: "Control the Center", desc: "Mid-map control wins games. It gives you options - you can rotate to any lane quickly." },
            ].map((item) => (
              <div key={item.num} className="flex gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold" style={{ background: 'linear-gradient(135deg, #EC4899, #8B5CF6)', color: '#fff' }}>
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Zone Control */}
        <section id="zone-control" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Zone Control Strategies
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            <strong style={{ color: 'var(--text-primary)' }}>Zone control</strong> means denying areas to enemies while securing them for your team. It's about controlling space, not just getting kills.
          </p>

          <figure className="mb-6">
            <img
              src={images.zoneControl.url}
              alt={images.zoneControl.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Controlling key zones forces enemies into unfavorable positions
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Key Zones to Control</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { zone: "Mid Control", desc: "Center of the map. Controlling mid lets you rotate to any lane and denies enemy movement.", priority: "Critical" },
              { zone: "Choke Points", desc: "Narrow passages between walls. Hold these to prevent enemy advances.", priority: "High" },
              { zone: "High Ground/Cover", desc: "Positions behind walls with good sight lines. These are power positions.", priority: "High" },
              { zone: "Objective Areas", desc: "Gem mine, goal area, zones - wherever the objective is, control it.", priority: "Critical" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold" style={{ color: '#EC4899' }}>{item.zone}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{
                    background: item.priority === 'Critical' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    color: item.priority === 'Critical' ? '#EF4444' : '#F59E0B'
                  }}>{item.priority}</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Zone Control Brawlers</h3>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { name: "Spike", why: "Cactus grenades deny areas" },
              { name: "Emz", why: "Spray creates no-go zones" },
              { name: "Barley", why: "Bottles control chokes" },
              { name: "Tick", why: "Mines deny entire lanes" },
              { name: "Sprout", why: "Walls block paths" },
              { name: "Bo", why: "Mines control objectives" },
            ].map((item, i) => (
              <div key={i} className="px-3 py-2 rounded-lg" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                <span className="text-xs block" style={{ color: 'var(--text-muted)' }}>{item.why}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Wall Usage */}
        <section id="wall-usage" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Using Walls & Cover
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Walls are your best friend in Brawl Stars. Learning to use them effectively is essential for survival and aggression.
          </p>

          <figure className="mb-6">
            <img
              src={images.wallUsage.url}
              alt={images.wallUsage.alt}
              className="w-full rounded-2xl"
              loading="lazy"
            />
            <figcaption className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
              Using walls for cover in Brawl Ball
            </figcaption>
          </figure>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Wall Techniques</h3>
          <div className="space-y-4 mb-6">
            {[
              { technique: "Peek Shooting", desc: "Step out from cover, fire, step back. Minimizes time you're exposed while dealing damage.", difficulty: "Basic" },
              { technique: "Wall Hugging", desc: "Stay touching the wall. This makes you harder to hit and gives instant cover.", difficulty: "Basic" },
              { technique: "Corner Camping", desc: "Wait at corners for enemies to walk into your range. Devastating for close-range brawlers.", difficulty: "Intermediate" },
              { technique: "Wall Breaks", desc: "Intentionally break walls to open angles or deny enemy cover. Especially in Brawl Ball.", difficulty: "Advanced" },
              { technique: "Juke Walls", desc: "Use walls to break line of sight while being chased. Cut corners tight to escape.", difficulty: "Advanced" },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold" style={{ color: '#EC4899' }}>{item.technique}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{
                    background: item.difficulty === 'Basic' ? 'rgba(16, 185, 129, 0.1)' : item.difficulty === 'Intermediate' ? 'rgba(245, 158, 11, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                    color: item.difficulty === 'Basic' ? '#10B981' : item.difficulty === 'Intermediate' ? '#F59E0B' : '#EF4444'
                  }}>{item.difficulty}</span>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#EC4899' }}>Bush Awareness:</p>
            <p style={{ color: 'var(--text-muted)' }}>Bushes provide invisibility, not protection. You can still be hit in bushes. Use them for surprise attacks and information gathering, not as permanent cover.</p>
          </div>
        </section>

        {/* Section 5: Lane Management */}
        <section id="lane-management" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Lane Management
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Most 3v3 maps have three lanes: left, mid, and right. Understanding lane assignments and rotations is crucial.
          </p>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Lane Roles</h3>
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '2px solid #3B82F6' }}>
              <div className="text-3xl mb-2">⬅️</div>
              <h4 className="font-bold" style={{ color: '#3B82F6' }}>Left Lane</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Often the "aggro" lane. Close-range brawlers push here.</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '2px solid #F59E0B' }}>
              <div className="text-3xl mb-2">⬆️</div>
              <h4 className="font-bold" style={{ color: '#F59E0B' }}>Mid Lane</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Control position. Support/control brawlers hold mid.</p>
            </div>
            <div className="p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '2px solid #10B981' }}>
              <div className="text-3xl mb-2">➡️</div>
              <h4 className="font-bold" style={{ color: '#10B981' }}>Right Lane</h4>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Often more open. Long-range brawlers excel here.</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Rotation Tips</h3>
          <div className="space-y-3 mb-6">
            {[
              { tip: "Rotate to Help", desc: "If a teammate is losing their lane, rotate to create a 2v1. Don't let them die alone." },
              { tip: "Call Lane Switches", desc: "Use pins to communicate. If you're rotating, let teammates know so they can adjust." },
              { tip: "Don't Leave Lanes Empty", desc: "If you rotate, someone must cover your lane. Empty lanes = free enemy push." },
              { tip: "Rotate After Kills", desc: "When you get a kill, consider rotating to another lane for a numbers advantage." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h4 className="font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{item.tip}</h4>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Mode-Specific */}
        <section id="mode-specific" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Mode-Specific Positioning
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Each game mode requires different positioning strategies:
          </p>

          <div className="space-y-4 mb-6">
            {[
              { mode: "Gem Grab", icon: "💎", tips: ["Gem carrier stays BACK, never pushes", "Aggro players create space in front", "Control mid before collecting gems", "Fall back at 10 gems, don't chase kills"] },
              { mode: "Brawl Ball", icon: "⚽", tips: ["Don't ball-chase - hold positions", "Create passing lanes for teammates", "Break walls strategically near goal", "Position to intercept, not just defend goal"] },
              { mode: "Knockout", icon: "💀", tips: ["Trade favorably - don't die for nothing", "Group up after picks for number advantage", "Play for time when ahead", "Know when to push vs play safe"] },
              { mode: "Hot Zone", icon: "🔥", tips: ["Prioritize zone time, not kills", "Tanks hold zones, DPS supports", "Don't all stand in one zone", "Rotate between zones as needed"] },
              { mode: "Heist", icon: "💰", tips: ["Balance offense and defense", "Don't all push or all defend", "Break safe walls for your team", "Time pushes with respawn waves"] },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="font-bold text-lg" style={{ color: '#EC4899' }}>{item.mode}</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {item.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                      <span style={{ color: '#10B981' }}>•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Advanced Tips */}
        <section id="advanced-tips" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Advanced Movement Tips
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Once you've mastered the basics, these advanced techniques will elevate your gameplay:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Strafing", desc: "Move side-to-side while shooting. Makes you much harder to hit while maintaining damage output." },
              { title: "Juking", desc: "Quick direction changes to dodge shots. Move unpredictably - change direction just before enemy shoots." },
              { title: "Kiting", desc: "Move away from enemies while attacking. Essential for ranged brawlers against tanks." },
              { title: "Spawn Prediction", desc: "Know where enemies respawn and when. Position to intercept or avoid them." },
              { title: "Super Tracking", desc: "Watch enemy super charges. Respect brawlers with charged supers - they're dangerous." },
              { title: "Death Timing", desc: "Sometimes dying is strategic. Don't waste time walking back - die and respawn faster." },
            ].map((item, i) => (
              <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="font-bold mb-1" style={{ color: '#EC4899' }}>{item.title}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ background: 'rgba(255, 107, 53, 0.1)', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <p className="font-semibold" style={{ color: '#FF6B35' }}>Practice Makes Perfect:</p>
            <p style={{ color: 'var(--text-muted)' }}>These techniques take time to master. Focus on one at a time. Watch pro players and study their positioning - where they stand, when they move, and why.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              { q: "How do I improve my positioning?", a: "Watch your replays after deaths. Ask 'Why was I there? Where should I have been?' Also watch pro streamers and copy their positioning." },
              { q: "Should I always stay behind walls?", a: "Not always - you need to deal damage too. The key is having cover AVAILABLE, not hiding behind it permanently. Peek and shoot." },
              { q: "What if my teammates have bad positioning?", a: "Adapt to them, don't blame them. If they overextend, be ready to support. If they play too passive, create space yourself." },
              { q: "How do I know when to push forward?", a: "Push when: 1) You have numbers advantage, 2) Enemy supers are down, 3) Objective requires it, 4) Teammates are with you." },
              { q: "Is aggression or defense better?", a: "Controlled aggression beats passive play. But reckless aggression loses games. Know when to push and when to hold." },
              { q: "How do I deal with campers in bushes?", a: "Check bushes with attacks before entering. Use brawlers with bush-reveal (Bo, Tara gadget). Don't walk blindly into obvious camping spots." },
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
            Control the Map, Win the Game!
          </h2>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Map control is the foundation of high-level Brawl Stars gameplay. Master these concepts and you'll win games even when your aim isn't perfect.
          </p>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Remember: the best position is one where you can deal damage, support teammates, and escape if needed - all at once. Think before you move, and move with purpose. Good luck!
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
              href="/brawl-stars/guides/ranked-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Ranked Guide
            </Link>
            <Link
              href="/brawl-stars/modes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Game Modes
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
              <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>Difficulty:</span> Advanced
            </div>
          </div>
        </div>

        {/* Social Share */}
        <div className="mt-8 p-6 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <SocialShare
            url="/brawl-stars/guides/map-control"
            title="Brawl Stars Map Control Guide 2026"
            description="Master positioning and zone control in every mode"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides currentSlug="map-control" />
      </article>
    </div>
  );
}
