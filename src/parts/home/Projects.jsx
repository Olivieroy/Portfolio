import React, { useState } from "react";
import ProjectModal from "../../components/Project-Modal";
import "../../assets/sass/parts/home/Projects.scss";
import Title from "../../components/Title";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 1,
      name: "Github Notifier",
      img: "src/assets/img/projets/github-notifier.png",
      description:
        "Le projet est une extension de navigateur pour GitHub offrant des notifications en temps réel aux développeurs. Spécialement conçue pour le navigateur ARC, elle permet de recevoir instantanément des notifications sur les événements des dépôts GitHub, sans besoin de rafraîchir la page.",
      texte:
        "Je suis ravi de présenter mon projet personnel de notification GitHub en temps réel, spécifiquement conçu pour le navigateur ARC. Cette extension améliore l'efficacité et la productivité des développeurs en leur fournissant des notifications instantanées sur les événements de leurs dépôts GitHub directement dans leur navigateur.",
      texte2:
        "Grâce à cette extension, les développeurs peuvent recevoir des notifications en temps réel, sans rafraîchir constamment leur page GitHub. L'extension est spécialement adaptée au navigateur ARC, offrant ainsi une expérience fluide et optimisée. Les notifications sont filtrées pour n'afficher que les événements récents. Les utilisateurs peuvent personnaliser les notifications selon leurs préférences.",
      texte3:
        "Le projet est open source, permettant à d'autres développeurs de contribuer et d'adapter l'extension à leurs besoins. Son installation et sa configuration sont simples. En somme, c'est une solution pratique et efficace pour rester informé des événements GitHub sans interruption.",
      technologies: "Technologies utilisées pour le projet 1",
      link: "https://arcboosts.com/boosts/125/github-notifier",
    },
    {
      id: 2,
      name: "Projet 2",
      description: "Description du projet 2",
      technologies: "Technologies utilisées pour le projet 2",
      link: "lien-vers-projet-2",
    },
    {
      id: 3,
      name: "Projet 3",
      description: "Description du projet 3",
      technologies: "Technologies utilisées pour le projet 3",
      link: "lien-vers-projet-3",
    },
  ];

  // Gestion de l'ouverture et de la fermeture de la modal
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    // Ajouter sur le body la classe modal-open
    document.body.classList.add("modal-open");
  };

  const handleModalClose = () => {
    setSelectedProject(null);
    // Retirer sur le body la classe modal-open
    document.body.classList.remove("modal-open");
  };

  return (
    <section id="Projets">
      <Title Text="Projets :" Color={"primary"}></Title>
      <div className="grp-projects">
        {projectsList.map((project) => (
          <button
            className="btn project"
            key={project.id}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.img} alt="" className="btn project-img" />

            <div className="bottom">
              <h3>{project.name}</h3>

              <span className="btn project-span">
                Voir le projet{" "}
                <span className="material-icons-round" aria-hidden='true'>north_east</span>
              </span>
            </div>
          </button>
        ))}
      </div>
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={handleModalClose}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
