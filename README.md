# Nexflow Digital · sitio web (v4 «Estudio»)

Sitio de Nexflow Digital hecho con Next.js 16 y Tailwind 4.

## Dónde se cambia cada cosa

| Qué | Dónde |
|---|---|
| Teléfono, WhatsApp, correo, redes, año de fundación | `src/lib/site.ts` (arriba) |
| Servicios (nombre, frase, lista, foto, mensaje de WhatsApp) | `src/lib/site.ts` → `SERVICES` |
| Clientes y logos | `src/lib/site.ts` → `CLIENTS` + `public/logos/` |
| Proyectos | `src/lib/site.ts` → `PROJECTS` + `public/proyectos/` |
| Historia | `src/lib/site.ts` → `TIMELINE` |
| Opiniones de clientes | `src/lib/site.ts` → `TESTIMONIALS` (vacío = la sección no aparece) |
| Preguntas rápidas del asistente | `components/site/Assistant.tsx` → `QA` |
| Precios de Cirelia Business | `src/lib/cirelia/plans.ts` → `PLANS` |
| Artículos del blog | `content/blog/*.md` |
| Colores, letras y estilos | `src/app/globals.css` |

## Páginas

`/` inicio · `/sitios-web` · `/cirelia-business` (copia de /planes de Cirelia) · `/automatizacion` · `/apps` · `/diagnostico` · `/proyectos` · `/nosotros` · `/blog` · `/contacto` · `/terminos` · `/privacidad`.
Las direcciones viejas (`/desarrollo-web`, `/ecommerce`, `/cirelia`, `/auditoria-tecnica`) redirigen solas a las nuevas.

Para sumar un servicio nuevo: agregarlo en `SERVICES` y crear su página copiando `src/app/apps/page.tsx` (usa la plantilla `components/site/ServicePage.tsx`).

## Variables de entorno (opcionales)

- `PLANES_VIDEO_URL`: el mismo enlace de YouTube que en Cirelia. Si está, el video aparece en `/cirelia-business`.
- `KV_REST_API_URL` y `KV_REST_API_TOKEN`: contador de vistas del blog. Sin ellas, el blog funciona igual.

## Formulario

Usa FormSubmit (gratis). La primera vez que alguien envía el formulario llega un correo de activación a `merloy123@gmail.com`: hay que confirmarlo una vez.

## Comandos

```bash
npm install
npm run dev     # http://localhost:3003
npm run build
```
