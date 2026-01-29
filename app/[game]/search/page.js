import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getGameBySlug } from '@/config/games';
import SearchPageContent from './SearchPageContent';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game) return {};

  return {
    title: `Search ${game.name}`,
    description: `Search for ${game.name} content including bases, guides, and more.`,
  };
}

function SearchLoading() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="animate-pulse">
        <div className="h-8 w-48 rounded mb-4" style={{ background: 'var(--surface-100)' }}></div>
        <div className="h-4 w-64 rounded mb-12" style={{ background: 'var(--surface-100)' }}></div>
        <div className="h-12 w-full rounded mb-8" style={{ background: 'var(--surface-100)' }}></div>
      </div>
    </div>
  );
}

export default function SearchPage({ params }) {
  const game = getGameBySlug(params.game);

  if (!game) {
    notFound();
  }

  return (
    <Suspense fallback={<SearchLoading />}>
      <SearchPageContent game={game} />
    </Suspense>
  );
}
