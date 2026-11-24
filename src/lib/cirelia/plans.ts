/**
 * Cirelia Business en el sitio de Nexflow: una copia de la página /planes de Cirelia.
 * Los planes están ESCRITOS acá (espejo de la tabla `plans` de Cirelia al 11-nov-2026). Si cambiás un precio o un
 * tope en Súper Admin → Plataforma → Planes, cambialo también acá. Comprar y probar siempre lleva al sitio de Cirelia.
 */
export type PlanModuleId =
  | 'shop_advanced' | 'code_pages' | 'chat_studio' | 'ai_admin' | 'ai_customers' | 'crm'
  | 'commissions' | 'warranties' | 'referrals' | 'custom_domain' | 'api_webhooks' | 'multi_branch' | 'delivery' | 'analytics' | 'promotions';
export type SupportChannel = 'email' | 'whatsapp' | 'prioritario' | 'dedicado';

export type PlanView = {
  id: string; key: string; label: string; description: string; price: number | null; custom: boolean; highlight: boolean; badge: string;
  setup: number | null; idealFor: string; annualPct: number; trialDays: number; features: string[];
  limits: { products: number | null; staff: number | null; customers: number | null; orders: number | null; storageMb: number | null; branches: number | null; aiUsd: number | null };
  modules: Record<PlanModuleId, boolean>; support: { channel: SupportChannel; hours: number | null }; cta: string | null;
};

export const CIRELIA_URL = 'https://cirelia-store.vercel.app';
export const CIRELIA_PLANES = `${CIRELIA_URL}/planes`;
export const CIRELIA_DEMO = `${CIRELIA_URL}/demo`;

export function annualPrice(monthly: number | null, discountPct: number | null | undefined): number | null {
  if (monthly == null) return null;
  return Math.round(monthly * 12 * (1 - Math.min(100, Math.max(0, discountPct ?? 0)) / 100) * 100) / 100;
}
export const CRC_PER_USD = 500;
export const colones = (usdAmount: number) => `₡${(Math.round((usdAmount * CRC_PER_USD) / 100) * 100).toLocaleString('es-CR')}`;

export const PLAN_ADDONS: { id: string; label: string; price: string; blurb: string }[] = [
  { id: 'design', label: 'Diseño premium', price: '$150', blurb: 'Identidad visual y secciones a la medida de tu marca.' },
  { id: 'migration', label: 'Migración de catálogo', price: '$100 – $300', blurb: 'Pasamos tus productos desde Excel, otra tienda o redes.' },
  { id: 'bulk', label: 'Carga masiva de productos', price: 'Según cantidad', blurb: 'Fotos, precios y categorías cargados por nosotros.' },
  { id: 'integration', label: 'Integración especial', price: 'Desde $200', blurb: 'Facturación, pagos, ERP o lo que tu operación necesite.' },
  { id: 'ai_setup', label: 'Configuración de IA', price: '$100 + consumo', blurb: 'Entrenamos al asistente con tu negocio.' },
];

const M = (on: PlanModuleId[]): Record<PlanModuleId, boolean> => {
  const all: PlanModuleId[] = ['shop_advanced', 'code_pages', 'chat_studio', 'ai_admin', 'ai_customers', 'crm', 'commissions', 'warranties', 'referrals', 'custom_domain', 'api_webhooks', 'multi_branch', 'delivery', 'analytics', 'promotions'];
  return Object.fromEntries(all.map((m) => [m, on.includes(m)])) as Record<PlanModuleId, boolean>;
};
const wa = (plan: string) => `https://wa.me/50672655724?text=${encodeURIComponent(`Hola Nexflow, me interesa el plan ${plan} de Cirelia Business.`)}`;

