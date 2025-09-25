
import React from 'react';
import Section from './Section';
import { HOBBIES } from '../constants';
import type { Hobby } from '../types';

interface HobbyCardProps {
  hobby: Hobby;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ hobby }) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-accent/30 transition-shadow duration-300 text-center flex flex-col items-center h-full">
      <div className="mb-4">{hobby.icon}</div>
      <h3 className="font-serif text-xl font-bold text-light mb-2">{hobby.name}</h3>
      <p className="text-muted text-base">{hobby.description}</p>
    </div>
  );
};

const Hobbies: React.FC = () => {
  return (
    <Section id="hobbies" title="Hobbies & Interests">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {HOBBIES.map((hobby, index) => (
          <div key={index} className="animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.15}s` }}>
            <HobbyCard hobby={hobby} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Hobbies;
