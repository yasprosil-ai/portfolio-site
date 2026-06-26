import { Check } from "lucide-react";
import Link from "next/link";

export default function TelegramBotTypeCard({ type }) {
  const Icon = type.icon;

  return (
    <Link
      href={`/services/telegram-bots/${type.slug}`}
      className="service-card group flex flex-col rounded-lg border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/40 hover:shadow-[0_0_24px_rgba(103,232,249,0.18),0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="relative grid size-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
          <span className="service-icon-glow" />
          <Icon size={21} strokeWidth={1.8} className="relative z-10" />
        </span>
        <div>
          <h3 className="text-xl font-semibold text-white">{type.name}</h3>
          <p className="mt-1 text-sm leading-5 text-slate-400">{type.cardDescription}</p>
        </div>
      </div>

      <ul className="grid flex-1 gap-2">
        {type.cardItems.map((item) => (
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
          <p className="mt-0.5 text-sm font-semibold text-white">{type.deadline}</p>
        </div>
        <span className="relative overflow-hidden rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-100 transition hover:bg-amber-300/18 active:translate-y-px">
          <span className="service-btn-glow" />
          <span className="relative z-10">Подробнее</span>
        </span>
      </div>
    </Link>
  );
}
