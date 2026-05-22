import React from 'react';

const skillCategories = [
  {
    category: 'Programming',
    skills: ['C', 'C++', 'Embedded C', 'Python', 'MATLAB', 'Shell']
  },
  {
    category: 'Robotics, Autonomy & Control',
    skills: ['ROS 2', 'PX4 Autopilot', 'MAVLink', 'MPPI', 'MPC', 'PID', 'Deep RL (PPO)', 'EKF / UKF', 'MSEKF', 'OpenVINS', 'SLAM (RTAB-Map)', 'Sensor Fusion', 'Visual Servoing', 'Motion Planning']
  },
  {
    category: 'Embedded Systems',
    skills: ['FreeRTOS', 'Zephyr RTOS', 'UART', 'SPI', 'I²C', 'CAN / CANopen', 'PWM', 'ADC / DAC', 'STM32 (ARM Cortex-M)', 'NVIDIA Jetson Orin', 'Pixhawk', 'ESP32', 'Yocto', 'Bootloaders']
  },
  {
    category: 'Simulation & Tools',
    skills: ['NVIDIA Isaac Sim', 'Isaac Lab', 'Gazebo', 'MuJoCo', 'MATLAB / Simulink', 'Foxglove Studio', 'PyTorch', 'OpenCV', 'Docker', 'Git', 'STM32CubeIDE', 'KiCAD', 'Fusion 360']
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