import { NextResponse } from 'next/server';
import { getClanRankings, getPlayerRankings, LOCATIONS } from '@/lib/cocapi';

// GET /api/coc/rankings?type=clans|players&location=global&limit=10
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'clans';
    const location = searchParams.get('location') || 'global';
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    // Get location ID
    const locationId = location === 'global' ? 'global' : (LOCATIONS[location.toUpperCase()] || location);

    let data;
    if (type === 'players') {
      data = await getPlayerRankings(locationId, { limit });
    } else {
      data = await getClanRankings(locationId, { limit });
    }

    return NextResponse.json({
      success: true,
      type,
      location,
      items: data.items || [],
    });
  } catch (error) {
    console.error('Rankings API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
