import React from 'react';

const publications = [
  {
    title: 'Wearable Emergency Alerting System With Enhanced Inclusivity with Interactive Acknowledgment and SOS Distress Signal',
    authors: 'Jotheesh Reddy Kummathi',
    supervisor: 'Irina Gertsovich',
    venue: 'Blekinge Institute of Technology',
    year: '2023',
    urn: 'urn:nbn:se:bth-24909'
  }
];

const Publications = () => {
  return (
    <section style={{ marginBottom: '60px' }}>
      <h2 style={{ 
        fontSize: '22px', 
        fontWeight: '600',
        marginBottom: '24px',
        color: '#f5f5f5',
        borderBottom: '1px solid #555',
        paddingBottom: '8px'
      }}>
        Publications
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {publications.map((pub, index) => (
          <div key={index} style={{ paddingLeft: '12px', borderLeft: '3px solid #555' }}>
            <p style={{ fontSize: '15px', fontWeight: '500', color: '#f5f5f5', marginBottom: '6px' }}>
              {pub.title}
            </p>
            <p style={{ fontSize: '14px', color: '#b8b8b8', marginBottom: '4px' }}>
              {pub.authors}
              {pub.supervisor && ` • Supervisor: ${pub.supervisor}`}
            </p>
            <p style={{ fontSize: '14px', color: '#b8b8b8' }}>
              {pub.venue}, {pub.year}
            </p>
            {pub.urn && (
              <p style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>
                URN: {pub.urn}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;