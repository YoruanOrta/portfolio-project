// src/components/Contact.js - Final Torii Theme Version
import React from 'react';
import { Mail, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold text-white mb-8 fadeInUp">
          Let's talk about your next <span className="zenGradient">project</span>!
        </h2>
        <p className="text-xl text-gray-400 mb-12 fadeInUp">
          I am always open to new opportunities and interesting collaborations.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Email Card with Torii Glassmorphism */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="contactToriiCard group fadeInUp"
          >
            <div className="toriiIconContainer">
              <div className="toriiIcon">
                <Mail size={32} />
              </div>
              <div className="toriiIconGlow"></div>
            </div>
            <h3 className="contactTitle">Email</h3>
            <p className="contactDescription">{personalInfo.email}</p>
          </a>
          
          {/* GitHub Card with Torii Glassmorphism */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contactToriiCard group fadeInUp"
          >
            <div className="toriiIconContainer">
              <div className="toriiIcon">
                <Github size={32} />
              </div>
              <div className="toriiIconGlow"></div>
            </div>
            <h3 className="contactTitle">GitHub</h3>
            <p className="contactDescription">See my projects</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;