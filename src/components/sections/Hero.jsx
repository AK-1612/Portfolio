import React from 'react';
import { ArrowRight, Github, FileText, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container grid">
                <div className="hero-content flex-col justify-center">
                    <div className="hero-badge">
                        <span className="badge-text" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>Anshul Kumaria</span>
                    </div>

                    <h1 className="hero-title">
                        Machine Learning Engineer<br />
                        <span className="hero-title-accent">Full-Stack & iOS</span>
                    </h1>

                    <p className="hero-headline">
                        Building intelligent, production-grade systems using Machine Learning and Full-Stack Engineering.
                    </p>

                    <p className="hero-subheadline">
                        Specializing in AI systems, deep learning, backend engineering, and native iOS development.
                    </p>

                    <div className="hero-actions flex">
                        <a href="#projects" className="btn btn-primary lg-btn">
                            View Projects <ArrowRight size={18} className="ml-2" style={{ marginLeft: '0.5rem' }} />
                        </a>
                        <a href="https://github.com/AK-1612" target="_blank" rel="noreferrer" className="btn btn-outline lg-btn icon-btn">
                            <Github size={20} /> <span className="sr-only">GitHub</span>
                        </a>
                        <a href="/resume.pdf" target="_blank" className="btn btn-outline lg-btn icon-btn" title="Resume" aria-label="Resume">
                            <FileText size={20} /> <span className="sr-only">Resume</span>
                        </a>
                        <a href="#contact" className="btn btn-outline lg-btn icon-btn" title="Contact">
                            <Mail size={20} /> <span className="sr-only">Contact</span>
                        </a>
                    </div>
                </div>

                <div className="hero-visual flex items-center justify-center">
                    <div className="hero-image-container">
                        <div className="glow-orb"></div>
                        <img
                            src="/profile.jpg"
                            alt="Anshul Kumaria"
                            className="hero-main-img"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('no-image');
                            }}
                        />
                        <div className="neural-net-anim overlay">
                            <div className="node n1"></div>
                            <div className="node n2"></div>
                            <div className="node n3"></div>
                            <svg className="connections" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20%" y1="30%" x2="50%" y2="50%" />
                                <line x1="50%" y1="50%" x2="80%" y2="30%" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
