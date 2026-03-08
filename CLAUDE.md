# Game365Hub - Project Context

## Project
- **Site**: game365hub.com — multi-game mobile gaming resource hub
- **Stack**: Next.js 14 + TypeScript + Tailwind CSS, static site generation
- **Repo**: github.com/inzamulhaque1/clashofclan-layouts
- **Domain**: game365hub.com | Contact: inzamul.dev@gmail.com

## Brand & Design Rules
- **Colors**: Primary red `#CC1517`, text-light `#1B1C3C`, text-muted `#5A5B78`
- **Fonts**: Michroma (hero/CTA headings), Manrope (navbar + body sections), Inter (fallback)
- **Hero**: Dark bg `#0a0a0f`, CSS graphic shapes (circles, dot grid, glows), 10 floating game logos, typewriter rotating text
- **Buttons**: Outline with left-to-right color fill on hover (`btn-fill`, `btn-fill-dark` CSS classes), pill shape (`rounded-full`)
- NO scale-up hover animations on buttons
- NO gradients
- NO dark blue + red color combos
- NO heavy image backgrounds — use CSS shapes instead
- External image URLs only for game logos (no local logo files)
- Game hero images still use local files in `/public/images/games/`

## Key Files
- `app/page.tsx` — Homepage: Hero, Games, Why Us, Featured Guide, Articles, About (with red spirals), CTA
- `components/RotatingText.tsx` — Typewriter effect (char by char, left to right, with cursor)
- `components/Header.tsx` — Sticky navbar with Manrope font
- `components/Footer.tsx` — Site footer
- `components/GameCard.tsx` — Game card component
- `lib/images.ts` — Centralized external image URLs for game logos
- `lib/constants.ts` — GAMES array (5 games: CoC, Brawl Stars, Clash Royale, Free Fire, PUBG), NAV_LINKS
- `lib/blog.ts` — Blog posts data (1 article so far)
- `app/globals.css` — Custom CSS: btn-fill animations, spiral spin animations, scrollbar styles
- `tailwind.config.ts` — Custom theme colors, fonts
- `next.config.js` — Remote image patterns for external URLs

## External Image Domains (in next.config.js)
- i.pinimg.com, logodownload.org, static.wikia.nocookie.net, fontmeme.com, play-lh.googleusercontent.com

## Pending Work
- Blog content writing (51 topics listed in BLOG_TOPICS.md)
- Game section pages (/clash-of-clans, /brawl-stars, etc.) not built yet
- Game hero images need migration to external URLs
- AdSense approval preparation
