import React from 'react';
import Section from './Section';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <Section id="education" title="Education">
      <div className="space-y-8 max-w-4xl mx-auto">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="bg-card p-6 rounded-lg shadow-md animate-fade-in-up transition-shadow hover:shadow-accent/30">
            <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2">
              <div>
                <h3 className="font-serif text-xl font-bold text-light">{edu.degree}</h3>
                <p className="text-accent-green font-semibold">{edu.institution}</p>
              </div>
              <p className="text-muted text-sm flex-shrink-0">{edu.period}</p>
            </div>
            <p className="mt-4 text-light/80 whitespace-pre-line">{edu.details}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;