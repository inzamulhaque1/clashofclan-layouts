import type { MetadataRoute } from "next";
import { GAMES, SITE_URL } from "@/lib/constants";
import { guideArticles } from "@/lib/guide-articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { path: "", priority: 1, changeFrequency: "daily" as const },
    { path: "/codes", priority: 0.9, changeFrequency: "hourly" as const },
    { path: "/guides", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const staticUrls = staticPages.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  const gameUrls = GAMES.flatMap((game) => [
    {
      url: `${SITE_URL}/${game.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/${game.id}/codes`,
      lastModified: now,
      changeFrequency: "hourly" as const,
      priority: 0.95,
    },
  ]);

  const guideUrls = guideArticles.map((article) => ({
    url: `${SITE_URL}/guides/${article.slug}`,
    lastModified: new Date(article.updatedDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...gameUrls, ...guideUrls];
}
