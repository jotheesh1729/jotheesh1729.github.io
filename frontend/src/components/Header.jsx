import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
      style={{ backgroundColor: isScrolled ? '#2a2a2a' : 'transparent' }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-base font-semibold transition-colors"
            style={{ color: '#f5f5f5' }}
            onMouseEnter={(e) => e.target.style.color = '#d1d1d1'}
            onMouseLeave={(e) => e.target.style.color = '#f5f5f5'}
          >
            Jotheesh Reddy
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-medium transition-colors relative`}
                style={{ 
                  color: activeSection === item.id ? '#f5f5f5' : '#b0b0b0'
                }}
                onMouseEnter={(e) => e.target.style.color = '#f5f5f5'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.id ? '#f5f5f5' : '#b0b0b0'}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5" style={{ backgroundColor: '#808080' }} />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            style={{ color: '#f5f5f5' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-3" style={{ borderTop: '1px solid #555' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-xs font-medium transition-colors`}
                style={{
                  color: activeSection === item.id ? '#f5f5f5' : '#b0b0b0',
                  backgroundColor: activeSection === item.id ? '#444' : 'transparent'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;