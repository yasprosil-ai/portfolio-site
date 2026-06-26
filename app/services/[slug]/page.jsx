import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import { services } from "../../../data/services.js";

export function generateStaticParams() {
  // У «Сайтов» отдельная статическая страница /services/websites со своей структурой,
  // поэтому исключаем её из динамического роута, чтобы не было конфликта путей.
  return services.filter((s) => s.slug !== "websites").map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | Я спросил у ИИ`,
    description: service.text,
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Шапка страницы */}
          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#0F1628]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Услуга</p>
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              {service.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">{service.text}</p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#services"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
              >
                Все услуги
              </Link>
              <Link
                href="/#brief"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
              >
                Рассчитать стоимость
              </Link>
            </div>
          </div>

          {/* Заглушка */}
          <div className="flex flex-col items-center justify-center gap-5 rounded-[24px] border border-white/10 bg-[#0F1628]/72 py-24 text-center backdrop-blur-xl">
            <span className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
              В разработке
            </span>
            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Подробное описание услуги появится скоро. Если уже есть задача — напиши, обсудим.
            </p>
            <Link
              href="/#brief"
              className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-white/28 hover:bg-white/6 active:translate-y-px"
            >
              Обсудить задачу
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
