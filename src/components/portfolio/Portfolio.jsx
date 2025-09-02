import React, { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import frenteImage from "../../assets/portfolio1@300x.png";
import portfolio2 from "../../assets/portfolio2.png";
import portfolio3 from "../../assets/portfolio3.png";
import portfolio4 from "../../assets/portfolio4.png";
import portfolio5 from "../../assets/portfolio1.png";
import cassete from "../../assets/cassete.png";

const Portfolio = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  console.log(inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 } // cuando el 100% esté visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="portfolio" ref={sectionRef}>
      <h2 className="titlePortfolio">
        Nuestros <strong>trabajos</strong> y <strong>clientes</strong>.
      </h2>
      <div className="portfolio__container">
        <div className="cassete">
          <img src={cassete.src} alt="cassete" className="image" />
        </div>
        <div className={`fondo ${inView ? "animate" : ""}`}>
          <div className="imageContainer">
            <div className="leftFondo"></div>
            <img src={portfolio5.src} alt="" className="image" />
          </div>
          <div className="imageContainer">
            <div className="rightFondo"></div>
            <img src={portfolio3.src} alt="" className="image" />
          </div>
        </div>

        <div className={`medio ${inView ? "animate" : ""}`}>
          <div className="imageContainer">
            <div className="left"></div>
            <img src={portfolio4.src} alt="" className="image" />
          </div>
          <div className="imageContainer">
            <div className="right"></div>
            <img src={portfolio2.src} alt="" className="image" />
          </div>
        </div>

        <div className="frente">
          <div className={`frenteImage ${inView ? "animate" : ""}`}>
            <img src={frenteImage.src} alt="" className="image" />
          </div>
        </div>
      </div>

      <a href="/portfolio/Portfolio" className={`portfolioButton ${inView ? "animate" : ""}`}>
        VER PORTFOLIO
      </a>
    </div>
  );
};

export default Portfolio;
