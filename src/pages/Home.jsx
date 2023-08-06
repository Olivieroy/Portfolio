import React from "react";
import "../assets/sass/pages/Home.scss";
import Title from "../parts/home/Title";
import About from "../parts/home/About";
import Accessibility from "../parts/home/Accessibility";
import Projects from "../parts/home/Projects";
import Contact from "../parts/home/Contact";

const Home = () => {
    return (
      <div>
        <Title />
        <div id="Home">
          <About />
          <Accessibility /> 
          <Projects />
          <Contact />
        </div>
      </div>
    );
}
    
export default Home;