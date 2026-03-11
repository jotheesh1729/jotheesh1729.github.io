import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm currently seeking opportunities in robotics, autonomous systems, and embedded engineering. 
            Feel free to reach out if you'd like to collaborate or discuss potential roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <a
            href="mailto:jotheeshreddykummathi@gmail.com"
            className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
              <Mail size={24} className="text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-900">Email</span>
            <span className="text-xs text-gray-500 mt-1 text-center break-all">jotheeshreddykummathi@gmail.com</span>
          </a>

          <a
            href="tel:+13472471408"
            className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
              <Phone size={24} className="text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-900">Phone</span>
            <span className="text-xs text-gray-500 mt-1">+1 347-247-1408</span>
          </a>

          <a
            href="https://github.com/jotheesh1729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
              <Github size={24} className="text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-900">GitHub</span>
            <span className="text-xs text-gray-500 mt-1">jotheesh1729</span>
          </a>

          <a
            href="https://linkedin.com/in/jotheesh1729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-6 border-2 border-gray-200 rounded-lg hover:border-gray-900 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-colors">
              <Linkedin size={24} className="text-gray-900 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm font-medium text-gray-900">LinkedIn</span>
            <span className="text-xs text-gray-500 mt-1">jotheesh1729</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;