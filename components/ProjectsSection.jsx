"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projectCategories, projects } from "../data/projects.js";

const projectsByCategory = projectCategories.map((category) => ({
  category,
  items: projects.filter((project) => project.category === category),
}));

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeGroup = projectsByCategory[activeIndex];

  const showPrev = () => {
    setActiveIndex((current) => (current === 0 ? projectsByCategory.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === projectsByCategory.length - 1 ? 0 : current + 1));
  };

  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionIntro
            eyebrow="Проекты"
            title="Категории работ в удобной витрине"
            text="На главной показываю по три проекта в выбранной категории. Все работы собраны на отдельной странице."
          />
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-3">
          {projectsByCategory.map((group, index) => (
            <button
              key={group.category}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                index === activeIndex
                  ? "bg-white text-slate-950"
                  : "border border-white/10 bg-white/[0.03] text-slate-300 hover:border-white/24 hover:text-white"
              }`}
            >
              {group.category}
            </button>
          ))}

          <div className="ml-auto flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={showPrev}
              className="inline-grid size-11 place-items-center rounded-lg border border-white/12 text-white transition hover:border-cyan-300/30 hover:bg-white/5"
              aria-label="Предыдущая категория"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={showNext}
              className="inline-grid size-11 place-items-center rounded-lg border border-white/12 text-white transition hover:border-cyan-300/30 hover:bg-white/5"
              aria-label="Следующая категория"
            >
              <ChevronRight size={18} />
            </button>
            <Link
              href="/projects"
              className="inline-flex min-h-12 w-fit items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
            >
              Посмотреть все работы
            </Link>
          </div>
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-5 lg:p-6">
          <div className="mb-6 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Сейчас выбрано</p>
              <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{activeGroup.category}</h3>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-400">
              Три проекта в ряд для быстрого просмотра. Полный список откроется на отдельной странице.
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-3">
            {activeGroup.items.slice(0, 3).map((project) => (
              <ProjectCard key={project.slug} project={project} primaryHref="#contact" secondaryHref="/projects" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{text}</p>
    </div>
  );
}
