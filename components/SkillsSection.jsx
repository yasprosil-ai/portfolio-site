import { skillGroups } from "../data/skills.js";

export default function SkillsSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <SectionIntro
            eyebrow="Инструменты"
            title="Навыки и инструменты"
            text="Использую AI и современные инструменты, чтобы быстро собирать рабочие решения."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="rounded-lg border border-white/10 bg-[#111827] p-5">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <h3 className="font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-lg border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">{text}</p>
    </div>
  );
}
