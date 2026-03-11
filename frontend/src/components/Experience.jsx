import React from 'react';

const GitHubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="11" fill="white" stroke="#d1d5db" strokeWidth="1"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 6C8.68629 6 6 8.68629 6 12C6 14.6141 7.59314 16.8787 9.83863 17.7419C10.1386 17.7981 10.2508 17.6058 10.2508 17.4415C10.2508 17.2949 10.2447 16.8597 10.2416 16.3035C8.48657 16.6655 8.13486 15.4485 8.13486 15.4485C7.86171 14.6956 7.46629 14.5041 7.46629 14.5041C6.91629 14.1309 7.50857 14.1384 7.50857 14.1384C8.11714 14.1826 8.43343 14.7675 8.43343 14.7675C8.97371 15.6943 9.85914 15.4262 10.2631 15.2682C10.3186 14.8787 10.4762 14.6109 10.65 14.4565C9.35657 14.3005 7.99714 13.7811 7.99714 11.5282C7.99714 10.8137 8.23371 10.2311 8.44629 9.77311C8.38371 9.61654 8.17629 9.00654 8.50457 8.18397C8.50457 8.18397 9.01114 8.01625 10.2346 8.85054C10.7186 8.71225 11.2346 8.64311 11.7508 8.64054C12.2662 8.64311 12.7822 8.71225 13.2669 8.85054C14.4897 8.01625 14.9954 8.18397 14.9954 8.18397C15.3246 9.00654 15.1169 9.61654 15.0546 9.77311C15.2679 10.2311 15.5029 10.8137 15.5029 11.5282C15.5029 13.7872 14.1408 14.2982 12.8422 14.4511C13.0591 14.6373 13.2562 15.0037 13.2562 15.5629C13.2562 16.3631 13.2492 17.0091 13.2492 17.2262C13.2492 17.3919 13.3591 17.5856 13.6646 17.5197C15.9131 16.6565 17.5 14.3919 17.5 11.7778C17.5 8.46411 14.8137 5.77782 11.5 5.77782C8.18629 5.77782 5.5 8.46411 5.5 11.7778C5.5 14.3919 7.08686 16.6565 9.33543 17.5197C9.64086 17.5856 9.75086 17.3919 9.75086 17.2262C9.75086 17.0091 9.74371 16.3631 9.74371 15.5629C9.74371 15.0037 9.94086 14.6373 10.1577 14.4511C8.85914 14.2982 7.49714 13.7872 7.49714 11.5282C7.49714 10.8137 7.73371 10.2311 7.94629 9.77311C7.88371 9.61654 7.67629 9.00654 8.00457 8.18397C8.00457 8.18397 8.51114 8.01625 9.73457 8.85054C10.2186 8.71225 10.7346 8.64311 11.2508 8.64054C11.7662 8.64311 12.2822 8.71225 12.7669 8.85054C13.9897 8.01625 14.4954 8.18397 14.4954 8.18397C14.8246 9.00654 14.6169 9.61654 14.5546 9.77311C14.7679 10.2311 15.0029 10.8137 15.0029 11.5282C15.0029 13.7872 13.6408 14.2982 12.3422 14.4511C12.5591 14.6373 12.7562 15.0037 12.7562 15.5629C12.7562 16.3631 12.7492 17.0091 12.7492 17.2262C12.7492 17.3919 12.8591 17.5856 13.1646 17.5197C15.4131 16.6565 17 14.3919 17 11.7778C17 8.46411 14.3137 5.77782 11 5.77782L12 6Z" fill="#111"/>
  </svg>
);

const experiences = [
  {
    role: 'Head Teaching Assistant',
    organization: 'New York University',
    dates: 'Jan 2025 - Present',
    githubLink: '#',
    showGithub: true,
    points: [
      'Assisting in the Real-Time Embedded Systems course by grading assignments, providing feedback, and leading recitation sessions',
      'Conducting office hours and discussion sessions to support student learning, focusing on hardware-software integration',
      'Supporting real-time system concepts and embedded programming best practices'
    ]
  },
  {
    role: 'Graduate Engineering Assistant',
    organization: 'Agile Robotics And Perception Lab, NYU',
    dates: 'Jan 2025 - Present',
    showGithub: false,
    points: [
      'Assembled and configured drones working with PX4 Pro autopilot and NVIDIA Jetson Orin board',
      'Performed firmware flashing, sensor calibration, and system integration for experimental platforms',
      'Supported research experiments in autonomous aerial robotics and perception systems'
    ]
  },
  {
    role: 'Embedded Engineer',
    organization: 'Magnibot Technology Solutions',
    dates: 'July 2023 - July 2024',
    showGithub: false,
    points: [
      'Developed and optimized embedded software for IoT products targeting domestic and industrial applications',
      'Designed, debugged, and integrated embedded solutions using C/C++, Python, and RTOS',
      'Enhanced device functionality and performance through firmware optimization and hardware-software integration'
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
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
                      textDecoration: 'none'
                    }}
                    title="View on GitHub"
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
              <span style={{ fontSize: '13px', color: '#888', whiteSpace: 'nowrap', marginLeft: '16px' }}>
                {exp.dates}
              </span>
            </div>
            <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>
              {exp.organization}
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              {exp.points.map((point, idx) => (
                <li key={idx} style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '4px' }}>
                  {point}
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