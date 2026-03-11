import React from 'react';

const skillCategories = [
  {
    category: 'Programming',
    skills: ['Python', 'C/C++', 'Embedded-C', 'MATLAB', 'Shell']
  },
  {
    category: 'Robotics',
    skills: ['ROS2', 'PX4', 'State Estimation', 'Control (PID, MPC, MPPI)', 'Sensor Fusion']
  },
  {
    category: 'Machine Learning',
    skills: ['PyTorch', 'Reinforcement Learning', 'Computer Vision', 'Neural Networks']
  },
  {
    category: 'Embedded Systems',
    skills: ['STM32', 'ESP32', 'Raspberry Pi', 'FreeRTOS', 'Real-Time Systems']
  },
  {
    category: 'Tools & Simulation',
    skills: ['Isaac Sim', 'Gazebo', 'MuJoCo', 'Docker', 'Git']
  }
];

const Skills = () => {
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
        Skills
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
              {category.category}
            </h3>
            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
              {category.skills.join(' • ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;