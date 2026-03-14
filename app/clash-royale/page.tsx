import { createMetadata, createJsonLd } from "@/lib/seo";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${game.name} Guides & Strategies`,
  description: `Expert ${game.name} guides, best decks, card tier lists, arena strategies & challenge tips.`,
  url: "https://game365hub.com/clash-royale",
  isPartOf: { "@type": "WebSite", name: "Game365Hub", url: "https://game365hub.com" },
  about: { "@type": "VideoGame", name: "Clash Royale", gamePlatform: "Mobile", applicationCategory: "Game" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Clash Royale", item: "https://game365hub.com/clash-royale" },
    ],
  },
};

export default function ClashRoyalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(jsonLd)} />
      <GameDetailPage game={game} detail={detail} />
    </>
  );
}
