export interface RawCode {
  code: string;
  reward: string;
  source: string;
}

export interface Extractor {
  name: string;
  gameIds: readonly string[];
  extract(gameId: string): Promise<RawCode[]>;
}

const USER_AGENT =
  "Game365Hub Codes Bot/1.0 (+https://game365hub.com; inzamul.dev@gmail.com)";

export async function fetchText(url: string): Promise<string | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "text/html,*/*;q=0.8" },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      console.warn(`[fetch] ${url} -> HTTP ${res.status}`);
      return null;
    }
    return await res.text();
  } catch (err) {
    console.warn(`[fetch] ${url} -> ${(err as Error).message}`);
    return null;
  }
}

export async function fetchJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": USER_AGENT, Accept: "application/json" },
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) {
      console.warn(`[fetch-json] ${url} -> HTTP ${res.status}`);
      return null;
    }
    return (await res.json()) as T;
  } catch (err) {
    console.warn(`[fetch-json] ${url} -> ${(err as Error).message}`);
    return null;
  }
}
