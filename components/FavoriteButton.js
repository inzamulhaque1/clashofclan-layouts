'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useFavorites } from '@/hooks/useFavorites';

export default function FavoriteButton({ base, size = 'md', showLabel = false }) {
  const { user } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [isAnimating, setIsAnimating] = useState(false);

  const baseId = base.id || `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`;
  const favorited = isFavorite(baseId);

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      // Could show a sign-in prompt here
      return;
    }

    setIsAnimating(true);
    await toggleFavorite(base);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  if (!user) {
    return null; // Don't show the button if not logged in
  }

  return (
    <button
      onClick={handleClick}
      className={`${showLabel ? 'flex items-center gap-2 px-3 py-2' : sizeClasses[size]} rounded-lg transition-all ${
        favorited
          ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20'
          : 'bg-surface-100 text-surface-400 hover:bg-surface-200 hover:text-red-400'
      } ${isAnimating ? 'scale-125' : 'scale-100'}`}
      title={favorited ? 'Remove from favorites' : 'Add to favorites'}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <svg
        className={`${iconSizes[size]} transition-transform ${isAnimating ? 'animate-pulse' : ''}`}
        fill={favorited ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={favorited ? 0 : 2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {showLabel && (
        <span className="text-sm font-medium">
          {favorited ? 'Saved' : 'Save'}
        </span>
      )}
    </button>
  );
}
