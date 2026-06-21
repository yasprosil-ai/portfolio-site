"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

export default function ProjectDetails({ project, onClose }) {
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
        {/* Шапка */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">О проекте</p>
            <h2 className="mt-1 text-xl font-semibold text-white">{project.title}</h2>
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

        {/* Контент */}
        <div className="overflow-y-auto p-5 sm:p-6">
          <div className="grid gap-6">
            {project.details.map((block) => (
              <div key={block.heading}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300/80">
                  {block.heading}
                </p>
                <ul className="grid gap-2">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <span className="mt-2 h-px w-4 shrink-0 bg-cyan-300/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
