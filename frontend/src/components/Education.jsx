import React from 'react';

const education = [
  {
    school: 'New York University',
    location: 'New York, NY',
    degree: 'M.S., Computer Engineering',
    dates: 'August 2024 - May 2026'
  },
  {
    school: 'Blekinge Institute of Technology',
    location: 'Sweden',
    degree: 'B.S., Electrical Engineering (Exchange)',
    dates: 'August 2022 - May 2023'
  },
  {
    school: 'JNTUA College of Engineering',
    location: 'India',
    degree: 'B.Tech., Electronics & Communication Engineering',
    dates: 'August 2019 - August 2022'
  }
];

const Education = () => {
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
        Education
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {education.map((edu, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111' }}>
                {edu.school}
              </h3>
              <p style={{ fontSize: '15px', color: '#555' }}>
                {edu.degree}
              </p>
              <p style={{ fontSize: '14px', color: '#888' }}>
                {edu.location}
              </p>
            </div>
            <span style={{ fontSize: '15px', color: '#888', whiteSpace: 'nowrap', marginLeft: '16px' }}>
              {edu.dates}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
