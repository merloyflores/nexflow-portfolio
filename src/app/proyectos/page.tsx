/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { IPhone } from '../../../components/site/mocks';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Browser, Checks, Container, CtaBand, LogoRow, PageHero } from '../../../components/site/ui';
import { PROJECTS, SERVICES } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Proyectos',
  description: 'Sitios, tiendas y plataformas que hicimos para negocios de Costa Rica: el reto, lo que construimos y el resultado.',
};

export default function Page() {
  return (
    <>
      <PageHero title={<>Proyectos en uso.</>}
        sub="Cada proyecto empezó con un problema concreto. Acá está el reto, lo que construimos y lo que cambió para el negocio." />

      <Container className="pb-8">
        <nav aria-label="Proyectos" className="flex flex-wrap gap-2" data-rv>
          {PROJECTS.map((p) => <a key={p.id} href={`#${p.id}`} className="chip">{p.name}</a>)}
        </nav>
      </Container>

      <div className="divide-y" style={{ borderColor: 'var(--line)' }}>
        {PROJECTS.map((p, i) => {
          const service = SERVICES.find((s) => s.id === p.service)!;
          return (
            <section key={p.id} id={p.id} className="scroll-mt-20 py-16 sm:py-24 border-t b">
              <Container>
                <div className={`grid gap-10 lg:grid-cols-12 lg:items-center ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative lg:col-span-7" data-rv>
                    <div className="surface-2 p-4 sm:p-6">
                      <Browser url={p.host} src={p.img} alt={`Sitio de ${p.name}`} live={p.live === false ? undefined : p.url} />
                    </div>
                    {p.imgMobile && (
                      <div className="absolute -bottom-6 right-4 hidden w-[22%] sm:block">
                        <IPhone src={p.imgMobile} live={p.live === false ? undefined : p.url} />
                      </div>
                    )}
                  </div>
                  <div className="lg:col-span-5" data-rv="1">
                    <p className="text-[.9rem] muted"><Link href={service.href} className="hover:text-[var(--ink)]">{service.name}</Link> · <span className="num">{p.year}</span></p>
                    <h2 className="t-h2 mt-3">{p.name}</h2>
                    <p className="mt-2 font-medium ink2">{p.kind}</p>
                    <dl className="mt-8 space-y-6">
                      <div><dt className="text-[.85rem] font-semibold">El reto</dt><dd className="t-body mt-1.5">{p.challenge}</dd></div>
                      <div><dt className="text-[.85rem] font-semibold">Lo que hicimos</dt><dd className="t-body mt-1.5">{p.solution}</dd></div>
                      <div><dt className="text-[.85rem] font-semibold">Lo que cambió</dt><dd className="mt-3"><Checks items={p.results} /></dd></div>
                    </dl>
                    <a href={p.url} target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm mt-9">Visitar el sitio <ArrowUpRight size={15} /></a>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      <Container className="py-20 sm:py-24 border-t b">
        <p className="text-center t-small" data-rv>Negocios que trabajan con nosotros</p>
        <LogoRow className="mt-10" />
      </Container>

      <CtaBand title={<>¿El próximo es el tuyo?</>} />
    </>
  );
}
