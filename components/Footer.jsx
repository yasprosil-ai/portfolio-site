import Link from "next/link";
import { Mail, Send } from "lucide-react";
import { contacts, navItems } from "../data/skills.js";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-lg border border-cyan-300/40 bg-cyan-300/10 text-sm font-black text-cyan-200">
              YA
            </span>
            <span className="font-semibold text-white">Yasprosil AI</span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Yasprosil AI: лендинги, Telegram-боты, мини-аппы и MVP на вайбкодинге.
          </p>
          <p className="mt-6 text-sm text-slate-500">© 2026 Yasprosil AI. Собрано с AI и вайбкодингом.</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:text-right">
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Навигация</p>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link key={item.href} href={`/${item.href}`} className="text-sm text-slate-400 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Связь</p>
            <div className="grid gap-2">
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white lg:justify-end"
              >
                <Send size={15} />
                Telegram
              </a>
              <a
                href={`mailto:${contacts.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white lg:justify-end"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
