/**
 * Todos los datos del sitio en un solo lugar. Si cambia un teléfono, un servicio, un proyecto o un hito,
 * se cambia acá y se actualiza en todas las páginas.
 */
export const SITE_URL = 'https://nexflow-portfolio.vercel.app';
export const BRAND = 'Nexflow Digital';
export const WHATSAPP_NUMBER = '50672655724';
export const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';
export const EMAIL = 'merloy123@gmail.com';
export const PHONE = '+506 7265-5724';
export const PHONE_HREF = 'tel:+50672655724';

/** Enlace de WhatsApp con un mensaje ya escrito (lo usa el asistente y los botones de cada servicio). */
export const waLink = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const SOCIAL = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/nexflowdigitalcr' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61590617219236' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/merloyflores/' },
  { id: 'github', label: 'GitHub', href: 'https://github.com/merloyflores' },
] as const;

/* ───────────────────────── Servicios ───────────────────────── */
export type ServiceId = 'web' | 'cirelia' | 'automatizacion' | 'apps';
export type Service = {
  id: ServiceId; n: string; name: string; short: string; href: string;
  /** Una frase: qué gana el cliente. */
  promise: string;
  /** Para quién. */
  forWho: string;
  bullets: string[];
  photo: string;
  /** Mensaje ya escrito para WhatsApp. */
  wa: string;
};
export const SERVICES: Service[] = [
  {
    id: 'web', n: '01', name: 'Sitios web', short: 'Sitios web', href: '/sitios-web',
    promise: 'Un sitio claro y rápido que explica lo que hacés y hace que te escriban.',
    forWho: 'Empresas de servicios, clínicas, consultoras y profesionales.',
    bullets: ['Diseño propio, sin plantillas', 'Pensado para el celular y para Google', 'Formulario, WhatsApp o agenda de citas', 'Tu dominio y tus cuentas a tu nombre'],
    photo: '/fotos/sitios-web.webp',
    wa: 'Hola Nexflow, quiero conversar sobre un sitio web para mi negocio.',
  },
  {
    id: 'cirelia', n: '02', name: 'Cirelia Business', short: 'Tiendas en línea', href: '/cirelia-business',
    promise: 'Tienda en línea, caja e inventario en un solo panel. Nuestra plataforma, implementada por nosotros.',
    forWho: 'Negocios que venden en el local, por WhatsApp y en internet.',
    bullets: ['Tienda con tu marca', 'Punto de venta en compu, tablet o celular', 'Inventario, pedidos y clientes juntos', 'Planes mensuales, te la dejamos lista'],
    photo: '/fotos/cirelia.webp',
    wa: 'Hola Nexflow, me interesa Cirelia Business para mi tienda.',
  },
  {
    id: 'automatizacion', n: '03', name: 'Automatización y datos', short: 'Automatización', href: '/automatizacion',
    promise: 'Menos trabajo a mano y reportes que se actualizan solos.',
    forWho: 'Equipos que viven entre Excel, correos y aprobaciones.',
    bullets: ['Power Automate: flujos y aprobaciones', 'Power Apps: captura de datos desde el celular', 'Power BI: tableros con los números del negocio', 'Integración con Excel, SharePoint y Teams'],
    photo: '/fotos/automatizacion.webp',
    wa: 'Hola Nexflow, quiero automatizar un proceso de mi empresa.',
  },
  {
    id: 'apps', n: '04', name: 'Apps y sistemas a la medida', short: 'Apps a la medida', href: '/apps',
    promise: 'Cuando lo que necesitás no existe: aplicaciones web y móviles hechas para tu operación.',
    forWho: 'Empresas con un proceso propio que ningún sistema estándar resuelve.',
    bullets: ['Aplicaciones web con acceso por usuario', 'Apps para Android e iOS', 'Portales de clientes y paneles internos', 'Integraciones con lo que ya tenés'],
    photo: '/fotos/apps.webp',
    wa: 'Hola Nexflow, necesito una aplicación a la medida.',
  },
];

export const DIAGNOSTIC = {
  name: 'Diagnóstico gratis',
  href: '/diagnostico',
  promise: '30 minutos para revisar tu sitio o tus procesos y decirte qué conviene hacer primero. Sin costo y sin compromiso.',
  wa: 'Hola Nexflow, quiero agendar el diagnóstico gratis de 30 minutos.',
};

