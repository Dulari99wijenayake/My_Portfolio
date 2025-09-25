import React, { useState } from 'react';
import Section from './Section';
import { PROJECTS } from '../constants';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Project } from '../types';


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, type, imageUrls, sourceUrl } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };
  
  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    e.preventDefault();
    setCurrentImageIndex(index);
  }


  return (
    <div className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-accent/30 transition-shadow duration-300 flex flex-col group">
      <div className="relative overflow-hidden">
        <img src={imageUrls[currentImageIndex]} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
        
        {/* Carousel controls */}
        {imageUrls.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 z-10"
            >
              <ChevronRight size={24} />
            </button>
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {imageUrls.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => goToImage(e, index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    currentImageIndex === index ? 'bg-accent' : 'bg-white/50 hover:bg-white'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl font-bold text-light mb-2">{title}</h3>
        <p className="text-muted text-base flex-grow mb-4">
          {description}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-accent-green hover:underline ml-2 font-semibold"
              aria-label={`Source code for ${title}`}
            >
              View Source <Github size={16} />
            </a>
          )}
        </p>
        <div>
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${
            type === 'Individual' ? 'bg-tag-2/20 text-tag-2' : 'bg-tag-1/20 text-tag-1'
          }`}>
            {type} Project
          </span>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
           <div key={project.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <ProjectCard project={project} />
           </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;