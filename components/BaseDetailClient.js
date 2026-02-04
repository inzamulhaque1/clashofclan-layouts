'use client';

import { useState, useEffect } from 'react';
import VoteButtons from './VoteButtons';
import ShareButtons from './ShareButtons';
import CopyStats from './CopyStats';
import { getBaseId, incrementCopyCount } from '@/lib/stats';

export default function BaseDetailClient({ base, baseUrl, isPremium = false }) {
  const [copied, setCopied] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  // Check if this premium base was already unlocked
  useEffect(() => {
    if (isPremium && typeof window !== 'undefined') {
      const unlockedBases = JSON.parse(localStorage.getItem('unlockedBases') || '[]');
      const baseId = `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`;
      setIsUnlocked(unlockedBases.includes(baseId));
    }
  }, [isPremium, base]);

  const handleCopy = async () => {
    if (!base.copyLink) return;

    // If premium and not unlocked, trigger CPABuild locker
    if (isPremium && !isUnlocked) {
      if (typeof window !== 'undefined' && typeof window._KE === 'function') {
        window._KE();
      } else {
        alert('Locker is loading, please try again.');
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(base.copyLink);
      setCopied(true);
      incrementCopyCount(getBaseId(base));
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = base.copyLink;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      incrementCopyCount(getBaseId(base));
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const baseTitle = base.title || `${base.hallType}${base.hallLevel} ${base.baseType} Base`;

  return (
    <div className="space-y-6">
      {/* Stats & Vote Row */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-surface-100">
        <CopyStats base={base} size="md" />
        <VoteButtons base={base} size="md" />
      </div>

      {/* Copy Button */}
      {base.copyLink ? (
        <button
          onClick={handleCopy}
          className={`w-full py-4 px-6 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-center gap-3 ${
            copied
              ? 'bg-emerald-500 text-white'
              : isPremium && !isUnlocked
                ? ''
                : 'bg-primary text-black hover:bg-primary/90 shadow-lg shadow-primary/25'
          }`}
          style={isPremium && !isUnlocked && !copied ? {
            background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
            color: '#fff',
            boxShadow: '0 4px 15px rgba(249,115,22,0.4)'
          } : undefined}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Link Copied!
            </>
          ) : isPremium && !isUnlocked ? (
            <>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
              </svg>
              Unlock Premium Base
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy Base Link
            </>
          )}
        </button>
      ) : (
        <div className="p-4 rounded-xl bg-surface-100 text-center text-muted">
          Copy link not available for this base
        </div>
      )}

      {/* Share Section */}
      <div className="pt-4 border-t border-white/5">
        <h3 className="text-sm font-medium text-muted mb-3">Share this base</h3>
        <ShareButtons url={baseUrl} title={baseTitle} size="md" />
      </div>
    </div>
  );
}
