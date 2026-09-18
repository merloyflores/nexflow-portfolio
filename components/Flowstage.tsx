import { BarChart3, Check, Smartphone, Workflow } from 'lucide-react';

/*
  Visual del hero: una solicitud viaja sola por tres pasos.
  Es CSS puro (sin JS): un ciclo de 7 s en el que un pulso baja por la línea
  y va "encendiendo" cada paso. Con prefers-reduced-motion queda todo encendido y quieto.
*/

const nodes = [
  { icon: Smartphone, title: 'Solicitud recibida', text: 'Formulario en el celular', tool: 'Power Apps', n: 1 },
  { icon: Workflow, title: 'Aprobación automática', text: 'Reglas y avisos sin intervención', tool: 'Power Automate', n: 2 },
  { icon: BarChart3, title: 'Reporte actualizado', text: 'Tablero al día para decidir', tool: 'Power BI', n: 3 },
];

const css = `
@keyframes nf-enter{from{opacity:0;transform:translateY(18px) scale(.985)}to{opacity:1;transform:none}}
@keyframes nf-on-1{0%,4%{opacity:0}9%,92%{opacity:1}98%,100%{opacity:0}}
@keyframes nf-on-2{0%,34%{opacity:0}39%,92%{opacity:1}98%,100%{opacity:0}}
@keyframes nf-on-3{0%,64%{opacity:0}69%,92%{opacity:1}98%,100%{opacity:0}}
@keyframes nf-off-1{0%,4%{opacity:1}9%,92%{opacity:0}98%,100%{opacity:1}}
@keyframes nf-off-2{0%,34%{opacity:1}39%,92%{opacity:0}98%,100%{opacity:1}}
@keyframes nf-off-3{0%,64%{opacity:1}69%,92%{opacity:0}98%,100%{opacity:1}}
@keyframes nf-run-1{0%,9%{transform:translateY(-20px)}33%,100%{transform:translateY(40px)}}
@keyframes nf-run-2{0%,38%{transform:translateY(-20px)}62%,100%{transform:translateY(40px)}}
.nf-enter{animation:nf-enter .9s cubic-bezier(.2,.7,.2,1) .3s both}
.nf-on-1{animation:nf-on-1 7s ease-in-out infinite}
.nf-on-2{animation:nf-on-2 7s ease-in-out infinite}
.nf-on-3{animation:nf-on-3 7s ease-in-out infinite}
.nf-off-1{animation:nf-off-1 7s ease-in-out infinite}
.nf-off-2{animation:nf-off-2 7s ease-in-out infinite}
.nf-off-3{animation:nf-off-3 7s ease-in-out infinite}
.nf-run-1{animation:nf-run-1 7s ease-in-out infinite}
.nf-run-2{animation:nf-run-2 7s ease-in-out infinite}
.nf-dot{animation:nf-dot 2s ease-in-out infinite}
@keyframes nf-dot{0%,100%{opacity:1}50%{opacity:.35}}
@media (prefers-reduced-motion:reduce){
  .nf-enter,.nf-dot,.nf-run-1,.nf-run-2{animation:none}
  .nf-on-1,.nf-on-2,.nf-on-3{animation:none;opacity:1}
  .nf-off-1,.nf-off-2,.nf-off-3{animation:none;opacity:0}
  .nf-run-1,.nf-run-2{opacity:0}
}
`;

export default function FlowStage() {
  return (
    <div className="nf-enter relative w-full max-w-md">
      <style>{css}</style>

      {/* Resplandor detrás del panel */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-sky-500/10 blur-3xl"
      />

      <div className="rounded-3xl border border-white/10 bg-linear-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-2xl shadow-black/40 backdrop-blur sm:p-6">
        <div className="mb-5 flex items-center justify-between">
          <p className="text-sm font-medium text-white">Solicitud de compra</p>
          <p className="flex items-center gap-2 text-xs text-slate-400">
            <span className="nf-dot h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            Automático
          </p>
        </div>

        {nodes.map((n, i) => (
          <div key={n.title}>
            <div className="relative flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              {/* Estado encendido (borde y brillo) */}
              <span
                aria-hidden
                className={`nf-on-${n.n} pointer-events-none absolute inset-0 rounded-xl border border-sky-400/50 bg-sky-400/[0.07] shadow-[0_0_36px_-12px_rgba(56,189,248,0.6)]`}
              />

              <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white/5 text-slate-500">
                <n.icon size={20} aria-hidden />
                <span
                  aria-hidden
                  className={`nf-on-${n.n} absolute inset-0 flex items-center justify-center rounded-lg bg-sky-400/15 text-sky-300`}
                >
                  <n.icon size={20} />
                </span>
              </span>

              <div className="relative min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{n.title}</p>
                <p className="text-xs text-slate-400">{n.text}</p>
              </div>

              <div className="relative min-w-[92px] text-right">
                <p className="text-[11px] text-slate-500">{n.tool}</p>
                <p className="relative mt-1 h-4 text-xs">
                  <span className={`nf-off-${n.n} text-slate-500`}>En espera</span>
                  <span
                    className={`nf-on-${n.n} absolute inset-0 flex items-center justify-end gap-1 text-emerald-400`}
                  >
                    <Check size={12} aria-hidden /> Listo
                  </span>
                </p>
              </div>
            </div>

            {i < nodes.length - 1 && (
              <div aria-hidden className="relative ml-[38px] h-10 w-px overflow-hidden bg-white/10">
                <span
                  className={`nf-run-${i + 1} absolute -left-px top-0 h-5 w-[3px] rounded-full bg-linear-to-b from-transparent to-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.9)]`}
                />
              </div>
            )}
          </div>
        ))}

        <p className="mt-5 text-xs leading-relaxed text-slate-500">
          Ejemplo ilustrativo: de la solicitud al reporte, sin correos de ida y vuelta ni copiar y pegar.
        </p>
      </div>
    </div>
  );
}