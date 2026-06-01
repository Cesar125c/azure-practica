import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 text-white md:px-8 md:py-28" id="inicio">
      <div className="absolute -right-28 -top-32 h-96 w-96 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-200">
            <Icon name="cloud" className="h-4 w-4" />
            Guía visual para exposición
          </div>
          <h1 className="text-balance mt-7 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Microsoft Azure: despliegue de aplicaciones web en la nube
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Una guía visual para entender qué es Azure, cómo se publica una aplicación en Internet y qué servicios se pueden usar según el tipo de proyecto.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-500" href="#conceptos">
              Ver conceptos clave
            </a>
            <a className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10" href="#despliegue">
              Ver flujo de despliegue
            </a>
          </div>
          <p className="mt-10 text-sm text-slate-400">Aplicación creada y desplegada en Azure por <span className="font-semibold text-blue-200">César Cueva</span></p>
        </div>
      </div>
    </section>
  )
}
