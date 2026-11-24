import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, DatabaseBackup, Gauge, KeyRound, LifeBuoy, ShieldCheck, UserCheck } from 'lucide-react';
import { Container, CtaBand, Faq, Head, PageHero, Steps } from '../../../components/site/ui';
import { DIAGNOSTIC, TOOLS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cómo trabajamos',
  description:
    'El proceso, las herramientas y lo que queda a tu nombre: cómo construimos sitios, tiendas, automatizaciones y sistemas en Nexflow Digital, explicado sin tecnicismos.',
};

/*
 * Cómo trabajamos (v6.2). La «página de desarrollo»: proceso, con qué construimos (cada herramienta por lo que
 * le da al cliente, no como lista suelta), qué queda a tu nombre y cómo cuidamos seguridad, velocidad y respaldos.
 * Sirve a dos lectores: el dueño de negocio (lee los títulos y el «para qué») y el de TI (lee los nombres).
 */
const OWN = [
  { icon: KeyRound, t: 'Dominio y cuentas a tu nombre', d: 'El dominio, el hosting y las cuentas de los servicios se abren a nombre de tu negocio. Nosotros entramos con permiso, no al revés.' },
  { icon: UserCheck, t: 'El código es tuyo', d: 'Al terminar te entregamos el código y los accesos. Si un día querés seguir con otra persona, puede retomarlo.' },
  { icon: LifeBuoy, t: 'Capacitación y soporte', d: 'Te enseñamos a hacer los cambios del día a día y seguimos disponibles para ajustes y mejoras.' },
];
const CARE = [
  { icon: ShieldCheck, t: 'Seguridad', d: 'Conexión segura (https), contraseñas que nunca quedan en el código, permisos por persona y protección contra robots en los formularios.' },
  { icon: Gauge, t: 'Velocidad', d: 'Imágenes optimizadas y páginas que se arman antes de que alguien las pida. Medimos con las mismas herramientas que usa Google.' },
  { icon: DatabaseBackup, t: 'Respaldos', d: 'Cada cambio al sitio queda guardado en un historial, así se puede volver a una versión anterior. Y las copias de la base de datos se configuran según el plan de cada proyecto.' },
];

export default function ComoTrabajamos() {
  return (
    <>
      <PageHero title="Cómo trabajamos." sub="El proceso, las herramientas y lo que queda a tu nombre. Sin tecnicismos, para que sepás qué estás comprando." />

      {/* Proceso */}
      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }}>
        <Container>
          <Head title={<>De la primera llamada al soporte.</>} sub="Sabés el precio antes de empezar y ves avances desde la primera semana." />
          <div className="mt-16">
            <Steps items={[
              { t: 'Diagnóstico gratis', d: '30 minutos para entender tu negocio y qué conviene hacer primero.' },
              { t: 'Propuesta por escrito', d: 'Alcance, plazo y precio cerrado. Si no te sirve, no pasa nada.' },
              { t: 'Construcción por etapas', d: 'Te mostramos avances cada semana y ajustamos con lo que nos digás.' },
              { t: 'Entrega y acompañamiento', d: 'Publicamos, te capacitamos y seguimos disponibles para ajustes.' },
            ]} />
          </div>
        </Container>
      </section>

      {/* Herramientas */}
      <Container className="py-20 sm:py-28">
        <Head title={<>Con qué construimos, y para qué.</>} sub="Herramientas conocidas y con soporte de largo plazo. Nada hecho a la carrera ni amarrado a nosotros." />
        <div className="mt-14 grid gap-10 lg:grid-cols-3">
          {TOOLS.map((g, i) => (
            <div key={g.group} data-tone={g.tone} data-rv={i}>
              <span className="tone-tag"><span className="tone-dot" />{g.group}</span>
              <p className="t-body mt-4">{g.sub}</p>
              <ul className="mt-6 border-t b">
                {g.items.map((t) => (
                  <li key={t.name} className="border-b b py-4">
                    <p className="font-semibold tracking-[-0.01em]">{t.name}{t.soon && <span className="badge ml-2 align-middle">Bajo pedido</span>}</p>
                    <p className="mt-1 text-[.92rem] leading-relaxed ink2">{t.why}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      {/* Lo que queda a tu nombre */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="block-dark gridbg mx-auto max-w-6xl rounded-[1.75rem] px-6 py-14 sm:px-14 sm:py-20">
          <h2 className="t-h2 max-w-2xl" data-rv>Todo queda a tu nombre.</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {OWN.map((f, i) => (
              <div key={f.t} className="border-t pt-6" style={{ borderColor: 'var(--dark-line)' }} data-rv={i}>
                <f.icon size={20} strokeWidth={1.7} aria-hidden />
                <h3 className="mt-4 text-[1.1rem] font-semibold tracking-[-0.02em]">{f.t}</h3>
                <p className="mt-2.5 leading-relaxed" style={{ color: 'var(--dark-muted)' }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguridad, velocidad, respaldos */}
      <Container className="pb-20 sm:pb-28">
        <Head title={<>Lo que cuidamos aunque no se vea.</>} />
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
          {CARE.map((f, i) => (
            <div key={f.t} className="border-t b pt-6" data-rv={i}>
              <span className="mini"><f.icon size={16} strokeWidth={1.8} aria-hidden /></span>
              <h3 className="mt-5 text-[1.1rem] font-semibold tracking-[-0.02em]">{f.t}</h3>
              <p className="mt-2.5 t-body">{f.d}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* Preguntas */}
      <section className="border-t b py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><Head title={<>Preguntas de gente de TI.</>} sub="Por si en tu empresa alguien técnico revisa la propuesta." /></div>
            <div className="lg:col-span-7" data-rv>
              <Faq items={[
                { q: '¿Usan WordPress o plantillas?', a: 'No. Construimos con Next.js y React, a la medida de cada proyecto. Así el sitio carga más rápido, tiene menos puntos débiles y no depende de complementos de terceros.' },
                { q: '¿Dónde quedan alojados los datos?', a: 'En servicios en la nube reconocidos (Vercel, Supabase o Microsoft 365, según el proyecto), en cuentas a nombre de tu empresa. En automatizaciones, los datos se quedan dentro de tu Microsoft 365.' },
                { q: '¿Se puede conectar con lo que ya tenemos?', a: 'Casi siempre. Trabajamos con Microsoft 365, SharePoint, SQL Server y Excel, y con otros sistemas cuando tienen una forma de conectarse (una API).' },
                { q: '¿Qué pasa si después queremos cambiar de proveedor?', a: 'Te llevás todo: código, accesos y documentación. Usamos herramientas conocidas, así que otra persona lo puede retomar.' },
              ]} />
            </div>
          </div>
        </Container>
      </section>

      <section className="pb-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3 text-center" data-rv>
            <span className="t-body">¿Querés ver si aplica a tu caso?</span>
            <Link href={DIAGNOSTIC.href} className="link font-semibold inline-flex items-center gap-1">Agendar el diagnóstico gratis <ArrowRight size={15} /></Link>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
