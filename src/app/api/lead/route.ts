import { escapeHtml } from "@/lib/escapeHtml";

type LeadPayload = {
  name?: string;
  phone?: string;
  messenger?: string;
  comment?: string;
};

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    console.error("Telegram credentials are not configured");
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

  let body: LeadPayload;

  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = body.name?.trim() || "—";
  const phone = body.phone?.trim() || "";
  const messenger = body.messenger?.trim() || "—";
  const comment = body.comment?.trim() || "—";

  if (!phone) {
    return Response.json({ error: "Phone is required" }, { status: 400 });
  }

  const text =
    "🔔 <b>Новая заявка с сайта!</b>\n\n" +
    `👤 Имя: ${escapeHtml(name)}\n` +
    `📞 Телефон: ${escapeHtml(phone)}\n` +
    `💬 Мессенджер: ${escapeHtml(messenger)}\n` +
    `🔗 Комментарий: ${escapeHtml(comment)}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      const errorPayload = await response.text();
      console.error("Telegram API error:", response.status, errorPayload);
      return Response.json({ error: "Telegram delivery failed" }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Telegram request failed:", error);
    return Response.json({ error: "Telegram request failed" }, { status: 502 });
  }
}
