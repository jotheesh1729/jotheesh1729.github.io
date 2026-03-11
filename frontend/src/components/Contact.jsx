import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section style={{ 
      marginBottom: '40px',
      paddingTop: '24px',
      borderTop: '1px solid #555'
    }}>
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: '600',
        marginBottom: '16px',
        color: '#f5f5f5'
      }}>
        Contact
      </h2>

      <p style={{ fontSize: '14px', color: '#d1d1d1', marginBottom: '12px' }}>
        I'm currently seeking opportunities in robotics and embedded systems. 
        Feel free to reach out.
      </p>

      <div style={{ fontSize: '14px', color: '#d1d1d1', lineHeight: '1.8' }}>
        <p>
          <strong style={{ color: '#f5f5f5' }}>Email:</strong>{' '}
          <a href="mailto:jotheeshreddykummathi@gmail.com" style={{ color: '#6b9eff' }}>
            jotheeshreddykummathi@gmail.com
          </a>
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Github size={16} style={{ color: '#d1d1d1' }} />
          <strong style={{ color: '#f5f5f5' }}>GitHub:</strong>{' '}
          <a href="https://github.com/jotheesh1729" target="_blank" rel="noopener noreferrer" style={{ color: '#6b9eff' }}>
            github.com/jotheesh1729
          </a>
        </p>
        <p style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Linkedin size={16} style={{ color: '#d1d1d1' }} />
          <strong style={{ color: '#f5f5f5' }}>LinkedIn:</strong>{' '}
          <a href="https://linkedin.com/in/jotheesh1729" target="_blank" rel="noopener noreferrer" style={{ color: '#6b9eff' }}>
            linkedin.com/in/jotheesh1729
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;