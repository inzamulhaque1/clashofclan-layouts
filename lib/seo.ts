import type { Metadata } from "next";

const SITE_URL = "https://game365hub.com";
const SITE_NAME = "Game365Hub";

interface MetaProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function createMetadata({ title, description, path = "", image }: MetaProps): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || `${SITE_URL}/og-image.png`;

  return {
    title,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function createJsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: "Your ultimate mobile gaming resource hub. Guides, strategies, tier lists for Clash of Clans, Brawl Stars, Clash Royale, Free Fire & more.",
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};
