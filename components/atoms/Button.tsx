"use client";

/*
  Átomo Button.
  Componente reutilizable para botones principales del portafolio.
*/

type ButtonProps = {
  text: string;
  onClick?: () => void;
  href?: string;
};

export default function Button({ text, onClick, href }: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full bg-sky-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-sky-300 hover:scale-105";

  if (href) {
    return (
      <a href={href} className={baseStyles} target="_blank">
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseStyles}>
      {text}
    </button>
  );
}