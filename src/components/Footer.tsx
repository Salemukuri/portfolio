import React from 'react';
import { Linkedin, Instagram, ChevronUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Smooth scroll to section (works for Portfolio link)
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId }, replace: true });
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Social links data
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/salemukuri/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/salemukuri/', label: 'Instagram' },
  ];

  // Navigation links
  const navLinks = [
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'About', to: '/about' },
    { name: 'Blog', action: () => window.open('https://medium.com/@salemukuri', '_blank') },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <footer className="bg-black text-white py-12 relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                  w-24 h-12 bg-black rounded-t-full flex items-center justify-center
                  transition-all duration-300 hover:-translate-y-[70%] group
            outline-none focus:outline-none active:outline-none" // Added outline-none states
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-white transition-colors duration-300 group-hover:text-accent" />
      </button>

      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-p mb-6 md:mb-0">© 2026 Salem Mukuri Wasike</p>
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-6 md:mb-0">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-p hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-p hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
          
          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;