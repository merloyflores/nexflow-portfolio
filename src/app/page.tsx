// app/page.tsx
import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClipboardList, FaWhatsapp } from 'react-icons/fa';
import {
  BarChart3,
  Check,
  Database,
  LayoutDashboard,
  Mail,
  Phone,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { display } from '../lib/fonts';
// Las mayúsculas de estos imports coinciden EXACTO con los nombres de tus archivos
// (en Vercel/Linux "Projectshowcase" y "ProjectShowcase" son archivos distintos).
import ProjectShowcase from '../../components/Projectshowcase';
import FlowStage from '../../components/Flowstage';
import ProcessTimeline from '../../components/Processtimeline';

/*
  SISTEMA DE COLOR (cada color significa algo)
  · Azul noche (slate-950)  → base
  · Blanco                  → acción (botones principales) y titulares
  · Celeste (sky)           → movimiento: solo aparece donde algo "fluye"
  · Verde esmeralda         → estado: en línea / completado
  · Morado, celeste y amarillo → SOLO dentro de Power Platform (son los colores de cada producto)
*/

const personalPhoto = '/FotoPerfil.png';
const FACE = '54% 28%'; // punto de la cara dentro de la foto (ajústalo si el avatar se ve descentrado)
const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';

const HEADING = 'font-[family-name:var(--font-display)]';
const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400';
const h2 = `${HEADING} text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]`;

const delay = (s: string) => ({ '--d': s }) as CSSProperties;

const ticker = [
  'Aprobaciones sin correos',
  'Facturas sin digitar',
  'Reservas en línea',
  'Reportes al instante',
  'Inventario al día',
  'Formularios en el celular',
  'Expedientes ordenados',
  'Alertas automáticas',
];

const services = [
  {
    icon: LayoutDashboard,
    title: 'Web y apps a la medida',
    promise: 'Sitios y plataformas que convierten visitas en clientes.',
    points: [
      'Sitios corporativos, landing pages y blogs',
      'Reservas, catálogos y paneles de administración',
      'SEO y velocidad de carga pensados desde el diseño',
    ],
    tools: 'Next.js, React, Tailwind CSS, Supabase',
  },
  {
    icon: Workflow,
    title: 'Automatización de procesos',
    promise: 'Flujos y apps internas que eliminan las tareas repetitivas.',
    points: [
      'Aprobaciones, facturas y expedientes sin intervención manual',
      'Apps móviles para captar datos en campo',
      'Alertas y notificaciones que llegan solas',
    ],
    tools: 'Power Automate, Power Apps',
  },
  {
    icon: BarChart3,
    title: 'Datos y dashboards',
    promise: 'Tableros que responden las preguntas de tu negocio.',
    points: [
      'KPIs claros desde Excel, SQL o SAP',
      'Modelado de datos con DAX',
      'Reportes interactivos, también en el celular',
    ],
    tools: 'Power BI, Dataverse, SQL Server',
  },
];

const powerSteps = [
  {
    icon: Smartphone,
    tool: 'Power Apps',
    title: 'Captura',
    text: 'Apps móviles y formularios para registrar datos en campo, con fotos, escaneo, GPS y hasta sin internet.',
    color: 'text-purple-400',
    tint: 'bg-purple-500/10',
  },
  {
    icon: Workflow,
    tool: 'Power Automate',
    title: 'Automatiza',
    text: 'Aprobaciones, facturas y expedientes que se mueven solos entre tus aplicaciones, sin errores de copiar y pegar.',
    color: 'text-sky-400',
    tint: 'bg-sky-500/10',
  },
  {
    icon: BarChart3,
    tool: 'Power BI',
    title: 'Mide',
    text: 'Dashboards con los KPIs de tu negocio y alertas automáticas cuando algo se sale de rango.',
    color: 'text-yellow-400',
    tint: 'bg-yellow-500/10',
  },
];

const processSteps = [
  {
    title: 'Auditoría gratis',
    text: 'Entendemos tu proceso, tus metas y qué te está costando más tiempo o dinero.',
  },
  {
    title: 'Propuesta a tu medida',
    text: 'Definimos alcance, plazos y un plan que se ajuste a tu presupuesto.',
  },
  {
    title: 'Construcción por etapas',
    text: 'Entregamos avances funcionales para que veas y ajustes sobre la marcha.',
  },
  {
    title: 'Lanzamiento y acompañamiento',
    text: 'Te capacitamos y seguimos disponibles para ajustes y mejoras.',
  },
];

const css = `
@keyframes nf-rise{from{transform:translateY(108%)}to{transform:none}}
@keyframes nf-fade-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes nf-slide{from{transform:translateX(-100%)}to{transform:translateX(400%)}}
@keyframes nf-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.nf-line{display:block;overflow:hidden;padding-bottom:.12em;margin-bottom:-.12em}
.nf-line>span{display:block;animation:nf-rise .9s cubic-bezier(.2,.7,.2,1) both}
.nf-line:nth-child(2)>span{animation-delay:.12s}
.nf-fade{animation:nf-fade-up .8s ease-out both;animation-delay:var(--d,0s)}
.nf-hairline{animation:nf-slide 7s linear infinite}
.nf-marquee{animation:nf-marquee 50s linear infinite}
.nf-marquee-wrap:hover .nf-marquee{animation-play-state:paused}
@media (prefers-reduced-motion:reduce){
  .nf-line>span,.nf-fade{animation:none}
  .nf-hairline{display:none}
  .nf-marquee{animation:none;width:auto!important;flex-wrap:wrap;justify-content:center;row-gap:.5rem}
  .nf-marquee>[aria-hidden="true"]{display:none}
}
`;

const fadeMask = 'linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)';

export default function Home() {
  return (
    <div className={`${display.variable} flex flex-col bg-slate-950 text-slate-300`}>
      <style>{css}</style>

      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        {/* Cuadrícula sutil que se desvanece */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(75% 70% at 50% 25%, #000, transparent)',
            WebkitMaskImage: 'radial-gradient(75% 70% at 50% 25%, #000, transparent)',
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-20">
            {/* Texto */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h1
                className={`${HEADING} text-[2.75rem] font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[4.25rem]`}
              >
                <span className="nf-line">
                  <span>Webs que venden.</span>
                </span>
                <span className="nf-line">
                  <span className="text-slate-500">Procesos que se hacen solos.</span>
                </span>
              </h1>

              <p
                className="nf-fade mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl"
                style={delay('.35s')}
              >
                En <span className="font-medium text-white">Nexflow Digital</span> desarrollamos sitios
                y aplicaciones en Next.js y automatizamos tu operación con Power Platform, para que tu
                equipo dedique su tiempo a crecer y no a repetir tareas.
              </p>

              <div
                className="nf-fade mt-10 flex w-full max-w-lg flex-col gap-4 sm:flex-row"
                style={delay('.5s')}
              >
                <Link
                  href="/contacto?tipo=auditoria"
                  className={`flex-1 rounded-xl bg-white px-7 py-4 text-center font-semibold text-slate-950 transition-colors hover:bg-sky-100 ${focusRing}`}
                >
                  Pedir auditoría gratis
                </Link>
                <Link
                  href="#proyectos"
                  className={`flex-1 rounded-xl border border-white/15 px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-white/5 ${focusRing}`}
                >
                  Ver proyectos
                </Link>
              </div>

              {/* Presencia humana, sin competir con el mensaje */}
              <div className="nf-fade mt-8 flex items-center gap-3 text-left" style={delay('.65s')}>
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15">
                  <Image
                    src={personalPhoto}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                    style={{ transform: 'scale(2.4)', transformOrigin: FACE }}
                  />
                </span>
                <p className="text-sm leading-snug text-slate-400">
                  <span className="block font-medium text-slate-200">Merloy Flores, fundador</span>
                  Hablas directo con quien construye tu proyecto.
                </p>
              </div>
            </div>

            {/* Flujo animado */}
            <div className="flex justify-center md:justify-end">
              <FlowStage />
            </div>
          </div>
        </div>

        {/* Hilo de luz que recorre el borde inferior */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px overflow-hidden bg-white/5">
          <div className="nf-hairline h-px w-1/4 bg-linear-to-r from-transparent via-sky-400 to-transparent" />
        </div>
      </section>

      {/* ───────────── LO QUE RESOLVEMOS (ticker) ───────────── */}
      <section aria-label="Lo que resolvemos" className="border-b border-white/5 py-6">
        <div
          className="nf-marquee-wrap overflow-hidden"
          style={{ maskImage: fadeMask, WebkitMaskImage: fadeMask }}
        >
          <div className="nf-marquee flex w-max items-center text-lg text-slate-400">
            {[...ticker, ...ticker].map((t, i) => (
              <span
                key={i}
                aria-hidden={i >= ticker.length}
                className="flex items-center gap-12 whitespace-nowrap pr-12"
              >
                {t}
                <span className="h-1 w-1 rotate-45 bg-sky-400/70" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SERVICIOS ───────────── */}
      <section id="servicios" className="scroll-mt-20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className={h2}>
              Presencia, procesos y datos.
              <span className="block text-slate-500">Un solo aliado para los tres.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Empezamos por lo que más te frena y crecemos por etapas, con planes que se ajustan a la
              visión y al presupuesto de cada proyecto.
            </p>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {services.map((s) => (
              <div
                key={s.title}
                className="group grid gap-8 py-10 transition-colors hover:bg-white/[0.02] md:grid-cols-12 md:gap-10"
              >
                <div className="md:col-span-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-sky-300 transition-colors group-hover:bg-sky-400/15">
                    <s.icon size={24} aria-hidden />
                  </div>
                  <h3 className={`${HEADING} mt-5 text-2xl font-semibold tracking-tight text-white`}>
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-sm text-slate-400">{s.promise}</p>
                </div>

                <div className="md:col-span-7">
                  <ul className="space-y-3">
                    {s.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-3 text-slate-300">
                        <Check size={18} className="mt-0.5 shrink-0 text-sky-400" aria-hidden />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-slate-400">{s.tools}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── PROYECTOS ───────────── */}
      <section
        id="proyectos"
        className="scroll-mt-20 border-y border-white/5 bg-slate-900/40 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectShowcase />
        </div>
      </section>

      {/* ───────────── POWER PLATFORM ───────────── */}
      <section id="automatizacion" className="scroll-mt-20 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className={h2}>Power Platform: captura, automatiza y mide.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Conectamos tus datos, tus procesos y tus decisiones en un mismo flujo, aprovechando el
              ecosistema de Microsoft.
            </p>
          </div>

          <div className="relative mt-14">
            <div aria-hidden className="absolute inset-x-6 -top-px z-10 h-px overflow-hidden">
              <div className="nf-hairline h-px w-1/4 bg-linear-to-r from-transparent via-sky-400 to-transparent" />
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">
              {powerSteps.map((step) => (
                <div key={step.title} className="bg-slate-950 p-8 md:p-10">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.tint}`}
                  >
                    <step.icon size={24} className={step.color} aria-hidden />
                  </div>
                  <p className={`mt-6 text-sm font-medium ${step.color}`}>{step.tool}</p>
                  <h3
                    className={`${HEADING} mt-1 text-2xl font-semibold tracking-tight text-white`}
                  >
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-sky-400/20 bg-sky-400/[0.04] p-8 md:flex-row md:items-center md:p-10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sky-400/10">
              <Database size={24} className="text-sky-300" aria-hidden />
            </div>
            <div>
              <h3 className={`${HEADING} text-xl font-semibold text-white`}>
                Sobre una base de datos sólida
              </h3>
              <p className="mt-1 max-w-3xl leading-relaxed text-slate-400">
                Usamos Dataverse y SQL Server para que tu información sea segura, escalable y esté
                disponible para todas tus herramientas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── PROCESO ───────────── */}
      <section id="proceso" className="scroll-mt-20 border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={h2}>De la idea al lanzamiento, sin sorpresas.</h2>
          <div className="mt-14">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      {/* ───────────── QUIÉN ESTÁ DETRÁS ───────────── */}
      <section id="equipo" className="scroll-mt-20 border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={personalPhoto}
                alt="Merloy Flores, fundador de Nexflow Digital"
                fill
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover object-top"
              />
              {/* Integra la foto con la paleta: oscurece el fondo y funde la base */}
              <div aria-hidden className="absolute inset-0 bg-slate-950/25" />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/10 to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-6">
                <p className={`${HEADING} text-lg font-semibold text-white`}>Merloy Flores</p>
                <p className="text-sm text-slate-300">Fundador de Nexflow Digital</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className={h2}>Un solo interlocutor, de la idea a la entrega.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Nexflow Digital lo lidera Merloy Flores: desarrollo web, automatización con Power
              Platform y análisis de datos en una sola mano. Sin intermediarios ni traspasos entre
              equipos, tu proyecto conserva el contexto de principio a fin.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'Hablas directo con quien diseña y construye',
                'Trabajamos con pymes de Costa Rica y clientes internacionales',
                'Atención en español e inglés',
              ].map((pt) => (
                <li key={pt} className="flex items-start gap-3 text-slate-300">
                  <Check size={18} className="mt-0.5 shrink-0 text-sky-400" aria-hidden />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────── CONTACTO ───────────── */}
      <section id="contacto" className="scroll-mt-20 px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 md:flex-row md:items-center md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(80% 100% at 0% 0%, #000, transparent)',
              WebkitMaskImage: 'radial-gradient(80% 100% at 0% 0%, #000, transparent)',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
          />

          <div className="relative max-w-xl">
            <h2 className={h2}>
              Cuéntanos qué te quita tiempo.
              <span className="block text-slate-500">Nosotros armamos la ruta.</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Agenda una auditoría gratis: revisamos tu proceso y te decimos qué conviene construir o
              automatizar primero.
            </p>
          </div>

          <div className="relative flex w-full flex-col gap-4 md:w-auto md:min-w-80">
            <Link
              href="/contacto"
              className={`flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-950 transition-colors hover:bg-sky-100 ${focusRing}`}
            >
              <FaClipboardList size={20} aria-hidden /> Describir mi proyecto
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/5 ${focusRing}`}
            >
              <FaWhatsapp size={22} className="text-emerald-400" aria-hidden /> Escribir por WhatsApp
            </Link>

            <div className="mt-2 space-y-1 text-center text-sm text-slate-400">
              <a
                href="mailto:merloy123@gmail.com"
                className="flex items-center justify-center gap-2 transition-colors hover:text-white"
              >
                <Mail size={16} aria-hidden /> merloy123@gmail.com
              </a>
              <a
                href="tel:+50672655724"
                className="flex items-center justify-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={16} aria-hidden /> +506 7265-5724
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}