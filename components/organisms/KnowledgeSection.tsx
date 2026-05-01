/*
  Organismo KnowledgeSection.
  Sección de conocimientos.
  Cada conocimiento se muestra usando cards reutilizables.
*/

import { knowledge } from "@/data/portfolioData";
import SectionTitle from "../atoms/SectionTitle";
import KnowledgeCard from "../molecules/KnowledgeCard";

export default function KnowledgeSection() {
  return (
    <section id="conocimientos" className="rounded-3xl bg-slate-950 py-4">
      <SectionTitle
        subtitle="Lo que conozco"
        title="Conocimientos principales"
      />

      <div className="grid gap-6 md:grid-cols-2">
        {knowledge.map((item) => (
          <KnowledgeCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
}