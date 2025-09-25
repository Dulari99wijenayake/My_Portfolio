import React from 'react';
import Section from './Section';
import { SKILLS } from '../constants';
import type { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-card rounded-lg shadow-md hover:shadow-accent/30 hover:scale-105 transition-all duration-300">
      {skill.icon}
      <span className="mt-2 text-light font-medium">{skill.name}</span>
    </div>
  );
};


const Skills: React.FC = () => {
  return (
    <Section id="skills" title="My Tech Stack">
      <div className="space-y-12">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className="animate-fade-in-up">
            <h3 className="font-serif text-2xl font-semibold text-accent-green mb-6 text-center">{category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill) => (
                <SkillBadge key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;