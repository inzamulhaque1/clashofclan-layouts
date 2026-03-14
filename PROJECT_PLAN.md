# Game365Hub - Project Plan & Checklist

> Last updated: March 14, 2026
> Site: game365hub.com | Next.js 14 + TypeScript + Tailwind
> Strategy: **Quality over quantity** — Blog + CoC depth first, other games later

---

## Current Status

| Area | Status | Score |
|------|--------|-------|
| Technical SEO | Strong | 8/10 |
| Structured Data (JSON-LD) | Strong | 9/10 |
| Site Structure | Solid | 8/10 |
| Page Speed | Good | 7/10 |
| Blog Content | 10 articles (~55K words) | Good |
| CoC Base Layouts | 408 bases (322 HV + 86 BH) | Excellent |
| CoC Guides | 10 written (~40K words) | Good — needs 8 more |
| Builder Base | 86 layouts (BH3-BH10) | Complete |
| AdSense Readiness | Almost Ready | 6/10 |

### Strategy: Two Pillars

1. **Blog** — General mobile gaming articles (broad traffic)
2. **Clash of Clans** — Deep content hub (bases + guides = topical authority)

Other games (Brawl Stars, Clash Royale, Free Fire, PUBG) are set to "Coming Soon" until CoC is fully built out. Quality > quantity.

---

## PHASE 1: Fixes (DONE)

- [x] Fix 404 page broken `gradient-text` CSS class
- [x] Add JSON-LD to all game pages (Brawl Stars, Clash Royale, Free Fire)
- [x] Add JSON-LD to About page (Organization schema)
- [x] Add JSON-LD to Contact page (ContactPage schema)
- [x] Fix social share buttons on blog posts (Twitter, Facebook, LinkedIn)
- [x] Add AggregateRating schema to base detail pages
- [x] Add `unoptimized` prop to base images
- [x] Add `loading="lazy"` to below-fold images
- [x] Add blur placeholder to base card images
- [x] Reduce bases per page from 12 to 9
- [x] Fix 5 broken blog images (Epic Games CDN → Steam/Wikipedia)
- [x] Fix hardcoded "offline games" keyword in Article JSON-LD
- [x] Standardize gameName across all articles
- [x] Stagger publish dates (Mar 2-12 instead of all Mar 8)
- [x] Set Brawl Stars, Clash Royale, Free Fire to "Coming Soon" (no fake guide counts)
- [x] Update CoC card stats to "118 Bases" (real number)

---

## PHASE 2: CoC Content Hub

### CoC Guides Written (10/18):

1. [x] Clash of Clans Beginners Guide 2026
2. [x] Best TH18 Attack Strategies 2026
3. [x] Best TH17 Attack Strategies 2026
4. [x] Best TH16 Attack Strategies 2026
5. [x] Best Army Compositions for Every Town Hall Level
6. [x] How to Max Your Base Fast — F2P Guide
7. [x] Best Clan War League Strategy Guide
8. [x] Best Hero Equipment Rankings 2026
9. [x] Legend League Push Guide 2026
10. [x] Best Defensive CC Troops for War

### CoC Guides To Write (8 remaining — NEXT SESSION):

11. [ ] Builder Base Complete Guide 2026: BH2-BH10 (upgrade order, OTTO, 6th builder)
12. [ ] How to Build a Strong Base: Layout Design Guide (compartments, funneling, traps)
13. [ ] CoC Upgrade Priority Guide 2026: What to Upgrade First (top searched topic)
14. [ ] Clan Capital Guide 2026: Raid Weekends & Districts
15. [ ] Best TH15 Attack Strategies 2026 (completes TH attack series)
16. [ ] How to Run a Successful Clan in CoC 2026 (recruitment, rules, leadership)
17. [ ] Complete Guide to Siege Machines in CoC
18. [ ] Hero Upgrade Order Guide 2026: BK, AQ, GW, RC Priority

### CoC Home Village Bases (COMPLETE — 322):

| TH Level | Count | Status |
|----------|-------|--------|
| TH7 | 25 | Excellent |
| TH8 | 25 | Excellent |
| TH9 | 25 | Excellent |
| TH10 | 25 | Excellent |
| TH11 | 25 | Excellent |
| TH12 | 25 | Excellent |
| TH13 | 25 | Excellent |
| TH14 | 25 | Excellent |
| TH15 | 25 | Excellent |
| TH16 | 25 | Excellent |
| TH17 | 46 | Excellent |
| TH18 | 25 | Excellent |
| **Total** | **322** | **Excellent** |

