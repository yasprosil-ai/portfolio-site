import { ArrowUpRight, Mail, MessageSquareText, Send } from "lucide-react";
import { contacts } from "../data/skills.js";

const contactNotes = [
  "что нужно собрать: сайт, лендинг, бот, мини-апп или MVP",
  "какая цель: заявки, продажи, запись, тест идеи или запуск первой версии",
  "что уже есть: текст, примеры, фото, Telegram, таблицы или черновик",
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-[#111827]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.14),transparent_38%)]" />
            <div className="relative">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Контакты</p>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Есть идея? Давайте соберем первую версию
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
                Напишите мне, если нужен сайт, лендинг, Telegram-бот, мини-приложение или быстрый MVP. Можно прийти
                даже с сырой идеей: помогу превратить ее в понятную структуру.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={contacts.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan-300 px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
                >
                  <Send size={18} />
                  Написать в Telegram
                </a>
                <a
                  href={`mailto:${contacts.email}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/6 active:translate-y-px"
                >
                  <Mail size={18} />
                  Отправить email
                </a>
              </div>
            </div>
          </div>

          <aside className="border-t border-white/10 bg-[#0B0F17]/48 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-lg border border-emerald-300/18 bg-emerald-300/8 text-emerald-200">
                <MessageSquareText size={21} strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="font-semibold text-white">Что лучше написать</h3>
                <p className="mt-1 text-sm text-slate-400">Короткого сообщения достаточно.</p>
              </div>
            </div>

            <div className="grid gap-3">
              {contactNotes.map((note) => (
                <div key={note} className="flex gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <ArrowUpRight size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                  <p className="text-sm leading-6 text-slate-300">{note}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
