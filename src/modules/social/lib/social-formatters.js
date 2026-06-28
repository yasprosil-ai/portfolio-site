import { POST_STATUSES } from "./social-constants.js";

export function formatDateTime(value) {
  if (!value) return "—";

  return new Intl.DateTimeFormat("ru-RU", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export function getStatusMeta(status) {
  return POST_STATUSES[status] ?? POST_STATUSES.draft;
}

export function truncateText(value, max = 120) {
  if (!value) return "";
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1)}…`;
}
