/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { ViewTracker } from '../../../../components/blog/ViewTracker';
import Cover from '../../../../components/blog/Cover';
import { ReadProgress, Share, Toc } from '../../../../components/blog/ArticleTools';
import { Container } from '../../../../components/site/ui';
import { TOPICS, formatDate, getAllPosts, getPostBySlug, type CoverKind } from '@/lib/blog';
import { DIAGNOSTIC, SERVICES, SITE_URL, type ServiceId } from '@/lib/site';

// Cada tema de artículo apunta al servicio relacionado (para la invitación al final).
const COVER_SERVICE: Record<CoverKind, ServiceId> = { web: 'web', audit: 'web', signals: 'web', ecommerce: 'cirelia', automation: 'automatizacion', data: 'automatizacion' };

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date },
  };
}

/*
 * Artículo (v6.1): banner con el tema, el título y su portada → cuerpo con índice fijo a un lado
 * (y botones para compartir) → invitación al servicio relacionado → más artículos con portada.
 */
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const topic = TOPICS[post.cover];
  const service = SERVICES.find((s) => s.id === COVER_SERVICE[post.cover])!;
  const others = getAllPosts().filter((p) => p.slug !== slug);
  const more = [...others.filter((p) => p.cover === post.cover), ...others.filter((p) => p.cover !== post.cover)].slice(0, 3);
  const url = `${SITE_URL}/blog/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.excerpt, datePublished: post.date,
    author: { '@type': 'Person', name: 'Merloy Flores' }, publisher: { '@type': 'Organization', name: 'Nexflow Digital' }, mainEntityOfPage: url,
  };

  return (
    <article data-tone={topic.tone}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ViewTracker slug={slug} />
      <ReadProgress />

      {/* Banner */}
      <section className="relative overflow-hidden border-b b">
        <div className="gridbg gridbg-fade absolute inset-0 -z-10" aria-hidden />
        <Container className="pt-10 sm:pt-14 pb-12 sm:pb-16">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-[.9rem] muted hover:text-[var(--ink)]"><ArrowLeft size={15} /> Blog</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 rise">
              <Link href={`/blog?tema=${post.cover}`} className="topic hover:underline underline-offset-4">{topic.label}</Link>
              <h1 className="t-h1 mt-4 !text-[clamp(2rem,4.4vw,3.3rem)]">{post.title}</h1>
              <p className="t-lead mt-5">{post.excerpt}</p>
              <div className="mt-8 flex items-center gap-3">
                <img src="/merloy.webp" alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                <div className="leading-tight">
                  <p className="font-semibold text-[.95rem]">Merloy Flores</p>
                  <p className="t-small mt-1">{formatDate(post.date)} · {post.readingTime}</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5" data-rv="1" data-rv-from="scale">
              <Cover kind={post.cover} slug={slug} className="rounded-[1.5rem] border b" />
            </div>
          </div>
        </Container>
      </section>

      {/* Cuerpo */}
      <Container className="pt-12 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-12" data-article>
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-8">
              <Toc items={post.headings} />
              <div>
                <p className="text-[.85rem] font-semibold mb-3">Compartir</p>
                <Share url={url} title={post.title} />
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5 max-w-[44rem]">
            <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />

            <div className="mt-12 flex items-center justify-between gap-4 border-t b pt-6 lg:hidden">
              <p className="text-[.9rem] font-semibold">Compartir</p>
              <Share url={url} title={post.title} />
            </div>

            <aside className="mt-12 rounded-[1.5rem] border p-7 sm:p-9" style={{ borderColor: 'color-mix(in srgb, var(--tone) 30%, var(--line))', background: 'color-mix(in srgb, var(--tone) 6%, var(--card))' }}>
              <p className="topic">{service.name}</p>
              <h2 className="t-h3 mt-3">{service.promise}</h2>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={service.href} className="btn btn-ink btn-sm">Ver {service.short.toLowerCase()} <ArrowRight size={15} className="arrow" /></Link>
                <Link href={DIAGNOSTIC.href} className="btn btn-line btn-sm">Diagnóstico gratis</Link>
              </div>
            </aside>
          </div>
        </div>
      </Container>

      {/* Más artículos */}
      <Container className="py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6">
          <h2 className="t-h2">Seguir leyendo</h2>
          <Link href="/blog" className="btn btn-line btn-sm shrink-0">Todos los artículos</Link>
        </div>
        <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((p, i) => (
            <li key={p.slug} data-rv={i}>
              <Link href={`/blog/${p.slug}`} className="post-card group block" data-tone={TOPICS[p.cover].tone}>
                <Cover kind={p.cover} slug={p.slug} />
                <p className="topic mt-5">{TOPICS[p.cover].label}</p>
                <h3 className="mt-2 text-[1.12rem] font-semibold leading-snug tracking-[-0.02em]">{p.title}</h3>
                <p className="t-small mt-3">{formatDate(p.date)} · {p.readingTime}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </article>
  );
}
