import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Game365Hub - Mobile Gaming Resource Hub",
    short_name: "Game365Hub",
    description:
      "Guides, strategies, tier lists & tips for Clash of Clans, Brawl Stars, Clash Royale, Free Fire & more.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#CC1517",
    icons: [
      {
        src: "/favicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
