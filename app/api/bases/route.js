import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_FILE = path.join(process.cwd(), 'data', 'bases.json');

/**
 * GET - Get all bases with stats
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const hallType = searchParams.get('hallType');
  const level = searchParams.get('level');
  const baseType = searchParams.get('baseType');

  let data = { bases: [] };

  if (fs.existsSync(DATA_FILE)) {
    try {
      data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    } catch (e) {
      data = { bases: [] };
    }
  }

  let bases = data.bases || [];

  // Apply filters
  if (hallType) {
    bases = bases.filter(b => b.hallType === hallType);
  }
  if (level) {
    bases = bases.filter(b => b.hallLevel === parseInt(level, 10));
  }
  if (baseType) {
    bases = bases.filter(b => b.baseType === baseType);
  }

  // Calculate stats
  const stats = {
    total: data.bases?.length || 0,
    byType: {},
    byHall: {},
  };

  (data.bases || []).forEach(base => {
    stats.byType[base.baseType] = (stats.byType[base.baseType] || 0) + 1;
    const hallKey = `${base.hallType}${base.hallLevel}`;
    stats.byHall[hallKey] = (stats.byHall[hallKey] || 0) + 1;
  });

  return NextResponse.json({
    bases,
    stats,
    updatedAt: data.updatedAt,
  });
}

/**
 * POST - Add a new base manually
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { hallType, hallLevel, baseType, baseNumber, copyLink, thumbnailUrl, originalImageUrl } = body;

    if (!copyLink) {
      return NextResponse.json({ error: 'copyLink is required' }, { status: 400 });
    }

    // Load existing data
    let data = { bases: [] };
    if (fs.existsSync(DATA_FILE)) {
      try {
        data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      } catch (e) {
        data = { bases: [] };
      }
    }

    // Check for duplicate
    const exists = data.bases.find(b => b.copyLink === copyLink);
    if (exists) {
      return NextResponse.json({ error: 'Base already exists' }, { status: 400 });
    }

    // Add new base
    const newBase = {
      hallType: hallType || 'TH',
      hallLevel: hallLevel || 17,
      baseType: baseType || 'war',
      baseNumber: baseNumber || Date.now(),
      copyLink,
      thumbnailUrl,
      originalImageUrl,
      scrapedAt: new Date().toISOString(),
      addedManually: true,
    };

    data.bases.unshift(newBase);
    data.totalBases = data.bases.length;
    data.updatedAt = new Date().toISOString();

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({ success: true, base: newBase });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/**
 * DELETE - Delete a base
 */
export async function DELETE(request) {
  try {
    const body = await request.json();
    const { copyLink } = body;

    if (!copyLink) {
      return NextResponse.json({ error: 'copyLink is required' }, { status: 400 });
    }

    // Load existing data
    let data = { bases: [] };
    if (fs.existsSync(DATA_FILE)) {
      try {
        data = JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
      } catch (e) {
        data = { bases: [] };
      }
    }

    // Remove base
    const initialLength = data.bases.length;
    data.bases = data.bases.filter(b => b.copyLink !== copyLink);

    if (data.bases.length === initialLength) {
      return NextResponse.json({ error: 'Base not found' }, { status: 404 });
    }

    data.totalBases = data.bases.length;
    data.updatedAt = new Date().toISOString();

    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
