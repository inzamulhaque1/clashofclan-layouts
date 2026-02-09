import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { getContentById, queryContent } from '@/lib/data';
import { generatePageMeta, generateBreadcrumbStructuredData } from '@/lib/seo';
import GuideShareButtons from '@/components/GuideShareButtons';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  // Generate params for CoC guides
  const guides = queryContent('clash-of-clans', 'guide');
  return guides.map(guide => ({
    game: 'clash-of-clans',
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game || game.slug !== 'clash-of-clans') return {};

  const guide = getContentById('clash-of-clans', 'guide', params.slug);
  if (!guide) return {};

  return generatePageMeta({
    title: guide.title,
    description: guide.description,
    path: `/${game.slug}/guides/${params.slug}`,
    image: guide.image,
  });
}

export default function GuideDetailPage({ params }) {
  const game = getGameBySlug(params.game);

  if (!game) {
    notFound();
  }

  // Only Clash of Clans has guides for now
  if (game.slug !== 'clash-of-clans') {
    notFound();
  }

  const guide = getContentById('clash-of-clans', 'guide', params.slug);

  if (!guide) {
    notFound();
  }

  const allGuides = queryContent('clash-of-clans', 'guide');
  const relatedGuides = allGuides
    .filter(g => g.slug !== params.slug && g.category === guide.category)
    .slice(0, 3);

  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: game.name, path: `/${game.slug}` },
    { name: 'Guides', path: `/${game.slug}/guides` },
    { name: guide.title, path: `/${game.slug}/guides/${params.slug}` },
  ]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
        <Link href="/" className="transition-colors hover:text-white">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${game.slug}`} className="transition-colors hover:text-white">{game.shortName}</Link>
        <span className="mx-2">/</span>
        <Link href={`/${game.slug}/guides`} className="transition-colors hover:text-white">Guides</Link>
        <span className="mx-2">/</span>
        <span style={{ color: 'var(--text-primary)' }}>{guide.title}</span>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        {guide.image && (
          <div className="aspect-video mb-8 rounded-2xl overflow-hidden" style={{ background: 'var(--surface-100)' }}>
            <img
              src={guide.image}
              alt={guide.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{guide.icon}</span>
          <span className="text-sm font-medium px-3 py-1 rounded-lg" style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}>
            {guide.category}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{guide.title}</h1>
        <p className="text-lg" style={{ color: 'var(--text-muted)' }}>{guide.description}</p>

        {/* Share */}
        <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <GuideShareButtons
            title={guide.title}
            url={`/${game.slug}/guides/${params.slug}`}
          />
        </div>
      </header>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        <div
          className="guide-content"
          style={{
            '--text-color': 'var(--text-primary)',
            '--heading-color': 'var(--text-primary)',
            '--muted-color': 'var(--text-muted)',
            '--link-color': 'var(--game-primary)',
            '--border-color': 'var(--border)',
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-4" style={{ color: 'var(--text-primary)' }} {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: 'var(--text-primary)' }} {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-lg font-semibold mt-6 mb-2" style={{ color: 'var(--text-primary)' }} {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }} {...props} />,
              ul: ({ node, ...props }) => <ul className="mb-4 space-y-2 list-disc list-inside" style={{ color: 'var(--text-secondary)' }} {...props} />,
              ol: ({ node, ...props }) => <ol className="mb-4 space-y-2 list-decimal list-inside" style={{ color: 'var(--text-secondary)' }} {...props} />,
              li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
              strong: ({ node, ...props }) => <strong className="font-semibold" style={{ color: 'var(--text-primary)' }} {...props} />,
              a: ({ node, ...props }) => <a className="underline transition-colors" style={{ color: 'var(--game-primary)' }} {...props} />,
              img: ({ node, ...props }) => (
                <img
                  className="w-full rounded-xl my-6"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                  loading="lazy"
                  {...props}
                />
              ),
              hr: ({ node, ...props }) => <hr className="my-8 border-0" style={{ borderTop: '1px solid var(--border)' }} {...props} />,
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto mb-6 rounded-xl" style={{ border: '1px solid var(--border)' }}>
                  <table className="w-full text-sm" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => <thead style={{ background: 'var(--surface-100)' }} {...props} />,
              th: ({ node, ...props }) => <th className="px-4 py-3 text-left font-semibold border-b" style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }} {...props} />,
              td: ({ node, ...props }) => <td className="px-4 py-3 border-b" style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }} {...props} />,
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="pl-4 my-4 italic"
                  style={{ borderLeft: '3px solid var(--game-primary)', color: 'var(--text-muted)' }}
                  {...props}
                />
              ),
              code: ({ node, inline, ...props }) =>
                inline ? (
                  <code className="px-1.5 py-0.5 rounded text-sm" style={{ background: 'var(--surface-100)', color: 'var(--game-primary)' }} {...props} />
                ) : (
                  <code className="block p-4 rounded-lg text-sm overflow-x-auto" style={{ background: 'var(--surface-100)' }} {...props} />
                ),
            }}
          >
            {guide.content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
          <h2 className="text-2xl font-semibold mb-6">Related Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((relGuide) => (
              <Link
                key={relGuide.slug}
                href={`/${game.slug}/guides/${relGuide.slug}`}
                className="card p-5 group"
              >
                <span className="text-2xl mb-2 block">{relGuide.icon}</span>
                <h3 className="font-semibold mb-1 transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                  {relGuide.title}
                </h3>
                <p className="text-sm line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  {relGuide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to Guides */}
      <div className="mt-12 text-center">
        <Link
          href={`/${game.slug}/guides`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-colors"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          All Guides
        </Link>
      </div>
    </div>
  );
}
