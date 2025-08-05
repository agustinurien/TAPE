import React, { useEffect, useState } from "react";
import logo from "../../assets/logo2Faq.png";
import "./form.css";
const Form = () => {
  const [showForm, setShowForm] = useState(false);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const handleOpen = () => setShowForm(true);
    window.addEventListener("abrirFormulario", handleOpen);
    return () => window.removeEventListener("abrirFormulario", handleOpen);
  }, []);

  useEffect(() => {
    const handleClose = () => setShowForm(false);
    window.addEventListener("cerrarFormulario", handleClose);
    return () => window.removeEventListener("cerrarFormulario", handleClose);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      matter: form.matter.value,
      message: form.message.value,
      role: form.role.value,
      source: form.source.value,
      phone: form.phone.value,
      city: form.city.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("✅ ¡Mensaje enviado correctamente!");
        form.reset();
      } else {
        setStatus("❌ Hubo un error al enviar el mensaje.");
      }
    } catch (error) {
      setStatus("❌ Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };



  return (
    showForm && (
      <div className="formContainer">
        <div className="close">
          <button onClick={() => setShowForm(false)}>
            CERRAR <strong>X</strong>
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="formContent">
            <div className="campo nombre">
              <div className="nombreContent">
                <label htmlFor="name">¡Hola! Mi nombre es</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Tu Nombre"
                  required
                />
              </div>

              <h2>,</h2>
            </div>

            <div className="campo profesion">
              <div className="profesionContent">
                <label htmlFor="email">y soy</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="(Fundador de la marca / Responsable de Marketing / Emprendedor, etc.)"
                  required
                />
              </div>
              <h2>.</h2>
            </div>

            <div className="campo razon">
              <div className="razonContent">
                <label htmlFor="email">
                  Me pongo en contacto con ustedes por
                </label>
                <div className="selectContenedor">
                  <h2>(</h2>
                  <select defaultValue="Seleccionar" id="matter" name="matter" required>
                    <option value="Seleccionar" disabled>
                      Seleccionar
                    </option>
                    <option value="Redes">Redes</option>
                    <option value="Web">Web</option>
                    <option value="Diseño">Diseño</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <h2>)</h2>
                </div>
              </div>
              <h2>.</h2>
            </div>

            <div className="campo llegue">
              <div className="llegueContent">
                <label htmlFor="email">Llegué a TAPE a través de</label>
                <div className="selectContenedor">
                  <h2>(</h2>
                  <select defaultValue="Seleccionar" id="source" name="source" required>
                    <option value="Seleccionar" disabled>
                      Seleccionar
                    </option>
                    <option value="Linkedin">Linkedin</option>
                    <option value="Instagram">Instagram</option>
                    <option value="Sitio Web">Sitio Web</option>
                    <option value="Otro">Otro</option>
                  </select>
                  <h2>)</h2>
                </div>
              </div>
              <h2>.</h2>
            </div>

            <div className="campo resumen">
              <div className="resumenContent">
                <label htmlFor="email">En resumen</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  placeholder="Contanos brevemente de qué se trata tu proyecto"
                ></textarea>
              </div>
            </div>

            <div className="campo datos">
              <div className="datosContent">
                <label htmlFor="email">Mis datos de contacto</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu email (obligatorio)"
                  required
                />
              </div>
              <h2>,</h2>
            </div>

            <div className="campo email">
              <div className="emailContent">
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Tu número de celular (opcional)"

                />
                <h2>,</h2>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Ciudad (opcional)"

                />
              </div>
              <h2>.</h2>
            </div>

            <div className="campo saludo">
              <p>¡Estamos en contacto!</p>
            </div>
          </div>
          <div className="campo submit">
            {status && <p className="status" style={{ marginTop: 10 }}>{status}</p>}
            <div className="foto">
              <img src={logo.src} alt="logo" />
            </div>
            <div className="contacto">
              <h3 style={{ marginBottom: 20 }}>
                Direccion: San Isidro - Buenos Aires
              </h3>
              <h3>
                Email: <strong>tommy@tapeproducciones.com</strong>
              </h3>
              <h3>
                Instagram: <strong>@tapeproducciones</strong>
              </h3>
              <div></div>
            </div>
            <div className="buttonEnviar">
              <button type="submit" disabled={loading}>
                {loading ? "ENVIANDO..." : "ENVIAR"}
              </button>
            </div>

          </div>
        </form>

      </div>
    )
  );
};

export default Form;
