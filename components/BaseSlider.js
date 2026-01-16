'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function BaseSlider({ bases }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (bases.length <= 1 || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bases.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [bases.length, isHovered]);

  if (!bases || bases.length === 0) {
    return (
      <div className="aspect-[4/3] rounded-2xl flex items-center justify-center" style={{ background: 'var(--card-bg)', border: '1px solid var(--border)' }}>
        <div className="text-center p-8">
          <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center" style={{ background: 'var(--surface-100)' }}>
            <svg className="w-8 h-8" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <p className="font-medium" style={{ color: 'var(--text-muted)' }}>No bases available</p>
          <p className="text-sm mt-1" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>Check back soon for new layouts</p>
        </div>
      </div>
    );
  }

  const currentBase = bases[currentIndex];
  const imageUrl = currentBase?.originalImageUrl || currentBase?.thumbnailUrl;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ background: 'var(--surface-100)' }}>
        {/* Image with transition */}
        {imageUrl ? (
          <div className="relative w-full h-full">
            {bases.map((base, index) => {
              const imgUrl = base?.originalImageUrl || base?.thumbnailUrl;
              return (
                <img
                  key={index}
                  src={imgUrl}
                  alt={`${base.hallType}${base.hallLevel} ${base.baseType} base`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    index === currentIndex
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
              );
            })}
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-16 h-16" style={{ color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <div className="flex gap-2">
            <span className="px-3 py-1.5 rounded-lg text-sm font-bold bg-gradient-to-r from-primary to-amber-500 text-black shadow-lg">
              {currentBase.hallType}{currentBase.hallLevel}
            </span>
            <span className="px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-md" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
              {currentBase.baseType?.charAt(0).toUpperCase() + currentBase.baseType?.slice(1)}
            </span>
          </div>

          {/* Slide Counter */}
          <span className="px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-md" style={{ background: 'rgba(0,0,0,0.5)', color: 'white' }}>
            {currentIndex + 1} / {bases.length}
          </span>
        </div>

        {/* Bottom Info Bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/bases/${currentBase.hallType?.toLowerCase()}${currentBase.hallLevel}/${currentBase.baseType}/${currentBase.baseNumber}`}
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-primary to-amber-500 text-black shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
            >
              <span>View Layout</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Navigation Arrows */}
            {bases.length > 1 && (
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentIndex((prev) => (prev - 1 + bases.length) % bases.length)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setCurrentIndex((prev) => (prev + 1) % bases.length)}
                  className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md transition-all hover:scale-110"
                  style={{ background: 'rgba(255,255,255,0.15)' }}
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {bases.length > 1 && (
        <div className="flex gap-1.5 mt-4 px-1">
          {bases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="relative h-1 flex-1 rounded-full overflow-hidden transition-all"
              style={{ background: 'var(--surface-200)' }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r from-primary to-amber-500 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'w-full' : 'w-0'
                }`}
                style={{
                  animation: index === currentIndex && !isHovered ? 'progress 4s linear' : 'none'
                }}
              />
            </button>
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
