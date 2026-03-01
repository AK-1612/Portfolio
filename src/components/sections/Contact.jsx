import React, { useState } from 'react';
import Section from '../layout/Section';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setStatus('sending');
        setTimeout(() => {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <Section id="contact" title="Get In Touch" className="contact-section">
            <div className="contact-grid grid">
                <div className="contact-info">
                    <p className="contact-desc">
                        I'm currently looking for new opportunities in Machine Learning, Full-Stack, and iOS development. Whether you have a question or just want to say hi, my inbox is open.
                    </p>

                    <div className="contact-links flex-col">
                        <a href="mailto:anshulkumaria2004@gmail.com" className="contact-item group flex items-center">
                            <div className="contact-icon-wrapper flex items-center justify-center">
                                <Mail size={22} className="group-hover:text-accent" />
                            </div>
                            <div>
                                <span className="contact-label">Email</span>
                                <span className="contact-value">anshulkumaria2004@gmail.com</span>
                            </div>
                        </a>

                        <a href="https://github.com/AK-1612" target="_blank" rel="noreferrer" className="contact-item group flex items-center">
                            <div className="contact-icon-wrapper flex items-center justify-center">
                                <Github size={22} className="group-hover:text-accent" />
                            </div>
                            <div>
                                <span className="contact-label">GitHub</span>
                                <span className="contact-value">github.com/AK-1612</span>
                            </div>
                        </a>

                        <a href="https://linkedin.com/in/anshul-kumaria" target="_blank" rel="noreferrer" className="contact-item group flex items-center">
                            <div className="contact-icon-wrapper flex items-center justify-center">
                                <Linkedin size={22} className="group-hover:text-accent" />
                            </div>
                            <div>
                                <span className="contact-label">LinkedIn</span>
                                <span className="contact-value">linkedin.com/in/anshul-kumaria</span>
                            </div>
                        </a>
                    </div>
                </div>

                <div className="contact-form-container glass">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="sr-only">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Message"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                                className="form-input form-textarea"
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn flex items-center justify-center" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : (
                                <>Send Message <Send size={18} className="ml-2" style={{ marginLeft: '0.5rem' }} /></>
                            )}
                        </button>
                        {status === 'success' && (
                            <p className="form-success">Message sent successfully!</p>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
