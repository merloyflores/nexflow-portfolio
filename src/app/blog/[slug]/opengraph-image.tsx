import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { NexflowMark } from '../../../../components/site/Logo';
import { TOPICS, getAllPosts, getPostBySlug } from '@/lib/blog';

/**
 * La imagen que aparece al compartir un artículo en WhatsApp, LinkedIn o Facebook (1200 × 630).
 * Se genera sola en el build para cada artículo: tema con su color, título y la marca de Nexflow.
 */
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Artículo del blog de Nexflow Digital';

const TONE = { web: '#2b47c4', cirelia: '#0e6b55', automatizacion: '#5b3cc4', apps: '#0b7285' } as const;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const topic = post ? TOPICS[post.cover] : TOPICS.web;
  const tone = TONE[topic.tone];
  // Geist (la letra del sitio) en semibold, guardada en el proyecto para no depender de internet en el build.
  const geist = await readFile(path.join(process.cwd(), 'src/fonts/geist-600.ttf'));
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '72px 80px', background: '#f5f6f8', color: '#0c1220', borderTop: `14px solid ${tone}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 30, fontWeight: 600, color: tone }}>
          <div style={{ width: 16, height: 16, borderRadius: 99, background: tone }} />
          {topic.label}
        </div>
        <div style={{ display: 'flex', fontSize: post && post.title.length > 70 ? 58 : 68, fontWeight: 600, lineHeight: 1.08, letterSpacing: '-0.035em', maxWidth: 1000 }}>
          {post?.title ?? 'Blog de Nexflow Digital'}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 28, color: '#5b6474' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#0c1220' }}>
            <NexflowMark size={40} />
            <span>Nexflow</span>
            <span style={{ color: '#5b6474' }}>Digital</span>
          </div>
          <span>Blog · {post?.readingTime ?? ''}</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Geist', data: geist, weight: 600, style: 'normal' }] },
  );
}
