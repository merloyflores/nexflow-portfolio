'use client'; // Paso 1: Necesario para el estado del menú

import { useState } from 'react';
import Link from 'next/link';
import { LayoutDashboard, Send, Menu, X } from 'lucide-react'; // Paso 2: Importamos Menu y X

const Navbar = () => {
  // Estado para abrir/cerrar el menú
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/50 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="text-blue-500 w-8 h-8" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-cyan-400">
              Nexflow Digital
            </span>
          </div>
          
          {/* Menú Desktop (Se oculta en móvil con 'hidden md:flex') */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
            <Link href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</Link>
            <Link href="#proyectos" className="hover:text-blue-400 transition-colors">Proyectos</Link>
            <Link href="#automatizacion" className="hover:text-blue-400 transition-colors">Power Solutions</Link>
          </div>

          <div className="flex items-center gap-4">
            {/* Botón Hablemos (Se mantiene igual, visible en todo momento o puedes ocultarlo en móvil si prefieres) */}
            <Link 
              href="https://wa.me/50670767769" 
              className="hidden sm:flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold items-center gap-2 transition-all transform hover:scale-105"
            >
              <Send size={16} /> Hablemos
            </Link>

            {/* BOTÓN HAMBURGUESA (Solo visible en móvil 'md:hidden') */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/90 backdrop-blur-lg border-b border-white/20">
          <Link 
            href="#servicios" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Servicios
          </Link>
          <Link 
            href="#proyectos" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Proyectos
          </Link>
          <Link 
            href="#automatizacion" 
            onClick={() => setIsOpen(false)}
            className="block px-3 py-3 text-base font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
          >
            Power Solutions
          </Link>
          {/* Botón hablemos dentro del menú móvil para pantallas muy pequeñas */}
          <Link 
            href="https://wa.me/50670767769"
            className="flex sm:hidden items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-bold"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Send size={16} /> Hablemos ahora
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;