export const prerender = false;

import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);


export async function POST({ request }) {
  try {
    const body = await request.json();
    const { name, email, matter, message, role, source, phone, city } = body;

    // Validación básica
    if (!name || !email || !matter || !message || !role || !source) {
      return new Response("Faltan datos requeridos", { status: 400 });
    }

    const html = `
  <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
    <h2>>Hola, recibiste un mensaje desde tu página web:</h2>
    <p><strong>Nombre:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Rol:</strong> ${role || "No especificado"}</p>
    <p><strong>Motivo del contacto:</strong> ${matter}</p>
    <p><strong>Cómo llegó a TAPE:</strong> ${source || "No especificado"}</p>
    <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
    <p><strong>Ciudad:</strong> ${city || "No proporcionada"}</p>
    <hr>
    <p><strong>Mensaje:</strong></p>
    <blockquote style="margin-left: 1em; border-left: 4px solid #ccc; padding-left: 1em;">
      ${message || "No se proporcionó mensaje."}
    </blockquote>
    <hr />
    <p>Este correo fue enviado desde el sitio web tapeproducciones.com</p>
    <p>Si no esperabas este mensaje, simplemente ignoralo.</p>
  </div>
`;

    const data = {
      from: "TAPE WEB <contacto@tapeproducciones.com>",
      to: "tommy@tapeproducciones.com",
      replyTo: email,
      subject: `Nuevo mensaje enviado desde tu sitio web - ${name}`,
      html,
    };

    await resend.emails.send(data);

    return new Response("Correo enviado correctamente", { status: 200 });
  } catch (err) {
    console.error("Error al enviar correo:", err);
    return new Response("Error en el servidor", { status: 500 });
  }
}
