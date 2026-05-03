import Link from 'next/link';
import { Search, Activity, FileText, ArrowRight } from 'lucide-react';

export default function AuditoriaPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header de Consultoría */}
        <div className="mb-16 border-b border-white/10 pb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs mb-6 uppercase tracking-widest">
            Servicio de Consultoría
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
            Auditoría Técnica <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
              de Sistemas y Web
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            Antes de escribir una sola línea de código, diagnosticamos el estado actual de su ecosistema digital. Identificamos cuellos de botella, vulnerabilidades y oportunidades de automatización.
          </p>
        </div>

        {/* El Proceso de Auditoría */}
        <h2 className="text-2xl font-bold mb-8 text-center md:text-left">Nuestra Metodología</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-20 relative">
          
          <div className="bg-slate-900/80 p-8 rounded-2xl border border-white/5 relative z-10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-black text-xl">
              1
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Search size={20} className="text-blue-500" /> Descubrimiento
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Analizamos la arquitectura actual de su sitio web o procesos manuales. Revisamos el rendimiento (Core Web Vitals) y mapeamos el flujo de trabajo de su equipo.
            </p>
          </div>

          <div className="bg-slate-900/80 p-8 rounded-2xl border border-white/5 relative z-10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-black text-xl">
              2
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Activity size={20} className="text-cyan-500" /> Evaluación Técnica
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Buscamos redundancias. Evaluamos si es factible integrar herramientas como Power Apps o Power Automate para reducir la intervención manual en sus operaciones diarias.
            </p>
          </div>

          <div className="bg-slate-900/80 p-8 rounded-2xl border border-white/5 relative z-10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 font-black text-xl">
              3
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <FileText size={20} className="text-indigo-500" /> Roadmap de Acción
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Entregamos un documento ejecutivo detallando los hallazgos y una hoja de ruta estratégica con soluciones precisas y presupuestos estimados para la transformación.
            </p>
          </div>
        </div>

        {/* CTA Auditoría */}
        <div className="bg-slate-900 border border-white/10 p-10 rounded-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Deje de adivinar qué está fallando.</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            Agende una sesión preliminar de 30 minutos sin costo para discutir los desafíos técnicos de su empresa.
          </p>
          <Link href="/contacto" className="inline-flex items-center gap-3 bg-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Solicitar Auditoría Inicial <ArrowRight size={20} />
          </Link>
        </div>

      </div>
    </div>
  );
}