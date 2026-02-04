import './globals.css';
import Script from 'next/script';
import { generatePageMeta, generateWebsiteStructuredData } from '@/lib/seo';
import ThemeProvider from '@/components/ThemeProvider';
import GoogleAnalytics from '@/components/Analytics';
import { AdSenseScript } from '@/components/AdSense';
import AuthProvider from '@/components/AuthProvider';
import DynamicHeader from '@/components/DynamicHeader';
import DynamicFooter from '@/components/DynamicFooter';

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
        {/* Pinterest Domain Verification */}
        <meta name="p:domain_verify" content="74c21baffa489f83e091da0337169028" />
        {/* Theme initialization - runs before page renders */}
        <Script src="/theme-init.js" strategy="beforeInteractive" />
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3380799438335685"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        {/* CPABuild Content Locker */}
        <Script id="cpabuild-config" strategy="afterInteractive">
          {`var tHFLO_ebv_ecSjvc={"it":4587736,"key":"04270"};`}
        </Script>
        <Script
          src="https://da4talg8ap14y.cloudfront.net/a47da62.js"
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
            <DynamicFooter />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

