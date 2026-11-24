'use client';

/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowUp, ArrowUpRight, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';
import { waLink } from '@/lib/site';

/**
 * Chat de Nexflow (v5), con el mismo estilo del asesor de Cirelia: una cara real (Merloy), respuestas rápidas
 * y paso directo a WhatsApp con el tema de la conversación ya escrito.
 * Es gratis a propósito: no usa inteligencia artificial ni servidores. Lo que la persona escribe se compara con
 * las preguntas de abajo (por palabras clave); si no hay una respuesta clara, se ofrece seguir por WhatsApp.
 * Para cambiar o sumar respuestas, se edita la lista QA.
 */
type QA = { id: string; q: string; keys: string[]; a: string; link?: { href: string; label: string }; wa: string; chip?: boolean };

const QA: QA[] = [
  { id: 'empezar', chip: true, q: '¿Cómo empiezo?', keys: ['empezar', 'empiezo', 'comenzar', 'primer paso', 'diagnostico'],
    a: 'Con un diagnóstico gratis de 30 minutos. Revisamos tu sitio o tu proceso y te decimos qué conviene hacer primero. Si querés avanzar, te mandamos una propuesta con alcance, plazo y precio por escrito.',
    link: { href: '/diagnostico', label: 'Ver el diagnóstico' }, wa: 'Hola Nexflow, quiero agendar el diagnóstico gratis.' },
  { id: 'precio-web', chip: true, q: '¿Cuánto cuesta un sitio web?', keys: ['cuesta', 'precio', 'costo', 'cobran', 'sitio', 'pagina web', 'cotizacion'],
    a: 'Depende de cuántas páginas y funciones necesités (agenda de citas, formulario, blog, varios idiomas). Después del diagnóstico te damos un precio cerrado: sabés el total antes de empezar.',
    link: { href: '/sitios-web', label: 'Ver sitios web' }, wa: 'Hola Nexflow, quiero una cotización para un sitio web.' },
  { id: 'cirelia', chip: true, q: '¿Qué es Cirelia Business?', keys: ['cirelia', 'tienda', 'caja', 'inventario', 'punto de venta', 'pos', 'vender'],
    a: 'Es nuestra plataforma para negocios que venden: tienda en línea, caja para el mostrador e inventario en un solo panel. Planes mensuales desde USD 99.99, y la implementación la hacemos nosotros.',
    link: { href: '/cirelia-business', label: 'Ver planes y precios' }, wa: 'Hola Nexflow, me interesa Cirelia Business para mi negocio.' },
  { id: 'auto', chip: true, q: '¿Qué se puede automatizar?', keys: ['automatizar', 'automatizacion', 'power automate', 'power bi', 'power apps', 'excel', 'reporte', 'aprobacion', 'microsoft'],
    a: 'Lo que hoy hacés a mano y se repite: aprobaciones, reportes en Excel, correos de seguimiento, captura de datos en campo. Lo hacemos sobre Microsoft 365 (Power Automate, Power Apps y Power BI), así no cambiás de herramientas.',
    link: { href: '/automatizacion', label: 'Ver automatización' }, wa: 'Hola Nexflow, quiero automatizar un proceso.' },
  { id: 'clinicas', chip: true, q: 'Tengo una clínica', keys: ['clinica', 'consultorio', 'citas', 'reservas', 'agenda', 'pacientes', 'expediente', 'doctor', 'odontolog', 'fisioterap', 'podolog'],
    a: 'Tenemos un sistema para clínicas ya funcionando: tus pacientes reservan en tu sitio viendo solo las horas libres, y vos manejás agenda, expedientes, seguimiento e ingresos desde un panel. Lo usa hoy el Centro Podológico Ximena Alvarado.',
    link: { href: '/clinicas', label: 'Ver el sistema para clínicas' }, wa: 'Hola Nexflow, tengo una clínica y quiero ver el sistema de reservas y el panel.' },
  { id: 'apps', q: '¿Hacen apps para Android e iOS?', keys: ['app', 'aplicacion', 'android', 'ios', 'iphone', 'movil', 'sistema', 'a la medida'],
    a: 'Sí: aplicaciones web y móviles hechas para tu operación, como portales de clientes, paneles internos y apps para tu equipo. Primero validamos si de verdad hace falta una app o si una web bien hecha lo resuelve.',
    link: { href: '/apps', label: 'Ver apps a la medida' }, wa: 'Hola Nexflow, necesito una aplicación a la medida.' },
  { id: 'plazo', q: '¿Cuánto tarda un proyecto?', keys: ['tarda', 'tiempo', 'plazo', 'cuando', 'semanas', 'rapido'],
    a: 'Un sitio web suele tomar de 2 a 4 semanas; una automatización depende del proceso. El plazo va por escrito en la propuesta y trabajamos por etapas, así ves avances desde la primera semana.',
    wa: 'Hola Nexflow, quiero saber cuánto tardaría mi proyecto.' },
  { id: 'propio', q: '¿El sitio queda a mi nombre?', keys: ['nombre', 'dominio', 'hosting', 'propiedad', 'cuentas', 'mio', 'accesos'],
    a: 'Sí. El dominio, el hosting y las cuentas quedan a tu nombre. Te entregamos los accesos y te enseñamos a hacer los cambios del día a día.',
    wa: 'Hola Nexflow, tengo una consulta sobre cómo entregan los proyectos.' },
  { id: 'despues', q: '¿Qué pasa después de la entrega?', keys: ['despues', 'soporte', 'mantenimiento', 'cambios', 'ayuda', 'entrega'],
    a: 'Te capacitamos para que lo usés y seguimos disponibles para ajustes, mejoras y soporte. Si necesitás algo nuevo, lo cotizamos aparte y por escrito.',
    wa: 'Hola Nexflow, quiero saber cómo es el soporte después de la entrega.' },
  { id: 'pagos', q: '¿Cómo se paga?', keys: ['pago', 'pagar', 'sinpe', 'transferencia', 'tarjeta', 'adelanto', 'cuotas'],
    a: 'Normalmente por etapas: un adelanto al empezar y el resto contra avances y entrega. Aceptamos SINPE Móvil y transferencia. El detalle va en la propuesta.',
    wa: 'Hola Nexflow, quiero saber las formas de pago.' },
  { id: 'donde', q: '¿Trabajan solo en Costa Rica?', keys: ['costa rica', 'pais', 'extranjero', 'ingles', 'remoto', 'donde'],
    a: 'Nuestro foco son pymes de Costa Rica, pero también trabajamos con clientes de otros países, en español o en inglés. Todo se puede hacer a distancia.',
    wa: 'Hola Nexflow, estoy fuera de Costa Rica y quiero conversar un proyecto.' },
];

