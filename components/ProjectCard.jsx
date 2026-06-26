"use client";

import { ArrowRight, ExternalLink, Youtube } from "lucide-react";

export default function ProjectCard({ project }) {
  const Icon = project.icon;
  const externalProjectHref =
    project.primaryHref && isExternalHref(project.primaryHref)
      ? project.primaryHref
      : null;

  const imageEl = (
    <img
      src={project.image}
      alt={`Визуальное превью проекта: ${project.title}`}
      className={`h-full w-full transition duration-700 group-hover:scale-[1.04] ${
        project.imageContain ? "object-contain" : "object-cover"
      }`}
      loading="lazy"
    />
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:bg-[#121d2d] hover:shadow-[0_0_24px_rgba(103,232,249,0.18),0_8px_32px_rgba(0,0,0,0.4)]">
      {externalProjectHref ? (
        <a
          href={externalProjectHref}
          target="_blank"
          rel="noreferrer"
          className="relative block aspect-video overflow-hidden bg-[#0B0F17]"
          aria-label={`Открыть проект ${project.title}`}
          tabIndex={-1}
        >
          {imageEl}
        </a>
      ) : (
        <div className="relative aspect-video overflow-hidden bg-[#0B0F17]">
          {imageEl}
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-5 flex items-center justify-between gap-3">
          <span className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
            {project.category}
          </span>
          <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-300">
            <Icon size={19} strokeWidth={1.8} />
          </span>
        </div>

        <h3 className="text-2xl font-semibold leading-tight text-white">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 grid gap-2">
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="mt-2.5 h-px w-5 shrink-0 bg-cyan-300/60" />
              {feature}
            </div>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2 pt-6">
          <a
            href="#contact"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-white text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
          >
            Обсудить похожий проект
            <ArrowRight size={15} />
          </a>

          {(externalProjectHref || project.youtubeHref) && (
            <div className="flex gap-2">
              {externalProjectHref && (
                <a
                  href={externalProjectHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 min-h-10 items-center justify-center gap-1.5 rounded-lg border border-white/12 text-sm font-semibold text-slate-300 transition hover:border-white/28 hover:text-white active:translate-y-px"
                >
                  Открыть проект
                  <ExternalLink size={13} />
                </a>
              )}
              {project.youtubeHref && (
                <a
                  href={project.youtubeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 min-h-10 items-center justify-center gap-1.5 rounded-lg border border-white/12 text-sm font-semibold text-slate-300 transition hover:border-white/28 hover:text-white active:translate-y-px"
                >
                  <Youtube size={13} />
                  Смотреть обзор
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function isExternalHref(href) {
  return href.startsWith("http://") || href.startsWith("https://");
}
