'use client';

import { createContext, useContext } from 'react';

// Context for game theme
const GameThemeContext = createContext(null);

// Hook to access current game context
export function useGameTheme() {
  return useContext(GameThemeContext);
}

/**
 * GameThemeProvider - Injects game-specific CSS variables and theme
 *
 * Usage:
 * <GameThemeProvider game={gameConfig}>
 *   {children}
 * </GameThemeProvider>
 */
export default function GameThemeProvider({ game, children }) {
  if (!game) {
    return <>{children}</>;
  }

  const theme = game.theme || {};

  // Generate CSS custom properties from theme
  const cssVars = {
    '--game-primary': theme.primary || '#F59E0B',
    '--game-primary-hover': theme.primaryHover || '#D97706',
    '--game-secondary': theme.secondary || '#78350F',
    '--game-accent': theme.accent || '#FCD34D',
    '--game-gradient': theme.gradient || 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
  };

  return (
    <GameThemeContext.Provider value={game}>
      <div data-game={game.slug} style={cssVars}>
        {children}
      </div>
    </GameThemeContext.Provider>
  );
}

/**
 * GameThemeStyles - Outputs CSS for game-specific theming
 * Include this in your layout to enable game-based styling
 */
export function GameThemeStyles() {
  return (
    <style jsx global>{`
      /* Game-specific theme overrides */
      [data-game] {
        /* Use game primary color for interactive elements */
        --primary: var(--game-primary);
        --primary-hover: var(--game-primary-hover);
      }

      /* Game-specific selection color */
      [data-game]::selection,
      [data-game] ::selection {
        background: color-mix(in srgb, var(--game-primary) 30%, transparent);
      }

      /* Game-specific button styling */
      [data-game] .btn-primary {
        background: var(--game-primary);
        box-shadow: 0 2px 10px color-mix(in srgb, var(--game-primary) 30%, transparent);
      }

      [data-game] .btn-primary:hover {
        background: var(--game-primary-hover);
        box-shadow: 0 4px 20px color-mix(in srgb, var(--game-primary) 40%, transparent);
      }

      /* Game-specific text gradient */
      [data-game] .text-game-gradient {
        background: var(--game-gradient);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Game-specific badge */
      [data-game] .badge-game {
        background: color-mix(in srgb, var(--game-primary) 20%, transparent);
        color: var(--game-primary);
      }

      /* Game-specific card hover */
      [data-game] .card-interactive:hover {
        border-color: var(--game-primary);
        box-shadow: 0 4px 20px color-mix(in srgb, var(--game-primary) 15%, transparent);
      }

      /* Game-specific level card */
      [data-game] .level-card:hover {
        border-color: var(--game-primary);
        box-shadow: 0 8px 30px color-mix(in srgb, var(--game-primary) 15%, transparent);
      }

      /* Game primary text color */
      [data-game] .text-game-primary {
        color: var(--game-primary);
      }

      /* Game primary background */
      [data-game] .bg-game-primary {
        background-color: var(--game-primary);
      }

      /* Game primary border */
      [data-game] .border-game-primary {
        border-color: var(--game-primary);
      }
    `}</style>
  );
}
