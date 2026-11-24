/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Plus, Users, Tag, MessagesSquare, KeyRound, ShieldCheck, LifeBuoy, BarChart3, Moon } from 'lucide-react';
import { CRC_PER_USD, PLAN_ADDONS } from '@/lib/cirelia/plans';
import { FAQ } from '@/lib/cirelia/plans';
import { BrowserFrame, ThemedImg } from './Shot';
import { BrowserShot, IPhone } from '../site/mocks';
import { CireliaWordmark } from './Logo';

/* ───────────────────────── Piezas chicas ───────────────────────── */

export function Head({ title, sub, center }: { title: React.ReactNode; sub?: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} data-rv>
      <h2 className="pv-h2">{title}</h2>
      {sub && <p className="pv-lead mt-4">{sub}</p>}
    </div>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

export function HeroCopy({ trialDays }: { trialDays: number }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="pv-h1" data-rv="1">Vendé en el local y por internet desde el mismo panel.</h1>
      <p className="pv-lead mt-6 max-w-2xl mx-auto" data-rv="2">
        Cirelia junta tu tienda en línea, la caja, los pedidos y el inventario. Si vendés algo en el mostrador, el stock de la web baja solo.
        Nosotros la configuramos con tu marca y tus productos, y te enseñamos a usarla.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center" data-rv="3">
        <a href="#precios" className="pv-btn pv-btn-dark">Ver precios <ArrowRight size={16} className="pv-arrow" aria-hidden /></a>
        <Link href="https://cirelia-store.vercel.app/demo" target="_blank" rel="noopener noreferrer" className="pv-btn pv-btn-line">Probar el panel de demostración</Link>
      </div>
      <p className="pv-muted text-[.85rem] mt-5" data-rv="4">
        {trialDays > 0 ? `${trialDays} días de prueba · ` : ''}Panel y soporte en español
      </p>
    </div>
  );
}

const PAYMENTS = ['SINPE Móvil', 'Transferencia', 'Efectivo contra entrega', 'Pago en tienda', 'Tarjeta con ONVO Pay', 'Tarjeta con Stripe'];

export function PayStrip() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6" data-rv>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-8 border-y" style={{ borderColor: 'var(--pv-line)' }}>
        <p className="pv-muted text-[.85rem] shrink-0">Tus clientes pagan con</p>
        <ul className="flex flex-wrap gap-x-7 gap-y-2 text-[.95rem] font-medium pv-ink2">
          {PAYMENTS.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </div>
  );
}

/* ───────────────────────── Filas del producto ───────────────────────── */

type Row = {
  id: string; title: string; body: string; points: string[];
  bg: 'pv-g1' | 'pv-g2' | 'pv-g3' | 'pv-g4';
  visual: React.ReactNode;
};

