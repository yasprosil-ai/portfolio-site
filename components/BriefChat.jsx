"use client";

import { Bot, Send, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { contacts } from "../data/skills.js";

const GREETING =
  "Привет! Я AI-менеджер Сергея. Помогу за пару минут понять, что тебе нужно, и сразу прикину стоимость.\n\nС чего начнём — что хочешь сделать?";

const QUICK_REPLIES = [
  "Сайт",
  "Лендинг",
  "Telegram-бот",
  "Мини-апп (калькулятор, квиз)",
  "Интернет-магазин",
  "MVP / запустить идею",
  "Пока не знаю — помоги определить",
];

export default function BriefChat() {
  const [messages, setMessages] = useState([{ role: "assistant", content: GREETING, synthetic: true }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadSent, setLeadSent] = useState(false);
  const scrollRef = useRef(null);
  const showQuickReplies = messages.length === 1 && !loading;

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, loading]);

  async function send(text) {
    const content = text.trim();
    if (!content || loading) return;

    const nextMessages = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const payload = nextMessages
        .filter((m) => !m.synthetic)
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/brief", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: payload }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data?.error || "Что-то пошло не так. Напиши Сергею в Telegram." },
        ]);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      if (data.lead) setLeadSent(true);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Связь прервалась. Попробуй ещё раз или напиши Сергею в Telegram." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="flex h-[34rem] max-h-[78dvh] flex-col overflow-hidden rounded-[20px] border border-white/10 bg-[#0F1628]/72 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl">
      {/* Шапка */}
      <div className="flex shrink-0 items-center gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
        <span className="grid size-9 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
          <Bot size={18} strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">AI-менеджер Сергея</p>
          <p className="text-xs text-emerald-300">● на связи</p>
        </div>
      </div>

      {/* Лента сообщений */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
        {messages.map((m, i) => (
          <Message key={i} role={m.role} content={m.content} />
        ))}

        {showQuickReplies && (
          <div className="flex flex-wrap gap-2 pt-1">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => send(q)}
                className="rounded-lg border border-cyan-300/24 bg-cyan-300/5 px-3 py-2 text-xs font-semibold text-cyan-100 transition hover:bg-cyan-300/12 active:translate-y-px"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {loading && <Typing />}

        {leadSent && (
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
          >
            <Send size={16} />
            Написать Сергею в Telegram
          </a>
        )}
      </div>

      {/* Ввод */}
      <form onSubmit={onSubmit} className="flex shrink-0 items-center gap-2 border-t border-white/10 p-3 sm:p-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Напиши ответ…"
          disabled={loading}
          className="min-h-11 flex-1 rounded-lg border border-white/12 bg-[#0B0F17] px-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-300/40 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="inline-grid size-11 shrink-0 place-items-center rounded-lg bg-cyan-300 text-slate-950 transition hover:bg-cyan-200 active:translate-y-px disabled:opacity-40"
          aria-label="Отправить"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
}

function Message({ role, content }) {
  const isUser = role === "user";
  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : ""}`}>
      <span
        className={`grid size-8 shrink-0 place-items-center rounded-lg border ${
          isUser
            ? "border-white/12 bg-white/[0.04] text-slate-300"
            : "border-cyan-300/20 bg-cyan-300/8 text-cyan-200"
        }`}
      >
        {isUser ? <User size={15} strokeWidth={1.8} /> : <Bot size={15} strokeWidth={1.8} />}
      </span>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${
          isUser
            ? "rounded-tr-sm bg-cyan-300 text-slate-950"
            : "rounded-tl-sm border border-white/10 bg-white/[0.03] text-slate-200"
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex gap-3">
      <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/8 text-cyan-200">
        <Bot size={15} strokeWidth={1.8} />
      </span>
      <div className="flex items-center gap-1 rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.03] px-4 py-3.5">
        <Dot delay="0ms" />
        <Dot delay="150ms" />
        <Dot delay="300ms" />
      </div>
    </div>
  );
}

function Dot({ delay }) {
  return (
    <span
      className="size-1.5 animate-bounce rounded-full bg-cyan-300/70"
      style={{ animationDelay: delay, animationDuration: "1s" }}
    />
  );
}
