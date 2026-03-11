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
              border: '1px solid #555'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="width: 180px; height: 180px; background: #444; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: 1px solid #555; font-size: 48px; color: #888; font-weight: 600;">JRK</div>';
            }}
          />
        </div>

        {/* Text Content */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '600',
            marginBottom: '12px',
            color: '#f5f5f5'
          }}>
            Jotheesh Reddy Kummathi
          </h1>
          
          <div style={{ fontSize: '15px', color: '#d1d1d1', marginBottom: '16px', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '12px' }}>
              I'm a Master's student in Electrical Engineering at New York University, focusing on robotics, 
              embedded systems, and autonomous systems. My research interests lie at the intersection of 
              reinforcement learning, state estimation, and real-time control for robotic systems.
            </p>
            
            <p style={{ marginBottom: '12px' }}>
              Currently, I work as a Head Teaching Assistant for Real-Time Embedded Systems and as a 
              Graduate Research Assistant at the Agile Robotics and Perception Lab, where I'm involved 
              in drone development and autonomous systems research.
            </p>
            
            <p>
              My experience spans quadruped locomotion, multi-agent coordination, embedded IoT systems, 
              and hardware-software integration for industrial applications. I'm particularly interested 
              in developing intelligent control systems that bridge the gap between simulation and 
              real-world deployment.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href="/assets/documents/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #555',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#d1d1d1',
                textDecoration: 'none',
                backgroundColor: '#3a3a3a'
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
                border: '1px solid #555',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#d1d1d1',
                textDecoration: 'none',
                backgroundColor: '#3a3a3a'
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
                border: '1px solid #555',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#d1d1d1',
                textDecoration: 'none',
                backgroundColor: '#3a3a3a'
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
                border: '1px solid #555',
                borderRadius: '4px',
                fontSize: '14px',
                color: '#d1d1d1',
                textDecoration: 'none',
                backgroundColor: '#3a3a3a'
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