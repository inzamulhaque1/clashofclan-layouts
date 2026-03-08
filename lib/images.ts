// Centralized image management for Game365Hub
// All images are controlled from this single file
// To update an image, just change the URL here

export const images = {
  // Site branding (local — hardcoded)
  logo: "/logo.png",
  favicon: "/favicon.png",

  // Game hero images & logos
  games: {
    coc: {
      hero: "/images/games/clash-of-clans.jpg",
      logo: "https://i.pinimg.com/564x/98/92/8c/98928c82f78bdd50c5a28d8fa4633035.jpg",
      featured: "/images/games/coc-featured.jpg",
    },
    brawlStars: {
      hero: "/images/games/brawl-stars.webp",
      logo: "https://logodownload.org/wp-content/uploads/2021/11/brawl-stars-logo.png",
    },
    clashRoyale: {
      hero: "/images/games/clash-royale.jpg",
      logo: "https://static.wikia.nocookie.net/logopedia/images/4/47/ClashRoyaleNewAppIcon.png/revision/latest/scale-to-width-down/250?cb=20240425150654",
    },
    freeFire: {
      hero: "/images/games/free-fire.png",
      logo: "https://fontmeme.com/images/garena-free-fire-font.jpg",
    },
    pubg: {
      hero: "/images/games/pubg.jpg",
      logo: "https://play-lh.googleusercontent.com/_hITCaObfE2LSkWq9_ydYMmUXxVfexoRc5qA8GJy0GtSg_ee3ZKqwGPGa7KOjuG2j7E",
    },
  },

  // Blog article images (add as: "slug": "image-url")
  blog: {} as Record<string, string>,

  // Guide images (add as: "game/slug": "image-url")
  guides: {} as Record<string, string>,
};

// Helper to get image with fallback
export function getImage(path: string, fallback: string = "/images/games/clash-of-clans.jpg"): string {
  return path || fallback;
}
