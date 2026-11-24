import { Check, Minus } from 'lucide-react';
import { COMPARE_GROUPS, fmtNum, fmtStorage, SUPPORT_LABEL, type CellValue, type PlanView } from '@/lib/cirelia/plans';
import type { PlanModuleId } from '@/lib/cirelia/plans';

/**
 * Comparación en dos niveles: primero lo que de verdad cambia entre planes (topes y módulos), y la tabla completa
 * por secciones del menú, plegada. Así no se arranca con 40 filas de «sí» que no ayudan a decidir.
 */
const yes: CellValue = { t: 'yes' };
const txt = (v: string): CellValue => ({ t: 'text', v });
const n = (v: number | null, unit: string) => txt(v == null ? 'A medida' : `${fmtNum(v)} ${unit}`);
const mod = (id: PlanModuleId) => (p: PlanView): CellValue => (p.modules[id] ? yes : { t: 'no' });

const KEY_ROWS: { label: string; cell: (p: PlanView) => CellValue }[] = [
  { label: 'Productos', cell: (p) => n(p.limits.products, '') },
  { label: 'Usuarios del equipo', cell: (p) => n(p.limits.staff, '') },
  { label: 'Pedidos al mes', cell: (p) => n(p.limits.orders, '') },
  { label: 'Espacio para fotos', cell: (p) => txt(p.limits.storageMb == null ? 'A medida' : fmtStorage(p.limits.storageMb)) },
  { label: 'Tienda, caja, pedidos e inventario', cell: () => yes },
  { label: 'Conectar tu dominio', cell: () => yes },
  { label: 'Dominio incluido (lo compramos y renovamos)', cell: mod('custom_domain') },
  { label: 'Shop avanzado y chat a tu estilo', cell: mod('shop_advanced') },
  { label: 'Garantías y referidos', cell: mod('warranties') },
  { label: 'Asistente con IA en el panel', cell: mod('ai_admin') },
  { label: 'IA que atiende a tus compradores', cell: mod('ai_customers') },
  { label: 'Reparto propio con mapa en vivo', cell: mod('delivery') },
  { label: 'Comisiones para vendedores', cell: mod('commissions') },
  { label: 'Soporte', cell: (p) => txt(SUPPORT_LABEL[p.support.channel] + (p.support.hours ? ` · ${p.support.hours} h` : '')) },
];

function Cell({ v }: { v: CellValue }) {
  if (v.t === 'yes') return <Check size={17} className="inline pv-check" aria-label="Incluido" />;
  if (v.t === 'no') return <Minus size={16} className="inline pv-muted opacity-60" aria-label="No incluido" />;
  if (v.t === 'soon') return <span className="pv-muted text-[.8rem]">Próximamente</span>;
  return <span className="pv-num text-[.88rem]">{v.v.trim()}</span>;
}

function Head({ plans }: { plans: PlanView[] }) {
  return (
    <thead>
      <tr>
        <th scope="col"><span className="sr-only">Qué incluye</span></th>
        {plans.map((p) => <th key={p.id} scope="col" className={p.highlight ? 'pv-col-hl' : ''}>{p.label}</th>)}
      </tr>
    </thead>
  );
}

export default function Compare({ plans }: { plans: PlanView[] }) {
  return (
    <div>
      <div className="pv-scroll-x -mx-4 px-4 sm:mx-0 sm:px-0" data-rv>
        <table className="pv-table min-w-[640px]">
          <caption className="sr-only">Lo que cambia entre planes</caption>
          <Head plans={plans} />
          <tbody>
            {KEY_ROWS.map((r) => (
              <tr key={r.label}>
                <th scope="row">{r.label}</th>
                {plans.map((p) => <td key={p.id} className={p.highlight ? 'pv-col-hl' : ''}><Cell v={r.cell(p)} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <details className="pv-faq mt-6 group">
        <summary className="!justify-center !py-3 !text-[.92rem] pv-ink2">
          <span>Ver la comparación completa, sección por sección</span>
        </summary>
        <div className="!p-0">
          <div className="pv-scroll-x -mx-4 px-4 sm:mx-0 sm:px-0 mt-2">
            <table className="pv-table min-w-[640px]">
              <caption className="sr-only">Comparación completa por sección del panel</caption>
              <Head plans={plans} />
              <tbody>
                {COMPARE_GROUPS.map((g) => (
                  <GroupRows key={g.id} title={g.title} rows={g.rows} plans={plans} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </details>
    </div>
  );
}

function GroupRows({ title, rows, plans }: { title: string; rows: (typeof COMPARE_GROUPS)[number]['rows']; plans: PlanView[] }) {
  return (
    <>
      <tr className="pv-group"><th scope="rowgroup" colSpan={plans.length + 1}>{title}</th></tr>
      {rows.map((r) => (
        <tr key={r.label}>
          <th scope="row">{r.label}{r.hint && <span className="block pv-muted text-[.78rem] font-normal mt-0.5 whitespace-normal">{r.hint}</span>}</th>
          {plans.map((p) => <td key={p.id} className={p.highlight ? 'pv-col-hl' : ''}><Cell v={r.cell(p)} /></td>)}
        </tr>
      ))}
    </>
  );
}
