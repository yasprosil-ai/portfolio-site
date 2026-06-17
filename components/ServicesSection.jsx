import { services } from "../data/services.js";

export default function ServicesSection() {
  return (
    <section id="services" className="border-y border-white/8 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8">
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
                className="group rounded-lg border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/32 hover:bg-[#121d2d]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-300">{service.text}</p>
                <ul className="mt-5 grid gap-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className="size-1.5 rounded-full bg-cyan-300/80" />
                      {item}
                    </li>
                  ))}
                </ul>
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
