// src/components/About.js - Torii Theme
import React from 'react';
import { Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="pt-24 pb-20 px-6 relative">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 fadeInUp">
          {/* Professional avatar with zen aesthetic */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            <div className="w-full h-full bg-gradient-to-br from-teal-600 via-slate-500 to-emerald-600 rounded-full flex items-center justify-center text-6xl shadow-2xl gentleHover">
              🏎️
            </div>
            {/* Subtle zen ripple effect */}
            <div className="absolute inset-0 rounded-full border border-transparent bg-gradient-to-r from-teal-400 to-emerald-500 bg-clip-border opacity-30 animate-ping" style={{animationDuration: '3s'}}></div>
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-4">
            Hi, I am <span className="toriiGradient">{personalInfo.name}</span>
          </h2>
          <p className="text-2xl text-teal-400 mb-6 font-semibold tracking-wide">
            {personalInfo.role}
          </p>
          <p className="text-lg text-gray-200 leading-relaxed max-w-3xl mx-auto">
            {personalInfo.bio} 
            <span className="block mt-4 text-emerald-400 font-medium">
              Crafting digital experiences with passion and precision.
            </span>
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 fadeInUp">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="toriiGlass text-white px-8 py-4 rounded-xl transition-all duration-300 gentleHover flex items-center space-x-3 text-lg font-semibold"
          >
            <Github size={24} />
            <span>GitHub</span>
          </a>
          <button className="zenButton gentleHover">
            <span>Let's Connect!</span>
          </button>
        </div>
        
        {/* Zen status indicators */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>
    </section>
  );
};

export default About;