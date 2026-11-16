import React from 'react';
import About from './About';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import OpenSource from './OpenSource';

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px'
      }}>
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
