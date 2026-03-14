// Pinterest Auto-Poster Configuration
// All secrets come from environment variables (GitHub Actions secrets or .env.local)

export const config = {
  pinterest: {
    appId: process.env.PINTEREST_APP_ID || "",
    appSecret: process.env.PINTEREST_APP_SECRET || "",
    accessToken: process.env.PINTEREST_ACCESS_TOKEN || "",
    refreshToken: process.env.PINTEREST_REFRESH_TOKEN || "",
    boardId: process.env.PINTEREST_BOARD_ID || "",
  },
  posting: {
    minPins: 5,
    maxPins: 10,
    siteUrl: "https://game365hub.com",
    siteName: "Game365Hub",
  },
  brand: {
    bgColor: "#0a0a0f",
    accentColor: "#CC1517",
    textColor: "#FFFFFF",
    mutedColor: "#9ca3af",
    width: 1000,
    height: 1150,
  },
};
