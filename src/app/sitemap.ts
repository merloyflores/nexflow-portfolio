import type { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/site';

// Las páginas del sitio. Cuando compres el dominio, cambiá SITE_URL en src/lib/site.ts y listo.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ['', 1], ['/sitios-web', 0.9], ['/cirelia-business', 0.9], ['/automatizacion', 0.9], ['/apps', 0.9], ['/clinicas', 0.9], ['/como-trabajamos', 0.7], ['/diagnostico', 0.8],
    ['/proyectos', 0.8], ['/nosotros', 0.7], ['/contacto', 0.7], ['/blog', 0.7], ['/privacidad', 0.2], ['/terminos', 0.2],
  ];
  const statics = pages.map(([path, priority]) => ({ url: `${SITE_URL}${path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority }));
  const posts = getAllPosts().map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: new Date(p.date), changeFrequency: 'yearly' as const, priority: 0.6 }));
  return [...statics, ...posts];
}
