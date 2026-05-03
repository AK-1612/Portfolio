import React from 'react';
import Section from '../layout/Section';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: 'Sāmwaad',
            description: 'Enterprise-grade real-time communication platform featuring AI-powered diarization, live translation, and Apple Intelligence integration for seamless collaborative workflows.',
            tech: ['Swift', 'SwiftUI', 'Pusher', 'Apple Intelligence', 'Hono', 'Prisma'],
            github: 'https://github.com/AK-6576/MIT_WPU-Group-4'
        },
        {
            title: 'Fleet Management System',
            description: 'Full-scale logistics and maintenance platform with real-time asset tracking, AI-driven inspection analysis, and a robust modular MVVM architecture.',
            tech: ['iOS', 'SwiftUI', 'MVVM', 'PostgreSQL', 'Combine', 'Hono'],
            github: 'https://github.com/AK-1612/FMS-FullStack'
        },
        {
            title: 'AI Travel Assistant',
            description: 'Intelligent itinerary planning engine that generates hyper-personalized travel experiences using LLMs and real-time flight/hotel data integration.',
            tech: ['React', 'Node.js', 'Google Gemini', 'OpenAI', 'TailwindCSS'],
            github: 'https://github.com/AK-1612/QuAnHack-Assignment'
        },
        {
            title: 'Aeron Utilities',
            description: 'Cross-platform system optimization suite for macOS and iOS, focused on performance monitoring, memory management, and automated maintenance.',
            tech: ['Swift', 'C++', 'SystemExtensions', 'Combine', 'Metal'],
            github: 'https://github.com/AK-1612/Aeron-Assignment'
        },
        {
            title: 'AI TraceFinder',
            description: 'Advanced forensic ML system identifying printer source signatures using CNN-SVM architectures and specialized image preprocessing pipelines.',
            tech: ['Python', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'PyTorch'],
            github: 'https://github.com/AK-1612/AI-TraceFinder'
        }
    ];

    return (
        <Section id="projects" title="Featured Engineering Work" className="projects-section">
            <div className="projects-grid grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card glass" style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="project-content">
                            <div className="project-header flex justify-between items-center">
                                <div className="project-folder">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div className="project-links flex">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                                            <Github size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                        </div>

                        <div className="project-tech">
                            {project.tech.map((tech, idx) => (
                                <span key={idx}>{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
