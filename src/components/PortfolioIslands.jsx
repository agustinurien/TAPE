import React, { useState } from "react";
import "./portfolioIslands.css";

import dinko from "../assets/proyectos/dinko.jpg";
import global from "../assets/proyectos/global.jpg";
import jpr from "../assets/proyectos/jpr.jpg";
import wakas from "../assets/proyectos/wakas.jpg";
import bold from "../assets/proyectos/bold.jpg";
import urda from "../assets/proyectos/urdapilleta.jpg";
import market from "../assets/proyectos/marketbay.jpg";
import marlom from "../assets/proyectos/marloms.jpg";
import cobarde from "../assets/proyectos/cobarde.jpg";
import acequia from "../assets/proyectos/acequia.jpg";
import capital from "../assets/proyectos/capital.jpg";
import amalia from "../assets/proyectos/amalia.jpg";
import jpu from "../assets/proyectos/jpu.jpg";
import calello from "../assets/proyectos/calello.jpg";
import refmaster from "../assets/proyectos/refmaster.jpg";
import martin from "../assets/proyectos/martin.jpg";
import garabi from "../assets/proyectos/garabi.jpg";
import pantea from "../assets/proyectos/pantea.jpg";
import santos from "../assets/proyectos/santos.jpg";
import trikids from "../assets/proyectos/trikids.jpg";

import BOLD from "../../public/manuales/BOLD.pdf";
import COBARDE from "../../public/manuales/COBARDE.pdf";
import DINKO from "../../public/manuales/DINKO.pdf";
import GLOBAL from "../../public/manuales/GLOBAL.pdf";
import JPR from "../../public/manuales/JPR.pdf";
import REFMASTER from "../../public/manuales/REFMASTER.pdf";
import URDAPILLETA from "../../public/manuales/URDAPILLETA.pdf";
import MARKBAY from "../../public/manuales/MARKBAY.pdf";

import { FaGlobe, FaInstagram } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

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
      linkDescarga: DINKO,
      linkWeb: "https://www.hoteldinko.com.ar/",
      linkRed: "https://www.instagram.com/dinkohotel/?hl=es",
    },

    {
      title: "Global Red de Inmobiliarias",
      portada: global,
      servicios: ["sitios web", "identidad de marca", "redes sociales", "logo"],
      linkDescarga: GLOBAL,
      linkWeb: "https://www.globalreddeinmobiliarias.com/",
      linkRed: "https://www.instagram.com/globalreddeinmobiliarias/",
    },
    {
      title: "JPR",
      portada: jpr,
      servicios: ["sitios web", "identidad de marca", "logo"],
      linkDescarga: JPR,
      linkWeb: "https://jpr-web-plum.vercel.app/",
    },
    {
      title: "Bold Real Estate",
      portada: bold,
      servicios: ["sitios web", "identidad de marca", "redes sociales"],
      linkDescarga: BOLD,
      linkWeb: "https://boldrealestate.com.ar/",
      linkRed: "https://www.instagram.com/bold_real_estate/",
    },
    {
      title: "Wakas Gluten Free",
      portada: wakas,
      servicios: ["sitios web", "redes sociales", "fotografia"],
      linkWeb: "https://wakas.com.ar/",
      linkRed: "https://www.instagram.com/wakasglutenfree/",
    },
    {
      title: "Marlom's",
      portada: marlom,
      servicios: ["sitios web", "redes sociales", "fotografia"],
      linkWeb: "https://marloms.com.ar/",
      linkRed: "https://www.instagram.com/marlomsargentina/",
    },
    {
      title: "Cobarde",
      portada: cobarde,
      servicios: ["sitios web", "logo", "identidad de marca"],
      linkDescarga: COBARDE,
      linkWeb: "https://cobarde.com.ar/",
    },
    {
      title: "Acequia Casa de Vinos",
      portada: acequia,
      servicios: ["sitios web", "redes sociales"],
      linkWeb: "https://acequiacasadevinos.com.ar/",
      linkRed: "https://www.instagram.com/acequiacasadevinos/",
    },
    {
      title: "Urdapilleta Propiedades",
      portada: urda,
      servicios: ["identidad de marca", "redes sociales"],
      linkDescarga: URDAPILLETA,
      linkRed: "https://www.instagram.com/urdapilleta.propiedades/",
    },
    {
      title: "Capital Agribuisiness",
      portada: capital,
      servicios: ["sitios web", "logo"],
      linkWeb: "https://capitalagribusiness.com/",
    },
    {
      title: "Amalia Cavagnagh",
      portada: amalia,
      servicios: ["sitios web", "logo"],
      linkWeb: "/",
    },
    {
      title: "Marketbay",
      portada: market,
      servicios: ["identidad de marca", "logo"],
      linkDescarga: MARKBAY,
    },
    {
      title: "Refmaster",
      portada: refmaster,
      servicios: ["identidad de marca"],
      linkDescarga: REFMASTER,
    },

    {
      title: "Santiago Calello",
      portada: calello,
      servicios: ["sitios web"],
      linkWeb: "https://www.santiagocalello.com.ar/",
    },
    {
      title: "Martin Cesarsky",
      portada: martin,
      servicios: ["sitios web"],
      linkWeb: "https://www.martincesarsky.com.ar/",
    },
    {
      title: "Garabí Casas",
      portada: garabi,
      servicios: ["redes sociales"],
      linkRed: "https://www.instagram.com/garabicasas/",
    },
    {
      title: "Pantea Smart House",
      portada: pantea,
      servicios: ["redes sociales"],
      linkRed: "https://www.instagram.com/panteasmarthouse/",
    },
    {
      title: "Santos Mieles",
      portada: santos,
      servicios: ["redes sociales"],
      linkRed: "https://www.instagram.com/mielessantos_/",
    },
    {
      title: "Trikids",
      portada: trikids,
      servicios: ["redes sociales"],
      linkRed: "https://www.instagram.com/trikidsbikes/",
    },
    {
      title: "JPU",
      portada: jpu,
      servicios: ["fotografia"],
      linkRed: "https://www.instagram.com/jpudesarrollos/",
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
              <div style={{ display: "flex", gap: "4px", paddingRight: 10 }}>
                {proyecto.linkDescarga && (
                  <div className="descargar">
                    <a
                      href={proyecto.linkDescarga}
                      download={proyecto.linkDescarga}
                      className="descargarLink"
                    >
                      Descargar manual de marca
                    </a>
                    <a href={proyecto.linkDescarga}>
                      <MdOutlineFileDownload fontSize={22} />
                    </a>
                  </div>
                )}
                {proyecto.linkWeb && (
                  <a href={proyecto.linkWeb} target="_blank" className="web">
                    <FaGlobe />
                  </a>
                )}
                {proyecto.linkRed && (
                  <a href={proyecto.linkRed} target="_blank" className="insta">
                    <FaInstagram />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PortfolioIslands;
