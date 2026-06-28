"use client";

import { useEffect, useMemo, useState } from "react";
import { runMockAction } from "../lib/mock-actions.js";

export default function PostEditor({ platform }) {
  const firstDraft = useMemo(
    () => platform.posts.find((post) => post.status === "draft") ?? platform.posts[0],
    [platform.posts],
  );

  const [formState, setFormState] = useState({
    body: firstDraft?.body ?? "",
    firstComment: firstDraft?.firstComment ?? "",
    publishDate: "2026-06-30",
    publishTime: "12:30",
    status: firstDraft?.status ?? "draft",
  });
  const [feedback, setFeedback] = useState(null);
  const [statusState, setStatusState] = useState({
    loading: platform.id === "threads",
    configured: false,
    mode: "mock",
    missingEnv: [],
  });
  const [actionState, setActionState] = useState({
    publishPending: false,
    replyPending: false,
    publishedPostId: "",
    publishedReplyId: "",
    details: null,
  });

  useEffect(() => {
    if (platform.id !== "threads") {
      return undefined;
    }

    let isActive = true;

    async function loadStatus() {
      try {
        const response = await fetch("/api/social/threads/status", {
          cache: "no-store",
        });
        const result = await response.json();

        if (!isActive) {
          return;
        }

        setStatusState({
          loading: false,
          configured: Boolean(result.configured),
          mode: result.mode ?? "mock",
          missingEnv: Array.isArray(result.missingEnv) ? result.missingEnv : [],
        });
      } catch {
        if (!isActive) {
          return;
        }

        setStatusState({
          loading: false,
          configured: false,
          mode: "mock",
          missingEnv: ["THREADS_ACCESS_TOKEN", "THREADS_USER_ID"],
        });
      }
    }

    loadStatus();

    return () => {
      isActive = false;
    };
  }, [platform.id]);

  function updateField(field, value) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function handleMockAction(actionLabel) {
    const result = runMockAction(actionLabel, platform.name);
    setFeedback({
      tone: "mock",
      message: result.message,
    });
  }

  async function publishThreadsPost() {
    setActionState((prev) => ({
      ...prev,
      publishPending: true,
    }));
    setFeedback(null);

    try {
      const response = await fetch("/api/social/threads/publish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: formState.body,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Не удалось опубликовать пост в Threads.");
      }

      setActionState((prev) => ({
        ...prev,
        publishPending: false,
        publishedPostId: result.platformPostId ?? "",
        publishedReplyId: "",
        details: result.raw ?? null,
      }));
      setFeedback({
        tone: "success",
        message: `Пост опубликован. ID: ${result.platformPostId}`,
      });
    } catch (error) {
      setActionState((prev) => ({
        ...prev,
        publishPending: false,
      }));
      setFeedback({
        tone: "error",
        message: error instanceof Error ? error.message : "Не удалось опубликовать пост в Threads.",
      });
    }
  }

  async function publishThreadsReply() {
    setActionState((prev) => ({
      ...prev,
      replyPending: true,
    }));
    setFeedback(null);

    try {
      const response = await fetch("/api/social/threads/reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          replyToId: actionState.publishedPostId,
          text: formState.firstComment,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Не удалось опубликовать первый комментарий.");
      }

      setActionState((prev) => ({
        ...prev,
        replyPending: false,
        publishedReplyId: result.platformReplyId ?? "",
        details: {
          ...(prev.details ?? {}),
          reply: result.raw ?? null,
        },
      }));
      setFeedback({
        tone: "success",
        message: `Первый комментарий опубликован. ID: ${result.platformReplyId}`,
      });
    } catch (error) {
      setActionState((prev) => ({
        ...prev,
        replyPending: false,
      }));
      setFeedback({
        tone: "error",
        message: error instanceof Error ? error.message : "Не удалось опубликовать первый комментарий.",
      });
    }
  }

  const feedbackClassName =
    feedback?.tone === "error"
      ? "border border-rose-300/18 bg-rose-300/10 text-rose-100"
      : feedback?.tone === "success"
        ? "border border-emerald-300/18 bg-emerald-300/10 text-emerald-100"
        : "border border-amber-300/18 bg-amber-300/8 text-amber-100";

  return (
    <section className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
      <div className="mb-5">
        <p className="text-lg font-semibold text-white">Редактор поста</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {platform.id === "threads"
            ? "Публикация идёт через server-side route handlers. Сохранение черновика и планирование пока остаются локальным mock-слоем до подключения базы и очереди."
            : "Mock mode — реальное API для этой платформы пока не подключено."}
        </p>
      </div>

      <div className="grid gap-4">
        {platform.id === "threads" ? (
          <div className="rounded-2xl border border-cyan-300/16 bg-cyan-300/8 px-4 py-3 text-sm leading-6 text-slate-200">
            <p className="font-semibold text-white">
              {statusState.loading
                ? "Проверяю статус Threads..."
                : statusState.mode === "live"
                  ? "Live mode"
                  : "Mock mode"}
            </p>
            <p className="mt-2 text-slate-300">
              {statusState.loading
                ? "Статус подключения определяется через /api/social/threads/status."
                : statusState.configured
                  ? "ENV настроены, можно публиковать текстовый пост и первый комментарий."
                  : "Threads ENV пока не заполнены. Публикация будет недоступна, пока не будут добавлены обязательные переменные."}
            </p>
            {!statusState.loading && statusState.missingEnv.length ? (
              <p className="mt-2 text-slate-300">
                Missing ENV: {statusState.missingEnv.join(", ")}
              </p>
            ) : null}
          </div>
        ) : null}

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Текст поста</span>
          <textarea
            value={formState.body}
            onChange={(event) => updateField("body", event.target.value)}
            rows={6}
            className="w-full rounded-2xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/35"
          />
        </label>

        <label className="grid gap-2">
          <span className="text-sm font-semibold text-slate-200">Первый комментарий</span>
          <textarea
            value={formState.firstComment}
            onChange={(event) => updateField("firstComment", event.target.value)}
            rows={3}
            className="w-full rounded-2xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300/35"
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-3">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-200">Дата</span>
            <input
              type="date"
              value={formState.publishDate}
              onChange={(event) => updateField("publishDate", event.target.value)}
              className="min-h-11 rounded-xl border border-white/10 bg-[#0B0F17] px-3 text-sm text-white outline-none transition focus:border-cyan-300/35"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-200">Время</span>
            <input
              type="time"
              value={formState.publishTime}
              onChange={(event) => updateField("publishTime", event.target.value)}
              className="min-h-11 rounded-xl border border-white/10 bg-[#0B0F17] px-3 text-sm text-white outline-none transition focus:border-cyan-300/35"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-semibold text-slate-200">Статус</span>
            <select
              value={formState.status}
              onChange={(event) => updateField("status", event.target.value)}
              className="min-h-11 rounded-xl border border-white/10 bg-[#0B0F17] px-3 text-sm text-white outline-none transition focus:border-cyan-300/35"
            >
              <option value="draft">draft</option>
              <option value="scheduled">scheduled</option>
              <option value="published">published</option>
              <option value="failed">failed</option>
            </select>
          </label>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => handleMockAction("Сохранить черновик")}
            className="inline-flex min-h-11 items-center rounded-lg border border-white/12 px-4 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.04]"
          >
            Сохранить черновик
          </button>
          <button
            type="button"
            onClick={() => handleMockAction("Запланировать")}
            className="inline-flex min-h-11 items-center rounded-lg border border-cyan-300/24 px-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
          >
            Запланировать
          </button>
          <button
            type="button"
            onClick={platform.id === "threads" ? publishThreadsPost : () => handleMockAction("Опубликовать сейчас")}
            disabled={platform.id === "threads" && actionState.publishPending}
            className="inline-flex min-h-11 items-center rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            {actionState.publishPending ? "Публикую..." : "Опубликовать сейчас"}
          </button>
          {platform.id === "threads" && formState.firstComment.trim() && actionState.publishedPostId ? (
            <button
              type="button"
              onClick={publishThreadsReply}
              disabled={actionState.replyPending}
              className="inline-flex min-h-11 items-center rounded-lg border border-emerald-300/24 px-4 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/10 disabled:cursor-not-allowed disabled:text-emerald-100/60"
            >
              {actionState.replyPending ? "Публикую комментарий..." : "Опубликовать первый комментарий"}
            </button>
          ) : null}
        </div>

        {platform.id === "threads" ? (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
            Планирование будет подключено после добавления базы данных и очереди.
          </div>
        ) : null}

        {feedback ? (
          <div className={`rounded-2xl px-4 py-3 text-sm leading-6 ${feedbackClassName}`}>
            {feedback.message}
          </div>
        ) : null}

        {actionState.publishedPostId ? (
          <div className="rounded-2xl border border-white/10 bg-[#0B0F17] px-4 py-3 text-sm leading-6 text-slate-300">
            <p className="font-semibold text-white">Пост опубликован</p>
            <p className="mt-2">ID поста: {actionState.publishedPostId}</p>
            {actionState.publishedReplyId ? (
              <p className="mt-1">ID первого комментария: {actionState.publishedReplyId}</p>
            ) : null}
            {actionState.details ? (
              <details className="mt-3">
                <summary className="cursor-pointer text-slate-200">Показать debug details</summary>
                <pre className="mt-3 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  {JSON.stringify(actionState.details, null, 2)}
                </pre>
              </details>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
