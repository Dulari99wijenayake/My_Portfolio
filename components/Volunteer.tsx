

import React from 'react';
import Section from './Section';
import { VOLUNTEER_EXPERIENCE } from '../constants';

const Volunteer: React.FC = () => {
  return (
    <Section id="volunteer" title="Volunteer Work">
      <div className="relative border-l-2 border-accent-green/30 pl-16 space-y-12 max-w-4xl mx-auto">
        {VOLUNTEER_EXPERIENCE.map((exp, index) => (
          <div key={index} className="relative animate-fade-in-up">
            <div className="absolute -left-[73px] top-1 h-4 w-4 rounded-full bg-accent-green border-4 border-primary"></div>
            <p className="text-sm font-semibold text-accent-green mb-1">{exp.period}</p>
            <h3 className="font-serif text-2xl font-bold text-light">
              {exp.role} @ <span className="font-semibold">{exp.organization}</span>
            </h3>
            <p className="mt-2 text-muted leading-relaxed">{exp.description}</p>
            
            {/* Image Gallery */}
            {exp.images && exp.images.length > 0 && (
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {exp.images.map((img, imgIndex) => (
                  <a 
                    key={imgIndex} 
                    href={img} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group overflow-hidden rounded-lg shadow-md hover:shadow-accent/30"
                  >
                    <img 
                      src={img} 
                      alt={`${exp.organization} event photo ${imgIndex + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Volunteer;