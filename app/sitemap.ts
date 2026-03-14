import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { cocGuides } from "@/lib/guides";
import { TH_LEVELS, BH_LEVELS, getAllBaseSlugs, getAllBuilderBaseSlugs } from "@/lib/bases";

const SITE_URL = "https://game365hub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/blog",
  ];

  const gamePages = [
    "/clash-of-clans",
    "/brawl-stars",
    "/clash-royale",
    "/free-fire",
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Guides index page
  const guideIndexPages = [
    {
      url: `${SITE_URL}/clash-of-clans/guides`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // Individual guide pages
  const guideDetailPages = cocGuides.map((guide) => ({
    url: `${SITE_URL}/clash-of-clans/guides/${guide.slug}`,
    lastModified: new Date(guide.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Base index page
  const baseIndexPages = [
    {
      url: `${SITE_URL}/clash-of-clans/bases`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // TH level pages
  const thPages = TH_LEVELS.map((th) => ({
    url: `${SITE_URL}/clash-of-clans/bases/th/${th.level}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // BH level pages
  const bhPages = BH_LEVELS.map((bh) => ({
    url: `${SITE_URL}/clash-of-clans/bases/bh/${bh.level}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // Individual base detail pages (Home Village + Builder Base)
  const allSlugs = [...getAllBaseSlugs(), ...getAllBuilderBaseSlugs()];
  const baseDetailPages = allSlugs.map((slug) => ({
    url: `${SITE_URL}/clash-of-clans/bases/base/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: path === "" ? ("daily" as const) : ("weekly" as const),
      priority: path === "" ? 1 : 0.8,
    })),
    ...gamePages.map((path) => ({
      url: `${SITE_URL}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...blogPages,
    ...guideIndexPages,
    ...guideDetailPages,
    ...baseIndexPages,
    ...thPages,
    ...bhPages,
    ...baseDetailPages,
  ];
}
