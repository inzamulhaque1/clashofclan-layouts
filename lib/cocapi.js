// Clash of Clans API Integration
const COC_API_BASE = 'https://api.clashofclans.com/v1';

function getApiKey() {
  const apiKey = process.env.COC_API_KEY;
  if (!apiKey) {
    throw new Error('COC_API_KEY not set');
  }
  return apiKey;
}

// Helper to make API requests
async function cocFetch(endpoint, options = {}) {
  const apiKey = getApiKey();

  const response = await fetch(`${COC_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Accept': 'application/json',
      ...options.headers,
    },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || `API error: ${response.status}`);
  }

  return response.json();
}

// Encode clan/player tag for URL (# becomes %23)
export function encodeTag(tag) {
  return encodeURIComponent(tag.startsWith('#') ? tag : `#${tag}`);
}

// Decode tag from URL
export function decodeTag(encodedTag) {
  return decodeURIComponent(encodedTag);
}

// ============================================
// CLAN ENDPOINTS
// ============================================

// Search clans by name, warFrequency, location, etc.
export async function searchClans(params = {}) {
  const searchParams = new URLSearchParams();

  if (params.name) searchParams.set('name', params.name);
  if (params.warFrequency) searchParams.set('warFrequency', params.warFrequency);
  if (params.locationId) searchParams.set('locationId', params.locationId);
  if (params.minMembers) searchParams.set('minMembers', params.minMembers);
  if (params.maxMembers) searchParams.set('maxMembers', params.maxMembers);
  if (params.minClanPoints) searchParams.set('minClanPoints', params.minClanPoints);
  if (params.minClanLevel) searchParams.set('minClanLevel', params.minClanLevel);
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);
  if (params.before) searchParams.set('before', params.before);

  return cocFetch(`/clans?${searchParams.toString()}`);
}

// Get clan by tag
export async function getClan(clanTag) {
  return cocFetch(`/clans/${encodeTag(clanTag)}`);
}

// Get clan members
export async function getClanMembers(clanTag, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/clans/${encodeTag(clanTag)}/members${query ? `?${query}` : ''}`);
}

// Get clan war log
export async function getClanWarLog(clanTag, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/clans/${encodeTag(clanTag)}/warlog${query ? `?${query}` : ''}`);
}

// Get current clan war
export async function getCurrentWar(clanTag) {
  return cocFetch(`/clans/${encodeTag(clanTag)}/currentwar`);
}

// Get clan war league group
export async function getClanWarLeagueGroup(clanTag) {
  return cocFetch(`/clans/${encodeTag(clanTag)}/currentwar/leaguegroup`);
}

// Get clan capital raid seasons
export async function getClanCapitalRaidSeasons(clanTag, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/clans/${encodeTag(clanTag)}/capitalraidseasons${query ? `?${query}` : ''}`);
}

// ============================================
// PLAYER ENDPOINTS
// ============================================

// Get player by tag
export async function getPlayer(playerTag) {
  return cocFetch(`/players/${encodeTag(playerTag)}`);
}

// Verify player API token
export async function verifyPlayerToken(playerTag, token) {
  return cocFetch(`/players/${encodeTag(playerTag)}/verifytoken`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token }),
  });
}

// ============================================
// LEAGUE ENDPOINTS
// ============================================

// Get list of leagues
export async function getLeagues(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/leagues${query ? `?${query}` : ''}`);
}

// Get league by ID
export async function getLeague(leagueId) {
  return cocFetch(`/leagues/${leagueId}`);
}

// Get league seasons
export async function getLeagueSeasons(leagueId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/leagues/${leagueId}/seasons${query ? `?${query}` : ''}`);
}

// Get league season rankings
export async function getLeagueSeasonRankings(leagueId, seasonId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/leagues/${leagueId}/seasons/${seasonId}${query ? `?${query}` : ''}`);
}

// Get war leagues
export async function getWarLeagues(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/warleagues${query ? `?${query}` : ''}`);
}

// Get war league by ID
export async function getWarLeague(leagueId) {
  return cocFetch(`/warleagues/${leagueId}`);
}

// Get capital leagues
export async function getCapitalLeagues(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/capitalleagues${query ? `?${query}` : ''}`);
}

