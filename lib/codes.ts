import codesData from "@/data/codes.json";
import type { GameId } from "./constants";

export interface Code {
  code: string;
  reward: string;
  firstSeen: string;
  lastVerified?: string;
  source?: string;
  region?: string;
  addedBy?: "manual" | "scraper";
  verified?: boolean;
}

export interface ExpiredCode {
  code: string;
  reward?: string;
  firstSeen?: string;
  expiredOn: string;
  addedBy?: "manual" | "scraper";
}

export interface GameCodes {
  lastUpdated: string;
  active: Code[];
  expired: ExpiredCode[];
}

interface CodesFile {
  schemaVersion: number;
  lastUpdated: string;
  games: Record<string, GameCodes>;
}

const data = codesData as CodesFile;

export function getCodesForGame(gameId: GameId): GameCodes {
  return (
    data.games[gameId] ?? {
      lastUpdated: data.lastUpdated,
      active: [],
      expired: [],
    }
  );
}

export function getAllActiveCodes(): {
  gameId: GameId;
  codes: Code[];
}[] {
  return Object.entries(data.games).map(([gameId, gameCodes]) => ({
    gameId: gameId as GameId,
    codes: gameCodes.active,
  }));
}

export function getActiveCodeCount(gameId: GameId): number {
  return getCodesForGame(gameId).active.length;
}

export function getLastUpdated(gameId?: GameId): string {
  if (gameId) return getCodesForGame(gameId).lastUpdated;
  return data.lastUpdated;
}

export function formatRelativeTime(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins} min ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? "s" : ""} ago`;
  if (diffDays < 30) return `${diffDays} day${diffDays > 1 ? "s" : ""} ago`;
  const diffMonths = Math.floor(diffDays / 30);
  return `${diffMonths} month${diffMonths > 1 ? "s" : ""} ago`;
}
