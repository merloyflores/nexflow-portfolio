import { BarChart3, Check, CheckCircle2, FileSpreadsheet, Mail, MapPin, Search, ShieldCheck, ShoppingBag } from 'lucide-react';
import { TOPICS, type CoverKind } from '@/lib/blog';

/**
 * Portada de un artículo, dibujada con código (sin fotos de stock ni imágenes generadas).
 * Cada tema tiene su dibujo y su color, el mismo del servicio en el sitio; el «slug» del artículo cambia
 * detalles (alturas de barras, de qué lado va el dibujo), así dos artículos del mismo tema no se ven idénticos.
 * Todo se mide en «cqw» (porcentaje del ancho de la portada): el mismo dibujo sirve para una tarjeta chica
 * y para el banner grande del artículo.
 */
function seed(slug: string) {
  let h = 0;
  for (const c of slug) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}
const ic = (cqw: number) => ({ width: `${cqw}cqw`, height: `${cqw}cqw` });

function Web({ s }: { s: number }) {
  return (
    <div className="cv-card" style={{ width: '62cqw' }}>
      <div className="cv-bar"><i /><i /><i /><span className="cv-pill" style={{ width: '30%' }} /></div>
      <div className="cv-pad grid grid-cols-[1.3fr_1fr] gap-[3cqw] items-center">
        <div>
          <span className="cv-line cv-ink" style={{ width: '92%', height: '2.6cqw' }} />
          <span className="cv-line cv-ink mt-[1.4cqw]" style={{ width: `${60 + (s % 25)}%`, height: '2.6cqw' }} />
          <span className="cv-line mt-[2.4cqw]" style={{ width: '85%' }} />
          <span className="cv-line mt-[1cqw]" style={{ width: '70%' }} />
          <span className="cv-btn mt-[3cqw]" />
        </div>
        <div className="cv-img" />
      </div>
    </div>
  );
}

function Signals({ s }: { s: number }) {
  return (
    <div className="cv-card cv-pad" style={{ width: '58cqw' }}>
      <div className="cv-search"><Search style={ic(2.6)} aria-hidden /><span className="cv-line" style={{ width: '55%' }} /></div>
      {[0, 1, 2].map((i) => (
        <div key={i} className={`cv-row ${i === s % 3 ? 'cv-row-on' : ''}`}>
          <span className="cv-dot">{i === s % 3 ? <MapPin style={ic(2.4)} aria-hidden /> : null}</span>
          <span className="flex-1">
            <span className="cv-line cv-ink" style={{ width: `${55 + ((s >> i) % 30)}%` }} />
            <span className="cv-line mt-[1cqw]" style={{ width: '80%' }} />
          </span>
        </div>
      ))}
    </div>
  );
}

function Ecommerce({ s }: { s: number }) {
  return (
    <div className="relative" style={{ width: '56cqw' }}>
      <div className="cv-card cv-pad grid grid-cols-2 gap-[2.4cqw]">
        {[0, 1].map((i) => (
          <div key={i}>
            <div className="cv-img" style={{ aspectRatio: '1' }} />
            <span className="cv-line cv-ink mt-[1.8cqw]" style={{ width: '80%' }} />
            <span className="cv-price mt-[1.2cqw]">₡{12 + ((s >> (i * 3)) % 30)} 900</span>
          </div>
        ))}
      </div>
      <div className="cv-toast" style={{ right: '-6cqw', top: '-4cqw' }}>
        <span className="cv-dot cv-dot-on"><ShoppingBag style={ic(2.2)} aria-hidden /></span>
        <span><span className="cv-line cv-ink" style={{ width: '13cqw' }} /><span className="cv-line mt-[.8cqw]" style={{ width: '9cqw' }} /></span>
      </div>
    </div>
  );
}

function Automation() {
  const steps = [Mail, FileSpreadsheet, CheckCircle2];
  return (
    <div className="cv-flow" style={{ width: '64cqw' }}>
      {steps.map((Icon, i) => (
        <div key={i} className={`cv-node ${i === steps.length - 1 ? 'cv-node-on' : ''}`}>
          <Icon style={ic(4.2)} aria-hidden />
          <span className="cv-line mt-[1.6cqw]" style={{ width: '70%' }} />
        </div>
      ))}
    </div>
  );
}

function Data({ s }: { s: number }) {
  const bars = Array.from({ length: 8 }, (_, i) => 30 + ((s >> i) % 50) + i * 4);
  return (
    <div className="cv-card cv-pad" style={{ width: '58cqw' }}>
      <div className="flex items-center gap-[1.4cqw]"><BarChart3 style={ic(2.6)} className="cv-tone" aria-hidden /><span className="cv-line cv-ink" style={{ width: '30%' }} /></div>
      <div className="grid grid-cols-2 gap-[1.6cqw] mt-[2.6cqw]">
        {[0, 1].map((i) => (
          <div key={i} className="rounded-[1.2cqw] border b p-[1.6cqw]">
            <span className="cv-line" style={{ width: '60%' }} />
            <span className="cv-line cv-ink mt-[1.2cqw]" style={{ width: `${40 + ((s >> (i + 2)) % 35)}%`, height: '2.4cqw' }} />
          </div>
        ))}
      </div>
      <div className="cv-bars mt-[2.6cqw]">
        {bars.map((h, i) => <span key={i} className={i === bars.length - 1 ? 'cv-bar-on' : ''} style={{ height: `${Math.min(h, 100)}%` }} />)}
      </div>
    </div>
  );
}

function Audit() {
  return (
    <div className="cv-card cv-pad flex items-start gap-[3cqw]" style={{ width: '58cqw' }}>
      <span className="cv-shield"><ShieldCheck style={ic(6)} aria-hidden /></span>
      <div className="flex-1 space-y-[1.8cqw]">
        {[78, 64, 70].map((w, i) => (
          <div key={i} className="flex items-center gap-[1.6cqw]">
            <span className="cv-check"><Check style={ic(1.8)} aria-hidden /></span>
            <span className="cv-line" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Cover({ kind, slug, className = '' }: { kind: CoverKind; slug: string; className?: string }) {
  const s = seed(slug);
  const flip = s % 2 === 1;
  const motif = { web: <Web s={s} />, signals: <Signals s={s} />, ecommerce: <Ecommerce s={s} />, automation: <Automation />, data: <Data s={s} />, audit: <Audit /> }[kind];
  return (
    <div className={`cover ${className}`} data-tone={TOPICS[kind].tone} aria-hidden>
      <div className={`cover-stage ${flip ? 'cover-flip' : ''}`}>{motif}</div>
    </div>
  );
}
