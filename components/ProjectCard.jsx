"use client";

import { ArrowRight, FileText, Youtube } from "lucide-react";
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
          className="relative block aspect-video overflow-hidden bg-[#0B0F17]"
          aria-label={`Открыть проект ${project.title}`}
        >
          <img
            src={project.image}
            alt={`Визуальное превью проекта: ${project.title}`}
            className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${project.imageContain ? "object-contain" : "object-cover"}`}
            loading="lazy"
          />
        </a>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                {project.category}
              </span>
              {project.youtubeHref ? (
                <a
                  href={project.youtubeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#FF0000] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#CC0000] active:translate-y-px"
                >
                  <Youtube size={13} />
                  Смотреть обзор
                </a>
              ) : (
                <span className="inline-flex cursor-not-allowed items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-600">
                  <Youtube size={13} />
                  Скоро обзор
                </span>
              )}
            </div>
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

          <div className="mt-6 flex flex-col gap-2">
            <a
              href={finalPrimaryHref}
              target={primaryExternal ? "_blank" : undefined}
              rel={primaryExternal ? "noreferrer" : undefined}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
            >
              {project.primaryLabel}
              <ArrowRight size={15} />
            </a>
            {project.details ? (
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-white/12 text-sm font-semibold text-slate-300 transition hover:border-white/28 hover:text-white active:translate-y-px"
              >
                <FileText size={15} />
                Какую проблему решает?
              </button>
            ) : (
              <a
                href={finalSecondaryHref}
                target={secondaryExternal ? "_blank" : undefined}
                rel={secondaryExternal ? "noreferrer" : undefined}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-white/12 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/6 active:translate-y-px"
              >
                {project.secondaryLabel}
              </a>
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
