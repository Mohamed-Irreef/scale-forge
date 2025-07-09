
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
    // Smooth scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  const handleGetQuote = () => {
    navigate('/contact');
    setIsOpen(false);
    // Smooth scroll to top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-sf-black/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pr-10 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Enhanced Logo */}
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-sf-primary-red to-red-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-red-500/50">
                <Zap className="text-white h-6 w-6 animate-pulse" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-poppins text-xl font-bold text-white group-hover:text-sf-primary-red transition-colors">
                Scale Forge
              </span>
              <span className="text-xs text-sf-text-muted -mt-1">Digital Solutions</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                className={`font-medium transition-all duration-200 relative group py-2 ${
                  isActive(item.path)
                    ? 'text-sf-primary-red'
                    : 'text-white hover:text-sf-primary-red'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sf-primary-red transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button 
              onClick={handleGetQuote}
              className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-6 py-3 rounded-full transition-all duration-300 hover:sf-glow transform hover:scale-105"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-sf-primary-red transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-sf-dark-card/95 backdrop-blur-md rounded-lg mt-4 p-6 animate-fade-in">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-medium transition-colors duration-200 py-3 text-left ${
                    isActive(item.path)
                      ? 'text-sf-primary-red'
                      : 'text-white hover:text-sf-primary-red'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button 
                onClick={handleGetQuote}
                className="bg-sf-primary-red hover:bg-sf-red-hover text-white w-full mt-4 py-3"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
