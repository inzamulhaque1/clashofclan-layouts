import Link from 'next/link';
import { getAllGames, getFeaturedGames } from '@/config/games';
import { getContentStats } from '@/lib/data';

// Game icons/emojis for visual representation
const GAME_ICONS = {
  'clash-of-clans': '/icon.jpg',
  'brawl-stars': null,
  'clash-royale': null,
  'frozen-city': null,
  'free-fire': null,
  'pubg': null,
};

const GAME_EMOJIS = {
  'clash-of-clans': '🏰',
  'brawl-stars': '🥊',
  'clash-royale': '👑',
  'frozen-city': '❄️',
  'free-fire': '🔥',
  'pubg': '🎯',
};

export default function PortalLandingPage() {
  const allGames = getAllGames();
  const featuredGames = getFeaturedGames();
  const cocStats = getContentStats('clash-of-clans', 'base');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#8B5CF6' }}></span>
            Multi-Game Portal
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            Your Ultimate
            <span className="block portal-text-gradient">Gaming Resource Hub</span>
          </h1>

          {/* Description */}
          <p className="text-xl max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-muted)' }}>
            Base layouts, tier lists, guides, and strategies for your favorite mobile games.
            All in one place, always updated.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#8B5CF6' }}>{allGames.length}</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Games</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#8B5CF6' }}>{cocStats.total?.toLocaleString() || '4,500'}+</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Resources</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold" style={{ color: '#8B5CF6' }}>Daily</div>
              <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Choose Your Game</h2>
          <p style={{ color: 'var(--text-muted)' }}>Select a game to access guides, layouts, and resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allGames.map((game) => {
            const stats = game.slug === 'clash-of-clans' ? cocStats : null;
            const hasContent = game.slug === 'clash-of-clans';
            const icon = GAME_ICONS[game.slug];
            const emoji = GAME_EMOJIS[game.slug];

            return (
              <Link
                key={game.slug}
                href={`/${game.slug}`}
                className="game-card card p-6 group relative"
                style={{
                  '--game-gradient': game.theme.gradient,
                }}
              >
                {/* Game icon/emoji */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${game.theme.primary}20, ${game.theme.primary}10)` }}
                  >
                    {icon ? (
                      <img src={icon} alt={game.name} className="w-10 h-10 rounded-lg object-cover" />
                    ) : (
                      <span className="text-3xl">{emoji}</span>
                    )}
                  </div>
                  {!hasContent && (
                    <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}>
                      Coming Soon
                    </span>
                  )}
                </div>

                {/* Game info */}
                <h3 className="text-xl font-bold mb-2 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {game.name}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {game.description}
                </p>

                {/* Content types */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.contentTypes.slice(0, 3).map((type) => (
                    <span
                      key={type}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        background: `${game.theme.primary}15`,
                        color: game.theme.primary,
                      }}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}s
                    </span>
                  ))}
                </div>

                {/* Stats or developer */}
                <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  {stats ? (
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {stats.total?.toLocaleString()}+ resources
                    </span>
                  ) : (
                    <span className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      {game.developer}
                    </span>
                  )}
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    style={{ color: game.theme.primary }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Clash of Clans Featured Section */}
      <section className="py-16">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/icon.jpg" alt="Clash of Clans" className="w-12 h-12 rounded-xl" />
                  <span className="text-xs font-medium px-3 py-1 rounded-full" style={{ background: '#F59E0B', color: '#000' }}>
                    Most Popular
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">Clash of Clans</h2>
                <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                  {cocStats.total?.toLocaleString() || '4,500'}+ base layouts ready to copy. War bases, farming bases,
                  trophy bases for TH3-TH18 and BH3-BH10. One-click import to your game.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/clash-of-clans"
                    className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold rounded-xl transition-colors"
                    style={{ background: '#F59E0B' }}
                  >
                    Browse Bases
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link
                    href="/clash-of-clans/guides"
                    className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors"
                    style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                  >
                    View Guides
                  </Link>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#F59E0B' }}>{cocStats.byBaseType?.war || '500'}+</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>War Bases</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#F59E0B' }}>TH3-18</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>All Levels</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: '#F59E0B' }}>BH3-10</div>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Builder</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">About Game365Hub</h2>
          <div className="space-y-4" style={{ color: 'var(--text-muted)' }}>
            <p>
              Game365Hub is your one-stop destination for mobile gaming resources. We provide
              high-quality base layouts, comprehensive guides, tier lists, and strategies for
              the most popular mobile games.
            </p>
            <p>
              Whether you're looking for the perfect war base in Clash of Clans, the meta deck
              in Clash Royale, or the best loadout in PUBG Mobile, we've got you covered.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
