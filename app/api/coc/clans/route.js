import { NextResponse } from 'next/server';
import { searchClans } from '@/lib/cocapi';

// GET /api/coc/clans?name=xxx&minMembers=1&minClanLevel=1&limit=10
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    const minMembers = searchParams.get('minMembers');
    const minClanLevel = searchParams.get('minClanLevel');
    const minClanPoints = searchParams.get('minClanPoints');
    const warFrequency = searchParams.get('warFrequency');
    const limit = searchParams.get('limit') || '10';

    if (!name || name.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Clan name must be at least 3 characters' },
        { status: 400 }
      );
    }

    const data = await searchClans({
      name,
      minMembers: minMembers ? parseInt(minMembers, 10) : undefined,
      minClanLevel: minClanLevel ? parseInt(minClanLevel, 10) : undefined,
      minClanPoints: minClanPoints ? parseInt(minClanPoints, 10) : undefined,
      warFrequency,
      limit: parseInt(limit, 10),
    });

    return NextResponse.json({
      success: true,
      items: data.items || [],
    });
  } catch (error) {
    console.error('Clans search API error:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
