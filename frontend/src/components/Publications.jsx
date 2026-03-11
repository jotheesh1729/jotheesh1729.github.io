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
    <section id="publications" className="py-12 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <BookOpen size={20} className="text-gray-600" />
          <h2 className="text-2xl font-semibold text-gray-700">Publications</h2>
        </div>

        <div className="space-y-4">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="border border-gray-300 hover:border-gray-400 transition-all duration-300"
            >
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-xs text-gray-600 mb-1.5">
                      {pub.authors}
                      {pub.supervisor && (
                        <span className="text-gray-500"> • Supervisor: {pub.supervisor}</span>
                      )}
                    </p>
                    <p className="text-xs text-gray-600 mb-1.5">
                      {pub.institution} • {pub.year}
                    </p>
                    {pub.urn && (
                      <p className="text-xs text-gray-500">
                        URN: {pub.urn}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-700 transition-colors ml-3 flex-shrink-0"
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