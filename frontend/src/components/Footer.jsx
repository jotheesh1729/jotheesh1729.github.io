import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-gray-300 py-6 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-xs text-gray-400">
            © {currentYear} Jotheesh Reddy Kummathi. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Built for recruiters and collaborators in robotics and embedded systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;