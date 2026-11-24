/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Checks, Container, CtaBand, LogoRow, ProjectCard } from '../../components/site/ui';
import { BookingToast, BrowserShot, ClinicPanelMock, DashMock, FlowMock, FlowToast, IPhone, SaleCard } from '../../components/site/mocks';
import { CireliaMark } from '../../components/cirelia/Logo';
import { DIAGNOSTIC, PROJECTS, SERVICES, type ServiceId } from '@/lib/site';
import { CIRELIA_DEMO } from '@/lib/cirelia/plans';

/*
 * Inicio (v5 «Flow»). El orden cuenta una historia:
 * qué hacemos → con quién → cada servicio con su ejemplo → cómo trabajamos → lo hecho → quién está detrás → conversemos.
 * Las piezas de la portada se conectan con líneas finas por donde viaja un punto: el «flow» de Nexflow.
 */

const svc = (id: ServiceId) => SERVICES.find((s) => s.id === id)!;

/** Portada: el collage conectado. Todo dentro de una caja cuadrada; las líneas usan la misma escala (0–100). */
function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem]" aria-hidden>
      <svg className="flow flow-draw in" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path id="f1" d="M7 14 C 3 32, 3 50, 9 64" />
        <path id="f2" d="M44 78 C 55 78, 59 70, 70 70" />
        <path id="f3" className="flow-accent" d="M60 67 C 60 80, 52 90, 40 92" />
        <circle className="flow-anim" r="0.9"><animateMotion dur="5.5s" repeatCount="indefinite" begin="1.6s" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1"><mpath href="#f1" /></animateMotion></circle>
        <circle className="flow-anim" r="0.9"><animateMotion dur="4.5s" repeatCount="indefinite" begin="2.4s" keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1"><mpath href="#f2" /></animateMotion></circle>
      </svg>
      <div className="pop absolute left-[14%] top-[10%] w-[86%]" style={{ ['--d' as string]: '100ms' }}>
        <BrowserShot url="bukuecr.com" src="/proyectos/bukue.webp" eager live="https://www.bukuecr.com/" />
      </div>
      <div className="pop absolute left-0 top-[1%] w-[56%] sm:w-[50%]" style={{ ['--d' as string]: '450ms' }}><FlowToast /></div>
      <div className="pop absolute right-0 top-[40%] w-[27%]" style={{ ['--d' as string]: '300ms' }}><IPhone src="/proyectos/bukue-movil.webp" eager live="https://www.bukuecr.com/" /></div>
      <div className="pop absolute left-[2%] top-[66%] w-[44%]" style={{ ['--d' as string]: '600ms' }}><SaleCard /></div>
    </div>
  );
}

/** Una fila de servicio: texto a un lado, su ejemplo al otro. */
function ServiceRow({ id, flip, visual, extra }: { id: ServiceId; flip?: boolean; visual: React.ReactNode; extra?: React.ReactNode }) {
  const s = svc(id);
  return (
    <article id={id} className={`svc-row scroll-mt-24 ${flip ? 'flip' : ''}`} data-tone={id}>
      <div data-rv data-rv-from={flip ? 'right' : 'left'}>
        <span className="tone-tag"><span className="tone-dot" />{s.name}</span>
        <h3 className="t-h2 mt-6">{s.promise}</h3>
        <p className="t-body mt-4">{s.forWho}</p>
        <Checks className="mt-6" items={s.bullets.slice(0, 3)} />
        {extra}
        <Link href={s.href} className="btn btn-line mt-8">Ver {s.short.toLowerCase()} <ArrowRight size={16} className="arrow" /></Link>
      </div>
      <div className="svc-visual" data-rv="1" data-rv-from="scale">{visual}</div>
    </article>
  );
}

