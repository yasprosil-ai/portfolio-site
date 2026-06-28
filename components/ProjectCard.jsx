"use client";

import { useState } from "react";
import ProjectDetails from "./ProjectDetails.jsx";

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className="portfolio-card group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-[#121d2d] hover:shadow-[0_0_24px_rgba(103,232,249,0.18),0_8px_32px_rgba(0,0,0,0.4)]">
        {project.primaryHref ? (
          <a
            href={project.primaryHref}
            target="_blank"
            rel="noreferrer"
            className="relative block aspect-video overflow-hidden bg-[#0B0F17]"
            tabIndex={-1}
            aria-label={`Открыть сайт проекта ${project.title}`}
          >
            <img
              src={project.image}
              alt={`Превью проекта: ${project.title}`}
              className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${
                project.imageContain ? "object-contain" : "object-cover"
              }`}
              loading="lazy"
            />
            <span className="absolute left-3 top-3 rounded-full border border-cyan-300/25 bg-slate-950/65 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/95 backdrop-blur-sm">
              {project.displayCategory ?? project.category}
            </span>
          </a>
        ) : (
          <div className="relative aspect-video overflow-hidden bg-[#0B0F17]">
            <img
              src={project.image}
              alt={`Превью проекта: ${project.title}`}
              className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${
                project.imageContain ? "object-contain" : "object-cover"
              }`}
              loading="lazy"
            />
            <span className="absolute left-3 top-3 rounded-full border border-cyan-300/25 bg-slate-950/65 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-cyan-200/95 backdrop-blur-sm">
              {project.displayCategory ?? project.category}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-2 p-3 sm:p-4">
          <p className="text-base leading-7 text-slate-300">
            {project.cardSummary ?? project.description}
          </p>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="relative overflow-hidden rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition hover:bg-amber-300/18 active:translate-y-px"
            >
              <span className="service-btn-glow" />
              <span className="relative z-10">Смотреть кейс</span>
            </button>
          </div>
        </div>
      </article>

      {showDetails && (
        <ProjectDetails project={project} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}
