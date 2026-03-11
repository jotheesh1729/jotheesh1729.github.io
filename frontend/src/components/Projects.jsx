import React from 'react';

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#d1d5db" strokeWidth="1"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12C6 14.6141 7.59314 16.8787 9.83863 17.7419C10.1386 17.7981 10.2508 17.6058 10.2508 17.4415C10.2508 17.2949 10.2447 16.8597 10.2416 16.3035C8.48657 16.6655 8.13486 15.4485 8.13486 15.4485C7.86171 14.6956 7.46629 14.5041 7.46629 14.5041C6.91629 14.1309 7.50857 14.1384 7.50857 14.1384C8.11714 14.1826 8.43343 14.7675 8.43343 14.7675C8.97371 15.6943 9.85914 15.4262 10.2631 15.2682C10.3186 14.8787 10.4762 14.6109 10.65 14.4565C9.35657 14.3005 7.99714 13.7811 7.99714 11.5282C7.99714 10.8137 8.23371 10.2311 8.44629 9.77311C8.38371 9.61654 8.17629 9.00654 8.50457 8.18397C8.50457 8.18397 9.01114 8.01625 10.2346 8.85054C10.7186 8.71225 11.2346 8.64311 11.7508 8.64054C12.2662 8.64311 12.7822 8.71225 13.2669 8.85054C14.4897 8.01625 14.9954 8.18397 14.9954 8.18397C15.3246 9.00654 15.1169 9.61654 15.0546 9.77311C15.2679 10.2311 15.5029 10.8137 15.5029 11.5282C15.5029 13.7872 14.1408 14.2982 12.8422 14.4511C13.0591 14.6373 13.2562 15.0037 13.2562 15.5629C13.2562 16.3631 13.2492 17.0091 13.2492 17.2262C13.2492 17.3919 13.3591 17.5856 13.6646 17.5197C15.9131 16.6565 17.5 14.3919 17.5 11.7778C17.5 8.46411 14.8137 5.77782 11.5 5.77782C8.18629 5.77782 5.5 8.46411 5.5 11.7778C5.5 14.3919 7.08686 16.6565 9.33543 17.5197C9.64086 17.5856 9.75086 17.3919 9.75086 17.2262C9.75086 17.0091 9.74371 16.3631 9.74371 15.5629C9.74371 15.0037 9.94086 14.6373 10.1577 14.4511C8.85914 14.2982 7.49714 13.7872 7.49714 11.5282C7.49714 10.8137 7.73371 10.2311 7.94629 9.77311C7.88371 9.61654 7.67629 9.00654 8.00457 8.18397C8.00457 8.18397 8.51114 8.01625 9.73457 8.85054C10.2186 8.71225 10.7346 8.64311 11.2508 8.64054C11.7662 8.64311 12.2822 8.71225 12.7669 8.85054C13.9897 8.01625 14.4954 8.18397 14.4954 8.18397C14.8246 9.00654 14.6169 9.61654 14.5546 9.77311C14.7679 10.2311 15.0029 10.8137 15.0029 11.5282C15.0029 13.7872 13.6408 14.2982 12.3422 14.4511C12.5591 14.6373 12.7562 15.0037 12.7562 15.5629C12.7562 16.3631 12.7492 17.0091 12.7492 17.2262C12.7492 17.3919 12.8591 17.5856 13.1646 17.5197C15.4131 16.6565 17 14.3919 17 11.7778C17 8.46411 14.3137 5.77782 11 5.77782L12 6Z" fill="#111"/>
  </svg>
);

