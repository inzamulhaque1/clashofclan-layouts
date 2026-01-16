// Stats tracking for bases (copy counts, votes)
// Uses localStorage for client-side tracking

const STORAGE_KEYS = {
  COPY_COUNTS: 'coc_copy_counts',
  VOTES: 'coc_votes',
  USER_VOTES: 'coc_user_votes',
};

// Generate a consistent ID for a base
export function getBaseId(base) {
  return `${base.hallType}${base.hallLevel}_${base.baseType}_${base.baseNumber}`;
}

// Get copy count for a base
export function getCopyCount(baseId) {
  if (typeof window === 'undefined') return 0;
  try {
    const counts = JSON.parse(localStorage.getItem(STORAGE_KEYS.COPY_COUNTS) || '{}');
    return counts[baseId] || 0;
  } catch {
    return 0;
  }
}

// Increment copy count
export function incrementCopyCount(baseId) {
  if (typeof window === 'undefined') return;
  try {
    const counts = JSON.parse(localStorage.getItem(STORAGE_KEYS.COPY_COUNTS) || '{}');
    counts[baseId] = (counts[baseId] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.COPY_COUNTS, JSON.stringify(counts));
    return counts[baseId];
  } catch {
    return 0;
  }
}

// Get total copy count across all bases
export function getTotalCopyCount() {
  if (typeof window === 'undefined') return 0;
  try {
    const counts = JSON.parse(localStorage.getItem(STORAGE_KEYS.COPY_COUNTS) || '{}');
    return Object.values(counts).reduce((sum, count) => sum + count, 0);
  } catch {
    return 0;
  }
}

// Get vote count for a base (upvotes - downvotes)
export function getVoteCount(baseId) {
  if (typeof window === 'undefined') return 0;
  try {
    const votes = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOTES) || '{}');
    return votes[baseId] || 0;
  } catch {
    return 0;
  }
}

// Get user's vote for a base (-1, 0, or 1)
export function getUserVote(baseId) {
  if (typeof window === 'undefined') return 0;
  try {
    const userVotes = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_VOTES) || '{}');
    return userVotes[baseId] || 0;
  } catch {
    return 0;
  }
}

// Vote on a base (1 for upvote, -1 for downvote)
export function voteBase(baseId, vote) {
  if (typeof window === 'undefined') return { voteCount: 0, userVote: 0 };
  try {
    const votes = JSON.parse(localStorage.getItem(STORAGE_KEYS.VOTES) || '{}');
    const userVotes = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER_VOTES) || '{}');

    const currentUserVote = userVotes[baseId] || 0;
    const currentVoteCount = votes[baseId] || 0;

    // If clicking same vote, remove it (toggle off)
    if (currentUserVote === vote) {
      userVotes[baseId] = 0;
      votes[baseId] = currentVoteCount - vote;
    } else {
      // Remove old vote and add new vote
      votes[baseId] = currentVoteCount - currentUserVote + vote;
      userVotes[baseId] = vote;
    }

    localStorage.setItem(STORAGE_KEYS.VOTES, JSON.stringify(votes));
    localStorage.setItem(STORAGE_KEYS.USER_VOTES, JSON.stringify(userVotes));

    return { voteCount: votes[baseId], userVote: userVotes[baseId] };
  } catch {
    return { voteCount: 0, userVote: 0 };
  }
}

// Generate estimated stats for display (makes site look active)
export function getEstimatedStats(baseId, scrapedAt) {
  // Generate consistent "random" number based on baseId
  let hash = 0;
  for (let i = 0; i < baseId.length; i++) {
    const char = baseId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }

  // Base stats on hash for consistency
  const baseCopies = Math.abs(hash % 500) + 50; // 50-550 copies
  const baseVotes = Math.abs((hash >> 8) % 100) + 10; // 10-110 votes

  return {
    estimatedCopies: baseCopies,
    estimatedVotes: baseVotes,
  };
}
