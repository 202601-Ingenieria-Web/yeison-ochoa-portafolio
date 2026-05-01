/*
  Átomo SocialIcon.
  Componente reutilizable para mostrar enlaces a redes sociales con íconos.
*/

import type { ElementType } from "react";

type SocialIconProps = {
  name: string;
  url: string;
  icon: ElementType;
};

export default function SocialIcon({ name, url, icon: Icon }: SocialIconProps) {
  return (
    <a
      href={url}
      target="_blank"
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:border-sky-400 hover:bg-sky-400"
      aria-label={name}
    >
      <Icon className="h-5 w-5 text-sky-400 transition-colors duration-300 group-hover:text-slate-950" />
    </a>
  );
}