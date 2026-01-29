import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { queryContent } from '@/lib/data';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game) return {};

  return {
    title: `${game.name} Guides & Tips`,
    description: `Learn ${game.name} strategies, tips, and tricks. Comprehensive guides for all skill levels.`,
  };
}

export default function GuidesIndexPage({ params }) {
  const game = getGameBySlug(params.game);

  if (!game) {
    notFound();
  }

  // Only Clash of Clans has guides for now
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href={`/${game.slug}`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← Back to {game.name}
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          {game.shortName} <span style={{ color: 'var(--game-primary)' }}>Guides</span>
        </h1>
        <p className="max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Learn strategies and tips to improve your gameplay. From beginner basics to advanced techniques.
        </p>
      </div>

      {/* Guides by Category */}
      {Object.entries(categories).map(([category, categoryGuides]) => (
        <section key={category} className="mb-12">
          <h2 className="text-xl font-semibold mb-6">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/${game.slug}/guides/${guide.slug}`}
                className="card group overflow-hidden"
              >
                {guide.image && (
                  <div className="aspect-video overflow-hidden" style={{ background: 'var(--surface-100)' }}>
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{guide.icon}</span>
                    <span className="text-xs font-medium px-2 py-0.5 rounded" style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}>
                      {guide.category}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                    {guide.title}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {guide.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
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
