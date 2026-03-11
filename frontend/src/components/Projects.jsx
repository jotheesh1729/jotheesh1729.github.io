import React from 'react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/videos/unitree.MOV',
    dates: 'September - December 2025',
    points: [
      'Trained a deep RL policy (PPO) in NVIDIA Isaac Lab using 4,096 parallel GPU-simulated environments with a comprehensive reward function covering velocity tracking, orientation stability, foot clearance, and contact force management.',
      'Engineered a robust sim-to-real transfer pipeline through extensive domain randomization of ground friction, actuator stiction & viscous friction, and terrain properties, combined with a custom physics-based actuator friction model.',
      'Developed a two-stage curriculum learning approach — flat terrain with Raibert heuristic gait guidance, then procedurally generated rough terrain with relaxed constraints for adaptive gait learning.',
      'Selected as one of only 5 teams out of 30+ to demonstrate zero-shot sim-to-real transfer of the trained policy on a real Unitree Go2 robot.'
    ],
    technologies: ['Isaac Lab', 'Deep Reinforcement Learning (PPO)', 'PyTorch', 'Unitree Go2', 'Sim-to-Real Transfer'],
    link: 'https://github.com/jotheesh1729/rob6323_go2_project.git'
  },
  {
    title: 'Autonomous Person Following on Boston Dynamics Spot',
    image: '/assets/videos/spot_fast.mp4',
    dates: 'January 2026',
    points: [
      'Developed a visual servoing pipeline using ZED 2i stereo camera and YOLOv8 for real-time person detection and tracking at 30fps, computing lateral, distance, and pitch control errors from bounding box analysis.',
      'Implemented proportional control with three independent channels — angular velocity for lateral tracking, linear velocity for distance maintenance, and body pitch for elevation changes like stairs.',
      'Designed a behavior state machine with autonomous search patterns when the target person is lost, including smooth acceleration ramping and velocity-limited commands sent to Spot at 10Hz.',
      'Deployed the full system via Docker with NVIDIA GPU acceleration, featuring a live Flask web monitoring stream and comprehensive safety systems including hardware/software E-Stop.'
    ],
    technologies: ['Boston Dynamics Spot SDK', 'YOLOv8', 'Visual Servoing', 'Docker', 'ZED 2i Camera'],
    link: 'https://github.com/vivekmattam02/spot.git'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/warthog.jpg',
    dates: 'September - December 2025',
    points: [
      'Modeled the Extended Differential Drive (EDD) kinematics where Martian regolith (μ=0.35) causes the effective track width to expand 2.2×, quantifying the massive understeer that renders standard kinematic models unreliable.',
      'Implemented a 6-state Unscented Kalman Filter (UKF) fusing LiDAR-Inertial Odometry with EDD predictions for GPS-denied localization, augmenting the state with longitudinal acceleration to maintain observability during high-slip maneuvers.',
      'Deployed an MPPI controller with a composite cost function — terminal goal-seeking + heading alignment, running collision penalties, proximity-weighted obstacle costs, and control smoothness terms.',
      'Validated the framework in Isaac Sim showing Mars regolith induces 2× higher lateral drift velocities and 28× worse cross-track error compared to Earth surfaces, proving the necessity of slip-aware estimation and control.'
    ],
    technologies: ['NVIDIA Isaac Sim', 'MPPI Control', 'Unscented Kalman Filter', 'LiDAR-Inertial Odometry', 'ROS 2 Humble'],
    link: 'https://github.com/jotheesh1729/clearpath-warthog-isaac-sim.git'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/vis-nav.png',
    dates: 'September - December 2025',
    points: [
      'Extracted 2048-dim ResNet50 descriptors from 3,751 exploration images and indexed them in a BallTree for fast nearest-neighbor localization in high-dimensional feature space.',
      'Constructed a sparse weighted topological graph where nodes are exploration viewpoints and edges encode navigable transitions, then ran A* search with feature-distance heuristics to plan optimal routes.',
      'Matched goal images (4 candidate views) against the feature database using fused similarity scores to identify the target graph node without any prior map or GPS.',
      'Ran a continuous sense-plan-act loop with real-time visual re-localization, path validation, off-path replanning, and stuck detection, reducing planned routes to 5-10 stable waypoints.'
    ],
    technologies: ['ResNet50', 'BallTree Indexing', 'A* Search', 'Topological Graphs', 'PyTorch'],
    link: 'https://github.com/jotheesh1729/vis-nav.git'
  },
  {
    title: 'Decentralized Heterogeneous Swarm Robots',
    image: '/assets/images/swarm.png',
    dates: 'February - May 2025',
    points: [
      'Developed a three-layered autonomy stack for heterogeneous UGV-UAV swarms: decentralized goal assignment via DGNN-GA, swarm coordination through Extended Olfati-Saber Flocking, and type-specific local control policies for collision-free navigation.',
      'Implemented DGNN-GA with encoder-GNN-decoder architecture performing iterative message passing across agent communication and assignment edges to compute optimal goal allocations using only local observations.',
      'Extended Olfati-Saber Flocking with sigma-norm-based attraction-repulsion potentials, bump-function adjacency, informed-agent target tracking, and proximity-activated damping.',
      'Validated the framework from MATLAB prototyping through ROS 2 Humble deployment in Unity3D simulation, demonstrating stable 10-agent homogeneous flocking with alpha-lattice formation convergence.'
    ],
    technologies: ['Graph Neural Networks', 'Olfati-Saber Flocking', 'ROS 2 Humble', 'Unity3D', 'PX4 Autopilot'],
    link: '/assets/pdf/doorbusters.pdf'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/bts.png',
    dates: 'March - May 2023',
    points: [
      'Built a wrist-worn emergency alert device using an ESP32-S2 microcontroller connected to Adafruit IO cloud, enabling real-time SOS transmission and alert reception between multiple devices over WiFi.',
      'Designed distinct vibration patterns for different emergency types (fire, general, combined), allowing non-visual alert recognition with 72-94% accuracy across tested age groups.',
      'Achieved 93% SOS transmission success rate and 100% alert delivery reliability in system trials, validated through a 17-participant usability study across multiple age groups.',
      'Designed the wearable enclosure (watch and neckband form factors) in Fusion 360 and 3D printed the prototypes, prioritizing accessibility for both disabled and non-disabled users.'
    ],
    technologies: ['ESP32-S2', 'Adafruit IO', 'IoT', 'Fusion 360', '3D Printing'],
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
                width: '280px',
                height: '210px',
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111' }}>
                    {project.title}
                  </h3>
                  {project.link && (
                    <a 
                      href={project.link} 
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
                <span style={{ fontSize: '13px', color: '#888', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                  {project.dates}
                </span>
              </div>
              
              <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
                {project.points.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '13px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
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