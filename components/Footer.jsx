"use client";

import Link from "next/link";
import { Mail, ArrowUp } from "lucide-react";
import { FaTelegram, FaYoutube, FaTiktok, FaInstagram, FaGithub } from "react-icons/fa6";

function RutubeIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14V8l6 4-6 4z" />
    </svg>
  );
}
import { contacts, navItems } from "../data/skills.js";

const socials = [
  { href: contacts.telegram,        Icon: FaTelegram,  title: "Telegram личка"   },
  { href: contacts.telegramChannel, Icon: FaTelegram,  title: "Telegram канал"   },
  { href: contacts.youtube,         Icon: FaYoutube,   title: "YouTube"          },
  { href: contacts.tiktok,          Icon: FaTiktok,    title: "TikTok"           },
  { href: contacts.rutube,          Icon: RutubeIcon,  title: "Rutube"           },
  { href: contacts.instagram,       Icon: FaInstagram, title: "Instagram"        },
  { href: contacts.github,          Icon: FaGithub,    title: "GitHub"           },
  { href: `mailto:${contacts.email}`, Icon: Mail,      title: "Email"            },
];

function IconBtn({ href, Icon, title }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noreferrer"
      title={title}
      aria-label={title}
      className="liquid-outline grid size-10 place-items-center rounded-[1rem] text-slate-300 transition hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-95"
    >
      <Icon size={17} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="liquid-chip grid size-10 place-items-center rounded-[1rem] text-sm font-black text-cyan-100">
              Я
            </span>
            <span className="font-semibold text-white">Я спросил у ИИ</span>
          </Link>
          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Лендинги, Telegram-боты, мини-аппы и MVP с помощью ИИ.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            {socials.map(({ href, Icon, title }) => (
              <IconBtn key={title} href={href} Icon={Icon} title={title} />
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              title="Наверх"
              aria-label="Наверх"
              className="liquid-outline grid size-10 place-items-center rounded-[1rem] text-slate-300 transition hover:border-white/20 hover:bg-white/8 hover:text-white active:scale-95"
            >
              <ArrowUp size={17} />
            </button>
          </div>

          <p className="mt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Я спросил у ИИ. Создано с ИИ.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:text-right">
          <div>
            <p className="mb-3 text-sm font-semibold text-white">Навигация</p>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
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
                className="text-sm text-slate-400 transition hover:text-white lg:text-right"
              >
                Telegram
              </a>
              <a
                href={`mailto:${contacts.email}`}
                className="text-sm text-slate-400 transition hover:text-white lg:text-right"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
