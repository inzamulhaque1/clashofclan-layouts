'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAWLERS, TIERS, BRAWLER_CLASSES, RARITIES } from '@/lib/brawl-stars/brawlers';

export default function BrawlersPage() {
  const [filter, setFilter] = useState('all');
  const [classFilter, setClassFilter] = useState('all');
  const [sortBy, setSortBy] = useState('winRate');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBrawlers = BRAWLERS
    .filter(b => filter === 'all' || b.tier === filter)
    .filter(b => classFilter === 'all' || b.class === classFilter)
    .filter(b => b.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'winRate') return b.winRate - a.winRate;
      if (sortBy === 'useRate') return b.useRate - a.useRate;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 50%, #8B5CF6 100%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars" className="hover:opacity-80">Brawl Stars</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>All Brawlers</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            All Brawl Stars Brawlers
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Complete database of all {BRAWLERS.length} brawlers with stats, abilities, and strategies.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 px-4 sticky top-0 z-20 backdrop-blur-sm" style={{ background: 'var(--surface-100)', borderBottom: '1px solid var(--border)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Search */}
            <div className="flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Search brawlers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              />
            </div>

            {/* Tier Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Tier:</span>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <option value="all">All Tiers</option>
                {Object.entries(TIERS).map(([key, tier]) => (
                  <option key={key} value={key}>{tier.name}</option>
                ))}
              </select>
            </div>

            {/* Class Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Class:</span>
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <option value="all">All Classes</option>
                {Object.entries(BRAWLER_CLASSES).map(([key, cls]) => (
                  <option key={key} value={key}>{cls.icon} {cls.name}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <option value="winRate">Win Rate</option>
                <option value="useRate">Use Rate</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          <div className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            Showing {filteredBrawlers.length} of {BRAWLERS.length} brawlers
          </div>
        </div>
      </section>

      {/* Brawlers Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredBrawlers.map((brawler) => (
              <Link
                key={brawler.id}
                href={`/brawl-stars/brawlers/${brawler.id}`}
                className="group rounded-xl overflow-hidden transition-all hover:scale-105"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                {/* Tier Badge */}
                <div
                  className="h-1"
                  style={{ backgroundColor: TIERS[brawler.tier]?.color }}
                ></div>

                <div className="p-4">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={brawler.image}
                      alt={brawler.name}
                      className="w-full aspect-square object-contain"
                    />
                    <div
                      className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl-lg text-white"
                      style={{ backgroundColor: TIERS[brawler.tier]?.color }}
                    >
                      {brawler.tier}
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-bold text-center mt-2 truncate" style={{ color: 'var(--text-primary)' }}>
                    {brawler.name}
                  </h3>

                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span style={{ color: BRAWLER_CLASSES[brawler.class]?.color }}>
                      {BRAWLER_CLASSES[brawler.class]?.icon}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {BRAWLER_CLASSES[brawler.class]?.name}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between mt-3 text-xs">
                    <div className="text-center">
                      <div className="font-bold" style={{ color: '#10B981' }}>{brawler.winRate}%</div>
                      <div style={{ color: 'var(--text-muted)' }}>Win</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold" style={{ color: '#3B82F6' }}>{brawler.useRate}%</div>
                      <div style={{ color: 'var(--text-muted)' }}>Pick</div>
                    </div>
                  </div>

                  {/* Rarity */}
                  <div
                    className="mt-3 text-center text-xs py-1 rounded-full"
                    style={{
                      backgroundColor: RARITIES[brawler.rarity]?.color + '20',
                      color: RARITIES[brawler.rarity]?.color
                    }}
                  >
                    {RARITIES[brawler.rarity]?.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredBrawlers.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>No brawlers found</h3>
              <p className="mt-2" style={{ color: 'var(--text-muted)' }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Class Overview */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Brawler Classes</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(BRAWLER_CLASSES).map(([key, cls]) => {
              const count = BRAWLERS.filter(b => b.class === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setClassFilter(key === classFilter ? 'all' : key)}
                  className="p-4 rounded-xl transition-all"
                  style={{
                    backgroundColor: cls.color + '15',
                    border: classFilter === key ? `2px solid ${cls.color}` : '2px solid transparent'
                  }}
                >
                  <div className="text-3xl mb-2">{cls.icon}</div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{cls.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{count} brawlers</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Quick Stats</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#8B5CF6' }}>{BRAWLERS.filter(b => b.tier === 'S').length}</div>
              <div style={{ color: 'var(--text-muted)' }}>S-Tier Brawlers</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#10B981' }}>
                {Math.max(...BRAWLERS.map(b => b.winRate))}%
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Highest Win Rate</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#3B82F6' }}>
                {Math.max(...BRAWLERS.map(b => b.useRate))}%
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Highest Pick Rate</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#EC4899' }}>
                {BRAWLERS.filter(b => b.rarity === 'chromatic').length}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Chromatic Brawlers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
