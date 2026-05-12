# Game365Hub - Project Context

## Project
- **Site**: game365hub.com — daily redemption codes aggregator for 10 live-service games
- **Stack**: Next.js 14 + TypeScript + Tailwind CSS, static site generation
- **Repo**: github.com/inzamulhaque1/clashofclan-layouts (legacy name, kept)
- **Domain**: game365hub.com | Contact: inzamul.dev@gmail.com
- **Direction**: Pivoted May 2026 from CoC/blog content site to codes aggregator. See `PROJECT_PLAN.md` for the active 3-day launch plan.

## Brand & Design Rules
- **Colors**: Primary red `#CC1517`, text-light `#1B1C3C`, text-muted `#5A5B78`
- **Fonts**: Michroma (hero/CTA headings), Manrope (navbar + body sections), Inter (fallback)
- **Hero**: Dark bg `#0a0a0f`, CSS graphic shapes (circles, dot grid, glows), 10 floating game logos, typewriter rotating text
- **Buttons**: Outline with left-to-right color fill on hover (`btn-fill`, `btn-fill-dark` CSS classes), pill shape (`rounded-full`)
- NO scale-up hover animations on buttons
- NO gradients
- NO dark blue + red color combos
- NO heavy image backgrounds — use CSS shapes instead
- External image URLs only (no local logo files in `public/`)

## 10 Games Covered
Genshin Impact, Honkai: Star Rail, Wuthering Waves, Zenless Zone Zero, Garena Free Fire, Mobile Legends: Bang Bang, PUBG Mobile, Blox Fruits (Roblox), AFK Journey, Clash of Clans. CoC may be swapped for Brawl Stars — see Open Decisions in `PROJECT_PLAN.md`.

## Routes
- `/` — homepage (hero, latest codes, games grid, about, CTA)
- `/codes` — all-codes aggregate index
- `/[game]` — per-game landing (10 games)
- `/[game]/codes` — per-game codes page (10 games)
- `/guides` — placeholder, content TBD
- `/about`, `/contact`, `/privacy`, `/terms`

## Key Files
- `app/page.tsx` — Homepage
- `app/[game]/page.tsx`, `app/[game]/codes/page.tsx` — Dynamic per-game routes
- `app/codes/page.tsx` — All-codes index
- `components/CodeRow.tsx`, `CodeTable.tsx`, `LatestCodesSection.tsx` — Codes UI
- `components/GameCard.tsx`, `RotatingText.tsx`, `Header.tsx`, `Footer.tsx`
- `lib/codes.ts` — Codes data helpers
- `lib/games.ts` — Game metadata helpers
- `lib/constants.ts` — `GAMES` array, `NAV_LINKS`, `GameId` type
- `lib/images.ts` — Centralized external game logo URLs
- `lib/seo.ts` — Metadata + JSON-LD helpers
- `data/codes.json` — Codes database (active + expired per game). Source of truth; manual edits welcome.
- `data/games.json` — Game metadata (developer, currency, redeem URL, official handles, redeem steps)
- `scripts/grab-codes.ts` — Auto-scraper (currently broken; see PROJECT_PLAN.md Day 2 for rewrite)
- `app/globals.css` — Custom CSS (btn-fill animations, scrollbar)
- `tailwind.config.ts` — Custom theme colors, fonts
- `next.config.js` — Permissive remote image patterns (`hostname: '**'`)

## Automation
- `.github/workflows/scrape-codes.yml` — Code scraper cron, **currently disabled** (cron commented out, `workflow_dispatch` only) until the v2 scraper ships. See PROJECT_PLAN.md Day 2.
- `.github/workflows/pinterest.yml` — Pinterest auto-poster, manual-trigger only (intentionally disabled to stop Vercel hits + email noise). Tools live in `tools/pinterest/`.

## Pending Work
See `PROJECT_PLAN.md` for the active 3-day launch plan. Headline items:
- Real source URLs + manual code seeding (Day 1)
- Per-game extractor rewrite + manual approval queue (Day 2)
- Codes UI redesign + SEO + monetization stubs + launch (Day 3)
