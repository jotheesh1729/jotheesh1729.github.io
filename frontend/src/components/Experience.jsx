import React from 'react';

const experiences = [
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University',
    dates: 'Jan 2025 - Present',
    description: 'Real-Time Embedded Systems course. Grading, recitation sessions, office hours focusing on hardware-software integration and real-time concepts.'
  },
  {
    role: 'Graduate Engineering Assistant',
    organization: 'Agile Robotics And Perception Lab, NYU',
    dates: 'Jan 2025 - Present',
    description: 'Drone assembly with PX4 Pro and NVIDIA Jetson Orin. Firmware flashing, calibration, and supporting autonomous robotics experiments.'
  },
  {
    role: 'Embedded Engineer',
    organization: 'Magnibot Technology Solutions',
    dates: 'July 2023 - July 2024',
    description: 'Developed embedded software for IoT products using C/C++, Python, and RTOS. Hardware-software integration for industrial applications.'
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>
                {exp.role}
              </h3>
              <span style={{ fontSize: '13px', color: '#888', whiteSpace: 'nowrap' }}>
                {exp.dates}
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '6px' }}>
              {exp.organization}
            </p>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.5' }}>
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;