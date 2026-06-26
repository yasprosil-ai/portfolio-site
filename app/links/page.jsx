import Image from "next/image";
import { Mail, Globe, ArrowUpRight } from "lucide-react";
import { FaTelegram, FaYoutube, FaTiktok, FaInstagram } from "react-icons/fa6";
import { contacts } from "../../data/skills.js";

export const metadata = {
  title: "Все ссылки | Я спросил у ИИ",
  description: "Telegram, YouTube, TikTok, Instagram, сайт с проектами и другие контакты.",
  robots: "noindex, nofollow",
};

function RutubeIcon() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14V8l6 4-6 4z" />
    </svg>
  );
}

const linkItems = [
  {
    href: contacts.telegram,
    Icon: FaTelegram,
    label: "Telegram",
    desc: "Написать напрямую",
    iconCls: "text-cyan-300 bg-cyan-300/10 border-cyan-300/25",
  },
  {
    href: "/",
    Icon: Globe,
    label: "Портфолио",
    desc: "Сайты, Лендинги, Telegram-боты и т.д.",
    iconCls: "text-emerald-300 bg-emerald-300/10 border-emerald-300/25",
    isInternal: true,
  },
  {
    href: contacts.youtube,
    Icon: FaYoutube,
    label: "YouTube",
    desc: "Обзоры проектов",
    iconCls: "text-rose-400 bg-rose-400/10 border-rose-400/25",
  },
  {
    href: contacts.tiktok,
    Icon: FaTiktok,
    label: "TikTok",
    desc: "Процесс создания изнутри",
    iconCls: "text-slate-200 bg-white/8 border-white/15",
  },
  {
    href: contacts.instagram,
    Icon: FaInstagram,
    label: "Instagram",
    desc: "Процесс создания изнутри",
    iconCls: "text-pink-400 bg-pink-400/10 border-pink-400/25",
  },
  {
    href: contacts.telegramChannel,
    Icon: FaTelegram,
    label: "Telegram канал",
    desc: "От заказа до готового кейса",
    iconCls: "text-sky-300 bg-sky-300/10 border-sky-300/25",
  },
  {
    href: contacts.rutube,
    Icon: RutubeIcon,
    label: "Rutube",
    desc: "Обзоры проектов",
    iconCls: "text-blue-400 bg-blue-400/10 border-blue-400/25",
  },
  {
    href: `mailto:${contacts.email}`,
    Icon: Mail,
    label: "Email",
    desc: contacts.email,
    iconCls: "text-amber-300 bg-amber-300/10 border-amber-300/25",
    isMail: true,
  },
];

function LinkCard({ href, Icon, label, desc, iconCls, isInternal, isMail, delay }) {
  const isExternal = !isInternal && !isMail;
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      style={{ "--reveal-delay": delay }}
      className="link-card reveal-card group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-4"
    >
      <span className={`grid size-11 shrink-0 place-items-center rounded-xl border transition-transform duration-200 group-hover:scale-110 ${iconCls}`}>
        <Icon size={18} />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">{label}</p>
        <p className="truncate text-xs text-slate-400">{desc}</p>
      </div>
      <ArrowUpRight
        size={15}
        className="shrink-0 text-slate-600 transition-transform duration-200 group-hover:-translate-y-px group-hover:translate-x-px group-hover:text-slate-300"
      />
    </a>
  );
}

export default function LinksPage() {
  return (
    <div className="site-shell min-h-dvh w-full text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <main className="mx-auto flex min-h-dvh max-w-sm flex-col items-center justify-center px-5 py-16">

        {/* Brand header */}
        <div className="mb-10 flex flex-col items-center text-center">
          <div className="avatar-breathe mb-5 overflow-hidden rounded-2xl border border-cyan-300/40">
            <Image
              src="/avatar.png"
              alt="Я спросил у ИИ"
              width={72}
              height={72}
              className="size-[4.5rem] object-cover object-[center_25%]"
              priority
            />
          </div>
          <h1
            style={{ "--reveal-delay": "80ms" }}
            className="reveal-card text-lg font-bold text-white"
          >
            Я спросил у ИИ
          </h1>
        </div>

        {/* About block */}
        <div
          style={{ "--reveal-delay": "200ms" }}
          className="reveal-card mb-8 w-full text-center"
        >
          <h2 className="text-xl font-bold leading-tight text-white">
            Создаю сайты, Telegram-ботов и{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-indigo-400 bg-clip-text text-transparent">
              AI-автоматизации
            </span>
            {" "}для бизнеса.
          </h2>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
            Быстро собираю рабочие цифровые продукты от идеи и сырого брифа до первой понятной версии.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-1.5">
            {[
              { label: "Сайты",                  href: "/?tab=Сайты#projects"         },
              { label: "Telegram-боты",           href: "/?tab=Telegram-боты#projects" },
              { label: "AI-интеграции",           href: "/#services"                   },
              { label: "Telegram Mini Apps",      href: "/#services"                   },
              { label: "MVP",                     href: "/?tab=MVP#projects"            },
              { label: "Поддержка",               href: "/#services"                   },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-300 transition hover:border-white/22 hover:bg-white/[0.08] hover:text-white active:scale-95"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Links header */}
        <p
          style={{ "--reveal-delay": "220ms" }}
          className="reveal-card mb-4 inline-flex items-center gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-amber-100"
        >
          <span className="dot-pulse size-1.5 rounded-full bg-amber-300" />
          Все ссылки
        </p>

        {/* Link list */}
        <div className="w-full space-y-2.5">
          {linkItems.map((item, i) => (
            <LinkCard key={item.label} {...item} delay={`${240 + i * 55}ms`} />
          ))}
        </div>

        <p
          style={{ "--reveal-delay": `${240 + linkItems.length * 55 + 60}ms` }}
          className="reveal-card mt-10 text-xs text-slate-600"
        >
          © {new Date().getFullYear()} Я спросил у ИИ
        </p>
      </main>
    </div>
  );
}
