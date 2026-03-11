import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const publications = [
  {
    title: 'Wearable Emergency Alerting System With Enhanced Inclusivity with Interactive Acknowledgment and SOS Distress Signal',
    authors: 'Jotheesh Reddy Kummathi',
    supervisor: 'Irina Gertsovich',
    institution: 'Blekinge Institute of Technology',
    year: '2023',
    urn: 'urn:nbn:se:bth-24909',
    link: '#'
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-12 px-6" style={{ backgroundColor: '#333333' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen size={20} style={{ color: '#d1d1d1' }} />
          <h2 className="text-2xl font-semibold" style={{ color: '#f5f5f5' }}>Publications</h2>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="border transition-all duration-300"
              style={{ borderColor: '#555', backgroundColor: '#2a2a2a' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#777'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#555'}
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold mb-2 leading-tight" style={{ color: '#f5f5f5' }}>
                      {pub.title}
                    </h3>
                    <p className="text-xs mb-1.5" style={{ color: '#d1d1d1' }}>
                      {pub.authors}
                      {pub.supervisor && (
                        <span style={{ color: '#999' }}> • Supervisor: {pub.supervisor}</span>
                      )}
                    </p>
                    <p className="text-xs mb-1.5" style={{ color: '#d1d1d1' }}>
                      {pub.institution} • {pub.year}
                    </p>
                    {pub.urn && (
                      <p className="text-xs" style={{ color: '#999' }}>
                        URN: {pub.urn}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors ml-3 flex-shrink-0"
                      style={{ color: '#999' }}
                      onMouseEnter={(e) => e.target.style.color = '#d1d1d1'}
                      onMouseLeave={(e) => e.target.style.color = '#999'}
                      aria-label="View publication"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;