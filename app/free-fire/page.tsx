import { createMetadata, createJsonLd } from "@/lib/seo";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${game.name} Guides & Strategies`,
  description: `Expert ${game.name} guides, character combos, weapon tier lists, sensitivity settings & pro tips.`,
  url: "https://game365hub.com/free-fire",
  isPartOf: { "@type": "WebSite", name: "Game365Hub", url: "https://game365hub.com" },
  about: { "@type": "VideoGame", name: "Free Fire", gamePlatform: "Mobile", applicationCategory: "Game" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Free Fire", item: "https://game365hub.com/free-fire" },
    ],
  },
};

export default function FreeFirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(jsonLd)} />
      <GameDetailPage game={game} detail={detail} />
    </>
  );
}
