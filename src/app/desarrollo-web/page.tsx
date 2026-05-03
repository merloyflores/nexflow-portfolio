import Link from 'next/link';
import { Code2, Zap, Layout, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function DesarrolloWebPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header del Servicio */}
        <div className="mb-16 border-b border-white/10 pb-16 text-center md:text-left">
          <Link href="/#servicios" className="text-blue-500 hover:text-blue-400 text-sm font-bold tracking-wider uppercase mb-6 inline-block">
            &larr; Servicios
          </Link>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Desarrollo Web <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
              de Alto Rendimiento
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Construimos ecosistemas digitales rápidos, escalables y seguros utilizando tecnologías de vanguardia como Next.js. No usamos plantillas genéricas; diseñamos arquitecturas a la medida de los objetivos de su empresa.
          </p>
        </div>

        {/* Características Técnicas */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
            <Zap className="text-blue-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">Velocidad Optimizada</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tiempos de carga en milisegundos. Utilizamos renderizado del lado del servidor (SSR) para garantizar que sus clientes no experimenten fricción, mejorando sus tasas de conversión.
            </p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
            <Layout className="text-cyan-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">UI/UX Corporativo</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Interfaces limpias y profesionales que reflejan la autoridad de su marca. Cada interacción está diseñada para guiar al usuario hacia la acción que su negocio requiere.
            </p>
          </div>
          <div className="bg-slate-900/50 p-8 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-colors">
            <Code2 className="text-indigo-400 mb-6" size={32} />
            <h3 className="text-xl font-bold mb-3">Código Escalable</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Bases de código limpias, documentadas y listas para crecer. Si su empresa escala, su software escalará con ella sin necesidad de reestructuraciones costosas.
            </p>
          </div>
        </div>

        {/* Call to Action Integrado */}
        <div className="bg-linear-to-br from-blue-900/40 to-slate-900 p-10 md:p-16 rounded-3xl border border-blue-500/20 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Tiene un proyecto en mente?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Hablemos sobre las especificaciones técnicas y cómo podemos arquitectar la mejor solución para su modelo de negocio.
          </p>
          <Link href="https://wa.me/50670767769" target="_blank" className="inline-flex items-center gap-3 bg-white text-slate-950 font-black py-4 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-all shadow-lg">
            <FaWhatsapp size={18}/> Iniciar Conversación
          </Link>
        </div>

      </div>
    </div>
  );
}