import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WhatsAppFloating from '../../components/WhatsAppFloating'; // Importación inteligente del botón flotante
import './globals.css';

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-slate-900 text-white antialiased">
        {/* El Navbar queda arriba con su propio flujo (asegúrate de que tenga z-50 en su propio componente) */}
        <Navbar />
        
        {/* Contenedor relativo global que sirve de frontera para el botón absoluto */}
        <div className="relative min-h-screen flex flex-col">
          <main className="flex-grow pt-16">
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