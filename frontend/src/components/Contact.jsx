import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 px-6 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">Get In Touch</h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            I'm currently seeking opportunities in robotics, autonomous systems, and embedded engineering. 
            Feel free to reach out if you'd like to collaborate or discuss potential roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <a
            href="mailto:jotheeshreddykummathi@gmail.com"
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:border-gray-400 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors">
              <Mail size={18} className="text-gray-600 transition-colors" />
            </div>
            <span className="text-xs font-medium text-gray-700">Email</span>
            <span className="text-xs text-gray-500 mt-1 text-center break-all">jotheeshreddykummathi@gmail.com</span>
          </a>

          <a
            href="tel:+13472471408"
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:border-gray-400 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors">
              <Phone size={18} className="text-gray-600 transition-colors" />
            </div>
            <span className="text-xs font-medium text-gray-700">Phone</span>
            <span className="text-xs text-gray-500 mt-1">+1 347-247-1408</span>
          </a>

          <a
            href="https://github.com/jotheesh1729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:border-gray-400 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors">
              <Github size={18} className="text-gray-600 transition-colors" />
            </div>
            <span className="text-xs font-medium text-gray-700">GitHub</span>
            <span className="text-xs text-gray-500 mt-1">jotheesh1729</span>
          </a>

          <a
            href="https://linkedin.com/in/jotheesh1729"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md hover:border-gray-400 transition-all duration-300 group"
          >
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mb-2 group-hover:bg-gray-300 transition-colors">
              <Linkedin size={18} className="text-gray-600 transition-colors" />
            </div>
            <span className="text-xs font-medium text-gray-700">LinkedIn</span>
            <span className="text-xs text-gray-500 mt-1">jotheesh1729</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;