# AdSense Fix Plan - 10 Day Content Upgrade

**Goal:** Fix "Low Value Content" rejection by adding 800-1,200 words per base page and 1,500-2,000 words per TH/BH level page.
**Pages affected:** 4,591 base detail + 16 TH + 8 BH = **4,615 pages total**
**Start date:** Feb 18, 2026

---

## WHY - The Problem

Google AdSense rejected game365hub.com for **"Low Value Content"**. Here's what's wrong:

### Current state of base detail pages (4,591 pages)
Each page only has:
- A scraped base layout image
- A "Copy Base Link" button
- A "How to Use" 5-step list (same on every page)
- Related bases grid
- That's it. **40-80 words total.** No strategy, no explanation, nothing unique.

### Current state of TH level pages (16 pages, e.g. /clash-of-clans/th/18)
Only 2 generic paragraphs at the bottom (lines 415-427 in `app/[game]/th/[level]/page.js`):
```
"Town Hall 15 is an end-game level with powerful defenses and troops.
The right base design is crucial..."
"Our TH15 bases are designed by experienced players and updated regularly..."
```
**60-100 words. Same template for every level.** Google sees this as thin/duplicate content.

### Current state of BH level pages (8 pages, e.g. /clash-of-clans/bh/10)
Same problem. 2 generic paragraphs (lines 342-354 in `app/[game]/bh/[level]/page.js`):
```
"Builder Hall 10 is a high-level builder base with advanced defenses..."
"Our BH10 bases are optimized for versus battles..."
```
**40-80 words. Basically copy-paste across levels.**

### What Google wants
- Substantial content (500+ words minimum per page)
- Unique content (not the same text on every page)
- Valuable content (actually helps users, not just filler)
- Structured data (FAQ schema, HowTo schema for rich results)

---

## HOW - The Technical Approach

### The core idea: Deterministic Content Generation

We can't hand-write 4,615 unique articles. Instead we build a **content generation system** that combines:

