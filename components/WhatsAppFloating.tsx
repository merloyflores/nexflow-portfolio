'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';

/*
  Cambios frente a la versión anterior:
  · Antes usaba position:absolute con bottom:calc(100%+24px), que solo funciona si el footer
    es `relative` y el botón está dentro de él (no lo estaba). Ahora el botón siempre es fixed y
    se desplaza hacia arriba lo justo para quedar 24px sobre el footer, sin taparlo.
  · Más pequeño y sobrio (56px en vez de ~74px, sin pulso permanente).
  · No aparece en /contacto (ya estás en la página de contacto).
  · Un aviso breve, una sola vez por sesión, en lugar de depender solo del hover.
*/
export default function WhatsAppFloating() {
  const pathname = usePathname();
  const ref = useRef<HTMLAnchorElement>(null);
  const [teaser, setTeaser] = useState(false);

  // Sube junto con el footer
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const footer = document.querySelector('footer');
      const el = ref.current;
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

  // Aviso breve, una sola vez por sesión
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

  if (pathname === '/contacto') return null;

  return (
    <a
      ref={ref}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center will-change-transform sm:bottom-6 sm:right-6"
    >
      <span
        className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-xl border border-white/10 bg-slate-900 px-4 py-2.5 text-sm text-white shadow-xl transition-all duration-300 ${
          teaser
            ? 'translate-x-0 opacity-100'
            : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100'
        }`}
      >
        ¿Hablamos de tu proyecto?
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 transition-transform duration-300 group-hover:scale-105 group-active:scale-95 group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-sky-400">
        <FaWhatsapp size={30} aria-hidden />
      </span>
    </a>
  );
}