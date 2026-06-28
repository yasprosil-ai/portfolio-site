import Link from "next/link";

export default function SocialTopbar() {
  return (
    <div className="flex flex-col gap-4 border-b border-white/10 bg-[#0F1628]/78 px-5 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6">
      <div>
        <p className="text-lg font-semibold text-white">Social Pilot</p>
        <p className="mt-1 text-sm text-slate-400">
          Demo scaffold. Реальная авторизация ещё не подключена.
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <span className="inline-flex min-h-10 items-center rounded-lg border border-amber-300/20 bg-amber-300/10 px-4 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
          Mock mode
        </span>
        <Link
          href="/"
          className="inline-flex min-h-10 items-center rounded-lg border border-white/12 px-4 text-sm font-semibold text-slate-300 transition hover:border-white/24 hover:text-white"
        >
          На сайт
        </Link>
      </div>
    </div>
  );
}
