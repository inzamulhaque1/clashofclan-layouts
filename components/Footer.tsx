import Link from "next/link";
import Image from "next/image";
import { GAMES, SITE_NAME } from "@/lib/constants";

export default function Footer() {
  // Show first 6 games in footer
  const featuredGames = GAMES.slice(0, 6);

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt={SITE_NAME}
                width={140}
                height={36}
              />
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Daily redeem codes, tier lists, and pro guides for the games you
              play. Updated every day. Free forever.
            </p>
          </div>

          {/* Games */}
          <div>
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider mb-4">
              Games
            </h3>
            <ul className="space-y-2">
              {featuredGames.map((game) => (
                <li key={game.id}>
                  <Link
                    href={`/${game.id}`}
                    className="text-sm text-muted hover:text-light transition-colors"
                  >
                    {game.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/codes"
                  className="text-sm text-muted hover:text-light transition-colors"
                >
                  All Codes
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-sm text-muted hover:text-light transition-colors"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted hover:text-light transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted hover:text-light transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-light uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted hover:text-light transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted hover:text-light transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-muted text-center sm:text-right">
            Not affiliated with HoYoverse, Supercell, Garena, Moonton, Tencent,
            Krafton, Kuro Games, Lilith Games, or Roblox.
          </p>
        </div>
      </div>
    </footer>
  );
}
