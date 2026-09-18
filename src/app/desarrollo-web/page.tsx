import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Code2, Gauge, Layout, Search, Smartphone, Wrench } from 'lucide-react';
import CtaPanel from '../../../components/Ctapanel';
import { display } from '../../lib/fonts';

export const metadata: Metadata = {
  title: 'Desarrollo web a la medida en Next.js | Nexflow Digital',
  description:
    'Sitios y plataformas web rápidos, claros y hechos a tu medida, sin plantillas genéricas. Diseño propio, SEO técnico y código listo para crecer.',
};

const HEADING = 'font-[family-name:var(--font-display)]';
const h2 = `${HEADING} text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]`;

const features = [
  {
    icon: Layout,
    title: 'Diseño a medida',
    text: 'Sin plantillas genéricas: tu marca, tu mensaje y tus clientes definen la estructura y guían cada interacción hacia la acción que tu negocio necesita.',
  },
  {
    icon: Gauge,
    title: 'Velocidad',
    text: 'Renderizado en el servidor y buenas prácticas de rendimiento para que tus visitas no esperen ni se vayan antes de ver tu propuesta.',
  },
  {
    icon: Search,
    title: 'SEO técnico',
    text: 'Estructura, metadatos y sitemap pensados desde el inicio para que te encuentren en Google.',
  },
  {
    icon: Smartphone,
    title: 'Pensado para el celular',
    text: 'Se ve y funciona bien en cualquier pantalla, porque muchos de tus clientes te buscan desde el teléfono.',
  },
  {
    icon: Wrench,
    title: 'Funciones a la medida',
    text: 'Reservas, blogs, catálogos y paneles de administración, según lo que tu negocio necesite hoy y lo que quiera sumar después.',
  },
  {
    icon: Code2,
    title: 'Código que escala',
    text: 'Una base limpia y ordenada, lista para crecer sin rehacerlo todo cuando tu empresa crezca.',
  },
];

// Casos reales del portafolio, agrupados por el tipo de sitio que resuelven
const kinds = [
  { kind: 'Sitios corporativos', example: 'BUKUË Costa Rica' },
  { kind: 'Sitios con blog y contenido', example: 'Lorena de la Garza' },
  { kind: 'Sitios con reservas en línea', example: 'Clínica Alvarado' },
  { kind: 'Plataformas de gestión', example: 'PrimeStay Rentals' },
];

const css = `
@keyframes nf-fade-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes nf-pop{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.nf-fade{animation:nf-fade-up .8s ease-out both;animation-delay:var(--d,0s)}
.nf-pop{animation:nf-pop .6s ease-out var(--dl,0s) backwards}
@media (prefers-reduced-motion:reduce){.nf-fade,.nf-pop{animation:none}}
`;

const d = (s: string) => ({ '--d': s }) as CSSProperties;
const dl = (n: number) => ({ '--dl': `${0.6 + n * 0.4}s` }) as CSSProperties;

/* Un sitio que se arma solo, bloque por bloque (una sola vez, al cargar) */
function SiteBuild() {
  return (
    <div className="nf-fade relative w-full max-w-md" style={d('.3s')}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-sky-500/10 blur-3xl"
      />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <span className="flex gap-1.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="flex-1 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-500">tu-negocio.com</span>
        </div>

        <div aria-hidden className="space-y-5 p-5">
          <div className="nf-pop flex items-center justify-between" style={dl(0)}>
            <span className="h-3 w-16 rounded bg-white/30" />
            <span className="flex gap-3">
              <span className="h-2 w-8 rounded bg-white/15" />
              <span className="h-2 w-8 rounded bg-white/15" />
              <span className="h-2 w-8 rounded bg-white/15" />
            </span>
          </div>

          <div className="nf-pop space-y-2.5 pt-2" style={dl(1)}>
            <span className="block h-4 w-4/5 rounded bg-white/70" />
            <span className="block h-4 w-3/5 rounded bg-white/70" />
            <span className="block h-2 w-2/3 rounded bg-white/20" />
          </div>

          <div className="nf-pop flex gap-3" style={dl(2)}>
            <span className="block h-9 w-28 rounded-lg bg-white" />
            <span className="block h-9 w-24 rounded-lg border border-white/20" />
          </div>

          <div
            className="nf-pop aspect-video rounded-xl border border-white/10 bg-linear-to-br from-sky-400/25 to-white/5"
            style={dl(3)}
          />

          <div className="nf-pop grid grid-cols-3 gap-3" style={dl(4)}>
            {[0, 1, 2].map((i) => (
              <span key={i} className="block h-16 rounded-lg border border-white/10 bg-white/5" />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">Ejemplo ilustrativo de la estructura de un sitio.</p>
    </div>
  );
}

export default function DesarrolloWebPage() {
  return (
    <div className={`${display.variable} bg-slate-950 text-slate-300`}>
      <style>{css}</style>

      {/* ───────── HERO ───────── */}
      <section className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-20">
            <div>
              <h1
                className={`${HEADING} nf-fade text-4xl font-semibold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-6xl`}
                style={d('0s')}
              >
                Un sitio hecho a tu medida.
                <span className="block text-slate-500">Que carga rápido y vende.</span>
              </h1>
              <p className="nf-fade mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl" style={d('.2s')}>
                Construimos sitios y plataformas en Next.js, sin plantillas genéricas: diseño propio,
                rápidos en cualquier dispositivo y listos para posicionarte en buscadores.
              </p>
              <div className="nf-fade mt-10 flex flex-col gap-4 sm:flex-row" style={d('.35s')}>
                <Link
                  href="/contacto?tipo=web"
                  className="rounded-xl bg-white px-7 py-4 text-center font-semibold text-slate-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  Cotizar mi sitio
                </Link>
                <Link
                  href="/#proyectos"
                  className="rounded-xl border border-white/15 px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  Ver proyectos
                </Link>
              </div>
              <p className="nf-fade mt-4 text-sm text-slate-500" style={d('.5s')}>
                Planes flexibles que se ajustan a la visión y al presupuesto de cada proyecto.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <SiteBuild />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── QUÉ INCLUYE ───────── */}
      <section className="border-t border-white/5 bg-slate-900/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className={h2}>
              Lo que hace la diferencia.
              <span className="block text-slate-500">Desde el primer boceto.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-slate-950 p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                  <f.icon size={24} aria-hidden />
                </div>
                <h3 className={`${HEADING} mt-5 text-xl font-semibold tracking-tight text-white`}>{f.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── TIPOS DE SITIO ───────── */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className={h2}>Lo que ya hemos construido.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              Cada tipo de sitio resuelve un problema distinto. Estos son algunos casos reales.
            </p>
          </div>

          <ul className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {kinds.map((k) => (
              <li key={k.kind}>
                <Link
                  href="/#proyectos"
                  className="group flex items-center justify-between gap-6 py-6 transition-colors hover:bg-white/[0.02] focus-visible:outline-2 focus-visible:outline-sky-400"
                >
                  <span className={`${HEADING} text-xl font-semibold tracking-tight text-white sm:text-2xl`}>
                    {k.kind}
                  </span>
                  <span className="flex items-center gap-3 text-slate-400 transition-colors group-hover:text-sky-300">
                    {k.example}
                    <ArrowUpRight size={18} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CtaPanel
            title="¿Tienes un proyecto en mente?"
            text="Cuéntanos qué necesitas y te ayudamos a definir la mejor solución para tu negocio, con un plan que se ajuste a tu presupuesto."
            primary={{ label: 'Cotizar mi sitio', href: '/contacto?tipo=web' }}
          />
        </div>
      </section>
    </div>
  );
}