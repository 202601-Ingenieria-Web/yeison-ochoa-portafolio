/*
  Molécula KnowledgeCard.
  Card reutilizable para mostrar un conocimiento con ícono, título y descripción.
*/

import { LucideIcon } from "lucide-react";

type KnowledgeCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function KnowledgeCard({
  title,
  description,
  icon: Icon,
}: KnowledgeCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-sky-400">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10">
        <Icon className="h-7 w-7 text-sky-400" />
      </div>

      <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>

      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}