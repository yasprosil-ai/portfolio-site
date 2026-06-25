"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contacts, navItems } from "../data/skills.js";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);
  const resolveHref = (href) => (isHome ? href : `/${href}`);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08101f]/62 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={closeMenu} className="group flex h-full min-w-0 items-center gap-3">
          <span className="liquid-chip grid size-10 place-items-center rounded-[1rem] text-sm font-black text-cyan-100 shadow-[0_0_30px_rgba(88,236,255,0.2)]">
            Я
          </span>
          <span className="text-sm font-semibold tracking-wide text-white sm:text-base">Я спросил у ИИ</span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={resolveHref(item.href)} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contacts.telegram}
            target="_blank"
            rel="noreferrer"
            className="liquid-button inline-flex min-h-11 items-center justify-center rounded-[1rem] px-5 text-sm font-semibold text-slate-950 transition hover:brightness-110 active:translate-y-px"
          >
            Обсудить проект
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="liquid-outline inline-grid size-11 place-items-center rounded-[1rem] text-white transition hover:border-cyan-300/40 hover:bg-white/5 lg:hidden"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#091121]/92 px-4 pb-5 pt-2 backdrop-blur-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={resolveHref(item.href)}
                onClick={closeMenu}
                className="rounded-[1rem] px-3 py-4 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="liquid-button mt-3 inline-flex min-h-12 items-center justify-center rounded-[1rem] px-5 text-sm font-semibold text-slate-950 transition hover:brightness-110 active:translate-y-px"
            >
              Обсудить проект
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
