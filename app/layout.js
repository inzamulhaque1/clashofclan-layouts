import './globals.css';
import { generatePageMeta, generateWebsiteStructuredData } from '@/lib/seo';
import Link from 'next/link';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import GoogleAnalytics from '@/components/Analytics';
import { AdSenseScript } from '@/components/AdSense';
import AuthProvider from '@/components/AuthProvider';

export const metadata = generatePageMeta({
  title: 'Game365Hub - Multi-Game Resource Hub',
  description: 'Your ultimate gaming resource hub. Base layouts, tier lists, guides, and strategies for Clash of Clans, Brawl Stars, Clash Royale, and more.',
});

// Get your GA4 Measurement ID from Google Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
// Get your AdSense Publisher ID
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export default function RootLayout({ children }) {
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0c1222" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3380799438335685"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
      </head>
      <body>
        <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
        <AdSenseScript publisherId={ADSENSE_ID} />
        <AuthProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Game365Hub"
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/clash-of-clans" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Clash of Clans
            </Link>
            <Link href="/brawl-stars" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Brawl Stars
            </Link>
            <Link href="/clash-royale" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Clash Royale
            </Link>
            <Link href="/contact" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Game365Hub"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Your ultimate gaming resource hub for mobile games.
            </p>
          </div>

          {/* Clash of Clans */}
          <div>
            <h4 className="text-sm font-medium mb-4">Clash of Clans</h4>
            <ul className="space-y-2.5">
              {[18, 17, 16, 15].map(level => (
                <li key={level}>
                  <Link href={`/clash-of-clans/th/${level}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
                    TH{level} Bases
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Games */}
          <div>
            <h4 className="text-sm font-medium mb-4">More Games</h4>
            <ul className="space-y-2.5">
              <li><Link href="/brawl-stars" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Brawl Stars</Link></li>
              <li><Link href="/clash-royale" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Clash Royale</Link></li>
              <li><Link href="/free-fire" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Free Fire</Link></li>
              <li><Link href="/pubg" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>PUBG Mobile</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-sm font-medium mb-4">Guides</h4>
            <ul className="space-y-2.5">
              <li><Link href="/clash-of-clans/guides/how-to-copy-base" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>How to Copy Bases</Link></li>
              <li><Link href="/clash-of-clans/guides/best-th18-attack-strategies" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>TH18 Attack Strategies</Link></li>
              <li><Link href="/clash-of-clans/guides/cwl-base-building-tips" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>CWL Base Building</Link></li>
              <li><Link href="/clash-of-clans/guides" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>All Guides</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              Not affiliated with Supercell, Garena, or Krafton.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
