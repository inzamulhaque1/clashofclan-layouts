import Link from 'next/link';
import { generatePageMeta } from '@/lib/seo';
import { getAllGuideSlugs, getGuide } from '@/lib/guides';

export const metadata = generatePageMeta({
  title: 'Clash of Clans Guides 2026 - Attack Strategies, Base Building Tips',
  description: 'Learn Clash of Clans attack strategies, base building tips, and pro guides for TH3-TH18. Master war attacks, farming strategies, and trophy pushing techniques!',
  path: '/guides',
});

// Category styling
const categoryStyles = {
  'Basics': { bg: 'rgba(59, 130, 246, 0.15)', text: '#3b82f6', border: 'rgba(59, 130, 246, 0.3)', icon: '📚' },
  'Attack': { bg: 'rgba(239, 68, 68, 0.15)', text: '#ef4444', border: 'rgba(239, 68, 68, 0.3)', icon: '⚔️' },
  'Defense': { bg: 'rgba(16, 185, 129, 0.15)', text: '#10b981', border: 'rgba(16, 185, 129, 0.3)', icon: '🛡️' },
  'Trophy': { bg: 'rgba(245, 158, 11, 0.15)', text: '#f59e0b', border: 'rgba(245, 158, 11, 0.3)', icon: '🏆' },
};

export default function GuidesPage() {
  // Get all guides from the lib
  const allGuides = getAllGuideSlugs().map(slug => ({
    slug,
    ...getGuide(slug)
  }));

  const categories = [...new Set(allGuides.map(g => g.category))];

  // Featured guide (first one or a specific one)
  const featuredGuide = allGuides.find(g => g.slug === 'best-th18-attack-strategies') || allGuides[0];

  return (
    <div style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, transparent 50%)' }}>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.2) 0%, transparent 50%)' }}></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 relative">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link href="/" className="flex items-center gap-1 transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <svg className="w-4 h-4" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span style={{ color: 'var(--text-primary)' }}>Guides</span>
          </nav>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-4" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--primary)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                {allGuides.length} Pro Guides
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight" style={{ color: 'var(--text-primary)' }}>
                Clash of Clans
                <span className="block text-primary">Strategy Guides</span>
              </h1>

              <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
                Master attack strategies, base building, and trophy pushing with our comprehensive guides. Updated for 2026 meta.
              </p>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => {
                  const style = categoryStyles[cat] || categoryStyles['Basics'];
                  return (
                    <span key={cat} className="px-3 py-1.5 rounded-full text-sm font-medium" style={{ background: style.bg, color: style.text }}>
                      {style.icon} {cat}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Featured Guide Card */}
            {featuredGuide && (
              <Link
                href={`/guides/${featuredGuide.slug}`}
                className="group relative lg:w-96 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
              >
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-1 rounded-md text-xs font-bold bg-primary text-black">
                    Featured
                  </span>
                </div>

                {/* Thumbnail Image */}
                <div className="relative h-48 overflow-hidden" style={{ background: categoryStyles[featuredGuide.category]?.bg }}>
                  <div className="w-full h-full flex items-center justify-center p-4">
                    <img
                      src={featuredGuide.image}
                      alt={featuredGuide.title}
                      className="max-w-32 max-h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                      style={{ filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.3))' }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>

                <div className="p-5">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-md mb-2 inline-block" style={{ background: categoryStyles[featuredGuide.category]?.bg, color: categoryStyles[featuredGuide.category]?.text }}>
                    {featuredGuide.category}
                  </span>
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {featuredGuide.title}
                  </h3>
                  <p className="text-sm line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {featuredGuide.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium">
                    Read Guide
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Guides by Category */}
        {categories.map(category => {
          const style = categoryStyles[category] || categoryStyles['Basics'];
          const categoryGuides = allGuides.filter(g => g.category === category);

          return (
            <section key={category} className="mb-16">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl" style={{ background: style.bg }}>
                  {style.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{category} Guides</h2>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {categoryGuides.length} guide{categoryGuides.length !== 1 ? 's' : ''}
                  </p>
                </div>
              </div>

              {/* Guide Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryGuides.map(guide => (
                  <Link
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
                    style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}
                  >
                    {/* Card Thumbnail */}
                    <div className="relative h-40 overflow-hidden" style={{ background: style.bg }}>
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <img
                          src={guide.image}
                          alt={guide.title}
                          className="max-w-24 max-h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                          style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.3))' }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      {/* Category badge on image */}
                      <div className="absolute top-3 left-3">
                        <span className="text-xs font-medium px-2 py-1 rounded-md backdrop-blur-sm" style={{ background: 'rgba(0,0,0,0.5)', color: '#fff' }}>
                          {guide.icon} {category}
                        </span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        3 min read
                      </div>

                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2" style={{ color: 'var(--text-primary)' }}>
                        {guide.title}
                      </h3>

                      <p className="text-sm line-clamp-2 mb-4" style={{ color: 'var(--text-muted)' }}>
                        {guide.description}
                      </p>

                      <div className="flex items-center gap-1 text-primary text-sm font-medium">
                        Read guide
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        {/* CTA Section */}
        <section className="mt-8 p-8 rounded-3xl relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.1) 100%)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20" style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.4) 0%, transparent 70%)' }}></div>

          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                Ready to apply what you learned?
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Browse our collection of 4,500+ pro base layouts with instant copy links.
              </p>
            </div>
            <Link href="/th" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-lg flex-shrink-0">
              Browse Bases
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* SEO Content */}
        <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Learn to Dominate Clash of Clans
            </h2>
            <div className="space-y-4" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Whether you're a new player learning the basics or a seasoned veteran looking to improve your war performance, our comprehensive Clash of Clans guides have you covered. Each guide is written by experienced players and updated regularly to reflect the current meta.
              </p>
              <p>
                Our guides cover everything from basic mechanics like how to copy and import base layouts, to advanced topics like designing anti-3 star war bases and executing perfect Legend League attacks. We break down complex strategies into easy-to-follow steps.
              </p>
              <p>
                <strong style={{ color: 'var(--text-primary)' }}>Topics covered:</strong> Attack strategies for all Town Hall levels, base building fundamentals, CWL preparation, trophy pushing techniques, and much more. Bookmark this page and check back regularly for new guides!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
