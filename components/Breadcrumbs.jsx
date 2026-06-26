import Link from "next/link";
import { ChevronRight } from "lucide-react";

// items: [{ label, href }] — у последнего элемента href можно не указывать (текущая страница)
export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-slate-400">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-x-1.5">
              {isLast || !item.href ? (
                <span className="font-medium text-slate-200" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              )}
              {!isLast ? <ChevronRight size={14} className="text-slate-600" /> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
