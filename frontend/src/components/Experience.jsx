import React from 'react';
import { Github } from 'lucide-react';

const experiences = [
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University',
    dates: 'Jan 2025 - Present',
    githubLink: '#',
    showGithub: true,
    points: [
      'Assisting in the Real-Time Embedded Systems course by grading assignments, providing feedback, and leading recitation sessions',
      'Conducting office hours and discussion sessions to support student learning, focusing on hardware-software integration',
      'Supporting real-time system concepts and embedded programming best practices'
    ]
  },
  {
    role: 'Graduate Engineering Assistant',
    organization: 'Agile Robotics And Perception Lab, NYU',
    dates: 'Jan 2025 - Present',
    showGithub: false,
    points: [
      'Assembled and configured drones working with PX4 Pro autopilot and NVIDIA Jetson Orin board',
      'Performed firmware flashing, sensor calibration, and system integration for experimental platforms',
      'Supported research experiments in autonomous aerial robotics and perception systems'
    ]
  },
  {
    role: 'Embedded Engineer',
    organization: 'Magnibot Technology Solutions',
    dates: 'July 2023 - July 2024',
    showGithub: false,
    points: [
      'Developed and optimized embedded software for IoT products targeting domestic and industrial applications',
      'Designed, debugged, and integrated embedded solutions using C/C++, Python, and RTOS',
      'Enhanced device functionality and performance through firmware optimization and hardware-software integration'
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
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: '#fff',
                      border: '1px solid #d1d5db',
                      textDecoration: 'none'
                    }}
                    title="View on GitHub"
                  >
                    <Github size={14} style={{ color: '#111' }} />
                  </a>
                )}
              </div>
              <span style={{ fontSize: '13px', color: '#888', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                {exp.dates}
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              {exp.organization}
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {exp.points.map((point, idx) => (
                <li key={idx} style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
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