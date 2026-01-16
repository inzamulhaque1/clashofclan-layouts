import { notFound } from 'next/navigation';
import Link from 'next/link';
import { generatePageMeta } from '@/lib/seo';
import { getGuide, getAllGuideSlugs } from '@/lib/guides';

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
  });
}

export default function GuidePage({ params }) {
  const guide = getGuide(params.slug);

  if (!guide) {
    notFound();
  }

  // Simple markdown-like rendering
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
            <ul key={elements.length} className="list-disc list-inside space-y-2 text-muted mb-4">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          );
        } else {
          elements.push(
            <ol key={elements.length} className="list-decimal list-inside space-y-2 text-muted mb-4">
              {currentList.map((item, i) => <li key={i}>{item}</li>)}
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
        const body = tableRows.slice(2); // Skip separator row
        elements.push(
          <div key={elements.length} className="overflow-x-auto mb-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  {header.split('|').filter(c => c.trim()).map((cell, i) => (
                    <th key={i} className="px-4 py-2 text-left font-medium">{cell.trim()}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    {row.split('|').filter(c => c.trim()).map((cell, j) => (
                      <td key={j} className="px-4 py-2 text-muted">{cell.trim()}</td>
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

      // Skip empty lines
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

      // Headers
      if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-lg font-semibold mt-8 mb-4">
            {trimmed.replace('### ', '')}
          </h3>
        );
        return;
      }

      if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-xl font-bold mt-10 mb-4">
            {trimmed.replace('## ', '')}
          </h2>
        );
        return;
      }

      if (trimmed.startsWith('#### ')) {
        flushList();
        elements.push(
          <h4 key={index} className="text-base font-semibold mt-6 mb-3">
            {trimmed.replace('#### ', '')}
          </h4>
        );
        return;
      }

      // Bold text handling
      const processBold = (text) => {
        const parts = text.split(/\*\*(.*?)\*\*/g);
        return parts.map((part, i) =>
          i % 2 === 1 ? <strong key={i} className="text-white">{part}</strong> : part
        );
      };

      // Lists
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(processBold(trimmed.substring(2)));
        return;
      }

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
        <p key={index} className="text-muted mb-4 leading-relaxed">
          {processBold(trimmed)}
        </p>
      );
    });

    flushList();
    flushTable();

    return elements;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
        <span className="mx-2">/</span>
        <span className="text-white">{guide.category}</span>
      </nav>

      {/* Header */}
      <div className="mb-8">
        <span className="text-4xl mb-4 block">{guide.icon}</span>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{guide.title}</h1>
        <p className="text-lg text-muted">{guide.description}</p>
      </div>

      {/* Content */}
      <article className="prose prose-invert max-w-none">
        {renderContent(guide.content)}
      </article>

      {/* Related Guides */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-4">Related Guides</h2>
        <div className="flex flex-wrap gap-3">
          {getAllGuideSlugs()
            .filter(slug => slug !== params.slug)
            .slice(0, 3)
            .map(slug => {
              const g = getGuide(slug);
              return (
                <Link
                  key={slug}
                  href={`/guides/${slug}`}
                  className="px-4 py-2 rounded-xl bg-surface-100 hover:bg-surface-200 transition-colors text-sm"
                >
                  {g.icon} {g.title}
                </Link>
              );
            })}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-primary/20 to-amber-500/20 border border-primary/20">
        <h3 className="text-lg font-semibold mb-2">Ready to use a new base?</h3>
        <p className="text-muted mb-4">Browse our collection of {'>'}4500 bases with one-click copy links.</p>
        <Link href="/th" className="btn-primary inline-flex items-center gap-2">
          Browse Bases
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
