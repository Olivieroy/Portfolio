import React from "react";
import '../assets/sass/components/nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="container">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="#A-propos">À propos</a></li>
                    <li><a href="#Projets">Projets</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
    
export default Nav;