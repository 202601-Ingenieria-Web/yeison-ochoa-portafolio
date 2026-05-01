/*
  Archivo central de datos del portafolio.
  La idea es separar la información del diseño para que los componentes sean reutilizables
  y el código sea más fácil de mantener.
*/

import {
  Code,
  Database,
  Brain,
  Globe,
  LayoutDashboard,
  Mail,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export const personalInfo = {
  name: "Yeison Ochoa Cárdenas",
  title: "Estudiante de Ingeniería de Sistemas",
  city: "Medellín, Colombia",
  phone: "+57 300 000 0000",
  email: "yeison.ochoa@udea.edu.co",
  profileImage: "/profile.png",
  shortDescription:
    "Soy estudiante de Ingeniería de Sistemas con interés en el desarrollo web, bases de datos, inteligencia artificial y creación de soluciones digitales funcionales.",
  longDescription:
    "Me gusta construir proyectos que combinen diseño, lógica y tecnología. He trabajado en aplicaciones web, sistemas de gestión, proyectos académicos de inteligencia artificial, bases de datos y despliegue de aplicaciones en la nube.",
};

export const languages = [
  {
    name: "Español",
    level: 100,
  },
  {
    name: "Inglés",
    level: 55,
  },
];

export const programmingLanguages = [
  {
    name: "JavaScript",
    level: 80,
  },
  {
    name: "TypeScript",
    level: 70,
  },
  {
    name: "Python",
    level: 75,
  },
  {
    name: "Java",
    level: 60,
  },
  {
    name: "SQL",
    level: 70,
  },
];

export const extraSkills = [
  "Trabajo en equipo",
  "Responsabilidad",
  "Resolución de problemas",
  "Aprendizaje rápido",
  "Diseño de interfaces",
  "Gestión de proyectos",
];

export const knowledge = [
  {
    title: "Desarrollo Frontend",
    description:
      "Construcción de interfaces modernas, responsivas y reutilizables usando React, NextJS, Astro y TailwindCSS.",
    icon: Code,
  },
  {
    title: "Bases de Datos",
    description:
      "Diseño y manejo de bases de datos relacionales y no relacionales como PostgreSQL, MongoDB y MySQL.",
    icon: Database,
  },
  {
    title: "Inteligencia Artificial",
    description:
      "Interés en modelos predictivos, chatbots, análisis de datos y soluciones apoyadas en aprendizaje automático.",
    icon: Brain,
  },
  {
    title: "Despliegue Web",
    description:
      "Publicación de aplicaciones web en plataformas como Vercel, Render y servicios conectados con bases de datos.",
    icon: Globe,
  },
];

export const education = [
  {
    institution: "Universidad de Antioquia",
    date: "2026 - Actualidad",
    title: "Ingeniería de Sistemas",
    description:
      "Formación en programación, bases de datos, arquitectura de software, sistemas operativos, desarrollo web e inteligencia artificial.",
  },
  {
    institution: "Proyectos académicos",
    date: "2020 - 2026",
    title: "Desarrollo de soluciones tecnológicas",
    description:
      "Participación en proyectos de frontend, backend, simulación, análisis de datos y sistemas de información.",
  },
];

export const projects = [
  {
    title: "Aplicativo de Inscripciones a Posgrados",
    image: "/project-aplicativo.png",
    description:
      "Aplicación web para gestionar programas de posgrado, aspirantes, inscripciones, documentos y procesos de admisión.",
    details:
      "Este proyecto permite administrar el proceso de inscripción a programas de posgrado, desde el registro de aspirantes hasta la revisión de documentos y seguimiento del estado de admisión. Fue desarrollado con una interfaz clara para facilitar la gestión académica y administrativa.",
    github: "https://github.com/yeison8a/SIGEPOS-UdeA-Front-end-2026-1",
  },
  {
    title: "Gestión de Finanzas Personales",
    image: "/project-aplicativo2.png",
    description:
      "Aplicación web para registrar ingresos, gastos, presupuestos y visualizar el estado financiero personal de forma clara.",
    details:
      "Este proyecto permite llevar un control organizado de las finanzas personales. Incluye el registro de ingresos y gastos, clasificación por categorías, consulta de movimientos recientes, seguimiento de presupuestos y visualización de reportes para entender mejor el comportamiento financiero del usuario.",
    github: "https://github.com/yeison8a/FinanzasPersonalesFront",
  },
  {
    title: "Análisis de Trayectoria con Visión por Computador",
    image: "/project-aplicativo4.png",
    description:
      "Proyecto en Python que detecta una bola en movimiento dentro de un video y analiza su trayectoria, velocidad y aceleración.",
    details:
      "Este proyecto utiliza OpenCV para procesar un video, detectar una bola roja mediante segmentación de color en HSV y calcular su posición en centímetros a partir de una escala real. Además, permite visualizar la trayectoria sobre el video, calcular velocidades y aceleraciones, y generar gráficas comparativas de posición, velocidad y aceleración usando NumPy y Matplotlib. Es una aplicación práctica de visión por computador y análisis físico del movimiento.",
    github: "https://github.com/yeison8a/LAB1_IMG",
  },
  {
    title: "Clasificador de Frutas con Machine Learning",
    image: "/project-aplicativo3.png",
    description:
      "Aplicación en Python que clasifica imágenes de frutas usando visión por computador, descriptores visuales y modelos SVM.",
    details:
      "Este proyecto utiliza el dataset Fruits-360 para entrenar modelos de clasificación de frutas. Se aplican técnicas de visión por computador como HOG, LBP e histogramas de color para extraer características de las imágenes. Luego, se entrenan modelos SVM y se comparan sus resultados mediante métricas como accuracy, matriz de confusión y reportes de clasificación. Además, incluye una interfaz gráfica con Tkinter que permite cargar una imagen y obtener la predicción de la fruta usando el descriptor seleccionado.",
    github: "https://github.com/yeison8a/LAB2_IMG",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yeison8a",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yeison8a/",
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: "mailto:yeison,ochoa@udea.edu.co",
    icon: Mail,
  },
];

export const menuItems = [
  {
    label: "Perfil",
    href: "#perfil",
    icon: LayoutDashboard,
  },
  {
    label: "Conocimientos",
    href: "#conocimientos",
    icon: Code,
  },
  {
    label: "Educación",
    href: "#educacion",
    icon: Database,
  },
  {
    label: "Portafolio",
    href: "#portafolio",
    icon: Globe,
  },
];