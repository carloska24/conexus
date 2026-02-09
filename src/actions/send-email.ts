"use server";

import { Resend } from "resend";

let resend: Resend | null = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

export async function sendEmail(formData: FormData) {
  const formType = formData.get("formType") as string;
  
  // Extrair campos comuns
  const nome = formData.get("nome") as string;
  const email = formData.get("email") as string;
  const telefone = formData.get("telefone") || formData.get("whatsapp") as string;
  const empresa = formData.get("empresa") as string;

  // Campos específicos
  const mensagem = formData.get("mensagem") as string; // Contato
  const cargo = formData.get("cargo") as string; // Parceiro
  const site = formData.get("site") as string; // Parceiro
  const area = formData.get("area") as string; // Parceiro
  const diferenciais = formData.get("diferenciais") as string; // Parceiro

  console.log(`[Form Submission] Recebido formulário do tipo: ${formType}`);
  console.log(`[Form Data] Nome: ${nome}, Email: ${email}, Empresa: ${empresa}`);

  // Simulação de delay para UX
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Fallback se não tiver API Key configurada
  if (!resend) {
    console.warn("⚠️ AVISO: RESEND_API_KEY não configurada. Email não será enviado.");
    console.log("📝 Dados que seriam enviados:", {
      to: "contato@conexusbr.com", // Email padrão da empresa
      subject: `Novo Contato: ${formType} - ${nome}`,
      text: `Nome: ${nome}\nEmpresa: ${empresa}\nEmail: ${email}\n...`
    });
    
    // Retornamos sucesso para não quebrar a UI do usuário
    return { success: true, message: "Formulário recebido (Modo Simulação/Dev)" };
  }

  try {
    let subject = "";
    let html = "";

    if (formType === "contato") {
      subject = `[Site Conexus] Novo Contato: ${empresa}`;
      html = `
        <h1>Novo Contato pelo Site</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <hr />
        <h3>Mensagem:</h3>
        <p>${mensagem}</p>
      `;
    } else if (formType === "parceiro") {
      subject = `[Site Conexus] Nova Candidatura de Parceiro: ${empresa}`;
      html = `
        <h1>Nova Candidatura de Parceiro</h1>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Cargo:</strong> ${cargo}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${telefone}</p>
        <p><strong>Site:</strong> ${site}</p>
        <p><strong>Área:</strong> ${area}</p>
        <hr />
        <h3>Diferenciais:</h3>
        <p>${diferenciais}</p>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: "Conexus Site <onboarding@resend.dev>", // Domínio de teste padrão do Resend
      to: ["contato@conexusbr.com"], // Idealmente viria de uma ENV também
      replyTo: email,
      subject: subject,
      html: html,
    });

    if (error) {
      console.error("Erro ao enviar email via Resend:", error);
      return { success: false, message: "Erro ao processar envio de email." };
    }

    return { success: true, data };
  } catch (error) {
    console.error("Erro inesperado no servidor:", error);
    return { success: false, message: "Erro interno no servidor." };
  }
}
