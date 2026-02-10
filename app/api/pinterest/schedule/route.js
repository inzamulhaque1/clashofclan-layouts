export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestSchedule from '@/models/PinterestSchedule';
import PinterestTemplate from '@/models/PinterestTemplate';

// GET - Fetch schedules
export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const date = searchParams.get('date');
    const limit = parseInt(searchParams.get('limit')) || 1000;

    const query = {};
    if (status) query.status = status;
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      query.scheduledDate = { $gte: startOfDay, $lte: endOfDay };
    }

    const schedules = await PinterestSchedule
      .find(query)
      .sort({ scheduledDate: 1, scheduledTime: 1 })
      .limit(limit)
      .populate('templateId');

    return NextResponse.json({ schedules });
  } catch (error) {
    console.error('Pinterest schedule GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create new schedule
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { templateId, scheduledDate, scheduledTime, boardId, boardName } = body;

    if (!templateId || !scheduledDate || !scheduledTime) {
      return NextResponse.json(
        { error: 'Template ID, date, and time are required' },
        { status: 400 }
      );
    }

    // Check if template exists
    const template = await PinterestTemplate.findById(templateId);
    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    const schedule = new PinterestSchedule({
      templateId,
      scheduledDate: new Date(scheduledDate),
      scheduledTime,
      boardId,
      boardName,
      status: 'pending'
    });

    await schedule.save();

    // Update template status
    await PinterestTemplate.findByIdAndUpdate(templateId, { status: 'scheduled' });

    return NextResponse.json({
      success: true,
      schedule,
      message: 'Pin scheduled successfully'
    });
  } catch (error) {
    console.error('Pinterest schedule POST error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update schedule
export async function PUT(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { id, scheduledDate, scheduledTime, status } = body;

    if (!id) {
      return NextResponse.json({ error: 'Schedule ID is required' }, { status: 400 });
    }

    const updateData = {};
    if (scheduledDate) updateData.scheduledDate = new Date(scheduledDate);
    if (scheduledTime) updateData.scheduledTime = scheduledTime;
    if (status) updateData.status = status;

    const schedule = await PinterestSchedule.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!schedule) {
      return NextResponse.json({ error: 'Schedule not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, schedule });
  } catch (error) {
    console.error('Pinterest schedule PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete schedule(s)
export async function DELETE(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const fromDate = searchParams.get('from');
    const toDate = searchParams.get('to');
    const status = searchParams.get('status');

    // Bulk delete by date range
    if (fromDate) {
      const query = { status: status || 'pending' };

      const from = new Date(fromDate);
      from.setHours(0, 0, 0, 0);
      query.scheduledDate = { $gte: from };

      if (toDate) {
        const to = new Date(toDate);
        to.setHours(23, 59, 59, 999);
        query.scheduledDate.$lte = to;
      }

      // Get template IDs to reset status
      const schedulesToDelete = await PinterestSchedule.find(query, 'templateId');
      const templateIds = schedulesToDelete.map(s => s.templateId);

      const result = await PinterestSchedule.deleteMany(query);

      // Reset template statuses
      if (templateIds.length > 0) {
        await PinterestTemplate.updateMany(
          { _id: { $in: templateIds }, status: 'scheduled' },
          { status: 'ready' }
        );
      }

      return NextResponse.json({
        success: true,
        deleted: result.deletedCount,
        message: `Deleted ${result.deletedCount} schedules`
      });
    }

    // Single delete by ID
    if (!id) {
      return NextResponse.json({ error: 'Schedule ID or date range is required' }, { status: 400 });
    }

    const schedule = await PinterestSchedule.findByIdAndDelete(id);

    if (!schedule) {
      return NextResponse.json({ error: 'Schedule not found' }, { status: 404 });
    }

    // Update template status back to ready
    await PinterestTemplate.findByIdAndUpdate(schedule.templateId, { status: 'ready' });

    return NextResponse.json({ success: true, message: 'Schedule deleted' });
  } catch (error) {
    console.error('Pinterest schedule DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
