import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { getContentStats } from '@/lib/data';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game || game.slug !== 'clash-of-clans') return {};

  return {
    title: 'Best Builder Hall Base Layouts 2026 - BH3 to BH10 with Copy Links',
    description: 'Download Clash of Clans Builder Hall base layouts for BH3 to BH10. Best versus battle bases with one-click copy links.',
  };
}

export default function BHIndexPage({ params }) {
  const game = getGameBySlug(params.game);

  // Only Clash of Clans has BH bases
  if (!game || game.slug !== 'clash-of-clans') {
    notFound();
  }

  const stats = getContentStats('clash-of-clans', 'base');
  const levelConfig = game.levels.builderHall;

  const BH_LEVELS = [];
  for (let i = levelConfig.max; i >= levelConfig.min; i--) {
    BH_LEVELS.push({ level: i });
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href={`/${game.slug}`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← Back to {game.name}
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Builder Hall <span style={{ color: 'var(--game-primary)' }}>Bases</span>
        </h1>
        <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Select your Builder Hall level to browse layouts for versus battles.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {BH_LEVELS.map(({ level }) => {
          const count = stats.byHallType?.[`BH${level}`] || 0;

          return (
            <Link
              key={level}
              href={`/${game.slug}/bh/${level}`}
              className="level-card p-5 group text-center"
            >
              <div className="mb-3">
                <img
                  src={levelConfig.images[level]}
                  alt={`Builder Hall ${level}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div className="text-xl font-bold transition-colors mb-1" style={{ color: 'var(--text-primary)' }}>
                BH{level}
              </div>
              {count > 0 && (
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>{count} bases</div>
              )}
            </Link>
          );
        })}
      </div>

      {/* SEO Content */}
      <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">Builder Base Tips</h2>
        <div className="space-y-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          <p>
            Builder Base is Clash of Clans' second village featuring versus battles against other players.
            Unlike the Home Village, you only get one attack to win each versus battle.
          </p>
          <p>
            A good Builder Hall base can help you gain more trophies and earn more loot from versus battles.
          </p>
        </div>
      </section>
    </div>
  );
}
