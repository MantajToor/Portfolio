import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "mantaj2121@gmail.com",
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    html: `
      <div style="font-family:monospace;max-width:600px;margin:auto;padding:24px;background:#0c0a1a;color:#ede8f5;border:2px solid #2d2858;border-radius:4px;">
        <h2 style="color:#ffcf40;font-size:14px;letter-spacing:2px;margin-bottom:16px;">NEW PORTFOLIO MESSAGE</h2>
        <p style="color:#7a7499;font-size:11px;margin-bottom:4px;">FROM</p>
        <p style="margin-bottom:16px;">${name} &lt;${email}&gt;</p>
        <p style="color:#7a7499;font-size:11px;margin-bottom:4px;">MESSAGE</p>
        <p style="line-height:1.7;white-space:pre-wrap;">${message}</p>
        <hr style="border-color:#2d2858;margin-top:24px;" />
        <p style="color:#7a7499;font-size:10px;margin-top:12px;">Sent via mantajtoor.dev contact form</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
