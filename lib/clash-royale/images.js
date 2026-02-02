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
      url: "https://cdn-www.bluestacks.com/bs-images/clash_royale_card_img_1.jpg",
      alt: "Clash Royale Beginner Guide 2026 - Complete Tutorial for New Players"
    },
    arena: {
      url: "https://static.wikia.nocookie.net/clashroyale/images/1/1e/ArenaLegendary.png",
      alt: "Clash Royale Legendary Arena progression"
    },
    elixir: {
      url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/11/clash-royale-quick-tips-tricks-beginner.jpg",
      alt: "Clash Royale elixir management tips"
    },
    deckBuilding: {
      url: "https://staticg.sportskeeda.com/editor/2022/01/36e53-16416649498498-1920.jpg",
      alt: "Clash Royale deck building guide"
    },
  },

  // Deck Building Guide
  deckBuildingGuide: {
    hero: {
      url: "https://staticg.sportskeeda.com/editor/2022/01/36e53-16416649498498-1920.jpg",
      alt: "Clash Royale Deck Building Guide 2026"
    },
  },

  // Card Tier List
  tierList: {
    hero: {
      url: "https://cdn-www.bluestacks.com/bs-images/Clash_Royale_PC_-_Tier_List_-_The_Best_Cards_for_Every_Role_2024.jpg",
      alt: "Clash Royale Card Tier List 2026"
    },
  },

  // Meta Decks
  metaDecks: {
    hero: {
      url: "https://esportsdriven.com/media/esd/images/Articles/Image_Article_Clash-Royale-Best-Decks-Guide.jpg",
      alt: "Best Meta Decks in Clash Royale 2026"
    },
  },

  // Elixir Guide
  elixirGuide: {
    hero: {
      url: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/11/clash-royale-quick-tips-tricks-beginner.jpg",
      alt: "Clash Royale Elixir Management Guide"
    },
  },
};

// General Images
export const GENERAL_IMAGES = {
  logo: {
    url: "https://cdn.royaleapi.com/static/img/branding/cr-logo.png",
    alt: "Clash Royale Logo"
  },
  chest: {
    url: "https://static.wikia.nocookie.net/clashroyale/images/1/1b/GoldChest.png",
    alt: "Clash Royale Gold Chest"
  },
  trophy: {
    url: "https://static.wikia.nocookie.net/clashroyale/images/2/27/Trophy.png",
    alt: "Clash Royale Trophy"
  },
};

export default {
  GUIDE_IMAGES,
  GENERAL_IMAGES,
  getCardImage,
  CARD_IMG_BASE,
};
