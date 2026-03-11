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
              width: '240px',
              height: '240px',
              borderRadius: '4px',
              objectFit: 'cover',
              border: '1px solid #e5e5e5'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="width: 240px; height: 240px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: 1px solid #e5e5e5; font-size: 56px; color: #999; font-weight: 600;">JRK</div>';
            }}
          />
        </div>

        {/* Text Content */}
        <div style={{ flex: 1, minWidth: '400px' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '600',
            marginBottom: '12px',
            color: '#111'
          }}>
            Jotheesh Reddy Kummathi
          </h1>
          
          <div style={{ fontSize: '15px', color: '#555', marginBottom: '16px', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '12px' }}>
              I'm a Master's student in Electrical Engineering at New York University, focusing on robotics, 
              embedded systems, and autonomous systems. My research interests lie at the intersection of 
              reinforcement learning, state estimation, and real-time control for robotic systems. I'm 
              passionate about building intelligent systems that can operate reliably in complex, 
              unstructured environments.
            </p>
            
            <p style={{ marginBottom: '12px' }}>
              Currently, I work as a Head Teaching Assistant for Real-Time Embedded Systems and as a 
              Graduate Research Assistant at the Agile Robotics and Perception Lab, where I'm involved 
              in drone development and autonomous systems research. This role allows me to bridge theoretical 
              concepts with practical implementations while mentoring students in embedded programming and 
              real-time system design.
            </p>
            
            <p>
              My experience spans quadruped locomotion using deep reinforcement learning, multi-agent 
              coordination with graph neural networks, embedded IoT systems, and hardware-software integration 
              for industrial applications. I'm particularly interested in developing intelligent control systems 
              that bridge the gap between simulation and real-world deployment, with a focus on robust 
              performance under uncertainty and computational constraints.
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
                textDecoration: 'none',
                backgroundColor: '#fff'
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
                textDecoration: 'none',
                backgroundColor: '#fff'
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
                textDecoration: 'none',
                backgroundColor: '#fff'
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