import SocialEmptyState from "./SocialEmptyState.jsx";

export default function ReplyDrafts({ drafts }) {
  if (!drafts?.length) {
    return (
      <SocialEmptyState
        title="Черновиков ответов пока нет"
        text="Когда комментарии начнут обрабатываться, тут появятся AI-черновики для команды."
      />
    );
  }

  return (
    <div className="grid gap-4">
      {drafts.map((draft) => (
        <article
          key={draft.id}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-white">{draft.platform}</p>
            <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
              {draft.tone}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-300">{draft.text}</p>
        </article>
      ))}
    </div>
  );
}
