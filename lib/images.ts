// Centralized image management for Game365Hub.
// Game logos are sourced from the Apple App Store CDN (mzstatic.com), which
// allows public hotlinking without a Referer check. To swap a game logo,
// query https://itunes.apple.com/search?term={game}&entity=software and
// take the artworkUrl512 field.

import type { GameId } from "./constants";

export const images = {
  logo: "/logo.png",
  favicon: "/favicon.png",
  ogImage: "/og-image.png",
};

export const gameLogos: Record<GameId, string> = {
  "genshin-impact":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/19/a7/21/19a72154-655e-aeab-0ba8-77e2320d1dc1/AppIcon-0-0-1x_U007epad-0-1-85-220.png/512x512bb.jpg",
  "honkai-star-rail":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/56/10/4a/56104ae6-272f-0619-908e-6ce14305b4fe/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
  "wuthering-waves":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e2/4b/d3/e24bd34a-a524-ec6c-8a82-520c5ef23913/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
  "zenless-zone-zero":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/1e/9d/911e9df7-8a8e-66e3-14d8-83867c5b219e/AppIcon-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
  "free-fire":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/b5/d6/7e/b5d67e0f-94ad-7a4a-65e2-1c03d0ce2a56/AppIcon-1774968976-0-0-1x_U007emarketing-0-8-0-85-220.png/512x512bb.jpg",
  "mobile-legends":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/36/ac/2e/36ac2e8f-9834-9d7a-61ff-38ae61a97d9d/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
  "pubg-mobile":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/42/a0/f1/42a0f10c-fde1-87ba-a22e-493304fd9c96/AppIcon-0-0-1x_U007emarketing-0-7-0-85-220.png/512x512bb.jpg",
  "roblox-blox-fruits":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/db/0b/da/db0bda24-c2b9-137d-40b9-2cbcfe732c0f/AppIcon-0-0-1x_U007epad-0-1-0-85-220.png/512x512bb.jpg",
  "afk-journey":
    "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/00/03/98/00039857-2355-25bf-3786-484a370fc62e/AppIcon-Global-1x_U007emarketing-0-8-0-85-220-0.png/512x512bb.jpg",
};
