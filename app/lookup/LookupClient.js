'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LookupClient() {
  const [activeTab, setActiveTab] = useState('player');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const [clanResults, setClanResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setClanResults([]);

    try {
      if (activeTab === 'player') {
        // Player search by tag
        let tag = searchQuery.trim();
        if (!tag.startsWith('#')) tag = '#' + tag;

        const response = await fetch(`/api/coc/players/${encodeURIComponent(tag)}`);
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Player not found');
        }
        setResult(data.player);
      } else {
        // Clan search by name or tag
        let query = searchQuery.trim();

        // If it looks like a tag, search by tag
        if (query.startsWith('#') || /^[A-Z0-9]+$/i.test(query) && query.length >= 3 && query.length <= 12) {
          if (!query.startsWith('#')) query = '#' + query;
          const response = await fetch(`/api/coc/clans/${encodeURIComponent(query)}`);
          const data = await response.json();

          if (!data.success) {
            throw new Error(data.error || 'Clan not found');
          }
          setResult(data.clan);
        } else {
          // Search by name
          const response = await fetch(`/api/coc/clans?name=${encodeURIComponent(query)}&limit=20`);
          const data = await response.json();

          if (!data.success) {
            throw new Error(data.error || 'No clans found');
          }
          setClanResults(data.items || []);
        }
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      {/* Hero */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Live from Official API
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
          Player & Clan <span className="text-primary">Lookup</span>
        </h1>
        <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
          Search for any Clash of Clans player or clan to view their complete stats
        </p>
      </div>

      {/* Search Card */}
      <div className="lookup-card mb-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => { setActiveTab('player'); setResult(null); setClanResults([]); setError(null); }}
            className={`lookup-tab-btn ${activeTab === 'player' ? 'lookup-tab-btn-active' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Player
          </button>
          <button
            onClick={() => { setActiveTab('clan'); setResult(null); setClanResults([]); setError(null); }}
            className={`lookup-tab-btn ${activeTab === 'clan' ? 'lookup-tab-btn-active' : ''}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
            Clan
          </button>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeTab === 'player' ? 'Enter player tag (e.g. #ABC123)' : 'Enter clan name or tag'}
              className="lookup-input"
            />
            <div className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--text-muted)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading || !searchQuery.trim()}
            className="lookup-search-btn"
          >
            {loading ? (
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              'Search'
            )}
          </button>
        </form>

        {/* Hint */}
        <p className="text-xs mt-3" style={{ color: 'var(--text-muted)' }}>
          {activeTab === 'player'
            ? 'Tip: Player tags start with # (e.g. #2PP, #ABC123XYZ)'
            : 'Tip: Search by clan name or enter exact clan tag'}
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 rounded-xl mb-6" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <p className="text-red-400 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="text-center py-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl" style={{ background: 'var(--surface-100)' }}>
            <svg className="w-5 h-5 animate-spin text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span style={{ color: 'var(--text-muted)' }}>Searching...</span>
          </div>
        </div>
      )}

      {/* Player Result */}
      {result && activeTab === 'player' && (
        <PlayerResultCard player={result} />
      )}

      {/* Clan Result (single) */}
      {result && activeTab === 'clan' && (
        <ClanResultCard clan={result} />
      )}

      {/* Clan Search Results (multiple) */}
      {clanResults.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
            Found {clanResults.length} clans
          </h3>
          {clanResults.map((clan) => (
            <ClanSearchRow key={clan.tag} clan={clan} />
          ))}
        </div>
      )}

      {/* Quick Links */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/leaderboards" className="lookup-quick-link group">
          <div className="lookup-quick-icon" style={{ background: 'rgba(99, 102, 241, 0.15)' }}>
            <span className="text-2xl">🏆</span>
          </div>
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
              Leaderboards
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>View top players & clans worldwide</p>
          </div>
        </Link>
        <Link href="/stats" className="lookup-quick-link group">
          <div className="lookup-quick-icon" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <h3 className="font-semibold group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
              Leagues & Stats
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>All league information</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

function PlayerResultCard({ player }) {
  return (
    <div className="lookup-result-card">
      <div className="flex items-start gap-4 mb-6">
        {player.league?.iconUrls?.medium ? (
          <img src={player.league.iconUrls.medium} alt="" className="w-20 h-20" />
        ) : (
          <div className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl" style={{ background: 'var(--surface-100)' }}>
            👤
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{player.name}</h2>
          <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>{player.tag}</p>
          {player.clan && (
            <Link href={`/clan/${encodeURIComponent(player.clan.tag)}`} className="inline-flex items-center gap-2 mt-2 text-sm hover:text-primary transition-colors" style={{ color: 'var(--text-secondary)' }}>
              {player.clan.badgeUrls?.small && (
                <img src={player.clan.badgeUrls.small} alt="" className="w-5 h-5" />
              )}
              {player.clan.name}
            </Link>
          )}
        </div>
        <Link
          href={`/player/${encodeURIComponent(player.tag)}`}
          className="px-4 py-2 rounded-lg font-medium text-sm bg-primary hover:bg-primary-dark text-black transition-colors"
        >
          View Full Profile
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatBox label="Trophies" value={player.trophies?.toLocaleString()} icon="🏆" />
        <StatBox label="Best" value={player.bestTrophies?.toLocaleString()} icon="⭐" />
        <StatBox label="Level" value={player.expLevel} icon="📊" />
        <StatBox label="TH Level" value={player.townHallLevel} icon="🏰" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatBox label="War Stars" value={player.warStars?.toLocaleString()} icon="⚔️" />
        <StatBox label="Donations" value={player.donations?.toLocaleString()} icon="🎁" />
        <StatBox label="Received" value={player.donationsReceived?.toLocaleString()} icon="📥" />
        <StatBox label="Attacks Won" value={player.attackWins?.toLocaleString()} icon="💪" />
      </div>
    </div>
  );
}

function ClanResultCard({ clan }) {
  return (
    <div className="lookup-result-card">
      <div className="flex items-start gap-4 mb-6">
        {clan.badgeUrls?.medium ? (
          <img src={clan.badgeUrls.medium} alt="" className="w-20 h-20" />
        ) : (
          <div className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl" style={{ background: 'var(--surface-100)' }}>
            🏰
          </div>
        )}
        <div className="flex-1">
          <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{clan.name}</h2>
          <p className="font-mono text-sm" style={{ color: 'var(--text-muted)' }}>{clan.tag}</p>
          {clan.location && (
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              📍 {clan.location.name}
            </p>
          )}
        </div>
        <Link
          href={`/clan/${encodeURIComponent(clan.tag)}`}
          className="px-4 py-2 rounded-lg font-medium text-sm bg-primary hover:bg-primary-dark text-black transition-colors"
        >
          View Full Profile
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatBox label="Clan Points" value={clan.clanPoints?.toLocaleString()} icon="🏆" />
        <StatBox label="Members" value={`${clan.members}/50`} icon="👥" />
        <StatBox label="War Wins" value={clan.warWins?.toLocaleString()} icon="⚔️" />
        <StatBox label="War League" value={clan.warLeague?.name || 'N/A'} icon="🎖️" small />
      </div>

      {clan.description && (
        <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{clan.description}</p>
        </div>
      )}
    </div>
  );
}

function ClanSearchRow({ clan }) {
  return (
    <Link
      href={`/clan/${encodeURIComponent(clan.tag)}`}
      className="lookup-search-row group"
    >
      {clan.badgeUrls?.small ? (
        <img src={clan.badgeUrls.small} alt="" className="w-12 h-12" />
      ) : (
        <div className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl" style={{ background: 'var(--surface-100)' }}>
          🏰
        </div>
      )}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold truncate group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
          {clan.name}
        </h4>
        <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-muted)' }}>
          <span className="font-mono">{clan.tag}</span>
          <span>{clan.members}/50 members</span>
          {clan.location && <span>{clan.location.name}</span>}
        </div>
      </div>
      <div className="text-right">
        <div className="font-bold text-primary">{clan.clanPoints?.toLocaleString()}</div>
        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Points</div>
      </div>
      <svg className="w-5 h-5 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  );
}

function StatBox({ label, value, icon, small }) {
  return (
    <div className="text-center p-3 rounded-lg" style={{ background: 'var(--surface-100)' }}>
      <span className="text-lg">{icon}</span>
      <div className={`font-bold mt-1 ${small ? 'text-sm' : ''}`} style={{ color: 'var(--text-primary)' }}>{value || '-'}</div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}
