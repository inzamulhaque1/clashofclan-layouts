import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug, getGameSlugs } from '@/config/games';
import { queryContent, getContentStats } from '@/lib/data';
import { generateBreadcrumbStructuredData } from '@/lib/seo';
import BaseCard from '@/components/BaseCard';

export async function generateStaticParams() {
  const params = [];

  // Generate params for all games that have TH levels
  for (const gameSlug of getGameSlugs()) {
    const game = getGameBySlug(gameSlug);
    if (game?.levels?.townHall) {
      const { min, max } = game.levels.townHall;
      for (let level = min; level <= max; level++) {
        params.push({ game: gameSlug, level: String(level) });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  const level = parseInt(params.level, 10);

  if (!game || game.slug !== 'clash-of-clans') return {};
  if (isNaN(level) || level < 3 || level > 18) return {};

  const bases = queryContent('clash-of-clans', 'base', { hallType: 'TH', hallLevel: level });
  const year = new Date().getFullYear();
  const count = bases.length > 0 ? `${bases.length}+` : 'Best';

  return {
    title: `Best TH${level} Base Layouts ${year} with Copy Link - Town Hall ${level} War, Farm, Trophy Bases`,
    description: `Download ${count} TH${level} base layouts ${year} with one-click copy links. Best Town Hall ${level} war bases, farming bases, trophy bases, CWL anti 3 star designs.`,
  };
}

const FILTER_TYPES = [
  { key: 'all', label: 'All' },
  { key: 'war', label: 'War' },
  { key: 'farm', label: 'Farm' },
  { key: 'trophy', label: 'Trophy' },
  { key: 'hybrid', label: 'Hybrid' },
];

export default function THLevelPage({ params, searchParams }) {
  const game = getGameBySlug(params.game);
  const level = parseInt(params.level, 10);

  // Only Clash of Clans has TH bases
  if (!game || game.slug !== 'clash-of-clans') {
    notFound();
  }

  const levelConfig = game.levels.townHall;
  if (isNaN(level) || level < levelConfig.min || level > levelConfig.max) {
    notFound();
  }

  const allBases = queryContent('clash-of-clans', 'base', { hallType: 'TH', hallLevel: level });
  const typeFilter = searchParams?.type;

  const filteredBases = typeFilter
    ? allBases.filter(b => b.baseType === typeFilter)
    : allBases;

  const typeCounts = {
    all: allBases.length,
    war: allBases.filter(b => b.baseType === 'war').length,
    farm: allBases.filter(b => b.baseType === 'farm').length,
    trophy: allBases.filter(b => b.baseType === 'trophy').length,
    hybrid: allBases.filter(b => b.baseType === 'hybrid').length,
  };

  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: game.name, path: `/${game.slug}` },
    { name: 'Town Hall', path: `/${game.slug}/th` },
    { name: `TH${level}`, path: `/${game.slug}/th/${level}` },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header */}
      <div className="mb-8">
        <Link href={`/${game.slug}/th`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← All Town Halls
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          TH{level} <span style={{ color: 'var(--game-primary)' }}>Base Layouts</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          {allBases.length} layouts available. Click to copy directly to Clash of Clans.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {FILTER_TYPES.map(({ key, label }) => {
          const count = typeCounts[key] || 0;
          const isActive = (key === 'all' && !typeFilter) || typeFilter === key;
          const href = key === 'all' ? `/${game.slug}/th/${level}` : `/${game.slug}/th/${level}?type=${key}`;

          if (key !== 'all' && count === 0) return null;

          return (
            <Link
              key={key}
              href={href}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'text-black'
                  : ''
              }`}
              style={{
                background: isActive ? 'var(--game-primary)' : 'var(--surface-100)',
                color: isActive ? '#000' : 'var(--text-muted)',
              }}
            >
              {label}
              <span className="ml-1.5" style={{ opacity: isActive ? 0.6 : 1 }}>
                {count}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Grid */}
      {filteredBases.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBases.map((base, index) => (
            <BaseCard
              key={`${base.baseType}-${base.baseNumber}-${index}`}
              base={base}
              gameSlug={game.slug}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center" style={{ background: 'var(--surface-100)' }}>
            <svg className="w-8 h-8" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">No bases found</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {typeFilter
              ? `No ${typeFilter} bases for TH${level} yet.`
              : `No bases for TH${level} yet.`}
          </p>
          {typeFilter && (
            <Link href={`/${game.slug}/th/${level}`} className="mt-2 inline-block" style={{ color: 'var(--game-primary)' }}>
              View all bases
            </Link>
          )}
        </div>
      )}

      {/* SEO */}
      <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">About TH{level} Bases</h2>
        <div className="space-y-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          <p>
            Town Hall {level} introduces {level >= 15 ? 'powerful late-game content' : 'important new features'}.
            The right base design is crucial for both Clan Wars and protecting your resources.
          </p>
        </div>
      </section>
    </div>
  );
}
