import React from "react";
import "../assets/sass/components/Buttons.scss";

const Button = ({ Text, Color, Type, Link, Target }) => {
    const style = `btn ${Color} ${Type}`;

    return (
        <a href={Link} className={style} target={Target}>{Text}</a>
    );
}

export default Button;