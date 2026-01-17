import { NextResponse } from 'next/server';
import { getLeagues, getWarLeagues, getCapitalLeagues, getBuilderBaseLeagues } from '@/lib/cocapi';

// GET /api/coc/leagues?type=normal|war|capital|builder
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type') || 'normal';

    let data;
    switch (type) {
      case 'war':
        data = await getWarLeagues({ limit: 50 });
        break;
      case 'capital':
        data = await getCapitalLeagues({ limit: 50 });
        break;
      case 'builder':
        data = await getBuilderBaseLeagues({ limit: 50 });
        break;
      default:
        data = await getLeagues({ limit: 50 });
    }

    return NextResponse.json({
      success: true,
      type,
      items: data.items || [],
    });
  } catch (error) {
    console.error('Leagues API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
