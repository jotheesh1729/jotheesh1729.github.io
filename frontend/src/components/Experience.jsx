import React from 'react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University – New York, NY',
    dates: 'January 2025 – May 2026',
    showGithub: false,
    points: [
      'Run weekly recitations, hold office hours, and grade for ECE-GY 6483: Real-Time Embedded Systems under Prof. Matthew Campisi — supporting 200+ graduate students per semester.',
      'Guide students through Mbed RTOS fundamentals: thread lifecycle, mutex vs. semaphore, priority inversion, and EventQueue patterns for interrupt-deferred work.',
      'Cover harder topics including Rate Monotonic schedulability analysis, deadline monotonic scheduling, watchdog timers, MPU configuration, and identifying race conditions in multi-threaded embedded code.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    organization: 'Agile Robotics and Perception Lab (ARPL) – NYU / UC Berkeley',
    dates: 'January 2025 – Present',
    showGithub: false,
    points: [
      'Build and maintain research drones with PX4, Jetson Orin, and Connect Tech carrier boards — including firmware flashing, ESC debugging, and PID tuning to resolve in-flight oscillations.',
      'Run thrust-bench characterization for motor and propeller validation across multiple drone configurations.',
      'Currently working on extracting spatial uncertainty and scene geometry from 3D Gaussian Splatting representations to enable uncertainty-aware robot navigation.'
    ]
  },
  {
    role: 'Embedded Engineer',
    organization: 'Magnibot Technology Solutions Pvt. Ltd. – Bengaluru, India',
    dates: 'July 2023 – July 2024',
    showGithub: false,
    points: [
      'Wrote and optimized production firmware in C/C++ with FreeRTOS for IoT devices targeting domestic and industrial applications.',
      'Brought up and debugged hardware across UART, SPI, I²C, and CAN interfaces — resolved integration failures that were impacting production reliability.',
      'Owned the full embedded cycle from schematic review and firmware development to field validation and iterative optimization.'
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