/**
 * grab-codes.ts — Codes scraper orchestrator (v2)
 *
 * Each game has one or more extractors (HoYoverse API for Genshin/HSR/ZZZ,
 * cheerio HTML extractors for the rest). This script:
 *
 *   1. Runs every configured extractor for every game.
 *   2. Validates each raw code against a per-game regex.
 *   3. For codes already in data/codes.json#active: refresh lastVerified.
 *   4. For active codes not seen in any source today: leave them unless they
 *      are >14 days stale, in which case auto-expire them.
 *   5. New, never-seen codes: write to data/pending-codes.json for manual
 *      approval (see scripts/approve-codes.ts).
 *
 * The cron-driven workflow may commit safe updates (codes.json timestamp
 * bumps + auto-expires + pending-codes.json). New codes never enter
 * codes.json#active automatically — that path is gated by approve-codes.ts.
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

import { hoyoverseExtractor } from "./extractors/hoyoverse";
import { pocketTacticsExtractor } from "./extractors/pockettactics";
import { pocketGamerExtractor } from "./extractors/pocketgamer";
import { proGameGuidesExtractor } from "./extractors/progameguides";
import type { Extractor, RawCode } from "./extractors/types";

// ─── Config ─────────────────────────────────────────────────────────

const ROOT = path.resolve(__dirname, "..");
const CODES_PATH = path.join(ROOT, "data", "codes.json");
const PENDING_PATH = path.join(ROOT, "data", "pending-codes.json");

const AUTO_EXPIRE_DAYS = 14;

const EXTRACTORS: readonly Extractor[] = [
  hoyoverseExtractor,
  pocketTacticsExtractor,
  pocketGamerExtractor,
  proGameGuidesExtractor,
];

// Per-game validators. A scraped string must match the game's pattern to be
// considered a real candidate. Patterns are intentionally a touch broader
// than the typical observed range; the cross-source check is the real filter.
const PATTERNS: Record<string, RegExp> = {
  "genshin-impact": /^[A-Za-z0-9]{6,18}$/,
  "honkai-star-rail": /^[A-Za-z0-9]{8,20}$/,
  "wuthering-waves": /^[A-Z0-9]{6,24}$/,
  "zenless-zone-zero": /^[A-Za-z0-9]{6,20}$/,
  "free-fire": /^[A-Z0-9]{10,16}$/,
  "mobile-legends": /^[a-zA-Z0-9]{6,16}$/,
  "pubg-mobile": /^[A-Z0-9]{8,24}$/,
  "roblox-blox-fruits": /^[A-Za-z0-9_]{4,30}$/,
  "afk-journey": /^[a-zA-Z0-9]{4,20}$/,
};

const ALL_GAME_IDS = Object.keys(PATTERNS);

// ─── Data types ─────────────────────────────────────────────────────

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

interface PendingCandidate {
  gameId: string;
  code: string;
  reward: string;
  firstSeen: string;
  lastSeen: string;
  sources: string[];
}

interface PendingFile {
  lastUpdated: string;
  candidates: PendingCandidate[];
}

// ─── IO helpers ─────────────────────────────────────────────────────

function readJson<T>(p: string, fallback: T): T {
  if (!existsSync(p)) return fallback;
  return JSON.parse(readFileSync(p, "utf-8")) as T;
}

function writeJson(p: string, data: unknown): void {
  writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
}

function daysBetween(a: string, b: string): number {
  return Math.floor(
    (new Date(b).getTime() - new Date(a).getTime()) / 86400000
  );
}

// ─── Main ───────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const codes = readJson<CodesFile>(CODES_PATH, {
    schemaVersion: 2,
    lastUpdated: new Date().toISOString(),
    games: {},
  });

  const pending = readJson<PendingFile>(PENDING_PATH, {
    lastUpdated: new Date().toISOString(),
    candidates: [],
  });

  const today = new Date().toISOString().split("T")[0]!;
  const nowISO = new Date().toISOString();

  // Pull from every extractor for every game it claims to handle.
  // Result: per-game map of code -> { reward, sources[] }
  type Hit = { reward: string; sources: Set<string> };
  const perGameHits = new Map<string, Map<string, Hit>>();

  for (const gameId of ALL_GAME_IDS) {
    perGameHits.set(gameId, new Map());
  }

  for (const ex of EXTRACTORS) {
    for (const gameId of ex.gameIds) {
      if (!perGameHits.has(gameId)) continue;
      const hits = perGameHits.get(gameId)!;
      const pattern = PATTERNS[gameId]!;
      let raws: RawCode[];
      try {
        raws = await ex.extract(gameId);
      } catch (err) {
        console.warn(
          `[ex] ${ex.name} for ${gameId} threw: ${(err as Error).message}`
        );
        continue;
      }
      let kept = 0;
      let rejected = 0;
      for (const raw of raws) {
        if (!pattern.test(raw.code)) {
          rejected++;
          continue;
        }
        const existing = hits.get(raw.code);
        if (existing) {
          existing.sources.add(raw.source);
        } else {
          hits.set(raw.code, {
            reward: raw.reward,
            sources: new Set([raw.source]),
          });
        }
        kept++;
      }
      console.log(
        `[ex] ${ex.name} ${gameId}: kept ${kept}, rejected ${rejected}`
      );
    }
  }

  let timestampBumps = 0;
  let autoExpired = 0;
  let newPending = 0;
  let updatedPending = 0;

  for (const gameId of ALL_GAME_IDS) {
    const hits = perGameHits.get(gameId)!;
    const game =
      codes.games[gameId] ??
      (codes.games[gameId] = {
        lastUpdated: nowISO,
        active: [],
        expired: [],
      });

    const activeByCode = new Map(game.active.map((c) => [c.code, c]));
    const expiredCodes = new Set(game.expired.map((c) => c.code));

    // 1) Refresh active codes still seen in any source.
    let sawAny = false;
    for (const [code, hit] of hits.entries()) {
      const existing = activeByCode.get(code);
      if (!existing) continue;
      existing.lastVerified = today;
      if (hit.sources.size >= 2) existing.verified = true;
      sawAny = true;
      timestampBumps++;
    }

    // 2) Auto-expire active codes not seen in source for AUTO_EXPIRE_DAYS.
    const survivors: Code[] = [];
    for (const c of game.active) {
      if (hits.has(c.code)) {
        survivors.push(c);
        continue;
      }
      const lastSeen = c.lastVerified ?? c.firstSeen;
      const age = daysBetween(lastSeen, today);
      if (age >= AUTO_EXPIRE_DAYS) {
        game.expired.unshift({
          code: c.code,
          reward: c.reward,
          firstSeen: c.firstSeen,
          expiredOn: today,
          addedBy: c.addedBy,
        });
        autoExpired++;
      } else {
        survivors.push(c);
      }
    }
    game.active = survivors;

    // 3) Queue new (unseen) codes to pending.
    const pendingByCode = new Map(
      pending.candidates
        .filter((p) => p.gameId === gameId)
        .map((p) => [p.code, p])
    );

    for (const [code, hit] of hits.entries()) {
      if (activeByCode.has(code)) continue;
      if (expiredCodes.has(code)) continue;
      const existing = pendingByCode.get(code);
      if (existing) {
        existing.lastSeen = today;
        for (const s of hit.sources) {
          if (!existing.sources.includes(s)) existing.sources.push(s);
        }
        updatedPending++;
      } else {
        pending.candidates.push({
          gameId,
          code,
          reward: hit.reward,
          firstSeen: today,
          lastSeen: today,
          sources: Array.from(hit.sources),
        });
        newPending++;
      }
    }

    if (sawAny) game.lastUpdated = nowISO;
  }

  codes.lastUpdated = nowISO;
  pending.lastUpdated = nowISO;

  writeJson(CODES_PATH, codes);
  writeJson(PENDING_PATH, pending);

  console.log("");
  console.log("─── Summary ─────────────────────────────────────");
  console.log(`  Active codes confirmed today: ${timestampBumps}`);
  console.log(`  Active codes auto-expired:    ${autoExpired}`);
  console.log(`  New pending candidates:       ${newPending}`);
  console.log(`  Pending candidates updated:   ${updatedPending}`);
  console.log(`  Total pending in queue:       ${pending.candidates.length}`);
}

main().catch((err) => {
  console.error("[FATAL]", err);
  process.exit(1);
});
