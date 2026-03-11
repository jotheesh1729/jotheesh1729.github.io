import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Decentralized Coordination of Heterogeneous Swarm Robots',
    image: '/assets/images/project-swarm-robots.jpg',
    description: 'Designed a decentralized multi-robot framework for mixed UGV-UAV teams in confined spaces using Graph Neural Networks for collision-free navigation and dynamic goal assignment.',
    technologies: ['Graph Neural Networks', 'ROS2', 'Unity3D', 'Python'],
    dates: 'Feb - May 2025',
    link: '#'
  },
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/images/project-quadruped.jpg',
    description: 'Trained PPO-based walking policy for Unitree Go2 in Isaac Lab with domain randomization. Implemented PD torque controller with gait phase tracking for stable locomotion.',
    technologies: ['PPO', 'Isaac Lab', 'PyTorch', 'Python'],
    dates: 'Sep - Dec 2024',
    link: '#'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/project-mppi-navigation.jpg',
    description: 'Developed autonomous navigation for Clearpath Warthog on Martian terrain combining slip-aware kinematics, UKF localization, and MPPI trajectory optimization.',
    technologies: ['MPPI', 'Isaac Sim', 'UKF', 'LiDAR', 'C++'],
    dates: 'Sep - Dec 2024',
    link: '#'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/project-vision-navigation.jpg',
    description: 'Built vision-only localization using ResNet50 features and BallTree search (sub-2ms query). Created topological graph for A* path planning using camera input only.',
    technologies: ['ResNet50', 'A* Planning', 'OpenCV', 'Python'],
    dates: 'Sep - Dec 2024',
    link: '#'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/project-wearable.jpg',
    description: 'Developed IoT wearable device for emergency alerts with ESP32, Adafruit IO integration, and 3D printed design for accessibility.',
    technologies: ['ESP32', 'IoT', 'Fusion 360', 'C++'],
    dates: 'March - June 2023',
    link: 'https://github.com/jotheesh1729'
  }
];

const Projects = () => {
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
        Selected Projects
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              gap: '20px',
              padding: '16px',
              border: '1px solid #e5e5e5',
              borderRadius: '4px',
              backgroundColor: '#fafafa'
            }}
          >
            {/* Project Image */}
            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: '140px',
                height: '105px',
                backgroundColor: '#e5e5e5',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #999;">Demo</div>';
                  }}
                />
              </div>
            </div>

            {/* Project Details */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111', marginBottom: '4px' }}>
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#666' }}>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
              <p style={{ fontSize: '13px', color: '#888', marginBottom: '8px' }}>
                {project.dates}
              </p>
              
              <p style={{ fontSize: '14px', color: '#555', marginBottom: '10px', lineHeight: '1.5' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      padding: '2px 8px',
                      backgroundColor: '#fff',
                      border: '1px solid #d1d5db',
                      borderRadius: '3px',
                      color: '#555'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;