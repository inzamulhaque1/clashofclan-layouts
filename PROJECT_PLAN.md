# Game365Hub — 3-Day Launch Plan

> Last updated: 2026-05-13
> Status: Restructure code shipped (commit ec9c45e). Scraper broken (false positives, dead source URLs). Site live but `/codes` and `/[game]/codes` pages empty. Cron disabled until rebuild.
> Goal: Launch a working game-codes aggregator in 3 focused days, then go live in one push.

---

## Mission

Daily redemption codes hub for 10 popular live-service games. Trustworthy, fast, mobile-first. Monetized via display ads + top-up affiliate links. Realistic 6-month target: $20–30/month at 3–4 hr/day effort.

## Why this works (and why the v1 scraper didn't)

People search **"[game] codes [month] [year]"** every few days — recurring intent we can rank for. Codes themselves are facts (not copyrightable) so they're scrapable.

The v1 scraper failed because:
- 9 of 10 source URLs were invented and 404'd.
- The regex `\b[A-Z0-9]{6,20}\b` matched any all-caps string on the page (meta tag names, tracking IDs). One HSR run produced 449 "codes", all junk.
- No verification layer, no source authority, no manual override.

The v2 design fixes all three: real sources, per-game extractors, manual approval queue.

---

## Day 1 — Data foundation & content seeding

**Goal:** End the day with `data/codes.json` containing real codes for every game, sourced manually. Site renders properly with real content, no automation needed yet.

### Tasks

1. **Lineup decision (30 min)**
   - CoC doesn't have classic redeem codes (Supercell uses event passes, not codes). Two options:
     - **A.** Drop CoC, add **Brawl Stars** (Supercell, has creator codes + promo events).
     - **B.** Keep CoC but reframe its page as "Supercell creator codes + events" — content will be thin.
   - Default: A. Confirm with user before executing.

2. **Source map per game (2 hr)**
   For each game produce a row in `docs/sources.md`:
   - Official redeem URL (verified live)
   - Official X/Twitter account (codes drop here first)
   - 2–3 trusted secondary sources (validate URLs return 200 + actually list codes)
   - Known code pattern as regex (e.g. HSR: `STARRAIL[A-Z0-9]*` / `HSR[A-Z0-9]+`; FF: `[A-Z0-9]{12}`)
   - Typical reward type

3. **Schema upgrade for `data/codes.json` (30 min)**
   Per-code fields: `code`, `reward`, `firstSeen`, `lastVerified`, `source`, `region` (`"global"` or specific), `addedBy` (`"manual"` | `"scraper"`), `verified` (bool).
   Add `expired[]` entries: `code`, `reward`, `expiredOn`, `firstSeen`.

4. **Manual seed data (3 hr)**
   Hand-curate for each game:
   - 5–10 active codes with real rewards
   - 10–20 expired codes (helps long-tail SEO and gives the page visible history on day one)
   Sources for seeding: each game's official Twitter, hoyo-codes.com (HoYoverse), Pocket Tactics archives, Pro Game Guides archives, Polygon code articles.

5. **Schema-drive page render check (1 hr)**
   Wire `app/[game]/codes/page.tsx` to read new schema. Render locally and verify all 10 game code pages display correctly. Fix any breakage in `CodeRow`/`CodeTable` from new fields.

**End-of-day check:** `npm run build` passes, all 10 `/[game]/codes` routes render real codes, `/codes` index aggregates correctly.

---

## Day 2 — Smart scraper & verification

**Goal:** Replace the naive scraper with per-game extractors that produce only valid codes, with manual approval gate.

### Tasks

1. **HoYoverse games via API (1 hr)**
   Integrate `hoyo-codes.com/api/codes?game={genshin|hkrpg|nap}` — community-maintained, fast, JSON. Covers Genshin, HSR, ZZZ.

2. **Per-game HTML extractors (3 hr)**
   For each remaining game, write an extractor in `scripts/extractors/{game-id}.ts` that:
   - Fetches the specific source URL identified Day 1.
   - Uses a site-specific CSS selector (e.g. `ul.codes-list li`, `.entry-content table tr`) — never a page-wide regex.
   - Applies the game's known code pattern.
   - Returns `{ code, reward, source }[]`.
   Use `node-html-parser` or `cheerio` (~30 KB) for proper DOM parsing instead of regex on raw HTML.

3. **Verification layer (1 hr)**
   - Pattern check: code must match game's regex.
   - Cross-source: code must appear in ≥2 sources OR be flagged for manual review.
   - Auto-expire: if a code in `active` hasn't been seen in any source for 14 days → move to `expired`.

