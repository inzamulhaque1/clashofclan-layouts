import { createMetadata } from "@/lib/seo";
import { GAMES, GAME_DETAILS } from "@/lib/constants";
import GameDetailPage from "@/components/GameDetailPage";

const game = GAMES.find((g) => g.id === "brawl-stars")!;
const detail = GAME_DETAILS["brawl-stars"];

export const metadata = createMetadata({
  title: `${game.name} Guides & Strategies - Game365Hub`,
  description: `Expert ${game.name} guides, brawler tier lists, best comps, trophy pushing tips & game mode strategies. Master Brawl Stars with pro-level content.`,
  path: "/brawl-stars",
  tags: [
    "Brawl Stars",
    "brawler tier list",
    "best comps",
    "trophy pushing",
    "game modes",
  ],
});

export default function BrawlStarsPage() {
  return <GameDetailPage game={game} detail={detail} />;
}
