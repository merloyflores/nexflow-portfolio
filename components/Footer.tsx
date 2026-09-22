'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ChevronRight } from 'lucide-react';
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';

const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';

// Una sola lista para móvil y escritorio (antes estaban duplicadas y en móvil
// Facebook, Instagram y TikTok apuntaban a "#").
const socials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61590617219236',
    icon: FaFacebook,
    hover: 'hover:bg-blue-600',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nexflowdigitalcr',
    icon: FaInstagram,
    hover: 'hover:bg-pink-600',
  },
  {
    label: 'TikTok',
    href: '', // pega aquí la URL cuando tengas la cuenta: mientras esté vacío, no se muestra
    icon: FaTiktok,
    hover: 'hover:bg-slate-700',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/merloyflores/',
    icon: FaLinkedin,
    hover: 'hover:bg-blue-500',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/merloyflores',
    icon: FaGithub,
    hover: 'hover:bg-slate-700',
  },
  {
    label: 'WhatsApp',
    href: WHATSAPP_URL,
    icon: FaWhatsapp,
    hover: 'hover:bg-green-600',
  },
].filter((s) => s.href);

const Socials = ({ className }: { className: string }) => (
  <div className={className}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className={`rounded-lg bg-white/5 p-2.5 text-gray-300 transition-all hover:text-white ${s.hover}`}
      >
        <s.icon size={18} aria-hidden />
      </a>
    ))}
  </div>
);

const linkCls =
  'text-sm hover:text-sky-300 transition-colors inline-flex items-center gap-2';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal: 1 columna en móvil, 3 en escritorio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* COLUMNA 1: marca y pitch */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-44 h-12">
                <Image
                  src="/LOGOBLANCO.png"
                  alt="Nexflow Digital"
                  fill
                  sizes="176px"
                  className="object-contain object-center md:object-left"
                />
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
              Diseñamos ecosistemas digitales de alto rendimiento. Arquitectura de software,
              automatización empresarial y presencia web corporativa para negocios que exigen
              resultados.
            </p>

            {/* Redes: solo en móvil */}
            <Socials className="flex md:hidden items-center gap-3 pt-4" />
          </div>

          {/* COLUMNA 2: enlaces */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
              Soluciones
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/desarrollo-web" className={linkCls}>
                  <ChevronRight size={14} className="text-sky-400" /> Desarrollo Web Moderno
                </Link>
              </li>
              <li>
                <Link href="/#automatizacion" className={linkCls}>
                  <ChevronRight size={14} className="text-sky-400" /> Power Platform & BI
                </Link>
              </li>
              <li>
                <Link href="/auditoria-tecnica" className={linkCls}>
                  <ChevronRight size={14} className="text-sky-400" /> Auditoría Técnica
                </Link>
              </li>
              <li>
                <Link href="/blog" className={linkCls}>
                  <ChevronRight size={14} className="text-sky-400" /> Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className={linkCls}>
                  <ChevronRight size={14} className="text-sky-400" /> Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: contacto y redes */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">
              Contacto
            </h3>
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={16} className="text-sky-400" />
                <a
                  href="mailto:merloy123@gmail.com"
                  className="hover:text-sky-300 transition-colors"
                >
                  merloy123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <FaWhatsapp size={18} className="text-sky-400" />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  +506 7265 5724
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin size={16} className="text-sky-400" />
                <span>Alajuela, Costa Rica</span>
              </li>
            </ul>

            {/* Redes: solo en escritorio */}
            <Socials className="hidden md:flex items-center gap-3" />
          </div>
        </div>

        {/* Legal y copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>&copy; {currentYear} Nexflow Digital. Todos los derechos reservados.</p>

          <div className="flex gap-6">
            <Link href="/terminos" className="hover:text-white transition-colors">
              Términos y Condiciones
            </Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;