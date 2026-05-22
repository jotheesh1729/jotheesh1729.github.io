import React from 'react';

const skillCategories = [
  {
    category: 'Programming',
    skills: ['C', 'C++', 'Embedded C', 'Bare-Metal', 'Python', 'MATLAB', 'Shell']
  },
  {
    category: 'State Estimation & Perception',
    skills: ['MSEKF', 'EKF / UKF', 'OpenVINS', 'Visual-Inertial Odometry', 'LiDAR-Inertial Odometry', 'SLAM (RTAB-Map)', 'Sensor Fusion', '3D Gaussian Splatting']
  },
  {
    category: 'Autonomy & Control',
    skills: ['MPPI', 'MPC', 'Cascade PID', 'Deep RL (PPO)', 'Olfati-Saber Flocking', 'Visual Servoing', 'Motion Planning (A*, Topological)']
  },
  {
    category: 'Robotics Stack & Middleware',
    skills: ['ROS 2', 'PX4 Autopilot', 'MAVLink', 'Foxglove Studio', 'Boston Dynamics Spot SDK', 'Mbed RTOS', 'FreeRTOS', 'Zephyr RTOS']
  },
  {
    category: 'Embedded Systems',
    skills: ['UART', 'SPI', 'I²C', 'CAN / CANopen', 'PWM', 'ADC / DAC', 'MQTT', 'Yocto', 'Bootloaders', 'STM32 (ARM Cortex-M)', 'NVIDIA Jetson Orin', 'Pixhawk', 'ESP32']
  },
  {
    category: 'Simulation & Dev Tools',
    skills: ['NVIDIA Isaac Sim', 'Isaac Lab', 'Gazebo', 'MuJoCo', 'MATLAB / Simulink', 'PyTorch', 'OpenCV', 'STM32CubeIDE', 'KiCAD', 'Fusion 360', 'Docker', 'Git']
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