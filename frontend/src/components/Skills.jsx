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
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Wrench size={32} className="text-gray-900" />
          <h2 className="text-4xl font-bold text-gray-900">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white transition-colors border border-gray-300"
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