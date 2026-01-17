import { NextResponse } from 'next/server';
import {
  getLocation,
  getClanRankings,
  getPlayerRankings,
  getClanBuilderBaseRankings,
  getPlayerBuilderBaseRankings,
  getCapitalRankings,
} from '@/lib/cocapi';

// GET /api/coc/locations/[id]?type=clans|players|clans-builder|players-builder|capitals
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'clans';
    const limit = parseInt(searchParams.get('limit') || '50', 10);

    let data;
    let location = null;

    // Get location info if not global
    if (id !== 'global') {
      try {
        location = await getLocation(id);
      } catch (e) {
        // Location info optional
      }
    }

    // Get rankings based on type
    switch (type) {
      case 'players':
        data = await getPlayerRankings(id, { limit });
        break;
      case 'clans-builder':
        data = await getClanBuilderBaseRankings(id, { limit });
        break;
      case 'players-builder':
        data = await getPlayerBuilderBaseRankings(id, { limit });
        break;
      case 'capitals':
        data = await getCapitalRankings(id, { limit });
        break;
      default:
        data = await getClanRankings(id, { limit });
    }

    return NextResponse.json({
      success: true,
      locationId: id,
      location,
      type,
      items: data.items || [],
    });
  } catch (error) {
    console.error('Location rankings API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
