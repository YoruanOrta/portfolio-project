// src/data/portfolioData.js

export const personalInfo = {
    name: "Yoruan Orta",
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
    image: "🚗"
    },
    {
    id: 2,
    title: "Virtual Garage",
    description: "An interactive virtual workshop featuring 3D vehicle customization with real modifications. Users can select from 20+ vehicle brands, customize colors, add performance parts, and view real-time HP impact through performance charts. Built with React Three Fiber for 3D rendering and includes local save functionality.",
    technologies: ["React", "Three.js", "Node.js", "Chart.js"],
    github: "https://github.com/YoruanOrta/Virtual-Garage",
    image: "🏎️"
    },
    {
    id: 3,
    title: "Real-Time Chat Application",
    description: "A full-stack real-time chat application enabling instant messaging between users. Features live message updates, user authentication, and responsive design for seamless communication across devices. Deployed on Render for reliable cloud hosting.",
    technologies: ["JavaScript", "Node.js", "Socket.io", "CSS"],
    github: "https://github.com/YoruanOrta/Chat-App",
    demo: "https://chat-app-render-link.com",
    image: "💬"
    },
    {
    id: 4,
    title: "Weather Dashboard",
    description: "A modern weather application providing real-time weather data and forecasts for any location worldwide. Features an intuitive interface with detailed weather metrics including temperature, humidity, wind speed, and 5-day forecasts. Built with TypeScript and deployed on Vercel.",
    technologies: ["TypeScript", "React", "API Integration", "CSS"],
    github: "https://github.com/YoruanOrta/Weather-app",
    demo: "https://weather-app-mu-orpin-61.vercel.app",
    image: "🌦️"
    },
    {
    id: 5,
    title: "WordPress Portfolio Theme",
    description: "A custom WordPress theme built with an AI-first development approach, featuring custom post types for portfolio projects, smooth animations, and modern responsive design. Demonstrates proficiency in PHP, WordPress theme development, and effective AI-assisted coding practices.",
    technologies: ["PHP", "WordPress", "JavaScript", "CSS"],
    github: "https://github.com/YoruanOrta/wordpress-portfolio-theme",
    image: "🎨"
    },
    {
    id: 6,
    title: "Pokémon Battle Game",
    description: "A turn-based Pokémon battle game built with Lua, featuring creature management, battle mechanics, map exploration, and player interactions. This project showcases game development fundamentals and object-oriented programming principles in Lua.",
    technologies: ["Lua", "Game Development"],
    github: "https://github.com/YoruanOrta/pokemon-game",
    image: "⚔️"
    },
    {
    id: 7,
    title: "Single-Page CV",
    description: "A clean and professional single-page curriculum vitae built with pure HTML and CSS. This project demonstrates fundamental web development skills and semantic HTML structure, serving as a coding practice exercise for layout and styling techniques.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/YoruanOrta/Single-Page-CV",
    image: "📄"
    },
    {
    id: 8,
    title: "holbertonschool-web_back_end",
    description: "This repository contains a comprehensive collection of backend development projects covering modern JavaScript (ES6+), Python asynchronous programming, Node.js development, and database management. The projects demonstrate mastery of server-side technologies, API development, and backend architecture patterns.",
    technologies: ["Javascript", "Shell", "Python", "Node.js", "MongoDB"],
    github: "https://github.com/YoruanOrta/holbertonschool-web_back_end",
    image: "📋"
    },
    {
    id: 9,
    title: "holbertonschool-higher_level_programming",
    description: "This repository showcases a diverse range of higher-level programming projects completed as part of the Holberton School curriculum. These projects cover multiple programming languages and advanced computer science concepts, emphasizing modern software development practices.",
    technologies: ["JavaScript", "Python", "HTML", "Shell", "CSS", "SQL"],
    github: "https://github.com/YoruanOrta/holbertonschool-higher_level_programming",
    image: "🎓"
    },
    {
    id: 10,
    title: "holbertonschool-hbnb",
    description: "A full-stack web application replicating Airbnb's core functionality, developed as a progressive project at Holberton School. This project showcases modern web development practices, including console-based data management, authentication, database integration, and responsive design.",
    technologies: ["Python", "Javascript", "CSS", "HTML", "MySQL"],
    github: "https://github.com/YoruanOrta/holbertonschool-hbnb",
    image: "🏠"
    },
];

export const navigation = [
    { id: 'about', label: 'About me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
];