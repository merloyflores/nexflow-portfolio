import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, ClipboardCheck, Globe, Workflow } from 'lucide-react';
import CtaPanel from '../../../components/Ctapanel';
import { display } from '../../lib/fonts';

export const metadata: Metadata = {
  title: 'Auditoría técnica de sistemas y web | Nexflow Digital',
  description:
    'Revisamos tu sitio web y tus procesos para encontrar cuellos de botella y oportunidades de automatización. Empieza con una sesión de 30 minutos sin costo.',
};

const HEADING = 'font-[family-name:var(--font-display)]';
const h2 = `${HEADING} text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]`;
const AUDIT_HREF = '/contacto?tipo=auditoria';

const steps = [
  {
    title: 'Descubrimiento',
    text: 'Analizamos la arquitectura actual de tu sitio o tus procesos manuales. Revisamos el rendimiento (Core Web Vitals) y mapeamos cómo trabaja tu equipo.',
  },
  {
    title: 'Evaluación técnica',
    text: 'Buscamos redundancias y evaluamos si herramientas como Power Apps o Power Automate pueden reducir el trabajo manual de tus operaciones diarias.',
  },
  {
    title: 'Hoja de ruta',
    text: 'Te entregamos los hallazgos y una hoja de ruta con soluciones concretas y presupuestos estimados.',
  },
];

const reviews = [
  {
    icon: Globe,
    title: 'En tu sitio web',
    items: [
      'Velocidad y Core Web Vitals',
      'SEO técnico: metadatos, sitemap y estructura',
      'Seguridad básica y HTTPS',
      'Experiencia en celular y accesibilidad',
    ],
  },
  {
    icon: Workflow,
    title: 'En tus procesos',
    items: [
      'Tareas repetitivas que se hacen a mano',
      'Información dispersa en Excel, correos o chats',
      'Aprobaciones y reportes que tardan de más',
      'Oportunidades para Power Automate, Power Apps y Power BI',
    ],
  },
];

const tiers = [
  {
    name: 'Sesión de diagnóstico',
    tag: 'Sin costo',
    text: '30 minutos para entender tu caso y señalar dónde están las primeras oportunidades.',
    points: ['Conversación guiada sobre tu operación', 'Primeras oportunidades priorizadas', 'Sin compromiso'],
    highlight: true,
  },
  {
    name: 'Auditoría completa',
    tag: 'Bajo cotización',
    text: 'Un análisis a fondo de tu sitio y tus procesos, con documento ejecutivo.',
    points: ['Hallazgos documentados', 'Hoja de ruta por etapas', 'Presupuestos estimados'],
    highlight: false,
  },
];

const scanItems = [
  { label: 'Velocidad del sitio', ok: true },
  { label: 'SEO técnico', ok: false },
  { label: 'Tareas manuales repetitivas', ok: false },
  { label: 'Datos en hojas sueltas', ok: false },
  { label: 'Seguridad básica', ok: true },
];

const css = `
@keyframes nf-fade-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes nf-pop{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}
@keyframes nf-gone{from{opacity:1}to{opacity:0}}
@keyframes nf-scan{0%{transform:translateY(0);opacity:0}8%,92%{opacity:1}100%{transform:translateY(var(--h,300px));opacity:0}}
.nf-fade{animation:nf-fade-up .8s ease-out both;animation-delay:var(--d,0s)}
.nf-pop{animation:nf-pop .5s ease-out var(--dl,0s) backwards}
.nf-gone{animation:nf-gone .3s ease-out var(--dl,0s) backwards}
.nf-scan{animation:nf-scan 5s ease-in-out .8s both}
@media (prefers-reduced-motion:reduce){
  .nf-fade,.nf-pop,.nf-gone{animation:none}
  .nf-scan{display:none}
}
`;

const d = (s: string) => ({ '--d': s }) as CSSProperties;
const vars = (o: Record<string, string>) => o as CSSProperties;

