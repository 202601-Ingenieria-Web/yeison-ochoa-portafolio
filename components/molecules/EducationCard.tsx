/*
  Molécula EducationCard.
  Card para mostrar información educativa del estudiante.
*/

type EducationCardProps = {
  institution: string;
  date: string;
  title: string;
  description: string;
};

export default function EducationCard({
  institution,
  date,
  title,
  description,
}: EducationCardProps) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <h3 className="text-xl font-bold text-white">{institution}</h3>

        <span className="w-fit rounded-full bg-sky-400/10 px-4 py-1 text-sm font-semibold text-sky-400">
          {date}
        </span>
      </div>

      <h4 className="mb-3 text-lg font-semibold text-slate-200">{title}</h4>

      <p className="text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}