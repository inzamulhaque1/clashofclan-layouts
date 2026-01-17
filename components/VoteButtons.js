'use client';

import { useState, useEffect } from 'react';
import { getBaseId, getVoteCount, getUserVote, voteBase, getEstimatedStats } from '@/lib/stats';

export default function VoteButtons({ base, showCount = true, size = 'md' }) {
  const [voteCount, setVoteCount] = useState(0);
  const [userVote, setUserVote] = useState(0);
  const [mounted, setMounted] = useState(false);

  const baseId = getBaseId(base);

  useEffect(() => {
    setMounted(true);
    const { estimatedVotes } = getEstimatedStats(baseId, base.scrapedAt);
    const actualVotes = getVoteCount(baseId);
    setVoteCount(estimatedVotes + actualVotes);
    setUserVote(getUserVote(baseId));
  }, [baseId, base.scrapedAt]);

  const handleVote = (vote) => {
    const result = voteBase(baseId, vote);
    const { estimatedVotes } = getEstimatedStats(baseId, base.scrapedAt);
    setVoteCount(estimatedVotes + result.voteCount);
    setUserVote(result.userVote);
  };

  const sizeClasses = {
    sm: 'w-6 h-6 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const iconSize = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <div className={`${sizeClasses[size]} rounded-lg bg-surface-100`}></div>
        {showCount && <span className="text-muted text-sm">--</span>}
        <div className={`${sizeClasses[size]} rounded-lg bg-surface-100`}></div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      {/* Upvote */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleVote(1);
        }}
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center transition-all ${
          userVote === 1
            ? 'bg-emerald-500/20 text-emerald-400'
            : 'bg-surface-100 text-muted hover:text-emerald-400 hover:bg-emerald-500/10'
        }`}
        title="Upvote"
      >
        <svg className={iconSize[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      {/* Vote Count */}
      {showCount && (
        <span className={`min-w-[2rem] text-center font-medium ${
          voteCount > 0 ? 'text-emerald-400' : voteCount < 0 ? 'text-red-400' : 'text-muted'
        }`}>
          {voteCount > 0 ? `+${voteCount}` : voteCount}
        </span>
      )}

      {/* Downvote */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleVote(-1);
        }}
        className={`${sizeClasses[size]} rounded-lg flex items-center justify-center transition-all ${
          userVote === -1
            ? 'bg-red-500/20 text-red-400'
            : 'bg-surface-100 text-muted hover:text-red-400 hover:bg-red-500/10'
        }`}
        title="Downvote"
      >
        <svg className={iconSize[size]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
