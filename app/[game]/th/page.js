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

      {/* Premium Banner */}
      <Link
        href={`/${game.slug}/premium`}
        className="block mb-8 p-5 rounded-2xl transition-all hover:scale-[1.01] group"
        style={{
          background: 'linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,165,0,0.08) 50%, rgba(255,215,0,0.15) 100%)',
          border: '2px solid rgba(255,215,0,0.3)',
          boxShadow: '0 4px 20px rgba(255,215,0,0.15)'
        }}
      >
        <div className="flex items-center gap-4">
          <div
            className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              boxShadow: '0 4px 15px rgba(255,215,0,0.4)'
            }}
          >
            <svg className="w-7 h-7 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1" style={{ color: '#FFD700' }}>
              Premium Pro Bases
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Anti 3-Star, Legend League, & CWL winning layouts used by top players
            </p>
          </div>
          <div className="flex-shrink-0 hidden sm:block">
            <span
              className="px-4 py-2 rounded-xl text-sm font-semibold transition-all group-hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: '#000',
                boxShadow: '0 2px 10px rgba(255,215,0,0.3)'
              }}
            >
              View Premium →
            </span>
          </div>
        </div>
      </Link>

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
