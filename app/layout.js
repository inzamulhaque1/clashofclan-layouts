import './globals.css';
import Script from 'next/script';
import { generatePageMeta, generateWebsiteStructuredData } from '@/lib/seo';
import Link from 'next/link';
import ThemeProvider from '@/components/ThemeProvider';
import GoogleAnalytics from '@/components/Analytics';
import { AdSenseScript } from '@/components/AdSense';
import AuthProvider from '@/components/AuthProvider';
import DynamicHeader from '@/components/DynamicHeader';

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
        {/* Theme initialization - runs before page renders */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3380799438335685"
          crossOrigin="anonymous"
          strategy="afterInteractive"
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
            <DynamicHeader />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
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
              <Link href="/admin/login" className="hover:text-primary transition-colors">Admin</Link>
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
