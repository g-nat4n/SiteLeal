import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    const map: Record<string, string> = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
    return map[char];
  });
}

export async function POST(req: NextRequest) {
  try {
    const { nome, email, telefone, assunto, mensagem } = await req.json();

    if (!nome || !email || !mensagem) {
      return NextResponse.json({ error: "Nome, e-mail e mensagem são obrigatórios." }, { status: 400 });
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contato@lealcondominios.com.br";
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass) {
      return NextResponse.json(
        { error: "O envio por e-mail ainda não está configurado.", code: "SMTP_MISSING" },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const safeName = escapeHtml(String(nome));
    const safeEmail = escapeHtml(String(email));
    const safePhone = escapeHtml(String(telefone || "Não informado"));
    const safeSubject = escapeHtml(String(assunto || "Contato"));
    const safeMessage = escapeHtml(String(mensagem)).replace(/\n/g, "<br />");

    await transporter.sendMail({
      from: smtpFrom,
      to: contactEmail,
      replyTo: email,
      subject: `[Leal Condomínios] ${assunto || "Contato"} — ${nome}`,
      text: [`Nome: ${nome}`, `E-mail: ${email}`, `Telefone: ${telefone || "Não informado"}`, `Assunto: ${assunto || "Contato"}`, "", "Mensagem:", mensagem].join("\n"),
      html: `
        <h2>Nova mensagem do site</h2>
        <p><strong>Nome:</strong> ${safeName}</p>
        <p><strong>E-mail:</strong> ${safeEmail}</p>
        <p><strong>Telefone:</strong> ${safePhone}</p>
        <p><strong>Assunto:</strong> ${safeSubject}</p>
        <hr />
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 });
  }
}
