'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PlayerPageClient({ tag }) {
  const [player, setPlayer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [exporting, setExporting] = useState(false);
  const [exportMode, setExportMode] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    fetchPlayerData();
  }, [tag]);

  async function fetchPlayerData() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coc/players/${tag}`);
      const data = await response.json();
      if (!data.success) throw new Error(data.error || 'Player not found');
      setPlayer(data.player);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function exportAsImage() {
    if (!profileRef.current || exporting) return;
    setExporting(true);
    setExportMode(true);

    // Wait for state to update and render
    await new Promise(r => setTimeout(r, 100));

    try {
      const html2canvas = (await import('html2canvas')).default;
      const canvas = await html2canvas(profileRef.current, {
        backgroundColor: '#0c1222',
        scale: 2,
        useCORS: true,
      });
      const link = document.createElement('a');
      link.download = `${player.name}-${player.tag.replace('#', '')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (err) {
      alert('Export failed');
    } finally {
      setExporting(false);
      setExportMode(false);
    }
  }

  async function exportAsPDF() {
    if (!profileRef.current || exporting) return;
    setExporting(true);
    setExportMode(true);

    // Wait for state to update and render
    await new Promise(r => setTimeout(r, 100));

    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');
      const canvas = await html2canvas(profileRef.current, {
        backgroundColor: '#0c1222',
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = 595.28;
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: [pdfWidth, pdfHeight] });
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${player.name}-${player.tag.replace('#', '')}.pdf`);
    } catch (err) {
      alert('PDF export failed');
    } finally {
      setExporting(false);
      setExportMode(false);
    }
  }

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-48 rounded-2xl" style={{ background: 'var(--surface-100)' }}></div>
        <div className="h-96 rounded-2xl" style={{ background: 'var(--surface-100)' }}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 rounded-2xl" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
        <span className="text-6xl block mb-4">❌</span>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Player Not Found</h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>{error}</p>
        <Link href="/lookup" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-xl hover:bg-primary-hover transition-all">
          Search Again
        </Link>
      </div>
    );
  }

  if (!player) return null;

  return (
    <div className="space-y-6">
      {/* Top Bar */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <Link href="/lookup" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Back
        </Link>
        <div className="flex items-center gap-2">
          <button onClick={exportAsImage} disabled={exporting} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
            {exporting ? '...' : '📷'} Image
          </button>
          <button onClick={exportAsPDF} disabled={exporting} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all disabled:opacity-50 bg-red-500/10 border border-red-500/30 text-red-400">
            {exporting ? '...' : '📄'} PDF
          </button>
        </div>
      </div>

      {/* Profile Content */}
      <div ref={profileRef} className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        {/* Header */}
        <div className="relative p-6 md:p-8 rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(245,158,11,0.02) 100%)', border: '1px solid var(--border)' }}>
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-radial from-primary/20 to-transparent pointer-events-none"></div>

          <div className="relative flex flex-col lg:flex-row gap-6 lg:items-start lg:justify-between">
            {/* Left */}
            <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start">
              <div className="relative shrink-0">
                {player.league?.iconUrls?.large ? (
                  <img src={player.league.iconUrls.large} alt={player.league.name} className="w-24 h-24 md:w-28 md:h-28" />
                ) : (
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl flex items-center justify-center text-5xl" style={{ background: 'var(--surface-100)' }}>👤</div>
                )}
                <span className="absolute -bottom-2 -right-2 px-2 py-1 bg-primary text-black text-xs font-bold rounded-md shadow-lg">TH{player.townHallLevel}</span>
              </div>

              <div className="text-center sm:text-left">
                <h1 className="text-2xl md:text-3xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{player.name}</h1>
                <p className="font-mono text-sm mb-3" style={{ color: 'var(--text-muted)' }}>{player.tag}</p>

                {player.clan && (
                  <Link href={`/clan/${encodeURIComponent(player.clan.tag)}`} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:brightness-110" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    {player.clan.badgeUrls?.small && <img src={player.clan.badgeUrls.small} alt="" className="w-5 h-5" />}
                    <span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{player.clan.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded capitalize" style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}>{player.role}</span>
                  </Link>
                )}

                {player.labels?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                    {player.labels.map((label) => (
                      <span key={label.id} className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-xs" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}>
                        {label.iconUrls?.small && <img src={label.iconUrls.small} alt="" className="w-4 h-4" />}
                        {label.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3">
              {[
                { icon: '🏆', value: player.trophies?.toLocaleString(), label: 'Trophies', highlight: true },
                { icon: '⭐', value: player.bestTrophies?.toLocaleString(), label: 'Best' },
                { icon: '📈', value: player.expLevel, label: 'Level' },
                { icon: '⚔️', value: player.warStars?.toLocaleString(), label: 'War Stars' },
              ].map((stat, i) => (
                <div key={i} className={`flex flex-col items-center p-3 rounded-xl text-center ${stat.highlight ? 'bg-primary/10 border-primary/30' : ''}`} style={!stat.highlight ? { background: 'var(--surface-100)', border: '1px solid var(--border)' } : { border: '1px solid rgba(245,158,11,0.3)' }}>
                  <span className="text-xl mb-1">{stat.icon}</span>
                  <span className={`font-bold text-lg ${stat.highlight ? 'text-primary' : ''}`} style={!stat.highlight ? { color: 'var(--text-primary)' } : {}}>{stat.value || '-'}</span>
                  <span className="text-[10px] uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs - hidden during export */}
        {!exportMode && (
          <div className="flex gap-2 py-4 border-b overflow-x-auto" style={{ borderColor: 'var(--border)' }}>
            {[
              { id: 'overview', label: 'Overview', icon: '📊' },
              { id: 'heroes', label: 'Heroes', icon: '🦸' },
              { id: 'troops', label: 'Troops', icon: '⚔️' },
              { id: 'achievements', label: 'Achievements', icon: '🏅' },
            ].map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${activeTab === tab.id ? 'bg-primary/10 text-primary border-primary/30' : ''}`} style={activeTab !== tab.id ? { color: 'var(--text-muted)', border: '1px solid transparent' } : { border: '1px solid rgba(245,158,11,0.3)' }}>
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Content - show all sections during export, otherwise show active tab */}
        {exportMode ? (
          <div className="py-6 space-y-8">
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>📊 Overview</h2>
              <OverviewTab player={player} />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>🦸 Heroes</h2>
              <HeroesTab player={player} />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>⚔️ Troops</h2>
              <TroopsTab player={player} />
            </div>
            <div>
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>🏅 Achievements</h2>
              <AchievementsTab player={player} />
            </div>
          </div>
        ) : (
          <div className="py-6">
            {activeTab === 'overview' && <OverviewTab player={player} />}
            {activeTab === 'heroes' && <HeroesTab player={player} />}
            {activeTab === 'troops' && <TroopsTab player={player} />}
            {activeTab === 'achievements' && <AchievementsTab player={player} />}
          </div>
        )}

      </div>
    </div>
  );
}

