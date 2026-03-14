import { createMetadata, createJsonLd } from "@/lib/seo";
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: `${game.name} Guides & Strategies`,
  description: `Expert ${game.name} guides, brawler tier lists, best comps, trophy pushing tips & game mode strategies.`,
  url: "https://game365hub.com/brawl-stars",
  isPartOf: { "@type": "WebSite", name: "Game365Hub", url: "https://game365hub.com" },
  about: { "@type": "VideoGame", name: "Brawl Stars", gamePlatform: "Mobile", applicationCategory: "Game" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Brawl Stars", item: "https://game365hub.com/brawl-stars" },
    ],
  },
};

export default function BrawlStarsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(jsonLd)} />
      <GameDetailPage game={game} detail={detail} />
    </>
  );
}
