import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Volunteer from './components/Volunteer';
import Hobbies from './components/Hobbies';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Blog />
        <Volunteer />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;