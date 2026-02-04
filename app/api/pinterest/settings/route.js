export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestSettings from '@/models/PinterestSettings';

// GET - Fetch settings
export async function GET() {
  try {
    await dbConnect();

    let settings = await PinterestSettings.findById('pinterest_settings');

    // Create default settings if not exists
    if (!settings) {
      settings = new PinterestSettings({
        _id: 'pinterest_settings',
        postingTimes: ['09:00', '12:00', '15:00', '18:00', '21:00'],
        defaultHashtags: ['clashofclans', 'coc', 'clashbase', 'cocbase', 'clashlayouts', 'mobilegaming'],
        dailyPinLimit: 10,
        automationEnabled: false,
        siteUrl: 'https://game365hub.com'
      });
      await settings.save();
    }

    // Don't send sensitive data to client
    const safeSettings = {
      appId: settings.appId ? '••••' + settings.appId.slice(-4) : '',
      appSecret: settings.appSecret ? '••••••••' : '',
      accessToken: settings.accessToken ? '••••••••' : '',
      hasCredentials: !!(settings.appId && settings.appSecret && settings.accessToken),
      defaultBoardId: settings.defaultBoardId,
      defaultBoardName: settings.defaultBoardName,
      automationEnabled: settings.automationEnabled,
      dailyPinLimit: settings.dailyPinLimit,
      postingTimes: settings.postingTimes,
      defaultHashtags: settings.defaultHashtags,
      siteUrl: settings.siteUrl,
    };

    return NextResponse.json({ settings: safeSettings });
  } catch (error) {
    console.error('Pinterest settings GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update settings
export async function PUT(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const {
      appId,
      appSecret,
      accessToken,
      defaultBoardId,
      defaultBoardName,
      automationEnabled,
      dailyPinLimit,
      postingTimes,
      defaultHashtags,
      siteUrl
    } = body;

    const updateData = { updatedAt: new Date() };

    // Only update credentials if they're not masked values
    if (appId && !appId.startsWith('••••')) updateData.appId = appId;
    if (appSecret && appSecret !== '••••••••') updateData.appSecret = appSecret;
    if (accessToken && accessToken !== '••••••••') updateData.accessToken = accessToken;

    // Update other settings
    if (defaultBoardId !== undefined) updateData.defaultBoardId = defaultBoardId;
    if (defaultBoardName !== undefined) updateData.defaultBoardName = defaultBoardName;
    if (automationEnabled !== undefined) updateData.automationEnabled = automationEnabled;
    if (dailyPinLimit !== undefined) updateData.dailyPinLimit = dailyPinLimit;
    if (postingTimes) updateData.postingTimes = postingTimes;
    if (defaultHashtags) updateData.defaultHashtags = defaultHashtags;
    if (siteUrl !== undefined) updateData.siteUrl = siteUrl;

    const settings = await PinterestSettings.findByIdAndUpdate(
      'pinterest_settings',
      updateData,
      { new: true, upsert: true }
    );

    return NextResponse.json({
      success: true,
      message: 'Settings updated successfully'
    });
  } catch (error) {
    console.error('Pinterest settings PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
