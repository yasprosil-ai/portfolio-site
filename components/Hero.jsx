import { ArrowDownRight, ArrowUpRight, CheckCircle2, TerminalSquare } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] w-full max-w-full overflow-x-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="hero-spotlight absolute -top-28 left-1/2 h-[42rem] w-[86rem] max-w-none -translate-x-1/2 opacity-100" />
        <div className="absolute left-1/2 top-0 h-px w-[min(80rem,92vw)] -translate-x-1/2 bg-gradient-to-r from-transparent via-amber-200/70 to-transparent" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[38rem] bg-[radial-gradient(circle,rgba(37,99,235,0.16),transparent_62%)]" />
      </div>

      <div className="mx-auto grid min-h-[calc(96dvh-5rem)] w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:px-8 lg:py-14">
        <div className="min-w-0 max-w-full lg:max-w-4xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100 shadow-[0_0_30px_rgba(245,158,11,0.16)]">
            <span className="size-2 rounded-full bg-amber-300 shadow-[0_0_18px_rgba(251,191,36,0.9)]" />
            Портфолио AI-мейкера
          </p>
          <h1 className="w-full max-w-full break-words text-[2rem] font-semibold leading-[1.08] tracking-normal text-white sm:text-5xl lg:max-w-[48rem] lg:text-[3.65rem]">
            Создаю сайты, лендинги, Telegram-ботов и мини-аппы с помощью AI и вайбкодинга
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Быстро собираю рабочие MVP и цифровые продукты от идеи до первой понятной версии.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-300 via-amber-200 to-indigo-500 px-6 text-sm font-semibold text-slate-950 shadow-[0_18px_52px_rgba(79,70,229,0.28)] transition hover:brightness-110 active:translate-y-px sm:w-auto"
            >
              Смотреть проекты
              <ArrowDownRight size={18} />
            </a>
            <a
              href="#brief"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/14 px-6 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/6 active:translate-y-px sm:w-auto"
            >
              Рассказать о задаче
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-8 flex max-w-full flex-wrap gap-2 text-sm text-slate-300">
            {["Сайты", "Лендинги", "Telegram-боты", "Мини-аппы", "MVP"].map((item) => (
              <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-full sm:max-w-[32rem] lg:ml-auto">
          <div className="absolute -inset-5 rounded-[8px] bg-indigo-500/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-lg border border-indigo-300/28 bg-[#10172A]/88 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-white">
                <TerminalSquare size={18} className="text-cyan-300" />
                запуск.ai
              </div>
              <div className="flex gap-1.5">
                <span className="size-2 rounded-full bg-rose-400" />
                <span className="size-2 rounded-full bg-amber-300" />
                <span className="size-2 rounded-full bg-emerald-300" />
              </div>
            </div>
            <div className="min-w-0 space-y-4 p-4 sm:p-5">
              <div className="rounded-lg border border-cyan-300/18 bg-cyan-300/6 p-4">
                <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                  <span>/проект</span>
                  <span>прототип готов</span>
                </div>
                <div className="min-w-0 space-y-3 font-mono text-sm">
                  <FlowLine label="идея" value="сырой бриф" />
                  <FlowLine label="промпт" value="структура и UX" />
                  <FlowLine label="прототип" value="сайт, бот или апп" />
                  <FlowLine label="запуск" value="первая рабочая версия" active />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["сайт", "разделы и структура"],
                  ["лендинг", "оффер и форма"],
                  ["Telegram-бот", "сценарий и заявки"],
                  ["MVP", "быстрый запуск идеи"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                    <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                      <CheckCircle2 size={16} className="text-emerald-300" />
                      {title}
                    </div>
                    <p className="text-sm text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowLine({ label, value, active = false }) {
  return (
    <div className="grid min-w-0 gap-2 sm:grid-cols-[6.5rem_1fr] sm:items-center sm:gap-3">
      <span className={active ? "text-cyan-200" : "text-slate-500"}>{label}</span>
      <span className="min-w-0 rounded-lg border border-white/10 bg-[#0B0F17] px-3 py-2 text-slate-200">{value}</span>
    </div>
  );
}
