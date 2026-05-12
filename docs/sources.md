# Code Sources — Per-Game Map

> Each URL listed below was validated via live fetch on 2026-05-13.
> Mark a source `WORKING` only after a real fetch returns codes. Don't add unverified URLs to this doc — that's how v1 shipped 9 dead URLs.

For every game:
- **Official redeem URL** + **Official X/Twitter** are in `data/games.json`
- **Primary source** = the aggregator we'll scrape on Day 2
- **Secondary** = manual cross-check during seeding and ad-hoc verification
- **Code pattern** = regex used to validate scraped strings before they enter `data/codes.json`
- **Reward example** = the kind of payload typical for this game (helps fill `defaultReward`)

---

## Genshin Impact

| | |
|---|---|
| Primary | `https://www.pockettactics.com/genshin-impact/codes` — WORKING. Active codes in `<ul><li>` under "all of the new Genshin codes" heading. |
| Secondary | `https://progameguides.com/genshin-impact/genshin-impact-codes/` — WORKING but updates lag. Use for cross-check only. |
| Official redeem | `https://genshin.hoyoverse.com/en/gift` |
| Official X | `@GenshinImpact` |
| Code pattern | `^[A-Za-z0-9]{6,18}$` — codes are often mixed case (`NicolaCoco`, `GENSHINGIFT`, `FEOMBCVX6UO7`) |
| Reward type | Primogems, Mora, Hero's Wit, Mystic Enhancement Ore |
| Notes | `GENSHINGIFT` is a permanent code, useful as a sanity-check baseline. |

## Honkai: Star Rail

| | |
|---|---|
| Primary | `https://www.pockettactics.com/honkai-star-rail/codes` — WORKING |
| Secondary | Official redeem page (login required, manual only) |
| Official redeem | `https://hsr.hoyoverse.com/gift` |
| Official X | `@honkaistarrail` |
| Code pattern | `^[A-Za-z0-9]{8,16}$` — `STARRAILGIFT`, `QS395DJQU4HK`, `SILVERWOLFLV999` |
| Reward type | Stellar Jade, Credits, Traveler's Guide, Bottled Soda |
| Notes | `STARRAILGIFT` is permanent baseline. |

## Wuthering Waves

| | |
|---|---|
| Primary | `https://www.pockettactics.com/wuthering-waves/codes` — WORKING (often only 1 active at a time) |
| Secondary | Kuro Games official Discord (manual) |
| Official redeem | `https://wutheringwaves.kurogames.com/en/main/gift` |
| Official X | `@Wuthering_Waves` |
| Code pattern | `^[A-Z0-9]{10,20}$` |
| Reward type | Astrites, Shell Credits, Premium Resonance Potions |
| Notes | Low code volume — 1-2 active typically. Don't trigger junk filters on small payloads. |

## Zenless Zone Zero

| | |
|---|---|
| Primary | `https://www.pockettactics.com/zenless-zone-zero/codes` — WORKING |
| Secondary | HoYoLab community page (manual cross-check) |
| Official redeem | `https://zenless.hoyoverse.com/redemption` |
| Official X | `@ZZZ_EN` |
| Code pattern | `^[A-Za-z0-9]{6,16}$` — `ZZZ28HERO`, `zzzCuteness` (mixed case happens) |
| Reward type | Polychrome, Dennies, W-Engine Energy Module |
| Notes | — |

## Garena Free Fire

| | |
|---|---|
| Primary | `https://www.pockettactics.com/garena-free-fire/codes` — WORKING |
| Secondary | Official redeem page activity feed |
| Official redeem | `https://reward.ff.garena.com` |
| Official X | `@FreeFireBR` |
| Code pattern | `^[A-Z0-9]{12}$` — strict 12-char uppercase alphanumeric (e.g. `FFRSX4CYHLLQ`, `NPTF2FWSPXN9`) |
| Reward type | Diamonds, skins, gun crates, character vouchers |
| Notes | Codes expire fast (often 12–24 hr). Scraper must run frequently OR we accept short windows. Region-restricted codes common — store with `region` field. |

## Mobile Legends: Bang Bang

