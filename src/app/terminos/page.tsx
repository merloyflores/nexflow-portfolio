import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | Nexflow Digital',
  description: 'Términos de servicio y condiciones de contratación para los servicios de Nexflow Digital.',
};

export default function TerminosPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-gray-400 font-mono text-sm">Última actualización: Mayo 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Aceptación de los Términos</h2>
            <p>
              Al acceder a este sitio web y contratar los servicios de <strong>Nexflow Digital</strong>, usted acepta estar sujeto a estos términos y condiciones de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables en Costa Rica y su jurisdicción.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Descripción de los Servicios</h2>
            <p>
              Nexflow Digital proporciona servicios de consultoría tecnológica, desarrollo de software a medida (incluyendo pero no limitado a Next.js y ecosistemas web), e implementación de automatizaciones empresariales (Power Platform). Los alcances exactos, cronogramas y entregables de cada proyecto se definirán en un Acuerdo de Alcance de Trabajo (SOW) independiente, firmado por ambas partes previo al inicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Propiedad Intelectual</h2>
            <p>
              Todo el código fuente original, diseños y arquitecturas desarrolladas por Nexflow Digital siguen siendo propiedad de la agencia hasta que se haya liquidado el 100% de los pagos acordados. Una vez completado el pago, se otorgan los derechos de uso y explotación al cliente según lo estipulado en su contrato específico. Nexflow Digital se reserva el derecho de utilizar componentes genéricos no confidenciales en proyectos futuros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Pagos y Facturación</h2>
            <p>
              Los servicios requieren un anticipo estándar (típicamente del 50%) para reservar espacio en nuestra agenda de desarrollo, salvo que se acuerde lo contrario por escrito. Las facturas son pagaderas a la recepción. Nexflow Digital se reserva el derecho de suspender servicios o implementaciones web si los pagos exceden los términos acordados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Limitación de Responsabilidad</h2>
            <p>
              En ningún caso Nexflow Digital será responsable de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o ganancias, o debido a interrupción del negocio) que surja del uso o la incapacidad de usar los sistemas entregados, incluso si Nexflow Digital ha sido notificado verbalmente o por escrito de la posibilidad de tal daño.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}