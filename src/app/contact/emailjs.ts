// Opcional: formulário de contato pelo EmailJS (https://www.emailjs.com/). As três variáveis ficam
// em .env.local (veja .env.example). Sem elas, a página de contato mostra só o e-mail.
export const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? '',
}

export const contactFormEnabled = Object.values(emailjsConfig).every(Boolean)
