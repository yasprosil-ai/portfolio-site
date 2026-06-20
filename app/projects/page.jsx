import Link from "next/link";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProjectCard from "../../components/ProjectCard.jsx";
import { projectCategories, projects } from "../../data/projects.js";

export const metadata = {
  title: "Все работы | Я спросил у ИИ",
  description: "Все проекты Я спросил у ИИ: сайты, лендинги, Telegram-боты, мини-аппы и MVP.",
};

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#0F1628]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Все работы</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Полная подборка проектов по пяти категориям
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-300">
              Здесь собраны все кейсы и концепты: сайты, лендинги, Telegram-боты, мини-аппы и MVP.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
              >
                Вернуться на главную
              </Link>
              <a
                href="#all-projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5 active:translate-y-px"
              >
                Смотреть список
              </a>
            </div>
          </div>

          <div id="all-projects" className="grid gap-12">
            {projectCategories.map((category) => {
              const items = projects.filter((project) => project.category === category);

              return (
                <section key={category} className="grid gap-6">
                  <div className="flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Категория</p>
                      <h2 className="mt-3 text-3xl font-semibold text-white">{category}</h2>
                    </div>
                    <p className="max-w-2xl text-sm leading-6 text-slate-400">
                      {items.length} {items.length === 1 ? "проект" : items.length < 5 ? "проекта" : "проектов"} в этой категории.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {items.map((project) => (
                      <ProjectCard key={project.slug} project={project} primaryHref="/#contact" secondaryHref="/#contact" />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
