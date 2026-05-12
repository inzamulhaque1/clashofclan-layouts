import { createMetadata, createJsonLd } from "@/lib/seo";
import { SITE_NAME, GAMES } from "@/lib/constants";

export const metadata = createMetadata({
  title: `About — ${SITE_NAME}`,
  description: `${SITE_NAME} aggregates daily redemption codes for ${GAMES.length} popular live-service games. Independent, free, refreshed every 2 hours.`,
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
      "Daily redemption codes aggregator for live-service games. Independent and free.",
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
            A daily redemption codes hub for {GAMES.length} live-service games. Independent. Free. Refreshed every 2 hours.
          </p>

          {/* Intro */}
          <div className="bg-[#1B1C3C] text-white rounded-2xl p-6 mb-10">
            <p className="text-sm text-gray-300 leading-relaxed">
              {SITE_NAME} exists to solve one annoying problem: keeping up with
              the redemption codes that publishers like HoYoverse, Kuro Games,
              Garena, Moonton, Krafton, Lilith Games, and Roblox studios drop
              across livestreams, Twitter, and Discord. We collect them, verify
              them, and put them on one clean page per game.
            </p>
          </div>

          {/* Mission */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-light mb-3">Our Mission</h2>
            <p className="text-muted text-sm leading-relaxed">
              Free in-game currency, characters, and items should be easy to
              claim. Publishers drop codes constantly, but tracking them across
              dozens of channels is a chore. {SITE_NAME} watches the canonical
              sources for you and surfaces only what's currently active.
            </p>
          </section>

          {/* How it works */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-light mb-4">How it works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Automated sourcing
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  Every 2 hours we pull from a curated set of canonical sources
                  — including the community-maintained HoYoverse codes API and
                  established gaming-press code trackers.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Cross-source verification
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  A code marked "verified" has been seen in two or more
                  independent sources. Single-source codes are still listed but
                  flagged so you know to redeem fast.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Manual review gate
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  New codes never enter the public list automatically. They go
                  into a pending queue that we review before publishing — so
                  nothing junk gets to you.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-light text-sm mb-1">
                  Auto-expire stale codes
                </h3>
                <p className="text-muted text-xs leading-relaxed">
                  If a code disappears from every source for 14 days, we move it
                  to the expired list automatically. You only see codes that
                  still have a real chance of working.
                </p>
              </div>
            </div>
          </section>

          {/* Games */}
          <section className="mb-10">
            <h2 className="text-xl font-bold text-light mb-4">
              Games we cover
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
                { value: `${GAMES.length}`, label: "Games" },
                { value: "2 hr", label: "Refresh" },
                { value: "Daily", label: "Updates" },
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
                Kuro Games, Garena International, Moonton, Krafton Inc., Gamer
                Robot Inc., Lilith Games, Roblox Corporation, or any other game
                developer or publisher. All game names, logos, characters, and
                images are trademarks of their respective owners.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
