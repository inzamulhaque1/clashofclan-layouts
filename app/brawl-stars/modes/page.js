'use client';

import Link from 'next/link';
import { GAME_MODES, BRAWLERS, BRAWLER_CLASSES } from '@/lib/brawl-stars/brawlers';

export default function GameModesPage() {
  // Get top 3 brawlers for each mode
  const getTopBrawlersForMode = (modeName) => {
    return BRAWLERS
      .filter(b => b.bestModes.some(m => m.toLowerCase() === modeName.toLowerCase()))
      .sort((a, b) => b.winRate - a.winRate)
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 50%, #8B5CF6 100%)' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars" className="hover:opacity-80">Brawl Stars</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Game Modes</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Brawl Stars Game Modes
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Find the best brawlers for every game mode. Master each mode with our comprehensive guides and tier lists.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Modes:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>{GAME_MODES.length}</span>
            </div>
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>3v3 Modes:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>{GAME_MODES.filter(m => m.type === '3v3').length}</span>
            </div>
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Solo/Duo:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>{GAME_MODES.filter(m => m.type !== '3v3').length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Game Modes Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {GAME_MODES.map((mode) => {
              const topBrawlers = getTopBrawlersForMode(mode.name);

              return (
                <Link
                  key={mode.id}
                  href={`/brawl-stars/modes/${mode.id}`}
                  className="group rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      {/* Mode Icon */}
                      <div
                        className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                        style={{ background: 'rgba(255, 107, 53, 0.1)' }}
                      >
                        {mode.icon}
                      </div>

                      {/* Mode Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                            {mode.name}
                          </h2>
                          <span
                            className="px-2 py-0.5 rounded text-xs font-medium"
                            style={{ background: 'rgba(255, 107, 53, 0.15)', color: '#FF6B35' }}
                          >
                            {mode.type}
                          </span>
                        </div>
                        <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                          {mode.description}
                        </p>

                        {/* Top Brawlers Preview */}
                        <div>
                          <span className="text-xs font-medium mb-2 block" style={{ color: 'var(--text-muted)' }}>
                            Top Brawlers:
                          </span>
                          <div className="flex items-center gap-2">
                            {topBrawlers.map((brawler, idx) => (
                              <div
                                key={brawler.id}
                                className="flex items-center gap-1 px-2 py-1 rounded-lg"
                                style={{ background: 'var(--surface-200)' }}
                              >
                                <img
                                  src={brawler.image}
                                  alt={brawler.name}
                                  className="w-6 h-6 object-contain"
                                />
                                <span className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>
                                  {brawler.name}
                                </span>
                              </div>
                            ))}
                            {topBrawlers.length === 0 && (
                              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                                View all brawlers
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#FF6B35' }}>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mode Types Explanation */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Understanding Game Mode Types
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">👥</span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>3v3 Modes</h3>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Team-based modes where coordination and team composition matter. Includes Gem Grab, Brawl Ball,
                Bounty, Heist, Hot Zone, and Knockout. Best for climbing trophies consistently.
              </p>
            </div>

            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🏆</span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Solo/Duo Modes</h3>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Battle Royale style modes where survival is key. Showdown can be played solo or in duos.
                More RNG-dependent but can yield high trophy gains.
              </p>
            </div>

            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">⭐</span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Ranked/Power League</h3>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Competitive modes with pick/ban phases. Requires mastery of multiple brawlers and deep
                understanding of team synergies and counter-picks.
              </p>
            </div>

            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🎉</span>
                <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>Special Events</h3>
              </div>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Limited-time modes with unique rules. Big Game, Boss Fight, and seasonal events offer
                unique rewards and gameplay experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Explore More</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link
              href="/brawl-stars/tier-list"
              className="rounded-xl p-4 transition-all hover:scale-[1.02]"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <span className="text-2xl">📊</span>
              <h3 className="font-bold mt-2" style={{ color: 'var(--text-primary)' }}>Tier List</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>See the overall meta rankings</p>
            </Link>
            <Link
              href="/brawl-stars/brawlers"
              className="rounded-xl p-4 transition-all hover:scale-[1.02]"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <span className="text-2xl">🎮</span>
              <h3 className="font-bold mt-2" style={{ color: 'var(--text-primary)' }}>All Brawlers</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Browse complete database</p>
            </Link>
            <Link
              href="/brawl-stars"
              className="rounded-xl p-4 transition-all hover:scale-[1.02]"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <span className="text-2xl">🏠</span>
              <h3 className="font-bold mt-2" style={{ color: 'var(--text-primary)' }}>Brawl Hub</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Back to main page</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
