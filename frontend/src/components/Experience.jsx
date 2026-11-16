import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { withBold } from '@/lib/utils';

const experiences = [
  {
    role: 'AI Vision Systems Engineer',
    organization: 'The Nail Lab, Inc.',
    dates: 'July 2026 - Present',
    showGithub: false,
    points: [
      'Brought up cameras on **NVIDIA Jetson Orin** (L4T embedded Linux) with custom camera drivers, and built **hardware-accelerated GStreamer/NVJPEG pipelines** that cut CPU use by **20%** at a stable 30 FPS, 1080p.',
      'Wrote async device-management services in **Rust (Tokio, Axum)** with authenticated WebSockets, SQLite storage, and SHA-256-verified file transfer, using **22% less server CPU time** per request than the Python/FastAPI baseline.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    organization: 'Agile Robotics and Perception Lab (ARPL) - New York University',
    dates: 'January 2025 - June 2026',
    showGithub: false,
    points: [
      'Extended **PX4 firmware in C++** (custom uORB messages, DDS topics, ULog logging) and linked it to **Jetson Orin** over MAVLink and uXRCE-DDS; tuned PID and EKF2 on custom airframes from flight logs.',
      'Built a **decentralized UAV-UGV swarm autonomy stack** (GNN goal assignment, Olfati-Saber flocking) and a **3D Gaussian Splatting map-alignment pipeline** in ROS 2 and Isaac Sim.',
      'Integrated cameras, LiDAR, and GPS/RTK across UAVs, UGVs, and quadrupeds; ran HIL/SIL tests and served as **UAV safety pilot** at Army Research Laboratory test ranges.'
    ]
  },
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University - ECE-GY 6483: Real-Time Embedded Systems',
    dates: 'January 2025 - May 2026',
    showGithub: true,
    githubLink: 'https://github.com/ECE-GY-6483/ECE-GY-6483-Spring-2026',
    points: [
      'Led recitations, grading, and office hours for **700+ graduate students** over three semesters on Embedded C, **ARM Cortex-M** peripherals, RTOS scheduling, and real-time DSP.'
    ]
  },
  {
    role: 'Junior Embedded Engineer',
    organization: 'Magnibot Technology Solutions Pvt. Ltd.',
    dates: 'July 2023 - July 2024',
    showGithub: false,
    points: [
      'Developed **FreeRTOS and bare-metal firmware** in C/C++ on **Nordic nRF52 BLE** MCUs for environmental-monitoring devices: interrupt-driven SPI/I2C drivers, CAN, and **BLE OTA/DFU**.',
      'Extended **battery life by 25%** through sleep modes and BLE tuning, cut sensor measurement error by **over 15%** with a custom calibration rig, and designed the **multi-layer PCBs in KiCad**.'
    ]
  }
];

const Experience = () => {
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
        Experience
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>
                  {exp.role}
                </h3>
                {exp.showGithub && exp.githubLink && (
                  <a 
                    href={exp.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textDecoration: 'none',
                      color: '#555'
                    }}
                    title="View on GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
              </div>
              <span style={{ fontSize: '15px', color: '#888', whiteSpace: 'nowrap' }}>
                {exp.dates}
              </span>
            </div>
            <p style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>
              {exp.organization}
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {exp.points.map((point, idx) => (
                <li key={idx} style={{ fontSize: '15px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
                  {withBold(point)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;