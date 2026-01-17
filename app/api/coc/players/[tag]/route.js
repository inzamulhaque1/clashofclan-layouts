import { NextResponse } from 'next/server';
import { getPlayer, decodeTag } from '@/lib/cocapi';

// GET /api/coc/players/[tag]
export async function GET(request, { params }) {
  try {
    const { tag } = await params;

    // Decode the tag (URL encoded)
    const playerTag = decodeTag(tag);

    // Get player info
    const player = await getPlayer(playerTag);

    return NextResponse.json({
      success: true,
      player,
    });
  } catch (error) {
    console.error('Player API error:', error);

    if (error.message.includes('404') || error.message.includes('notFound')) {
      return NextResponse.json(
        { success: false, error: 'Player not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
