"use client";

/*
  Organismo PortfolioSection.
  Sección de proyectos con scroll horizontal.
  Cada proyecto tiene un botón "Saber más" que abre un modal con información detallada.
*/

import { useState } from "react";
import { projects } from "@/data/portfolioData";
import SectionTitle from "../atoms/SectionTitle";
import PortfolioCard from "../molecules/PortafolioCard";
import Modal from "../ui/Modal";
import Button from "../atoms/Button";

type SelectedProject = {
  title: string;
  image: string;
  description: string;
  details: string;
  github: string;
};

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] =
    useState<SelectedProject | null>(null);

  return (
    <section id="portafolio" className="rounded-3xl bg-slate-950 py-4">
      <SectionTitle subtitle="Mis trabajos" title="Portafolio de proyectos" />

      {/* 
        Contenedor con scroll horizontal.
      */}
      <div className="flex gap-6 overflow-x-auto pb-6">
        {projects.map((project) => (
          <PortfolioCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            onOpenModal={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        title={selectedProject?.title || ""}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div>
            <p className="mb-5">{selectedProject.details}</p>

            <Button text="Ver en GitHub" href={selectedProject.github} />
          </div>
        )}
      </Modal>
    </section>
  );
}