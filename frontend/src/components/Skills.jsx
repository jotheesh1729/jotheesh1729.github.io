import React from 'react';
import { Wrench } from 'lucide-react';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    category: 'Programming',
    skills: ['Python', 'C', 'C++', 'Embedded-C', 'Bare-Metal Programming', 'MATLAB', 'Shell', 'LaTeX']
  },
  {
    category: 'Robotics & Control',
    skills: ['State Estimation', 'PID Control', 'MPC', 'MPPI', 'Kalman Filtering', 'Sensor Fusion']
  },
  {
    category: 'Machine Learning & AI',
    skills: ['PyTorch', 'Reinforcement Learning', 'Computer Vision', 'Deep Learning', 'Neural Networks']
  },
  {
    category: 'Frameworks & Tools',
    skills: ['ROS2', 'PX4 Autopilot', 'FreeRTOS', 'Yocto', 'Docker', 'Git']
  },
  {
    category: 'Embedded Systems',
    skills: ['STM32 (ARM Cortex-M)', 'ESP32', 'Raspberry Pi', 'NVIDIA Jetson', 'Pixhawk', 'Real-Time Systems']
  },
  {
    category: 'Hardware',
    skills: ['DC Motors', 'BLDC Motors', 'Stepper Motors', 'Motor Drivers', 'IMUs', 'Encoders', 'LiDAR', 'ToF Sensors']
  },
  {
    category: 'Protocols',
    skills: ['CANopen', 'UART', 'SPI', 'I2C', 'PWM', 'ADC/DAC', 'MQTT', 'MAVLink']
  },
  {
    category: 'Simulation',
    skills: ['Isaac Simulator', 'Gazebo', 'MuJoCo', 'MATLAB/Simulink', 'Unity3D', 'Blender']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 px-6" style={{ backgroundColor: '#3a3a3a' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Wrench size={20} style={{ color: '#d1d1d1' }} />
          <h2 className="text-2xl font-semibold" style={{ color: '#f5f5f5' }}>Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="border rounded-md p-4"
              style={{ borderColor: '#555', backgroundColor: '#2a2a2a' }}
            >
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#f5f5f5' }}>{category.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="transition-colors border text-xs px-2 py-0.5"
                    style={{ 
                      backgroundColor: '#333',
                      color: '#b8b8b8',
                      borderColor: '#555'
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;