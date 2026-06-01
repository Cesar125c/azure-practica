interface SectionHeadingProps {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{title}</h2>
      <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  )
}
