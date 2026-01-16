'use client';

import { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import BaseCard from '@/components/BaseCard';

export default function SearchPageContent() {
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

    router.push(`/search?${params.toString()}`, { scroll: false });

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
        <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Search <span className="text-primary">Base Layouts</span>
        </h1>
        <p className="text-muted">
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
            className="flex-1 px-4 py-3 bg-surface-100 border border-white/10 rounded-xl text-white placeholder-muted focus:outline-none focus:border-primary transition-colors"
          />

          <select
            value={thLevel}
            onChange={(e) => setTHLevel(e.target.value)}
            className="px-4 py-3 bg-surface-100 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="">All TH Levels</option>
            {TH_LEVELS.map(level => (
              <option key={level} value={level}>TH{level}</option>
            ))}
          </select>

          <select
            value={baseType}
            onChange={(e) => setBaseType(e.target.value)}
            className="px-4 py-3 bg-surface-100 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary transition-colors"
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
            className="btn-primary px-8 py-3 disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {/* Quick Links */}
      <div className="mb-12">
        <h2 className="text-sm font-medium text-muted mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-2">
          {TH_LEVELS.slice(0, 6).map(level => (
            <Link
              key={level}
              href={`/th/${level}`}
              className="px-4 py-2 bg-surface-100 rounded-xl text-sm hover:bg-surface-200 transition-colors"
            >
              TH{level}
            </Link>
          ))}
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : searched ? (
        bases.length > 0 ? (
          <>
            <p className="text-muted mb-6">
              Found {bases.length} base{bases.length !== 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {bases.map((base, index) => (
                <BaseCard key={index} base={base} />
              ))}
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 flex items-center justify-center">
              <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">No bases found</h2>
            <p className="text-muted">
              Try adjusting your search filters or browse by Town Hall level.
            </p>
          </div>
        )
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Start Searching</h2>
          <p className="text-muted">
            Use the filters above to find the perfect base layout.
          </p>
        </div>
      )}
    </div>
  );
}
