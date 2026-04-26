import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const About = () => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <div style={{ display: 'flex', gap: '30px', alignItems: 'start', flexWrap: 'wrap' }}>
        {/* Profile Image */}
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/csheadshot.jpg`}
            alt="Jotheesh Reddy Kummathi"
            style={{
              width: '240px',
              height: '300px',
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
              I am an Embedded Systems & Robotics Engineer and Master's student at NYU specializing in controls, perception, and Real-Time Operating Systems (RTOS)—building across autonomous aerial drones, robotics platforms, and industrial IoT systems.
            </p>
            
            <p style={{ marginBottom: '12px' }}>
              I have developed and optimized production firmware for domestic and industrial IoT devices at Magnibot; integrated advanced perception compute and flight control systems at NYU's Agile Robotics and Perception Lab (ARPL); and serve as the Head Teaching Assistant for NYU's Real-Time Embedded Systems course—always optimizing for system reliability, energy efficiency, and real-world robustness.
            </p>
            
            <p>
 I am passionate about building systems that physically interact with the world and am actively looking for roles where the work is close to the metal.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href={`${process.env.PUBLIC_URL}/assets/resume.pdf`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '15px',
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
                fontSize: '15px',
                color: '#374151',
                textDecoration: 'none',
                backgroundColor: '#fff'
              }}
            >
              <FaGithub size={16} />
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/jotheesh-reddy-kummathi" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid #d1d5db',
                borderRadius: '4px',
                fontSize: '15px',
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
                fontSize: '15px',
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