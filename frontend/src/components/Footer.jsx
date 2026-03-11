import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 px-6" style={{ backgroundColor: '#2a2a2a' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-xs" style={{ color: '#888' }}>
            © {currentYear} Jotheesh Reddy Kummathi. All rights reserved.
          </p>
          <p className="text-xs mt-1" style={{ color: '#666' }}>
            Built for recruiters and collaborators in robotics and embedded systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;