import { useEffect, useState } from "react";
import rueda2 from "../assets/rueda2.png";
import "./rueda2.css";

const Rueda2 = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.1); // podés ajustar el factor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="rueda-container2">
      <img
        src={rueda2.src}
        width={150}
        height={150}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear", // suaviza el giro
        }}
      />
    </div>
  );
};

export default Rueda2;
