import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Checks, Container, CtaBand, Faq, Head, ProjectCard, ServiceGrid, Steps, WaButton, projectsFor } from './ui';
import { ServiceVisual } from './mocks';
import { DIAGNOSTIC, SERVICES, type ServiceId } from '@/lib/site';

/**
 * Plantilla de página de servicio. Todas las líneas usan la misma estructura:
 * portada → para quién y qué incluye → lo que entregamos → cómo trabajamos → ejemplos → preguntas → otros servicios → conversemos.
 * Para sumar un servicio nuevo: agregarlo en SERVICES (src/lib/site.ts) y crear su página con esta plantilla.
 */
export type ServiceContent = {
  id: ServiceId;
  title: React.ReactNode;
  sub: string;
  /** Situaciones en las que este servicio calza («si te pasa esto…»). */
  fits: string[];
  /** Lo que se entrega, en bloques con título y descripción. */
  deliver: { t: string; d: string }[];
  steps: { t: string; d: string }[];
  /** Ejemplos cuando todavía no hay proyectos publicados de esta línea. */
  examples?: { t: string; d: string }[];
  faq: { q: string; a: string }[];
  /** Algo propio de la página (por ejemplo, la sección de Android e iOS). */
  extra?: React.ReactNode;
};

export default function ServicePage({ c }: { c: ServiceContent }) {
  const s = SERVICES.find((x) => x.id === c.id)!;
  const projects = projectsFor(c.id);
  return (
    <>
      {/* Portada: tono del servicio, titular y su ejemplo real (sin fotos de stock). */}
      <section className="relative overflow-hidden" data-tone={c.id}>
        <div className="gridbg gridbg-fade absolute inset-0 -z-10" aria-hidden />
        <Container className="pt-14 sm:pt-20 pb-14 sm:pb-20">
          <div className="max-w-3xl rise">
            <span className="tone-tag"><span className="tone-dot" />{s.name}</span>
            <h1 className="t-h1 mt-6">{c.title}</h1>
            <p className="t-lead mt-6 max-w-2xl">{c.sub}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <WaButton text={s.wa} />
              <Link href={DIAGNOSTIC.href} className="btn btn-line">Diagnóstico gratis</Link>
            </div>
          </div>
          <div className="svc-visual mt-14" data-rv="1" data-rv-from="scale"><ServiceVisual id={c.id} /></div>
        </Container>
      </section>

      {/* Para quién + qué incluye */}
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Head title={<>¿Es para vos?</>} sub={s.forWho} />
          </div>
          <div className="lg:col-span-7 grid gap-10 sm:grid-cols-2">
            <div data-rv>
              <p className="text-[.85rem] font-semibold">Te sirve si…</p>
              <Checks className="mt-5" items={c.fits} />
            </div>
            <div data-rv="1">
              <p className="text-[.85rem] font-semibold">Siempre incluye</p>
              <Checks className="mt-5" items={s.bullets} />
            </div>
          </div>
        </div>
      </Container>

      {/* Lo que entregamos */}
      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }}>
        <Container>
          <Head title={<>Lo que te entregamos.</>} />
          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {c.deliver.map((d, i) => (
              <div key={d.t} className="border-t b pt-6" data-rv={i % 3}>
                <h3 className="text-[1.1rem] font-semibold tracking-[-0.015em]">{d.t}</h3>
                <p className="mt-2.5 t-body">{d.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {c.extra}

      {/* Cómo trabajamos */}
      <Container className="py-20 sm:py-28">
        <Head title={<>Cómo lo hacemos.</>} sub="Sabés qué pasa en cada etapa, cuánto cuesta y cuándo termina. Sin sorpresas." />
        <div className="mt-14"><Steps items={c.steps} /></div>
      </Container>

      {/* Proyectos o ejemplos */}
      {projects.length > 0 ? (
        <Container className="pb-20 sm:pb-28">
          <Head title={<>Hecho con esto.</>} />
          <div className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-2">
            {projects.map((p, i) => <ProjectCard key={p.id} p={p} i={i % 2} />)}
          </div>
        </Container>
      ) : c.examples ? (
        <Container className="pb-20 sm:pb-28">
          <Head title={<>Ejemplos de lo que resolvemos.</>} sub="Casos típicos que vemos en empresas de Costa Rica." />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {c.examples.map((e, i) => (
              <div key={e.t} className="surface p-7" data-rv={i % 2}>
                <h3 className="text-[1.08rem] font-semibold tracking-[-0.015em]">{e.t}</h3>
                <p className="mt-2.5 t-body">{e.d}</p>
              </div>
            ))}
          </div>
        </Container>
      ) : null}

      {/* Preguntas */}
      <section className="border-t b py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4"><Head title={<>Preguntas frecuentes.</>} /></div>
            <div className="lg:col-span-8" data-rv><Faq items={c.faq} /></div>
          </div>
        </Container>
      </section>

      {/* Otros servicios */}
      <section className="py-20 sm:py-24" style={{ background: 'var(--bg-2)' }}>
        <Container>
          <div className="flex items-end justify-between gap-6">
            <Head title="También hacemos" />
            <Link href="/como-trabajamos" className="link hidden sm:inline-flex items-center gap-1" data-rv>Cómo lo construimos <ArrowRight size={15} /></Link>
          </div>
          <div className="mt-10"><ServiceGrid exclude={c.id} /></div>
        </Container>
      </section>

      <div className="pt-20 sm:pt-28"><CtaBand wa={s.wa} /></div>
    </>
  );
}
