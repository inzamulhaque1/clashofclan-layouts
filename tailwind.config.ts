import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        light: "#1B1C3C",
        muted: "#5A5B78",
      },
      colors: {
        primary: {
          DEFAULT: "#CC1517",
          dark: "#A81113",
          light: "#E03032",
        },
        dark: {
          DEFAULT: "#FFFFFF",
          surface: "#F5F5F8",
          lighter: "#EBEBF0",
          border: "#D8D8E0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
