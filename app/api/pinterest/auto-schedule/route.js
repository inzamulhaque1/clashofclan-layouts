export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestTemplate from '@/models/PinterestTemplate';
import PinterestSchedule from '@/models/PinterestSchedule';
import PinterestSettings from '@/models/PinterestSettings';
import { getAllBases } from '@/lib/bases';

// Generate auto title
function generateTitle(base) {
  const typeLabels = { war: 'War', farm: 'Farm', trophy: 'Trophy', defense: 'Defense' };
  const type = typeLabels[base.baseType] || 'Base';
  return `Best ${base.hallType}${base.hallLevel} ${type} Base #${base.baseNumber} - Anti 3 Star`;
}

// Generate auto description with hashtags
function generateDescription(base) {
  const descriptions = {
    war: `Looking for the best ${base.hallType}${base.hallLevel} War Base? This powerful anti 3-star layout is perfect for Clan War League and regular wars. Features strong defensive positioning against popular attack strategies like Queen Charge, Hybrid, and more. Copy this base now!`,
    farm: `Protect your resources with this amazing ${base.hallType}${base.hallLevel} Farming Base! This layout keeps your Gold, Elixir, and Dark Elixir safe from attackers. Perfect for trophy dropping and resource protection. Copy this base now!`,
    trophy: `Push to Legends League with this ${base.hallType}${base.hallLevel} Trophy Base! Designed to defend against all attack strategies and help you climb the ranks. Strong core defense with anti-3 star design. Copy this base now!`,
    defense: `Ultimate ${base.hallType}${base.hallLevel} Defense Base! This anti 3-star layout features perfectly placed defenses to stop every attack strategy. Great for CWL, regular wars, and trophy pushing. Copy this base now!`
  };

  const desc = descriptions[base.baseType] || `Amazing ${base.hallType}${base.hallLevel} base layout! Copy this base now!`;

  const hashtags = [
    'clashofclans', 'coc', `th${base.hallLevel}`,
    `th${base.hallLevel}${base.baseType}base`, `${base.baseType}base`,
    'clashbase', 'cocbase', 'clashlayouts', 'cwl', 'clanwar',
    'clashofclanslayout', 'mobilegaming', 'supercell'
  ];

  return `${desc}\n\n${hashtags.map(h => `#${h}`).join(' ')}`;
}

// Generate destination URL
function generateDestinationUrl(base, siteUrl) {
  return `${siteUrl}/clash-of-clans/${base.hallType.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`;
}

// 10 posting times spread across the day (Bangladesh time)
const POSTING_TIMES = [
  '08:00', '09:30', '11:00', '12:30', '14:00',
  '15:30', '17:00', '19:00', '20:30', '22:00'
];

