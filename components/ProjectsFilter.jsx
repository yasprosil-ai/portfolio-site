"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { projectCategories, projects } from "../data/projects.js";

export default function ProjectsFilter() {
  const [active, setActive] = useState("Все");

  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {["Все", ...projectCategories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`min-h-10 rounded-lg border px-4 text-sm font-semibold transition active:translate-y-px ${
              active === cat
                ? "border-cyan-300/50 bg-cyan-300/12 text-cyan-200"
                : "border-white/12 bg-transparent text-slate-300 hover:border-white/28 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="mt-8 flex flex-col items-center justify-center gap-5 py-16 text-center">
          <span className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
            В разработке
          </span>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Работы в этой категории появятся скоро. Если уже есть задача — напиши, обсудим.
          </p>
          <a
            href="/#contact"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/6 active:translate-y-px"
          >
            Обсудить задачу
          </a>
        </div>
      ) : (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </>
  );
}
