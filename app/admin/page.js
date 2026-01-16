'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

export default function AdminPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState('scrape');
  const router = useRouter();
  const [levels, setLevels] = useState({ th: [], bh: [] });
  const [selectedType, setSelectedType] = useState('TH');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [jobs, setJobs] = useState([]);
  const [bases, setBases] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchLevels();
    fetchJobs();
    fetchBases();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const runningJobs = jobs.filter(j => j.status === 'running' || j.status === 'fetching_list' || j.status === 'scraping');
      if (runningJobs.length > 0) {
        fetchJobs();
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [jobs]);

  const fetchLevels = async () => {
    try {
      const res = await fetch('/api/scrape?action=levels');
      const data = await res.json();
      setLevels(data);
      if (data.th?.length > 0) {
        setSelectedLevel(data.th[0]);
      }
    } catch (err) {
      console.error('Failed to fetch levels:', err);
    }
  };

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/scrape?action=jobs');
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
    }
  };

  const fetchBases = async () => {
    try {
      const res = await fetch('/api/bases');
      const data = await res.json();
      setBases(data.bases || []);
      setStats(data.stats);
    } catch (err) {
      console.error('Failed to fetch bases:', err);
    }
  };

  const startScrape = async () => {
    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hallType: selectedType,
          level: parseInt(selectedLevel, 10),
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(`Started scraping ${selectedType}${selectedLevel}. Job ID: ${data.jobId}`);
        fetchJobs();
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`Failed to start scrape: ${err.message}`);
    }

    setLoading(false);
  };

  const scrapeUrl = async () => {
    if (!customUrl) return;

    setLoading(true);
    setMessage('');

    try {
      const res = await fetch('/api/scrape', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          hallType: 'TH',
          level: 0,
          url: customUrl,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMessage(`Started scraping URL. Job ID: ${data.jobId}`);
        setCustomUrl('');
        fetchJobs();
      } else {
        setMessage(`Error: ${data.error}`);
      }
    } catch (err) {
      setMessage(`Failed to scrape URL: ${err.message}`);
    }

    setLoading(false);
  };

  const deleteBase = async (copyLink) => {
    if (!confirm('Delete this base?')) return;

    try {
      const res = await fetch('/api/bases', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ copyLink }),
      });

      if (res.ok) {
        fetchBases();
      }
    } catch (err) {
      console.error('Failed to delete base:', err);
    }
  };

  const runningJobsCount = jobs.filter(j => j.status === 'running' || j.status === 'scraping').length;

  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/login' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Admin <span className="text-primary">Dashboard</span>
          </h1>
          <p className="text-muted">Manage scrapers, jobs, and base data</p>
        </div>
        <div className="flex items-center gap-4">
          {session?.user && (
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-surface-100">
              {session.user.image && (
                <img
                  src={session.user.image}
                  alt={session.user.name}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="hidden sm:block">
                <div className="text-sm font-medium">{session.user.name}</div>
                <div className="text-xs text-muted">{session.user.email}</div>
              </div>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
        <button
          onClick={() => setActiveTab('scrape')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeTab === 'scrape'
              ? 'bg-primary text-black'
              : 'bg-surface-100 text-muted hover:text-white hover:bg-surface-200'
          }`}
        >
          Scraper
        </button>
        <button
          onClick={() => setActiveTab('jobs')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeTab === 'jobs'
              ? 'bg-primary text-black'
              : 'bg-surface-100 text-muted hover:text-white hover:bg-surface-200'
          }`}
        >
          Jobs
          {runningJobsCount > 0 && (
            <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary/20 text-primary rounded">
              {runningJobsCount}
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('bases')}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
            activeTab === 'bases'
              ? 'bg-primary text-black'
              : 'bg-surface-100 text-muted hover:text-white hover:bg-surface-200'
          }`}
        >
          Bases
          <span className="ml-2 text-muted">{bases.length}</span>
        </button>
      </div>

      {/* Message */}
      {message && (
        <div className={`p-4 rounded-xl mb-6 ${
          message.includes('Error') || message.includes('Failed')
            ? 'bg-red-500/10 border border-red-500/20 text-red-400'
            : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
        }`}>
          {message}
        </div>
      )}

      {/* Scrape Tab */}
      {activeTab === 'scrape' && (
        <div className="space-y-6">
          {/* Scrape by Level */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-4">Scrape by Level</h2>

            <div className="flex flex-wrap gap-3 mb-4">
              <select
                value={selectedType}
                onChange={(e) => {
                  setSelectedType(e.target.value);
                  const lvls = e.target.value === 'TH' ? levels.th : levels.bh;
                  if (lvls.length > 0) setSelectedLevel(lvls[0]);
                }}
                className="px-4 py-2.5 bg-surface-100 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
              >
                <option value="TH">Town Hall</option>
                <option value="BH">Builder Hall</option>
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-2.5 bg-surface-100 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary"
              >
                {(selectedType === 'TH' ? levels.th : levels.bh).map(level => (
                  <option key={level} value={level}>{selectedType}{level}</option>
                ))}
              </select>

              <button
                onClick={startScrape}
                disabled={loading || !selectedLevel}
                className="btn-primary px-6 py-2.5 disabled:opacity-50"
              >
                {loading ? 'Starting...' : `Scrape ${selectedType}${selectedLevel}`}
              </button>
            </div>

            <p className="text-sm text-muted">
              This will scrape all bases from the selected level.
            </p>
          </div>

          {/* Scrape by URL */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-4">Scrape Single URL</h2>

            <div className="flex gap-3 mb-4">
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://clashofclans-layouts.com/plans/th_17/war_181.html"
                className="flex-1 px-4 py-2.5 bg-surface-100 border border-white/10 rounded-xl text-white placeholder-muted focus:outline-none focus:border-primary"
              />
              <button
                onClick={scrapeUrl}
                disabled={loading || !customUrl}
                className="btn-secondary px-6 py-2.5 disabled:opacity-50"
              >
                Scrape URL
              </button>
            </div>

            <p className="text-sm text-muted">
              Paste a single base page URL to scrape just that base.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-2">
              {[18, 17, 16, 15].map(level => (
                <button
                  key={level}
                  onClick={() => {
                    setSelectedType('TH');
                    setSelectedLevel(level);
                    setTimeout(startScrape, 100);
                  }}
                  disabled={loading}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-xl text-sm font-medium hover:bg-primary/20 transition-colors disabled:opacity-50"
                >
                  Scrape TH{level}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Jobs Tab */}
      {activeTab === 'jobs' && (
        <div className="space-y-4">
          {jobs.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold mb-2">No jobs yet</h2>
              <p className="text-muted">Start one from the Scraper tab.</p>
            </div>
          ) : (
            jobs.map((job) => (
              <div
                key={job.id}
                className={`card p-6 border-l-4 ${
                  job.status === 'completed' ? 'border-l-emerald-500' :
                  job.status === 'failed' ? 'border-l-red-500' :
                  'border-l-primary'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-semibold">
                      {job.hallType}{job.level} Scrape
                    </h3>
                    <p className="text-sm text-muted">
                      Started: {new Date(job.startedAt).toLocaleString()}
                    </p>
                  </div>
                  <span className={`badge ${
                    job.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' :
                    job.status === 'failed' ? 'bg-red-500/10 text-red-400' :
                    'bg-primary/10 text-primary'
                  }`}>
                    {job.status}
                  </span>
                </div>

                {(job.status === 'scraping' || job.status === 'running') && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted">Progress</span>
                      <span>{job.scraped}/{job.total} ({job.progress}%)</span>
                    </div>
                    <div className="h-2 bg-surface-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300"
                        style={{ width: `${job.progress}%` }}
                      />
                    </div>
                  </div>
                )}

                {job.status === 'completed' && (
                  <p className="text-emerald-400 text-sm">
                    Scraped {job.results?.length || 0} bases successfully
                  </p>
                )}

                {job.status === 'failed' && (
                  <p className="text-red-400 text-sm">Error: {job.error}</p>
                )}
              </div>
            ))
          )}
        </div>
      )}

      {/* Bases Tab */}
      {activeTab === 'bases' && (
        <div>
          {/* Stats */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="card p-4">
                <div className="text-2xl font-bold text-primary">{stats.total}</div>
                <div className="text-sm text-muted">Total Bases</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-bold text-red-400">{stats.byType?.war || 0}</div>
                <div className="text-sm text-muted">War Bases</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-bold text-emerald-400">{stats.byType?.farm || 0}</div>
                <div className="text-sm text-muted">Farm Bases</div>
              </div>
              <div className="card p-4">
                <div className="text-2xl font-bold text-amber-400">{stats.byType?.trophy || 0}</div>
                <div className="text-sm text-muted">Trophy Bases</div>
              </div>
            </div>
          )}

          {/* Bases List */}
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-surface-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted">Base</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted">Type</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted">Copy Link</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-muted">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {bases.slice(0, 50).map((base, index) => (
                    <tr key={index} className="hover:bg-surface-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium">{base.hallType}{base.hallLevel}</div>
                        <div className="text-sm text-muted">#{base.baseNumber}</div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`badge ${
                          base.baseType === 'war' ? 'badge-war' :
                          base.baseType === 'farm' ? 'badge-farm' :
                          'badge-trophy'
                        }`}>
                          {base.baseType}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {base.copyLink ? (
                          <span className="text-emerald-400 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Yes
                          </span>
                        ) : (
                          <span className="text-red-400 text-sm flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => deleteBase(base.copyLink)}
                          className="text-red-400 hover:text-red-300 text-sm transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {bases.length > 50 && (
              <div className="p-4 text-center text-muted text-sm border-t border-white/5">
                Showing 50 of {bases.length} bases
              </div>
            )}

            {bases.length === 0 && (
              <div className="p-12 text-center text-muted">
                No bases yet. Start scraping to add bases.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
