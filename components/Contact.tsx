import React, { useState } from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send to an API endpoint.
    alert('Thank you for your message! This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-muted mb-8">
          Have a project in mind or just want to say hello? My inbox is always open.
          I'll get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-card border border-muted/30 text-light px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-card border border-muted/30 text-light px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-card border border-muted/30 text-light px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all"
          ></textarea>
          <button
            type="submit"
            className="inline-block bg-gradient-to-r from-accent to-accent-secondary text-on-accent font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-accent/20"
          >
            Send Message
          </button>
        </form>
        
        <div className="mt-16">
          <h3 className="font-serif text-xl font-semibold text-light mb-6">Or find me on</h3>
          <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {SOCIAL_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-muted hover:text-accent transition-all duration-300 transform hover:-translate-y-1"
                aria-label={link.name}
              >
                {link.icon}
                <span className="mt-2 text-sm font-mono">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;