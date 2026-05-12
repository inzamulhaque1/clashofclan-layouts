import { load, type CheerioAPI, type Cheerio } from "cheerio";
import type { Element } from "domhandler";
import { fetchText, type Extractor, type RawCode } from "./types";

const URLS: Record<string, string> = {
  "genshin-impact": "https://www.pockettactics.com/genshin-impact/codes",
  "honkai-star-rail": "https://www.pockettactics.com/honkai-star-rail/codes",
  "wuthering-waves": "https://www.pockettactics.com/wuthering-waves/codes",
  "zenless-zone-zero": "https://www.pockettactics.com/zenless-zone-zero/codes",
  "free-fire": "https://www.pockettactics.com/garena-free-fire/codes",
  "pubg-mobile": "https://www.pockettactics.com/pubg-mobile/codes",
  "afk-journey": "https://www.pockettactics.com/afk-journey/codes",
};

// A <li> looks like an active codes entry if its first <strong> contains
// something that could plausibly be a code (4-30 chars of letters/digits/_).
const CODE_LIKE = /^[A-Za-z0-9_]{4,30}$/;

function looksLikeCodeList($: CheerioAPI, ul: Cheerio<Element>): boolean {
  const firstLi = ul.find("> li").first();
  if (firstLi.length === 0) return false;
  const strong = firstLi.find("strong, b").first();
  const text = strong.text().trim().replace(/\s+/g, "");
  return CODE_LIKE.test(text);
}

export const pocketTacticsExtractor: Extractor = {
  name: "pockettactics.com",
  gameIds: Object.keys(URLS),

  async extract(gameId: string): Promise<RawCode[]> {
    const url = URLS[gameId];
    if (!url) return [];
    const html = await fetchText(url);
    if (!html) return [];

    const $ = load(html);

    // Pocket Tactics layouts vary by article: sometimes <h2> "X codes" + <ul>,
    // sometimes <p><strong>Active codes:</strong></p> + <ul>. The reliable
    // signal: the FIRST <ul> on the page whose first <li> begins with a
    // code-shaped <strong>. Article content lives in .entry-content; fall
    // back to whole document if that wrapper is absent.
    const scope = $(".entry-content").length > 0 ? $(".entry-content") : $.root();

    let chosen: Cheerio<Element> | null = null;
    scope.find("ul").each((_, ul) => {
      if (chosen) return;
      const $ul = $(ul);
      if (looksLikeCodeList($, $ul)) chosen = $ul;
    });

    if (!chosen) {
      console.warn(`[pocket-tactics] no active codes ul found for ${gameId}`);
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
      if (!reward) reward = "In-game rewards";
      codes.push({ code, reward, source: url });
    });
    return codes;
  },
};
