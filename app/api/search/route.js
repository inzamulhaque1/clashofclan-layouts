import { NextResponse } from 'next/server';
import { getAllBases, searchBases } from '@/lib/bases';

export async function GET(request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('q') || '';
  const thLevel = searchParams.get('th');
  const baseType = searchParams.get('type');

  let bases = getAllBases();

  // Filter by TH level
  if (thLevel) {
    const level = parseInt(thLevel, 10);
    bases = bases.filter(b => b.hallType === 'TH' && b.hallLevel === level);
  }

  // Filter by base type
  if (baseType) {
    bases = bases.filter(b => b.baseType === baseType);
  }

  // Search by query
  if (query) {
    const lowerQuery = query.toLowerCase();
    bases = bases.filter(base => {
      const searchableText = [
        base.title,
        base.hallType,
        base.baseType,
        `th${base.hallLevel}`,
        `bh${base.hallLevel}`,
      ].filter(Boolean).join(' ').toLowerCase();

      return searchableText.includes(lowerQuery);
    });
  }

  // Limit results
  bases = bases.slice(0, 50);

  return NextResponse.json({
    total: bases.length,
    bases,
  });
}
