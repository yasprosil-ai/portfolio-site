"use client";

import { Youtube } from "lucide-react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails.jsx";

export default function ProjectCard({ project }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-[#121d2d] hover:shadow-[0_0_24px_rgba(103,232,249,0.18),0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="relative aspect-video overflow-hidden bg-[#0B0F17]">
          <img
            src={project.image}
            alt={`Превью проекта: ${project.title}`}
            className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${
              project.imageContain ? "object-contain" : "object-cover"
            }`}
            loading="lazy"
          />
          <span className="absolute left-3 top-3 rounded-md border border-white/20 bg-black/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        <div className="flex flex-col gap-3 p-4 sm:p-5">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {project.title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="relative overflow-hidden rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition hover:bg-amber-300/18 active:translate-y-px"
            >
              <span className="service-btn-glow" />
              <span className="relative z-10">Подробнее</span>
            </button>

            {project.youtubeHref ? (
              <a
                href={project.youtubeHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF0000] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#CC0000] active:translate-y-px"
              >
                <Youtube size={13} />
                YouTube
              </a>
            ) : (
              <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-600">
                <Youtube size={13} />
                YouTube
              </span>
            )}
          </div>
        </div>
      </article>

      {showDetails && (
        <ProjectDetails project={project} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}
