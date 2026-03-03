// app/robots.ts
import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    // IMPORTANTE: Debe terminar en /sitemap.xml
    sitemap: 'https://nexflow-portfolio.vercel.app/sitemap.xml',
  }
}