/* ───────────────────────── Principios ───────────────────────── */
export const PRINCIPLES = [
  { n: '01', t: 'Entender antes de proponer', d: 'Primero escuchamos cómo vendés y cómo trabaja tu equipo. La tecnología viene después, y solo la que hace falta.' },
  { n: '02', t: 'Construir con criterio', d: 'Preferimos pocas cosas que funcionen perfecto a muchas a medias. Cada decisión tiene una razón de negocio.' },
  { n: '03', t: 'Acompañar después', d: 'Entregar no es el final. Te capacitamos, medimos y seguimos ajustando para que lo que construimos se use.' },
];

/* ───────────────────────── Clientes y proyectos ───────────────────────── */
export type Client = { id: string; name: string; logo?: string; url?: string; sector: string; /** Logos casi cuadrados: se muestran más altos para que pesen igual que los anchos. */ tall?: boolean };
export const CLIENTS: Client[] = [
  { id: 'bukue', name: 'BUKUË Consultoría Ambiental', logo: '/logos/bukue.png', url: 'https://www.bukuecr.com/', sector: 'Consultoría ambiental' },
  { id: 'clinica', name: 'Centro Podológico Ximena Alvarado', logo: '/logos/clinica.png', url: 'https://centropodologicoximenaalvarado.com/', sector: 'Salud' },
  { id: 'cirelia', name: 'Cirelia', url: 'https://cirelia-store.vercel.app/', sector: 'Comercio' },
  { id: 'oura', name: 'Oura Shop CR', url: 'https://ourashopcr.com/', sector: 'Comercio' },
  { id: 'lorena', name: 'Lorena de la Garza', logo: '/logos/lorena.png', tall: true, url: 'https://derechoshumanosconlore.org/', sector: 'Educación y derechos humanos' },
];

export type Project = {
  id: string; name: string; kind: string; service: ServiceId; host: string; url: string;
  challenge: string; solution: string; results: string[]; img: string; imgMobile?: string; year: number;
  /** false si el sitio no se deja mostrar dentro de otro (X-Frame-Options): se usa solo la captura. */
  live?: boolean;
};
export const PROJECTS: Project[] = [
  {
    id: 'cirelia', name: 'Cirelia', kind: 'Tienda en línea con punto de venta', service: 'cirelia', host: 'cirelia-store.vercel.app', url: 'https://cirelia-store.vercel.app/', year: 2026,
    challenge: 'Una tienda de ropa y hogar que vendía en el local, por WhatsApp y en redes, con el inventario en tres lugares distintos.',
    solution: 'Construimos una plataforma propia: tienda en línea, caja para el mostrador, inventario, pedidos y clientes en un solo panel. De ahí nació Cirelia Business.',
    results: ['Un solo inventario para todos los canales', 'Caja, pedidos y tienda en el mismo sistema', 'Hoy es la plataforma que usan otros negocios'],
    img: '/proyectos/cirelia.webp', imgMobile: '/proyectos/cirelia-movil.webp',
  },
  {
    id: 'bukue', name: 'BUKUË Costa Rica', kind: 'Sitio corporativo', service: 'web', host: 'bukuecr.com', url: 'https://www.bukuecr.com/', year: 2026,
    challenge: 'Una consultora ambiental con servicios técnicos (SETENA, salud ocupacional, certificaciones) que necesitaba explicarlos con claridad a empresas.',
    solution: 'Un sitio corporativo con identidad propia, servicios explicados para personas no técnicas y una estructura pensada para que Google lo entienda.',
    results: ['Servicios claros para clientes no técnicos', 'Imagen sólida frente a empresas', 'Base para seguir publicando contenido'],
    img: '/proyectos/bukue.webp', imgMobile: '/proyectos/bukue-movil.webp',
  },
  {
    id: 'clinica', name: 'Centro Podológico Ximena Alvarado', kind: 'Sitio, reservas en línea y panel de la clínica', service: 'apps', host: 'centropodologicoximenaalvarado.com', url: 'https://centropodologicoximenaalvarado.com/', year: 2026,
    challenge: 'Una clínica que recibía citas por llamada y mensajes a toda hora, y quería que agendar fuera tan simple como mandar un texto.',
    solution: 'Un sitio con reservas en línea (el paciente ve solo las horas libres) y un panel privado para la clínica: agenda, expediente de cada paciente, seguimiento e ingresos.',
    results: ['Citas que entran solas, con aviso al instante', 'Expediente, notas y cobros de cada paciente', 'Presencia profesional en Google'],
    img: '/proyectos/clinica.webp', imgMobile: '/proyectos/clinica-movil.webp',
  },
  {
    id: 'lorena', name: 'Lorena de la Garza', kind: 'Sitio y blog', service: 'web', host: 'derechoshumanosconlore.org', url: 'https://derechoshumanosconlore.org/', year: 2025,
    challenge: 'Una activista y autora que necesitaba informar sobre un tema delicado con empatía, y mantener el contenido al día sin ayuda técnica.',
    solution: 'Un sitio accesible y sobrio, con un blog que ella misma actualiza, asesorías y la preventa de su libro.',
    results: ['Publica sin depender de nadie', 'Un canal propio para asesorías', 'Diseño cuidadoso para un tema sensible'],
    img: '/proyectos/lorena.webp', imgMobile: '/proyectos/lorena-movil.webp',
  },
];

