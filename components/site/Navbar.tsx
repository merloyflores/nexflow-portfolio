'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, Moon, Sun, X, ClipboardCheck, Stethoscope } from 'lucide-react';
import { NexflowWordmark } from './Logo';
import { SERVICE_ICON } from './icons';
import { SERVICES, DIAGNOSTIC } from '@/lib/site';

const LINKS = [
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/como-trabajamos', label: 'Cómo trabajamos' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
];

/** Cambia día/noche y lo recuerda. Los íconos se muestran con CSS, así no hay que leer el tema al cargar. */
function toggleTheme() {
  const root = document.documentElement;
  const current = root.getAttribute('data-theme') ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  try { localStorage.setItem('nexflow:theme', next); } catch {}
}

export default function Navbar() {
  const pathname = usePathname();
  // Los menús se abren «en» una página: si la ruta cambia, quedan cerrados solos (sin efectos que reseteen estado).
  const [megaAt, setMegaAt] = useState<string | null>(null);
  const [mobileAt, setMobileAt] = useState<string | null>(null);
  const megaOpen = megaAt === pathname;
  const mobileOpen = mobileAt === pathname;
  const [scrolled, setScrolled] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => { if (!megaRef.current?.contains(e.target as Node)) setMegaAt(null); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMegaAt(null); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => { document.removeEventListener('mousedown', onDown); document.removeEventListener('keydown', onKey); };
  }, [megaOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const inServices = SERVICES.some((s) => pathname.startsWith(s.href)) || pathname.startsWith(DIAGNOSTIC.href) || pathname.startsWith('/clinicas');

  return (
    <header className="topbar" data-scrolled={scrolled || mobileOpen}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" aria-label="Nexflow Digital, inicio" className="shrink-0"><NexflowWordmark /></Link>

        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <div ref={megaRef} className="relative">
            <button type="button" className="navlink" aria-expanded={megaOpen} aria-current={inServices ? 'page' : undefined}
              onClick={() => setMegaAt(megaOpen ? null : pathname)}>
              Servicios <ChevronDown size={15} className={`transition-transform ${megaOpen ? 'rotate-180' : ''}`} />
            </button>
            {megaOpen && (
              <div className="mega" role="menu">
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES.map((s) => {
                    const Icon = SERVICE_ICON[s.id];
                    return (
                      <Link key={s.id} href={s.href} role="menuitem" className="mega-item">
                        <span className="tile"><Icon size={18} strokeWidth={1.7} /></span>
                        <span>
                          <span className="flex items-baseline gap-2 font-semibold tracking-[-0.01em]">{s.name}<span className="num text-[.75rem] font-normal muted">{s.n}</span></span>
                          <span className="mt-1 block text-[.86rem] leading-snug muted">{s.promise}</span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <Link href="/clinicas" role="menuitem" className="mega-item mt-1" data-tone="clinicas">
                  <span className="tile tone-soft"><Stethoscope size={18} strokeWidth={1.7} /></span>
                  <span>
                    <span className="block font-semibold tracking-[-0.01em]">Sistemas para clínicas</span>
                    <span className="mt-1 block text-[.86rem] leading-snug muted">Reservas en línea, agenda, expedientes e ingresos en un solo panel.</span>
                  </span>
                </Link>
                <Link href={DIAGNOSTIC.href} role="menuitem" className="mt-1 flex items-center justify-between gap-4 rounded-2xl px-4 py-3.5 surface-2 hover:opacity-90">
                  <span className="flex items-center gap-3">
                    <ClipboardCheck size={18} strokeWidth={1.7} />
                    <span><span className="font-semibold">¿No sabés por dónde empezar?</span> <span className="muted">Diagnóstico gratis de 30 minutos.</span></span>
                  </span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="navlink" aria-current={pathname.startsWith(l.href) ? 'page' : undefined}>{l.label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleTheme} className="icon-btn" aria-label="Cambiar entre modo día y noche">
            <Moon size={16} className="show-light" /><Sun size={16} className="show-dark" />
          </button>
          <Link href="/contacto" className="btn btn-ink btn-sm hidden sm:inline-flex">Conversemos</Link>
          <button type="button" className="icon-btn lg:hidden" aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={mobileOpen}
            onClick={() => setMobileAt(mobileOpen ? null : pathname)}>
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 overflow-y-auto" style={{ background: 'var(--bg)' }}>
          <nav aria-label="Menú" className="mx-auto max-w-6xl px-4 sm:px-6 pb-10 pt-4">
            <p className="t-small px-1">Servicios</p>
            <ul className="mt-2 space-y-1">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICON[s.id];
                return (
                  <li key={s.id}>
                    <Link href={s.href} className="flex items-center gap-3 rounded-2xl p-3 hover:bg-[var(--bg-2)]">
                      <span className="tile"><Icon size={18} strokeWidth={1.7} /></span>
                      <span><span className="block font-semibold">{s.name}</span><span className="block text-[.85rem] muted">{s.forWho}</span></span>
                    </Link>
                  </li>
                );
              })}
              <li data-tone="clinicas">
                <Link href="/clinicas" className="flex items-center gap-3 rounded-2xl p-3 hover:bg-[var(--bg-2)]">
                  <span className="tile tone-soft"><Stethoscope size={18} strokeWidth={1.7} /></span>
                  <span><span className="block font-semibold">Sistemas para clínicas</span><span className="block text-[.85rem] muted">Reservas en línea y panel de la clínica</span></span>
                </Link>
              </li>
              <li>
                <Link href={DIAGNOSTIC.href} className="flex items-center gap-3 rounded-2xl p-3 hover:bg-[var(--bg-2)]">
                  <span className="tile"><ClipboardCheck size={18} strokeWidth={1.7} /></span>
                  <span><span className="block font-semibold">Diagnóstico gratis</span><span className="block text-[.85rem] muted">30 minutos, sin compromiso</span></span>
                </Link>
              </li>
            </ul>
            <hr className="hr my-5" />
            <ul className="space-y-1">
              {[...LINKS, { href: '/contacto', label: 'Contacto' }].map((l) => (
                <li key={l.href}><Link href={l.href} className="block rounded-xl px-3 py-3 text-[1.15rem] font-semibold tracking-[-0.02em] hover:bg-[var(--bg-2)]">{l.label}</Link></li>
              ))}
            </ul>
            <Link href="/contacto" className="btn btn-ink mt-6 w-full">Conversemos <ArrowRight size={16} className="arrow" /></Link>
          </nav>
        </div>
      )}
    </header>
  );
}
