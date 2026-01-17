import { NextResponse } from 'next/server';
import { getClanCapitalRaidSeasons, decodeTag } from '@/lib/cocapi';

// GET /api/coc/raids/[tag] - Get clan capital raid seasons
export async function GET(request, { params }) {
  try {
    const { tag } = await params;
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '5', 10);

    const clanTag = decodeTag(tag);
    const data = await getClanCapitalRaidSeasons(clanTag, { limit });

    return NextResponse.json({
      success: true,
      clanTag,
      seasons: data.items || [],
    });
  } catch (error) {
    console.error('Raids API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
