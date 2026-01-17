'use client';

import { useState } from 'react';

export default function PlayerLookup() {
  const [tag, setTag] = useState('');
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    if (!tag.trim()) return;

    setLoading(true);
    setError(null);
    setPlayer(null);

    try {
      // Format tag - ensure it starts with # and encode it
      let formattedTag = tag.trim();
      if (!formattedTag.startsWith('#')) {
        formattedTag = '#' + formattedTag;
      }

      const response = await fetch(`/api/coc/players/${encodeURIComponent(formattedTag)}`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Player not found');
      }

      setPlayer(data.player);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="player-lookup">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">#</span>
            <input
              type="text"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              placeholder="Enter player tag (e.g., ABC123)"
              className="w-full pl-8 pr-4 py-3 rounded-xl text-sm"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !tag.trim()}
            className="px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {loading ? (
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            ) : (
              'Search'
            )}
          </button>
        </div>
      </form>

      {/* Error */}
      {error && (
        <div className="p-4 rounded-xl mb-4" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
          <p className="text-sm text-red-400">{error}</p>
        </div>
      )}

      {/* Player Card */}
      {player && (
        <div className="player-card animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
            {player.league?.iconUrls?.medium && (
              <img
                src={player.league.iconUrls.medium}
                alt={player.league.name}
                className="w-16 h-16"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {player.name}
              </h3>
              <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                {player.tag}
              </p>
              {player.clan && (
                <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
                  {player.role && <span className="capitalize">{player.role} of </span>}
                  {player.clan.name}
                </p>
              )}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{player.trophies?.toLocaleString()}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Trophies</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatBox label="Town Hall" value={`TH${player.townHallLevel}`} icon="🏰" />
            <StatBox label="Exp Level" value={player.expLevel} icon="⭐" />
            <StatBox label="Best Trophies" value={player.bestTrophies?.toLocaleString()} icon="🏆" />
            <StatBox label="War Stars" value={player.warStars?.toLocaleString()} icon="⚔️" />
            <StatBox label="Attack Wins" value={player.attackWins?.toLocaleString()} icon="🗡️" />
            <StatBox label="Defense Wins" value={player.defenseWins?.toLocaleString()} icon="🛡️" />
            <StatBox label="Donations" value={player.donations?.toLocaleString()} icon="📤" />
            <StatBox label="Received" value={player.donationsReceived?.toLocaleString()} icon="📥" />
          </div>

          {/* Heroes */}
          {player.heroes && player.heroes.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Heroes</h4>
              <div className="flex flex-wrap gap-3">
                {player.heroes.map((hero) => (
                  <div
                    key={hero.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                  >
                    <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>
                      {hero.name}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">
                      Lv.{hero.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Summary */}
          {player.achievements && (
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Achievements ({player.achievements.length})
              </h4>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                <span>⭐</span>
                <span>
                  {player.achievements.filter(a => a.value >= a.target).length} completed,{' '}
                  {player.achievements.reduce((sum, a) => sum + a.stars, 0)} total stars
                </span>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <div className="text-center p-3 rounded-lg" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
      <div className="text-lg mb-1">{icon}</div>
      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>{value || '0'}</div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}
