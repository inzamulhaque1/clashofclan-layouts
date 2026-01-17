/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // CoC Gold/Orange accent
        primary: '#F59E0B',
        // Dark blue CoC theme
        surface: {
          DEFAULT: '#0f172a',
          50: '#1e293b',
          100: '#1e293b',
          200: '#334155',
          300: '#475569',
        },
        // Muted blue-gray
        muted: '#94a3b8',
        // CoC themed colors
        coc: {
          gold: '#F59E0B',
          blue: '#3b82f6',
          dark: '#0f172a',
          darker: '#0c1222',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};
