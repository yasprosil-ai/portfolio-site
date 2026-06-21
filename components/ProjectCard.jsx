"use client";

import { ArrowRight, FileText } from "lucide-react";
import { useState } from "react";
import ProjectDetails from "./ProjectDetails.jsx";

export default function ProjectCard({ project, primaryHref = "#contact", secondaryHref = "#contact" }) {
  const Icon = project.icon;
  const finalPrimaryHref = project.primaryHref ?? primaryHref;
  const finalSecondaryHref = project.secondaryHref ?? secondaryHref;
  const primaryExternal = isExternalHref(finalPrimaryHref);
  const secondaryExternal = isExternalHref(finalSecondaryHref);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#121d2d]">
        <a
          href={finalPrimaryHref}
          target={primaryExternal ? "_blank" : undefined}
          rel={primaryExternal ? "noreferrer" : undefined}
          className={`relative block overflow-hidden bg-[#0B0F17] ${project.imageContain ? "aspect-video" : "min-h-56"}`}
          aria-label={`Открыть проект ${project.title}`}
        >
          <img
            src={project.image}
            alt={`Визуальное превью проекта: ${project.title}`}
            className={`w-full transition duration-700 group-hover:scale-[1.04] ${project.imageContain ? "h-full object-contain" : "h-full min-h-56 object-cover"}`}
            loading="lazy"
          />
          <div className="absolute left-4 top-4 rounded-lg border border-white/12 bg-black/45 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
            {project.status}
          </div>
        </a>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
              {project.category}
            </span>
            <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300">
              <Icon size={19} strokeWidth={1.8} />
            </span>
          </div>

          <h3 className="text-2xl font-semibold leading-tight text-white">{project.title}</h3>
          <p className="mt-4 text-sm leading-6 text-slate-300">{project.description}</p>

          <div className="mt-5 grid gap-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-sm text-slate-400">
                <span className="h-px w-5 bg-cyan-300/60" />
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={finalPrimaryHref}
              target={primaryExternal ? "_blank" : undefined}
              rel={primaryExternal ? "noreferrer" : undefined}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
            >
              {project.primaryLabel}
              <ArrowRight size={17} />
            </a>
            <a
              href={finalSecondaryHref}
              target={secondaryExternal ? "_blank" : undefined}
              rel={secondaryExternal ? "noreferrer" : undefined}
              className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/12 px-4 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/6 active:translate-y-px"
            >
              {project.secondaryLabel}
            </a>
            {project.details && (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="inline-grid size-11 place-items-center rounded-lg border border-white/12 text-slate-400 transition hover:border-white/28 hover:text-white active:translate-y-px"
                aria-label="Подробнее о проекте"
              >
                <FileText size={16} />
              </button>
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

function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}
