import React from 'react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University',
    dates: 'January 2025 - Present',
    showGithub: false,
    points: [
      'Working under induatry associacte professor Matthew Campisi, PhD Leading recitation sessions, grading, and office hours for ECE-GY 6483: Real-Time Embedded Systems',
      'Support over 200 graduate students every semester on hardware-software integration and real-time system concepts',
      'Provide hands-on guidance for embedded programming and real-time operating systems (RTOS) implementations'
    ]
  },
  {
    role: 'Graduate Engineering Assistant',
    organization: 'Agile Robotics And Perception Lab - NYU',
    dates: 'January 2025 - Present',
    showGithub: false,
    points: [
      'Assist in assembling drones equipped with PX4 Pro flight controllers and NVIDIA Jetson Orin compute boards',
      'Perform firmware tweaking and flashing, sensor calibration, thrust bench testing and system integration for experimental robotics platforms',
      'Support ongoing research experiments in autonomous aerial robotics and perception systems'
    ]
  },
  {
    role: 'Embedded Engineer',
    organization: 'Magnibot Technology Solutions Pvt Ltd',
    dates: 'July 2023 - July 2024',
    showGithub: false,
    points: [
      'Developed and optimized software for embedded devices and IoT products targeting domestic and industrial applications',
      'Designed, debugged, and integrated embedded solutions using C/C++, Python, and RTOS',
      'Enhanced device functionality and energy efficiency through firmware optimization and robust hardware-software integration'
    ]
  }
];

const Experience = () => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: '600',
        marginBottom: '24px',
        color: '#111',
        borderBottom: '1px solid #e5e5e5',
        paddingBottom: '8px'
      }}>
        Experience
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>
                  {exp.role}
                </h3>
                {exp.showGithub && exp.githubLink && (
                  <a 
                    href={exp.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      color: '#555'
                    }}
                    title="View on GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
              </div>
              <span style={{ fontSize: '15px', color: '#888', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                {exp.dates}
              </span>
            </div>
            <p style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>
              {exp.organization}
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {exp.points.map((point, idx) => (
                <li key={idx} style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;