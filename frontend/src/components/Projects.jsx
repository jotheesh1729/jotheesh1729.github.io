import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Decentralized Coordination of Heterogeneous Swarm Robots',
    image: '/assets/images/project-swarm-robots.jpg',
    dates: 'Feb - May 2025',
    points: [
      'Designed a decentralized multi-robot framework for mixed UGV-UAV teams in confined spaces',
      'Implemented collision-free navigation and dynamic goal assignment without centralized control',
      'Adapted Graph Neural Network architecture for scalable goal allocation using local observations',
      'Validated in ROS2-Unity3D simulation demonstrating resilience to agent failures and communication delays'
    ],
    technologies: ['Graph Neural Networks', 'ROS2', 'Unity3D', 'Python'],
    link: '#'
  },
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/images/project-quadruped.jpg',
    dates: 'Sep - Dec 2024',
    points: [
      'Trained PPO-based walking policy for Unitree Go2 quadruped in Isaac Lab',
      'Implemented custom reward shaping for foot placement and contact forces',
      'Achieved stable velocity tracking across flat and rough terrain',
      'Built PD torque controller with gait phase tracking and action smoothing for stable trotting'
    ],
    technologies: ['PPO', 'Isaac Lab', 'PyTorch', 'Python', 'Domain Randomization'],
    link: '#'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/project-mppi-navigation.jpg',
    dates: 'Sep - Dec 2024',
    points: [
      'Developed autonomous navigation stack for Clearpath Warthog on Mars-like terrain in Isaac Sim',
      'Combined slip-aware kinematics with Unscented Kalman Filter for GPS-free localization',
      'Implemented real-time MPPI controller with terrain-aware cost function',
      'Integrated 3D LiDAR and RTAB-Map SLAM for autonomous obstacle avoidance and mapping'
    ],
    technologies: ['MPPI', 'Isaac Sim', 'UKF', 'LiDAR', 'RTAB-Map', 'C++'],
    link: '#'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/project-vision-navigation.jpg',
    dates: 'Sep - Dec 2024',
    points: [
      'Built vision-only localization system using ResNet50 features and BallTree search',
      'Achieved sub-2ms query time matching live frames against reference images',
      'Created topological graph with sequential and loop-closure connections',
      'Enabled A* path planning through maze using only camera input with adaptive replanning'
    ],
    technologies: ['ResNet50', 'BallTree', 'A* Planning', 'OpenCV', 'Python'],
    link: '#'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/project-wearable.jpg',
    dates: 'March - June 2023',
    points: [
      'Developed wearable device using vibrations for emergency alerts with interactive acknowledgment',
      'Powered by Adafruit QT PY ESP32 microcontroller with Adafruit IO integration',
      'Designed watch and neckband in Fusion 360 and 3D printed for broad accessibility',
      'Focused on older adults, people with disabilities, and people with autism'
    ],
    technologies: ['ESP32', 'Arduino', 'IoT', 'Adafruit IO', 'Fusion 360', 'C++'],
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              gap: '24px',
              padding: '20px',
              border: '1px solid #e5e5e5',
              borderRadius: '4px',
              backgroundColor: '#fafafa'
            }}
          >
            {/* Project Image */}
            <div style={{ flexShrink: 0 }}>
              <div style={{
                width: '220px',
                height: '165px',
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
                    e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #999;">Project Demo</div>';
                  }}
                />
              </div>
            </div>

            {/* Project Details */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111' }}>
                  {project.title}
                </h3>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: '#666', marginLeft: '8px' }}>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
              
              <p style={{ fontSize: '13px', color: '#888', marginBottom: '10px' }}>
                {project.dates}
              </p>
              
              <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
                {project.points.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      padding: '3px 9px',
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