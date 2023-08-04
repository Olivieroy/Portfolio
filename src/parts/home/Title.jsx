import React, { useEffect, useState } from "react";
import "../../assets/sass/parts/title.scss";

const Title = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseInside, setIsMouseInside] = useState(false);

  useEffect(() => {
    const titleContainer = document.querySelector(".title-container");

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    const handleMouseEnter = () => {
      setIsMouseInside(true);
    };

    const handleMouseLeave = () => {
      setIsMouseInside(false);
    };

    titleContainer.addEventListener("mousemove", handleMouseMove);
    titleContainer.addEventListener("mouseenter", handleMouseEnter);
    titleContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      titleContainer.removeEventListener("mousemove", handleMouseMove);
      titleContainer.removeEventListener("mouseenter", handleMouseEnter);
      titleContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="title-container">
      <div
        className={`title-mouse-bubble ${isMouseInside ? "active" : ""}`}
        style={{ left: mousePosition.x, top: mousePosition.y }}
      ></div>
      <div className="title-bubble"></div>
      <div className="title-bubble-two"></div>
    
      <div className="title-element">
        <p className="title-element-name">Olivier Roy</p>
        <h1 className="title-h1">Webdesigner <br /> Développeur <br />Front-End</h1>
        <p className="title-element-name">Spécialisé en accessibilité</p>
      </div>
    </div>
  );
};

export default Title;
