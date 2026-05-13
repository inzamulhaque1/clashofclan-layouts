import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GAMES, type GameId } from "@/lib/constants";
import { gameLogos } from "@/lib/images";
import { getGameMetadata, isValidGameId } from "@/lib/games";
import { getCodesForGame, formatRelativeTime } from "@/lib/codes";
import { codeGuides } from "@/lib/code-guides";
import {
  createMetadata,
  createJsonLd,
  breadcrumbJsonLd,
  codesItemListJsonLd,
  howToJsonLd,
  faqJsonLd,
} from "@/lib/seo";
import CodeTable from "@/components/CodeTable";

export async function generateStaticParams() {
  return GAMES.map((game) => ({ game: game.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { game: string };
}): Promise<Metadata> {
  if (!isValidGameId(params.game)) return {};
  const game = GAMES.find((g) => g.id === params.game)!;
  const codes = getCodesForGame(params.game as GameId);
  const monthYear = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return createMetadata({
    title: `${game.name} Redeem Codes (${monthYear}) — ${codes.active.length} Working`,
    description: `${codes.active.length} active ${game.name} codes for ${monthYear}. Free ${game.shortName} rewards, verified and updated daily. Updated ${today}.`,
    path: `/${game.id}/codes`,
  });
}

export const dynamic = "force-static";
export const revalidate = 300;

function buildFaq(gameName: string, shortName: string, currency: string, redeemUrl: string) {
  const officialUrl = redeemUrl.startsWith("http") ? redeemUrl : null;
  return [
    {
      question: `How often do new ${gameName} codes drop?`,
      answer: `New ${gameName} codes typically drop during developer livestreams, version updates, and community milestones. Some codes — especially for fast-moving titles — only stay active for 12 to 48 hours, so it pays to redeem them quickly. We re-check every two hours and refresh this page automatically.`,
    },
    {
      question: `Are ${shortName} codes case-sensitive?`,
      answer: `Yes. Type or paste every code exactly as it appears here, preserving capital letters, lowercase letters, and any digits. A single wrong character and the redemption page will reject the code.`,
    },
    {
      question: `Why didn't my code work?`,
      answer: `The most common reasons are (1) the code has already expired, (2) you mistyped a character, (3) your account is in a region that the code doesn't cover, or (4) you have already redeemed that code on this account. Each code can only be claimed once per account.`,
    },
    {
      question: `Where do my ${currency} rewards go after I redeem?`,
      answer: `Rewards are delivered to your in-game mailbox. They normally arrive within minutes, but for some live-service titles they can take up to 24 hours${officialUrl ? `. If they never show up, double-check that you redeemed on the right account at ${officialUrl}` : ""}.`,
    },
  ];
}

export default function CodesPage({
  params,
}: {
  params: { game: string };
}) {
  if (!isValidGameId(params.game)) notFound();

  const gameId = params.game as GameId;
  const game = GAMES.find((g) => g.id === gameId)!;
  const meta = getGameMetadata(gameId);
  const codes = getCodesForGame(gameId);

  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const monthYear = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  const redeemUrl = meta?.redeemUrl ?? "";
  const externalRedeem = redeemUrl.startsWith("http");
  const faq = buildFaq(game.name, game.shortName, meta?.currency ?? "rewards", redeemUrl);
  const guide = codeGuides[gameId];

  const otherGames = GAMES.filter((g) => g.id !== gameId).slice(0, 6);

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: game.shortName, path: `/${gameId}` },
            { name: "Codes", path: `/${gameId}/codes` },
          ])
        )}
      />
      {codes.active.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(
            codesItemListJsonLd(game.name, `/${gameId}/codes`, codes.active)
          )}
        />
      )}
      {meta?.redeemSteps && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(
            howToJsonLd(`How to redeem ${game.name} codes`, meta.redeemSteps)
          )}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(faqJsonLd(faq))}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-light">
              Home
            </Link>
            <span>/</span>
            <Link href={`/${gameId}`} className="hover:text-light">
              {game.shortName}
            </Link>
            <span>/</span>
            <span className="text-light font-semibold">Codes</span>
          </nav>
        </div>
      </div>

      <section className="container-custom py-8">
        {/* Header */}
        <div className="flex items-start gap-5 mb-6">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-white shadow-md shrink-0 bg-white">
            <Image
              src={gameLogos[gameId]}
              alt={game.name}
              width={64}
              height={64}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-extrabold text-light leading-tight">
              {game.name} Redeem Codes ({monthYear})
            </h1>
            <p className="text-muted text-sm mt-1">
              {codes.active.length} active {codes.active.length === 1 ? "code" : "codes"} • Updated {today}
            </p>
          </div>
        </div>

        {/* Freshness banner */}
        <div
          className="px-4 py-3 rounded-2xl mb-6 border"
          style={{
            backgroundColor: `${game.color}10`,
            borderColor: `${game.color}40`,
          }}
        >
          <div className="flex items-center gap-3">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: game.color }}
            />
            <p className="text-xs font-semibold" style={{ color: game.color }}>
              Last refresh: {formatRelativeTime(codes.lastUpdated)}
            </p>
            <span className="text-xs text-muted ml-auto hidden sm:inline">
              Auto-checked every 2 hours
            </span>
          </div>
          <p className="text-xs text-muted mt-2 leading-relaxed">
            {guide.freshnessNote}
          </p>
        </div>

        {/* Overview — long-form context */}
        <section className="mb-10">
          <h2 className="text-xl font-extrabold mb-3">
            About {game.name} Codes
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            {guide.overview.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </section>

        {/* Ad slot — top of content */}
        <div
          data-ad-slot="codes-top"
          className="hidden mb-6 min-h-[90px] bg-gray-50 border border-dashed border-gray-200 rounded-2xl items-center justify-center text-xs text-gray-400"
        >
          {/* AdSense placeholder — enable after approval */}
        </div>

        {/* Codes table */}
        <CodeTable
          active={codes.active}
          expired={codes.expired}
          accentColor={game.color}
          redeemUrl={externalRedeem ? redeemUrl : undefined}
        />

        {/* Ad slot — mid */}
        <div
          data-ad-slot="codes-mid"
          className="hidden my-8 min-h-[250px] bg-gray-50 border border-dashed border-gray-200 rounded-2xl items-center justify-center text-xs text-gray-400"
        >
          {/* AdSense placeholder — enable after approval */}
        </div>

        {/* How to redeem */}
        <section className="mt-12">
          <h2 className="text-xl font-extrabold mb-3">
            How to Redeem {game.shortName} Codes
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed mb-5">
            {guide.howCodesWork.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-light mb-4">
              Redemption Steps
            </h3>
            <ol className="space-y-2">
              {meta?.redeemSteps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span
                    className="shrink-0 w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
                    style={{ backgroundColor: game.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-muted leading-relaxed pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            {externalRedeem && (
              <a
                href={redeemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: game.color }}
              >
                Open Official Redeem Page
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </section>

        {/* Common pitfalls — replaces generic Tips */}
        <section className="mt-10">
          <h2 className="text-xl font-extrabold mb-4">
            Common Pitfalls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {guide.pitfalls.map((p, i) => (
              <div
                key={i}
                className="bg-amber-50 border border-amber-200 rounded-2xl p-4"
              >
                <h3 className="text-sm font-bold text-amber-900 mb-1">
                  {p.title}
                </h3>
                <p className="text-xs text-amber-800 leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <div className="mt-10">
          <h2 className="text-xl font-extrabold mb-4">
            {game.shortName} Codes FAQ
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl px-5 py-4 open:bg-gray-50"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-light">
                    {item.question}
                  </span>
                  <svg
                    className="w-4 h-4 text-muted transition-transform group-open:rotate-180 shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Other games */}
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">
            Codes for other games
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {otherGames.map((g) => (
              <Link
                key={g.id}
                href={`/${g.id}/codes`}
                className="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-gray-300 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl overflow-hidden mb-2 bg-white ring-1 ring-gray-100">
                  <Image
                    src={gameLogos[g.id]}
                    alt={g.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="text-xs font-bold text-light leading-tight">
                  {g.shortName}
                </p>
                <p
                  className="text-[10px] font-semibold mt-1"
                  style={{ color: g.color }}
                >
                  Codes →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
