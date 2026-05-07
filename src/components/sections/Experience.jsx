import React from 'react';
import Section from '../layout/Section';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'iOS Intern',
            company: 'Infosys',
            date: '04/2026 – 05/2026',
            description: 'Engineered a high-performance iOS frontend using SwiftUI, implementing a modern design system with glassmorphism, dynamic animations, and MVVM architecture. Architected and deployed a real-time communication system using Pusher, Hono (Node.js), and Prisma. Designed and implemented role-based access control and session management workflows.'
        },
        {
            id: 2,
            role: 'Artificial Intelligence Intern',
            company: 'Infosys Springboard',
            date: '11/2025 – 02/2026',
            description: 'Developed an end-to-end machine learning system to identify scanner brands from scanned document images. Built a custom dataset, designed a preprocessing pipeline, and implemented SVM and CNN models achieving ~93–96% accuracy. Deployed the final CNN via a Streamlit-based interface.'
        },
        {
            id: 3,
            role: 'Full Stack Trainee',
            company: 'Softech IT Solution',
            date: '08/2025 – 11/2025',
            description: 'Contributed to a production-grade School Management System built on Python-Flask. Developed staff profile management, attendance tracking, and financial analytics dashboards. Engineered attendance and grade management workflows with dynamic report card generation.'
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
