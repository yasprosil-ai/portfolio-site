import { processSteps } from "../data/skills.js";

export default function ProcessSection() {
  return (
    <section id="process" className="border-y border-white/8 bg-[#080c13] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Процесс"
          title="Как проходит работа"
          text="Двигаюсь быстро: сначала собираю понятный прототип, потом улучшаю его до рабочей версии."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="process-card reveal-card rounded-lg border border-white/10 bg-[#111827] p-5"
                style={{ "--reveal-delay": `${index * 90}ms` }}
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="process-icon grid size-11 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/8 text-emerald-200">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-semibold text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{step.text}</p>
              </article>
            );
          })}
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
