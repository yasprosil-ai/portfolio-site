"use client";

import Link from "next/link";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data/projects.js";

const FEATURED_SLUGS = [
  "portfolio-landing",
  "remkvartira-landing",
  "legal-services-landing",
  "margolash-website",
  "print-calculator-bot",
  "dental-implant-landing",
];

const featuredProjects = FEATURED_SLUGS
  .map((slug) => projects.find((p) => p.slug === slug))
  .filter(Boolean);

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Портфолио
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Портфолио
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Несколько примеров сайтов, ботов и цифровых продуктов, которые я собирал под реальные задачи.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 lg:inline-flex min-h-12 w-fit items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
          >
            Смотреть всё портфолио
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-8 lg:hidden">
          <Link
            href="/projects"
            className="flex min-h-12 w-full items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
          >
            Смотреть всё портфолио
          </Link>
        </div>
      </div>
    </section>
  );
}
