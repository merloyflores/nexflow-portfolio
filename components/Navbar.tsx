'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp } from "react-icons/fa6";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* SECCIÓN DEL LOGO (Sin texto extra) */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-40 h-12 transition-transform duration-300 group-hover:scale-105">
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
          <div className="hidden md:flex items-center space-x-10 text-sm font-semibold text-slate-600">
            <Link href="#servicios" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Servicios</Link>
            <Link href="#proyectos" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Proyectos</Link>
            <Link href="#automatizacion" className="hover:text-blue-600 transition-colors underline-offset-4 hover:underline">Power Solutions</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              href="https://wa.me/50670767769" 
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-bold items-center gap-2 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5"
            >
              <FaWhatsapp size={18}/> Hablemos
            </Link>

            {/* BOTÓN HAMBURGUESA */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-8 space-y-2 bg-white border-b shadow-xl">
          <Link 
            href="#servicios" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          >
            Servicios
          </Link>
          <Link 
            href="#proyectos" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          >
            Proyectos
          </Link>
          <Link 
            href="#automatizacion" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          >
            Power Solutions
          </Link>
          <Link 
            href="https://wa.me/50670767769"
            className="flex sm:hidden items-center justify-center gap-2 bg-blue-600 text-white px-5 py-4 rounded-xl font-black shadow-lg"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} /> HABLEMOS AHORA
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;