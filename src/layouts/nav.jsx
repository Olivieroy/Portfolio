import React from "react";
import '../assets/sass/components/_nav.scss'

const Nav = () => {
    return (
        <nav className="nav">
            <div className="container">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">À propos</a></li>
                    <li><a href="/works">Projets</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}
    
export default Nav;