'use client';

import Link from 'next/link';
import { BRAWLERS, TIERS, BRAWLER_CLASSES, getBrawlersByTier } from '@/lib/brawl-stars/brawlers';

export default function TierListPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 50%, #8B5CF6 100%)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars" className="hover:opacity-80">Brawl Stars</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Tier List</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Brawl Stars Tier List 2026
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Complete competitive tier list with win rates and pick rates. Updated daily based on millions of matches.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Brawlers:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>{BRAWLERS.length}</span>
            </div>
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Last Updated:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>Feb 2026</span>
            </div>
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Data Source:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>Brawlify, Noff.gg</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tier List */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {Object.entries(TIERS).map(([tierKey, tierInfo]) => {
            const brawlers = getBrawlersByTier(tierKey);
            if (brawlers.length === 0) return null;

            return (
              <div key={tierKey} className="mb-8">
                {/* Tier Header */}
                <div
                  className="flex items-center gap-4 p-4 rounded-t-xl"
                  style={{ backgroundColor: tierInfo.color + '20', borderLeft: `4px solid ${tierInfo.color}` }}
                >
                  <div
                    className="text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: tierInfo.color }}
                  >
                    {tierKey}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{tierInfo.name}</h2>
                    <p style={{ color: 'var(--text-muted)' }}>{tierInfo.description}</p>
                  </div>
                  <div className="ml-auto" style={{ color: 'var(--text-muted)' }}>
                    {brawlers.length} Brawler{brawlers.length !== 1 ? 's' : ''}
                  </div>
                </div>

                {/* Brawlers Grid */}
                <div className="rounded-b-xl p-4" style={{ background: 'var(--surface-100)' }}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {brawlers.sort((a, b) => b.winRate - a.winRate).map((brawler) => (
                      <Link
                        key={brawler.id}
                        href={`/brawl-stars/brawlers/${brawler.id}`}
                        className="group rounded-xl p-3 transition-all hover:scale-105"
                        style={{ background: 'var(--surface-200)' }}
                      >
                        <div className="relative">
                          <img
                            src={brawler.image}
                            alt={brawler.name}
                            className="w-full aspect-square object-contain"
                          />
                          <div
                            className="absolute top-0 right-0 text-xs px-2 py-0.5 rounded-bl-lg font-bold text-white"
                            style={{ backgroundColor: BRAWLER_CLASSES[brawler.class]?.color || '#666' }}
                          >
                            {BRAWLER_CLASSES[brawler.class]?.icon}
                          </div>
                        </div>
                        <h3 className="font-semibold text-center mt-2 text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                          {brawler.name}
                        </h3>
                        <div className="flex justify-between text-xs mt-1">
                          <span style={{ color: '#10B981' }}>{brawler.winRate}%</span>
                          <span style={{ color: 'var(--text-muted)' }}>{brawler.useRate}%</span>
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

      {/* Tier Explanation */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Understanding Our Tier List</h2>

          <div className="space-y-4">
            <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>How We Rank Brawlers</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Our tier list combines multiple data points: win rates from millions of matches,
                pick rates in competitive play, professional player opinions, and performance across
                all game modes. Brawlers are ranked based on their overall effectiveness in the current meta.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Win Rate</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Percentage of matches won. Higher win rates indicate stronger brawlers,
                  but context matters - some brawlers excel in specific modes.
                </p>
              </div>
              <div className="rounded-xl p-6" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Use Rate</h3>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  How often a brawler is picked. High use rate shows popularity,
                  but doesn't always correlate with strength.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meta Summary */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>February 2026 Meta Summary</h2>

          <div className="rounded-xl p-6" style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(244, 63, 94, 0.1))', border: '1px solid rgba(255, 107, 53, 0.3)' }}>
            <div className="max-w-none">
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>Current Meta Trends</h3>
              <ul className="space-y-2 mt-3" style={{ color: 'var(--text-muted)' }}>
                <li><strong style={{ color: 'var(--text-primary)' }}>Marksman Dominance:</strong> Pierce, Mandy, and Angelo control the long-range meta with their precision damage.</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Tank Revival:</strong> Buster and Frank have returned to S/A tier with recent buffs making them viable in 3v3 modes.</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Assassin Struggles:</strong> Despite Mortis being S-tier, most assassins like Crow and Leon have fallen to D-tier due to increased burst damage in the meta.</li>
                <li><strong style={{ color: 'var(--text-primary)' }}>Support Value:</strong> Byron and Gigi provide incredible value with their healing and buffing capabilities.</li>
              </ul>

              <h3 className="text-xl font-bold mt-6" style={{ color: 'var(--text-primary)' }}>Recent Balance Changes</h3>
              <p className="mt-2" style={{ color: 'var(--text-muted)' }}>
                The latest balance update buffed Pierce's damage and Buster's shield duration while nerfing
                Crow's poison damage and Leon's invisibility duration. These changes reflect Supercell's
                attempt to shift the meta away from chip damage assassins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 px-4" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Explore More</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/brawl-stars/brawlers" className="rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <span className="text-2xl">🎮</span>
              <h3 className="font-bold mt-2" style={{ color: 'var(--text-primary)' }}>All Brawlers</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>View complete brawler database</p>
            </Link>
            <Link href="/brawl-stars" className="rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <span className="text-2xl">📚</span>
              <h3 className="font-bold mt-2" style={{ color: 'var(--text-primary)' }}>Guides</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Strategy guides and tips</p>
            </Link>
            <Link href="/brawl-stars/modes" className="rounded-xl p-4 transition-all hover:scale-[1.02]" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <span className="text-2xl">🗺️</span>
              <h3 className="font-bold mt-2" style={{ color: 'var(--text-primary)' }}>Game Modes</h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Best brawlers per mode</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
