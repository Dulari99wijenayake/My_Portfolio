import React from 'react';
import Section from './Section';
import { PUBLICATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';
import type { Publication } from '../types';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCard: React.FC<PublicationCardProps> = ({ publication }) => {
  const { title, journal, year, url, description } = publication;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 group hover:shadow-accent/30 hover:-translate-y-1 block"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 mb-2">
          <h3 className="font-serif text-xl font-bold text-light group-hover:text-accent-green transition-colors">{title}</h3>
          <p className="text-muted text-sm flex-shrink-0">{year}</p>
      </div>
      <p className="text-accent-green font-semibold mb-3">{journal}</p>
      <p className="text-light/80 mb-4">{description}</p>
      <div className="flex items-center text-accent-green font-semibold">
          View Publication <ArrowUpRight size={20} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </a>
  );
};


const Publications: React.FC = () => {
  return (
    <Section id="publications" title="Publications">
      <div className="space-y-8 max-w-4xl mx-auto">
        {PUBLICATIONS.map((pub, index) => (
          <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
            <PublicationCard publication={pub} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Publications;