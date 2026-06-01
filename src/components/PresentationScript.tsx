import { Icon } from './Icon'

export function PresentationScript() {
  return (
    <article className="rounded-3xl border border-blue-100 bg-white p-6 shadow-soft sm:p-9">
      <div className="flex flex-col gap-6 md:flex-row">
        <div className="h-fit w-fit rounded-2xl bg-blue-50 p-4 text-blue-600">
          <Icon name="rocket" className="h-8 w-8" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Guion para exposición</p>
          <h2 className="mt-3 text-2xl font-bold text-slate-950">Guion breve para explicar</h2>
          <blockquote className="mt-5 border-l-4 border-blue-500 pl-5 text-base leading-8 text-slate-600">
            Esta práctica muestra cómo desplegar una aplicación web en Microsoft Azure. Primero se desarrolló una página frontend usando React, TypeScript y Vite. Luego el código se subió a GitHub. Desde Azure Static Web Apps se conectó el repositorio y Azure creó automáticamente un flujo de despliegue con GitHub Actions. Cada vez que se sube un cambio al repositorio, Azure compila el proyecto, genera la carpeta dist y publica la aplicación en una URL pública con HTTPS. La ventaja principal es que la página ya no depende de mi computadora, sino que se ejecuta desde la nube.
          </blockquote>
        </div>
      </div>
    </article>
  )
}
