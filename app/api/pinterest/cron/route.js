export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestSchedule from '@/models/PinterestSchedule';
import PinterestTemplate from '@/models/PinterestTemplate';
import PinterestSettings from '@/models/PinterestSettings';

// Pinterest API base URL
const PINTEREST_API_URL = 'https://api.pinterest.com/v5';

// Bangladesh timezone offset: UTC+6
const BD_OFFSET_HOURS = 6;

// Get current Bangladesh time
function getBDTime() {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utcMs + BD_OFFSET_HOURS * 3600000);
}

// Post a pin to Pinterest
async function postToPinterest(template, settings) {
  const response = await fetch(`${PINTEREST_API_URL}/pins`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${settings.accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      board_id: settings.defaultBoardId,
      title: template.title,
      description: template.description,
      link: template.destinationUrl,
      media_source: {
        source_type: 'image_url',
        url: template.imageUrl,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || `Pinterest API error: ${response.status}`);
  }

  return await response.json();
}

// GET - Process scheduled pins (called by cron or external service)
export async function GET(request) {
  try {
    // Verify cron secret (optional security)
    const { searchParams } = new URL(request.url);
    const cronSecret = searchParams.get('secret');

    if (process.env.CRON_SECRET && cronSecret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await dbConnect();

    const settings = await PinterestSettings.findById('pinterest_settings');

    if (!settings || !settings.automationEnabled) {
      return NextResponse.json({
        message: 'Automation is disabled',
        processed: 0
      });
    }

    if (!settings.accessToken) {
      return NextResponse.json({
        error: 'Pinterest access token not configured',
        processed: 0
      }, { status: 400 });
    }

    // Get current Bangladesh time (user schedules in BD time)
    const bdNow = getBDTime();
    const bdDate = bdNow.toISOString().slice(0, 10); // "YYYY-MM-DD"
    const bdTime = bdNow.toTimeString().slice(0, 5); // "HH:MM"

    // Find pending schedules where:
    // 1. Scheduled date is today or earlier (catch missed pins)
    // 2. Scheduled time has passed (for today) or any time (for past days)
    const endOfToday = new Date(bdNow);
    endOfToday.setHours(23, 59, 59, 999);

    const startOfToday = new Date(bdNow);
    startOfToday.setHours(0, 0, 0, 0);

    // Get pins from past days (all times) + today (only times that passed)
    const pendingSchedules = await PinterestSchedule.find({
      status: 'pending',
      $or: [
        // Past days - post all missed pins
        { scheduledDate: { $lt: startOfToday } },
        // Today - only post if scheduled time has passed
        {
          scheduledDate: { $gte: startOfToday, $lte: endOfToday },
          scheduledTime: { $lte: bdTime }
        }
      ]
    }).populate('templateId').sort({ scheduledDate: 1, scheduledTime: 1 }).limit(1);

    if (pendingSchedules.length === 0) {
      return NextResponse.json({
        message: 'No pins ready to post',
        processed: 0,
        bdTime,
        bdDate
      });
    }

    const results = {
      processed: 0,
      success: 0,
      failed: 0,
      errors: []
    };

    for (const schedule of pendingSchedules) {
      try {
        await PinterestSchedule.findByIdAndUpdate(schedule._id, {
          status: 'processing'
        });

        const template = schedule.templateId;

        if (!template) {
          throw new Error('Template not found');
        }

        const pinResult = await postToPinterest(template, settings);

        await PinterestSchedule.findByIdAndUpdate(schedule._id, {
          status: 'posted',
          pinterestPinId: pinResult.id,
          pinterestUrl: `https://pinterest.com/pin/${pinResult.id}`,
          postedAt: new Date()
        });

        await PinterestTemplate.findByIdAndUpdate(template._id, {
          status: 'posted',
          $inc: { timesUsed: 1 }
        });

        results.success++;
      } catch (error) {
        console.error(`Failed to post pin ${schedule._id}:`, error);

        const retryCount = (schedule.retryCount || 0) + 1;
        const maxRetries = schedule.maxRetries || 3;

        await PinterestSchedule.findByIdAndUpdate(schedule._id, {
          status: retryCount >= maxRetries ? 'failed' : 'pending',
          error: error.message,
          retryCount
        });

        results.failed++;
        results.errors.push({
          scheduleId: schedule._id,
          error: error.message
        });
      }

      results.processed++;
    }

    return NextResponse.json({
      success: true,
      message: `Processed ${results.processed} pins`,
      ...results,
      bdTime,
      bdDate
    });

  } catch (error) {
    console.error('Pinterest cron error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Manual trigger to post a specific schedule
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { scheduleId } = body;

    if (!scheduleId) {
      return NextResponse.json({ error: 'Schedule ID required' }, { status: 400 });
    }

    const settings = await PinterestSettings.findById('pinterest_settings');

    if (!settings?.accessToken) {
      return NextResponse.json({
        error: 'Pinterest access token not configured'
      }, { status: 400 });
    }

    const schedule = await PinterestSchedule.findById(scheduleId).populate('templateId');

    if (!schedule) {
      return NextResponse.json({ error: 'Schedule not found' }, { status: 404 });
    }

    if (!schedule.templateId) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    await PinterestSchedule.findByIdAndUpdate(scheduleId, { status: 'processing' });

    try {
      const pinResult = await postToPinterest(schedule.templateId, settings);

      await PinterestSchedule.findByIdAndUpdate(scheduleId, {
        status: 'posted',
        pinterestPinId: pinResult.id,
        pinterestUrl: `https://pinterest.com/pin/${pinResult.id}`,
        postedAt: new Date()
      });

      await PinterestTemplate.findByIdAndUpdate(schedule.templateId._id, {
        status: 'posted',
        $inc: { timesUsed: 1 }
      });

      return NextResponse.json({
        success: true,
        message: 'Pin posted successfully',
        pinId: pinResult.id,
        pinUrl: `https://pinterest.com/pin/${pinResult.id}`
      });

    } catch (error) {
      await PinterestSchedule.findByIdAndUpdate(scheduleId, {
        status: 'failed',
        error: error.message,
        $inc: { retryCount: 1 }
      });

      return NextResponse.json({
        error: `Failed to post: ${error.message}`
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Pinterest manual post error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
