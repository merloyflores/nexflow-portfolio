import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import ContactForm from '../../../components/site/ContactForm';
import { Container } from '../../../components/site/ui';
import { EMAIL, PHONE, PHONE_HREF, waLink } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Escribinos por WhatsApp, correo o formulario. Te respondemos en el día con una idea clara de cómo lo haríamos.',
};

const CHANNELS = [
  { Icon: FaWhatsapp, t: 'WhatsApp', d: 'La forma más rápida.', v: PHONE, href: waLink('Hola Nexflow, quiero hacer una consulta.'), ext: true },
  { Icon: Mail, t: 'Correo', d: 'Para enviar documentos.', v: EMAIL, href: `mailto:${EMAIL}` },
  { Icon: Phone, t: 'Teléfono', d: 'Lunes a viernes.', v: PHONE, href: PHONE_HREF },
];

export default async function Page({ searchParams }: { searchParams: Promise<{ tema?: string }> }) {
  const { tema } = await searchParams;
  return (
    <Container className="pt-16 sm:pt-24 pb-24 sm:pb-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5" data-rv>
          <h1 className="t-h1">Conversemos.</h1>
          <p className="t-lead mt-6">Contanos qué querés lograr. Te respondemos en el día hábil con una idea clara de cómo lo haríamos, cuánto tomaría y cuánto costaría.</p>
          <ul className="mt-10 space-y-3">
            {CHANNELS.map(({ Icon, t, d, v, href, ext }) => (
              <li key={t}>
                <a href={href} {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})} className="surface lift flex items-center gap-4 p-4">
                  <span className="tile"><Icon size={18} /></span>
                  <span className="flex-1 min-w-0">
                    <span className="block font-semibold">{t} <span className="font-normal muted text-[.88rem]">· {d}</span></span>
                    <span className="block truncate text-[.93rem] ink2">{v}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="t-small mt-8">Trabajamos en todo Costa Rica de forma remota, y en persona en el Valle Central cuando hace falta.</p>
        </div>
        <div className="lg:col-span-7" data-rv="1"><ContactForm initial={tema ?? 'web'} /></div>
      </div>
    </Container>
  );
}
