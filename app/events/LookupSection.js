'use client';

import { useState } from 'react';
import PlayerLookup from '@/components/PlayerLookup';
import ClanSearch from '@/components/ClanSearch';

export default function LookupSection() {
  const [activeTab, setActiveTab] = useState('player');

  return (
    <section className="py-12 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="live-stats-icon" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
            <span className="text-2xl">🔍</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Player & Clan Lookup
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Search players and clans using the official CoC API
            </p>
          </div>
        </div>

        {/* Lookup Container */}
        <div className="lookup-section">
          {/* Tabs */}
          <div className="lookup-tabs">
            <button
              onClick={() => setActiveTab('player')}
              className={`lookup-tab ${activeTab === 'player' ? 'lookup-tab-active' : ''}`}
            >
              <span>👤</span>
              <span>Player Lookup</span>
            </button>
            <button
              onClick={() => setActiveTab('clan')}
              className={`lookup-tab ${activeTab === 'clan' ? 'lookup-tab-active' : ''}`}
            >
              <span>🏰</span>
              <span>Clan Search</span>
            </button>
          </div>

          {/* Content */}
          {activeTab === 'player' ? (
            <PlayerLookup />
          ) : (
            <ClanSearch />
          )}
        </div>

        {/* API Info */}
        <div className="mt-6 p-4 rounded-xl text-center" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Data provided by the{' '}
            <a
              href="https://developer.clashofclans.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Official Clash of Clans API
            </a>
            . Player and clan tags can be found in-game under settings.
          </p>
        </div>
      </div>
    </section>
  );
}
