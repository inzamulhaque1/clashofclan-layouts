import { load } from "cheerio";
import { fetchText, type Extractor, type RawCode } from "./types";

const URLS: Record<string, string> = {
  "roblox-blox-fruits": "https://progameguides.com/roblox/roblox-blox-fruits-codes/",
};

export const proGameGuidesExtractor: Extractor = {
  name: "progameguides.com",
  gameIds: Object.keys(URLS),

  async extract(gameId: string): Promise<RawCode[]> {
    const url = URLS[gameId];
    if (!url) return [];
    const html = await fetchText(url);
    if (!html) return [];

    const $ = load(html);
    // ProGameGuides Blox Fruits page: <table class="codes-table"> with rows of
    // .code-text and .description-text. Page typically has an active table
    // first, then an expired table. We take only the FIRST codes table.
    const firstTable = $("table.codes-table").first();
    if (firstTable.length === 0) {
      console.warn(`[progameguides] no codes-table found for ${gameId}`);
      return [];
    }

    const codes: RawCode[] = [];
    firstTable.find("tr.code-row").each((_, tr) => {
      const $tr = $(tr);
      const code = $tr.find(".code-text").first().text().trim();
      if (!code) return;
      let reward = $tr.find(".description-text").first().text().trim();
      // Strip trailing "(NEW)" or "(NEW)" badges that bleed into text
      reward = reward.replace(/\s*\(NEW\)\s*$/i, "").trim();
      if (!reward) reward = "In-game reward";
      codes.push({ code, reward, source: url });
    });
    return codes;
  },
};
