/*
  Organismo LeftSidebar.
  Menú izquierdo fijo.
  Contiene información personal, contacto, idiomas, lenguajes y habilidades extra.
*/

import Image from "next/image";
import {
  extraSkills,
  languages,
  personalInfo,
  programmingLanguages,
} from "@/data/portfolioData";
import SkillItem from "../molecules/SkillItem";
import { Mail, MapPin, Phone } from "lucide-react";

export default function LeftSidebar() {
  return (
    <aside className="hidden h-[calc(100vh-48px)] w-[300px] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-2xl lg:fixed lg:left-6 lg:top-6 lg:block">
      {/* Información principal*/}
      <div className="mb-8 text-center">
        <div className="relative mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-sky-400 bg-white">
          <Image
            src={personalInfo.profileImage}
            alt={personalInfo.name}
            fill
            className="object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-white">{personalInfo.name}</h1>

        <p className="mt-2 text-sm text-sky-400">{personalInfo.title}</p>
      </div>

      {/* Datos de contacto */}
      <div className="mb-8 border-t border-slate-800 pt-6">
        <h2 className="mb-4 text-lg font-bold text-white">Contacto</h2>

        <div className="space-y-3 text-sm text-slate-300">
          <p className="flex items-center gap-3">
            <MapPin className="h-4 w-4 text-sky-400" />
            {personalInfo.city}
          </p>

          <p className="flex items-center gap-3">
            <Phone className="h-4 w-4 text-sky-400" />
            {personalInfo.phone}
          </p>

          <p className="flex items-center gap-3 break-all">
            <Mail className="h-4 w-4 text-sky-400" />
            {personalInfo.email}
          </p>
        </div>
      </div>

      {/* Idiomas */}
      <div className="mb-8 border-t border-slate-800 pt-6">
        <h2 className="mb-4 text-lg font-bold text-white">Idiomas</h2>

        {languages.map((language) => (
          <SkillItem
            key={language.name}
            name={language.name}
            level={language.level}
          />
        ))}
      </div>

      {/* Lenguajes de programación */}
      <div className="mb-8 border-t border-slate-800 pt-6">
        <h2 className="mb-4 text-lg font-bold text-white">
          Lenguajes de programación
        </h2>

        {programmingLanguages.map((language) => (
          <SkillItem
            key={language.name}
            name={language.name}
            level={language.level}
          />
        ))}
      </div>

      {/* Habilidades extra */}
      <div className="border-t border-slate-800 pt-6">
        <h2 className="mb-4 text-lg font-bold text-white">Habilidades extra</h2>

        <div className="flex flex-wrap gap-2">
          {extraSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-slate-800 px-3 py-2 text-xs text-slate-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}