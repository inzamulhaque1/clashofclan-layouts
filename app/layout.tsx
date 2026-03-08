import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { createMetadata, createJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = createMetadata({
  title: `${SITE_NAME} - Your Ultimate Mobile Gaming Resource Hub`,
  description:
    "Guides, strategies, tier lists & tips for Clash of Clans, Brawl Stars, Clash Royale, Free Fire & more. Level up your mobile gaming today.",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFFFFF" />
        <link rel="icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(websiteJsonLd)}
        />
      </head>
      <body className="min-h-screen flex flex-col">
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
