import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Cover from '../../../components/blog/Cover';
import { Container, CtaBand } from '../../../components/site/ui';
import { TOPICS, TOPIC_ORDER, formatDate, getAllPosts, isTopic, type BlogPost } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Guías prácticas sobre sitios web, tiendas en línea, automatización y datos para negocios de Costa Rica.',
};

/*
 * Blog (v6.1). Arriba, el artículo más reciente como banner grande; después los temas (con el color de cada
 * servicio) y la cuadrícula de artículos, cada uno con su portada dibujada. Los temas filtran con ?tema=web, etc.
 */
function PostCard({ p, i }: { p: BlogPost; i: number }) {
  const t = TOPICS[p.cover];
  return (
    <li data-rv={i % 3}>
      <Link href={`/blog/${p.slug}`} className="post-card group block" data-tone={t.tone}>
        <Cover kind={p.cover} slug={p.slug} />
        <p className="topic mt-5">{t.label}</p>
        <h3 className="mt-2 text-[1.15rem] font-semibold leading-snug tracking-[-0.02em]">{p.title}</h3>
        <p className="mt-2.5 text-[.94rem] leading-relaxed ink2 line-clamp-2">{p.excerpt}</p>
        <p className="t-small mt-3">{formatDate(p.date)} · {p.readingTime}</p>
      </Link>
    </li>
  );
}

export default async function Page({ searchParams }: { searchParams: Promise<{ tema?: string }> }) {
  const { tema } = await searchParams;
  const topic = isTopic(tema) ? tema : null;
  const all = getAllPosts();
  const posts = topic ? all.filter((p) => p.cover === topic) : all;
  const [first, ...rest] = posts;
  const count = (k: string) => all.filter((p) => p.cover === k).length;

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="gridbg gridbg-fade absolute inset-0 -z-10" aria-hidden />
        <Container className="pt-14 sm:pt-20 pb-10">
          <div className="max-w-3xl rise">
            <h1 className="t-h1">Ideas claras para decidir mejor.</h1>
            <p className="t-lead mt-6">Guías cortas sobre sitios web, tiendas en línea, automatización y datos. Escritas para dueños de negocio, no para programadores.</p>
          </div>

          {/* El artículo destacado: el más reciente del tema elegido */}
          {first && (
            <Link href={`/blog/${first.slug}`} className="post-card group mt-12 grid gap-8 lg:grid-cols-12 lg:items-center" data-tone={TOPICS[first.cover].tone} data-rv="1">
              <div className="lg:col-span-7"><Cover kind={first.cover} slug={first.slug} className="!rounded-[1.5rem]" /></div>
              <div className="lg:col-span-5">
                <p className="topic">{TOPICS[first.cover].label}</p>
                <h2 className="t-h2 mt-3">{first.title}</h2>
                <p className="t-lead mt-4">{first.excerpt}</p>
                <p className="t-small mt-5">{formatDate(first.date)} · {first.readingTime}</p>
                <span className="btn btn-ink mt-7">Leer el artículo <ArrowRight size={16} className="arrow" /></span>
              </div>
            </Link>
          )}
        </Container>
      </section>

      <Container className="pb-20 sm:pb-28">
        <nav aria-label="Temas" className="border-y b py-5 flex flex-wrap items-center gap-2" data-rv>
          <Link href="/blog" className={`chip ${!topic ? '!border-[var(--ink)] !bg-[var(--ink)] !text-[var(--bg)]' : ''}`}>Todos <span className="opacity-60 num">{all.length}</span></Link>
          {TOPIC_ORDER.filter((k) => count(k) > 0).map((k) => (
            <Link key={k} href={`/blog?tema=${k}`} data-tone={TOPICS[k].tone}
              className={`chip ${topic === k ? '!border-[var(--tone)] !bg-[var(--tone)] !text-white' : ''}`}>
              <span className="tone-dot" style={topic === k ? { background: '#fff' } : undefined} />{TOPICS[k].label} <span className="opacity-60 num">{count(k)}</span>
            </Link>
          ))}
        </nav>

        <ul className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => <PostCard key={p.slug} p={p} i={i} />)}
        </ul>
        {posts.length === 0 && <p className="t-body mt-8">No hay artículos de ese tema todavía.</p>}
      </Container>

      <CtaBand />
    </>
  );
}
