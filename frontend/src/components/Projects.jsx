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
    <section id="projects" className="py-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Rocket size={20} className="text-gray-600" />
          <h2 className="text-2xl font-semibold text-gray-700">Projects</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-gray-300 hover:border-gray-400 transition-all duration-300 overflow-hidden"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Project Image */}
                <div className="md:col-span-2 bg-gray-200 h-48 md:h-auto relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-xs font-medium">Project Demo</div>';
                    }}
                  />
                </div>

                {/* Project Details */}
                <CardContent className="md:col-span-3 p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-gray-700 leading-tight">
                      {project.title}
                    </h3>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 transition-colors ml-2 flex-shrink-0"
                        aria-label="View on GitHub"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-xs text-gray-500 mb-3">{project.dates}</p>
                  
                  <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-gray-300 text-gray-600 bg-white hover:bg-gray-100 text-xs px-2 py-0.5"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;