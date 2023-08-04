import React from "react";
import Nav from "./nav";
import '../assets/sass/layouts/header.scss'
import Logo from '../assets/svg/logo.svg'

const Header = () => {
  // Si on est en haut de l'écran on retire le backdrop-filter du header sinon on le remet
  const handleScroll = () => {
    const header = document.querySelector(".header");
    const scrollPosition = window.scrollY;
    const titleMouseBubble = document.querySelector(".title-mouse-bubble");

    if (scrollPosition === 0) {
      header.classList.remove("header-scroll");
      // si on survole le header alors on ajoute la classe active a la classe title-mouse-bubble
      header.addEventListener("mouseenter", titleMouseBubble.classList.add("active"));

    } else {
      header.classList.add("header-scroll");
    }
  };

  // si la positionscroll == 0 et ue l'on survole le header alors on ajoute la classe active a la class title-mouse-bubble
  const handleMouseEnter = () => {
    
    const titleMouseBubble = document.querySelector(".title-mouse-bubble");
    const scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      titleMouseBubble.classList.add("active");
    }
  };



  // On ajoute un écouteur d'événement sur le scroll
  window.addEventListener("scroll", handleScroll);

  return (
    <header className="header">
      <div className="container">
        <a href="/" className="header__link">
          <img className="header__logo" src={Logo} alt="" />
          <span>Olivier Roy Webdesigner</span>
        </a>

        <Nav />
      </div>
    </header>
  );
};

export default Header;