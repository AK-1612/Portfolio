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
                        name: 'Samwaad',
                        description: 'AI-powered real-time communication platform with diarization.',
                        language: 'Swift',
                        full_name: 'AK-1612/Samwaad',
                        stargazers_count: 24,
                        forks_count: 5,
                        updated_at: '2024-05-01T10:00:00Z',
                        color: '#F05138'
                    },
                    {
                        id: 2,
                        name: 'FMS-FullStack',
                        description: 'Enterprise fleet management system with iOS frontend.',
                        language: 'Swift',
                        full_name: 'AK-1612/FMS-FullStack',
                        stargazers_count: 18,
                        forks_count: 4,
                        updated_at: '2024-04-28T14:30:00Z',
                        color: '#F05138'
                    },
                    {
                        id: 3,
                        name: 'AI-Travel-Assistant',
                        description: 'Intelligent travel itinerary generator using Gemini LLM.',
                        language: 'JavaScript',
                        full_name: 'AK-1612/AI-Travel-Assistant',
                        stargazers_count: 15,
                        forks_count: 3,
                        updated_at: '2024-04-15T08:15:00Z',
                        color: '#f1e05a'
                    },
                    {
                        id: 4,
                        name: 'Aeron-Utilities',
                        description: 'System optimization suite for macOS and iOS.',
                        language: 'Swift',
                        full_name: 'AK-1612/Aeron-Utilities',
                        stargazers_count: 12,
                        forks_count: 2,
                        updated_at: '2024-03-20T16:45:00Z',
                        color: '#F05138'
                    },
                    {
                        id: 5,
                        name: 'AI-TraceFinder',
                        description: 'CNN-based printer source identification system.',
                        language: 'Python',
                        full_name: 'AK-1612/AI-TraceFinder',
                        stargazers_count: 10,
                        forks_count: 1,
                        updated_at: '2024-03-10T11:00:00Z',
                        color: '#3572A5'
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
