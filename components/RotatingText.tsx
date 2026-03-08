"use client";

import { useState, useEffect, useCallback } from "react";

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export default function RotatingText({ words, className = "" }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentWord = words[currentIndex];

  const tick = useCallback(() => {
    if (!isDeleting) {
      // Typing
      if (displayedChars < currentWord.length) {
        setDisplayedChars((prev) => prev + 1);
      } else {
        // Pause at full word, then start deleting
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
    } else {
      // Deleting
      if (displayedChars > 0) {
        setDisplayedChars((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayedChars, isDeleting, currentWord, words]);

  useEffect(() => {
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting]);

  return (
    <span className={`inline-block ${className}`}>
      {currentWord.slice(0, displayedChars)}
      <span className="inline-block w-[3px] h-[0.85em] bg-current ml-1 animate-pulse align-middle" />
    </span>
  );
}
