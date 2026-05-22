import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Reinforcement Learning for Quadruped Locomotion – Unitree Go2',
    image: '/assets/videos/unitree.MOV',
    dates: 'Sep – Dec 2025',
    points: [
      'Trained a PPO walking policy in Isaac Lab across 4,096 parallel GPU environments using multi-term reward shaping: velocity tracking, foot clearance, contact forces, torque regularization, and a 3 Hz Raibert heuristic gait clock — achieving ~48 linear and ~24 angular velocity rewards over 500 episodes.',
      'Implemented explicit torque-level PD control with domain randomization across actuator friction, ground properties, and a 160-point terrain height scanner for sim-to-real transfer.',
      'One of 5 teams selected (out of 30+) to demonstrate zero-shot policy transfer on a real Unitree Go2.'
    ],
    technologies: ['Isaac Lab', 'PPO', 'PyTorch', 'Unitree Go2', 'Sim-to-Real'],
    link: 'https://github.com/jotheesh1729/rob6323_go2_project.git'
  },
  {
    title: 'Autonomous Person Following on Boston Dynamics Spot',
    image: '/assets/videos/spot_fast.mp4',
    dates: 'January 2026',
    points: [
      'Real-time visual servoing using YOLOv8 + ZED 2i stereo camera at 30 fps — computes lateral, distance, and pitch control errors from bounding box geometry, sent to Spot at 10 Hz.',
      'Behavior state machine handles target loss with autonomous search patterns, smooth velocity ramping, and deadband filtering to prevent jitter.',
      'Full stack deployed via Docker with NVIDIA GPU acceleration; live Flask monitoring stream and hardware/software E-Stop for safety.'
    ],
    technologies: ['Boston Dynamics Spot SDK', 'YOLOv8', 'Visual Servoing', 'ZED 2i', 'Docker'],
    link: 'https://github.com/vivekmattam02/spot.git'
  },
  {
    title: 'Slip-Aware MPPI Navigation – Clearpath Warthog on Martian Terrain',
    image: '/assets/images/Warthog.jpg',
    dates: 'Sep – Dec 2025',
    points: [
      'Modeled Extended Differential Drive (EDD) kinematics for Martian regolith (μ=0.35) and quantified a 2.2× effective track width expansion — standard kinematic controllers fail entirely under these conditions.',
      'UKF localization fusing LiDAR-Inertial Odometry with EDD predictions for GPS-denied environments; MPPI (1500 samples at 10 Hz) with composite cost: goal-seeking, heading alignment, obstacle avoidance, and control smoothness.',
      'Validated in Isaac Sim: Mars terrain causes 28× worse cross-track error vs Earth surfaces, confirming that slip-aware estimation is non-negotiable for planetary rovers.'
    ],
    technologies: ['Isaac Sim', 'MPPI', 'UKF', 'LiDAR-Inertial Odometry', 'ROS 2', 'RTAB-Map SLAM'],
    link: 'https://github.com/jotheesh1729/clearpath-warthog-isaac-sim.git'
  },
  {
    title: 'Vision-Based Maze Navigation Using Deep Features and Graph Planning',
    image: '/assets/images/vis-nav.png',
    dates: 'Sep – Dec 2025',
    points: [
      'GPS/map-free localization: indexed ResNet50 descriptors from 3,751 exploration images in a BallTree for sub-2ms nearest-neighbor queries.',
      'Built a topological graph (23,750 edges) of navigable transitions; A* with feature-distance heuristics plans routes to goal images identified purely by visual similarity.',
      'Continuous sense-plan-act loop with live re-localization, off-path replanning, and stuck detection — no maps, no GPS, camera only.'
    ],
    technologies: ['ResNet50', 'BallTree', 'A* Search', 'Topological Graphs', 'PyTorch'],
    link: 'https://github.com/jotheesh1729/vis-nav.git'
  },
  {
    title: 'Decentralized GNN-Based Coordination of Heterogeneous Swarm Robots (UGV-UAV)',
    image: '/assets/images/swarm.png',
    dates: 'Feb – May 2025',
    points: [
      '3-layer decentralized stack for mixed UGV-UAV swarms: DGNN-GA (adapted from Goarin & Loianno, IEEE RA-L 2024) for goal assignment, Olfati-Saber flocking for cohesion, and cascaded PX4/PID for low-level control.',
      'DGNN-GA performs iterative message passing over communication and assignment edges, computing optimal allocations using only local agent observations.',
      'Validated in ROS2-Unity3D with 5+ agents navigating spatial bottlenecks (max 1 UGV + 1 UAV simultaneously); demoed stable 10-agent homogeneous flocking with alpha-lattice convergence.'
    ],
    technologies: ['Graph Neural Networks', 'Olfati-Saber Flocking', 'ROS 2', 'Unity3D', 'PX4'],
    link: '/assets/pdf/doorbusters.pdf'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/bts.png',
    dates: 'Mar – May 2023',
    points: [
      'ESP32-S2 wrist device publishing SOS alerts to Adafruit IO over WiFi; distinct vibration patterns encode fire, general, and combined emergencies for non-visual recognition.',
      '93% SOS transmission success rate and 100% alert delivery reliability; 72–94% alert-type recognition accuracy validated in a 17-participant usability study.',
      'Designed watch and neckband enclosures in Fusion 360 and 3D printed the prototypes — published as undergraduate thesis (BTH, June 2023).'
    ],
    technologies: ['ESP32-S2', 'Adafruit IO', 'C++', 'Fusion 360', '3D Printing'],
    link: 'https://github.com/jotheesh1729/Wearble-based-alerting-system-for-humans.git'
  },
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
        Projects
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
                width: '280px',
                height: '210px',
                backgroundColor: '#e5e5e5',
                borderRadius: '3px',
                overflow: 'hidden'
              }}>
                {project.image.toLowerCase().endsWith('.mov') || project.image.toLowerCase().endsWith('.mp4') ? (
                  <video
                    src={project.image.startsWith('/') ? process.env.PUBLIC_URL + project.image : project.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <img
                    src={project.image.startsWith('/') ? process.env.PUBLIC_URL + project.image : project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #999;">Project Demo</div>';
                    }}
                  />
                )}
              </div>
            </div>

            {/* Project Details */}
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111' }}>
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link.startsWith('/') ? process.env.PUBLIC_URL + project.link : project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        color: '#555'
                      }}
                      title="View on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
                <span style={{ fontSize: '15px', color: '#888', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                  {project.dates}
                </span>
              </div>
              
              <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
                {project.points.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '14px',
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