import type { Metadata } from 'next';
import LegalDocument, { type LegalSection } from '../../../components/Legaldocument';

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Nexflow Digital',
  description:
    'Términos de servicio y condiciones de contratación para los servicios de Nexflow Digital.',
};

/*
  Las secciones 1 a 5 son tu texto original, sin cambios de fondo.
  Las secciones 6 y 7 (modificaciones y legislación aplicable) son nuevas.
  Este texto es una base: conviene que un abogado lo revise, sobre todo propiedad intelectual,
  pagos y limitación de responsabilidad.
*/
const sections: LegalSection[] = [
  {
    id: 'aceptacion',
    title: 'Aceptación de los términos',
    content: (
      <p>
        Al acceder a este sitio web y contratar los servicios de <strong>Nexflow Digital</strong>,
        usted acepta estar sujeto a estos términos y condiciones de uso, a todas las leyes y
        regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales
        aplicables en Costa Rica y su jurisdicción.
      </p>
    ),
  },
  {
    id: 'servicios',
    title: 'Descripción de los servicios',
    content: (
      <p>
        Nexflow Digital proporciona servicios de consultoría tecnológica, desarrollo de software a
        medida (incluyendo, sin limitarse a, Next.js y ecosistemas web) e implementación de
        automatizaciones empresariales (Power Platform). Los alcances exactos, cronogramas y
        entregables de cada proyecto se definirán en un Acuerdo de Alcance de Trabajo (SOW)
        independiente, firmado por ambas partes antes del inicio.
      </p>
    ),
  },
  {
    id: 'propiedad',
    title: 'Propiedad intelectual',
    content: (
      <p>
        Todo el código fuente original, diseños y arquitecturas desarrolladas por Nexflow Digital
        siguen siendo propiedad de la agencia hasta que se haya liquidado el 100% de los pagos
        acordados. Una vez completado el pago, se otorgan los derechos de uso y explotación al
        cliente según lo estipulado en su contrato específico. Nexflow Digital se reserva el derecho
        de utilizar componentes genéricos no confidenciales en proyectos futuros.
      </p>
    ),
  },
  {
    id: 'pagos',
    title: 'Pagos y facturación',
    content: (
      <p>
        Los servicios requieren un anticipo estándar (típicamente del 50%) para reservar espacio en
        nuestra agenda de desarrollo, salvo que se acuerde lo contrario por escrito. Las facturas son
        pagaderas a la recepción. Nexflow Digital se reserva el derecho de suspender servicios o
        implementaciones web si los pagos exceden los términos acordados.
      </p>
    ),
  },
  {
    id: 'responsabilidad',
    title: 'Limitación de responsabilidad',
    content: (
      <p>
        En ningún caso Nexflow Digital será responsable de ningún daño (incluyendo, sin limitación,
        daños por pérdida de datos o ganancias, o por interrupción del negocio) que surja del uso o de
        la imposibilidad de usar los sistemas entregados, incluso si Nexflow Digital ha sido
        notificado, verbalmente o por escrito, de la posibilidad de tal daño.
      </p>
    ),
  },
  {
    id: 'modificaciones',
    title: 'Modificaciones',
    content: (
      <p>
        Podemos actualizar estos términos cuando cambien nuestros servicios o la normativa aplicable.
        La versión vigente es la publicada en este sitio, con la fecha de actualización indicada al
        inicio. Los proyectos en curso se rigen por lo pactado en su SOW.
      </p>
    ),
  },
  {
    id: 'legislacion',
    title: 'Legislación aplicable',
    content: (
      <p>
        Estos términos se rigen por las leyes de la República de Costa Rica. Cualquier controversia
        se intentará resolver primero de forma directa entre las partes.
      </p>
    ),
  },
];

export default function TerminosPage() {
  return (
    <LegalDocument
      title="Términos y Condiciones"
      updated="Septiembre 2026"
      intro="Las reglas básicas de cómo trabajamos: alcance, propiedad intelectual, pagos y responsabilidades."
      sections={sections}
      other={{ href: '/privacidad', label: 'Política de Privacidad' }}
    />
  );
}