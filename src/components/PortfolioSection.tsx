import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import PasswordModal from './PasswordModal';

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

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'ja-career-connect',
      title: 'JAA Career Connect Alumni Platform',
      description: 'A comprehensive alumni networking platform designed to empower young professionals across Africa with career opportunities and mentorship.',
      image: '/images/thumbnail-jaa-connect.svg',
      tags: ['UX Design', 'User Research', 'Dashboard Design'],
      category: 'Web App'
    },
    {
      id: 'philafun-mobile-app',
      title: 'PhilaFun Gamified Fundraising Application',
      description: 'A gamified mobile fundraising app that transforms philanthropy by valuing all forms of giving and building donor trust.',
      image: '/images/thumbnail-philafun.svg',
      tags: ['Mobile Design', 'Gamification', 'Social Impact'],
      category: 'Mobile App'
    },
    {
      id: 'dfsa-suptech',
      title: 'Dubai Financial Services Authority SupTech Platform',
      description: 'A regulatory technology platform designed for financial supervision and compliance monitoring.',
      image: '/images/thumbnail-dfsa.svg',
      tags: ['RegTech', 'Fintech', 'Dashboard Design'],
      category: 'Web App',
      isProtected: true,
      password: 'portfolio2024'
    }
  ];

  const handleProtectedProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handlePasswordSuccess = () => {
    if (selectedProject) {
      navigate(`/case-study/${selectedProject.id}`, {
        state: { accessGranted: true }
      });
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <style>{`
        .project-card {
          transition: all 0.3s ease;
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
          background-color: #ffffff;
        }

        .project-card:hover .project-title {
          color: #7CA300 !important;
        }

        .chevron-icon {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
        }

        .project-card:hover .chevron-icon {
          opacity: 1;
          transform: translateX(0);
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

        .heading-with-lines {
          position: relative;
          display: inline-block;
          padding: 0 4rem;
        }

        .heading-with-lines::before,
        .heading-with-lines::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 80px;
          height: 1px;
          background-color: #9CA3AF;
        }

        .heading-with-lines::before {
          left: 0;
        }

        .heading-with-lines::after {
          right: 0;
        }

        @media (max-width: 768px) {
          .heading-with-lines {
            padding: 0 2.5rem;
          }
          
          .heading-with-lines::before,
          .heading-with-lines::after {
            width: 50px;
          }
        }

        .section-heading {
          font-size: 36px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: 0.01em;
          color: #333333;
        }

        .category-label {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #757575;
        }

        .project-title {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #333333;
          transition: color 0.3s ease;
        }
      `}</style>

      <section id="portfolio" className="py-20 bg-neutral">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
         
          <div className="mb-14">
            <div className="flex items-center mb-8">
              <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                SOME OF MY LATEST WORK
              </div>
              <div className="flex-1 h-px bg-gray-300"></div>
              <Link
                to="/portfolio"
                style={{
                  fontSize: '16px',
                  fontWeight: 300,
                  letterSpacing: '0.06em',
                  color: '#333333',
                  textDecoration: 'none',
                  paddingBottom: '2px',
                  marginLeft: '16px',
                  flexShrink: 0,
                  transition: 'color 0.3s ease, border-color 0.3s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#7CA300';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#333333';
                }}
              >
                See More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const CardComponent = project.isProtected ? 'button' : Link;
              const cardProps = project.isProtected 
                ? { 
                    onClick: () => handleProtectedProjectClick(project),
                    type: 'button' as const
                  }
                : { 
                    to: `/case-study/${project.id}` 
                  };

              return (
                <CardComponent
                  key={project.id}
                  {...cardProps}
                  className="project-card bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg relative"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.description}`}
                      className="w-full h-48 object-cover rounded-t-lg"
                      loading="lazy"
                    />
                    {project.isProtected && (
                      <div className="protected-badge">
                        🔒 NDA
                      </div>
                    )}
                  </div>
                  <div className="p-6 text-left">
                    {/* Label and Chevron */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="category-label">{project.category}</span>
                    {/*  < ChevronRight className="chevron-icon w-5 h-5 text-gray-200" /> */}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>

        {/* Password Modal */}
        <PasswordModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSuccess={handlePasswordSuccess}
          correctPassword={selectedProject?.password || ''}
          projectTitle={selectedProject?.title || ''}
        />
      </section>
    </>
  );
};

export default PortfolioSection;