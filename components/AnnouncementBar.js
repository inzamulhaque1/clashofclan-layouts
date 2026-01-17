'use client';

import { useState, useEffect } from 'react';

const announcements = [
  { icon: '🏰', text: 'New TH18 War Bases Added!' },
  { icon: '🔥', text: 'Updated Daily with Fresh Layouts' },
  { icon: '📋', text: 'One-Click Copy Links' },
  { icon: '⚔️', text: 'Anti 3-Star CWL Bases' },
  { icon: '🏆', text: 'Pro Player Approved Designs' },
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Check if user dismissed before
  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (dismissed) setIsVisible(false);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('announcement-dismissed', 'true');
  };

  if (!isVisible) return null;

  // Duplicate for seamless loop
  const items = [...announcements, ...announcements];

  return (
    <div className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 overflow-hidden">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />

      {/* Content */}
      <div
        className="relative flex items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Scrolling content */}
        <div
          className="flex items-center py-2"
          style={{
            animation: `scroll 30s linear infinite`,
            animationPlayState: isHovered ? 'paused' : 'running',
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center px-6 shrink-0">
              <span className="text-lg mr-2">{item.icon}</span>
              <span className="text-sm font-semibold text-black whitespace-nowrap">
                {item.text}
              </span>
              <span className="ml-6 text-black/40">|</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
        aria-label="Dismiss announcement"
      >
        <svg className="w-3.5 h-3.5 text-black/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-500 to-transparent pointer-events-none" />
      <div className="absolute right-8 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-500 to-transparent pointer-events-none" />

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
