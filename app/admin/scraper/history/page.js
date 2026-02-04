'use client';

import { useState, useEffect } from 'react';

export default function ScraperHistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await fetch('/api/scrape?action=jobs');
      const data = await res.json();
      // Filter completed and failed jobs as history
      const completedJobs = (data.jobs || []).filter(j =>
        j.status === 'completed' || j.status === 'failed'
      );
      setHistory(completedJobs);
    } catch (err) {
      console.error('Failed to fetch history:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Scrape History</h1>
        <p style={{ color: 'var(--text-muted)' }}>View past scraping jobs and their results.</p>
      </div>

      {history.length === 0 ? (
        <div className="rounded-2xl p-12 text-center" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <svg className="w-16 h-16 mx-auto mb-4 opacity-50" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>No history yet</h2>
          <p style={{ color: 'var(--text-muted)' }}>Completed scraping jobs will appear here.</p>
        </div>
      ) : (
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <table className="w-full">
            <thead style={{ background: 'var(--surface-100)' }}>
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Job</th>
                <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Date</th>
                <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Bases</th>
                <th className="px-6 py-4 text-left text-sm font-medium" style={{ color: 'var(--text-muted)' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {history.map((job, index) => (
                <tr key={job.id || index} style={{ borderTop: '1px solid var(--border)' }}>
                  <td className="px-6 py-4">
                    <div className="font-medium" style={{ color: 'var(--text-primary)' }}>{job.hallType}{job.level} Scrape</div>
                    <div className="text-sm" style={{ color: 'var(--text-muted)' }}>ID: {job.id?.slice(0, 8) || 'N/A'}</div>
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                    {new Date(job.startedAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-sm" style={{ color: 'var(--text-primary)' }}>
                    {job.results?.length || job.scraped || 0}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium ${
                      job.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
