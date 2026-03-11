import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6" style={{ backgroundColor: '#333333' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold mb-3" style={{ color: '#f5f5f5' }}>Get In Touch</h2>
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#b8b8b8' }}>
            I'm currently seeking opportunities in robotics, autonomous systems, and embedded engineering. 
            Feel free to reach out if you'd like to collaborate or discuss potential roles.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <a
            href="mailto:jotheeshreddykummathi@gmail.com"
            className="flex flex-col items-center justify-center p-4 border rounded-md transition-all duration-300 group"
            style={{ borderColor: '#555' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#777'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#555'}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors"
              style={{ backgroundColor: '#444' }}
            >
              <Mail size={18} style={{ color: '#d1d1d1' }} />
            </div>
            <span className="text-xs font-medium" style={{ color: '#f5f5f5' }}>Email</span>
            <span className="text-xs mt-1 text-center break-all" style={{ color: '#999' }}>jotheeshreddykummathi@gmail.com</span>
          </a>

          <a
            href="https://github.com/jotheesh1729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 border rounded-md transition-all duration-300 group"
            style={{ borderColor: '#555' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#777'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#555'}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors"
              style={{ backgroundColor: '#444' }}
            >
              <Github size={18} style={{ color: '#d1d1d1' }} />
            </div>
            <span className="text-xs font-medium" style={{ color: '#f5f5f5' }}>GitHub</span>
            <span className="text-xs mt-1" style={{ color: '#999' }}>jotheesh1729</span>
          </a>

          <a
            href="https://linkedin.com/in/jotheesh1729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 border rounded-md transition-all duration-300 group"
            style={{ borderColor: '#555' }}
            onMouseEnter={(e) => e.currentTarget.style.borderColor = '#777'}
            onMouseLeave={(e) => e.currentTarget.style.borderColor = '#555'}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-2 transition-colors"
              style={{ backgroundColor: '#444' }}
            >
              <Linkedin size={18} style={{ color: '#d1d1d1' }} />
            </div>
            <span className="text-xs font-medium" style={{ color: '#f5f5f5' }}>LinkedIn</span>
            <span className="text-xs mt-1" style={{ color: '#999' }}>jotheesh1729</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;