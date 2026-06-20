import { aboutFacts } from "../data/skills.js";

export default function AboutSection() {
  return (
    <section id="about" className="border-y border-white/8 bg-white/[0.015] px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="grid gap-6">
          <SectionIntro eyebrow="Обо мне" title="Быстро превращаю идеи в проверяемые MVP" />
          <PortraitCard />
        </div>

        <div className="grid gap-6">
          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              Я развиваюсь в создании цифровых продуктов с помощью AI-инструментов и вайбкодинга. Мой фокус:
              быстро собирать рабочие решения для сайтов, лендингов, Telegram-ботов, мини-аппов и MVP.
            </p>
            <p>
              Мне интересно превращать идеи в первую понятную версию: сначала собрать рабочий прототип, показать его,
              проверить реакцию и потом уже улучшать дальше.
            </p>
            <p>
              Я не просто делаю красивый экран. Мне важно, чтобы интерфейс помогал объяснить услугу, собрать заявку,
              показать ценность продукта или быстро проверить гипотезу.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {aboutFacts.map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.text} className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#111827] p-4">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-emerald-300/10 text-emerald-200">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <span className="text-sm leading-5 text-slate-300">{fact.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PortraitCard() {
  return (
    <figure className="relative max-w-md overflow-hidden rounded-lg border border-white/10 bg-[#111827] shadow-2xl shadow-black/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.18),transparent_42%)]" />
      <img
        src="/profile-sergey.webp"
        alt="Портрет Сергея, автора проекта Я спросил у ИИ"
        className="relative aspect-[4/5] w-full object-cover object-top grayscale-[12%] saturate-[0.92]"
      />
      <figcaption className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#0B0F17]/82 p-4 backdrop-blur-xl">
        <p className="text-sm font-semibold text-white">Сергей, Я спросил у ИИ</p>
        <p className="mt-1 text-sm text-slate-300">AI-мейкер: сайты, лендинги, Telegram-боты, мини-аппы и MVP</p>
      </figcaption>
    </figure>
  );
}

function SectionIntro({ eyebrow, title }) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
    </div>
  );
}
