import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GAMES, type GameId } from "@/lib/constants";
import { gameLogos } from "@/lib/images";
import { getGameMetadata, isValidGameId } from "@/lib/games";
import { getCodesForGame, formatRelativeTime } from "@/lib/codes";
import { createMetadata } from "@/lib/seo";
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
  const today = new Date().toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  return createMetadata({
    title: `${game.name} Redeem Codes (${today})`,
    description: `Latest active ${game.name} redeem codes for ${today}. Free rewards, verified daily. How to redeem included.`,
    path: `/${game.id}/codes`,
  });
}

export const dynamic = "force-static";
export const revalidate = 300; // re-build every 5 min

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

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
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

      {/* Header */}
      <section className="container-custom py-8">
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
              {game.name} Codes ({today})
            </h1>
            <p className="text-muted text-sm mt-1">
              Last updated {formatRelativeTime(codes.lastUpdated)} • {codes.active.length} active codes
            </p>
          </div>
        </div>

        {/* Codes table */}
        <CodeTable
          active={codes.active}
          expired={codes.expired}
          accentColor={game.color}
        />

        {/* How to redeem */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6">
          <h2 className="text-lg font-extrabold mb-4">
            How to Redeem {game.shortName} Codes
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
          {meta?.redeemUrl && meta.redeemUrl.startsWith("http") && (
            <a
              href={meta.redeemUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full text-sm font-semibold text-white"
              style={{ backgroundColor: game.color }}
            >
              Open Official Redeem Page
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Tips section */}
        <div className="mt-8 bg-amber-50 border border-amber-200 rounded-2xl p-5">
          <h2 className="text-sm font-bold text-amber-900 mb-2">
            💡 Tips for redeeming
          </h2>
          <ul className="text-sm text-amber-800 space-y-1.5 leading-relaxed">
            <li>• Codes are case-sensitive — type them exactly as shown</li>
            <li>• Codes expire fast (often within days) — redeem ASAP</li>
            <li>• Each code can only be redeemed once per account</li>
            <li>• Bookmark this page — we update codes multiple times daily</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
