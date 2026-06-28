import Link from "next/link";

export default function PlatformCard({ platform }) {
  return (
    <article className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${platform.accentClass} p-[1px]`}>
      <div className="h-full rounded-[23px] bg-[#0F1628]/92 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-semibold text-white">{platform.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">{platform.shortDescription}</p>
          </div>
          <span className="inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-amber-100">
            {platform.status}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <Metric label="Черновики" value={platform.drafts} />
          <Metric label="В очереди" value={platform.scheduled} />
          <Metric label="Опубликовано" value={platform.published} />
        </div>

        <div className="mt-6">
          <Link
            href={`/admin/social/${platform.id}`}
            className="inline-flex min-h-11 items-center rounded-lg border border-cyan-300/24 px-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
          >
            Открыть
          </Link>
        </div>
      </div>
    </article>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
      <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}
