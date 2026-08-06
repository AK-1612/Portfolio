import React from 'react';
import Section from '../layout/Section';
import './Skills.css';
import { Terminal, Database, Smartphone, Layout, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
    const skillsData = [
        {
            category: 'Languages',
            icon: <Terminal size={24} />,
            items: ['Python', 'Swift', 'C', 'C++', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'SQL']
        },
        {
            category: 'Generative AI & ML',
            icon: <Cpu size={24} />,
            items: ['FastAPI', 'Groq (Llama 3.3)', 'Google Gemini', 'TensorFlow', 'Keras', 'Scikit-learn', 'CNNs', 'SVMs', 'Computer Vision']
        },
        {
            category: 'Backend & Cloud',
            icon: <Database size={24} />,
            items: ['Flask', 'Hono (Node.js)', 'SQLAlchemy', 'Prisma ORM', 'MySQL', 'PostgreSQL', 'SQLite', 'Firebase', 'Twilio API']
        },
        {
            category: 'iOS & Spatial Computing',
            icon: <Smartphone size={24} />,
            items: ['SwiftUI', 'UIKit', 'ARKit', 'RealityKit', 'MVVM', 'Combine', 'Apple Intelligence', 'Xcode']
        },
        {
            category: 'Frontend & UI',
            icon: <Layout size={24} />,
            items: ['React', 'Next.js', 'TailwindCSS', 'Glassmorphism', 'Framer Motion', 'Streamlit', 'PWA']
        },
        {
            category: 'Tools & Workflows',
            icon: <Wrench size={24} />,
            items: ['Git', 'Linux', 'Jira', 'Jupyter Notebook', 'Google Colab', 'Pusher', 'Agile Development']
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
