import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import MoreCaseStudies from '../components/MoreCaseStudies';

interface PhilaFunCaseStudyProps {
  study: any;
}

const PhilaFunCaseStudy: React.FC<PhilaFunCaseStudyProps> = ({ study }) => {
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

        .nav-link:hover {
          color: #7CA300;
        }

        .hero-section-gradient {
          height: 500px;
          background: linear-gradient(180deg, #1a1a1a 0%, #4a4a4a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        @keyframes float-infinity {
          0% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          25% {
            transform: translate(30px, -40px) rotate(5deg) scale(1.05);
          }
          50% {
            transform: translate(-20px, -60px) rotate(-3deg) scale(1.1);
          }
          75% {
            transform: translate(-40px, -30px) rotate(3deg) scale(1.05);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes float-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }

        .philafun-hero-logo {
          animation: float-infinity 12s ease-in-out infinite;
          filter: drop-shadow(0 10px 30px rgba(124, 163, 0, 0.3));
        }

        .hero-glow {
          animation: float-pulse 8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-section-gradient {
            height: 300px;
          }

          .hero-title {
            font-size: 36px;
          }
        }
      `}</style>

      <div className="pt-0 min-h-screen">
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

        <section className="hero-section-gradient overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 h-full flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 hero-glow">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10 philafun-hero-logo">
                <img
                src="/images/philafun/philafun-hero.svg"
                  alt="PhilaFun - Gamified Fundraising Application Logo"
                  className="w-48 h-auto md:w-64 max-h-80 object-contain"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <h1 className="hero-title mb-12">{study.subtitle}</h1>

            <div className="border-t border-gray-300 mt-16">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 pt-10 gap-4 md:gap-8">
                <p className="text-sm text-gray-700">ROLE: {study.role.toUpperCase()}</p>
                <p className="text-sm text-gray-700">PRODUCT: {study.product.toUpperCase()}</p>
                <div className="flex items-center gap-4">
                  <p className="text-sm text-gray-700">TOOLS:</p>
                  <div className="flex gap-2">
                    <img src="/icons/figma-logo-icon.svg" alt="Figma - Design and prototyping tool" className="w-4 h-4" loading="lazy" />
                    <img src="/icons/Miro icon.svg" alt="Miro - Collaborative whiteboard platform" className="w-4 h-4" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-5 pb-10 bg-white">
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <h2 className="section-heading mb-8">About the project</h2>
            <p className="body-text mb-8">
              PhilaFun is a mobile app reimagining philanthropy by valuing all forms of giving: likes, shares, comments, and donations. This project focused on creating an intuitive, emotionally engaging experience that empowers charity organisations and incentivizes, celebrates, and recognizes everyday generosity through gamification and trust building.
            </p>
          </div>
               </section>

        {/* The Problem Section */}
        <section className="pb-20 bg-white"> 
          <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
            <h2 className="section-heading mb-8">The Problem</h2>
            <p className="body-text mb-8">
              Donor trust and meaningful engagement are major barriers in digital philanthropy:
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                  style={{ backgroundColor: '#7CA300' }}
                ></span>
                <span className="body-text">Most platforms allow unverified charity organizations, putting donors at risk.</span>
              </li>
              <li className="flex items-start">
                <span
                  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0"
                  style={{ backgroundColor: '#7CA300' }}
                ></span>
                <span className="body-text">Small actions like likes, shares, and comments are ignored, making supporters feel invisible, even though they drive awareness and impact.</span>
              </li>
            </ul>

            <p className="body-text font-medium">
              {study.problemStatement}
            </p>
          </div>
        </section>

        <section className="py-20 bg-neutral">
          <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
            <div className="text-center mb-16">
              <h2 className="section-heading mb-4">The Design Process</h2>
              <p className="body-text">
                As usual, like most of my projects, I employed the Double Diamond design process, starting with discovery and definition to deeply understand donor and charity needs, followed by ideation and implementation to craft a trustworthy, inclusive, and engaging giving experience.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl mb-16">
              <img
                src="/images/philafun/philafun-design-process.svg"
                alt="PhilaFun Double Diamond Design Process - Discovery, Define, Ideate, and Implement phases"
                className="mx-auto rounded-lg w-full md:w-3/4"
                loading="lazy"
              />
            </div>

            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  DISCOVERY
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="text-2xl font-medium mb-4">Understanding the Problem</h3>
                <p className="body-text mb-6">
                  PhilaFun team facilitated interviews with 8 philanthropists and 3 charity organizations leaders. These were the key insights uncovered.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl">
              <img
                src="/images/philafun/philafun-discovery.svg"
                alt="PhilaFun Key Research Insights - Donor trust challenges and charity transparency needs"
                className="mx-auto rounded-lg w-full md:w-3/4"
                loading="lazy"
              />
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  DEFINE
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="text-2xl font-medium mb-4">User Personas</h3>
                <p className="body-text mb-6">
                  To design a platform that truly serves both charities and donors, I created research-backed personas to reflect real user needs, motivations, and behaviors. These personas kept the design centered on empathy, ensuring PhilaFun solves actual problems.
                </p>

<h4 className="text-xl font-medium mb-4">Persona 1</h4>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
  <div className="grid md:grid-cols-[400px,1fr] gap-0">
    <div className="bg-gradient-to-br from-slate-500 to-slate-600 p-8 flex flex-col justify-between min-h-[600px]">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full aspect-[9/10] bg-white rounded-2xl flex items-center justify-center text-slate-300">
          <img
            src="/images/philafun/philafun-kristin-watson.svg"
            alt="Image of persona 01a"
            className="mx-auto rounded-lg w-full"
          />
        </div>
      </div>

      <div className="bg-slate-600/50 backdrop-blur-sm rounded-2xl p-6 mt-6">
        <p className="text-white text-base leading-relaxed italic">
          "I want to support causes I care about, but I'm on a budget. I wish my likes and shares counted for something meaningful."
        </p>
      </div>
    </div>

    <div className="p-10 persona-content"> {/* Added class for specificity */}
      <div className="mb-6">
        <h5 className="text-4xl font-bold text-gray-900 mb-2">Kristin Watson</h5>
        <p className="text-xl font-semibold" style={{ color: '#7CA300' }}>DONOR</p>
      </div>

      {/* Force smaller font sizes with !important in CSS */}
      <div className="flex flex-wrap gap-3 font-semibold mb-8 persona-metadata">
        <span className="text-gray-600">AGE <span className="text-gray-900">28</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">EDUCATION <span className="text-gray-900">BACHELOR'S</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">INCOME <span className="text-gray-900">45K</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">LOCATION <span className="text-gray-900">CHICAGO</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">STATUS <span className="text-gray-900">SINGLE</span></span>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 persona-tags">
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Mission-Driven</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Social</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Authentic</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Budget-Conscious</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Tech-Savvy</span>
        </div>
      </div>

      <div className="mb-8">
        <h6 className="font-bold text-gray-900 mb-3 persona-subheading">Bio</h6>
        <p className="text-gray-700 leading-relaxed persona-text">
          Kristin is a marketing coordinator who is passionate about giving back but struggles with limited financial resources. She actively engages with nonprofits on social media, but often feels her contributions go unrecognized. She wants to support verified charities and values transparency in tracking her impact.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
  <div>
    <h6 className="font-bold text-gray-900 mb-4 persona-subheading">Goals</h6>
    <ul className="space-y-2.5 persona-list">
      <li className="flex items-start gap-2 text-gray-700 persona-list-item">
        <span className="text-gray-400 mt-0.5 persona-bullet">•</span>
        <span className="persona-text">Support verified, trustworthy charities</span>
      </li>
    </ul>
  </div>

  <div>
    <h6 className="font-bold text-gray-900 mb-4 persona-subheading">Pain Points</h6>
    <ul className="space-y-2.5 persona-list">
      <li className="flex items-start gap-2 text-gray-700 persona-list-item">
        <span className="text-gray-400 mt-0.5 persona-bullet">•</span>
        <span className="persona-text">Doubts legitimacy of many platforms</span>
      </li>
    </ul>
  </div>
</div>
    </div>
  </div>
</div>               

                <h4 className="text-xl font-medium mb-4">Persona 2</h4>
<div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
  <div className="grid md:grid-cols-[400px,1fr] gap-0">
    <div className="bg-gradient-to-br from-[#4B5655] to-[#414C4B] p-8 flex flex-col justify-between min-h-[600px]">
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full aspect-[9/10] bg-white rounded-2xl flex items-center justify-center text-emerald-300">
          <img
            src="/images/philafun/philafun-james-carter.svg"
            alt="James Carter Persona"
            className="mx-auto rounded-lg w-full"
          />
        </div>
      </div>

      <div className="bg-[#374241]/50 backdrop-blur-sm rounded-2xl p-6 mt-6">
        <p className="text-white text-base leading-relaxed italic">
          "We need a platform that helps us reach more donors and build trust. Too many people doubt if their money actually helps."
        </p>
      </div>
    </div>

    <div className="p-10 persona-content">
      <div className="mb-6">
        <h5 className="text-4xl font-bold text-gray-900 mb-2">James Carter</h5>
        <p className="text-xl font-semibold" style={{ color: '#7CA300' }}>CHARITY DIRECTOR</p>
      </div>

      <div className="flex flex-wrap gap-3 font-semibold mb-8 persona-metadata">
        <span className="text-gray-600">AGE <span className="text-gray-900">42</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">EDUCATION <span className="text-gray-900">MASTER'S</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">ORG SIZE <span className="text-gray-900">SMALL</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">LOCATION <span className="text-gray-900">ATLANTA</span></span>
        <span className="text-gray-300">|</span>
        <span className="text-gray-600">ROLE <span className="text-gray-900">EXECUTIVE</span></span>
      </div>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2 persona-tags">
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Credibility-Focused</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Growth-Oriented</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Transparent</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Community-Driven</span>
          <span className="px-4 py-1.5 bg-gray-100 text-gray-700 font-medium uppercase">Data-Minded</span>
        </div>
      </div>

      <div className="mb-8">
        <h6 className="font-bold text-gray-900 mb-3 persona-subheading">Bio</h6>
        <p className="text-gray-700 leading-relaxed persona-text">
          James is the executive director of a small nonprofit focused on education access. He's passionate about his mission but struggles with donor acquisition and retention. He needs a platform that can help his organization stand out, build credibility, and reach supporters who truly care about their cause.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h6 className="font-bold text-gray-900 mb-4 persona-subheading">Goals</h6>
          <ul className="space-y-2.5 persona-list">
            <li className="flex items-start gap-2 text-gray-700 persona-list-item">
              <span className="text-gray-400 mt-0.5 persona-bullet">•</span>
              <span className="persona-text">Reach verified donors who trust the platform</span>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-bold text-gray-900 mb-4 persona-subheading">Pain Points</h6>
          <ul className="space-y-2.5 persona-list">
            <li className="flex items-start gap-2 text-gray-700 persona-list-item">
              <span className="text-gray-400 mt-0.5 persona-bullet">•</span>
              <span className="persona-text">Competing with fraudulent campaigns for visibility</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
              </div>
            </div>

            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  IDEATE
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <h3 className="text-2xl font-medium mb-4">Defining the Solution</h3>
                <ol className="space-y-3 mb-6 list-decimal list-inside">
                  <li className="body-text">Trust by Design - Only IRS-approved 501(c)(3) charities can post, ensuring donor confidence.</li>
                  <li className="body-text">Every Action Counts - Likes, shares, and comments earn impact points, making support inclusive.</li>
                  <li className="body-text">Gamification - To incentivize donations and boost donor retention.</li>
                  <li className="body-text">Credibility Through Community - Charities gain visibility when Featured Funders endorse their campaigns.</li>
                </ol>

                <p className="body-text mb-8">
                  These insights guided the app's structure, turning research into a focused, human-centered experience where generosity is recognized in all its forms.
                </p>

                <h4 className="text-xl font-medium mb-4">User Flows</h4>

                <h5 className="font-medium mb-4">Charity Userflow</h5>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <img
                src="/images/philafun/philafun-charityflow.jpg"
                alt="user flow for charities"
                className="mx-auto rounded-lg w-full"
              />
                </div>

                <h5 className="font-medium mb-4">Donor Userflow</h5>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/images/philafun/philafun-donorflow.jpg"
                alt="userflow for donors"
                className="mx-auto rounded-lg w-full"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Lo-Fi Ideation</h4>
                <p className="body-text mb-6">
                  I started by crafting low-fidelity sketches to map the core flows, focusing on structure, hierarchy, and user intent.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/images/philafun/philafun-low-fidelity-wireframes.svg"
                alt="userflow for donors"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Trade-offs & Iterations</h4>
                <p className="body-text mb-6">
                  In early designs, the campaign page showed top donors by donation amount. While transparent, this risked discouraging small contributors and over-emphasizing money. After stakeholder feedback, we iterated:
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Donor-facing view: Replaced dollar rankings with impact points, highlighting engagement (likes, shares, comments, donations).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Charity view: Still shows exact donation amounts for transparency and reporting.</span>
                  </li>
                </ul>

                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                 <img
                src="/images/philafun/philafun-tradeoffs.svg"
                alt="design tradeoffs"
                className="mx-auto rounded-lg w-full md:w-5/6"
              />
                </div>

                <p className="body-text mb-6">
                  I chose a 3-tab bottom navigation to minimize cognitive load and prioritize high-frequency actions.
                </p>

                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Charity: Home (dashboard), Campaigns (core function), Settings (manage org)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Donor: Home (discover), Search (explore causes), Profile (identity & impact)</span>
                  </li>
                </ul>

                <p className="body-text mb-6">
                  Each tab aligns with user mental models: charities manage, donors explore.
                </p>

                <div className="bg-gray-50 p-6 rounded-xl">
                 <img
                src="/images/philafun/philafun-user-mental-models.svg"
                alt="tabs"
                className="mx-auto rounded-lg w-full"
              />
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  IMPLEMENT (Design & Delivery)
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm mb-8">
                <p className="body-text mb-6">
                  The design philosophy revolved around effortless simplicity, trust building and gamification.
                </p>

                <h4 className="text-xl font-medium mb-4">Frictionless Onboarding</h4>
                <p className="body-text mb-6">
                  A smooth, welcoming onboarding experience designed to reduce friction and build emotional connection from the first tap.
                </p>
                <p className="body-text mb-6">
                  Personalization through cause selection sets the stage for meaningful engagement from the go.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
<img
                src="/images/philafun/philafun-onboarding.gif"
                alt="onboarding takethrough gif"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Trust building UX</h4>
                <p className="body-text mb-6">
                  One of the key insights from the user interviews was that trust was tied to personal proximity. This insight was incorporated into the design by displaying the endorser who is closest in proximity to the user on the campaign card.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/images/philafun/philafun-trustbuilding.svg"
                alt="buiding trust through design"
                className="mx-auto rounded-lg w-full"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Campaign Details page</h4>
                <p className="body-text mb-6">
                  I designed this to be a focused, emotionally engaging layout that presents the campaigns’s mission, progress, and credibility at a glance.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
<img
                src="/images/philafun/philafun-campaign-details-page.gif"
                alt="campaign details page"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Delightful Donation Experience</h4>
                <p className="body-text mb-6">
                  A smooth, secure one-tap donation flow that minimizes friction and maximizes emotional impact.
                </p>
                <p className="body-text mb-6">
                  I added a "Donate Anonymously" feature to accommodate users who, during the user research interviews, expressed that they do not expect recognition after donating. The confetti celebration screen and point animation make giving feel meaningful, even for $10.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/images/philafun/philafun-donation-experience.gif"
                alt="donation flow"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Gamification</h4>
                <p className="body-text mb-6">
                  Gamification is a key feature I designed to keep donors engaged beyond the first click. It transforms one-time supporters into lasting advocates by rewarding actions with points, status, and social recognition.
                </p>
                 <p className="body-text mb-6">
                  Reaching 5000 impact points unlocks “Philanthropist” status. This unlocks new privileges (like endorsing campaigns) which reinforce belonging and purpose.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/images/philafun/philafun-gamification.svg"
                alt="gamification"
                className="mx-auto rounded-lg w-full"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Charity's Interface</h4>
                <p className="body-text mb-6">
                  I designed the charity module for simplicity, credibility, and impact.
                </p>
                <p className="body-text mb-6">
                  It empowers nonprofit teams to create campaigns, track donations, and gain visibility, without needing a marketing or tech background.
                </p>
                <p className="body-text mb-6">
                  Every screen is built to reduce friction, from onboarding, campaign creation to endorsement requests.
                </p>
                <div className="bg-gray-50 p-6 rounded-xl mb-8">
                  <img
                src="/images/philafun/philafun-charity-module.gif"
                alt="charity module"
                className="mx-auto rounded-lg w-full md:w-3/4"
              />
                </div>

                <h4 className="text-xl font-medium mb-4">Developer Handoff</h4>
                <p className="body-text mb-6">
                  To ensure smooth implementation, I delivered a comprehensive handoff including:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">Annotated Figma files with micro-copy, states, and responsive behaviors - plus provided design specs, and flows.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text"> A component library, exportable assets, color & typography styles, and guidance on user permissions (e.g., donor vs. charity views).</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">I also worked very closely with the Front End team to spec out any missing interactions that were not covered in the high fidelity mockups. I conducted a UX review of each front-end ticket that was implemented to ensure it was aligned with the designs before it went live.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <div className="bg-accent text-black px-4 py-2 rounded-full text-sm font-medium mr-4">
                  SUCCESS METRICS
                </div>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <img
                src="/images/philafun/philafun-appstore-screenshot.svg"
                alt="app store screenshot"
                className="mx-auto rounded-lg w-full"
              />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-medium mb-6">Results and takeaways</h3>

                <p className="body-text mb-6">
  PhilaFun was successfully developed and launched on the App Store:{" "}
  <a
    href="https://apps.apple.com/us/app/philafun/id6448131825"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline"
  >
    View App
  </a>
</p>

                <p className="body-text mb-6">
                  While organic downloads were limited post-launch, the project served as a powerful proof of concept, validating core design decisions like engagement-based recognition, endorsement-driven trust, and dual-user simplicity.
                </p>

                <p className="body-text mb-6">
                  Some of my key takeaways from this project are:
                </p>

                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">
                      <strong>Focus on the problem:</strong> At the end of the day, it is your users pains that you will be solving for, so keeping that front of mind is important as it's easy to lose sight of this when you're bogged down in the day to day.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-link-hover rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span className="body-text">
                      <strong>Design is just the beginning:</strong> Even the most empathetic design needs strategic go-to-market plan, partnerships, or network effects to be truly successful.
                    </span>
                  </li>
                </ul>

                <p className="body-text">
                  This project strengthened my skills in end-to-end UX/UI design and taught me to think beyond pixels, toward discoverability, sustainability, and real-world impact.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <MoreCaseStudies currentId="philafun-mobile-app" />
    </>
  );
};

export default PhilaFunCaseStudy;
