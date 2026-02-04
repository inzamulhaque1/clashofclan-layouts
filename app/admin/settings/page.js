'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function SettingsPage() {
  const { data: session } = useSession();
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Settings</h1>
        <p style={{ color: 'var(--text-muted)' }}>Manage your account and site settings.</p>
      </div>

      <div className="space-y-6">
        {/* Profile Settings */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Profile</h2>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center text-black text-2xl font-bold">
              {session?.user?.name?.charAt(0) || 'A'}
            </div>
            <div>
              <div className="font-medium text-lg" style={{ color: 'var(--text-primary)' }}>{session?.user?.name || 'Admin'}</div>
              <div style={{ color: 'var(--text-muted)' }}>{session?.user?.email}</div>
              <div className="text-sm text-primary capitalize mt-1">{session?.user?.role || 'superadmin'}</div>
            </div>
          </div>
        </div>

        {/* Site Settings */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Site Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Site Name</label>
              <input
                type="text"
                defaultValue="Game365Hub"
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>Site Description</label>
              <textarea
                defaultValue="Your ultimate gaming resource hub for mobile games."
                rows={3}
                className="w-full px-4 py-3 rounded-xl focus:outline-none focus:border-primary resize-none"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
              />
            </div>
          </div>
        </div>

        {/* Scraper Settings */}
        <div className="rounded-2xl p-6" style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border)' }}>
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Scraper Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Auto-scrape New Bases</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Automatically scrape new bases daily</div>
              </div>
              <button className="w-12 h-6 rounded-full relative" style={{ background: 'var(--surface-100)' }}>
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium" style={{ color: 'var(--text-primary)' }}>Scrape Images</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Download base images during scrape</div>
              </div>
              <button className="w-12 h-6 bg-primary rounded-full relative">
                <span className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full transition-transform"></span>
              </button>
            </div>
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
