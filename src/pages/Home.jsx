import React from "react";
import "../assets/sass/pages/Home.scss";
import Title from "../parts/home/Title";
import About from "../parts/home/About";
import Accessibility from "../parts/home/Accessibility";
import Projects from "../parts/home/Projects";

const Home = () => {
    return (
      <div>
        <Title />
        <div id="Home">
          <About />
          <Accessibility /> 
          <Projects />

        </div>
      </div>
    );
}
    
export default Home;