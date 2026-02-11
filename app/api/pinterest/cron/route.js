export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestSchedule from '@/models/PinterestSchedule';
import PinterestTemplate from '@/models/PinterestTemplate';
import PinterestSettings from '@/models/PinterestSettings';

// Pinterest API base URL
const PINTEREST_API_URL = 'https://api.pinterest.com/v5';

// Get current Bangladesh time components (BD = UTC+6)
function getBDTimeInfo() {
  const now = new Date();
  const bdHours = (now.getUTCHours() + 6) % 24;
  const bdMinutes = now.getUTCMinutes();
  const bdTime = `${String(bdHours).padStart(2, '0')}:${String(bdMinutes).padStart(2, '0')}`;

  // Calculate start of today in BD timezone (as UTC timestamp)
  // e.g., Feb 11 00:00 BD = Feb 10 18:00 UTC
  const msSinceBDMidnight = (bdHours * 3600 + bdMinutes * 60 + now.getUTCSeconds()) * 1000;
  const todayBDStart = new Date(now.getTime() - msSinceBDMidnight);

  return { now, bdTime, todayBDStart };
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

    // Get current Bangladesh time info
    const { now, bdTime, todayBDStart } = getBDTimeInfo();

    // Find pending schedules where:
    // - Past BD days: scheduledDate < todayBDStart → post all missed pins
    // - Today in BD: scheduledDate >= todayBDStart AND scheduledDate <= now AND time passed
    const pendingSchedules = await PinterestSchedule.find({
      status: 'pending',
      $or: [
        // Past BD days - post all missed pins regardless of time
        { scheduledDate: { $lt: todayBDStart } },
        // Today in BD - only post if scheduled time has passed
        {
          scheduledDate: { $gte: todayBDStart, $lte: now },
          scheduledTime: { $lte: bdTime }
        }
      ]
    }).populate('templateId').sort({ scheduledDate: 1, scheduledTime: 1 }).limit(1);

    if (pendingSchedules.length === 0) {
      return NextResponse.json({
        message: 'No pins ready to post',
        processed: 0,
        bdTime,
        todayBDStart: todayBDStart.toISOString()
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
      bdTime
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
