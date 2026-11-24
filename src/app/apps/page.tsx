import type { Metadata } from 'next';
import { FaAndroid, FaApple, FaGlobe } from 'react-icons/fa6';
import ServicePage from '../../../components/site/ServicePage';
import { Container, Head } from '../../../components/site/ui';

export const metadata: Metadata = {
  title: 'Apps y sistemas a la medida',
  description: 'Aplicaciones web, apps para Android e iOS, portales de clientes y paneles internos hechos para la operación de tu empresa en Costa Rica.',
};

const PLATFORMS = [
  { Icon: FaGlobe, t: 'Aplicación web', d: 'Se usa desde el navegador, en compu o celular. Es la opción más rápida y económica, y la mayoría de los proyectos empiezan acá.' },
  { Icon: FaAndroid, t: 'Android', d: 'Publicada en Google Play. Ideal cuando el equipo trabaja en campo o necesita usar la cámara, la ubicación o funcionar sin señal.' },
  { Icon: FaApple, t: 'iOS', d: 'Publicada en App Store para iPhone y iPad. Hacemos ambas plataformas desde una sola base, para no pagar dos veces.' },
];

export default function Page() {
  return (
    <ServicePage c={{
      id: 'apps',
      title: <>Cuando lo que necesitás no existe, lo construimos.</>,
      sub: 'Aplicaciones web y móviles hechas para tu forma de trabajar: portales para tus clientes, paneles internos y apps para tu equipo. Antes de proponer una app, validamos si de verdad hace falta.',
      fits: [
        'Ningún sistema estándar calza con tu proceso',
        'Tus clientes necesitan ver su información en línea',
        'Tu equipo trabaja en la calle y reporta en papel',
        'Tenés varios sistemas que no se hablan entre sí',
      ],
      deliver: [
        { t: 'Prototipo navegable', d: 'Antes de programar, ves y probás cómo va a funcionar. Cambiar en esta etapa no cuesta casi nada.' },
        { t: 'Acceso por usuario', d: 'Cada persona ve solo lo que le corresponde, con roles y permisos claros.' },
        { t: 'Base de datos propia', d: 'Tus datos ordenados, respaldados y bajo tu cuenta. Nada atado a nosotros.' },
        { t: 'Integraciones', d: 'Conexión con pagos, correo, WhatsApp, Microsoft 365 u otros sistemas que ya usás.' },
        { t: 'Publicación en tiendas', d: 'Si es app móvil, la publicamos en Google Play y App Store a nombre de tu empresa.' },
        { t: 'Soporte y mejoras', d: 'Después de entregar seguimos: corregimos, medimos el uso y planeamos la siguiente versión.' },
      ],
      steps: [
        { t: 'Descubrimiento', d: 'Entendemos el proceso, quién lo usa y qué debe resolver la primera versión.' },
        { t: 'Prototipo', d: 'Diseñamos las pantallas y las probás con tu equipo antes de construir.' },
        { t: 'Construcción por etapas', d: 'Entregas cortas que podés usar y comentar, en lugar de esperar meses.' },
        { t: 'Lanzamiento', d: 'Publicamos, capacitamos y acompañamos las primeras semanas de uso.' },
      ],
      extra: (
        <Container className="pt-20 sm:pt-28">
          <Head title={<>Web, Android e iOS: lo que calce.</>} sub="No todo necesita una app de tienda. Te recomendamos la opción que resuelve el problema con el menor costo." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PLATFORMS.map(({ Icon, t, d }, i) => (
              <div key={t} className="surface p-7" data-rv={i}>
                <span className="tile"><Icon size={18} /></span>
                <h3 className="mt-6 text-[1.1rem] font-semibold tracking-[-0.015em]">{t}</h3>
                <p className="mt-2.5 t-body">{d}</p>
              </div>
            ))}
          </div>
        </Container>
      ),
      faq: [
        { q: '¿Cuánto cuesta una app?', a: 'Depende de cuántas pantallas, roles e integraciones tenga. Después del descubrimiento te damos un precio por etapas, para que avancés según tu presupuesto.' },
        { q: '¿Web o app de tienda?', a: 'Si la usan tus clientes de vez en cuando, casi siempre una aplicación web es suficiente. Si la usa tu equipo todo el día, en campo o sin señal, una app móvil puede valer la pena.' },
        { q: '¿El código es mío?', a: 'Sí. El código, la base de datos y las cuentas quedan a nombre de tu empresa.' },
        { q: '¿Y si después quiero cambiar de proveedor?', a: 'Usamos tecnologías conocidas y documentamos lo que hacemos, para que cualquier equipo pueda continuar.' },
      ],
    }} />
  );
}
