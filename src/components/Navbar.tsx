import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Download, Menu, X, User } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to top when navigating to a new page
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, [location.pathname]);

  // Handle scroll behavior for showing/hiding navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navigate home first, then scroll
      navigate('/', { state: { scrollTo: sectionId } });
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleBlogClick = () => {
    window.open('https://medium.com/@salemukuri', '_blank');
    setIsMenuOpen(false);
  };

  const handleDownloadCV = () => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = '/Salem_Mukuri_ProductDesigner_CV.pdf'; // Path to your CV file in public folder
  link.download = 'Salem_Mukuri_ProductDesigner_CV.pdf'; // The filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const navLinks = [
    { name: 'Portfolio', to: '/portfolio' },
    { name: 'About', to: '/about' },
    { name: 'Blog', action: handleBlogClick },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <nav 
      className={`bg-primary text-white shadow-lg fixed w-full transition-transform duration-300 ease-in-out z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
  to="/" 
  className="flex items-center h-full py-2 hover:opacity-70 transition-opacity duration-300"
  onClick={() => window.scrollTo(0, 0)}
>
  <img
    src="/images/salem-portfolio-logo.svg"
    alt="Salem Mukuri - Product Designer Logo"
    className="h-full max-h-10 md:max-h-12 object-contain"
    loading="eager"
  />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className={`text-p hover:text-accent transition-colors duration-300 ${
                    location.pathname === link.to ? 'text-accent' : ''
                  }`}
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden border-t border-gray-700 transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.to ? (
                <Link
                  key={link.name}
                  to={link.to}
                  className="block px-3 py-2 text-p hover:text-accent transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    link.action();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-p hover:text-accent transition-colors duration-300"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;