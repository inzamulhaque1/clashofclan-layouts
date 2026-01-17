import { NextResponse } from 'next/server';
import { getGoldPassSeason } from '@/lib/cocapi';

// GET /api/coc/goldpass
export async function GET() {
  try {
    const data = await getGoldPassSeason();

    return NextResponse.json({
      success: true,
      season: data,
    });
  } catch (error) {
    console.error('Gold Pass API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
