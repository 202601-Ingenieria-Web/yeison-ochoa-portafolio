/*
  Átomo SectionTitle.
  Título reutilizable para separar visualmente cada sección del contenido central.
*/

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-sm font-semibold uppercase tracking-[4px] text-sky-400">
        {subtitle}
      </p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-sky-400" />
    </div>
  );
}