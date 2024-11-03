import React from 'react';
import ProjectItem from './ProjectItem';
import LoadMoreButton from './LoadMoreButton';
import Book from '../assets/book.jpg';
import Classroom from '../assets/classroom.jpg';
import Couple from '../assets/couple.jpg';
import Locker from '../assets/locker.jpg';

const projects = [
  { title: 'Book', image: Book, type: 'UX case study' },
  { title: 'Classroom', image: Classroom, type: 'UX case study' },
  { title: 'Couple', image: Couple, type: 'UX case study' },
  { title: 'Locker', image: Locker, type: 'UX case study' },
];

function ProjectList() {
    return (
      <div className="project-list">
        <h2 className="project-title">RECENT PROJECT</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectItem key={index} title={project.title} image={project.image} type={project.type} />
          ))}
        </div>
        <LoadMoreButton />
      </div>
    );
}

export default ProjectList;
