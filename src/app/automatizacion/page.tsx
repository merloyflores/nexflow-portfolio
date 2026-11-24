import type { Metadata } from 'next';
import ServicePage from '../../../components/site/ServicePage';

export const metadata: Metadata = {
  title: 'Automatización y datos',
  description: 'Automatizamos procesos con Power Automate, Power Apps y Power BI sobre Microsoft 365: aprobaciones, reportes que se actualizan solos y captura de datos desde el celular.',
};

export default function Page() {
  return (
    <ServicePage c={{
      id: 'automatizacion',
      title: <>Menos trabajo a mano. Números que se actualizan solos.</>,
      sub: 'Trabajamos sobre las herramientas de Microsoft que tu empresa ya paga: flujos que se ejecutan solos, apps para capturar datos y tableros con los números del negocio al día.',
      fits: [
        'Tu equipo copia y pega datos entre Excel y correos',
        'Las aprobaciones se pierden en el correo',
        'Armar el reporte del mes toma días',
        'Nadie sabe cuál es la versión buena del archivo',
      ],
      deliver: [
        { t: 'Flujos con Power Automate', d: 'Aprobaciones, recordatorios, correos y movimiento de archivos que pasan solos, con registro de quién hizo qué.' },
        { t: 'Apps con Power Apps', d: 'Formularios y apps sencillas para que el equipo registre datos desde el celular, en lugar de papel o Excel.' },
        { t: 'Tableros con Power BI', d: 'Los indicadores del negocio en un solo lugar, conectados a la fuente y actualizados sin intervención.' },
        { t: 'Datos ordenados', d: 'Listas de SharePoint, Dataverse o SQL bien estructuradas: una sola versión de la verdad.' },
        { t: 'Integración', d: 'Conectamos Excel, Outlook, Teams, SharePoint y otros sistemas que ya usan.' },
        { t: 'Documentación y traspaso', d: 'Cada flujo queda documentado y explicado para que tu equipo lo entienda y lo mantenga.' },
      ],
      steps: [
        { t: 'Mapear el proceso', d: 'Vemos cómo se hace hoy, paso a paso, y dónde se pierde el tiempo.' },
        { t: 'Priorizar', d: 'Elegimos lo que más horas ahorra con menos riesgo. Empezamos pequeño.' },
        { t: 'Construir y probar', d: 'Lo armamos con datos reales y lo probamos con quienes lo van a usar.' },
        { t: 'Medir y ajustar', d: 'Revisamos el ahorro real y ajustamos antes de pasar al siguiente proceso.' },
      ],
      examples: [
        { t: 'Aprobación de solicitudes', d: 'Un formulario envía la solicitud, el jefe aprueba desde Teams o el correo y todo queda registrado. Sin correos perdidos.' },
        { t: 'Reporte mensual automático', d: 'El tablero toma los datos de los archivos de cada área y se actualiza solo. El reporte deja de ser un proyecto cada mes.' },
        { t: 'Registro en campo', d: 'El equipo llena una app en el celular, con fotos y ubicación. La información llega ordenada, sin pasar a limpio.' },
        { t: 'Seguimiento de clientes', d: 'Recordatorios automáticos cuando una cotización no tiene respuesta o un pago está por vencer.' },
      ],
      faq: [
        { q: '¿Necesito licencias nuevas?', a: 'Muchas cosas se pueden hacer con Microsoft 365 empresarial que ya tienen. Si algo necesita una licencia adicional, te lo decimos antes, con el costo.' },
        { q: '¿Qué pasa si cambia el proceso?', a: 'Los flujos se pueden ajustar. Te dejamos la documentación y, si preferís, te damos soporte mensual.' },
        { q: '¿Es seguro?', a: 'Todo corre dentro del Microsoft 365 de tu empresa, con los permisos de tu organización. No sacamos datos a otros servicios sin que lo aprobés.' },
        { q: '¿Trabajan con empresas grandes?', a: 'Sí. También con pymes. Lo que cambia es el tamaño del primer paso, no la forma de trabajar.' },
      ],
    }} />
  );
}
