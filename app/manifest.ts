import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Game365Hub - Daily Codes & Guides",
    short_name: "Game365Hub",
    description:
      "Daily redeem codes, tier lists, and guides for Genshin Impact, Honkai Star Rail, Free Fire, Mobile Legends, Roblox & more.",
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
