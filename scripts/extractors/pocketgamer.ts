import { load, type CheerioAPI, type Cheerio } from "cheerio";
import type { Element } from "domhandler";
import { fetchText, type Extractor, type RawCode } from "./types";

const URLS: Record<string, string> = {
  "mobile-legends": "https://www.pocketgamer.com/mobile-legends-bang-bang/codes/",
};

const CODE_LIKE = /^[A-Za-z0-9_]{4,30}$/;

function looksLikeCodeList($: CheerioAPI, ul: Cheerio<Element>): boolean {
  const firstLi = ul.find("> li").first();
  if (firstLi.length === 0) return false;
  const strong = firstLi.find("strong, b").first();
  const text = strong.text().trim().replace(/\s+/g, "");
  return CODE_LIKE.test(text);
}

export const pocketGamerExtractor: Extractor = {
  name: "pocketgamer.com",
  gameIds: Object.keys(URLS),

  async extract(gameId: string): Promise<RawCode[]> {
    const url = URLS[gameId];
    if (!url) return [];
    const html = await fetchText(url);
    if (!html) return [];

    const $ = load(html);
    // PocketGamer wraps article body in .entry-content (WordPress). First
    // <ul> whose first <li><strong> is code-shaped wins.
    const scope = $(".entry-content").length > 0 ? $(".entry-content") : $.root();

    let chosen: Cheerio<Element> | null = null;
    scope.find("ul").each((_, ul) => {
      if (chosen) return;
      const $ul = $(ul);
      if (looksLikeCodeList($, $ul)) chosen = $ul;
    });

    if (!chosen) {
      console.warn(`[pocket-gamer] no active codes ul found for ${gameId}`);
      return [];
    }

    const codes: RawCode[] = [];
    chosen.find("> li").each((_, li) => {
      const $li = $(li);
      const strong = $li.find("strong, b").first();
      const code = strong.text().trim().replace(/\s+/g, "");
      if (!CODE_LIKE.test(code)) return;
      let reward = $li.text().replace(strong.text(), "").trim();
      reward = reward.replace(/^[\s\-–—:]+/, "").trim();
      // Strip MLBB-style annotations like "(new players only)" that bleed in
      if (!reward) reward = "In-game rewards (delivered via in-game mail)";
      codes.push({ code, reward, source: url });
    });
    return codes;
  },
};
