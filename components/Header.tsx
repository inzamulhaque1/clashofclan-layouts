"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GAMES, SITE_NAME } from "@/lib/constants";
import { images } from "@/lib/images";
import type { GameId } from "@/lib/constants";

const gameLogos: Record<GameId, string> = {
  "clash-of-clans": images.games.coc.logo,
  "brawl-stars": images.games.brawlStars.logo,
  "clash-royale": images.games.clashRoyale.logo,
  "free-fire": images.games.freeFire.logo,
  pubg: images.games.pubg.logo,
};

const baseLinks = [
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const gamesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Detect which game page we're on (includes sub-pages like /clash-of-clans/bases)
  const currentGame = GAMES.find((g) => pathname.startsWith(`/${g.id}`));

  const activeGames = GAMES.filter((g) => g.active);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (gamesRef.current && !gamesRef.current.contains(e.target as Node)) {
        setGamesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close on route change
  useEffect(() => {
    setGamesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 font-body">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <Image
              src="/logo.png"
              alt={SITE_NAME}
              width={140}
              height={36}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Home — always links to main site */}
            <Link
              href="/"
              className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-primary font-semibold"
                  : "text-muted hover:text-light hover:bg-gray-50"
              }`}
            >
              Home
            </Link>

            {/* Other links */}
            {baseLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Pipe separator */}
            <div className="w-px h-4 bg-gray-200 mx-2" />

            {/* CoC Home — only on CoC pages */}
            {pathname.startsWith("/clash-of-clans") && (
              <Link
                href="/clash-of-clans"
                className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                  pathname === "/clash-of-clans"
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-50"
                }`}
              >
                CoC Home
              </Link>
            )}

            {/* Bases link — only on CoC pages */}
            {pathname.startsWith("/clash-of-clans") && (
              <Link
                href="/clash-of-clans/bases"
                className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/clash-of-clans/bases")
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-50"
                }`}
              >
                Bases
              </Link>
            )}

            {/* Guides link — only on CoC pages */}
            {pathname.startsWith("/clash-of-clans") && (
              <Link
                href="/clash-of-clans/guides"
                className={`px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/clash-of-clans/guides")
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-50"
                }`}
              >
                Guides
              </Link>
            )}

            {/* Games Dropdown */}
            <div ref={gamesRef} className="relative">
              <button
                onClick={() => setGamesOpen(!gamesOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[13px] font-medium rounded-lg transition-colors ${
                  currentGame || gamesOpen
                    ? "text-primary font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-50"
                }`}
              >
                {currentGame ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded overflow-hidden shrink-0">
                      <Image
                        src={gameLogos[currentGame.id]}
                        alt=""
                        width={20}
                        height={20}
                        className="object-cover w-full h-full"
                      />
                    </span>
                    {currentGame.shortName}
                  </span>
                ) : (
                  "Games"
                )}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${gamesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown */}
              {gamesOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-black/8 py-2 z-50">
                  <p className="px-4 py-2 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Switch game
                  </p>
                  {activeGames.map((game) => (
                    <Link
                      key={game.id}
                      href={`/${game.id}`}
                      className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                        pathname === `/${game.id}` ? "bg-gray-50" : ""
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 ring-1 ring-gray-100">
                        <Image
                          src={gameLogos[game.id]}
                          alt={game.name}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className={`text-sm font-medium leading-tight ${
                          pathname === `/${game.id}` ? "text-primary" : "text-[#1a1a2e]"
                        }`}>
                          {game.name}
                        </p>
                        <p className="text-[11px] text-gray-400 truncate">
                          {game.description}
                        </p>
                      </div>
                      {pathname === `/${game.id}` && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                    </Link>
                  ))}
                  {GAMES.filter((g) => g.comingSoon).map((game) => (
                    <div
                      key={game.id}
                      className="flex items-center gap-3 px-4 py-2.5 opacity-50 cursor-not-allowed"
                    >
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 grayscale ring-1 ring-gray-100">
                        <Image
                          src={gameLogos[game.id]}
                          alt={game.name}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-400 leading-tight">
                          {game.name}
                        </p>
                        <p className="text-[11px] text-gray-300">Coming Soon</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted hover:text-light"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 space-y-1">
            {/* Home — always main site */}
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/"
                  ? "text-primary bg-primary/5 font-semibold"
                  : "text-muted hover:text-light hover:bg-gray-100"
              }`}
            >
              Home
            </Link>

            {baseLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* CoC Home — mobile, only on CoC pages */}
            {pathname.startsWith("/clash-of-clans") && (
              <Link
                href="/clash-of-clans"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === "/clash-of-clans"
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-100"
                }`}
              >
                CoC Home
              </Link>
            )}

            {/* Bases link — mobile, only on CoC pages */}
            {pathname.startsWith("/clash-of-clans") && (
              <Link
                href="/clash-of-clans/bases"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/clash-of-clans/bases")
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-100"
                }`}
              >
                Bases
              </Link>
            )}

            {/* Guides link — mobile, only on CoC pages */}
            {pathname.startsWith("/clash-of-clans") && (
              <Link
                href="/clash-of-clans/guides"
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname.startsWith("/clash-of-clans/guides")
                    ? "text-primary bg-primary/5 font-semibold"
                    : "text-muted hover:text-light hover:bg-gray-100"
                }`}
              >
                Guides
              </Link>
            )}

            {/* Games section */}
            <div className="pt-2 mt-2 border-t border-gray-100">
              <p className="px-4 py-2 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                Games
              </p>
              {activeGames.map((game) => (
                <Link
                  key={game.id}
                  href={`/${game.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    pathname === `/${game.id}`
                      ? "text-primary bg-primary/5"
                      : "text-muted hover:text-light hover:bg-gray-100"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0">
                    <Image
                      src={gameLogos[game.id]}
                      alt={game.name}
                      width={28}
                      height={28}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="text-sm font-medium">{game.name}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
