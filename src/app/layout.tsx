import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
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
        <Navbar />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}