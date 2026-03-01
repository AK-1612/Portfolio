import React from 'react';
import Section from '../layout/Section';
import './About.css';

const About = () => {
    return (
        <Section id="about" title="About">
            <div className="about-content grid">
                <div className="about-text">
                    <p>
                        Computer Science undergraduate with CGPA 9.1. Experience developing production-grade full stack systems, machine learning pipelines, and deployed AI applications.
                    </p>
                    <p>
                        Strong expertise in Python, TensorFlow, Flask, and Swift. Built real-world systems including CNN-based device identification, fraud detection systems, and full stack platforms.
                    </p>
                    <div className="about-stats flex">
                        <div className="stat-item">
                            <span className="stat-value">9.1</span>
                            <span className="stat-label">CGPA</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">3+</span>
                            <span className="stat-label">Domains<br />(ML, Web, iOS)</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Prod-Grade<br />Projects</span>
                        </div>
                    </div>
                </div>

                <div className="about-graphic flex items-center justify-center">
                    <div className="terminal-window">
                        <div className="terminal-header">
                            <span className="btn-close"></span>
                            <span className="btn-min"></span>
                            <span className="btn-max"></span>
                            <div className="terminal-title">anshul@workspace:~</div>
                        </div>
                        <div className="terminal-body" style={{ fontFamily: 'var(--font-mono)' }}>
                            <p><span className="prompt">$</span> whoami</p>
                            <p className="output">Anshul Kumaria</p>
                            <p><span className="prompt">$</span> cat focus.txt</p>
                            <p className="output">Machine Learning & Architecture</p>
                            <p><span className="prompt">$</span> ./deploy_model.sh</p>
                            <p className="output success">[OK] Model loaded into memory.</p>
                            <p className="output success">[OK] Inference API listening on port 8000.</p>
                            <p className="cursor">_</p>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default About;
