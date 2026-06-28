"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleFadingPlus, Instagram, MessageCircleMore, PlaySquare, Radio } from "lucide-react";

const items = [
  { href: "/admin/social", label: "Overview", Icon: CircleFadingPlus },
  { href: "/admin/social/threads", label: "Threads", Icon: Radio },
  { href: "/admin/social/instagram", label: "Instagram", Icon: Instagram },
  { href: "/admin/social/tiktok", label: "TikTok", Icon: MessageCircleMore },
  { href: "/admin/social/youtube", label: "YouTube", Icon: PlaySquare },
];

export default function SocialSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-white/10 bg-[#0B0F17]/92 px-4 py-4 backdrop-blur-xl lg:min-h-[calc(100dvh-1px)] lg:w-72 lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
      <div className="mb-5 px-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          Admin
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          Каркас будущего Social Pilot внутри текущего проекта.
        </p>
      </div>

      <nav className="grid gap-2">
        {items.map(({ href, label, Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "border-cyan-300/28 bg-cyan-300/10 text-cyan-100"
                  : "border-white/8 bg-white/[0.02] text-slate-300 hover:border-white/16 hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03]">
                <Icon size={16} />
              </span>
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
