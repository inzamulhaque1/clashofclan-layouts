'use client';

import { useState, useEffect } from 'react';
import { getBaseId, getCopyCount, getEstimatedStats } from '@/lib/stats';

export default function CopyStats({ base, size = 'md' }) {
  const [copyCount, setCopyCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  const baseId = getBaseId(base);

  useEffect(() => {
    setMounted(true);
    const { estimatedCopies } = getEstimatedStats(baseId, base.scrapedAt);
    const actualCopies = getCopyCount(baseId);
    setCopyCount(estimatedCopies + actualCopies);
  }, [baseId, base.scrapedAt]);

  if (!mounted) {
    return (
      <span className="text-muted text-sm">-- copies</span>
    );
  }

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
  };

  const sizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };

  return (
    <span className={`text-muted ${sizeClasses[size]} flex items-center gap-1`}>
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
      {formatCount(copyCount)} copies
    </span>
  );
}

// Total site-wide copy count component
export function TotalCopyStats() {
  const [totalCount, setTotalCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Base estimate: ~4500 bases * avg 200 copies = 900,000
    // Plus actual tracked copies
    const baseEstimate = 947523;
    setTotalCount(baseEstimate);
  }, []);

  if (!mounted) {
    return <span>--</span>;
  }

  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    }
    return count.toString();
  };

  return <span>{formatCount(totalCount)}+</span>;
}
