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
              Robotics and Embedded Systems Engineer, M.S. Computer Engineering from NYU (May 2026). I work across the full stack — from bare-metal firmware and RTOS to state estimation, control algorithms, and sim-to-real reinforcement learning.
            </p>

            <p style={{ marginBottom: '12px' }}>
              At NYU's Agile Robotics and Perception Lab (ARPL), I build and fly research drones and am currently working on extracting uncertainty information from 3D Gaussian Splatting representations for robot navigation. Before that, I wrote production firmware for IoT devices at Magnibot and served as Head TA for NYU's Real-Time Embedded Systems course.
            </p>

            <p>
              I'm looking for roles where the work stays close to hardware — autonomous systems, embedded software, or anything that needs to run reliably in the real world.
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