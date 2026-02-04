import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestSettings from '@/models/PinterestSettings';

const PINTEREST_API_URL = 'https://api.pinterest.com/v5';

// POST - Test Pinterest connection and fetch boards
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    let { accessToken } = body;

    // If no token provided, get from settings
    if (!accessToken || accessToken === '••••••••') {
      const settings = await PinterestSettings.findById('pinterest_settings');
      if (!settings?.accessToken) {
        return NextResponse.json({
          error: 'No access token configured. Please enter your Pinterest access token.'
        }, { status: 400 });
      }
      accessToken = settings.accessToken;
    }

    // Test connection by fetching user info
    const userResponse = await fetch(`${PINTEREST_API_URL}/user_account`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!userResponse.ok) {
      const error = await userResponse.json();
      return NextResponse.json({
        error: error.message || `Pinterest API error: ${userResponse.status}`
      }, { status: 400 });
    }

    const userData = await userResponse.json();

    // Fetch boards
    const boardsResponse = await fetch(`${PINTEREST_API_URL}/boards`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    let boards = [];
    if (boardsResponse.ok) {
      const boardsData = await boardsResponse.json();
      boards = (boardsData.items || []).map(board => ({
        id: board.id,
        name: board.name,
        description: board.description,
        pinCount: board.pin_count
      }));
    }

    // Update settings with account info
    await PinterestSettings.findByIdAndUpdate('pinterest_settings', {
      accountId: userData.id || userData.username,
      accountUsername: userData.username,
      // Only update token if a new one was provided
      ...(body.accessToken && body.accessToken !== '••••••••' && {
        accessToken: body.accessToken
      })
    });

    return NextResponse.json({
      success: true,
      username: userData.username,
      accountType: userData.account_type,
      boards
    });

  } catch (error) {
    console.error('Pinterest test error:', error);
    return NextResponse.json({
      error: error.message || 'Failed to connect to Pinterest'
    }, { status: 500 });
  }
}
