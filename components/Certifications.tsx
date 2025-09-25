import React from 'react';
import Section from './Section';
import { CERTIFICATIONS } from '../constants';
import type { Certification } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
  animationDelay: string;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification, animationDelay }) => {
  const { title, issuer, url } = certification;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card p-6 rounded-lg shadow-lg transition-all duration-500 group [transform-style:preserve-3d] hover:shadow-accent/40 hover:[transform:rotateX(10deg)_translateY(-0.5rem)] border-2 border-transparent hover:border-accent-green/50 block h-full flex flex-col justify-center text-center animate-float"
      style={{ animationDelay }}
    >
      <div className="[transform:translateZ(20px)]">
        <h3 className="font-serif text-lg font-bold text-light mb-2">{title}</h3>
        <p className="text-muted font-semibold mb-4">{issuer}</p>
        <div className="flex items-center justify-center text-accent-green font-semibold mt-4 transition-opacity duration-300">
            View Certificate
            <ArrowUpRight size={20} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
    </a>
  );
};


const Certifications: React.FC = () => {
  return (
    <Section id="certifications" title="Certifications & Achievements">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto [perspective:1000px]">
        {CERTIFICATIONS.map((cert, index) => (
          <div 
            key={index} 
            className="animate-fade-in-up" 
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <CertificationCard 
              certification={cert}
              animationDelay={`${index * 0.3}s`} 
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;