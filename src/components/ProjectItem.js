import React from 'react';
import './ProjectItem.css';

function ProjectItem({ title, image, type }) {
  return (
    <div className="project-item">
      <div className="text-content">
        <p>{type}</p>
        <h3>{title}</h3>
        <a href="#">→</a>
      </div>
      <img src={image} alt={title} />
    </div>
  );
}

export default ProjectItem;
