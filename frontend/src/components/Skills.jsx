import React from 'react';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['C', 'C++', 'Rust', 'Embedded C', 'Python', 'MATLAB', 'Bash/Shell']
  },
  {
    category: 'Embedded Systems & Firmware',
    skills: ['FreeRTOS', 'Zephyr RTOS', 'Bare-Metal', 'Embassy (Rust)', 'MCUboot/OTA-DFU', 'Embedded Linux (L4T, Yocto)', 'Devicetree/Kconfig', 'CMSIS-DSP', 'UART', 'SPI', 'I²C', 'CAN/CAN-FD', 'BLE (GATT)', 'USB', 'MIPI CSI-2', 'MQTT', 'DMA']
  },
  {
    category: 'Hardware Platforms & Debug Tools',
    skills: ['STM32 (ARM Cortex-M4/M7/M55)', 'Nordic nRF52', 'ESP32', 'Pixhawk', 'NVIDIA Jetson Orin', 'JTAG/SWD', 'GDB', 'Oscilloscopes', 'Logic Analyzers', 'KiCad (multi-layer PCB)', 'Fusion 360']
  },
  {
    category: 'Robotics & Controls',
    skills: ['ROS 2/DDS', 'Nav2', 'PX4 Autopilot', 'uORB', 'MAVLink', 'uXRCE-DDS', 'Control (PID, LQR, MPC, MPPI)', 'Motion Planning (A*, RRT)', 'HIL/SIL Testing']
  },
  {
    category: 'Perception & Estimation',
    skills: ['SLAM (RTAB-Map)', 'Visual-Inertial Odometry', 'Kalman Filtering (EKF/UKF)', 'Sensor Fusion', 'LiDAR', 'GNSS/RTK', 'OpenCV', 'PCL', '3D Gaussian Splatting', 'GStreamer']
  },
  {
    category: 'Machine Learning & Edge AI',
    skills: ['PyTorch', 'TensorFlow', 'JAX', 'Reinforcement Learning (PPO)', 'Vision-Language Models', 'YOLOv8/YOLO-World', 'Graph Neural Networks', 'ONNX Runtime', 'TensorRT', 'CUDA']
  },
  {
    category: 'Simulation & Dev Tools',
    skills: ['Isaac Sim/Lab', 'Gazebo', 'MuJoCo', 'Docker', 'CMake', 'Git', 'CI/CD', 'Linux']
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