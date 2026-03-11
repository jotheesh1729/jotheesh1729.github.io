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
    <section id="publications" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <BookOpen size={32} className="text-gray-900" />
          <h2 className="text-4xl font-bold text-gray-900">Publications</h2>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card
              key={index}
              className="border-2 border-gray-200 hover:border-gray-900 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      {pub.authors}
                      {pub.supervisor && (
                        <span className="text-gray-500"> • Supervisor: {pub.supervisor}</span>
                      )}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {pub.institution} • {pub.year}
                    </p>
                    {pub.urn && (
                      <p className="text-sm text-gray-500">
                        URN: {pub.urn}
                      </p>
                    )}
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 transition-colors ml-4 flex-shrink-0"
                      aria-label="View publication"
                    >
                      <ExternalLink size={20} />
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