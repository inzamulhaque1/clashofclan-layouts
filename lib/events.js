// Clash of Clans Events Data
// Updated regularly with game events

export const COC_EVENTS = [
  // Current/Recent Events
  {
    id: 'cwl-jan-2026',
    name: 'Clan War Leagues',
    type: 'competitive',
    status: 'active',
    startDate: '2026-01-01',
    endDate: '2026-01-10',
    description: 'Monthly CWL season - compete for medals and glory!',
    icon: '🏆',
    rewards: ['League Medals', 'Clan XP', 'Star Bonus'],
  },
  {
    id: 'winter-challenge-2026',
    name: 'Winter Challenge',
    type: 'seasonal',
    status: 'active',
    startDate: '2025-12-20',
    endDate: '2026-01-25',
    description: 'Complete winter-themed challenges for exclusive rewards!',
    icon: '❄️',
    rewards: ['Winter Hero Skin', 'Magic Items', 'Gems'],
  },
  {
    id: 'builder-boost',
    name: 'Builder Boost Event',
    type: 'boost',
    status: 'active',
    startDate: '2026-01-15',
    endDate: '2026-01-22',
    description: '20% discount on all building upgrades!',
    icon: '🔨',
    rewards: ['20% Builder Discount', 'Faster Upgrades'],
  },
  // Upcoming Events
  {
    id: 'clan-games-jan-2026',
    name: 'Clan Games',
    type: 'competitive',
    status: 'upcoming',
    startDate: '2026-01-22',
    endDate: '2026-01-28',
    description: 'Complete challenges with your clan for massive rewards!',
    icon: '🎮',
    rewards: ['Magic Items', 'Hero Books', 'Runes', 'Builder Potions'],
  },
  {
    id: 'troop-training-boost',
    name: 'Troop Training Boost',
    type: 'boost',
    status: 'upcoming',
    startDate: '2026-01-25',
    endDate: '2026-02-01',
    description: 'Reduced troop training time - perfect for farming!',
    icon: '⚡',
    rewards: ['50% Training Time Reduction'],
  },
  {
    id: 'cwl-feb-2026',
    name: 'February CWL',
    type: 'competitive',
    status: 'upcoming',
    startDate: '2026-02-01',
    endDate: '2026-02-10',
    description: 'Next month\'s Clan War League season!',
    icon: '🏆',
    rewards: ['League Medals', 'Clan XP', 'Star Bonus'],
  },
  {
    id: 'lunar-new-year-2026',
    name: 'Lunar New Year Event',
    type: 'seasonal',
    status: 'upcoming',
    startDate: '2026-01-29',
    endDate: '2026-02-12',
    description: 'Celebrate Lunar New Year with special challenges and decorations!',
    icon: '🐍',
    rewards: ['Lunar Decorations', 'Special Obstacles', 'Gems'],
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

export function getActiveEvents() {
  return COC_EVENTS.filter(e => e.status === 'active');
}

export function getUpcomingEvents() {
  return COC_EVENTS.filter(e => e.status === 'upcoming');
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
