import { createMetadata } from "@/lib/seo";
import { GAMES, GAME_DETAILS } from "@/lib/constants";
import GameDetailPage from "@/components/GameDetailPage";

const game = GAMES.find((g) => g.id === "clash-royale")!;
const detail = GAME_DETAILS["clash-royale"];

export const metadata = createMetadata({
  title: `${game.name} Guides & Strategies - Game365Hub`,
  description: `Expert ${game.name} guides, best decks, card tier lists, arena strategies & challenge tips. Master Clash Royale with pro-level content.`,
  path: "/clash-royale",
  tags: [
    "Clash Royale",
    "best decks",
    "card tier list",
    "arena strategies",
    "challenges",
  ],
});

export default function ClashRoyalePage() {
  return <GameDetailPage game={game} detail={detail} />;
}
