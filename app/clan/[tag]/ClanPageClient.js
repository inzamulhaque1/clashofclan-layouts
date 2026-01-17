'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClanPageClient({ tag }) {
  const [clan, setClan] = useState(null);
  const [warLog, setWarLog] = useState([]);
  const [raids, setRaids] = useState([]);
  const [currentWar, setCurrentWar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    fetchClanData();
  }, [tag]);

  async function fetchClanData() {
    setLoading(true);
    setError(null);

    try {
      // Fetch all data in parallel
      const [clanRes, warLogRes, raidsRes, warRes] = await Promise.allSettled([
        fetch(`/api/coc/clans/${tag}?include=members`),
        fetch(`/api/coc/warlog/${tag}?limit=10`),
        fetch(`/api/coc/raids/${tag}?limit=5`),
        fetch(`/api/coc/war/${tag}?cwl=true`),
      ]);

      // Process clan data
      if (clanRes.status === 'fulfilled') {
        const clanData = await clanRes.value.json();
        if (clanData.success) {
          setClan(clanData.clan);
        } else {
          throw new Error(clanData.error || 'Clan not found');
        }
      }

      // Process war log
      if (warLogRes.status === 'fulfilled') {
        const warLogData = await warLogRes.value.json();
        if (warLogData.success) {
          setWarLog(warLogData.wars || []);
        }
      }

      // Process raids
      if (raidsRes.status === 'fulfilled') {
        const raidsData = await raidsRes.value.json();
        if (raidsData.success) {
          setRaids(raidsData.seasons || []);
        }
      }

      // Process current war
      if (warRes.status === 'fulfilled') {
        const warData = await warRes.value.json();
        if (warData.success && warData.currentWar) {
          setCurrentWar(warData.currentWar);
        }
      }

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-32 bg-surface-100 rounded-2xl"></div>
        <div className="h-64 bg-surface-100 rounded-2xl"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl mb-4 block">❌</span>
        <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
          Clan Not Found
        </h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>{error}</p>
        <Link href="/leaderboards" className="btn-primary px-6 py-3">
          Browse Leaderboards
        </Link>
      </div>
    );
  }

  if (!clan) return null;

  return (
    <div className="space-y-8">
      {/* Clan Header */}
      <div className="clan-header-card">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {clan.badgeUrls?.large && (
            <img
              src={clan.badgeUrls.large}
              alt={clan.name}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          )}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              {clan.name}
            </h1>
            <p className="text-lg font-mono mb-3" style={{ color: 'var(--text-muted)' }}>
              {clan.tag}
            </p>
            {clan.description && (
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                {clan.description}
              </p>
            )}
            {/* Labels */}
            {clan.labels && clan.labels.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {clan.labels.map((label) => (
                  <div
                    key={label.id}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                  >
                    {label.iconUrls?.small && (
                      <img src={label.iconUrls.small} alt="" className="w-4 h-4" />
                    )}
                    <span>{label.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatBox label="Clan Points" value={clan.clanPoints?.toLocaleString()} icon="🏆" />
            <StatBox label="Clan Level" value={clan.clanLevel} icon="⭐" />
            <StatBox label="Members" value={`${clan.members}/50`} icon="👥" />
            <StatBox label="War Wins" value={clan.warWins?.toLocaleString()} icon="⚔️" />
          </div>
        </div>
      </div>

      {/* War Status Banner */}
      {currentWar && currentWar.state !== 'notInWar' && (
        <WarStatusBanner war={currentWar} clanTag={clan.tag} />
      )}

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b pb-2" style={{ borderColor: 'var(--border)' }}>
        {[
          { id: 'overview', label: 'Overview', icon: '📊' },
          { id: 'members', label: 'Members', icon: '👥' },
          { id: 'wars', label: 'War Log', icon: '⚔️' },
          { id: 'raids', label: 'Raid Weekends', icon: '🏛️' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`clan-tab ${activeTab === tab.id ? 'clan-tab-active' : ''}`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <OverviewTab clan={clan} />
      )}

      {activeTab === 'members' && (
        <MembersTab members={clan.memberList || []} />
      )}

      {activeTab === 'wars' && (
        <WarLogTab warLog={warLog} />
      )}

      {activeTab === 'raids' && (
        <RaidsTab raids={raids} />
      )}
    </div>
  );
}

function StatBox({ label, value, icon }) {
  return (
    <div className="text-center p-3 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
      <div className="text-xl mb-1">{icon}</div>
      <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{value || '-'}</div>
      <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</div>
    </div>
  );
}

function WarStatusBanner({ war, clanTag }) {
  const isOurClan = war.clan?.tag === clanTag;
  const ourClan = isOurClan ? war.clan : war.opponent;
  const enemyClan = isOurClan ? war.opponent : war.clan;

  const statusColors = {
    preparation: { bg: 'rgba(245, 158, 11, 0.15)', text: 'text-primary', label: 'Preparation' },
    inWar: { bg: 'rgba(239, 68, 68, 0.15)', text: 'text-red-400', label: 'Battle Day' },
    warEnded: { bg: 'rgba(16, 185, 129, 0.15)', text: 'text-emerald-400', label: 'War Ended' },
  };

  const status = statusColors[war.state] || statusColors.preparation;

  return (
    <div className="p-6 rounded-2xl" style={{ background: status.bg, border: '1px solid var(--border)' }}>
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${status.text}`} style={{ background: 'rgba(0,0,0,0.2)' }}>
            {status.label}
          </span>
          <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {war.teamSize}v{war.teamSize} War
          </span>
        </div>

        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
              {ourClan?.stars || 0}
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Our Stars</div>
          </div>
          <div className="text-2xl">⚔️</div>
          <div className="text-center">
            <div className="font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
              {enemyClan?.stars || 0}
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Enemy Stars</div>
          </div>
        </div>

        <div className="text-right">
          <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
            vs {enemyClan?.name}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {enemyClan?.tag}
          </div>
        </div>
      </div>
    </div>
  );
}

function OverviewTab({ clan }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {/* Clan Info */}
      <div className="card p-6">
        <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Clan Information</h3>
        <div className="space-y-3">
          <InfoRow label="Location" value={clan.location?.name || 'International'} />
          <InfoRow label="Type" value={clan.type === 'open' ? 'Open' : clan.type === 'inviteOnly' ? 'Invite Only' : 'Closed'} />
          <InfoRow label="War Frequency" value={clan.warFrequency || 'Unknown'} />
          <InfoRow label="Required Trophies" value={clan.requiredTrophies?.toLocaleString() || '0'} />
          <InfoRow label="Required TH" value={clan.requiredTownhallLevel ? `TH${clan.requiredTownhallLevel}+` : 'Any'} />
        </div>
      </div>

      {/* War Stats */}
      <div className="card p-6">
        <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>War Statistics</h3>
        <div className="space-y-3">
          <InfoRow label="War Wins" value={clan.warWins?.toLocaleString() || '0'} />
          <InfoRow label="War Losses" value={clan.warLosses?.toLocaleString() || '0'} />
          <InfoRow label="War Ties" value={clan.warTies?.toLocaleString() || '0'} />
          <InfoRow label="Win Streak" value={clan.warWinStreak || '0'} />
          <InfoRow label="War League" value={clan.warLeague?.name || 'Unranked'} />
        </div>
      </div>

      {/* Clan Capital */}
      {clan.clanCapital && (
        <div className="card p-6 md:col-span-2">
          <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Clan Capital</h3>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-4xl">🏛️</div>
            <div>
              <div className="text-2xl font-bold text-primary">Level {clan.clanCapital.capitalHallLevel}</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Capital Hall</div>
            </div>
          </div>
          {clan.clanCapital.districts && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {clan.clanCapital.districts.map((district) => (
                <div key={district.id} className="p-3 rounded-lg text-center" style={{ background: 'var(--surface-100)' }}>
                  <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{district.name}</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Level {district.districtHallLevel}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</span>
      <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{value}</span>
    </div>
  );
}

function MembersTab({ members }) {
  const sortedMembers = [...members].sort((a, b) => a.clanRank - b.clanRank);

  return (
    <div className="space-y-2">
      {sortedMembers.map((member) => (
        <Link
          key={member.tag}
          href={`/player/${encodeURIComponent(member.tag)}`}
          className="flex items-center gap-4 p-4 rounded-xl transition-all hover:scale-[1.01]"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
        >
          <div className="w-8 text-center font-mono text-sm" style={{ color: 'var(--text-muted)' }}>
            #{member.clanRank}
          </div>
          {member.league?.iconUrls?.tiny && (
            <img src={member.league.iconUrls.tiny} alt="" className="w-8 h-8" />
          )}
          <div className="flex-1 min-w-0">
            <div className="font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
              {member.name}
            </div>
            <div className="text-xs capitalize" style={{ color: 'var(--text-muted)' }}>
              {member.role} • TH{member.townHallLevel}
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium text-primary">{member.trophies?.toLocaleString()} 🏆</div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
              {member.donations || 0} donated
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function WarLogTab({ warLog }) {
  if (!warLog.length) {
    return (
      <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
        <span className="text-4xl mb-2 block">🔒</span>
        <p>War log is private or no wars recorded</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {warLog.map((war, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 rounded-xl"
          style={{
            background: war.result === 'win' ? 'rgba(16, 185, 129, 0.1)' :
                       war.result === 'lose' ? 'rgba(239, 68, 68, 0.1)' : 'var(--card-bg)',
            border: '1px solid var(--border)'
          }}
        >
          <div className="flex items-center gap-4">
            <div className={`text-2xl ${war.result === 'win' ? 'text-emerald-400' : war.result === 'lose' ? 'text-red-400' : 'text-gray-400'}`}>
              {war.result === 'win' ? '✅' : war.result === 'lose' ? '❌' : '➖'}
            </div>
            <div>
              <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                vs {war.opponent?.name || 'Unknown'}
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {war.teamSize}v{war.teamSize} • {new Date(war.endTime).toLocaleDateString()}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-bold" style={{ color: 'var(--text-primary)' }}>
              {war.clan?.stars || 0} - {war.opponent?.stars || 0}
            </div>
            <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Stars</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RaidsTab({ raids }) {
  if (!raids.length) {
    return (
      <div className="text-center py-12" style={{ color: 'var(--text-muted)' }}>
        <span className="text-4xl mb-2 block">🏛️</span>
        <p>No raid weekend data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {raids.map((raid, index) => (
        <div
          key={index}
          className="p-6 rounded-xl"
          style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold" style={{ color: 'var(--text-primary)' }}>
                Raid Weekend
              </div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>
                {new Date(raid.startTime).toLocaleDateString()} - {new Date(raid.endTime).toLocaleDateString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary">{raid.capitalTotalLoot?.toLocaleString()}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Total Loot</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{raid.raidsCompleted || 0}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Raids</div>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{raid.totalAttacks || 0}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Attacks</div>
            </div>
            <div className="text-center p-3 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{raid.offensiveReward || 0}</div>
              <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Raid Medals</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
