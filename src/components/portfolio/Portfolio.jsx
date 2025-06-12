import React from "react";
import "./portfolio.css";
import frenteImage from "../../assets/portfolio1@300x.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio1.png";
import cassete from "../../assets/cassettePortfolio.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h2 className="titlePortfolio">
        Nuestros <strong>trabajos</strong> y <strong>clientes</strong>.
      </h2>
      <div className="portfolio__container">
        <div className="cassete">
          <img src={cassete.src} alt="cassete" className="image" />
        </div>
        <div className="fondo">
          <div>
            <img src={portfolio5.src} alt="" className="image" />
          </div>
          <div>
            <img src={portfolio3.src} alt="" className="image" />
          </div>
        </div>

        <div className="medio">
          <div>
            <img src={portfolio4.src} alt="" className="image" />
          </div>
          <div>
            <img src={portfolio2.src} alt="" className="image" />
          </div>
        </div>

        <div className="frente">
          <div className="frenteImage">
            <img src={frenteImage.src} alt="" className="image" />
          </div>
        </div>
      </div>

      <a href="/portfolio/Portfolio" className="portfolioButton">
        VER PORTFOLIO
      </a>
    </div>
  );
};

export default Portfolio;
