import type { Metadata } from 'next';
import LegalDocument, { type LegalSection } from '../../../components/Legaldocument';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Nexflow Digital',
  description: 'Políticas de manejo de datos y privacidad de Nexflow Digital.',
};

/*
  Secciones 1, 2, 3, 4 y 6 parten de tu texto original.
  Las secciones 5, 7, 8 y 9 son nuevas (proveedores, conservación, derechos y cambios).
  Este texto es una base: conviene que un abogado lo revise antes de darlo por definitivo.
*/
const sections: LegalSection[] = [
  {
    id: 'responsable',
    title: 'Responsable del tratamiento',
    content: (
      <p>
        <strong>Nexflow Digital</strong>, con sede en Alajuela, Costa Rica, es responsable del
        tratamiento de los datos personales que se recopilan a través de este sitio. Puede contactarnos
        en <a href="mailto:merloy123@gmail.com">merloy123@gmail.com</a>.
      </p>
    ),
  },
  {
    id: 'recopilacion',
    title: 'Recopilación de información',
    content: (
      <p>
        Recopilamos la información personal que usted nos proporciona voluntariamente al expresar
        interés en nuestros productos y servicios, por ejemplo a través del formulario de contacto o de
        WhatsApp. Esta información puede incluir nombre, empresa, correo electrónico, número de teléfono
        y detalles de proyectos tecnológicos.
      </p>
    ),
  },
  {
    id: 'uso',
    title: 'Uso de la información',
    content: (
      <>
        <p>Utilizamos la información recopilada para:</p>
        <ul>
          <li>Facilitar la creación de propuestas técnicas y auditorías.</li>
          <li>Responder a consultas de soporte técnico y servicio al cliente.</li>
          <li>Enviar información administrativa o avisos de actualizaciones en sus sistemas.</li>
          <li>Cumplir con obligaciones legales y regulatorias.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'confidencialidad',
    title: 'Confidencialidad de los datos',
    content: (
      <>
        <p>
          Entendemos que los proyectos de desarrollo y automatización implican acceso a datos sensibles
          de su negocio. No vendemos, alquilamos ni intercambiamos su información con terceros con
          fines promocionales.
        </p>
        <p>
          Si su proyecto lo requiere, podemos formalizar la confidencialidad mediante un acuerdo de
          confidencialidad (NDA) antes de iniciar.
        </p>
      </>
    ),
  },
  {
    id: 'proveedores',
    title: 'Proveedores tecnológicos',
    content: (
      <>
        <p>
          Para operar este sitio y atender sus consultas usamos proveedores que pueden procesar datos
          por cuenta nuestra, únicamente para prestar ese servicio. Por ejemplo:
        </p>
        <ul>
          <li>Alojamiento y publicación del sitio web.</li>
          <li>Envío del formulario de contacto (FormSubmit).</li>
          <li>Mensajería de WhatsApp, cuando usted nos escribe por ese canal.</li>
        </ul>
        <p>Estos proveedores tienen sus propias políticas de privacidad.</p>
      </>
    ),
  },
  {
    id: 'seguridad',
    title: 'Seguridad de los datos',
    content: (
      <p>
        Hemos implementado medidas de seguridad técnicas y organizativas diseñadas para proteger la
        información personal que procesamos, alineadas con los estándares de desarrollo seguro en
        entornos web y en la nube. Sin embargo, ninguna transmisión electrónica por Internet puede
        garantizarse como totalmente segura.
      </p>
    ),
  },
  {
    id: 'conservacion',
    title: 'Conservación de los datos',
    content: (
      <p>
        Conservamos sus datos mientras exista una consulta o relación comercial activa, y durante el
        tiempo que exijan las obligaciones legales aplicables. Pasado ese plazo, los eliminamos o los
        anonimizamos.
      </p>
    ),
  },
  {
    id: 'derechos',
    title: 'Sus derechos',
    content: (
      <>
        <p>
          De acuerdo con la legislación costarricense de protección de datos personales (Ley N.º 8968),
          usted puede:
        </p>
        <ul>
          <li>Solicitar acceso a los datos personales que tenemos sobre usted.</li>
          <li>Pedir que los rectifiquemos si son inexactos o están desactualizados.</li>
          <li>Pedir que los eliminemos cuando ya no sean necesarios.</li>
          <li>Retirar su consentimiento en cualquier momento.</li>
        </ul>
        <p>
          Para ejercer estos derechos, escríbanos a{' '}
          <a href="mailto:merloy123@gmail.com">merloy123@gmail.com</a>.
        </p>
      </>
    ),
  },
  {
    id: 'cambios',
    title: 'Cambios a esta política',
    content: (
      <p>
        Podemos actualizar esta política cuando cambien nuestros servicios o la normativa. La fecha de
        la última actualización aparece al inicio de este documento.
      </p>
    ),
  },
];

export default function PrivacidadPage() {
  return (
    <LegalDocument
      title="Política de Privacidad"
      updated="Septiembre 2026"
      intro="Explicamos qué datos recopilamos, para qué los usamos y cómo puede ejercer sus derechos."
      sections={sections}
      other={{ href: '/terminos', label: 'Términos y Condiciones' }}
    />
  );
}