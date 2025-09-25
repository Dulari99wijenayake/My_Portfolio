import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary odd:bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-center mb-12 text-light relative inline-block left-1/2 -translate-x-1/2">
          {title}
          <span className="block h-1 w-20 bg-gradient-to-r from-accent to-accent-secondary mt-2 mx-auto rounded"></span>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;