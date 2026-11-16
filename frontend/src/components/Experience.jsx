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
      'Deployed ARM64 embedded Linux on the **NVIDIA Jetson Orin Nano Developer Kit** using the **L4T BSP**, and configured an **Orin NX module on a Connect Tech Boson22 carrier**; wrote custom camera drivers and configured system services.',
      'Engineered hardware-accelerated **GStreamer camera pipelines using NVJPEG encoding**, reducing average CPU utilization by **20%** versus software encoding while maintaining a stable **30 FPS at 1080p**.',
      'Resolved camera-preview race conditions during recording initialization by correcting pipeline state transitions; implemented monotonic-clock timestamping to quantify and minimize inter-stream software latency.',
      'Developed asynchronous, low-latency device-management services in **Rust with Tokio and Axum**, implementing authenticated WebSocket communication, liveness timeouts, and **SQLx/SQLite** storage.',
      'Benchmarked Rust services against a **Python/FastAPI baseline**, measuring **4% lower median API latency** and **22% lower server CPU processing time per request**.',
      'Implemented a secure device-to-server file-transfer workflow using **SHA-256 checksum verification** and transactional upload-status tracking to protect file integrity.',
      'Designed secure browser-based hardware controls with session authentication, role-based recording validation, and automated **systemd** deployment for repeatable factory bring-up.',
      'Built Git-based CI validation for Cargo linting, static analysis, tests, and documentation; modeled the camera node\'s enclosure and mechanical assembly in **Fusion 360**.'
    ]
  },
  {
    role: 'Graduate Research Assistant',
    organization: 'Agile Robotics and Perception Lab (ARPL) - New York University',
    dates: 'January 2025 - June 2026',
    showGithub: false,
    points: [
      'Integrated **Jetson Orin onboard compute, RealSense/ZED cameras, LiDAR, IMU, GPS/RTK, barometer, and optical-flow sensors** across UAVs, UGVs, and quadrupeds; configured Linux and **ROS 2** runtimes and validated **OpenVINS VIO and RTAB-Map SLAM** pipelines.',
      'Extended **PX4 firmware in C++** with **custom uORB messages and DDS topics** to support onboard autonomy, adding **ULog logging** for flight-data analysis and debugging.',
      'Developed **Jetson Orin-PX4 interfaces** using **MAVLink and uXRCE-DDS** over UART, supporting direct TTL connections and RS232-to-TTL conversion across carrier-board configurations.',
      'Integrated the **PX4 autopilot** with a decentralized multi-UAV autonomy stack for **goal assignment, flocking, and local control**; tuned PID controllers and EKF2 estimation for custom airframes and payloads using flight-log analysis.',
      'Diagnosed motor and structural vibration through **gyro spectral analysis** in PX4 Flight Review; configured **notch filtering** to attenuate vibration-induced noise while preserving control bandwidth.',
      'Implemented **encoder-GNN-decoder message passing** for decentralized goal assignment and proximity-damped attraction-repulsion flocking; validated **10-agent formations in MATLAB** and **5-agent UGV flocking in ROS 2/Unity3D**, then deployed flocking and local control on physical ground robots.',
      'Conducted **HIL/SIL testing and NVIDIA Isaac Sim validation** before field deployment; debugged mechanical, electrical, sensor, and networking faults and served as **UAV safety pilot and ground-station operator at Army Research Laboratory test ranges**.',
      'Built a **2-stage uncertainty-aware 3D Gaussian Splatting map-alignment pipeline** in ROS 2 and Isaac Sim, combining **BEV phase correlation, FPFH matching, and TEASER++** for coarse registration with **covariance-weighted G-ICP** refinement.'
    ]
  },
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University - ECE-GY 6483: Real-Time Embedded Systems',
    dates: 'January 2025 - May 2026',
    showGithub: true,
    githubLink: 'https://github.com/ECE-GY-6483/ECE-GY-6483-Spring-2026',
    points: [
      'Supported more than **700 graduate students** across three semesters under industry associate professor **Matthew Campisi, PhD**, leading recitations, grading, and office hours on C, Embedded C, Mbed OS, **RTOS scheduling**, and real-time DSP.',
      'Graded labs covering **ARM Cortex-M peripherals**, interrupts, and real-time scheduling, and coached students through hardware-software integration bugs on their own boards.'
    ]
  },
  {
    role: 'Junior Embedded Engineer',
    organization: 'Magnibot Technology Solutions Pvt. Ltd.',
    dates: 'July 2023 - July 2024',
    showGithub: false,
    points: [
      'Developed **C/C++ firmware using FreeRTOS and bare-metal architectures on Nordic nRF52-series BLE MCUs** for customized environmental-monitoring and automation devices serving small-scale industries, horticultural nurseries, and homes.',
      'Integrated **Bosch BME680 and Sensirion SCD30/SCD40 sensors** over I2C/SPI, implementing persistent flash storage of calibration coefficients and application-specific alarm thresholds.',
      'Built a **custom benchtop calibration chamber** and sampled sensor outputs against reference probes during temperature ramps; characterized response lag during heating and cooling and applied gain/offset corrections, **reducing measurement error by over 15%**.',
      'Extended **battery life by 25%** by implementing MCU sleep modes, batching telemetry payloads, and optimizing BLE connection intervals to reduce average current draw and radio-on time.',
      'Developed **interrupt-driven SPI/I2C drivers with Nordic EasyDMA**, ring-buffered UART reception, and **CAN communication**; implemented **finite-state-machine (FSM) control** for motorized actuators and drives.',
      'Implemented **BLE OTA/DFU** for field firmware updates and maintained **Git-based CI/CD pipelines** to automate build validation, regression testing, and firmware release generation.',
      'Designed **mixed-signal, multi-layer PCBs in KiCad**; optimized layouts for **BLE RF antenna matching**, power management circuits, and thermal isolation for environmental sensors.'
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