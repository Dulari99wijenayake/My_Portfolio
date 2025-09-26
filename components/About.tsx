import React from 'react';
import Section from './Section';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="flex flex-col items-center max-w-4xl mx-auto">
        <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-lg text-light leading-relaxed mb-4 text-justify">
            I am a passionate and dedicated final year Computer Science undergraduate with strong skills in full stack development. I enjoy designing and building innovative web applications that solve real world problems, combining creativity with technical expertise. My experience spans both frontend and backend development, and I am always eager to explore emerging technologies to enhance my knowledge and skills.
          </p>
          <p className="text-lg text-light leading-relaxed mb-6 text-justify">
            My goal is to become a highly skilled software engineer who contributes to impactful projects and drives technological innovation. I am motivated by continuous learning, problem solving, and the opportunity to make a meaningful difference through technology while also growing as a leader in the field.
          </p>
          <div className="text-center md:text-left">
            <a
              href="/My_Portfolio/CV/Dulari_SE_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-accent to-accent-secondary text-on-accent font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-accent/20"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;