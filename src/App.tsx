import { ComparisonTable } from './components/ComparisonTable'
import { ConceptCard } from './components/ConceptCard'
import { DeploymentFlow } from './components/DeploymentFlow'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Icon } from './components/Icon'
import { Navbar } from './components/Navbar'
import { PresentationScript } from './components/PresentationScript'
import { SectionHeading } from './components/SectionHeading'
import { ServiceCard } from './components/ServiceCard'
import { Timeline } from './components/Timeline'
import {
  architectureSteps,
  azureServices,
  beforeAzure,
  concepts,
  deploymentSteps,
  localVsAzure,
  recommendations,
  timelineSteps,
  withAzure,
} from './data/dashboard'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <main>
        <Hero />

        <section className="scroll-mt-20 px-4 py-16 md:px-8 md:py-20" id="conceptos">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="Azure reúne herramientas para publicar soluciones digitales sin comprar ni mantener infraestructura física propia."
              eyebrow="Punto de partida"
              title="¿Qué es Microsoft Azure?"
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
              <article className="rounded-3xl bg-blue-600 p-6 text-white shadow-soft sm:p-8">
                <p className="text-base leading-8 text-blue-50">
                  Microsoft Azure es una plataforma de computación en la nube que permite crear, alojar y administrar aplicaciones, bases de datos, servidores, contenedores, redes, inteligencia artificial y otros servicios a través de Internet.
                </p>
                <div className="mt-6 rounded-2xl border border-white/20 bg-white/10 p-5">
                  <p className="text-sm font-bold uppercase tracking-wider text-blue-100">Idea clave</p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    Azure permite pasar de ejecutar una aplicación en mi computadora a publicarla en servidores en la nube, para que pueda accederse desde cualquier dispositivo con Internet.
                  </p>
                </div>
              </article>
              <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
                <div className="inline-flex rounded-xl bg-cyan-50 p-3 text-cyan-700">
                  <Icon name="cloud" className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">En palabras simples</p>
                <p className="mt-3 leading-7 text-slate-600">
                  Azure nos presta infraestructura en la nube para no depender de servidores físicos propios.
                </p>
              </aside>
            </div>

            <div className="mt-16">
              <SectionHeading
                description="Estas ideas permiten explicar qué ocurre antes, durante y después de publicar una aplicación."
                eyebrow="Conceptos clave"
                title="El vocabulario esencial de la nube"
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {concepts.map((concept) => <ConceptCard concept={concept} key={concept.title} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="El cambio fundamental es la disponibilidad: la página deja de vivir solamente en el equipo donde fue creada."
              eyebrow="Problema resuelto"
              title="De localhost a una URL pública"
            />
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <ContrastCard color="slate" items={beforeAzure} title="Antes: solo en mi computadora" />
              <ContrastCard color="blue" items={withAzure} title="Con Azure: disponible en Internet" />
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 px-4 py-16 md:px-8 md:py-20" id="servicios">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="Azure ofrece distintas opciones de alojamiento. La elección depende de si el proyecto es estático, tiene backend, usa contenedores o necesita persistir información."
              eyebrow="Servicios"
              title="Servicios importantes para desplegar aplicaciones"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {azureServices.map((service) => <ServiceCard key={service.name} service={service} />)}
            </div>

            <div className="mt-16">
              <SectionHeading
                description="No todos los proyectos necesitan la misma infraestructura. Esta tabla ayuda a elegir un punto de partida razonable."
                eyebrow="Decisión técnica"
                title="¿Qué servicio usar según el proyecto?"
              />
              <RecommendationsTable />
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 bg-white px-4 py-16 md:px-8 md:py-20" id="despliegue">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="En esta práctica, GitHub conserva el código y Azure automatiza la construcción y publicación del frontend."
              eyebrow="Despliegue usado"
              title="Del código local a Azure Static Web Apps"
            />
            <div className="mt-8">
              <DeploymentFlow steps={deploymentSteps} />
            </div>
            <p className="mt-8 rounded-2xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-blue-950">
              En esta práctica se usa Azure Static Web Apps porque el proyecto es un frontend hecho con React y TypeScript. Al subir cambios a GitHub, Azure ejecuta automáticamente el proceso de construcción y publicación.
            </p>
          </div>
        </section>

        <section className="scroll-mt-20 px-4 py-16 md:px-8 md:py-20" id="comparacion">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="El desarrollo local sigue siendo necesario para construir y probar; Azure entra en juego cuando la aplicación debe quedar disponible para otras personas."
              eyebrow="Comparación"
              title="Ejecución local vs despliegue en Azure"
            />
            <div className="mt-8">
              <ComparisonTable rows={localVsAzure} />
            </div>
          </div>
        </section>

        <section className="bg-slate-950 px-4 py-16 text-white md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">Arquitectura de esta práctica</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight">Una arquitectura estática y sencilla</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              Como esta aplicación no tiene backend ni base de datos, Azure solo necesita publicar los archivos estáticos generados por Vite en la carpeta dist.
            </p>
            <div className="mt-8 rounded-3xl bg-slate-100 p-5 text-slate-800 sm:p-7">
              <DeploymentFlow compact steps={architectureSteps} />
            </div>
          </div>
        </section>

        <section className="px-4 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              description="El proceso se puede presentar como una secuencia corta: crear, probar, compilar, conectar y publicar."
              eyebrow="Paso a paso"
              title="Pasos resumidos del despliegue"
            />
            <div className="mt-8">
              <Timeline steps={timelineSteps} />
            </div>
          </div>
        </section>

        <section className="scroll-mt-20 bg-blue-50 px-4 py-16 md:px-8 md:py-20" id="guion">
          <div className="mx-auto max-w-7xl">
            <PresentationScript />
            <article className="mt-6 rounded-3xl bg-blue-600 p-6 text-white shadow-soft sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Conclusión</p>
              <p className="mt-4 max-w-5xl text-base leading-8 text-blue-50">
                Azure ofrece diferentes formas de desplegar aplicaciones según la necesidad. Para una página informativa o un frontend React, Azure Static Web Apps es la opción más sencilla. Para aplicaciones con backend se puede usar App Service, y para proyectos con Docker se puede usar Container Apps. Lo importante es elegir el servicio adecuado según la arquitectura del proyecto.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

interface ContrastCardProps {
  color: 'slate' | 'blue'
  title: string
  items: string[]
}

function ContrastCard({ color, items, title }: ContrastCardProps) {
  const accent = color === 'blue' ? 'bg-blue-600 text-white' : 'bg-slate-950 text-white'

  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <h3 className={`px-5 py-4 font-bold ${accent}`}>{title}</h3>
      <ul className="space-y-3 p-5">
        {items.map((item) => (
          <li className="flex gap-3 text-sm leading-6 text-slate-700" key={item}>
            <span className="mt-1 rounded-full bg-blue-100 p-1 text-blue-700"><Icon name="check" className="h-3.5 w-3.5" /></span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}

function RecommendationsTable() {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px] text-left text-sm">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-5 py-4 font-semibold">Tipo de proyecto</th>
              <th className="px-5 py-4 font-semibold">Servicio recomendado</th>
              <th className="px-5 py-4 font-semibold">Motivo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recommendations.map((item) => (
              <tr className="transition hover:bg-blue-50/60" key={item.projectType}>
                <td className="px-5 py-4 font-semibold text-slate-900">{item.projectType}</td>
                <td className="px-5 py-4 text-blue-700">{item.service}</td>
                <td className="px-5 py-4 text-slate-600">{item.reason}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
