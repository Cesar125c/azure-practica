# Microsoft Azure: despliegue de aplicaciones web

Landing page educativa para una exposición universitaria sobre Microsoft Azure y el despliegue de aplicaciones web. El proyecto explica conceptos esenciales de computación en la nube, compara la ejecución local con la publicación en Azure y presenta los servicios recomendados según el tipo de aplicación.

## Objetivo

Servir como apoyo visual para explicar cómo una aplicación frontend deja de depender de una computadora local y pasa a estar disponible desde una URL pública con HTTPS mediante Azure Static Web Apps.

La aplicación es completamente estática: no usa backend, base de datos, contenedores ni rutas dinámicas.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- GitHub
- GitHub Actions
- Azure Static Web Apps

## Ejecutar localmente

Requisitos: Node.js 18 o superior y npm.

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

Vite genera los archivos estáticos dentro de la carpeta `dist`.

Para revisar localmente el resultado compilado:

```bash
npm run preview
```

## Subir el proyecto a GitHub

1. Crear un repositorio nuevo en GitHub, por ejemplo `azure-dashboard-demo`.
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar:

```bash
git init
git add .
git commit -m "Crear landing educativa sobre Azure"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/azure-dashboard-demo.git
git push -u origin main
```

## Desplegar en Azure Static Web Apps

1. Ingresar al portal de Azure.
2. Buscar **Static Web Apps** y crear un recurso.
3. Seleccionar el plan **Free**.
4. Conectar la cuenta de GitHub.
5. Elegir el repositorio y la rama `main`.
6. Usar la configuración personalizada de build:

| Campo | Valor |
| --- | --- |
| App location | `/` |
| Api location | Dejar vacío |
| Output location | `dist` |

7. Confirmar la creación del recurso.
8. Esperar a que GitHub Actions termine el workflow generado por Azure.
9. Abrir la URL pública HTTPS asignada al sitio.

Cada `push` posterior a la rama `main` activa un nuevo despliegue automático.

## Guion breve para explicar en clase

Esta práctica muestra cómo desplegar una aplicación web en Microsoft Azure. Primero se desarrolló una página frontend usando React, TypeScript y Vite. Luego el código se subió a GitHub. Desde Azure Static Web Apps se conectó el repositorio y Azure creó automáticamente un flujo de despliegue con GitHub Actions. Cada vez que se sube un cambio al repositorio, Azure compila el proyecto, genera la carpeta `dist` y publica la aplicación en una URL pública con HTTPS. La ventaja principal es que la página ya no depende de mi computadora, sino que se ejecuta desde la nube.
