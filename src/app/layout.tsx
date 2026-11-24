import type { Metadata, Viewport } from 'next';
import Navbar from '../../components/site/Navbar';
import Footer from '../../components/site/Footer';
import Assistant from '../../components/site/Assistant';
import Reveal from '../../components/site/Reveal';
import { brand, colon, sans } from '@/lib/fonts';
import { EMAIL, PHONE, SITE_URL, SOCIAL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Nexflow Digital | Sitios web, tiendas en línea, automatización y apps en Costa Rica', template: '%s | Nexflow Digital' },
  description:
    'Estudio de tecnología en Costa Rica. Sitios web que consiguen clientes, Cirelia Business (tienda en línea, caja e inventario), automatización con Power Platform y apps a la medida.',
  keywords: ['páginas web Costa Rica', 'tienda en línea Costa Rica', 'punto de venta', 'Power Automate', 'Power BI', 'Power Apps', 'apps a la medida', 'pymes'],
  authors: [{ name: 'Nexflow Digital' }],
  openGraph: {
    title: 'Nexflow Digital',
    description: 'Sitios web, tiendas en línea, automatización y apps a la medida para negocios de Costa Rica.',
    url: SITE_URL,
    siteName: 'Nexflow Digital',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'es_CR',
    type: 'website',
  },
  verification: { google: 'KsHePQ17De6rGtYOjzSH96iKcl2giYpEtnzLCRW_f38' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f6f8' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0f1a' },
  ],
};

// Datos para Google: negocio de área de servicio (sin dirección pública, igual que el perfil de Google).
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Nexflow Digital',
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  founder: { '@type': 'Person', name: 'Merloy Flores' },
  areaServed: { '@type': 'Country', name: 'Costa Rica' },
  description: 'Sitios web, Cirelia Business (tienda en línea con punto de venta), automatización con Power Platform y apps a la medida.',
  sameAs: SOCIAL.map((s) => s.href),
};

/*
 * Antes de pintar: 1) modo día/noche que eligió la persona (si no eligió, manda el del sistema);
 * 2) la clase «js», que activa la aparición suave al bajar. Sin JavaScript todo se ve igual, solo que quieto.
 */
const BOOT = `try{var t=localStorage.getItem('nexflow:theme');if(t==='dark'||t==='light')document.documentElement.setAttribute('data-theme',t);}catch(e){}document.documentElement.classList.add('js');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${sans.variable} ${brand.variable} ${colon.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-ink">Saltar al contenido</a>
        <Navbar />
        <main id="contenido" className="flex-1">{children}</main>
        <Footer />
        <Assistant />
        <Reveal />
      </body>
    </html>
  );
}
