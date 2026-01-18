'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useFavorites } from '@/hooks/useFavorites';

export default function FavoritesPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const { favorites, loading: favoritesLoading, removeFavorite } = useFavorites();

  // Redirect to home if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
    }
  }, [user, authLoading, router]);

  if (authLoading || favoritesLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link href="/" className="text-sm text-muted hover:text-primary transition-colors mb-4 inline-flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-foreground">
          My <span className="text-primary">Favorites</span>
        </h1>
        <p className="text-muted">
          {favorites.length} saved base{favorites.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Favorites Grid */}
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((base) => (
            <div
              key={base.id}
              className="group relative card overflow-hidden transition-all hover:-translate-y-1"
            >
              {/* Remove Button */}
              <button
                onClick={() => removeFavorite(base.id)}
                className="absolute top-3 right-3 z-10 p-2 rounded-lg transition-all opacity-0 group-hover:opacity-100 bg-red-500/90 hover:bg-red-600"
                title="Remove from favorites"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <Link href={`/bases/${base.hallType?.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`}>
                {/* Thumbnail */}
                <div className="aspect-video relative overflow-hidden bg-surface-100">
                  {base.thumbnailUrl ? (
                    <img
                      src={base.thumbnailUrl}
                      alt={`${base.hallType}${base.hallLevel} ${base.baseType} base`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl">🏰</span>
                    </div>
                  )}

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 rounded-md text-xs font-bold bg-primary text-black">
                      {base.hallType}{base.hallLevel}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {base.hallType}{base.hallLevel} {base.baseType?.charAt(0).toUpperCase() + base.baseType?.slice(1)} Base
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-surface-100 text-muted">
                      #{base.baseNumber}
                    </span>
                  </div>
                  <p className="text-xs text-muted">
                    Added {new Date(base.addedAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center bg-surface-100">
            <svg className="w-10 h-10 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-foreground">No favorites yet</h2>
          <p className="mb-6 text-muted">
            Save your favorite base layouts for quick access later.
          </p>
          <Link href="/th" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
            Browse Bases
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
