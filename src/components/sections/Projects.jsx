import React from 'react';
import Section from '../layout/Section';
import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectsData = [
        {
            title: 'Travel Reimbursement Agent',
            description: 'Autonomous AI approval system engineered using FastAPI, Streamlit, and Groq (Llama 3.3) to evaluate corporate travel claims against policy documents with custom tool-calling for receipt validation and structured JSON audit logs.',
            tech: ['FastAPI', 'Streamlit', 'Groq', 'Llama 3.3', 'Python', 'JSON Schema'],
            github: 'https://github.com/AK-1612/Travel-Reimbursement-Agent'
        },
        {
            title: 'QuanView',
            description: 'Immersive iOS application using SwiftUI, ARKit, and RealityKit to visualize quantum mechanics concepts through interactive augmented reality experiences, real-time 3D simulations, and spatial plane detection.',
            tech: ['Swift', 'SwiftUI', 'ARKit', 'RealityKit', '3D Simulation'],
            github: 'https://github.com/AK-1612/QuanView'
        },
        {
            title: 'ItineraryAgent',
            description: 'AI-powered backend workflow system converting conversational WhatsApp messages into structured travel itineraries with Google Gemini LLM workflows, Twilio APIs, and agency lead management.',
            tech: ['Python', 'FastAPI', 'Google Gemini', 'Twilio API', 'WhatsApp'],
            github: 'https://github.com/AK-1612/AITravels-Travel-Itinerary'
        },
        {
            title: 'Sāmwaad',
            description: 'Enterprise-grade real-time communication platform featuring AI-powered diarization, live translation, and Apple Intelligence integration for seamless collaborative workflows.',
            tech: ['Swift', 'SwiftUI', 'Pusher', 'Apple Intelligence', 'Hono', 'Prisma'],
            github: 'https://github.com/AK-6576/MIT_WPU-Group-4'
        },
        {
            title: 'CampusPilot AI',
            description: 'Agentic AI-powered accessible campus navigation platform featuring LLM agents, QR indoor positioning, 5 disability profiles, and an offline-first PWA architecture.',
            tech: ['TypeScript', 'React', 'LLM Agent', 'PWA', 'TailwindCSS'],
            github: 'https://github.com/AK-1612/campuspilot-ai'
        },
        {
            title: 'SmartAI CRM',
            description: 'AI-powered Customer Relationship Management platform featuring sales pipelines, marketing automation, AI assistants, customer support ticketing, and workflow automation.',
            tech: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
            github: 'https://github.com/AK-1612/SmartAI-CRM'
        },
        {
            title: 'AI TraceFinder',
            description: 'Advanced forensic ML system identifying scanner brand signatures using CNN-SVM architectures and specialized document image preprocessing pipelines.',
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
