import { createMetadata, createJsonLd } from "@/lib/seo";
import { SITE_NAME, GAMES } from "@/lib/constants";

export const metadata = createMetadata({
  title: `About - ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, the daily codes & guides hub for Genshin Impact, Honkai Star Rail, Free Fire, Mobile Legends, Roblox and more.`,
  path: "/about",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: "https://game365hub.com/about",
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: "https://game365hub.com",
    logo: "https://game365hub.com/logo.png",
    description:
      "Daily redeem codes, tier lists, and pro guides for top mobile and PC games. Updated every day.",
    email: "inzamul.dev@gmail.com",
    foundingDate: "2026",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(aboutJsonLd)}
      />
      <div className="container-custom py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            About <span className="text-primary">{SITE_NAME}</span>
          </h1>
          <p className="text-muted text-sm mb-10">
            Daily redeem codes, tier lists, and pro guides — since 2026
          </p>

          {/* Intro */}
          <div className="bg-[#1B1C3C] text-white rounded-2xl p-6 mb-10">
            <p className="text-sm text-gray-300 leading-relaxed">
              {SITE_NAME} is your daily destination for verified redeem codes,
              tier lists, and pro guides across {GAMES.length}+ of the most
              popular games. We update codes multiple times every day so you
              never miss free in-game rewards.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-light mb-3">Our Mission</h2>
            <p className="text-muted text-sm leading-relaxed">
              Free in-game rewards should be easy to find. Developers like
              HoYoverse, Garena, Moonton, and Roblox studios drop codes
              constantly — but tracking them across Twitter, Discord, and
              livestreams is a pain. We do the work, verify each code, and
              publish them on one clean page per game.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-light mb-4">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Daily Verified Codes
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  Every code is cross-checked across multiple official sources
                  before we publish it. No fake or expired codes.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Pro Tier Lists
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  Updated after every patch and balance change. Know which
                  characters, heroes, or weapons to invest in.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Build & Strategy Guides
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  Character builds, team comps, weapon loadouts, and meta
                  strategies — written for both F2P and whales.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  100% Free, Forever
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  No paywalls. No signups. No subscriptions. Every guide, every
                  code, every tier list — completely free.
                </p>
              </div>
            </div>
          </section>

          {/* Games We Cover */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-light mb-4">
              Games We Cover
            </h2>
            <div className="flex flex-wrap gap-2">
              {GAMES.map((game) => (
                <span
                  key={game.id}
                  className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-light font-medium"
                >
                  {game.name}
                </span>
              ))}
            </div>
          </section>

          {/* Stats */}
          <section className="mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: `${GAMES.length}+`, label: "Games" },
                { value: "Daily", label: "Updates" },
                { value: "30 min", label: "Refresh" },
                { value: "100%", label: "Free" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center py-5 border border-gray-200 rounded-xl"
                >
                  <p className="text-2xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <section>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <h2 className="text-sm font-bold text-amber-800 mb-2">
                Disclaimer
              </h2>
              <p className="text-sm text-amber-700 leading-relaxed">
                {SITE_NAME} is an independent fan-made resource site. We are
                not affiliated with, endorsed by, or connected to HoYoverse,
                Supercell, Garena, Moonton, Tencent, Krafton, Kuro Games,
                Lilith Games, Roblox Corporation, or any other game developer
                or publisher. All game names, logos, characters, and images are
                trademarks of their respective owners.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
