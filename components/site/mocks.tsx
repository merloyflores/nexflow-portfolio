/* eslint-disable @next/next/no-img-element */
import LiveIf from './LiveIf';
import { BarChart3, Bell, CalendarCheck, MessageCircle, Camera, CheckCircle2, FileSpreadsheet, Mail, MessageSquareText, Store, TrendingUp, type LucideIcon } from 'lucide-react';

/*
 * v5 · Ejemplos de interfaz (vuelven de la v3, rehechos). Son ilustrativos y lo dicen («Ejemplo»).
 * Llevan el tono de su servicio con data-tone. Las capturas reales van en Browser / Phone.
 */

/** `live`: dirección del sitio real; si se pasa, encima de la captura se carga el sitio en vivo (ver Live.tsx). */
export function BrowserShot({ url, src, alt = '', eager, className = '', live }: { url: string; src: string; alt?: string; eager?: boolean; className?: string; live?: string }) {
  return (
    <div className={`frame ${className}`}>
      <div className="frame-bar" aria-hidden><i /><i /><i /><span className="frame-url">{url}</span></div>
      <div className="relative">
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width={1440} height={900} />
        {live && <LiveIf url={live} title={`Vista en vivo de ${url}`} />}
      </div>
    </div>
  );
}

/** iPhone (isla, esquinas y marco fino), igual criterio que en Cirelia. */
export function IPhone({ src, alt = '', eager, className = '', live }: { src: string; alt?: string; eager?: boolean; className?: string; live?: string }) {
  return (
    <div className={`iph ${className}`}>
      <div className="iph-screen">
        <span className="iph-island" aria-hidden />
        <img src={src} alt={alt} loading={eager ? 'eager' : 'lazy'} decoding="async" width={390} height={844} />
        {live && <LiveIf url={live} mobile title="Vista en vivo en el celular" />}
      </div>
    </div>
  );
}

