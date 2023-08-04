import React from "react";
import "../assets/sass/components/title.scss";

const Title = ({Text, Color}) => {
    const style = `title ${Color}`;
    return (
        <h2 className={style} >
            {Text}
        </h2>
    );
}


export default Title;