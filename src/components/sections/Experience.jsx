import React from 'react';
import Section from '../layout/Section';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Summer Intern - Gen AI',
            company: 'EY (Ernst & Young Services Pvt. Ltd.)',
            date: '07/2026 – Present',
            location: 'Pune, India',
            description: 'Developing enterprise AI solutions for consulting workflows, including LLM-powered automation and Microsoft PowerPoint integration. Contributing to multi-agent AI systems, enterprise workflow automation, and research across SAP-integrated business processes and Generative AI applications.'
        },
        {
            id: 2,
            role: 'iOS Intern',
            company: 'Infosys',
            date: '04/2026 – 05/2026',
            location: 'Mysuru, India',
            description: 'Built a real-time communication system using Pusher, Hono (Node.js), and Prisma for multi-role messaging. Engineered a high-performance iOS frontend using SwiftUI, glassmorphism, dynamic animations, and MVVM architecture.'
        },
        {
            id: 3,
            role: 'Artificial Intelligence Intern',
            company: 'Infosys Springboard',
            date: '11/2025 – 02/2026',
            location: 'Pune, India',
            description: 'Developed an end-to-end ML pipeline for scanner brand identification from scanned document images. Built custom preprocessing pipelines and trained SVM/CNN models, achieving ~93–96% classification accuracy.'
        },
        {
            id: 4,
            role: 'Full Stack Trainee',
            company: 'Softech IT Solution',
            date: '08/2025 – 11/2025',
            location: 'Pune, India',
            description: 'Contributed to a production-grade School Management System built on Python-Flask. Developed staff profile management, attendance tracking, and financial analytics dashboards with dynamic report card generation.'
        }
    ];

    return (
        <Section id="experience" title="Professional Experience" className="experience-section">
            <div className="timeline">
                {experiences.map((exp, idx) => (
                    <div key={exp.id} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content glass">
                            <div className="timeline-header flex justify-between items-center">
                                <h3 className="timeline-role">{exp.role}</h3>
                                <span className="timeline-date">{exp.date}</span>
                            </div>
                            <h4 className="timeline-company">{exp.company}</h4>
                            <p className="timeline-desc">{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
