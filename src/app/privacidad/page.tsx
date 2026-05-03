import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Nexflow Digital',
  description: 'Políticas de manejo de datos y privacidad de Nexflow Digital.',
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-400 font-mono text-sm">Última actualización: Mayo 2026</p>
        </div>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Recopilación de Información</h2>
            <p>
              En <strong>Nexflow Digital</strong>, recopilamos información personal que usted nos proporciona voluntariamente al expresar interés en obtener información sobre nosotros o nuestros productos y servicios. Esta información puede incluir nombres corporativos, correos electrónicos, números de teléfono y detalles de proyectos tecnológicos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Uso de la Información</h2>
            <p>
              Utilizamos la información comercial recopilada para:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-400">
              <li>Facilitar la creación de propuestas técnicas y auditorías.</li>
              <li>Responder a consultas de soporte técnico y servicio al cliente.</li>
              <li>Enviar información administrativa o avisos de actualizaciones en sus sistemas.</li>
              <li>Cumplir con obligaciones legales y regulatorias.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Confidencialidad de Datos (NDA)</h2>
            <p>
              Entendemos que los proyectos de desarrollo y automatización implican acceso a datos sensibles de su negocio. Nexflow Digital opera bajo estrictos protocolos de confidencialidad. No compartimos, vendemos, alquilamos ni intercambiamos su información con terceros para sus fines promocionales bajo ninguna circunstancia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Seguridad de los Datos</h2>
            <p>
              Hemos implementado medidas de seguridad técnicas y organizativas diseñadas para proteger la seguridad de cualquier información personal que procesamos, alineadas con los estándares de desarrollo seguro en entornos web y en la nube. Sin embargo, ninguna transmisión electrónica por Internet puede garantizarse al 100% como segura.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}