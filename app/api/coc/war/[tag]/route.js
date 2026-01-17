import { NextResponse } from 'next/server';
import { getCurrentWar, getClanWarLeagueGroup, decodeTag } from '@/lib/cocapi';

// GET /api/coc/war/[tag] - Get current war status
export async function GET(request, { params }) {
  try {
    const { tag } = await params;
    const { searchParams } = new URL(request.url);
    const includeCwl = searchParams.get('cwl') === 'true';

    const clanTag = decodeTag(tag);

    // Get current war
    let currentWar = null;
    let warError = null;
    try {
      currentWar = await getCurrentWar(clanTag);
    } catch (e) {
      warError = e.message;
    }

    const response = {
      success: true,
      clanTag,
      currentWar,
      warError,
    };

    // Optionally include CWL info
    if (includeCwl) {
      try {
        const cwlGroup = await getClanWarLeagueGroup(clanTag);
        response.cwlGroup = cwlGroup;
      } catch (e) {
        response.cwlError = e.message;
      }
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('War API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
