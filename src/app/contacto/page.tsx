import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from '../../../components/Contactform';
import { display } from '../../lib/fonts';

export const metadata: Metadata = {
  title: 'Contacto | Nexflow Digital',
  description:
    'Cuéntanos qué proceso o proyecto quieres mejorar. Te respondemos en menos de 24 horas y agendamos una sesión de 30 minutos sin costo.',
};

const HEADING = 'font-[family-name:var(--font-display)]';
const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';

const next = [
  { title: 'Recibimos tu mensaje', text: 'Lo leemos con calma y revisamos tu caso.' },
  { title: 'Te respondemos en menos de 24 horas', text: 'Por WhatsApp o correo, como prefieras.' },
  {
    title: 'Sesión de 30 minutos, sin costo',
    text: 'Definimos qué conviene construir o automatizar primero.',
  },
];

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string | string[] }>;
}) {
  const { tipo } = await searchParams;
  const defaultType = Array.isArray(tipo) ? tipo[0] : tipo;

  return (
    <main className={`${display.variable} relative min-h-screen overflow-hidden bg-slate-950 pb-24 pt-32 text-slate-300 md:pt-40`}>
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-sky-500/10 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        {/* Columna informativa */}
        <div className="lg:col-span-5">
          <h1 className={`${HEADING} text-4xl font-semibold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl`}>
            Cuéntanos qué te quita tiempo.
            <span className="block text-slate-500">Te respondemos con una ruta clara.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-400">
            Sin formularios eternos: dinos qué necesitas y nosotros nos encargamos de proponerte el
            siguiente paso.
          </p>

          {/* Qué pasa después: mismo hilo que recorre el resto del sitio */}
          <ol className="relative mt-12 space-y-8 border-l border-white/10 pl-8">
            {next.map((s) => (
              <li key={s.title} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full border border-sky-400 bg-slate-950"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                </span>
                <h2 className="font-semibold text-white">{s.title}</h2>
                <p className="mt-1 text-slate-400">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-sm">
            <p className="text-slate-500">¿Prefieres escribir directo?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
            >
              <FaWhatsapp size={18} className="text-emerald-400" aria-hidden /> WhatsApp: +506 7265 5724
            </a>
            <a
              href="mailto:merloy123@gmail.com"
              className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
            >
              <Mail size={18} className="text-sky-400" aria-hidden /> merloy123@gmail.com
            </a>
            <p className="pt-2 text-slate-500">
              Tratamos tu información con confidencialidad.{' '}
              <Link href="/privacidad" className="underline underline-offset-4 hover:text-white">
                Ver política de privacidad
              </Link>
            </p>
          </div>
        </div>

        {/* Formulario */}
        <div className="lg:col-span-7">
          <div className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-sky-500/5 blur-2xl"
            />
            <div className="rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.05] to-white/[0.02] p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-10">
              <ContactForm defaultType={defaultType} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}