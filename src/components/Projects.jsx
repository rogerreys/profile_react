import React from 'react';

function Projects() {
  return (
    <section className="projects">
      <h2>Proyectos realizados</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Proyecto 1</h3>
          <p>Descripción breve del proyecto 1.</p>
          <a href="#" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        {/* Agrega más proyectos aquí */}
      </div>
    </section>
  );
}

export default Projects;
