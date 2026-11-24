'use client';

import { useEffect } from 'react';

/**
 * Hace aparecer suave todo lo que lleve `data-rv` cuando entra en pantalla (una sola vez).
 * `data-rv="2"` retrasa 2 × 80 ms, para que una fila de tarjetas entre en cascada corta.
 * Con «reducir movimiento» el CSS deja todo quieto y visible.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.querySelector('.pv');
    if (!root) return;
    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-rv]'));
    els.forEach((el) => { const n = Number(el.dataset.rv || 0); if (n) el.style.setProperty('--rv-d', `${n * 80}ms`); });
    if (!('IntersectionObserver' in window)) { els.forEach((el) => el.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
