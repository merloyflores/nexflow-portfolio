import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Bell, CalendarCheck, ClipboardList, Lock, MessageCircle, PhoneCall, Search, Smartphone, TrendingUp, UserRound } from 'lucide-react';
import { Checks, Container, CtaBand, Faq, Head, Steps, WaButton } from '../../../components/site/ui';
import { BookingToast, BrowserShot, ClinicPanelMock, IPhone } from '../../../components/site/mocks';
import { DIAGNOSTIC } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sistemas para clínicas y consultorios',
  description:
    'Sitio web con reservas en línea y un panel para tu clínica: agenda, expediente de pacientes, seguimiento e ingresos. Hecho en Costa Rica, en uso hoy en el Centro Podológico Ximena Alvarado.',
};

const CLINICA = 'https://centropodologicoximenaalvarado.com/';
const WA = 'Hola Nexflow, tengo una clínica y quiero ver cómo funciona el sistema de reservas y el panel.';

/*
 * Clínicas (v6). Todo lo que se describe acá existe y funciona en el sistema del Centro Podológico:
 * reservas con horas libres, avisos al instante, panel con Hoy / Agenda / Pacientes / Seguimiento / Ingresos,
 * confirmación por WhatsApp y asistente con respuestas preparadas. Si se agrega algo nuevo al producto, se suma acá.
 */
const PACIENTE = [
  { icon: Search, t: 'Te encuentran en Google', d: 'Una página por tratamiento, con precios claros y la información que la gente busca antes de llamar.' },
  { icon: CalendarCheck, t: 'Reservan solos, a cualquier hora', d: 'El paciente elige tratamiento, día y hora. Solo ve los espacios libres, así que nunca se cruzan dos citas.' },
  { icon: MessageCircle, t: 'Resuelven dudas sin escribirte', d: 'Un asistente en el sitio contesta lo de siempre (precios, horario, cómo llegar) y pasa a WhatsApp cuando hace falta.' },
];
const EQUIPO = [
  { icon: Bell, t: 'Aviso al instante', d: 'Cuando entra una cita suena un aviso en el panel (y, si querés, llega un correo). No hay que revisar el teléfono a cada rato.' },
  { icon: CalendarCheck, t: 'Agenda del día y de la semana', d: 'Lo de hoy, lo que falta confirmar y la semana completa. También podés agendar citas que llegan por teléfono.' },
  { icon: UserRound, t: 'Expediente de cada paciente', d: 'Historial de citas, notas y cobros. Cada cita se liga sola al paciente por su número de teléfono.' },
  { icon: PhoneCall, t: 'Seguimiento', d: 'La lista de a quién llamar para su control, para que ningún paciente se quede sin volver.' },
  { icon: TrendingUp, t: 'Ingresos', d: 'Cuánto entró por mes, por tratamiento y por método de pago, sin armar un Excel.' },
  { icon: Lock, t: 'Datos protegidos', d: 'Solo tu equipo ve pacientes, notas y cobros. El público puede pedir una cita, nada más.' },
];
const ESPECIALIDADES = ['Podología', 'Odontología', 'Fisioterapia', 'Nutrición', 'Psicología', 'Estética', 'Medicina general', 'Veterinaria'];

