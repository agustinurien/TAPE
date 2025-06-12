import React, { useState } from "react";
import "./portfolioIslands.css";

import dinko from "../assets/proyectos/dinko.png";
import global from "../assets/proyectos/global.png";
import jpr from "../assets/proyectos/jpr.png";
import wakas from "../assets/proyectos/wakas.png";
import bold from "../assets/proyectos/bold.png";
import urda from "../assets/proyectos/urda.png";
import market from "../assets/proyectos/market.png";
import marlom from "../assets/proyectos/marlom.png";
import cobarde from "../assets/proyectos/cobarde.png";

const PortfolioIslands = () => {
  const [active, setActive] = useState("");

  const proyectos = [
    {
      title: "Dinko Hotel",
      portada: dinko,
      servicios: [
        "sitios web",
        "identidad de marca",
        "redes sociales",
        "logo",
        "fotografia",
      ],
    },
    {
      title: "Global Red de Inmobiliarias",
      portada: global,
      servicios: ["sitios web", "identidad de marca", "redes sociales", "logo"],
    },
    {
      title: "JPR",
      portada: jpr,
      servicios: ["sitios web", "identidad de marca", "logo"],
    },
    {
      title: "Bold Real Estate",
      portada: bold,
      servicios: ["sitios web", "identidad de marca", "redes sociales"],
    },
    {
      title: "Wakas Gluten Free",
      portada: wakas,
      servicios: ["sitios web", "redes sociales", "fotografia"],
    },
    {
      title: "Marlom's",
      portada: marlom,
      servicios: ["sitios web", "redes sociales", "fotografia"],
    },
    {
      title: "Cobarde",
      portada: cobarde,
      servicios: ["sitios web", "redes sociales", "logo"],
    },
    {
      title: "Acequia Casa de Vinos",
      portada: "",
      servicios: ["sitios web", "redes sociales"],
    },
    {
      title: "Urdapilleta Propiedades",
      portada: urda,
      servicios: ["identidad de marca", "redes sociales"],
    },
    {
      title: "Capital Agribuisiness",
      portada: "",
      servicios: ["sitios web", "logo"],
    },
    {
      title: "Amalia Cavagnagh",
      portada: "",
      servicios: ["sitios web", "logo"],
    },
    {
      title: "Marketbay",
      portada: market,
      servicios: ["identidad de marca", "logo"],
    },

    {
      title: "Santiago Calello",
      portada: "",
      servicios: ["sitios web"],
    },
    {
      title: "Martin Cesarsky",
      portada: "",
      servicios: ["sitios web"],
    },
    {
      title: "Garabí Casas",
      portada: "",
      servicios: ["redes sociales"],
    },
    {
      title: "Pantea Smart House",
      portada: "",
      servicios: ["redes sociales"],
    },
    {
      title: "Santos Mieles",
      portada: "",
      servicios: ["redes sociales"],
    },
    {
      title: "Trikids",
      portada: "",
      servicios: ["redes sociales"],
    },
    {
      title: "JPU",
      portada: "",
      servicios: ["fotografia"],
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
            <li className={active === "logo" ? "active" : ""}>
              <button onClick={() => setActive("logo")}>LOGOS</button>
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
            {proyecto.portada === "" ? (
              <div className="sinPortada"></div>
            ) : (
              <img
                src={proyecto.portada.src}
                alt={proyecto.title}
                className="proyectoPortada"
              />
            )}
            <div className="proyectoTitulo">
              <h2>{proyecto.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioIslands;
