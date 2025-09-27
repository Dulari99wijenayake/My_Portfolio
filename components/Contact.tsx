import React, { useState, useRef } from 'react';
import Section from './Section';
import { SOCIAL_LINKS } from '../constants';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
          'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
          form.current,
          'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        );

        if (result.text === 'OK') {
          setSubmitStatus({
            type: 'success',
            message: 'Thank you for your message! I will get back to you soon.'
          });
          setFormData({ name: '', email: '', message: '' });
        }
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-muted mb-8">
          Have a project in mind or just want to say hello? My inbox is always open.
          I'll get back to you as soon as possible!
        </p>

        <form ref={form} onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up">
          {submitStatus.type && (
            <div className={`p-4 rounded-md ${
              submitStatus.type === 'success' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'
            }`}>
              {submitStatus.message}
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full bg-card border border-muted/30 text-light px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              className="w-full bg-card border border-muted/30 text-light px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-accent transition-all disabled:opacity-50"
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