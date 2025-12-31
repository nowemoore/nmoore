import React, { useState, useEffect } from 'react';
import './App.css';
import BlogPost from './BlogPost';
import { blogPosts } from './BlogPosts';
import signature from './signature.png';
import signaturelm from './signature-lm.png';

// ==================== SCROLL REVEAL HOOK ====================
const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -200px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          // Optional: stop observing after reveal
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// ==================== HERO SECTION COMPONENT ====================
const HeroSection = ({ onScrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Nowe Moore</span>
        </h1>
        <p className="hero-subtitle">
          Safer AI • Smarter Communities • Authentic Opinions
        </p>
        <button className="scroll-down-btn" onClick={() => onScrollToSection('about')}>
          <i className="fas fa-circle-chevron-down"></i>
          <span>check out my work</span>
        </button>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

// ==================== ABOUT SECTION COMPONENT ====================
const AboutSection = ({ onScrollToSection }) => {
  return (
    <section 
      id="about" 
      className="about-section"
      style={{
        backgroundImage: 'url(/images/aboutme.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      <div className="section-overlay"></div>

      <div className="about-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header scroll-reveal">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-main">
          <p className="about-paragraph-centered scroll-reveal">
            Curious about the mind, human and artificial. I'm specifically interested in decision-making systems: what environments enable and break decision-making processes as we know them, and to what extent AI inherits human heuristics of "good choice". In addition to safe AI, I contribute to a range of activities that help build smarter and more productive communities: from creating pop-science content and courses to organising larger events across the academic community and beyond. Sign me up for good transhumanist sci-fi and urban fantasy anytime.
          </p>

          <div className="divider scroll-reveal">
            <i className="fas fa-diamond"></i>
            <i className="fas fa-circle"></i> 
            <i className="fas fa-diamond"></i>
          </div>
          
          <h3 className="about-subtitle scroll-reveal">Here are 3 Things I Care about:</h3>
          
          <div className="about-interests scroll-reveal">
            <button onClick={() => onScrollToSection('research')} className="interest-item">
              <div className="interest-icon">
                <i className="fas fa-puzzle-piece"></i>
              </div>
              <span className="interest-label">Research</span>
              <p className="interest-description">Curious to see some of what's yet to be seen re language, cognition, and AI.</p>
            </button>
            
            <button onClick={() => onScrollToSection('events')} className="interest-item">
              <div className="interest-icon">
                <i className="fas fa-heart"></i>
              </div>
              <span className="interest-label">Events</span>
              <p className="interest-description">Helping communities up curiosity and productiveness in effective ways.</p>
            </button>
            
            <button onClick={() => onScrollToSection('comments')} className="interest-item">
              <div className="interest-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <span className="interest-label">Commentary</span>
              <p className="interest-description">Sometimes sharing ideas. Mostly inviting opinions.</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// ==================== RESUME SECTION COMPONENT ====================
const ResumeSection = ({ onScrollToSection }) => {

  const education = [
    'BA, Hons. Linguistics & Cognitive Scince @ Penn',
    'MA, Linguistics (computational) @ Penn',
    'Visiting student @ Pembroke College, Cambridge'
  ];

  const experience = [
    '2+ years in graduate research',
    'Led AI safety workshop series + ideathon',
    'Project Management intern at MinFin'
  ];

  const skills = [
    'Make things run: Python, Git, SQL',
    'Make things shine: data viz, LaTeX, Canva, CAD',
    'Make things stick: XP design, curriculum dev'
  ];

  const achievements = [
    'Awarded Hoenigswald Prize for thesis in LING',
    'Awarded Draw Down the Lightning grant',
    'Published research at 5+ intl. conferences'
  ];

  return (
    <section 
      id="resume" 
      className="section"
      style={{
        backgroundImage: 'url(/images/resume-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      <div className="section-overlay"></div>

      <div className="resume-content" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Resume Highlights</h2>
        </div>
        
        <div className="resume-main">
          <div className="resume-item scroll-reveal">
            {/* Education */}
            <div className="resume-icon-section">
              <i className="fas fa-graduation-cap"></i>
              <h3 className="resume-subtitle">Education</h3>
            </div>
            <ul className="resume-list">
              {education.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Experience */}
            <div className="resume-icon-section">
              <i className="fas fa-cogs"></i>
              <h3 className="resume-subtitle">Projects & XP</h3>
            </div>
            <ul className="resume-list">
              {experience.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            {/* Achievements */}
            <div className="resume-icon-section">
              <i className="fas fa-star"></i>
              <h3 className="resume-subtitle">Achievements</h3>
            </div>
            <ul className="resume-list">
              {achievements.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

           {/* Skills */}
            <div className="resume-icon-section">
              <i className="fas fa-hammer"></i>
              <h3 className="resume-subtitle">Useful Skills</h3>
            </div>
            <ul className="resume-list">
              {skills.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

         
  

          <div className="divider scroll-reveal">
            <i className="fas fa-diamond"></i>
            <i className="fas fa-circle"></i> 
            <i className="fas fa-diamond"></i>
          </div>

          <a 
            href="https://github.com/nowemoore/resume/blob/main/cv.pdf" 
            className="cv-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-scroll-reveal"></i>
            <span>View Full CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// ==================== RESEARCH SECTION COMPONENT ====================
const ResearchSection = ({ onReadClick }) => {
  const [showAll, setShowAll] = useState(false);
  
  // edit projects here
  const projects = [
    {
      title: 'Secure AI-Powered Decision-Making',
      description: 'A larger project on how judgment-impairing conditions can help us understand the security of AI-Powered decision-making.',
      image: '/images/neural.jpg',
      date: 'November 2025',
      page: 'https://nowemoore.github.io/sad/',
      onepager: 'https://github.com/nowemoore/sad/blob/main/onepager_general.pdf',

    },
    {
      title: 'Fermi Problems',
      description: 'A showcase of some of my own estimation problems and possible solutions. I also give general intuitions for my decision tree.',
      image: '/images/maths.jpg',
      date: 'August 2025',
      read: 'fermi-problems'
    }, 
    {
      title: 'Minimum Feature Specification: Tool for Formal Phonology',
      description: 'A user-friendly tool for early-stage phonological analysis.',
      image: '/images/phonotool.jpg',
      date: 'June 2025',
      page: 'https://nowemoore.github.io/phonology_app/',
      read: 'https://nowemoore.github.io/phonology_app/help.html',

    },
    {
      title: 'Hedging Our Bets on LLMs: Challenges in Calibrating the Language of Uncertainty',
      description: 'HCI-focused thesis on human perception of linguistic uncertainty expressions and LLM calibration.',
      image: '/images/humanoid.jpg',
      date: 'May 2025',
      paper: '/docs/mat-thesis.pdf',
    },
    {
      title: 'Not Everything is up for Debate',
      description: 'Pilot project exploring sycophancy behavior in LLMs based on training data representation. Progress conitnuously updated.',
      image: '/images/syc-pic.jpg',
      date: 'May 2025',
      paper: '/docs/syc-paper.pdf',

    },
    {
      title: 'How Close is Close Enough?',
      description: 'Experimental study testing English native speakers\' sensitivity to phonemic differences.',
      image: '/images/cam-paper-pic-1.jpg',
      date: 'May 2024',
      paper: '/docs/cam-paper-1.pdf',
      abstract: '/docs/se-abs.pdf'
    },
    {
      title: 'Early and Late Ergativity: Single Phenomenon, Multiple Timelines',
      description: 'Theoretical review of ergative systems in Hindi and Ch\'ol with predictions on early learner language acquisition.',
      image: '/images/erg-pic.jpg',
      date: 'May 2024',
      paper: '/docs/erg-paper.pdf',
    },
    {
      title: 'More Misery Is Coming: Negative Concord in West Slavic',
      description: 'A closer look at the scope of AGREE versus the scope of Negative Concord in West Slavic languages.',
      image: '/images/pattern-1.jpg',
      date: '22 May 2023',
      paper: '/docs/neg-paper.pdf', 
      abstract: '/docs/neg-abs.pdf',
      poster: '/docs/neg-poster.pdf'
    },
    {
      title: 'Czech \'SE\': Multiple Functions Are Better than One',
      description: 'Documentation of my search for implicit and/or explicit linguistic agents in various constructions using the \'SE\' particle.',
      image: '/images/pattern-2.jpg',
      date: 'December 2022',
      paper: '/docs/se-paper.pdf',
      abstract: '/docs/se-abs.pdf'
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section
      id="research"
      className="section"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920)',
        backgroundColor: 'transparent'
      }}
    >
      <div className="section-overlay"></div>
      <div className="section-content">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Research</h2>
          <p className="section-description">
            Guided by the infamous: <em>Believe nothing you hear and a half of what you see.</em> ~E. A. Poe
          </p>
        </div>
        <div className="projects-grid scroll-reveal">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onReadClick={onReadClick} />
          ))}
        </div>
        
        {/* Show More/Less Button */}
        {hasMore && (
          <>
            {!showAll && (
              <div className="show-more-container scroll-reveal">
                <div className="blur-preview">
                  <div className="preview-cards">
                    {projects.slice(3, 6).map((project, idx) => (
                      <div key={idx} className="preview-card">
                        <div className="card-image-container">
                          <img src={project.image} alt={project.title} className="card-image" />
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-description">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="show-more-less-btn show-more-overlay" onClick={() => setShowAll(true)}>
                  <i className="fas fa-circle-chevron-down"></i>
                  <span>show more</span>
                </button>
              </div>
            )}
            
            {showAll && (
              <div className="show-less-container">
                <button className="show-more-less-btn" onClick={() => setShowAll(false)}>
                  <i className="fas fa-circle-chevron-up"></i>
                  <span>show less</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// ==================== COMMUNITY SECTION COMPONENT ====================
const EventsSection = ({ onReadClick }) => {
  const [showAll, setShowAll] = useState(false);
  
  // edit events here
  const projects = [
    {
      title: 'Introducing: LessFriction',
      date: 'December 2025',
      description: 'A framework for (not only) changemakers with executive dysfunction to stay on top of their game and get things done.',
      image: '/images/plan.jpg',
      page: 'https://nowemoore.github.io/lessfriction/',
    },
    {
      title: 'Python from the Very Beginning',
      date: 'August - December 2025',
      description: '8-week intro course to Python programming for a women\'s ed NGO in CEE. Covers major barriers to entry such as environment setup and applied examples.',
      image: '/images/code.jpg',
      read: 'https://ajtyvit.sk/podujatia/zacni-s-pythonom/',
      page: 'https://github.com/nowemoore/pythoness/tree/main',
    },
    {
      title: 'AI Safety & Social Impacts of AI Ideathon',
      description: 'Saturday ideathon bringing together academics from diverse fields to brainstorm safety questions in AI.',
      date: 'April 2025',
      image: '/images/ideathon.jpg',
      read: 'https://omnia.sas.upenn.edu/story/new-mind-AI-nikola-moore',
      poster: '/images/ai4g-poster.jpg',
    },
    {
      title: 'AI Safety workshop series',
      description: '3-session workshop series introducing AI safety concepts to academics from diverse fields.',
      date: 'February - March 2025',
      image: '/images/ai-workshop.jpg',
      read: 'https://omnia.sas.upenn.edu/story/new-mind-AI-nikola-moore',
      poster: '/images/tnm.jpg',
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section
      id="events"
      className="section"
      style={{
        backgroundImage: 'none',
        backgroundColor: 'var(--primary-bg)'
      }}
    >
      <div className="section-content">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Community Work</h2>
          <p className="section-description">
            Building smarter and more productive communities through sharing knowledge and fostering collaboration.
          </p>
        </div>
        <div className="projects-grid scroll-reveal">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onReadClick={onReadClick} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMore && (
          <>
            {!showAll && (
              <div className="show-more-container scroll-reveal">
                <div className="blur-preview">
                  <div className="preview-cards">
                    {projects.slice(3, 6).map((project, idx) => (
                      <div key={idx} className="preview-card">
                        <div className="card-image-container">
                          <img src={project.image} alt={project.title} className="card-image" />
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-description">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="show-more-less-btn show-more-overlay" onClick={() => setShowAll(true)}>
                  <i className="fas fa-circle-chevron-down"></i>
                  <span>show more</span>
                </button>
              </div>
            )}
            
            {showAll && (
              <div className="show-less-container">
                <button className="show-more-less-btn" onClick={() => setShowAll(false)}>
                  <i className="fas fa-circle-chevron-up"></i>
                  <span>show less</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// ==================== COMMENTS SECTION COMPONENT ====================
const CommentsSection = ({ onReadClick }) => {
  const [showAll, setShowAll] = useState(false);
  
  // edit comments here
  const projects = [
    {
      title: 'Changing Bases',
      description: 'And why I think it is more important than most people realise.',
      image: '/images/changing-bases.jpg',
      date: 'November 2025',
      read: 'changing-bases'
    },
    {
      title: 'FGLI Guide',
      description: 'A couple of tangible observations from my experience as a first-gen student at Penn.',
      image: '/images/library.jpg',
      date: 'July 2025',
      read: 'fgli-guide'
    },
    {
      title: 'Fight Classy',
      description: 'How I applied my degree in the Dark Arts to (hopefully) become a more likeable person to argue with.',
      image: '/images/suit.jpg',
      date: 'August 2025',
      read: 'fight-classy'
    },
    {
      title: 'Spectators',
      description: 'A modest commentary on braindrain from CEE and the ethics of allowing citizens abroad to cast their vote in elections.',
      image: '/images/n.jpg',
      date: 'September 2023',
      read: 'https://dennikn.sk/blog/3589646/divaci/'
    },

  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section
      id="events"
      className="section"
      style={{
        backgroundImage: 'none',
        backgroundColor: 'var(--tertiary-bg)'
      }}
    >
      <div className="section-overlay"></div>
      <div className="section-content">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Unsolicited Commentary</h2>
          <p className="section-description">
            In honour of my school English teacher who says that authors don't write when they get ideas but when something ticks them off.
          </p>
        </div>
        <div className="projects-grid scroll-reveal">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onReadClick={onReadClick} />
          ))}
        </div>
        {/* Show More/Less Button */}
        {hasMore && (
          <>
            {!showAll && (
              <div className="show-more-container scroll-reveal">
                <div className="blur-preview">
                  <div className="preview-cards">
                    {projects.slice(3, 6).map((project, idx) => (
                      <div key={idx} className="preview-card">
                        <div className="card-image-container">
                          <img src={project.image} alt={project.title} className="card-image" />
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-description">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="show-more-less-btn show-more-overlay" onClick={() => setShowAll(true)}>
                  <i className="fas fa-circle-chevron-down"></i>
                  <span>show more</span>
                </button>
              </div>
            )}
            
            {showAll && (
              <div className="show-less-container">
                <button className="show-more-less-btn" onClick={() => setShowAll(false)}>
                  <i className="fas fa-circle-chevron-up"></i>
                  <span>show less</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// ==================== ARTS SECTION COMPONENT ====================
const ArtsSection = ({ onReadClick }) => {
  const [showAll, setShowAll] = useState(false);
  
  // edit arts projects here
  const projects = [
    {
      title: 'Crushes',
      description: 'A field report from my trip to Canada.',
      image: '/images/canada-trip.jpg',
      date: 'March 2024',
      read: 'crushes'
    },
    {
      title: "There's Something about the French Bread",
      description: 'A shamelessly oversentimental piece about home.',
      image: '/images/thefrenchbread.jpg',
      date: 'May 2022',
      read: 'french-bread'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMore = projects.length > 3;

  return (
    <section
      id="arts"
      className="section"
      style={{
        backgroundImage: 'url(/images/arts.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh'
      }}
    >
      <div className="section-overlay"></div>
      <div className="section-content">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Arts</h2>
          <p className="section-description">
            Occassional Tim Burton vibes.
          </p>
        </div>
        <div className="projects-grid scroll-reveal">
          {displayedProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} onReadClick={onReadClick} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMore && (
          <>
            {!showAll && (
              <div className="show-more-container scroll-reveal">
                <div className="blur-preview">
                  <div className="preview-cards">
                    {projects.slice(3, 6).map((project, idx) => (
                      <div key={idx} className="preview-card">
                        <div className="card-image-container">
                          <img src={project.image} alt={project.title} className="card-image" />
                        </div>
                        <div className="card-content">
                          <h3 className="card-title">{project.title}</h3>
                          <p className="card-description">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="show-more-less-btn show-more-overlay" onClick={() => setShowAll(true)}>
                  <i className="fas fa-circle-chevron-down"></i>
                  <span>show more</span>
                </button>
              </div>
            )}
            
            {showAll && (
              <div className="show-less-container">
                <button className="show-more-less-btn" onClick={() => setShowAll(false)}>
                  <i className="fas fa-circle-chevron-up"></i>
                  <span>show less</span>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

// ==================== CONTACT SECTION COMPONENT ====================
const ContactSection = () => {
  const contactLinks = [
    { icon: 'fab fa-github', url: 'https://github.com/nowemoore' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/nika.datkova' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/nowe.moore/' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/nowemoore/' },
    { icon: 'fab fa-at', url: 'mailto:nowe.moore@gmail.com' },
    { icon: 'fas fa-ellipsis', url: 'https://forms.gle/cRouWxe3XHBuJqUs6' }
  ];

  return (
    <section 
      id="contact" 
      className="contact-section"
      style={{
        backgroundImage: 'url(/images/contactme.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh'
      }}
    >

    <div className="section-overlay"></div>

      <div className="contact-content">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-description">
            Always open to discussing research collaborations, community-building opportunities,
            or just connecting with fellow problem-solvers.
          </p>
        </div>
        <div className="contact-methods">
          {contactLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              className="contact-button"
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <div className="contact-button-icon scroll-reveal">
                <i className={link.icon}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== PROJECT CARD COMPONENT ====================
const ProjectCard = ({ project, onReadClick }) => {
  const availableButtons = [
    project.read && { label: 'Read', action: project.read, isPost: true },
    project.code && { label: 'View Code', action: project.code, isPost: false },
    project.page && { label: 'Page', action: project.page, isPost: false },
    project.onepager && { label: 'One-Pager', action: project.onepager, isPost: false },
    project.abstract && { label: 'Abstract', action: project.abstract, isPost: false },
    project.paper && { label: 'Paper', action: project.paper, isPost: false },
    project.poster && { label: 'Poster', action: project.poster, isPost: false }
  ].filter(Boolean);

  return (
    <div className="project-card">
      <div className="card-image-container">
        <img src={project.image} alt={project.title} className="card-image" />
      </div>
      {project.date && <p className="card-date">{project.date}</p>}
      <div className="card-content">
        <h3 className="card-title">{project.title}</h3>
        <p className="card-description">{project.description}</p>
        <div className="card-actions">
          {availableButtons.map((btn, idx) => (
            <button
              key={idx}
              className="card-button"
              onClick={() => {
                if (btn.isPost) {
                  onReadClick(btn.action);
                } else {
                  window.open(btn.action, '_blank');
                }
              }}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN APP COMPONENT ====================
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [currentPost, setCurrentPost] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useScrollReveal();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let closestSection = null;
      let minDistance = Infinity;

      const sections = ['home', 'about', 'resume', 'research', 'events', 'comments', 'arts', 'contact'];

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top - 100); 
          if (distance < minDistance && rect.top <= 100 && rect.bottom > 0) { // <-- The problem conditions
            minDistance = distance;
            closestSection = sectionId;
          }
        }
      });

      if (closestSection) {
        setActiveSection(closestSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openPost = (postSlug) => {
    setCurrentPost(postSlug);
    window.scrollTo(0, 0);
  };

  const closePost = () => {
    setCurrentPost(null);
    window.scrollTo(0, 0);
  };

  // show blog instead of main if open
  if (currentPost && blogPosts[currentPost]) {
    const post = blogPosts[currentPost];
    return (
      <BlogPost
        title={post.title}
        date={post.date}
        content={post.content}
        backgroundImage={post.backgroundImage}
        onBack={closePost}
      />
    );
  }

  return (
    <div className="App">
      {/* Sticky Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <img 
            src={darkMode ? signature : signaturelm} 
            alt="Signature" 
            className="nav-signature"
            onClick={() => scrollToSection('home')}
            style={{ cursor: 'pointer' }}
          />
          
          {/* Hamburger Menu */}
          <div 
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            {['home', 'about', 'resume', 'research', 'events', 'comments', 'arts', 'contact'].map(item => (
              <li key={item} className="nav-item">
                <button
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={() => {
                    scrollToSection(item);
                    setActiveSection(item);  
                  }}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                </button>
              </li>
            ))}
            <li className="nav-item nav-item-theme-toggle">
              <div 
                className="theme-toggle"
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Toggle dark mode"
              >
                <div className={`toggle-track ${darkMode ? 'dark' : 'light'}`}>
                  <div className="toggle-slider">
                    {darkMode ? '月' : '日'}
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* All Sections */}
      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection onScrollToSection={scrollToSection} />
      <ResumeSection onScrollToSection={scrollToSection} />
      <ResearchSection onReadClick={openPost} />
      <EventsSection onReadClick={openPost} />
      <CommentsSection onReadClick={openPost} />
      <ArtsSection onReadClick={openPost} />
      <ContactSection />

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src={ signature } alt="Signature" className="footer-signature" />
          <p>&copy; 2025</p>
        </div>
        <div className="footer-right">
          <p>London, UK</p>
        </div>
      </footer>
    </div>
  );
}

export default App;