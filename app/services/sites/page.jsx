import { Check, Globe } from "lucide-react";
import Link from "next/link";
import Header from "../../../components/Header.jsx";
import Footer from "../../../components/Footer.jsx";

export const metadata = {
  title: "Разработка сайтов под ключ — лендинги, сайты-визитки, каталоги и интернет-магазины",
  description:
    "Создание сайтов под ключ для бизнеса, услуг и экспертов. Лендинги, сайты-визитки, портфолио, многостраничные сайты, каталоги и интернет-магазины с адаптацией под телефон, формами заявок и базовой SEO-настройкой.",
};

const siteTypes = [
  {
    title: "Лендинг под ключ",
    description:
      "Одностраничный сайт для продажи одной услуги, продукта, курса, мероприятия или новой идеи. Подходит, если нужно быстро запустить рекламу, протестировать нишу или собрать заявки.",
    items: [
      "первый экран с сильным оффером",
      "описание услуги или продукта",
      "преимущества",
      "блоки доверия",
      "отзывы",
      "цены или тарифы",
      "форма заявки",
      "кнопки Telegram / WhatsApp",
      "подключение Telegram-бота для заявок",
      "адаптация под телефон",
      "базовая SEO-настройка",
    ],
  },
  {
    title: "Сайт-визитка",
    description:
      "Небольшой сайт для эксперта, мастера, студии, салона, локального бизнеса или частной практики. Помогает коротко рассказать о себе, показать услуги, цены и контакты.",
    items: [
      "информация о специалисте или компании",
      "список услуг",
      "цены",
      "фото и описание",
      "отзывы клиентов",
      "контакты",
      "карта",
      "кнопки мессенджеров",
      "форма заявки",
      "адаптивная версия для телефона",
      "базовая SEO-настройка",
    ],
  },
  {
    title: "Сайт-портфолио",
    description:
      "Сайт для специалистов, студий, дизайнеров, мастеров, агентств и команд, которым важно показать свои работы, кейсы и результат.",
    items: [
      "главная страница с позиционированием",
      "раздел с работами",
      "карточки кейсов",
      "описание задачи и результата",
      "фото, видео или скриншоты проектов",
      "отзывы клиентов",
      "форма заявки",
      "кнопки связи",
      "фильтрация работ по категориям",
      "адаптация под телефон",
    ],
  },
  {
    title: "Многостраничный сайт",
    description:
      "Сайт с отдельными страницами под услуги, компанию, портфолио, контакты, отзывы, FAQ и другие разделы. Подходит для бизнеса, которому нужна структура и доверие.",
    items: [
      "главная страница",
      "отдельные страницы услуг",
      "страница «О компании»",
      "портфолио или кейсы",
      "отзывы",
      "FAQ",
      "контакты",
      "формы заявок",
      "блог или новости",
      "простая админка для контента",
      "базовая SEO-структура",
      "адаптация под телефон",
    ],
  },
  {
    title: "Информационный сайт",
    description:
      "Сайт для публикации новостей, статей, инструкций, обзоров, экспертных материалов и полезного контента. Подходит для проектов, где важно регулярно добавлять информацию.",
    items: [
      "раздел новостей",
      "статьи и материалы",
      "категории",
      "поиск по сайту",
      "страницы авторов",
      "портфолио или база материалов",
      "до 100 страниц контента",
      "простая админка для добавления и редактирования",
      "SEO-структура для продвижения",
      "адаптация под телефон",
    ],
  },
  {
    title: "Сайт-каталог",
    description:
      "Сайт для демонстрации товаров, услуг, направлений, объектов или предложений без сложной системы интернет-магазина. Подходит, если нужно показать ассортимент и получать заявки.",
    items: [
      "категории товаров или услуг",
      "карточки товаров",
      "фото",
      "описание",
      "характеристики",
      "цены",
      "фильтры",
      "поиск",
      "кнопка «Оставить заявку»",
      "отправка заявки в Telegram",
      "простая админка для управления каталогом",
      "адаптация под телефон",
    ],
  },
  {
    title: "Интернет-магазин",
    description:
      "Сайт для продажи товаров онлайн с корзиной, заказами, оплатой и управлением товарами. Подходит, если нужно принимать заказы через сайт и управлять продажами.",
    items: [
      "каталог товаров",
      "категории",
      "фильтры",
      "поиск",
      "сравнение товаров",
      "карточки товаров",
      "корзина",
      "оформление заказа",
      "онлайн-оплата",
      "личный кабинет покупателя",
      "уведомления о заказах",
      "админка товаров",
      "управление остатками и складами",
      "статусы заказов",
      "адаптация под телефон",
    ],
  },
];

