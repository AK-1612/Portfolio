import React from 'react';
import Section from '../layout/Section';
import './Skills.css';
import { Terminal, Database, Smartphone, Layout, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: 'Languages',
            icon: <Terminal size={24} />,
            items: ['Python', 'Swift', 'Java', 'C++', 'C', 'JavaScript']
        },
        {
            category: 'Machine Learning',
            icon: <Cpu size={24} />,
            items: ['TensorFlow', 'Keras', 'Scikit-learn', 'CNN', 'SVM', 'Computer Vision', 'Data Preprocessing']
        },
        {
            category: 'Backend',
            icon: <Database size={24} />,
            items: ['Flask', 'Django', 'REST APIs', 'SQL']
        },
        {
            category: 'Frontend',
            icon: <Layout size={24} />,
            items: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            category: 'Mobile',
            icon: <Smartphone size={24} />,
            items: ['Swift', 'UIKit', 'AVFoundation']
        },
        {
            category: 'Tools & DB',
            icon: <Wrench size={24} />,
            items: ['Git', 'Linux', 'Xcode', 'Jupyter', 'PostgreSQL', 'MySQL', 'SQLite']
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
