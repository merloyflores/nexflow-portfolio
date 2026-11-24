/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Container, CtaBand, Head, PageHero, LogoRow } from '../../../components/site/ui';
import { TeamFlow } from '../../../components/site/mocks';
import { PRINCIPLES, SOCIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Nexflow Digital es un estudio de tecnología en Costa Rica: qué nos mueve, cómo trabajamos y quién está detrás.',
};

export default function Page() {
  const linkedin = SOCIAL.find((s) => s.id === 'linkedin')!.href;
  return (
    <>
      <PageHero title={<>Un estudio pequeño, a propósito.</>}
        sub="Hablás directamente con quien diseña y construye tu proyecto. Sin capas de intermediarios, sin promesas que no podemos cumplir." />

      <Container><div className="svc-visual" data-rv="1" data-rv-from="scale"><div className="py-4 sm:py-8"><TeamFlow /></div></div></Container>

      {/* Por qué existimos */}
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><Head title={<>Por qué existimos.</>} /></div>
          <div className="lg:col-span-7 space-y-5 t-lead" data-rv>
            <p>Muchos negocios en Costa Rica no tienen un departamento de sistemas. Tienen un sitio que no les trae clientes, el inventario en tres lugares y un equipo que pasa horas copiando datos de un Excel a otro.</p>
            <p>Nexflow nació para resolver eso con tecnología útil: la necesaria, bien hecha y explicada en palabras simples. Trabajamos con pocos proyectos a la vez para poder cuidar cada uno.</p>
          </div>
        </div>
      </Container>

      {/* Principios */}
      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }}>
        <Container>
          <Head title={<>Cómo trabajamos.</>} />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {PRINCIPLES.map((p, i) => (
              <div key={p.n} className="border-t b pt-7" data-rv={i}>
                <h3 className="t-h3">{p.t}</h3>
                <p className="mt-3 t-body">{p.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lo que nos mueve (sin historia en fechas: lo que importa es cómo trabajamos hoy) */}
      <section className="px-4 sm:px-6 py-20 sm:py-28">
        <div className="block-dark gridbg mx-auto max-w-6xl rounded-[1.75rem] px-6 py-16 sm:px-14 sm:py-20" data-rv>
          <p className="t-h2 max-w-4xl">Somos un equipo que quiere darle a cada negocio herramientas de calidad: bien hechas, fáciles de usar y con alguien que responde cuando hace falta.</p>
        </div>
      </section>

      {/* Quién está detrás */}
      <Container className="pb-20 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5"><Head title={<>Quién está detrás.</>} /></div>
          <div className="lg:col-span-7" data-rv>
            <div className="surface p-6 sm:p-8">
              <div className="flex items-center gap-5">
                <img src="/merloy.webp" alt="Merloy Flores" width={72} height={72} className="avatar h-[72px] w-[72px]" loading="lazy" />
                <div className="flex-1">
                  <p className="text-[1.1rem] font-semibold">Merloy Flores</p>
                  <p className="text-[.92rem] muted">Fundador de Nexflow Digital</p>
                </div>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="LinkedIn de Merloy Flores"><FaLinkedinIn size={15} /></a>
              </div>
              <p className="t-body mt-6">Desarrollo web, automatización con Power Platform y análisis de datos en una sola mano. Sin intermediarios ni traspasos entre equipos: tu proyecto conserva el contexto de principio a fin.</p>
              <ul className="mt-5 flex flex-wrap gap-2 text-[.88rem]">
                {['Pymes de Costa Rica y clientes internacionales', 'Atención en español e inglés'].map((t) => <li key={t} className="chip !cursor-default">{t}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      {/* Cómo trabajamos (el detalle de herramientas vive en su propia página) */}
      <section className="border-y b py-16 sm:py-20" style={{ background: 'var(--card)' }}>
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between" data-rv>
            <div className="max-w-2xl">
              <h2 className="t-h2">Cómo trabajamos y con qué.</h2>
              <p className="t-lead mt-4">El proceso paso a paso, las herramientas explicadas sin tecnicismos y lo que queda a tu nombre.</p>
            </div>
            <Link href="/como-trabajamos" className="btn btn-ink shrink-0">Ver cómo trabajamos <ArrowRight size={16} className="arrow" /></Link>
          </div>
        </Container>
      </section>

      <Container className="py-20 sm:py-24">
        <p className="text-center t-small" data-rv>Negocios que trabajan con nosotros</p>
        <LogoRow className="mt-10" />
      </Container>

      <CtaBand />
    </>
  );
}
