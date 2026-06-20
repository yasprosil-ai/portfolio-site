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

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