// Get builder base leagues
export async function getBuilderBaseLeagues(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/builderbaseleagues${query ? `?${query}` : ''}`);
}

// ============================================
// LOCATION ENDPOINTS
// ============================================

// Get list of locations
export async function getLocations(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/locations${query ? `?${query}` : ''}`);
}

// Get location by ID
export async function getLocation(locationId) {
  return cocFetch(`/locations/${locationId}`);
}

// Get clan rankings by location
export async function getClanRankings(locationId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/locations/${locationId}/rankings/clans${query ? `?${query}` : ''}`);
}

// Get player rankings by location
export async function getPlayerRankings(locationId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/locations/${locationId}/rankings/players${query ? `?${query}` : ''}`);
}

// Get clan builder base rankings
export async function getClanBuilderBaseRankings(locationId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/locations/${locationId}/rankings/clans-builder-base${query ? `?${query}` : ''}`);
}

// Get player builder base rankings
export async function getPlayerBuilderBaseRankings(locationId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/locations/${locationId}/rankings/players-builder-base${query ? `?${query}` : ''}`);
}

// Get capital rankings by location
export async function getCapitalRankings(locationId, params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/locations/${locationId}/rankings/capitals${query ? `?${query}` : ''}`);
}

// ============================================
// GOLDPASS ENDPOINT
// ============================================

// Get current gold pass season
export async function getGoldPassSeason() {
  return cocFetch('/goldpass/seasons/current');
}

// ============================================
// LABELS ENDPOINT
// ============================================

// Get clan labels
export async function getClanLabels(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/labels/clans${query ? `?${query}` : ''}`);
}

// Get player labels
export async function getPlayerLabels(params = {}) {
  const searchParams = new URLSearchParams();
  if (params.limit) searchParams.set('limit', params.limit);
  if (params.after) searchParams.set('after', params.after);

  const query = searchParams.toString();
  return cocFetch(`/labels/players${query ? `?${query}` : ''}`);
}

// ============================================
// HELPER CONSTANTS
// ============================================

// Global location ID for worldwide rankings
export const LOCATION_GLOBAL = 'global';

// Common location IDs
export const LOCATIONS = {
  GLOBAL: 'global',
  US: 32000249,
  UK: 32000247,
  INDIA: 32000113,
  GERMANY: 32000094,
  FRANCE: 32000092,
  BRAZIL: 32000032,
  JAPAN: 32000122,
  SOUTH_KOREA: 32000211,
  INDONESIA: 32000109,
  TURKEY: 32000239,
};

// League IDs
export const LEAGUES = {
  UNRANKED: 29000000,
  BRONZE_III: 29000001,
  BRONZE_II: 29000002,
  BRONZE_I: 29000003,
  SILVER_III: 29000004,
  SILVER_II: 29000005,
  SILVER_I: 29000006,
  GOLD_III: 29000007,
  GOLD_II: 29000008,
  GOLD_I: 29000009,
  CRYSTAL_III: 29000010,
  CRYSTAL_II: 29000011,
  CRYSTAL_I: 29000012,
  MASTER_III: 29000013,
  MASTER_II: 29000014,
  MASTER_I: 29000015,
  CHAMPION_III: 29000016,
  CHAMPION_II: 29000017,
  CHAMPION_I: 29000018,
  TITAN_III: 29000019,
  TITAN_II: 29000020,
  TITAN_I: 29000021,
  LEGEND: 29000022,
};

// War League IDs
export const WAR_LEAGUES = {
  UNRANKED: 48000000,
  BRONZE_III: 48000001,
  BRONZE_II: 48000002,
  BRONZE_I: 48000003,
  SILVER_III: 48000004,
  SILVER_II: 48000005,
  SILVER_I: 48000006,
  GOLD_III: 48000007,
  GOLD_II: 48000008,
  GOLD_I: 48000009,
  CRYSTAL_III: 48000010,
  CRYSTAL_II: 48000011,
  CRYSTAL_I: 48000012,
  MASTER_III: 48000013,
  MASTER_II: 48000014,
  MASTER_I: 48000015,
  CHAMPION_III: 48000016,
  CHAMPION_II: 48000017,
  CHAMPION_I: 48000018,
};
