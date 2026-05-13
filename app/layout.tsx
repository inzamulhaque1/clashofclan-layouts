import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata, createJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  ...createMetadata({
    title: `${SITE_NAME} — Daily Redemption Codes for 9 Live-Service Games`,
    description:
      "Daily redemption codes for Genshin Impact, Honkai: Star Rail, Wuthering Waves, ZZZ, Free Fire, Mobile Legends, PUBG Mobile, Blox Fruits, and AFK Journey. Verified and refreshed every 2 hours.",
  }),
  verification: {
    google: "Uv-gSwY8rqQK2cd5klXswNlxNxrXeoPXBVdL_T7856I",
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Michroma&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(websiteJsonLd)}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3380799438335685"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col font-body">
        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
