'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloating() {
  const [isOverFooter, setIsOverFooter] = useState(false);

  useEffect(() => {
    // Buscamos el elemento HTML del footer en el DOM
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el footer es visible en pantalla, activamos el estado
        setIsOverFooter(entry.isIntersecting);
      },
      { 
        // Actúa un poco antes de que el footer aparezca por completo
        rootMargin: '0px 0px 20px 0px', 
        threshold: 0.1 
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="https://wa.me/message/U3ZXMIXGALZJI1"
      target="_blank"
      rel="noopener noreferrer"
      // CLASES INTELIGENTES: Si toca el footer, cambia a 'absolute' y se acopla arriba de él.
      // El z-40 asegura que pase por DEBAJO de la altura del Navbar (que suele ser z-50).
      className={`grid place-items-center rounded-full p-4 text-white shadow-[0_4px_20px_rgba(34,197,94,0.4)] transition-all duration-300 group ${
        isOverFooter 
          ? 'absolute bottom-[calc(100%+24px)] right-6 bg-green-500' 
          : 'fixed bottom-6 right-6 bg-green-500 hover:scale-110 active:scale-95'
      } z-40`}
      style={{
        // Si tu footer está dentro del flujo, aseguramos que al volverse absoluto calcule la distancia de forma limpia
        position: isOverFooter ? 'absolute' : 'fixed'
      }}
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={42} className={isOverFooter ? '' : 'animate-pulse group-hover:animate-none'} />
      
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
        ¿Hablamos de tu proyecto? 🚀
      </span>
    </Link>
  );
}