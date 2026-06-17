import {
  Blocks,
  Bot,
  BrainCircuit,
  Code2,
  FormInput,
  GitBranch,
  Globe,
  Lightbulb,
  Rocket,
  Send,
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
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Telegram",
    icon: Send,
    items: ["Telegram Bot API", "сценарии ботов", "кнопки и меню", "сбор заявок", "уведомления"],
  },
  {
    title: "AI / вайбкодинг",
    icon: BrainCircuit,
    items: ["ChatGPT", "Codex", "Cursor", "проектирование промптов", "генерация структуры", "быстрая сборка MVP"],
  },
  {
    title: "Продуктовая логика",
    icon: FormInput,
    items: ["структура сайтов", "структура лендингов", "пользовательские сценарии", "квизы и мини-аппы", "тестирование идей"],
  },
];

export const aboutFacts = [
  { text: "собираю сайты и лендинги", icon: Globe },
  { text: "проектирую Telegram-ботов", icon: Bot },
  { text: "делаю мини-аппы под задачу", icon: Blocks },
  { text: "использую AI как рабочий инструмент", icon: Sparkles },
  { text: "люблю быстрые MVP и реальные эксперименты", icon: Lightbulb },
];
