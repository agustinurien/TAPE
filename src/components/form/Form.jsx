import React, { useEffect, useState } from "react";
import logo from "../../assets/logo2Faq.png";
import "./form.css";
const Form = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleOpen = () => setShowForm(true);
    window.addEventListener("abrirFormulario", handleOpen);
    return () => window.removeEventListener("abrirFormulario", handleOpen);
  }, []);

  return (
    showForm && (
      <div className="formContainer">
        <div className="close">
          <button onClick={() => setShowForm(false)}>
            CERRAR <strong>X</strong>
          </button>
        </div>

        <form>
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
                  type="email"
                  id="email"
                  name="email"
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
                  <select id="profesion" name="profesion" required>
                    <option value="" disabled selected>
                      Seleccionar
                    </option>
                    <option value="desarrollador">Desarrollador</option>
                    <option value="diseñador">Diseñador</option>
                    <option value="artista">Artista</option>
                    <option value="otro">Otro</option>
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
                  <select id="profesion" name="profesion" required>
                    <option value="" disabled selected>
                      Seleccionar
                    </option>
                    <option value="desarrollador">Desarrollador</option>
                    <option value="diseñador">Diseñador</option>
                    <option value="artista">Artista</option>
                    <option value="otro">Otro</option>
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
                  id="resumen"
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
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Tu número de celular (opcional)"
                  required
                />
                <h2>,</h2>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ciudad (opcional)"
                  required
                />
              </div>
              <h2>.</h2>
            </div>

            <div className="campo saludo">
              <p>¡Estamos en contacto!</p>
            </div>
          </div>
          <div className="campo submit">
            <div className="foto">
              <img src={logo.src} alt="logo" />
            </div>
            <div className="contacto">
              <h3 style={{ marginBottom: 20 }}>
                Direccion: San Isidro - Buenos Aires
              </h3>
              <h3>
                Email: <strong>hola@tapeproducciones.com</strong>
              </h3>
              <h3>
                Instagram: <strong>@tapeproducciones</strong>
              </h3>
              <div></div>
            </div>
            <div className="buttonEnviar">
              <button type="submit">ENVIAR</button>
            </div>
          </div>
        </form>
      </div>
    )
  );
};

export default Form;
