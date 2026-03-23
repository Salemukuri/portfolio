import React, { useEffect } from 'react';

const HeroSection: React.FC = () => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Only initialize observers and hover effects on desktop
    if (window.innerWidth >= 768) {
      // Intersection Observer for load-in animations
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('.animate-on-load').forEach((el) => {
        observer.observe(el);
      });

      // Interactive hover effects
      const designerHalf = document.querySelector('.designer-half') as HTMLElement;
      const coderHalf = document.querySelector('.coder-half') as HTMLElement;
      const leftColumn = document.querySelector('.left-column') as HTMLElement;
      const rightColumn = document.querySelector('.right-column') as HTMLElement;

      if (designerHalf && coderHalf && leftColumn && rightColumn) {
        const handleDesignerHover = () => {
          designerHalf.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
          designerHalf.style.zIndex = '3';
          coderHalf.style.clipPath = 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)';
          coderHalf.style.zIndex = '1';
          rightColumn.style.opacity = '0.3';
          leftColumn.style.opacity = '1';
        };

        const handleCoderHover = () => {
          coderHalf.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)';
          coderHalf.style.zIndex = '3';
          designerHalf.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
          designerHalf.style.zIndex = '1';
          leftColumn.style.opacity = '0.3';
          rightColumn.style.opacity = '1';
        };

        const resetState = () => {
          designerHalf.style.clipPath = 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)';
          designerHalf.style.zIndex = '2';
          coderHalf.style.clipPath = 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)';
          coderHalf.style.zIndex = '1';
          leftColumn.style.opacity = '1';
          rightColumn.style.opacity = '1';
        };

        // Image interactions
        designerHalf.addEventListener('mouseenter', handleDesignerHover);
        designerHalf.addEventListener('focus', handleDesignerHover);
        designerHalf.addEventListener('mouseleave', resetState);
        designerHalf.addEventListener('blur', resetState);

        coderHalf.addEventListener('mouseenter', handleCoderHover);
        coderHalf.addEventListener('focus', handleCoderHover);
        coderHalf.addEventListener('mouseleave', resetState);
        coderHalf.addEventListener('blur', resetState);

        // Text column interactions
        leftColumn.addEventListener('mouseenter', handleDesignerHover);
        leftColumn.addEventListener('focusin', handleDesignerHover);
        leftColumn.addEventListener('mouseleave', resetState);
        leftColumn.addEventListener('focusout', resetState);

        rightColumn.addEventListener('mouseenter', handleCoderHover);
        rightColumn.addEventListener('focusin', handleCoderHover);
        rightColumn.addEventListener('mouseleave', resetState);
        rightColumn.addEventListener('focusout', resetState);

        // Cleanup function
        return () => {
          designerHalf.removeEventListener('mouseenter', handleDesignerHover);
          designerHalf.removeEventListener('focus', handleDesignerHover);
          designerHalf.removeEventListener('mouseleave', resetState);
          designerHalf.removeEventListener('blur', resetState);
          coderHalf.removeEventListener('mouseenter', handleCoderHover);
          coderHalf.removeEventListener('focus', handleCoderHover);
          coderHalf.removeEventListener('mouseleave', resetState);
          coderHalf.removeEventListener('blur', resetState);
          leftColumn.removeEventListener('mouseenter', handleDesignerHover);
          leftColumn.removeEventListener('focusin', handleDesignerHover);
          leftColumn.removeEventListener('mouseleave', resetState);
          leftColumn.removeEventListener('focusout', resetState);
          rightColumn.removeEventListener('mouseenter', handleCoderHover);
          rightColumn.removeEventListener('focusin', handleCoderHover);
          rightColumn.removeEventListener('mouseleave', resetState);
          rightColumn.removeEventListener('focusout', resetState);
        };
      }
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-container {
          min-height: 80vh;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 3rem;
          padding-bottom: 0rem;
          position: relative;
        }

        .text-column {
          flex: 1;
          padding: 0 4rem;
          max-width: 350px;
          position: relative;
          z-index: 1;
          transition: opacity 0.6s ease-in-out;
          cursor: pointer;
        }

        .right-column {
          text-align: right;
        }

        .right-column .title:after {
          left: auto;
          right: 0;
        }

        .image-wrapper {
          position: relative;
          width: 400px;
          height: 450px;
          flex-shrink: 0;
          margin: 0 2rem;
          overflow: hidden;
          border-radius: 0px;
        }

        .split-image {
          position: absolute;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: clip-path 0.6s ease-in-out, z-index 0s;
        }

        .designer-half {
          background-image: url('/images/hero-product-designer.svg');
          clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
          z-index: 2;
        }

        .coder-half {
          background-image: url('/images/hero-product-owner.svg');
          clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
          z-index: 1;
        }

        .mobile-hero-image {
          display: none;
          width: 100%;
          height: auto;
        }

        .title {
          font-size: 36px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: 0.01em;
          margin-bottom: 1rem;
          color: #333333;
          position: relative;
          display: inline-block;
        }

        .title:after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #D6FD3A, #7CA300);
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .title:hover:after {
          width: 60%;
        }

        .subtitle {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #757575;
          margin-bottom: 1.5rem;
        }

        .description {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
          margin-bottom: 2rem;
        }

        .skill-item {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
        }

        .animate-on-load {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-in-out, transform 0.6s ease-in-out;
        }

        .animate-on-load.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .split-image:focus {
          outline: 2px solid #D6FD3A;
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .hero-container {
            flex-direction: column;
            padding: 0;
            min-height: auto;
          }

          .mobile-hero-image {
            display: block;
            width: 100%;
            height: auto;
          }

          .text-column,
          .image-wrapper,
          .split-image {
            display: none !important;
          }

          /* Keep scroll indicator visible */
          .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media (min-width: 769px) {
          .mobile-hero-image {
            display: none !important;
          }
        }
      `}</style>

      <section className="hero-container">
        {/* Mobile Hero Image (hidden on desktop) */}
        <img
          src="/images/mobile-hero.svg"
          alt="Salem Mukuri - Product Designer Portfolio showcasing UX/UI design and user research projects"
          className="mobile-hero-image"
          loading="eager"
        />

        {/* Desktop Content (hidden on mobile) */}
        <>
          {/* Left Text Column (Designer) */}
          <div className="text-column left-column animate-on-load">
            <div className="flex items-center">
              <h2 className="title">Product Designer</h2>
            </div>
            <p className="description"></p>
            <div className="hidden md:block">
              <div className="flex items-center skill-item">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7CA300' }}></div>
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center skill-item mt-2">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7CA300' }}></div>
                <span>Design Systems</span>
              </div>
              <div className="flex items-center skill-item mt-2">
                <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: '#7CA300' }}></div>
                <span>User Research</span>
              </div>
            </div>
          </div>

          {/* Split Image Container */}
          <div className="image-wrapper animate-on-load">
            <div
              className="split-image designer-half"
              tabIndex={0}
              role="button"
              aria-label="View Designer Profile"
            ></div>
            <div
              className="split-image coder-half"
              tabIndex={0}
              role="button"
              aria-label="View Product Owner Profile"
            ></div>
          </div>

          {/* Right Text Column (Product Owner) */}
          <div className="text-column right-column animate-on-load">
            <div className="flex items-center justify-end">
              <h2 className="title">Product Owner</h2>
            </div>
            <p className="description"></p>
            <div className="hidden md:block">
              <div className="flex items-center justify-end skill-item">
                <span>Product Strategy</span>
                <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#7CA300' }}></div>
              </div>
              <div className="flex items-center justify-end skill-item mt-2">
                <span>Agile Architect</span>
                <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#7CA300' }}></div>
              </div>
              <div className="flex items-center justify-end skill-item mt-2">
                <span>Risk Mitigation</span>
                <div className="w-2 h-2 rounded-full ml-3" style={{ backgroundColor: '#7CA300' }}></div>
              </div>
            </div>
          </div>
        </>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;