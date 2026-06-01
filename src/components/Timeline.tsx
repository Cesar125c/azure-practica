export function Timeline({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-3 md:grid-cols-2">
      {steps.map((step, index) => (
        <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-blue-200 hover:shadow-soft" key={step}>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">{index + 1}</span>
          <p className="pt-1 text-sm leading-6 text-slate-700">{step}</p>
        </li>
      ))}
    </ol>
  )
}
