import { notFound } from 'next/navigation';
import { getGameBySlug, getGameSlugs } from '@/config/games';
import GameThemeProvider from '@/components/providers/GameThemeProvider';

// Generate static params for all games
export async function generateStaticParams() {
  return getGameSlugs().map(slug => ({ game: slug }));
}

// Generate metadata based on game
export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game) return {};

  return {
    title: {
      default: game.seo?.title || `${game.name} Guides & Resources`,
      template: `%s | ${game.name} - Game365Hub`,
    },
    description: game.seo?.description || game.description,
    keywords: game.seo?.keywords || [game.name.toLowerCase()],
  };
}

export default function GameLayout({ children, params }) {
  const game = getGameBySlug(params.game);

  if (!game) {
    notFound();
  }

  return (
    <GameThemeProvider game={game}>
      {children}
    </GameThemeProvider>
  );
}
