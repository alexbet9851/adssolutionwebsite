import { escapeHtml } from "@/lib/escapeHtml";

export async function POST(request: Request) {
  let body: {
    name?: string;
    phone?: string;
    messenger?: string;
    comment?: string;
  };

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const phone = body.phone?.trim() || "";

  if (!phone) {
    return Response.json({ error: "Phone is required" }, { status: 400 });
  }

  const text =
    "🔔 <b>Новая заявка с сайта!</b>\n\n" +
    `👤 Имя: ${escapeHtml(body.name?.trim() || "—")}\n` +
    `📞 Телефон: ${escapeHtml(phone)}\n` +
    `💬 Мессенджер: ${escapeHtml(body.messenger?.trim() || "—")}\n` +
    `🔗 Комментарий: ${escapeHtml(body.comment?.trim() || "—")}`;

  const response = await fetch(
    "https://api.telegram.org/bot8919164002:AAEJCw8CAYswwRpgqHlj4KnHfGGDnoYaTyE/sendMessage",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: "-1003913549683",
        text,
        parse_mode: "HTML",
      }),
    },
  );

  if (!response.ok) {
    return Response.json({ error: "Telegram delivery failed" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
