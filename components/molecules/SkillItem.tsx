/*
  Molécula SkillItem.
  Combina texto y barra de progreso para representar habilidades, idiomas
  o lenguajes de programación.
*/

import ProgressBar from "../atoms/ProgressBar";

type SkillItemProps = {
  name: string;
  level: number;
};

export default function SkillItem({ name, level }: SkillItemProps) {
  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-slate-200">{name}</span>
        <span className="text-sky-400">{level}%</span>
      </div>

      <ProgressBar value={level} />
    </div>
  );
}