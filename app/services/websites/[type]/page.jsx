import { ArrowLeft, Check, Clock } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../../components/Header.jsx";
import Footer from "../../../../components/Footer.jsx";
import Breadcrumbs from "../../../../components/Breadcrumbs.jsx";
import { BriefModalTrigger } from "../../../../components/BriefModal.jsx";
import { getWebsiteType, websiteTypes, workSteps } from "../../../../data/website-types.js";

export function generateStaticParams() {
  return websiteTypes.map((type) => ({ type: type.slug }));
}

export async function generateMetadata({ params }) {
  const { type: slug } = await params;
  const type = getWebsiteType(slug);
  if (!type) return {};
  return {
    title: type.metaTitle,
    description: type.metaDescription,
  };
}

export default async function WebsiteTypePage({ params }) {
  const { type: slug } = await params;
  const type = getWebsiteType(slug);
  if (!type) notFound();

  const Icon = type.icon;

  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Сайты", href: "/services/websites" },
              { label: type.name },
            ]}
          />

          {/* Hero */}
          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#0F1628]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                <Icon size={22} strokeWidth={1.8} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Сайты · {type.name}
              </p>
            </div>

            <h1 className="max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
              {type.h1}
            </h1>

            <p className="max-w-2xl text-base leading-7 text-slate-300">{type.intro}</p>

            <div className="flex flex-wrap items-center gap-3">
              <BriefModalTrigger label="Обсудить проект" />
              <span className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-white/12 px-5 text-sm font-semibold text-slate-200">
                <Clock size={16} className="text-cyan-300" />
                Срок: {type.deadline}
              </span>
            </div>
          </div>

          {/* Для кого подходит */}
          <Section title="Для кого подходит">
            <ul className="grid gap-3 sm:grid-cols-2">
              {type.forWhom.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </Section>

          {/* Что входит */}
          <Section title="Что входит">
            <ul className="grid gap-3 sm:grid-cols-2">
              {type.included.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </Section>

          {/* Какие блоки и функции можно добавить */}
          <Section title="Какие блоки и функции можно добавить">
            <ul className="grid gap-3 sm:grid-cols-2">
              {type.features.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </Section>

          {/* Как проходит работа */}
          <Section title="Как проходит работа">
            <ol className="grid gap-4 sm:grid-cols-2">
              {workSteps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex flex-col gap-2 rounded-2xl border border-white/8 bg-white/[0.02] p-5"
                >
                  <span className="grid size-9 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-sm font-semibold text-cyan-200">
                    {index + 1}
                  </span>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-6 text-slate-400">{step.text}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* Финальный CTA */}
          <section className="mb-8 flex flex-col items-center gap-5 rounded-[24px] border border-amber-300/20 bg-amber-300/5 px-6 py-12 text-center sm:px-8">
            <h2 className="max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Хотите запустить {type.name.toLowerCase()}?
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              Напишите, какую задачу нужно решить и что важно показать клиентам. Я помогу с форматом, предложу структуру и подскажу, какое решение лучше подойдёт под вашу задачу.
            </p>
            <BriefModalTrigger label="Обсудить проект" />
          </section>

          {/* Назад к видам сайтов */}
          <Link
            href="/services/websites"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Назад к видам сайтов
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-6 rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-6 backdrop-blur-xl sm:p-8">
      <h2 className="mb-5 text-xl font-semibold text-white sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function CheckItem({ children }) {
  return (
    <li className="flex items-start gap-2.5 text-sm leading-6 text-slate-300 sm:text-base">
      <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
        <Check size={10} strokeWidth={2.5} />
      </span>
      {children}
    </li>
  );
}
