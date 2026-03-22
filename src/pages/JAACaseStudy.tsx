import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MoreCaseStudies from '../components/MoreCaseStudies';

const JAACaseStudy: React.FC = () => {
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
        .nav-link:hover { color: #7CA300; }
        .phase-title {
          font-size: 24px;
          font-weight: 500;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #333333;
        }
        .subsection-heading {
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          color: #333333;
          margin-bottom: 12px;
        }

        /* Hero */
        .jaa-hero {
          height: 500px;
          background-image: url('/images/jaa/jaa-hero-bg.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          overflow: hidden;
        }
        .jaa-devices {
          position: absolute;
          inset: 0;
        }
        .jaa-device-desktop {
          position: absolute;
          width: 500px;
          height: auto;
          z-index: 3;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
        }
        .jaa-device-tablet {
          position: absolute;
          width: 250px;
          height: auto;
          right: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
          animation: jaaFloatTablet 6s ease-in-out infinite 1s;
        }
        .jaa-device-mobile {
          position: absolute;
          width: 180px;
          height: auto;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.15));
          animation: jaaFloatMobile 6s ease-in-out infinite 2s;
        }
        @keyframes jaaFloatTablet {
          0%, 100% { transform: translateY(-50%) rotateY(-5deg); }
          50% { transform: translateY(calc(-50% - 15px)) rotateY(-8deg); }
        }
        @keyframes jaaFloatMobile {
          0%, 100% { transform: translateY(-50%) rotateY(5deg); }
          50% { transform: translateY(calc(-50% - 10px)) rotateY(8deg); }
        }

        @media (max-width: 1024px) {
          .jaa-hero { height: 400px; }
          .jaa-device-desktop { width: 400px; }
          .jaa-device-tablet { width: 200px; right: 2%; }
          .jaa-device-mobile { width: 150px; left: 2%; }
        }
        @media (max-width: 768px) {
          .jaa-hero { height: 300px; }
          .jaa-device-desktop { width: 280px; }
          .jaa-device-tablet { display: none; }
          .jaa-device-mobile { display: none; }
          .hero-title { font-size: 36px; }
        }
      `}</style>

      <div className="pt-0 min-h-screen">

        {/* Back nav */}
        <div className="bg-white border-b">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-4">
            <Link to="/portfolio" className="nav-link inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="jaa-hero">
          <div className="jaa-devices">
            <img
              src="/images/jaa/jaa-hero-mobile.svg"
              alt="JA Career Connect on Samsung Galaxy A50"
              className="jaa-device-mobile"
              loading="eager"
            />
            <img
              src="/images/jaa/jaa-hero-desktop.svg"
              alt="JA Career Connect dashboard on MacBook Pro"
              className="jaa-device-desktop"
              loading="eager"
            />
            <img
              src="/images/jaa/jaa-hero-tablet.svg"
              alt="JA Career Connect on iPad Pro"
              className="jaa-device-tablet"
              loading="eager"
            />
          </div>
        </section>

        {/* Title + metadata */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <h1 className="hero-title mb-12">Designing the Alumni platform for JAA Career Connect</h1>
            <div className="border-t border-gray-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 pt-10 gap-4 md:gap-8">
                <p className="text-sm text-gray-700">ROLE: PRODUCT DESIGNER</p>
                <p className="text-sm text-gray-700">PRODUCT: JA CAREER CONNECT</p>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-700">TOOLS:</p>
                  <div className="flex gap-2">
                    <img src="/icons/figma-logo-icon.svg" alt="Figma" className="w-4 h-4" loading="lazy" />
                    <img src="/icons/Miro icon.svg" alt="Miro" className="w-4 h-4" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the project */}
        <section className="pt-5 pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <h2 className="section-heading mb-8">About the project</h2>
            <p className="body-text mb-8">
              JA Africa (Junior Achievement Africa) is an NGO dedicated to empowering young people across the continent with the skills they need to succeed in work and life. Their mission revolves around fostering entrepreneurship, financial literacy, and workforce readiness among African youth. One of their key initiatives involves creating opportunities for alumni to connect, grow professionally, and access resources for career advancement.
            </p>
            <p className="body-text">
              As JA Africa expanded its reach, they identified a critical gap: alumni lacked a centralized platform to network, share experiences, and access job opportunities tailored to their needs. This challenge inspired the development of JA Career Connect, an innovative web-based portal designed specifically for alumni engagement.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section className="pb-20 bg-white">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <h2 className="section-heading mb-8">The Problem</h2>
            <p className="body-text mb-8">Alumni of JA Africa faced several challenges:</p>
            <ul className="space-y-4">
              {[
                'Limited networking opportunities with peers and industry professionals.',
                'Difficulty accessing relevant job openings or career growth resources.',
                "Lack of a unified platform to manage their profiles, showcase achievements, and stay connected to JA Africa's ecosystem.",
              ].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                  <span className="body-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-neutral">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-4">The Design Process</h2>
              <p className="body-text">
                For this project, I employed the Double Diamond design process, starting with discovery and definition to deeply understand alumni needs and pain points, followed by ideation and implementation to craft a user-centered solution.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-16">
              <img
                src="/images/jaa/jaa-design-process.svg"
                alt="JAA Career Connect Double Diamond Design Process — Discovery, Define, Ideate, Implement"
                className="mx-auto rounded-lg w-full md:w-3/4"
                loading="lazy"
              />
            </div>

            {/* DISCOVERY */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">DISCOVERY</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Understanding the Problem</h3>
                <p className="body-text mb-6">
                  To design a platform that truly resonates with JA Africa alumni, I began by conducting comprehensive research to understand their needs, behaviors, and pain points. This phase was critical in shaping the direction of the project and ensuring that the final product would address real challenges faced by users.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <img
                    src="/images/jaa/jaa-research.svg"
                    alt="User research and interviews"
                    className="mx-auto rounded-lg w-full md:w-1/3"
                    loading="lazy"
                  />
                </div>

                <p className="body-text mb-6">
                  I engaged directly with JA Africa alumni through 6 user interviews and a survey that got over 25 responses. The main conclusions drawn from the qualitative user interviews are summarized below.
                </p>

                <div className="mb-6 pt-10">
                  <h4 className="subsection-heading mb-6">Findings from In-depth Qualitative User Interviews</h4>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    <div className="space-y-4">
                      <ul className="space-y-3">
                        {[
                          'Many alumni expressed frustration with fragmented networking opportunities.',
                          'There was a strong desire for a centralized job board tailored to their career aspirations.',
                          'Alumni valued staying connected to JA Africa but found existing communication channels inadequate.',
                        ].map((item) => (
                          <li key={item} className="flex items-start">
                            <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                            <span className="body-text">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="body-text text-sm text-gray-600 mt-6">
                        This pie chart shows the percentage distribution of the most significant challenges expressed by the participants.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/images/jaa/jaa-pie-chart.svg"
                        alt="User challenges distribution chart"
                        className="w-full h-auto mx-auto rounded-lg"
                        loading="lazy"
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
                      {[
                        ['Target Audience', 'General professionals', 'University alumni', 'Job seekers in Africa (SA)', 'JA Africa alumni'],
                        ['Networking Tools', 'Advanced (groups, messaging)', 'Basic (alumni directory)', 'Limited', 'Personalized networking features'],
                        ['Job Search Functionality', 'Robust (global job listings)', 'Moderate (industry-specific jobs)', 'Focused (local job boards)', 'Curated, JA-relevant job listings'],
                        ['User Experience (UX)', 'High (intuitive, feature-rich)', 'Moderate (outdated design)', 'Low (cluttered interface)', 'Clean, user-friendly design'],
                        ['Engagement Features', 'Notifications, events, posts', 'Newsletters, updates', 'Minimal engagement tools', 'Tailored notifications and updates'],
                        ['Mobile Accessibility', 'Fully responsive app', 'Partially mobile-friendly', 'Desktop-focused', 'Fully responsive web platform'],
                        ['Personalization', 'Moderate (based on profile data)', 'Low (generic experience)', 'None', 'Highly personalized resources'],
                        ['Integration with JA Ecosystem', 'None', 'None', 'None', 'Seamless integration with JA Africa'],
                      ].map(([feature, linkedin, alumnibase, careerjunction, jaa]) => (
                        <tr key={feature}>
                          <td className="border border-gray-300 p-3 font-medium">{feature}</td>
                          <td className="border border-gray-300 p-3">{linkedin}</td>
                          <td className="border border-gray-300 p-3">{alumnibase}</td>
                          <td className="border border-gray-300 p-3">{careerjunction}</td>
                          <td className="border border-gray-300 p-3 bg-accent/5">{jaa}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="body-text">
                  Through interviews, surveys, and competitive analysis, I uncovered critical pain points such as fragmented networking, irrelevant job opportunities, and disconnection from JA Africa's ecosystem. These insights laid the foundation for defining a clear problem statement and identifying key areas where JA Career Connect could create meaningful impact.
                </p>
              </div>
            </div>

            {/* DEFINE */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">DEFINE</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Problem Statement</h3>
                <p className="body-text mb-6">
                  The Define Phase was all about making sense of the data and insights collected during discovery. Based on the research synthesis, I framed the following problem statement to guide the design process.
                </p>
                <div className="bg-accent/10 border-l-4 border-custom-primary p-6 rounded-r-lg mb-6">
                  <p className="body-text font-medium">
                    "JA Africa alumni need a centralized platform that fosters meaningful networking, provides access to curated job opportunities, and keeps them engaged with the JA ecosystem to support their professional growth."
                  </p>
                </div>
                <p className="body-text">
                  This problem statement served as the foundation for ideation and ensured that all design decisions addressed the core needs of users.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="phase-title mb-4">Product Vision and Solution</h3>
                <p className="body-text mb-6">
                  From these findings, I identified key business goals and metrics:
                </p>
                <ol className="space-y-3 mb-6 list-decimal list-inside">
                  {[
                    'Increasing job placement rates for alumni.',
                    'Enhancing alumni engagement and networking opportunities.',
                    'Tracking alumni career progression over time.',
                  ].map((item) => (
                    <li key={item} className="body-text">{item}</li>
                  ))}
                </ol>
                <p className="body-text mb-6">
                  After analyzing research insights and stakeholder meetings, we narrowed down to 3 user stories I was supposed to solve for:
                </p>
                <h4 className="subsection-heading mb-4">User stories and solutions</h4>
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
                        <td className="border border-gray-300 p-4 body-text">As an alumni, I want to create and customize my profile easily so that I can showcase my skills and experiences to potential recruiters and receive customized job recommendations.</td>
                        <td className="border border-gray-300 p-4 body-text">Profile section — where users can customize their interests.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 body-text">As an alumni, I want to connect and network with fellow JAA alumni to expand my professional network and access mentorship opportunities.</td>
                        <td className="border border-gray-300 p-4 body-text">A forum section where alumni can post and interact with each other.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-4 body-text">As an alumni, I want to track the status of my job applications and receive feedback from recruiters so that I can improve my job search strategies.</td>
                        <td className="border border-gray-300 p-4 body-text">A dedicated Dashboard showing applications in the pipeline, and an Engagement area for recruiter messages.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="body-text mt-6">
                  With a clear problem statement and user stories in place, I was ready to move into the Ideate Phase, where I explored creative solutions to address these challenges.
                </p>
              </div>
            </div>

            {/* IDEATE */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">IDEATE</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <p className="body-text mb-8">
                The Ideate Phase was a dynamic process where I collaborated closely with other designers working on the Admin and Recruiters Modules.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Translating Insights into Solutions</h3>
                <p className="body-text mb-6">
                  I began by brainstorming features and functionalities that directly addressed the pain points identified during the Define Phase. Key areas of exploration included:
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    'Networking Tools: Features like alumni directories, interest-based groups, and messaging systems.',
                    'Job Search Functionality: A curated job board with filters for industry, location, and career level.',
                    'Engagement Features: Notifications, event calendars, and updates to keep users connected to JA Africa.',
                    'Profile Management: Tools for alumni to showcase their achievements, skills, and career goals.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                    src="/images/jaa/jaa-low-fidelity-wireframes.svg"
                    alt="Low fidelity wireframes"
                    className="mx-auto rounded-lg w-full md:w-3/4"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <p className="body-text mb-6">
                  I shared these early concepts with stakeholders and cross-functional teams to gather feedback and ensure alignment. Based on the feedback received, I made several iterations, which included:
                </p>
                <ul className="space-y-3">
                  {[
                    'Updated Skills to Skill Test',
                    'Updated Messages to Engagement',
                    'Updated Community to Forums',
                    'Added more sections on Profile Settings',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Navigation Structure</h3>
                <p className="body-text mb-6">
                  After aligning on early concepts with stakeholders, I refined the main navigation structure for the Alumni Module, which would serve as the backbone of the platform.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                    src="/images/jaa/jaa-navigation-structure.svg"
                    alt="Navigation structure"
                    className="mx-auto rounded-lg w-full"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Crafting High Fidelity Designs</h3>
                <p className="body-text mb-6">
                  User testing was an iterative process that I conducted at every milestone of the project to arrive at the final Hi-Fi designs.
                </p>
                <p className="body-text mb-6">
                  For the look and feel, I wanted to create a refreshing, yet sophisticated UI that conveyed trustworthiness and progression for future-oriented individuals.
                </p>
                <p className="body-text mb-6">
                  I also worked closely with the Admin module and Recruiters module design teams to define a design system with reusable UI elements — buttons, typography, icons and components — ensuring a unified visual language across all 3 modules.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                    src="/images/jaa/jaa-high-fidelity-designs.svg"
                    alt="High fidelity designs"
                    className="mx-auto rounded-lg w-full md:w-3/4"
                    loading="lazy"
                  />
                </div>

                <h4 className="subsection-heading mb-4">Dashboard</h4>
                <p className="body-text mb-6">
                  The dashboard displays a variety of useful information that users need to see, and most importantly it displays the number of active pipelines and engagements from recruiters. These two features make it easy for users to track applications, effectively addressing user story No. 3.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img src="/images/jaa/jaa-dashboard.svg" alt="Dashboard view" className="mx-auto rounded-lg w-full" loading="lazy" />
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <img src="/images/jaa/jaa-ongoing-applications.svg" alt="Application tracking" className="mx-auto rounded-lg w-full" loading="lazy" />
                    <p className="text-sm text-gray-600 mt-2">A user is able to track ongoing applications</p>
                  </div>
                </div>

                <h4 className="subsection-heading mb-4">Forum</h4>
                <p className="body-text mb-6">
                  The Forum section effectively solves user story No. 2. Here users can see what their fellow alumni are up to, get in touch and link up.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img src="/images/jaa/jaa-forum.svg" alt="Forum section" className="mx-auto rounded-lg w-full md:w-3/4" loading="lazy" />
                </div>

                <h4 className="subsection-heading mb-4">Profile</h4>
                <p className="body-text mb-6">
                  The user profile is completely customizable. Users can set their preferences for the types of jobs they want and display their skills from skill tests. This feature helps them with customized job recommendations, effectively addressing user story No. 1.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img src="/images/jaa/jaa-profile.svg" alt="Profile customization" className="mx-auto rounded-lg w-full md:w-3/4" loading="lazy" />
                </div>

                <h4 className="subsection-heading mb-4">Mobile View</h4>
                <p className="body-text mb-6">
                  To ensure a seamless experience for alumni accessing the platform on the go, I designed responsive mobile views that maintained usability and visual consistency across devices.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img src="/images/jaa/jaa-mobile.svg" alt="Mobile responsive design" className="mx-auto rounded-lg w-full" loading="lazy" />
                </div>
              </div>
            </div>

            {/* IMPLEMENT */}
            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">IMPLEMENT</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <p className="body-text mb-8">
                In this phase, I focused on refining the high-fidelity designs, creating interactive prototypes, and preparing comprehensive documentation for the development team.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-4">Final Interactive Prototype</h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                    src="/images/jaa/jaa-interactive-prototype.gif"
                    alt="Interactive prototype demo"
                    className="mx-auto rounded-lg w-full md:w-3/4"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="phase-title mb-4">Developer Handoff</h3>
                <p className="body-text mb-6">
                  The developer handoff process was a critical part of ensuring the Alumni Module was implemented accurately and efficiently. To facilitate this, I employed the following strategies:
                </p>
                <ul className="space-y-4 mb-6">
                  {[
                    'I created detailed documentation for edge cases, interaction states, and complex workflows.',
                    'Developed a robust design system that promoted consistency across the 3 modules and allowed developers to build components once and reuse them.',
                    "Used Figma's dev mode to communicate precise design specifications, ensuring pixel-perfect implementation.",
                    'Embedded accessibility into the design system.',
                    'Regular syncs with the devs.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <img
                    src="/images/jaa/jaa-design-system.svg"
                    alt="Component library and design system"
                    className="mx-auto rounded-lg w-full md:w-3/4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* SUCCESS METRICS */}
            <div>
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">SUCCESS METRICS</div>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="phase-title mb-6">Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { metric: 'User Engagement', description: '700+ user registrations in the first month, with alumni spending an average of 15 min/session exploring jobs, tests, and forums.', value: '700+' },
                    { metric: 'Job Applications', description: 'Over 300 applications submitted through the platform in the first month.', value: '300+' },
                    { metric: 'Feedback', description: 'Post-launch surveys revealed that 90% of users found the platform intuitive and valuable for their career development.', value: '90%' },
                  ].map((result, index) => (
                    <div
                      key={result.metric}
                      className="bg-white rounded-xl p-6 border-2 border-[#C4CCC7] hover:border-[#D6FD3A] shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{result.metric}</h4>
                        <p className="text-sm text-gray-600 mb-4">{result.description}</p>
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
                    src="/images/jaa/jaa-analytics-screenshot.svg"
                    alt="Analytics screenshot"
                    className="mx-auto rounded-lg w-full md:w-3/4"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="phase-title mb-6">Key Takeaways</h3>
                <p className="body-text mb-6">Some key takeaways from this project:</p>
                <ul className="space-y-4">
                  {[
                    'Create a strategic plan to launch an MVP. This helps deal with out-of-scope requests that could potentially derail the project and helps deliver a quality product in time.',
                    "User testing doesn't end after development. Design is a constant iteration of improving the experience for the end user. Always find ways to collect and listen to your user's feedback.",
                    'Involve engineering upfront. This helps to reduce any rework later on as an understanding of the technical limitations upfront will help to inform your design strategy.',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" style={{ backgroundColor: '#7CA300' }} />
                      <span className="body-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>
      </div>
      <MoreCaseStudies currentId="ja-career-connect" />
    </>
  );
};

export default JAACaseStudy;