| | |
|---|---|
| Primary | `https://www.pocketgamer.com/mobile-legends-bang-bang/codes/` — WORKING (different site than the others) |
| Secondary | Official MLBB redemption page activity |
| Official redeem | `https://m.mobilelegends.com/en/redemption` |
| Official X | `@MobileLegendsOL` |
| Code pattern | `^[a-zA-Z0-9]{6,12}$` — `2y3vo2r3x`, `HOLAMLBB`, often lowercase |
| Reward type | Diamonds, skins, fragments |
| Notes | Pocket Tactics doesn't cover MLBB cleanly — use PocketGamer for this one. Codes often have redemption limits (first N users). |

## PUBG Mobile

| | |
|---|---|
| Primary | `https://www.pockettactics.com/pubg-mobile/codes` — WORKING but freshness is poor; cross-check before publishing |
| Secondary | Midasbuy redemption page activity |
| Official redeem | `https://www.midasbuy.com/midasbuy/in/redeem/pubgm` |
| Official X | `@PUBGMOBILE` |
| Code pattern | `^[A-Z0-9]{10,20}$` |
| Reward type | UC, outfits, vehicle skins, character vouchers |
| Notes | Many "active" codes on aggregator sites are actually expired. Require ≥2 source confirmation or short auto-expire window. |

## Blox Fruits (Roblox)

| | |
|---|---|
| Primary | `https://progameguides.com/roblox/roblox-blox-fruits-codes/` — WORKING (24 active on 2026-05-13 check) |
| Secondary | Official `@BloxFruits` X account |
| Official redeem | In-game settings menu (no web URL) |
| Official X | `@BloxFruits` |
| Code pattern | `^[A-Za-z0-9_]{5,30}$` — allow underscore (`SUB2GAMERROBOT_EXP1`, `KITT_RESET`) |
| Reward type | XP boosts, stat resets, Beli, in-game titles |
| Notes | Codes are case-sensitive — preserve casing exactly. Use ProGameGuides as canonical, not Pocket Tactics. |

## AFK Journey

| | |
|---|---|
| Primary | `https://www.pockettactics.com/afk-journey/codes` — WORKING |
| Secondary | Official AFK Journey Discord milestone announcements (manual) |
| Official redeem | `https://afkjourney.farlightgames.com/en/redeem` |
| Official X | `@AFKJourney` |
| Code pattern | `^[a-zA-Z0-9]{6,16}$` — `LILITH13TH`, `QhqsNkDpTX`, `AFKJCOMMUNITY` |
| Reward type | Diamonds, summon letters (invite letters), gold, origami hamsters |
| Notes | New codes drop on milestones — sporadic, not on a fixed cadence. |

---

## Cross-cutting notes

- **HoYoverse community API** (`hoyo-codes.seria.moe`) returned 403 to WebFetch — needs direct fetch test from a real user-agent on Day 2. If it responds, prefer over scraping for Genshin/HSR/ZZZ (cleaner structured data).
- **Polygon** blocks WebFetch entirely — can't use as a programmatic source even if articles exist.
- **PCGamer** URLs are the ones the v1 scraper invented — most don't exist. Remove from `scripts/grab-codes.ts` Day 2.
- All sites above use HTML aggregator pages, so Day 2 extraction will use **cheerio** with site-specific CSS selectors targeting `<li>` items under the relevant `<h2>`/`<h3>` "Active Codes" heading — never a page-wide regex.
- **Robots.txt + rate limiting:** scraper should respect a 1 req/sec minimum delay per host and a polite `User-Agent` identifying the site (`Game365Hub Scraper / inzamul.dev@gmail.com`).

## v1 lessons applied

| v1 mistake | v2 fix |
|---|---|
| Source URLs invented, 9/10 returned 404 | Every URL above validated via live fetch on 2026-05-13 |
| Regex `\b[A-Z0-9]{6,20}\b` matched anything page-wide | Per-game regex above + CSS selector scoping to known codes section |
| No verification, junk straight to `codes.json` | Manual approval queue (`data/pending-codes.json`) — see PROJECT_PLAN.md Day 2 |
| One URL per game, no cross-check | Each game has Primary + Secondary; `verified: true` only when seen in ≥2 |
