import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
/** Tema del artículo (en el frontmatter `cover`): sirve para sugerir el servicio relacionado. */
export type CoverKind = 'web' | 'automation' | 'data' | 'signals' | 'audit' | 'ecommerce';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const VALID_COVERS: CoverKind[] = ['web', 'automation', 'data', 'signals', 'audit', 'ecommerce'];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  cover: CoverKind;
};

export type BlogPostWithContent = BlogPost & { html: string; headings: { id: string; text: string }[] };

/**
 * Temas del blog. Cada artículo tiene uno (el `cover` del frontmatter) y de ahí sale:
 * el nombre del tema, su color (el mismo de cada servicio en el sitio) y el dibujo de su portada.
 */
export const TOPICS: Record<CoverKind, { label: string; tone: 'web' | 'cirelia' | 'automatizacion' | 'apps' }> = {
  web: { label: 'Sitios web', tone: 'web' },
  signals: { label: 'Clientes y Google', tone: 'web' },
  ecommerce: { label: 'Tiendas en línea', tone: 'cirelia' },
  automation: { label: 'Automatización', tone: 'automatizacion' },
  data: { label: 'Datos y reportes', tone: 'apps' },
  audit: { label: 'Seguridad y buenas prácticas', tone: 'apps' },
};
export const TOPIC_ORDER: CoverKind[] = ['web', 'signals', 'ecommerce', 'automation', 'data', 'audit'];
export const isTopic = (v: unknown): v is CoverKind => typeof v === 'string' && (VALID_COVERS as string[]).includes(v);

/** «¿Cuánto cuesta?» → «cuanto-cuesta»: para los anclajes del índice del artículo. */
const slugify = (t: string) => t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Les pone un id a los subtítulos (h2) y devuelve la lista, para armar el índice «En este artículo». */
function withHeadingIds(html: string) {
  const headings: { id: string; text: string }[] = [];
  const out = html.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&').trim();
    let id = slugify(text) || 'seccion';
    while (headings.some((h) => h.id === id)) id += '-2';
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html: out, headings };
}

function readSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace(/\.md$/, ''));
}

function readingTime(markdown: string): string {
  const words = markdown.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min de lectura`;
}

function resolveCover(value: unknown): CoverKind {
  if (typeof value === 'string' && (VALID_COVERS as string[]).includes(value)) {
    return value as CoverKind;
  }
  return 'web';
}

function loadRaw(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = fs.readFileSync(filePath, 'utf8');
  return matter(raw);
}

export function getAllPosts(): BlogPost[] {
  const posts = readSlugs().map((slug) => {
    const { data, content } = loadRaw(slug);
    return {
      slug,
      title: data.title as string,
      excerpt: data.excerpt as string,
      date: data.date as string,
      tags: (data.tags as string[]) ?? [],
      readingTime: readingTime(content),
      cover: resolveCover(data.cover),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPostWithContent | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = loadRaw(slug);
  const { html, headings } = withHeadingIds(marked.parse(content, { async: false }) as string);

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: readingTime(content),
    cover: resolveCover(data.cover),
    html,
    headings,
  };
}

export function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('es-CR', { day: 'numeric', month: 'long', year: 'numeric' });
}
