import React from 'react';
import Section from '../layout/Section';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Full Stack Engineer Trainee',
            company: 'Softech IT Solution',
            date: 'Recent',
            description: 'Built production-grade school management platform leveraging Flask and SQL. Implemented comprehensive administrator dashboards and secure user authentication flows to orchestrate school data operations.'
        },
        {
            id: 2,
            role: 'Artificial Intelligence Intern',
            company: 'Infosys Springboard',
            date: 'Previous',
            description: 'Developed and trained CNN-based forensic identification machine learning system. Managed multi-stage data preprocessing and augmentation pipelines to improve inference accuracy across vast datasets.'
        },
        {
            id: 3,
            role: 'LLM Intern',
            company: 'Vodafone Idea Foundation',
            date: 'Past',
            description: 'Performed large-scale data analysis and scientific visualization using Python data ecosystems. Investigated and tested natural language models for telecommunications business insights.'
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
