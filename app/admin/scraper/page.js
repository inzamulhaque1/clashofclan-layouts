'use client';

import { useState, useEffect } from 'react';

export default function ScraperPage() {
  const [levels, setLevels] = useState({ th: [], bh: [] });
  const [selectedType, setSelectedType] = useState('TH');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    fetchLevels();
  }, []);

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

  const startScrape = async () => {
    setLoading(true);
    setMessage({ type: '', text: '' });

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
        setMessage({ type: 'success', text: `Started scraping ${selectedType}${selectedLevel}. Job ID: ${data.jobId}` });
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }

    setLoading(false);
  };

  const scrapeUrl = async () => {
    if (!customUrl) return;

    setLoading(true);
    setMessage({ type: '', text: '' });

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
        setMessage({ type: 'success', text: `Started scraping URL. Job ID: ${data.jobId}` });
        setCustomUrl('');
      } else {
        setMessage({ type: 'error', text: data.error });
      }
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }

    setLoading(false);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Scraper</h1>
        <p style={{ color: 'var(--text-muted)' }}>Scrape new base layouts from external sources.</p>
      </div>

      {message.text && (
        <div className={`p-4 rounded-xl mb-6 ${
          message.type === 'error'
            ? 'bg-red-500/10 border border-red-500/20 text-red-400'
            : 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Scrape by Level */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Scrape by Level</h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Hall Type</label>
                <select
                  value={selectedType}
                  onChange={(e) => {
                    setSelectedType(e.target.value);
                    const lvls = e.target.value === 'TH' ? levels.th : levels.bh;
                    if (lvls.length > 0) setSelectedLevel(lvls[0]);
                  }}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  <option value="TH">Town Hall</option>
                  <option value="BH">Builder Hall</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Level</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  {(selectedType === 'TH' ? levels.th : levels.bh).map(level => (
                    <option key={level} value={level}>{selectedType}{level}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={startScrape}
              disabled={loading || !selectedLevel}
              className="w-full px-6 py-3 bg-primary text-black font-medium rounded-xl disabled:opacity-50 hover:bg-primary/90 transition-colors"
            >
              {loading ? 'Starting...' : `Scrape ${selectedType}${selectedLevel}`}
            </button>
          </div>
        </div>

        {/* Scrape by URL */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Scrape Single URL</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>Base URL</label>
              <input
                type="text"
                value={customUrl}
                onChange={(e) => setCustomUrl(e.target.value)}
                placeholder="https://clashofclans-layouts.com/plans/th_17/war_181.html"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>
            <button
              onClick={scrapeUrl}
              disabled={loading || !customUrl}
              className="w-full px-6 py-3 font-medium rounded-xl disabled:opacity-50 transition-colors"
              style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
            >
              {loading ? 'Scraping...' : 'Scrape URL'}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Scrape Buttons */}
      <div className="mt-6 rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
        <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Quick Scrape</h2>
        <div className="flex flex-wrap gap-3">
          {[18, 17, 16, 15, 14, 13].map(level => (
            <button
              key={level}
              onClick={() => {
                setSelectedType('TH');
                setSelectedLevel(level.toString());
                setTimeout(startScrape, 100);
              }}
              disabled={loading}
              className="px-4 py-2 rounded-xl text-sm font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 disabled:opacity-50 transition-colors"
            >
              Scrape TH{level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
