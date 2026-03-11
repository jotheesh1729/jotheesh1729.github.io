import React from 'react';

const Contact = () => {
  return (
    <section style={{ 
      marginBottom: '40px',
      paddingTop: '24px',
      borderTop: '1px solid #e5e5e5'
    }}>
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: '600',
        marginBottom: '16px',
        color: '#111'
      }}>
        Contact
      </h2>

      <p style={{ fontSize: '14px', color: '#555', marginBottom: '12px' }}>
        I'm currently seeking opportunities in robotics and embedded systems. 
        Feel free to reach out.
      </p>

      <div style={{ fontSize: '14px', color: '#555', lineHeight: '1.8' }}>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:jotheeshreddykummathi@gmail.com" style={{ color: '#2563eb' }}>
            jotheeshreddykummathi@gmail.com
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/jotheesh1729" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            github.com/jotheesh1729
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://linkedin.com/in/jotheesh1729" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb' }}>
            linkedin.com/in/jotheesh1729
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;