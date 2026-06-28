import Link from "next/link";
import { notFound } from "next/navigation";
import { getPlatform } from "../lib/platform-registry.js";
import { formatDateTime } from "../lib/social-formatters.js";
import CommentsInbox from "./CommentsInbox.jsx";
import PostEditor from "./PostEditor.jsx";
import PostsTable from "./PostsTable.jsx";
import ReplyDrafts from "./ReplyDrafts.jsx";

export default function PlatformPage({ platformKey }) {
  const platform = getPlatform(platformKey);

  if (!platform) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6">
      <section className={`rounded-[28px] border border-white/10 bg-gradient-to-br ${platform.accentClass} p-[1px]`}>
        <div className="rounded-[27px] bg-[#0F1628]/92 p-6 sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Platform
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                {platform.name}
              </h1>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">
                Mock mode — реальное API пока не подключено. Этот экран показывает будущую механику редактора, очереди публикаций и inbox комментариев.
              </p>
            </div>

            <Link
              href="/admin/social"
              className="inline-flex min-h-11 items-center rounded-lg border border-white/12 px-4 text-sm font-semibold text-slate-300 transition hover:border-white/24 hover:text-white"
            >
              Назад к overview
            </Link>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <StatCard label="Черновики" value={platform.drafts} helper="готово к доработке" />
            <StatCard label="В очереди" value={platform.scheduled} helper="ожидают слот" />
            <StatCard label="Опубликовано" value={platform.published} helper="mock-статистика" />
          </div>
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.15fr,0.85fr]">
        <PostEditor platform={platform} />

        <section className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
          <p className="text-lg font-semibold text-white">Ближайшая очередь</p>
          <div className="mt-4 grid gap-3">
            {platform.posts
              .filter((post) => post.status === "scheduled")
              .slice(0, 3)
              .map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4"
                >
                  <p className="text-sm font-semibold text-white">{post.title}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{post.body}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-cyan-200">
                    {formatDateTime(post.scheduledAt)}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>

      <section className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <div className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
          <div className="mb-4">
            <p className="text-lg font-semibold text-white">Посты</p>
            <p className="mt-2 text-sm text-slate-400">
              История черновиков, запланированных и опубликованных постов.
            </p>
          </div>
          <PostsTable posts={platform.posts} />
        </div>

        <div className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
          <div className="mb-4">
            <p className="text-lg font-semibold text-white">Черновики ответов</p>
            <p className="mt-2 text-sm text-slate-400">
              Mock-слой будущих AI-ответов для команды.
            </p>
          </div>
          <ReplyDrafts drafts={platform.replyDrafts} />
        </div>
      </section>

      <section className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
        <div className="mb-4">
          <p className="text-lg font-semibold text-white">Комментарии</p>
          <p className="mt-2 text-sm text-slate-400">
            Будущая зона inbox для комментариев пользователей и AI-подсказок ответа.
          </p>
        </div>
        <CommentsInbox comments={platform.comments} />
      </section>
    </div>
  );
}

function StatCard({ label, value, helper }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
      <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{helper}</p>
    </div>
  );
}
