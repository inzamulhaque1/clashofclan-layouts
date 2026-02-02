'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WEAPONS, WEAPON_TYPES, getAllWeapons } from '@/lib/free-fire/weapons';

export default function WeaponsPage() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [sortBy, setSortBy] = useState('damage');
  const [searchQuery, setSearchQuery] = useState('');

  const allWeapons = getAllWeapons();

  const filteredWeapons = allWeapons
    .filter(w => typeFilter === 'all' || w.type === typeFilter)
    .filter(w => w.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'damage') return (b.stats.damage || 0) - (a.stats.damage || 0);
      if (sortBy === 'range') return (b.stats.range || 0) - (a.stats.range || 0);
      if (sortBy === 'rateOfFire') return (b.stats.rateOfFire || 0) - (a.stats.rateOfFire || 0);
      if (sortBy === 'accuracy') return (b.stats.accuracy || 0) - (a.stats.accuracy || 0);
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, #FF9800 0%, #FFC107 50%, #FFEB3B 100%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire" className="hover:opacity-80">Free Fire</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Weapons</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            All Free Fire Weapons
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Complete database of all {allWeapons.length} weapons with stats, attachments, and usage tips.
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
                placeholder="Search weapons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Type:</span>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <option value="all">All Types</option>
                {Object.entries(WEAPON_TYPES).map(([key, type]) => (
                  <option key={key} value={key}>{type.icon} {type.name}</option>
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
                <option value="damage">Damage</option>
                <option value="range">Range</option>
                <option value="rateOfFire">Rate of Fire</option>
                <option value="accuracy">Accuracy</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>

          <div className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            Showing {filteredWeapons.length} of {allWeapons.length} weapons
          </div>
        </div>
      </section>

      {/* Weapons Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredWeapons.map((weapon) => (
              <Link
                key={weapon.id}
                href={`/free-fire/weapons/${weapon.id}`}
                className="group rounded-xl overflow-hidden transition-all hover:scale-105"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                {/* Type Color Bar */}
                <div
                  className="h-1"
                  style={{ backgroundColor: weapon.typeInfo?.color }}
                ></div>

                <div className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Image */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img
                        src={weapon.image.url}
                        alt={weapon.name}
                        className="w-full h-full object-contain"
                      />
                      {weapon.recommended && (
                        <div
                          className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                          style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)' }}
                        >
                          ⭐
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="px-2 py-0.5 rounded text-xs font-bold"
                          style={{ background: weapon.typeInfo?.color, color: '#fff' }}
                        >
                          {weapon.typeInfo?.shortName}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg truncate" style={{ color: 'var(--text-primary)' }}>
                        {weapon.name}
                      </h3>
                      <p className="text-xs mt-1 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                        {weapon.description}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#EF4444' }}>{weapon.stats.damage || '-'}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>DMG</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#3B82F6' }}>{weapon.stats.range || '-'}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>RNG</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#F59E0B' }}>{weapon.stats.rateOfFire || '-'}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>ROF</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold" style={{ color: '#10B981' }}>{weapon.stats.accuracy || '-'}</div>
                      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>ACC</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredWeapons.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>No weapons found</h3>
              <p className="mt-2" style={{ color: 'var(--text-muted)' }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Weapon Types Overview */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Weapon Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {Object.entries(WEAPON_TYPES).map(([key, type]) => {
              const count = allWeapons.filter(w => w.type === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setTypeFilter(key === typeFilter ? 'all' : key)}
                  className="p-4 rounded-xl transition-all"
                  style={{
                    backgroundColor: type.color + '15',
                    border: typeFilter === key ? `2px solid ${type.color}` : '2px solid transparent'
                  }}
                >
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{type.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{count} weapons</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Guide */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Understanding Weapon Stats</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: '#EF444420', color: '#EF4444' }}>💥</div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Damage</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Base damage per bullet</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: '#3B82F620', color: '#3B82F6' }}>🎯</div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Range</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Effective distance for full damage</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: '#F59E0B20', color: '#F59E0B' }}>⚡</div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Rate of Fire</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Bullets per second speed</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl" style={{ background: '#10B98120', color: '#10B981' }}>🔍</div>
                <div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>Accuracy</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Bullet spread and precision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#FF9800' }}>{allWeapons.length}</div>
              <div style={{ color: 'var(--text-muted)' }}>Total Weapons</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#EF4444' }}>
                {Math.max(...allWeapons.filter(w => w.stats.damage).map(w => w.stats.damage))}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Highest Damage</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#F59E0B' }}>
                {Math.max(...allWeapons.filter(w => w.stats.rateOfFire).map(w => w.stats.rateOfFire))}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Fastest Fire Rate</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#10B981' }}>
                {allWeapons.filter(w => w.recommended).length}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Meta Weapons</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
