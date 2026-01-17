'use client';

import { useState, useEffect } from 'react';

const announcements = [
  'New TH18 War Bases Added',
  'Updated Daily with Fresh Layouts',
  'One-Click Copy Links',
  'Anti 3-Star CWL Bases',
  'Pro Player Approved Designs',
];

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('announcement-dismissed');
    if (dismissed) setIsVisible(false);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('announcement-dismissed', 'true');
  };

  if (!isVisible) return null;

  const items = [...announcements, ...announcements, ...announcements];

  return (
    <div className="relative flex items-center bg-[#1a1f2e] border-b border-[#2a3040] overflow-hidden">
      {/* Left tag */}
      <div className="relative z-10 flex items-center gap-2 px-4 py-2 bg-primary shrink-0">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/30"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-black/50"></span>
        </span>
        <span className="text-xs font-bold text-black uppercase tracking-wider">Latest</span>
      </div>

      {/* Scrolling content - right to left */}
      <div className="flex-1 overflow-hidden">
        <div className="flex items-center animate-marquee">
          {items.map((text, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="px-6 text-sm text-gray-300 whitespace-nowrap">
                {text}
              </span>
              <span className="text-primary">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dismiss button */}
      <button
        onClick={handleDismiss}
        className="relative z-10 p-2 text-gray-500 hover:text-gray-300 transition-colors shrink-0"
        aria-label="Dismiss"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </div>
  );
}
