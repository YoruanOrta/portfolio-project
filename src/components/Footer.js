// src/components/Footer.js
import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-gray-400">
          © {currentYear} {personalInfo.name}. Made with ❤️ and React.
        </p>
        <p className="text-gray-500 text-sm mt-2">
            Developer passionate about creating innovative solutions
        </p>
      </div>
    </footer>
  );
};

export default Footer;