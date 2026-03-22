import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CtaLink } from '../components/CtaButton';

const MyStoryPage: React.FC = () => {
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

        .page-subtitle {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: 0.02em;
          color: #757575;
        }

        .intro-text {
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

        @media (max-width: 768px) {
          .page-title {
            font-size: 48px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .page-title {
            font-size: 72px;
          }
        }
      `}</style>

      <div className="pt-20 min-h-screen bg-white">
        {/* Content Container */}
        <div className="relative max-w-4xl mx-auto px-8 sm:px-12 lg:px-16 pt-10 pb-16">

          {/* Breadcrumb — absolute top-left, doesn't consume vertical space */}
          <div className="absolute top-0 left-8 sm:left-12 lg:left-16">
            <Link
              to="/about"
              className="nav-link inline-flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to About
            </Link>
          </div>

          {/* Title Section - Left Aligned */}
          <div className="mb-16">
            <h1 className="page-title mb-6">
              my story.
            </h1>
            <h3 className="page-subtitle mb-8">
              From Circuits to Wireframes
            </h3>
            <p className="intro-text">
              Let me take you on a little journey through my career, because honestly, it's 
              been one heck of an adventure. Spoiler alert: it involves engineering diagrams, 
              copywriting mishaps, and landing in the wonderful world of Product.
            </p>
          </div>

          {/* Landscape Image 1 */}
          <div className="mb-16">
            <img
              src="/images/about-engineering.svg"
              alt="Engineering workspace"
              className="w-full h-auto lg:h-80 object-cover rounded-lg"
            />
          </div>

          {/* The Engineering Days */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              The Engineering Days
            </h2>
            <div className="space-y-6">
              <p className="body-text">
                It all started with me graduating as an <strong>Electrical and Telecommunication Engineer</strong>, the 
                kind of person who could talk about circuits and signal modulation until you fell asleep. 
                Don't get me wrong; I loved solving problems and designing systems. AutoCAD was basically 
                my second home during those days.
              </p>
              <p className="body-text">
                But deep down, I wondered if this was all I wanted to do. Wasn't there something more creative? Something… fun?
              </p>
            </div>
          </div>

          {/* Enter 2020—The Game Changer */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              Enter 2020 (The Game Changer)
            </h2>
            <div className="space-y-6">
              <p className="body-text">
                Thanks to lockdowns, we were all stuck inside, staring at screens like zombies. That's when I stumbled upon <strong>copywriting</strong>. 
                Yes, writing words that sell things. It began as a side hustle, a way to keep myself 
                entertained while avoiding yet another Netflix binge, but before I knew it, I was crafting 
                emails, ads, and website content for clients.
              </p>
              <p className="body-text">
                And guess what? People actually liked them! Who would've thought?
              </p>
              <p className="body-text">
                But here's the twist: after months of writing killer copies, I realized something. Words 
                are great; they can persuade, inspire, and even charm, but they can only go so far. If you 
                really want users to stick around (and come back), you need to give them an experience 
                worth remembering. An "aha!" moment later, I discovered <strong>UI/UX design</strong>, 
                and let's just say… it was love at first prototype.
              </p>
            </div>
          </div>

          {/* Why UI/UX Felt Like Home */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              Why UI/UX Felt Like Home
            </h2>
            <div className="space-y-6">
              <p className="body-text">
                Transitioning into UI/UX felt surprisingly natural. As an engineer, I already had a knack 
                for problem-solving and visualizing complex ideas. Turns out, drawing electrical schematics 
                isn't that different from sketching wireframes, except now, instead of worrying about voltage 
                drops, I'm obsessing over button placements and user flows.
              </p>
              <p className="body-text">
                Plus, no one asks me to calculate resistance anymore, which is a win-win!
              </p>
            </div>
          </div>

          {/* Highlight Reel */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              Highlight Reel
            </h2>
            <div className="space-y-6">
              <p className="body-text">Fast forward a bit, and here's where things got exciting:</p>
              
          <div className="bg-accent/10 border-l-4 border-custom-primary p-6 rounded-r-lg mb-6">
                  <p className="body-text text-yellow-800 font-medium">
                                      At Elewa, I led a design team for the first time, shipping an innovative financial SaaS product that gained strong adoption.
                  </p>
<p className="body-text text-yellow-800 font-medium">
                    Later, I participated in the Qureos Product Design Challenge , and finished as a top-three finalist among hundreds of designers worldwide.
                  </p>
<p className="body-text text-yellow-800 font-medium">
                    These career-shaping experiences fueled my growth as a designer and leader.
                  </p>
                </div>


              <p className="body-text">
                Currently, I'm rocking dual roles as a <strong>Product Designer and Owner</strong> at
                <strong>DigitalQatalyst (DQ)</strong>, an international digital transformation company. 
                Here, I've tackled big projects for high-profile clients like:
              </p>

              <ul className="space-y-3 ml-6">
                <li className="flex items-start">
                 <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                  <span className="body-text">A B2B platform for Khalifa Funds</span>
                </li>
                <li className="flex items-start">
                  <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                  <span className="body-text">A financial regulation web app for DFSA (Dubai Financial Services Authority)</span>
                </li>
                <li className="flex items-start">
                  <span 
  className="w-2 h-2 rounded-full mt-3 mr-4 flex-shrink-0" 
  style={{ backgroundColor: '#7CA300' }}
></span>
                  <span className="body-text">A SharePoint solution for SAIB (Saudi Arabia Investment Bank)</span>
                </li>
              </ul>

              <p className="body-text">
                And oh, did I mention <strong>DTMP</strong>? It's a nifty tool we built to help clients manage and accelerate 
                their digital transformations. As its Product Owner, I wear many hats: designer, strategist, 
                cheerleader, and trust me, it keeps life interesting.
              </p>
            </div>
          </div>

          {/* What Makes Me Tick */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              What Makes Me Tick
            </h2>
            <div className="space-y-6">
              <p className="body-text">
                Unsurprisingly, I thrive at the intersection of <strong>technology</strong>, 
                <strong>business</strong>, and <strong>creativity</strong>. Whether it's translating 
                complex requirements into simple designs or balancing user needs with business goals, 
                I bring a unique perspective thanks to my diverse background.
              </p>
              <p className="body-text">
                Plus, I have a soft spot for making boring stuff look cool. (Seriously, ask me about turning financial dashboards 
                into works of art.)
              </p>
            </div>
          </div>

          {/* Landscape Image 2 */}
          <div className="mb-16">
            <img
              src="https://i.imgur.com/BnLEQSZ.png"
              alt="Technology, Business, Creativity"
              className="w-full h-auto lg:h-80 object-cover rounded-lg"
            />
          </div>

          {/* A Dash of Humor */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              "So is it all Roses?"
            </h2>
            <div className="space-y-6">
              <p className="body-text">
                Let's be real: not every day is sunshine and perfectly aligned grids. Some days I spend hours perfecting micro-interactions, only to hear, ‘Actually, let’s pivot back to the first design,’ after weeks of iterations. Other 
                times, stakeholders ask for "something minimal but also packed with features."
              </p>
              <p className="body-text">
                But hey, challenges are part of the game, and I wouldn't trade it for anything. After all, designing 
                solutions that make people's lives easier? That's pretty darn rewarding.
              </p>
            </div>
          </div>

          {/* Looking Ahead */}
          <div className="mb-16">
            <h2 className="section-heading mb-8">
              Looking Ahead
            </h2>
            <div className="space-y-6">
              <p className="body-text">
                So, where am I headed next? Well, I'll keep doing what I love: blending tech and creativity 
                to solve meaningful problems. If you're looking for someone who can turn complex ideas into 
                delightful experiences, or just wants to swap funny design memes, let's chat! Together, we 
                might just create something amazing.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <CtaLink to="/contact">
              Let's Work Together
            </CtaLink>
          </div>

        </div>
      </div>
    </>
  );
};

export default MyStoryPage;