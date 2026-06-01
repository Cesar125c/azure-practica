import type {
  ComparisonRow,
  Concept,
  FlowStep,
  NavItem,
  Recommendation,
  Service,
} from '../types'

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Conceptos', href: '#conceptos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Despliegue', href: '#despliegue' },
  { label: 'Comparación', href: '#comparacion' },
  { label: 'Guion', href: '#guion' },
]

export const concepts: Concept[] = [
  { title: 'Nube', description: 'Uso de recursos tecnológicos como servidores, almacenamiento y redes a través de Internet.', icon: 'cloud' },
  { title: 'Servidor', description: 'Computadora o entorno que ejecuta aplicaciones y responde peticiones de usuarios.', icon: 'server' },
  { title: 'Hosting', description: 'Servicio que aloja una página o aplicación para que esté disponible en Internet.', icon: 'home' },
  { title: 'Despliegue', description: 'Proceso de publicar una aplicación para que pueda usarse desde una URL pública.', icon: 'rocket' },
  { title: 'URL pública', description: 'Dirección web que permite acceder a una aplicación desde cualquier navegador.', icon: 'lock' },
  { title: 'Escalabilidad', description: 'Capacidad de aumentar o reducir recursos según la cantidad de usuarios.', icon: 'architecture' },
  { title: 'CI/CD', description: 'Automatización para construir y desplegar una aplicación cuando se suben cambios al repositorio.', icon: 'workflow' },
]

export const azureServices: Service[] = [
  { name: 'Azure Static Web Apps', description: 'Ideal para páginas estáticas y aplicaciones frontend como React, Angular o Vue. Se conecta con GitHub y publica automáticamente el sitio.', icon: 'cloud' },
  { name: 'Azure App Service', description: 'Permite alojar aplicaciones web con backend, por ejemplo Java Spring Boot, Node.js, .NET o Python.', icon: 'server' },
  { name: 'Azure Container Apps', description: 'Permite ejecutar aplicaciones empaquetadas en contenedores Docker sin administrar servidores.', icon: 'architecture' },
  { name: 'Azure Container Registry', description: 'Es un registro privado donde se guardan imágenes Docker antes de desplegarlas.', icon: 'code' },
  { name: 'Azure Database', description: 'Servicios administrados de bases de datos como Azure SQL o PostgreSQL, donde Azure gestiona la infraestructura.', icon: 'cost' },
  { name: 'Azure Functions', description: 'Permite ejecutar funciones pequeñas bajo demanda sin administrar servidores.', icon: 'workflow' },
]

export const recommendations: Recommendation[] = [
  { projectType: 'Página informativa HTML/CSS/JS', service: 'Azure Static Web Apps', reason: 'Es simple, rápida y no requiere backend.' },
  { projectType: 'Frontend React o TypeScript', service: 'Azure Static Web Apps', reason: 'Compila el proyecto y publica los archivos estáticos.' },
  { projectType: 'Backend Java Spring Boot', service: 'Azure App Service', reason: 'Permite ejecutar aplicaciones backend por runtime.' },
  { projectType: 'Proyecto con Docker', service: 'Azure Container Apps', reason: 'Ejecuta contenedores en la nube.' },
  { projectType: 'Imágenes Docker', service: 'Azure Container Registry', reason: 'Guarda las imágenes para luego desplegarlas.' },
  { projectType: 'Aplicación con base de datos', service: 'Azure SQL o PostgreSQL', reason: 'Proporciona una base de datos administrada.' },
]

export const deploymentSteps: FlowStep[] = [
  { title: 'Código en mi computadora', icon: 'code' },
  { title: 'Repositorio en GitHub', icon: 'github' },
  { title: 'Azure Static Web Apps', icon: 'cloud' },
  { title: 'GitHub Actions construye el proyecto', icon: 'workflow' },
  { title: 'Carpeta dist generada por Vite', icon: 'architecture' },
  { title: 'URL pública con HTTPS', icon: 'lock' },
]

export const architectureSteps: FlowStep[] = [
  { title: 'Usuario', icon: 'home' },
  { title: 'URL pública de Azure', icon: 'lock' },
  { title: 'Azure Static Web Apps', icon: 'cloud' },
  { title: 'Archivos HTML, CSS y JavaScript', caption: 'Generados por React y Vite', icon: 'code' },
  { title: 'Contenido visible en el navegador', icon: 'check' },
]

export const localVsAzure: ComparisonRow[] = [
  { aspect: 'Entorno', local: 'Se ejecuta en mi computadora.', azure: 'Se ejecuta en servidores en la nube.' },
  { aspect: 'Acceso', local: 'Usa localhost.', azure: 'Tiene una URL pública.' },
  { aspect: 'Disponibilidad', local: 'Depende de que mi equipo esté encendido.', azure: 'No depende de mi computadora.' },
  { aspect: 'Uso principal', local: 'Es útil para desarrollar y probar.', azure: 'Es útil para compartir la aplicación.' },
]

export const beforeAzure = [
  'La aplicación solo funciona en mi computadora.',
  'Si apago la computadora, deja de estar disponible.',
  'Se accede con localhost.',
  'No está publicada para otros usuarios.',
]

export const withAzure = [
  'La aplicación se ejecuta en la nube.',
  'No depende de que mi computadora esté encendida.',
  'Tiene una URL pública.',
  'Puede integrarse con GitHub para despliegue automático.',
  'Puede usar HTTPS.',
]

export const timelineSteps = [
  'Crear el proyecto con React, TypeScript y Vite.',
  'Diseñar la página usando Tailwind CSS.',
  'Probar localmente con npm run dev.',
  'Compilar con npm run build.',
  'Subir el código a GitHub.',
  'Crear el recurso Azure Static Web Apps.',
  'Conectar Azure con el repositorio.',
  'Configurar App location: /, Api location: vacío y Output location: dist.',
  'Permitir que Azure genere GitHub Actions.',
  'Abrir la página publicada desde su URL pública.',
]
