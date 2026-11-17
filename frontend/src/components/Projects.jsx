import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiRust, SiStmicroelectronics } from 'react-icons/si';
import { withBold } from '@/lib/utils';

const projects = [
  {
    title: 'Icarus: Rust Flight-Controller Firmware on a Custom STM32N6 Board',
    logo: (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '28px', backgroundColor: 'white' }}>
        <div style={{ textAlign: 'center', color: '#03234B' }}>
          <SiStmicroelectronics size={96} title="STMicroelectronics" />
          <div style={{ fontSize: '15px', fontWeight: '700', letterSpacing: '0.5px' }}>STM32N6</div>
        </div>
        <SiRust size={84} color="#000" title="Rust" />
      </div>
    ),
    dates: 'October 2026 - Present',
    paras: [
      'Flight firmware in **no_std Rust (Embassy)** for the **STM32N657** (Cortex-M55 with NPU and camera ISP), aimed at replacing a separate flight controller and companion computer on sub-250 g drones. Includes embedded-hal drivers for **3 redundant SPI IMUs** and a **MIPI CSI-2** camera.',
      'A **high-priority interrupt executor** cut worst-case IMU read latency from **10.4 ms to 0.6 ms**, with **Mahony/Madgwick** attitude estimation on top. The matching **6-layer KiCad board** has its schematic complete, checked by Python netlist scripts that caught **13 faults**.'
    ],
    technologies: ['Rust (Embassy, no_std)', 'STM32N657 (Cortex-M55)', 'MIPI CSI-2', 'Mahony/Madgwick AHRS', 'KiCad'],
    link: 'https://github.com/jotheesh1729/Icarus_FC'
  },
  {
    title: 'OTA Kit: Signed Firmware Updates with Rollback (Zephyr + MCUboot)',
    image: '/assets/images/zephyr.jpeg',
    imageFit: 'contain',
    dates: 'September - October 2026',
    paras: [
      'A **Zephyr module** for **signed OTA firmware updates with automatic rollback** on **MCUboot**, delivering images over UART, Bluetooth LE, and Wi-Fi to an **STM32L475** and an **ESP32**. A new image becomes permanent only if its health check passes; otherwise MCUboot reverts it.',
      'Tested on a **relay-based power-loss rig** with **60 power cuts** across upload, swap, revert, and erase and **no board lost**. Ships with a Python **"OTA doctor"** that checks partitions, image size, and signing key before flashing.'
    ],
    technologies: ['Zephyr RTOS', 'MCUboot', 'ECDSA P-256', 'MCUmgr (SMP)', 'STM32L475 + ESP32'],
    link: 'https://github.com/jotheesh1729/zephyr-ota-kit'
  },
  {
    title: 'Tremor & Dyskinesia Detection Wearable (Zephyr RTOS)',
    image: '/assets/images/tremor.png',
    imageFit: 'contain',
    dates: 'August - September 2026',
    paras: [
      'A wrist-worn Parkinson\'s monitor on **Zephyr RTOS** and an **STM32L475**, with a **custom out-of-tree LSM6DSL IMU driver** that hands FIFO-watermark interrupts to a processing thread.',
      'A **CMSIS-DSP FFT** pipeline classifies **tremor (3-9 Hz) vs. dyskinesia**, a gyroscope gate rejects voluntary motion, and an **episode state machine** reports summaries over a **custom BLE GATT service**.'
    ],
    technologies: ['Zephyr RTOS', 'STM32L475 (Cortex-M4F)', 'CMSIS-DSP (FFT)', 'LSM6DSL IMU', 'Bluetooth LE (GATT)'],
    link: 'https://github.com/jotheesh1729/tremor_detection_zephyr'
  },
  {
    title: 'Map-Free Navigation & Person Following on FrodoBots Earth Rover',
    image: '/assets/videos/person_chair_demo.mp4',
    dates: 'May 2026',
    paras: [
      'A **map-free, monocular-only navigation stack** for a FrodoBots Earth Rover that drives to an object described in plain English or follows a person, with **no lidar, GPS, or prebuilt map**. **YOLO-World** detection is verified by an asynchronous **vision-language model**.',
      'Depth sampled from **Depth Anything V2** cut mean stopping error from **0.47 m to 0.21 m**, and a five-band depth scan raised obstacle avoidance from 55% to 75%, for **67.5-70% end-to-end navigation success**.'
    ],
    technologies: ['YOLO-World', 'Qwen2-VL / InternVL2', 'Depth Anything V2', 'Extended Kalman Filter', 'FrodoBots Earth Rover'],
    link: 'https://github.com/jotheesh1729/frodo-follower'
  },
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/videos/unitree.mp4',
    dates: 'September - December 2025',
    paras: [
      'A **PPO** locomotion policy trained in **NVIDIA Isaac Lab** across **4,096 parallel environments**, using a two-stage curriculum from flat to rough terrain.',
      'Domain randomization and a custom **actuator friction model** closed the sim-to-real gap; selected as **one of 5 teams out of 30+** to demonstrate zero-shot transfer on a real **Unitree Go2**.'
    ],
    technologies: ['Isaac Lab', 'Deep Reinforcement Learning (PPO)', 'PyTorch', 'Unitree Go2', 'Sim-to-Real Transfer'],
    link: 'https://github.com/jotheesh1729/rob6323_go2_project.git'
  },
  {
    title: 'Autonomous Person Following on Boston Dynamics Spot',
    image: '/assets/videos/spot_fast.mp4',
    dates: 'January 2026',
    paras: [
      'A **visual servoing** pipeline using a ZED 2i stereo camera and **YOLOv8** to detect and follow a person at 30 fps, with **proportional control** of turn rate, distance, and body pitch for stairs.',
      'A **behavior state machine** searches when the person is lost and limits velocity commands to Spot at 10 Hz. Deployed with **Docker** on GPU, with a live monitoring stream and hardware and software **E-Stop**.'
    ],
    technologies: ['Boston Dynamics Spot SDK', 'YOLOv8', 'Visual Servoing', 'Docker', 'ZED 2i Camera'],
    link: 'https://github.com/vivekmattam02/spot.git'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/Warthog.jpg',
    dates: 'September - December 2025',
    paras: [
      'Slip-aware navigation for skid-steer robots on Martian regolith: **Extended Differential Drive** kinematics, a 6-state **Unscented Kalman Filter** for **GPS-denied localization**, and an **MPPI controller**.',
      'Validated in **Isaac Sim**, where Mars regolith expanded the effective track width **2.2×** and gave **28× worse cross-track error** than Earth surfaces, showing the need for slip-aware control.'
    ],
    technologies: ['NVIDIA Isaac Sim', 'MPPI Control', 'Unscented Kalman Filter', 'LiDAR-Inertial Odometry', 'ROS 2 Humble'],
    link: 'https://github.com/jotheesh1729/clearpath-warthog-isaac-sim.git'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/vis-nav.jpg',
    dates: 'September - December 2025',
    paras: [
      'Image-goal navigation in a maze **without any prior map or GPS**: **ResNet50 descriptors** from **3,751** exploration images are indexed in a **BallTree** for fast visual localization.',
      'Routes are planned over a **sparse topological graph** of viewpoints with **A* search**, inside a **sense-plan-act loop** with re-localization, replanning, and stuck detection.'
    ],
    technologies: ['ResNet50', 'BallTree Indexing', 'A* Search', 'Topological Graphs', 'PyTorch'],
    link: 'https://github.com/jotheesh1729/vis-nav.git'
  },
  {
    title: 'Decentralized Heterogeneous Swarm Robots',
    image: '/assets/images/swarm.png',
    dates: 'February - May 2025',
    paras: [
      'A **three-layered autonomy stack** for **heterogeneous UGV-UAV swarms**: decentralized goal assignment with a graph neural network (DGNN-GA), Extended Olfati-Saber flocking, and type-specific local control.',
      'Agents allocate goals from **only local observations**. Validated from **MATLAB** through **ROS 2 Humble** in **Unity3D**, with stable **10-agent** flocking.'
    ],
    technologies: ['Graph Neural Networks', 'Olfati-Saber Flocking', 'ROS 2 Humble', 'Unity3D', 'PX4 Autopilot'],
    link: '/assets/documents/doorbusters.pdf'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/bts.jpg',
    dates: 'March - May 2023',
    paras: [
      'A wrist-worn emergency alert device on an **ESP32-S2** and **Adafruit IO** that sends and receives **real-time SOS** alerts over WiFi, with **distinct vibration patterns** per emergency type.',
      'Reached a **93% SOS transmission success rate** and **100% alert delivery** in a **17-participant usability study**. Enclosures designed in **Fusion 360** and 3D printed.'
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
        color: 'var(--fg-strong)',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '8px'
      }}>
        Projects
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: '28px' }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '20px',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              backgroundColor: 'var(--card)'
            }}
          >
            {/* Project Image */}
            <div style={{ flexShrink: 0, width: '100%' }}>
              <div style={{
                width: '100%',
                height: '280px',
                backgroundColor: 'var(--border)',
                borderRadius: '3px',
                border: '1px solid var(--border)',
                overflow: 'hidden'
              }}>
                {project.logo ? project.logo : project.image.toLowerCase().endsWith('.mov') || project.image.toLowerCase().endsWith('.mp4') ? (
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
                    style={{ width: '100%', height: '100%', objectFit: project.imageFit || 'cover', backgroundColor: 'white' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #999;">Project Demo</div>';
                    }}
                  />
                )}
              </div>
            </div>

            {/* Project Details */}
            <div style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: 'var(--fg-strong)' }}>
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
                        color: 'var(--fg)'
                      }}
                      title="View on GitHub"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                </div>
                <span style={{ fontSize: '15px', color: 'var(--fg-3)', whiteSpace: 'nowrap' }}>
                  {project.dates}
                </span>
              </div>
              
              {project.paras.map((para, idx) => (
                <p key={idx} style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: '1.6', margin: '0 0 10px 0' }}>
                  {withBold(para)}
                </p>
              ))}

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '12px' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '14px',
                      padding: '3px 9px',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border-2)',
                      borderRadius: '3px',
                      color: 'var(--fg)'
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