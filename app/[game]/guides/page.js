import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { queryContent } from '@/lib/data';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game) return {};

  return {
    title: `${game.name} Guides & Tips 2026 - Expert Strategies | Game365Hub`,
    description: `Master ${game.name} with our comprehensive guides. Attack strategies, base building, farming tips, and advanced techniques for all skill levels.`,
  };
}

// Category icons and colors
const CATEGORY_CONFIG = {
  'Basics': { icon: '📚', color: '#3b82f6', gradient: 'from-blue-500/10 to-blue-600/5' },
  'Attack Strategy': { icon: '⚔️', color: '#ef4444', gradient: 'from-red-500/10 to-red-600/5' },
  'Attack': { icon: '⚔️', color: '#ef4444', gradient: 'from-red-500/10 to-red-600/5' },
  'Defense': { icon: '🛡️', color: '#22c55e', gradient: 'from-green-500/10 to-green-600/5' },
  'Base Building': { icon: '🏗️', color: '#22c55e', gradient: 'from-green-500/10 to-green-600/5' },
  'Trophy': { icon: '🏆', color: '#eab308', gradient: 'from-yellow-500/10 to-yellow-600/5' },
  'War Attacks': { icon: '💥', color: '#f97316', gradient: 'from-orange-500/10 to-orange-600/5' },
  'Heroes': { icon: '🦸', color: '#8b5cf6', gradient: 'from-purple-500/10 to-purple-600/5' },
  'Clan Content': { icon: '👥', color: '#06b6d4', gradient: 'from-cyan-500/10 to-cyan-600/5' },
  'Clan Activities': { icon: '🎮', color: '#06b6d4', gradient: 'from-cyan-500/10 to-cyan-600/5' },
  'Builder Base': { icon: '🔨', color: '#f59e0b', gradient: 'from-amber-500/10 to-amber-600/5' },
  'Farming': { icon: '🌾', color: '#84cc16', gradient: 'from-lime-500/10 to-lime-600/5' },
  'General': { icon: '📖', color: '#6b7280', gradient: 'from-gray-500/10 to-gray-600/5' },
};

function getCategoryConfig(cat) {
  return CATEGORY_CONFIG[cat] || CATEGORY_CONFIG['General'];
}

