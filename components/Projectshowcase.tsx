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
const MOBILE_QUERY = '(max-width: 639px)'; // por debajo de este ancho, el visitante YA está en un celular

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
    name: 'Clínica Ximena Alvarado',
    kind: 'Sitio con agendamiento de citas',
    host: 'centropodologicoximenaalvarado.com',
    url: 'https://centropodologicoximenaalvarado.com/',
    previewUrl: 'https://centropodologicoximenaalvarado.com/',
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
    // TODO: cuando tengas resultados reales de Cirelia (pedidos procesados, tiempo ahorrado en caja),
    // agrégalos aquí como un campo `result` y muéstralos junto al reto.
    name: 'Cirelia Store',
    kind: 'E-commerce a la medida',
    host: 'cirelia-store.vercel.app',
    url: 'https://cirelia-store.vercel.app/',
    previewUrl: 'https://cirelia-store.vercel.app/',
    repo: 'https://github.com/merloyflores/CireliaStore',
    challenge:
      'Vender en línea con el mismo control que da un negocio físico: catálogo, caja y administración en un solo sistema, sin depender de plataformas genéricas.',
    built: [
      'Tienda para el cliente y panel de administración conectados entre sí',
      'Punto de venta (POS) para gestionar pedidos también en persona',
      'Gestión de clientes con niveles de fidelización y seguimiento de pedidos',
    ],
    stack: ['Next.js', 'Supabase', 'POS', 'E-commerce'],
    glow: '#F97316',
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

