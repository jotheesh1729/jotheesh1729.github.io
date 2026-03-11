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
    <section id="skills" className="py-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Wrench size={20} className="text-gray-600" />
          <h2 className="text-2xl font-semibold text-gray-700">Skills</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white border border-gray-300 rounded-md p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors border border-gray-300 text-xs px-2 py-0.5"
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