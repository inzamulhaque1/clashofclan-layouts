'use client';

import { useState } from 'react';
import VoteButtons from './VoteButtons';
import ShareButtons from './ShareButtons';
import CopyStats from './CopyStats';
import FavoriteButton from './FavoriteButton';
import { getBaseId, incrementCopyCount } from '@/lib/stats';

export default function BaseDetailClient({ base, baseUrl }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!base.copyLink) return;

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
        <div className="flex items-center gap-2">
          <FavoriteButton base={base} size="md" showLabel />
          <VoteButtons base={base} size="md" />
        </div>
      </div>

      {/* Copy Button */}
      {base.copyLink ? (
        <button
          onClick={handleCopy}
          className={`w-full py-4 px-6 rounded-xl text-base font-semibold transition-all duration-200 flex items-center justify-center gap-3 ${
            copied
              ? 'bg-emerald-500 text-white'
              : 'bg-primary text-black hover:bg-primary/90 shadow-lg shadow-primary/25'
          }`}
        >
          {copied ? (
            <>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Link Copied!
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
