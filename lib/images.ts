// Centralized image management for Game365Hub
// All game logos are external URLs to keep the repo light.
// To swap a game logo, just change the URL here.

import type { GameId } from "./constants";

export const images = {
  // Site branding (local files)
  logo: "/logo.png",
  favicon: "/favicon.png",
  ogImage: "/og-image.png",
};

// Game logos (external, square-friendly)
export const gameLogos: Record<GameId, string> = {
  "genshin-impact":
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Genshin_Impact_logo.png/220px-Genshin_Impact_logo.png",
  "honkai-star-rail":
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Honkai_Star_Rail_logo.png/220px-Honkai_Star_Rail_logo.png",
  "wuthering-waves":
    "https://upload.wikimedia.org/wikipedia/en/thumb/5/5d/Wuthering_Waves_Logo.png/220px-Wuthering_Waves_Logo.png",
  "zenless-zone-zero":
    "https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Zenless_Zone_Zero_logo.png/220px-Zenless_Zone_Zero_logo.png",
  "free-fire":
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Garena_Free_Fire_logo.png/220px-Garena_Free_Fire_logo.png",
  "mobile-legends":
    "https://upload.wikimedia.org/wikipedia/en/thumb/2/27/Mobile_Legends_Bang_Bang.png/220px-Mobile_Legends_Bang_Bang.png",
  "pubg-mobile":
    "https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/PUBG_Mobile_logo.png/220px-PUBG_Mobile_logo.png",
  "roblox-blox-fruits":
    "https://tr.rbxcdn.com/180DAY-21d8c3f6f78f3eb37e8e6ff60d4d7c7f/420/420/Image/Webp/noFilter",
  "afk-journey":
    "https://play-lh.googleusercontent.com/yKHQwj-mEIu_4CJTsMlIp7-RY8C7HpwYrqs1FVPqVU4kEYr6PSWcRTpXVCKD1f7gxV4=w240-h480",
  "clash-of-clans":
    "https://i.pinimg.com/564x/98/92/8c/98928c82f78bdd50c5a28d8fa4633035.jpg",
};
