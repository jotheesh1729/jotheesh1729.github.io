import React from 'react';

const skillCategories = [
  {
    category: 'Programming',
    skills: ['C', 'C++', 'Embedded C', 'Bare-Metal', 'Python', 'MATLAB', 'Shell']
  },
  {
    category: 'Robotics & Autonomy',
    skills: ['ROS2', 'PX4 Autopilot', 'MAVLink', 'State Estimation', 'Sensor Fusion', 'PID/MPC/MPPI', 'Kalman Filtering']
  },
  {
    category: 'Embedded Systems',
    skills: ['FreeRTOS', 'Yocto', 'Bootloaders', 'UART', 'SPI', 'I²C', 'CAN/CANopen', 'PWM', 'ADC/DAC', 'MQTT']
  },
  {
    category: 'Hardware Platforms',
    skills: ['STM32 (ARM Cortex-M)', 'TI MSP430', 'ESP32', 'Arduino', 'Raspberry Pi', 'NVIDIA Jetson Orin', 'Pixhawk']
  },
  {
    category: 'Simulation & Tools',
    skills: ['Isaac Sim', 'Gazebo', 'MuJoCo', 'MATLAB/Simulink', 'Docker', 'Git', 'STM32CubeIDE', 'Fusion 360']
  },
  {
    category: 'ML & Perception',
    skills: ['PyTorch', 'OpenCV', 'SciPy', 'FFT', 'Time-Series Analysis', 'SLAM (RTAB-Map)']
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
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#111', marginBottom: '8px' }}>
              {category.category}
            </h3>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
              {category.skills.join(' • ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;