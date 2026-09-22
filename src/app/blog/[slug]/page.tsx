import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { CoverArt } from '../../../../components/blog/CoverArt';
import { ViewTracker } from '../../../../components/blog/ViewTracker';

const HEADING = 'font-[family-name:var(--font-display)]';
const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950';

// Cambia esto por tu dominio real en cuanto lo compres (revisa también
// SITE_URL en src/app/sitemap.ts, que usa la misma idea).
const SITE_URL = 'https://nexflow-portfolio.vercel.app';

const TAG_GLOW: Record<string, string> = {
  'Páginas web': '#38BDF8',
  Pymes: '#34D399',
  'Costa Rica': '#38BDF8',
  Automatización: '#F97316',
  'Power Platform': '#F97316',
  'Power BI': '#A78BFA',
  Datos: '#A78BFA',
  'Marketing digital': '#34D399',
  'Auditoría técnica': '#38BDF8',
  'Estrategia digital': '#34D399',
};

function glowFor(tags: string[]): string {
  for (const tag of tags) {
    if (TAG_GLOW[tag]) return TAG_GLOW[tag];
  }
  return '#38BDF8';
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Nexflow Digital`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const glow = glowFor(post.tags);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Nexflow Digital',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nexflow Digital',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ViewTracker slug={post.slug} />

      {/* Encabezado con glow de marca, a tono con el resto del sitio */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden"
      >
        <div
          className="absolute left-1/2 top-[-260px] h-[560px] w-[820px] -translate-x-1/2 rounded-full blur-[130px]"
          style={{ backgroundColor: glow, opacity: 0.14 }}
        />
      </div>

      <div className="relative mt-16 aspect-[21/9] w-full overflow-hidden sm:mt-20">
        <CoverArt kind={post.cover} className="h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
      </div>

      <article className="mx-auto max-w-3xl px-6 pb-24 pt-10">
        <Link
          href="/blog"
          className={`inline-flex items-center gap-1 text-sm font-medium text-slate-400 transition-colors hover:text-sky-400 ${focusRing} rounded`}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="none"
            className="h-4 w-4"
          >
            <path
              d="M16 10H4M9 5l-5 5 5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Volver al blog
        </Link>

        {post.tags.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <h1
          className={`${HEADING} mt-5 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-5xl`}
        >
          {post.title}
        </h1>

        <p className="mt-5 max-w-xl text-base text-slate-400 sm:text-lg">
          {post.excerpt}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-500">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: glow }}
          />
          <span className="font-medium text-slate-300">Nexflow Digital</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>
            {new Date(`${post.date}T12:00:00`).toLocaleDateString('es-CR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </time>
          <span aria-hidden="true">·</span>
          <span>{post.readingTime}</span>
        </div>

        <div
          className="nf-article nf-article-lead mt-10"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <p className={`${HEADING} text-lg font-semibold text-white`}>
            ¿Hablamos de tu proyecto?
          </p>
          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Si algo de este artículo te hizo pensar en tu propio negocio,
            escríbeme y lo conversamos sin compromiso.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://wa.me/message/U3ZXMIXGALZJI1"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-transform hover:scale-[1.02] ${focusRing}`}
            >
              Escribir por WhatsApp
            </a>
            <Link
              href="/contacto"
              className={`inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:border-sky-400/40 ${focusRing}`}
            >
              Ir a contacto
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        .nf-article {
          color: rgb(203 213 225);
          font-size: 1rem;
          line-height: 1.75;
        }
        .nf-article h2 {
          font-family: var(--font-display);
          color: #ffffff;
          font-size: 1.375rem;
          font-weight: 600;
          margin-top: 2.25rem;
          margin-bottom: 0.75rem;
          letter-spacing: -0.01em;
        }
        .nf-article h3 {
          font-family: var(--font-display);
          color: #ffffff;
          font-size: 1.125rem;
          font-weight: 600;
          margin-top: 1.75rem;
          margin-bottom: 0.5rem;
        }
        .nf-article p {
          margin-top: 1rem;
          margin-bottom: 1rem;
        }
        .nf-article ul,
        .nf-article ol {
          margin-top: 1rem;
          margin-bottom: 1rem;
          padding-left: 1.25rem;
        }
        .nf-article ul {
          list-style-type: disc;
        }
        .nf-article ol {
          list-style-type: decimal;
        }
        .nf-article li {
          margin-top: 0.375rem;
        }
        .nf-article li::marker {
          color: #38bdf8;
        }
        .nf-article strong {
          color: #ffffff;
          font-weight: 600;
        }
        .nf-article a {
          color: #38bdf8;
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .nf-article a:hover {
          color: #7dd3fc;
        }
        .nf-article blockquote {
          border-left: 2px solid rgba(56, 189, 248, 0.4);
          padding-left: 1rem;
          margin: 1.5rem 0;
          color: rgb(148 163 184);
          font-style: italic;
        }
        .nf-article code {
          background: rgba(255, 255, 255, 0.06);
          border-radius: 0.25rem;
          padding: 0.125rem 0.375rem;
          font-size: 0.875em;
        }
        .nf-article-lead > p:first-of-type {
          font-size: 1.125rem;
          line-height: 1.8;
          color: rgb(226 232 240);
        }
        @media (min-width: 640px) {
          .nf-article-lead > p:first-of-type::first-letter {
            float: left;
            font-family: var(--font-display);
            font-size: 3.5rem;
            line-height: 0.85;
            font-weight: 600;
            color: #ffffff;
            padding-right: 0.5rem;
            padding-top: 0.25rem;
          }
        }
      `}</style>
    </main>
  );
}