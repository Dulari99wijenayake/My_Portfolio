import React from 'react';
import Section from './Section';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" title="What Others Say">
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {TESTIMONIALS.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-card p-8 rounded-lg shadow-md animate-fade-in-up transition-shadow hover:shadow-accent/30"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <Quote className="text-accent-green w-10 h-10 mb-4" />
            <p className="text-light/90 italic mb-6">"{testimonial.quote}"</p>
            <div className="text-right">
              <p className="font-bold text-light">{testimonial.author}</p>
              <p className="text-sm text-muted">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;