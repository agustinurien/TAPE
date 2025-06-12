import React, { useState } from "react";
import "./portfolioIslands.css";

const PortfolioIslands = () => {
  const [active, setActive] = useState("");

  const proyectos = [
    {
      title: "Dinko Hotel",
      portada: "",
      servicios: ["sitios web", "fotografia"],
    },
    {
      title: "No seas Cobarde",
      portada: "",
      servicios: ["sitios web", "redes sociales", "fotografia"],
    },
  ];

  const proyectosFiltrados =
    active === ""
      ? proyectos
      : proyectos.filter((proyecto) => proyecto.servicios.includes(active));

  return (
    <>
      <div className="navContainer">
        <nav className="navPortfolio">
          <ul>
            <li className={active === "" ? "active" : ""}>
              <button onClick={() => setActive("")}>TODO</button>
            </li>
            <li className={active === "sitios web" ? "active" : ""}>
              <button onClick={() => setActive("sitios web")}>
                SITIOS WEB
              </button>
            </li>
            <li className={active === "identidad de marca" ? "active" : ""}>
              <button onClick={() => setActive("identidad de marca")}>
                IDENTIDAD DE MARCA
              </button>
            </li>
            <li className={active === "redes sociales" ? "active" : ""}>
              <button onClick={() => setActive("redes sociales")}>
                REDES SOCIALES
              </button>
            </li>
            <li className={active === "logos" ? "active" : ""}>
              <button onClick={() => setActive("logos")}>LOGOS</button>
            </li>
            <li className={active === "fotografia" ? "active" : ""}>
              <button onClick={() => setActive("fotografia")}>
                FOTOGRAFIA
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div className="contenidoPortfolio">
        {proyectosFiltrados.map((proyecto, index) => (
          <div className="proyecto" key={index}>
            <h2>{proyecto.title}</h2>
            <img src={proyecto.portada} alt={proyecto.title} />
            <p>Servicios: {proyecto.servicios.join(", ")}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioIslands;
