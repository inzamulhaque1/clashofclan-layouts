'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import VoteButtons from './VoteButtons';
import CopyStats from './CopyStats';
import { getBaseId, incrementCopyCount } from '@/lib/stats';

// Check if a base is premium (matches logic in lib/bases.js)
// First base always premium, then randomly scattered
function checkIsPremium(base) {
  if (!base) return false;

  const hallType = base.hallType?.toUpperCase();
  const hallLevel = base.hallLevel;
  const baseNumber = base.baseNumber;

  // Only lock bases for higher levels (TH14+ and BH8+)
  if (hallType === 'TH' && hallLevel < 14) return false;
  if (hallType === 'BH' && hallLevel < 8) return false;

  // Numbers ending in 7 are premium (67, 57, 47...)
  // Plus some scattered numbers
  const lastDigit = baseNumber % 10;
  const secondLastDigit = Math.floor(baseNumber / 10) % 10;

  if (lastDigit === 7) return true;
  if (lastDigit === 3 && secondLastDigit % 2 === 0) return true;
  if (lastDigit === 1 && secondLastDigit === 4) return true;

  return false;
}

export default function BaseCard({ base, showDetails = true, gameSlug = 'clash-of-clans', compact = false }) {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const isPremium = checkIsPremium(base);

  // Check if this premium base was already unlocked
  useEffect(() => {
    if (isPremium && typeof window !== 'undefined') {
      const unlockedBases = JSON.parse(localStorage.getItem('unlockedBases') || '[]');
      const baseId = `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`;
      setIsUnlocked(unlockedBases.includes(baseId));
    }
  }, [isPremium, base]);

  // Compact mode: minimal card for internal linking grids
  if (compact) {
    const baseUrl = `/${gameSlug}/bases/${base.hallType?.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`;
    const imageUrl = base.originalImageUrl || base.thumbnailUrl;

    return (
      <Link
        href={baseUrl}
        className="block rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-lg"
        style={{ border: '1px solid var(--border)' }}
      >
        <div className="relative aspect-square" style={{ background: 'var(--surface-200)' }}>
          {imageUrl && !imageError ? (
            <img
              src={imageUrl}
              alt={`${base.hallType}${base.hallLevel} ${base.baseType} base`}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold" style={{ color: 'var(--text-muted)' }}>
                {base.hallType}{base.hallLevel}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-2" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white">{base.hallType}{base.hallLevel}</span>
              <span className="text-xs px-1.5 py-0.5 rounded text-white" style={{ background: 'rgba(255,255,255,0.2)' }}>
                {base.baseType}
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!base.copyLink) return;

    // If premium and not unlocked, directly open CPABuild locker
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

  const baseUrl = `/${gameSlug}/bases/${base.hallType?.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`;
  const imageUrl = base.originalImageUrl || base.thumbnailUrl;

  const typeBadgeClass = {
    war: 'badge-war',
    farm: 'badge-farm',
    trophy: 'badge-trophy',
    hybrid: 'bg-purple-500/10 text-purple-400',
    cwl: 'bg-blue-500/10 text-blue-400',
  };

  return (
    <>
    <div className={`card overflow-hidden group ${isPremium ? 'card-premium' : ''}`}>
      {/* Premium Ribbon */}
      {isPremium && (
        <div className="premium-ribbon" />
      )}

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

        {/* Premium lock overlay for non-unlocked premium bases */}
        {isPremium && !isUnlocked && (
          <div className="premium-lock-overlay">
            <div className="premium-lock-icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="premium-lock-text">Premium Base</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isPremium ? (
            <span className="badge-premium">
              <svg className="w-3 h-3 crown-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
              </svg>
              PRO
            </span>
          ) : (
            <span className={`badge ${typeBadgeClass[base.baseType] || 'bg-zinc-500/10 text-zinc-400'}`}>
              {base.baseType?.toUpperCase()}
            </span>
          )}
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
                  : isPremium && !isUnlocked
                    ? 'btn-premium-unlock'
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
              ) : isPremium && !isUnlocked ? (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                  </svg>
                  Unlock Base
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
    </>
  );
}
