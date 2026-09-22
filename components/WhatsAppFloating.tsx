'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowLeft, MessageCircle, X } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';

const HEADING = 'font-[family-name:var(--font-display)]';

type Faq = {
  id: string;
  question: string;
  answer: string;
};

// Respuestas reales de Nexflow Digital, sin precios ni plazos inventados —
// cuando la respuesta depende del proyecto, se dice así y se ofrece la
// auditoría gratis o WhatsApp para afinar el detalle.
const FAQS: Faq[] = [
  {
    id: 'precio',
    question: '¿Cuánto cuesta un proyecto?',
    answer:
      'Depende del alcance: no es lo mismo un sitio de presentación que una plataforma con panel de administración. Por eso empezamos siempre con una auditoría gratuita — ahí definimos exactamente qué necesitas y te damos un número real, no una tarifa genérica.',
  },
  {
    id: 'servicios',
    question: '¿Qué servicios ofrecen?',
    answer:
      'Tres frentes: desarrollo de sitios y apps a la medida en Next.js, automatización de procesos con Power Automate y Power Apps, y dashboards de datos con Power BI. Podemos ayudarte con uno solo o con los tres integrados.',
  },
  {
    id: 'proceso',
    question: '¿Cómo es el proceso de trabajo?',
    answer:
      'Cuatro pasos: auditoría gratis para entender tu proceso, propuesta a tu medida con alcance y plazos, construcción por etapas (vas viendo avances reales, no solo al final), y lanzamiento con acompañamiento posterior.',
  },
  {
    id: 'pymes',
    question: '¿Trabajan con negocios pequeños?',
    answer:
      'Sí. Trabajamos con pymes de Costa Rica y también con clientes internacionales, sin importar el tamaño del proyecto. Hablas directo con quien construye tu proyecto, sin intermediarios.',
  },
  {
    id: 'tiempo',
    question: '¿Cuánto tiempo tarda un proyecto?',
    answer:
      'También depende del alcance — un sitio simple avanza distinto a una plataforma con automatización integrada. En la propuesta te damos un cronograma claro, y trabajamos por etapas para que veas avances funcionales en el camino.',
  },
];

export default function WhatsAppFloating() {
  const pathname = usePathname();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [teaser, setTeaser] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<Faq | null>(null);
  const [reduced, setReduced] = useState(false);

  // Respeta "reduce motion" del sistema
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Sube junto con el footer, para no taparlo
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const footer = document.querySelector('footer');
      const el = wrapRef.current;
      if (!footer || !el) return;
      const overlap = Math.max(0, window.innerHeight - footer.getBoundingClientRect().top);
      el.style.transform = `translateY(${-overlap}px)`;
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

  // Aviso breve, una sola vez por sesión (solo si el panel sigue cerrado)
  useEffect(() => {
    if (pathname === '/contacto') return;
    try {
      if (sessionStorage.getItem('nf-wa-teaser')) return;
    } catch {
      return;
    }
    const show = setTimeout(() => {
      setTeaser(true);
      try {
        sessionStorage.setItem('nf-wa-teaser', '1');
      } catch {}
    }, 9000);
    const hide = setTimeout(() => setTeaser(false), 16000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [pathname]);

  // Cierra el panel al cambiar de página, y con Escape
  useEffect(() => {
    setOpen(false);
    setActiveFaq(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (pathname === '/contacto') return null;

  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      if (!next) setActiveFaq(null);
      return next;
    });
    setTeaser(false);
  };

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 will-change-transform sm:bottom-6 sm:right-6"
    >
      <style>{`
        @keyframes nf-wa-pop { from { opacity: 0; transform: translateY(12px) scale(.98) } to { opacity: 1; transform: none } }
        .nf-wa-panel { animation: nf-wa-pop .22s cubic-bezier(.2,.7,.2,1) both; }
        @media (prefers-reduced-motion: reduce) {
          .nf-wa-panel { animation: none; }
        }
      `}</style>

      {/* Panel de preguntas frecuentes */}
      {open && (
        <div
          role="dialog"
          aria-label="Preguntas frecuentes de Nexflow Digital"
          className="nf-wa-panel flex w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950 shadow-2xl shadow-black/50"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-[#25D366]/10 px-4 py-3.5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <FaWhatsapp size={18} aria-hidden />
              </span>
              <div>
                <p className={`${HEADING} text-sm font-semibold text-white`}>Nexflow Digital</p>
                <p className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
                  Responde en horario laboral
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          {/* Contenido: menú de preguntas o respuesta activa */}
          <div className="max-h-96 overflow-y-auto px-4 py-4">
            {!activeFaq ? (
              <>
                <p className="text-sm text-slate-400">
                  Hola 👋 Estas son las preguntas que más nos hacen. Elige una para ver la respuesta al
                  instante:
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  {FAQS.map((faq) => (
                    <button
                      key={faq.id}
                      type="button"
                      onClick={() => setActiveFaq(faq)}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-slate-200 transition-colors hover:border-sky-400/30 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div>
                <button
                  type="button"
                  onClick={() => setActiveFaq(null)}
                  className="inline-flex items-center gap-1.5 rounded-lg text-xs font-medium text-slate-400 transition-colors hover:text-sky-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
                >
                  <ArrowLeft size={14} aria-hidden />
                  Ver otras preguntas
                </button>

                <p className={`${HEADING} mt-4 text-sm font-semibold text-white`}>
                  {activeFaq.question}
                </p>
                <p className="mt-2 rounded-xl rounded-tl-sm bg-white/5 p-3.5 text-sm leading-relaxed text-slate-300">
                  {activeFaq.answer}
                </p>
              </div>
            )}
          </div>

          {/* Salida a WhatsApp, siempre visible */}
          <div className="border-t border-white/10 bg-white/[0.02] p-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.01] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              <FaWhatsapp size={18} aria-hidden />
              {activeFaq ? '¿Necesitas más detalle? Hablar por WhatsApp' : 'Hablar directo por WhatsApp'}
            </a>
          </div>
        </div>
      )}

      {/* Botón flotante que abre/cierra el panel */}
      <div className="group relative flex items-center">
        <span
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white shadow-xl transition-all duration-300 ${
            !open && teaser
              ? 'translate-x-0 opacity-100'
              : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
          }`}
        >
          {open ? 'Cerrar' : 'Resuelve tus dudas al instante'}
        </span>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-label={open ? 'Cerrar preguntas frecuentes' : 'Abrir preguntas frecuentes de WhatsApp'}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
        >
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
              open && !reduced ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
            }`}
          >
            <FaWhatsapp size={30} aria-hidden />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${
              open ? 'scale-100 opacity-100' : reduced ? 'hidden' : 'scale-0 opacity-0'
            }`}
          >
            <MessageCircle size={26} aria-hidden />
          </span>
        </button>
      </div>
    </div>
  );
}