export const PLANS: PlanView[] = [
  { id: 'esencial', key: 'esencial', label: 'Esencial', description: 'Tu tienda propia con tu marca, lista para recibir pedidos y cobros.', price: 99.99, custom: false, highlight: false, badge: '', setup: 250,
    idealFor: 'Si hoy vendés por redes o en local y querés tu primera tienda.', annualPct: 17, trialDays: 7,
    features: ['Tienda con tu logo y tus colores', 'Hasta 150 productos y 2 usuarios', 'Cobros con SINPE, transferencia, tarjeta y efectivo', 'Analítica propia de tus visitas', 'Capacitación inicial y soporte por correo'],
    limits: { products: 150, staff: 2, customers: null, orders: 200, storageMb: 3000, branches: 1, aiUsd: 0 },
    modules: M(['analytics', 'promotions']), support: { channel: 'email', hours: 48 }, cta: wa('Esencial') },
  { id: 'negocio', key: 'negocio', label: 'Negocio', description: 'Dominio propio, asistente con IA, garantías y referidos para crecer con orden.', price: 159.99, custom: false, highlight: true, badge: 'El más elegido', setup: 450,
    idealFor: 'Si ya vendés seguido y necesitás orden, equipo y tu propio dominio.', annualPct: 17, trialDays: 7,
    features: ['Hasta 450 productos y 5 usuarios', 'Tu propio dominio (www.tunegocio.com)', 'Asistente con IA en tu panel', 'Garantías, postventa y referidos', 'Soporte por WhatsApp (respuesta en 24 h)'],
    limits: { products: 450, staff: 5, customers: null, orders: 800, storageMb: 6000, branches: 1, aiUsd: 2 },
    modules: M(['analytics', 'promotions', 'ai_admin', 'referrals', 'warranties', 'chat_studio', 'custom_domain', 'shop_advanced']), support: { channel: 'whatsapp', hours: 24 }, cta: wa('Negocio') },
  { id: 'pro', key: 'pro', label: 'Pro', description: 'Todo Negocio, más IA que atiende a tus clientes, reparto propio y comisiones para vendedores.', price: 229.99, custom: false, highlight: false, badge: '', setup: 750,
    idealFor: 'Si tenés vendedores, entregas propias o mucho volumen de pedidos.', annualPct: 17, trialDays: 7,
    features: ['Hasta 1500 productos y 15 usuarios', 'Asistente IA que atiende a tus compradores', 'Reparto propio con app y mapa en vivo', 'Comisiones para tus vendedores', 'Páginas con código y soporte prioritario'],
    limits: { products: 1500, staff: 15, customers: null, orders: 3000, storageMb: 20000, branches: 1, aiUsd: 6 },
    modules: M(['analytics', 'promotions', 'ai_admin', 'referrals', 'warranties', 'chat_studio', 'custom_domain', 'shop_advanced', 'crm', 'delivery', 'code_pages', 'commissions', 'ai_customers']), support: { channel: 'prioritario', hours: 8 }, cta: wa('Pro') },
  { id: 'enterprise', key: 'enterprise', label: 'Enterprise', description: 'A medida: límites a tu escala, integraciones y acompañamiento dedicado.', price: null, custom: true, highlight: false, badge: '', setup: 1500,
    idealFor: 'Cadenas y empresas con procesos propios que necesitan una solución a medida.', annualPct: 0, trialDays: 0,
    features: ['Todo lo de Pro, sin topes pensados para pymes', 'Integraciones a medida (facturación, ERP, pagos)', 'Sucursales y API: se evalúan según tu caso', 'Acompañamiento dedicado con tiempo de respuesta acordado'],
    limits: { products: null, staff: null, customers: null, orders: null, storageMb: null, branches: null, aiUsd: null },
    modules: M(['shop_advanced', 'code_pages', 'chat_studio', 'ai_admin', 'ai_customers', 'crm', 'commissions', 'warranties', 'referrals', 'custom_domain', 'api_webhooks', 'multi_branch', 'delivery', 'analytics', 'promotions']), support: { channel: 'dedicado', hours: 4 }, cta: wa('Enterprise') },
];

export const fmtNum = (n: number) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
/** Dólares: sin decimales si es entero ($250), con dos si no ($99.99). Los precios salen de la BD, nunca fijos acá. */
export const fmtUsd = (n: number) => {
  const r = Math.round(n * 100) / 100;
  if (Number.isInteger(r)) return `$${fmtNum(r)}`;
  const [i, d] = r.toFixed(2).split('.');
  return `$${i.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}.${d}`;
};
/** Equivalente mensual pagando el año con descuento (con centavos). */
export const monthlyFromYear = (price: number, pct: number) => Math.round(((annualPrice(price, pct) ?? price * 12) / 12) * 100) / 100;
export const fmtStorage = (mb: number) => (mb >= 1000 ? `${mb / 1000} GB` : `${mb} MB`);
export const SUPPORT_LABEL: Record<SupportChannel, string> = { email: 'Por correo', whatsapp: 'Por WhatsApp', prioritario: 'Prioritario', dedicado: 'Persona dedicada' };

/* ───────── Tabla comparativa (mismos grupos que el menú del admin) ───────── */

