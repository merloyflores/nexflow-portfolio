/* eslint-disable @next/next/no-img-element */
/**
 * Capturas reales del producto (public/planes/v2). Si hay versión oscura, se muestra la del modo activo.
 * `<img>` simple a propósito: son webp livianos ya optimizados (60–110 KB) y así la oculta no se descarga.
 */
type ShotProps = { name: string; alt: string; dark?: boolean; eager?: boolean; w?: number; h?: number };

export function ThemedImg({ name, alt, dark, eager, w = 1800, h = 1125 }: ShotProps) {
  const load = eager ? 'eager' : 'lazy';
  if (!dark) return <img src={`/cirelia/${name}.webp`} alt={alt} width={w} height={h} loading={load} decoding="async" />;
  return (
    <>
      <img className="pv-only-light" src={`/cirelia/${name}-light.webp`} alt={alt} width={w} height={h} loading={load} decoding="async" />
      <img className="pv-only-dark" src={`/cirelia/${name}-dark.webp`} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
    </>
  );
}

export function BrowserFrame({ url, children, className = '' }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`pv-frame ${className}`}>
      <div className="pv-frame-bar" aria-hidden><i /><i /><i /><span className="pv-frame-url">{url}</span></div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`pv-phone ${className}`}><div>{children}</div></div>;
}
