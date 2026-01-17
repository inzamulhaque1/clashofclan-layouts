import { NextResponse } from 'next/server';
import { getClanLabels, getPlayerLabels } from '@/lib/cocapi';

// GET /api/coc/labels?type=clans|players
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'clans';

    let data;
    if (type === 'players') {
      data = await getPlayerLabels({ limit: 50 });
    } else {
      data = await getClanLabels({ limit: 50 });
    }

    return NextResponse.json({
      success: true,
      type,
      labels: data.items || [],
    });
  } catch (error) {
    console.error('Labels API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
