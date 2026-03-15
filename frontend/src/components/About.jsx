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
            src="/assets/images/profile-photo.JPG"
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
          
          <div style={{ fontSize: '13px', color: '#555', marginBottom: '16px', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '12px' }}>
              I'm a Master's student in Computer Engineering at New York University. 
              I came into engineering because I wanted to build things that physically interact with the world, not models that live in the cloud, but systems that move, sense, and respond to the messiness of reality. 
              I believe robotics should make humans more capable, not redundant. A robot that takes over a dangerous job, carries a heavier load, or navigates terrain a person can't, that's what interests me. 
              A robot that just replaces a worker doesn't.
            </p>
            
            <p style={{ marginBottom: '12px' }}>
              Before NYU I worked as an Embedded Engineer at Magnibot in Bengaluru, India, writing firmware for IoT and industrial devices. It was my first real taste of hardware that had to work. Not pass a test, not run clean in simulation, but actually work in the hands of someone depending on it. That experience shaped how I think about every system I've built since.
            </p>
            
            <p>
              I'm looking for roles in embedded systems and robotics where the work is close to hardware and the impact is on people doing real things in the real world.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a 
              href="/assets/resume.pdf" 
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