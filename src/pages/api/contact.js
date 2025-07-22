export const prerender = false;

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APIKEY);

export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, matter, message, role, source, phone, city } = body;

    // Validación básica
    if (!name || !email || !matter) {
      return new Response("Faltan datos requeridos", { status: 400 });
    }

    const text = `
Has recibido un nuevo mensaje de contacto:

🧑‍💼 Nombre: ${name}
📧 Email: ${email}
💼 Rol: ${role || "No especificado"}
🎯 Motivo del contacto: ${matter}
🌐 Cómo llegó: ${source || "No especificado"}
📱 Teléfono: ${phone || "No proporcionado"}
📍 Ciudad: ${city || "No proporcionada"}

📝 Mensaje:
${message || "No se proporcionó mensaje."}
`;

    const data = {
      from: "TAPE WEB <onboarding@resend.dev>",
      to: "agustin@tapeproducciones.com",
      replyTo: email,
      subject: `Nuevo mensaje de ${name} - ${matter}`,
      text,
    };

    await resend.emails.send(data);

    return new Response("Correo enviado correctamente", { status: 200 });
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return new Response("Error en el servidor", { status: 500 });
  }
}
