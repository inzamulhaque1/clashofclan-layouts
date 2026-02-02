'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CHARACTERS, ROLES, ABILITY_TYPES, getAllCharacters } from '@/lib/free-fire/characters';

export default function CharactersPage() {
  const [roleFilter, setRoleFilter] = useState('all');
  const [abilityFilter, setAbilityFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const allCharacters = getAllCharacters();

  const filteredCharacters = allCharacters
    .filter(c => roleFilter === 'all' || c.role === roleFilter)
    .filter(c => abilityFilter === 'all' || c.abilityType === abilityFilter)
    .filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      // Recommended first, then alphabetically
      if (a.recommended && !b.recommended) return -1;
      if (!a.recommended && b.recommended) return 1;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF9800 50%, #FFC107 100%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire" className="hover:opacity-80">Free Fire</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Characters</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            All Free Fire Characters
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Complete database of all {allCharacters.length} characters with abilities, roles, and recommended builds.
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
                placeholder="Search characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              />
            </div>

            {/* Role Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Role:</span>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <option value="all">All Roles</option>
                {Object.entries(ROLES).map(([key, role]) => (
                  <option key={key} value={key}>{role.icon} {role.name}</option>
                ))}
              </select>
            </div>

            {/* Ability Type Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm" style={{ color: 'var(--text-muted)' }}>Ability:</span>
              <select
                value={abilityFilter}
                onChange={(e) => setAbilityFilter(e.target.value)}
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)', border: '1px solid var(--border)' }}
              >
                <option value="all">All Types</option>
                {Object.entries(ABILITY_TYPES).map(([key, type]) => (
                  <option key={key} value={key}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3 text-sm" style={{ color: 'var(--text-muted)' }}>
            Showing {filteredCharacters.length} of {allCharacters.length} characters
          </div>
        </div>
      </section>

      {/* Characters Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {filteredCharacters.map((char) => (
              <Link
                key={char.id}
                href={`/free-fire/characters/${char.id}`}
                className="group rounded-xl overflow-hidden transition-all hover:scale-105"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                {/* Role Color Bar */}
                <div
                  className="h-1"
                  style={{ backgroundColor: ROLES[char.role]?.color }}
                ></div>

                <div className="p-4">
                  {/* Image */}
                  <div className="relative">
                    <img
                      src={char.image.url}
                      alt={char.name}
                      className="w-full aspect-square object-contain"
                    />
                    {/* Ability Type Badge */}
                    <div
                      className="absolute top-0 right-0 text-xs font-bold px-2 py-1 rounded-bl-lg text-white"
                      style={{ backgroundColor: ABILITY_TYPES[char.abilityType]?.color }}
                    >
                      {ABILITY_TYPES[char.abilityType]?.name}
                    </div>
                    {/* Recommended Badge */}
                    {char.recommended && (
                      <div
                        className="absolute top-0 left-0 text-xs font-bold px-2 py-1 rounded-br-lg"
                        style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000' }}
                      >
                        Meta
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <h3 className="font-bold text-center mt-2 truncate" style={{ color: 'var(--text-primary)' }}>
                    {char.name}
                  </h3>

                  {/* Role */}
                  <div className="flex items-center justify-center gap-1 mt-1">
                    <span style={{ color: ROLES[char.role]?.color }}>
                      {ROLES[char.role]?.icon}
                    </span>
                    <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
                      {ROLES[char.role]?.name}
                    </span>
                  </div>

                  {/* Ability Name */}
                  <div className="mt-2 text-center">
                    <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}>
                      {char.ability.name}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredCharacters.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>No characters found</h3>
              <p className="mt-2" style={{ color: 'var(--text-muted)' }}>Try adjusting your filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Role Overview */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Character Roles</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(ROLES).map(([key, role]) => {
              const count = allCharacters.filter(c => c.role === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setRoleFilter(key === roleFilter ? 'all' : key)}
                  className="p-4 rounded-xl transition-all text-left"
                  style={{
                    backgroundColor: role.color + '15',
                    border: roleFilter === key ? `2px solid ${role.color}` : '2px solid transparent'
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{role.icon}</span>
                    <div>
                      <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{role.name}</h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{count} characters</p>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{role.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ability Types */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Ability Types</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(ABILITY_TYPES).map(([key, type]) => {
              const count = allCharacters.filter(c => c.abilityType === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setAbilityFilter(key === abilityFilter ? 'all' : key)}
                  className="p-4 rounded-xl transition-all text-left"
                  style={{
                    background: 'var(--surface-100)',
                    border: abilityFilter === key ? `2px solid ${type.color}` : '2px solid var(--border)'
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg" style={{ color: type.color }}>{type.name}</h3>
                    <span className="text-sm px-2 py-1 rounded-full" style={{ background: type.color + '20', color: type.color }}>
                      {count} characters
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{type.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#FF5722' }}>{allCharacters.length}</div>
              <div style={{ color: 'var(--text-muted)' }}>Total Characters</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#10B981' }}>
                {allCharacters.filter(c => c.recommended).length}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Meta Characters</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#3B82F6' }}>
                {allCharacters.filter(c => c.abilityType === 'active').length}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Active Abilities</div>
            </div>
            <div className="rounded-xl p-4 text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <div className="text-3xl font-bold" style={{ color: '#8B5CF6' }}>
                {allCharacters.filter(c => c.obtainMethod.toLowerCase().includes('free')).length}
              </div>
              <div style={{ color: 'var(--text-muted)' }}>Free Characters</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
