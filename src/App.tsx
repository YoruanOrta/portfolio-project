// src/App.tsx - Modern Dark Portfolio
import React from 'react';
import { Github, Mail, ExternalLink, Phone, MapPin, User } from 'lucide-react';
import { personalInfo, skills, projects } from './data/portfolioData';
import './styles/Portfolio.css';

const App: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="modernBackground">
      {/* Navigation */}
      <header className="fixed top-0 w-full modernNav z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-white">{personalInfo.name}</h1>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About me' },
                { id: 'services', label: 'Services' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'contact', label: 'Contact me' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-300 hover:text-green-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="heroSection">
        <div className="heroContent fadeInUp">
          <div className="profileImage">
            👨‍💻
          </div>
          
          <h1>
            Hi, I am<br />
            <span style={{color: 'var(--accent-green)'}}>{personalInfo.name}</span>
          </h1>
          
          <h2>Frontend Developer</h2>
          
          <p>
            {personalInfo.bio}
          </p>
          
          <div className="actionButtons">
            <a href="#contact" className="primaryButton">
              Contact Me
            </a>
            <button 
              onClick={() => scrollToSection('about')} 
              className="secondaryButton"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="modernSection">
        <h2 className="sectionTitle">About</h2>
        <div className="aboutContent fadeInUp">
          <p>
            I'm a passionate developer with experience in creating innovative digital solutions. 
            I specialize in modern technologies and enjoy transforming ideas into functional 
            and engaging applications that provide great user experiences.
          </p>
          <p>
            My journey in development has led me to work on various projects, from web applications 
            to mobile solutions. I'm always eager to learn new technologies and tackle challenging problems.
          </p>
          
          <div className="contactInfo">
            <div className="contactItem">
              <div className="contactDot"></div>
              <h4>Full Name</h4>
              <p>{personalInfo.name}</p>
            </div>
            <div className="contactItem">
              <div className="contactDot"></div>
              <h4>Email Address</h4>
              <p>{personalInfo.email}</p>
            </div>
            <div className="contactItem">
              <div className="contactDot"></div>
              <h4>GitHub</h4>
              <p>See my projects</p>
            </div>
            <div className="contactItem">
              <div className="contactDot"></div>
              <h4>Phone</h4>
              <p>787-951-3224</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="modernSection" style={{backgroundColor: 'var(--darker-bg)'}}>
        <h2 className="sectionTitle">What I do</h2>
        <div className="servicesGrid fadeInUp">
          <div className="serviceCard">
            <div className="serviceIcon">⚙️</div>
            <h3>Software<br />Development</h3>
          </div>
          <div className="serviceCard active">
            <div className="serviceIcon">💻</div>
            <h3>Web<br />Development</h3>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon">🎨</div>
            <h3>Web<br />Design</h3>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="modernSection">
        <h2 className="sectionTitle">My Tech Skills</h2>
        <div className="skillsOldStyle fadeInUp">
          {skills.map((skill, index) => (
            <div key={skill.name} className="skillCard">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="ml-auto text-green-400 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div 
                  className="skillProgressBar h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    transitionDelay: `${index * 0.1}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="modernSection" style={{backgroundColor: 'var(--darker-bg)'}}>
        <h2 className="sectionTitle">My Projects</h2>
        <div className="projectsGrid fadeInUp">
          {projects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="projectIcon">
                {project.image}
              </div>
              <div className="projectContent">
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">
                  {project.description}
                </p>
                <div className="projectTech">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="techTag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="projectLinks">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projectLink"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projectLink"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="modernSection">
        <h2 className="sectionTitle">Let's talk about your next project!</h2>
        <p className="text-xl text-gray-400 mb-12 text-center fadeInUp">
          I am always open to new opportunities and interesting collaborations.
        </p>
        
        <div className="contactCardsGrid fadeInUp">
          {/* Email Card */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="contactGlassCard"
          >
            <div className="contactIconContainer">
              <div className="contactIcon">
                <Mail size={32} />
              </div>
            </div>
            <h3 className="contactTitle">Email</h3>
            <p className="contactDescription">{personalInfo.email}</p>
          </a>
          
          {/* GitHub Card */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contactGlassCard"
          >
            <div className="contactIconContainer">
              <div className="contactIcon">
                <Github size={32} />
              </div>
            </div>
            <h3 className="contactTitle">GitHub</h3>
            <p className="contactDescription">See my projects</p>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {personalInfo.name} 2025</p>
      </footer>
    </div>
  );
};

export default App;