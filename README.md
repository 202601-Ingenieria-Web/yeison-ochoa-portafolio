# Portafolio Personal - Yeison

## Descripción del proyecto

Este proyecto corresponde al Proyecto Evaluativo de la asignatura Ingeniería Web.

El objetivo principal es desarrollar un portafolio personal basado en un diseño de Figma, utilizando tecnologías modernas de desarrollo frontend como NextJS, React, TypeScript y TailwindCSS.

El portafolio funciona como una hoja de vida digital donde se presenta información personal, datos de contacto, conocimientos, educación, habilidades, redes sociales y una sección de proyectos desarrollados.

## Propósito

El propósito de este proyecto es aplicar los conocimientos adquiridos en clase sobre desarrollo web frontend, maquetación de interfaces, componentes reutilizables, atomic design, estilos con TailwindCSS, uso de íconos, manejo de modales y despliegue de aplicaciones web en Vercel.

Además, el proyecto permite mostrar de forma organizada el perfil profesional del estudiante y algunos proyectos realizados durante su proceso académico.

## Tecnologías utilizadas

- NextJS
- React
- TypeScript
- TailwindCSS
- Lucide React
- React Icons
- Vercel

## Estructura del proyecto

El proyecto está organizado de la siguiente forma:

src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── ProgressBar.tsx
│   │   ├── SectionTitle.tsx
│   │   └── SocialIcon.tsx
│   │
│   ├── molecules/
│   │   ├── SkillItem.tsx
│   │   ├── KnowledgeCard.tsx
│   │   ├── EducationCard.tsx
│   │   └── PortfolioCard.tsx
│   │
│   ├── organisms/
│   │   ├── LeftSidebar.tsx
│   │   ├── RightSidebar.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── KnowledgeSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── Footer.tsx
│   │
│   └── ui/
│       └── Modal.tsx
│
├── data/
│   └── portfolioData.ts

## Organización por Atomic Design

El proyecto utiliza una estructura basada en Atomic Design.

### Atoms

Son componentes pequeños y reutilizables, como botones, barras de progreso, títulos de sección e íconos sociales.

### Molecules

Son componentes formados por varios átomos, como tarjetas de conocimientos, educación, habilidades y proyectos.

### Organisms

Son secciones completas de la interfaz, como el menú izquierdo, menú derecho, perfil, conocimientos, educación, portafolio y footer.

Esta organización permite tener un código más ordenado, reutilizable y fácil de mantener.

## Secciones principales

El portafolio contiene las siguientes secciones:

- Menú izquierdo fijo con información personal.
- Datos de contacto.
- Idiomas con porcentaje de dominio.
- Lenguajes de programación con porcentaje de dominio.
- Habilidades extra.
- Sección de perfil con descripción personal.
- Modal con información adicional del perfil.
- Sección de conocimientos.
- Sección de educación.
- Sección de portafolio con scroll horizontal.
- Modales con detalles de cada proyecto.
- Menú derecho fijo con enlaces a redes sociales.
- Footer personalizado.

## Proyectos incluidos en el portafolio

El portafolio incluye algunos proyectos académicos y personales, entre ellos:

- Aplicativo de inscripciones a posgrados.
- Gestión de finanzas personales.
- Análisis de trayectoria con visión por computador.
- Clasificador de frutas con Machine Learning.

Cada proyecto tiene una imagen, un título, una descripción corta y un botón para ver más información.

## Instalación y ejecución local

Para ejecutar el proyecto de forma local, primero se debe clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Luego se entra a la carpeta del proyecto:

```bash
cd nombre-del-proyecto
```

Después se instalan las dependencias:

```bash
npm install
```

Finalmente se ejecuta el servidor de desarrollo:

```bash
npm run dev
```

El proyecto estará disponible en:

```txt
http://localhost:3000
```

## Comandos disponibles

### Ejecutar en modo desarrollo

```bash
npm run dev
```

### Generar versión de producción

```bash
npm run build
```

### Ejecutar versión de producción

```bash
npm start
```

## Despliegue

El proyecto será desplegado en Vercel.

Enlace del despliegue:

```txt
https://nombre-apellidos.vercel.app
```

## Repositorio

Enlace del repositorio:

```txt
https://github.com/yeison8a/nombre-apellidos-portafolio
```

## Autor

Yeison  
Estudiante de Ingeniería de Sistemas  
Proyecto realizado para la asignatura Ingeniería Web.

## Estado del proyecto

Proyecto en desarrollo y preparado para entrega académica.

## Comentarios finales

Este portafolio fue desarrollado con el objetivo de practicar la creación de interfaces modernas usando componentes reutilizables, estilos con TailwindCSS y una estructura organizada basada en Atomic Design.
