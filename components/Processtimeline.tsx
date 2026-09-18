'use client';

import { useEffect, useRef, useState } from 'react';

type Step = { title: string; text: string };

const HEADING = 'font-[family-name:var(--font-display)]';
const STEP_MS = 450; // tiempo entre un paso y el siguiente

/*
  El proceso SÍ es una secuencia, así que aquí el movimiento tiene sentido:
  al entrar en pantalla, una línea recorre los pasos y los va encendiendo.
  En móvil es vertical; desde lg, horizontal.
*/
export default function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [on, setOn] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      setOn(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const total = steps.length * STEP_MS;
  const lineTransition = reduced ? 'none' : `transform ${total}ms linear`;

  return (
    <ol ref={ref} className="relative grid gap-10 lg:grid-cols-4 lg:gap-8">
      {/* Riel vertical (móvil) */}
      <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-white/10 lg:hidden" />
      <span
        aria-hidden
        className="absolute bottom-2 left-[7px] top-2 w-px origin-top bg-sky-400/80 lg:hidden"
        style={{ transform: on ? 'scaleY(1)' : 'scaleY(0)', transition: lineTransition }}
      />

      {/* Riel horizontal (escritorio) */}
      <span aria-hidden className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/10 lg:block" />
      <span
        aria-hidden
        className="absolute left-0 right-0 top-[7px] hidden h-px origin-left bg-sky-400/80 lg:block"
        style={{ transform: on ? 'scaleX(1)' : 'scaleX(0)', transition: lineTransition }}
      />

      {steps.map((s, i) => {
        const delay = reduced ? 0 : i * STEP_MS;
        return (
          <li key={s.title} className="relative pl-9 lg:pl-0 lg:pt-10">
            <span
              aria-hidden
              className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center rounded-full border bg-slate-950 lg:top-0"
              style={{
                borderColor: on ? 'rgb(56 189 248)' : 'rgba(255,255,255,0.2)',
                transition: reduced ? 'none' : `border-color .4s ${delay}ms`,
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-sky-400"
                style={{ opacity: on ? 1 : 0, transition: reduced ? 'none' : `opacity .4s ${delay}ms` }}
              />
            </span>

            <div
              style={{
                opacity: on ? 1 : 0.35,
                transform: on ? 'none' : 'translateY(8px)',
                transition: reduced ? 'none' : `opacity .6s ${delay}ms, transform .6s ${delay}ms`,
              }}
            >
              <h3 className={`${HEADING} text-lg font-semibold text-white`}>{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-400">{s.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}