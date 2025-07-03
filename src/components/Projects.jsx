import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import profile from '../data/profile.json';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Generate a consistent color based on project index
  const colors = [
    'from-pink-600/20 to-pink-900/10',
    'from-amber-600/20 to-amber-900/10',
    'from-purple-600/20 to-purple-900/10',
    'from-blue-600/20 to-blue-900/10',
  ];
  const colorClass = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-br ${colorClass} hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-pink-900/30 flex items-center justify-center text-pink-400">
            <FiCode className="text-2xl" />
          </div>
          <div className="flex space-x-3">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub Repository"
              >
                <FiGithub className="text-xl" />
              </a>
            )}
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Live Demo"
            >
              <FiExternalLink className="text-xl" />
            </a>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-zinc-300 mb-4">{project.description}</p>
        
        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="px-2.5 py-1 text-xs font-medium bg-pink-900/30 text-pink-200 rounded-full border border-pink-800/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
      
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-2 px-4 bg-pink-800/70 text-white rounded-lg text-center font-medium hover:bg-pink-700/80 transition-colors flex items-center justify-center gap-2"
        >
          Ver Proyecto <FiExternalLink className="text-sm" />
        </a>
      </motion.div>
    </motion.div>
  );
};

function Projects() {
  const projects = profile.project.list_projects;
  const [activeFilter, setActiveFilter] = useState('all');

  // Add some sample data for demonstration
  const enhancedProjects = projects.map((project, index) => ({
    ...project,
    technologies: [
      ['React', 'Node.js', 'MongoDB'],
      ['Next.js', 'Tailwind CSS', 'Firebase'],
      ['TypeScript', 'GraphQL', 'PostgreSQL']
    ][index % 3],
    github: `https://github.com/rogerreys/project${index + 1}`
  }));

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-amber-300">Proyectos</span>
        </h2>
        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
          Algunos de los proyectos en los que he trabajado recientemente
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {enhancedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <motion.div 
        className="flex justify-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="https://github.com/rogerreys"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-pink-900/50 text-pink-100 rounded-full border border-pink-800 hover:bg-pink-800/70 hover:border-pink-700 transition-all duration-300 flex items-center gap-2 group"
        >
          Ver más en GitHub
          <FiGithub className="group-hover:translate-x-1 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;
