import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true, // SSL/TLS on port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, subject, message } = await req.json();

    if (!name || !email || !company || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"ClearFin Website" <${process.env.SMTP_FROM}>`,
      to: process.env.CONTACT_TO,
      replyTo: email,
      subject: `[ClearFin] ${subject} — ${name} (${company})`,
      text: [
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || "—"}`,
        `Company: ${company}`,
        `Subject: ${subject}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      html: `
        <table style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#1A1A2E;max-width:600px;width:100%;border-collapse:collapse;">
          <tr><td colspan="2" style="background:#18112E;padding:28px 32px;">
            <span style="font-size:20px;font-weight:300;color:#E9D5FF;">Clear</span><span style="font-size:20px;font-weight:900;color:#FDF4FF;">Fin</span>
            <span style="display:block;font-size:11px;color:#9061F9;letter-spacing:2px;margin-top:4px;">NEW WEBSITE INQUIRY</span>
          </td></tr>
          <tr style="background:#F9F5FF;"><td style="padding:14px 32px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9061F9;width:120px;">Name</td><td style="padding:14px 32px;">${name}</td></tr>
          <tr><td style="padding:14px 32px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9061F9;">Email</td><td style="padding:14px 32px;"><a href="mailto:${email}" style="color:#7C3AED;">${email}</a></td></tr>
          <tr style="background:#F9F5FF;"><td style="padding:14px 32px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9061F9;">Phone</td><td style="padding:14px 32px;">${phone || "—"}</td></tr>
          <tr><td style="padding:14px 32px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9061F9;">Company</td><td style="padding:14px 32px;">${company}</td></tr>
          <tr style="background:#F9F5FF;"><td style="padding:14px 32px;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9061F9;">Subject</td><td style="padding:14px 32px;">${subject}</td></tr>
          <tr><td colspan="2" style="padding:24px 32px;border-top:1px solid #E9D5FF;">
            <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9061F9;margin-bottom:10px;">Message</div>
            <div style="line-height:1.7;white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>
          </td></tr>
          <tr><td colspan="2" style="padding:20px 32px;background:#F9F5FF;font-size:12px;color:#9061F9;border-top:1px solid #E9D5FF;">
            Sent from clearfin.ch contact form · ClearFin GmbH, Blegistrasse 8, 6340 Baar, Switzerland
          </td></tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again or email us directly." }, { status: 500 });
  }
}
