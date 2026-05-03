import { Rocket, Shield, Clock } from 'lucide-react';

export default function CotizarPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white selection:bg-blue-500/30 relative overflow-hidden">

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Columna Informativa: Venta de Valor */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]">
                Demos vida a tu <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
                  próxima visión.
                </span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
                Estás a un paso de digitalizar tus procesos y escalar tu impacto. Cuéntanos qué necesitas y nuestro equipo diseñará una hoja de ruta técnica a tu medida.
              </p>
            </div>

            {/* Garantías de Nexflow Digital */}
            <div className="space-y-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Respuesta en menos de 24h</h4>
                  <p className="text-sm text-gray-500">Analizamos tu requerimiento y te contactamos para una sesión inicial.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Confidencialidad Total</h4>
                  <p className="text-sm text-gray-500">Tus ideas y datos están protegidos bajo protocolos de seguridad profesional.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna del Formulario Robusto */}
          <div className="relative group">
            {/* Efecto de resplandor de fondo */}
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-4xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            
            <div className="relative bg-slate-900/50 backdrop-blur-3xl p-8 md:p-12 rounded-4xl border border-white/10">
              <form 
                action="https://formsubmit.co/merloy123@gmail.com" 
                method="POST"
                className="space-y-6"
              >
                {/* Honeypot para evitar Spam */}
                <input 
                  type="text" 
                  name="_honey" 
                  style={{ display: 'none' }} 
                  title="Ignore this field" 
                  placeholder="Ignore this field"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://tu-sitio.com/gracias" />

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Información de Contacto</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      name="Nombre" 
                      placeholder="Tu nombre" 
                      required 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <input 
                      type="email" 
                      name="Email" 
                      placeholder="Correo corporativo" 
                      required 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="tipo-proyecto" className="text-xs font-mono text-gray-500 uppercase tracking-widest">Tipo de Proyecto</label>
                  <select 
                    name="Tipo_Proyecto" 
                    id="tipo-proyecto"
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all appearance-none"
                  >
                    <option value="Pagina_Web">Una página web para mi negocio</option>
                    <option value="App_Interna">Un sistema para manejar mis datos o empleados</option>
                    <option value="Automatizacion">Automatizar tareas repetitivas y ahorrar tiempo</option>
                    <option value="Asesoria">Solo necesito asesoría o una consulta técnica</option>
                    <option value="Otro">Otro requerimiento especial</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-widest">Descripción del Requerimiento</label>
                  <textarea 
                    name="Mensaje" 
                    rows={5} 
                    placeholder="Cuéntanos los desafíos que quieres resolver..." 
                    required 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-white text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
                >
                  <Rocket size={20} />
                  ENVIAR PROPUESTA
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}