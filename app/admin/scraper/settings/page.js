'use client';

import { useState } from 'react';

export default function ScraperSettingsPage() {
  const [settings, setSettings] = useState({
    autoScrape: false,
    scrapeInterval: 24,
    maxConcurrent: 3,
    downloadImages: true,
    retryFailed: true,
    maxRetries: 3,
  });
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: Save to API
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Scraper Settings</h1>
        <p style={{ color: 'var(--text-muted)' }}>Configure scraping behavior and automation.</p>
      </div>

      <div className="space-y-6">
        {/* Automation */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Automation</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Auto-scrape</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Automatically scrape new bases periodically</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, autoScrape: !settings.autoScrape })}
                className={`w-12 h-6 rounded-full relative transition-colors ${settings.autoScrape ? 'bg-primary' : ''}`}
                style={{ background: settings.autoScrape ? undefined : 'var(--surface-100)' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full transition-transform"
                  style={{ left: settings.autoScrape ? '26px' : '4px' }}
                ></span>
              </button>
            </div>

            {settings.autoScrape && (
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                  Scrape Interval (hours)
                </label>
                <select
                  value={settings.scrapeInterval}
                  onChange={(e) => setSettings({ ...settings, scrapeInterval: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  <option value={6}>Every 6 hours</option>
                  <option value={12}>Every 12 hours</option>
                  <option value={24}>Every 24 hours</option>
                  <option value={48}>Every 48 hours</option>
                  <option value={168}>Weekly</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Performance */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Performance</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                Max Concurrent Scrapes
              </label>
              <select
                value={settings.maxConcurrent}
                onChange={(e) => setSettings({ ...settings, maxConcurrent: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                <option value={1}>1 at a time</option>
                <option value={2}>2 concurrent</option>
                <option value={3}>3 concurrent</option>
                <option value={5}>5 concurrent</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Download Images</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Save base images locally</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, downloadImages: !settings.downloadImages })}
                className={`w-12 h-6 rounded-full relative transition-colors ${settings.downloadImages ? 'bg-primary' : ''}`}
                style={{ background: settings.downloadImages ? undefined : 'var(--surface-100)' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full transition-transform"
                  style={{ left: settings.downloadImages ? '26px' : '4px' }}
                ></span>
              </button>
            </div>
          </div>
        </div>

        {/* Error Handling */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Error Handling</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Retry Failed</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Automatically retry failed scrapes</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, retryFailed: !settings.retryFailed })}
                className={`w-12 h-6 rounded-full relative transition-colors ${settings.retryFailed ? 'bg-primary' : ''}`}
                style={{ background: settings.retryFailed ? undefined : 'var(--surface-100)' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full transition-transform"
                  style={{ left: settings.retryFailed ? '26px' : '4px' }}
                ></span>
              </button>
            </div>

            {settings.retryFailed && (
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-muted)' }}>
                  Max Retries
                </label>
                <select
                  value={settings.maxRetries}
                  onChange={(e) => setSettings({ ...settings, maxRetries: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  <option value={1}>1 retry</option>
                  <option value={2}>2 retries</option>
                  <option value={3}>3 retries</option>
                  <option value={5}>5 retries</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors"
          >
            {saved ? 'Saved!' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}