function OverviewTab({ player }) {
  const cards = [
    {
      title: 'Battle Stats', icon: '⚔️',
      rows: [
        { label: 'Attack Wins', value: player.attackWins?.toLocaleString() || '0', icon: '💪' },
        { label: 'Defense Wins', value: player.defenseWins?.toLocaleString() || '0', icon: '🛡️' },
        { label: 'War Stars', value: player.warStars?.toLocaleString() || '0', icon: '⭐' },
        { label: 'War Preference', value: player.warPreference === 'in' ? '✅ In' : '❌ Out' },
      ]
    },
    {
      title: 'Donations', icon: '🎁',
      rows: [
        { label: 'Donated', value: player.donations?.toLocaleString() || '0', icon: '📤' },
        { label: 'Received', value: player.donationsReceived?.toLocaleString() || '0', icon: '📥' },
        { label: 'Ratio', value: player.donationsReceived > 0 ? (player.donations / player.donationsReceived).toFixed(2) : (player.donations > 0 ? '∞' : '-'), icon: '📊' },
      ]
    },
  ];

  if (player.builderHallLevel > 0) {
    cards.push({
      title: 'Builder Base', icon: '🏗️',
      rows: [
        { label: 'Builder Hall', value: `BH${player.builderHallLevel}`, icon: '🏰' },
        { label: 'Trophies', value: player.builderBaseTrophies?.toLocaleString() || '0', icon: '🏆' },
        { label: 'Best', value: player.bestBuilderBaseTrophies?.toLocaleString() || '0', icon: '⭐' },
      ]
    });
  }

  if (player.clanCapitalContributions != null && player.clanCapitalContributions > 0) {
    cards.push({
      title: 'Clan Capital', icon: '🏛️',
      rows: [
        { label: 'Contributions', value: player.clanCapitalContributions.toLocaleString() || '0', icon: '💰' },
      ]
    });
  }

  return (
    <div className="grid md:grid-cols-2 gap-4">
      {cards.map((card, i) => (
        <div key={i} className="rounded-xl overflow-hidden" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
          <div className="flex items-center gap-3 px-4 py-3 border-b" style={{ background: 'var(--surface-100)', borderColor: 'var(--border)' }}>
            <span className="text-lg">{card.icon}</span>
            <h3 className="font-semibold" style={{ color: 'var(--text-primary)' }}>{card.title}</h3>
          </div>
          <div className="p-4 space-y-2">
            {card.rows.map((row, j) => (
              <div key={j} className="flex justify-between items-center py-1">
                <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  {row.icon && <span>{row.icon}</span>}
                  {row.label}
                </span>
                <span className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function HeroesTab({ player }) {
  const heroes = player.heroes || [];
  const equipment = player.heroEquipment || [];

  if (heroes.length === 0) {
    return <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}><span className="text-4xl block mb-2">🦸</span>No heroes unlocked</div>;
  }

  const heroIcons = { 'Barbarian King': '👑', 'Archer Queen': '👸', 'Grand Warden': '🧙', 'Royal Champion': '🏆', 'Minion Prince': '😈' };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Heroes</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroes.map((hero) => {
            const isMaxed = hero.level >= hero.maxLevel;
            const progress = (hero.level / hero.maxLevel) * 100;
            return (
              <div key={hero.name} className={`flex flex-col items-center p-5 rounded-xl text-center transition-all hover:-translate-y-1 ${isMaxed ? 'bg-emerald-500/10 border-emerald-500/30' : ''}`} style={!isMaxed ? { background: 'var(--card-bg)', border: '1px solid var(--border)' } : { border: '1px solid rgba(16,185,129,0.3)' }}>
                <span className="text-4xl mb-3">{heroIcons[hero.name] || '🦸'}</span>
                <span className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{hero.name}</span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-2xl font-bold ${isMaxed ? 'text-emerald-400' : 'text-primary'}`}>Lv.{hero.level}</span>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>/{hero.maxLevel}</span>
                </div>
                <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                  <div className={`h-full rounded-full ${isMaxed ? 'bg-emerald-500' : 'bg-primary'}`} style={{ width: `${progress}%` }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {equipment.length > 0 && (
        <div>
          <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Equipment</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {equipment.map((eq) => {
              const isMaxed = eq.level >= eq.maxLevel;
              return (
                <div key={eq.name} className={`flex flex-col items-center p-3 rounded-lg text-center ${isMaxed ? 'bg-emerald-500/10 border-emerald-500/30' : ''}`} style={!isMaxed ? { background: 'var(--surface-100)', border: '1px solid var(--border)' } : { border: '1px solid rgba(16,185,129,0.3)' }}>
                  <span className="text-[11px] truncate w-full mb-1" style={{ color: 'var(--text-muted)' }}>{eq.name}</span>
                  <span className={`font-bold ${isMaxed ? 'text-emerald-400' : 'text-primary'}`}>Lv.{eq.level}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function TroopsTab({ player }) {
  const troops = player.troops || [];
  const spells = player.spells || [];
  const homeTroops = troops.filter(t => t.village === 'home');
  const builderTroops = troops.filter(t => t.village === 'builderBase');

  return (
    <div className="space-y-8">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-4 px-4 py-3 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Level Status:</span>
        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
          Maxed for TH{player.townHallLevel}
        </div>
        <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
          <span className="w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
          Can upgrade
        </div>
      </div>

      {homeTroops.length > 0 && (
        <Section title="Home Village Troops" count={homeTroops.length} items={homeTroops} />
      )}
      {spells.length > 0 && (
        <Section title="Spells" count={spells.length} items={spells} />
      )}
      {builderTroops.length > 0 && (
        <Section title="Builder Base Troops" count={builderTroops.length} items={builderTroops} />
      )}
    </div>
  );
}

function Section({ title, count, items }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
        {title}
        <span className="text-xs font-normal px-2 py-0.5 rounded-full" style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}>{count}</span>
      </h3>
      <div className="grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 lg:grid-cols-11 gap-2">
        {items.map((item) => {
          const isMaxed = item.level >= item.maxLevel;
          return (
            <div key={item.name} className={`flex flex-col items-center p-2 rounded-lg text-center transition-all hover:-translate-y-0.5 ${isMaxed ? 'bg-emerald-500/10 border-emerald-500/30' : ''}`} style={!isMaxed ? { background: 'var(--surface-100)', border: '1px solid var(--border)' } : { border: '1px solid rgba(16,185,129,0.3)' }}>
              <div className={`w-7 h-7 flex items-center justify-center text-sm font-bold rounded-full text-black mb-1 ${isMaxed ? 'bg-emerald-500' : 'bg-primary'}`}>
                {item.level}
              </div>
              <span className="text-[9px] truncate w-full" style={{ color: 'var(--text-muted)' }}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AchievementsTab({ player }) {
  const achievements = player.achievements || [];
  const completed = achievements.filter(a => a.stars === 3);
  const sorted = [...achievements].sort((a, b) => b.stars - a.stars || (b.value / b.target) - (a.value / a.target));

  return (
    <div className="space-y-6">
      {/* Summary */}
      <div className="flex flex-wrap gap-4">
        {[
          { icon: '✅', value: completed.length, label: 'Completed' },
          { icon: '🔄', value: achievements.length - completed.length, label: 'In Progress' },
          { icon: '⭐', value: achievements.reduce((s, a) => s + a.stars, 0), label: 'Total Stars', highlight: true },
        ].map((s, i) => (
          <div key={i} className={`flex flex-col items-center px-6 py-4 rounded-xl ${s.highlight ? 'bg-primary/10 border-primary/30' : ''}`} style={!s.highlight ? { background: 'var(--surface-100)', border: '1px solid var(--border)' } : { border: '1px solid rgba(245,158,11,0.3)' }}>
            <span className="text-2xl mb-1">{s.icon}</span>
            <span className={`text-2xl font-bold ${s.highlight ? 'text-primary' : ''}`} style={!s.highlight ? { color: 'var(--text-primary)' } : {}}>{s.value}</span>
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* List */}
      <div className="grid md:grid-cols-2 gap-3">
        {sorted.map((a) => {
          const progress = Math.min((a.value / a.target) * 100, 100);
          const isComplete = a.stars === 3;
          return (
            <div key={a.name} className={`flex items-center gap-4 p-4 rounded-xl ${isComplete ? 'bg-emerald-500/5 border-emerald-500/20' : ''}`} style={!isComplete ? { background: 'var(--card-bg)', border: '1px solid var(--border)' } : { border: '1px solid rgba(16,185,129,0.2)' }}>
              <div className="flex gap-0.5 shrink-0">
                {[1, 2, 3].map((star) => (
                  <span key={star} className={`text-sm ${a.stars >= star ? '' : 'opacity-30 grayscale'}`}>⭐</span>
                ))}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm truncate" style={{ color: 'var(--text-primary)' }}>{a.name}</h4>
                <p className="text-[11px] truncate" style={{ color: 'var(--text-muted)' }}>{a.info}</p>
              </div>
              <div className="w-20 shrink-0">
                <div className="h-1.5 rounded-full overflow-hidden mb-1" style={{ background: 'var(--surface-200)' }}>
                  <div className={`h-full rounded-full ${isComplete ? 'bg-emerald-500' : 'bg-primary'}`} style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex justify-center gap-1 text-[10px]" style={{ color: 'var(--text-muted)' }}>
                  <span>{a.value?.toLocaleString()}</span>/<span>{a.target?.toLocaleString()}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
