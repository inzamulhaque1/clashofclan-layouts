export const dynamic = 'force-dynamic';

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

    // Fetch boards first (most reliable - only needs boards:read)
    const boardsResponse = await fetch(`${PINTEREST_API_URL}/boards`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!boardsResponse.ok) {
      const error = await boardsResponse.json();
      return NextResponse.json({
        error: error.message || `Pinterest API error: ${boardsResponse.status}`
      }, { status: 400 });
    }

    const boardsData = await boardsResponse.json();
    const boards = (boardsData.items || []).map(board => ({
      id: board.id,
      name: board.name,
      description: board.description,
      pinCount: board.pin_count
    }));

    // Try fetching user info (optional - may fail if user_accounts:read not granted)
    let username = null;
    let accountType = null;
    try {
      const userResponse = await fetch(`${PINTEREST_API_URL}/user_account`, {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      if (userResponse.ok) {
        const userData = await userResponse.json();
        username = userData.username;
        accountType = userData.account_type;
      }
    } catch (e) {
      // user_accounts:read scope not available - that's fine
    }

    // Update settings with account info
    const updateData = {
      ...(username && { accountId: username, accountUsername: username }),
      ...(body.accessToken && body.accessToken !== '••••••••' && {
        accessToken: body.accessToken
      })
    };
    if (Object.keys(updateData).length > 0) {
      await PinterestSettings.findByIdAndUpdate('pinterest_settings', updateData);
    }

    return NextResponse.json({
      success: true,
      username: username || 'Connected',
      accountType: accountType || 'business',
      boards
    });

  } catch (error) {
    console.error('Pinterest test error:', error);
    return NextResponse.json({
      error: error.message || 'Failed to connect to Pinterest'
    }, { status: 500 });
  }
}
