import { NextResponse } from 'next/server';
import { getClanWarLog, decodeTag } from '@/lib/cocapi';

// GET /api/coc/warlog/[tag] - Get clan war log
export async function GET(request, { params }) {
  try {
    const { tag } = await params;
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);

    const clanTag = decodeTag(tag);
    const data = await getClanWarLog(clanTag, { limit });

    return NextResponse.json({
      success: true,
      clanTag,
      wars: data.items || [],
    });
  } catch (error) {
    console.error('War log API error:', error);

    // War log might be private
    if (error.message.includes('403') || error.message.includes('accessDenied')) {
      return NextResponse.json({
        success: true,
        clanTag: params.tag,
        wars: [],
        isPrivate: true,
      });
    }

    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
