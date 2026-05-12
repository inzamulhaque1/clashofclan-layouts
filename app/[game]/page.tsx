import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GAMES, type GameId } from "@/lib/constants";
import { gameLogos } from "@/lib/images";
import { getGameMetadata, isValidGameId } from "@/lib/games";
import {
  getCodesForGame,
  formatRelativeTime,
} from "@/lib/codes";
import {
  createMetadata,
  createJsonLd,
  breadcrumbJsonLd,
  howToJsonLd,
} from "@/lib/seo";

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
  const meta = getGameMetadata(params.game);
  return createMetadata({
    title: `${game.name} — Daily Codes & Redeem Guide`,
    description: `${game.name} redeem codes, redemption steps, and rewards. ${meta?.intro ?? ""}`,
    path: `/${game.id}`,
  });
}

export default function GamePage({ params }: { params: { game: string } }) {
  if (!isValidGameId(params.game)) notFound();

  const gameId = params.game as GameId;
  const game = GAMES.find((g) => g.id === gameId)!;
  const meta = getGameMetadata(gameId);
  const codes = getCodesForGame(gameId);
  const otherGames = GAMES.filter((g) => g.id !== gameId);

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: game.shortName, path: `/${gameId}` },
          ])
        )}
      />
      {meta?.redeemSteps && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={createJsonLd(
            howToJsonLd(`How to redeem ${game.name} codes`, meta.redeemSteps)
          )}
        />
      )}

      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: `${game.color}10` }}
      >
        <div className="absolute inset-0">
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: game.color }}
          />
        </div>
        <div className="relative container-custom py-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-white shadow-lg shrink-0 bg-white">
              <Image
                src={gameLogos[gameId]}
                alt={game.name}
                width={96}
                height={96}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: game.color }}
                >
                  {game.category}
                </span>
                <span className="text-xs text-muted">by {game.developer}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-light leading-tight">
                {game.name}
              </h1>
              <p className="text-muted text-sm mt-2 max-w-2xl">
                {meta?.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-1">
            <Link
              href={`/${gameId}/codes`}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: game.color }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              {codes.active.length} Active Codes
            </Link>
            {meta?.redeemUrl?.startsWith("http") && (
              <a
                href={meta.redeemUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-light hover:bg-gray-200"
              >
                Official Redeem Page
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
            <a
              href={meta?.officialTwitter}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-light hover:bg-gray-200"
            >
              Official X / Twitter
            </a>
          </div>
        </div>
      </section>

      {/* Game Info Grid */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-xl font-extrabold mb-3">About {game.name}</h2>
              <p className="text-muted text-sm leading-relaxed">{meta?.intro}</p>
            </div>

            {/* How to redeem */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-lg font-extrabold mb-4">
                How to Redeem Codes
              </h2>
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
            </div>

            {/* CTA to codes */}
            <Link
              href={`/${gameId}/codes`}
              className="block bg-light text-white rounded-2xl p-6 hover:bg-light/90 transition-colors group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-60 mb-1">
                    {codes.active.length > 0
                      ? `${codes.active.length} active right now`
                      : "Check codes page"}
                  </p>
                  <p className="text-lg font-bold">
                    View all {game.shortName} codes →
                  </p>
                </div>
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </Link>
          </div>

          {/* Sidebar: game details */}
          <aside className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-2xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted mb-4">
                Game Details
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-xs text-muted">Developer</dt>
                  <dd className="font-semibold text-light">
                    {meta?.developer}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Platforms</dt>
                  <dd className="font-semibold text-light">
                    {meta?.platforms.join(", ")}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Currency</dt>
                  <dd className="font-semibold text-light">{meta?.currency}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Code Frequency</dt>
                  <dd className="font-semibold text-light">
                    {meta?.codeFrequency}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Last Code Update</dt>
                  <dd className="font-semibold text-light">
                    {formatRelativeTime(codes.lastUpdated)}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>

        {/* Other games */}
        <div className="mt-12">
          <h2 className="text-xl font-extrabold mb-4">
            Codes for other games
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            {otherGames.map((g) => (
              <Link
                key={g.id}
                href={`/${g.id}/codes`}
                className="group bg-white border border-gray-200 rounded-2xl p-3 hover:border-gray-300 hover:-translate-y-0.5 transition-all text-center"
              >
                <div className="w-10 h-10 mx-auto rounded-xl overflow-hidden mb-2 bg-white ring-1 ring-gray-100">
                  <Image
                    src={gameLogos[g.id]}
                    alt={g.name}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="text-[11px] font-bold text-light leading-tight line-clamp-2">
                  {g.shortName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
