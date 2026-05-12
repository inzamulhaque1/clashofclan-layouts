"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GAMES, SITE_NAME, NAV_LINKS } from "@/lib/constants";
import { gameLogos } from "@/lib/images";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const gamesRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const currentGame = GAMES.find((g) => pathname.startsWith(`/${g.id}`));

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (gamesRef.current && !gamesRef.current.contains(e.target as Node)) {
        setGamesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

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
            {NAV_LINKS.map((link) => (
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

            {/* Games Dropdown */}
            <div ref={gamesRef} className="relative ml-2">
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
                    <span className="w-5 h-5 rounded overflow-hidden shrink-0 bg-white">
                      <Image
                        src={gameLogos[currentGame.id]}
                        alt=""
                        width={20}
                        height={20}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </span>
                    {currentGame.shortName}
                  </span>
                ) : (
                  "Games"
                )}
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    gamesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {gamesOpen && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-2xl border border-gray-100 shadow-xl shadow-black/8 py-2 z-50 max-h-[480px] overflow-y-auto">
                  <p className="px-4 py-2 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                    Pick a game
                  </p>
                  {GAMES.map((game) => (
                    <Link
                      key={game.id}
                      href={`/${game.id}`}
                      className={`flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors ${
                        pathname.startsWith(`/${game.id}`) ? "bg-gray-50" : ""
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 ring-1 ring-gray-100 bg-white">
                        <Image
                          src={gameLogos[game.id]}
                          alt={game.name}
                          width={32}
                          height={32}
                          className="object-cover w-full h-full"
                          unoptimized
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-medium leading-tight ${
                            pathname.startsWith(`/${game.id}`)
                              ? "text-primary"
                              : "text-[#1a1a2e]"
                          }`}
                        >
                          {game.name}
                        </p>
                        <p className="text-[11px] text-gray-400 truncate">
                          {game.category}
                        </p>
                      </div>
                      {pathname.startsWith(`/${game.id}`) && (
                        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      )}
                    </Link>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 pt-4 space-y-1">
            {NAV_LINKS.map((link) => (
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
            <div className="pt-2 mt-2 border-t border-gray-100">
              <p className="px-4 py-2 text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                Games
              </p>
              {GAMES.map((game) => (
                <Link
                  key={game.id}
                  href={`/${game.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors ${
                    pathname.startsWith(`/${game.id}`)
                      ? "text-primary bg-primary/5"
                      : "text-muted hover:text-light hover:bg-gray-100"
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 bg-white">
                    <Image
                      src={gameLogos[game.id]}
                      alt={game.name}
                      width={28}
                      height={28}
                      className="object-cover w-full h-full"
                      unoptimized
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
