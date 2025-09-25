import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-center py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-muted font-mono">
          &copy; {new Date().getFullYear()} Dulari Wijenayake. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;