import React from 'react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary relative overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-secondary opacity-20 transform-gpu skew-y-[-6deg]"></div>
       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob"></div>
       <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-accent-secondary rounded-full mix-blend-screen filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="z-10 max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Image Container - Now on the left */}
        <div className="md:w-2/5 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
           <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-full md:h-auto md:max-w-[18rem] lg:max-w-xs">
             <img
              src="https://github.com/Dulari99wijenayake.png"
              alt="Dulari Wijenayake"
              className="rounded-full w-full h-full object-cover shadow-[0_0_50px_8px_rgba(31,175,112,0.5)]"
            />
           </div>
        </div>

        {/* Text Content - Now on the right */}
        <div className="text-center md:text-left md:w-3/5">
           <div className="animate-fade-in-up">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-light">
              Hi...
            </h1>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-light mb-4">
              I'm <span className="text-accent-green">Dulari Wijenayake</span>
            </h1>
          </div>
          <p
              className="text-lg sm:text-xl md:text-2xl text-muted font-mono mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
          >
            <span className="overflow-hidden whitespace-nowrap border-r-4 border-r-accent animate-typing inline-block">A Passionate Full Stack Developer</span>
          </p>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-block bg-gradient-to-r from-accent to-accent-secondary text-on-accent font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg shadow-accent/20"
            >
              View My Work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;