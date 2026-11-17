import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { ArrowUpRight } from 'lucide-react';
import { withBold } from '@/lib/utils';

const experiences = [
  {
    role: 'AI Vision Systems Engineer',
    organization: 'The Nail Lab, Inc.',
    dates: 'July 2026 - Present',
    showGithub: false,
    points: [
      'Deployed ARM64 **embedded Linux (L4T BSP)** on the **NVIDIA Jetson Orin Nano** and an Orin NX module on a Connect Tech Boson22 carrier, writing custom camera drivers and configuring system services.',
      'Built **hardware-accelerated GStreamer camera pipelines with NVJPEG encoding**, cutting average CPU use by **20%** versus software encoding at a stable **30 FPS, 1080p**; fixed recording-startup race conditions and added monotonic-clock timestamping to measure inter-stream latency.',
      'Wrote asynchronous device-management services in **Rust (Tokio, Axum)** with authenticated WebSockets, liveness timeouts, and SQLx/SQLite storage, measuring **22% lower server CPU time** per request than a Python/FastAPI baseline.',
      'Implemented **SHA-256-verified** device-to-server file transfer, secure browser-based hardware controls, and **systemd** deployment for repeatable factory bring-up, with CI for linting, static analysis, and tests.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    organization: 'Agile Robotics and Perception Lab (ARPL) - New York University',
    dates: 'January 2025 - June 2026',
    showGithub: false,
    points: [
      'Extended **PX4 firmware in C++** with custom uORB messages and DDS topics for onboard autonomy, and built **Jetson Orin-PX4 interfaces** over MAVLink and uXRCE-DDS on UART.',
      'Tuned **PID controllers and EKF2** for custom airframes and payloads from flight logs; diagnosed ESC, sensor, and vibration faults with oscilloscope measurements and gyro spectral analysis, and configured notch filtering.',
      'Developed a **3-layer decentralized autonomy stack** for UAV-UGV swarms (DGNN-GA goal assignment, Olfati-Saber flocking, PX4/PID local control), validated in MATLAB and ROS 2/Unity3D and deployed on **physical ground robots**.',
      'Built an uncertainty-aware **3D Gaussian Splatting map-alignment pipeline** in ROS 2 and Isaac Sim (TEASER++ coarse registration, covariance-weighted G-ICP refinement), evaluated on a simulated Boston Dynamics Spot across **30+ configurations**.',
      'Integrated Jetson Orin with RealSense/ZED cameras, LiDAR, IMU, and GPS/RTK across UAVs, UGVs, and quadrupeds; ran **HIL/SIL and Isaac Sim** validation and served as **UAV safety pilot** at Army Research Laboratory test ranges.'
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
      'Developed **C/C++ firmware on FreeRTOS and bare metal** for **Nordic nRF52 BLE** MCUs in environmental-monitoring and automation devices for small industries, nurseries, and homes.',
      'Wrote **interrupt-driven SPI/I2C drivers** with Nordic EasyDMA, ring-buffered UART, and CAN communication, and implemented finite-state-machine control for motorized actuators.',
      'Integrated Bosch BME680 and Sensirion SCD30/SCD40 sensors and built a benchtop calibration chamber, **reducing measurement error by over 15%**; extended **battery life by 25%** with sleep modes, batched telemetry, and tuned BLE connection intervals.',
      'Shipped **BLE OTA/DFU** field updates with Git-based CI/CD, and designed mixed-signal, **multi-layer PCBs in KiCad** with BLE antenna matching and sensor thermal isolation.'
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
        color: 'var(--fg-strong)',
        borderBottom: '1px solid var(--border)',
        paddingBottom: '8px'
      }}>
        Experience
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {experiences.map((exp, index) => (
          <div key={index}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--fg-strong)' }}>
                  {exp.role}
                </h3>
                {exp.showGithub && exp.githubLink && (
                  <a 
                    href={exp.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        flexShrink: 0,
                        whiteSpace: 'nowrap',
                        padding: '2px 8px',
                        fontSize: '13px',
                        textDecoration: 'none',
                        color: 'var(--fg-btn)',
                        backgroundColor: 'var(--surface)',
                        border: '1px solid var(--border-2)',
                        borderRadius: '4px'
                      }}
                  >
                    <FaGithub size={14} /> GitHub
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
              <span style={{ fontSize: '15px', color: 'var(--fg-3)', whiteSpace: 'nowrap' }}>
                {exp.dates}
              </span>
            </div>
            <p style={{ fontSize: '15px', color: 'var(--fg-2)', marginBottom: '8px' }}>
              {exp.organization}
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', listStyleType: 'disc' }}>
              {exp.points.map((point, idx) => (
                <li key={idx} style={{ fontSize: '15px', color: 'var(--fg)', lineHeight: '1.6', marginBottom: '4px' }}>
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