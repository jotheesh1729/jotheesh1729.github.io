import React from 'react';
import About from './About';
import Projects from './Projects';
import Publications from './Publications';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

const Portfolio = () => {
  return (
    <div style={{ backgroundColor: '#333333', minHeight: '100vh' }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto',
        padding: '40px 10px'
      }}>
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;