import type { ComparisonRow } from '../types'

export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] text-left text-sm">
          <thead className="bg-slate-950 text-white">
            <tr>
              <th className="px-5 py-4 font-semibold">Aspecto</th>
              <th className="px-5 py-4 font-semibold">Ejecución local</th>
              <th className="px-5 py-4 font-semibold">Despliegue en Azure</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {rows.map((row) => (
              <tr className="transition hover:bg-blue-50/60" key={row.aspect}>
                <td className="px-5 py-4 font-semibold text-slate-900">{row.aspect}</td>
                <td className="px-5 py-4 text-slate-600">{row.local}</td>
                <td className="px-5 py-4 text-slate-600">{row.azure}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