4. **Manual approval queue (1 hr)**
   Scraper writes new candidates to `data/pending-codes.json` instead of directly to `codes.json`. A second script `scripts/approve-codes.ts` (local, manual) lists pending, you accept/reject, accepted codes merge to `codes.json`. Cron only runs the scraper part — approval stays human-in-the-loop.

5. **Cron + notification (30 min)**
   Re-enable `.github/workflows/scrape-codes.yml` on a saner cadence (every 2 hours, not 30 min — codes don't drop that fast). On new candidates, open a GitHub issue assigned to you with the pending list. Keeps you in the loop without emailing.

6. **Dry-run end-to-end (1 hr)**
   Trigger the workflow manually, inspect the issue / pending file, approve cleanly. Verify the produced `codes.json` is clean.

**End-of-day check:** Scraper finds 5–20 real codes across 10 games, zero junk in `data/codes.json`.

---

## Day 3 — UI, SEO & launch

**Goal:** Site looks pro, ranks for codes queries, ad-slot-ready. Then deploy.

### Tasks

1. **Codes page redesign (3 hr)**
   - Active codes: card or table with the code in monospace, large copy button, reward, "Redeem now" button linking to the game's official redeem URL, "verified" badge, age (`2 days ago`).
   - Expired codes: collapsed accordion below.
   - "Last updated" timestamp prominent above the fold.
   - Mobile-first — most code searches are mobile.

2. **Per-game landing pages (2 hr)**
   `/[game]` template pulling from `games.json`:
   - Hero with logo, name, active codes count, CTA → `/[game]/codes`.
   - "How to redeem" — 4–6 step list (write per game, ~5 min each).
   - FAQ accordion — 3–5 Q&A per game (template + game-specific).
   - Internal links to other games.

3. **SEO (2 hr)**
   - Title format: `{Game} Redeem Codes ({Month} {Year}) — Active Working Codes`
   - Meta description: `{N} working {Game} codes for {Month} {Year}. Free {currency}, rewards & more. Updated {today's date}.`
   - JSON-LD on each codes page: `ItemList` for codes, `FAQPage` for FAQ, `HowTo` for redeem steps.
   - Open Graph + Twitter card images (auto-generate using `@vercel/og` or static per-game OG images).
   - Verify `sitemap.ts` and `robots.ts` are current.

4. **Monetization stubs (1 hr)**
   - AdSense placeholder slots: above-fold banner on `/codes`, in-content between active/expired on `/[game]/codes`, sticky bottom on mobile. Structure HTML, don't enable yet.
   - Affiliate stub: link to Codashop / official top-up pages with placeholder affiliate tag. Wire up when Codashop affiliate is approved.

5. **About + Footer + Header (30 min)**
   - About page: rewrite around codes mission.
   - Footer: link block with all 10 game codes pages.
   - Header: simplified nav.

6. **Launch checklist (1 hr)**
   - Local: `npm run build` passes, all routes 200.
   - Mobile responsive walkthrough.
   - Lighthouse on `/codes` and a representative `/[game]/codes` (target Performance ≥ 85, Accessibility ≥ 95).
   - Vercel preview deploy, smoke test from phone.
   - Push to `main`, verify production.
   - Submit sitemap to Google Search Console.
   - Re-enable scraper cron.

**End-of-day 3: Live.**

---

## Open decisions (resolve before Day 1 starts)

| # | Decision | Default recommendation |
|---|---|---|
| 1 | Keep CoC or swap for Brawl Stars? | **Swap to Brawl Stars** — Supercell brand fit, actually has promo codes |
| 2 | Auto-publish scraped codes or manual approval? | **Manual approval** — daily 3–4 hr budget is plenty, $20–30/mo target doesn't justify junk-risk of auto |
| 3 | AdSense application timing? | **Structure ad slots Day 3, apply 1–2 weeks after launch** once Google sees consistent updates and traffic |
| 4 | Codashop affiliate? | **Yes**, apply Day 3 in parallel with launch — even pending status, we can stub the links |

---

## Success criteria

- All 10 game code pages live with real, hand-verified codes by end of Day 1.
- Scraper finds 5+ new candidate codes in a 24-hour window with zero junk by end of Day 2.
- Production deploy passing all routes, Lighthouse mobile ≥ 85 Performance, by end of Day 3.
- First indexed page in Google Search Console within 7 days of launch.

## Out of scope (Phase 2, post-launch)

- Tier lists, build guides, character pages
- Reddit/Discord integration
- Newsletter
- Per-user code submission
- Multi-language (English first, add Hindi/Indonesian later if traffic warrants)
- Pinterest auto-poster (re-enable separately if codes site gets traction)
