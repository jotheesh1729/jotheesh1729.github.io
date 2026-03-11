import React from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University',
    location: 'New York City, NY',
    dates: 'Jan 2025 - Present',
    descriptions: [
      'Assisting in the Real-Time Embedded Systems course by grading assignments, providing feedback, and leading recitation sessions',
      'Conducting office hours and discussion sessions to support student learning, focusing on hardware-software integration',
      'Supporting real-time system concepts and embedded programming best practices'
    ]
  },
  {
    role: 'Graduate Engineering Assistant',
    organization: 'Agile Robotics And Perception Lab, NYU',
    location: 'New York City, NY',
    dates: 'Jan 2025 - Present',
    descriptions: [
      'Assembled and configured drones working with PX4 Pro autopilot and NVIDIA Jetson Orin board',
      'Performed firmware flashing, sensor calibration, and system integration for experimental platforms',
      'Supported research experiments in autonomous aerial robotics and perception systems'
    ]
  },
  {
    role: 'Embedded Engineer',
    organization: 'Magnibot Technology Solutions Pvt Ltd',
    location: 'Bengaluru, India',
    dates: 'July 2023 - July 2024',
    descriptions: [
      'Developed and optimized embedded software for IoT products targeting domestic and industrial applications',
      'Designed, debugged, and integrated embedded solutions using C/C++, Python, and RTOS',
      'Enhanced device functionality and performance through firmware optimization and hardware-software integration'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 px-6" style={{ backgroundColor: '#333333' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase size={20} style={{ color: '#d1d1d1' }} />
          <h2 className="text-2xl font-semibold" style={{ color: '#f5f5f5' }}>Experience</h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 pl-6 transition-colors"
              style={{ borderColor: '#666' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#888'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#666'}
            >
              <h3 className="text-lg font-semibold mb-1" style={{ color: '#f5f5f5' }}>{exp.role}</h3>
              <p className="text-sm font-medium mb-1" style={{ color: '#d1d1d1' }}>{exp.organization}</p>
              <p className="text-xs mb-3" style={{ color: '#999' }}>
                {exp.location} • {exp.dates}
              </p>
              <ul className="space-y-1.5">
                {exp.descriptions.map((desc, idx) => (
                  <li key={idx} className="text-xs flex items-start" style={{ color: '#b8b8b8' }}>
                    <span className="mr-2 mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#888' }} />
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;