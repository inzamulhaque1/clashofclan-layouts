'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PinterestSettingsContent() {
  const searchParams = useSearchParams();
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
    hasCredentials: false,
    accountUsername: '',
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
  const [connecting, setConnecting] = useState(false);
  const [oauthMessage, setOauthMessage] = useState(null);

  useEffect(() => {
    fetchSettings();

    // Check for OAuth callback messages
    const success = searchParams.get('success');
    const error = searchParams.get('error');

    if (success) {
      setOauthMessage({ type: 'success', message: success });
      // Clean URL
      window.history.replaceState({}, '', '/admin/pinterest/settings');
    } else if (error) {
      setOauthMessage({ type: 'error', message: error });
      window.history.replaceState({}, '', '/admin/pinterest/settings');
    }
  }, [searchParams]);

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

  const handleConnectPinterest = async () => {
    // First save app credentials
    if (!settings.appId || !settings.appSecret) {
      setOauthMessage({ type: 'error', message: 'Please enter App ID and App Secret first' });
      return;
    }

    setConnecting(true);
    try {
      // Save credentials first
      await fetch('/api/pinterest/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          appId: settings.appId,
          appSecret: settings.appSecret
        }),
      });

      // Get OAuth URL
      const res = await fetch('/api/pinterest/oauth');
      const data = await res.json();

      if (data.authUrl) {
        // Redirect to Pinterest authorization
        window.location.href = data.authUrl;
      } else {
        setOauthMessage({ type: 'error', message: data.error || 'Failed to generate auth URL' });
      }
    } catch (err) {
      setOauthMessage({ type: 'error', message: err.message });
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    if (!confirm('Disconnect from Pinterest? You will need to reconnect to post pins.')) return;

    try {
      const res = await fetch('/api/pinterest/oauth', { method: 'DELETE' });
      if (res.ok) {
        setSettings({
          ...settings,
          hasCredentials: false,
          accountUsername: '',
          accessToken: ''
        });
        setOauthMessage({ type: 'success', message: 'Disconnected from Pinterest' });
        setBoards([]);
      }
    } catch (err) {
      setOauthMessage({ type: 'error', message: err.message });
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

      {/* OAuth Message */}
      {oauthMessage && (
        <div className={`mb-6 p-4 rounded-xl ${
          oauthMessage.type === 'success'
            ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
            : 'bg-red-500/10 border border-red-500/20 text-red-400'
        }`}>
          <div className="flex items-center gap-2">
            {oauthMessage.type === 'success' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {oauthMessage.message}
          </div>
        </div>
      )}

      <div className="space-y-6">
        {/* Pinterest Connection Status */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Pinterest Connection</h2>
            {settings.hasCredentials && (
              <span className="flex items-center gap-2 text-sm text-emerald-400">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                Connected
              </span>
            )}
          </div>

          {settings.hasCredentials ? (
            <div className="space-y-4">
              {/* Connected Account Info */}
              <div className="flex items-center gap-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
                <div className="w-12 h-12 rounded-full bg-[#E60023] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="font-medium" style={{ color: 'var(--text-primary)' }}>
                    {settings.accountUsername || 'Pinterest Account'}
                  </div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Ready to post pins
                  </div>
                </div>
                <button
                  onClick={handleDisconnect}
                  className="px-4 py-2 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors"
                >
                  Disconnect
                </button>
              </div>

              {/* Test Connection */}
              <div className="flex items-center gap-4">
                <button
                  onClick={testConnection}
                  disabled={testing}
                  className="px-4 py-2 rounded-xl font-medium transition-colors"
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
          ) : (
            <div className="space-y-4">
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                Connect your Pinterest account to enable pin posting and scheduling.
              </p>

              {/* Step 1: Enter API Credentials */}
              <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-black text-sm font-bold flex items-center justify-center">1</span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Enter API Credentials</span>
                  <a
                    href="https://developers.pinterest.com/apps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline ml-auto"
                  >
                    Get from Pinterest Developer
                  </a>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={settings.appId}
                    onChange={(e) => setSettings({ ...settings, appId: e.target.value })}
                    placeholder="App ID"
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                    style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  />
                  <div className="relative">
                    <input
                      type={showSecrets ? 'text' : 'password'}
                      value={settings.appSecret}
                      onChange={(e) => setSettings({ ...settings, appSecret: e.target.value })}
                      placeholder="App Secret"
                      className="w-full px-4 py-3 pr-12 rounded-xl focus:outline-none focus:border-primary"
                      style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
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
              </div>

              {/* Step 2: Connect Button */}
              <div className="p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-primary text-black text-sm font-bold flex items-center justify-center">2</span>
                  <span className="font-medium" style={{ color: 'var(--text-primary)' }}>Authorize with Pinterest</span>
                </div>
                <button
                  onClick={handleConnectPinterest}
                  disabled={connecting || !settings.appId || !settings.appSecret}
                  className="w-full py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: '#E60023', color: 'white' }}
                >
                  {connecting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                      </svg>
                      Connect with Pinterest
                    </>
                  )}
                </button>
                <p className="text-xs mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
                  You'll be redirected to Pinterest to authorize access
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Board Selection (only show when connected) */}
        {settings.hasCredentials && (
          <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Default Board</h2>
            <div className="space-y-4">
              {boards.length > 0 ? (
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
              ) : (
                <div>
                  <input
                    type="text"
                    value={settings.defaultBoardName}
                    onChange={(e) => setSettings({ ...settings, defaultBoardName: e.target.value })}
                    placeholder="e.g., Clash of Clans Bases"
                    className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                  />
                  <p className="text-xs mt-2" style={{ color: 'var(--text-muted)' }}>
                    Click "Test Connection" above to load your boards
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

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

export default function PinterestSettingsPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <PinterestSettingsContent />
    </Suspense>
  );
}