const norm = (s: string) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function match(text: string): QA | null {
  const t = ` ${norm(text)} `;
  let best: QA | null = null; let score = 0;
  for (const x of QA) {
    const hits = x.keys.filter((k) => t.includes(norm(k))).length;
    if (hits > score) { best = x; score = hits; }
  }
  return score > 0 ? best : null;
}

type Msg = { me: boolean; text: string; qa?: QA; wa?: string };
const AVATAR = '/merloy.webp';
const GREETING = 'Hola, soy Merloy, de Nexflow. Elegí una pregunta o escribí la tuya. Si preferís hablar directo, te paso a WhatsApp.';

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [text, setText] = useState('');
  const list = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let t: number | undefined;
    try { if (!sessionStorage.getItem('nexflow:hint')) t = window.setTimeout(() => { setHint(true); sessionStorage.setItem('nexflow:hint', '1'); }, 14000); } catch { /* sin almacenamiento */ }
    return () => { if (t) clearTimeout(t); };
  }, []);
  useEffect(() => { list.current?.scrollTo({ top: list.current.scrollHeight, behavior: 'smooth' }); }, [msgs]);
  useEffect(() => {
    if (!open) return;
    const k = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open]);

  const pick = (x: QA) => setMsgs((m) => [...m, { me: true, text: x.q }, { me: false, text: x.a, qa: x }]);
  const send = () => {
    const q = text.trim();
    if (!q) return;
    const hit = match(q);
    setText('');
    setMsgs((m) => [...m, { me: true, text: q }, hit
      ? { me: false, text: hit.a, qa: hit }
      : { me: false, text: 'Esa prefiero contestártela con detalle. Te paso a WhatsApp con tu pregunta ya escrita.', wa: `Hola Nexflow, ${q}` }]);
  };
  const lastQa = [...msgs].reverse().find((m) => m.qa)?.qa;
  const asked = new Set(msgs.filter((m) => m.qa).map((m) => m.qa!.id));
  const chips = QA.filter((x) => !asked.has(x.id) && (x.chip || asked.size > 0)).slice(0, 5);
  const waHref = waLink(lastQa?.wa ?? 'Hola Nexflow, quiero hacer una consulta.');

  return (
    <>
      {!open && (
        <div className="na-launch">
          {hint && (
            <div className="na-hint">
              <button type="button" onClick={() => { setOpen(true); setHint(false); }}>¿Tenés un proyecto en mente?</button>
              <button type="button" className="na-hint-x" aria-label="Cerrar" onClick={() => setHint(false)}><X size={13} /></button>
            </div>
          )}
          <button type="button" className="na-fab" onClick={() => { setOpen(true); setHint(false); }} aria-label="Abrir el chat de Nexflow">
            <img src={AVATAR} alt="" width={56} height={56} />
            <span className="na-dot" aria-hidden />
          </button>
        </div>
      )}

      {open && (
        <div role="dialog" aria-label="Chat de Nexflow" className="na-win">
          <div className="na-head">
            <img src={AVATAR} alt="" width={38} height={38} className="na-head-ava" />
            <div className="min-w-0 flex-1">
              <p className="text-[.95rem] font-semibold leading-tight">Merloy · Nexflow</p>
              <p className="text-[.76rem] muted leading-tight mt-0.5">Responde al instante; por WhatsApp, en el día</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="na-x" aria-label="Cerrar"><X size={18} /></button>
          </div>

          <div ref={list} className="na-list" aria-live="polite">
            <div className="na-row"><img src={AVATAR} alt="" className="na-ava" width={28} height={28} /><p className="na-bubble">{GREETING}</p></div>
            {msgs.map((m, i) => m.me
              ? <div key={i} className="na-row na-me"><p className="na-bubble na-bubble-me">{m.text}</p></div>
              : (
                <div key={i} className="na-row">
                  <img src={AVATAR} alt="" className="na-ava" width={28} height={28} />
                  <div className="na-bubble">
                    <p>{m.text}</p>
                    {m.qa?.link && <Link href={m.qa.link.href} onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-1 font-semibold">{m.qa.link.label} <ArrowUpRight size={14} /></Link>}
                    {m.wa && <a href={waLink(m.wa)} target="_blank" rel="noopener noreferrer" className="na-wa-inline"><FaWhatsapp size={15} /> Seguir por WhatsApp</a>}
                  </div>
                </div>
              ))}
            {chips.length > 0 && (
              <div className="na-chips">
                {chips.map((x) => <button key={x.id} type="button" className="na-chip" onClick={() => pick(x)}>{x.q}</button>)}
              </div>
            )}
          </div>

          <form className="na-form" onSubmit={(e) => { e.preventDefault(); send(); }}>
            <label htmlFor="na-text" className="sr-only">Escribí tu pregunta</label>
            <input id="na-text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Escribí tu pregunta…" maxLength={400} />
            <button type="submit" disabled={!text.trim()} aria-label="Enviar"><ArrowUp size={16} /></button>
          </form>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="na-wa"><FaWhatsapp size={16} /> Hablar con Merloy por WhatsApp</a>
        </div>
      )}
    </>
  );
}
