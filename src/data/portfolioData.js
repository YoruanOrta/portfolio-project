// src/data/portfolioData.js

export const personalInfo = {
    name: "Yoruan Orta Bonilla",
    role: "Developer",
    email: "nauroy71106@gmail.com",
    github: "https://github.com/YoruanOrta",
    bio: "I'm a developer passionate about creating innovative digital solutions. I specialize in modern technologies and enjoy transforming ideas into functional and engaging applications."
};

export const skills = [
    { name: "JavaScript", level: 20, icon: "💛" },
    { name: "React", level: 40, icon: "⚛️" },
    { name: "TypeScript", level: 10, icon: "🔷" },
    { name: "Node.js", level: 20, icon: "💚" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "CSS/HTML", level: 85, icon: "🎨" },
    { name: "MongoDB", level: 50, icon: "🍃" },
    { name: "Git", level: 88, icon: "📱" },
    { name: "Docker", level: 30, icon: "🐳" },
];

export const projects = [
    {
    id: 1,
    title: "Mechlink",
    description: "MechLink is a comprehensive web application designed to connect vehicle owners with trusted automotive workshops in Puerto Rico. Our platform simplifies the process of finding reliable mechanics, booking appointments, and managing vehicle maintenance.",
    technologies: ["React", "Python", "FastAPI", "CSS/HTML"],
    github: "https://github.com/YoruanOrta/MechLink_Project",
    demo: "https://github.com/YoruanOrta/Mechlink_project_info",
    image: "🚗 "
    },
    {
    id: 2,
    title: "holbertonschool-web_back_end",
    description: "This repository contains a comprehensive collection of backend development projects covering modern JavaScript (ES6+), Python asynchronous programming, Node.js development, and database management. The projects demonstrate mastery of server-side technologies, API development, and backend architecture patterns.",
    technologies: ["Javascript", "Shell", "Python", "Node.js", "MongoDB"],
    github: "https://github.com/YoruanOrta/holbertonschool-web_back_end",
    image: "📋"
    },
    {
    id: 3,
    title: "holbertonschool-higher_level_programming",
    description: "This repository showcases a diverse range of higher-level programming projects completed as part of the Holberton School curriculum. These projects cover multiple programming languages and advanced computer science concepts, emphasizing modern software development practices.",
    technologies: ["JavaScript", "Python", "HTML", "Shell", "CSS", "SQL"],
    github: "https://github.com/YoruanOrta/holbertonschool-higher_level_programming",
    image: "🌤️"
    },
    {
    id: 4,
    title: "holbertonschool-hbnb",
    description: "A full-stack web application replicating Airbnb's core functionality, developed as a progressive project at Holberton School. This project showcases modern web development practices, including console-based data management, authentication, database integration, and responsive design.",
    technologies: ["Python", "Javascript", "CSS", "HTML", "MySQL"],
    github: "https://github.com/YoruanOrta/holbertonschool-hbnb",
    image: "👨‍💻"
    },
];

export const navigation = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];