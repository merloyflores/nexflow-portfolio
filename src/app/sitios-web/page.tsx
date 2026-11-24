import type { Metadata } from 'next';
import ServicePage from '../../../components/site/ServicePage';

export const metadata: Metadata = {
  title: 'Sitios web',
  description: 'Sitios web con diseño propio, rápidos y pensados para el celular y para Google. Agenda de citas, formularios y WhatsApp. Para empresas y profesionales de Costa Rica.',
};

export default function Page() {
  return (
    <ServicePage c={{
      id: 'web',
      title: <>Un sitio que explica lo que hacés y hace que te escriban.</>,
      sub: 'Diseño propio, textos claros y una estructura pensada para que la persona entienda en segundos qué ofrecés y cómo contactarte. Rápido en el celular, ordenado para Google.',
      fits: [
        'Tu sitio actual no te trae clientes o da vergüenza mandarlo',
        'Te preguntan lo mismo todos los días por WhatsApp',
        'Querés que te encuentren en Google en tu zona',
        'Necesitás que agenden citas sin llamarte',
      ],
      deliver: [
        { t: 'Estructura y textos', d: 'Ordenamos qué decir y en qué orden. Te ayudamos a escribir los textos para que se entiendan sin ser técnicos.' },
        { t: 'Diseño propio', d: 'Sin plantillas compradas: una identidad que se ve como tu negocio, en compu y en celular.' },
        { t: 'Contacto que funciona', d: 'Botones de WhatsApp con mensaje listo, formulario que llega a tu correo o agenda de citas integrada.' },
        { t: 'Listo para Google', d: 'Velocidad, títulos, descripciones, mapa del sitio y tu ficha de Google Business conectada.' },
        { t: 'Blog o novedades', d: 'Si te sirve publicar, te dejamos un espacio fácil para hacerlo sin depender de nadie.' },
        { t: 'Entrega y capacitación', d: 'Dominio y cuentas a tu nombre, accesos entregados y una sesión para que sepás hacer cambios.' },
      ],
      steps: [
        { t: 'Diagnóstico', d: 'Conversamos 30 minutos: qué vendés, a quién y qué tiene que lograr el sitio.' },
        { t: 'Propuesta', d: 'Te mandamos alcance, precio cerrado y fecha de entrega por escrito.' },
        { t: 'Diseño y construcción', d: 'Ves avances reales en una dirección de prueba y opinás antes de publicar.' },
        { t: 'Publicación', d: 'Lo ponemos en línea, lo conectamos a Google y te capacitamos.' },
      ],
      faq: [
        { q: '¿Cuánto cuesta?', a: 'Depende de la cantidad de páginas y de funciones como agenda, blog o varios idiomas. Después del diagnóstico te damos un precio cerrado, así sabés el total antes de empezar.' },
        { q: '¿Cuánto tarda?', a: 'Depende del alcance y de qué tan rápido tengamos textos y fotos. En la propuesta va la fecha de entrega por escrito.' },
        { q: '¿Puedo hacer cambios yo?', a: 'Sí. Te dejamos lo necesario para cambiar textos, fotos o publicar en el blog, y te enseñamos a hacerlo.' },
        { q: '¿Qué pasa si ya tengo dominio o un sitio?', a: 'Lo aprovechamos. Movemos el dominio con cuidado para no perder correos ni posicionamiento.' },
        { q: '¿Necesito pagar mensualidad?', a: 'El sitio es tuyo. Solo pagás el dominio y, si hace falta, el hosting, siempre a tu nombre. Si querés que te demos mantenimiento, lo cotizamos aparte.' },
      ],
    }} />
  );
}
