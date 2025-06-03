import { useEffect, useState } from "react";
import rueda from "../assets/rueda.png";

const Rueda = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.5); // podés ajustar el factor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="rueda-container">
      <img
        src={rueda.src}
        width={150}
        height={150}
        alt=""
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear", // suaviza el giro
        }}
      />
    </div>
  );
};

export default Rueda;
