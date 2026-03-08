import { createMetadata } from "@/lib/seo";
import { GAMES, GAME_DETAILS } from "@/lib/constants";
import GameDetailPage from "@/components/GameDetailPage";

const game = GAMES.find((g) => g.id === "free-fire")!;
const detail = GAME_DETAILS["free-fire"];

export const metadata = createMetadata({
  title: `${game.name} Guides & Strategies - Game365Hub`,
  description: `Expert ${game.name} guides, character combos, weapon tier lists, sensitivity settings & pro tips. Master Free Fire with pro-level content.`,
  path: "/free-fire",
  tags: [
    "Free Fire",
    "character combos",
    "weapon guides",
    "sensitivity settings",
    "pro tips",
  ],
});

export default function FreeFirePage() {
  return <GameDetailPage game={game} detail={detail} />;
}
