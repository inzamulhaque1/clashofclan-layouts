import Link from 'next/link';
import { notFound } from 'next/navigation';
import { GAME_MODES, BRAWLERS, TIERS, BRAWLER_CLASSES, getGameModeById, getBrawlersByMode } from '@/lib/brawl-stars/brawlers';

export async function generateStaticParams() {
  return GAME_MODES.map((mode) => ({
    id: mode.id,
  }));
}

export async function generateMetadata({ params }) {
  const mode = getGameModeById(params.id);
  if (!mode) return {};

  return {
    title: `Best ${mode.name} Brawlers 2026 | ${mode.name} Tier List & Tips`,
    description: `Best brawlers for ${mode.name} in Brawl Stars 2026. Complete tier list, strategies, and pro tips to dominate ${mode.name} mode.`,
    keywords: [`${mode.name.toLowerCase()} brawl stars`, `best ${mode.name.toLowerCase()} brawlers`, `${mode.name.toLowerCase()} tier list`, 'brawl stars 2026'],
    openGraph: {
      title: `Best ${mode.name} Brawlers 2026 | Brawl Stars`,
      description: `Complete guide for ${mode.name} mode with best brawlers and strategies.`,
      images: [{ url: mode.image, width: 256, height: 256, alt: mode.name }]
    },
    alternates: {
      canonical: `/brawl-stars/modes/${mode.id}`
    }
  };
}

