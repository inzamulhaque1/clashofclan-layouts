export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestSettings from '@/models/PinterestSettings';

// Pinterest OAuth endpoints
const PINTEREST_AUTH_URL = 'https://www.pinterest.com/oauth';  // For user authorization
const PINTEREST_TOKEN_URL = 'https://api.pinterest.com/v5/oauth/token';  // For token exchange
const PINTEREST_API_URL = 'https://api.pinterest.com/v5';

// GET - Generate OAuth URL or handle callback
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  // If there's an error from Pinterest
  if (error) {
    const errorDesc = searchParams.get('error_description') || 'Authorization failed';
    return NextResponse.redirect(
      new URL(`/admin/pinterest/settings?error=${encodeURIComponent(errorDesc)}`, request.url)
    );
  }

  // If we have a code, this is the callback - exchange for token
  if (code) {
    try {
      await dbConnect();
      const settings = await PinterestSettings.findById('pinterest_settings');

      if (!settings?.appId || !settings?.appSecret) {
        return NextResponse.redirect(
          new URL('/admin/pinterest/settings?error=App+credentials+not+configured', request.url)
        );
      }

      // Get the redirect URI (must match what was used in authorization)
      // Use the actual request origin to ensure www. is included if present
      const requestUrl = new URL(request.url);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${requestUrl.protocol}//${requestUrl.host}`;
      const redirectUri = `${baseUrl}/api/pinterest/oauth`;

      // Exchange code for access token
      const tokenResponse = await fetch(PINTEREST_TOKEN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${Buffer.from(`${settings.appId}:${settings.appSecret}`).toString('base64')}`
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: redirectUri
        })
      });

      const tokenData = await tokenResponse.json();

      if (!tokenResponse.ok) {
        console.error('Token exchange error:', tokenData);
        return NextResponse.redirect(
          new URL(`/admin/pinterest/settings?error=${encodeURIComponent(tokenData.error_description || 'Token exchange failed')}`, request.url)
        );
      }

      // Get user info to verify connection
      const userResponse = await fetch(`${PINTEREST_API_URL}/user_account`, {
        headers: {
          'Authorization': `Bearer ${tokenData.access_token}`
        }
      });

      const userData = await userResponse.json();

      // Calculate token expiry
      const expiresAt = new Date();
      expiresAt.setSeconds(expiresAt.getSeconds() + (tokenData.expires_in || 3600));

      // Save tokens to database
      await PinterestSettings.findByIdAndUpdate(
        'pinterest_settings',
        {
          accessToken: tokenData.access_token,
          refreshToken: tokenData.refresh_token,
          tokenExpiresAt: expiresAt,
          accountId: userData.id,
          accountUsername: userData.username,
          updatedAt: new Date()
        },
        { upsert: true }
      );

      // Redirect back to settings with success
      return NextResponse.redirect(
        new URL(`/admin/pinterest/settings?success=Connected+as+${encodeURIComponent(userData.username || 'Pinterest+User')}`, request.url)
      );

    } catch (error) {
      console.error('OAuth callback error:', error);
      return NextResponse.redirect(
        new URL(`/admin/pinterest/settings?error=${encodeURIComponent(error.message)}`, request.url)
      );
    }
  }

  // No code - generate authorization URL
  try {
    await dbConnect();
    const settings = await PinterestSettings.findById('pinterest_settings');

    if (!settings?.appId) {
      return NextResponse.json({ error: 'App ID not configured' }, { status: 400 });
    }

    // Use request origin to include www. if present
    const requestUrl = new URL(request.url);
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || `${requestUrl.protocol}//${requestUrl.host}`;
    const redirectUri = `${baseUrl}/api/pinterest/oauth`;

    // Generate state for CSRF protection
    const state = Math.random().toString(36).substring(2, 15);

    // Build OAuth URL
    const scopes = ['boards:read', 'boards:write', 'pins:read', 'pins:write', 'user_accounts:read'];
    const authUrl = new URL(`${PINTEREST_AUTH_URL}/`);
    authUrl.searchParams.set('client_id', settings.appId);
    authUrl.searchParams.set('redirect_uri', redirectUri);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('scope', scopes.join(','));
    authUrl.searchParams.set('state', state);

    return NextResponse.json({
      authUrl: authUrl.toString(),
      redirectUri
    });

  } catch (error) {
    console.error('OAuth URL generation error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Refresh access token
export async function POST(request) {
  try {
    await dbConnect();
    const settings = await PinterestSettings.findById('pinterest_settings');

    if (!settings?.refreshToken || !settings?.appId || !settings?.appSecret) {
      return NextResponse.json({ error: 'Missing credentials or refresh token' }, { status: 400 });
    }

    const tokenResponse = await fetch(PINTEREST_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${Buffer.from(`${settings.appId}:${settings.appSecret}`).toString('base64')}`
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: settings.refreshToken
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return NextResponse.json({
        error: tokenData.error_description || 'Token refresh failed'
      }, { status: 400 });
    }

    // Calculate new expiry
    const expiresAt = new Date();
    expiresAt.setSeconds(expiresAt.getSeconds() + (tokenData.expires_in || 3600));

    // Update tokens
    await PinterestSettings.findByIdAndUpdate('pinterest_settings', {
      accessToken: tokenData.access_token,
      refreshToken: tokenData.refresh_token || settings.refreshToken,
      tokenExpiresAt: expiresAt,
      updatedAt: new Date()
    });

    return NextResponse.json({
      success: true,
      message: 'Token refreshed successfully',
      expiresAt
    });

  } catch (error) {
    console.error('Token refresh error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Disconnect Pinterest account
export async function DELETE() {
  try {
    await dbConnect();

    await PinterestSettings.findByIdAndUpdate('pinterest_settings', {
      accessToken: null,
      refreshToken: null,
      tokenExpiresAt: null,
      accountId: null,
      accountUsername: null,
      updatedAt: new Date()
    });

    return NextResponse.json({ success: true, message: 'Disconnected from Pinterest' });

  } catch (error) {
    console.error('Disconnect error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
