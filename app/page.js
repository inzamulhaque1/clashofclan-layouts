import Link from 'next/link';
import { getAllGames } from '@/config/games';
import { getContentStats } from '@/lib/data';

export default function PortalLandingPage() {
  const allGames = getAllGames();
  const cocStats = getContentStats('clash-of-clans', 'base');

  const games = [
    {
      slug: 'clash-of-clans',
      name: 'Clash of Clans',
      description: 'Base layouts with one-click copy',
      icon: '🏰',
      color: '#F59E0B',
      stats: `${cocStats.total?.toLocaleString() || '4,500'}+ bases`,
      active: true,
    },
    {
      slug: 'brawl-stars',
      name: 'Brawl Stars',
      description: 'Brawler guides & tier lists',
      icon: '🥊',
      color: '#FF6B35',
      stats: 'Coming Soon',
      active: false,
    },
    {
      slug: 'clash-royale',
      name: 'Clash Royale',
      description: 'Best decks & strategies',
      icon: '👑',
      color: '#2563EB',
      stats: 'Coming Soon',
      active: false,
    },
    {
      slug: 'free-fire',
      name: 'Free Fire',
      description: 'Character guides & loadouts',
      icon: '🔥',
      color: '#EF4444',
      stats: 'Coming Soon',
      active: false,
    },
    {
      slug: 'pubg',
      name: 'PUBG Mobile',
      description: 'Weapon guides & settings',
      icon: '🎯',
      color: '#F59E0B',
      stats: 'Coming Soon',
      active: false,
    },
    {
      slug: 'frozen-city',
      name: 'Frozen City',
      description: 'Survival tips & guides',
      icon: '❄️',
      color: '#06B6D4',
      stats: 'Coming Soon',
      active: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15) 0%, transparent 50%)'
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 lg:py-28">
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} />
              Your Gaming Resource Hub
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Level Up Your
              <span className="block mt-2" style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Gaming Skills
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Base layouts, guides, tier lists, and strategies for your favorite mobile games. Updated daily.
            </p>

            {/* Quick Stats */}
            <div className="flex justify-center gap-10 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {cocStats.total?.toLocaleString() || '4,500'}+
                </div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Resources</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>6</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Games</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Free</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Forever</div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/clash-of-clans"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' }}
            >
              Browse Clash of Clans
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            Choose Your Game
          </h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Select a game to explore guides, layouts, and resources
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {games.map((game) => (
            <Link
              key={game.slug}
              href={`/${game.slug}`}
              className="group relative rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)'
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${game.color}10 0%, transparent 70%)`
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${game.color}15` }}
                >
                  {game.icon}
                </div>

                {/* Name */}
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {game.name}
                </h3>

                {/* Description */}
                <p className="text-sm mb-3" style={{ color: 'var(--text-muted)' }}>
                  {game.description}
                </p>

                {/* Stats/Status */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium px-2 py-1 rounded"
                    style={{
                      background: game.active ? `${game.color}15` : 'var(--surface-200)',
                      color: game.active ? game.color : 'var(--text-muted)'
                    }}
                  >
                    {game.stats}
                  </span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    style={{ color: game.color }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Clash of Clans Highlight */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div
          className="rounded-2xl p-8 md:p-10"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)',
            border: '1px solid rgba(245, 158, 11, 0.2)'
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            {/* Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🏰</span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: '#F59E0B', color: '#000' }}
                >
                  FEATURED
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                Clash of Clans Bases
              </h2>

              <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
                {cocStats.total?.toLocaleString() || '4,500'}+ base layouts for all Town Hall and Builder Hall levels.
                War, farming, trophy, and CWL bases with one-click copy links.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/clash-of-clans"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-colors"
                  style={{ background: '#F59E0B', color: '#000' }}
                >
                  Browse All Bases
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/clash-of-clans/th/18"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-colors"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  TH18 Bases
                </Link>
                <Link
                  href="/clash-of-clans/guides"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold transition-colors"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
                >
                  Guides
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#F59E0B' }}>
                  {cocStats.byHallType?.TH || '3000'}+
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Town Hall</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#F59E0B' }}>
                  {cocStats.byHallType?.BH || '1500'}+
                </div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Builder Hall</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold" style={{ color: '#F59E0B' }}>16</div>
                <div className="text-xs" style={{ color: 'var(--text-muted)' }}>TH Levels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Popular Town Hall Levels
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[18, 17, 16, 15, 14, 13, 12, 11, 10].map((level) => (
            <Link
              key={level}
              href={`/clash-of-clans/th/${level}`}
              className="px-5 py-2.5 rounded-lg font-medium text-sm transition-all hover:scale-105"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                color: 'var(--text-primary)'
              }}
            >
              TH{level}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
