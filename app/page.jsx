import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import ProjectsSection from "../components/ProjectsSection.jsx";
import ProcessSection from "../components/ProcessSection.jsx";
import SkillsSection from "../components/SkillsSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import BriefSection from "../components/BriefSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <ProjectsSection />
        <ProcessSection />
        <SkillsSection />
        <AboutSection />
        <BriefSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
