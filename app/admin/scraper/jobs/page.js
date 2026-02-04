'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ScraperJobsPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
    const interval = setInterval(fetchJobs, 3000);
    return () => clearInterval(interval);
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch('/api/scrape?action=jobs');
      const data = await res.json();
      setJobs(data.jobs || []);
    } catch (err) {
      console.error('Failed to fetch jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const runningJobs = jobs.filter(j =>
    j.status === 'running' || j.status === 'scraping' || j.status === 'fetching_list'
  );
  const completedJobs = jobs.filter(j => j.status === 'completed');
  const failedJobs = jobs.filter(j => j.status === 'failed');

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Active Jobs</h1>
          <p style={{ color: 'var(--text-muted)' }}>Monitor running scraping jobs.</p>
        </div>
        <Link
          href="/admin/scraper"
          className="px-4 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors"
        >
          + New Scrape
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-primary">{runningJobs.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Running</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-emerald-400">{completedJobs.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Completed</div>
        </div>
        <div className="rounded-xl p-4" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="text-2xl font-bold text-red-400">{failedJobs.length}</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Failed</div>
        </div>
      </div>

      {jobs.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
          <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No jobs yet</h2>
          <p style={{ color: 'var(--text-muted)' }}>Start a scraping job to see it here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div
              key={job.id}
              className={`rounded-2xl p-6 ${
                job.status === 'completed' ? 'border-emerald-500/20' :
                job.status === 'failed' ? 'border-red-500/20' :
                'border-primary/20'
              }`}
              style={{ background: 'var(--bg-secondary)', borderWidth: '1px', borderStyle: 'solid' }}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {job.hallType}{job.level} Scrape
                  </h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Started: {new Date(job.startedAt).toLocaleString()}
                  </p>
                </div>
                <span className={`px-3 py-1 rounded-lg text-sm font-medium ${
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
                    <span style={{ color: 'var(--text-muted)' }}>Progress</span>
                    <span style={{ color: 'var(--text-primary)' }}>{job.scraped}/{job.total} ({job.progress}%)</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--surface-100)' }}>
                    <div
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    />
                  </div>
                </div>
              )}

              {job.status === 'completed' && (
                <p className="text-emerald-400 text-sm">
                  Successfully scraped {job.results?.length || job.scraped || 0} bases
                </p>
              )}

              {job.status === 'failed' && (
                <p className="text-red-400 text-sm">Error: {job.error}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
