import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BRAWLERS, TIERS, BRAWLER_CLASSES, RARITIES, GAME_MODES, getBrawlerById } from '@/lib/brawl-stars/brawlers';
import { BreadcrumbJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export async function generateStaticParams() {
  return BRAWLERS.map((brawler) => ({
    id: brawler.id,
  }));
}

export async function generateMetadata({ params }) {
  const brawler = getBrawlerById(params.id);
  if (!brawler) return {};

  return {
    title: `${brawler.name} Guide 2026 | Stats, Builds & Tips | Brawl Stars`,
    description: `${brawler.name} guide with win rate (${brawler.winRate}%), best modes, star powers, gadgets, and pro tips. Master ${brawler.name} in Brawl Stars 2026.`,
    keywords: [`${brawler.name.toLowerCase()} brawl stars`, `${brawler.name.toLowerCase()} guide`, `${brawler.name.toLowerCase()} tips`, 'brawl stars 2026'],
    openGraph: {
      title: `${brawler.name} Guide 2026 | Brawl Stars`,
      description: `Complete ${brawler.name} guide with stats, builds, and strategies.`,
      images: [{ url: brawler.image, width: 256, height: 256, alt: brawler.name }]
    },
    alternates: {
      canonical: `/brawl-stars/brawlers/${brawler.id}`
    }
  };
}

export default function BrawlerPage({ params }) {
  const brawler = getBrawlerById(params.id);

  if (!brawler) {
    notFound();
  }

  const tierInfo = TIERS[brawler.tier];
  const classInfo = BRAWLER_CLASSES[brawler.class];
  const rarityInfo = RARITIES[brawler.rarity];

  // Get similar brawlers (same class)
  const similarBrawlers = BRAWLERS.filter(b => b.class === brawler.class && b.id !== brawler.id).slice(0, 4);

  // Get counters (simplified logic - higher tier brawlers of counter class)
  const counterClasses = {
    'tank': ['marksman', 'damage-dealer'],
    'assassin': ['tank', 'controller'],
    'marksman': ['assassin'],
    'damage-dealer': ['tank'],
    'support': ['assassin'],
    'controller': ['tank', 'damage-dealer'],
    'artillery': ['assassin'],
    'hybrid': ['marksman']
  };
  const counters = BRAWLERS.filter(b =>
    counterClasses[brawler.class]?.includes(b.class) &&
    (b.tier === 'S' || b.tier === 'A')
  ).slice(0, 3);

  // JSON-LD Schema for character
  const characterSchema = {
    "@context": "https://schema.org",
    "@type": "Thing",
    "name": brawler.name,
    "description": `${brawler.name} is a ${classInfo?.name} brawler in Brawl Stars with a ${brawler.winRate}% win rate. ${tierInfo?.description}`,
    "image": brawler.image,
    "url": `${baseUrl}/brawl-stars/brawlers/${brawler.id}`,
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Tier", "value": brawler.tier },
      { "@type": "PropertyValue", "name": "Win Rate", "value": `${brawler.winRate}%` },
      { "@type": "PropertyValue", "name": "Class", "value": classInfo?.name },
      { "@type": "PropertyValue", "name": "Rarity", "value": rarityInfo?.name }
    ]
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(characterSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Brawlers", url: `${baseUrl}/brawl-stars/brawlers` },
          { name: brawler.name, url: `${baseUrl}/brawl-stars/brawlers/${brawler.id}` }
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: `radial-gradient(circle at 30% 50%, ${classInfo?.color}40, transparent 60%)` }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars" className="hover:opacity-80">Brawl Stars</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars/brawlers" className="hover:opacity-80">Brawlers</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{brawler.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Brawler Image */}
            <div className="relative">
              <div
                className="w-48 h-48 md:w-64 md:h-64 rounded-2xl p-4 flex items-center justify-center"
                style={{ backgroundColor: tierInfo?.color + '20', border: `3px solid ${tierInfo?.color}` }}
              >
                <img
                  src={brawler.image}
                  alt={brawler.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div
                className="absolute -top-3 -right-3 text-2xl font-bold px-4 py-2 rounded-xl text-white"
                style={{ backgroundColor: tierInfo?.color }}
              >
                {brawler.tier}
              </div>
            </div>

            {/* Brawler Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                {brawler.name}
              </h1>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: classInfo?.color + '20', color: classInfo?.color }}
                >
                  {classInfo?.icon} {classInfo?.name}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: rarityInfo?.color + '20', color: rarityInfo?.color }}
                >
                  {rarityInfo?.name}
                </span>
              </div>

              <p className="text-xl mb-6" style={{ color: 'var(--text-muted)' }}>
                {brawler.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <div className="text-2xl font-bold" style={{ color: '#10B981' }}>{brawler.winRate}%</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Win Rate</div>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <div className="text-2xl font-bold" style={{ color: '#3B82F6' }}>{brawler.useRate}%</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Pick Rate</div>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <div className="text-2xl font-bold" style={{ color: tierInfo?.color }}>{tierInfo?.name}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Current Tier</div>
                </div>
                <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <div className="text-2xl font-bold" style={{ color: '#8B5CF6' }}>{brawler.bestModes.length}</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Best Modes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Game Modes */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Best Game Modes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {brawler.bestModes.map((modeName, index) => {
              const mode = GAME_MODES.find(m =>
                m.name.toLowerCase() === modeName.toLowerCase()
              );
              return (
                <div
                  key={modeName}
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <div className="text-4xl">
                    {mode?.icon || '🎮'}
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{modeName}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {index === 0 ? 'Top Pick' : index === 1 ? 'Strong Pick' : 'Viable'}
                    </p>
                  </div>
                  {index === 0 && (
                    <span className="ml-auto text-yellow-400 text-2xl">★</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Star Powers & Gadgets */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Star Powers */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span className="text-yellow-400">★</span> Star Powers
              </h2>
              <div className="space-y-3">
                {brawler.starPowers.map((sp, index) => (
                  <div key={sp} className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{sp}</h3>
                      {index === 0 && (
                        <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                      {index === 0 ? 'Best for most situations' : 'Situational pick'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Gadgets */}
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span className="text-blue-400">⚡</span> Gadgets
              </h2>
              <div className="space-y-3">
                {brawler.gadgets.map((gadget, index) => (
                  <div key={gadget} className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{gadget}</h3>
                      {index === 0 && (
                        <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6' }}>
                          Meta Pick
                        </span>
                      )}
                    </div>
                    <p className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>
                      {index === 0 ? 'Most effective in current meta' : 'Alternative option'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips & Strategy */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Pro Tips & Strategy</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#10B981' }}>Strengths</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#10B981' }} className="mt-1">+</span>
                  {classInfo?.name === 'Tank' && 'High health pool for sustaining fights'}
                  {classInfo?.name === 'Assassin' && 'Excellent mobility for eliminating key targets'}
                  {classInfo?.name === 'Marksman' && 'Long range keeps you safe while dealing damage'}
                  {classInfo?.name === 'Support' && 'Team utility keeps allies alive longer'}
                  {classInfo?.name === 'Controller' && 'Zone control denies enemy movement'}
                  {classInfo?.name === 'Damage Dealer' && 'Consistent damage output in all situations'}
                  {classInfo?.name === 'Artillery' && 'Can attack over walls for safe damage'}
                  {classInfo?.name === 'Hybrid' && 'Versatile kit adapts to any situation'}
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#10B981' }} className="mt-1">+</span>
                  Strong in {brawler.bestModes[0]}
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#10B981' }} className="mt-1">+</span>
                  {brawler.winRate >= 60 ? 'Dominates the current meta' : 'Solid performer when played correctly'}
                </li>
              </ul>
            </div>

            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="text-lg font-bold mb-3" style={{ color: '#EF4444' }}>Weaknesses</h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#EF4444' }} className="mt-1">-</span>
                  {classInfo?.name === 'Tank' && 'Vulnerable to kiting from long-range brawlers'}
                  {classInfo?.name === 'Assassin' && 'Low health makes positioning critical'}
                  {classInfo?.name === 'Marksman' && 'Struggles against aggressive close-range brawlers'}
                  {classInfo?.name === 'Support' && 'Limited solo carry potential'}
                  {classInfo?.name === 'Controller' && 'Predictable attack patterns can be dodged'}
                  {classInfo?.name === 'Damage Dealer' && 'Jack of all trades, master of none'}
                  {classInfo?.name === 'Artillery' && 'Slow projectiles are easy to dodge'}
                  {classInfo?.name === 'Hybrid' && 'Not the best at any single role'}
                </li>
                <li className="flex items-start gap-2">
                  <span style={{ color: '#EF4444' }} className="mt-1">-</span>
                  Countered by {counters[0]?.name || 'aggressive brawlers'}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Counters */}
      {counters.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Counter Picks</h2>
            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
              These brawlers perform well against {brawler.name}:
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {counters.map((counter) => (
                <Link
                  key={counter.id}
                  href={`/brawl-stars/brawlers/${counter.id}`}
                  className="rounded-xl p-3 transition-all hover:scale-105 text-center"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <img
                    src={counter.image}
                    alt={counter.name}
                    className="w-16 h-16 mx-auto object-contain"
                  />
                  <h3 className="text-sm font-medium mt-2" style={{ color: 'var(--text-primary)' }}>{counter.name}</h3>
                  <span
                    className="text-xs"
                    style={{ color: TIERS[counter.tier]?.color }}
                  >
                    {counter.tier}-Tier
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Similar Brawlers */}
      {similarBrawlers.length > 0 && (
        <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Similar Brawlers ({classInfo?.name})
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {similarBrawlers.map((similar) => (
                <Link
                  key={similar.id}
                  href={`/brawl-stars/brawlers/${similar.id}`}
                  className="rounded-xl p-4 transition-all hover:scale-105"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <img
                    src={similar.image}
                    alt={similar.name}
                    className="w-full aspect-square object-contain"
                  />
                  <h3 className="font-bold text-center mt-2" style={{ color: 'var(--text-primary)' }}>{similar.name}</h3>
                  <div className="flex justify-center gap-2 mt-1 text-sm">
                    <span style={{ color: TIERS[similar.tier]?.color }}>{similar.tier}</span>
                    <span style={{ color: 'var(--text-muted)' }}>|</span>
                    <span style={{ color: '#10B981' }}>{similar.winRate}%</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 px-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/brawl-stars/tier-list"
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 text-white"
            style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)' }}
          >
            View Tier List
          </Link>
          <Link
            href="/brawl-stars/brawlers"
            className="px-6 py-3 rounded-xl font-medium transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            All Brawlers
          </Link>
          <Link
            href="/brawl-stars"
            className="px-6 py-3 rounded-xl font-medium transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            Back to Hub
          </Link>
        </div>
      </section>
    </div>
  );
}
