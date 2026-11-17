import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import OpenSource from './OpenSource';

const sections = [
  { id: 'education', label: 'Education', Component: Education },
  { id: 'experience', label: 'Experience', Component: Experience },
  { id: 'projects', label: 'Projects', Component: Projects },
  { id: 'skills', label: 'Skills', Component: Skills },
  { id: 'open-source', label: 'Open Source', Component: OpenSource }
];

const container = { maxWidth: '1100px', margin: '0 auto', paddingLeft: '20px', paddingRight: '20px' };

const Portfolio = () => {
  // initial theme is set by the inline script in public/index.html
  const [dark, setDark] = useState(document.documentElement.dataset.theme === 'dark');
  const toggleTheme = () => {
    const next = dark ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (e) {}
    setDark(!dark);
  };

  return (
    <div style={{ backgroundColor: 'var(--page)', minHeight: '100vh' }}>
      {/* top bar on phones, left sidebar on desktop: see .site-* rules in App.css */}
      <div className="site-layout">
        <nav className="site-nav">
          <div className="site-nav-inner">
            <a href="#top" style={{ fontSize: '15px', fontWeight: 600, color: 'var(--fg-strong)' }}>Jotheesh Reddy Kummathi</a>
            <span className="site-nav-spacer" />
            <div className="site-nav-links">
              {sections.map(({ id, label }) => (
                <a key={id} href={`#${id}`} style={{ color: 'var(--fg-2)' }}>{label}</a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={dark ? 'Light theme' : 'Dark theme'}
              style={{ display: 'flex', padding: '4px', cursor: 'pointer', border: 'none', background: 'none', color: 'var(--fg-2)' }}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        <div id="top" className="site-content" style={{ ...container, paddingTop: '40px', paddingBottom: '40px' }}>
          <About />
          {sections.map(({ id, Component }) => (
            <div key={id} id={id} style={{ scrollMarginTop: '64px' }}>
              <Component />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
