'use client';

import { useState } from 'react';

export default function ClanSearch() {
  const [searchType, setSearchType] = useState('tag'); // 'tag' or 'name'
  const [query, setQuery] = useState('');
  const [clans, setClans] = useState([]);
  const [selectedClan, setSelectedClan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setClans([]);
    setSelectedClan(null);

    try {
      if (searchType === 'tag') {
        // Search by tag
        let formattedTag = query.trim();
        if (!formattedTag.startsWith('#')) {
          formattedTag = '#' + formattedTag;
        }

        const response = await fetch(`/api/coc/clans/${encodeURIComponent(formattedTag)}?include=members`);
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Clan not found');
        }

        setSelectedClan({ ...data.clan, members: data.members });
      } else {
        // Search by name
        const response = await fetch(`/api/coc/clans?name=${encodeURIComponent(query)}&limit=10`);
        const data = await response.json();

        if (!data.success) {
          throw new Error(data.error || 'Search failed');
        }

        setClans(data.items || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleClanSelect(clanTag) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`/api/coc/clans/${encodeURIComponent(clanTag)}?include=members`);
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || 'Failed to load clan');
      }

      setSelectedClan({ ...data.clan, members: data.members });
      setClans([]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="clan-search">
      {/* Search Form */}
      <form onSubmit={handleSearch} className="mb-6">
        {/* Search Type Toggle */}
        <div className="flex gap-2 mb-3">
          <button
            type="button"
            onClick={() => { setSearchType('tag'); setQuery(''); setClans([]); setSelectedClan(null); }}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              searchType === 'tag' ? 'bg-primary text-black' : ''
            }`}
            style={searchType !== 'tag' ? { background: 'var(--surface-100)', border: '1px solid var(--border)' } : {}}
          >
            Search by Tag
          </button>
          <button
            type="button"
            onClick={() => { setSearchType('name'); setQuery(''); setClans([]); setSelectedClan(null); }}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
              searchType === 'name' ? 'bg-primary text-black' : ''
            }`}
            style={searchType !== 'name' ? { background: 'var(--surface-100)', border: '1px solid var(--border)' } : {}}
          >
            Search by Name
          </button>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            {searchType === 'tag' && (
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-lg">#</span>
            )}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchType === 'tag' ? 'Enter clan tag (e.g., ABC123)' : 'Enter clan name (min 3 characters)'}
              className="w-full py-3 rounded-xl text-sm"
              style={{
                paddingLeft: searchType === 'tag' ? '2rem' : '1rem',
                paddingRight: '1rem',
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)',
              }}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !query.trim() || (searchType === 'name' && query.trim().length < 3)}
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

      {/* Search Results List */}
      {clans.length > 0 && (
        <div className="space-y-2 mb-6">
          <h4 className="font-semibold text-sm" style={{ color: 'var(--text-muted)' }}>
            {clans.length} clans found
          </h4>
          {clans.map((clan) => (
            <button
              key={clan.tag}
              onClick={() => handleClanSelect(clan.tag)}
              className="w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all hover:scale-[1.01]"
              style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
            >
              {clan.badgeUrls?.small && (
                <img src={clan.badgeUrls.small} alt={clan.name} className="w-10 h-10" />
              )}
              <div className="flex-1 min-w-0">
                <h5 className="font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                  {clan.name}
                </h5>
                <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                  {clan.tag}
                </p>
              </div>
              <div className="text-right">
                <div className="font-bold text-primary">{clan.clanPoints?.toLocaleString()}</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {clan.members}/50 • Lv.{clan.clanLevel}
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Selected Clan Detail */}
      {selectedClan && (
        <div className="clan-card animate-fade-in">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6 pb-6" style={{ borderBottom: '1px solid var(--border)' }}>
            {selectedClan.badgeUrls?.medium && (
              <img
                src={selectedClan.badgeUrls.medium}
                alt={selectedClan.name}
                className="w-20 h-20"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
                {selectedClan.name}
              </h3>
              <p className="text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                {selectedClan.tag}
              </p>
              {selectedClan.description && (
                <p className="text-sm mt-2 line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                  {selectedClan.description}
                </p>
              )}
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{selectedClan.clanPoints?.toLocaleString()}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Clan Points</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatBox label="Clan Level" value={selectedClan.clanLevel} icon="⭐" />
            <StatBox label="Members" value={`${selectedClan.members}/50`} icon="👥" />
            <StatBox label="War Wins" value={selectedClan.warWins?.toLocaleString()} icon="⚔️" />
            <StatBox label="War Streak" value={selectedClan.warWinStreak} icon="🔥" />
            <StatBox label="War League" value={selectedClan.warLeague?.name || 'Unranked'} icon="🏆" />
            <StatBox label="Capital Hall" value={`Lv.${selectedClan.clanCapital?.capitalHallLevel || 1}`} icon="🏛️" />
            <StatBox label="War Frequency" value={selectedClan.warFrequency || 'Unknown'} icon="📅" />
            <StatBox label="Required Trophies" value={selectedClan.requiredTrophies?.toLocaleString()} icon="🎯" />
          </div>

          {/* Labels */}
          {selectedClan.labels && selectedClan.labels.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Labels</h4>
              <div className="flex flex-wrap gap-2">
                {selectedClan.labels.map((label) => (
                  <div
                    key={label.id}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                  >
                    {label.iconUrls?.small && (
                      <img src={label.iconUrls.small} alt={label.name} className="w-5 h-5" />
                    )}
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{label.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Members List */}
          {selectedClan.memberList && selectedClan.memberList.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Members ({selectedClan.memberList.length})
              </h4>
              <div className="max-h-80 overflow-y-auto space-y-2 pr-2">
                {selectedClan.memberList
                  .sort((a, b) => a.clanRank - b.clanRank)
                  .map((member) => (
                    <div
                      key={member.tag}
                      className="flex items-center gap-3 p-3 rounded-lg"
                      style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                    >
                      {member.league?.iconUrls?.tiny && (
                        <img src={member.league.iconUrls.tiny} alt="" className="w-6 h-6" />
                      )}
                      <div className="w-6 text-center font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
                        #{member.clanRank}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate" style={{ color: 'var(--text-primary)' }}>
                          {member.name}
                        </div>
                        <div className="text-xs capitalize" style={{ color: 'var(--text-muted)' }}>
                          {member.role}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {member.trophies?.toLocaleString()} 🏆
                        </div>
                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                          TH{member.townHallLevel}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Back Button */}
          <button
            onClick={() => setSelectedClan(null)}
            className="mt-6 w-full py-3 text-sm font-medium rounded-xl transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            ← Back to Search
          </button>
        </div>
      )}
    </div>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <div className="text-center p-3 rounded-lg" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
      <div className="text-lg mb-1">{icon}</div>
      <div className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{value || '-'}</div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}
