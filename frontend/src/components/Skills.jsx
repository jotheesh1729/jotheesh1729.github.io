import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Rust', 'Embedded C', 'Python', 'MATLAB', 'Bash/Shell']
  },
  {
    category: 'RTOS & Firmware',
    skills: ['FreeRTOS', 'Zephyr RTOS', 'Bare-Metal', 'Embassy (Rust)', 'MCUboot/OTA-DFU', 'CMSIS-DSP', 'DMA']
  },
  {
    category: 'Embedded Linux',
    skills: ['L4T BSP', 'Yocto', 'U-Boot', 'Devicetree/Kconfig', 'Kernel Drivers', 'GStreamer']
  },
  {
    category: 'MCUs & Platforms',
    skills: ['STM32', 'ARM Cortex-M4/M7/M55', 'Nordic nRF52', 'ESP32', 'Pixhawk', 'NVIDIA Jetson Orin']
  },
  {
    category: 'Communication Protocols',
    skills: ['UART', 'SPI', 'I²C', 'CAN/CAN-FD', 'USB', 'BLE (GATT)', 'MQTT', 'MAVLink', 'MIPI CSI-2', 'TCP/IP']
  },
  {
    category: 'Robotics & Controls',
    skills: ['ROS 2/DDS', 'Nav2', 'PX4 Autopilot', 'uORB', 'uXRCE-DDS', 'Control (PID, LQR, MPC, MPPI)', 'Motion Planning (A*, RRT)']
  },
  {
    category: 'Perception & Estimation',
    skills: ['SLAM (RTAB-Map)', 'Visual-Inertial Odometry', 'Kalman Filtering (EKF/UKF)', 'Sensor Fusion', 'LiDAR', 'GNSS/RTK', 'OpenCV', 'PCL', '3D Gaussian Splatting']
  },
  {
    category: 'Machine Learning & Edge AI',
    skills: ['PyTorch', 'TensorFlow', 'JAX', 'Reinforcement Learning (PPO)', 'Vision-Language Models', 'YOLOv8/YOLO-World', 'Graph Neural Networks', 'ONNX Runtime', 'TensorRT', 'CUDA']
  },
  {
    category: 'Simulation & Testing',
    skills: ['Isaac Sim/Lab', 'Gazebo', 'MuJoCo', 'HIL/SIL Testing']
  },
  {
    category: 'Debug & Dev Tools',
    skills: ['JTAG/SWD', 'GDB', 'Oscilloscopes', 'Logic Analyzers', 'CMake', 'Git', 'CI/CD', 'Docker', 'Linux']
  },
  {
    category: 'Hardware Design',
    skills: ['KiCad (multi-layer PCB)', 'Fusion 360', '3D Printing']
  }
];

const Skills = () => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: '600',
        marginBottom: '24px',
        color: 'var(--fg-strong)',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '8px'
      }}>
        Skills
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--fg-strong)', marginBottom: '8px' }}>
              {category.category}
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: '1.6' }}>
              {category.skills.join(' • ')}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;