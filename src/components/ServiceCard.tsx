import type { Service } from '../types'
import { Icon } from './Icon'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-soft">
      <div className="inline-flex rounded-xl bg-cyan-50 p-3 text-cyan-700 transition group-hover:bg-cyan-600 group-hover:text-white">
        <Icon name={service.icon} className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-bold text-slate-950">{service.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  )
}