const ROWS: Row[] = [
  {
    id: 'caja', bg: 'pv-g1',
    title: 'Cobrá en el mostrador sin abrir otro sistema.',
    body: 'Buscás el producto por nombre o código, lo sumás y cobrás. La venta queda junto con los pedidos de la web, con el mismo cliente y el mismo inventario.',
    points: ['Funciona en compu, tablet o celular', 'Efectivo, SINPE o tarjeta, con apertura y cierre de caja', 'Descuentos y cambios de precio con el PIN de un encargado'],
    visual: <BrowserFrame url="tutienda.com/admin/vender"><ThemedImg name="vender" dark w={1619} h={1012} alt="Punto de venta con productos y una venta en curso" /></BrowserFrame>,
  },
  {
    id: 'pedidos', bg: 'pv-g2',
    title: 'Cada pedido, desde que entra hasta que se entrega.',
    body: 'Los pedidos de la tienda en línea y los del local caen en la misma lista. Los avanzás de estado, imprimís la factura y tu cliente ve en qué va su compra.',
    points: ['Lista o tablero por estado, como te acomode', 'Notas internas e historial de cada cambio', 'Reparto propio con PIN de entrega en el plan Pro'],
    visual: <BrowserFrame url="tutienda.com/admin/ventas"><ThemedImg name="ventas" dark alt="Lista de pedidos con estados y totales" /></BrowserFrame>,
  },
  {
    id: 'inventario', bg: 'pv-g3',
    title: 'Sabés qué tenés, qué se vende y qué se está acabando.',
    body: 'Productos con variantes de talla, color o lo que uses, con su costo y una alerta cuando queda poco. Si ya tenés todo en Excel, lo subís de una vez.',
    points: ['Importás y exportás en Excel', 'Cada cambio de precio o de stock queda anotado con nombre y hora', 'Categorías, marcas y proveedores'],
    visual: (
      <div className="relative pb-[9%] sm:pb-[6%]">
        <BrowserFrame url="tutienda.com/admin/inventario"><ThemedImg name="inventario" dark alt="Inventario con productos, stock y valor" /></BrowserFrame>
        {/* El primer producto de la tabla, en su tarjeta: el mismo que se ve arriba a la izquierda. */}
        <div className="pv-float left-[3%] bottom-0 w-[13.5rem] sm:w-[16rem] max-w-[70%] p-2.5 sm:p-3 flex items-center gap-3" aria-hidden>
          <img src="/cirelia/tenis-lado.webp" alt="" width={800} height={800} loading="lazy" decoding="async" className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl object-cover bg-white shrink-0" />
          {/* Calza con la primera fila de cada captura: la de día y la de noche traen productos distintos. */}
          <div className="min-w-0 leading-tight pv-only-light">
            <p className="text-[.8rem] sm:text-[.9rem] font-semibold">Zapatillas Urban Peak</p>
            <p className="text-[.72rem] sm:text-[.8rem] pv-muted mt-0.5">4 variantes · en oferta</p>
            <p className="text-[.8rem] sm:text-[.95rem] font-semibold mt-1 pv-num whitespace-nowrap">₡74 900 <span className="pv-muted line-through font-normal text-[.72rem] sm:text-[.8rem]">₡89 900</span></p>
          </div>
          <div className="min-w-0 leading-tight pv-only-dark">
            <p className="text-[.8rem] sm:text-[.9rem] font-semibold">Tenis deportivos blancos</p>
            <p className="text-[.72rem] sm:text-[.8rem] pv-muted mt-0.5">5 variantes · en oferta</p>
            <p className="text-[.8rem] sm:text-[.95rem] font-semibold mt-1 pv-num whitespace-nowrap">₡44 900 <span className="pv-muted line-through font-normal text-[.72rem] sm:text-[.8rem]">₡49 900</span></p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'tienda', bg: 'pv-g4',
    title: 'Una tienda con tu marca, pensada para el celular.',
    body: 'Tu logo, tus colores y tus fotos. La mayoría de tus clientes te va a comprar desde el teléfono, así que todo se diseña primero ahí. Tu propio dominio se puede conectar en cualquier plan.',
    points: ['Carrito, favoritos y cuenta de cliente, o solo catálogo si preferís', 'Páginas propias: quiénes somos, envíos, políticas', 'Chat con tus clientes dentro de la tienda'],
    visual: (
      <div className="relative pr-[16%] sm:pr-[18%] pb-[6%]">
        {/* La tienda de demostración, en vivo (con su captura de respaldo) y en el mismo iPhone del resto del sitio. */}
        <BrowserShot url="tutienda.com/shop" src="/cirelia/tienda-shop.webp" alt="Catálogo de la tienda Cirelia con filtros y precios" live="https://cirelia-store.vercel.app/shop?category=ropa-para-dama" />
        <div className="absolute right-0 bottom-0 w-[25%] sm:w-[22%]">
          <IPhone src="/cirelia/tienda-movil.webp" alt="La tienda abierta en el celular" live="https://cirelia-store.vercel.app/" />
        </div>
      </div>
    ),
  },
  {
    id: 'numeros', bg: 'pv-g1',
    title: 'Abrís el panel y ya sabés cómo va el mes.',
    body: 'Ventas, pedidos pendientes, lo que se agota y de dónde llegan tus visitas. La analítica viene adentro: no tenés que instalar nada aparte.',
    points: ['Comparación con el período anterior', 'Visitas, de dónde vienen y cuántas terminan en compra', 'Un resumen en palabras simples de lo que cambió'],
    visual: <BrowserFrame url="tutienda.com/admin"><ThemedImg name="panel" dark alt="Inicio del panel con ventas, ganancia y avisos" /></BrowserFrame>,
  },
];

export function ProductRows() {
  return (
    <div className="space-y-24 sm:space-y-32">
      {ROWS.map((r, n) => {
        const flip = n % 2 === 1;
        return (
          <article key={r.id} id={`p-${r.id}`} className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center scroll-mt-24">
            <div className={`lg:col-span-4 ${flip ? 'lg:order-2' : ''}`} data-rv>
              <h3 className="pv-h3">{r.title}</h3>
              <p className="pv-ink2 mt-4 leading-relaxed text-[1.01rem]">{r.body}</p>
              <ul className="mt-7 text-[.94rem] border-t" style={{ borderColor: 'var(--pv-line)' }}>
                {r.points.map((p) => (
                  <li key={p} className="py-3 border-b leading-snug pv-ink2" style={{ borderColor: 'var(--pv-line)' }}>{p}</li>
                ))}
              </ul>
            </div>
            <div className={`lg:col-span-8 ${flip ? 'lg:order-1' : ''}`} data-rv="1">
              <div className={`pv-panel ${r.bg}`}>{r.visual}</div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ───────────────────────── En el día a día (fotos del video) ───────────────────────── */

const LIFE = [
  { img: 'vida-chat', t: 'Te escriben desde la casa', d: 'Y les respondés desde el panel, con su historial a la vista.' },
  { img: 'vida-tablet', t: 'Tu equipo vende desde la tablet', d: 'Cada persona con su usuario y solo los permisos que le tocan.' },
  { img: 'vida-asistente', t: 'Le pedís lo que necesitás', d: 'El asistente arma una vitrina o un cupón por vos (desde el plan Negocio).' },
  { img: 'vida-entrega', t: 'Y tu cliente lo recibe', d: 'Con su pedido seguido de principio a fin, y su garantía registrada.' },
];

export function DayToDay() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-32" aria-labelledby="pv-life">
      <div className="max-w-2xl" data-rv>
        <h2 id="pv-life" className="pv-h2">Mientras vos atendés, el panel lleva el orden.</h2>
      </div>
      <ul className="pv-life mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
        {LIFE.map((l, n) => (
          <li key={l.img} data-rv={n + 1}>
            <img src={`/cirelia/${l.img}.webp`} alt="" width={640} height={800} loading="lazy" decoding="async" />
            <p className="font-semibold tracking-[-0.01em] mt-4 text-[.98rem] leading-snug">{l.t}</p>
            <p className="pv-muted text-[.88rem] mt-1 leading-relaxed">{l.d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ───────────────────────── Todo incluido (franja invertida) ───────────────────────── */

const INCLUDED = [
  { Icon: Users, t: 'Clientes', d: 'Historial de compras y datos de contacto de cada persona.' },
  { Icon: Tag, t: 'Cupones y promociones', d: 'Descuentos por fecha o producto, y regalos con la compra.' },
  { Icon: MessagesSquare, t: 'Chat', d: 'Te escriben desde la tienda y respondés desde el panel.' },
  { Icon: KeyRound, t: 'Equipo y permisos', d: 'Cada persona con su usuario y solo lo que le toca.' },
  { Icon: ShieldCheck, t: 'Acceso controlado', d: 'Podés limitar el panel a ciertos dispositivos o redes.' },
  { Icon: BarChart3, t: 'Analítica propia', d: 'Visitas y ventas sin instalar herramientas de terceros.' },
  { Icon: LifeBuoy, t: 'Guías y avisos claros', d: 'Ayuda paso a paso y errores que dicen qué hacer.' },
  { Icon: Moon, t: 'Modo noche', d: 'El panel también en oscuro, para las jornadas largas.' },
];

export function Included() {
  return (
    <section className="pv-inv py-24 sm:py-32" aria-labelledby="pv-incl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-end" data-rv>
          <div className="lg:col-span-7">
            <h2 id="pv-incl" className="pv-h2">En todos los planes, lo de todos los días ya viene adentro.</h2>
          </div>
          <p className="lg:col-span-5 pv-inv-muted leading-relaxed">
            Los planes cambian en topes y en herramientas para crecer. Lo básico para vender ordenado no se cobra aparte.
          </p>
        </div>

        <ul className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l pv-inv-line">
          {INCLUDED.map(({ Icon, t, d }, n) => (
            <li key={t} className="p-6 border-r border-b pv-inv-line" data-rv={(n % 4) + 1}>
              <Icon size={20} strokeWidth={1.6} aria-hidden />
              <p className="font-semibold mt-5 tracking-[-0.01em]">{t}</p>
              <p className="pv-inv-muted text-[.9rem] mt-1.5 leading-relaxed">{d}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <figure data-rv>
            <BrowserFrame url="tutienda.com/admin/clientes"><ThemedImg name="clientes-light" alt="Pantalla de clientes" /></BrowserFrame>
            <figcaption className="pv-inv-muted text-[.85rem] mt-3">Clientes, con sus compras y su saldo.</figcaption>
          </figure>
          <figure data-rv="1">
            <BrowserFrame url="tutienda.com/admin/diseno"><ThemedImg name="diseno-light" alt="Pantalla de diseño de la tienda" /></BrowserFrame>
            <figcaption className="pv-inv-muted text-[.85rem] mt-3">Diseño de la tienda, con vista previa antes de publicar.</figcaption>
          </figure>
        </div>

        <div className="mt-12" data-rv>
          <Link href="https://cirelia-store.vercel.app/planes/herramientas" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold underline underline-offset-4 decoration-1" style={{ textDecorationColor: 'var(--pv-inv-muted)' }}>
            Ver cada herramienta en detalle <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Cómo se arranca ───────────────────────── */

const STEPS = [
  { t: 'Nos contás qué vendés', d: 'Por WhatsApp o en una llamada. Vemos tu catálogo y te decimos qué plan te calza, sin compromiso.' },
  { t: 'Armamos tu tienda', d: 'Con tu logo, tus colores y tus productos. La meta es tenerla lista en 72 horas desde que nos pasás todo.' },
  { t: 'Te enseñamos y salís a vender', d: 'Una sesión práctica con tu equipo. Después seguimos a mano por el canal de soporte de tu plan.' },
];

export function Steps() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32" aria-labelledby="pv-steps">
      <div data-rv>
        <h2 id="pv-steps" className="pv-h2 max-w-3xl">En otras plataformas te adaptás vos. Acá nos ajustamos a tu negocio.</h2>
        <p className="pv-lead mt-4 max-w-2xl">No tenés que programar ni cargar todo por tu cuenta. Así se arranca:</p>
      </div>
      <ol className="mt-14 grid md:grid-cols-3 gap-10 md:gap-8">
        {STEPS.map((s, n) => (
          <li key={s.t} className="border-t pt-6" style={{ borderColor: 'var(--pv-ink)' }} data-rv={n + 1}>
            <span className="pv-num pv-muted text-[.85rem] font-medium">0{n + 1}</span>
            <p className="text-[1.2rem] font-semibold tracking-[-0.02em] mt-3">{s.t}</p>
            <p className="pv-ink2 mt-2 leading-relaxed">{s.d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ───────────────────────── Servicios aparte ───────────────────────── */

export function Extras() {
  return (
    <div className="grid lg:grid-cols-12 gap-8 mt-24" aria-labelledby="pv-extras">
      <div className="lg:col-span-4" data-rv>
        <h3 id="pv-extras" className="text-[1.5rem] font-semibold tracking-[-0.03em] leading-tight">Servicios aparte, si necesitás una mano extra.</h3>
        <p className="pv-ink2 mt-3 leading-relaxed text-[.95rem]">Se pagan una vez y solo si los pedís. No suben tu mensualidad.</p>
      </div>
      <ul className="lg:col-span-8 border-t" style={{ borderColor: 'var(--pv-line)' }} data-rv="1">
        {PLAN_ADDONS.map((a) => (
          <li key={a.id} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-4 border-b" style={{ borderColor: 'var(--pv-line)' }}>
            <p className="font-semibold tracking-[-0.01em]">{a.label}</p>
            <p className="pv-num text-[.92rem] text-right">{a.price}</p>
            <p className="pv-muted text-[.9rem] col-span-2 sm:col-span-1">{a.blurb}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ───────────────────────── Preguntas ───────────────────────── */

export function Faq({ cta }: { cta: string | null }) {
  return (
    <section id="preguntas" className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 scroll-mt-20 grid lg:grid-cols-12 gap-10" aria-labelledby="pv-faq">
      <div className="lg:col-span-4" data-rv>
        <h2 id="pv-faq" className="pv-h2">Lo que casi todos preguntan.</h2>
        {cta && <p className="pv-ink2 mt-5 leading-relaxed">¿No está la tuya? <a href={cta} target="_blank" rel="noopener noreferrer" className="pv-link">Escribinos</a> y te respondemos nosotros.</p>}
      </div>
      <div className="lg:col-span-8 pv-faq border-t" style={{ borderColor: 'var(--pv-line)' }} data-rv="1">
        {FAQ.map((f) => (
          <details key={f.q} id={f.id}>
            <summary>{f.q}<Plus size={18} className="pv-plus" aria-hidden /></summary>
            <div>{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Cierre y pie ───────────────────────── */

export function FinalCta({ cta }: { cta: string | null }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24" aria-labelledby="pv-final">
      <div className="pv-panel pv-g1 !p-8 sm:!p-14 text-center" data-rv>
        <h2 id="pv-final" className="pv-h2 max-w-2xl mx-auto">¿Lo vemos con tus productos?</h2>
        <p className="pv-lead mt-4 max-w-xl mx-auto">Mandanos un mensaje con lo que vendés y cómo lo vendés hoy. Te decimos qué plan te sirve y cuánto tardaríamos en dejarte lista la tienda.</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          {cta && <a href={cta} target="_blank" rel="noopener noreferrer" className="pv-btn pv-btn-dark">Escribir por WhatsApp <ArrowUpRight size={16} aria-hidden /></a>}
          <Link href="https://cirelia-store.vercel.app/demo" target="_blank" rel="noopener noreferrer" className="pv-btn pv-btn-line">Probar el panel de demostración</Link>
        </div>
      </div>
    </section>
  );
}

export function PvFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t" style={{ borderColor: 'var(--pv-line)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <CireliaWordmark size={22} />
          <p className="pv-muted text-[.85rem] mt-1 max-w-md leading-relaxed">
            Hecho en Costa Rica por Nexflow Digital. Precios en dólares (USD); el monto en colones es de referencia (₡{CRC_PER_USD} por dólar) y puede variar.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-[.88rem] pv-ink2" aria-label="Pie de página">
          <Link href="https://cirelia-store.vercel.app/planes/herramientas" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Herramientas</Link>
          <Link href="https://cirelia-store.vercel.app/demo" target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-4">Demostración</Link>
          <Link href="https://cirelia-store.vercel.app/login" className="hover:underline underline-offset-4">Entrar</Link>
          <span className="pv-muted">© {year}</span>
        </nav>
      </div>
    </footer>
  );
}
