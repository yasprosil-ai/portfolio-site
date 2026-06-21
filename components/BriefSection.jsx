import { Clock, MessageSquareText, Sparkles } from "lucide-react";
import BriefChat from "./BriefChat.jsx";

const points = [
  {
    icon: MessageSquareText,
    title: "Пара минут",
    text: "Несколько простых вопросов — без анкет и звонков.",
  },
  {
    icon: Sparkles,
    title: "Сразу видишь цену",
    text: "AI прикинет стоимость и что входит в проект.",
  },
  {
    icon: Clock,
    title: "Сергей получит заявку",
    text: "Готовый бриф уйдёт мне — отвечу быстро.",
  },
];

export default function BriefSection() {
  return (
    <section id="brief" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Расскажи о задаче</p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">
              Не знаешь, что именно тебе нужно? Спроси у ИИ
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Опиши задачу своими словами — мой AI-менеджер задаст пару уточняющих вопросов, подскажет
              подходящий формат и сразу прикинет стоимость. Заявка автоматически придёт мне.
            </p>

            <div className="mt-8 grid gap-3">
              {points.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.025] p-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{p.title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">{p.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <BriefChat />
        </div>
      </div>
    </section>
  );
}
