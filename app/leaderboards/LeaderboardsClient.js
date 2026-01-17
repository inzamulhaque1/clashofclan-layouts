'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const REGIONS = {
  global: { name: 'Global', icon: '🌍' },
  americas: { name: 'Americas', icon: '🌎' },
  europe: { name: 'Europe', icon: '🇪🇺' },
  asia: { name: 'Asia', icon: '🌏' },
  middle_east: { name: 'Middle East', icon: '🕌' },
  africa: { name: 'Africa', icon: '🌍' },
  oceania: { name: 'Oceania', icon: '🏝️' },
};

// Flag image URL helper
const getFlagUrl = (iso) => {
  if (iso === 'global') return null;
  return `https://flagcdn.com/w40/${iso}.png`;
};

export default function LeaderboardsClient({ countries }) {
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [rankingType, setRankingType] = useState('clans');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeRegion, setActiveRegion] = useState('all');

  useEffect(() => {
    fetchRankings();
  }, [selectedCountry, rankingType]);

  async function fetchRankings() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `/api/coc/locations/${selectedCountry}?type=${rankingType}&limit=50`
      );
      const result = await response.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch rankings');
      }

      setData(result.items || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const selectedCountryData = countries.find(c => c.id === selectedCountry);

  // Group countries by region
  const countriesByRegion = countries.reduce((acc, country) => {
    const region = country.region || 'other';
    if (!acc[region]) acc[region] = [];
    acc[region].push(country);
    return acc;
  }, {});

  // Get countries to display based on active region filter (sorted alphabetically)
  const displayCountries = activeRegion === 'all'
    ? [...countries].sort((a, b) => a.name.localeCompare(b.name))
    : [...(countriesByRegion[activeRegion] || [])].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Region Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <button
            onClick={() => setActiveRegion('all')}
            className={`region-tab ${activeRegion === 'all' ? 'region-tab-active' : ''}`}
          >
            All
          </button>
          {Object.entries(REGIONS).map(([key, region]) => (
            <button
              key={key}
              onClick={() => setActiveRegion(key)}
              className={`region-tab ${activeRegion === key ? 'region-tab-active' : ''}`}
            >
              <span>{region.icon}</span>
              <span className="hidden sm:inline">{region.name}</span>
            </button>
          ))}
        </div>

        {/* Country Flags Grid - Compact */}
        <div className="mb-8 p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <div className="flex flex-wrap gap-2">
            {displayCountries.map((country) => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                className={`country-flag-btn ${selectedCountry === country.id ? 'country-flag-btn-active' : ''}`}
                title={country.name}
              >
                {country.iso === 'global' ? (
                  <span className="text-xl">🌍</span>
                ) : (
                  <img
                    src={getFlagUrl(country.iso)}
                    alt={country.name}
                    className="w-7 h-5 object-cover rounded-sm"
                    loading="lazy"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Ranking Type Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            { id: 'clans', label: 'Top Clans', icon: '🏰' },
            { id: 'players', label: 'Top Players', icon: '👤' },
            { id: 'clans-builder', label: 'Builder Clans', icon: '🔨' },
            { id: 'players-builder', label: 'Builder Players', icon: '⚒️' },
            { id: 'capitals', label: 'Clan Capitals', icon: '🏛️' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setRankingType(tab.id)}
              className={`leaderboard-tab ${rankingType === tab.id ? 'leaderboard-tab-active' : ''}`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Current Selection Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            {selectedCountryData?.iso === 'global' ? (
              <span className="text-4xl">🌍</span>
            ) : (
              <img
                src={getFlagUrl(selectedCountryData?.iso)}
                alt={selectedCountryData?.name}
                className="w-12 h-8 object-cover rounded shadow-lg"
              />
            )}
            <div>
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {selectedCountryData?.name} Rankings
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {rankingType.includes('builder') ? 'Builder Base' : rankingType === 'capitals' ? 'Clan Capital' : ''} {rankingType.includes('clans') || rankingType === 'capitals' ? 'Top 50 Clans' : 'Top 50 Players'}
              </p>
            </div>
          </div>
          <button
            onClick={fetchRankings}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh
          </button>
        </div>

        {/* Error State */}
        {error && (
          <div className="p-4 rounded-xl mb-6" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="leaderboard-row animate-pulse">
                <div className="w-8 h-8 bg-surface-200 rounded"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-surface-200 rounded w-1/3"></div>
                  <div className="h-3 bg-surface-200 rounded w-1/4"></div>
                </div>
                <div className="h-6 bg-surface-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        )}

        {/* Rankings List */}
        {!loading && !error && (
          <div className="space-y-2">
            {data.map((item, index) => (
              <RankingRow
                key={item.tag}
                item={item}
                rank={item.rank || index + 1}
                type={rankingType}
              />
            ))}

            {data.length === 0 && (
              <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
                <span className="text-4xl mb-2 block">📭</span>
                <p>No rankings data available</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

function RankingRow({ item, rank, type }) {
  const isPlayer = type.includes('players');
  const isCapital = type === 'capitals';

  const getRankStyle = (rank) => {
    if (rank === 1) return { bg: 'rgba(255, 215, 0, 0.15)', border: 'rgba(255, 215, 0, 0.3)', icon: '🥇' };
    if (rank === 2) return { bg: 'rgba(192, 192, 192, 0.15)', border: 'rgba(192, 192, 192, 0.3)', icon: '🥈' };
    if (rank === 3) return { bg: 'rgba(205, 127, 50, 0.15)', border: 'rgba(205, 127, 50, 0.3)', icon: '🥉' };
    return { bg: 'var(--card-bg)', border: 'var(--border)', icon: null };
  };

  const rankStyle = getRankStyle(rank);

  return (
    <Link
      href={isPlayer ? `/player/${encodeURIComponent(item.tag)}` : `/clan/${encodeURIComponent(item.tag)}`}
      className="leaderboard-row group"
      style={{ background: rankStyle.bg, borderColor: rankStyle.border }}
    >
      {/* Rank */}
      <div className="leaderboard-rank">
        {rankStyle.icon || `#${rank}`}
      </div>

      {/* Badge/League Icon */}
      <div className="w-12 h-12 flex-shrink-0">
        {isPlayer && item.league?.iconUrls?.small ? (
          <img src={item.league.iconUrls.small} alt="" className="w-12 h-12" />
        ) : !isPlayer && item.badgeUrls?.small ? (
          <img src={item.badgeUrls.small} alt="" className="w-12 h-12" />
        ) : (
          <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'var(--surface-100)' }}>
            {isPlayer ? '👤' : '🏰'}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold truncate group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
          {item.name}
        </h4>
        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="font-mono">{item.tag}</span>
          {item.location && (
            <span>{item.location.name}</span>
          )}
          {isPlayer && item.clan && (
            <span>{item.clan.name}</span>
          )}
          {!isPlayer && item.members && (
            <span>{item.members}/50 members</span>
          )}
        </div>
      </div>

      {/* Stats */}
      <div className="text-right flex-shrink-0">
        {isCapital ? (
          <>
            <div className="font-bold text-primary">{item.clanCapitalPoints?.toLocaleString()}</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Capital Points</div>
          </>
        ) : type.includes('builder') ? (
          <>
            <div className="font-bold text-emerald-400">{(isPlayer ? item.builderBaseTrophies : item.clanBuilderBasePoints)?.toLocaleString()}</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Builder {isPlayer ? 'Trophies' : 'Points'}</div>
          </>
        ) : (
          <>
            <div className="font-bold text-primary">{(isPlayer ? item.trophies : item.clanPoints)?.toLocaleString()}</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{isPlayer ? 'Trophies' : 'Clan Points'}</div>
          </>
        )}
      </div>

      {/* Arrow */}
      <div className="text-muted group-hover:text-primary transition-colors">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
