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

const ITEMS_PER_PAGE = 12;

export default function BHLevelPage({ params, searchParams }) {
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

  const allBases = queryContent('clash-of-clans', 'base', { hallType: 'BH', hallLevel: level });
  const currentPage = Math.max(1, parseInt(searchParams?.page) || 1);

  // Pagination calculations
  const totalBases = allBases.length;
  const totalPages = Math.ceil(totalBases / ITEMS_PER_PAGE);
  const validPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedBases = allBases.slice(startIndex, endIndex);

  // Build pagination URL helper
  const buildPageUrl = (page) => {
    return page > 1
      ? `/${game.slug}/bh/${level}?page=${page}`
      : `/${game.slug}/bh/${level}`;
  };

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
          {totalBases} layouts available. Click to copy directly to Clash of Clans.
        </p>
      </div>

      {/* Results Info */}
      {totalBases > 0 && (
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Showing {startIndex + 1}-{Math.min(endIndex, totalBases)} of {totalBases} bases
          </p>
          {totalPages > 1 && (
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Page {validPage} of {totalPages}
            </p>
          )}
        </div>
      )}

      {/* Grid */}
      {paginatedBases.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedBases.map((base, index) => (
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

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center gap-2 mt-8">
          {/* Previous Button */}
          {validPage > 1 ? (
            <Link
              href={buildPageUrl(validPage - 1)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </Link>
          ) : (
            <span
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </span>
          )}

          {/* Page Numbers */}
          <div className="flex items-center gap-1">
            {(() => {
              const pages = [];
              const showEllipsisStart = validPage > 3;
              const showEllipsisEnd = validPage < totalPages - 2;

              pages.push(1);

              if (showEllipsisStart) {
                pages.push('...');
              }

              for (let i = Math.max(2, validPage - 1); i <= Math.min(totalPages - 1, validPage + 1); i++) {
                if (!pages.includes(i)) pages.push(i);
              }

              if (showEllipsisEnd) {
                pages.push('...');
              }

              if (totalPages > 1 && !pages.includes(totalPages)) {
                pages.push(totalPages);
              }

              return pages.map((page, idx) => (
                page === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-2" style={{ color: 'var(--text-muted)' }}>...</span>
                ) : (
                  <Link
                    key={page}
                    href={buildPageUrl(page)}
                    className="w-10 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: page === validPage ? 'var(--game-primary)' : 'var(--surface-100)',
                      color: page === validPage ? '#000' : 'var(--text-primary)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {page}
                  </Link>
                )
              ));
            })()}
          </div>

          {/* Next Button */}
          {validPage < totalPages ? (
            <Link
              href={buildPageUrl(validPage + 1)}
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <span
              className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium opacity-50 cursor-not-allowed"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              Next
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </nav>
      )}

      {/* Quick Navigation - Other BH Levels */}
      <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">Browse Other Builder Hall Levels</h2>
        <div className="flex flex-wrap gap-2">
          {[10, 9, 8, 7, 6, 5, 4, 3].map((bhLevel) => (
            <Link
              key={bhLevel}
              href={`/${game.slug}/bh/${bhLevel}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                bhLevel === level ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                background: bhLevel === level ? 'var(--game-primary)' : 'var(--surface-100)',
                color: bhLevel === level ? '#000' : 'var(--text-primary)',
                border: '1px solid var(--border)',
                ringColor: 'var(--game-primary)',
              }}
            >
              BH{bhLevel}
            </Link>
          ))}
        </div>
        <Link
          href={`/${game.slug}/th`}
          className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
          style={{ color: 'var(--game-primary)' }}
        >
          View Town Hall Bases →
        </Link>
      </section>

      {/* Related Guides */}
      <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">Builder Base Guides</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href={`/${game.slug}/guides/how-to-copy-base`}
            className="p-4 rounded-xl transition-all hover:scale-[1.02]"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <h3 className="font-medium mb-1">How to Copy Bases</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Learn to import layouts with one click
            </p>
          </Link>
          <Link
            href={`/${game.slug}/guides`}
            className="p-4 rounded-xl transition-all hover:scale-[1.02]"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <h3 className="font-medium mb-1">All Clash of Clans Guides</h3>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Tips, strategies, and tutorials
            </p>
          </Link>
        </div>
      </section>

      {/* SEO Content */}
      <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">About BH{level} Bases</h2>
        <div className="space-y-3 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
          <p>
            Builder Hall {level} {level >= 9 ? 'is a high-level builder base with advanced defenses and the powerful O.T.T.O hut potential.' : level >= 6 ? 'introduces important defensive buildings and army compositions.' : 'is great for learning Builder Base fundamentals.'}
            A well-designed base can help you climb the trophy ladder and earn more resources.
          </p>
          <p>
            Our BH{level} bases are optimized for versus battles and updated for the {new Date().getFullYear()} meta.
            Each layout comes with a one-click copy link for easy import into your game.
          </p>
        </div>
      </section>
    </div>
  );
}
