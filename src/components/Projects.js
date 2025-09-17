// src/components/Projects.js - Glassmorphism Design
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-white text-center mb-16 fadeInUp">
          My <span className="zenGradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="projectToriiCard group fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project icon with glassmorphism background */}
              <div className="toriiIconContainer">
                <div className="toriiIcon">
                  <span className="text-4xl">{project.image}</span>
                </div>
                <div className="toriiIconGlow"></div>
              </div>

              {/* Project content */}
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">
                  {project.description}
                </p>
                
                {/* Technology badges */}
                <div className="technologyBadges">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="toriiTechBadge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project links */}
                <div className="projectLinks">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink"
                    >
                      <ExternalLink size={18} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;