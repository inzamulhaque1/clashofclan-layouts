import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/seo';
import { getGuide, getAllGuideSlugs } from '@/lib/guides';
import GuideShareButtons from '@/components/GuideShareButtons';

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const guide = getGuide(params.slug);
  if (!guide) return {};

  return generatePageMeta({
    title: guide.title,
    description: guide.description,
    path: `/guides/${params.slug}`,
    image: guide.image,
  });
}

// Calculate reading time
function getReadingTime(content) {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes;
}

// Category colors
const categoryColors = {
  'Basics': { bg: 'rgba(59, 130, 246, 0.15)', text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)' },
  'Attack': { bg: 'rgba(239, 68, 68, 0.15)', text: '#ef4444', border: 'rgba(239, 68, 68, 0.3)' },
  'Defense': { bg: 'rgba(16, 185, 129, 0.15)', text: '#10b981', border: 'rgba(16, 185, 129, 0.3)' },
  'Trophy': { bg: 'rgba(245, 158, 11, 0.15)', text: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)' },
};

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  const readingTime = getReadingTime(guide.content);
  const colors = categoryColors[guide.category] || categoryColors['Basics'];

  // Enhanced markdown-like rendering
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentList = [];
    let listType = null;
    let inTable = false;
    let tableRows = [];

    const flushList = () => {
      if (currentList.length > 0) {
        if (listType === 'ul') {
          elements.push(
            <ul key={elements.length} className="space-y-3 mb-6 ml-1">
              {currentList.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          );
        } else {
          elements.push(
            <ol key={elements.length} className="space-y-3 mb-6 ml-1 counter-reset-list">
              {currentList.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </span>
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ol>
          );
        }
        currentList = [];
        listType = null;
      }
    };

    const flushTable = () => {
      if (tableRows.length > 0) {
        const header = tableRows[0];
        const body = tableRows.slice(2);
        elements.push(
          <div key={elements.length} className="overflow-x-auto mb-8 rounded-xl" style={{ border: '1px solid var(--border)' }}>
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: 'var(--surface-100)' }}>
                  {header.split('|').filter(c => c.trim()).map((cell, i) => (
                    <th key={i} className="px-5 py-3 text-left font-semibold" style={{ borderBottom: '1px solid var(--border)' }}>
                      {cell.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, i) => (
                  <tr key={i} className="transition-colors" style={{ background: i % 2 === 0 ? 'transparent' : 'var(--surface-50)' }}>
                    {row.split('|').filter(c => c.trim()).map((cell, j) => (
                      <td key={j} className="px-5 py-3" style={{ color: 'var(--text-secondary)', borderBottom: i < body.length - 1 ? '1px solid var(--border)' : 'none' }}>
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, index) => {
      const trimmed = line.trim();

      if (!trimmed) {
        flushList();
        flushTable();
        return;
      }

      // Tables
      if (trimmed.startsWith('|')) {
        flushList();
        inTable = true;
        tableRows.push(trimmed);
        return;
      } else if (inTable) {
        flushTable();
      }

      // H2 Headers - Major sections
      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold mt-12 mb-6 pb-3 flex items-center gap-3" style={{ borderBottom: '2px solid var(--primary)' }}>
            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
            {trimmed.replace('## ', '')}
          </h2>
        );
        return;
      }

      // H3 Headers - Subsections
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-semibold mt-10 mb-4 flex items-center gap-2">
            <span className="text-primary">#</span>
            {trimmed.replace('### ', '')}
          </h3>
        );
        return;
      }

      // H4 Headers - Minor sections
      if (trimmed.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={index} className="text-lg font-semibold mt-8 mb-3" style={{ color: 'var(--text-primary)' }}>
            {trimmed.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // Bold and styling
      const processBold = (text) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i} className="font-semibold" style={{ color: 'var(--text-primary)' }}>{part}</strong> : part
        );
      };

      // Unordered lists
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(processBold(trimmed.substring(2)));
        return;
      }

      // Ordered lists
      if (/^\d+\.\s/.test(trimmed)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(processBold(trimmed.replace(/^\d+\.\s/, '')));
        return;
      }

      // Regular paragraph
      flushList();
      elements.push(
        <p key={index} className="mb-5 leading-relaxed text-base" style={{ color: 'var(--text-secondary)' }}>
          {processBold(trimmed)}
        </p>
      );
    });

    flushList();
    flushTable();

    return elements;
  };

  const relatedGuides = getAllGuideSlugs()
    .filter(slug => slug !== params.slug)
    .slice(0, 3)
    .map(slug => getGuide(slug));

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Header */}
      <div className="relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.bg} 0%, transparent 50%)` }}>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)' }}></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 pb-12 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </Link>
            <svg className="w-4 h-4" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/guides" className="transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
              Guides
            </Link>
            <svg className="w-4 h-4" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="px-2 py-1 rounded-md text-xs font-medium" style={{ background: colors.bg, color: colors.text }}>
              {guide.category}
            </span>
          </nav>

          {/* Title Section */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            {/* Image/Icon */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden" style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
              {guide.image ? (
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
              ) : (
                <span className="text-5xl">{guide.icon}</span>
              )}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
                {guide.title}
              </h1>
              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                {guide.description}
              </p>

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: 'var(--text-muted)' }}>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{readingTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  <span>{guide.category}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>Updated 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image Banner */}
      {guide.image && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 -mt-4 mb-8">
          <div className="relative rounded-2xl overflow-hidden h-48 sm:h-56" style={{ background: colors.bg, border: `1px solid ${colors.border}` }}>
            <div className="w-full h-full flex items-center justify-center p-6">
              <img
                src={guide.image}
                alt={guide.title}
                className="max-w-40 max-h-40 sm:max-w-48 sm:max-h-48 object-contain"
                style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.4))' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{guide.icon}</span>
                <span className="text-white font-medium">{guide.category} Guide</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <article className="guide-content">
          {renderContent(guide.content)}
        </article>

        {/* Share Section */}
        <GuideShareButtons title={guide.title} slug={params.slug} />

        {/* Related Guides */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: 'var(--text-primary)' }}>
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Related Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedGuides.map((g, i) => {
              const gColors = categoryColors[g.category] || categoryColors['Basics'];
              return (
                <Link
                  key={i}
                  href={`/guides/${getAllGuideSlugs().find(s => getGuide(s).title === g.title)}`}
                  className="group p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1"
                  style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: gColors.bg }}>
                      {g.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md mb-2 inline-block" style={{ background: gColors.bg, color: gColors.text }}>
                        {g.category}
                      </span>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                        {g.title}
                      </h3>
                      <p className="text-sm line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                        {g.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(217, 119, 6, 0.2) 100%)', border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.5) 0%, transparent 70%)' }}></div>

          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Ready to dominate?</h3>
              <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                Browse 4,500+ pro base layouts with instant copy links.
              </p>
            </div>
            <Link href="/th" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-lg flex-shrink-0">
              Browse Bases
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Back to Guides */}
        <div className="mt-12 text-center">
          <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Guides
          </Link>
        </div>
      </div>
    </div>
  );
}
