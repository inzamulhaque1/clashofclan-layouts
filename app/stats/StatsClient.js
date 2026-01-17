'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StatsClient() {
  const [activeTab, setActiveTab] = useState('trophy');
  const [leagues, setLeagues] = useState([]);
  const [warLeagues, setWarLeagues] = useState([]);
  const [builderLeagues, setBuilderLeagues] = useState([]);
  const [capitalLeagues, setCapitalLeagues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllLeagues();
  }, []);

  async function fetchAllLeagues() {
    setLoading(true);
    try {
      const [leaguesRes, warRes, builderRes, capitalRes] = await Promise.all([
        fetch('/api/coc/leagues?type=leagues'),
        fetch('/api/coc/leagues?type=warleagues'),
        fetch('/api/coc/leagues?type=builderbaseleagues'),
        fetch('/api/coc/leagues?type=capitalleagues'),
      ]);

      const [leaguesData, warData, builderData, capitalData] = await Promise.all([
        leaguesRes.json(),
        warRes.json(),
        builderRes.json(),
        capitalRes.json(),
      ]);

      if (leaguesData.success) setLeagues(leaguesData.items || []);
      if (warData.success) setWarLeagues(warData.items || []);
      if (builderData.success) setBuilderLeagues(builderData.items || []);
      if (capitalData.success) setCapitalLeagues(capitalData.items || []);
    } catch (err) {
      console.error('Failed to fetch leagues:', err);
    } finally {
      setLoading(false);
    }
  }

  const tabs = [
    { id: 'trophy', label: 'Trophy Leagues', icon: '🏆', data: leagues },
    { id: 'war', label: 'War Leagues (CWL)', icon: '⚔️', data: warLeagues },
    { id: 'builder', label: 'Builder Leagues', icon: '🔨', data: builderLeagues },
    { id: 'capital', label: 'Capital Leagues', icon: '🏛️', data: capitalLeagues },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-emerald-500/10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live from Official API
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Clash of Clans <span className="text-primary">Leagues</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Complete guide to all leagues in Clash of Clans. Trophy requirements, rewards, and progression system.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`stats-tab ${activeTab === tab.id ? 'stats-tab-active' : ''}`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span>{tab.label}</span>
              <span className="stats-tab-count">{tab.data.length}</span>
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="stats-card animate-pulse">
                <div className="w-20 h-20 bg-surface-200 rounded-full mx-auto mb-4"></div>
                <div className="h-5 bg-surface-200 rounded w-2/3 mx-auto mb-2"></div>
                <div className="h-4 bg-surface-200 rounded w-1/2 mx-auto"></div>
              </div>
            ))}
          </div>
        )}

        {/* Trophy Leagues */}
        {!loading && activeTab === 'trophy' && (
          <div className="space-y-8">
            <LeagueInfoSection
              title="How Trophy Leagues Work"
              description="Players are placed in leagues based on their trophy count. Higher leagues offer better loot bonuses and exclusive rewards. Season resets occur monthly."
              items={[
                'Unranked: 0-399 Trophies',
                'Bronze: 400-799 Trophies',
                'Silver: 800-1399 Trophies',
                'Gold: 1400-1999 Trophies',
                'Crystal: 2000-2599 Trophies',
                'Master: 2600-3199 Trophies',
                'Champion: 3200-4099 Trophies',
                'Titan: 4100-4999 Trophies',
                'Legend: 5000+ Trophies',
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {leagues.map((league, index) => (
                <LeagueCard key={league.id} league={league} index={index} type="trophy" />
              ))}
            </div>
          </div>
        )}

        {/* War Leagues (CWL) */}
        {!loading && activeTab === 'war' && (
          <div className="space-y-8">
            <LeagueInfoSection
              title="Clan War Leagues (CWL)"
              description="Clan War Leagues is a monthly competitive event where clans battle for league medals. Clans are matched by league tier and performance determines promotion or demotion."
              items={[
                'Runs once per month (first week)',
                '7 days of wars against 7 clans',
                'Earn League Medals for rewards',
                'Top clans promote, bottom clans demote',
                'Champion leagues have the best rewards',
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {warLeagues.map((league, index) => (
                <LeagueCard key={league.id} league={league} index={index} type="war" />
              ))}
            </div>
          </div>
        )}

        {/* Builder Base Leagues */}
        {!loading && activeTab === 'builder' && (
          <div className="space-y-8">
            <LeagueInfoSection
              title="Builder Base Leagues"
              description="Builder Base has its own separate league system. Compete in Versus Battles to climb the ranks and earn Builder Gold, Builder Elixir, and Gems."
              items={[
                'Separate trophy system from main village',
                'Win Versus Battles to gain trophies',
                'Daily loot bonus based on league',
                'Season rewards include Gems',
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {builderLeagues.map((league, index) => (
                <LeagueCard key={league.id} league={league} index={index} type="builder" />
              ))}
            </div>
          </div>
        )}

        {/* Capital Leagues */}
        {!loading && activeTab === 'capital' && (
          <div className="space-y-8">
            <LeagueInfoSection
              title="Clan Capital Leagues"
              description="Clan Capital introduces a new league system for Raid Weekends. Your clan's Capital League determines matchmaking and raid medal rewards."
              items={[
                'Based on Clan Capital Trophy count',
                'Raid Weekends occur every weekend',
                'Earn Raid Medals for upgrades',
                'Contribute Capital Gold to build districts',
              ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capitalLeagues.map((league, index) => (
                <LeagueCard key={league.id} league={league} index={index} type="capital" />
              ))}
            </div>
          </div>
        )}

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <QuickStat icon="🏆" label="Trophy Leagues" value={leagues.length} />
          <QuickStat icon="⚔️" label="War Leagues" value={warLeagues.length} />
          <QuickStat icon="🔨" label="Builder Leagues" value={builderLeagues.length} />
          <QuickStat icon="🏛️" label="Capital Leagues" value={capitalLeagues.length} />
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center p-8 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Check Your Ranking
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            See how you compare to players worldwide in our live leaderboards
          </p>
          <Link href="/leaderboards" className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all hover:scale-105">
            View Leaderboards
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}

function LeagueInfoSection({ title, description, items }) {
  return (
    <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, var(--surface-100) 0%, var(--card-bg) 100%)', border: '1px solid var(--border)' }}>
      <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{title}</h2>
      <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{description}</p>
      {items && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function LeagueCard({ league, index, type }) {
  const getLeagueColor = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('legend')) return 'from-yellow-500/20 to-amber-600/20';
    if (lowerName.includes('titan')) return 'from-blue-500/20 to-indigo-600/20';
    if (lowerName.includes('champion')) return 'from-purple-500/20 to-violet-600/20';
    if (lowerName.includes('master')) return 'from-red-500/20 to-rose-600/20';
    if (lowerName.includes('crystal')) return 'from-cyan-500/20 to-teal-600/20';
    if (lowerName.includes('gold')) return 'from-yellow-400/20 to-amber-500/20';
    if (lowerName.includes('silver')) return 'from-gray-400/20 to-slate-500/20';
    if (lowerName.includes('bronze')) return 'from-orange-400/20 to-amber-600/20';
    return 'from-primary/10 to-emerald-500/10';
  };

  return (
    <div
      className="stats-card group"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getLeagueColor(league.name)} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
      <div className="relative">
        {league.iconUrls?.medium ? (
          <img
            src={league.iconUrls.medium}
            alt={league.name}
            className="w-20 h-20 mx-auto mb-4 transform group-hover:scale-110 transition-transform"
          />
        ) : (
          <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-4xl" style={{ background: 'var(--surface-200)' }}>
            {type === 'trophy' ? '🏆' : type === 'war' ? '⚔️' : type === 'builder' ? '🔨' : '🏛️'}
          </div>
        )}
        <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
          {league.name}
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          League ID: {league.id}
        </p>
      </div>
    </div>
  );
}

function QuickStat({ icon, label, value }) {
  return (
    <div className="text-center p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
      <span className="text-3xl">{icon}</span>
      <div className="text-2xl font-bold mt-2" style={{ color: 'var(--text-primary)' }}>{value}</div>
      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}
