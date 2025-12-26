import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || "adam@cyberga.de",
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `
Name: ${name}
E-Mail: ${email}
Unternehmen: ${company || "Nicht angegeben"}

Nachricht:
${message}
      `,
      html: `
<h2>Neue Kontaktanfrage</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
<p><strong>Unternehmen:</strong> ${company || "Nicht angegeben"}</p>
<hr />
<h3>Nachricht:</h3>
<p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
