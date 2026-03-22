import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordModal from '../components/PasswordModal';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  isProtected?: boolean;
  password?: string;
}

const projects: Project[] = [
  {
    id: 'ja-career-connect',
    title: 'JAA Career Connect Alumni Platform',
    description: 'A comprehensive alumni networking platform designed to empower young professionals across Africa with career opportunities and mentorship.',
    image: 'https://i.imgur.com/8fxoygW.png',
    tags: ['UX Design', 'User Research', 'Dashboard Design'],
    category: 'Web App',
  },
  {
    id: 'philafun-mobile-app',
    title: 'PhilaFun Gamified Fundraising Application',
    description: 'A gamified mobile fundraising app that transforms philanthropy by valuing all forms of giving and building donor trust.',
    image: 'https://i.imgur.com/FvBMgFT.png',
    tags: ['Mobile Design', 'Gamification', 'Social Impact'],
    category: 'Mobile App',
  },
  {
    id: 'dq-corporate-website',
    title: 'DigitalQatalyst Corporate Website Overhaul',
    description: 'A full redesign of the DigitalQatalyst corporate website to reflect their digital transformation brand.',
    image: '/images/DQ Corp Web.png',
    tags: ['Web Design', 'Branding', 'UX Design'],
    category: 'Website',
  },
  {
    id: 'dfsa-suptech',
    title: 'Dubai Financial Services Authority SupTech Platform',
    description: 'A regulatory technology platform designed for financial supervision and compliance monitoring.',
    image: 'https://i.imgur.com/EcjztD5.png',
    tags: ['RegTech', 'Fintech', 'Dashboard Design'],
    category: 'Web App',
    isProtected: true,
    password: 'portfolio2024',
  },
];

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProtectedClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handlePasswordSuccess = () => {
    if (selectedProject) {
      navigate(`/case-study/${selectedProject.id}`, { state: { accessGranted: true } });
    }
  };

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
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #757575;
        }

        .project-card {
          transition: all 0.3s ease;
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .project-card:hover .project-title {
          color: #7CA300 !important;
        }

        .project-title {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #333333;
          transition: color 0.3s ease;
        }

        .category-label {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #757575;
        }

        .protected-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          backdrop-filter: blur(4px);
        }

        /* Moodboard section */
        .moodboard-section {
          background-color: #e8e0d5;
          background-image: url('/images/paper-texture.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
        }

        .moodboard-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(232, 224, 213, 0.85);
          pointer-events: none;
          z-index: 0;
        }

        .pin-card {
          background: #ffffff;
          padding: 12px 12px 40px 12px;
          box-shadow: 3px 4px 18px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.1);
          position: relative;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
          display: block;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .pin-card:nth-child(1) { transform: rotate(-1.5deg); }
        .pin-card:nth-child(2) { transform: rotate(1deg); }
        .pin-card:nth-child(3) { transform: rotate(-0.8deg); }
        .pin-card:nth-child(4) { transform: rotate(1.2deg); }

        .pin-card:hover {
          transform: rotate(0deg) translateY(-8px) scale(1.02) !important;
          box-shadow: 6px 12px 32px rgba(0,0,0,0.22);
          z-index: 10;
        }

        .pin-card:hover .pin-card-title {
          color: #7CA300;
        }

        /* Tape strip across top of card */
        .tape {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 28px;
          background: rgba(214,253,58,0.55);
          border-radius: 2px;
          z-index: 2;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        }

        .tape::after {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            90deg,
            transparent,
            transparent 4px,
            rgba(255,255,255,0.3) 4px,
            rgba(255,255,255,0.3) 5px
          );
          border-radius: 2px;
        }

        .pin-card-image {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
          display: block;
        }

        .pin-card-body {
          padding: 14px 6px 0 6px;
        }

        .pin-card-category {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #999999;
          margin-bottom: 6px;
        }

        .pin-card-title {
          font-size: 15px;
          font-weight: 500;
          line-height: 1.4;
          color: #333333;
          transition: color 0.3s ease;
        }

        .swatch {
          display: inline-block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-right: 5px;
          flex-shrink: 0;
        }

        .tag-row {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }

        .tag-pill {
          font-size: 11px;
          font-weight: 400;
          color: #555;
          display: flex;
          align-items: center;
          background: rgba(0,0,0,0.05);
          padding: 3px 8px;
          border-radius: 3px;
        }

        .moodboard-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 48px;
          padding: 60px 0 80px;
        }

        @media (max-width: 768px) {
          .page-title { font-size: 48px; }
          .intro-text { font-size: 20px; }
          .moodboard-grid {
            grid-template-columns: 1fr;
            gap: 56px;
            padding: 40px 0 60px;
          }
          .pin-card:nth-child(1),
          .pin-card:nth-child(2),
          .pin-card:nth-child(3),
          .pin-card:nth-child(4) { transform: rotate(0deg); }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .page-title { font-size: 72px; }
          .moodboard-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
      `}</style>

      <div className="pt-16 min-h-screen">
        {/* Header */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h1 className="page-title mb-4">portfolio.</h1>
                <p className="intro-text mb-6">Check out some of my latest product design case studies.</p>
                <p className="body-text">
                  I've led product design for millions of users across startups, agencies, global corporations and international banking institutions.
                </p>
              </div>
              <div className="hidden lg:block">
                <img
                  src="/images/Portfolioz top.png"
                  alt="Portfolio showcase"
                  className="w-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Moodboard Projects Section */}
        <section className="moodboard-section py-4" style={{ position: 'relative', overflow: 'hidden' }}>

          {/* Paintbrush stroke — thick oil paint smear, top left */}
          <svg
            style={{ position: 'absolute', top: '30px', left: '-10px', opacity: 0.22, pointerEvents: 'none', transform: 'rotate(-2deg)' }}
            width="500" height="140" viewBox="0 0 500 140" fill="none"
          >
            {/* Main paint body */}
            <path d="M 20 90 C 60 55, 130 105, 220 75 C 300 48, 380 95, 480 65" stroke="#7CA300" strokeWidth="52" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.9"/>
            {/* Slightly offset for paint thickness illusion */}
            <path d="M 22 85 C 65 52, 135 100, 225 72 C 305 46, 382 90, 478 62" stroke="#9DC400" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
            {/* Bristle streaks — lighter lines through the body */}
            <path d="M 30 78 C 80 50, 160 88, 240 65 C 320 44, 400 80, 470 58" stroke="#D6FD3A" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.6"/>
            <path d="M 35 88 C 85 60, 165 95, 245 72 C 325 52, 405 85, 472 65" stroke="#D6FD3A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4"/>
            <path d="M 28 95 C 75 68, 155 100, 235 78 C 315 58, 395 90, 468 70" stroke="#D6FD3A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.35"/>
            <path d="M 40 72 C 90 46, 170 82, 250 60 C 330 40, 410 75, 475 55" stroke="#D6FD3A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.3"/>
            {/* Ragged edge at the end */}
            <path d="M 460 60 C 472 55, 480 62, 488 58 C 492 56, 495 60, 490 64" stroke="#7CA300" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.5"/>
            <path d="M 455 68 C 468 63, 478 70, 485 66" stroke="#7CA300" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4"/>
            {/* Highlight streak — simulates wet paint sheen */}
            <path d="M 60 72 C 120 50, 200 78, 280 58 C 340 42, 400 68, 450 52" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" opacity="0.15"/>
          </svg>

          {/* Graffiti quotes — 3 UX mantras sprayed on the wall */}

          {/* "Don't Make Me Think" — top left, angled up */}
          <svg
            style={{ position: 'absolute', top: '2%', left: '3%', opacity: 0.22, pointerEvents: 'none', transform: 'rotate(-4deg)' }}
            width="340" height="80" viewBox="0 0 340 80" fill="none"
          >
            <filter id="roughen1">
              <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <ellipse cx="170" cy="40" rx="165" ry="32" fill="#333" opacity="0.07"/>
            <text x="10" y="54" fontFamily="'Arial Black', Impact, sans-serif" fontSize="36" fontWeight="900"
              fill="#333" stroke="#333" strokeWidth="1" filter="url(#roughen1)" letterSpacing="-1">
              Don't Make Me Think
            </text>
            <text x="10" y="54" fontFamily="'Arial Black', Impact, sans-serif" fontSize="36" fontWeight="900"
              fill="none" stroke="#D6FD3A" strokeWidth="1.5" opacity="0.5" transform="translate(2,2)" letterSpacing="-1">
              Don't Make Me Think
            </text>
          </svg>

          {/* "Test Early" — vertical, mid left, PleaseShowMeLove font */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '2%',
            transform: 'translateY(-50%) rotate(-90deg)',
            transformOrigin: 'center center',
            opacity: 0.26,
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              fontFamily: "'PleaseShowMeLove', cursive",
              fontSize: '52px',
              color: '#333',
              letterSpacing: '6px',
            }}>
              Test Early
            </span>
          </div>

          {/* "Pixel perfect is a myth" — text layer, crooked */}
          <svg
            style={{ position: 'absolute', top: '35%', right: '1%', opacity: 0.26, pointerEvents: 'none', transform: 'rotate(12deg) skewX(-8deg)' }}
            width="240" height="60" viewBox="0 0 240 60" fill="none"
          >
            <filter id="roughen4">
              <feTurbulence type="turbulence" baseFrequency="0.07" numOctaves="4" result="noise"/>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" xChannelSelector="R" yChannelSelector="G"/>
            </filter>
            <ellipse cx="120" cy="30" rx="118" ry="28" fill="#7CA300" opacity="0.1"/>
            <text x="4" y="46" fontFamily="'Arial Black', Impact, sans-serif" fontSize="28" fontWeight="900"
              fill="#7CA300" stroke="#7CA300" strokeWidth="4" filter="url(#roughen4)" letterSpacing="0">
              PIXEL PERFECT IS A MYTH
            </text>
            <text x="4" y="46" fontFamily="'Arial Black', Impact, sans-serif" fontSize="28" fontWeight="900"
              fill="#222" filter="url(#roughen4)" letterSpacing="0">
              PIXEL PERFECT IS A MYTH
            </text>
          </svg>

          {/* Drips — separate unrotated SVG so they fall straight down */}
          <svg
            style={{ position: 'absolute', top: 'calc(35% + 52px)', right: '1%', opacity: 0.26, pointerEvents: 'none' }}
            width="240" height="60" viewBox="0 0 240 60" fill="none"
          >
            <path d="M 8 0 C 8 8, 7 20, 6 32" stroke="#7CA300" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.75"/>
            <ellipse cx="6" cy="33" rx="3" ry="4.5" fill="#7CA300" opacity="0.65"/>

            <path d="M 22 0 C 22 6, 21 14, 21 22" stroke="#7CA300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
            <ellipse cx="21" cy="23" rx="2.5" ry="3.5" fill="#7CA300" opacity="0.55"/>

            <path d="M 36 0 C 36 12, 35 26, 34 40" stroke="#7CA300" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.8"/>
            <ellipse cx="34" cy="41" rx="3.5" ry="5" fill="#7CA300" opacity="0.7"/>

            <path d="M 50 0 C 50 7, 50 16, 49 24" stroke="#7CA300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
            <ellipse cx="49" cy="25" rx="2.5" ry="3" fill="#7CA300" opacity="0.55"/>

            <path d="M 63 0 C 63 14, 62 28, 61 44" stroke="#7CA300" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85"/>
            <ellipse cx="61" cy="45" rx="4" ry="5.5" fill="#7CA300" opacity="0.75"/>

            <path d="M 82 0 C 82 10, 81 22, 80 32" stroke="#7CA300" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.65"/>
            <ellipse cx="80" cy="33" rx="3" ry="4" fill="#7CA300" opacity="0.6"/>

            <path d="M 96 0 C 96 6, 96 14, 95 20" stroke="#7CA300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.55"/>
            <ellipse cx="95" cy="21" rx="2.5" ry="3" fill="#7CA300" opacity="0.5"/>

            <path d="M 108 0 C 108 12, 107 24, 106 38" stroke="#7CA300" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.75"/>
            <ellipse cx="106" cy="39" rx="3" ry="4.5" fill="#7CA300" opacity="0.65"/>

            <path d="M 122 0 C 122 8, 122 18, 121 26" stroke="#7CA300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
            <ellipse cx="121" cy="27" rx="2.5" ry="3.5" fill="#7CA300" opacity="0.55"/>

            <path d="M 152 0 C 152 7, 151 16, 150 24" stroke="#7CA300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
            <ellipse cx="150" cy="25" rx="2.5" ry="3" fill="#7CA300" opacity="0.55"/>

            <path d="M 166 0 C 166 12, 165 26, 164 42" stroke="#7CA300" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.8"/>
            <ellipse cx="164" cy="43" rx="3.5" ry="5" fill="#7CA300" opacity="0.7"/>

            <path d="M 182 0 C 182 9, 181 20, 180 30" stroke="#7CA300" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.65"/>
            <ellipse cx="180" cy="31" rx="3" ry="4" fill="#7CA300" opacity="0.6"/>

            <path d="M 198 0 C 198 14, 197 30, 196 46" stroke="#7CA300" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.85"/>
            <ellipse cx="196" cy="47" rx="4" ry="5.5" fill="#7CA300" opacity="0.75"/>

            <path d="M 212 0 C 212 8, 212 18, 211 26" stroke="#7CA300" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6"/>
            <ellipse cx="211" cy="27" rx="2.5" ry="3.5" fill="#7CA300" opacity="0.55"/>

            <path d="M 226 0 C 226 12, 225 26, 224 42" stroke="#7CA300" strokeWidth="4.5" strokeLinecap="round" fill="none" opacity="0.8"/>
            <ellipse cx="224" cy="43" rx="3.5" ry="5" fill="#7CA300" opacity="0.7"/>
          </svg>
          {/* "Friction is the enemy" — HTML text with Urban Decay font */}
          <div style={{
            position: 'absolute', top: '52%', left: '50%',
            transform: 'translateX(-50%) rotate(6deg)',
            opacity: 0.28, pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              fontFamily: "'YouMurderer', 'Arial Black', Impact, sans-serif",
              fontSize: '42px',
              fontWeight: 900,
              color: '#333',
              letterSpacing: '4px',
            }}>
              Friction is the enemy
            </span>
          </div>

          {/* "You are not your user" — bottom right */}
          <div style={{
            position: 'absolute', bottom: '22%', right: '8%',
            transform: 'rotate(-3deg)',
            opacity: 0.26, pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}>
            <span style={{
              fontFamily: "'UrbanDecay', 'Arial Black', Impact, sans-serif",
              fontSize: '36px',
              fontWeight: 900,
              color: '#333',
              letterSpacing: '4px',
            }}>
              You are not your user
            </span>
          </div>
          <svg
            style={{ position: 'absolute', bottom: '20px', right: '10px', opacity: 0.26, pointerEvents: 'none', transform: 'rotate(-6deg)' }}
            width="380" height="130" viewBox="0 0 380 130" fill="none"
          >
            {/* === D === */}
            <path d="M 10 20 C 8 18, 6 22, 8 40 C 9 58, 7 75, 10 90 C 12 100, 14 102, 18 100 C 30 98, 48 92, 56 78 C 64 64, 65 50, 58 36 C 52 24, 38 16, 24 16 C 18 15, 12 18, 10 20 Z" fill="#333" opacity="0.9"/>
            <path d="M 18 30 C 16 30, 15 45, 16 60 C 17 72, 18 82, 20 84 C 26 86, 38 80, 44 68 C 50 56, 50 44, 44 34 C 40 26, 30 24, 22 26 C 20 27, 18 28, 18 30 Z" fill="#e8e0d5" opacity="0.6"/>
            {/* D drip */}
            <path d="M 38 98 C 38 102, 37 110, 36 116 C 35 120, 36 122, 38 121 C 40 120, 41 116, 40 110 C 39 104, 39 98, 38 98 Z" fill="#333" opacity="0.7"/>

            {/* === E === */}
            <path d="M 70 18 C 66 16, 64 20, 65 38 C 66 58, 64 78, 66 96 C 67 103, 70 105, 74 104 C 86 103, 102 104, 108 102 C 113 100, 114 95, 110 92 C 106 89, 92 88, 82 88 C 80 88, 78 86, 78 84 C 78 80, 80 62, 82 60 C 84 58, 94 58, 100 57 C 106 56, 108 52, 106 48 C 104 44, 94 43, 84 43 C 80 43, 78 40, 78 36 C 78 32, 80 28, 84 27 C 92 25, 106 26, 110 24 C 114 22, 114 17, 110 15 C 104 13, 80 16, 70 18 Z" fill="#333" opacity="0.9"/>

            {/* === S === */}
            <path d="M 124 22 C 118 18, 114 24, 116 34 C 118 42, 128 48, 138 52 C 148 56, 154 62, 152 70 C 150 78, 140 84, 128 84 C 118 84, 112 80, 110 76 C 108 72, 110 68, 114 68 C 118 68, 122 72, 128 73 C 134 74, 140 72, 142 68 C 144 64, 140 58, 132 54 C 122 50, 114 44, 112 36 C 110 26, 116 16, 128 14 C 138 12, 148 16, 152 22 C 155 27, 153 33, 149 34 C 145 35, 141 31, 136 29 C 131 27, 126 24, 124 22 Z" fill="#333" opacity="0.9"/>
            {/* S drip */}
            <path d="M 130 84 C 130 90, 131 100, 130 108 C 129 114, 130 118, 132 117 C 134 116, 134 110, 133 103 C 132 96, 131 88, 130 84 Z" fill="#333" opacity="0.6"/>

            {/* === I === */}
            <path d="M 162 14 C 158 12, 154 16, 156 22 C 157 26, 162 28, 166 28 C 170 28, 174 26, 174 22 C 174 18, 170 14, 166 14 C 164 14, 162 14, 162 14 Z" fill="#333" opacity="0.9"/>
            <path d="M 160 36 C 158 34, 156 38, 157 55 C 158 72, 157 88, 159 98 C 160 104, 163 106, 166 105 C 169 104, 171 100, 170 90 C 169 76, 168 58, 168 44 C 168 38, 165 36, 162 36 C 161 36, 160 36, 160 36 Z" fill="#333" opacity="0.9"/>

            {/* === G === */}
            <path d="M 230 22 C 220 14, 206 14, 198 24 C 190 34, 188 50, 190 64 C 192 78, 200 90, 212 94 C 222 98, 234 96, 242 88 C 248 82, 250 74, 250 66 C 250 60, 248 56, 244 54 C 240 52, 232 52, 228 54 C 224 56, 222 60, 224 64 C 226 68, 232 68, 236 66 C 238 65, 238 68, 236 72 C 232 78, 224 80, 216 76 C 208 72, 204 62, 204 52 C 204 42, 208 32, 216 28 C 222 24, 230 26, 234 32 C 237 37, 235 43, 231 44 C 227 45, 224 42, 222 38 C 220 34, 222 28, 226 26 C 228 24, 230 22, 230 22 Z" fill="#333" opacity="0.9"/>

            {/* === N === */}
            <path d="M 258 18 C 255 16, 252 20, 253 38 C 254 58, 253 80, 255 96 C 256 103, 259 105, 262 104 C 265 103, 267 99, 268 90 C 269 78, 270 60, 272 50 C 274 42, 276 44, 280 54 C 284 66, 288 82, 290 94 C 292 102, 295 106, 298 105 C 301 104, 303 100, 303 88 C 303 72, 302 50, 302 34 C 302 24, 300 18, 297 17 C 294 16, 291 20, 290 30 C 289 40, 288 54, 286 62 C 284 68, 282 66, 279 56 C 276 46, 272 30, 270 22 C 268 16, 264 14, 260 16 C 259 17, 258 18, 258 18 Z" fill="#333" opacity="0.9"/>

            {/* Spray halo behind the whole word — mimics aerosol overspray */}
            <ellipse cx="185" cy="62" rx="178" ry="48" fill="#7CA300" opacity="0.06"/>

            {/* Outline glow — thick outer stroke for bubble effect */}
            <path d="M 10 20 C 8 18, 6 22, 8 40 C 9 58, 7 75, 10 90 C 12 100, 14 102, 18 100 C 30 98, 48 92, 56 78 C 64 64, 65 50, 58 36 C 52 24, 38 16, 24 16 C 18 15, 12 18, 10 20 Z" fill="none" stroke="#D6FD3A" strokeWidth="3" opacity="0.4"/>
            <path d="M 258 18 C 255 16, 252 20, 253 38 C 254 58, 253 80, 255 96 C 256 103, 259 105, 262 104 C 265 103, 267 99, 268 90 C 269 78, 270 60, 272 50 C 274 42, 276 44, 280 54 C 284 66, 288 82, 290 94 C 292 102, 295 106, 298 105 C 301 104, 303 100, 303 88 C 303 72, 302 50, 302 34 C 302 24, 300 18, 297 17 C 294 16, 291 20, 290 30 C 289 40, 288 54, 286 62 C 284 68, 282 66, 279 56 C 276 46, 272 30, 270 22 C 268 16, 264 14, 260 16 C 259 17, 258 18, 258 18 Z" fill="none" stroke="#D6FD3A" strokeWidth="3" opacity="0.4"/>
          </svg>

          {/* Small splatter dots — scattered */}
          <svg
            style={{ position: 'absolute', top: '30%', right: '8%', opacity: 0.28, pointerEvents: 'none' }}
            width="80" height="80" viewBox="0 0 80 80" fill="none"
          >
            <circle cx="10" cy="12" r="5" fill="#7CA300" />
            <circle cx="30" cy="5" r="3" fill="#D6FD3A" />
            <circle cx="50" cy="18" r="6" fill="#7CA300" />
            <circle cx="20" cy="35" r="2.5" fill="#333" />
            <circle cx="65" cy="8" r="4" fill="#D6FD3A" />
            <circle cx="40" cy="40" r="3" fill="#7CA300" />
            <circle cx="72" cy="30" r="2" fill="#333" />
          </svg>

          {/* Second paintbrush stroke — wider, middle of section, right side */}
          <svg
            style={{ position: 'absolute', top: '45%', right: '-30px', opacity: 0.16, pointerEvents: 'none', transform: 'rotate(3deg)' }}
            width="580" height="160" viewBox="0 0 580 160" fill="none"
          >
            {/* Main paint body — wider and chunkier */}
            <path d="M 15 100 C 70 55, 160 120, 280 80 C 380 46, 480 110, 565 72" stroke="#7CA300" strokeWidth="70" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.85"/>
            {/* Second layer for thickness */}
            <path d="M 18 95 C 75 52, 165 115, 285 76 C 385 44, 482 105, 563 68" stroke="#9DC400" strokeWidth="50" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.45"/>
            {/* Bristle streaks */}
            <path d="M 30 82 C 90 50, 180 100, 290 66 C 390 36, 480 90, 558 58" stroke="#D6FD3A" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.55"/>
            <path d="M 35 95 C 95 62, 185 108, 295 74 C 395 46, 482 98, 560 66" stroke="#D6FD3A" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
            <path d="M 28 108 C 85 76, 175 118, 285 84 C 385 54, 478 106, 556 76" stroke="#D6FD3A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.35"/>
            <path d="M 40 74 C 100 44, 190 90, 295 58 C 395 28, 482 80, 555 50" stroke="#D6FD3A" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.3"/>
            <path d="M 45 88 C 105 58, 195 100, 300 68 C 400 40, 484 88, 557 60" stroke="#D6FD3A" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.25"/>
            {/* Ragged trailing edge */}
            <path d="M 545 66 C 558 60, 568 68, 574 63 C 578 60, 578 66, 572 70" stroke="#7CA300" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.5"/>
            <path d="M 540 76 C 554 70, 564 78, 570 74" stroke="#7CA300" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.4"/>
            {/* Wet paint highlight */}
            <path d="M 70 82 C 160 54, 270 88, 370 62 C 450 42, 520 74, 555 56" stroke="white" strokeWidth="8" strokeLinecap="round" fill="none" opacity="0.12"/>
          </svg>
          <svg
            style={{ position: 'absolute', bottom: '60px', left: '5%', opacity: 0.1, pointerEvents: 'none', transform: 'rotate(6deg)' }}
            width="200" height="50" viewBox="0 0 200 50" fill="none"
          >
            <path
              d="M5 35 C 30 10, 70 45, 110 25 C 145 8, 175 38, 195 20"
              stroke="#333333" strokeWidth="12" strokeLinecap="round" fill="none"
            />
          </svg>

          {/* Wall crack — full diagonal fracture across entire section */}
          <svg
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.18, pointerEvents: 'none' }}
            viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none"
          >
            {/* Main crack — top-left to bottom-right */}
            <path d="M 80 0 L 140 80 L 110 160 L 200 260 L 170 360 L 280 460 L 240 560 L 360 660 L 320 750 L 400 800"
              stroke="#5a4a3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Branch 1 — splits off mid section */}
            <path d="M 200 260 L 320 300 L 420 340 L 500 380"
              stroke="#5a4a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Branch 2 — lower split */}
            <path d="M 280 460 L 380 490 L 460 520 L 560 540"
              stroke="#5a4a3a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Tiny hairline off branch 1 */}
            <path d="M 420 340 L 460 360 L 490 390"
              stroke="#5a4a3a" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Tiny hairline off branch 2 */}
            <path d="M 460 520 L 490 545 L 510 570"
              stroke="#5a4a3a" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
            {/* Highlight edge on main crack — gives plaster depth */}
            <path d="M 82 0 L 142 80 L 112 160 L 202 260 L 172 360 L 282 460 L 242 560 L 362 660 L 322 750 L 402 800"
              stroke="#c8b89a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
          </svg>

          {/* Stencil star — spray-painted, top right */}
          <svg
            style={{ position: 'absolute', top: '10%', right: '14%', opacity: 0.38, pointerEvents: 'none', transform: 'rotate(12deg)' }}
            width="90" height="90" viewBox="0 0 90 90" fill="none"
          >
            {/* Aerosol overspray halo */}
            <circle cx="45" cy="45" r="42" fill="#7CA300" opacity="0.2"/>
            {/* Star fill */}
            <polygon
              points="45,8 52,32 78,32 57,50 65,74 45,58 25,74 33,50 12,32 38,32"
              fill="#333333" opacity="0.9"
            />
            {/* Spray bleed offset — gives it that stencil overspray look */}
            <polygon
              points="45,8 52,32 78,32 57,50 65,74 45,58 25,74 33,50 12,32 38,32"
              fill="none" stroke="#7CA300" strokeWidth="2.5" opacity="0.45"
              transform="translate(2.5, 2.5)"
            />
          </svg>
          {/* Stencil star — spray-painted, bottom left */}
          <svg
            style={{ position: 'absolute', bottom: '12%', left: '6%', opacity: 0.35, pointerEvents: 'none', transform: 'rotate(-8deg)' }}
            width="70" height="70" viewBox="0 0 70 70" fill="none"
          >
            <circle cx="35" cy="35" r="32" fill="#333333" opacity="0.15"/>
            <polygon
              points="35,6 41,25 62,25 45,39 51,58 35,45 19,58 25,39 8,25 29,25"
              fill="#333333" opacity="0.9"
            />
            <polygon
              points="35,6 41,25 62,25 45,39 51,58 35,45 19,58 25,39 8,25 29,25"
              fill="none" stroke="#D6FD3A" strokeWidth="2" opacity="0.4"
              transform="translate(2, 2)"
            />
          </svg>
          {/* Stencil star — spray-painted, bottom centre */}
          <svg
            style={{ position: 'absolute', bottom: '12%', left: '50%', opacity: 0.35, pointerEvents: 'none', transform: 'rotate(-8deg)' }}
            width="50" height="50" viewBox="0 0 70 70" fill="none"
          >
            <circle cx="35" cy="35" r="32" fill="#333333" opacity="0.15"/>
            <polygon
              points="35,6 41,25 62,25 45,39 51,58 35,45 19,58 25,39 8,25 29,25"
              fill="#333333" opacity="0.9"
            />
            <polygon
              points="35,6 41,25 62,25 45,39 51,58 35,45 19,58 25,39 8,25 29,25"
              fill="none" stroke="#D6FD3A" strokeWidth="2" opacity="0.4"
              transform="translate(2, 2)"
            />
          </svg>
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="moodboard-grid">
              {projects.map((project) => {
                const isProtected = project.isProtected;

                const cardContent = (
                  <>
                    <div className="tape" />
                    <img
                      src={project.image}
                      alt={`${project.title} — ${project.description}`}
                      className="pin-card-image"
                      loading="lazy"
                    />
                    {isProtected && (
                      <div
                        style={{
                          position: 'absolute', top: 26, right: 10,
                          background: 'rgba(0,0,0,0.75)', color: 'white',
                          padding: '3px 8px', borderRadius: 10, fontSize: 11,
                          fontWeight: 500, letterSpacing: '0.05em', backdropFilter: 'blur(4px)'
                        }}
                      >
                        🔒 NDA
                      </div>
                    )}
                      <div className="pin-card-body">
                      <p className="pin-card-category">{project.category}</p>
                      <h3 className="pin-card-title">{project.title}</h3>
                    </div>
                  </>
                );

                return isProtected ? (
                  <button
                    key={project.id}
                    onClick={() => handleProtectedClick(project)}
                    className="pin-card"
                  >
                    {cardContent}
                  </button>
                ) : (
                  <Link
                    key={project.id}
                    to={`/case-study/${project.id}`}
                    className="pin-card"
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <PasswordModal
        isOpen={isModalOpen}
        onClose={() => { setIsModalOpen(false); setSelectedProject(null); }}
        onSuccess={handlePasswordSuccess}
        correctPassword={selectedProject?.password || ''}
        projectTitle={selectedProject?.title || ''}
      />
    </>
  );
};

export default PortfolioPage;
