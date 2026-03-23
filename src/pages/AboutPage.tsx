import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const galleryImages = [
    '/images/about-salem-portrait.jpg',
    '/images/about-salem-golf.jpg',
    '/images/about-painting1.jpg',
    '/images/about-painting2.jpg',
    '/images/about-painting3.jpg',
    '/images/about-painting4.jpg',
  ];

  const randomFacts = [
    "I drink a lot of tea",
    "I paint, sometimes",
    "Gardening is my zen time",
    "I'm a bit of a clean freak",
    "I want to live on Pandora",
    "I'm obsessed with vintage soda cans",
  ];

  const skills = [
    { name: 'Tea drinking', percentage: 80, color: 'bg-teal-400' },
    { name: 'Product Own', percentage: 98, color: 'bg-pink-300' },
    { name: 'UX/UI', percentage: 99, color: 'bg-yellow-400' },
    { name: 'Gardening', percentage: 75, color: 'bg-amber-500' },
    { name: 'Vibe Coding', percentage: 85, color: 'bg-red-400' },
  ];

  const skillsRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(skills.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
          // Tick up each percentage counter
          skills.forEach((skill, i) => {
            const duration = 1200;
            const steps = 60;
            const increment = skill.percentage / steps;
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= skill.percentage) {
                current = skill.percentage;
                clearInterval(timer);
              }
              setDisplayValues(prev => {
                const next = [...prev];
                next[i] = Math.round(current);
                return next;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <>
      <style>{`
        .page-title {
          font-size: 96px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #333333;
        }

        .intro-text {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #757575;
        }

        .body-text {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
        }

        .section-heading {
          font-size: 36px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: 0.01em;
          color: #333333;
        }

        .skills-heading {
          font-size: 48px;
          font-weight: 300;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #757575;
        }

        .link-text {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
          text-decoration: underline;
          transition: color 0.3s ease;
        }

        .link-text:hover {
          color: #7CA300;
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 48px;
          }
          
          .intro-text {
            font-size: 20px;
          }
          
          .skills-heading {
            font-size: 36px;
          }

          /* Mobile spacing improvements */
          section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .page-title {
            font-size: 72px;
          }
        }
      `}</style>

      <div className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              <div>
                <h1 className="page-title mb-8 leading-none">
                  about.
                </h1>
                <div className="space-y-6 leading-relaxed max-w-lg">
                  <p className="intro-text">
                    I am Salem Mukuri, a product designer.
                  </p>
                  <p className="body-text">
                    Since 2020, I've enjoyed turning complex problems into simple, 
                    beautiful and intuitive designs. When I'm not pushing pixels, you'll 
                    find me cooking, gardening or working out in the park.
                  </p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <img
                    src={galleryImages[selectedImage]}
                    alt="Salem Mukuri"
                    className="w-80 h-96 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

           {/* Gallery Section */}
<div className="mt-16">
  <div className="bg-white rounded-2xl p-4 sm:p-8 shadow-sm">
    <div className="flex flex-wrap justify-between gap-2 sm:gap-4">
      {galleryImages.map((image, index) => (
        <button
          key={index}
          onClick={() => setSelectedImage(index)}
          className={`w-[28%] sm:w-[15%] h-24 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 ${
            selectedImage === index 
              ? 'ring-3 ring-black shadow-lg' 
              : 'hover:shadow-md'
          }`}
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  </div>
</div>
              </div>
        </section>

       {/* Random Facts Section */}
<section className="py-20 bg-white">
  <div className="flex justify-center">
    <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text - Always first on mobile */}
        <div className="order-1">
          <h2 className="section-heading mb-8">Random facts</h2>
          <ul className="space-y-4 inline-block text-left w-full">
            {randomFacts.map((fact, index) => (
              <li key={index} className="flex items-center space-x-3">
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0" 
                  style={{ backgroundColor: '#7CA300' }}
                />
                <p className="body-text">{fact}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image - Always second on mobile */}
        <div className="order-2 flex justify-center">
          <img
            src="/images/about-vintage-soda-cans.png"
            alt="Vintage soda cans"
            className="w-full h-80 object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Skills Section - Hidden on mobile */}
        <section className="py-20 bg-gray-50 hidden lg:block">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="flex justify-end mb-8">
              <h2 className="skills-heading">My skills</h2>
            </div>
            
            <div className="relative flex justify-center" ref={skillsRef}>
              {/* Y-axis labels */}
              <div className="absolute left-2 top-0 h-80 flex flex-col justify-between text-gray-400" style={{ fontSize: '18px' }}>
                <span>Jedi</span>
                <span>Ninja</span>
                <span>Geek</span>
                <span>Newbie</span>
              </div>
              
              {/* Chart container */}
              <div className="flex items-end justify-center space-x-6 h-80 ml-32">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <div className="relative flex flex-col justify-end h-72 w-36">
                      <div
                        className={`${skill.color} rounded-t-lg flex flex-col items-center justify-end pb-6 px-4`}
                        style={{
                          height: animated ? `${(skill.percentage / 100) * 100}%` : '0%',
                          transition: `height 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 120}ms`,
                        }}
                      >
                        <div className="text-white text-center">
                          <div className="text-5xl font-light mb-1">{displayValues[index]}</div>
                          <div className="text-xl font-light">%</div>
                        </div>
                        <div className="text-white font-medium text-sm mt-6 text-center leading-tight">
                          {skill.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === MY STORY SECTION (Text Left, Image Right - same on all screens) */}
<section className="py-20 lg:bg-white md:bg-gray-50">
  <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Text - Left on all screens */}
      <div className="order-1">
        <h2 className="section-heading mb-6">My story</h2>
        <p className="body-text mb-8">
          Ever wondered how an electrical engineer ended up designing user experiences? Here's my story, how I transitioned into design, grew as a product designer and owner, and learned what truly makes users tick. Plus, sneak peeks of projects that shaped my journey.
        </p>
        <Link 
          to="/my-story"
          className="link-text"
        >
          Read my story
        </Link>
      </div>

      {/* Image - Right on all screens */}
      <div className="order-2">
        <img
          src="/images/about-my-story.png"
          alt="Person working"
          className="w-full object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

{/* === DESIGN SYSTEM SECTION (Alternating layout - text right on desktop) */}
<section className="py-20 lg:bg-white md:bg-gray-50">
  <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Image - Left on desktop, second on mobile */}
      <div className="order-2 lg:order-1">
        <img
          src="/images/about-design-system.jpg"
          alt="Design System"
          className="w-full object-cover rounded-lg"
        />
      </div>

      {/* Text - Right on desktop, first on mobile */}
      <div className="order-1 lg:order-2">
        <h2 className="section-heading mb-6">My design system</h2>
        <p className="body-text mb-8">
          I've studied hundreds of design systems over the years, focusing on their impact on product scalability. I wanted to share what I've learned by creating a lean and powerful Figma design system that's intuitive, accessible, and beautiful.
        </p>

        <a 
          href="https://www.figma.com/design/vz9VAEDwndppiMImwESAGQ/My-Design-System?node-id=3-0&t=QDdM56bz3HSzs7tf-1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="link-text inline-flex items-center"
        >
          View the design system
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </div>
</section>
        
      </div>
    </>
  );
};

export default AboutPage;