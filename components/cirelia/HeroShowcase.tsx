'use client';

import { useEffect, useRef, useState } from 'react';
import { BrowserFrame, ThemedImg } from './Shot';

/**
 * Las pantallas del hero, con pestañas segmentadas. Pasan solas cada 6 s (con una barrita de avance) hasta que la
 * persona toca una pestaña; ahí se quedan quietas. Con «reducir movimiento» o la pestaña del navegador en segundo plano,
 * no pasan solas. Si la sección sale de la pantalla, también se pausa.
 */
const TABS = [
  { id: 'panel', label: 'Panel', url: 'tutienda.com/admin', img: { name: 'panel', dark: true }, alt: 'Inicio del panel: ventas del mes, pedidos y lo que se está acabando' },
  { id: 'caja', label: 'Caja', url: 'tutienda.com/admin/vender', img: { name: 'vender', dark: true, w: 1619, h: 1012 }, alt: 'Punto de venta con productos y una venta en curso' },
  { id: 'pedidos', label: 'Pedidos', url: 'tutienda.com/admin/ventas', img: { name: 'ventas', dark: true }, alt: 'Lista de pedidos con sus estados' },
  { id: 'tienda', label: 'Tienda', url: 'tutienda.com', img: { name: 'tienda', dark: false }, alt: 'Portada de una tienda en línea hecha con Cirelia' },
] as const;
const STEP_MS = 6000;

export default function HeroShowcase() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(false);
  const [visible, setVisible] = useState(true);
  const [tick, setTick] = useState(0);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    // El carrusel arranca en el siguiente cuadro (no dentro del efecto), así React no vuelve a pintar de golpe.
    const raf = requestAnimationFrame(() => setAuto(true));
    const el = box.current;
    if (!el || !('IntersectionObserver' in window)) return () => cancelAnimationFrame(raf);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => { cancelAnimationFrame(raf); io.disconnect(); };
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    // Con la pestaña del navegador en segundo plano no avanza: vuelve a intentar en el siguiente ciclo.
    const t = window.setTimeout(() => { if (document.hidden) setTick((v) => v + 1); else setI((v) => (v + 1) % TABS.length); }, STEP_MS);
    return () => window.clearTimeout(t);
  }, [auto, visible, i, tick]);

  const pick = (n: number) => { setAuto(false); setI(n); };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = (i + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length;
    pick(n);
    (e.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]')[n])?.focus();
  };

  return (
    <div ref={box}>
      <div className="flex justify-center">
        <div role="tablist" aria-label="Pantallas de Cirelia" className="pv-seg" onKeyDown={onKey}>
          {TABS.map((t, n) => (
            <button key={t.id} type="button" role="tab" id={`pv-tab-${t.id}`} aria-selected={i === n} aria-controls="pv-hero-stage" tabIndex={i === n ? 0 : -1}
              className="pv-tab" onClick={() => pick(n)}>
              {t.label}
              {auto && visible && i === n && <span className="pv-tab-bar" aria-hidden><i key={`${n}-${tick}`} style={{ ['--pv-dur' as string]: `${STEP_MS}ms` }} /></span>}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mt-8 sm:mt-10">
        <div className="pv-glow" aria-hidden />
        <div id="pv-hero-stage" role="tabpanel" aria-labelledby={`pv-tab-${TABS[i].id}`} className="pv-stage relative z-[1] max-w-5xl mx-auto">
          {TABS.map((t, n) => (
            <div key={t.id} data-on={i === n} aria-hidden={i !== n}>
              <BrowserFrame url={t.url}>
                <ThemedImg name={t.img.name} dark={t.img.dark} alt={t.alt} eager={n === 0} {...('w' in t.img ? { w: t.img.w, h: t.img.h } : {})} />
              </BrowserFrame>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
