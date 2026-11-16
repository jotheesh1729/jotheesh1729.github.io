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
              border: '1px solid var(--border)'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div style="width: 240px; height: 240px; background: #f5f5f5; display: flex; align-items: center; justify-content: center; border-radius: 4px; border: 1px solid #e5e5e5; font-size: 56px; color: #999; font-weight: 600;">JRK</div>';
            }}
          />
        </div>

        {/* Text Content */}
        <div style={{ flex: 1, minWidth: 'min(400px, 100%)' }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: '600',
            marginBottom: '12px',
            color: 'var(--fg-strong)'
          }}>
            Jotheesh Reddy Kummathi
          </h1>
          
          <div style={{ fontSize: '15px', color: 'var(--fg)', marginBottom: '16px', lineHeight: '1.7' }}>
            <p style={{ marginBottom: '12px' }}>
              I'm an embedded and robotics software engineer with an M.S. in Computer Engineering from NYU. I work across the whole stack that makes a robot move: RTOS and bare-metal firmware on ARM Cortex-M, PX4 flight software, embedded Linux on NVIDIA Jetson, and ROS 2 perception, state estimation, and control on drones, ground robots, and quadrupeds.
            </p>

            <p style={{ marginBottom: '12px' }}>
              I'm currently an AI Vision Systems Engineer at The Nail Lab, building hardware-accelerated camera pipelines on Jetson Orin and device-management services in Rust. Before that, I integrated onboard compute, sensors, and PX4 flight controllers at NYU's Agile Robotics and Perception Lab (ARPL), served as Head Teaching Assistant for NYU's Real-Time Embedded Systems course, and shipped FreeRTOS and bare-metal firmware for BLE environmental-monitoring devices at Magnibot.
            </p>
            
            <p>
              I like systems that physically interact with the world, and I'm looking for roles in firmware, flight software, or robot autonomy where the code runs on real hardware.
            </p>
          </div>

          {/* Links */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a
              href={`${process.env.PUBLIC_URL}/assets/documents/resume-embedded.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid var(--border-2)',
                borderRadius: '4px',
                fontSize: '15px',
                color: 'var(--fg-btn)',
                textDecoration: 'none',
                backgroundColor: 'var(--surface)'
              }}
            >
              <FileText size={16} />
              Resume (Embedded)
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/assets/documents/resume-robotics.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                border: '1px solid var(--border-2)',
                borderRadius: '4px',
                fontSize: '15px',
                color: 'var(--fg-btn)',
                textDecoration: 'none',
                backgroundColor: 'var(--surface)'
              }}
            >
              <FileText size={16} />
              Resume (Robotics)
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
                border: '1px solid var(--border-2)',
                borderRadius: '4px',
                fontSize: '15px',
                color: 'var(--fg-btn)',
                textDecoration: 'none',
                backgroundColor: 'var(--surface)'
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
                border: '1px solid var(--border-2)',
                borderRadius: '4px',
                fontSize: '15px',
                color: 'var(--fg-btn)',
                textDecoration: 'none',
                backgroundColor: 'var(--surface)'
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
                border: '1px solid var(--border-2)',
                borderRadius: '4px',
                fontSize: '15px',
                color: 'var(--fg-btn)',
                textDecoration: 'none',
                backgroundColor: 'var(--surface)'
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