'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getRelatedArticles, getAllSlugs } from '@/data/blog-index';

// Image component with fallback
function ArticleImage({ src, alt, className = '' }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center ${className}`}>
        <span className="text-white/50 text-sm">Image</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

// Table component
function DataTable({ title, headers, rows }) {
  return (
    <div className="my-8">
      {title && (
        <h3 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{title}</h3>
      )}
      <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--border)' }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: 'var(--surface-100)' }}>
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-3 text-left font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t" style={{ borderColor: 'var(--border)' }}>
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-3 whitespace-nowrap" style={{ color: j === 0 ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Settings table component (for sensitivity articles)
function SettingsTable({ headers, rows }) {
  return (
    <div className="overflow-x-auto rounded-xl my-4" style={{ border: '1px solid var(--border)' }}>
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'var(--surface-100)' }}>
            {headers.map((header, i) => (
              <th key={i} className="px-3 py-2 text-left font-semibold text-xs whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t" style={{ borderColor: 'var(--border)' }}>
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2 text-xs" style={{ color: j === 0 ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Feature list component
function FeatureList({ features }) {
  return (
    <div className="grid grid-cols-2 gap-2 my-4">
      {features.map((f, i) => (
        <div key={i} className="px-3 py-2 rounded-lg" style={{ background: 'var(--surface-100)' }}>
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{f.label}</span>
          <div className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>{f.value}</div>
        </div>
      ))}
    </div>
  );
}

// Pros/Cons component
function ProsCons({ pros, cons }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4 my-4">
      <div className="p-4 rounded-xl" style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2" style={{ color: '#10B981' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Pros
        </h4>
        <ul className="space-y-1">
          {pros.map((p, i) => (
            <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: '#10B981' }}>+</span> {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 rounded-xl" style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
        <h4 className="font-semibold text-sm mb-2 flex items-center gap-2" style={{ color: '#EF4444' }}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Cons
        </h4>
        <ul className="space-y-1">
          {cons.map((c, i) => (
            <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
              <span style={{ color: '#EF4444' }}>-</span> {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Tips box component
function TipsBox({ title, items }) {
  return (
    <div className="my-8 p-6 rounded-xl" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
      <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#8B5CF6' }}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
            <span className="text-purple-500 font-bold">{i + 1}.</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Section component
function Section({ section, index }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
        {section.title}
      </h2>
      {section.subtitle && (
        <p className="text-sm font-medium mb-3" style={{ color: '#8B5CF6' }}>{section.subtitle}</p>
      )}

      {section.image && (
        <div className="my-4 rounded-xl overflow-hidden h-48 sm:h-64">
          <ArticleImage src={section.image} alt={section.title} className="w-full h-full object-cover" />
        </div>
      )}

      {section.content && (
        <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-muted)' }}>
          {section.content}
        </p>
      )}

      {section.list && (
        <ul className="space-y-2 my-4">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
              <span className="text-purple-500 mt-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary)">$1</strong>') }} />
            </li>
          ))}
        </ul>
      )}

      {section.features && <FeatureList features={section.features} />}

      {section.pros && section.cons && <ProsCons pros={section.pros} cons={section.cons} />}

      {section.settingsTable && (
        <SettingsTable headers={section.settingsTable.headers} rows={section.settingsTable.rows} />
      )}

      {section.tips && (
        <div className="my-4 p-4 rounded-xl" style={{ background: 'var(--surface-100)' }}>
          <h4 className="font-semibold text-sm mb-2" style={{ color: 'var(--text-primary)' }}>Quick Tips:</h4>
          <ul className="space-y-1">
            {section.tips.map((tip, i) => (
              <li key={i} className="text-sm flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                <span style={{ color: '#8B5CF6' }}>•</span> {tip}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Related article card
function RelatedCard({ article }) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
      style={{ border: '1px solid var(--border)' }}
    >
      <div className="relative h-32 overflow-hidden">
        {!imgError ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-600 to-indigo-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span
          className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold"
          style={{ background: article.categoryColor, color: '#000' }}
        >
          {article.category}
        </span>
      </div>
      <div className="p-3" style={{ background: 'var(--surface-100)' }}>
        <h4 className="font-semibold text-sm line-clamp-2 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
          {article.title}
        </h4>
        <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{article.readTime}</p>
      </div>
    </Link>
  );
}

export default function BlogArticlePage({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(params.slug, 3);
  const content = article.content;

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section className="relative">
        <div className="h-64 sm:h-80 lg:h-96 overflow-hidden">
          <ArticleImage
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
              style={{ background: article.categoryColor, color: '#000' }}
            >
              {article.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span>{article.author}</span>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
          <Link href="/" className="hover:text-purple-500">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-purple-500">Blog</Link>
          <span>/</span>
          <span className="truncate" style={{ color: 'var(--text-primary)' }}>{article.title}</span>
        </nav>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        {/* Intro */}
        <div className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-muted)' }}>
          <p dangerouslySetInnerHTML={{ __html: content.intro.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary)">$1</strong>') }} />
        </div>

        {/* Table of Contents */}
        <div className="mb-10 p-6 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h3 className="font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Table of Contents</h3>
          <ul className="space-y-2">
            {content.sections.map((section, i) => (
              <li key={i}>
                <a href={`#section-${i}`} className="text-sm hover:text-purple-500 transition-colors" style={{ color: 'var(--text-muted)' }}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sections */}
        {content.sections.map((section, i) => (
          <div key={i} id={`section-${i}`}>
            <Section section={section} index={i} />
          </div>
        ))}

        {/* Comparison Table */}
        {content.comparisonTable && (
          <DataTable
            title={content.comparisonTable.title}
            headers={content.comparisonTable.headers}
            rows={content.comparisonTable.rows}
          />
        )}

        {/* Tips */}
        {content.tips && (
          <TipsBox title={content.tips.title} items={content.tips.items} />
        )}

        {/* FAQ Section */}
        {content.faq && (
          <div className="mt-10">
            <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              {content.faq.title || 'Frequently Asked Questions'}
            </h3>
            <div className="space-y-4">
              {content.faq.items.map((item, i) => (
                <div key={i} className="p-5 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <h4 className="font-semibold mb-2 flex items-start gap-2" style={{ color: 'var(--text-primary)' }}>
                    <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: '#8B5CF6', color: '#fff' }}>Q</span>
                    {item.q}
                  </h4>
                  <p className="text-sm leading-relaxed pl-8" style={{ color: 'var(--text-muted)' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Conclusion */}
        {content.conclusion && (
          <div className="mt-10 p-6 rounded-xl" style={{ background: 'var(--surface-50)', border: '1px solid var(--border)' }}>
            <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--text-primary)' }}>Conclusion</h3>
            <div className="leading-relaxed" style={{ color: 'var(--text-muted)' }} dangerouslySetInnerHTML={{ __html: content.conclusion.replace(/\*\*(.*?)\*\*/g, '<strong style="color: var(--text-primary)">$1</strong>') }} />
          </div>
        )}

        {/* Image Credits */}
        {content.imageCredits && (
          <div className="mt-8 p-5 rounded-xl" style={{ background: 'var(--surface-50)', border: '1px solid var(--border)' }}>
            <h4 className="font-semibold text-sm mb-3 flex items-center gap-2" style={{ color: 'var(--text-muted)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {content.imageCredits.title || 'Image Credits'}
            </h4>
            <ul className="text-xs space-y-1" style={{ color: 'var(--text-muted)' }}>
              {content.imageCredits.items.map((credit, i) => (
                <li key={i}>• {credit}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mt-10 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs"
                style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="mt-8 p-6 rounded-xl text-center" style={{ background: 'var(--surface-100)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Found this helpful? Share it!</p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigator.share?.({ title: article.title, url: window.location.href })}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ background: '#8B5CF6', color: '#fff' }}
            >
              Share Article
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ background: 'var(--surface-200)', color: 'var(--text-primary)' }}
            >
              Copy Link
            </button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <h3 className="text-xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Related Articles</h3>
        <div className="grid sm:grid-cols-3 gap-4">
          {relatedArticles.map((a) => (
            <RelatedCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="p-8 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)', border: '1px solid rgba(139, 92, 246, 0.2)' }}>
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Want More Gaming Content?</h3>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>Check out our guides, base layouts, and tier lists!</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-5 py-2 rounded-xl font-medium text-white"
              style={{ background: '#8B5CF6' }}
            >
              All Articles
            </Link>
            <Link
              href="/clash-of-clans"
              className="px-5 py-2 rounded-xl font-medium"
              style={{ background: 'var(--surface-100)', color: 'var(--text-primary)' }}
            >
              Clash of Clans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
