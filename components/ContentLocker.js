'use client';

import { useState, useEffect } from 'react';

/**
 * ContentLocker Component
 * Shows a modal when users try to access premium content
 * Uses CPABuild's _KE() function for content locking
 */
export default function ContentLocker({
  isOpen,
  onClose,
  base
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  // Check if this base was previously unlocked (stored in localStorage)
  useEffect(() => {
    if (base && typeof window !== 'undefined') {
      const unlockedBases = JSON.parse(localStorage.getItem('unlockedBases') || '[]');
      const baseId = `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`;
      if (unlockedBases.includes(baseId)) {
        setUnlocked(true);
      }
    }
  }, [base]);

  const handleUnlock = () => {
    setIsLoading(true);

    // Call CPABuild's _KE() function to open the locker
    if (typeof window !== 'undefined' && typeof window._KE === 'function') {
      window._KE();

      // Listen for completion (CPABuild will redirect to success URL)
      // For now, we'll let the redirect handle it
      setIsLoading(false);
    } else {
      // Fallback - CPABuild script not loaded yet
      console.warn('CPABuild locker not loaded');
      setIsLoading(false);
      alert('Locker is loading, please try again in a moment.');
    }
  };

  const markAsUnlocked = () => {
    if (base && typeof window !== 'undefined') {
      const baseId = `${base.hallType}${base.hallLevel}-${base.baseType}-${base.baseNumber}`;
      const unlockedBases = JSON.parse(localStorage.getItem('unlockedBases') || '[]');
      if (!unlockedBases.includes(baseId)) {
        unlockedBases.push(baseId);
        localStorage.setItem('unlockedBases', JSON.stringify(unlockedBases));
      }
    }
    setUnlocked(true);
    setIsLoading(false);
  };

  const handleCopy = async () => {
    if (base?.copyLink) {
      try {
        await navigator.clipboard.writeText(base.copyLink);
        alert('Base link copied! Open Clash of Clans to import.');
      } catch (err) {
        // Fallback
        const textArea = document.createElement('textarea');
        textArea.value = base.copyLink;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Base link copied! Open Clash of Clans to import.');
      }
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-[#0f172a] rounded-2xl overflow-hidden border border-yellow-500/30 shadow-2xl"
           style={{ boxShadow: '0 0 60px rgba(255, 215, 0, 0.2)' }}>

        {/* Gold gradient header */}
        <div className="relative px-6 py-8 text-center"
             style={{
               background: 'linear-gradient(135deg, rgba(255,215,0,0.15) 0%, rgba(255,165,0,0.1) 50%, rgba(255,215,0,0.15) 100%)',
               borderBottom: '1px solid rgba(255,215,0,0.2)'
             }}>

          {/* Crown icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
               style={{
                 background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                 boxShadow: '0 8px 30px rgba(255,215,0,0.4)'
               }}>
            <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
            </svg>
          </div>

          <h2 className="text-2xl font-bold mb-2"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            Premium Base
          </h2>
          <p className="text-sm text-gray-400">
            {base?.hallType}{base?.hallLevel} {base?.baseType?.charAt(0).toUpperCase() + base?.baseType?.slice(1)} #{base?.baseNumber}
          </p>
        </div>

        {/* Content */}
        <div className="px-6 py-6">
          {unlocked ? (
            // Unlocked state
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 mb-4">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unlocked!</h3>
              <p className="text-gray-400 text-sm mb-6">Click below to copy this premium base layout.</p>

              <button
                onClick={handleCopy}
                className="w-full py-3 rounded-xl font-semibold text-black transition-all"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  boxShadow: '0 4px 20px rgba(255,215,0,0.4)'
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Copy Base Link
                </span>
              </button>
            </div>
          ) : (
            // Locked state
            <div className="text-center">
              {/* Lock icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <h3 className="text-lg font-semibold text-white mb-2">Unlock This Base</h3>
              <p className="text-gray-400 text-sm mb-6">
                Complete a quick action to unlock this exclusive base layout. It only takes a moment!
              </p>

              {/* Benefits list */}
              <div className="text-left bg-gray-800/50 rounded-xl p-4 mb-6">
                <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">What you get:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    One-click copy link
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Anti 3-Star optimized
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Permanent unlock
                  </li>
                </ul>
              </div>

              {/* Unlock button */}
              <button
                onClick={handleUnlock}
                disabled={isLoading}
                className="w-full py-4 rounded-xl font-bold text-black transition-all disabled:opacity-50"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
                  backgroundSize: '200% 100%',
                  animation: 'goldShimmer 3s linear infinite',
                  boxShadow: '0 4px 30px rgba(255,215,0,0.5)'
                }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                    Unlock Now - Free
                  </span>
                )}
              </button>

              <p className="text-xs text-gray-500 mt-4">
                Support us by completing a quick offer
              </p>
            </div>
          )}
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
