'use client';

import { useState } from 'react';
import Link from 'next/link';
import VoteButtons from './VoteButtons';
import CopyStats from './CopyStats';
import { getBaseId, incrementCopyCount } from '@/lib/stats';

export default function BaseCard({ base, showDetails = true }) {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

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

  const baseUrl = `/bases/${base.hallType?.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`;
  const imageUrl = base.originalImageUrl || base.thumbnailUrl;

  const typeBadgeClass = {
    war: 'badge-war',
    farm: 'badge-farm',
    trophy: 'badge-trophy',
    hybrid: 'bg-purple-500/10 text-purple-400',
    cwl: 'bg-blue-500/10 text-blue-400',
  };

  return (
    <div className="card overflow-hidden group">
      {/* Image */}
      <Link href={baseUrl} className="block relative aspect-[4/3] bg-surface-200">
        {imageUrl && !imageError ? (
          <img
            src={imageUrl}
            alt={`${base.hallType}${base.hallLevel} ${base.baseType} base #${base.baseNumber}`}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-surface-200">
            <svg className="w-12 h-12 text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`badge ${typeBadgeClass[base.baseType] || 'bg-zinc-500/10 text-zinc-400'}`}>
            {base.baseType?.toUpperCase()}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className="badge bg-black/60 backdrop-blur-sm text-white">
            {base.hallType}{base.hallLevel}
          </span>
        </div>

        {/* Vote buttons on hover */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <VoteButtons base={base} size="sm" showCount={false} />
        </div>
      </Link>

      {/* Info */}
      {showDetails && (
        <div className="p-4">
          <Link href={baseUrl} className="block mb-2">
            <h3 className="font-medium text-sm leading-tight hover:text-primary transition-colors line-clamp-2" title={base.title}>
              {base.title || `${base.hallType}${base.hallLevel} ${base.baseType?.charAt(0).toUpperCase() + base.baseType?.slice(1)} Base #${base.baseNumber}`}
            </h3>
          </Link>

          {/* Stats Row */}
          <div className="flex items-center justify-between mb-3">
            <CopyStats base={base} size="sm" />
            <VoteButtons base={base} size="sm" />
          </div>

          {/* Copy Button */}
          {base.copyLink ? (
            <button
              onClick={handleCopy}
              className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                copied
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'bg-primary text-black hover:bg-primary/90'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Base
                </>
              )}
            </button>
          ) : (
            <Link
              href={baseUrl}
              className="block w-full py-2.5 px-4 rounded-xl text-sm font-medium text-center bg-surface-200 hover:bg-surface-300 transition-colors"
            >
              View Details
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
