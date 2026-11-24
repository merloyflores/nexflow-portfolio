'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { annualPrice, colones } from '@/lib/cirelia/plans';
import { fmtNum, fmtStorage, fmtUsd, monthlyFromYear, type PlanView } from '@/lib/cirelia/plans';
import type { SupportChannel } from '@/lib/cirelia/plans';

const SUPPORT_TEXT: Record<SupportChannel, string> = { email: 'por correo', whatsapp: 'por WhatsApp', prioritario: 'prioritario', dedicado: 'con una persona dedicada' };

/** Lo que dice cada tarjeta debajo de las características: los topes del plan, en una línea corta. */
function limitsLine(p: PlanView) {
  const out: string[] = [];
  if (p.limits.orders) out.push(`${fmtNum(p.limits.orders)} pedidos al mes`);
  if (p.limits.storageMb) out.push(`${fmtStorage(p.limits.storageMb)} para fotos`);
  return out.join(' · ');
}

export default function Pricing({ plans, generalCta }: { plans: PlanView[]; generalCta: string | null }) {
  const regular = plans.filter((p) => !p.custom);
  const custom = plans.filter((p) => p.custom);
  const maxPct = Math.max(0, ...regular.map((p) => p.annualPct));
  const [yearly, setYearly] = useState(false);
  const showYear = yearly && maxPct > 0;
  const cols = regular.length >= 3 ? 'lg:grid-cols-3' : regular.length === 2 ? 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto' : 'max-w-md mx-auto';

  return (
    <div>
      {maxPct > 0 && (
        <div className="flex justify-center" data-rv>
          <div className="pv-seg" role="group" aria-label="Cómo querés pagar">
            <button type="button" aria-pressed={!yearly} onClick={() => setYearly(false)}>Mensual</button>
            <button type="button" aria-pressed={yearly} onClick={() => setYearly(true)}>Anual · {maxPct}% menos</button>
          </div>
        </div>
      )}

      <ul className={`mt-10 grid gap-4 md:grid-cols-2 ${cols} items-stretch`}>
        {regular.map((p, n) => {
          const perMonth = p.price == null ? null : showYear && p.annualPct > 0 ? monthlyFromYear(p.price, p.annualPct) : p.price;
          const yearTotal = p.price != null && p.annualPct > 0 ? annualPrice(p.price, p.annualPct) : null;
          const lim = limitsLine(p);
          return (
            <li key={p.id} className="pv-price-card" data-hl={p.highlight} data-rv={n + 1}>
              <div className="flex items-center justify-between gap-3 min-h-[1.6rem]">
                <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em]">{p.label}</h3>
                {p.highlight && <span className="pv-pill">{p.badge}</span>}
              </div>
              <p className="pv-muted text-[.92rem] leading-snug mt-2 min-h-[2.6rem]">{p.idealFor || p.description}</p>

              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span key={`${p.id}-${showYear}`} className="pv-price pv-num pv-swap">{perMonth == null ? '—' : fmtUsd(perMonth)}</span>
                  <span className="pv-muted text-sm">USD al mes</span>
                </div>
                <p className="pv-muted text-[.8rem] mt-2 pv-num min-h-[1.2rem]">
                  {perMonth != null && <>≈ {colones(perMonth)}{showYear && yearTotal != null ? <> · pagás {fmtUsd(yearTotal)} al año</> : null}</>}
                </p>
              </div>

              <a href={p.cta ?? generalCta ?? '#'} target="_blank" rel="noopener noreferrer" className="pv-btn pv-btn-dark w-full mt-6">
                Quiero el plan {p.label} <ArrowRight size={16} className="pv-arrow" aria-hidden />
              </a>
              <p className="pv-muted text-[.78rem] mt-3 text-center pv-num">
                {p.setup ? <>Implementación única de {fmtUsd(p.setup)}</> : 'Sin costo de implementación'}
                {p.trialDays > 0 ? <> · {p.trialDays} días de prueba</> : null}
              </p>

              <hr className="pv-hr my-6" />
              <ul className="space-y-2.5 text-[.9rem]">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 leading-snug"><Check size={16} className="pv-check mt-[2px]" aria-hidden /> <span>{f}</span></li>
                ))}
              </ul>
              {(lim || p.support) && (
                <p className="pv-muted text-[.8rem] mt-auto pt-6 leading-relaxed">
                  {lim}{lim ? ' · ' : ''}Soporte {SUPPORT_TEXT[p.support.channel]}{p.support.hours ? `, respuesta en ${p.support.hours} h` : ''}
                </p>
              )}
            </li>
          );
        })}
      </ul>

      {custom.map((p) => (
        <div key={p.id} className="pv-card mt-4 p-6 sm:p-7 grid gap-6 md:grid-cols-[1fr_auto] md:items-center" data-rv>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-[1.15rem] font-semibold tracking-[-0.02em]">{p.label}</h3>
              <span className="pv-muted text-sm">Precio a medida{p.setup ? ` · implementación desde ${fmtUsd(p.setup)}` : ''}</span>
            </div>
            <p className="pv-ink2 text-[.95rem] mt-2 max-w-2xl leading-relaxed">{p.idealFor || p.description}</p>
            {p.features.length > 0 && (
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[.88rem]">
                {p.features.map((f) => <li key={f} className="flex gap-2.5 leading-snug"><Check size={15} className="pv-check mt-[2px]" aria-hidden /> <span>{f}</span></li>)}
              </ul>
            )}
          </div>
          <a href={p.cta ?? generalCta ?? '#'} target="_blank" rel="noopener noreferrer" className="pv-btn pv-btn-line">Cotizar {p.label} <ArrowRight size={16} className="pv-arrow" aria-hidden /></a>
        </div>
      ))}
    </div>
  );
}
