/*
  Organismo EducationSection.
  Sección que presenta la formación académica.
*/

import { education } from "@/data/portfolioData";
import SectionTitle from "../atoms/SectionTitle";
import EducationCard from "../molecules/EducationCard";

export default function EducationSection() {
  return (
    <section id="educacion" className="rounded-3xl bg-slate-950 py-4">
      <SectionTitle subtitle="Mi formación" title="Educación" />

      <div className="space-y-6">
        {education.map((item) => (
          <EducationCard
            key={item.institution}
            institution={item.institution}
            date={item.date}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}