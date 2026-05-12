/**
 * grab-codes.ts
 *
 * Runs on a schedule (GitHub Actions, every 30 minutes).
 * Scrapes public aggregator sites for the latest redeem codes,
 * extracts code strings, deduplicates, and updates data/codes.json.
 *
 * Codes themselves are facts (not copyrightable). We do not copy
 * any article text — only the code strings and reward descriptions
 * which are factual data.
 */

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const CODES_PATH = path.join(ROOT, "data", "codes.json");

// ─── Types ──────────────────────────────────────────────────────────

interface Code {
  code: string;
  reward: string;
  firstSeen: string;
  lastVerified?: string;
  source?: string;
  region?: string;
  addedBy?: "manual" | "scraper";
  verified?: boolean;
}

interface ExpiredCode {
  code: string;
  reward?: string;
  firstSeen?: string;
  expiredOn: string;
  addedBy?: "manual" | "scraper";
}

interface GameCodes {
  lastUpdated: string;
  active: Code[];
  expired: ExpiredCode[];
}

interface CodesFile {
  schemaVersion: number;
  lastUpdated: string;
  games: Record<string, GameCodes>;
}

// ─── Source configuration ──────────────────────────────────────────
// Each game has 1-3 source URLs. We fetch HTML and run a regex pass.
// The article text is never copied — only the code strings.

interface Source {
  gameId: string;
  url: string;
  // Reward inference (loose heuristic from surrounding text)
  defaultReward: string;
}

const SOURCES: Source[] = [
  // Genshin Impact
  {
    gameId: "genshin-impact",
    url: "https://www.pcgamer.com/genshin-impact-codes/",
    defaultReward: "Primogems & in-game rewards",
  },
  {
    gameId: "genshin-impact",
    url: "https://www.polygon.com/genshin-impact-guides-walkthroughs",
    defaultReward: "Primogems & in-game rewards",
  },
  // Honkai Star Rail
  {
    gameId: "honkai-star-rail",
    url: "https://www.pcgamer.com/honkai-star-rail-codes/",
    defaultReward: "Stellar Jade & in-game rewards",
  },
  // Wuthering Waves
  {
    gameId: "wuthering-waves",
    url: "https://www.pcgamer.com/wuthering-waves-codes/",
    defaultReward: "Astrites & in-game rewards",
  },
  // Zenless Zone Zero
  {
    gameId: "zenless-zone-zero",
    url: "https://www.pcgamer.com/zenless-zone-zero-codes/",
    defaultReward: "Polychrome & in-game rewards",
  },
  // Free Fire
  {
    gameId: "free-fire",
    url: "https://www.pcgamer.com/free-fire-redeem-codes/",
    defaultReward: "Diamonds, skins & in-game rewards",
  },
  // Mobile Legends
  {
    gameId: "mobile-legends",
    url: "https://www.pcgamer.com/mobile-legends-codes/",
    defaultReward: "Diamonds & in-game rewards",
  },
  // PUBG Mobile
  {
    gameId: "pubg-mobile",
    url: "https://www.pcgamer.com/pubg-mobile-redeem-codes/",
    defaultReward: "UC, outfits & in-game rewards",
  },
  // Roblox Blox Fruits
  {
    gameId: "roblox-blox-fruits",
    url: "https://www.pcgamer.com/blox-fruits-codes/",
    defaultReward: "Beli, XP boosts & stat resets",
  },
  // AFK Journey
  {
    gameId: "afk-journey",
    url: "https://www.pcgamer.com/afk-journey-codes/",
    defaultReward: "Diamonds & summon tickets",
  },
];

// ─── Regex for redemption code patterns ────────────────────────────
// Most codes match these patterns:
//   - All uppercase + digits, 6-20 chars
//   - Sometimes contain digits at the end (FF codes)
//   - Excludes common false positives (acronyms like "TWITTER", "RELOAD")

const CODE_REGEX = /\b[A-Z0-9]{6,20}\b/g;

