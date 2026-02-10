// Clash Royale Image Library - Centralized image management

// Card Images Base URL (RoyaleAPI CDN)
export const CARD_IMG_BASE = 'https://cdn.royaleapi.com/static/img/cards-150';

// Helper to get card image
export const getCardImage = (cardId) => `${CARD_IMG_BASE}/${cardId}.png`;

// Guide Images
export const GUIDE_IMAGES = {
  // Beginner's Guide
  beginnersGuide: {
    hero: {
      url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2023/04/clash-royalee.jpg?w=1600&h=1200&fit=crop",
      alt: "Clash Royale Beginner Guide 2026 - Complete Tutorial for New Players"
    },
    arena: {
      url: "https://wallpapers.com/images/hd/clash-royale-background-fs0coocr4gsmn9hd.jpg",
      alt: "Clash Royale arena battlefield view"
    },
    cards: {
      url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/clash-royale.jpg",
      alt: "Collection of popular Clash Royale cards"
    },
    kingTower: {
      url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2024/01/clash-royale-tower-princess-vs-cannoneer.jpg?w=1200&h=628&fit=crop",
      alt: "Clash Royale King Tower with troops"
    },
    gameUI: {
      url: "https://cdna.artstation.com/p/media_assets/images/images/000/184/500/medium/Placement.jpg?1516044278",
      alt: "Clash Royale game UI showing cards and elixir bar"
    },
    gameplay: {
      url: "https://i.ytimg.com/vi/GLC5gt9xcrA/maxresdefault.jpg",
      alt: "Clash Royale gameplay tutorial"
    },
  },

  // Elixir Management Guide
  elixirGuide: {
    hero: {
      url: "https://oyster.ignimgs.com/mediawiki/apis.ign.com/clash-royale/f/f7/ElixirPic04.jpg?width=640",
      alt: "Clash Royale Elixir Management Guide - Master Positive Trades"
    },
    elixirBar: {
      url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/11/dark-elixir-event-deck-three-clash-royale.jpg?q=49&fit=crop&w=825&dpr=2",
      alt: "Clash Royale elixir bar and purple elixir drops"
    },
    elixirCollector: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMRy764V5myfDStqkCZRmu16GGQV06FTLhSA&s",
      alt: "Clash Royale Elixir Collector building"
    },
    battleElixir: {
      url: "https://preview.redd.it/ccxxtwf507d81.jpg?vthumb=1&s=c429d4e3d7b01ca4614d3e273e5395ad8c4e5161",
      alt: "Clash Royale battle screenshot showing elixir management"
    },
    elixirCounter: {
      url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2024/01/clash-royale-how-to-wing-3-elixir-mirror-event.jpg?w=1600&h=1200&fit=crop",
      alt: "Clash Royale gameplay with visible elixir counter"
    },
    elixirCost: {
      url: "https://i.redd.it/vbmt0684gyob1.png",
      alt: "Clash Royale troops with elixir cost indicators"
    },
    elixirArt: {
      url: "https://preview.redd.it/w72poxg807d81.png?width=1143&format=png&auto=webp&s=659bea8be5830cf211b1a0751fe89ee140a8c23e",
      alt: "Clash Royale elixir management illustration"
    },
  },

  // Deck Building Guide
  deckBuildingGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/fgWLacIeCk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAv2KQ7n-QVuY_qGs1o-YxfPaD6eg",
      alt: "Clash Royale Deck Building Guide 2026 - Build Winning Decks"
    },
    deckScreen: {
      url: "https://www.wikihow.com/images/thumb/b/ba/Make-a-Powerful-Deck-in-Clash-Royale-Step-1-Version-2.jpg/v4-460px-Make-a-Powerful-Deck-in-Clash-Royale-Step-1-Version-2.jpg",
      alt: "Clash Royale deck selection screen"
    },
    evolutionCounters: {
      url: "https://www.wikihow.com/images/6/6c/Evolution-counters.png",
      alt: "Clash Royale evolution card counters"
    },
  },

  // Card Tier List
  tierList: {
    hero: {
      url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/clash-royale.jpg",
      alt: "Clash Royale Card Tier List 2026"
    },
  },

  // Meta Decks
  metaDecks: {
    hero: {
      url: "https://i.ytimg.com/vi/fgWLacIeCk8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAv2KQ7n-QVuY_qGs1o-YxfPaD6eg",
      alt: "Best Meta Decks in Clash Royale 2026"
    },
  },

  // Best Decks Guide
  bestDecksGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/KNY7cCn5TME/sddefault.jpg",
      alt: "Best Clash Royale Meta Decks 2026"
    },
  },

  // Card Upgrade Priority Guide
  cardUpgradeGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/CMR7MOCMePw/sddefault.jpg",
      alt: "Clash Royale Card Upgrade Priority 2026"
    },
  },

  // Clan War Guide
  clanWarGuide: {
    hero: {
      url: "https://gamingonphone.com/wp-content/uploads/2020/08/Clash-Royale-Clan-Wars-2.jpg",
      alt: "Clash Royale Clan War Strategy Guide 2026"
    },
  },

  // Trophy Pushing Guide
  trophyPushGuide: {
    hero: {
      url: "https://i.ytimg.com/vi/nZC_z3EcqBc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAntkLAyH0q3QSB8fO3O4bfYlJ5PQ",
      alt: "Clash Royale Trophy Pushing Ultimate Champion 2026"
    },
  },
};

// General Images
export const GENERAL_IMAGES = {
  logo: {
    url: "https://cdn.royaleapi.com/static/img/branding/cr-logo.png",
    alt: "Clash Royale Logo"
  },
  heroBanner: {
    url: "https://etgeekera.com/wp-content/uploads/2016/05/clash-royale-banner.jpg",
    alt: "Clash Royale 2026 - Best Decks, Tier Lists & Guides"
  },
  arena: {
    url: "https://wallpapers.com/images/hd/clash-royale-background-fs0coocr4gsmn9hd.jpg",
    alt: "Clash Royale Arena Background"
  },
  promo: {
    url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2023/04/clash-royalee.jpg?w=1600&h=1200&fit=crop",
    alt: "Clash Royale Promotional Art"
  },
  kingTower: {
    url: "https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2024/01/clash-royale-tower-princess-vs-cannoneer.jpg?w=1200&h=628&fit=crop",
    alt: "Clash Royale King Tower"
  },
};

export default {
  GUIDE_IMAGES,
  GENERAL_IMAGES,
  getCardImage,
  CARD_IMG_BASE,
};
