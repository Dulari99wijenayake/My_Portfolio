import React from 'react';
import Section from './Section';
import { EXPERIENCE } from '../constants';

const tagColors = [
  'bg-tag-1/20 text-tag-1',
  'bg-tag-2/20 text-tag-2',
  'bg-tag-3/20 text-tag-3',
  'bg-tag-4/20 text-tag-4',
  'bg-tag-5/20 text-tag-5',
  'bg-tag-6/20 text-tag-6',
];

const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="relative border-l-2 border-accent-green/30 pl-16 space-y-12 max-w-4xl mx-auto">
        {EXPERIENCE.map((job, index) => (
          <div key={index} className="relative animate-fade-in-up">
            <div className="absolute -left-[73px] top-1 h-4 w-4 rounded-full bg-accent-green border-4 border-primary"></div>
            <p className="text-sm font-semibold text-accent-green mb-1">{job.period}</p>
            <h3 className="font-serif text-2xl font-bold text-light">
              {job.role} @ <span className="font-semibold">{job.company}</span>
            </h3>
            <p className="mt-2 text-muted leading-relaxed">{job.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {job.technologies.map((tech, techIndex) => (
                <span key={tech} className={`${tagColors[techIndex % tagColors.length]} text-xs font-semibold px-2.5 py-1 rounded-full`}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;