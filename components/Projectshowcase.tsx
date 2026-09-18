'use client';

import { useCallback, useEffect, useRef, useState, type PointerEvent as RPointerEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

/* ------------------------------------------------------------------ */
/*  Configuración                                                      */
/* ------------------------------------------------------------------ */
const HEADING = 'font-[family-name:var(--font-display)]'; // la fuente se define en app/page.tsx
const CYCLE_MS = 8000; // tiempo que cada proyecto queda activo en autoplay
const DESK_W = 1280; // ancho "virtual" del sitio en el marco de escritorio
const DESK_H = 800; // relación 16:10
const PHONE_W = 390; // ancho "virtual" del sitio en el marco de celular
const PHONE_H = 844;

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400';

type Project = {
  name: string;
  kind: string; // qué tipo de solución es
  host: string; // texto de la barra del navegador
  url: string; // sitio público
  previewUrl: string; // URL que se carga dentro del marco
  repo?: string;
  challenge: string; // el problema que resolvió
  built: string[]; // lo que se construyó (3 puntos máximo)
  stack: string[];
  glow: string; // color del resplandor detrás del marco
};

/*
  Para un caso de Power Platform sin sitio público (Power BI, Automate, Apps):
  agrega un campo `image` al tipo y renderiza una captura con next/image en lugar del iframe.
  Cuando tengas resultados reales (ej. "citas +30%"), agrégalos como campo `result`.
*/
const projects: Project[] = [
  {
    name: 'BUKUË Costa Rica',
    kind: 'Sitio corporativo',
    host: 'bukuecr.com',
    url: 'https://www.bukuecr.com/',
    previewUrl: 'https://buku-web.vercel.app/',
    repo: 'https://github.com/merloyflores/BUKU-',
    challenge:
      'Comunicar con claridad servicios técnicos de consultoría ambiental y proyectar una imagen corporativa sólida frente a empresas.',
    built: [
      'Sitio corporativo a la medida con identidad propia',
      'Estructura pensada para posicionar en buscadores (SEO)',
      'Diseño que equilibra lo ecológico y lo empresarial',
    ],
    stack: ['Next.js', 'Tailwind CSS', 'SEO'],
    glow: '#3B82F6',
  },
  {
    name: 'Lorena de la Garza',
    kind: 'Sitio de concientización con blog',
    host: 'derechoshumanosconlore.org',
    url: 'https://derechoshumanosconlore.org/',
    previewUrl: 'https://derechoshumanosconlore.org/',
    repo: 'https://github.com/merloyflores/violencia-obstetrica-landing',
    challenge:
      'Difundir información sensible sobre violencia obstétrica de forma empática, accesible y fácil de mantener al día.',
    built: [
      'Diseño empático y accesible para un tema delicado',
      'Blog con gestor de contenido dinámico',
      'Redacción y estructura pensadas para orientar y apoyar',
    ],
    stack: ['Next.js', 'Blog', 'Tailwind CSS'],
    glow: '#A855F7',
  },
  {
    name: 'Clínica Alvarado',
    kind: 'Sitio con agendamiento de citas',
    host: 'clinica-podologica.vercel.app',
    url: 'https://clinica-podologica.vercel.app/',
    previewUrl: 'https://clinica-podologica.vercel.app/',
    repo: 'https://github.com/merloyflores/clinica-podologia',
    challenge: 'Captar más pacientes y que agendar una cita sea tan fácil como enviar un mensaje.',
    built: [
      'Sistema de agendamiento dentro de un modal inmersivo',
      'Recorrido del paciente sin fricción, del anuncio a la cita',
      'Presencia médica clara y profesional',
    ],
    stack: ['React', 'Agendamiento', 'Tailwind CSS'],
    glow: '#06B6D4',
  },
  {
    name: 'PrimeStay Rentals',
    kind: 'Plataforma de gestión de propiedades',
    host: 'primestay-rentals.vercel.app',
    url: 'https://primestay-rentals.vercel.app/',
    previewUrl: 'https://primestay-rentals.vercel.app/',
    repo: 'https://github.com/merloyflores/primestay-rentals',
    challenge:
      'Centralizar el mantenimiento de una propiedad Airbnb y mejorar cómo se presenta a los huéspedes.',
    built: [
      'Plataforma que digitaliza todo el servicio de renta',
      'Mantenimiento y gestión en un solo lugar',
      'Presentación digital cuidada del apartamento',
    ],
    stack: ['Next.js', 'Gestión de propiedades', 'Vercel'],
    glow: '#10B981',
  },
];

/* ------------------------------------------------------------------ */
/*  Componente                                                         */
/* ------------------------------------------------------------------ */
export default function ProjectShowcase() {
  const [active, setActive] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [phoneLoaded, setPhoneLoaded] = useState(false);
  const [interacted, setInteracted] = useState(false); // el visitante eligió: se detiene el autoplay
  const [hovering, setHovering] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [scale, setScale] = useState(0.5);
  const [phoneScale, setPhoneScale] = useState(0.2);

  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const project = projects[active];
  const running = !interacted && !hovering && inView && !reduced;

  const goTo = useCallback((i: number) => {
    setActive(i);
    setLoaded(false);
    setPhoneLoaded(false);
  }, []);

  const handleSelect = (i: number) => {
    setInteracted(true);
    if (i !== active) goTo(i);
  };

  // Respeta "reducir movimiento"
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Solo avanza cuando la sección está visible
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Escala los sitios (1280px y 390px) para que quepan en sus marcos
  useEffect(() => {
    const desk = frameRef.current;
    const phone = phoneRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        if (e.target === desk) setScale(e.contentRect.width / DESK_W);
        if (e.target === phone) setPhoneScale(e.contentRect.width / PHONE_W);
      }
    });
    if (desk) ro.observe(desk);
    if (phone) ro.observe(phone);
    return () => ro.disconnect();
  }, []);

  // Autoplay
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => goTo((active + 1) % projects.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [running, active, goTo]);

  // Inclinación suave y foco de luz que siguen al cursor (solo mouse)
  const onMove = (e: RPointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== 'mouse') return;
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
    el.style.setProperty('--ry', `${(x - 0.5) * 6}deg`);
    el.style.setProperty('--rx', `${(0.5 - y) * 4}deg`);
  };
  const onLeave = () => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  };

  return (
    <div
      ref={rootRef}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <style>{`@keyframes nx-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>

      <header className="max-w-2xl">
        <h2
          className={`${HEADING} text-3xl font-semibold tracking-tight text-white text-balance sm:text-4xl md:text-[2.75rem] md:leading-[1.1]`}
        >
          Sitios y plataformas que ya están funcionando
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-400">
          Cada proyecto resolvió un problema distinto. Elige uno y míralo en vivo, en escritorio y en
          celular.
        </p>
      </header>

      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        {/* ------------------------- Índice de proyectos ------------------------- */}
        <div
          role="tablist"
          aria-label="Proyectos"
          aria-orientation="vertical"
          className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 [scrollbar-width:none] lg:mx-0 lg:snap-none lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0"
        >
          {projects.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.name}
                id={`project-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={isActive}
                aria-controls="project-panel"
                onClick={() => handleSelect(i)}
                className={`group relative min-w-56 shrink-0 snap-start border-b border-white/10 py-5 text-left transition-colors lg:min-w-0 ${focusRing} ${
                  isActive ? 'text-white' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span
                    className={`${HEADING} block text-xl font-semibold tracking-tight sm:text-2xl lg:text-3xl`}
                  >
                    {p.name}
                  </span>
                  <ArrowUpRight
                    size={20}
                    aria-hidden
                    className={`mt-1.5 hidden shrink-0 transition-all duration-300 lg:block ${
                      isActive
                        ? 'translate-x-0 text-sky-300 opacity-100'
                        : '-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60'
                    }`}
                  />
                </span>
                <span className="mt-1 block text-sm text-slate-400">{p.kind}</span>

                {isActive && (
                  <span
                    key={`${active}-${running}`}
                    aria-hidden
                    className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-sky-400"
                    style={
                      running ? { animation: `nx-fill ${CYCLE_MS}ms linear forwards` } : undefined
                    }
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ------------------------- Escenario + detalle ------------------------- */}
        <div id="project-panel" role="tabpanel" aria-labelledby={`project-tab-${active}`}>
          <div
            ref={stageRef}
            onPointerMove={onMove}
            onPointerLeave={onLeave}
            className="relative [perspective:1600px]"
          >
            {/* Resplandor del color del proyecto */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 rounded-[3rem] opacity-25 blur-3xl transition-colors duration-700"
              style={{ backgroundColor: project.glow }}
            />

            <div
              className="relative"
              style={{
                transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Marco de escritorio */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50">
                <div className="flex h-10 items-center gap-3 border-b border-white/10 bg-slate-900 px-4">
                  <span className="flex gap-1.5" aria-hidden>
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  </span>
                  <span className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-400">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
                    <span className="truncate">{project.host}</span>
                  </span>
                  <ExternalLink
                    size={14}
                    aria-hidden
                    className="text-slate-500 transition-colors group-hover:text-white"
                  />
                </div>

                <div
                  ref={frameRef}
                  className="relative aspect-16/10 w-full overflow-hidden bg-slate-800"
                >
                  {!loaded && <div className="absolute inset-0 animate-pulse bg-slate-800" />}
                  <iframe
                    key={project.previewUrl}
                    src={project.previewUrl}
                    title={`Vista previa de ${project.name}`}
                    loading="lazy"
                    tabIndex={-1}
                    sandbox="allow-scripts allow-same-origin"
                    onLoad={() => setLoaded(true)}
                    style={{
                      width: DESK_W,
                      height: DESK_H,
                      transform: `scale(${scale})`,
                      transformOrigin: 'top left',
                    }}
                    className={`pointer-events-none absolute left-0 top-0 max-w-none border-0 bg-white transition-opacity duration-700 ${
                      loaded ? 'opacity-100' : 'opacity-0'
                    }`}
                  />

                  {/* Toda la vista previa abre el sitio */}
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`absolute inset-0 z-10 ${focusRing}`}
                  >
                    <span className="sr-only">Abrir {project.name} en una pestaña nueva</span>
                  </Link>

                  {/* Foco de luz que sigue al cursor */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 60%)',
                    }}
                  />
                </div>
              </div>

              {/* Marco de celular: el mismo sitio a 390 px de ancho */}
              <div className="absolute -bottom-8 right-5 hidden w-[19%] min-w-[92px] sm:block">
                <div className="rounded-[1.4rem] border-[3px] border-slate-600/70 bg-slate-950 p-0.5 shadow-2xl shadow-black/60">
                  <div
                    ref={phoneRef}
                    className="relative aspect-[390/844] w-full overflow-hidden rounded-[1.15rem] bg-slate-800"
                  >
                    {loaded && (
                      <iframe
                        key={`phone-${project.previewUrl}`}
                        src={project.previewUrl}
                        title={`Vista móvil de ${project.name}`}
                        loading="lazy"
                        tabIndex={-1}
                        sandbox="allow-scripts allow-same-origin"
                        onLoad={() => setPhoneLoaded(true)}
                        style={{
                          width: PHONE_W,
                          height: PHONE_H,
                          transform: `scale(${phoneScale})`,
                          transformOrigin: 'top left',
                        }}
                        className={`pointer-events-none absolute left-0 top-0 max-w-none border-0 bg-white transition-opacity duration-700 ${
                          phoneLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detalle del caso */}
          <div className="mt-14 grid gap-8 md:grid-cols-2" aria-live="polite">
            <div>
              <p className="flex items-center gap-2 text-sm font-medium text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                En línea
              </p>
              <p className="mt-4 text-sm font-medium text-white">El reto</p>
              <p className="mt-2 leading-relaxed text-slate-400">{project.challenge}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-white">Lo que construimos</p>
              <ul className="mt-2 space-y-2 text-slate-400">
                {project.built.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed">
                    <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-sky-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6 text-sm font-semibold">
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-white transition-colors hover:text-sky-300 ${focusRing}`}
              >
                <ExternalLink size={16} aria-hidden /> Ver sitio
              </Link>
              {project.repo && (
                <Link
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-slate-400 transition-colors hover:text-white ${focusRing}`}
                >
                  <FaGithub size={16} aria-hidden /> Código
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Cierre de la sección */}
      <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
        <p className="max-w-xl text-lg leading-relaxed text-slate-300">
          ¿Tienes un negocio o un proceso que mejorar? Cuéntanos qué necesitas y armamos la solución
          contigo.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <Link
            href="/contacto"
            className={`rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-100 ${focusRing}`}
          >
            Describir mi proyecto
          </Link>
          <Link
            href="https://github.com/merloyflores"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white ${focusRing}`}
          >
            <FaGithub size={18} aria-hidden /> Explorar repositorios
          </Link>
        </div>
      </div>
    </div>
  );
}