export default function GameModePage({ params }) {
  const mode = getGameModeById(params.id);

  if (!mode) {
    notFound();
  }

  // Get best brawlers for this mode
  const modeBrawlers = getBrawlersByMode(mode.id);

  // Sort by tier and win rate
  const tierOrder = { S: 0, A: 1, B: 2, C: 3, D: 4 };
  const sortedBrawlers = [...modeBrawlers].sort((a, b) => {
    if (tierOrder[a.tier] !== tierOrder[b.tier]) {
      return tierOrder[a.tier] - tierOrder[b.tier];
    }
    return b.winRate - a.winRate;
  });

  // Get all brawlers that have this mode as best
  const allModeBrawlers = BRAWLERS.filter(b =>
    b.bestModes.some(m => m.toLowerCase() === mode.name.toLowerCase())
  ).sort((a, b) => b.winRate - a.winRate);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 50%, #8B5CF6 100%)' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars" className="hover:opacity-80">Brawl Stars</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars/modes" className="hover:opacity-80">Game Modes</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{mode.name}</span>
          </nav>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Mode Icon */}
            <div className="text-8xl">{mode.icon}</div>

            {/* Mode Info */}
            <div className="text-center md:text-left">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                style={{ background: 'rgba(255, 107, 53, 0.15)', color: '#FF6B35' }}
              >
                {mode.type}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Best {mode.name} Brawlers
              </h1>
              <p className="text-xl mb-4" style={{ color: 'var(--text-muted)' }}>
                {mode.description}
              </p>
              <p style={{ color: 'var(--text-muted)' }}>
                {allModeBrawlers.length} brawlers excel in this mode
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tips */}
      {mode.tips && mode.tips.length > 0 && (
        <section className="py-8 px-4" style={{ background: 'var(--surface-50)' }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Pro Tips for {mode.name}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {mode.tips.map((tip, index) => (
                <div
                  key={index}
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <span className="text-2xl">💡</span>
                  <p style={{ color: 'var(--text-muted)' }}>{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tier List for Mode */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{mode.name} Tier List</h2>

          {Object.entries(TIERS).map(([tierKey, tierInfo]) => {
            const tierBrawlers = allModeBrawlers.filter(b => b.tier === tierKey);
            if (tierBrawlers.length === 0) return null;

            return (
              <div key={tierKey} className="mb-6">
                {/* Tier Header */}
                <div
                  className="flex items-center gap-4 p-3 rounded-t-xl"
                  style={{ backgroundColor: tierInfo.color + '20', borderLeft: `4px solid ${tierInfo.color}` }}
                >
                  <div
                    className="text-2xl font-bold w-12 h-12 flex items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: tierInfo.color }}
                  >
                    {tierKey}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{tierInfo.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{tierBrawlers.length} brawler{tierBrawlers.length !== 1 ? 's' : ''}</p>
                  </div>
                </div>

                {/* Brawlers */}
                <div className="rounded-b-xl p-4" style={{ background: 'var(--surface-100)' }}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {tierBrawlers.map((brawler) => (
                      <Link
                        key={brawler.id}
                        href={`/brawl-stars/brawlers/${brawler.id}`}
                        className="group rounded-xl p-3 transition-all hover:scale-105"
                        style={{ background: 'var(--surface-200)' }}
                      >
                        <img
                          src={brawler.image}
                          alt={brawler.name}
                          className="w-16 h-16 mx-auto object-contain"
                        />
                        <h4 className="font-medium text-center mt-2 text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                          {brawler.name}
                        </h4>
                        <div className="flex justify-center gap-2 mt-1 text-xs">
                          <span style={{ color: '#10B981' }}>{brawler.winRate}%</span>
                          <span style={{ color: BRAWLER_CLASSES[brawler.class]?.color }}>
                            {BRAWLER_CLASSES[brawler.class]?.icon}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Strategy Guide */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{mode.name} Strategy Guide</h2>

          <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#FF6B35' }}>How to Win in {mode.name}</h3>
            {mode.id === 'gem-grab' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Gem Grab is all about <strong style={{ color: 'var(--text-primary)' }}>control and coordination</strong>. The team that controls the center gem mine will consistently outpace the enemy.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Designate one player as the "gem carrier" - usually a support or controller</li>
                  <li>Never have your gem carrier push too aggressively</li>
                  <li>When you have 10 gems, fall back and play defensive</li>
                  <li>Kill the enemy gem carrier when they have 10+ gems for a game-winning swing</li>
                </ul>
              </div>
            )}
            {mode.id === 'brawl-ball' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Brawl Ball rewards <strong style={{ color: 'var(--text-primary)' }}>aggression and ball control</strong>. Unlike other modes, sometimes dying with the ball is worth it for positioning.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pass the ball to reset your ammo and dodge shots</li>
                  <li>Use supers to break walls and create goal opportunities</li>
                  <li>Tanks excel at carrying the ball through enemy fire</li>
                  <li>Always have one defender near your goal</li>
                </ul>
              </div>
            )}
            {mode.id === 'showdown' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Showdown is a <strong style={{ color: 'var(--text-primary)' }}>survival game</strong>. The last brawler standing wins, so play smart, not aggressive.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Collect power cubes early to scale into late game</li>
                  <li>Bush camping is a legitimate strategy - use it wisely</li>
                  <li>Third party fights to clean up weakened enemies</li>
                  <li>Position yourself away from the poison gas</li>
                </ul>
              </div>
            )}
            {mode.id === 'knockout' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Knockout rewards <strong style={{ color: 'var(--text-primary)' }}>precision and patience</strong>. No respawns means every life matters.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Trade efficiently - don't die without getting a kill</li>
                  <li>Focus on isolated enemies for easy picks</li>
                  <li>Support brawlers are extremely valuable for keeping teammates alive</li>
                  <li>Long-range brawlers dominate open maps</li>
                </ul>
              </div>
            )}
            {mode.id === 'bounty' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Bounty is all about <strong style={{ color: 'var(--text-primary)' }}>kill management</strong>. Stars accumulate on players, making kills more valuable over time.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Protect teammates with high star counts</li>
                  <li>Don't feed kills to the enemy - play safe</li>
                  <li>Long-range brawlers like Piper and Brock dominate</li>
                  <li>Save supers for securing kills, not just damage</li>
                </ul>
              </div>
            )}
            {mode.id === 'heist' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Heist is a <strong style={{ color: 'var(--text-primary)' }}>DPS race</strong>. Balance attacking the enemy safe with defending your own.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>High damage brawlers are essential (Colt, Brock, etc.)</li>
                  <li>Don't over-commit to offense - one defender is crucial</li>
                  <li>Use walls to protect your safe approach</li>
                  <li>Focus the safe when enemies are respawning</li>
                </ul>
              </div>
            )}
            {mode.id === 'hot-zone' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Hot Zone rewards <strong style={{ color: 'var(--text-primary)' }}>zone control and sustain</strong>. Staying alive in the zone is more important than kills.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Tanks and healers are extremely powerful</li>
                  <li>Control brawlers can deny enemy zone access</li>
                  <li>Don't overextend - staying in zone builds points</li>
                  <li>Poco + Tank combos are meta-defining</li>
                </ul>
              </div>
            )}
            {mode.id === 'ranked' && (
              <div className="space-y-3" style={{ color: 'var(--text-muted)' }}>
                <p>Ranked mode requires <strong style={{ color: 'var(--text-primary)' }}>draft knowledge and team synergy</strong>. Counter-picking is crucial.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Master at least 15 brawlers across all classes</li>
                  <li>Ban meta-dominant brawlers your team can't counter</li>
                  <li>Pick based on map AND enemy team composition</li>
                  <li>Communicate with your team during draft</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Game Modes */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Other Game Modes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {GAME_MODES.filter(m => m.id !== mode.id).map((otherMode) => (
              <Link
                key={otherMode.id}
                href={`/brawl-stars/modes/${otherMode.id}`}
                className="rounded-xl p-4 transition-all hover:scale-[1.02]"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                <div className="text-3xl mb-2">{otherMode.icon}</div>
                <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{otherMode.name}</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{otherMode.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
          <Link
            href="/brawl-stars/tier-list"
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105 text-white"
            style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)' }}
          >
            Full Tier List
          </Link>
          <Link
            href="/brawl-stars/brawlers"
            className="px-6 py-3 rounded-xl font-medium transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            All Brawlers
          </Link>
          <Link
            href="/brawl-stars/modes"
            className="px-6 py-3 rounded-xl font-medium transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            All Game Modes
          </Link>
        </div>
      </section>
    </div>
  );
}
