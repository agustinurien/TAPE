import { useEffect, useState } from "react";
import rueda from "../assets/rueda.png";

const Rueda = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setRotation(scrollY * 0.3); // podés ajustar el factor
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
      <img
        src={rueda.src}
        width={1050}
        height={1050}
        alt=""
        style={{
          paddingRight: 3,
          position: "absolute",
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          scale: 0.7,
          objectFit: "contain",
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.1s linear", // suaviza el giro
        }}
      />
  );
};

export default Rueda;
