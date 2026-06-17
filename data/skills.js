import {
  Bot,
  BrainCircuit,
  Code2,
  FormInput,
  GitBranch,
  Globe,
  Lightbulb,
  Rocket,
  Send,
  Server,
  Sparkles,
} from "lucide-react";

export const contacts = {
  telegram: "https://t.me/yasprosil_ii",
  email: "yasprosil.ai@gmail.com",
};

export const navItems = [
  { label: "Проекты", href: "#projects" },
  { label: "Услуги", href: "#services" },
  { label: "Процесс", href: "#process" },
  { label: "Обо мне", href: "#about" },
  { label: "Контакты", href: "#contact" },
];

export const processSteps = [
  {
    title: "Идея",
    icon: Sparkles,
    text: "Разбираю, что нужно собрать: сайт, лендинг, бот, мини-апп или MVP. Уточняю цель, формат и результат.",
  },
  {
    title: "Структура",
    icon: GitBranch,
    text: "Продумываю логику, блоки, разделы, сценарии, пользовательский путь и важные акценты интерфейса.",
  },
  {
    title: "Прототип",
    icon: BrainCircuit,
    text: "Собираю первую рабочую версию с помощью AI-инструментов и вайбкодинга, чтобы быстро перейти к проверке.",
  },
  {
    title: "Запуск",
    icon: Rocket,
    text: "Довожу интерфейс, проверяю адаптив, убираю шероховатости и готовлю проект к показу или использованию.",
  },
];

export const skillGroups = [
  {
    title: "Разработка",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Telegram",
    icon: Send,
    items: ["Telegram Bot API", "aiogram", "сценарии и FSM", "приём оплат", "подтверждение платежей", "вебхуки"],
  },
  {
    title: "AI / вайбкодинг",
    icon: BrainCircuit,
    items: ["Claude / Anthropic API", "распознавание по фото", "проектирование промптов", "ChatGPT", "Codex", "Cursor"],
  },
  {
    title: "Бэкенд / инфраструктура",
    icon: Server,
    items: ["Python", "Flask", "Supabase", "Docker", "Fly.io", "Render"],
  },
  {
    title: "Продуктовая логика",
    icon: FormInput,
    items: ["структура сайтов", "структура лендингов", "пользовательские сценарии", "квизы и мини-аппы", "тестирование идей"],
  },
];

export const aboutFacts = [
  { text: "собираю сайты и лендинги", icon: Globe },
  { text: "делаю Telegram-ботов с приёмом оплат", icon: Bot },
  { text: "встраиваю AI на базе Claude", icon: BrainCircuit },
  { text: "использую AI как рабочий инструмент", icon: Sparkles },
  { text: "люблю быстрые MVP и реальные эксперименты", icon: Lightbulb },
];