export function FlowMock({ compact }: { compact?: boolean }) {
  const steps: { icon: LucideIcon; t: string; d: string; s: string }[] = [
    { icon: Mail, t: 'Llega una factura al correo', d: 'proveedores@tuempresa.com', s: '08:02' },
    { icon: FileSpreadsheet, t: 'Se registran los datos', d: 'Proveedor, monto y fecha en la tabla', s: '08:02' },
    { icon: MessageSquareText, t: 'Se pide la aprobación', d: 'A la jefatura, en Teams', s: '08:03' },
    { icon: CheckCircle2, t: 'Aprobada y avisada', d: 'Contabilidad recibe el aviso', s: '09:15' },
  ];
  return (
    <div className="mock" data-tone="automatizacion">
      <div className="mock-head"><span className="font-semibold">Aprobación de facturas</span><span className="badge">Ejemplo · Power Automate</span></div>
      <div className="py-2">
        {(compact ? steps.slice(0, 3) : steps).map((s, i, arr) => (
          <div key={s.t} className="flow-step">
            <span className="mini"><s.icon size={15} strokeWidth={1.8} aria-hidden /></span>
            <span className="min-w-0"><span className="block font-medium leading-snug">{s.t}</span><span className="block muted text-[.78rem] truncate">{s.d}</span></span>
            <span className="muted text-[.75rem] num">{i === arr.length - 1 && !compact ? '✓ ' : ''}{s.s}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DashMock() {
  const bars = [38, 52, 46, 61, 58, 70, 66, 79, 74, 86, 81, 92];
  const months = ['E', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
  return (
    <div className="mock" data-tone="automatizacion">
      <div className="mock-head"><span className="font-semibold inline-flex items-center gap-2"><BarChart3 size={15} aria-hidden /> Ventas y operación</span><span className="badge">Ejemplo · Power BI</span></div>
      <div className="p-4 grid grid-cols-3 gap-2.5">
        {[['Ventas del año', '₡148,6 M', '+12 %'], ['Pedidos', '4 120', '+6 %'], ['Margen', '31 %', '+2 pts']].map(([l, v, d]) => (
          <div key={l} className="rounded-xl border b p-3">
            <p className="muted text-[.7rem] leading-tight">{l}</p>
            <p className="font-semibold text-[1.05rem] mt-1 num tracking-[-0.02em]">{v}</p>
            <p className="text-[.7rem] mt-0.5 tone-text inline-flex items-center gap-1"><TrendingUp size={11} aria-hidden /> {d}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-xl border b p-3">
          <div className="flex items-end gap-1.5 h-28" aria-hidden>
            {bars.map((h, i) => <span key={i} className={`bar flex-1 ${i === bars.length - 1 ? 'bar-on' : ''}`} style={{ height: `${h}%`, ['--i' as string]: i }} />)}
          </div>
          <div className="flex gap-1.5 mt-1.5" aria-hidden>{months.map((m, i) => <span key={i} className="flex-1 text-center muted text-[.62rem]">{m}</span>)}</div>
        </div>
        <p className="muted text-[.7rem] mt-2">Datos de ejemplo.</p>
      </div>
    </div>
  );
}

export function AppMock() {
  return (
    <div className="iph iph-ui w-full max-w-[15.5rem] mx-auto" data-tone="apps">
      <div className="iph-screen">
        <span className="iph-island" aria-hidden />
        <div className="px-4 pt-9 pb-3 border-b b">
          <span className="badge">Ejemplo · app a la medida</span>
          <p className="font-semibold mt-2 text-[.95rem]">Inspección de bodega</p>
          <p className="muted text-[.72rem]">Bodega central · hoy</p>
        </div>
        <div className="p-4 space-y-2.5 text-[.76rem]">
          {[['Estado de estantes', 'OK'], ['Extintores al día', 'Revisar'], ['Salida de emergencia libre', 'OK']].map(([t, st]) => (
            <div key={t} className="flex items-center justify-between rounded-lg border b px-2.5 py-2"><span>{t}</span><span className="badge">{st}</span></div>
          ))}
          <div className="grid grid-cols-3 gap-1.5 pt-1">
            {[0, 1, 2].map((i) => <span key={i} className="aspect-square rounded-lg border b grid place-items-center muted"><Camera size={14} aria-hidden /></span>)}
          </div>
          <span className="btn btn-ink w-full !h-9 !text-[.78rem] mt-1">Enviar inspección</span>
          <p className="muted text-[.68rem] flex items-center gap-1"><Bell size={11} aria-hidden /> Avisa a mantenimiento si algo falla</p>
        </div>
      </div>
    </div>
  );
}

/** Tarjeta de venta del panel de Cirelia (dato ilustrativo). */
export function SaleCard({ className = '' }: { className?: string }) {
  return (
    <div className={`float-card p-3.5 ${className}`} data-tone="cirelia">
      <div className="flex items-center justify-between gap-3"><span className="muted text-[.72rem]">Ventas del mes</span><span className="mini !w-6 !h-6 !rounded-md"><Store size={12} aria-hidden /></span></div>
      <p className="font-bold text-[1.3rem] tracking-[-0.03em] mt-1 num">₡785 200</p>
      <p className="text-[.7rem] mt-0.5 tone-text inline-flex items-center gap-1"><TrendingUp size={11} aria-hidden /> Ticket promedio +18 %</p>
      <p className="muted text-[.65rem] mt-1.5">Ejemplo · panel de Cirelia Business</p>
    </div>
  );
}

/** Aviso de un flujo terminado (dato ilustrativo). */
export function FlowToast({ className = '' }: { className?: string }) {
  return (
    <div className={`float-card px-3 py-2.5 flex items-center gap-2.5 text-[.78rem] ${className}`} data-tone="automatizacion">
      <span className="mini !w-7 !h-7 !rounded-lg"><CheckCircle2 size={14} aria-hidden /></span>
      <span className="leading-tight"><span className="block font-semibold">Factura aprobada</span><span className="muted">Se avisó a contabilidad · 09:15</span></span>
    </div>
  );
}

/** El visual de cada servicio (portada de su página): capturas reales y ejemplos, nunca fotos de stock. */
export function ServiceVisual({ id }: { id: 'web' | 'cirelia' | 'automatizacion' | 'apps' }) {
  if (id === 'web') return (
    <div className="relative pb-[10%] pr-[14%]">
      <BrowserShot url="bukuecr.com" src="/proyectos/bukue.webp" eager live="https://www.bukuecr.com/" />
      <div className="absolute right-0 bottom-0 w-[24%]"><IPhone src="/proyectos/bukue-movil.webp" eager live="https://www.bukuecr.com/" /></div>
    </div>
  );
  if (id === 'cirelia') return (
    <div className="relative pb-[6%]">
      <BrowserShot url="tutienda.com/admin" src="/cirelia/panel-light.webp" eager />
      <SaleCard className="absolute left-3 -bottom-2 w-[14rem] hidden sm:block" />
    </div>
  );
  if (id === 'automatizacion') return (
    <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
      <FlowMock />
      <div className="lg:mt-14"><DashMock /></div>
    </div>
  );
  return (
    <div className="grid items-center gap-8 sm:grid-cols-[1fr_auto] max-w-4xl mx-auto">
      <ClinicPanelMock />
      <div className="w-[13.5rem] mx-auto"><AppMock /></div>
    </div>
  );
}

/** Un solo equipo conectado a los cuatro servicios (Nosotros). Las líneas se dibujan al aparecer. */
export function TeamFlow() {
  const nodes: { id: 'web' | 'cirelia' | 'automatizacion' | 'apps'; t: string; d: string }[] = [
    { id: 'web', t: 'Sitios web', d: 'Diseño y desarrollo' },
    { id: 'cirelia', t: 'Cirelia Business', d: 'Tienda, caja e inventario' },
    { id: 'automatizacion', t: 'Automatización', d: 'Power Platform y datos' },
    { id: 'apps', t: 'Apps a la medida', d: 'Web y móvil' },
  ];
  return (
    <div className="relative">
      <svg className="flow flow-draw flow-strong absolute inset-0 h-full w-full hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {[12.5, 37.5, 62.5, 87.5].map((x) => <path key={x} d={`M50 25 C 50 50, ${x} 44, ${x} 66`} />)}
      </svg>
      <div className="relative flex justify-center">
        <div className="float-card flex items-center gap-3 px-4 py-3">
          <img src="/merloy.webp" alt="" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
          <span className="leading-tight"><span className="block font-semibold">Un mismo equipo</span><span className="muted text-[.8rem]">Diseña, construye y da soporte</span></span>
        </div>
      </div>
      <div className="relative mt-10 grid grid-cols-2 gap-3 md:mt-28 md:grid-cols-4">
        {nodes.map((n, i) => (
          <div key={n.id} className="float-card pop p-4" data-tone={n.id} style={{ ['--d' as string]: `${200 + i * 120}ms` }}>
            <span className="tone-dot" />
            <p className="mt-3 font-semibold leading-tight">{n.t}</p>
            <p className="muted text-[.8rem] mt-1">{n.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Resumen de un diagnóstico (ejemplo): lo que te llevás de la llamada. */
export function DiagnosticMock() {
  const rows: [string, string, string][] = [
    ['El sitio no tiene botón de WhatsApp en el celular', 'Alta', 'web'],
    ['El inventario se cuenta a mano cada viernes', 'Alta', 'cirelia'],
    ['El reporte mensual toma dos días en Excel', 'Media', 'automatizacion'],
  ];
  return (
    <div className="mock">
      <div className="mock-head"><span className="font-semibold">Resumen del diagnóstico</span><span className="badge">Ejemplo</span></div>
      <div className="p-4 space-y-2.5">
        {rows.map(([t, p, tone]) => (
          <div key={t} className="flex items-center gap-3 rounded-xl border b px-3 py-2.5 text-[.85rem]" data-tone={tone}>
            <span className="tone-dot shrink-0" />
            <span className="flex-1 min-w-0">{t}</span>
            <span className="badge">{p}</span>
          </div>
        ))}
        <p className="muted text-[.78rem] pt-1">Primer paso recomendado: botón de WhatsApp y agenda en el sitio (1 semana).</p>
      </div>
    </div>
  );
}

/**
 * Panel de una clínica (ejemplo). Reproduce las secciones reales del sistema del Centro Podológico:
 * Hoy, Agenda, Pacientes, Seguimiento e Ingresos. Nombres y montos inventados, y lo dice.
 */
export function ClinicPanelMock() {
  const citas: [string, string, string, 'ok' | 'pend'][] = [
    ['8:00', 'María R.', 'Uña encarnada', 'ok'],
    ['9:00', 'Carlos M.', 'Pie diabético · control', 'ok'],
    ['10:00', 'Andrea S.', 'Quiropodia', 'pend'],
    ['12:00', 'Luis F.', 'Valoración', 'pend'],
  ];
  return (
    <div className="mock" data-tone="clinicas">
      <div className="mock-head"><span className="font-semibold inline-flex items-center gap-2"><CalendarCheck size={15} aria-hidden /> Panel de la clínica</span><span className="badge">Ejemplo</span></div>
      <div className="grid grid-cols-[auto_1fr]">
        <ul className="hidden sm:block border-r b p-2.5 text-[.78rem] space-y-0.5" aria-hidden>
          {['Hoy', 'Agenda', 'Pacientes', 'Seguimiento', 'Ingresos'].map((t, i) => (
            <li key={t} className={`rounded-lg px-3 py-1.5 ${i === 0 ? 'font-semibold tone-soft' : 'muted'}`}>{t}</li>
          ))}
        </ul>
        <div className="p-4 min-w-0">
          <div className="flex items-baseline justify-between gap-3">
            <p className="font-semibold">Hoy, martes</p>
            <p className="muted text-[.75rem]">4 citas · 2 por confirmar</p>
          </div>
          <div className="mt-3 space-y-2">
            {citas.map(([h, n, t, st]) => (
              <div key={h} className="flex items-center gap-3 rounded-xl border b px-3 py-2 text-[.8rem]">
                <span className="num font-semibold w-11 shrink-0">{h}</span>
                <span className="min-w-0 flex-1"><span className="block font-medium truncate">{n}</span><span className="block muted text-[.72rem] truncate">{t}</span></span>
                {st === 'ok'
                  ? <span className="badge">Confirmada</span>
                  : <span className="inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[.7rem] font-semibold text-white" style={{ background: '#1f7a4d' }}><MessageCircle size={11} aria-hidden /> Confirmar</span>}
              </div>
            ))}
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border b p-2.5"><p className="muted text-[.68rem]">Ingresos del mes</p><p className="font-semibold num mt-0.5">₡1 240 000</p></div>
            <div className="rounded-xl border b p-2.5"><p className="muted text-[.68rem]">Para llamar esta semana</p><p className="font-semibold num mt-0.5">6 pacientes</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Aviso de una cita nueva que entra desde el sitio (ejemplo). */
export function BookingToast({ className = '' }: { className?: string }) {
  return (
    <div className={`float-card px-3 py-2.5 flex items-center gap-2.5 text-[.78rem] ${className}`} data-tone="clinicas">
      <span className="mini !w-7 !h-7 !rounded-lg"><CalendarCheck size={14} aria-hidden /></span>
      <span className="leading-tight"><span className="block font-semibold">Nueva cita desde el sitio</span><span className="muted">Miércoles 9:00 · Valoración</span></span>
    </div>
  );
}