export default function Home() {
  const featured = PROJECTS.slice(0, 4);
  // Nombres cortos para que las cinco etiquetas de la portada entren en una sola fila.
  const HERO_CHIP: Record<ServiceId, string> = { web: 'Sitios web', cirelia: 'Tiendas', automatizacion: 'Automatización', apps: 'Apps' };
  const cirelia = svc('cirelia');
  return (
    <>
      {/* 1 · Portada */}
      <section className="relative overflow-hidden">
        <div className="gridbg gridbg-fade absolute inset-0 -z-10" aria-hidden />
        <Container className="pt-14 sm:pt-20 pb-16 sm:pb-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 rise">
              <h1 className="t-display">Sitios, tiendas y sistemas que trabajan por tu negocio.</h1>
              <p className="t-lead mt-7 max-w-xl">Somos un estudio de Costa Rica. Diseñamos, construimos y nos quedamos para que funcione: tu sitio web, tu tienda con caja e inventario, tus procesos en Microsoft 365 y las apps que tu operación necesita.</p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Link href={DIAGNOSTIC.href} className="btn btn-ink">Agendar diagnóstico gratis <ArrowRight size={16} className="arrow" /></Link>
                <Link href="/proyectos" className="btn btn-line">Ver proyectos</Link>
              </div>
              <ul className="hero-chips mt-10 flex flex-wrap gap-1.5" aria-label="Servicios">
                {SERVICES.map((s) => (
                  <li key={s.id} data-tone={s.id}><a href={`#${s.id}`} className="tone-tag hover:border-[var(--tone)] transition-colors"><span className="tone-dot" />{HERO_CHIP[s.id]}</a></li>
                ))}
                <li data-tone="clinicas"><Link href="/clinicas" className="tone-tag hover:border-[var(--tone)] transition-colors"><span className="tone-dot" />Clínicas</Link></li>
              </ul>
            </div>
            <div className="lg:col-span-6"><HeroCollage /></div>
          </div>
        </Container>
      </section>

      {/* 2 · Clientes */}
      <section aria-label="Clientes" className="border-y b" style={{ background: 'var(--card)' }}>
        <Container className="py-12 sm:py-14">
          <p className="text-center t-small" data-rv>Negocios de Costa Rica que ya trabajan con nosotros</p>
          <LogoRow className="mt-9" />
        </Container>
      </section>

      {/* 3 · Qué hacemos: un servicio por fila, cada uno con su ejemplo */}
      <section className="pt-20 sm:pt-28">
        <Container>
          <div className="max-w-3xl" data-rv>
            <h2 className="t-h1">Cuatro servicios que se conectan entre sí.</h2>
            <p className="t-lead mt-6 max-w-2xl">Podés empezar por uno. Cuando el negocio crece, el sitio, la tienda, los procesos y las apps se hablan sin que tengás que pasar datos a mano.</p>
          </div>

          <div className="mt-14">
            <ServiceRow id="web" visual={
              <div className="relative pb-[12%] pr-[16%]">
                <BrowserShot url="derechoshumanosconlore.org" src="/proyectos/lorena.webp" live="https://derechoshumanosconlore.org/" />
                <div className="absolute right-0 bottom-0 w-[30%]"><IPhone src="/proyectos/lorena-movil.webp" live="https://derechoshumanosconlore.org/" /></div>
              </div>
            } />
          </div>
        </Container>

        {/* Cirelia Business: nuestro producto, en bloque oscuro */}
        <div id="cirelia" className="scroll-mt-24 px-4 sm:px-6 my-6" data-tone="cirelia">
          <div className="block-dark gridbg relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem]">
            <div className="grid lg:grid-cols-12">
              <div className="p-8 sm:p-14 lg:col-span-5" data-rv data-rv-from="left">
                <span className="inline-flex items-center gap-2.5"><CireliaMark size={26} /><span className="text-[1.05rem] font-semibold tracking-[-0.02em]">Cirelia <span className="font-normal opacity-60">Business</span></span></span>
                <h3 className="t-h2 mt-8">Tu tienda, tu caja y tu inventario en un solo panel.</h3>
                <p className="t-lead mt-5">Es nuestra plataforma. Nació para una tienda real que vendía en el local, por WhatsApp y en redes con el inventario en tres lugares. Hoy la usan otros negocios.</p>
                <Checks className="mt-7" items={['Un solo inventario para el local, WhatsApp y la web', 'Caja en compu, tablet o celular', 'Planes desde USD 99.99 al mes; la dejamos lista nosotros']} />
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link href={cirelia.href} className="btn btn-ink">Ver planes y precios <ArrowRight size={16} className="arrow" /></Link>
                  <a href={CIRELIA_DEMO} target="_blank" rel="noopener noreferrer" className="btn btn-line">Probar la demo <ArrowUpRight size={16} /></a>
                </div>
              </div>
              <div className="relative min-h-[18rem] lg:col-span-7" data-rv="2" data-rv-from="right">
                <div className="lg:absolute lg:inset-y-14 lg:left-4 lg:-right-20 px-6 pb-8 sm:px-14 lg:p-0">
                  <div className="relative">
                    <BrowserShot url="tutienda.com/admin" src="/cirelia/panel-light.webp" alt="Panel de Cirelia Business" />
                    <SaleCard className="hidden sm:block absolute -bottom-8 -left-6 w-[15rem]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Container>
          <ServiceRow id="automatizacion" flip visual={
            <div className="grid gap-4">
              <FlowMock />
              <div className="sm:pl-[18%]"><DashMock /></div>
            </div>
          } />
          <ServiceRow id="apps" visual={
            <ClinicPanelMock />
          } />
        </Container>
      </section>

      {/* Clínicas: el segmento donde ya tenemos un sistema completo funcionando */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24" data-tone="clinicas">
        <div className="clinic-band gridbg relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem]">
          <div className="grid lg:grid-cols-12 lg:items-center">
            <div className="p-8 sm:p-14 lg:col-span-5" data-rv data-rv-from="left">
              <span className="tone-tag"><span className="tone-dot" />Clínicas y consultorios</span>
              <h2 className="t-h2 mt-6">Reservas en línea y un panel para toda la clínica.</h2>
              <p className="t-lead mt-5">Tus pacientes agendan solos en tu sitio. Vos ves la agenda, el expediente de cada paciente, a quién llamar y los ingresos del mes, en un solo lugar.</p>
              <Checks className="mt-7" items={['El paciente ve solo las horas libres', 'Aviso al instante cuando entra una cita', 'Confirmación por WhatsApp en un toque']} />
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/clinicas" className="btn btn-ink">Ver el sistema para clínicas <ArrowRight size={16} className="arrow" /></Link>
              </div>
            </div>
            <div className="lg:col-span-7 px-6 pb-10 sm:px-14 lg:py-14 lg:pl-0" data-rv="1" data-rv-from="right">
              <div className="relative pb-[10%] pr-[12%]">
                <BrowserShot url="centropodologicoximenaalvarado.com" src="/proyectos/clinica.webp" live="https://centropodologicoximenaalvarado.com/" />
                <div className="absolute right-0 bottom-0 w-[26%]"><IPhone src="/proyectos/clinica-movil.webp" live="https://centropodologicoximenaalvarado.com/" /></div>
                <BookingToast className="absolute left-[-3%] bottom-[2%] w-[58%] sm:w-[46%] hidden sm:flex" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Cómo trabajamos (es una secuencia real: por eso va numerada y conectada) */}
      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }}>
        <Container>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7" data-rv>
              <h2 className="t-h1">Así trabajamos. Sin sorpresas.</h2>
            </div>
            <p className="t-lead lg:col-span-5" data-rv="1">Primero entendemos cómo vendés y cómo trabaja tu equipo. Después proponemos solo lo que hace falta, con precio y fecha por escrito.</p>
          </div>
          <ol className="stepper mt-16" style={{ ['--n' as string]: 4 }} data-rv>
            {[
              { t: 'Diagnóstico gratis', d: '30 minutos para revisar tu sitio o tu proceso. Te decimos qué conviene hacer primero.' },
              { t: 'Propuesta por escrito', d: 'Alcance, plazo y precio cerrados. Sabés el total antes de empezar.' },
              { t: 'Construcción por etapas', d: 'Ves avances desde la primera semana y opinás en cada etapa.' },
              { t: 'Entrega y acompañamiento', d: 'Te capacitamos, medimos si funciona y seguimos disponibles para ajustes.' },
            ].map((s, i) => (
              <li key={s.t} style={{ ['--i' as string]: i }}>
                <span className="step-node">{i + 1}</span>
                <h3 className="mt-0 md:mt-6 text-[1.12rem] font-semibold tracking-[-0.02em]">{s.t}</h3>
                <p className="mt-2 t-body text-[.95rem]">{s.d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 5 · Proyectos */}
      <Container className="py-20 sm:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl" data-rv>
            <h2 className="t-h1">Proyectos en uso.</h2>
            <p className="t-lead mt-5">Sitios y plataformas que hoy atienden clientes reales en Costa Rica.</p>
          </div>
          <Link href="/proyectos" className="btn btn-line shrink-0" data-rv>Ver todos los proyectos <ArrowRight size={16} className="arrow" /></Link>
        </div>
        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2">
          {featured.map((p, i) => <ProjectCard key={p.id} p={p} i={i % 2} />)}
        </div>
      </Container>

      {/* 6 · Quién está detrás + cómo trabajamos */}
      <section className="border-t b py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5" data-rv data-rv-from="left">
              <h2 className="t-h1">Un estudio pequeño, a propósito.</h2>
              <p className="t-lead mt-6">Somos un equipo que quiere darle a los negocios de Costa Rica herramientas de calidad: bien hechas, fáciles de usar y con alguien que responde. Hablás directamente con quien diseña y construye tu proyecto.</p>
              <div className="surface mt-8 flex items-center gap-4 p-4">
                <img src="/merloy.webp" alt="Merloy Flores" width={56} height={56} className="avatar h-14 w-14" loading="lazy" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold">Merloy Flores</p>
                  <p className="text-[.88rem] muted">Fundador. Desarrollo web y automatización.</p>
                </div>
                <Link href="/nosotros" className="icon-btn" aria-label="Conocer a Nexflow"><ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="lg:col-span-7 lg:pt-3" data-rv="1">
              <ul className="grid gap-8 sm:grid-cols-3">
                {[
                  ['Precio cerrado', 'Sabés el total antes de empezar, por escrito.'],
                  ['Todo a tu nombre', 'Dominio, cuentas y código quedan a nombre de tu negocio.'],
                  ['Seguimos después', 'Te capacitamos y seguimos disponibles para ajustes.'],
                ].map(([t, d]) => (
                  <li key={t} className="border-t b pt-5">
                    <p className="font-semibold tracking-[-0.01em]">{t}</p>
                    <p className="mt-2 text-[.94rem] leading-relaxed ink2">{d}</p>
                  </li>
                ))}
              </ul>
              <Link href="/como-trabajamos" className="btn btn-line mt-10">Cómo trabajamos y con qué <ArrowRight size={16} className="arrow" /></Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 7 · Conversemos */}
      <CtaBand />
    </>
  );
}
