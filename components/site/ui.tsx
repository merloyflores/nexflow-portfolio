/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import LiveIf from './LiveIf';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { CireliaMark } from '../cirelia/Logo';
import { CLIENTS, DIAGNOSTIC, PROJECTS, SERVICES, waLink, type Project } from '@/lib/site';

/* Piezas que se repiten en todo el sitio. Si una cambia acá, cambia en todas las páginas. */

export function Container({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Título de sección: titular grande y una bajada opcional (sin cursivas). */
export function Head({ title, sub, center, as: As = 'h2', className = '' }: { title: React.ReactNode; sub?: React.ReactNode; center?: boolean; as?: 'h1' | 'h2'; className?: string }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`} data-rv>
      <As className={As === 'h1' ? 't-h1' : 't-h2'}>{title}</As>
      {sub && <p className={`t-lead mt-5 ${center ? 'mx-auto' : ''} max-w-2xl`}>{sub}</p>}
    </div>
  );
}

/** Encabezado de página interna: título, bajada y botones. */
export function PageHero({ title, sub, children }: { title: React.ReactNode; sub: React.ReactNode; children?: React.ReactNode }) {
  return (
    <section className="relative">
      <div className="gridbg gridbg-fade absolute inset-0 pointer-events-none" aria-hidden />
      <Container className="relative pt-16 sm:pt-24 pb-12 sm:pb-16">
        <div className="max-w-3xl rise">
          <h1 className="t-h1">{title}</h1>
          <p className="t-lead mt-6 max-w-2xl">{sub}</p>
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

export function Photo({ src, alt = '', className = '', eager, veil }: { src: string; alt?: string; className?: string; eager?: boolean; veil?: boolean }) {
  return (
    <div className={`photo ${veil ? 'photo-veil' : ''} ${className}`}>
      <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width={1920} height={1080} />
    </div>
  );
}

export function Checks({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((t) => <li key={t} className="check"><Check size={17} strokeWidth={2} /><span className="ink2">{t}</span></li>)}
    </ul>
  );
}

export function WaButton({ text, label = 'Escribinos por WhatsApp', className = 'btn btn-ink' }: { text: string; label?: string; className?: string }) {
  return <a href={waLink(text)} target="_blank" rel="noopener noreferrer" className={className}><FaWhatsapp size={17} /> {label}</a>;
}

/** Logos de clientes en un solo tono. Los que no tienen logo van como texto, con la misma presencia. */
export function LogoRow({ className = '' }: { className?: string }) {
  return (
    <ul className={`logo-row grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 ${className}`}>
      {CLIENTS.map((c) => (
        <li key={c.id} className="flex justify-center">
          <a href={c.url} target="_blank" rel="noopener noreferrer" title={c.name} className="flex h-12 items-center">
            {c.logo ? <img src={c.logo} alt={c.name} className={`logo-mono ${c.tall ? '!h-14' : ''}`} loading="lazy" />
              : c.id === 'cirelia' ? <span className="wordmark inline-flex items-center gap-2"><CireliaMark size={24} />Cirelia</span>
              : <span className="wordmark">{c.name}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Los servicios en tarjetas (sin fotos de stock): tono del servicio, promesa y lo que incluye. */
export function ServiceGrid({ exclude }: { exclude?: string }) {
  const list = SERVICES.filter((s) => s.id !== exclude);
  return (
    <div className={`grid gap-5 ${list.length === 4 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
      {list.map((s, i) => (
        <Link key={s.id} href={s.href} className="group surface lift relative flex flex-col overflow-hidden p-6 sm:p-8" data-rv={i} data-tone={s.id}>
          <span className="absolute inset-x-0 top-0 h-[3px]" style={{ background: 'var(--tone)' }} aria-hidden />
          <span className="tone-tag self-start"><span className="tone-dot" />{s.short}</span>
          <h3 className="t-h3 mt-5">{s.name}</h3>
          <p className="mt-3 t-body">{s.promise}</p>
          {list.length === 4 && <Checks items={s.bullets.slice(0, 3)} className="mt-5 text-[.94rem]" />}
          <span className="mt-auto pt-7 inline-flex items-center gap-1.5 font-semibold">Ver {s.short.toLowerCase()} <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" /></span>
        </Link>
      ))}
    </div>
  );
}

/** Ventana de navegador con una captura dentro. */
export function Browser({ url, src, alt, eager, live }: { url: string; src: string; alt: string; eager?: boolean; live?: string }) {
  return (
    <div className="frame">
      <div className="frame-bar"><i /><i /><i /><span className="frame-url">{url}</span></div>
      <div className="relative">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        {live && <LiveIf url={live} title={`Vista en vivo de ${url}`} />}
      </div>
    </div>
  );
}

export function ProjectCard({ p, i = 0 }: { p: Project; i?: number }) {
  return (
    <Link href={`/proyectos#${p.id}`} className="group block" data-rv={i}>
      <div className="surface-2 p-4 sm:p-5 transition-colors group-hover:bg-[var(--line)]">
        <Browser url={p.host} src={p.img} alt={`Sitio de ${p.name}`} live={p.live === false ? undefined : p.url} />
      </div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[1.1rem] font-semibold tracking-[-0.015em]">{p.name}</h3>
          <p className="mt-1 text-[.92rem] muted">{p.kind}</p>
        </div>
        <span className="num text-[.85rem] muted">{p.year}</span>
      </div>
    </Link>
  );
}

export function projectsFor(service: string) {
  return PROJECTS.filter((p) => p.service === service);
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq border-t b">
      {items.map((f) => (
        <details key={f.q}>
          <summary>{f.q}<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><path d="M12 5v14M5 12h14" /></svg></summary>
          <div>{f.a}</div>
        </details>
      ))}
    </div>
  );
}

/** Pasos conectados (cómo trabajamos un proyecto): la línea se llena al aparecer. */
export function Steps({ items }: { items: { t: string; d: string }[] }) {
  return (
    <ol className="stepper" style={{ ['--n' as string]: items.length }} data-rv>
      {items.map((s, i) => (
        <li key={s.t} style={{ ['--i' as string]: i }}>
          <span className="step-node">{i + 1}</span>
          <h3 className="md:mt-6 text-[1.1rem] font-semibold tracking-[-0.02em]">{s.t}</h3>
          <p className="mt-2 t-body text-[.95rem]">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

/** Cierre de página: la invitación a conversar. */
export function CtaBand({ title, sub, wa }: { title?: React.ReactNode; sub?: string; wa?: string }) {
  return (
    <section className="px-4 sm:px-6 pb-20 sm:pb-28">
      <div className="block-dark gridbg relative overflow-hidden mx-auto max-w-6xl rounded-[1.75rem] px-6 py-16 sm:px-14 sm:py-24" data-rv>
        <svg className="flow flow-draw opacity-60" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden><path d="M52 -4 C 60 34, 80 44, 104 50" /></svg>
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="t-display">{title ?? <>¿Conversemos?</>}</h2>
            <p className="t-lead mt-5 max-w-xl">{sub ?? 'Contanos qué querés lograr. Te respondemos en el día con una idea clara de cómo lo haríamos, cuánto tomaría y cuánto costaría.'}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
            <WaButton text={wa ?? 'Hola Nexflow, quiero conversar sobre un proyecto.'} />
            <Link href={DIAGNOSTIC.href} className="btn btn-line">Diagnóstico gratis <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
