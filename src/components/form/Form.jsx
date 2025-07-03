import React, { useEffect, useState } from "react";
import "./form.css";
const Form = () => {
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    const handleOpen = () => setShowForm(true);
    window.addEventListener("abrirFormulario", handleOpen);
    return () => window.removeEventListener("abrirFormulario", handleOpen);
  }, []);

  return (
    showForm && (
      <div className="formContainer">
        <div className="close">
          <button onClick={() => setShowForm(false)}>cerrar</button>
        </div>

        <form>
          <div className="formContent">
            <div className="campo nombre">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <label htmlFor="name">¡Hola! Mi nombre es</label>
                <input type="text" id="name" name="name" required />
              </div>

              <h2>,</h2>
            </div>

            <div className="campo profesion">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <label htmlFor="email">y soy</label>
                <input type="email" id="email" name="email" required />
              </div>
              <h2>.</h2>
            </div>

            <div className="campo razon">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <label htmlFor="email">
                  Me pongo en contacto con ustedes por
                </label>
                <input type="email" id="email" name="email" required />
              </div>
              <h2>.</h2>
            </div>

            <div className="campo llegue">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <label htmlFor="email">Llegué a TAPE a través de</label>
                <input type="email" id="email" name="email" required />
              </div>
              <h2>.</h2>
            </div>

            <div className="campo resumen">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <label htmlFor="email">En resumen</label>
                <textarea name="" id=""></textarea>
              </div>
            </div>

            <div className="campo datos">
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <label htmlFor="email">Mis datos de contacto</label>
                <input type="email" id="email" name="email" required />
              </div>
              <h2>,</h2>
            </div>

            <div className="campo email">
              <input type="email" id="email" name="email" required />
              <h2>,</h2>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="campo saludo">
              <p>¡Estamos en contacto!</p>
            </div>
          </div>
          <div className="campo submit">
            <div className="foto"></div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    )
  );
};

export default Form;