export default function GuidesIndexPage({ params }) {
  const game = getGameBySlug(params.game);

  if (!game) {
    notFound();
  }

  if (game.slug !== 'clash-of-clans') {
    return <ComingSoonGuides game={game} />;
  }

  const guides = queryContent('clash-of-clans', 'guide');

  // Group guides by category
  const categories = {};
  guides.forEach(guide => {
    const cat = guide.category || 'General';
    if (!categories[cat]) categories[cat] = [];
    categories[cat].push(guide);
  });

  // Pick featured guides (first 3 or specific popular ones)
  const featuredSlugs = ['how-to-copy-base', 'best-th18-attack-strategies', 'spell-placement-guide', 'dark-elixir-farming-guide'];
  const featured = guides.filter(g => featuredSlugs.includes(g.slug)).slice(0, 4);
  const categoryEntries = Object.entries(categories);

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, rgba(217, 119, 6, 0.04) 50%, transparent 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:underline">Home</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/clash-of-clans" className="hover:underline">Clash of Clans</Link>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span style={{ color: 'var(--text-primary)' }}>Guides</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            {/* Left content */}
            <div className="lg:col-span-3 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--game-primary)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--game-primary)' }}></span>
                {guides.length} Expert Guides
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                Clash of Clans
                <span className="block" style={{ color: 'var(--game-primary)' }}>Strategy Guides</span>
              </h1>

              <p className="text-base sm:text-lg max-w-xl leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                Master every aspect of the game — from attack strategies and spell placement to farming efficiency and base building. Written by experienced players.
              </p>

              {/* Quick category pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {categoryEntries.map(([cat]) => {
                  const config = getCategoryConfig(cat);
                  return (
                    <a
                      key={cat}
                      href={`#${cat.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all hover:scale-105"
                      style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
                    >
                      <span>{config.icon}</span>
                      {cat}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right - Stats cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Total Guides', value: guides.length, icon: '📖' },
                  { label: 'Categories', value: categoryEntries.length, icon: '📂' },
                  { label: 'Attack Guides', value: (categories['Attack Strategy'] || []).length + (categories['Attack'] || []).length + (categories['War Attacks'] || []).length, icon: '⚔️' },
                  { label: 'Updated', value: 'Feb 2026', icon: '✅' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl text-center"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--game-primary)' }}>{stat.value}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom border */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(245, 158, 11, 0.3), transparent)' }}></div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Featured Guides */}
        {featured.length > 0 && (
          <section className="py-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
                🔥
              </div>
              <div>
                <h2 className="text-xl font-bold">Popular Guides</h2>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Most read by the community</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {featured.map((guide, idx) => {
                const config = getCategoryConfig(guide.category);
                return (
                  <Link
                    key={guide.slug}
                    href={`/clash-of-clans/guides/${guide.slug}`}
                    className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                  >
                    {/* Image */}
                    {guide.image && (
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }}></div>
                        {idx === 0 && (
                          <div className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-white" style={{ background: 'var(--game-primary)' }}>
                            Most Popular
                          </div>
                        )}
                        <div className="absolute bottom-3 left-3 right-3">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold text-white" style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)' }}>
                            {config.icon} {guide.category}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-4">
                      <h3 className="font-bold text-sm leading-snug mb-1.5 line-clamp-2 group-hover:text-amber-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                        {guide.title}
                      </h3>
                      <p className="text-xs line-clamp-2 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {guide.description}
                      </p>
                      <div className="mt-3 flex items-center gap-1 text-xs font-medium" style={{ color: 'var(--game-primary)' }}>
                        Read Guide
                        <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)' }}></div>

        {/* All Guides by Category */}
        <section className="py-12">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(245, 158, 11, 0.15)' }}>
              📋
            </div>
            <div>
              <h2 className="text-xl font-bold">All Guides by Category</h2>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>Browse {guides.length} comprehensive guides</p>
            </div>
          </div>

          <div className="space-y-12">
            {categoryEntries.map(([category, categoryGuides]) => {
              const config = getCategoryConfig(category);
              return (
                <div key={category} id={category.toLowerCase().replace(/\s+/g, '-')}>
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background: `${config.color}15`, border: `1px solid ${config.color}25` }}
                    >
                      {config.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{category}</h3>
                      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                        {categoryGuides.length} guide{categoryGuides.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <div className="flex-1 h-px ml-4" style={{ background: 'var(--border)' }}></div>
                  </div>

                  {/* Guide cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryGuides.map((guide) => (
                      <Link
                        key={guide.slug}
                        href={`/clash-of-clans/guides/${guide.slug}`}
                        className="group flex gap-4 p-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                        style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                      >
                        {/* Thumbnail */}
                        {guide.image ? (
                          <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0" style={{ background: 'var(--surface-100)' }}>
                            <img
                              src={guide.image}
                              alt={guide.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="w-20 h-20 rounded-lg shrink-0 flex items-center justify-center text-3xl" style={{ background: 'var(--surface-100)' }}>
                            {guide.icon || config.icon}
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-sm">{guide.icon}</span>
                            <span
                              className="text-[10px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider"
                              style={{ background: `${config.color}12`, color: config.color }}
                            >
                              {guide.category}
                            </span>
                          </div>
                          <h4 className="font-semibold text-sm leading-snug mb-1 line-clamp-2 group-hover:text-amber-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                            {guide.title}
                          </h4>
                          <p className="text-xs line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                            {guide.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="shrink-0 self-center">
                          <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: 'var(--game-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-8 pb-16">
          <div className="rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(217, 119, 6, 0.06) 100%)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Need Base Layouts?
            </h2>
            <p className="mb-6 max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Browse our collection of pro-level base layouts for TH7 to TH18. One-tap copy to import any base instantly.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/clash-of-clans/th/18"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-black transition-all hover:scale-105"
                style={{ background: 'var(--game-primary)' }}
              >
                Browse TH18 Bases
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/clash-of-clans"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                All Town Halls
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function ComingSoonGuides({ game }) {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
      <div className="card p-8 max-w-md mx-auto">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
          <svg className="w-8 h-8" style={{ color: 'var(--game-primary)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold mb-2">Guides Coming Soon</h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          We're working on adding guides for {game.name}. Check back soon!
        </p>
        <Link
          href={`/${game.slug}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to {game.name}
        </Link>
      </div>
    </div>
  );
}
