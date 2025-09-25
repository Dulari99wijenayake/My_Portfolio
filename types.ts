import type { ReactElement } from 'react';

export interface Project {
  title: string;
  description:string;
  type: 'Individual' | 'Group';
  imageUrls: string[];
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  icon: ReactElement;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface Article {
  title: string;
  description: string;
  platform: string;
  url: string;
  imageUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  url: string;
}

export interface VolunteerExperience {
  role: string;
  organization: string;
  period: string;
  description: string;
  images?: string[];
}

export interface Hobby {
  name: string;
  icon: ReactElement;
  description: string;
}

// FIX: Add Publication type to resolve import error in components/Publications.tsx
export interface Publication {
  title: string;
  journal: string;
  year: string;
  url: string;
  description: string;
}

// FIX: Add Testimonial type to support the TESTIMONIALS constant.
export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}