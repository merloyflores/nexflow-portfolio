import Live from './Live';

/**
 * Antes de mostrar un sitio en vivo, revisamos (en el servidor) si ese sitio se deja mostrar dentro de otro.
 * Algunos lo prohíben con la cabecera X-Frame-Options o con «frame-ancestors» en su política de seguridad;
 * si se intenta igual, el navegador muestra un recuadro en blanco encima de la captura.
 * El resultado se guarda un día (revalidate), así no se consulta en cada visita. Si la consulta falla, queda la captura.
 */
async function canFrame(url: string) {
  try {
    const r = await fetch(url, { next: { revalidate: 86400 }, redirect: 'follow', signal: AbortSignal.timeout(6000) });
    const xfo = (r.headers.get('x-frame-options') || '').toLowerCase();
    if (xfo.includes('deny') || xfo.includes('sameorigin')) return false;
    const fa = /frame-ancestors([^;]*)/i.exec(r.headers.get('content-security-policy') || '');
    if (fa && !/\*|nexflow-portfolio\.vercel\.app/.test(fa[1])) return false;
    return r.ok;
  } catch {
    return false;
  }
}

export default async function LiveIf({ url, mobile, title }: { url: string; mobile?: boolean; title: string }) {
  if (!(await canFrame(url))) return null;
  return <Live url={url} mobile={mobile} title={title} />;
}