const FALSE_POSITIVES = new Set([
  "TWITTER", "DISCORD", "REDDIT", "YOUTUBE", "FACEBOOK", "INSTAGRAM",
  "RELOAD", "REFRESH", "UPDATE", "UPGRADE", "PATCH", "SEASON",
  "GENSHIN", "HONKAI", "STARRAIL", "WUTHERING", "WAVES", "ZENLESS",
  "MOBILE", "LEGENDS", "BANG", "GARENA", "FREEFIRE", "ROBLOX",
  "DEVELOPER", "PUBLISHER", "OFFICIAL", "WEBSITE", "PLAYSTATION",
  "EXPIRED", "ACTIVE", "WORKING", "REDEEM", "CODES", "CLAIM",
  "REWARDS", "WELCOME", "ANDROID", "WINDOWS", "VERSION", "ACCOUNT",
  "DOWNLOAD", "UPDATE", "ALPHA", "BETA", "GAMMA", "DELTA",
  "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
  "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
  "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY",
  "WARNING", "NOTICE", "IMPORTANT", "GUIDE", "TUTORIAL", "TIPS",
]);

// ─── Helpers ───────────────────────────────────────────────────────

async function fetchHtml(url: string): Promise<string> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
          "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml",
      },
      // 15 second timeout
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) {
      console.warn(`[WARN] ${url} returned ${res.status}`);
      return "";
    }
    return await res.text();
  } catch (err) {
    console.warn(`[WARN] Failed to fetch ${url}:`, (err as Error).message);
    return "";
  }
}

function extractCodes(html: string): string[] {
  // Strip script/style tags for cleaner parsing
  const cleaned = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");

  const matches = cleaned.match(CODE_REGEX) ?? [];
  const seen = new Set<string>();
  const codes: string[] = [];

  for (const raw of matches) {
    if (FALSE_POSITIVES.has(raw)) continue;
    if (seen.has(raw)) continue;
    // Must contain at least one digit OR be 8+ chars (heuristic)
    if (!/\d/.test(raw) && raw.length < 8) continue;
    seen.add(raw);
    codes.push(raw);
  }

  return codes;
}

function loadCodes(): CodesFile {
  const raw = readFileSync(CODES_PATH, "utf-8");
  return JSON.parse(raw) as CodesFile;
}

function saveCodes(data: CodesFile): void {
  writeFileSync(CODES_PATH, JSON.stringify(data, null, 2) + "\n");
}

// ─── Main ──────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const data = loadCodes();
  const now = new Date().toISOString();
  let totalNew = 0;

  // Group sources by game
  const byGame = new Map<string, Source[]>();
  for (const src of SOURCES) {
    const list = byGame.get(src.gameId) ?? [];
    list.push(src);
    byGame.set(src.gameId, list);
  }

  for (const [gameId, sources] of byGame.entries()) {
    if (!data.games[gameId]) continue;

    const existing = new Set(
      data.games[gameId].active.map((c) => c.code.toUpperCase())
    );
    const expired = new Set(
      data.games[gameId].expired.map((c) => c.code.toUpperCase())
    );
    const found = new Map<string, number>(); // code -> source count

    for (const src of sources) {
      console.log(`[INFO] Fetching ${src.url}`);
      const html = await fetchHtml(src.url);
      if (!html) continue;
      const codes = extractCodes(html);
      for (const code of codes) {
        found.set(code, (found.get(code) ?? 0) + 1);
      }
    }

    // Add codes that appear in at least one source AND aren't already known
    let added = 0;
    for (const [code, sourceCount] of found.entries()) {
      if (existing.has(code) || expired.has(code)) continue;
      // Require 1+ source mention. Use 2+ when multiple sources configured
      const minSources = sources.length >= 2 ? 2 : 1;
      if (sourceCount < minSources) continue;

      data.games[gameId].active.push({
        code,
        reward: sources[0]?.defaultReward ?? "In-game rewards",
        firstSeen: now.split("T")[0],
        lastVerified: now.split("T")[0],
        source: sources[0]?.url,
        region: "global",
        addedBy: "scraper",
        verified: sourceCount >= 2,
      });
      added += 1;
    }

    if (added > 0) {
      data.games[gameId].lastUpdated = now;
      console.log(`[OK] ${gameId}: +${added} new codes`);
      totalNew += added;
    }
  }

  data.lastUpdated = now;
  saveCodes(data);

  console.log(`\n[DONE] Added ${totalNew} new codes total.`);
}

main().catch((err) => {
  console.error("[FATAL]", err);
  process.exit(1);
});
