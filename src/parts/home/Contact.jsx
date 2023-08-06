import React from "react";
import "../../assets/sass/parts/home/Contact.scss";
import Title from "../../components/Title";
import Button from "../../components/Button-CTA";

const Contact = () => {
  return (
    <section id="Contact">
      <Title Text={"Prenons contact"} Color={"primary"}></Title>
      <p>
        Vous avez un projet intéressant en tête ? Vous souhaitez collaborer ou
        simplement discuter ? N'hésitez pas à me contacter, je serais ravi de
        vous répondre !
      </p>

      <Button
        Text={"contact@olivieroy.fr"}
        Color={"primary"}
        Type={"outlined"}
        Link={"mailto:contact@olivieroy.fr"}
      ></Button>

      <p>Vous pouvez également me retrouver sur les réseaux sociaux :</p>

      <div className="contact-buttons">
        <Button
          Link={"https://www.linkedin.com/in/olivier-roy-dev-front/"}
          Text={"LinkedIn"} Target={"_blank"}
          Color={"secondary"}
          Type={"outlined"}
        ></Button>
        <Button
          Link={"https://www.malt.fr/profile/olivieroy"} Target={"_blank"}
          Text={"Malt"}
          Color={"accent"}
          Type={"outlined"}
        >
          {" "}
        </Button>
      </div>
    </section>
  );
};

export default Contact;
