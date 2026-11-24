'use client';

import { useEffect, useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

/**
 * Herramientas del artículo, en el navegador:
 * - ReadProgress: la rayita de arriba que avanza mientras se lee (responde al scroll de la persona).
 * - Toc: el índice «En este artículo», que marca la sección en la que vas.
 * - Share: compartir por WhatsApp o LinkedIn, o copiar el enlace.
 */
export function ReadProgress() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.read-progress');
    const body = document.querySelector<HTMLElement>('[data-article]');
    if (!el || !body) return;
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = body.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - window.innerHeight)));
        el.style.setProperty('--p', String(p));
      });
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return <div className="read-progress" aria-hidden />;
}

export function Toc({ items }: { items: { id: string; text: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);
  useEffect(() => {
    const els = items.map((h) => document.getElementById(h.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => {
      const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (vis) setActive(vis.target.id);
    }, { rootMargin: '-80px 0px -65% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [items]);
  if (items.length < 2) return null;
  return (
    <nav aria-label="En este artículo" className="toc">
      <p className="text-[.85rem] font-semibold mb-3">En este artículo</p>
      {items.map((h) => <a key={h.id} href={`#${h.id}`} aria-current={active === h.id ? 'true' : undefined}>{h.text}</a>)}
    </nav>
  );
}

export function Share({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* sin portapapeles */ }
  };
  return (
    <div className="flex items-center gap-2">
      <a className="icon-btn" href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir por WhatsApp"><FaWhatsapp size={15} /></a>
      <a className="icon-btn" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en LinkedIn"><FaLinkedinIn size={14} /></a>
      <button type="button" className="icon-btn" onClick={copy} aria-label={copied ? 'Enlace copiado' : 'Copiar el enlace'}>{copied ? <Check size={15} /> : <Link2 size={15} />}</button>
      <span className="sr-only" aria-live="polite">{copied ? 'Enlace copiado' : ''}</span>
    </div>
  );
}