### CoC Builder Base Layouts (COMPLETE — 86):

| BH Level | Count | Status |
|----------|-------|--------|
| BH2 | 0 | No images available |
| BH3 | 10 | Complete |
| BH4 | 10 | Complete |
| BH5 | 10 | Complete |
| BH6 | 10 | Complete |
| BH7 | 10 | Complete |
| BH8 | 12 | Complete |
| BH9 | 12 | Complete |
| BH10 | 12 | Complete |
| **Total** | **86** | **Complete** |

### Internal Linking:
- [x] Link CoC guides → relevant TH base pages
- [x] Link base pages → relevant CoC guides
- [x] Link blog articles → CoC page where relevant
- [ ] Link BH pages → Builder Base guide (after guide #11 is written)
- [ ] Link TH pages → matching attack strategy guides

---

## PHASE 3: SEO & Polish (AFTER GUIDES)

- [ ] Submit sitemap to Google Search Console
- [ ] Verify site ownership in Google Search Console
- [ ] Set up Google Analytics
- [ ] Test pages with Google Rich Results Test
- [ ] Check Core Web Vitals in PageSpeed Insights
- [ ] Add FAQ schema to Contact page (5 FAQs exist, needs JSON-LD)
- [ ] Add `<link rel="preconnect">` for external image domains
- [ ] Add `FAQPage` schema to guides with FAQ sections
- [ ] Add `HowTo` schema to attack strategy guides
- [ ] Update BH page meta descriptions with actual base counts

---

## PHASE 4: AdSense

**Requirements:**
- [x] 10+ quality articles (10 written, ~55K words)
- [x] Privacy Policy page
- [x] Terms of Service page
- [x] About page
- [x] Contact page
- [ ] Domain age 1-3+ months
- [ ] Consistent organic traffic
- [ ] No policy violations
- [ ] Add ads.txt to public/ (after approval)

---

## PHASE 5: Expand to Other Games (Future)

Only after CoC content hub is solid (18+ guides, 400+ bases):

1. **Brawl Stars** — flip from "Coming Soon" to active, write 5-10 guides
2. **Clash Royale** — flip active, write 5-7 guides
3. **Free Fire** — flip active, write 5-6 guides
4. **PUBG Mobile** — create page, write 5 guides

---

## PHASE 6: Polish

- [ ] Add global search or remove SearchAction from schema
- [ ] Fix newsletter signup (currently non-functional)
- [ ] Migrate game hero images to external URLs
- [ ] Add RSS feed for blog

---

## All Routes (Verified Working)

| Route | Status |
|-------|--------|
| `/` | 200 |
| `/about` | 200 |
| `/blog` | 200 |
| `/blog/[slug]` (x10) | 200 |
| `/clash-of-clans` | 200 |
| `/clash-of-clans/bases` | 200 |
| `/clash-of-clans/bases/th/[level]` (x12) | 200 |
| `/clash-of-clans/bases/bh/[level]` (x9) | 200 |
| `/clash-of-clans/bases/base/[slug]` (x408) | 200 |
| `/clash-of-clans/guides` | 200 |
| `/clash-of-clans/guides/[slug]` (x10) | 200 |
| `/brawl-stars` | 200 |
| `/clash-royale` | 200 |
| `/free-fire` | 200 |
| `/contact` | 200 |
| `/privacy` | 200 |
| `/terms` | 200 |

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/blog.ts` | All 10 blog articles |
| `lib/bases.ts` | All 408 base layouts (322 HV + 86 BH) |
| `lib/guides.ts` | All 10 CoC guides |
| `lib/constants.ts` | GAMES array, nav links, game details |
| `lib/images.ts` | Centralized external image URLs |
| `lib/seo.ts` | SEO metadata + JSON-LD helpers |
| `app/sitemap.ts` | Auto-generated sitemap |
| `components/bases/BaseCard.tsx` | Home Village base card |
| `components/bases/BHBaseCard.tsx` | Builder Base card |
| `components/bases/BaseListingClient.tsx` | HV base listing with filters |
| `components/bases/BHBaseListingClient.tsx` | BH base listing with filters |
