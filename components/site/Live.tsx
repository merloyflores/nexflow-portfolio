'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Vista en vivo de un sitio (como en la v1): se monta un iframe del sitio real, en tamaño de compu (1440 px)
 * o de celular (390 px), y se achica con `scale` para que quepa en el marco. Así, si el cliente cambia su
 * página, acá se ve el cambio sin tocar nada.
 *
 * Cómo se cuida el rendimiento:
 * - La captura (imagen) se ve primero; el sitio en vivo se carga recién cuando el marco está por entrar en
 *   pantalla, y aparece con un fundido cuando terminó de cargar. Si no carga, queda la captura.
 * - No se puede tocar ni enfocar (pointer-events: none, tabIndex -1): es una vista, no una navegación.
 * - Con "ahorro de datos" activado en el celular, se queda solo la captura.
 * Algunos sitios no se dejan mostrar dentro de otro (cabecera X-Frame-Options); para esos se usa solo la captura.
 */
export default function Live({ url, mobile, title }: { url: string; mobile?: boolean; title: string }) {
  const box = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [size, setSize] = useState({ scale: 0, h: 0 });
  const W = mobile ? 390 : 1440;

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    try {
      const c = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
      if (c?.saveData) return;
    } catch { /* sin datos de conexión */ }
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      if (width) setSize({ scale: width / W, h: height / (width / W) });
    });
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        // Después de que la página terminó lo suyo, para no competir con la carga inicial.
        const go = () => setOn(true);
        if ('requestIdleCallback' in window) (window as Window & { requestIdleCallback: (f: () => void, o?: { timeout: number }) => void }).requestIdleCallback(go, { timeout: 1500 });
        else setTimeout(go, 400);
        io.disconnect();
      }
    }, { rootMargin: '300px' });
    io.observe(el);
    return () => { ro.disconnect(); io.disconnect(); };
  }, [W]);

  return (
    <div ref={box} className="live" aria-hidden>
      {on && size.scale > 0 && (
        <iframe
          src={url}
          title={title}
          tabIndex={-1}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          referrerPolicy="no-referrer"
          onLoad={() => setTimeout(() => setLoaded(true), 600)}
          className={loaded ? 'is-on' : ''}
          style={{ width: W, height: size.h, transform: `scale(${size.scale})` }}
        />
      )}
    </div>
  );
}
