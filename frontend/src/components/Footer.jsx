import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Jotheesh Reddy Kummathi. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Built for recruiters and collaborators in robotics and embedded systems
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;