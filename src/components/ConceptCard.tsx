import type { Concept } from '../types'
import { Icon } from './Icon'

export function ConceptCard({ concept }: { concept: Concept }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-soft">
      <div className="inline-flex rounded-xl bg-blue-50 p-2.5 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
        <Icon name={concept.icon} />
      </div>
      <h3 className="mt-4 font-bold text-slate-950">{concept.title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{concept.description}</p>
    </article>
  )
}
