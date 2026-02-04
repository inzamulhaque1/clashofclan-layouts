'use client';

import { useState, useEffect } from 'react';

export default function PinterestSettingsPage() {
  const [settings, setSettings] = useState({
    appId: '',
    appSecret: '',
    accessToken: '',
    defaultBoardId: '',
    defaultBoardName: '',
    automationEnabled: false,
    dailyPinLimit: 10,
    postingTimes: ['09:00', '12:00', '15:00', '18:00', '21:00'],
    defaultHashtags: ['clashofclans', 'coc', 'clashbase', 'cocbase', 'clashlayouts', 'mobilegaming'],
    siteUrl: 'https://game365hub.com',
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showSecrets, setShowSecrets] = useState(false);
  const [newHashtag, setNewHashtag] = useState('');
  const [newTime, setNewTime] = useState('');
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/pinterest/settings');
      const data = await res.json();
      if (data.settings) {
        setSettings({ ...settings, ...data.settings });
      }
    } catch (err) {
      console.error('Failed to fetch settings:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch('/api/pinterest/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
      }
    } catch (err) {
      console.error('Failed to save settings:', err);
    } finally {
      setSaving(false);
    }
  };

  const addHashtag = () => {
    if (newHashtag && !settings.defaultHashtags.includes(newHashtag.replace('#', ''))) {
      setSettings({
        ...settings,
        defaultHashtags: [...settings.defaultHashtags, newHashtag.replace('#', '')]
      });
      setNewHashtag('');
    }
  };

  const removeHashtag = (tag) => {
    setSettings({
      ...settings,
      defaultHashtags: settings.defaultHashtags.filter(t => t !== tag)
    });
  };

  const addPostingTime = () => {
    if (newTime && !settings.postingTimes.includes(newTime)) {
      const times = [...settings.postingTimes, newTime].sort();
      setSettings({ ...settings, postingTimes: times });
      setNewTime('');
    }
  };

  const removePostingTime = (time) => {
    setSettings({
      ...settings,
      postingTimes: settings.postingTimes.filter(t => t !== time)
    });
  };

  const testConnection = async () => {
    setTesting(true);
    setTestResult(null);
    try {
      const res = await fetch('/api/pinterest/test', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          accessToken: settings.accessToken
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setTestResult({ success: true, message: `Connected as ${data.username}` });
        setBoards(data.boards || []);
      } else {
        setTestResult({ success: false, message: data.error });
      }
    } catch (err) {
      setTestResult({ success: false, message: err.message });
    } finally {
      setTesting(false);
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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Pinterest Settings</h1>
        <p style={{ color: 'var(--text-muted)' }}>Configure your Pinterest API and automation settings.</p>
      </div>

      <div className="space-y-6">
        {/* API Credentials */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Pinterest API</h2>
            <a
              href="https://developers.pinterest.com/apps/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Get API Keys
            </a>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>App ID</label>
              <input
                type="text"
                value={settings.appId}
                onChange={(e) => setSettings({ ...settings, appId: e.target.value })}
                placeholder="Enter your Pinterest App ID"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>App Secret</label>
              <div className="relative">
                <input
                  type={showSecrets ? 'text' : 'password'}
                  value={settings.appSecret}
                  onChange={(e) => setSettings({ ...settings, appSecret: e.target.value })}
                  placeholder="Enter your Pinterest App Secret"
                  className="w-full px-4 py-3 pr-12 rounded-xl focus:outline-none focus:border-primary"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                />
                <button
                  type="button"
                  onClick={() => setShowSecrets(!showSecrets)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {showSecrets ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    ) : (
                      <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </>
                    )}
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Access Token</label>
              <input
                type={showSecrets ? 'text' : 'password'}
                value={settings.accessToken}
                onChange={(e) => setSettings({ ...settings, accessToken: e.target.value })}
                placeholder="Enter your Pinterest Access Token"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Default Board Name</label>
              <input
                type="text"
                value={settings.defaultBoardName}
                onChange={(e) => setSettings({ ...settings, defaultBoardName: e.target.value })}
                placeholder="e.g., Clash of Clans Bases"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>

            {/* Boards from API */}
            {boards.length > 0 && (
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Select Board</label>
                <select
                  value={settings.defaultBoardId}
                  onChange={(e) => {
                    const board = boards.find(b => b.id === e.target.value);
                    setSettings({
                      ...settings,
                      defaultBoardId: e.target.value,
                      defaultBoardName: board?.name || ''
                    });
                  }}
                  className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  <option value="">Select a board...</option>
                  {boards.map(board => (
                    <option key={board.id} value={board.id}>{board.name}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Test Connection Button */}
            <div className="flex items-center gap-4">
              <button
                onClick={testConnection}
                disabled={testing || !settings.accessToken}
                className="px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-50"
                style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
              >
                {testing ? 'Testing...' : 'Test Connection'}
              </button>
              {testResult && (
                <span className={`text-sm ${testResult.success ? 'text-emerald-400' : 'text-red-400'}`}>
                  {testResult.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Automation Settings */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Automation</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Enable Auto-posting</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Automatically post scheduled pins at set times</div>
              </div>
              <button
                onClick={() => setSettings({ ...settings, automationEnabled: !settings.automationEnabled })}
                className={`w-12 h-6 rounded-full relative transition-colors ${settings.automationEnabled ? 'bg-primary' : ''}`}
                style={{ background: settings.automationEnabled ? undefined : 'var(--surface-100)' }}
              >
                <span
                  className="absolute top-1 w-4 h-4 bg-white rounded-full transition-transform"
                  style={{ left: settings.automationEnabled ? '26px' : '4px' }}
                ></span>
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Daily Pin Limit</label>
              <select
                value={settings.dailyPinLimit}
                onChange={(e) => setSettings({ ...settings, dailyPinLimit: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              >
                {[5, 10, 15, 20, 25].map(n => (
                  <option key={n} value={n}>{n} pins per day</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Site URL</label>
              <input
                type="url"
                value={settings.siteUrl}
                onChange={(e) => setSettings({ ...settings, siteUrl: e.target.value })}
                placeholder="https://yourdomain.com"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Used for generating destination URLs</p>
            </div>
          </div>
        </div>

        {/* Posting Times */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Posting Times</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {settings.postingTimes.map(time => (
              <span
                key={time}
                className="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 bg-primary/10 text-primary"
              >
                {time}
                <button onClick={() => removePostingTime(time)} className="hover:text-red-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="time"
              value={newTime}
              onChange={(e) => setNewTime(e.target.value)}
              className="px-4 py-2 rounded-xl focus:outline-none focus:border-primary"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            />
            <button
              onClick={addPostingTime}
              className="px-4 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors"
            >
              Add Time
            </button>
          </div>
        </div>

        {/* Default Hashtags */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Default Hashtags</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {settings.defaultHashtags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2"
                style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
              >
                #{tag}
                <button onClick={() => removeHashtag(tag)} className="hover:text-red-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newHashtag}
              onChange={(e) => setNewHashtag(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addHashtag()}
              placeholder="Add hashtag..."
              className="flex-1 px-4 py-2 rounded-xl focus:outline-none focus:border-primary"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            />
            <button
              onClick={addHashtag}
              className="px-4 py-2 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors"
            >
              Add
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-3 bg-primary text-black font-medium rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : saved ? 'Saved!' : 'Save Settings'}
          </button>
        </div>
      </div>
    </div>
  );
}
