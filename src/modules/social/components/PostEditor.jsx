"use client";

import { useMemo, useState } from "react";
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
  const [feedback, setFeedback] = useState("");

  function updateField(field, value) {
    setFormState((prev) => ({ ...prev, [field]: value }));
  }

  function handleMockAction(actionLabel) {
    const result = runMockAction(actionLabel, platform.name);
    setFeedback(result.message);
  }

  return (
    <section className="rounded-[24px] border border-white/10 bg-[#0F1628]/78 p-5">
      <div className="mb-5">
        <p className="text-lg font-semibold text-white">Редактор поста</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Mock mode — реальное API пока не подключено.
        </p>
      </div>

      <div className="grid gap-4">
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
            onClick={() => handleMockAction("Опубликовать сейчас")}
            className="inline-flex min-h-11 items-center rounded-lg bg-white px-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Опубликовать сейчас
          </button>
        </div>

        {feedback ? (
          <div className="rounded-2xl border border-amber-300/18 bg-amber-300/8 px-4 py-3 text-sm leading-6 text-amber-100">
            {feedback}
          </div>
        ) : null}
      </div>
    </section>
  );
}
