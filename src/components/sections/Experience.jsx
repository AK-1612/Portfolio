import React from 'react';
import Section from '../layout/Section';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Full Stack Engineer Trainee',
            company: 'Softech IT Solution',
            date: 'Present',
            description: 'Architecting production-grade enterprise platforms using Flask, Node.js, and relational database systems. Engineering comprehensive administrator dashboards and secure authentication layers to orchestrate complex data operations for educational institutions.'
        },
        {
            id: 2,
            role: 'Artificial Intelligence Intern',
            company: 'Infosys Springboard',
            date: '2024',
            description: 'Engineered and optimized CNN-based forensic identification systems. Developed high-performance data preprocessing pipelines and augmentation strategies, achieving significant improvements in inference accuracy across large-scale forensic datasets.'
        },
        {
            id: 3,
            role: 'LLM Research Intern',
            company: 'Vodafone Idea Foundation',
            date: '2023',
            description: 'Conducted large-scale data analysis and scientific visualization within the Python data ecosystem. Investigated natural language model architectures to derive actionable business insights for telecommunications infrastructure.'
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
