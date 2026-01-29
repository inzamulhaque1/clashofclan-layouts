'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import BaseCard from '@/components/BaseCard';

export default function SearchPageContent({ game }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialQuery = searchParams.get('q') || '';
  const initialTH = searchParams.get('th') || '';
  const initialType = searchParams.get('type') || '';

  const [query, setQuery] = useState(initialQuery);
  const [thLevel, setTHLevel] = useState(initialTH);
  const [baseType, setBaseType] = useState(initialType);
  const [bases, setBases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    e?.preventDefault();

    setLoading(true);
    setSearched(true);

    const params = new URLSearchParams();
    if (query) params.set('q', query);
    if (thLevel) params.set('th', thLevel);
    if (baseType) params.set('type', baseType);

    router.push(`/${game.slug}/search?${params.toString()}`, { scroll: false });

    try {
      const res = await fetch(`/api/search?${params.toString()}`);
      if (res.ok) {
        const data = await res.json();
        setBases(data.bases || []);
      } else {
        setBases([]);
      }
    } catch (err) {
      setBases([]);
    }

    setLoading(false);
  };

  const TH_LEVELS = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7];
  const BASE_TYPES = ['war', 'farm', 'trophy', 'hybrid', 'cwl'];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-12">
        <Link href={`/${game.slug}`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← Back to {game.name}
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Search <span style={{ color: 'var(--game-primary)' }}>Base Layouts</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Find the perfect base for your Clash of Clans village
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-12">
        <div className="flex flex-col md:flex-row gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search bases..."
            className="flex-1 px-4 py-3 rounded-xl transition-colors"
            style={{
              background: 'var(--surface-100)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
          />

          <select
            value={thLevel}
            onChange={(e) => setTHLevel(e.target.value)}
            className="px-4 py-3 rounded-xl transition-colors"
            style={{
              background: 'var(--surface-100)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            <option value="">All TH Levels</option>
            {TH_LEVELS.map(level => (
              <option key={level} value={level}>TH{level}</option>
            ))}
          </select>

          <select
            value={baseType}
            onChange={(e) => setBaseType(e.target.value)}
            className="px-4 py-3 rounded-xl transition-colors"
            style={{
              background: 'var(--surface-100)',
              border: '1px solid var(--border)',
              color: 'var(--text-primary)',
            }}
          >
            <option value="">All Types</option>
            {BASE_TYPES.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>

          <button
            type="submit"
            disabled={loading}
            className="px-8 py-3 text-black font-medium rounded-xl disabled:opacity-50 transition-colors"
            style={{ background: 'var(--game-primary)' }}
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>Quick Links</h2>
        <div className="flex flex-wrap gap-2">
          {TH_LEVELS.slice(0, 6).map(level => (
            <Link
              key={level}
              href={`/${game.slug}/th/${level}`}
              className="px-4 py-2 rounded-xl text-sm transition-colors"
              style={{ background: 'var(--surface-100)' }}
            >
              TH{level}
            </Link>
          ))}
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-2 border-t-transparent rounded-full animate-spin" style={{ borderColor: 'var(--game-primary)', borderTopColor: 'transparent' }}></div>
        </div>
      ) : searched ? (
        bases.length > 0 ? (
          <>
            <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
              Found {bases.length} base{bases.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bases.map((base, index) => (
                <BaseCard key={index} base={base} gameSlug={game.slug} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'var(--surface-100)' }}>
              <svg className="w-8 h-8" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">No bases found</h2>
            <p style={{ color: 'var(--text-muted)' }}>
              Try adjusting your search filters or browse by Town Hall level.
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'var(--surface-100)' }}>
            <svg className="w-8 h-8" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Start Searching</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Use the filters above to find the perfect base layout.
          </p>
        </div>
      )}
    </div>
  );
}
