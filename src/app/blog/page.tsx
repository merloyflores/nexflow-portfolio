import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllPosts, type BlogPost } from '@/lib/blog';
import { getViewCounts } from '@/lib/views';
import { CoverArt } from '../../../components/blog/CoverArt';

const HEADING = 'font-[family-name:var(--font-display)]';
const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

const PAGE_SIZE = 6;
const TOP_READ_COUNT = 3;

// Vuelve a calcular esta página cada minuto, para que "Más leídos" refleje
// vistas recientes sin tener que reconstruir todo el sitio.
export const revalidate = 60;

function formatDate(date: string) {
  return new Date(`${date}T12:00:00`).toLocaleDateString('es-CR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const metadata: Metadata = {
  title: 'Blog | Nexflow Digital',
  description:
    'Guías claras sobre páginas web, automatización y datos para pequeñas y medianas empresas en Costa Rica.',
  openGraph: {
    title: 'Blog | Nexflow Digital',
    description:
      'Guías claras sobre páginas web, automatización y datos para pequeñas y medianas empresas en Costa Rica.',
    type: 'website',
  },
};

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function BlogIndexPage({ searchParams }: Props) {
  const { page: pageParam } = await searchParams;
  const posts = getAllPosts();
  const [featured, ...restAll] = posts;

  const requestedPage = Number(pageParam) || 1;
  const totalPages = Math.max(1, Math.ceil(restAll.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const pageStart = (currentPage - 1) * PAGE_SIZE;
  const pagePosts = restAll.slice(pageStart, pageStart + PAGE_SIZE);

  const viewCounts = await getViewCounts();
  const topRead: (BlogPost & { views: number })[] = posts
    .map((post) => ({ ...post, views: viewCounts[post.slug] ?? 0 }))
    .filter((post) => post.views > 0)
    .sort((a, b) => b.views - a.views)
    .slice(0, TOP_READ_COUNT);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* Fondo con el mismo glow orbitado que usamos en la vitrina de proyectos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]" />
        <div className="absolute left-[15%] top-[80px] h-[280px] w-[280px] rounded-full bg-emerald-400/[0.07] blur-[100px]" />
      </div>

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:pt-36">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-400">
          Blog de Nexflow Digital
        </p>
        <h1
          className={`${HEADING} mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-5xl`}
        >
          Ideas prácticas para pymes que quieren crecer con tecnología
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-400 sm:text-lg">
          Artículos directos, sin tecnicismos innecesarios, sobre páginas
          web, automatización y datos.
        </p>

        {currentPage === 1 && featured && (
          <Link
            href={`/blog/${featured.slug}`}
            className={`group relative mt-14 block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all hover:border-sky-400/40 hover:bg-white/[0.05] ${focusRing}`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
              <div className="relative aspect-video overflow-hidden sm:aspect-auto">
                <CoverArt
                  kind={featured.cover}
                  className="h-full w-full scale-105 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent sm:bg-gradient-to-r" />
              </div>

              <div className="relative p-8 sm:p-10">
                <span className="relative inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  Más reciente
                </span>

                <h2
                  className={`${HEADING} relative mt-5 text-2xl font-semibold text-white transition-colors group-hover:text-sky-300 sm:text-3xl`}
                >
                  {featured.title}
                </h2>

                <p className="relative mt-4 text-sm text-slate-400 sm:text-base">
                  {featured.excerpt}
                </p>

                <div className="relative mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <time dateTime={featured.date}>{formatDate(featured.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readingTime}</span>
                </div>

                <span className="relative mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                  Leer artículo completo
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        )}

        {/* Más leídos: aparece solo cuando ya hay vistas reales que mostrar */}
        {currentPage === 1 && topRead.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Más leídos
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {topRead.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group relative flex items-start gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] ${focusRing}`}
                >
                  <span
                    className={`${HEADING} shrink-0 text-3xl font-semibold text-white/15`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="min-w-0">
                    <h4
                      className={`${HEADING} line-clamp-2 text-sm font-semibold text-white transition-colors group-hover:text-sky-300`}
                    >
                      {post.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500">
                      {post.views} {post.views === 1 ? 'lectura' : 'lecturas'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {pagePosts.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Más artículos
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {pagePosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05] ${focusRing}`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <CoverArt
                      kind={post.cover}
                      className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h4
                      className={`${HEADING} mt-3 text-lg font-semibold text-white transition-colors group-hover:text-sky-300`}
                    >
                      {post.title}
                    </h4>

                    <p className="mt-2 flex-1 text-sm text-slate-400">
                      {post.excerpt}
                    </p>

                    {post.tags.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Paginación del blog"
            className="mt-12 flex items-center justify-center gap-2"
          >
            <Link
              href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : '#'}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors ${focusRing} ${
                currentPage === 1
                  ? 'pointer-events-none border-white/5 text-slate-700'
                  : 'border-white/10 text-slate-300 hover:border-sky-400/40 hover:text-sky-300'
              }`}
            >
              <span aria-hidden="true">←</span>
              <span className="sr-only">Página anterior</span>
            </Link>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={n === 1 ? '/blog' : `/blog?page=${n}`}
                aria-current={n === currentPage ? 'page' : undefined}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium transition-colors ${focusRing} ${
                  n === currentPage
                    ? 'bg-white text-slate-950'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                {n}
              </Link>
            ))}

            <Link
              href={
                currentPage < totalPages ? `/blog?page=${currentPage + 1}` : '#'
              }
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors ${focusRing} ${
                currentPage === totalPages
                  ? 'pointer-events-none border-white/5 text-slate-700'
                  : 'border-white/10 text-slate-300 hover:border-sky-400/40 hover:text-sky-300'
              }`}
            >
              <span aria-hidden="true">→</span>
              <span className="sr-only">Página siguiente</span>
            </Link>
          </nav>
        )}

        {posts.length === 0 && (
          <p className="mt-14 text-slate-400">
            Pronto vamos a publicar el primer artículo por aquí.
          </p>
        )}
      </section>
    </main>
  );
}
