'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { EMAIL, waLink } from '@/lib/site';

/**
 * Formulario de contacto. Llega al correo por FormSubmit (gratis, sin servidor propio).
 * La primera vez que alguien lo usa, FormSubmit manda un correo de activación a EMAIL: hay que confirmarlo una sola vez.
 */
const TOPICS = [
  { id: 'web', label: 'Sitio web' },
  { id: 'cirelia', label: 'Cirelia Business' },
  { id: 'automatizacion', label: 'Automatización' },
  { id: 'apps', label: 'App a la medida' },
  { id: 'clinica', label: 'Sistema para clínica' },
  { id: 'diagnostico', label: 'Diagnóstico gratis' },
  { id: 'otro', label: 'Otro' },
] as const;

type State = 'idle' | 'sending' | 'ok' | 'error';

export default function ContactForm({ initial = 'web' }: { initial?: string }) {
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get('_honey')) return; // trampa para bots
    const tema = TOPICS.find((t) => t.id === data.get('tema'))?.label ?? 'Otro';
    const nombre = String(data.get('nombre') ?? '');
    setState('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nuevo contacto (${tema}) de ${nombre}`,
          _captcha: 'false',
          _template: 'table',
          Tema: tema,
          Nombre: nombre,
          Empresa: data.get('empresa') || '—',
          Correo: data.get('email'),
          WhatsApp: data.get('whatsapp') || '—',
          Mensaje: data.get('mensaje'),
        }),
      });
      setState(res.ok ? 'ok' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'ok') {
    return (
      <div className="surface p-8 sm:p-10">
        <span className="tile"><Check size={18} /></span>
        <h2 className="t-h3 mt-6">Listo, recibimos tu mensaje.</h2>
        <p className="t-body mt-3">Te respondemos en el día hábil, al correo o al WhatsApp que nos dejaste.</p>
      </div>
    );
  }

  const label = 'block text-[.88rem] font-semibold mb-2';
  return (
    <form onSubmit={onSubmit} className="surface p-6 sm:p-9 space-y-6">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <fieldset>
        <legend className={label}>¿Sobre qué querés conversar?</legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label key={t.id}>
              <input type="radio" name="tema" value={t.id} defaultChecked={t.id === initial} className="peer sr-only" />
              <span className="choice peer-checked:!border-[var(--ink)] peer-checked:!bg-[var(--ink)] peer-checked:!text-[var(--bg)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-[var(--accent)]">{t.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="grid gap-5 sm:grid-cols-2">
        <div><label htmlFor="nombre" className={label}>Nombre</label><input id="nombre" name="nombre" required autoComplete="name" className="field" placeholder="Tu nombre" /></div>
        <div><label htmlFor="empresa" className={label}>Empresa <span className="muted font-normal">(opcional)</span></label><input id="empresa" name="empresa" autoComplete="organization" className="field" placeholder="Nombre del negocio" /></div>
        <div><label htmlFor="email" className={label}>Correo</label><input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="tu@correo.com" /></div>
        <div><label htmlFor="whatsapp" className={label}>WhatsApp <span className="muted font-normal">(opcional)</span></label><input id="whatsapp" name="whatsapp" type="tel" autoComplete="tel" className="field" placeholder="8888 8888" /></div>
      </div>
      <div><label htmlFor="mensaje" className={label}>Contanos qué querés lograr</label><textarea id="mensaje" name="mensaje" required rows={5} className="field resize-y" placeholder="Por ejemplo: quiero que mis clientes puedan agendar citas en línea." /></div>
      {state === 'error' && (
        <p className="text-[.92rem]" role="alert">No se pudo enviar. Probá de nuevo o <a href={waLink('Hola Nexflow, quiero hacer una consulta.')} target="_blank" rel="noopener noreferrer" className="link">escribinos por WhatsApp</a>.</p>
      )}
      <div className="flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-small">Usamos tus datos solo para responderte. <a href="/privacidad" className="underline underline-offset-2">Privacidad</a></p>
        <button type="submit" disabled={state === 'sending'} className="btn btn-ink disabled:opacity-60">{state === 'sending' ? 'Enviando…' : <>Enviar mensaje <ArrowRight size={16} className="arrow" /></>}</button>
      </div>
    </form>
  );
}
