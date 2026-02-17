import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug, getGameSlugs } from '@/config/games';
import { queryContent } from '@/lib/data';
import { generateBreadcrumbStructuredData, generateFAQStructuredData } from '@/lib/seo';
import { generateLevelPageContent } from '@/lib/base-content';
import { isPremiumBase } from '@/lib/bases';
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
  const typeFilter = searchParams?.type;
  const currentPage = Math.max(1, parseInt(searchParams?.page) || 1);

  // Filter bases - handle premium filter
  const filteredBases = typeFilter === 'premium'
    ? allBases.filter(b => isPremiumBase(b))
    : allBases;

  // Count premium bases
  const premiumCount = allBases.filter(b => isPremiumBase(b)).length;

  // Pagination calculations
  const totalBases = filteredBases.length;
  const totalPages = Math.ceil(totalBases / ITEMS_PER_PAGE);
  const validPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (validPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedBases = filteredBases.slice(startIndex, endIndex);

  // Build pagination URL helper
  const buildPageUrl = (page) => {
    const params = new URLSearchParams();
    if (typeFilter) params.set('type', typeFilter);
    if (page > 1) params.set('page', page.toString());
    const queryString = params.toString();
    return `/${game.slug}/bh/${level}${queryString ? `?${queryString}` : ''}`;
  };

  const levelContent = generateLevelPageContent('BH', level);
  const faqStructuredData = levelContent ? generateFAQStructuredData(levelContent.faq) : null;

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
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}

      {/* Header */}
      <div className="mb-8">
        <Link href={`/${game.slug}/bh`} className="text-sm transition-colors mb-4 inline-block" style={{ color: 'var(--text-muted)' }}>
          ← All Builder Halls
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          BH{level} <span style={{ color: 'var(--game-primary)' }}>Base Layouts</span>
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          {allBases.length} layouts available. Click to copy directly to Clash of Clans.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <Link
          href={`/${game.slug}/bh/${level}`}
          className="px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all hover:scale-105"
          style={{
            background: !typeFilter ? 'var(--game-primary)' : 'var(--surface-100)',
            color: !typeFilter ? '#000' : 'var(--text-muted)',
          }}
        >
          All <span style={{ opacity: !typeFilter ? 0.6 : 1 }}>{allBases.length}</span>
        </Link>
        {premiumCount > 0 && (
          <Link
            href={`/${game.slug}/bh/${level}?type=premium`}
            className="px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all hover:scale-105 flex items-center gap-1.5"
            style={{
              background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
              color: '#fff',
              boxShadow: typeFilter === 'premium' ? '0 2px 10px rgba(249,115,22,0.4)' : '0 2px 8px rgba(249,115,22,0.3)',
            }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
            </svg>
            Premium <span style={{ opacity: 0.8 }}>{premiumCount}</span>
          </Link>
        )}
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

      {/* Rich SEO Content */}
      {levelContent && (
        <>
          {/* Introduction */}
          <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
            <h2 className="text-2xl font-bold mb-4">About BH{level} Bases</h2>
            <div className="space-y-4 max-w-3xl" style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {levelContent.introduction.split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* What's New at This Level */}
          {levelContent.whatsNew && levelContent.whatsNew.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">What&apos;s New at BH{level}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {levelContent.whatsNew.map((cat, ci) => {
                  const colors = ['#ef4444', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];
                  const color = colors[ci % colors.length];
                  const bgColor = `rgba(${parseInt(color.slice(1,3),16)},${parseInt(color.slice(3,5),16)},${parseInt(color.slice(5,7),16)},0.1)`;
                  return (
                    <div key={ci} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg flex items-center justify-center text-sm" style={{ background: bgColor, color }}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                        </span>
                        {cat.category}
                      </h3>
                      <ul className="space-y-1 text-sm" style={{ color: 'var(--text-muted)' }}>
                        {cat.items.map((item, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span style={{ color }}>+</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Best Base Types */}
          {levelContent.bestBaseTypes && levelContent.bestBaseTypes.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">Best Base Types for BH{level}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {levelContent.bestBaseTypes.map((bt, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{
                        background: bt.recommended ? 'rgba(16,185,129,0.1)' : 'rgba(107,114,128,0.1)',
                        color: bt.recommended ? '#10b981' : '#6b7280',
                      }}>
                        {bt.recommended ? 'Recommended' : 'Optional'}
                      </span>
                      <h3 className="font-semibold">{bt.type}</h3>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{bt.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Defense Priority Guide */}
          {levelContent.defensePriority && levelContent.defensePriority.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">BH{level} Defense Priority Guide</h2>
              <div className="space-y-3">
                {levelContent.defensePriority.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <span className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm font-bold" style={{
                      background: i === 0 ? 'rgba(239,68,68,0.1)' : i === 1 ? 'rgba(245,158,11,0.1)' : i === 2 ? 'rgba(59,130,246,0.1)' : 'rgba(107,114,128,0.1)',
                      color: i === 0 ? '#ef4444' : i === 1 ? '#f59e0b' : i === 2 ? '#3b82f6' : '#6b7280',
                    }}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-sm">{item.building}</h3>
                      <p className="text-sm mt-0.5" style={{ color: 'var(--text-muted)' }}>{item.reason}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Recommended Upgrade Order */}
          {levelContent.upgradeOrder && levelContent.upgradeOrder.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">BH{level} Recommended Upgrade Order</h2>
              <div className="space-y-4">
                {levelContent.upgradeOrder.map((phase, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <h3 className="font-semibold mb-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold" style={{
                        background: i === 0 ? 'rgba(239,68,68,0.15)' : i === 1 ? 'rgba(245,158,11,0.15)' : 'rgba(16,185,129,0.15)',
                        color: i === 0 ? '#ef4444' : i === 1 ? '#f59e0b' : '#10b981',
                      }}>
                        Phase {i + 1}
                      </span>
                      {phase.title}
                    </h3>
                    <ul className="space-y-1">
                      {phase.items.map((item, j) => (
                        <li key={j} className="text-sm flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
                          <span style={{ color: 'var(--game-primary)' }}>&#8226;</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* FAQ */}
          {levelContent.faq && levelContent.faq.length > 0 && (
            <section className="mt-10">
              <h2 className="text-2xl font-bold mb-4">BH{level} Frequently Asked Questions</h2>
              <div className="space-y-3">
                {levelContent.faq.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <h3 className="font-semibold mb-2">{item.question}</h3>
                    <p className="text-sm" style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
}
