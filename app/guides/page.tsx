import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GAMES } from "@/lib/constants";
import { gameLogos } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Game Guides, Tier Lists & Tips",
  description:
    "Pro guides, tier lists, character builds, and pro tips for Genshin Impact, Honkai Star Rail, Free Fire, Mobile Legends, Roblox & more.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Header */}
      <section className="bg-[#0a0a0f] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative container-custom text-center">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
            Guides & Tier Lists
          </span>
          <h1
            className="text-3xl md:text-4xl font-normal mt-2 tracking-wide"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            Pro Guides Library
          </h1>
          <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">
            Tier lists, character builds, team comps, and pro tips for every game we cover.
          </p>
        </div>
      </section>

      {/* Game grid */}
      <section className="container-custom py-12">
        <div className="text-center mb-8">
          <h2 className="text-xl font-extrabold text-light">
            Pick a game to explore guides
          </h2>
          <p className="text-muted text-sm mt-1">
            New guides published every week
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {GAMES.map((game) => (
            <Link
              key={game.id}
              href={`/${game.id}`}
              className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-gray-300 hover:-translate-y-0.5 transition-all"
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden bg-white ring-1 ring-gray-100 mb-3">
                <Image
                  src={gameLogos[game.id]}
                  alt={game.name}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
              <p className="text-sm font-bold text-light leading-tight">
                {game.shortName}
              </p>
              <p
                className="text-[11px] font-semibold mt-1"
                style={{ color: game.color }}
              >
                View guides →
              </p>
            </Link>
          ))}
        </div>

        {/* Coming soon banner */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-extrabold text-light mb-2">
            More guides coming soon
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto">
            We are publishing new tier lists and build guides every week. Have a topic request?{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Let us know
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
