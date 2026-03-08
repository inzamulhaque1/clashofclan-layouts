import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

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
  ];
}
