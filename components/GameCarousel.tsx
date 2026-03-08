"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import GameCard from "@/components/GameCard";
import type { GameInfo } from "@/lib/constants";

export default function GameCarousel({ games }: { games: GameInfo[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const total = games.length;

  const getCardWidth = useCallback(() => {
    if (!scrollRef.current) return 300;
    const firstChild = scrollRef.current.firstElementChild as HTMLElement;
    return firstChild ? firstChild.offsetWidth + 20 : 300;
  }, []);

  const updateActiveIndex = useCallback(() => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = getCardWidth();
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(index, total - 1));
  }, [getCardWidth, total]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateActiveIndex, { passive: true });
    return () => el.removeEventListener("scroll", updateActiveIndex);
  }, [updateActiveIndex]);

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const cardWidth = getCardWidth();
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Cards — fill full width, overflow scrolls */}
      <div
        ref={scrollRef}
        className="grid grid-flow-col gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ gridTemplateColumns: `repeat(${total}, minmax(180px, 1fr))` }}
      >
        {games.map((game) => (
          <div key={game.id} className="snap-start min-w-[180px]">
            <GameCard game={game} />
          </div>
        ))}
      </div>

      {/* Dots only */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {games.map((game, i) => (
          <button
            key={game.id}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to ${game.name}`}
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: activeIndex === i ? 24 : 8,
                height: 8,
                backgroundColor: activeIndex === i ? game.color : "#d1d5db",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
