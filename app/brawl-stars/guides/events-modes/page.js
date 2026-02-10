import Link from 'next/link';
import { ArticleJsonLd, FAQJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import RelatedGuides from '@/components/brawl-stars/RelatedGuides';
import SocialShare from '@/components/SocialShare';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Brawl Stars Events & Modes Guide 2026 - Every Mode Explained",
  description: "Complete Brawl Stars events and game modes guide 2026. Every mode explained — Gem Grab, Brawl Ball, Showdown, Heist, Bounty, Hot Zone, Knockout, and more.",
  keywords: [
    "brawl stars modes",
    "game modes",
    "gem grab",
    "brawl ball",
    "showdown",
    "heist",
    "bounty",
    "hot zone",
    "knockout",
    "brawl stars events",
    "mode rotation",
    "best brawlers per mode"
  ],
  openGraph: {
    title: "Events & Modes Guide 2026 | Brawl Stars",
    description: "Every Brawl Stars game mode explained with best brawlers and strategies!",
    images: [{
      url: GUIDE_IMAGES.eventsModesGuide.hero.url,
      width: 1200,
      height: 630,
      alt: "Brawl Stars Events and Modes Guide 2026"
    }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brawl Stars Events & Modes Guide 2026",
    description: "Every game mode explained with tips and best brawlers!",
  },
  alternates: {
    canonical: "/brawl-stars/guides/events-modes"
  }
};

export default function EventsModesGuidePage() {
  const publishDate = "2026-02-10";
  const updateDate = "2026-02-10";
  const baseUrl = "https://www.game365hub.com";
  const images = GUIDE_IMAGES.eventsModesGuide;

  const faqs = [
    { question: "How many game modes are in Brawl Stars?", answer: "Brawl Stars has over 10 game modes including Gem Grab, Brawl Ball, Solo and Duo Showdown, Heist, Bounty, Hot Zone, Knockout, Wipeout, Payload, and various special event modes that rotate seasonally." },
    { question: "How does the event rotation work?", answer: "Game modes rotate on a schedule. Core modes like Gem Grab, Brawl Ball, and Showdown are always available. Other modes rotate in and out on a daily or weekly basis. Special events appear during seasons." },
    { question: "What is the best game mode for trophies?", answer: "Brawl Ball and Gem Grab are generally the most trophy-efficient because games are short and wins are more consistent with good team play. Solo Showdown is good for solo players who can consistently finish top 4." },
    { question: "Which mode is best for beginners?", answer: "Gem Grab is the best starting mode because it teaches teamwork, positioning, and map control. Brawl Ball is also good for learning because goals provide a clear objective." },
    { question: "Do all modes give the same trophies?", answer: "Yes, all modes give the same trophy gain and loss per win or loss at the same trophy level. The difference is in match length and consistency of wins." },
    { question: "What are special events in Brawl Stars?", answer: "Special events are limited-time modes that appear during specific seasons or holidays. They include Robo Rumble, Boss Fight, Big Game, and seasonal challenges with unique rewards." },
  ];

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <ArticleJsonLd
        title="Brawl Stars Events & Modes Guide 2026 - Every Mode Explained"
        description="Complete guide to every Brawl Stars game mode with best brawlers and strategies."
        image={images.hero.url}
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/brawl-stars/guides/events-modes`}
      />
      <FAQJsonLd faqs={faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Guides", url: `${baseUrl}/brawl-stars/guides` },
          { name: "Events & Modes Guide", url: `${baseUrl}/brawl-stars/guides/events-modes` }
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
          <span style={{ color: 'var(--accent-secondary)' }}>Events & Modes Guide</span>
        </nav>

        {/* Title Section */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-sm font-semibold rounded-full"
                  style={{ background: 'var(--accent-primary)', color: 'white' }}>
              Game Modes Guide
            </span>
            <span className="px-3 py-1 text-sm rounded-full"
                  style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}>
              Updated Feb 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Brawl Stars Events and Modes Guide 2026: Every Mode Explained
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: 'var(--text-secondary)' }}>
            A comprehensive breakdown of every game mode in Brawl Stars — objectives, strategies, best brawlers, rotation schedules, and tips to dominate each event.
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
              { id: 'mode-overview', title: 'Game Mode Overview' },
              { id: 'gem-grab', title: 'Gem Grab' },
              { id: 'brawl-ball', title: 'Brawl Ball' },
              { id: 'showdown', title: 'Showdown (Solo & Duo)' },
              { id: 'heist', title: 'Heist' },
              { id: 'bounty', title: 'Bounty' },
              { id: 'hot-zone', title: 'Hot Zone' },
              { id: 'knockout', title: 'Knockout' },
              { id: 'other-modes', title: 'Other & Special Modes' },
              { id: 'best-brawlers', title: 'Best Brawlers per Mode' },
              { id: 'rotation-schedule', title: 'Event Rotation Schedule' },
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
          {/* Game Mode Overview */}
          <section id="mode-overview" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Game Mode Overview
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Brawl Stars offers a diverse range of game modes</strong>, each with unique objectives, team sizes, and strategies. Modes are divided into core modes (always available), rotating modes (daily/weekly rotation), and special events (seasonal or limited-time).
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Mode</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Team Size</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Objective</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Gem Grab</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Collect and hold 10 gems</td>
                    <td className="p-3">Core (always)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Brawl Ball</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Score 2 goals</td>
                    <td className="p-3">Core (always)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Showdown</td>
                    <td className="p-3">Solo/Duo BR</td>
                    <td className="p-3">Last one standing</td>
                    <td className="p-3">Core (always)</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Heist</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Destroy enemy safe</td>
                    <td className="p-3">Rotating</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Bounty</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Collect stars from kills</td>
                    <td className="p-3">Rotating</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Hot Zone</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Control zones</td>
                    <td className="p-3">Rotating</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Knockout</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Eliminate enemy team (best of 3)</td>
                    <td className="p-3">Rotating</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Wipeout</td>
                    <td className="p-3">3v3</td>
                    <td className="p-3">Team deathmatch</td>
                    <td className="p-3">Rotating</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Gem Grab */}
          <section id="gem-grab" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Gem Grab
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Gem Grab is the quintessential 3v3 mode in Brawl Stars.</strong> A gem mine spawns gems in the center of the map. Your team must collect and hold 10 gems, then survive a 15-second countdown to win. If the gem carrier is eliminated, they drop all their gems.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Designate one gem carrier (usually mid)</li>
                  <li>• Control the center of the map</li>
                  <li>• Retreat when you hit 10 gems</li>
                  <li>• Kill the enemy gem carrier to reset</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Gem Carrier: Tara, Gene, Sandy</li>
                  <li>• Aggro/Lane: Mortis, Stu, Fang</li>
                  <li>• Support: Poco, Byron, Pam</li>
                  <li>• Control: Spike, Sprout, Emz</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-secondary)' }}>Pro Tip:</strong> Never auto-aim your gems carrier into the enemy team. Once you hit 10 gems, your only job is to survive the 15-second countdown. Let your teammates protect you while you stay behind cover.
              </p>
            </div>
          </section>

          {/* Brawl Ball */}
          <section id="brawl-ball" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Brawl Ball
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Brawl Ball is Brawl Stars meets football.</strong> Two teams of 3 compete to score 2 goals. You can shoot, pass, and dribble the ball. Getting hit causes you to drop the ball. Scoring a goal destroys all walls on the field.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Eliminate enemies before pushing ball</li>
                  <li>• Use Super to break walls near goal</li>
                  <li>• Pass to open teammates</li>
                  <li>• Do not self-goal (kick into your own net)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Ball Carriers: El Primo, Frank, Bull</li>
                  <li>• Wall Breakers: Colt, Brock, Shelly</li>
                  <li>• Playmakers: Mortis, Stu, Fang</li>
                  <li>• Support: Poco, Gene, Spike</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Showdown */}
          <section id="showdown" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Showdown (Solo and Duo)
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Showdown is the battle royale mode of Brawl Stars.</strong> In Solo, 10 players compete to be the last one standing. In Duo, 5 teams of 2 fight to survive. Power Cubes from boxes boost your stats, and poison gas shrinks the map over time.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Solo Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Collect Power Cubes early</li>
                  <li>• Avoid fights until top 5</li>
                  <li>• Use bushes for ambushes</li>
                  <li>• Watch for teamers (spin = team)</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Solo Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Assassins: Leon, Crow, Edgar</li>
                  <li>• Tanks: Bull, El Primo, Rosa</li>
                  <li>• Control: Spike, Bo, Tara</li>
                  <li>• Survivors: Pam, 8-Bit, Byron</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Heist */}
          <section id="heist" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Heist
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>In Heist, each team has a safe to protect.</strong> The objective is to destroy the enemy team's safe before they destroy yours. The safe has a large health pool, and matches have a time limit. If time runs out, the team with the higher safe percentage wins.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• High DPS brawlers are essential</li>
                  <li>• Split between offense and defense</li>
                  <li>• Use Supers on the safe, not kills</li>
                  <li>• Wall-breakers open up safe access</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Safe DPS: Colt, Bull, Brock</li>
                  <li>• Defenders: Jessie, Nita, Pam</li>
                  <li>• Wall Breakers: Colt, Brock, Shelly</li>
                  <li>• Aggro: Darryl, Fang, Mortis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Bounty */}
          <section id="bounty" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Bounty
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Bounty is all about getting kills and staying alive.</strong> Each team earns stars for eliminations. Players start with a 2-star bounty that increases with each kill, up to 7 stars. Getting eliminated awards your bounty to the enemy team. The team with more stars wins.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Long-range brawlers dominate</li>
                  <li>• Do not die with a high bounty</li>
                  <li>• Play passive when ahead on stars</li>
                  <li>• Target the highest-bounty enemy</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Snipers: Piper, Bea, Belle</li>
                  <li>• Control: Spike, Sprout, Emz</li>
                  <li>• Assassins: Mortis (high risk/reward)</li>
                  <li>• Support: Byron, Poco</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Hot Zone */}
          <section id="hot-zone" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Hot Zone
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Hot Zone is a zone-control mode.</strong> One or two zones appear on the map. Stand in the zone to capture it for your team. The more teammates in the zone, the faster it captures. The first team to fully capture all zones wins, or the team with the most progress when time expires.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Stay in the zone — time on point wins</li>
                  <li>• Tanky brawlers hold zones best</li>
                  <li>• Area denial Supers are very strong</li>
                  <li>• On 2-zone maps, split 2-1</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Zone Holders: Sandy, Poco, Pam</li>
                  <li>• Area Denial: Spike, Barley, Sprout</li>
                  <li>• Tanks: Rosa, Frank, El Primo</li>
                  <li>• Control: Gene, Emz, Tara</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Knockout */}
          <section id="knockout" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Knockout
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              <strong>Knockout is a best-of-3 elimination mode.</strong> Each round, the first team to wipe out all enemies wins. There is no respawning within a round. Winning 2 out of 3 rounds wins the match. This mode rewards precision, positioning, and clutch plays.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Key Strategy</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Every life matters — play carefully</li>
                  <li>• Get the first pick to create a 3v2</li>
                  <li>• Use walls and cover aggressively</li>
                  <li>• Save Supers for clutch moments</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Best Brawlers</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Pick Potential: Piper, Belle, Bea</li>
                  <li>• Survivors: Leon, Crow, Max</li>
                  <li>• Support: Byron, Poco</li>
                  <li>• Clutch: Stu, Mortis, Fang</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Other & Special Modes */}
          <section id="other-modes" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Other and Special Modes
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Beyond the core and rotating modes, Brawl Stars features several additional and special event modes:
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#22c55e' }}>
                <h3 className="font-bold mb-2" style={{ color: '#22c55e' }}>Wipeout</h3>
                <p style={{ color: 'var(--text-secondary)' }}>A team deathmatch mode where teams compete to get the most eliminations. Fast-paced and favors high-damage brawlers with quick respawns. Best brawlers: Stu, Fang, Max, Byron.</p>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#3b82f6' }}>
                <h3 className="font-bold mb-2" style={{ color: '#3b82f6' }}>Payload</h3>
                <p style={{ color: 'var(--text-secondary)' }}>One team pushes a payload cart along a track while the other defends. Escort-style gameplay that rewards zone control and positioning. Best brawlers: Pam, Jessie, Spike, Frank.</p>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#f59e0b' }}>
                <h3 className="font-bold mb-2" style={{ color: '#f59e0b' }}>Robo Rumble (Special Event)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>A PvE mode where your team defends a safe against waves of robots. Rewards scale with survival time. Best brawlers: Pam, 8-Bit, Jessie, Bull.</p>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#8b5cf6' }}>
                <h3 className="font-bold mb-2" style={{ color: '#8b5cf6' }}>Boss Fight (Special Event)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>A co-op PvE mode where 3 players fight an increasingly powerful boss robot. Rewards based on how quickly you defeat the boss. Best brawlers: Colt, Bea, Pam, Bull.</p>
              </div>
              <div className="p-4 rounded-lg border-l-4" style={{ background: 'var(--bg-tertiary)', borderColor: '#ec4899' }}>
                <h3 className="font-bold mb-2" style={{ color: '#ec4899' }}>Big Game (Special Event)</h3>
                <p style={{ color: 'var(--text-secondary)' }}>One player becomes the Big Brawler with massive health and fights against 5 normal players. The Big Brawler wins by surviving, the hunters win by defeating them. Unique and chaotic mode.</p>
              </div>
            </div>
          </section>

          {/* Best Brawlers per Mode */}
          <section id="best-brawlers" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Best Brawlers per Mode (Quick Reference)
            </h2>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse" style={{ color: 'var(--text-secondary)' }}>
                <thead>
                  <tr style={{ background: 'var(--bg-tertiary)' }}>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Mode</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>S-Tier Picks</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>A-Tier Picks</th>
                    <th className="p-3 text-left font-bold" style={{ color: 'var(--text-primary)' }}>Avoid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Gem Grab</td>
                    <td className="p-3">Tara, Gene, Sandy</td>
                    <td className="p-3">Spike, Byron, Poco</td>
                    <td className="p-3">Bull, El Primo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Brawl Ball</td>
                    <td className="p-3">Frank, Mortis, Fang</td>
                    <td className="p-3">El Primo, Stu, Poco</td>
                    <td className="p-3">Piper, Bea</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Showdown</td>
                    <td className="p-3">Leon, Crow, Bull</td>
                    <td className="p-3">Spike, Bo, Edgar</td>
                    <td className="p-3">Poco, Ruffs</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Heist</td>
                    <td className="p-3">Colt, Bull, Brock</td>
                    <td className="p-3">Darryl, Fang, Jessie</td>
                    <td className="p-3">Mortis, Poco</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Bounty</td>
                    <td className="p-3">Piper, Belle, Bea</td>
                    <td className="p-3">Byron, Spike, Emz</td>
                    <td className="p-3">Frank, Bull</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-primary)' }}>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Hot Zone</td>
                    <td className="p-3">Sandy, Rosa, Poco</td>
                    <td className="p-3">Spike, Frank, Pam</td>
                    <td className="p-3">Piper, Dynamike</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold" style={{ color: 'var(--accent-secondary)' }}>Knockout</td>
                    <td className="p-3">Piper, Belle, Byron</td>
                    <td className="p-3">Stu, Max, Fang</td>
                    <td className="p-3">Tanks without range</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Event Rotation Schedule */}
          <section id="rotation-schedule" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Event Rotation Schedule
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              Understanding the event rotation helps you plan your trophy pushing and quest completion:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Always Available</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Gem Grab</li>
                  <li>• Brawl Ball</li>
                  <li>• Solo Showdown</li>
                  <li>• Duo Showdown</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)' }}>
                <h3 className="font-bold mb-2" style={{ color: 'var(--accent-secondary)' }}>Rotating Modes</h3>
                <ul className="space-y-1" style={{ color: 'var(--text-secondary)' }}>
                  <li>• Heist, Bounty (rotate daily)</li>
                  <li>• Hot Zone, Knockout (rotate daily)</li>
                  <li>• Wipeout, Payload (rotate daily)</li>
                  <li>• Special Events (seasonal)</li>
                </ul>
              </div>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)' }}>
              <p style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--accent-secondary)' }}>Pro Tip:</strong> Check the event rotation daily and push trophies in modes where your best brawlers are strongest. If Bounty is up and you have a maxed Piper, that is your best trophy-pushing window. Adapt your schedule to the rotation for maximum efficiency.
              </p>
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
              Brawl Stars offers incredible variety with its game modes, and mastering each one is key to climbing trophies and winning in competitive play. Every mode rewards different skills — Gem Grab teaches team coordination, Bounty rewards precision, Brawl Ball demands aggression, and Showdown tests survival instincts.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Learn which brawlers shine in each mode, adapt your playstyle to the objective, and take advantage of the event rotation to push trophies efficiently. The best players are versatile across all modes, not one-trick specialists.
            </p>
          </section>
        </div>

        {/* Social Share */}
        <div className="mt-8 mb-12">
          <SocialShare
            url={`${baseUrl}/brawl-stars/guides/events-modes`}
            title="Brawl Stars Events & Modes Guide 2026 - Every Mode Explained"
          />
        </div>

        {/* Related Guides */}
        <RelatedGuides
          currentSlug="events-modes"
          guides={[
            { slug: 'best-brawlers-by-mode', title: 'Best Brawlers by Mode', icon: '🎯' },
            { slug: 'duo-showdown', title: 'Duo Showdown Comps', icon: '👥' },
            { slug: 'tier-list-2026', title: 'Brawler Tier List 2026', icon: '📊' },
            { slug: 'map-control', title: 'Map Control Guide', icon: '🗺️' }
          ]}
        />
      </article>
    </div>
  );
}
