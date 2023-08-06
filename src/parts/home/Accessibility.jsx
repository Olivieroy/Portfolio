import React from "react";
import "../../assets/sass/parts/home/accessibility.scss";
import ColorChecker from "../../components/ColorChecker";
import Title from "../../components/Title";
import Button from "../../components/Button-CTA";

const Accessibility = () => {
  return (
    <section id="Accessibility">
      <div className="zone-text">
        <Title Text="Services d'Accessibilité Numérique" Color="primary" />
        <ul className="zone-text-ul">
          <li className="zone-text-ul-li">
            <h3>Conformité WCAG 2.0 niveau AA :</h3>
            <p>
              Je suis spécialisé dans la création de sites web conformes aux
              normes WCAG 2.0 niveau AA, assurant ainsi que votre contenu est
              accessible aux personnes en situation de handicap.
            </p>
          </li>
          <li className="zone-text-ul-li">
            <h3>Contrastes et Couleurs Adaptées :</h3>
            <p>
              Je sélectionne soigneusement des couleurs contrastées et adaptées
              pour un meilleur confort de lecture, permettant à tous vos
              visiteurs de profiter pleinement de votre contenu.
            </p>
          </li>
          <li className="zone-text-ul-li">
            <h3>Polices de Caractères Lisibles :</h3>
            <p>
              La lisibilité est essentielle ! Je choisis des polices de
              caractères lisibles et accessibles pour que chaque utilisateur
              puisse naviguer facilement sur votre site.
            </p>
          </li>
          <li className="zone-text-ul-li">
            <h3>Navigation Clavier :</h3>
            <p>
              Je m'assure que votre site est entièrement navigable au clavier,
              permettant ainsi à vos visiteurs de naviguer facilement sur votre
              site sans utiliser de souris.
            </p>
          </li>
          <li className="zone-text-ul-li">
            <h3>Attribut Alt pour les Images :</h3>
            <p>
              Chaque image compte ! J'ajoute des textes alternatifs (attribut
              alt) pour toutes les images pertinentes, fournissant ainsi une
              description aux utilisateurs ayant des limitations visuelles.
            </p>
          </li>
          <li className="zone-text-ul-li">
            <h3>Liens Clairs et Explicites :</h3>
            <p>
              Pour faciliter la navigation, je crée des liens clairs et
              explicites, permettant ainsi à vos visiteurs de trouver rapidement
              l'information recherchée.
            </p>
          </li>
          <li>
                      <Button Text="Prêt à rendre votre site accessible ? Contactez-moi !" Link='#Contact' Color="primary" Type="outlined"
                      ></Button>
          </li>
        </ul>
      </div>
      <ColorChecker></ColorChecker>
    </section>
  );
};

export default Accessibility;
