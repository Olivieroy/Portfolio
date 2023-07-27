import React from "react";
import Title from "../../components/TitlePart";
import Counter from "../../components/Counter";

const About = () => {
    return (
      <section id="A-propos">
        <Title Title_text="À propos de moi" Color="black" />
        <p>
          Je suis Olivier Roy, un passionné du développement Front-End web,
          spécialisé dans le Webdesign et l'intégration depuis plus de 3 ans.
          Mon expertise consiste à donner vie et dynamisme à une grande variété
          de projets web, tout en accordant une attention particulière à leur
          accessibilité visuelle.
        </p>
        <p>
          L'accessibilité web est au cœur de ma pratique. Mon objectif est de
          rendre le web plus inclusif en créant des sites, des kits mails et des
          interfaces utilisateur qui soient visuellement accessibles à tous.
          Chacune de mes créations intègre cette préoccupation d'accessibilité,
          quel que soit le type de projet.
        </p>
        <p>
          Je maîtrise une gamme étendue de langages et de technologies, dont
          Wordpress, PHP, HTML, CSS, SASS, JS, JQuery, TailWindCSS, Bootstrap et
          Gulp. De plus, je possède une solide expérience dans l'utilisation de
          divers frameworks JavaScript, me permettant de répondre efficacement à
          un large éventail de besoins en développement.
        </p>
        <p>
          Je suis toujours ouvert aux nouvelles opportunités et projets
          passionnants. N'hésitez pas à me contacter pour obtenir un devis ou
          simplement pour discuter de votre projet !
        </p>
        <p>
          Travailler avec vous sera un réel plaisir, et ensemble, nous pourrons
          créer des solutions web harmonieuses qui allient esthétisme,
          fonctionnalité et accessibilité.
        </p>
      </section>
    );
}

export default About;
