// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { LayoutDashboard, Send, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Tecnologías', href: '#tech' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-100 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'py-3 bg-slate-950/90 backdrop-blur-xl border-b border-white/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(37,99,235,0.4)]">
              <LayoutDashboard className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              NEXFLOW<span className="text-blue-500">.</span>
            </span>
          </Link>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-2xl backdrop-blur-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="px-6 py-2 rounded-xl text-xs font-bold text-gray-400 transition-all hover:bg-blue-600 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* BOTÓN "HABLEMOS" (Desktop) */}
          <Link 
            href="https://wa.me/50670767769" 
            className="hidden md:flex relative group overflow-hidden bg-blue-600 text-white px-6 py-2.5 rounded-xl font-bold text-xs transition-all hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Send size={14} /> HABLEMOS
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
          </Link>

          {/* BOTÓN HAMBURGUESA (Mobile) */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU (Desplegable) */}
      <div className={`md:hidden absolute w-full bg-slate-950 border-b border-white/10 transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-4 text-lg font-bold text-gray-300 hover:text-blue-500 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://wa.me/50670767769"
            className="flex items-center justify-center gap-3 w-full bg-blue-600 text-white py-4 rounded-xl font-black mt-6"
          >
            <Send size={20} /> CONTACTAR AHORA
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;