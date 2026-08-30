import React from 'react';
import { FaGithub } from 'react-icons/fa';

const experiences = [
  {
    role: 'AI Vision Systems Intern',
    organization: 'The Nail Lab, Inc.',
    dates: 'July 2026 - September 2026',
    showGithub: false,
    points: [
      'Built embedded vision firmware for an NVIDIA Jetson Orin Nano running Linux, handling real-time object detection, segmentation, and tracking directly on the device in C++ and Python.',
      'Set up a GStreamer pipeline that captures from two synchronized camera sensors with hardware-accelerated encoding, keeping the overlapping views aligned frame to frame.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    organization: 'Agile Robotics and Perception Lab (ARPL) - New York University',
    dates: 'January 2025 - June 2026',
    showGithub: false,
    points: [
      'Deployed and calibrated a multi-modal sensor suite — LiDAR, depth cameras, and precision GPS — for state estimation in GPS-denied environments, and contributed to research on 3D Gaussian Splatting for perception.',
      'Brought up PX4 flight stacks on Jetson Orin companion computers and tracked down flight-controller and ESC faults that only surfaced on real hardware, building automated test pipelines with telemetry logging along the way.',
      'Served as safety pilot for UAV flight tests, and operated a Clearpath UGV and a Boston Dynamics Spot during field experiments.'
    ]
  },
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University - ECE-GY 6483: Real-Time Embedded Systems',
    dates: 'January 2025 - May 2026',
    showGithub: false,
    points: [
      'Led recitations, grading, and office hours under industry associate professor Matthew Campisi, PhD.',
      'Supported more than 700 graduate students across three semesters on C, Embedded C, Mbed OS, RTOS scheduling, and real-time DSP.',
      'Graded labs on ARM Cortex-M peripherals and interrupts, and gave hands-on guidance for embedded programming and RTOS implementations.'
    ]
  },
  {
    role: 'Junior Embedded Engineer',
    organization: 'Magnibot Technology Solutions Pvt Ltd',
    dates: 'July 2023 - July 2024',
    showGithub: false,
    points: [
      'Developed and optimized firmware in C/C++ on FreeRTOS for IoT and embedded products used in domestic and industrial deployments.',
      'Designed, debugged, and integrated embedded solutions across UART, SPI, I2C, and CAN, and maintained the CI/CD pipeline that automated build validation and regression testing.'
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