export type CellValue = { t: 'yes' } | { t: 'no' } | { t: 'soon' } | { t: 'text'; v: string };
export type CompareRow = { label: string; hint?: string; cell: (p: PlanView) => CellValue };
export type CompareGroup = { id: string; title: string; blurb: string; rows: CompareRow[] };

const yes: CellValue = { t: 'yes' };
const mod = (id: PlanModuleId) => (p: PlanView): CellValue => (p.modules[id] ? yes : { t: 'no' });
const lim = (n: number | null, unit: string, fallback = 'A medida'): CellValue => ({ t: 'text', v: n == null ? fallback : `${fmtNum(n)} ${unit}`.trim() });

export const COMPARE_GROUPS: CompareGroup[] = [
  {
    id: 'vender', title: 'Vender', blurb: 'Pedidos, cobros y clientes',
    rows: [
      { label: 'Pedidos, facturas y envíos', hint: 'Todo el ciclo de una venta en una sola pantalla.', cell: () => yes },
      { label: 'Cobros: SINPE, transferencia, efectivo y tarjeta', hint: 'Tarjeta con ONVO Pay o Stripe; las otras pasarelas llegan pronto.', cell: () => yes },
      { label: 'Clientes y su historial de compras', cell: () => yes },
      { label: 'Garantía y postventa', hint: 'Reclamos y seguimiento de garantías.', cell: mod('warranties') },
      { label: 'Programa de referidos', hint: 'Tus clientes te recomiendan y vos premiás.', cell: mod('referrals') },
      { label: 'Comisiones para vendedores', cell: mod('commissions') },
      { label: 'Reparto propio con app y mapa en vivo', hint: 'Repartidores con PIN de entrega y seguimiento para tu cliente.', cell: mod('delivery') },
    ],
  },
  {
    id: 'catalogo', title: 'Catálogo', blurb: 'Productos, stock y promociones',
    rows: [
      { label: 'Productos', cell: (p) => lim(p.limits.products, 'productos') },
      { label: 'Categorías, variantes e importación desde Excel (CSV)', cell: () => yes },
      { label: 'Stock con alertas de poco inventario', cell: () => yes },
      { label: 'Características propias por producto', cell: () => yes },
      { label: 'Cupones y promociones', cell: () => yes },
      { label: 'Vendedores que publican sus productos', cell: () => yes },
    ],
  },
  {
    id: 'disenar', title: 'Diseñar mi tienda', blurb: 'Tu marca, tu estilo',
    rows: [
      { label: 'Tienda con tu logo y tus colores', cell: () => yes },
      { label: 'Sets de diseño listos para aplicar', cell: () => yes },
      { label: 'Páginas propias (Nosotros, contacto, políticas)', cell: () => yes },
      { label: 'Shop avanzado: looks, filtros y colecciones', cell: mod('shop_advanced') },
      { label: 'Conectar tu propio dominio (www.tunegocio.com)', hint: 'En todos los planes. Si ya tenés uno, te ayudamos a conectarlo.', cell: () => yes },
      { label: 'Dominio incluido en el paquete', hint: 'Lo compramos y renovamos por vos.', cell: mod('custom_domain') },
      { label: 'Páginas con código HTML/CSS propio', cell: mod('code_pages') },
    ],
  },
  {
    id: 'comunicacion', title: 'Comunicación', blurb: 'Chat e inteligencia artificial',
    rows: [
      { label: 'Chat con tus clientes', cell: () => yes },
      { label: 'Chat personalizable (colores, horarios, estilo)', cell: mod('chat_studio') },
      { label: 'Asistente con IA en tu panel', hint: 'Te ayuda a trabajar más rápido dentro del panel.', cell: mod('ai_admin') },
      { label: 'Asistente con IA que atiende a tus compradores', cell: mod('ai_customers') },
      { label: 'Saldo de IA incluido al mes', hint: 'Si se acaba, sumás un paquete. Nunca una sorpresa en tu factura.', cell: (p) => (p.custom ? { t: 'text', v: 'A medida' } : p.limits.aiUsd ? { t: 'text', v: `$${p.limits.aiUsd}` } : { t: 'no' }) },
    ],
  },
  {
    id: 'analitica', title: 'Analítica', blurb: 'Entendé qué pasa en tu tienda',
    rows: [
      { label: 'Analítica propia: visitas, orígenes y embudo de compra', hint: 'Sin cookies y sin instalar nada.', cell: mod('analytics') },
      { label: 'Resumen del día: ventas, pedidos y stock', cell: () => yes },
      { label: 'Centro de guías paso a paso', cell: () => yes },
    ],
  },
  {
    id: 'equipo', title: 'Equipo y ajustes', blurb: 'Personas, límites y soporte',
    rows: [
      { label: 'Usuarios del equipo', cell: (p) => lim(p.limits.staff, 'usuarios') },
      { label: 'Roles y permisos por persona', cell: () => yes },
      { label: 'Pedidos al mes', cell: (p) => lim(p.limits.orders, 'pedidos') },
      { label: 'Espacio para fotos y archivos', cell: (p) => (p.limits.storageMb == null ? { t: 'text', v: 'A medida' } : { t: 'text', v: fmtStorage(p.limits.storageMb) }) },
      { label: 'Soporte', cell: (p) => ({ t: 'text', v: SUPPORT_LABEL[p.support.channel] }) },
      { label: 'Tiempo de respuesta objetivo', cell: (p) => (p.support.hours ? { t: 'text', v: `${p.support.hours} h` } : { t: 'text', v: 'Se acuerda' }) },
      { label: 'Varias sucursales o bodegas', hint: 'Estamos construyéndolo.', cell: () => ({ t: 'soon' }) },
      { label: 'API y webhooks para integrar otros sistemas', hint: 'Estamos construyéndolo. Integraciones puntuales se cotizan aparte.', cell: () => ({ t: 'soon' }) },
    ],
  },
];

