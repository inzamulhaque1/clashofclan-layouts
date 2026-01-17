import { NextResponse } from 'next/server';
import { getLocations } from '@/lib/cocapi';

// GET /api/coc/locations - Get all locations
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '100', 10);

    const data = await getLocations({ limit });

    return NextResponse.json({
      success: true,
      locations: data.items || [],
    });
  } catch (error) {
    console.error('Locations API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
