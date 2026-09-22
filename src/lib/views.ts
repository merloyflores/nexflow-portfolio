/**
 * Contador de vistas por artículo, respaldado por Vercel KV (Upstash Redis).
 *
 * Diseñado para fallar en silencio: si el proyecto todavía no tiene KV
 * configurado (faltan las variables de entorno), estas funciones ni
 * siquiera intentan cargar el paquete @vercel/kv — devuelven "sin datos"
 * directamente. Así, la sección de "Más leídos" del blog se oculta sola
 * hasta que haya datos reales que mostrar, sin romper nada.
 *
 * Importante: @vercel/kv revienta apenas se importa si no encuentra
 * KV_REST_API_URL / KV_REST_API_TOKEN en el entorno (no espera a que lo
 * uses). Por eso la comprobación de las variables va ANTES del import
 * dinámico, nunca dentro de un try/catch alrededor del import — así el
 * paquete nunca llega a cargarse cuando no está configurado.
 */

const VIEWS_KEY = 'nexflow:blog:views';

function hasKvConfig(): boolean {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

async function getKv() {
  if (!hasKvConfig()) return null;

  try {
    const { kv } = await import('@vercel/kv');
    return kv;
  } catch {
    return null;
  }
}

export async function incrementView(slug: string): Promise<number> {
  const kv = await getKv();
  if (!kv) return 0;

  try {
    return await kv.hincrby(VIEWS_KEY, slug, 1);
  } catch {
    return 0;
  }
}

export async function getViewCounts(): Promise<Record<string, number>> {
  const kv = await getKv();
  if (!kv) return {};

  try {
    const data = await kv.hgetall<Record<string, number>>(VIEWS_KEY);
    return data ?? {};
  } catch {
    return {};
  }
}