/** Tecnologías con las que construimos (nombres, sin logos ajenos). */
/**
 * Herramientas con las que construimos, explicadas por lo que le dan al cliente (página «Cómo trabajamos»).
 * `soon: true` = la sabemos integrar, pero todavía no está en un proyecto entregado (se dice así, sin prometer de más).
 */
export const TOOLS: { group: string; tone: ServiceId; sub: string; items: { name: string; why: string; soon?: boolean }[] }[] = [
  { group: 'Sitios, tiendas y sistemas', tone: 'web', sub: 'Lo que ve tu cliente y el panel que usa tu equipo.', items: [
    { name: 'Next.js y React', why: 'Páginas que cargan rápido y que Google lee bien.' },
    { name: 'TypeScript', why: 'Menos errores escondidos: el código revisa sus propios datos.' },
    { name: 'Tailwind CSS', why: 'Un diseño ordenado que se ve bien en celular, tablet y compu.' },
    { name: 'Supabase y PostgreSQL', why: 'Base de datos con cuentas de usuario y permisos por persona.' },
    { name: 'Vercel', why: 'Publicación con certificado de seguridad, rápida desde cualquier país.' },
  ] },
  { group: 'Automatización y datos', tone: 'automatizacion', sub: 'Sobre las herramientas de Microsoft que tu empresa ya paga.', items: [
    { name: 'Power Automate', why: 'Aprobaciones, avisos y tareas repetidas que se hacen solas.' },
    { name: 'Power Apps', why: 'Formularios y apps internas para tu equipo, también en el celular.' },
    { name: 'Power BI', why: 'Reportes que se actualizan solos, en vez de armar un Excel cada mes.' },
    { name: 'SharePoint y Dataverse', why: 'Un lugar ordenado para los datos y documentos del proceso.' },
    { name: 'SQL Server y Microsoft 365', why: 'Nos conectamos a lo que ya usás, sin cambiar de sistema.' },
  ] },
  { group: 'Pagos y canales', tone: 'cirelia', sub: 'Cómo te pagan y cómo te escriben tus clientes.', items: [
    { name: 'SINPE Móvil', why: 'El pago que todo el mundo usa en Costa Rica, con su comprobante.' },
    { name: 'WhatsApp', why: 'Botones y mensajes ya escritos para que te contacten en un toque.' },
    { name: 'Perfil de Empresa de Google', why: 'Que te encuentren en Maps cuando buscan «cerca de mí».' },
    { name: 'Pagos con tarjeta (ONVO Pay, Stripe)', why: 'Cobros en línea con tarjeta, cuando tu negocio lo necesite.', soon: true },
  ] },
];


/** Opiniones de clientes. Vacío a propósito: nada inventado. Al agregar una real, la sección aparece sola. */
export const TESTIMONIALS: { quote: string; name: string; role: string; logo?: string }[] = [];
