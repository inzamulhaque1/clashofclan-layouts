import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { getContentStats } from '@/lib/data';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game || game.slug !== 'clash-of-clans') return {};

  return {
    title: 'Best Town Hall Base Layouts 2026 - TH3 to TH18 with Copy Links',
    description: 'Download 4000+ Clash of Clans Town Hall base layouts for TH3 to TH18. Best war bases, farming bases, trophy bases, CWL anti 3 star designs with one-click copy links.',
  };
}

export default function THIndexPage({ params }) {
  const game = getGameBySlug(params.game);

  // Only Clash of Clans has TH bases
  if (!game || game.slug !== 'clash-of-clans') {
    notFound();
  }

  const stats = getContentStats('clash-of-clans', 'base');
  const levelConfig = game.levels.townHall;

  const TH_LEVELS = [];
  for (let i = levelConfig.max; i >= levelConfig.min; i--) {
    TH_LEVELS.push({
      level: i,
      description: levelConfig.descriptions?.[i] || `Town Hall ${i}`,
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href={`/${game.slug}`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← Back to {game.name}
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Town Hall <span style={{ color: 'var(--game-primary)' }}>Bases</span>
        </h1>
        <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Select your Town Hall level to browse layouts. Each base includes a one-click copy link.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TH_LEVELS.map(({ level, description }) => {
          const count = stats.byHallType?.[`TH${level}`] || 0;

          return (
            <Link
              key={level}
              href={`/${game.slug}/th/${level}`}
              className="level-card p-5 group flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={levelConfig.images[level]}
                  alt={`Town Hall ${level}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>
                    TH{level}
                  </span>
                  {count > 0 && (
                    <span className="badge-primary">{count} bases</span>
                  )}
                </div>
                <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>{description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* SEO Content */}
      <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">Choosing the Right Base</h2>
        <div className="space-y-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          <p>
            Your Town Hall level determines which defenses and troops you have access to.
            A well-designed base can make the difference between a successful defense and a 3-star attack.
          </p>
          <p>
            Consider whether you need a war base for Clan Wars, a farming base to protect resources,
            or a trophy base for pushing leagues.
          </p>
        </div>
      </section>
    </div>
  );
}
