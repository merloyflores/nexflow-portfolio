import type { MetadataRoute } from 'next';

/**
 * Datos para Android (y Chrome en general): nombre e íconos cuando alguien agrega el sitio a la pantalla de inicio.
 * «maskable» es el mismo ícono con más margen, para que Android lo pueda recortar en círculo o gota sin cortar el engranaje.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nexflow Digital',
    short_name: 'Nexflow',
    description: 'Sitios web, tiendas en línea, sistemas para clínicas, automatización y apps a la medida en Costa Rica.',
    start_url: '/',
    display: 'browser',
    background_color: '#0c1220',
    theme_color: '#0c1220',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
