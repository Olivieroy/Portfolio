import React from "react";
import "../assets/sass/components/project-modal.scss";

const ProjectModal = ({
  isOpen,
  onClose,
  projectName,
  projectDescription,
  technologiesUsed,
  projectLink,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>{projectName}</h2>
      <p>{projectDescription}</p>
      <p>{technologiesUsed}</p>
      <a href={projectLink}>Lien vers le projet</a>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default ProjectModal;
