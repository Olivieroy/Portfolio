import React, { useState } from "react";
import ProjectModal from "../../components/Project-Modal";
import "../../assets/sass/parts/home/Projects.scss";
import Title from "../../components/Title";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsList = [
    {
      id: 1,
      name: "Projet 1",
      description: "Description du projet 1",
      technologies: "Technologies utilisées pour le projet 1",
      link: "lien-vers-projet-1",
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

  const handleProjectClick = (project) => {
    // Mettez à jour l'état pour afficher la modal correspondante
    setSelectedProject(project);
  };

  const handleModalClose = () => {
    // Mettez à jour l'état pour fermer la modal
    setSelectedProject(null);
  };

  return (
    <section id="Projets">
      <Title Text="Projets :" Color={"primary"}></Title>
      <div className="grp-projects">
        {projectsList.map((project) => (
          <button className="btn project" key={project.id} onClick={() => handleProjectClick(project)}>
            {project.name}
          </button>
        ))}
      </div>
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={handleModalClose}
        projectName={selectedProject ? selectedProject.name : ""}
        projectDescription={selectedProject ? selectedProject.description : ""}
        technologiesUsed={selectedProject ? selectedProject.technologies : ""}
        projectLink={selectedProject ? selectedProject.link : ""}
      />
    </section>
  );
};

export default Projects;