1. **Real game data per TH/BH level** (different buildings, troops, heroes at each level)
2. **Strategy content per base type** (war vs farm vs trophy = totally different advice)
3. **Variation pools selected by base number** (base #67 picks different items than base #66)

This produces **millions of unique combinations** without any AI/API calls - it's all deterministic JavaScript that runs at build time.

### How uniqueness works

```
Content = f(hallType, hallLevel, baseType, baseNumber)
```

- **16 TH levels x 7 base types** = 112 unique level+type combos (different game data + strategy)
- **Each combo has 30-50 item variation pools** selected by `baseNumber % poolSize`
- Result: base #30 gets different overview text, different pros/cons, different features than #31

Example: TH18 war base #67 gets:
- Overview template #7 (out of 12) filled with TH18 data (Reflector, Druid, etc.)
- Key features #[7,8,9,10,11] (out of 20+)
- Pros #[7,8,9,10] + Cons #[7,8,9] (out of 30+ each)
- FAQ answers referencing war-specific TH18 strategies

While TH12 farm base #30 gets:
- Overview template #6 (out of 12) filled with TH12 data (Giga Tesla, Yeti, etc.)
- Completely different features, pros/cons about resource protection
- FAQ about farming strategies at TH12

### Architecture

```
lib/base-content.js          <-- NEW FILE (~2,000 lines)
  |
  |-- TOWN_HALL_DATA          (real game data per TH3-TH18)
  |-- BUILDER_HALL_DATA       (real game data per BH3-BH10)
  |-- BASE_TYPE_STRATEGIES    (purpose/principles per war/farm/trophy/etc.)
  |-- CONTENT_VARIATIONS      (template pools, feature pools, pros/cons pools)
  |-- TROOPS_BY_TH_LEVEL      (real troop names)
  |-- ATTACK_STRATEGIES        (real strategy names like Queen Charge Hybrid, LavaLoon)
  |
  |-- generateBaseContent(base)           --> 7 content sections for detail pages
  |-- generateLevelPageContent(type, lv)  --> 6 content sections for TH/BH pages

lib/seo.js                   <-- ADD 2 functions
  |-- generateFAQStructuredData()         --> FAQPage JSON-LD schema
  |-- generateHowToStructuredData()       --> HowTo JSON-LD schema
```

### What gets rendered on base detail pages (7 new sections)

Inserted AFTER the image/info grid, BEFORE the "Related Bases" section:

```
[Image + Info Panel]          <-- existing, keep as-is
  |
  v
[1. Base Overview]            <-- 150-200 word unique paragraph
[2. Key Defensive Features]   <-- 5 bullet points with titles
[3. Attack Strategies]        <-- what this base defends against
[4. Troop Compositions]       <-- 3 army comps for this TH level
[5. Building Placement]       <-- 4 type-specific tips
[6. Pros & Cons]              <-- 2-column grid (green/yellow)
[7. FAQ]                      <-- 4 Q&A cards + JSON-LD schema
  |
  v
[Related Bases]               <-- existing, keep as-is
```

### What gets rendered on TH/BH level pages (replaces thin SEO section)

```
[Header + Filters + Base Grid + Pagination]   <-- existing, keep as-is
  |
  v
[Quick Navigation]                             <-- existing, keep as-is
[Related Guides]                               <-- existing, keep as-is
  |
  v  (REPLACE the old 2-paragraph "About TH{X} Bases" section)
[1. Introduction]              <-- 500+ words about this TH/BH level
[2. What's New at TH{X}]      <-- new buildings, troops, defenses unlocked
[3. Best Base Types]           <-- recommendations for this level
[4. Defense Priority Guide]    <-- what to upgrade first
[5. Recommended Upgrade Order] <-- phased guide (Phase 1/2/3)
[6. FAQ]                       <-- 5-6 Q&A cards + JSON-LD schema
```

### Key files to know

| File | What it does | Lines |
|------|-------------|-------|
| `app/[game]/bases/[...slug]/page.js` | Base detail page (TH18 war #67) | 376 lines |
| `app/[game]/th/[level]/page.js` | TH level listing page (all TH18 bases) | 430 lines |
| `app/[game]/bh/[level]/page.js` | BH level listing page (all BH10 bases) | 357 lines |
| `lib/seo.js` | SEO helpers (metadata, structured data) | 163 lines |
| `lib/data.js` | Data layer (getContentById, queryContent) | - |
| `lib/bases.js` | Base helpers (isPremiumBase) | - |
| `components/BaseCard.js` | Base card component used in grids | - |
| `components/BaseDetailClient.js` | Client component (vote, copy, share buttons) | - |

### Base object shape (what we get from data layer)
```js
{
  hallType: 'TH',        // or 'BH'
  hallLevel: 18,          // 3-18 for TH, 3-10 for BH
  baseType: 'war',        // war|farm|trophy|hybrid|cwl|defense|progress
  baseNumber: 67,         // unique number within level+type
  title: '...',
  originalImageUrl: '...',
  thumbnailUrl: '...',
  copyLink: '...',
  scrapedAt: '...',
}
```

---

## Day 1 - Core Game Data (TH + BH)
- [ ] Create `lib/base-content.js`
- [ ] Add `TOWN_HALL_DATA` object with real data for TH3-TH18
  - Each level: keyDefenses, keyTroops, newBuildings, heroesAvailable, spellsAvailable
- [ ] Add `BUILDER_HALL_DATA` object with real data for BH3-BH10
  - Each level: keyDefenses, keyTroops, newBuildings, hero info
- [ ] Verify data accuracy against real Clash of Clans game

## Day 2 - Base Type Strategies
- [ ] Add `BASE_TYPE_STRATEGIES` object for all 7 types:
  - war, farm, trophy, hybrid, cwl, defense, progress
- [ ] Each type gets: purpose, principles[], primaryThreats[], designGoals[]
- [ ] Add `TROOPS_BY_TH_LEVEL` mapping (real troop names per level)
- [ ] Add `ATTACK_STRATEGIES` mapping (real strategy names per TH range)

## Day 3 - Overview Templates
- [ ] Add `CONTENT_VARIATIONS.overviewTemplates` with 12 templates per base type (84 total)
- [ ] Templates use placeholders: {level}, {hallType}, {keyDefense}, {hero}, {threat}, etc.
- [ ] Add `adjectives` pool (12+ items)
- [ ] Add `challenges` pool (12+ items)
- [ ] Each template should produce 150-200 words when filled

## Day 4 - Features + Pros/Cons Pools
- [ ] Add `CONTENT_VARIATIONS.keyFeatures` - 20+ features per type (140+ total)
  - Each feature: { title, description }
- [ ] Add `CONTENT_VARIATIONS.prosPool` - 30+ pros per type (210+ total)
- [ ] Add `CONTENT_VARIATIONS.consPool` - 30+ cons per type (210+ total)
- [ ] Ensure no duplicate content across types

## Day 5 - Attack Strategies + Troop Comps + FAQ Templates
- [ ] Add troop composition templates per TH level (3 comps per page)
  - Each: { name, troops, spells, description }
- [ ] Add building placement tips per base type (4 tips per page)
- [ ] Add FAQ templates per base type (4 Q&As per page)
  - Each answer: 50-80 words
- [ ] Add FAQ templates for level pages (5-6 Q&As per page)

## Day 6 - `generateBaseContent()` Function
- [ ] Implement helper: `selectFromPool(pool, index)` - deterministic selection
- [ ] Implement helper: `selectMultipleFromPool(pool, startIndex, count)`
- [ ] Implement `generateBaseContent(base)` that returns:
  - overview (150-200 words, unique per base via baseNumber modulo)
  - keyFeatures (5 bullet points)
  - attackStrategies (intro + 3-4 strategies with effectiveness)
  - troopCompositions (3 army comps)
  - buildingPlacement (intro + 4 tips)
  - prosAndCons (4 pros + 3 cons)
  - faq (4 Q&A pairs)
- [ ] Test: verify different baseNumbers produce different content

## Day 7 - `generateLevelPageContent()` Function
- [ ] Implement `generateLevelPageContent(hallType, hallLevel)` that returns:
  - introduction (500+ words about this level)
  - whatsNew (new buildings, troops, defenses)
  - bestBaseTypes (recommendations for this level)
  - defensePriority (what to upgrade first)
  - upgradeOrder (phased guide)
  - faq (5-6 Q&A pairs)
- [ ] Test: verify TH9 content differs from TH15 content
- [ ] Test: verify BH content uses Builder Base terminology

## Day 8 - SEO Helpers + Base Detail Page Integration
- [ ] Add to `lib/seo.js`:
  - `generateFAQStructuredData(faqData)` - FAQPage JSON-LD
  - `generateHowToStructuredData(hallType, hallLevel, baseType)` - HowTo JSON-LD
- [ ] Modify `app/[game]/bases/[...slug]/page.js`:
  - Import `generateBaseContent`
  - Call after base data is fetched
  - Add FAQ + HowTo JSON-LD `<script>` tags
  - Render 7 new sections AFTER image grid, BEFORE related bases:
    1. Base Overview
    2. Key Defensive Features (5 bullets)
    3. Attack Strategies
    4. Troop Compositions
    5. Building Placement Strategy
    6. Pros & Cons (2-column grid)
    7. FAQ (4 Q&A cards)

## Day 9 - TH + BH Level Page Integration
- [ ] Modify `app/[game]/th/[level]/page.js`:
  - Import `generateLevelPageContent`
  - Replace thin SEO section (lines 415-427) with rich content:
    1. Introduction (500+ words)
    2. What's New at TH{X}
    3. Best Base Types
    4. Defense Priority Guide
    5. Recommended Upgrade Order
    6. FAQ with JSON-LD
- [ ] Modify `app/[game]/bh/[level]/page.js`:
  - Same treatment but with BH-specific content (lines 342-354)
  - Include O.T.T.O and Builder Base specific strategies

## Day 10 - Testing & Verification
- [ ] Run `npm run dev` - check for errors
- [ ] Check 5-10 base pages across different TH levels and base types
- [ ] Verify content varies between pages:
  - TH18 war #67 vs TH18 war #66 (different baseNumber = different content)
  - TH18 war #67 vs TH12 farm #30 (different level + type = very different)
- [ ] Verify TH/BH level pages show comprehensive content
- [ ] Check structured data with Google Rich Results Test
- [ ] Run `npm run build` - ensure no build errors
- [ ] Deploy and resubmit to AdSense

---

## Expected Results

| Page Type | Current Words | After Fix | Pages |
|-----------|--------------|-----------|-------|
| Base Detail | 40-80 | **960-1,210** | 4,591 |
| TH Level | 60-100 | **1,580-1,950** | 16 |
| BH Level | 40-80 | **1,500-1,800** | 8 |

## Files Changed

| File | Action |
|------|--------|
| `lib/base-content.js` | **NEW** (~2,000 lines) |
| `lib/seo.js` | Modified (add 2 functions) |
| `app/[game]/bases/[...slug]/page.js` | Modified (add 7 content sections) |
| `app/[game]/th/[level]/page.js` | Modified (replace SEO section) |
| `app/[game]/bh/[level]/page.js` | Modified (replace SEO section) |
