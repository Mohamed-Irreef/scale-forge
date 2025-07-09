
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Website Development",
    "App Development", 
    "Social Media Marketing",
    "Graphic Design",
    "WhatsApp Automation",
    "E-Commerce Setup"
  ];

  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" }
  ];

  const socialLinks = [
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://www.facebook.com/share/155z1vVQjdw/",
      color: "hover:text-blue-500"
    },
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://www.instagram.com/scale_forge_digital_marketing?igsh=dWdjZTZybnNyc2lk",
      color: "hover:text-pink-500"
    },
    { 
      name: "LinkedIn", 
      icon: Linkedin, 
      url: "https://linkedin.com/company/scaleforge",
      color: "hover:text-blue-600"
    },
    { 
      name: "Twitter", 
      icon: Twitter, 
      url: "https://x.com/Scale_Forge",
      color: "hover:text-blue-400"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://www.youtube.com/@ScaleForge",
      color: "hover:text-red-500"
    }
  ];

  return (
    <footer className="bg-sf-black border-t border-sf-divider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-sf-primary-red rounded-md flex items-center justify-center hover-lift">
                <span className="text-white font-bold text-lg">SF</span>
              </div>
              <span className="font-poppins text-xl font-bold text-white">Scale Forge</span>
            </div>
            <p className="text-sf-text-muted mb-6 leading-relaxed">
              Scale Your Brand. Forge Your Success. Professional digital marketing solutions 
              to transform your business and accelerate growth.
            </p>
            
            {/* Enhanced Social Links */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sf-text-muted ${social.color} transition-colors p-2 rounded-full border border-sf-divider hover:border-sf-primary-red hover-lift group`}
                      aria-label={social.name}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
              
              {/* Social Stats */}
              <div className="text-xs text-sf-text-muted space-y-1">
                <p>🔥 1K+ Followers on Instagram</p>
                <p>💼 500+ Connections on LinkedIn</p>
                <p>🎥 50+ Videos on YouTube</p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to="/services" 
                    className="text-sf-text-muted hover:text-sf-primary-red transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-sf-text-muted hover:text-sf-primary-red transition-colors flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a href="tel:+919361757753" className="flex items-center space-x-3 text-sf-text-muted hover:text-sf-primary-red transition-colors group">
                <Phone className="text-sf-primary-red group-hover:scale-110 transition-transform" size={18} />
                <span>+91 9361757753</span>
              </a>
              <a href="mailto:hello@scaleforge.in" className="flex items-center space-x-3 text-sf-text-muted hover:text-sf-primary-red transition-colors group">
                <Mail className="text-sf-primary-red group-hover:scale-110 transition-transform" size={18} />
                <span>scaleforge.services@gmail.com</span>
              </a>
              <div className="flex items-center space-x-3 text-sf-text-muted">
                <MapPin className="text-sf-primary-red" size={18} />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
              <a href="https://wa.me/919361757753" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 text-sf-text-muted hover:text-green-500 transition-colors group">
                <MessageCircle className="text-green-500 group-hover:scale-110 transition-transform" size={18} />
                <span>WhatsApp: +91 9361757753</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <Link 
                to="/contact"
                className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-6 py-2 rounded-full text-sm transition-all duration-300 hover:sf-glow inline-block hover-lift"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Newsletter Signup */}
        <div className="bg-sf-dark-card rounded-xl p-6 mb-8 border border-sf-divider hover:border-sf-primary-red/50 transition-colors">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="font-poppins text-xl font-semibold text-white mb-2 flex items-center">
                📧 Stay Updated with Digital Marketing Tips
              </h3>
              <p className="text-sf-text-muted">
                Get weekly insights, case studies, and exclusive offers delivered to your inbox.
              </p>
              <div className="text-xs text-sf-text-muted mt-2">
                🎯 Join 2,000+ subscribers • 📈 Weekly case studies • 🚀 Exclusive tips
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-sf-black border border-sf-divider text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-sf-primary-red flex-1 md:w-64 transition-colors"
              />
              <button className="bg-sf-primary-red hover:bg-sf-red-hover text-white px-6 py-2 rounded-r-full transition-colors hover-lift">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sf-divider pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sf-text-muted text-sm mb-4 md:mb-0 flex items-center">
              © {currentYear} Scale Forge. All rights reserved. | Designed & Developed By Mohamed Irreef S from Scale Forge
              <span className="ml-2">🇮🇳</span>
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-sf-text-muted hover:text-sf-primary-red transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sf-text-muted hover:text-sf-primary-red transition-colors">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-sf-text-muted hover:text-sf-primary-red transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
