import { ArrowLeft, Bot, Check } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";
import Breadcrumbs from "../../../components/Breadcrumbs.jsx";
import TelegramBotTypeCard from "../../../components/TelegramBotTypeCard.jsx";
import { BriefModalTrigger } from "../../../components/BriefModal.jsx";
import { botCapabilities, botWorkSteps, telegramBotTypes } from "../../../data/telegram-bot-types.js";

export const metadata = {
  title: "Telegram-боты для бизнеса под ключ — заявки, заказы, запись и автоматизация",
  description:
    "Создаю Telegram-ботов для бизнеса: боты для заявок, заказов, записи клиентов, консультаций, клубов, уведомлений и автоматизации процессов. Помогаю заменить ручную рутину понятным цифровым инструментом.",
};

export default function TelegramBotsPage() {
  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Breadcrumbs
            items={[
              { label: "Главная", href: "/" },
              { label: "Telegram-боты" },
            ]}
          />

          {/* Hero */}
          <div className="mb-10 flex flex-col gap-5 rounded-[28px] border border-white/10 bg-[#0F1628]/72 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-8 lg:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-12 place-items-center rounded-lg border border-cyan-300/18 bg-cyan-300/8 text-cyan-200">
                <Bot size={22} strokeWidth={1.8} />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Автоматизация бизнеса в Telegram
              </p>
            </div>

            <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Создаю Telegram-ботов, которые принимают заявки, заказы и автоматизируют рутину
            </h1>

            <div className="flex max-w-2xl flex-col gap-3">
              <p className="text-base leading-7 text-slate-300">
                Telegram-бот может не просто отвечать на сообщения, а вести клиента по понятному сценарию: задать вопросы, собрать данные, посчитать стоимость, отправить заявку, уведомить администратора и помочь контролировать процесс.
              </p>
              <p className="text-base leading-7 text-slate-300">
                Я делаю Telegram-ботов под конкретную задачу бизнеса: от простого бота для заявок до более сложной системы с базой данных, уведомлениями, статусами, админ-логикой и интеграциями.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <BriefModalTrigger label="Обсудить Telegram-бота" />
              <a
                href="#bot-types"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
              >
                Смотреть варианты
              </a>
            </div>
          </div>

          {/* Какие задачи решает */}
          <section className="mb-10 rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Возможности</p>
            <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
              Какие задачи решает Telegram-бот
            </h2>
            <p className="mb-6 max-w-2xl text-base leading-7 text-slate-300">
              Telegram-бот помогает автоматизировать то, что обычно делает человек вручную: принимает заявки, задаёт вопросы, собирает данные, отправляет уведомления, считает стоимость, записывает клиентов и помогает не терять обращения.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "принимать заявки",
                "собирать данные клиента",
                "задавать уточняющие вопросы",
                "считать стоимость",
                "отправлять уведомления",
                "напоминать о действиях",
                "передавать информацию администратору",
                "хранить заявки в базе",
                "работать как мини-админка внутри Telegram",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                >
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
                    <Check size={10} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Карточки видов ботов */}
          <section id="bot-types" className="mb-10 scroll-mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Виды ботов</p>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Выберите вид Telegram-бота
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                От простого бота для заявок до системы управления клубом или командой. Выберите вариант, который ближе к вашей задаче.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {telegramBotTypes.map((type) => (
                <TelegramBotTypeCard key={type.slug} type={type} />
              ))}
            </div>
          </section>

          {/* Как я создаю Telegram-бота */}
          <section className="mb-10 rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Процесс</p>
            <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
              Как я создаю Telegram-бота
            </h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {botWorkSteps.map((step, index) => (
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
          </section>

          {/* Что можно добавить */}
          <section className="mb-10 rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Расширения</p>
            <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
              Что можно добавить в Telegram-бота
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {botCapabilities.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base"
                >
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
                    <Check size={10} strokeWidth={2.5} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Финальный CTA */}
          <section className="mb-8 flex flex-col items-center gap-5 rounded-[24px] border border-amber-300/20 bg-amber-300/5 px-6 py-12 text-center sm:px-8">
            <h2 className="max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Нужен Telegram-бот для бизнеса?
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              Расскажите, что должен делать бот: принимать заявки, оформлять заказы, записывать клиентов, отвечать на вопросы или автоматизировать внутреннюю рутину.
            </p>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              Я помогу разложить задачу на понятный сценарий и предложу, какой Telegram-бот лучше подойдёт именно под ваш бизнес.
            </p>
            <BriefModalTrigger label="Обсудить Telegram-бота" />
          </section>

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Назад к видам услуг
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
