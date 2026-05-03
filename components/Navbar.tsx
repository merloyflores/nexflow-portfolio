'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Hook para detectar la página actual
import { FaWhatsapp, FaClipboardList } from "react-icons/fa6";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Obtenemos la ruta actual

  const toggleMenu = () => setIsOpen(!isOpen);

  // Función para definir estilos según si el link está activo o no
  const getLinkStyles = (href: string) => {
    const isActive = pathname === href;
    return `px-4 py-2 rounded-xl transition-all duration-300 font-semibold text-sm flex items-center gap-2
      ${isActive 
        ? 'bg-blue-50 text-blue-600' 
        : 'text-slate-600 hover:bg-blue-50 hover:text-blue-600'
      }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* SECCIÓN DEL LOGO */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-32 h-10 lg:w-44 lg:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/LOGOCOLOR.png" 
                alt="Nexflow Digital" 
                fill
                className="object-contain object-left"
                priority 
              />
            </div>
          </Link>
          
          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/#servicios" className={getLinkStyles('/#servicios')}>Servicios</Link>
            <Link href="/#proyectos" className={getLinkStyles('/#proyectos')}>Proyectos</Link>
            <Link href="/#automatizacion" className={getLinkStyles('/#automatizacion')}>Power Solutions</Link>
            
            {/* Botón Escríbenos - Solo visible en LG (PC) en adelante */}
            <Link 
              href="/contacto" 
              className="hidden lg:flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-700 rounded-xl transition-all duration-300 font-bold text-sm border border-slate-200 hover:border-blue-600"
            >
              <FaClipboardList size={14} /> Escríbenos
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://wa.me/50670767769" 
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold items-center gap-2 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp size={18}/> Hablemos
            </Link>

            {/* BOTÓN HAMBURGUESA (MÓVIL) */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

{/* MENÚ MÓVIL CON ANIMACIÓN Y BOTÓN RECUPERADO */}
      <div 
        className={`md:hidden absolute top-20 left-0 w-full transition-all duration-500 ease-in-out transform ${
          isOpen 
            ? 'translate-y-0 opacity-100 visible' 
            : '-translate-y-4 opacity-0 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-10 space-y-3 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-2xl">
          
          {/* Links de Navegación con Hover Suave */}
          <Link 
            href="/#servicios" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
          >
            Servicios
          </Link>
          <Link 
            href="/#proyectos" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
          >
            Proyectos
          </Link>
          <Link 
            href="/#automatizacion" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
          >
            Power Solutions
          </Link>

          {/* Divisor Sutil */}
          <div className="h-px bg-slate-100 mx-4 my-2"></div>

          {/* BOTÓN: ESCRÍBENOS (RECUPERADO) */}
          <Link 
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-3 bg-slate-100 text-slate-800 px-5 py-4 rounded-2xl font-bold border border-slate-200 active:scale-95 transition-transform"
          >
            <FaClipboardList size={20} className="text-blue-600" /> 
            DESCRÍBENOS TU PROYECTO
          </Link>

          {/* BOTÓN: WHATSAPP */}
          <Link 
            href="https://wa.me/50670767769"
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-5 py-4 rounded-2xl font-black shadow-lg shadow-blue-200 active:scale-95 transition-transform"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={22} /> HABLEMOS AHORA
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;