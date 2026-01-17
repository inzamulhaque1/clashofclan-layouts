import { NextResponse } from 'next/server';
import { getClan, getClanMembers, getClanWarLog, decodeTag } from '@/lib/cocapi';

// GET /api/coc/clans/[tag]?include=members,warlog
export async function GET(request, { params }) {
  try {
    const { tag } = await params;
    const { searchParams } = new URL(request.url);
    const include = searchParams.get('include')?.split(',') || [];

    // Decode the tag (URL encoded)
    const clanTag = decodeTag(tag);

    // Get clan info
    const clan = await getClan(clanTag);

    const response = {
      success: true,
      clan,
    };

    // Optionally include members
    if (include.includes('members')) {
      try {
        const members = await getClanMembers(clanTag, { limit: 50 });
        response.members = members.items || [];
      } catch (e) {
        response.members = [];
      }
    }

    // Optionally include war log (if public)
    if (include.includes('warlog')) {
      try {
        const warLog = await getClanWarLog(clanTag, { limit: 10 });
        response.warLog = warLog.items || [];
      } catch (e) {
        response.warLog = [];
        response.warLogPrivate = true;
      }
    }

    return NextResponse.json(response);
  } catch (error) {
    console.error('Clan API error:', error);

    if (error.message.includes('404') || error.message.includes('notFound')) {
      return NextResponse.json(
        { success: false, error: 'Clan not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message },
      { status: error.message.includes('COC_API_KEY') ? 503 : 500 }
    );
  }
}
