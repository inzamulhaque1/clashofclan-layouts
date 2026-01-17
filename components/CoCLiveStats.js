'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CoCLiveStats() {
  const [topClans, setTopClans] = useState([]);
  const [topPlayers, setTopPlayers] = useState([]);
  const [goldPass, setGoldPass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('clans');

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      // Fetch all data in parallel
      const [clansRes, playersRes, goldPassRes] = await Promise.allSettled([
        fetch('/api/coc/rankings?type=clans&location=global&limit=10'),
        fetch('/api/coc/rankings?type=players&location=global&limit=10'),
        fetch('/api/coc/goldpass'),
      ]);

      // Process clans
      if (clansRes.status === 'fulfilled' && clansRes.value.ok) {
        const clansData = await clansRes.value.json();
        if (clansData.success) {
          setTopClans(clansData.items);
        }
      }

      // Process players
      if (playersRes.status === 'fulfilled' && playersRes.value.ok) {
        const playersData = await playersRes.value.json();
        if (playersData.success) {
          setTopPlayers(playersData.items);
        }
      }

      // Process gold pass
      if (goldPassRes.status === 'fulfilled' && goldPassRes.value.ok) {
        const goldPassData = await goldPassRes.value.json();
        if (goldPassData.success) {
          setGoldPass(goldPassData.season);
        }
      }

      // Check if we got any data
      if (clansRes.status === 'rejected' && playersRes.status === 'rejected') {
        throw new Error('Failed to fetch CoC data. API key may not be configured.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return (
      <div className="live-stats-error">
        <div className="text-center py-8">
          <span className="text-4xl mb-3 block">⚠️</span>
          <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            Live Stats Unavailable
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            {error.includes('API key') ? 'CoC API key not configured' : error}
          </p>
          <button
            onClick={fetchData}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-black hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="live-stats-icon">
            <span className="text-2xl">📊</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Live Game Stats
              </h2>
              <span className="live-stats-badge">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Live</span>
              </span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Real-time data from the official Clash of Clans API
            </p>
          </div>
        </div>

        {/* Gold Pass Banner */}
        {goldPass && (
          <GoldPassBanner goldPass={goldPass} />
        )}

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('clans')}
            className={`live-stats-tab ${activeTab === 'clans' ? 'live-stats-tab-active' : ''}`}
          >
            <span>🏰</span>
            <span>Top Clans</span>
          </button>
          <button
            onClick={() => setActiveTab('players')}
            className={`live-stats-tab ${activeTab === 'players' ? 'live-stats-tab-active' : ''}`}
          >
            <span>👤</span>
            <span>Top Players</span>
          </button>
        </div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="live-stats-card animate-pulse">
                <div className="h-4 bg-surface-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-surface-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : activeTab === 'clans' ? (
          <TopClansList clans={topClans} />
        ) : (
          <TopPlayersList players={topPlayers} />
        )}

        {/* Refresh Button */}
        <div className="mt-6 text-center">
          <button
            onClick={fetchData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <svg className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>{loading ? 'Refreshing...' : 'Refresh Data'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

// Parse CoC API date format: "20260101T080000.000Z" -> Date object
function parseCoCDate(dateStr) {
  if (!dateStr) return null;
  // Format: YYYYMMDDTHHmmss.sssZ
  const year = dateStr.substring(0, 4);
  const month = dateStr.substring(4, 6);
  const day = dateStr.substring(6, 8);
  const hour = dateStr.substring(9, 11);
  const minute = dateStr.substring(11, 13);
  const second = dateStr.substring(13, 15);
  return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}Z`);
}

function GoldPassBanner({ goldPass }) {
  const startDate = parseCoCDate(goldPass.startTime);
  const endDate = parseCoCDate(goldPass.endTime);
  const now = new Date();

  if (!startDate || !endDate || isNaN(startDate) || isNaN(endDate)) {
    return null; // Don't render if dates are invalid
  }

  const totalDuration = endDate - startDate;
  const elapsed = now - startDate;
  const progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
  const daysLeft = Math.max(0, Math.ceil((endDate - now) / (1000 * 60 * 60 * 24)));

  return (
    <div className="gold-pass-banner mb-8">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div className="gold-pass-icon">
            <span className="text-3xl">🏆</span>
          </div>
          <div>
            <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>
              Gold Pass Season
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              {formatDate(startDate)} - {formatDate(endDate)}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{daysLeft}</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Days Left</div>
          </div>
          <div className="w-32">
            <div className="flex justify-between text-xs mb-1" style={{ color: 'var(--text-muted)' }}>
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.2)' }}>
              <div
                className="h-full rounded-full gold-pass-progress"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TopClansList({ clans }) {
  if (!clans.length) {
    return (
      <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
        <span className="text-4xl mb-2 block">🏰</span>
        <p>No clan data available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {clans.map((clan, index) => (
        <div
          key={clan.tag}
          className="live-stats-card group"
          style={{ '--delay': `${index * 50}ms` }}
        >
          {/* Rank Badge */}
          <div className={`live-stats-rank ${index < 3 ? 'live-stats-rank-top' : ''}`}>
            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
          </div>

          {/* Clan Badge */}
          {clan.badgeUrls?.small && (
            <img
              src={clan.badgeUrls.small}
              alt={clan.name}
              className="w-12 h-12 mx-auto mb-2"
            />
          )}

          {/* Clan Name */}
          <h4 className="font-semibold text-sm text-center truncate group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
            {clan.name}
          </h4>

          {/* Stats */}
          <div className="mt-2 space-y-1 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            <div className="flex justify-center gap-1 items-center">
              <span>🏆</span>
              <span>{clan.clanPoints?.toLocaleString()}</span>
            </div>
            <div className="flex justify-center gap-1 items-center">
              <span>👥</span>
              <span>{clan.members}/50</span>
            </div>
            {clan.clanLevel && (
              <div className="flex justify-center gap-1 items-center">
                <span>⭐</span>
                <span>Lv.{clan.clanLevel}</span>
              </div>
            )}
          </div>

          {/* Tag */}
          <div className="mt-2 text-xs text-center font-mono" style={{ color: 'var(--text-muted)' }}>
            {clan.tag}
          </div>
        </div>
      ))}
    </div>
  );
}

function TopPlayersList({ players }) {
  if (!players.length) {
    return (
      <div className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
        <span className="text-4xl mb-2 block">👤</span>
        <p>No player data available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      {players.map((player, index) => (
        <div
          key={player.tag}
          className="live-stats-card group"
          style={{ '--delay': `${index * 50}ms` }}
        >
          {/* Rank Badge */}
          <div className={`live-stats-rank ${index < 3 ? 'live-stats-rank-top' : ''}`}>
            {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `#${index + 1}`}
          </div>

          {/* League Badge */}
          {player.league?.iconUrls?.small && (
            <img
              src={player.league.iconUrls.small}
              alt={player.league.name}
              className="w-12 h-12 mx-auto mb-2"
            />
          )}

          {/* Player Name */}
          <h4 className="font-semibold text-sm text-center truncate group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
            {player.name}
          </h4>

          {/* Stats */}
          <div className="mt-2 space-y-1 text-xs text-center" style={{ color: 'var(--text-muted)' }}>
            <div className="flex justify-center gap-1 items-center">
              <span>🏆</span>
              <span>{player.trophies?.toLocaleString()}</span>
            </div>
            <div className="flex justify-center gap-1 items-center">
              <span>⚔️</span>
              <span>{player.attackWins?.toLocaleString() || 0} wins</span>
            </div>
            {player.expLevel && (
              <div className="flex justify-center gap-1 items-center">
                <span>⭐</span>
                <span>Lv.{player.expLevel}</span>
              </div>
            )}
          </div>

          {/* Clan */}
          {player.clan && (
            <div className="mt-2 text-xs text-center truncate" style={{ color: 'var(--text-muted)' }}>
              {player.clan.name}
            </div>
          )}

          {/* Tag */}
          <div className="mt-1 text-xs text-center font-mono" style={{ color: 'var(--text-muted)' }}>
            {player.tag}
          </div>
        </div>
      ))}
    </div>
  );
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}