const projects = [
  {
    title: 'Decentralized Coordination of Heterogeneous Swarm Robots',
    image: '/assets/images/project-swarm-robots.jpg',
    dates: 'Feb - May 2025',
    points: [
      'Designed a decentralized multi-robot framework for mixed UGV-UAV teams in confined spaces, enabling robots to operate autonomously without relying on centralized coordination',
      'Implemented collision-free navigation and dynamic goal assignment without centralized control, using message-passing architecture that ensures scalability across varying team sizes',
      'Adapted Graph Neural Network architecture for scalable goal allocation using local observations and neighbor communication, allowing each agent to make independent decisions based on distributed information',
      'Validated in ROS2-Unity3D simulation demonstrating resilience to agent failures and communication delays, achieving 95% task completion rate even with 30% robot failure scenarios'
    ],
    technologies: ['Graph Neural Networks', 'ROS2', 'Unity3D', 'Python'],
    link: '#'
  },
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/images/project-quadruped.jpg',
    dates: 'Sep - Dec 2024',
    points: [
      'Trained PPO-based walking policy for Unitree Go2 quadruped in Isaac Lab, developing a robust locomotion controller capable of adapting to various terrain conditions',
      'Implemented custom reward shaping for foot placement and contact forces, optimizing gait stability and energy efficiency while maintaining natural motion patterns',
      'Achieved stable velocity tracking across flat and rough terrain with velocity tracking error under 5%, demonstrating successful sim-to-real transfer through domain randomization techniques',
      'Built PD torque controller with gait phase tracking and action smoothing for stable trotting, reducing oscillations by 40% compared to baseline implementations'
    ],
    technologies: ['PPO', 'Isaac Lab', 'PyTorch', 'Python', 'Domain Randomization'],
    link: '#'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/project-mppi-navigation.jpg',
    dates: 'Sep - Dec 2024',
    points: [
      'Developed autonomous navigation stack for Clearpath Warthog on Mars-like terrain in Isaac Sim, incorporating physics-based slip modeling to handle challenging low-traction environments',
      'Combined slip-aware kinematics with Unscented Kalman Filter for GPS-free localization, achieving position estimation accuracy within 15cm over 100m trajectories on deformable terrain',
      'Implemented real-time MPPI controller with terrain-aware cost function, optimizing control sequences at 20Hz while accounting for predicted slip and obstacle avoidance constraints',
      'Integrated 3D LiDAR and RTAB-Map SLAM for autonomous obstacle avoidance and mapping, enabling safe navigation through unknown environments with dynamic re-planning capabilities'
    ],
    technologies: ['MPPI', 'Isaac Sim', 'UKF', 'LiDAR', 'RTAB-Map', 'C++'],
    link: '#'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/project-vision-navigation.jpg',
    dates: 'Sep - Dec 2024',
    points: [
      'Built vision-only localization system using ResNet50 features and BallTree search, eliminating the need for traditional SLAM while maintaining robust localization performance',
      'Achieved sub-2ms query time matching live frames against reference images stored in a database of 5000+ reference views, enabling real-time localization at 30fps',
      'Created topological graph with sequential and loop-closure connections representing navigable paths, using visual similarity metrics to establish reliable place recognition',
      'Enabled A* path planning through maze using only camera input with adaptive replanning, successfully navigating complex environments with 98% goal-reaching success rate'
    ],
    technologies: ['ResNet50', 'BallTree', 'A* Planning', 'OpenCV', 'Python'],
    link: '#'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/project-wearable.jpg',
    dates: 'March - June 2023',
    points: [
      'Developed wearable device using vibrations for emergency alerts with interactive acknowledgment, providing non-auditory notification system for diverse user populations',
      'Powered by Adafruit QT PY ESP32 microcontroller with Adafruit IO integration for real-time cloud communication, enabling remote monitoring and alert triggering',
      'Designed watch and neckband in Fusion 360 and 3D printed for broad accessibility, conducting user testing with 15 participants to optimize ergonomics and usability',
      'Focused on older adults, people with disabilities, and people with autism, implementing customizable vibration patterns and emergency SOS features with battery life exceeding 48 hours'
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
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '4px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111' }}>
                  {project.title}
                </h3>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ 
                      marginLeft: '8px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title="View on GitHub"
                  >
                    <GitHubIcon />
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