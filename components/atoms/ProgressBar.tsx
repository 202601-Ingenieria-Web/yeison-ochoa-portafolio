/*
  Átomo ProgressBar.
  Se usa para mostrar el porcentaje de dominio de idiomas y lenguajes.
*/

type ProgressBarProps = {
  value: number;
};

export default function ProgressBar({ value }: ProgressBarProps) {
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-slate-700">
      <div
        className="h-full rounded-full bg-sky-400"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}