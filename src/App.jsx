import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import GithubSection from './components/sections/Github';
import Contact from './components/sections/Contact';

function App() {
    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <GithubSection />
                <Contact />
            </main>
            <footer style={{
                padding: '3rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-color)'
            }}>
                <p style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    letterSpacing: '0.02em'
                }}>
                    © {new Date().getFullYear()} Anshul Kumaria. Designed for excellence.
                </p>
            </footer>
        </div>
    );
}

export default App;
