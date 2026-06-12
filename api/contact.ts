import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL || "visionaryproductionss@gmail.com";
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
};

function clean(value?: string) {
  return value?.trim() || "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  if (!resendApiKey || !contactFromEmail) {
    return res.status(500).json({
      error:
        "Email delivery is not configured yet. Add RESEND_API_KEY and a verified CONTACT_FROM_EMAIL in Vercel or your local env.",
    });
  }

  const payload = (req.body || {}) as ContactPayload;
  const name = clean(payload.name);
  const email = clean(payload.email);
  const phone = clean(payload.phone);
  const inquiryType = clean(payload.inquiryType);
  const message = clean(payload.message);

  if (!name || !email || !message) {
    return res.status(400).json({
      error: "Name, email, and message are required.",
    });
  }

  const resend = new Resend(resendApiKey);

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: `New ${inquiryType || "Contact"} inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Inquiry Type: ${inquiryType || "Not specified"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #101010;">
          <h2>New contact inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone || "Not provided")}</p>
          <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType || "Not specified")}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Contact form send failed", error);
    return res.status(500).json({
      error: "Unable to send your inquiry right now. Please try again in a moment.",
    });
  }
}
