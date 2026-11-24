import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Direcciones viejas → nuevas. 308 = redirección permanente: Google pasa el posicionamiento de una a la otra
  // y los enlaces que ya compartiste siguen funcionando.
  async redirects() {
    return [
      { source: '/desarrollo-web', destination: '/sitios-web', permanent: true },
      { source: '/ecommerce', destination: '/cirelia-business', permanent: true },
      { source: '/cirelia', destination: '/cirelia-business', permanent: true },
      { source: '/auditoria-tecnica', destination: '/diagnostico', permanent: true },
    ];
  },
};

export default nextConfig;
