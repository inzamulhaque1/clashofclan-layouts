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
            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              boxShadow: '0 4px 15px rgba(255,215,0,0.4)'
            }}
          >
            <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="font-bold mb-0.5" style={{ color: '#FFD700' }}>
              Premium BH10 Bases
            </h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Top-tier versus battle layouts
            </p>
          </div>
          <span
            className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              color: '#000'
            }}
          >
            View →
          </span>
        </div>
      </Link>

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
