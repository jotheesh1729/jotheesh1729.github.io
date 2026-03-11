import React from 'react';
import { Rocket, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Decentralized Coordination of Heterogeneous Swarm Robots',
    image: '/assets/images/project-swarm-robots.jpg',
    description: 'Designed a decentralized multi-robot framework for mixed UGV-UAV teams in confined spaces. Implemented collision-free navigation and dynamic goal assignment without centralized control using Graph Neural Networks.',
    technologies: ['Graph Neural Networks', 'ROS2', 'Unity3D', 'Multi-Agent Systems', 'Python'],
    dates: 'Feb - May 2025',
    github: '#'
  },
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/images/project-quadruped.jpg',
    description: 'Trained a PPO-based walking policy for Unitree Go2 quadruped in Isaac Lab with custom reward shaping. Implemented domain randomization and PD torque controller with gait phase tracking for stable trotting gaits.',
    technologies: ['Reinforcement Learning', 'PPO', 'Isaac Lab', 'Unitree Go2', 'Python', 'PyTorch'],
    dates: 'Sep - Dec 2024',
    github: '#'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/project-mppi-navigation.jpg',
    description: 'Developed autonomous navigation stack for Clearpath Warthog on Mars-like terrain. Combined slip-aware kinematics, Unscented Kalman Filter for GPS-free localization, and MPPI control for trajectory optimization.',
    technologies: ['MPPI', 'Isaac Sim', 'UKF', 'LiDAR', 'RTAB-Map SLAM', 'Blender', 'C++'],
    dates: 'Sep - Dec 2024',
    github: '#'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/project-vision-navigation.jpg',
    description: 'Built vision-only localization system using ResNet50 features and BallTree search achieving sub-2ms query time. Created topological graph enabling A* path planning through maze using only camera input.',
    technologies: ['Computer Vision', 'ResNet50', 'A* Planning', 'Python', 'OpenCV'],
    dates: 'Sep - Dec 2024',
    github: '#'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/project-wearable.jpg',
    description: 'Developed wearable device using vibrations for emergency alerts with interactive acknowledgment. Features ESP32 microcontroller, Adafruit IO integration, and 3D printed watch/neckband design for broad accessibility.',
    technologies: ['ESP32', 'Arduino', 'IoT', 'Adafruit IO', 'Fusion 360', '3D Printing', 'C++'],
    dates: 'March - June 2023',
    github: 'https://github.com/jotheesh1729'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6" style={{ backgroundColor: '#3a3a3a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Rocket size={20} style={{ color: '#d1d1d1' }} />
          <h2 className="text-2xl font-semibold" style={{ color: '#f5f5f5' }}>Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border transition-all duration-300 overflow-hidden"
              style={{ borderColor: '#555', backgroundColor: '#2a2a2a' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#777'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#555'}
            >
              {/* Project Image */}
              <div className="bg-gray-700 h-40 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xs font-medium" style="color: #888">Project Demo</div>';
                  }}
                />
              </div>

              {/* Project Details */}
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm font-semibold leading-tight" style={{ color: '#f5f5f5' }}>
                    {project.title}
                  </h3>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors ml-2 flex-shrink-0"
                      style={{ color: '#999' }}
                      onMouseEnter={(e) => e.target.style.color = '#d1d1d1'}
                      onMouseLeave={(e) => e.target.style.color = '#999'}
                      aria-label="View on GitHub"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                
                <p className="text-xs mb-2" style={{ color: '#999' }}>{project.dates}</p>
                
                <p className="text-xs mb-3 leading-relaxed" style={{ color: '#b8b8b8' }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs px-2 py-0.5"
                      style={{ 
                        borderColor: '#555',
                        color: '#b8b8b8',
                        backgroundColor: '#333'
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;