/* ───────── Contenido de la página ───────── */

export const FAQ: { id?: string; q: string; a: string }[] = [
  { q: '¿Necesito saber programar o diseñar?', a: 'No. Nosotros armamos tu tienda y te capacitamos. Después la manejás desde un panel en español, con guías paso a paso dentro de la misma herramienta.' },
  { id: 'implementacion', q: '¿Qué es el costo de implementación?', a: 'Es un pago único por dejarte la tienda lista: diseño con tu logo y colores, carga inicial de productos, configuración de cobros y WhatsApp, y capacitación. La mensualidad cubre la plataforma, el soporte y las mejoras.' },
  { q: '¿Cuánto tarda en estar lista mi tienda?', a: 'Nuestra meta es 72 horas desde que nos pasás tu logo y tus productos. Si el catálogo es muy grande o necesitás algo especial, te avisamos el plazo real antes de empezar.' },
  { q: '¿Puedo usar mi propio dominio?', a: 'Sí, en todos los planes. Si ya tenés uno (www.tunegocio.com), te ayudamos a conectarlo a tu tienda. En los planes que dicen «Dominio incluido» lo compramos y lo renovamos nosotros, y queda a nombre de tu negocio.' },
  { q: '¿Puedo cambiar de plan?', a: 'Sí. Podés empezar con uno más chico y subir cuando tu negocio lo pida. Cómo se ajusta el cobro al cambiar se acuerda al contratar.' },
  { q: '¿Hay contrato o plazo mínimo?', a: 'Las condiciones (plazo, facturación y cancelación) se acuerdan por escrito al contratar. Preguntanos y te las explicamos antes de que decidás.' },
  { q: '¿Cómo me pagan mis clientes?', a: 'Con SINPE Móvil, transferencia, efectivo contra entrega o pago en tienda, y con tarjeta mediante ONVO Pay o Stripe. Vos elegís cuáles activar.' },
  { q: '¿Cómo funciona la inteligencia artificial y cuánto cuesta?', a: 'Algunos planes incluyen un saldo mensual de IA. Si lo necesitás más, sumás un paquete de consultas. Lo que consumís lo ves en tu panel.' },
  { q: '¿Mi tienda se adapta a mi tipo de negocio?', a: 'Sí. Al empezar elegís Retail, Food o Services y un asistente deja listos nombres, ejemplos, menú del panel, colores y estilo; lo aceptás con un clic o lo ajustás. Los módulos propios de cada rubro (comandas, agenda) vienen después y los marcamos como próximamente.' },
  { q: '¿Puedo quitar el carrito o dejar solo un catálogo?', a: 'Sí. Podés apagar carrito, favoritos, pie de página, menú de usuario y otras piezas; esas rutas se bloquean y el diseño no deja espacios vacíos.' },
  { q: '¿Qué significa «Próximamente»?', a: 'Que lo estamos construyendo y todavía no se puede usar. No lo vendemos como listo: lo marcamos así para que decidás con información real.' },
];
