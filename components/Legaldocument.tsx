import type { ReactNode } from 'react';
import Link from 'next/link';
import { display } from '../src/lib/fonts';

export type LegalSection = { id: string; title: string; content: ReactNode };

type Props = {
  title: string;
  updated: string;
  intro?: string;
  sections: LegalSection[];
  other: { href: string; label: string };
};

const HEADING = 'font-[family-name:var(--font-display)]';

export default function LegalDocument({ title, updated, intro, sections, other }: Props) {
  return (
    <main className={`${display.variable} min-h-screen bg-slate-950 pb-24 pt-32 text-slate-300 md:pt-40`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <header className="max-w-3xl border-b border-white/10 pb-10">
          <h1 className={`${HEADING} text-4xl font-semibold tracking-tight text-white sm:text-5xl`}>
            {title}
          </h1>
          <p className="mt-4 text-sm text-slate-400">Última actualización: {updated}</p>
          {intro && <p className="mt-6 text-lg leading-relaxed text-slate-400">{intro}</p>}
        </header>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Índice */}
          <nav aria-label="Contenido" className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-28">
              <p className="text-sm font-medium text-white">En este documento</p>
              <ol className="mt-4 space-y-1 border-l border-white/10">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-slate-400 transition-colors hover:border-sky-400 hover:text-white"
                    >
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          {/* Contenido */}
          <div className="max-w-3xl space-y-12 lg:col-span-9">
            {sections.map((s, i) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className={`${HEADING} text-xl font-semibold tracking-tight text-white`}>
                  {i + 1}. {s.title}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-slate-300 [&_a]:text-white [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-sky-300 [&_li]:text-slate-400 [&_strong]:font-semibold [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
                  {s.content}
                </div>
              </section>
            ))}

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6">
              <p className="text-slate-300">
                ¿Tienes dudas sobre este documento? Escríbenos a{' '}
                <a
                  href="mailto:merloy123@gmail.com"
                  className="text-white underline underline-offset-4 hover:text-sky-300"
                >
                  merloy123@gmail.com
                </a>
                .
              </p>
              <p className="mt-3 text-sm text-slate-400">
                También puedes leer:{' '}
                <Link href={other.href} className="text-white underline underline-offset-4 hover:text-sky-300">
                  {other.label}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}