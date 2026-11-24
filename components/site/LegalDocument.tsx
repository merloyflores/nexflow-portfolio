import type { ReactNode } from 'react';
import Link from 'next/link';
import { Container } from './ui';
import { EMAIL } from '@/lib/site';

export type LegalSection = { id: string; title: string; content: ReactNode };

type Props = { title: string; updated: string; intro?: string; sections: LegalSection[]; other: { href: string; label: string } };

/** Documento legal (términos, privacidad): índice a la izquierda y texto con estilo de lectura. */
export default function LegalDocument({ title, updated, intro, sections, other }: Props) {
  return (
    <Container className="pt-16 sm:pt-24 pb-20 sm:pb-28">
      <header className="max-w-3xl border-b b pb-10">
        <h1 className="t-h1">{title}</h1>
        <p className="t-small mt-4">Última actualización: {updated}</p>
        {intro && <p className="t-lead mt-6">{intro}</p>}
      </header>
      <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
        <nav aria-label="Contenido" className="hidden lg:col-span-3 lg:block">
          <div className="sticky top-24">
            <p className="text-[.88rem] font-semibold">En este documento</p>
            <ol className="mt-4 space-y-1 border-l b">
              {sections.map((s, i) => (
                <li key={s.id}><a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[.88rem] muted hover:text-[var(--ink)] hover:border-[var(--ink)]">{i + 1}. {s.title}</a></li>
              ))}
            </ol>
          </div>
        </nav>
        <div className="max-w-3xl space-y-12 lg:col-span-9">
          {sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="text-[1.2rem] font-semibold tracking-[-0.015em]">{i + 1}. {s.title}</h2>
              <div className="prose mt-4 !text-[1rem]">{s.content}</div>
            </section>
          ))}
          <div className="surface p-6">
            <p className="ink2">¿Tenés dudas sobre este documento? Escribinos a <a href={`mailto:${EMAIL}`} className="link">{EMAIL}</a>.</p>
            <p className="mt-3 text-[.9rem] muted">También podés leer: <Link href={other.href} className="link">{other.label}</Link></p>
          </div>
        </div>
      </div>
    </Container>
  );
}
