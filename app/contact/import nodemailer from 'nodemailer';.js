import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, phone, message, company } = data || {};

    // Honeypot (spamfilter)
    if (company) return Response.json({ ok: true });

    if (!name || !email || !message) {
      return new Response('Mangler felt', { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // Port 465 krever secure: true
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const subject = `Ny henvendelse fra ${name}`;
    const text = `
Navn: ${name}
E-post: ${email}
Telefon: ${phone || '-'}
---
${message}
    `.trim();

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif">
        <h2>Ny henvendelse fra nettsiden</h2>
        <p><b>Navn:</b> ${name}</p>
        <p><b>E-post:</b> ${email}</p>
        <p><b>Telefon:</b> ${phone || '-'}</p>
        <hr />
        <pre style="white-space:pre-wrap;font:inherit">${message}</pre>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject,
      text,
      html,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('Mailer error:', err);
    return new Response('Kunne ikke sende', { status: 500 });
  }
}