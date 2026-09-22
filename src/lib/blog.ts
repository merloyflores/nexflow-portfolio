import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { CoverKind } from '../../components/blog/CoverArt';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const VALID_COVERS: CoverKind[] = ['web', 'automation', 'data', 'signals', 'audit'];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readingTime: string;
  cover: CoverKind;
};

export type BlogPostWithContent = BlogPost & { html: string };

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
  const html = marked.parse(content, { async: false }) as string;

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: readingTime(content),
    cover: resolveCover(data.cover),
    html,
  };
}
