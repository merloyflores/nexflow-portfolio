'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Aparición suave de lo que lleve `data-rv` al entrar en pantalla (una sola vez).
 * `data-rv="2"` lo retrasa 2 × 80 ms para que una fila de tarjetas entre en cascada corta.
 * Se vuelve a enganchar en cada cambio de página. Con «reducir movimiento» el CSS deja todo quieto.
 */
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]:not(.in)'));
    els.forEach((el) => { const n = Number(el.dataset.rv || 0); if (n) el.style.setProperty('--rv-d', `${n * 80}ms`); });
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
