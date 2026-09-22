import { NextRequest, NextResponse } from 'next/server';
import { incrementView } from '@/lib/views';

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const views = await incrementView(slug);
  return NextResponse.json({ slug, views });
}
