import React from 'react';
import Section from '../layout/Section';
import './Skills.css';
import { Terminal, Database, Smartphone, Layout, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: 'Languages',
            icon: <Terminal size={24} />,
            items: ['Python', 'Swift', 'TypeScript', 'C++', 'Java', 'SQL']
        },
        {
            category: 'Machine Learning',
            icon: <Cpu size={24} />,
            items: ['TensorFlow', 'PyTorch', 'Large Language Models (LLMs)', 'NLP', 'CNN', 'Computer Vision', 'CoreML']
        },
        {
            category: 'Backend',
            icon: <Database size={24} />,
            items: ['Hono', 'Prisma', 'Node.js', 'Flask', 'PostgreSQL', 'Redis', 'Neon']
        },
        {
            category: 'iOS Development',
            icon: <Smartphone size={24} />,
            items: ['SwiftUI', 'UIKit', 'Combine', 'Apple Intelligence', 'AVFoundation', 'XCTest']
        },
        {
            category: 'Frontend & UI',
            icon: <Layout size={24} />,
            items: ['React', 'Next.js', 'TailwindCSS', 'TypeScript', 'Framer Motion']
        },
        {
            category: 'Infrastructure',
            icon: <Wrench size={24} />,
            items: ['Git', 'Docker', 'Linux', 'Xcode', 'Jupyter', 'Vercel', 'Pusher']
        }
    ];

    return (
        <Section id="skills" title="Technical Skills" className="skills-section">
            <div className="skills-grid grid">
                {skillsData.map((skillGroup, index) => (
                    <div key={index} className="skill-card glass" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="skill-card-header flex items-center">
                            <div className="skill-icon flex items-center justify-center">
                                {skillGroup.icon}
                            </div>
                            <h3 className="skill-category">{skillGroup.category}</h3>
                        </div>
                        <div className="skill-items">
                            {skillGroup.items.map((item, idx) => (
                                <span key={idx} className="skill-tag">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
