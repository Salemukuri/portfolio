import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordModal from './PasswordModal';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  isProtected?: boolean;
  password?: string;
}

const ALL_PROJECTS: Project[] = [
  {
    id: 'ja-career-connect',
    title: 'JAA Career Connect Alumni Platform',
    description: 'A comprehensive alumni networking platform designed to empower young professionals across Africa.',
    image: '/images/thumbnail-jaa-connect.svg',
    category: 'Web App',
  },
  {
    id: 'philafun-mobile-app',
    title: 'PhilaFun Gamified Fundraising Application',
    description: 'A gamified mobile fundraising app that transforms philanthropy by valuing all forms of giving.',
    image: '/images/thumbnail-philafun.svg',
    category: 'Mobile App',
  },
  {
    id: 'dq-corporate-website',
    title: 'DigitalQatalyst Corporate Website Overhaul',
    description: 'A full redesign of the DigitalQatalyst corporate website to reflect their digital transformation brand.',
    image: '/images/thumbnail-dq-corp-web.png',
    category: 'Website',
  },
  {
    id: 'dfsa-suptech',
    title: 'Dubai Financial Services Authority SupTech Platform',
    description: 'A regulatory technology platform designed for financial supervision and compliance monitoring.',
    image: '/images/thumbnail-dfsa.svg',
    category: 'Web App',
    isProtected: true,
    password: 'portfolio2024',
  },
];

interface MoreCaseStudiesProps {
  currentId: string;
}

const ProjectCard: React.FC<{ project: Project; onProtectedClick: (p: Project) => void }> = ({ project, onProtectedClick }) => {
  const inner = (
    <>
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-t-lg"
          loading="lazy"
        />
        {project.isProtected && <div className="more-protected-badge">🔒 NDA</div>}
      </div>
      <div className="p-6 text-left">
        <span style={{ fontSize: '16px', fontWeight: 300, color: '#757575', letterSpacing: '0.06em' }}>
          {project.category}
        </span>
        <h3
          className="more-project-title"
          style={{ fontSize: '18px', fontWeight: 400, color: '#333333', marginTop: '8px', lineHeight: 1.4, transition: 'color 0.3s ease' }}
        >
          {project.title}
        </h3>
      </div>
    </>
  );

  if (project.isProtected) {
    return (
      <button
        type="button"
        onClick={() => onProtectedClick(project)}
        className="more-project-card shadow-md relative w-full text-left"
      >
        {inner}
      </button>
    );
  }

  return (
    <Link to={`/case-study/${project.id}`} className="more-project-card shadow-md relative">
      {inner}
    </Link>
  );
};

const MoreCaseStudies: React.FC<MoreCaseStudiesProps> = ({ currentId }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const others = ALL_PROJECTS.filter((p) => p.id !== currentId).slice(0, 3);

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
        .more-project-card {
          transition: all 0.3s ease;
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .more-project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1);
        }
        .more-project-card:hover .more-project-title {
          color: #7CA300 !important;
        }
        .more-protected-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.05em;
          backdrop-filter: blur(4px);
        }
      `}</style>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="flex items-center mb-12">
            <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
              MORE CASE STUDIES
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {others.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onProtectedClick={handleProtectedClick}
              />
            ))}
          </div>
        </div>
      </section>

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

export default MoreCaseStudies;
