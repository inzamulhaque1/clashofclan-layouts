// Clash of Clans Events Data
// Updated regularly with game events
// Note: Event status is now calculated dynamically based on dates

export const COC_EVENTS = [
  // Active Events (January 2026)
  {
    id: 'winter-challenge-2026',
    name: 'Winter Challenge',
    type: 'seasonal',
    startDate: '2025-12-20',
    endDate: '2026-01-25',
    description: 'Complete winter-themed challenges for exclusive rewards! Unlock the Frozen Archer Queen skin.',
    icon: '❄️',
    rewards: ['Winter Hero Skin', 'Book of Heroes', 'Magic Items', 'Gems'],
  },
  {
    id: 'builder-boost',
    name: 'Builder Boost Event',
    type: 'boost',
    startDate: '2026-01-15',
    endDate: '2026-01-22',
    description: '20% discount on all building upgrades! Stack with Gold Pass for maximum savings.',
    icon: '🔨',
    rewards: ['20% Builder Discount', 'Faster Upgrades'],
  },
  {
    id: 'hero-boost-jan',
    name: 'Hero Equipment Boost',
    type: 'boost',
    startDate: '2026-01-16',
    endDate: '2026-01-23',
    description: 'Reduced upgrade costs for Hero Equipment! Perfect time to level up.',
    icon: '⚔️',
    rewards: ['30% Equipment Discount', 'Ore Bonus'],
  },
  // Upcoming Events
  {
    id: 'clan-games-jan-2026',
    name: 'Clan Games',
    type: 'competitive',
    startDate: '2026-01-22',
    endDate: '2026-01-28',
    description: 'Complete challenges with your clan for massive rewards! Reach 4000 points for max tier.',
    icon: '🎮',
    rewards: ['Magic Items', 'Hero Books', 'Runes', 'Builder Potions', 'Shovel of Obstacles'],
  },
  {
    id: 'troop-training-boost',
    name: 'Troop Training Boost',
    type: 'boost',
    startDate: '2026-01-25',
    endDate: '2026-02-01',
    description: 'Reduced troop training time - perfect for farming and trophy pushing!',
    icon: '⚡',
    rewards: ['50% Training Time Reduction', 'Bonus Star Points'],
  },
  {
    id: 'lunar-new-year-2026',
    name: 'Lunar New Year Event',
    type: 'seasonal',
    startDate: '2026-01-29',
    endDate: '2026-02-12',
    description: 'Celebrate Year of the Snake! Special challenges, obstacles, and exclusive rewards.',
    icon: '🐍',
    rewards: ['Lunar Hero Skin', 'Snake Obstacle', 'Red Envelope Gems', 'Firework Decorations'],
  },
  {
    id: 'cwl-feb-2026',
    name: 'February CWL',
    type: 'competitive',
    startDate: '2026-02-01',
    endDate: '2026-02-10',
    description: 'Monthly Clan War League season! Compete for League Medals and glory.',
    icon: '🏆',
    rewards: ['League Medals', 'Clan XP', 'Star Bonus', 'Exclusive CWL Medals'],
  },
  {
    id: 'valentine-event-2026',
    name: "Valentine's Day Event",
    type: 'seasonal',
    startDate: '2026-02-10',
    endDate: '2026-02-17',
    description: 'Spread the love with special Valentine themed challenges and decorations!',
    icon: '💝',
    rewards: ['Heart Obstacle', 'Love Potion', 'Special Decorations'],
  },
  {
    id: 'super-troop-boost',
    name: 'Super Troop Boost',
    type: 'boost',
    startDate: '2026-02-05',
    endDate: '2026-02-12',
    description: 'Reduced Dark Elixir cost for Super Troops! Try them all!',
    icon: '💪',
    rewards: ['50% Super Troop Discount', 'Extended Duration'],
  },
];

// Event type styling
export const EVENT_STYLES = {
  competitive: {
    bg: 'rgba(245, 158, 11, 0.15)',
    border: 'rgba(245, 158, 11, 0.3)',
    text: '#f59e0b',
    label: 'Competitive',
  },
  seasonal: {
    bg: 'rgba(139, 92, 246, 0.15)',
    border: 'rgba(139, 92, 246, 0.3)',
    text: '#8b5cf6',
    label: 'Seasonal',
  },
  boost: {
    bg: 'rgba(16, 185, 129, 0.15)',
    border: 'rgba(16, 185, 129, 0.3)',
    text: '#10b981',
    label: 'Boost',
  },
  special: {
    bg: 'rgba(239, 68, 68, 0.15)',
    border: 'rgba(239, 68, 68, 0.3)',
    text: '#ef4444',
    label: 'Special',
  },
};

// Calculate event status dynamically based on dates
export function getEventStatus(event) {
  const now = new Date();
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);

  if (now < start) return 'upcoming';
  if (now > end) return 'ended';
  return 'active';
}

export function getActiveEvents() {
  const now = new Date();
  return COC_EVENTS.filter(event => {
    const start = new Date(event.startDate);
    const end = new Date(event.endDate);
    return now >= start && now <= end;
  }).sort((a, b) => new Date(a.endDate) - new Date(b.endDate));
}

export function getUpcomingEvents() {
  const now = new Date();
  return COC_EVENTS.filter(event => {
    const start = new Date(event.startDate);
    return now < start;
  }).sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}

export function getEndedEvents() {
  const now = new Date();
  return COC_EVENTS.filter(event => {
    const end = new Date(event.endDate);
    return now > end;
  }).sort((a, b) => new Date(b.endDate) - new Date(a.endDate));
}

export function getAllEvents() {
  return COC_EVENTS;
}

export function getEventDaysRemaining(endDate) {
  const end = new Date(endDate);
  const now = new Date();
  const diff = Math.ceil((end - now) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

export function getEventDaysUntil(startDate) {
  const start = new Date(startDate);
  const now = new Date();
  const diff = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
  return Math.max(0, diff);
}

// Get formatted date range
export function getEventDateRange(event) {
  const start = new Date(event.startDate);
  const end = new Date(event.endDate);
  const options = { month: 'short', day: 'numeric' };
  return `${start.toLocaleDateString('en-US', options)} - ${end.toLocaleDateString('en-US', options)}`;
}
