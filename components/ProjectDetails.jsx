"use client";

import { ArrowRight, X } from "lucide-react";
import { useEffect } from "react";
import { contacts } from "../data/skills.js";

export default function ProjectDetails({ project, onClose }) {
  const openHref = project.primaryHref ?? project.youtubeHref;
  const modalTitle = project.caseStudy?.title ?? project.title;
  const summary =
    project.caseStudy?.subtitle ??
    project.caseStudy?.summary ??
    project.cardSummary ??
    project.description;
  const ctaTitle = project.caseStudy?.ctaTitle;
  const ctaText = project.caseStudy?.ctaText;
  const primaryButtonLabel = project.caseStudy?.primaryButton ?? "Открыть проект";
  const secondaryButtonLabel =
    project.caseStudy?.secondaryButton ?? "Хочу похожий проект";
  const sections = [
    { heading: "Задача", text: project.caseStudy?.task },
    { heading: "Что сделано", text: project.caseStudy?.done },
    { heading: "Результат", text: project.caseStudy?.result },
  ].filter((section) => section.text);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative z-10 flex max-h-[90dvh] w-full max-w-2xl flex-col overflow-hidden rounded-t-[24px] border border-white/10 bg-[#0F1628] shadow-[0_24px_80px_rgba(0,0,0,0.5)] sm:rounded-[24px]">
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
          <div>
            <h2 className="text-xl font-semibold text-white">{modalTitle}</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">{summary}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:border-white/24 hover:text-white"
            aria-label="Закрыть"
          >
            <X size={16} />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          <div className="grid gap-6">
            {sections.map((section) => (
              <div key={section.heading}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                  {section.heading}
                </p>
                <p className="max-w-2xl text-sm leading-7 text-slate-300">
                  {section.text}
                </p>
              </div>
            ))}
          </div>

          {(ctaTitle || ctaText) && (
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              {ctaTitle ? (
                <p className="text-base font-semibold text-white">{ctaTitle}</p>
              ) : null}
              {ctaText ? (
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-300">
                  {ctaText}
                </p>
              ) : null}
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-3">
            {openHref ? (
              <a
                href={openHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
              >
                {primaryButtonLabel}
                <ArrowRight size={15} />
              </a>
            ) : null}
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
            >
              {secondaryButtonLabel}
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
