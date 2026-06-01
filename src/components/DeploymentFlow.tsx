import type { FlowStep } from '../types'
import { Icon } from './Icon'

interface DeploymentFlowProps {
  steps: FlowStep[]
  compact?: boolean
}

export function DeploymentFlow({ steps, compact = false }: DeploymentFlowProps) {
  return (
    <div className={`grid gap-3 ${compact ? 'lg:grid-cols-5' : 'lg:grid-cols-6'}`}>
      {steps.map((step, index) => (
        <div className="contents" key={step.title}>
          <article className="relative rounded-2xl border border-blue-100 bg-white p-4 text-center shadow-soft transition hover:-translate-y-1">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Icon name={step.icon} />
            </div>
            <h3 className="mt-3 text-sm font-bold text-slate-900">{step.title}</h3>
            {step.caption && <p className="mt-1 text-xs leading-5 text-slate-500">{step.caption}</p>}
            {index < steps.length - 1 && (
              <span className="absolute -bottom-5 left-1/2 z-10 -translate-x-1/2 rotate-90 text-lg font-bold text-blue-400 lg:-right-4 lg:bottom-auto lg:left-auto lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-1/2 lg:rotate-0">→</span>
            )}
          </article>
        </div>
      ))}
    </div>
  )
}