/* Diagnóstico animado: se ejecuta una vez al cargar (base = estado final) */
function AuditScan() {
  return (
    <div className="nf-fade relative w-full max-w-md" style={d('.3s')}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-sky-500/10 blur-3xl"
      />
      <div className="rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-white">Diagnóstico</p>
          <p className="flex items-center gap-2 text-xs text-slate-400">
            <ClipboardCheck size={14} className="text-sky-300" aria-hidden /> 5 puntos revisados
          </p>
        </div>

        <div className="relative space-y-2">
          <div
            aria-hidden
            className="nf-scan pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-sky-300 shadow-[0_0_14px_rgba(56,189,248,0.9)]"
            style={vars({ '--h': '300px' })}
          />
          {scanItems.map((it, i) => (
            <div
              key={it.label}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5"
            >
              <span className="text-sm text-white">{it.label}</span>
              <span className="relative flex h-6 min-w-[104px] items-center justify-end">
                <span
                  className="nf-gone absolute right-0 text-xs text-slate-500 opacity-0"
                  style={vars({ '--dl': `${1.1 + i * 0.9}s` })}
                >
                  Revisando…
                </span>
                <span
                  className={`nf-pop inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium ${
                    it.ok ? 'bg-emerald-400/10 text-emerald-400' : 'bg-sky-400/10 text-sky-300'
                  }`}
                  style={vars({ '--dl': `${1.1 + i * 0.9}s` })}
                >
                  {it.ok && <Check size={12} aria-hidden />}
                  {it.ok ? 'En orden' : 'Oportunidad'}
                </span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-slate-500">
          Ejemplo ilustrativo de cómo se ve un diagnóstico.
        </p>
      </div>
    </div>
  );
}

export default function AuditoriaPage() {
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
                Antes de construir,
                <span className="block text-slate-500">entendemos qué te frena.</span>
              </h1>
              <p className="nf-fade mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl" style={d('.2s')}>
                Revisamos tu sitio web y tus procesos para encontrar cuellos de botella, riesgos y
                oportunidades de automatización. Empiezas con una sesión de 30 minutos, sin costo.
              </p>
              <div className="nf-fade mt-10 flex flex-col gap-4 sm:flex-row" style={d('.35s')}>
                <Link
                  href={AUDIT_HREF}
                  className="rounded-xl bg-white px-7 py-4 text-center font-semibold text-slate-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  Agendar sesión gratis
                </Link>
                <Link
                  href="#metodologia"
                  className="rounded-xl border border-white/15 px-7 py-4 text-center font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
                >
                  Ver cómo funciona
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <AuditScan />
            </div>
          </div>
        </div>
      </section>

      {/* ───────── METODOLOGÍA ───────── */}
      <section id="metodologia" className="scroll-mt-24 border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={h2}>Tres pasos, un plan claro.</h2>

          <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 md:block" />
            {steps.map((s, i) => (
              <li key={s.title} className="relative md:pt-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 hidden h-4 w-4 items-center justify-center rounded-full border border-sky-400 bg-slate-950 md:flex"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                <span aria-hidden className={`${HEADING} text-4xl font-semibold text-slate-700`}>
                  {i + 1}
                </span>
                <h3 className={`${HEADING} mt-3 text-xl font-semibold text-white`}>{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── QUÉ REVISAMOS ───────── */}
      <section className="border-t border-white/5 bg-slate-900/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className={h2}>
            Qué revisamos.
            <span className="block text-slate-500">Tu sitio y tu forma de trabajar.</span>
          </h2>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2">
            {reviews.map((r) => (
              <div key={r.title} className="bg-slate-950 p-8 md:p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                  <r.icon size={24} aria-hidden />
                </div>
                <h3 className={`${HEADING} mt-5 text-2xl font-semibold tracking-tight text-white`}>
                  {r.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-slate-300">
                      <Check size={18} className="mt-0.5 shrink-0 text-sky-400" aria-hidden />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── QUÉ RECIBES ───────── */}
      <section className="border-t border-white/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className={h2}>Empieza gratis. Profundiza si te hace sentido.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
              La sesión de diagnóstico no tiene costo ni compromiso. Si vemos que hay mucho por
              mejorar, te cotizamos una auditoría completa.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {tiers.map((t) => (
              <div
                key={t.name}
                className={`rounded-3xl border p-8 md:p-10 ${
                  t.highlight ? 'border-sky-400/30 bg-sky-400/[0.04]' : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`${HEADING} text-2xl font-semibold tracking-tight text-white`}>{t.name}</h3>
                  <span
                    className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                      t.highlight ? 'bg-emerald-400/10 text-emerald-400' : 'bg-white/5 text-slate-300'
                    }`}
                  >
                    {t.tag}
                  </span>
                </div>
                <p className="mt-4 leading-relaxed text-slate-400">{t.text}</p>
                <ul className="mt-6 space-y-3">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-slate-300">
                      <Check size={18} className="mt-0.5 shrink-0 text-sky-400" aria-hidden />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="px-4 pb-24 sm:px-6 md:pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <CtaPanel
            title="Deja de adivinar qué está fallando."
            text="Agenda una sesión de 30 minutos sin costo para hablar de los retos técnicos de tu empresa."
            primary={{ label: 'Agendar sesión gratis', href: AUDIT_HREF }}
          />
        </div>
      </section>
    </div>
  );
}