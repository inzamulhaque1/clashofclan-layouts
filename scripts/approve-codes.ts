/**
 * approve-codes.ts — Local CLI for promoting pending candidates to active.
 *
 * Pending candidates live in data/pending-codes.json (written by
 * scripts/grab-codes.ts). This script lets you list them, approve specific
 * ones, or reject them. Approved codes move into data/codes.json#active.
 * Rejected codes are deleted.
 *
 * Usage:
 *   npx tsx scripts/approve-codes.ts list                  # all pending
 *   npx tsx scripts/approve-codes.ts list <gameId>         # one game
 *   npx tsx scripts/approve-codes.ts approve <code> [...]  # promote codes
 *   npx tsx scripts/approve-codes.ts reject  <code> [...]  # drop codes
 *   npx tsx scripts/approve-codes.ts approve-all <gameId>  # promote all for a game
 *   npx tsx scripts/approve-codes.ts reject-all  <gameId>  # drop all for a game
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");
const CODES_PATH = path.join(ROOT, "data", "codes.json");
const PENDING_PATH = path.join(ROOT, "data", "pending-codes.json");

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

function readJson<T>(p: string): T {
  if (!existsSync(p)) throw new Error(`Missing ${p}`);
  return JSON.parse(readFileSync(p, "utf-8")) as T;
}

function writeJson(p: string, data: unknown): void {
  writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
}

function listPending(gameFilter?: string): void {
  const pending = readJson<PendingFile>(PENDING_PATH);
  const filtered = gameFilter
    ? pending.candidates.filter((c) => c.gameId === gameFilter)
    : pending.candidates;

  if (filtered.length === 0) {
    console.log("No pending candidates" + (gameFilter ? ` for ${gameFilter}` : "") + ".");
    return;
  }

  const byGame = new Map<string, PendingCandidate[]>();
  for (const c of filtered) {
    const list = byGame.get(c.gameId) ?? [];
    list.push(c);
    byGame.set(c.gameId, list);
  }

  for (const [gameId, list] of byGame.entries()) {
    console.log(`\n[${gameId}] ${list.length} candidate${list.length === 1 ? "" : "s"}`);
    for (const c of list) {
      const srcCount = c.sources.length;
      const verifiedHint = srcCount >= 2 ? "✓✓" : " ·";
      console.log(
        `  ${verifiedHint} ${c.code.padEnd(24)} ${c.reward.slice(0, 60)}${c.reward.length > 60 ? "…" : ""}`
      );
      console.log(`     seen: ${c.firstSeen} → ${c.lastSeen}  sources: ${srcCount}`);
    }
  }
}

function approve(codeNames: string[]): void {
  const codes = readJson<CodesFile>(CODES_PATH);
  const pending = readJson<PendingFile>(PENDING_PATH);
  const today = new Date().toISOString().split("T")[0]!;
  const nowISO = new Date().toISOString();

  const targets = new Set(codeNames);
  const remaining: PendingCandidate[] = [];
  let approved = 0;

  for (const c of pending.candidates) {
    if (!targets.has(c.code)) {
      remaining.push(c);
      continue;
    }
    const game =
      codes.games[c.gameId] ??
      (codes.games[c.gameId] = {
        lastUpdated: nowISO,
        active: [],
        expired: [],
      });

    if (game.active.some((a) => a.code === c.code)) {
      console.warn(`  ! ${c.code} already in active for ${c.gameId}; skipping`);
      continue;
    }

    game.active.push({
      code: c.code,
      reward: c.reward,
      firstSeen: c.firstSeen,
      lastVerified: today,
      source: c.sources[0],
      region: "global",
      addedBy: "manual",
      verified: c.sources.length >= 2,
    });
    game.lastUpdated = nowISO;
    console.log(`  + approved ${c.code} -> ${c.gameId}`);
    approved++;
  }

  pending.candidates = remaining;
  pending.lastUpdated = nowISO;
  codes.lastUpdated = nowISO;
  writeJson(CODES_PATH, codes);
  writeJson(PENDING_PATH, pending);
  console.log(`\nApproved ${approved} code${approved === 1 ? "" : "s"}.`);
}

function reject(codeNames: string[]): void {
  const pending = readJson<PendingFile>(PENDING_PATH);
  const before = pending.candidates.length;
  const targets = new Set(codeNames);
  pending.candidates = pending.candidates.filter((c) => !targets.has(c.code));
  pending.lastUpdated = new Date().toISOString();
  writeJson(PENDING_PATH, pending);
  console.log(`Rejected ${before - pending.candidates.length} code(s).`);
}

function approveAll(gameId: string): void {
  const pending = readJson<PendingFile>(PENDING_PATH);
  const codes = pending.candidates.filter((c) => c.gameId === gameId).map((c) => c.code);
  if (codes.length === 0) {
    console.log(`No pending codes for ${gameId}.`);
    return;
  }
  approve(codes);
}

function rejectAll(gameId: string): void {
  const pending = readJson<PendingFile>(PENDING_PATH);
  const codes = pending.candidates.filter((c) => c.gameId === gameId).map((c) => c.code);
  if (codes.length === 0) {
    console.log(`No pending codes for ${gameId}.`);
    return;
  }
  reject(codes);
}

function usage(): void {
  console.log(`Usage:
  npx tsx scripts/approve-codes.ts list [gameId]
  npx tsx scripts/approve-codes.ts approve <code> [code ...]
  npx tsx scripts/approve-codes.ts reject  <code> [code ...]
  npx tsx scripts/approve-codes.ts approve-all <gameId>
  npx tsx scripts/approve-codes.ts reject-all  <gameId>`);
}

const [cmd, ...args] = process.argv.slice(2);

switch (cmd) {
  case "list":
    listPending(args[0]);
    break;
  case "approve":
    if (args.length === 0) {
      usage();
      process.exit(1);
    }
    approve(args);
    break;
  case "reject":
    if (args.length === 0) {
      usage();
      process.exit(1);
    }
    reject(args);
    break;
  case "approve-all":
    if (!args[0]) {
      usage();
      process.exit(1);
    }
    approveAll(args[0]);
    break;
  case "reject-all":
    if (!args[0]) {
      usage();
      process.exit(1);
    }
    rejectAll(args[0]);
    break;
  default:
    usage();
    process.exit(cmd ? 1 : 0);
}
