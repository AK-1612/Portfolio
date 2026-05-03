import React from 'react';
import Section from '../layout/Section';
import './About.css';

const About = () => {
    return (
        <Section id="about" title="About">
            <div className="about-content grid">
                <div className="about-text">
                    <p>
                        Computer Science undergraduate with a CGPA of 9.1, specializing in the intersection of Machine Learning, Cloud Architecture, and Native iOS development. I design and build production-ready systems that leverage advanced AI to solve real-world problems.
                    </p>
                    <p>
                        With deep expertise in Python, Swift, and modern backend frameworks like Hono and Prisma, I focus on creating high-performance applications with modular, scalable architectures. From CNN-based forensic tools to enterprise-grade logistics platforms, I bridge the gap between complex research and deployable software.
                    </p>
                    <div className="about-stats flex">
                        <div className="stat-item">
                            <span className="stat-value">9.1</span>
                            <span className="stat-label">CGPA</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">4+</span>
                            <span className="stat-label">Core<br />Domains</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">10+</span>
                            <span className="stat-label">Production<br />Projects</span>
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
