import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa6';
import { NexflowWordmark } from './Logo';
import { EMAIL, PHONE, PHONE_HREF, SERVICES, SOCIAL, WHATSAPP_URL } from '@/lib/site';

const SOCIAL_ICON = { instagram: FaInstagram, facebook: FaFacebookF, linkedin: FaLinkedinIn, github: FaGithub } as const;

const COLS = [
  { title: 'Servicios', links: [...SERVICES.map((s) => ({ href: s.href, label: s.name })), { href: '/clinicas', label: 'Sistemas para clínicas' }, { href: '/diagnostico', label: 'Diagnóstico gratis' }] },
  { title: 'Estudio', links: [{ href: '/proyectos', label: 'Proyectos' }, { href: '/nosotros', label: 'Nosotros' },
      { href: '/como-trabajamos', label: 'Cómo trabajamos' }, { href: '/blog', label: 'Blog' }, { href: '/contacto', label: 'Contacto' }] },
  { title: 'Legal', links: [{ href: '/terminos', label: 'Términos y condiciones' }, { href: '/privacidad', label: 'Política de privacidad' }] },
];

export default function Footer() {
  return (
    <footer className="border-t b mt-auto" style={{ background: 'var(--bg-2)' }}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-16 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <NexflowWordmark />
            <p className="mt-5 max-w-xs t-body text-[.95rem]">Estudio de tecnología en Costa Rica. Sitios, tiendas, sistemas para clínicas, automatización y apps para negocios que quieren crecer con orden.</p>
            <ul className="mt-6 space-y-1.5 text-[.93rem]">
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="link font-medium">WhatsApp {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="ink2 hover:text-[var(--ink)]">{EMAIL}</a></li>
              <li><a href={PHONE_HREF} className="ink2 hover:text-[var(--ink)]">Llamar</a></li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <p className="text-[.85rem] font-semibold">{c.title}</p>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => <li key={l.href}><Link href={l.href} className="text-[.92rem] ink2 hover:text-[var(--ink)]">{l.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse gap-6 border-t b pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-small">© {new Date().getFullYear()} Nexflow Digital · Hecho en Costa Rica</p>
          <ul className="flex items-center gap-2">
            {SOCIAL.map((s) => {
              const Icon = SOCIAL_ICON[s.id];
              return <li key={s.id}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="icon-btn"><Icon size={15} /></a></li>;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
