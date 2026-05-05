// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FaClipboardList, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { ExternalLink, LayoutDashboard, BarChart3, Bot, Zap, Target, Users, Mail, Phone, Layers, Rocket, Wallet, ArrowRight, Terminal } from 'lucide-react';

const personalPhoto = '/FotoPerfil.png';

const services = [
  {
    icon: LayoutDashboard,
    title: 'Desarrollo Web & Apps Modernas',
    description: 'Soluciones digitales de alto rendimiento con Next.js, React y Tailwind CSS, adaptadas a tus necesidades empresariales.',
  },
  {
    icon: BarChart3,
    title: 'Business Intelligence & Power BI',
    description: 'Visualiza tus datos de manera estratégica. Creamos dashboards interactivos para la toma de decisiones informadas.',
  },
  {
    icon: Bot,
    title: 'Automatización con Power Automate',
    description: 'Optimiza tus flujos de trabajo operativos. Reducimos tareas manuales y errores con soluciones inteligentes.',
  },
    {
    icon: Zap,
    title: 'Soluciones Empresariales con Power Apps',
    description: 'Desarrollamos aplicaciones personalizadas para mejorar la eficiencia y la productividad en entornos empresariales.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-32 lg:gap-10">
      {/* SECCIÓN: HERO */}
      <section className="relative bg-slate-950 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-white/5">
        {/* Fondo con radial gradient optimizado */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Columna de Texto - Nexflow Digital */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">
              
              {/* Insignia Centrada en Móvil */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-xs md:text-sm mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Sistemas activos para nuevos proyectos
              </div>

              {/* Título Responsivo y Centrado */}
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
                DIGITAL <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500">
                  EVOLUTION
                </span>
              </h1>

              {/* Párrafo con max-w centrado */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xl mb-10 leading-relaxed mx-auto md:mx-0">
                En <span className="text-white font-semibold">Nexflow Digital</span>, diseñamos <strong>sistemas de alto rendimiento</strong> que fusionan <span className="text-blue-400">Next.js</span> con la automatización de <span className="text-blue-400">Power Platform</span>.
              </p>

              {/* Puntos de valor: Centrados en móvil y alineados en escritorio */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full max-w-lg md:max-w-none">
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 group text-center md:text-left">
                  <div className="p-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wider">Escalabilidad</p>
                    <p className="text-gray-500 text-xs mt-1">Arquitecturas preparadas para el futuro.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 group text-center md:text-left">
                  <div className="p-2 bg-cyan-600/10 border border-cyan-500/20 rounded-lg text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wider">Automatización</p>
                    <p className="text-gray-500 text-xs mt-1">Eficiencia operativa garantizada.</p>
                  </div>
                </div>
              </div>

              {/* Botones simétricos (Ya con mx-auto en el contenedor para centrar) */}
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto md:mx-0">
                <Link 
                  href="#contacto" 
                  className="flex-1 group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95"
                >
                  Auditoría Gratis
                  <Target className="group-hover:scale-110 transition-transform" size={20} />
                </Link>

                <Link 
                  href="#servicios" 
                  className="flex-1 group bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg flex items-center justify-center gap-3 active:scale-95 border border-white/10"
                >
                  Ver Soluciones
                  <Layers className="group-hover:scale-110 transition-transform" size={20} />
                </Link>
              </div>
            </div>

            {/* Columna de Imagen */}
            <div className="relative flex justify-center md:justify-end order-1 md:order-2 mb-12 md:mb-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/10 rounded-full blur-[80px] -z-10" />
              
              <div className="relative group">
                {/* Badge responsivo */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 bg-slate-900/90 backdrop-blur-md border border-white/20 p-3 md:p-4 rounded-2xl z-20 shadow-2xl">
                  <p className="text-blue-500 font-black text-2xl md:text-3xl leading-none">100%</p>
                  <p className="text-gray-400 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Personalizado</p>
                </div>

                {/* Foto Principal */}
                <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-4xl md:rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-700 group-hover:rotate-0 lg:rotate-2">
                  <Image
                    src={personalPhoto}
                    alt="Merloy Flores"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* ELEMENTO NUEVO INTERACTIVO: Terminal de Status */}
                <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-10 bg-slate-950 border border-blue-500/30 p-4 rounded-xl shadow-2xl z-20 w-48 md:w-64 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="flex gap-1.5 mb-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="font-mono text-[10px] md:text-xs text-blue-400 space-y-1">
                    {/* El comando ahora sugiere una auditoría o análisis de negocio */}
                    <p className="text-gray-500">{'>'} nexflow --analizar_negocio</p>
                    
                    {/* El estado indica que todo está bajo control y funcionando */}
                    <p className="text-green-400 font-bold">● SYSTEM_READY</p>
                    
                    {/* La animación sugiere que el sistema está buscando mejoras constantemente */}
                    <p className="text-cyan-400 animate-pulse">_optimizando_procesos...</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECCIÓN: SOLUCIONES INTEGRALES */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="flex flex-col md:flex-row items-star justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-500 mb-4">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em]">Nosotros Lo hacemos</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-400 leading-none">
              SOLUCIONES <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-400">
                INTEGRALES.
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-xs border-l-2 border-blue-600 pl-6 py-2">
            Fusionamos Next.js con el ecosistema de Microsoft para resultados fuera de serie.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-slate-900 border border-white/10 p-8 h-87.5 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-blue-500/50"
            >
              {/* Fondo decorativo con número */}
              <span className="absolute -right-4 -top-8 text-[12rem] font-black text-white/2 group-hover:text-blue-500/5 transition-colors duration-500">
                0{index + 1}
              </span>

              {/* Icono animado */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-blue-600/10 flex items-center justify-center rounded-lg group-hover:bg-blue-600 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                  <service.icon className="w-8 h-8 text-blue-500 group-hover:text-white transition-colors" />
                </div>
              </div>

              {/* Texto y Título */}
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors uppercase tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Línea de carga inferior interactiva */}
              <div className="absolute bottom-0 left-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-700 shadow-[0_0_15px_rgba(37,99,235,0.8)]"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN: Menos Operación Manual. Más Inteligencia de Negocio. */}
      <div className="bg-slate-950 py-20"> {/* Contenedor de fondo negro total */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
          {/* Efecto de luz de fondo para dar profundidad */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0" />

          <div className="relative z-10 p-px rounded-4xl bg-linear-to-br from-blue-500/30 via-white/5 to-cyan-400/20 shadow-2xl shadow-black/50 overflow-hidden">
            {/* Contenedor principal con efecto Glassmorphism */}
            <div className="bg-slate-900/90 backdrop-blur-2xl rounded-[calc(2rem-1px)] p-8 md:p-16">
              
              <div className="grid lg:grid-cols-5 gap-12 items-center">
                
                {/* Columna Izquierda: Copy de Valor (Ocupa 3 columnas) */}
                <div className="lg:col-span-3">
                  
                  <h2 className="flex flex-col gap-2 mb-6">
                    {/* Texto superior: Más pequeño, sutil y espaciado */}
                    <span className="text-sm md:text-base font-mono font-bold text-white tracking-[0.2em] uppercase opacity-90">
                      Menos Operación Manual y
                    </span>
                    
                    {/* Texto principal: Grande, potente y con el degradado de Nexflow */}
                    <span className="text-4xl md:text-6xl font-black tracking-tight leading-1px text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
                      MÁS INTELIGENCIA DE NEGOCIO.
                    </span>
                  </h2>
                  
                  <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl">
                    No nos limitamos a crear presencia en línea. Desarrollamos <strong>ecosistemas digitales completos</strong>: desde herramientas internas para optimizar la operación de tu empresa, hasta aplicaciones a la medida para escalar emprendimientos con <strong>planes flexibles que se ajustan a la visión y presupuesto de cada proyecto.</strong>
                  </p>

                  {/* Grid de Capacidades */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1 bg-slate-800 p-2.5 rounded-xl border border-white/5">
                        <Layers size={20} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">Apps Corporativas</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Portales de gestión, dashboards y automatización de procesos internos.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="shrink-0 mt-1 bg-slate-800 p-2.5 rounded-xl border border-white/5">
                        <Wallet size={20} className="text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">Planes a la Medida</h4>
                        <p className="text-gray-500 text-xs leading-relaxed">Arquitectura escalable. Invertimos los recursos donde generan mayor impacto.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Columna Derecha: Panel Interactivo (Ocupa 2 columnas) */}
                <div className="lg:col-span-2 relative group">
                  {/* Borde animado sutil en hover */}
                  <div className="absolute -inset-0.5 bg-linear-to-r from-blue-600 to-cyan-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                  
                  <div className="relative bg-slate-950 p-8 md:p-10 rounded-2xl border border-white/10 h-full flex flex-col justify-center items-center text-center">
                    
                    <div className="w-20 h-20 bg-blue-500/10 rounded-full flex items-center justify-center mb-6 border border-blue-500/20 relative">
                      <div className="absolute inset-0 rounded-full border-t border-blue-400 animate-spin opacity-50" style={{ animationDuration: '3s' }}></div>
                      <Rocket className="text-blue-400" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-white mb-3">¿Qué tienes en mente?</h3>
                    <p className="text-sm text-gray-400 mb-8 px-4">
                      Cuéntanos los detalles de tu requerimiento. Evaluaremos la viabilidad técnica y diseñaremos la hoja de ruta ideal para ti.
                    </p>

                    {/* El enlace apunta a "/contacto" o la ruta que vayas a usar luego */}
                    <Link 
                      href="/contacto" 
                      className="w-full relative inline-flex items-center justify-center gap-3 bg-white text-slate-950 font-black py-4 px-8 rounded-xl transition-all duration-300 hover:bg-blue-600 hover:text-white group/btn overflow-hidden"
                    >
                      <span className="relative z-10">Describir mi Proyecto</span>
                      <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                      {/* Efecto de brillo en el botón */}
                      <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite] z-0"></div>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Section: PRESENTACIÓN DE PROYECTOS */}
      <section id="proyectos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5">        
        {/* CABECERA INDICADORA */}
        <div className="flex flex-col mb-12">
          <span className="text-blue-500 font-mono text-[10px] tracking-[0.4em] uppercase mb-2">Portfolio</span>
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Casos de Éxito Seleccionados</h2>
          <div className="w-12 h-0.5 bg-blue-600 mt-3"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-20 gap-12 border-b border-white/10 pb-12">
          {/* Columna de Texto Explicativo (Venta Inteligente) */}
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black text-gray-400 tracking-tight mb-6">
              IMPACTO REAL <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                RESULTADOS MEDIBLES.
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>
                En Nexflow Digital no creamos simples páginas web; desarrollamos <strong>ecosistemas digitales estratégicos</strong>. Entendemos que cada empresa tiene desafíos únicos, por lo que nuestro enfoque es 100% consultivo y a la medida.
              </p>
              <p>
                Analizamos tus cuellos de botella operativos y construimos herramientas (desde plataformas web de alta conversión hasta automatizaciones) diseñadas para <strong>escalar tus ventas, optimizar tu tiempo y elevar tu marca.</strong> Explora nuestros casos de éxito a continuación y descubre cómo transformamos ideas complejas en soluciones digitales de alto rendimiento.
              </p>
            </div>
          </div>

          {/* Columna de Llamado a la Acción y GitHub - Nexflow Digital */}
          <div className="relative group p-px rounded-3xl overflow-hidden bg-linear-to-br from-blue-500/20 via-transparent to-cyan-400/20">
            {/* Fondo con Blur y alineación central completa */}
            <div className="flex flex-col items-center justify-center gap-6 shrink-0 bg-slate-900/80 backdrop-blur-xl p-8 rounded-[23px] border border-white/10 shadow-2xl text-center">
              
              {/* Títulos Centrados */}
              <div className="space-y-2">
                <p className="text-[10px] font-black tracking-[0.3em] text-blue-500 uppercase">
                  Consultoría Disponible
                </p>
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">
                  ¿Listo para arquitectar <br /> tu próxima solución?
                </h3>
              </div>

              {/* Botón Principal con WhatsApp */}
              <Link 
                href="https://wa.me/50670767769"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn relative w-full inline-flex items-center justify-center gap-3 bg-white text-slate-950 font-black py-4 px-10 rounded-2xl transition-all duration-300 hover:bg-blue-600 hover:text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transform hover:-translate-y-1 active:scale-95"
              >
                <FaWhatsapp size={20} className="text-green-600 group-hover/btn:text-white transition-colors" />
                <span>Hablar con un asesor</span>
                <div className="w-2 h-2 bg-blue-600 rounded-full group-hover/btn:bg-white animate-pulse"></div>
              </Link>

              {/* Separador con texto centrado */}
              <div className="flex items-center gap-4 w-full opacity-30">
                <div className="h-px grow bg-white"></div>
                <span className="text-[10px] font-mono text-white uppercase tracking-widest">o también</span>
                <div className="h-px grow bg-white"></div>
              </div>

              {/* GitHub Centrado y Minimalista */}
              <Link 
                href="https://github.com/merloyflores" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 text-white/40 hover:text-blue-400 transition-all text-xs font-bold group/github"
              >
                <FaGithub size={24} className="group-hover/github:scale-110 transition-transform mb-1" />
                <span className="tracking-wide">Explorar Repositorios</span>
              </Link>
              
            </div>
          </div>
        </div>

        {/* CONTENEDOR FLEX: Permite que los elementos se muevan hacia abajo cuando uno se hace más ancho */}
        <div className="flex flex-wrap gap-8 items-start">
          
          {/* Proyecto 1: BUKUË */}
          {/* CLASES CLAVE: resize-x, max-w-full, w-full, md:w-[calc(50%-1rem)] y transiciones específicas para no afectar el drag */}
          <div className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-colors transform hover:-translate-y-1 shadow-2xl shadow-black/50 resize-x max-w-full w-full md:w-[calc(50%-1rem)] min-w-[300px]">
            {/* Venta de Navegador (Preview) */}
            <div className="aspect-video bg-slate-800 relative overflow-hidden border-b border-white/10">
              <div className="absolute top-0 w-full h-6 bg-slate-950 flex items-center px-3 gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-2 text-[10px] font-mono text-gray-500 tracking-tighter">bukuecr.com</div>
              </div>
              <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute top-6 bottom-0 w-full bg-white">
                <iframe src="https://www.bukuecr.com/" className="w-full h-full border-none pointer-events-none" title="Bukue Preview" tabIndex={-1} />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">BUKUË Costa Rica</h3>
                <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> LIVE
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Plataforma corporativa que facilita el equilibrio entre la responsabilidad ecológica y los objetivos económicos. Desarrollamos soluciones digitales personalizadas que minimizan el impacto ambiental y maximizan la rentabilidad empresarial.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'Tailwind', 'Corporate UI', 'SEO'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded bg-white/5">#{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <Link href="https://www.bukuecr.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-blue-400 transition-colors">
                  <ExternalLink size={16} /> Ver Sitio
                </Link>
                <Link href="https://github.com/merloyflores/BUKU-" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                  <FaGithub size={16} /> Repo
                </Link>
              </div>
            </div>
            
            {/* Indicador visual de que se puede estirar */}
            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-ew-resize opacity-50 group-hover:opacity-100 pointer-events-none flex items-end justify-end p-1">
              <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 rounded-br-sm"></div>
            </div>
          </div>

          {/* Proyecto 2: Lorena de la Garza */}
          <div className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-colors transform hover:-translate-y-1 shadow-2xl shadow-black/50 resize-x max-w-full w-full md:w-[calc(50%-1rem)] min-w-[300px]">
            <div className="aspect-video bg-slate-800 relative overflow-hidden border-b border-white/10">
              <div className="absolute top-0 w-full h-6 bg-slate-950 flex items-center px-3 gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-2 text-[10px] font-mono text-gray-500 tracking-tighter truncate">violencia-obstetrica.vercel.app</div>
              </div>
              <div className="absolute inset-0 bg-purple-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute top-6 bottom-0 w-full bg-white">
                <iframe src="https://violencia-obstetrica-landing.vercel.app/" className="w-full h-full border-none pointer-events-none" title="Lorena Preview" tabIndex={-1} />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Lorena de la Garza</h3>
                <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> LIVE
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Espacio digital de concientización y apoyo. Integra un diseño empático y accesible con un gestor de contenido dinámico (Blog) para difundir información vital y recursos sobre la violencia obstétrica.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'Blog System', 'Tailwind', 'UX Writing'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded bg-white/5">#{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <Link href="https://violencia-obstetrica-landing.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-purple-400 transition-colors">
                  <ExternalLink size={16} /> Ver Sitio
                </Link>
                <Link href="https://github.com/merloyflores/violencia-obstetrica-landing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                  <FaGithub size={16} /> Repo
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-ew-resize opacity-50 group-hover:opacity-100 pointer-events-none flex items-end justify-end p-1">
              <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 rounded-br-sm"></div>
            </div>
          </div>

          {/* Proyecto 3: Clínica Podológica */}
          <div className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors transform hover:-translate-y-1 shadow-2xl shadow-black/50 resize-x max-w-full w-full md:w-[calc(50%-1rem)] min-w-[300px]">
            <div className="aspect-video bg-slate-800 relative overflow-hidden border-b border-white/10">
              <div className="absolute top-0 w-full h-6 bg-slate-950 flex items-center px-3 gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-2 text-[10px] font-mono text-gray-500 tracking-tighter truncate">clinica-podologica.vercel.app</div>
              </div>
              <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute top-6 bottom-0 w-full bg-white">
                <iframe src="https://clinica-podologica.vercel.app/" className="w-full h-full border-none pointer-events-none" title="Clinica Preview" tabIndex={-1} />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Clínica Alvarado</h3>
                <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> LIVE
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Presencia médica de alta conversión. Destaca por su sistema interactivo de agendamiento de citas integrado en un modal inmersivo, optimizando la captación de pacientes y la experiencia del usuario.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Booking System', 'Modal UI', 'Tailwind'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded bg-white/5">#{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <Link href="https://clinica-podologica.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-cyan-400 transition-colors">
                  <ExternalLink size={16} /> Ver Sitio
                </Link>
                <Link href="https://github.com/merloyflores/clinica-podologia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                  <FaGithub size={16} /> Repo
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-ew-resize opacity-50 group-hover:opacity-100 pointer-events-none flex items-end justify-end p-1">
              <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 rounded-br-sm"></div>
            </div>
          </div>

          {/* Proyecto 4: PrimeStay Rentals */}
          <div className="group relative bg-slate-900 border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-colors transform hover:-translate-y-1 shadow-2xl shadow-black/50 resize-x max-w-full w-full md:w-[calc(50%-1rem)] min-w-[300px]">
            <div className="aspect-video bg-slate-800 relative overflow-hidden border-b border-white/10">
              <div className="absolute top-0 w-full h-6 bg-slate-950 flex items-center px-3 gap-1.5 z-20">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                <div className="ml-2 text-[10px] font-mono text-gray-500 tracking-tighter truncate">primestay-rentals.vercel.app</div>
              </div>
              <div className="absolute inset-0 bg-emerald-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <div className="absolute top-6 bottom-0 w-full bg-white">
                <iframe src="https://primestay-rentals.vercel.app/" className="w-full h-full border-none pointer-events-none" title="PrimeStay Preview" tabIndex={-1} />
              </div>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">PrimeStay Rentals</h3>
                <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-500/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> LIVE
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Plataforma integral para la gestión y cuidado de propiedades Airbnb. Digitaliza todo el servicio de renta, centralizando el mantenimiento y elevando la presentación digital del apartamento hacia los huéspedes.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'Property Management', 'UI/UX', 'Vercel'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-400 border border-white/10 px-2 py-1 rounded bg-white/5">#{tag}</span>
                ))}
              </div>
              <div className="flex items-center gap-6">
                <Link href="https://primestay-rentals.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-emerald-400 transition-colors">
                  <ExternalLink size={16} /> Ver Sitio
                </Link>
                <Link href="https://github.com/merloyflores/primestay-rentals" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                  <FaGithub size={16} /> Repo
                </Link>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 w-4 h-4 cursor-ew-resize opacity-50 group-hover:opacity-100 pointer-events-none flex items-end justify-end p-1">
              <div className="w-2 h-2 border-r-2 border-b-2 border-gray-400 rounded-br-sm"></div>
            </div>
          </div>

        </div>
      </section>

      {/* Section: Power Solutions - Arquitectura de Datos e Inteligencia */}
      <section id="automatizacion" className="relative py-24 bg-slate-950 overflow-hidden border-t border-white/5">
        {/* Efecto de fondo: Red de datos sutil */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
            style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Cabecera de Sección */}
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
              POWER <span className="text-blue-500">ECOSYSTEM</span>
            </h2>
            <div className="h-px grow bg-linear-to-r from-blue-500/50 to-transparent hidden md:block" />
            <span className="font-mono text-xs text-blue-400 font-bold uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
              Automatización Profesional
            </span>
          </div>

          {/* Grid de Tecnologías y Capacidades */}
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Columna 1: Inteligencia de Negocios (Power BI) */}
            <div className="lg:col-span-2 bg-slate-900/50 border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition-all group">
              <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500">
                      <BarChart3 size={28} />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight uppercase">Power BI & Analytics</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                    Transformamos el caos de datos en tableros estratégicos. No solo visualizamos; creamos indicadores clave (KPIs) que permiten predecir tendencias y optimizar la rentabilidad de tu empresa en tiempo real.
                  </p>
                  <ul className="space-y-3">
                    {['Modelado de Datos Complejo (DAX)', 'Extracción desde SQL, SAP o Excel', 'Reportes Interactivos Móviles', 'Alertas Automáticas de Desempeño'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-300 font-mono">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Gráfico Simulado */}
                <div className="flex-1 bg-slate-950 rounded-2xl p-6 border border-white/5 relative overflow-hidden group-hover:border-yellow-500/20 transition-all">
                  <div className="flex justify-between items-center mb-6">
                      <div className="space-y-1">
                        <p className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Ventas Anuales</p>
                        <p className="text-lg font-black text-white">$1.2M <span className="text-[10px] text-green-500">+12%</span></p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500"><Zap size={14}/></div>
                  </div>
                  <div className="flex items-end gap-1 h-24">
                      {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-yellow-500/20 rounded-t-sm group-hover:bg-yellow-500 transition-all duration-700" style={{ height: `${h}%` }} />
                      ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Columna 2: Automatización (Power Automate) */}
            <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition-all group">
              <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-500 w-fit mb-6">
                <Zap size={28} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4">Power Automate</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                Eliminamos las tareas repetitivas. Diseñamos flujos de trabajo que conectan tus aplicaciones favoritas para que la información fluya sin intervención humana.
              </p>
              <div className="space-y-4">
                {/* Foco en: Eliminación de cuellos de botella */}
                <div className="p-4 bg-slate-950 rounded-xl border border-white/5 group-hover:border-cyan-500/20 transition-all">
                  <p className="text-[10px] font-mono text-cyan-400 mb-1 tracking-widest">AHORRO_DE_TIEMPO_ACTIVO</p>
                  <p className="text-xs text-white font-medium">Gestión de facturas sin intervención manual</p>
                  <p className="text-[9px] text-cyan-500/60 mt-1 italic">+90% de rapidez en aprobaciones</p>
                </div>
                
                {/* Foco en: Precisión y Cero Errores */}
                <div className="p-4 bg-slate-950 rounded-xl border border-white/5 group-hover:border-cyan-500/20 transition-all">
                  <p className="text-[10px] font-mono text-gray-400 mb-1 tracking-widest">CONTROL_DE_ERRORES_0%</p>
                  <p className="text-xs text-white font-medium">Sincronización total de expedientes y archivos</p>
                  <p className="text-[9px] text-gray-500/60 mt-1 italic">Información siempre fiel y actualizada</p>
                </div>
              </div>
            </div>

            {/* Columna 3: Apps Personalizadas (Power Apps) */}
            <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all group lg:col-span-1">
              <div className="p-3 bg-purple-500/10 rounded-xl text-purple-500 w-fit mb-6">
                <LayoutDashboard size={28} />
              </div>
              <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-4">Power Apps</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                Creamos aplicaciones móviles y de escritorio personalizadas para capturar datos en el campo o gestionar procesos internos sin necesidad de software costoso de terceros.
              </p>
                <div className="grid grid-cols-2 gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">
                    Diseño Intuitivo
                  </span>
                  <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">
                    Uso sin Internet
                  </span>
                  <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">
                    Fotos y Escaneo
                  </span>
                  <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">
                    Mapas y GPS
                  </span>
                </div>
            </div>

            {/* Columna 4: El Cerebro (Dataverse & SQL) */}
            <div className="lg:col-span-2 bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse" />
              <div className="relative z-10 flex-1">
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4 italic leading-none">Arquitectura de Datos Robusta</h3>
                <p className="text-blue-100 text-sm mb-6 leading-relaxed">
                  Nada de esto funciona sin una base sólida. Implementamos <strong>Dataverse</strong> y <strong>SQL Server</strong> para garantizar que tu información sea segura, escalable y esté disponible para todas tus herramientas de Power Platform.
                </p>
                <div className="flex gap-4">
                  {/* Reemplaza SQL SECURITY_ON */}
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-white backdrop-blur-sm border border-white/20">
                    DATOS PROTEGIDOS
                  </div>
                  
                  {/* Reemplaza RELATIONAL_DB_READY */}
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-white backdrop-blur-sm border border-white/20">
                    INFORMACIÓN ORGANIZADA
                  </div>
                </div>
              </div>
              <div className="relative z-10 w-full md:w-48 bg-slate-950/30 p-4 rounded-2xl border border-white/20 backdrop-blur-md">
                <div className="space-y-3">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="h-2 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white/60 animate-gradient-x" style={{ width: `${30 * i}%` }} />
                      </div>
                    ))}
                </div>
                <p className="text-[10px] font-mono text-white/40 mt-4 text-center">ENCRYPTING_DATAVERSE_NODE</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="bg-slate-800 p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-16 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-transparent"></div>
            
            <div className="relative z-10">
                <span className="text-blue-500 font-semibold text-lg">¿Listo para transformar tu empresa?</span>
                <h2 className="text-4xl font-bold text-white mt-3 mb-6">Contáctanos y Potencia tu Proyecto</h2>
                <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                    Déjanos entender tus necesidades únicas y juntos construiremos la solución digital que impulsará tu éxito. Agenda una consulta personalizada y descubre cómo Nexflow Digital puede marcar la diferencia.
                </p>
            </div>

            <div className="flex flex-col gap-4 relative z-10 w-full md:w-auto">
                {/* Nuevo Botón: Describir Proyecto */}
                <Link 
                  href="/contacto" 
                  className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:scale-[1.02]"
                >
                    <FaClipboardList size={24} /> Descríbenos tu proyecto
                </Link>

                {/* Botón WhatsApp con Icono Correcto */}
                <Link 
                  href="https://wa.me/50670767769" 
                  className="bg-[#25D366] hover:bg-[#22c35e] text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all shadow-lg hover:scale-[1.02]"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <FaWhatsapp size={28} /> WhatsApp Directo
                </Link>
                <div className="text-gray-300 text-center text-sm mt-4">
                    <p className="flex items-center gap-2 justify-center hover:text-white transition-colors">
                      <Mail size={16} /> merloy123@gmail.com
                    </p>
                    <p className="flex items-center gap-2 justify-center mt-1 hover:text-white transition-colors">
                      <Phone size={16} /> +506 7076-7769
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}