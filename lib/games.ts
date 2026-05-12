import gamesData from "@/data/games.json";
import { GAMES, type GameId, type GameInfo } from "./constants";

export interface GameMetadata {
  id: string;
  name: string;
  developer: string;
  platforms: string[];
  currency: string;
  codeFrequency: string;
  redeemUrl: string;
  officialTwitter: string;
  intro: string;
  redeemSteps: string[];
}

const data = gamesData as Record<string, GameMetadata>;

export function getGameMetadata(gameId: GameId): GameMetadata | null {
  return data[gameId] ?? null;
}

export function getGameInfo(gameId: GameId): GameInfo | undefined {
  return GAMES.find((g) => g.id === gameId);
}

export function getAllGameIds(): GameId[] {
  return GAMES.map((g) => g.id);
}

export function isValidGameId(id: string): id is GameId {
  return GAMES.some((g) => g.id === id);
}
