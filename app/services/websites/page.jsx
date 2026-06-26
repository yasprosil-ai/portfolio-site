import { Check, Globe } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import WebsiteTypeCard from "../../../components/WebsiteTypeCard.jsx";
import { websiteTypes, websiteChoiceGuide } from "../../../data/website-types.js";
import { contacts } from "../../../data/skills.js";

export const metadata = {
  title: "Разработка сайтов под ключ — лендинги, сайты-визитки, каталоги и интернет-магазины",
  description:
    "Создание сайтов под ключ для бизнеса, услуг и экспертов. Лендинги, сайты-визитки, портфолио, многостраничные сайты, сайты-каталоги и интернет-магазины с адаптацией под телефон, формами заявок и базовой SEO-настройкой.",
};

export default function WebsitesPage() {
  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Сайты" },
            ]}
          />

          {/* Hero */}
          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#0F1628]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                <Globe size={22} strokeWidth={1.8} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Услуга</p>
            </div>

            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Разработка сайтов под ключ для бизнеса, услуг и экспертов
            </h1>

            <div className="flex max-w-2xl flex-col gap-3">
              <p className="text-base leading-7 text-slate-300">
                Создаю сайты, которые помогают бизнесу понятно представить услуги, вызвать доверие у клиентов и получать заявки через сайт, Telegram, WhatsApp или форму обратной связи.
              </p>
              <p className="text-base leading-7 text-slate-300">
                Подбираю формат сайта под задачу: быстро протестировать идею, запустить рекламу, показать услуги, собрать заявки, презентовать портфолио, показать каталог или продавать товары онлайн.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={contacts.telegram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
              >
                Обсудить сайт
              </a>
              <a
                href="#site-types"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
              >
                Выбрать формат
              </a>
            </div>
          </div>

          {/* Карточки видов сайтов */}
          <section id="site-types" className="mb-10 scroll-mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Форматы</p>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Выберите формат сайта
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                От простой страницы для заявок до каталога или интернет-магазина. Выберите вариант, который ближе к вашей задаче, и перейдите на подробную страницу.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {websiteTypes.map((type) => (
                <WebsiteTypeCard key={type.slug} type={type} />
              ))}
            </div>
          </section>

          {/* Как выбрать */}
          <section className="mb-10 rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Выбор формата</p>
            <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">Как выбрать подходящий сайт</h2>
            <ul className="flex flex-col gap-3">
              {websiteChoiceGuide.map(({ condition, answer }) => (
                <li
                  key={condition}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                >
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
                    <Check size={10} strokeWidth={2.5} />
                  </span>
                  <span>
                    <span className="text-slate-400">Если {condition} — </span>
                    <span className="font-semibold text-white">{answer}.</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Финальный CTA */}
          <section className="flex flex-col items-center gap-5 rounded-[24px] border border-amber-300/20 bg-amber-300/5 px-6 py-12 text-center sm:px-8">
            <h2 className="max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Не знаете, какой сайт выбрать?
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              Напишите, что вы хотите запустить: услугу, портфолио, каталог, интернет-магазин или новую идею. Я помогу выбрать подходящий формат сайта и предложу структуру под вашу задачу.
            </p>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
            >
              Обсудить сайт
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