export default function Clinicas() {
  return (
    <>
      {/* Portada */}
      <section className="relative overflow-hidden" data-tone="clinicas">
        <div className="gridbg gridbg-fade absolute inset-0 -z-10" aria-hidden />
        <Container className="pt-14 sm:pt-20 pb-16 sm:pb-24">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 rise">
              <span className="tone-tag"><span className="tone-dot" />Clínicas y consultorios</span>
              <h1 className="t-display mt-6">Tu clínica, con reservas en línea y todo en un solo panel.</h1>
              <p className="t-lead mt-7 max-w-xl">Un sitio donde tus pacientes agendan solos y un panel donde ves la agenda, el expediente de cada paciente, a quién llamar y cuánto entró en el mes. Sin papelitos ni chats perdidos.</p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <WaButton text={WA} label="Quiero verlo funcionando" />
                <a href="#caso" className="btn btn-line">Ver el caso real</a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative pb-[14%] pr-[14%]" aria-hidden>
                <div className="pop" style={{ ['--d' as string]: '100ms' }}>
                  <BrowserShot url="centropodologicoximenaalvarado.com" src="/proyectos/clinica.webp" eager live={CLINICA} />
                </div>
                <div className="pop absolute right-0 bottom-0 w-[28%]" style={{ ['--d' as string]: '300ms' }}>
                  <IPhone src="/proyectos/clinica-movil.webp" eager live={CLINICA} />
                </div>
                <div className="pop absolute left-[-2%] bottom-[2%] w-[48%] hidden sm:block" style={{ ['--d' as string]: '550ms' }}><BookingToast /></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lo que resuelve, del lado del paciente */}
      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }} data-tone="clinicas">
        <Container>
          <Head title={<>Para tus pacientes: agendar es tan fácil como mandar un mensaje.</>} />
          <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
            {PACIENTE.map((f, i) => (
              <div key={f.t} className="border-t b pt-6" data-rv={i}>
                <span className="mini"><f.icon size={16} strokeWidth={1.8} aria-hidden /></span>
                <h3 className="mt-5 text-[1.1rem] font-semibold tracking-[-0.02em]">{f.t}</h3>
                <p className="mt-2.5 t-body">{f.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lo que resuelve, del lado de la clínica: el panel */}
      <Container className="py-20 sm:py-28">
        <div data-tone="clinicas">
          <Head title={<>Para tu equipo: un panel con todo lo de la clínica.</>} sub="Funciona en la compu, la tablet o el celular, desde el navegador. No hay que instalar nada." />
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:items-start" data-tone="clinicas">
          <div className="lg:col-span-6 lg:sticky lg:top-24">
            <div className="svc-visual" data-rv data-rv-from="scale"><ClinicPanelMock /></div>
          </div>
          <div className="lg:col-span-6 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {EQUIPO.map((f, i) => (
              <div key={f.t} className="border-t b pt-6" data-rv={i % 2}>
                <span className="mini"><f.icon size={16} strokeWidth={1.8} aria-hidden /></span>
                <h3 className="mt-5 text-[1.1rem] font-semibold tracking-[-0.02em]">{f.t}</h3>
                <p className="mt-2.5 t-body">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Cómo funciona una reserva (secuencia real) */}
      <section className="border-y b py-20 sm:py-28" style={{ background: 'var(--card)' }} data-tone="clinicas">
        <Container>
          <Head title={<>Así entra una cita.</>} sub="Del celular del paciente a tu agenda, sin que nadie tenga que contestar el teléfono." />
          <div className="mt-16">
            <Steps items={[
              { t: 'El paciente elige', d: 'Tratamiento, día y hora, entre los espacios que de verdad están libres.' },
              { t: 'La cita entra sola', d: 'Queda guardada en tu agenda y ligada a su expediente.' },
              { t: 'Te avisa', d: 'Suena un aviso en el panel y, si lo activás, te llega un correo.' },
              { t: 'Confirmás en un toque', d: 'Un botón abre WhatsApp con el mensaje de confirmación ya escrito.' },
            ]} />
          </div>
        </Container>
      </section>

      {/* Caso real */}
      <Container className="py-20 sm:py-28">
        <div id="caso" className="scroll-mt-24 grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7" data-rv data-rv-from="left">
            <div className="surface-2 p-4 sm:p-6">
              <BrowserShot url="centropodologicoximenaalvarado.com/agendar" src="/proyectos/clinica-agendar.webp" live={`${CLINICA}agendar`} />
            </div>
          </div>
          <div className="lg:col-span-5" data-rv="1">
            <p className="t-small">En uso hoy</p>
            <h2 className="t-h2 mt-3">Centro Podológico Ximena Alvarado</h2>
            <p className="t-body mt-5">Una clínica de podología en San José que recibía las citas por llamadas y mensajes a toda hora. Hoy los pacientes reservan en el sitio y la clínica maneja agenda, expedientes, seguimiento e ingresos desde el panel.</p>
            <Checks className="mt-6" items={['Reservas en línea con horas libres', 'Panel privado para la clínica', 'Asistente con las preguntas de siempre']} />
            <a href={CLINICA} target="_blank" rel="noopener noreferrer" className="btn btn-line mt-8">Visitar el sitio <ArrowUpRight size={16} /></a>
          </div>
        </div>
      </Container>

      {/* Para qué clínicas */}
      <section className="border-t b py-20 sm:py-28" data-tone="clinicas">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5"><Head title={<>Se adapta a tu especialidad.</>} sub="Tus tratamientos, tus horarios, tus precios y tu marca. Lo configuramos con vos." /></div>
            <div className="lg:col-span-7" data-rv="1">
              <ul className="flex flex-wrap gap-2">
                {ESPECIALIDADES.map((e) => <li key={e} className="tone-tag"><span className="tone-dot" />{e}</li>)}
              </ul>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="surface p-5">
                  <ClipboardList size={18} className="tone-text" aria-hidden />
                  <p className="mt-3 font-semibold">Si ya tenés sitio</p>
                  <p className="mt-1.5 t-body text-[.95rem]">Le sumamos las reservas y el panel, o lo rehacemos si conviene. Tu dominio se mantiene.</p>
                </div>
                <div className="surface p-5">
                  <Smartphone size={18} className="tone-text" aria-hidden />
                  <p className="mt-3 font-semibold">Si empezás de cero</p>
                  <p className="mt-1.5 t-body text-[.95rem]">Sitio, reservas y panel juntos, con tu dominio y tus cuentas a tu nombre.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Preguntas */}
      <Container className="pb-20 sm:pb-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><Head title={<>Preguntas frecuentes.</>} /></div>
          <div className="lg:col-span-7" data-rv>
            <Faq items={[
              { q: '¿Cuánto cuesta?', a: 'Depende de lo que necesite tu clínica: solo reservas, o reservas con panel, expedientes e ingresos. Después de una llamada de 30 minutos te damos un precio cerrado y por escrito.' },
              { q: '¿Hay que instalar algo?', a: 'No. Todo funciona desde el navegador, en compu, tablet o celular. Si querés, lo agregás a la pantalla de inicio del celular como una app.' },
              { q: '¿Quién ve la información de mis pacientes?', a: 'Solo las cuentas de tu equipo. El público solo puede pedir una cita; no puede ver citas de otras personas ni datos de pacientes.' },
              { q: '¿Puedo seguir agendando por teléfono o WhatsApp?', a: 'Sí. Las citas que te llegan por otro lado las cargás en el panel en segundos, y quedan en la misma agenda.' },
              { q: '¿Se adapta a mis horarios?', a: 'Sí. Configuramos tus días y horas de atención, la duración de las citas y con cuánta anticipación se puede reservar.' },
            ]} />
          </div>
        </div>
      </Container>

      <section className="pb-6">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-3 text-center" data-rv>
            <span className="t-body">¿Preferís empezar por una revisión de lo que tenés hoy?</span>
            <Link href={DIAGNOSTIC.href} className="link font-semibold inline-flex items-center gap-1">Diagnóstico gratis <ArrowRight size={15} /></Link>
          </div>
        </Container>
      </section>

      <CtaBand title={<>¿Lo vemos en tu clínica?</>} sub="Te mostramos el sistema funcionando y vemos juntos qué necesitaría el tuyo." wa={WA} />
    </>
  );
}
