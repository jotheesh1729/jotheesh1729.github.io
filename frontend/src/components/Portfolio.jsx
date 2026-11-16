import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import OpenSource from './OpenSource';

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
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
        <button
          onClick={toggleTheme}
          aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
          title={dark ? 'Light theme' : 'Dark theme'}
          style={{
            position: 'fixed', top: '14px', right: '14px', zIndex: 10,
            display: 'flex', padding: '8px', borderRadius: '50%', cursor: 'pointer',
            border: '1px solid var(--border-2)', backgroundColor: 'var(--surface)', color: 'var(--fg-btn)'
          }}
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <OpenSource />
      </div>
    </div>
  );
};

export default Portfolio;
