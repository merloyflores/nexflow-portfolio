// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { LayoutDashboard, BarChart3, Bot, Zap, Target, Users, Mail, Phone } from 'lucide-react';

const personalPhoto = '/FotoPerfil.png'; // Asegúrate de que este archivo esté en la carpeta /public

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

const stats = [
  { label: 'Proyectos Entregados', value: '+50' },
  { label: 'Clientes Satisfechos', value: '+30' },
  { label: 'Países Impactados', value: '3' },
    { label: 'Años de Experiencia', value: '+5' },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-24 md:gap-32 lg:gap-10">
{/* Hero Section */}
      <section className="relative bg-slate-950 pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-white/5">
      {/* Fondo con radial gradient optimizado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Columna de Texto */}
          <div className="flex flex-col items-start order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-medium text-xs md:text-sm mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sistemas activos para nuevos proyectos
            </div>

            {/* Título responsivo: texto más pequeño en móvil (text-5xl) y gigante en desktop (lg:text-8xl) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              DIGITAL <br />
              <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500">
                EVOLUTION
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-400 font-light max-w-xl mb-10 leading-relaxed">
              En <span className="text-white font-semibold">Nexflow Digital</span>, diseñamos <strong>sistemas de alto rendimiento</strong> que fusionan <span className="text-blue-400">Next.js</span> con la automatización de <span className="text-blue-400">Power Platform</span>.
            </p>

            {/* Puntos de valor responsivos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-blue-600/10 border border-blue-500/20 rounded-lg text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Target size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Escalabilidad</p>
                  <p className="text-gray-500 text-xs mt-1">Arquitecturas preparadas para el futuro.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-cyan-600/10 border border-cyan-500/20 rounded-lg text-cyan-500 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wider">Automatización</p>
                  <p className="text-gray-500 text-xs mt-1">Eficiencia operativa garantizada.</p>
                </div>
              </div>
            </div>

            {/* Botones responsivos (full width en móvil) */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="#contacto" 
                className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-center transition-all shadow-lg flex items-center justify-center gap-3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Auditoría Gratis
                <Target className="group-hover:scale-110 transition-transform" size={20} />
              </Link>
              <Link 
                href="#servicios" 
                className="px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/5 text-center transition-all"
              >
                Soluciones
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
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-100 lg:h-100 rounded-4xl md:rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl transition-all duration-700 group-hover:rotate-0 rotate-2">
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
                  <p className="text-gray-500">{'>'} nexflow --status</p>
                  <p className="text-green-400 font-bold">● SYSTEM_READY</p>
                  <p className="text-cyan-400 animate-pulse">_fetching_data...</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Services Section */}
      <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-500 mb-4">
              <div className="h-px w-12 bg-blue-500"></div>
              <span className="text-xs font-black uppercase tracking-[0.3em]">Capabilities</span>
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

      {/* Section: Proyectos Destacados */}
      <section id="proyectos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter italic">
              Portfolio_<span className="text-blue-500 bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">Archive</span>
            </h2>
            <p className="text-gray-500 font-mono text-xs mt-2">{">"} Cargando repositorios de alto rendimiento...</p>
          </div>
          <Link 
            href="https://github.com/merloyflores" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-bold text-xs hover:underline tracking-widest uppercase"
          >
            Ver todo en GitHub _
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Proyecto 1: Cirelia Store */}
          <div className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-500">
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-10" />
              <div className="flex items-center justify-center h-full text-white/10 font-black text-4xl group-hover:scale-110 transition-transform">E-COMMERCE</div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Cirelia Store</h3>
                <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">LIVE_PROJECT</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Tienda digital completa con pasarela de pagos, gestión de inventario y panel de administración. Optimizado para conversión.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Next.js', 'Tailwind', 'Stripe', 'Supabase'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-500 border border-white/10 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
              <Link 
                href="https://github.com/merloyflores/CireliaStore" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
              >     
                Ver Repositorio <div className="h-px w-8 bg-blue-500" />
              </Link>
            </div>
          </div>

          {/* Proyecto 2: Clínica Podología */}
          <div className="group relative bg-slate-900 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-600/50 transition-all duration-500">
            <div className="aspect-video bg-slate-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-cyan-600/20 group-hover:bg-transparent transition-colors z-10" />
              <div className="flex items-center justify-center h-full text-white/10 font-black text-4xl group-hover:scale-110 transition-transform">MEDICAL_SYS</div>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tighter">Clínica Podología</h3>
                <span className="text-[10px] font-mono text-blue-500 bg-blue-500/10 px-2 py-1 rounded border border-blue-500/20">CASE_STUDY</span>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Sistema de gestión de citas y expedientes médicos. Enfoque en UX para personal de salud y seguridad de datos.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['React', 'Firebase', 'Node.js', 'ShadcnUI'].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-gray-500 border border-white/10 px-2 py-1 rounded">#{tag}</span>
                ))}
              </div>
              <Link 
                href="https://github.com/merloyflores/clinica-podologia" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-500 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all"
                >
                Ver Repositorio <div className="h-px w-8 bg-blue-500" />
              </Link>
            </div>
          </div>

          {/* Proyecto 3: Muestra de BI (PROXIMAMENTE) */}
          <div className="group relative bg-slate-900/50 border border-dashed border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mb-4">
              <LayoutDashboard className="text-blue-500 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Business Intelligence Dashboard</h3>
            <p className="text-gray-500 text-xs mt-2 mb-4">Sincronizando datos de Power BI y SQL Server...</p>
            <span className="text-[10px] font-mono text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full uppercase tracking-tighter">Building_Muestra_Ganas</span>
          </div>

          {/* Proyecto 4: Muestra de Automate (PROXIMAMENTE) */}
          <div className="group relative bg-slate-900/50 border border-dashed border-white/10 rounded-2xl p-8 flex flex-col justify-center items-center text-center opacity-70 hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 bg-cyan-600/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="text-cyan-500 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Enterprise Automation Flow</h3>
            <p className="text-gray-500 text-xs mt-2 mb-4">Optimizando flujos operativos con Power Automate...</p>
            <span className="text-[10px] font-mono text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded-full uppercase tracking-tighter">Deploy_Scheduled</span>
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
              Enterprise_Grade_Automations
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
                <div className="p-4 bg-slate-950 rounded-xl border border-white/5 group-hover:border-cyan-500/20 transition-all">
                  <p className="text-[10px] font-mono text-cyan-500 mb-1">RUNNING_FLOW</p>
                  <p className="text-xs text-white">Aprobación de facturas auto-trigger</p>
                </div>
                <div className="p-4 bg-slate-950 rounded-xl border border-white/5 group-hover:border-cyan-500/20 transition-all opacity-50">
                  <p className="text-[10px] font-mono text-gray-500 mb-1">WAITING_FOR_DATA</p>
                  <p className="text-xs text-white">Sincronización CRM - SharePoint</p>
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
                <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">UI Moderno</span>
                <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">Offline Mode</span>
                <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">Camera Integration</span>
                <span className="p-2 border border-white/5 rounded text-center group-hover:text-purple-400 transition-colors">GPS Tracking</span>
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
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-white backdrop-blur-sm border border-white/20">SQL SECURITY_ON</div>
                  <div className="px-4 py-2 bg-white/10 rounded-lg text-xs font-bold text-white backdrop-blur-sm border border-white/20">RELATIONAL_DB_READY</div>
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

      {/* Stats Section */}
      <section className="bg-slate-950 py-20 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-5xl font-extrabold text-blue-500 mb-3">{stat.value}</p>
              <p className="text-lg text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="bg-slate-800 p-16 rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-16 border border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-transparent"></div>
            <div className="relative z-10">
                <span className="text-blue-500 font-semibold text-lg">¿Listo para transformar tu empresa?</span>
                <h2 className="text-4xl font-bold text-white mt-3 mb-6">Contáctanos y Potencia tu Proyecto</h2>
                <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                    Déjanos entender tus necesidades únicas y juntos construiremos la solución digital que impulsará tu éxito. Agenda una consulta personalizada y descubre cómo Nexflow Digital puede marcar la diferencia.
                </p>
            </div>
            <div className="flex flex-col gap-6 relative z-10">
                <Link 
                  href="https://wa.me/50670767769" 
                  className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-semibold text-xl flex items-center gap-3 transition-colors shadow-lg"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                    <Zap size={24} /> Agenda tu Consulta Gratis
                </Link>
                <div className="text-gray-300 text-center text-sm">
                    <p className="flex items-center gap-2 justify-center"><Mail size={16} /> merloyveitch@gmail.com</p>
                    <p className="flex items-center gap-2 justify-center mt-1"><Phone size={16} /> +506 70767769</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}