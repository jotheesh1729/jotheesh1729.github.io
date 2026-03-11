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
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase size={32} className="text-gray-900" />
          <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-gray-900 pl-8 hover:border-gray-600 transition-colors"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.role}</h3>
              <p className="text-lg text-gray-700 font-medium mb-1">{exp.organization}</p>
              <p className="text-sm text-gray-500 mb-4">
                {exp.location} • {exp.dates}
              </p>
              <ul className="space-y-2">
                {exp.descriptions.map((desc, idx) => (
                  <li key={idx} className="text-gray-600 flex items-start">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
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