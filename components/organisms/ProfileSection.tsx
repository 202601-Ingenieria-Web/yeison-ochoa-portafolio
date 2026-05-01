"use client";

/*
  Organismo ProfileSection.
  Sección principal del perfil profesional.
  Incluye un botón que abre un diálogo.
*/

import { useState } from "react";
import Image from "next/image";
import { personalInfo } from "@/data/portfolioData";
import Button from "../atoms/Button";
import Modal from "../ui/Modal";

export default function ProfileSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="perfil"
      className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950 p-8 shadow-2xl md:p-12"
    >
      <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
            Portafolio personal
          </p>

          <h2 className="mb-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Hola, soy <span className="text-sky-400">{personalInfo.name}</span>
          </h2>

          <p className="mb-8 max-w-2xl text-base leading-8 text-slate-300">
            {personalInfo.shortDescription}
          </p>

          <Button text="Conocer más" onClick={() => setIsModalOpen(true)} />
        </div>

        <div className="flex justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-full border-8 border-white bg-white shadow-2xl">
            <Image
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        title="Más sobre mí"
        onClose={() => setIsModalOpen(false)}
      >
        <p>{personalInfo.longDescription}</p>
      </Modal>
    </section>
  );
}