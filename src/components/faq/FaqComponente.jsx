import React, { useState } from "react";
import "./faq.css";

const FaqComponente = () => {
  const [open, setOpen] = useState(null);
  const preguntasFrecuentes = [
    {
      pregunta: "¿Qué servicios ofrecen?",
      respuesta:
        "En TAPE hacemos diseño gráfico, identidad de marca, desarrollo web, contenido para redes, producción audiovisual, fotografía y campañas digitales. Nos gusta pensar integralmente.",
    },
    {
      pregunta: "¿Solo trabajan con empresas grandes?",
      respuesta:
        "No. Trabajamos con marcas grandes, pymes, emprendedores y proyectos personales. Lo importante es que haya una idea que nos entusiasme.",
    },
    {
      pregunta: "¿Puedo contratar solo un servicio puntual?",
      respuesta:
        "Sí. Podemos trabajar en un proyecto puntual (por ejemplo, el diseño de un logo, un sitio web o una campaña específica) o desarrollar un plan integral de marca.",
    },
    {
      pregunta: "¿Cómo es el proceso de trabajo?",
      respuesta:
        "Primero escuchamos al cliente. Después hacemos un diagnóstico de marca, planteamos propuestas creativas, ajustamos, diseñamos y finalmente producimos. Siempre en contacto directo, sin intermediarios.",
    },
    {
      pregunta: "¿Cuánto tarda un proyecto?",
      respuesta:
        "Depende del alcance. Un logo puede demorar entre 15 y 30 días, un sitio web entre 30 y 60 días, y un plan integral puede llevar más tiempo. Nos adaptamos a cada caso, pero siempre trabajamos con tiempos reales y organizados.",
    },
    {
      pregunta: "¿Cómo cotizan los trabajos?",
      respuesta:
        "Cada proyecto se cotiza a medida según su complejidad, tiempos y recursos involucrados. Siempre presupuestamos con claridad desde el inicio.",
    },
    {
      pregunta: "Sobre los archivos editables",
      respuesta:
        "En cada proyecto entregamos los archivos finales listos para su uso (PDF, JPG, PNG, MP4, etc.), optimizados para impresión, web o redes según corresponda.\n\n" +
        "Los archivos editables originales (por ejemplo, archivos en formatos de diseño abierto: AI, PSD, CDR, Figma, etc.) son el resultado del proceso creativo y técnico completo, y tienen un valor adicional.\n\n" +
        "El acceso a estos archivos puede o no estar incluido según el tipo de proyecto, el acuerdo inicial y el uso posterior que se le vaya a dar. En caso de solicitar los originales, lo evaluamos en cada caso particular y se cotiza como un adicional, ya que representan el trabajo matriz sobre el cual se puede seguir trabajando, modificar o escalar piezas futuras.",
    },
  ];

  return (
    <div className="contenedorPreguntas">
      {preguntasFrecuentes.map((item, index) => (
        <div key={index} className="preguntaFrecuente">
          <div className="pregunta">
            <h3 className="tituloPregunta">{item.pregunta}</h3>
          </div>

          <p className="respuesta">{item.respuesta}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqComponente;