const choiceGuide = [
  { condition: "Нужно быстро проверить идею или запустить рекламу", answer: "подойдёт лендинг." },
  { condition: "Нужно представить себя, услугу или небольшой бизнес", answer: "подойдёт сайт-визитка." },
  { condition: "Важно показать работы и кейсы", answer: "лучше сделать сайт-портфолио." },
  { condition: "У бизнеса несколько услуг и нужна понятная структура", answer: "подойдёт многостраничный сайт." },
  { condition: "Нужно публиковать статьи, новости или материалы", answer: "нужен информационный сайт." },
  { condition: "Нужно показать товары или услуги без полноценной онлайн-оплаты", answer: "подойдёт сайт-каталог." },
  { condition: "Нужно продавать товары онлайн", answer: "нужен интернет-магазин." },
];

export default function SitesPage() {
  return (
    <div className="site-shell min-h-dvh w-full max-w-full overflow-x-hidden text-[#F9FAFB] antialiased selection:bg-amber-300 selection:text-slate-950">
      <Header />
      <main className="px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

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

            <div className="flex flex-col gap-3 max-w-2xl">
              <p className="text-base leading-7 text-slate-300">
                Создаю сайты, которые помогают бизнесу понятно представить услуги, вызвать доверие у клиентов и получать заявки через сайт, Telegram, WhatsApp или форму обратной связи.
              </p>
              <p className="text-base leading-7 text-slate-300">
                Разрабатываю лендинги, сайты-визитки, портфолио, многостраничные сайты, информационные сайты, сайты-каталоги и интернет-магазины. Формат сайта подбирается под задачу: быстро протестировать идею, запустить рекламу, показать услуги, собрать заявки, принимать заказы или продавать товары онлайн.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#brief"
                className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
              >
                Обсудить сайт
              </Link>
              <a
                href="#site-types"
                className="inline-flex min-h-12 items-center justify-center rounded-lg border border-cyan-300/24 px-5 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10 active:translate-y-px"
              >
                Посмотреть варианты
              </a>
            </div>
          </div>

          {/* Карточки типов сайтов */}
          <section id="site-types" className="mb-10 scroll-mt-24">
            <div className="mb-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Форматы</p>
              <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Какие сайты можно заказать
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                Выберите формат сайта под вашу задачу: от простой страницы для заявок до каталога или интернет-магазина с корзиной, оплатой и админкой.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {siteTypes.map((type) => (
                <SiteTypeCard key={type.title} {...type} />
              ))}
            </div>
          </section>

          {/* Как выбрать */}
          <section className="mb-10 rounded-[24px] border border-white/10 bg-[#0F1628]/72 p-6 backdrop-blur-xl sm:p-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Выбор формата</p>
            <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
              Какой сайт выбрать
            </h2>
            <ul className="flex flex-col gap-3">
              {choiceGuide.map(({ condition, answer }) => (
                <li key={condition} className="flex items-start gap-3 text-sm leading-6 text-slate-300 sm:text-base">
                  <span className="mt-1 grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
                    <Check size={10} strokeWidth={2.5} />
                  </span>
                  <span>
                    <span className="text-slate-400">Если {condition} — </span>
                    <span className="font-semibold text-white">{answer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Финальный CTA */}
          <section className="flex flex-col items-center gap-5 rounded-[24px] border border-amber-300/20 bg-amber-300/5 px-6 py-12 text-center sm:px-8">
            <h2 className="max-w-xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Хотите понять, какой сайт нужен вам?
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              Напишите, что вы хотите запустить: услугу, портфолио, каталог, информационный сайт или интернет-магазин. Я помогу выбрать подходящий формат сайта, предложу структуру и подскажу, какое решение лучше подойдёт под вашу задачу.
            </p>
            <Link
              href="/#brief"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 active:translate-y-px"
            >
              Обсудить сайт
            </Link>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

function SiteTypeCard({ title, description, items }) {
  return (
    <article className="flex flex-col rounded-lg border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-[0_0_24px_rgba(103,232,249,0.14),0_8px_32px_rgba(0,0,0,0.4)]">
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="mb-4 text-sm leading-6 text-slate-400">{description}</p>
      <ul className="mt-auto grid gap-2 border-t border-white/8 pt-4">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="grid size-4 shrink-0 place-items-center rounded-full bg-cyan-300/12 text-cyan-300">
              <Check size={10} strokeWidth={2.5} />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
