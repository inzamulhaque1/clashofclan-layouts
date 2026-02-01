import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug, getGameSlugs } from '@/config/games';
import { getContentStats, queryContent } from '@/lib/data';

// Games with dedicated static routes (should redirect to avoid conflict)
const STATIC_GAME_ROUTES = ['brawl-stars'];

// Generate static params for all games (exclude games with dedicated static routes)
export async function generateStaticParams() {
  return getGameSlugs()
    .filter(slug => !STATIC_GAME_ROUTES.includes(slug))
    .map(slug => ({ game: slug }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game) return {};

  return {
    title: game.seo?.title || `${game.name} - Game365Hub`,
    description: game.seo?.description || game.description,
  };
}

export default function GameHomePage({ params }) {
  const game = getGameBySlug(params.game);

  if (!game) {
    notFound();
  }

  // Redirect games with dedicated static routes
  if (STATIC_GAME_ROUTES.includes(game.slug)) {
    redirect(`/${game.slug}`);
  }

  // Route to game-specific home page
  switch (game.slug) {
    case 'clash-of-clans':
      return <ClashOfClansHome game={game} />;
    case 'clash-royale':
      return <ComingSoonHome game={game} contentType="decks and card guides" />;
    default:
      return <ComingSoonHome game={game} contentType="guides and resources" />;
  }
}

// Clash of Clans Home Page (migrated from original home)
function ClashOfClansHome({ game }) {
  const stats = getContentStats('clash-of-clans', 'base');
  const bases = queryContent('clash-of-clans', 'base', { limit: 100 });

  const TH_LEVELS = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];
  const BH_LEVELS = [10, 9, 8, 7, 6, 5, 4, 3];

  const levelConfig = game.levels.townHall;
  const bhConfig = game.levels.builderHall;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--game-primary)' }}>
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--game-primary)' }}></span>
              Updated Daily
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Pro-Level
              <span className="block" style={{ color: 'var(--game-primary)' }}>Base Layouts</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2" style={{ color: 'var(--text-muted)' }}>for Clash of Clans</span>
            </h1>

            {/* Description */}
            <p className="text-lg max-w-lg" style={{ color: 'var(--text-muted)' }}>
              Dominate clan wars and protect your loot with battle-tested layouts. One-tap copy to instantly import any base.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/clash-of-clans/th/18" className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold rounded-xl transition-colors" style={{ background: 'var(--game-primary)' }}>
                <span>Browse TH18</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/clash-of-clans/search" className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search All</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--game-primary)' }}>{stats.total || '1000+'}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Total Bases</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--game-primary)' }}>{stats.byBaseType?.war || '500+'}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>War Layouts</div>
              </div>
              <div>
                <div className="text-2xl font-bold" style={{ color: 'var(--game-primary)' }}>TH7-18</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>All Levels</div>
              </div>
            </div>
          </div>

          {/* Right - TH Grid */}
          <div>
            <div className="grid grid-cols-3 gap-3">
              {[18, 17, 16, 15, 14, 13].map((level, index) => (
                <Link
                  key={level}
                  href={`/clash-of-clans/th/${level}`}
                  className={`group relative p-4 rounded-2xl text-center transition-all duration-200 hover:scale-105 ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div className={`flex flex-col items-center justify-center ${index === 0 ? 'h-full py-4' : ''}`}>
                    <img
                      src={levelConfig.images[level]}
                      alt={`Town Hall ${level}`}
                      className={`object-contain ${index === 0 ? 'w-28 h-28' : 'w-14 h-14'}`}
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
                    />
                    <div className={`font-bold mt-2 transition-colors ${index === 0 ? 'text-2xl' : 'text-lg'}`} style={{ color: 'var(--text-primary)' }}>
                      TH{level}
                    </div>
                    {stats.byHallType?.[`TH${level}`] && (
                      <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                        {stats.byHallType[`TH${level}`]} bases
                      </div>
                    )}
                    {index === 0 && (
                      <div className="mt-3 px-3 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--game-primary)' }}>
                        Most Popular
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <Link
              href="/clash-of-clans/th"
              className="flex items-center justify-center gap-2 mt-4 py-3 rounded-xl text-sm font-medium transition-colors"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              View All Town Hall Levels
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Town Hall Section */}
      <section className="py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Town Hall Bases</h2>
            <p className="mt-1" style={{ color: 'var(--text-muted)' }}>Select your Town Hall level</p>
          </div>
          <Link href="/clash-of-clans/th" className="text-sm hover:underline" style={{ color: 'var(--game-primary)' }}>
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TH_LEVELS.map(level => (
            <Link key={level} href={`/clash-of-clans/th/${level}`} className="level-card p-4 text-center group">
              <div className="mb-3">
                <img
                  src={levelConfig.images[level]}
                  alt={`Town Hall ${level}`}
                  className="level-card-image group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="font-bold text-lg transition-colors" style={{ color: 'var(--text-primary)' }}>
                TH{level}
              </div>
              {stats.byHallType?.[`TH${level}`] ? (
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{stats.byHallType[`TH${level}`]} bases</div>
              ) : (
                <div className="text-xs mt-1" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>Coming soon</div>
              )}
            </Link>
          ))}
        </div>
      </section>

      {/* Builder Hall Section */}
      <section className="py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">Builder Hall Bases</h2>
            <p className="mt-1" style={{ color: 'var(--text-muted)' }}>Versus battle layouts</p>
          </div>
          <Link href="/clash-of-clans/bh" className="text-sm hover:underline" style={{ color: 'var(--game-primary)' }}>
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {BH_LEVELS.map(level => (
            <Link key={level} href={`/clash-of-clans/bh/${level}`} className="level-card p-3 text-center group">
              <div className="mb-2">
                <img
                  src={bhConfig.images[level]}
                  alt={`Builder Hall ${level}`}
                  className="w-12 h-12 sm:w-14 sm:h-14 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div className="font-semibold text-sm transition-colors" style={{ color: 'var(--text-primary)' }}>
                BH{level}
              </div>
              {stats.byHallType?.[`BH${level}`] ? (
                <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stats.byHallType[`BH${level}`]}</div>
              ) : null}
            </Link>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold">CoC Guides</h2>
            <p className="mt-1" style={{ color: 'var(--text-muted)' }}>Learn strategies and tips</p>
          </div>
          <Link href="/clash-of-clans/guides" className="text-sm hover:underline" style={{ color: 'var(--game-primary)' }}>
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/clash-of-clans/guides/how-to-copy-base" className="card p-6 hover:border-primary/50 transition-all group">
            <span className="text-2xl mb-2 block">📋</span>
            <h3 className="font-semibold mb-1 transition-colors" style={{ color: 'var(--text-primary)' }}>How to Copy Bases</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Step-by-step guide to import layouts</p>
          </Link>
          <Link href="/clash-of-clans/guides/best-th18-attack-strategies" className="card p-6 hover:border-primary/50 transition-all group">
            <span className="text-2xl mb-2 block">⚔️</span>
            <h3 className="font-semibold mb-1 transition-colors" style={{ color: 'var(--text-primary)' }}>TH18 Attack Strategies</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Master the best attacks for TH18</p>
          </Link>
          <Link href="/clash-of-clans/guides/cwl-base-building-tips" className="card p-6 hover:border-primary/50 transition-all group">
            <span className="text-2xl mb-2 block">🏰</span>
            <h3 className="font-semibold mb-1 transition-colors" style={{ color: 'var(--text-primary)' }}>CWL Base Building</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Build anti-3 star war bases</p>
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8">
        <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--game-primary)' }}>{stats.total?.toLocaleString() || '4,500'}+</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Base Layouts</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--game-primary)' }}>50K+</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Bases Copied</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--game-primary)' }}>TH3-18</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>All TH Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ color: 'var(--game-primary)' }}>BH3-10</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Builder Base</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Coming Soon placeholder for other games
function ComingSoonHome({ game, contentType }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center" style={{ background: 'var(--surface-100)' }}>
          <span className="text-5xl">{game.shortName === 'BS' ? '🥊' : game.shortName === 'CR' ? '🏰' : '🎮'}</span>
        </div>
        <h1 className="text-4xl font-bold mb-4">{game.name}</h1>
        <p className="text-xl" style={{ color: 'var(--text-muted)' }}>
          {game.description}
        </p>
      </div>

      <div className="card p-8 max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
          <svg className="w-8 h-8" style={{ color: 'var(--game-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          We're working on adding {contentType} for {game.name}. Check back soon!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portal
        </Link>
      </div>
    </div>
  );
}
