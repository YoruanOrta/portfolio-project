// src/App.tsx - Torii Background Theme with imported image
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import toriiBackground from './assets/torii-background.jpg';
import './styles/Portfolio.css';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Torii background with imported image */}
      <div 
        className="toriiBackground" 
        style={{
          backgroundImage: `url(${toriiBackground})`,
        }}
      ></div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;