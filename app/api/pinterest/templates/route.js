export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PinterestTemplate from '@/models/PinterestTemplate';

// Generate auto title based on base data
function generateTitle(base) {
  const typeLabels = {
    war: 'War',
    farm: 'Farm',
    trophy: 'Trophy'
  };
  const type = typeLabels[base.baseType] || 'Base';
  return `Best ${base.hallType}${base.hallLevel} ${type} Base #${base.baseNumber} - Anti 3 Star`;
}

// Generate auto description with SEO text + hashtags
function generateDescription(base) {
  const typeLabels = {
    war: 'War',
    farm: 'Farming',
    trophy: 'Trophy Pushing'
  };
  const type = typeLabels[base.baseType] || '';

  const descriptions = {
    war: `Looking for the best ${base.hallType}${base.hallLevel} War Base? This powerful anti 3-star layout is perfect for Clan War League and regular wars. Features strong defensive positioning against popular attack strategies like Queen Charge, Hybrid, and more. Copy this base now!`,
    farm: `Protect your resources with this amazing ${base.hallType}${base.hallLevel} Farming Base! This layout keeps your Gold, Elixir, and Dark Elixir safe from attackers. Perfect for trophy dropping and resource protection. Copy this base now!`,
    trophy: `Push to Legends League with this ${base.hallType}${base.hallLevel} Trophy Base! Designed to defend against all attack strategies and help you climb the ranks. Strong core defense with anti-3 star design. Copy this base now!`
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
function generateDestinationUrl(base, siteUrl = 'https://game365hub.com') {
  return `${siteUrl}/clash-of-clans/${base.hallType.toLowerCase()}${base.hallLevel}/${base.baseType}/${base.baseNumber}`;
}

// GET - Fetch all templates or single template
export async function GET(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit')) || 50;
    const page = parseInt(searchParams.get('page')) || 1;

    if (id) {
      const template = await PinterestTemplate.findById(id);
      if (!template) {
        return NextResponse.json({ error: 'Template not found' }, { status: 404 });
      }
      return NextResponse.json({ template });
    }

    // Build query
    const query = {};
    if (status) query.status = status;

    const total = await PinterestTemplate.countDocuments(query);
    const templates = await PinterestTemplate
      .find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    return NextResponse.json({
      templates,
      pagination: {
        total,
        page,
        limit,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Pinterest templates GET error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST - Create new template from base
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { base, customTitle, customDescription, siteUrl } = body;

    if (!base) {
      return NextResponse.json({ error: 'Base data is required' }, { status: 400 });
    }

    // Generate content
    const title = customTitle || generateTitle(base);
    const description = customDescription || generateDescription(base);
    const destinationUrl = generateDestinationUrl(base, siteUrl || 'https://game365hub.com');

    // Get image URL - bases use thumbnailUrl or originalImageUrl
    const imageUrl = base.originalImageUrl || base.thumbnailUrl || base.imageUrl || base.image || '';

    const template = await PinterestTemplate.create({
      baseId: base.copyLink || base._id || `${base.hallType}${base.hallLevel}-${base.baseNumber}`,
      baseType: base.baseType,
      hallType: base.hallType || 'TH',
      hallLevel: base.hallLevel,
      baseNumber: base.baseNumber,
      title,
      description,
      hashtags: description.match(/#\w+/g) || [],
      imageUrl,
      destinationUrl,
      status: 'ready'
    });

    return NextResponse.json({
      success: true,
      template,
      message: 'Template created successfully'
    });
  } catch (error) {
    console.error('Pinterest templates POST error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT - Update template
export async function PUT(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { id, title, description, status } = body;

    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    const updateData = { updatedAt: new Date() };
    if (title) updateData.title = title;
    if (description) {
      updateData.description = description;
      updateData.hashtags = description.match(/#\w+/g) || [];
    }
    if (status) updateData.status = status;

    const template = await PinterestTemplate.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, template });
  } catch (error) {
    console.error('Pinterest templates PUT error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE - Delete template
export async function DELETE(request) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Template ID is required' }, { status: 400 });
    }

    const template = await PinterestTemplate.findByIdAndDelete(id);

    if (!template) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Template deleted' });
  } catch (error) {
    console.error('Pinterest templates DELETE error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Generate preview without saving
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { base, siteUrl } = body;

    if (!base) {
      return NextResponse.json({ error: 'Base data is required' }, { status: 400 });
    }

    const preview = {
      title: generateTitle(base),
      description: generateDescription(base),
      destinationUrl: generateDestinationUrl(base, siteUrl || 'https://game365hub.com'),
      imageUrl: base.originalImageUrl || base.thumbnailUrl || base.imageUrl || base.image || ''
    };

    return NextResponse.json({ preview });
  } catch (error) {
    console.error('Pinterest templates PATCH error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
