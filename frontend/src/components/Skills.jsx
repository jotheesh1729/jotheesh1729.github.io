import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Embedded C', 'Python', 'MATLAB', 'Bash/Shell']
  },
  {
    category: 'Embedded Systems & Firmware',
    skills: ['FreeRTOS', 'Mbed OS', 'Bare-Metal', 'Bootloaders', 'CMSIS-DSP', 'UART', 'SPI', 'I²C', 'CAN/CAN-FD', 'BLE', 'MIPI CSI-2', 'PWM', 'ADC/DAC', 'DMA', 'Timers']
  },
  {
    category: 'Hardware Platforms & Debug Tools',
    skills: ['STM32 (ARM Cortex-M)', 'ESP32', 'Pixhawk', 'NVIDIA Jetson Orin', 'Arduino', 'Raspberry Pi', 'JTAG/SWD', 'GDB', 'Oscilloscopes', 'Logic Analyzers']
  },
  {
    category: 'Robotics & Controls',
    skills: ['ROS2', 'PX4 Autopilot', 'MAVLink', 'Control (PID/MPC/MPPI)', 'State Estimation & Sensor Fusion', 'Kalman Filtering (EKF/UKF)', 'Motion Planning (A*)']
  },
  {
    category: 'Computer Vision & Machine Learning',
    skills: ['PyTorch', 'OpenCV', 'YOLOv8', 'TensorRT', 'GStreamer', 'SLAM (RTAB-Map)', 'Reinforcement Learning (PPO)', '3D Gaussian Splatting']
  },
  {
    category: 'Simulation & Dev Tools',
    skills: ['Isaac Sim/Lab', 'Gazebo', 'MuJoCo', 'Docker', 'Git', 'CI/CD']
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