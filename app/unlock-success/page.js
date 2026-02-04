'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function UnlockSuccessPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to Clash of Clans bases
          window.location.href = '/clash-of-clans/premium';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Send message to parent window if opened in popup
    if (window.opener) {
      window.opener.postMessage('offer_completed', '*');
    }

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div
          className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            boxShadow: '0 8px 40px rgba(255, 215, 0, 0.4)'
          }}
        >
          <svg className="w-12 h-12 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Title */}
        <h1
          className="text-3xl font-bold mb-3"
          style={{
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Premium Unlocked!
        </h1>

        <p className="text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
          Thank you! Your premium bases are now unlocked.
        </p>

        {/* Info Box */}
        <div
          className="p-4 rounded-xl mb-6"
          style={{
            background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 100%)',
            border: '1px solid rgba(255,215,0,0.2)'
          }}
        >
          <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Go back to the base page and click <strong>"Copy Base"</strong> to get your layout.
          </p>
        </div>

        {/* Redirect Notice */}
        <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
          Redirecting to premium bases in <span className="font-bold" style={{ color: '#FFD700' }}>{countdown}</span> seconds...
        </p>

        {/* Manual Links */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/clash-of-clans/premium"
            className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#000',
              boxShadow: '0 4px 20px rgba(255,215,0,0.3)'
            }}
          >
            View Premium Bases
          </Link>
          <Link
            href="/clash-of-clans/th"
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
            style={{
              background: 'var(--surface-100)',
              border: '1px solid var(--border)'
            }}
          >
            Browse All Bases
          </Link>
        </div>

        {/* Close window button if popup */}
        <button
          onClick={() => window.close()}
          className="mt-6 text-sm underline"
          style={{ color: 'var(--text-muted)' }}
        >
          Close this window
        </button>
      </div>
    </div>
  );
}
