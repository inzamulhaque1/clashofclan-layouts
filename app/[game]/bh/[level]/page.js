import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug, getGameSlugs } from '@/config/games';
import { queryContent } from '@/lib/data';
import { generateBreadcrumbStructuredData } from '@/lib/seo';
import BaseCard from '@/components/BaseCard';

export async function generateStaticParams() {
  const params = [];

  // Generate params for all games that have BH levels
  for (const gameSlug of getGameSlugs()) {
    const game = getGameBySlug(gameSlug);
    if (game?.levels?.builderHall) {
      const { min, max } = game.levels.builderHall;
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
  if (isNaN(level) || level < 3 || level > 10) return {};

  const bases = queryContent('clash-of-clans', 'base', { hallType: 'BH', hallLevel: level });
  const year = new Date().getFullYear();
  const count = bases.length > 0 ? `${bases.length}+` : 'Best';

  return {
    title: `Best BH${level} Base Layouts ${year} with Copy Link - Builder Hall ${level} Bases`,
    description: `Download ${count} BH${level} base layouts ${year} with one-click copy links. Best Builder Hall ${level} versus battle bases for Clash of Clans.`,
  };
}

export default function BHLevelPage({ params }) {
  const game = getGameBySlug(params.game);
  const level = parseInt(params.level, 10);

  // Only Clash of Clans has BH bases
  if (!game || game.slug !== 'clash-of-clans') {
    notFound();
  }

  const levelConfig = game.levels.builderHall;
  if (isNaN(level) || level < levelConfig.min || level > levelConfig.max) {
    notFound();
  }

  const bases = queryContent('clash-of-clans', 'base', { hallType: 'BH', hallLevel: level });

  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: game.name, path: `/${game.slug}` },
    { name: 'Builder Hall', path: `/${game.slug}/bh` },
    { name: `BH${level}`, path: `/${game.slug}/bh/${level}` },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header */}
      <div className="mb-8">
        <Link href={`/${game.slug}/bh`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← All Builder Halls
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          BH{level} <span style={{ color: 'var(--game-primary)' }}>Base Layouts</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          {bases.length} layouts available. Click to copy directly to Clash of Clans.
        </p>
      </div>

      {/* Grid */}
      {bases.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bases.map((base, index) => (
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
            No bases for BH{level} yet. Check back soon!
          </p>
        </div>
      )}

      {/* SEO */}
      <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">About BH{level} Bases</h2>
        <div className="space-y-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          <p>
            Builder Hall {level} offers unique defensive capabilities for versus battles.
            A well-designed base can help you climb the trophy ladder and earn more resources.
          </p>
        </div>
      </section>
    </div>
  );
}
