import React, { useEffect, useState } from "react";
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
        <h1>ESTE ES EL FORM</h1>
        <button onClick={() => setShowForm(false)}>cerrar</button>
      </div>
    )
  );
};

export default Form;
