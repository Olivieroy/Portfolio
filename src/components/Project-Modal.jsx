// ProjectModal.jsx
import React, { useEffect, useRef } from "react";
import "../assets/sass/components/project-modal.scss";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    // Gestionnaire d'événements pour la touche Tab
    const handleTabKeyPress = (e) => {
      if (!modalRef.current) return;

      const modalElement = modalRef.current;
      const focusableElements = modalElement.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!e.shiftKey && document.activeElement === lastElement) {
        // Si la touche Tab est enfoncée et le dernier élément est focusé, retourner au premier élément
        e.preventDefault();
        firstElement.focus();
      } else if (e.shiftKey && document.activeElement === firstElement) {
        // Si la touche Maj est enfoncée et le premier élément est focusé, retourner au dernier élément
        e.preventDefault();
        lastElement.focus();
      }
    };

    if (isOpen) {
      // Ajouter l'écouteur d'événement lorsqu'on ouvre la modal
      document.addEventListener("keydown", handleTabKeyPress);
    }

    return () => {
      // Supprimer l'écouteur d'événement lorsqu'on ferme la modal
      document.removeEventListener("keydown", handleTabKeyPress);
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" ref={modalRef}>
        {/* Contenu de la modal */}
        <div className="modal-header">
          <img src={project.img} alt="" className="modal-img" />
          <div>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
          </div>
        </div>
        <p>Technologies utilisées : {project.technologies}</p>
        <p>{project.texte}</p>
        <p>{project.texte2}</p>
        <p>{project.texte3}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Voir le projet
        </a>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default ProjectModal;
    