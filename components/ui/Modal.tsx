"use client";

/*
  Componente Modal.
  Se utiliza para mostrar información adicional del perfil y de los proyectos.
*/

import { X } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ isOpen, title, children, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-slate-700 bg-slate-950 p-6 shadow-2xl">
        {/* Botón para cerrar el diálogo */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full bg-slate-800 p-2 text-slate-300 transition hover:bg-red-500 hover:text-white"
          aria-label="Cerrar modal"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="mb-4 pr-10 text-2xl font-bold text-white">{title}</h3>

        <div className="text-sm leading-7 text-slate-300">{children}</div>
      </div>
    </div>
  );
}