const css = `
@keyframes nf-drift-a{0%,100%{transform:translate(-8%,-6%) scale(1)}50%{transform:translate(6%,4%) scale(1.12)}}
@keyframes nf-drift-b{0%,100%{transform:translate(8%,6%) scale(1.05)}50%{transform:translate(-6%,-4%) scale(0.95)}}
@keyframes nf-sweep{0%{transform:translateX(-130%) skewX(-12deg)}100%{transform:translateX(230%) skewX(-12deg)}}
.nf-orb-a{animation:nf-drift-a 11s ease-in-out infinite}
.nf-orb-b{animation:nf-drift-b 13s ease-in-out infinite}
.group:hover .nf-sweep{animation:nf-sweep 1.1s ease-out}
@media (prefers-reduced-motion:reduce){
  .nf-orb-a,.nf-orb-b{animation:none}
  .group:hover .nf-sweep{animation:none}
}
`;

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
  const [revealed, setRevealed] = useState(false); // se activa una vez, al entrar en pantalla
  const [reduced, setReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scale, setScale] = useState(0.5);
  const [phoneScale, setPhoneScale] = useState(0.2);
  const [mobileScale, setMobileScale] = useState(0.5);

  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const mobileFrameRef = useRef<HTMLDivElement>(null);

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

  // Detecta celular real: ahí mostramos el marco de teléfono como vista principal,
  // en vez de un sitio de escritorio reducido e ilegible.
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    setIsMobile(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
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

  // El acomodo de entrada (el marco "subiendo" y el celular "entrando de lado")
  // ocurre una sola vez, la primera vez que la sección aparece al hacer scroll.
  useEffect(() => {
    if (inView) setRevealed(true);
  }, [inView]);

  // Escala los sitios (1280px, 390px y la vista móvil) para que quepan en sus marcos.
  // Depende de `isMobile`: ese flag no se conoce hasta después del primer render, así que el
  // marco de celular todavía no existe en el DOM cuando este efecto corre por primera vez. Sin
  // volver a ejecutarlo cuando isMobile cambia, el observador nunca llega a "verlo" y mobileScale
  // se queda en su valor por defecto (el sitio no llena el ancho real del marco).
  useEffect(() => {
    const desk = frameRef.current;
    const phone = phoneRef.current;
    const mobile = mobileFrameRef.current;
    const ro = new ResizeObserver((entries) => {
      for (const e of entries) {
        if (e.target === desk) setScale(e.contentRect.width / DESK_W);
        if (e.target === phone) setPhoneScale(e.contentRect.width / PHONE_W);
        if (e.target === mobile) setMobileScale(e.contentRect.width / PHONE_W);
      }
    });
    if (desk) ro.observe(desk);
    if (phone) ro.observe(phone);
    if (mobile) ro.observe(mobile);
    return () => ro.disconnect();
  }, [isMobile]);

  // Autoplay
  useEffect(() => {
    if (!running) return;
    const t = setTimeout(() => goTo((active + 1) % projects.length), CYCLE_MS);
    return () => clearTimeout(t);
  }, [running, active, goTo]);

  // Inclinación suave y foco de luz que siguen al cursor (solo mouse, solo escritorio)
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
      <style>{`@keyframes nx-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}${css}`}</style>

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
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] lg:mx-0 lg:snap-none lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
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
                className={`group relative min-w-64 shrink-0 snap-start rounded-2xl border border-white/10 bg-white/3 p-5 text-left transition-colors lg:min-w-0 lg:rounded-none lg:border-0 lg:border-b lg:border-white/10 lg:bg-transparent lg:p-0 lg:py-5 ${focusRing} ${
                  isActive
                    ? 'border-sky-400/40 bg-sky-400/6 text-white lg:bg-transparent'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="flex items-start justify-between gap-3">
                  <span
                    className={`${HEADING} block text-lg font-semibold tracking-tight sm:text-xl lg:text-3xl`}
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
                    className="absolute inset-x-5 -bottom-px hidden h-0.5 origin-left bg-sky-400 lg:block"
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
            className="relative perspective-[1600px]"
          >
            {/* Resplandor de fondo: dos manchas de color que respiran lentamente (solo desde tablet: en
                celular, con el marco angosto, dejaban demasiado espacio vacío alrededor) */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-10 hidden overflow-hidden rounded-[3rem] sm:block"
            >
              <div
                className="nf-orb-a absolute left-1/4 top-1/4 h-2/3 w-2/3 rounded-full opacity-30 blur-3xl transition-colors duration-700"
                style={{ backgroundColor: project.glow }}
              />
              <div
                className="nf-orb-b absolute right-1/4 bottom-1/4 h-1/2 w-1/2 rounded-full opacity-20 blur-3xl transition-colors duration-700"
                style={{ backgroundColor: project.glow }}
              />
            </div>

            {isMobile ? (
              /* Vista en un celular real: el marco de teléfono es la vista principal
                 (legible, sin zoom) y es lo único que se monta, para no cargar dos veces el sitio.
                 Ocupa casi todo el ancho disponible, en vez de flotar pequeño en el centro. */
              <div
                className={`relative mx-auto w-full max-w-96 motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                  revealed || reduced
                    ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out'
                    : 'translate-y-6 opacity-0 transition-all duration-700 ease-out'
                }`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-25 blur-2xl transition-colors duration-700"
                  style={{ backgroundColor: project.glow }}
                />
                <div className="rounded-4xl border-[6px] border-slate-700/80 bg-slate-950 p-1 shadow-2xl shadow-black/50">
                  <div
                    ref={mobileFrameRef}
                    className="relative aspect-390/844 w-full overflow-hidden rounded-[1.4rem] bg-slate-800"
                  >
                    {!loaded && <div className="absolute inset-0 animate-pulse bg-slate-800" />}
                    <iframe
                      key={`mobile-${project.previewUrl}`}
                      src={project.previewUrl}
                      title={`Vista móvil de ${project.name}`}
                      loading="lazy"
                      tabIndex={-1}
                      sandbox="allow-scripts allow-same-origin"
                      onLoad={() => setLoaded(true)}
                      style={{
                        width: PHONE_W,
                        height: PHONE_H,
                        transform: `scale(${mobileScale})`,
                        transformOrigin: 'top left',
                      }}
                      className={`pointer-events-none absolute left-0 top-0 max-w-none border-0 bg-white transition-opacity duration-700 ${
                        loaded ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`absolute inset-0 z-10 ${focusRing}`}
                    >
                      <span className="sr-only">Abrir {project.name} en una pestaña nueva</span>
                    </Link>
                  </div>
                </div>
                <p className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  {project.host}
                </p>
              </div>
            ) : (
            <div
              className="relative transform-3d"
              style={{
                transform: 'rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))',
                transition: 'transform 0.3s ease-out',
              }}
            >
              {/* Marco de escritorio: "sube" al entrar en pantalla, la primera vez que se hace scroll hasta aquí */}
              <div
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 ring-1 ring-white/5 motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
                  revealed || reduced
                    ? 'translate-y-0 opacity-100 transition-all duration-700 ease-out'
                    : 'translate-y-12 opacity-0 transition-all duration-700 ease-out'
                }`}
              >
                {/* Acento de color superior, sutil: un degradado fino, no una barra sólida */}
                <div
                  aria-hidden
                  className="h-px w-full opacity-50 transition-all duration-700"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${project.glow}, transparent)`,
                  }}
                />
                <div className="flex h-10 items-center gap-3 border-b border-white/10 bg-linear-to-b from-white/4 to-transparent px-4">
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

                  {/* Destello que recorre el marco una vez, al pasar el cursor */}
                  <div
                    aria-hidden
                    className="nf-sweep pointer-events-none absolute inset-y-0 left-0 z-20 w-1/3 bg-linear-to-r from-transparent via-white/10 to-transparent"
                  />
                </div>
              </div>

              {/* Marco de celular: el mismo sitio a 390 px de ancho, como acento junto al de escritorio */}
              <div
                className={`absolute -bottom-8 right-5 w-[19%] min-w-23 motion-reduce:transition-none motion-reduce:translate-x-0 motion-reduce:opacity-100 ${
                  revealed || reduced
                    ? 'translate-x-0 opacity-100 transition-all duration-700 ease-out delay-150'
                    : 'translate-x-10 opacity-0 transition-all duration-700 ease-out delay-150'
                }`}
              >
                <div className="rounded-[1.4rem] border-[3px] border-slate-600/70 bg-slate-950 p-0.5 shadow-2xl shadow-black/60">
                  <div
                    ref={phoneRef}
                    className="relative aspect-390/844 w-full overflow-hidden rounded-[1.15rem] bg-slate-800"
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
                    {/* Reflejo sutil, como el vidrio de una pantalla real */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>
            )}
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