import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-12 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Profile Photo */}
          <div className="order-1 md:order-1 flex justify-center">
            <div className="w-48 h-48 bg-gray-200 rounded-md overflow-hidden border-2 border-gray-400">
              <img
                src="/assets/images/profile-photo.jpg"
                alt="Jotheesh Reddy Kummathi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-4xl font-semibold">JRK</div>';
                }}
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-2 md:order-2 md:col-span-2">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
              Jotheesh Reddy Kummathi
            </h1>
            <p className="text-base text-gray-600 font-medium mb-4">
              Robotics & Embedded Systems Engineer
            </p>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
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
                href="/assets/documents/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-1.5 text-xs"
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
                  className="border-gray-400 text-gray-600 hover:bg-gray-200 px-4 py-1.5 text-xs"
                >
                  <Github className="mr-1.5" size={14} />
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
                  className="border-gray-400 text-gray-600 hover:bg-gray-200 px-4 py-1.5 text-xs"
                >
                  <Linkedin className="mr-1.5" size={14} />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:jotheeshreddykummathi@gmail.com">
                <Button
                  variant="outline"
                  className="border-gray-400 text-gray-600 hover:bg-gray-200 px-4 py-1.5 text-xs"
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