'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Check, Loader2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const EMAIL = 'merloy123@gmail.com';
const WHATSAPP_URL = 'https://wa.me/message/U3ZXMIXGALZJI1';

const types = [
  { id: 'auditoria', label: 'Auditoría gratis' },
  { id: 'web', label: 'Sitio web o tienda' },
  { id: 'app', label: 'App o sistema interno' },
  { id: 'automatizacion', label: 'Automatizar tareas' },
  { id: 'datos', label: 'Dashboards y datos' },
  { id: 'otro', label: 'Otra cosa' },
];

const field =
  'w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-white placeholder:text-slate-500 transition-colors focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/40';

const labelCls = 'mb-2 block text-sm font-medium text-slate-300';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactForm({ defaultType }: { defaultType?: string }) {
  const initial = types.some((t) => t.id === defaultType) ? defaultType : 'auditoria';
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === 'sending') return;

    const data = new FormData(e.currentTarget);
    if (data.get('_honey')) return; // trampa para bots

    const tipoId = String(data.get('tipo') ?? 'otro');
    const tipo = types.find((t) => t.id === tipoId)?.label ?? 'Otra cosa';
    const nombre = String(data.get('nombre') ?? '').trim();

    setStatus('sending');
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Nuevo contacto (${tipo}) de ${nombre}`,
          _captcha: 'false',
          _template: 'table',
          Tipo_de_proyecto: tipo,
          Nombre: nombre,
          email: String(data.get('email') ?? '').trim(), // "email" en minúscula: FormSubmit lo usa para responder
          WhatsApp: String(data.get('whatsapp') ?? '').trim() || '—',
          Empresa: String(data.get('empresa') ?? '').trim() || '—',
          Mensaje: String(data.get('mensaje') ?? '').trim(),
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || json?.success === false || json?.success === 'false') throw new Error('fail');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="py-8 text-center sm:py-12">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 text-emerald-400">
          <Check size={28} aria-hidden />
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white">
          Recibimos tu mensaje
        </h2>
        <p className="mx-auto mt-3 max-w-sm leading-relaxed text-slate-400">
          Lo vamos a revisar con calma y te respondemos en menos de 24 horas, por correo o WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-white px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-sky-100"
          >
            Volver al inicio
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/5"
          >
            <FaWhatsapp size={18} className="text-emerald-400" aria-hidden /> Escribir por WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Trampa para bots (oculta a las personas) */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <fieldset>
        <legend className="text-sm font-medium text-white">¿Qué necesitas?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {types.map((t) => (
            <label key={t.id} className="cursor-pointer">
              <input
                type="radio"
                name="tipo"
                value={t.id}
                defaultChecked={t.id === initial}
                className="peer sr-only"
              />
              <span className="block rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition-colors hover:border-white/30 peer-checked:border-sky-400 peer-checked:bg-sky-400/10 peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sky-400">
                {t.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelCls}>
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="tu@empresa.com"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="whatsapp" className={labelCls}>
            WhatsApp <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <input
            id="whatsapp"
            name="whatsapp"
            type="tel"
            autoComplete="tel"
            placeholder="+506 0000 0000"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="empresa" className={labelCls}>
            Empresa <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            autoComplete="organization"
            placeholder="Nombre de tu negocio"
            className={field}
          />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelCls}>
          Cuéntanos qué quieres resolver
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          minLength={10}
          placeholder="Por ejemplo: hoy aprobamos facturas por correo y queremos que sea automático."
          className={`${field} resize-none`}
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-400">
        <input
          type="checkbox"
          name="consentimiento"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-sky-400"
        />
        <span>
          Acepto que Nexflow Digital use estos datos para responder mi consulta, según la{' '}
          <Link href="/privacidad" className="text-white underline underline-offset-4 hover:text-sky-300">
            Política de Privacidad
          </Link>
          .
        </span>
      </label>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-red-400/30 bg-red-400/10 p-4 text-sm leading-relaxed text-red-200">
          No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por{' '}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">
            WhatsApp
          </a>{' '}
          o a{' '}
          <a href={`mailto:${EMAIL}`} className="font-semibold underline underline-offset-4">
            {EMAIL}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-4 text-lg font-semibold text-slate-950 transition-colors hover:bg-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'sending' ? (
          <>
            <Loader2 size={20} className="animate-spin" aria-hidden /> Enviando…
          </>
        ) : (
          'Enviar mensaje'
        )}
      </button>
    </form>
  );
}