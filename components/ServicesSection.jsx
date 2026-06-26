import { Check } from "lucide-react";
import Link from "next/link";
import { services } from "../data/services.js";

export default function ServicesSection() {
  return (
    <section id="services" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Услуги"
          title="Что я могу собрать"
          text="Делаю простые, понятные и рабочие цифровые решения для заявок, теста идей, презентации услуг и запуска MVP."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="flex flex-col rounded-lg border border-white/10 bg-[#111827] p-4 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:shadow-[0_0_24px_rgba(103,232,249,0.18),0_8px_32px_rgba(0,0,0,0.4)]"
              >
                <div className="mb-4 flex items-start gap-3">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-slate-400">{service.text}</p>
                  </div>
                </div>

                <ul className="flex-1 grid gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
                        <Check size={10} strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500">Срок</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{service.deadline}</p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition hover:bg-amber-300/18 active:translate-y-px"
                  >
                    Подробнее
                  </Link>
                </div>
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
    <div className="max-w-4xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{text}</p>
    </div>
  );
}
