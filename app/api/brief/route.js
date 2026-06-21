import { BRIEF_SYSTEM_PROMPT } from "../../../data/brief-prompt.js";
import { contacts } from "../../../data/skills.js";

// Каждый запрос обрабатываем динамически, без кеширования ответов Next.js.
export const dynamic = "force-dynamic";

// Модель для диалога. Sonnet 4.6 — баланс качества и цены.
const MODEL = "claude-sonnet-4-6";
const LEAD_MARKER = "<!--LEAD-->";

export async function POST(request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "Чат временно недоступен. Напишите Сергею в Telegram." },
      { status: 503 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Некорректный запрос." }, { status: 400 });
  }

  const messages = Array.isArray(body?.messages) ? body.messages : [];
  if (messages.length === 0) {
    return Response.json({ error: "Пустой запрос." }, { status: 400 });
  }

  // Чистим историю: только роли user/assistant и непустой текст.
  const cleaned = messages
    .filter((m) => (m?.role === "user" || m?.role === "assistant") && typeof m?.content === "string")
    .map((m) => ({ role: m.role, content: m.content.trim() }))
    .filter((m) => m.content.length > 0);

  try {
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      cache: "no-store",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 2048,
        system: BRIEF_SYSTEM_PROMPT,
        messages: cleaned,
      }),
    });

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error("Anthropic API error:", res.status, detail);
      return Response.json(
        { error: "Не получилось получить ответ. Попробуйте ещё раз или напишите в Telegram." },
        { status: 502 },
      );
    }

    const data = await res.json();
    const rawReply = data?.content?.[0]?.text ?? "";

    // Маркер завершения: если он есть — отправляем заявку и убираем его из текста.
    const isLead = rawReply.includes(LEAD_MARKER);
    const reply = rawReply.replaceAll(LEAD_MARKER, "").trim();

    if (isLead) {
      // Не блокируем ответ клиенту, если доставка не сработает.
      await sendLead([...cleaned, { role: "assistant", content: reply }]).catch((err) =>
        console.error("Lead delivery failed:", err),
      );
    }

    return Response.json({
      reply,
      lead: isLead,
      _model: data?.model,
      _lastUser: cleaned[cleaned.length - 1]?.content,
    });
  } catch (err) {
    console.error("Brief route error:", err);
    return Response.json(
      { error: "Что-то пошло не так. Попробуйте ещё раз или напишите в Telegram." },
      { status: 500 },
    );
  }
}

// Доставка заявки Сергею: Telegram и/или email. Каждый канал включается,
// если для него заданы переменные окружения.
async function sendLead(conversation) {
  const transcript = conversation
    .map((m) => `${m.role === "user" ? "Клиент" : "AI"}: ${m.content}`)
    .join("\n\n");

  const text = `🆕 Новая заявка с сайта «Я спросил у ИИ»\n\n${transcript}`;

  await Promise.all([sendTelegram(text), sendEmail(transcript)]);
}

async function sendTelegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text }),
  });
}

async function sendEmail(transcript) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;

  const from = process.env.RESEND_FROM || "Заявки <onboarding@resend.dev>";

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: contacts.email,
      subject: "Новая заявка с сайта «Я спросил у ИИ»",
      text: transcript,
    }),
  });
}
