import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  // Parse the incoming request body as FormData
  const data = await request.json();
  const email = data.email;

  // Validate the email address
  if (!email || !isValidEmail(email.toString())) {
    return new Response("Invalid email address", { status: 400 });
  }

  // Send the email to your Discord webhook
  const discordWebhookUrl = import.meta.env.DISCORD_WEBHOOK_URL;
  if (!discordWebhookUrl) {
    return new Response("Webhook URL is not set", { status: 500 });
  }

  try {
    await sendToDiscord(discordWebhookUrl, email.toString());
    return new Response("Success", { status: 200 });
  } catch (error) {
    console.error("Error sending message:", error);
    return new Response("Error sending message to Discord", { status: 500 });
  }
};

// Helper functions
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

async function sendToDiscord(webhookUrl: string, email: string): Promise<void> {
  const payload = {
    content: `New early access request: ${email}`,
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
