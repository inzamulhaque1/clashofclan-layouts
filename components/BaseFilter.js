'use client';

import Link from 'next/link';

const FILTER_TYPES = [
  { key: 'all', label: 'All' },
  { key: 'war', label: 'War' },
  { key: 'farm', label: 'Farm' },
  { key: 'trophy', label: 'Trophy' },
  { key: 'hybrid', label: 'Hybrid' },
];

export default function BaseFilter({ currentType, typeCounts, basePath }) {
  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
      {FILTER_TYPES.map(({ key, label }) => {
        const count = typeCounts[key] || 0;
        const isActive = (key === 'all' && !currentType) || currentType === key;
        const href = key === 'all' ? basePath : `${basePath}?type=${key}`;

        if (key !== 'all' && count === 0) return null;

        return (
          <Link
            key={key}
            href={href}
            className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
              isActive
                ? 'bg-primary text-black'
                : 'bg-surface-100 text-muted hover:text-white hover:bg-surface-200'
            }`}
          >
            {label}
            <span className={`ml-1.5 ${isActive ? 'text-black/60' : 'text-muted'}`}>
              {count}
            </span>
          </Link>
        );
      })}
    </div>
  );
}
