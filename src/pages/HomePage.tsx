import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';

const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // This handles scrolling when coming from other pages
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
    
    // This handles direct links like yourwebsite.com/#portfolio
    else if (window.location.hash) {
      setTimeout(() => {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  }, [location.state]);

  return (
    <div className="pt-16">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="portfolio">
        <PortfolioSection />
      </section>
    </div>
  );
};

export default HomePage;