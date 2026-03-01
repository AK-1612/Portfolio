import React from 'react';
import Section from '../layout/Section';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: 'AI TraceFinder',
            description: 'Machine learning system identifying printer/scanner source using CNN and SVM. Includes preprocessing pipeline, model training, and deployment.',
            tech: ['Python', 'TensorFlow', 'Scikit-learn', 'CNN', 'SVM'],
            github: 'https://github.com/AK-1612/AI-TraceFinder'
        },
        {
            title: 'Credit Card Fraud Detection',
            description: 'Fraud detection ML pipeline utilizing Random Forest, XGBoost, and advanced preprocessing for high-accuracy anomaly detection.',
            tech: ['Python', 'XGBoost', 'Random Forest', 'Scikit-learn'],
            github: 'https://github.com/AK-1612/Machine-Learning-Projects.'
        },
        {
            title: 'Medi-Master',
            description: 'Full stack medical record and recommendation system built with robust relational databases and secure REST APIs.',
            tech: ['Flask', 'Python', 'MySQL', 'HTML/CSS/JS'],
            github: 'https://github.com/AK-1612/Medi-Master'
        },
        {
            title: 'Voice Assistant (A.N.S.H.U.L.)',
            description: 'Real-time speech recognition assistant automating complex desktop workflows leveraging Python speech libraries.',
            tech: ['Python', 'SpeechRecognition', 'PyAudio', 'Automation'],
            github: 'https://github.com/AK-1612/A.N.S.H.U.L.'
        },
        {
            title: 'Swift Music Player',
            description: 'Native iOS music player with high-performance audio playback, playlist management, and clean user interface.',
            tech: ['Swift', 'UIKit', 'AVFoundation', 'iOS'],
            github: 'https://github.com/AK-1612/Swift-Projects.'
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
