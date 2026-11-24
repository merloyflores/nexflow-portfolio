import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '../../../components/site/ContactForm';
import { Checks, Container, Faq, Head, PageHero, Steps, WaButton } from '../../../components/site/ui';
import { DiagnosticMock } from '../../../components/site/mocks';
import { DIAGNOSTIC } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Diagnóstico gratis',
  description: '30 minutos para revisar tu sitio web o tus procesos y decirte qué conviene hacer primero. Sin costo y sin compromiso.',
};

const REVIEW = [
  { t: 'Si tenés sitio web', items: ['Velocidad en el celular', 'Si se entiende qué vendés en 5 segundos', 'Cómo te contactan y qué se pierde en el camino', 'Cómo te ve Google'] },
  { t: 'Si vendés productos', items: ['Dónde vive tu inventario hoy', 'Cómo cobrás y cómo entregás', 'Qué se repite todos los días', 'Si Cirelia Business te calza o no'] },
  { t: 'Si tu equipo trabaja con Excel', items: ['Qué tareas se repiten', 'Dónde se pierden aprobaciones', 'Qué reporte toma más tiempo', 'Qué se puede automatizar primero'] },
];

export default function Page() {
  return (
    <>
      <PageHero title={<>Un diagnóstico gratis para saber por dónde empezar.</>} sub={DIAGNOSTIC.promise}>
        <WaButton text={DIAGNOSTIC.wa} label="Agendar por WhatsApp" />
        <a href="#agendar" className="btn btn-line">Agendar con el formulario</a>
      </PageHero>

      <Container><div className="svc-visual" data-rv="1" data-rv-from="scale"><div className="mx-auto max-w-xl"><DiagnosticMock /></div></div></Container>

      <Container className="py-20 sm:py-28">
        <Head title={<>Lo que revisamos.</>} sub="Según tu caso, nos enfocamos en una de estas áreas. Si no sabés cuál, lo vemos juntos." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {REVIEW.map((r, i) => (
            <div key={r.t} className="surface p-7" data-rv={i}>
              <h3 className="text-[1.1rem] font-semibold tracking-[-0.015em]">{r.t}</h3>
              <Checks className="mt-5 text-[.95rem]" items={r.items} />
            </div>
          ))}
        </div>
      </Container>

      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }}>
        <Container>
          <Head title={<>Así funciona.</>} />
          <div className="mt-14"><Steps items={[
            { t: 'Agendás', d: 'Por WhatsApp o con el formulario. Elegimos un horario que te sirva.' },
            { t: 'Conversamos 30 minutos', d: 'Por videollamada. Nos mostrás tu sitio o tu proceso y hacemos preguntas.' },
            { t: 'Recibís un resumen', d: 'Por escrito: qué encontramos y qué conviene hacer primero. Es tuyo, lo hagás con nosotros o no.' },
          ]} /></div>
        </Container>
      </section>

      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Head title={<>Agendá tu diagnóstico.</>} sub="Dejanos tus datos y te escribimos para coordinar el horario." />
            <div className="mt-10" data-rv><Faq items={[
              { q: '¿De verdad es gratis?', a: 'Sí. Es la forma en que empezamos a conocernos. No hay letra pequeña ni compromiso de contratar.' },
              { q: '¿Qué tengo que preparar?', a: 'Nada especial. Si tenés sitio, el enlace. Si es un proceso, una idea de cómo lo hacen hoy.' },
              { q: '¿Y después?', a: 'Si querés avanzar, te mandamos una propuesta con precio y fecha. Si no, te quedás con el resumen.' },
            ]} /></div>
          </div>
          <div id="agendar" className="lg:col-span-7 scroll-mt-24" data-rv="1">
            <ContactForm initial="diagnostico" />
            <p className="t-small mt-4">¿Preferís escribir directo? <Link href="/contacto" className="underline underline-offset-2">Ver todos los canales</Link></p>
          </div>
        </div>
      </Container>
    </>
  );
}
