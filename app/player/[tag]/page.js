import PlayerPageClient from './PlayerPageClient';

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `Player ${decodedTag} - Stats, Heroes, Achievements | CoC Bases`,
    description: `View detailed Clash of Clans player statistics for ${decodedTag}. See troops, heroes, spells, achievements, and clan info from the official API.`,
    keywords: [
      'clash of clans player',
      'coc player stats',
      'player profile',
      'hero levels',
      'troop levels',
      'player achievements',
      decodedTag
    ],
    openGraph: {
      title: `Player ${decodedTag} - Clash of Clans Stats`,
      description: `Live statistics for player ${decodedTag}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function PlayerPage({ params }) {
  const { tag } = await params;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <PlayerPageClient tag={tag} />
      </div>
    </div>
  );
}
