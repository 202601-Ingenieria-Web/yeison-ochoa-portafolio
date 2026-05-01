"use client";

/*
  Molécula PortfolioCard.
  Card reutilizable para cada proyecto del portafolio.
  Incluye imagen, descripción y botón para abrir un modal con más información.
*/

import Image from "next/image";
import Button from "../atoms/Button";

type PortfolioCardProps = {
  title: string;
  image: string;
  description: string;
  onOpenModal: () => void;
};

export default function PortfolioCard({
  title,
  image,
  description,
  onOpenModal,
}: PortfolioCardProps) {
  return (
    <article className="min-w-[280px] max-w-[280px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl md:min-w-[330px] md:max-w-[330px]">
      <div className="relative h-48 w-full bg-slate-800">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-5">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

        <p className="mb-5 text-sm leading-6 text-slate-300">{description}</p>

        <Button text="Saber más" onClick={onOpenModal} />
      </div>
    </article>
  );
}