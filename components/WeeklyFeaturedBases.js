'use client';

import { useState, useEffect } from 'react';
import BaseCard from './BaseCard';

// Get current week number for consistent weekly rotation
function getWeekNumber() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  const oneWeek = 604800000; // ms in a week
  return Math.floor(diff / oneWeek);
}

// Seeded random for consistent selection within a week
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Select featured bases for the current week
function selectWeeklyBases(bases, count = 6) {
  if (!bases || bases.length === 0) return [];

  const weekNum = getWeekNumber();
  const sortedBases = [...bases].sort((a, b) => {
    // Use week number + base index as seed for consistent sorting
    const seedA = weekNum * 1000 + bases.indexOf(a);
    const seedB = weekNum * 1000 + bases.indexOf(b);
    return seededRandom(seedA) - seededRandom(seedB);
  });

  return sortedBases.slice(0, count);
}

export default function WeeklyFeaturedBases({ bases }) {
  const [weeklyBases, setWeeklyBases] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Filter for high-quality bases (TH14+) and select weekly features
    const qualityBases = bases.filter(b =>
      b.hallType === 'TH' &&
      b.hallLevel >= 12 &&
      b.copyLink
    );
    setWeeklyBases(selectWeeklyBases(qualityBases, 6));
  }, [bases]);

  if (!isClient || weeklyBases.length === 0) {
    // Server-side fallback - show first 6 quality bases
    const fallbackBases = bases
      .filter(b => b.hallType === 'TH' && b.hallLevel >= 14)
      .slice(0, 6);

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fallbackBases.map((base, index) => (
          <BaseCard key={index} base={base} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {weeklyBases.map((base, index) => (
        <div key={index} className="relative">
          {index < 3 && (
            <div className="absolute -top-2 -right-2 z-10 px-2 py-1 text-xs font-bold rounded-full bg-primary text-black">
              {index === 0 ? 'Top Pick' : index === 1 ? 'Hot' : 'Trending'}
            </div>
          )}
          <BaseCard base={base} />
        </div>
      ))}
    </div>
  );
}
