import React, { useEffect } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PhilaFunCaseStudy from './PhilaFunCaseStudy';
import DQCaseStudy from './DQCaseStudy';
import JAACaseStudy from './JAACaseStudy';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  // Mock data - in a real app, this would come from an API or database
  const caseStudies: Record<string, any> = {
    'dq-corporate-website': {
      title: 'DigitalQatalyst Corporate Website Overhaul',
      subtitle: 'DigitalQatalyst Website Overhaul',
      role: 'Lead Product Designer',
      product: 'DQ Corporate Website',
      tools: ['Figma', 'Miro'],
    },
    'ja-career-connect': {
      title: 'JA Career Connect Alumni Platform',
      subtitle: 'Designing the Alumni platform for JAA Career Connect',
      duration: '4 months',
      team: '5 people',
      role: 'Product Designer',
      client: 'Junior Achievement Africa',
      product: 'JA Career Connect',
      tools: ['Figma', 'Miro'],
      heroImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      overview: 'JA Africa (Junior Achievement Africa) is an NGO dedicated to empowering young people across the continent with the skills they need to succeed in work and life. Their mission revolves around fostering entrepreneurship, financial literacy, and workforce readiness among African youth. One of their key initiatives involves creating opportunities for alumni (individuals who have previously participated in JA programs) to connect, grow professionally, and access resources for career advancement.',
      challenge: 'However, as JA Africa expanded its reach, they identified a critical gap: alumni lacked a centralized platform to network, share experiences, and access job opportunities tailored to their needs. This challenge inspired the development of JA Career Connect, an innovative web-based portal designed specifically for alumni engagement.',
      problemStatement: 'Alumni of JA Africa faced several challenges: Limited networking opportunities with peers and industry professionals, difficulty accessing relevant job openings or career growth resources, and lack of a unified platform to manage their profiles, showcase achievements, and stay connected to JA Africa\'s ecosystem.',
      results: [
        { 
          metric: 'User Engagement', 
          description: 'Within the first month, the platform saw 700+ user registrations, with the alumni spending an average of 15 minutes per session exploring job listings, skill tests, and forums.'
        },
        { 
          metric: 'Job Applications', 
          description: 'Over 300 job applications were submitted through the platform in the first month.'
        },
        { 
          metric: 'Feedback', 
          description: 'Post-launch surveys revealed that 90% of users found the platform intuitive and valuable for their career development.'
        }
      ]
    },
    'dfsa-suptech': {
      title: 'Dubai Financial Services Authority SupTech Platform',
      subtitle: 'A regulatory technology platform for financial supervision',
      duration: '8 months',
      team: '12 people',
      role: 'Senior Product Designer',
      client: 'Dubai Financial Services Authority',
      heroImage: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3',
      overview: 'Design and development of a regulatory technology platform for financial supervision and compliance monitoring.',
      challenge: 'Creating a platform that enables efficient regulatory oversight while maintaining professional credibility and showcasing diverse supervisory capabilities.',
      solution: 'A clean, modern design with intuitive navigation and comprehensive regulatory monitoring features.',
      results: [
        {
          metric: 'Regulatory Efficiency',
          description: 'Significant increase in regulatory oversight efficiency and effectiveness.'
        },
        {
          metric: 'User Engagement',
          description: 'Improved user interaction and time spent on compliance monitoring.'
        },
        {
          metric: 'Compliance Tracking',
          description: 'Notable increase in compliance tracking accuracy and reporting capabilities.'
        }
      ],
      isProtected: true
    },
    'philafun-mobile-app': {
      title: 'PhilaFun Gamified Fundraising Application',
      subtitle: 'Designing a Gamified Fundraising Mobile Application for PhilaFun',
      duration: '4 months',
      team: '3 people',
      role: 'Product Designer',
      client: 'PhilaFun',
      product: 'PhilaFun',
      tools: ['Figma', 'Miro'],
      heroImage: 'https://i.imgur.com/0wf0n1g.png',
      overview: 'PhilaFun is a mobile app reimagining philanthropy by valuing all forms of giving: likes, shares, comments, and donations. Designed for charities and donors, it uses gamification, endorsements, and impact tracking to build trust and inclusivity. This project focused on creating an intuitive, emotionally engaging experience that empowers charity organisations and incentivizes, celebrates, and recognizes everyday generosity.',
      challenge: 'Donor trust and meaningful engagement are major barriers in digital philanthropy. Most platforms allow unverified organizations, putting donors at risk. PhilaFun aims to only feature IRS-approved 501(c)(3) charities, ensuring legitimacy, but requiring a design that builds visibility for these vetted nonprofits. Small actions like likes, shares, and comments are ignored, making supporters feel invisible, even though they drive awareness and impact.',
      problemStatement: 'How might we create a trusted, inclusive philanthropy experience where every action counts?',
      results: [
        {
          metric: 'Trust & Safety',
          description: 'Successfully designed verification system for IRS-approved 501(c)(3) charities.'
        },
        {
          metric: 'User Engagement',
          description: 'Gamification features increased donor engagement and platform activity.'
        },
        {
          metric: 'Impact Visibility',
          description: 'All forms of giving (likes, shares, donations) tracked and celebrated.'
        }
      ]
    }
  };

  const study = caseStudies[id || ''];

  // Check for protected content access
  useEffect(() => {
    if (study && study.isProtected && !location.state?.accessGranted) {
      navigate('/', { replace: true });
    }
  }, [study, location.state, navigate]);

  // Return null while redirecting to prevent flash of protected content
  if (study && study.isProtected && !location.state?.accessGranted) {
    return null;
  }

  if (!study) {
    return (
      <div className="pt-16 min-h-screen bg-neutral flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Case Study Not Found</h1>
          <Link to="/" className="text-accent hover:underline">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  if (id === 'philafun-mobile-app') {
    return <PhilaFunCaseStudy study={study} />;
  }

  if (id === 'dq-corporate-website') {
    return <DQCaseStudy />;
  }

  if (id === 'ja-career-connect') {
    return <JAACaseStudy />;
  }

  return (
    <>
      <style>{`
        .hero-title {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: #333333;
        }

        .page-subtitle {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #757575;
        }

        .section-heading {
          font-size: 36px;
          font-weight: 500;
          line-height: 1.3;
          letter-spacing: 0.01em;
          color: #333333;
        }

        .body-text {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
        }

        .nav-link {
          font-size: 18px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: #7CA300;
        }

        .metric-box {
          border: 2px solid #ff6b35;
          border-radius: 12px;
          padding: 24px;
          background: white;
          transition: all 0.3s ease;
        }

        .metric-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.15);
        }

        .metric-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #333333;
          margin-bottom: 12px;
        }

        .metric-description {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #666666;
        }

        .phase-number {
          font-size: 18px;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #000000;
        }

        .phase-title {
          font-size: 24px;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #333333;
        }

        .deliverable-tag {
          font-size: 16px;
          font-weight: 300;
          line-height: 1.6;
          letter-spacing: 0.06em;
          color: #333333;
        }

        .feature-icon {
          font-size: 32px;
          line-height: 1;
        }

        .challenge-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-left: 4px solid #D6FD3A;
        }

        /* Hero Section Background */
        .hero-section-background {
          height: 500px;
          background-image: url('/Hero%20backround.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        /* Hero Animation Styles */
       .hero-devices {
          position: static;
          height: 100%;
          width: 100%;
          max-width: 1200px;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: none;
        }
        .device {
          position: absolute;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
        }

        

        .desktop {
          width: 500px;
          height: auto;
          z-index: 3;
          /* Center the desktop device */
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        .tablet {
          width: 250px;
          height: auto;
          /* Position tablet to the right */
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          animation: floatTablet 6s ease-in-out infinite 1s;
        }

        .mobile {
          width: 180px;
          height: auto;
          /* Position mobile to the left */
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          animation: floatMobile 6s ease-in-out infinite 2s;
        }

        @keyframes floatTablet {
          0%, 100% { 
            transform: translateY(-50%) rotateY(-5deg); 
          }
          50% { 
            transform: translateY(calc(-50% - 15px)) rotateY(-8deg); 
          }
        }

        @keyframes floatMobile {
          0%, 100% { 
            transform: translateY(-50%) rotateY(5deg); 
          }
          50% { 
            transform: translateY(calc(-50% - 10px)) rotateY(8deg); 
          }
        }

        @media (max-width: 1024px) {
          .hero-section-background {
            height: 400px;
          }
          
          .desktop {
            width: 400px;
          }
          
          .tablet {
            width: 200px;
            right: 2%;
          }
          
          .mobile {
            width: 150px;
            left: 2%;
          }
        }

        @media (max-width: 768px) {
          .hero-section-background {
            height: 300px;
          }
          
          .desktop {
            width: 300px;
            position: relative;
            left: auto;
            top: auto;
            transform: none;
            animation: none;
            filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.15));
          }
          
          .tablet {
            display: none;
          }
          
          .mobile {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 36px;
          }
          
          .page-subtitle {
            font-size: 20px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 42px;
          }
        }
      `}</style>

      <div className="pt-0 min-h-screen">
        {/* Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-4">
            <Link
              to="/"
              className="nav-link inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero Section - Updated with Background */}
        <section className="hero-section-background">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 h-full">
            <div className="hero-devices">
              {/* Mobile Device - Left */}
              <img
                src="/samsung-galaxy-a50-mockup.png"
                alt="JA Career Connect platform displayed on Samsung Galaxy A50 mobile device"
                className="device mobile"
                loading="eager"
              />
              
              {/* Desktop Device - Center */}
              <img
                src="/macbook-pro-15-mockup-grey.png"
                alt="JA Career Connect dashboard on MacBook Pro 15-inch showing job applications and analytics"
                className="device desktop"
                loading="eager"
              />
              
              {/* Tablet Device - Right */}
              <img
                src="/ipad-pro-mockup.png"
                alt="JA Career Connect platform on iPad Pro showing responsive tablet interface"
                className="device tablet"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Title Section - Below Image */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="animate-slide-up">
              <h1 className="hero-title mb-12">{study.subtitle}</h1>
              
              {/* Project Details with Line */}
     <div className="border-t border-gray-300 mt-16">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 pt-10 gap-4 md:gap-8">
    <p className="text-sm text-gray-700">ROLE: PRODUCT DESIGNER</p>
    <p className="text-sm text-gray-700">PRODUCT: JA CAREER CONNECT</p>
    <div className="flex items-center gap-4"> {/* Tools row */}
      <p className="text-sm text-gray-700">TOOLS:</p>
      <div className="flex gap-2">
        <img src="/icons/figma-logo-icon.svg" alt="Figma - Design and prototyping tool" className="w-4 h-4" loading="lazy" />
        <img src="/icons/Miro icon.svg" alt="Miro - Collaborative whiteboard platform" className="w-4 h-4" loading="lazy" />
      </div>
    </div>
  </div>
</div>
              
            </div>
          </div>
        </section>

        {/* About the Project Section */}
        <section className="pt-5 pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="animate-slide-up">
              <h2 className="section-heading mb-8">About the project</h2>
              <p className="body-text mb-8">
                {study.overview}
              </p>
              <p className="body-text">
                {study.challenge}
              </p>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="animate-slide-up">
              <h2 className="section-heading mb-8">The Problem</h2>
              <p className="body-text mb-8">
                Alumni of JA Africa faced several challenges:
              </p>

              <ul className="space-y-4">
                <li className="flex items-start">
                 <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                  <span className="body-text">Limited networking opportunities with peers and industry professionals.</span>
                </li>
                <li className="flex items-start">
                  <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                  <span className="body-text">Difficulty accessing relevant job openings or career growth resources.</span>
                </li>
                <li className="flex items-start">
                  <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                  <span className="body-text">Lack of a unified platform to manage their profiles, showcase achievements, and stay connected to JA Africa's ecosystem.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Process Section */}
        <section className="py-20 bg-neutral">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-16 animate-slide-up">
              <h2 className="section-heading mb-4">The Design Process</h2>
              <p className="body-text">
                For this project, I employed the Double Diamond design process, starting with discovery and definition to deeply understand alumni needs and pain points, followed by ideation and implementation to craft a user-centered solution.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-16">
              <img
                src="/double-diamond-process.svg"
                alt="JA Career Connect Double Diamond Design Process - Discovery, Define, Ideate, and Implement phases for alumni platform"
                className="mx-auto rounded-lg w-full md:w-3/4"
                loading="lazy"
              />
            </div>

            {/* DISCOVERY Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  DISCOVERY
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Understanding the Problem */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Understanding the Problem</h3>
                <p className="body-text mb-6">
                  To design a platform that truly resonates with JA Africa alumni, I began by conducting comprehensive research to understand their needs, behaviors, and pain points. This phase was critical in shaping the direction of the project and ensuring that the final product would address real challenges faced by users.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <img
                    src="/Image 3b.png"
                    alt="User Research and Interviews"
                    className="mx-auto rounded-lg w-full md:w-1/3"
                  />
                </div>

                <p className="body-text mb-6">
                  I engaged directly with JA Africa alumni through 6 user interviews and a survey that got over 25 responses. The main conclusions drawn from the qualitative user interviews are summarized below.
                </p>

                {/* Findings Section with Pie Chart */}
                <div className="mb-6 pt-10">
                  <h4 className="font-medium mb-6">Findings from In-depth Qualitative User Interviews</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Left side - Text findings */}
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                          <span className="body-text">Many alumni expressed frustration with fragmented networking opportunities.</span>
                        </li>
                        <li className="flex items-start">
                          <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                          <span className="body-text">There was a strong desire for a centralized job board tailored to their career aspirations.</span>
                        </li>
                        <li className="flex items-start">
<span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                          <span className="body-text">Alumni valued staying connected to JA Africa but found existing communication channels inadequate.</span>
                        </li>
                      </ul>
                      
                      <p className="body-text text-sm text-gray-600 mt-6">
                        This pie chart shows the percentage distribution of the most significant challenges expressed by the participants.
                      </p>
                    </div>
                    
                    {/* Right side - Pie Chart */}
                    <div className="flex justify-center">
                                   <img
                src="/philafun-user-challenges-distribution.svg"
                alt="Double Diamond Design Process"
                className="w-9/10 h-auto mx-auto rounded-lg"
              />
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitor Analysis */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="phase-title mb-4">Competitor Analysis</h3>
                <p className="body-text mb-6">
                  I compared key features of similar platforms to identify opportunities for JA Career Connect.
                </p>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-medium">Feature</th>
                        <th className="border border-gray-300 p-3 text-left font-medium">LinkedIn</th>
                        <th className="border border-gray-300 p-3 text-left font-medium">Alumnibase</th>
                        <th className="border border-gray-300 p-3 text-left font-medium">CareerJunction</th>
                        <th className="border border-gray-300 p-3 text-left font-medium bg-accent/10">JA Career Connect (Opportunity)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Target Audience</td>
                        <td className="border border-gray-300 p-3">General professionals</td>
                        <td className="border border-gray-300 p-3">University alumni</td>
                        <td className="border border-gray-300 p-3">Job seekers in Africa (SA)</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">JA Africa alumni</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Networking Tools</td>
                        <td className="border border-gray-300 p-3">Advanced (groups, messaging)</td>
                        <td className="border border-gray-300 p-3">Basic (alumni directory)</td>
                        <td className="border border-gray-300 p-3">Limited</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Personalized networking features</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Job Search Functionality</td>
                        <td className="border border-gray-300 p-3">Robust (global job listings)</td>
                        <td className="border border-gray-300 p-3">Moderate (industry-specific jobs)</td>
                        <td className="border border-gray-300 p-3">Focused (local job boards)</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Curated, JA-relevant job listings</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">User Experience (UX)</td>
                        <td className="border border-gray-300 p-3">High (intuitive, feature-rich)</td>
                        <td className="border border-gray-300 p-3">Moderate (outdated design)</td>
                        <td className="border border-gray-300 p-3">Low (cluttered interface)</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Clean, user-friendly design</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Engagement Features</td>
                        <td className="border border-gray-300 p-3">Notifications, events, posts</td>
                        <td className="border border-gray-300 p-3">Newsletters, updates</td>
                        <td className="border border-gray-300 p-3">Minimal engagement tools</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Tailored notifications and updates</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Mobile Accessibility</td>
                        <td className="border border-gray-300 p-3">Fully responsive app</td>
                        <td className="border border-gray-300 p-3">Partially mobile-friendly</td>
                        <td className="border border-gray-300 p-3">Desktop-focused</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Fully responsive web platform</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Personalization</td>
                        <td className="border border-gray-300 p-3">Moderate (based on profile data)</td>
                        <td className="border border-gray-300 p-3">Low (generic experience)</td>
                        <td className="border border-gray-300 p-3">None</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Highly personalized resources</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium">Integration with JA Ecosystem</td>
                        <td className="border border-gray-300 p-3">None</td>
                        <td className="border border-gray-300 p-3">None</td>
                        <td className="border border-gray-300 p-3">None</td>
                        <td className="border border-gray-300 p-3 bg-accent/5">Seamless integration with JA Africa</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="body-text">
                  Through interviews, surveys, and competitive analysis, I uncovered critical pain points such as fragmented networking, irrelevant job opportunities, and disconnection from JA Africa's ecosystem. These insights laid the foundation for defining a clear problem statement and identifying key areas where JA Career Connect could create meaningful impact.
                </p>
              </div>
            </div>

            {/* DEFINE Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  DEFINE
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Problem Statement */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Problem Statement</h3>
                <p className="body-text mb-6">
                  The Define Phase was all about making sense of the data and insights collected during discovery. Based on the research synthesis, I framed the following problem statement to guide the design process.
                </p>
                
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
                  <p className="body-text text-yellow-800 font-medium">
                    "JA Africa alumni need a centralized platform that fosters meaningful networking, provides access to curated job opportunities, and keeps them engaged with the JA ecosystem to support their professional growth."
                  </p>
                </div>

                <p className="body-text">
                  This problem statement served as the foundation for ideation and ensured that all design decisions addressed the core needs of users.
                </p>
              </div>

              {/* Product Vision and Solution */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Product Vision and Solution</h3>
                <p className="body-text mb-6">
                  From these findings, I also decided to identify key business goals and metrics:
                </p>
                
                <ol className="space-y-3 mb-6 list-decimal list-inside">
                  <li className="body-text">Increasing job placement rates for alumni.</li>
                  <li className="body-text">Enhancing alumni engagement and networking opportunities.</li>
                  <li className="body-text">Tracking alumni career progression over time.</li>
                </ol>

                <p className="body-text mb-6">
                  After a series of analyzing research insights and stakeholder meetings, we narrowed down to these 3 user stories that I was supposed to solve for:
                </p>

                <h4 className="font-medium mb-4">User stories and solutions</h4>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-4 text-left font-medium">User Story</th>
                        <th className="border border-gray-300 p-4 text-left font-medium">Solution (feature)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-4 body-text">
                          As an alumni, I want to be able to create and customize my profile easily so that I can showcase my skills and experiences to potential recruiters effectively and receive customized recommendations to job opportunities.
                        </td>
                        <td className="border border-gray-300 p-4 body-text">
                          Profile section - where users can customize their interests.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 body-text">
                          As an alumni, I want to be able to connect and network with fellow JAA alumni to expand my professional network and access mentorship opportunities.
                        </td>
                        <td className="border border-gray-300 p-4 body-text">
                          A forum section where the alumni can post and interact with each other.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 body-text">
                          As an alumni, I want to be able to track the status of my job applications and receive feedback from recruiters so that I can improve my job search strategies and increase my chances of success.
                        </td>
                        <td className="border border-gray-300 p-4 body-text">
                          A dedicated Dashboard to show number of applications in the pipeline, and an Engagement area where users can view messages from recruiters who have contacted them
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="body-text mt-6">
                  With a clear problem statement and user stories in place, I was ready to move into the Ideate Phase, where I explored creative solutions to address these challenges and deliver a platform that truly empowers JA Africa alumni.
                </p>
              </div>
            </div>

            {/* IDEATE Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  IDEATE
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              
              <p className="body-text mb-8">
                The Ideate Phase was a dynamic process where I collaborated closely with other designers working on the Admin and Recruiters Modules.
              </p>

              {/* Translating Insights into Solutions */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Translating Insights into Solutions</h3>
                <p className="body-text mb-6">
                  I began by brainstorming features and functionalities that directly addressed the pain points identified during the Define Phase. Key areas of exploration included:
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Networking Tools: Features like alumni directories, interest-based groups, and messaging systems.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Job Search Functionality: A curated job board with filters for industry, location, and career level.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Engagement Features: Notifications, event calendars, and updates to keep users connected to JA Africa.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Profile Management: Tools for alumni to showcase their achievements, skills, and career goals.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl">
                <img
                src="/ja-career-low-fidelity-wireframes.svg"
                alt="Low fidelity wireframes"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>
              </div>

              {/* Shared Concepts and Iterations */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <p className="body-text mb-6">
                  I shared these early concepts with stakeholders and cross-functional teams to gather feedback and ensure alignment. Based on the feedback received, I made several iterations, which included:
                </p>
                
                <ul className="space-y-3 mb-6">                
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Updated Skills to Skill Test</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Updated Messages to Engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Updated Community to Forums</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Added some more sections on Profile Settings</span>
                  </li>
                </ul>
              </div>

              {/* Navigation Structure */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Navigation Structure</h3>
                <p className="body-text mb-6">
                  After aligning on these early concepts with stakeholders, I refined the main navigation structure for the Alumni Module, which would serve as the backbone of the platform.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                src="/ja-career-navigation-structure.svg"
                alt="Navigation Structure"
                className="mx-auto rounded-lg"
              />
                </div>
              </div>

              {/* Crafting High Fidelity Designs */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Crafting High Fidelity Designs</h3>
                <p className="body-text mb-6">
                  User testing was an iterative process that I conducted at every milestone of the project to come up with the final Hi-Fi designs.
                </p>
                
                <p className="body-text mb-6">
                  For the look and feel, I wanted to create a refreshing, yet sophisticated UI that conveyed trustworthiness and progression for future-oriented individuals.
                </p>

                <p className="body-text mb-6">
                  I also worked closely with the Admin module and Recruiters module design teams to define a design system with reusable UI elements like buttons, typography, icons and components, ensuring a unified visual language across the 3 modules.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <img
                src="/ja-career-design-system.png"
                alt="High fidelity designs"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                {/* Dashboard */}
                <h4 className="font-medium mb-4">Dashboard</h4>
                <p className="body-text mb-6">
                  The dashboard displays a variety of useful information that users need to see, and most importantly it displays the number of active pipelines and engagements from recruiters. These two features make it easy for users to track applications, <strong>effectively addressing user story No 3.</strong>
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img
                src="/ja-career-dashboard-view.png"
                alt="Dashboard"
                className="mx-auto rounded-lg"
              />
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img
                src="/ja-career-application-tracking.svg"
                alt="Dashboard"
                className="mx-auto rounded-lg"
              />
                    <p className="text-sm text-gray-600">A User is able to track ongoing applications</p>
                  </div>
                </div>

                {/* Forum */}
                <h4 className="font-medium mb-4">Forum</h4>
                <p className="body-text mb-6">
                  The Forum section effectively <strong>solves user story No. 2.</strong> Here users can see what their fellow alumni are up to, get in touch and link up.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/ja-career-forum-section.svg"
                alt="Forum"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                {/* Profile */}
                <h4 className="font-medium mb-4">Profile</h4>
                <p className="body-text mb-6">
                  The user profile is completely customizable. Users can set their preferences for the types of jobs they want and display their skills from skill tests. This feature helps them with customized job recommendations, <strong>effectively addressing user story No 1.</strong>
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                    src="/ja-career-profile-customization.png"
                    alt="Profile customization"
                    className="mx-auto rounded-lg w-full md:w-3/4"
                  />
                </div>

                {/* Mobile View */}
                <h4 className="font-medium mb-4">Mobile View</h4>
                <p className="body-text mb-6">
                  To ensure a seamless experience for alumni accessing the platform on the go, I designed responsive mobile views that maintained usability and visual consistency across devices.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                src="/ja-career-mobile-responsive-design.png"
                alt="Mobile view"
                className="mx-auto rounded-lg"
              />
                </div>
              </div>
            </div>

            {/* IMPLEMENT Section */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  IMPLEMENT
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              
              <p className="body-text mb-8">
                In this phase, I focused on refining the high-fidelity designs, creating interactive prototypes, and preparing comprehensive documentation for the development team.
              </p>

              {/* Final Interactive Prototype */}
              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Final Interactive Prototype</h3>
                
                <div className="bg-gray-50 p-6 rounded-xl">
                 <img
      src="https://i.imgur.com/YLv5tUo.gif "
      alt="Interactive prototype demo"
      className="object-cover rounded-lg mx-auto w-full md:w-3/4"
    />
                </div>
              </div>

              {/* Developer Handoff */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="phase-title mb-4">Developer Handoff</h3>
                <p className="body-text mb-6">
                  The developer handoff process was a critical part of ensuring the Alumni Module was implemented accurately and efficiently. To facilitate this, I employed the following strategies:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">I created detailed documentation for edge cases, interaction states, and complex workflows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Developed a robust design system that promoted consistency across the 3 modules and allowed developers to build components once and reuse them.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Used Figma's dev mode to communicate precise design specifications, ensuring pixel-perfect implementation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Embedded accessibility into the design system.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Regular Syncs with the devs.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                src="/ja-career-component-library.png"
                alt="Design system"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>
              </div>
            </div>

            {/* SUCCESS METRICS Section */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  SUCCESS METRICS
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              {/* Results */}
 <div className="bg-white p-8 rounded-2xl shadow-lg mb-8">
  <h3 className="phase-title mb-6">Results</h3>
  
  {/* Metric Boxes - Fixed Version */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    {[
      {
        metric: "User Engagement",
        description: "700+ user registrations in the first month, with alumni spending averagely 15 min/session exploring jobs, tests, and forums.",
        value: "700+",
      },
      {
        metric: "Job Applications",
        description: "Over 300 applications submitted in the first month.",
        value: "300+",
      },
      {
        metric: "Feedback",
        description: "Post-launch surveys revealed that 90% of users found the platform intuitive and valuable for their career development.",
        value: "90%",
      },
    ].map((result, index) => (
      <div
        key={result.metric}
        className={`
          bg-white rounded-xl p-6 border-2 border-[#C4CCC7] hover:border-[#D6FD3A]
          shadow-lg hover:shadow-xl transition-all duration-300
          hover:-translate-y-1 flex flex-col justify-between h-full
          animate-fade-in
        `}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{result.metric}</h4>
          <div className="text-sm text-gray-600 mb-4">{result.description}</div>
        </div>
        <div className="text-2xl font-semibold text-green-600 bg-gradient-to-r from-green-100 to-transparent p-2 rounded-lg text-center">
          {result.value}
        </div>
      </div>
    ))}
  </div>

  <p className="body-text mb-6">
    These results show the platform's success in addressing the core pain points identified during the research phase.
  </p>

  <div className="bg-gray-50 p-6 rounded-xl">
    <img
      src="/Image 14 b.png"
      alt="Analytics Screenshot"
      className="mx-auto rounded-lg w-full md:w-3/4"
    />
  </div>
</div>

              {/* Key Takeaways */}
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="phase-title mb-6">Key Takeaways</h3>
                <p className="body-text mb-6">Some key takeaways from this project are:</p>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">
                      Create a strategic plan to launch an MVP. This helps deal with out-of-scope requests that could potentially derail the project and helps deliver a quality product in time.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">
                      User testing doesn't end after development. Design is a constant iteration of improving the experience for the end user. Always find ways to collect and listen to your user's feedback.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">
                      Involve engineering upfront. This helps to reduce any rework later on as an understanding of the technical limitations upfront will help to inform your design strategy.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyPage;