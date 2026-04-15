import { NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  note?: string;
  _hp?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    // Honeypot check
    if (body._hp) {
      return NextResponse.json({ success: true }); // silently succeed
    }

    const { firstName, lastName, email, note } = body;

    // Server-side validation
    if (!firstName?.trim() || !lastName?.trim() || !email?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, and email are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!toEmail || !fromEmail) {
      console.error("Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL env vars");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const timestamp = new Date().toISOString();

    const resend = getResend();
    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `New Lamor inquiry from ${firstName.trim()} ${lastName.trim()}`,
      html: `
        <div style="font-family: sans-serif; max-width: 480px; color: #1a1a1a;">
          <h2 style="margin-bottom: 16px;">New Lamor Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">First Name</td>
              <td style="padding: 8px 0;">${escapeHtml(firstName.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Last Name</td>
              <td style="padding: 8px 0;">${escapeHtml(lastName.trim())}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Email</td>
              <td style="padding: 8px 0;">${escapeHtml(email.trim())}</td>
            </tr>
            ${
              note?.trim()
                ? `<tr>
              <td style="padding: 8px 0; font-weight: 600;">Note</td>
              <td style="padding: 8px 0;">${escapeHtml(note.trim())}</td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding: 8px 0; font-weight: 600;">Submitted</td>
              <td style="padding: 8px 0;">${timestamp}</td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
