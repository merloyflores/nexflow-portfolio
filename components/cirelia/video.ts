/**
 * v3.8 — El video del anuncio en /planes.
 *
 * El video NO vive en este proyecto (pesa 150 MB y saturaría Vercel): se sube a un servicio de video y acá solo va
 * el enlace, en la variable de entorno PLANES_VIDEO_URL (Vercel → Settings → Environment Variables).
 * Acepta cualquiera de estos enlaces, tal cual se copian:
 *   · YouTube:  https://youtu.be/XXXXXXXXXXX  ·  https://www.youtube.com/watch?v=XXXXXXXXXXX
 *   · Bunny Stream: https://iframe.mediadelivery.net/play/123456/abcd-...  (o /embed/)
 *   · Vimeo:    https://vimeo.com/123456789
 *   · Un .mp4 directo (por ejemplo, de Supabase Storage)
 * Sin la variable, la página muestra las pantallas del producto en su lugar (no queda un hueco).
 */
export type PlanesVideo =
  | { kind: 'iframe'; src: string; provider: 'youtube' | 'bunny' | 'vimeo' }
  | { kind: 'file'; src: string };

export function parseVideoUrl(raw: string | undefined | null): PlanesVideo | null {
  const url = (raw ?? '').trim();
  if (!url) return null;

  const yt = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([\w-]{11})/) ?? (/^[\w-]{11}$/.test(url) ? [url, url] : null);
  // youtube-nocookie: no deja cookies de seguimiento hasta que la persona le da play. rel=0: al final solo sugiere tus videos.
  if (yt) return { kind: 'iframe', provider: 'youtube', src: `https://www.youtube-nocookie.com/embed/${yt[1]}?autoplay=1&rel=0&modestbranding=1&playsinline=1` };

  const bunny = url.match(/mediadelivery\.net\/(?:play|embed)\/(\d+)\/([\w-]+)/);
  if (bunny) return { kind: 'iframe', provider: 'bunny', src: `https://iframe.mediadelivery.net/embed/${bunny[1]}/${bunny[2]}?autoplay=true&preload=true&responsive=true` };

  const vimeo = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeo) return { kind: 'iframe', provider: 'vimeo', src: `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1&dnt=1&title=0&byline=0&portrait=0` };

  if (/^https:\/\/.+\.(mp4|webm|mov)(\?.*)?$/i.test(url)) return { kind: 'file', src: url };
  return null;
}

/**
 * v6.4 — La portada del video. Antes era una imagen fija (/cirelia/video-poster.webp): al cambiar el video,
 * la portada seguía mostrando el anterior y parecía que no había cambiado. Con YouTube ahora se usa la miniatura
 * del propio video (la que elegiste al subirlo); con otros servicios, la imagen fija de siempre.
 */
export const DEFAULT_POSTER = '/cirelia/video-poster.webp';
export function videoPoster(video: PlanesVideo | null | undefined): string {
  const id = video?.kind === 'iframe' && video.provider === 'youtube' ? video.src.match(/\/embed\/([\w-]{11})/)?.[1] : null;
  return id ? `https://i.ytimg.com/vi/${id}/maxresdefault.jpg` : DEFAULT_POSTER;
}
/** Si YouTube no tiene la miniatura en alta, cae a la de calidad media (y si tampoco, a la fija). */
export function posterFallback(e: { currentTarget: HTMLImageElement }) {
  const img = e.currentTarget;
  if (img.src.includes('/maxresdefault.jpg')) img.src = img.src.replace('/maxresdefault.jpg', '/hqdefault.jpg');
  else if (!img.src.endsWith(DEFAULT_POSTER)) img.src = DEFAULT_POSTER;
}
