import './globals.css';
import { generatePageMeta, generateWebsiteStructuredData } from '@/lib/seo';
import Link from 'next/link';
import ThemeProvider from '@/components/ThemeProvider';
import ThemeToggle from '@/components/ThemeToggle';
import GoogleAnalytics from '@/components/Analytics';
import { AdSenseScript } from '@/components/AdSense';
import AuthProvider from '@/components/AuthProvider';
import AnnouncementBar from '@/components/AnnouncementBar';

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
        <AuthProvider>
          <ThemeProvider>
            <AnnouncementBar />
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
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/icon.jpg"
              alt="Clash of Clans"
              width={40}
              height={40}
              className="w-10 h-10 rounded-lg"
            />
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
            <Link href="/lookup" className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Lookup
            </Link>
            <Link href="/leaderboards" className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Leaderboards
            </Link>
            <Link href="/events" className="px-4 py-2 text-sm rounded-lg transition-colors flex items-center gap-1.5 nav-events-link" style={{ color: 'var(--text-muted)' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Events
            </Link>
            <Link href="/guides" className="px-4 py-2 text-sm rounded-lg transition-colors" style={{ color: 'var(--text-muted)' }}>
              Guides
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
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/icon.jpg"
                alt="Clash of Clans"
                width={36}
                height={36}
                className="w-9 h-9 rounded-lg"
              />
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

          {/* Live Data & Resources */}
          <div>
            <h4 className="text-sm font-medium mb-4">Live Data</h4>
            <ul className="space-y-2.5">
              <li><Link href="/lookup" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Player & Clan Lookup</Link></li>
              <li><Link href="/leaderboards" className="text-sm transition-colors hover:text-primary flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Leaderboards
              </Link></li>
              <li><Link href="/stats" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Leagues & Stats</Link></li>
              <li><Link href="/events" className="text-sm transition-colors hover:text-primary flex items-center gap-1.5" style={{ color: 'var(--text-muted)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Live Events
              </Link></li>
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
