import { getInboxPreview, getPlatformCards, getRecentDrafts, getScheduledQueue } from "../lib/platform-registry.js";
import { formatDateTime, truncateText } from "../lib/social-formatters.js";
import CommentsInbox from "./CommentsInbox.jsx";
import PlatformCard from "./PlatformCard.jsx";
import SocialEmptyState from "./SocialEmptyState.jsx";

export default function SocialDashboard() {
  const platformCards = getPlatformCards();
  const queue = getScheduledQueue();
  const drafts = getRecentDrafts();
  const inbox = getInboxPreview();

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <section className="rounded-[28px] border border-white/10 bg-[#0F1628]/78 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Social Pilot
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
          Social Pilot
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-300">
          Панель управления публикациями, комментариями и AI-ответами для Threads, Instagram, TikTok и YouTube.
        </p>
        <div className="mt-6 inline-flex rounded-xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
          Demo scaffold. Реальная авторизация ещё не подключена.
        </div>
      </section>

      <section>
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">Платформы</p>
          <p className="mt-2 text-sm text-slate-400">
            Все карточки работают на mock-данных и готовы к будущему подключению реальных API.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {platformCards.map((platform) => (
            <PlatformCard key={platform.id} platform={platform} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <div className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
          <div className="mb-4">
            <p className="text-lg font-semibold text-white">Очередь публикаций</p>
            <p className="mt-2 text-sm text-slate-400">
              Ближайшие запланированные публикации по всем платформам.
            </p>
          </div>

          {queue.length ? (
            <div className="grid gap-3">
              {queue.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{post.title}</p>
                    <span className="rounded-full border border-cyan-300/18 bg-cyan-300/8 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-200">
                      {post.platformName}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{truncateText(post.body, 130)}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-cyan-200">
                    {formatDateTime(post.scheduledAt)}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <SocialEmptyState
              title="Очередь пока пустая"
              text="После подключения реального data layer здесь будут видны будущие публикации."
            />
          )}
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
          <div className="mb-4">
            <p className="text-lg font-semibold text-white">Черновики</p>
            <p className="mt-2 text-sm text-slate-400">
              Несколько mock-черновиков как опорная структура для будущего редактора.
            </p>
          </div>

          {drafts.length ? (
            <div className="grid gap-3">
              {drafts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-white">{post.platformName}</p>
                    <span className="rounded-full border border-white/10 px-2 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">
                      draft
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{post.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{truncateText(post.body, 120)}</p>
                </article>
              ))}
            </div>
          ) : (
            <SocialEmptyState title="Черновиков пока нет" />
          )}
        </div>
      </section>

      <section className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">Комментарии</p>
          <p className="mt-2 text-sm text-slate-400">
            Mock-комментарии показывают будущую механику inbox и AI-ответов.
          </p>
        </div>
        <CommentsInbox comments={inbox} />
      </section>
    </div>
  );
}
