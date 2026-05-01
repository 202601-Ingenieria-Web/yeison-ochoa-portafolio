import LeftSidebar from "@/components/organisms/LeftSidebar";
import RightSidebar from "@/components/organisms/RightSidebar";
import ProfileSection from "@/components/organisms/ProfileSection";
import KnowledgeSection from "@/components/organisms/KnowledgeSection";
import EducationSection from "@/components/organisms/EducationSection";
import PortfolioSection from "@/components/organisms/PortfolioSection";
import Footer from "@/components/organisms/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex max-w-[1500px] gap-6 px-4 py-6">
        {/* Menú izquierdo fijo con información personal */}
        <LeftSidebar />

        {/* Contenido central con scroll vertical */}
        <section className="min-h-screen flex-1 space-y-10 overflow-hidden lg:ml-[320px] lg:mr-[90px]">
          <ProfileSection />
          <KnowledgeSection />
          <EducationSection />
          <PortfolioSection />
          <Footer />
        </section>

        {/* Menú derecho fijo con redes sociales */}
        <RightSidebar />
      </div>
    </main>
  );
}