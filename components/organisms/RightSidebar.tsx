/*
  Organismo RightSidebar.
  Menú derecho fijo con enlaces a redes sociales.
*/

import { socialLinks } from "@/data/portfolioData";
import SocialIcon from "../atoms/SocialIcon";

export default function RightSidebar() {
  return (
    <aside className="hidden h-[calc(100vh-48px)] w-[70px] items-center justify-center rounded-3xl border border-slate-800 bg-slate-900 p-4 shadow-2xl lg:fixed lg:right-6 lg:top-6 lg:flex">
      <div className="flex flex-col gap-5">
        {socialLinks.map((social) => (
          <SocialIcon
            key={social.name}
            name={social.name}
            url={social.url}
            icon={social.icon}
          />
        ))}
      </div>
    </aside>
  );
}