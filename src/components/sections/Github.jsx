import React, { useState, useEffect } from 'react';
import Section from '../layout/Section';
import { GitFork, Star, Github as GithubIcon, Circle } from 'lucide-react';
import './Github.css';

const GithubSection = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    // Using mock data matching the user's repos to ensure reliability and speed, 
    // without relying on live GitHub API limits.
    useEffect(() => {
        const fetchRepos = () => {
            // Mocking fetch delay
            setTimeout(() => {
                setRepos([
                    {
                        id: 1,
                        name: 'Travel-Reimbursement-Agent',
                        description: 'Autonomous AI approval system using FastAPI, Streamlit, and Groq (Llama 3.3) for corporate travel claim evaluation.',
                        language: 'Python',
                        full_name: 'AK-1612/Travel-Reimbursement-Agent',
                        stargazers_count: 1,
                        forks_count: 0,
                        updated_at: '2026-07-20T10:00:00Z',
                        color: '#3572A5'
                    },
                    {
                        id: 2,
                        name: 'QuanView',
                        description: 'Immersive augmented reality educational lab exploring quantum mechanics through real-time 3D simulations.',
                        language: 'Swift',
                        full_name: 'AK-1612/QuanView',
                        stargazers_count: 2,
                        forks_count: 0,
                        updated_at: '2026-08-03T04:37:10Z',
                        color: '#F05138'
                    },
                    {
                        id: 3,
                        name: 'AITravels-Travel-Itinerary',
                        description: 'Enterprise AI travel assistant transforming conversational WhatsApp messages into structured travel itineraries.',
                        language: 'Python',
                        full_name: 'AK-1612/AITravels-Travel-Itinerary',
                        stargazers_count: 1,
                        forks_count: 0,
                        updated_at: '2026-06-16T17:18:56Z',
                        color: '#3572A5'
                    },
                    {
                        id: 4,
                        name: 'campuspilot-ai',
                        description: 'Agentic AI-powered accessible campus navigation with LLM agents, QR positioning, and offline-first PWA.',
                        language: 'TypeScript',
                        full_name: 'AK-1612/campuspilot-ai',
                        stargazers_count: 1,
                        forks_count: 0,
                        updated_at: '2026-06-15T05:47:46Z',
                        color: '#3178c6'
                    },
                    {
                        id: 5,
                        name: 'SmartAI-CRM',
                        description: 'AI-powered Customer Relationship Management platform with sales pipeline and workflow automation.',
                        language: 'TypeScript',
                        full_name: 'AK-1612/SmartAI-CRM',
                        stargazers_count: 1,
                        forks_count: 0,
                        updated_at: '2026-07-14T18:27:49Z',
                        color: '#3178c6'
                    },
                    {
                        id: 6,
                        name: 'AI-TraceFinder',
                        description: 'Advanced forensic tool to identify scanner models by analyzing digital artifacts in scanned documents.',
                        language: 'Python',
                        full_name: 'AK-1612/AI-TraceFinder',
                        stargazers_count: 1,
                        forks_count: 0,
                        updated_at: '2026-08-06T04:26:08Z',
                        color: '#3572A5'
                    },
                    {
                        id: 7,
                        name: 'Medi-Master',
                        description: 'Database-driven medical prescription and patient management system built with Flask and MySQL.',
                        language: 'Python',
                        full_name: 'AK-1612/Medi-Master',
                        stargazers_count: 1,
                        forks_count: 0,
                        updated_at: '2026-03-01T07:36:00Z',
                        color: '#3572A5'
                    },
                    {
                        id: 8,
                        name: 'Samwaad',
                        description: 'Enterprise real-time communication platform featuring AI diarization and Apple Intelligence integration.',
                        language: 'Swift',
                        full_name: 'AK-6576/MIT_WPU-Group-4',
                        stargazers_count: 24,
                        forks_count: 5,
                        updated_at: '2026-05-01T10:00:00Z',
                        color: '#F05138'
                    }
                ]);
                setLoading(false);
            }, 800);
        };

        fetchRepos();
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <Section id="github" title="Open Source & GitHub" className="github-section">
            <div className="github-intro flex justify-between items-center mb-4">
                <p>Recent technical contributions and personal repositories.</p>
                <a href="https://github.com/AK-1612" target="_blank" rel="noreferrer" className="btn btn-outline flex items-center gap-2">
                    <GithubIcon size={18} /> View Profile
                </a>
            </div>

            {loading ? (
                <div className="github-loading flex justify-center items-center">
                    <div className="spinner"></div>
                </div>
            ) : (
                <div className="github-grid grid">
                    {repos.map((repo, idx) => (
                        <a key={repo.id} href={`https://github.com/${repo.full_name}`} target="_blank" rel="noreferrer" className="repo-card glass" style={{ animationDelay: `${idx * 0.1}s` }}>
                            <div className="repo-header flex items-center gap-2">
                                <GithubIcon size={20} className="repo-icon" />
                                <h3 className="repo-name">{repo.name}</h3>
                            </div>
                            <p className="repo-desc">{repo.description}</p>
                            <div className="repo-footer flex justify-between items-center">
                                <div className="repo-stats flex gap-3">
                                    <span className="flex items-center gap-1">
                                        <Circle size={12} fill={repo.color} color={repo.color} /> {repo.language}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Star size={14} /> {repo.stargazers_count}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <GitFork size={14} /> {repo.forks_count}
                                    </span>
                                </div>
                                <div className="repo-date">
                                    Updated {formatDate(repo.updated_at)}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </Section>
    );
};

export default GithubSection;
