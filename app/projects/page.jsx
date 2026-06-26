import Link from "next/link";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProjectsFilter from "../../components/ProjectsFilter.jsx";

export const metadata = {
  title: "Все работы | Я спросил у ИИ",
  description: "Портфолио Я спросил у ИИ: сайты, лендинги, Telegram-боты, мини-аппы и MVP.",
};

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#0F1628]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Все работы</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
              Полное портфолио по шести категориям
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-300">
              Здесь собраны все кейсы и концепты: сайты, лендинги, Telegram-боты, мини-аппы и MVP.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
              >
                Вернуться на главную
              </Link>
            </div>
          </div>

          <ProjectsFilter />
        </div>
      </main>
      <Footer />
    </div>
  );
}
