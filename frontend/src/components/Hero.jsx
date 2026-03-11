import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Jotheesh Reddy Kummathi
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 font-medium mb-6">
              Robotics & Embedded Systems Engineer
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Master's student in Electrical Engineering at NYU with expertise in autonomous systems, 
              embedded design, and real-time robotics. Focused on developing intelligent solutions for 
              complex robotics challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="/assets/documents/resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="default"
                  className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2"
                >
                  <FileText className="mr-2" size={18} />
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
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2"
                >
                  <Github className="mr-2" size={18} />
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
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2"
                >
                  <Linkedin className="mr-2" size={18} />
                  LinkedIn
                </Button>
              </a>
              <a href="mailto:jotheeshreddykummathi@gmail.com">
                <Button
                  variant="outline"
                  className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-2"
                >
                  <Mail className="mr-2" size={18} />
                  Email
                </Button>
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="w-80 h-80 bg-gray-200 rounded-lg overflow-hidden border-4 border-gray-900">
              <img
                src="/assets/images/profile-photo.jpg"
                alt="Jotheesh Reddy Kummathi"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-bold">JRK</div>';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;