import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiRust, SiStmicroelectronics } from 'react-icons/si';
import { withBold } from '@/lib/utils';

const projects = [
  {
    title: 'Icarus: Rust Flight-Controller Firmware on a Custom STM32N6 Board',
    // repo is private for now; add `link` back when it goes public
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
    points: [
      'Writing **no_std Rust (Embassy)** flight firmware for the **STM32N657**, an 800 MHz Cortex-M55 with an NPU and camera ISP, aimed at replacing a separate flight controller and companion computer on sub-250 g drones.',
      'Wrote HAL-agnostic **embedded-hal drivers** for **3 redundant SPI IMUs** and a **MIPI CSI-2 IMX219** camera (1080p RAW10 through the DCMIPP ISP).',
      'Samples the 3 IMUs at ~800 Hz on a shared 8 MHz SPI bus with DMA; a **high-priority interrupt executor** cut worst-case read latency from **10.4 ms to 0.6 ms** under USB load.',
      'Implemented **Mahony/Madgwick attitude estimation** with biquad/PT1 filters, and fixed a **USB high-speed** stall (PHY clock source) to stream telemetry at 2,900 frames/s to a Rust GUI.',
      'Designed the **36 x 36 mm, 6-layer board** schematic in **KiCad**; Python netlist checks caught **13 faults** before fabrication (schematic complete, layout next).'
    ],
    technologies: ['Rust (Embassy, no_std)', 'STM32N657 (Cortex-M55)', 'MIPI CSI-2', 'Mahony/Madgwick AHRS', 'KiCad']
  },
  {
    title: 'OTA Kit: Signed Firmware Updates with Rollback (Zephyr + MCUboot)',
    image: '/assets/images/zephyr.jpeg',
    imageFit: 'contain',
    dates: 'September - October 2026',
    points: [
      'Built a **Zephyr module** for **signed OTA firmware updates with automatic rollback** on **MCUboot**, delivering images over **UART, Bluetooth LE, and Wi-Fi** to an **STM32L475** and an **ESP32**.',
      'Implemented a **test-boot, health-check, confirm** flow with **ECDSA P-256** signatures: a new image becomes permanent only if its health check passes, otherwise **MCUboot reverts it**, including after a watchdog reset.',
      'Built a **relay-based power-loss rig** and cut power **60 times** across upload, swap, revert, confirm, and erase with **no board lost**; passed an **11-of-11 failure-case suite**.',
      'Wrote Python host tooling: an **SMP update client** and an **"OTA doctor"** that checks partitions, image size, watchdog timeouts, and signing key before flashing.'
    ],
    technologies: ['Zephyr RTOS', 'MCUboot', 'ECDSA P-256', 'MCUmgr (SMP)', 'STM32L475 + ESP32'],
    link: 'https://github.com/jotheesh1729/zephyr-ota-kit'
  },
  {
    title: 'Tremor & Dyskinesia Detection Wearable (Zephyr RTOS)',
    image: '/assets/images/tremor.png',
    imageFit: 'contain',
    dates: 'August - September 2026',
    points: [
      'Rebuilt a university tremor-detection assignment on **Zephyr RTOS** with a **custom out-of-tree LSM6DSL IMU driver** (devicetree bindings, FIFO-watermark interrupt to thread handoff) on an **STM32L475**.',
      'Built a **real-time DSP pipeline** (gravity removal, magnitude vector, Hann-windowed **CMSIS-DSP FFT**) that classifies **tremor (3-9 Hz) vs. dyskinesia** from the spectrum around the dominant peak.',
      'Added a **gyroscope-based rejection gate** for voluntary wrist motion and an **episode state machine with hysteresis** to turn noisy per-window results into stable episode records.',
      'Reports episode summaries (counts, durations, mean severity) over a **custom BLE GATT service** every 5 minutes instead of streaming live, as commercial tremor monitors do.'
    ],
    technologies: ['Zephyr RTOS', 'STM32L475 (Cortex-M4F)', 'CMSIS-DSP (FFT)', 'LSM6DSL IMU', 'Bluetooth LE (GATT)'],
    link: 'https://github.com/jotheesh1729/tremor_detection_zephyr'
  },
  {
    title: 'Map-Free Navigation & Person Following on FrodoBots Earth Rover',
    image: '/assets/videos/person_chair_demo.mp4',
    dates: 'May 2026',
    points: [
      'Built a **map-free, monocular-only navigation stack** for a FrodoBots Earth Rover that drives to an object described in plain English or follows a person, with **no lidar, GPS, or prebuilt map**.',
      'Cascaded **YOLO-World** detection with an asynchronous **vision-language model** (Qwen2-VL-2B or InternVL2-2B) that verifies the target without blocking the **~8-12 FPS** control loop.',
      'Estimated distance from **Depth Anything V2** depth at the bottom of each bounding box, cutting mean stopping error from **0.47 m to 0.21 m**; tracked the target with an **EKF** and HSV re-identification.',
      'Raised obstacle-avoidance success from **55% to 75%** with a five-band depth scan, and reached **67.5-70% end-to-end navigation success** over 4 scenarios x 10 trials x 2 VLMs.'
    ],
    technologies: ['YOLO-World', 'Qwen2-VL / InternVL2', 'Depth Anything V2', 'Extended Kalman Filter', 'FrodoBots Earth Rover'],
    link: 'https://github.com/jotheesh1729/frodo-follower'
  },
  {
    title: 'Reinforcement Learning for Quadruped Locomotion',
    image: '/assets/videos/unitree.mp4',
    dates: 'September - December 2025',
    points: [
      'Trained a **PPO** locomotion policy in **NVIDIA Isaac Lab** across **4,096 parallel environments**, with rewards for velocity tracking, orientation stability, foot clearance, and contact forces.',
      'Built a **sim-to-real** pipeline with domain randomization of ground friction and terrain, plus a custom physics-based **actuator friction model** (stiction and viscous friction).',
      'Used a two-stage **curriculum**: flat terrain with Raibert-heuristic gait guidance, then procedurally generated rough terrain with relaxed constraints.',
      'Selected as **one of 5 teams out of 30+** to demonstrate zero-shot sim-to-real transfer on a real **Unitree Go2**.'
    ],
    technologies: ['Isaac Lab', 'Deep Reinforcement Learning (PPO)', 'PyTorch', 'Unitree Go2', 'Sim-to-Real Transfer'],
    link: 'https://github.com/jotheesh1729/rob6323_go2_project.git'
  },
  {
    title: 'Autonomous Person Following on Boston Dynamics Spot',
    image: '/assets/videos/spot_fast.mp4',
    dates: 'January 2026',
    points: [
      'Developed a **visual servoing** pipeline with a ZED 2i stereo camera and **YOLOv8** for person detection and tracking at 30 fps, computing lateral, distance, and pitch errors from the bounding box.',
      'Implemented **proportional control** on three channels: angular velocity for lateral tracking, linear velocity for distance, and body pitch for elevation changes such as stairs.',
      'Designed a **behavior state machine** with search patterns when the person is lost, acceleration ramping, and velocity-limited commands sent to Spot at 10 Hz.',
      'Deployed via **Docker** with NVIDIA GPU acceleration, a live Flask monitoring stream, and hardware and software **E-Stop**.'
    ],
    technologies: ['Boston Dynamics Spot SDK', 'YOLOv8', 'Visual Servoing', 'Docker', 'ZED 2i Camera'],
    link: 'https://github.com/vivekmattam02/spot.git'
  },
  {
    title: 'Slip-Aware MPPI Navigation for Skid-Steer Robots',
    image: '/assets/images/Warthog.jpg',
    dates: 'September - December 2025',
    points: [
      'Modeled **Extended Differential Drive (EDD)** kinematics, showing that Martian regolith (μ=0.35) expands the effective track width **2.2×** and causes heavy understeer.',
      'Implemented a 6-state **Unscented Kalman Filter** fusing LiDAR-inertial odometry with EDD predictions for **GPS-denied localization** during high-slip maneuvers.',
      'Deployed an **MPPI controller** with costs for goal-seeking, heading alignment, collisions, obstacle proximity, and control smoothness.',
      'Validated in **Isaac Sim**: Mars regolith gave **2× higher lateral drift** and **28× worse cross-track error** than Earth surfaces, showing the need for slip-aware control.'
    ],
    technologies: ['NVIDIA Isaac Sim', 'MPPI Control', 'Unscented Kalman Filter', 'LiDAR-Inertial Odometry', 'ROS 2 Humble'],
    link: 'https://github.com/jotheesh1729/clearpath-warthog-isaac-sim.git'
  },
  {
    title: 'Vision-Based Maze Navigation',
    image: '/assets/images/vis-nav.jpg',
    dates: 'September - December 2025',
    points: [
      'Extracted **2048-dim ResNet50 descriptors** from **3,751** exploration images and indexed them in a **BallTree** for fast nearest-neighbor localization.',
      'Built a **sparse weighted topological graph** of exploration viewpoints and ran **A* search** with feature-distance heuristics to plan routes.',
      'Matched 4 goal-image views against the feature database with **fused similarity scores** to find the target node **without any prior map or GPS**.',
      'Ran a continuous **sense-plan-act loop** with visual re-localization, off-path replanning, and stuck detection, reducing routes to **5-10 stable waypoints**.'
    ],
    technologies: ['ResNet50', 'BallTree Indexing', 'A* Search', 'Topological Graphs', 'PyTorch'],
    link: 'https://github.com/jotheesh1729/vis-nav.git'
  },
  {
    title: 'Decentralized Heterogeneous Swarm Robots',
    image: '/assets/images/swarm.png',
    dates: 'February - May 2025',
    points: [
      'Developed a **three-layered autonomy stack** for **heterogeneous UGV-UAV swarms**: decentralized goal assignment (DGNN-GA), Extended Olfati-Saber flocking, and type-specific local control.',
      'Implemented DGNN-GA with an **encoder-GNN-decoder** that passes messages between agents to compute goal allocations from **only local observations**.',
      'Extended Olfati-Saber flocking with **sigma-norm attraction-repulsion potentials**, bump-function adjacency, target tracking, and proximity-activated damping.',
      'Validated from **MATLAB** prototyping through **ROS 2 Humble** in **Unity3D** simulation, with stable **10-agent** flocking and alpha-lattice formation.'
    ],
    technologies: ['Graph Neural Networks', 'Olfati-Saber Flocking', 'ROS 2 Humble', 'Unity3D', 'PX4 Autopilot'],
    link: '/assets/documents/doorbusters.pdf'
  },
  {
    title: 'Wearable Emergency Alerting System',
    image: '/assets/images/bts.jpg',
    dates: 'March - May 2023',
    points: [
      'Built a wrist-worn emergency alert device on an **ESP32-S2** connected to **Adafruit IO**, sending and receiving **real-time SOS** alerts between devices over WiFi.',
      'Designed **distinct vibration patterns** per emergency type (fire, general, combined), recognized without looking with **72-94% accuracy** across age groups.',
      'Achieved a **93% SOS transmission success rate** and **100% alert delivery reliability**, validated in a **17-participant usability study**.',
      'Designed watch and neckband enclosures in **Fusion 360** and **3D printed** the prototypes, with accessibility for disabled and non-disabled users in mind.'
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px, 100%), 1fr))', gap: '40px 32px' }}>
        {projects.map((project, index) => (
          <div 
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
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
              
              <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px', listStyleType: 'disc' }}>
                {project.points.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: '1.6', marginBottom: '4px' }}>
                    {withBold(point)}
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: '14px', color: 'var(--fg-3)', margin: 0 }}>
                {project.technologies.join(' · ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;