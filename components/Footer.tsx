'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ChevronRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-400 pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contenedor Principal: 1 columna en móvil, 3 en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          
        {/* COLUMNA 1: Marca y Pitch Profesional */}
        <div className="flex flex-col items-center md:items-start space-y-6"> 
          {/* El logo de Nexflow Digital ahora sustituye al texto para mayor profesionalismo */}
          <Link href="/" className="inline-block">
            <div className="relative w-44 h-12">
              <Image 
                src="/LOGOBLANCO.png" 
                alt="Nexflow Digital" 
                fill
                className="object-contain object-center md:object-left"
              />
            </div>
          </Link>

          {/* Mensaje de autoridad de la agencia */}
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto md:mx-0">
            Diseñamos ecosistemas digitales de alto rendimiento. Arquitectura de software, automatización empresarial y presencia web corporativa para negocios que exigen resultados.
          </p>

          {/* REDES SOCIALES: Solo visibles en móvil (md:hidden) */}
          <div className="flex md:hidden items-center gap-3 pt-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-blue-600 hover:text-white transition-all" aria-label="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-pink-600 hover:text-white transition-all" aria-label="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-slate-800 hover:text-white transition-all" aria-label="TikTok">
              <FaTiktok size={18} />
            </a>
            <a href="https://www.linkedin.com/in/merloyflores/" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-blue-500 hover:text-white transition-all" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://github.com/merloyflores" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-white/5 rounded-lg hover:bg-slate-700 hover:text-white transition-all" aria-label="GitHub">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

          {/* COLUMNA 2: Enlaces Rápidos (Estructura de empresa) */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Soluciones</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/desarrollo-web" className="text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                  <ChevronRight size={14} className="text-blue-500" /> Desarrollo Web Moderno
                </Link>
              </li>
              <li>
                <Link href="/#automatizacion" className="text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                  <ChevronRight size={14} className="text-blue-500" /> Power Platform & BI
                </Link>
              </li>
              <li>
                <Link href="/auditoria-tecnica" className="text-sm hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                  <ChevronRight size={14} className="text-blue-500" /> Auditoría Técnica
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: Contacto y Redes */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contacto</h3>
            <ul className="space-y-4 mb-8 text-sm">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail size={16} className="text-blue-500" />
                <a href="mailto:merloy123@gmail.com" className="hover:text-blue-400 transition-colors">
                  merloy123@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin size={16} className="text-blue-500" />
                <span>Costa Rica</span>
              </li>
            </ul>

            {/* COLUMNA 3: Redes para PC */}
            <div className="hidden md:flex flex-col items-start">
              <div className="flex items-center gap-3">
                <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-blue-600 transition-all"><FaFacebook size={18} /></a>
                <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-pink-600 transition-all"><FaInstagram size={18} /></a>
                <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-slate-800 transition-all"><FaTiktok size={18} /></a>
                <a href="https://www.linkedin.com/in/merloyflores/" className="p-2.5 bg-white/5 rounded-lg hover:bg-blue-500 transition-all"><FaLinkedin size={18} /></a>
                <a href="https://github.com/merloyflores" className="p-2.5 bg-white/5 rounded-lg hover:bg-slate-700 transition-all"><FaGithub size={18} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FOOTER: Legal y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 text-xs text-gray-500">
          <p>&copy; {currentYear} Nexflow Digital. Todos los derechos reservados.</p>
          
          {/* Elemento extra de confianza corporativa */}
          <div className="flex gap-6">
            <Link href="terminos" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="privacidad" className="hover:text-white transition-colors">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;