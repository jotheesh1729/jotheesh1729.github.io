import React from 'react';
import { Linkedin, Mail, FileText } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-12 px-6" style={{ backgroundColor: '#3a3a3a' }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Profile Photo */}
          <div className="order-1 md:order-1 flex justify-center">
            <div className="w-48 h-48 bg-gray-600 rounded-md overflow-hidden border-2" style={{ borderColor: '#666' }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/profile-photo.jpg`}
                alt="Jotheesh Reddy Kummathi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-semibold" style="color: #888">JRK</div>';
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2 md:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#f5f5f5' }}>
              Jotheesh Reddy Kummathi
            </h1>
            <p className="text-base font-medium mb-4" style={{ color: '#d1d1d1' }}>
              Robotics & Embedded Systems Engineer
            </p>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: '#b8b8b8' }}>
              Master's student in Electrical Engineering at New York University with expertise in autonomous systems, 
              embedded design, and real-time robotics. Specialized in developing intelligent control systems, 
              state estimation algorithms, and hardware-software integration for complex robotics applications. 
              Experienced in reinforcement learning for locomotion, multi-agent coordination, and embedded IoT systems. 
              Currently working as Head Teaching Assistant for Real-Time Embedded Systems and Graduate Research Assistant 
              at the Agile Robotics and Perception Lab.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-2">
              <a
                href={`${process.env.PUBLIC_URL}/assets/documents/resume.pdf`}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="px-4 py-1.5 text-xs transition-colors"
                  style={{ backgroundColor: '#555', color: '#f5f5f5' }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#666'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#555'}
                >
                  <FileText className="mr-1.5" size={14} />
                  Resume
                </Button>
              </a>
              <a
                href="https://github.com/jotheesh1729"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="px-4 py-1.5 text-xs transition-colors"
                  style={{ borderColor: '#666', color: '#d1d1d1', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#555';
                    e.target.style.color = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#d1d1d1';
                  }}
                >
                  <FaGithub className="mr-1.5" size={14} />
                  GitHub
                </Button>
              </a>
              <a
                href="https://linkedin.com/in/jotheesh1729"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="px-4 py-1.5 text-xs transition-colors"
                  style={{ borderColor: '#666', color: '#d1d1d1', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#555';
                    e.target.style.color = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#d1d1d1';
                  }}
                >
                  <Linkedin className="mr-1.5" size={14} />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:jotheeshreddykummathi@gmail.com">
                <Button
                  variant="outline"
                  className="px-4 py-1.5 text-xs transition-colors"
                  style={{ borderColor: '#666', color: '#d1d1d1', backgroundColor: 'transparent' }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#555';
                    e.target.style.color = '#f5f5f5';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'transparent';
                    e.target.style.color = '#d1d1d1';
                  }}
                >
                  <Mail className="mr-1.5" size={14} />
                  Email
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;