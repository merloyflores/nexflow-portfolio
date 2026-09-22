import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloating from '../../components/WhatsAppFloating'; // Importación inteligente del botón flotante
import './globals.css';

const SITE_URL = 'https://nexflow-portfolio.vercel.app';

export const metadata = {
  title: 'Nexflow Digital | Desarrollo Web Next.js y Power Platform',
  description: 'Especialistas en sistemas de alto rendimiento, automatización con Microsoft Power Platform y desarrollo web moderno en Costa Rica.',
  keywords: ['Next.js', 'Power BI', 'Power Automate', 'Desarrollo Web', 'Automatización de procesos', 'Costa Rica', 'Software a medida'],
  authors: [{ name: 'Merloy Flores' }],
  openGraph: {
    title: 'Nexflow Digital | Digital Evolution',
    description: 'Creamos sistemas que integran Next.js y Power Platform para escalar tu negocio.',
    url: 'https://nexflow-portfolio.vercel.app/',
    siteName: 'Nexflow Digital',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_CR',
    type: 'website',
  },
  verification: {
    google: 'KsHePQ17De6rGtYOjzSH96iKcl2giYpEtnzLCRW_f38',
  },
};

// Datos estructurados (JSON-LD): le dicen a Google, en su propio "idioma",
// que Nexflow Digital es un negocio local. Sin `address` a propósito —
// el perfil de Google Business también está configurado como negocio de
// área de servicio, sin dirección pública, así que este bloque tiene que
// coincidir con eso (no hay que inventar una dirección aquí).
const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Nexflow Digital',
  url: SITE_URL,
  telephone: '+506 7265-5724',
  email: 'merloy123@gmail.com',
  founder: {
    '@type': 'Person',
    name: 'Merloy Flores',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Costa Rica',
  },
  description:
    'Desarrollo web en Next.js, automatización con Power Automate y Power Apps, y dashboards con Power BI para pequeñas y medianas empresas en Costa Rica.',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61590617219236',
    'https://www.instagram.com/nexflowdigitalcr',
    'https://www.linkedin.com/in/merloyflores/',
    'https://github.com/merloyflores',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-900 text-white antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* El Navbar queda arriba con su propio flujo (asegúrate de que tenga z-50 en su propio componente) */}
        <Navbar />

        {/* Contenedor relativo global que sirve de frontera para el botón absoluto */}
        <div className="relative min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>

          {/* El botón ahora sabe exactamente dónde termina el main y dónde empieza el footer */}
          <WhatsAppFloating />

          <Footer />
        </div>
      </body>
    </html>
  );
}