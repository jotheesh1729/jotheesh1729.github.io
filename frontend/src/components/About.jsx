import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const About = () => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'start', flexWrap: 'wrap' }}>
        {/* Profile Image */}
        <div>
          <img
            src="/assets/images/profile-photo.jpg"
            alt="Jotheesh Reddy Kummathi"
            style={{
              width: '180px',
              height: '180px',
              borderRadius: '4px',
              objectFit: 'cover',
              border: '1px solid #e5e5e5'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="width: 180px; height: 180px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: 1px solid #e5e5e5; font-size: 48px; color: #999; font-weight: 600;">JRK</div>';
            }}
          />
        </div>

        {/* Text Content */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '600',
            marginBottom: '8px',
            color: '#111'
          }}>
            Jotheesh Reddy Kummathi
          </h1>
          
          <p style={{ 
            fontSize: '16px',
            color: '#666',
            marginBottom: '16px'
          }}>
            Master's student in Electrical Engineering at New York University. 
            I work on robotics, embedded systems, and autonomous systems with focus on 
            reinforcement learning, state estimation, and real-time control. Currently a 
            Teaching Assistant for Real-Time Embedded Systems and Research Assistant at 
            the Agile Robotics and Perception Lab.
          </p>

          {/* Links */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a 
              href="/assets/documents/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#374151',
                textDecoration: 'none',
                backgroundColor: '#fff'
              }}
            >
              <FileText size={16} />
              Resume
            </a>
            <a 
              href="https://github.com/jotheesh1729" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#374151',
                textDecoration: 'none'
              }}
            >
              <Github size={16} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/jotheesh1729" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#374151',
                textDecoration: 'none'
              }}
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a 
              href="mailto:jotheeshreddykummathi@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#374151',
                textDecoration: 'none'
              }}
            >
              <Mail size={16} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;