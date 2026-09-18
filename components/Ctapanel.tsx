import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';
const HEADING = 'font-[family-name:var(--font-display)]';

type Props = {
  title: string;
  text: string;
  primary: { label: string; href: string };
};

// Requiere que la página envuelva el contenido con `display.variable` (fuente de titulares)
export default function CtaPanel({ title, text, primary }: Props) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.03) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(80% 100% at 0% 0%, #000, transparent)',
          WebkitMaskImage: 'radial-gradient(80% 100% at 0% 0%, #000, transparent)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl"
      />

      <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
        <div className="max-w-xl">
          <h2 className={`${HEADING} text-3xl font-semibold tracking-tight text-white text-balance md:text-4xl`}>
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">{text}</p>
        </div>

        <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-72">
          <Link
            href={primary.href}
            className="flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            {primary.label}
          </Link>
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 rounded-2xl border border-white/15 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400"
          >
            <FaWhatsapp size={22} className="text-emerald-400" aria-hidden /> Escribir por WhatsApp
          </Link>
        </div>
      </div>
    </div>
  );
}