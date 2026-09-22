'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, ClipboardCheck, Code2, Menu, Workflow, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';
const AUDIT_HREF = '/contacto?tipo=auditoria';

// Las páginas de servicio ahora son alcanzables desde el menú principal
const services = [
  {
    href: '/desarrollo-web',
    icon: Code2,
    title: 'Desarrollo web',
    text: 'Sitios y plataformas a la medida en Next.js.',
  },
  {
    href: '/#automatizacion',
    icon: Workflow,
    title: 'Automatización y datos',
    text: 'Power Automate, Power Apps y Power BI.',
  },
  {
    href: '/auditoria-tecnica',
    icon: ClipboardCheck,
    title: 'Auditoría técnica',
    text: 'Diagnóstico de tu web y tus procesos.',
  },
];

const links = [
  { href: '/#proyectos', label: 'Proyectos', id: 'proyectos' },
  { href: '/#proceso', label: 'Proceso', id: 'proceso' },
  { href: '/#equipo', label: 'Nosotros', id: 'equipo' },
  { href: '/blog', label: 'Blog', id: 'blog' },
];

// Secciones de la home que el menú resalta mientras haces scroll
const SPY_IDS = ['servicios', 'proyectos', 'automatizacion', 'proceso', 'equipo'];

const linkCls = (active: boolean) =>
  `flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 ${
    active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`;

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // menú móvil
  const [menu, setMenu] = useState(false); // panel de servicios (escritorio)
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // Cierra menús al cambiar de página
  useEffect(() => {
    setOpen(false);
    setMenu(false);
  }, [pathname]);

  // Bloquea el scroll del fondo con el menú móvil abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape cierra todo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setMenu(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // Barra translúcida al hacer scroll + línea de progreso (el "hilo" de la marca)
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, y / max) : 0;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${p})`;
      if (pathname === '/' && y < 300) setActiveId(null);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [pathname]);

  // Scroll-spy: solo en la home
  useEffect(() => {
    if (pathname !== '/') {
      setActiveId(null);
      return;
    }
    const els = SPY_IDS.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  const servicesActive =
    activeId === 'servicios' ||
    activeId === 'automatizacion' ||
    pathname.startsWith('/desarrollo-web') ||
    pathname.startsWith('/auditoria-tecnica');

  // Un link normal se marca "activo" por scroll-spy (secciones de la home);
  // un link a otra página (como /blog) se marca activo por la URL actual.
  const isLinkActive = (link: (typeof links)[number]) =>
    activeId === link.id || (!link.href.includes('#') && pathname.startsWith(link.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Principal"
        className={`relative z-10 mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl border px-3 transition-all duration-300 sm:h-16 sm:px-5 ${
          scrolled
            ? 'border-white/10 bg-slate-950/80 shadow-2xl shadow-black/40 backdrop-blur-xl'
            : 'border-white/5 bg-slate-950/40 backdrop-blur-md'
        }`}
      >
        {/* Logo */}
        <Link href="/" aria-label="Nexflow Digital, inicio" className="flex items-center">
          <span className="relative block h-9 w-32 sm:h-10 sm:w-40">
            <Image
              src="/LOGOBLANCO.png"
              alt="Nexflow Digital"
              fill
              priority
              sizes="160px"
              className="object-contain object-left"
            />
          </span>
        </Link>

        {/* Menú escritorio */}
        <ul className="hidden items-center gap-1 md:flex">
          <li
            className="relative"
            onMouseEnter={() => setMenu(true)}
            onMouseLeave={() => setMenu(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMenu(false);
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={menu}
              onClick={() => setMenu((v) => !v)}
              className={linkCls(servicesActive || menu)}
            >
              Servicios
              <ChevronDown
                size={14}
                aria-hidden
                className={`transition-transform duration-200 ${menu ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full w-104 -translate-x-1/2 pt-3 transition-all duration-200 ${
                menu ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
              }`}
            >
              <div className="rounded-2xl border border-white/10 bg-slate-950/95 p-2 shadow-2xl shadow-black/50 backdrop-blur-xl">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMenu(false)}
                    className="group flex items-start gap-4 rounded-xl p-3 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-sky-400"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-sky-300 transition-colors group-hover:bg-sky-400/15">
                      <s.icon size={20} aria-hidden />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{s.title}</span>
                      <span className="block text-sm text-slate-400">{s.text}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </li>

          {links.map((l) => (
            <li key={l.id}>
              <Link href={l.href} className={linkCls(isLinkActive(l))}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-2">
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Escribir por WhatsApp"
            className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-emerald-400 transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:flex"
          >
            <FaWhatsapp size={20} aria-hidden />
          </Link>
          <Link
            href={AUDIT_HREF}
            className="hidden rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:block"
          >
            Auditoría gratis
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 md:hidden"
          >
            {open ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>

        {/* Línea de progreso de lectura */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-4 -bottom-px h-px overflow-hidden"
        >
          <div
            ref={progressRef}
            className="h-px origin-left bg-linear-to-r from-sky-500 via-sky-300 to-sky-500"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
      </nav>

      {/* Menú móvil a pantalla completa */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`fixed inset-0 transition-opacity duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl" onClick={() => setOpen(false)} />

        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-28">
          <p className="text-sm font-medium text-slate-500">Servicios</p>
          <ul className="mt-3 space-y-1">
            {services.map((s, i) => (
              <li
                key={s.href}
                className={`transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${80 + i * 50}ms` : '0ms' }}
              >
                <Link
                  href={s.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 rounded-xl p-3 text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-sky-300">
                    <s.icon size={22} aria-hidden />
                  </span>
                  <span className="text-lg font-semibold">{s.title}</span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="mt-6 space-y-1 border-t border-white/10 pt-6">
            {links.map((l, i) => (
              <li
                key={l.id}
                className={`transition-all duration-500 ${
                  open ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                }`}
                style={{ transitionDelay: open ? `${260 + i * 50}ms` : '0ms' }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-2xl font-semibold tracking-tight text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto space-y-3 pt-10">
            <Link
              href={AUDIT_HREF}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-lg font-semibold text-slate-950"
            >
              Pedir auditoría gratis
            </Link>
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-6 py-4 text-lg font-semibold text-white"
            >
              <FaWhatsapp size={22} className="text-emerald-400" aria-hidden /> Escribir por WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;