// GET - Preview what auto-scheduler would create
export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const days = parseInt(searchParams.get('days')) || 30;

    // Get all bases sorted by latest first (highest TH level, highest number)
    const allBases = getAllBases();
    allBases.sort((a, b) => {
      if (b.hallLevel !== a.hallLevel) return b.hallLevel - a.hallLevel;
      if (b.baseNumber !== a.baseNumber) return b.baseNumber - a.baseNumber;
      return 0;
    });

    // Get already used base IDs (templates that exist)
    const existingTemplates = await PinterestTemplate.find({}, 'baseId');
    const usedBaseIds = new Set(existingTemplates.map(t => t.baseId));

    // Filter out already used bases
    const availableBases = allBases.filter(base => {
      const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
      return !usedBaseIds.has(baseId) && base.originalImageUrl;
    });

    const totalNeeded = days * 10;
    const basesToSchedule = availableBases.slice(0, totalNeeded);

    // Build preview
    const preview = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let day = 0; day < days; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() + day + 1); // Start from tomorrow
      const dateStr = date.toISOString().slice(0, 10);

      const dayBases = basesToSchedule.slice(day * 10, (day + 1) * 10);

      if (dayBases.length === 0) break;

      preview.push({
        date: dateStr,
        pins: dayBases.map((base, i) => ({
          time: POSTING_TIMES[i] || POSTING_TIMES[POSTING_TIMES.length - 1],
          title: generateTitle(base),
          baseType: base.baseType,
          hallLevel: base.hallLevel,
          baseNumber: base.baseNumber,
          imageUrl: base.originalImageUrl
        }))
      });
    }

    return NextResponse.json({
      totalAvailableBases: availableBases.length,
      totalAlreadyUsed: usedBaseIds.size,
      daysToSchedule: preview.length,
      pinsToCreate: basesToSchedule.length,
      preview
    });
  } catch (error) {
    console.error('Auto-schedule preview error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Execute auto-scheduling
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const days = body.days || 30;

    const settings = await PinterestSettings.findById('pinterest_settings');
    const siteUrl = settings?.siteUrl || 'https://game365hub.com';
    const boardId = settings?.defaultBoardId;
    const boardName = settings?.defaultBoardName;

    // Get all bases sorted by latest first
    const allBases = getAllBases();
    allBases.sort((a, b) => {
      if (b.hallLevel !== a.hallLevel) return b.hallLevel - a.hallLevel;
      if (b.baseNumber !== a.baseNumber) return b.baseNumber - a.baseNumber;
      return 0;
    });

    // Get already used base IDs
    const existingTemplates = await PinterestTemplate.find({}, 'baseId');
    const usedBaseIds = new Set(existingTemplates.map(t => t.baseId));

    // Filter available bases (not used, has image)
    const availableBases = allBases.filter(base => {
      const baseId = base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`;
      return !usedBaseIds.has(baseId) && base.originalImageUrl;
    });

    const totalNeeded = days * 10;
    const basesToSchedule = availableBases.slice(0, totalNeeded);

    if (basesToSchedule.length === 0) {
      return NextResponse.json({
        error: 'No available bases to schedule. All bases already have templates.'
      }, { status: 400 });
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let templatesCreated = 0;
    let schedulesCreated = 0;

    for (let day = 0; day < days; day++) {
      const date = new Date(today);
      date.setDate(date.getDate() + day + 1); // Start from tomorrow

      const dayBases = basesToSchedule.slice(day * 10, (day + 1) * 10);

      if (dayBases.length === 0) break;

      for (let i = 0; i < dayBases.length; i++) {
        const base = dayBases[i];
        const time = POSTING_TIMES[i] || POSTING_TIMES[POSTING_TIMES.length - 1];

        // Create template
        const template = await PinterestTemplate.create({
          baseId: base.copyLink || `${base.hallType}${base.hallLevel}-${base.baseNumber}`,
          baseType: base.baseType,
          hallType: base.hallType || 'TH',
          hallLevel: base.hallLevel,
          baseNumber: base.baseNumber,
          title: generateTitle(base),
          description: generateDescription(base),
          hashtags: generateDescription(base).match(/#\w+/g) || [],
          imageUrl: base.originalImageUrl,
          destinationUrl: generateDestinationUrl(base, siteUrl),
          status: 'scheduled'
        });

        templatesCreated++;

        // Create schedule
        await PinterestSchedule.create({
          templateId: template._id,
          scheduledDate: date,
          scheduledTime: time,
          boardId: boardId,
          boardName: boardName,
          status: 'pending'
        });

        schedulesCreated++;
      }
    }

    return NextResponse.json({
      success: true,
      message: `Auto-scheduled ${schedulesCreated} pins over ${Math.ceil(schedulesCreated / 10)} days`,
      templatesCreated,
      schedulesCreated,
      startDate: new Date(today.getTime() + 86400000).toISOString().slice(0, 10),
      endDate: new Date(today.getTime() + (Math.ceil(schedulesCreated / 10)) * 86400000).toISOString().slice(0, 10)
    });
  } catch (error) {
    console.error('Auto-schedule execute error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Clear old/pending schedules
export async function DELETE(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const mode = searchParams.get('mode') || 'old'; // 'old', 'pending', 'all'

    let query = {};
    let templateUpdate = {};

    if (mode === 'old') {
      // Delete posted and failed schedules (keep pending)
      query = { status: { $in: ['posted', 'failed', 'cancelled'] } };
    } else if (mode === 'pending') {
      // Delete all pending schedules
      query = { status: 'pending' };
      templateUpdate = { status: 'ready' };
    } else if (mode === 'all') {
      // Delete everything except currently processing
      query = { status: { $ne: 'processing' } };
    }

    // Get template IDs for pending schedules to reset their status
    if (mode === 'pending' || mode === 'all') {
      const schedulesToDelete = await PinterestSchedule.find(
        { ...query, status: 'pending' },
        'templateId'
      );
      const templateIds = schedulesToDelete.map(s => s.templateId);

      if (templateIds.length > 0) {
        await PinterestTemplate.updateMany(
          { _id: { $in: templateIds }, status: 'scheduled' },
          { status: 'ready' }
        );
      }
    }

    const result = await PinterestSchedule.deleteMany(query);

    // Also clean up orphan templates if clearing all
    if (mode === 'all') {
      const orphanResult = await PinterestTemplate.deleteMany({
        status: { $in: ['ready', 'draft'] }
      });

      return NextResponse.json({
        success: true,
        schedulesDeleted: result.deletedCount,
        templatesCleanedUp: orphanResult.deletedCount,
        message: `Cleared ${result.deletedCount} schedules and ${orphanResult.deletedCount} unused templates`
      });
    }

    return NextResponse.json({
      success: true,
      deleted: result.deletedCount,
      message: `Cleared ${result.deletedCount} ${mode} schedules`
    });
  } catch (error) {
    console.error('Auto-schedule clear error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
