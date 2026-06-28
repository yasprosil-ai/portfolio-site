import SocialEmptyState from "./SocialEmptyState.jsx";

export default function CommentsInbox({ comments }) {
  if (!comments?.length) {
    return (
      <SocialEmptyState
        title="Inbox пока пуст"
        text="Здесь будут видны комментарии пользователей и будущая механика AI-ответов."
      />
    );
  }

  return (
    <div className="grid gap-4">
      {comments.map((comment) => (
        <article
          key={comment.id}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
        >
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-semibold text-white">{comment.author}</p>
            <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.14em] text-slate-400">
              {comment.platformName ?? comment.platform}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">{comment.text}</p>

          <div className="mt-4 rounded-xl border border-cyan-300/14 bg-cyan-300/6 p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-200">
              AI-вариант ответа
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-300">{comment.aiReply}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              disabled
              className="inline-flex min-h-10 items-center rounded-lg border border-white/10 px-3 text-sm font-semibold text-slate-500"
            >
              Подготовить ответ
            </button>
            <button
              type="button"
              disabled
              className="inline-flex min-h-10 items-center rounded-lg border border-cyan-300/18 px-3 text-sm font-semibold text-cyan-100/45"
            >
              Отправить
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
