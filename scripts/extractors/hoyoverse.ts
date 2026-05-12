import { fetchJson, type Extractor, type RawCode } from "./types";

const API_BASE = "https://hoyo-codes.seria.moe/codes";

const GAME_TO_API_KEY: Record<string, string> = {
  "genshin-impact": "genshin",
  "honkai-star-rail": "hkrpg",
  "zenless-zone-zero": "nap",
};

interface HoyoCode {
  id: number;
  code: string;
  status: string;
  game: string;
  rewards: string;
}

interface HoyoResponse {
  codes: HoyoCode[];
}

export const hoyoverseExtractor: Extractor = {
  name: "hoyo-codes.seria.moe",
  gameIds: Object.keys(GAME_TO_API_KEY),

  async extract(gameId: string): Promise<RawCode[]> {
    const apiKey = GAME_TO_API_KEY[gameId];
    if (!apiKey) return [];

    const url = `${API_BASE}?game=${apiKey}`;
    const data = await fetchJson<HoyoResponse>(url);
    if (!data?.codes) return [];

    return data.codes
      .filter((c) => c.status === "OK" && typeof c.code === "string")
      .map((c) => ({
        code: c.code.trim(),
        reward: c.rewards?.trim() || "In-game rewards",
        source: url,
      }));
  },
};
