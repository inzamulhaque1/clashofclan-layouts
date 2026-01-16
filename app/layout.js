import './globals.css';
import { generatePageMeta, generateWebsiteStructuredData } from '@/lib/seo';
import Link from 'next/link';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import GoogleAnalytics from '@/components/Analytics';
import { AdSenseScript } from '@/components/AdSense';

export const metadata = generatePageMeta({});

// Get your GA4 Measurement ID from Google Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;
// Get your AdSense Publisher ID
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export default function RootLayout({ children }) {
  const websiteStructuredData = generateWebsiteStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0c1222" />
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
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
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
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center shadow-lg shadow-primary/20">
              <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-lg font-bold">CoC Bases</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/th" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Town Hall
            </Link>
            <Link href="/bh" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Builder Hall
            </Link>
            <Link href="/search" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Search
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/admin"
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm rounded-xl transition-colors"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Admin
            </Link>

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
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-amber-600 flex items-center justify-center">
                <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="font-bold">CoC Bases</span>
            </div>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              The best Clash of Clans base layouts. Copy with one click.
            </p>
          </div>

          {/* Town Hall */}
          <div>
            <h4 className="text-sm font-medium mb-4">Town Hall</h4>
            <ul className="space-y-2.5">
              {[18, 17, 16, 15].map(level => (
                <li key={level}>
                  <Link href={`/th/${level}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
                    TH{level} Bases
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Builder Hall */}
          <div>
            <h4 className="text-sm font-medium mb-4">Builder Hall</h4>
            <ul className="space-y-2.5">
              {[10, 9, 8, 7].map(level => (
                <li key={level}>
                  <Link href={`/bh/${level}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
                    BH{level} Bases
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Base Types */}
          <div>
            <h4 className="text-sm font-medium mb-4">Base Types</h4>
            <ul className="space-y-2.5">
              <li><Link href="/search?type=war" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>War Bases</Link></li>
              <li><Link href="/search?type=farm" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Farm Bases</Link></li>
              <li><Link href="/search?type=trophy" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Trophy Bases</Link></li>
              <li><Link href="/search?type=hybrid" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Hybrid Bases</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              Not affiliated with Supercell. Clash of Clans is a trademark of Supercell.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
