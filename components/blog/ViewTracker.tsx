'use client';

import { useEffect, useRef } from 'react';

/**
 * Registra una vista de este artículo, una sola vez por carga de página.
 * No renderiza nada — solo dispara la llamada en segundo plano y no
 * bloquea ni afecta el contenido si falla (por ejemplo, si todavía no
 * hay un contador de vistas configurado en el proyecto).
 */
export function ViewTracker({ slug }: { slug: string }) {
  const sent = useRef(false);

  useEffect(() => {
    if (sent.current) return;
    sent.current = true;

    fetch(`/api/blog-views/${slug}`, { method: 'POST' }).catch(() => {
      // Silencioso a propósito: una vista no registrada nunca debe
      // interrumpir la lectura del artículo.
    });
  }, [slug]);

  return null;
}
