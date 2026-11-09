import React, { useState, useEffect } from 'react';
import './App.css';
import FetchData from './pages/FatchData';
import Reveal from './components/Reveal';
import MagneticButton from './components/MagneticButton';
import CustomCursor from './components/CustomCursor';
import { initGA, trackPageView } from './ga';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Google Analytics 초기화 (처음 한 번만)
  useEffect(() => {
    initGA();
    trackPageView('/');
  }, []);

  // 스크롤 위치에 따라 현재 섹션 감지 + 스크롤 진행률 계산
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'portfolio', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100; // 헤더 높이 고려

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          trackPageView(`#${sections[i]}`);
          break;
        }
      }

      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollHeight > 0 ? window.scrollY / scrollHeight : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 네비게이션 클릭 시 해당 섹션으로 부드럽게 이동
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="App">
      <CustomCursor />
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }}></div>
      <header className="app-header">
        <nav className="nav-container">
          <div className="nav-brand">
            <h1 className="brand-title">limssong</h1>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <ul className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <li>
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#portfolio" 
                className={`nav-link ${activeSection === 'portfolio' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('portfolio');
                }}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about');
                }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          
          {/* 모바일 메뉴 토글 버튼 */}
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={isMobileMenuOpen ? 'rotate-45' : ''}></span>
            <span className={isMobileMenuOpen ? 'opacity-0' : ''}></span>
            <span className={isMobileMenuOpen ? 'rotate-negative-45' : ''}></span>
          </div>
        </nav>
      </header>

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 심플한 히어로 섹션 */}
        <section id="home" className="hero-section">
          <Reveal as="div" className="hero-content" mode="mount">
            <h2 className="hero-title">
              Web Publisher &<br />Frontend Developer.
            </h2>
            <p className="hero-subtitle">
              HTML5 • CSS3 • SCSS • Vue • JavaScript • React
            </p>
            <div className="hero-cta">
              <MagneticButton
                className="cta-button primary"
                onClick={() => scrollToSection('portfolio')}
              >
                View Portfolio
              </MagneticButton>
            </div>
          </Reveal>
        </section>

        {/* 포트폴리오 섹션 */}
        <section id="portfolio" className="portfolio-section">
          <Reveal as="div" className="section-header">
            <h2 className="section-title">My Projects</h2>
            <p className="section-subtitle">A collection of my recent work</p>
          </Reveal>
          <FetchData />
        </section>

        {/* 스킬 섹션 */}
        <section id="about" className="skills-section">
          <Reveal as="div" className="section-header">
            <h2 className="section-title">Skills & Technologies</h2>
          </Reveal>
          <Reveal as="div" className="skill-ratio">
            <div className="ratio-item">
              <span className="ratio-label">Web Publisher</span>
              <div className="ratio-bar">
                <div className="ratio-fill publisher" style={{width: '70%'}}></div>
              </div>
              <span className="ratio-percent">70%</span>
            </div>
            <div className="ratio-item">
              <span className="ratio-label">Frontend Developer</span>
              <div className="ratio-bar">
                <div className="ratio-fill developer" style={{width: '30%'}}></div>
              </div>
              <span className="ratio-percent">30%</span>
            </div>
          </Reveal>
          <div className="skills-grid">
            <Reveal as="div" className="skill-category primary" delay={0}>
              <h3 className="skill-title">Web Publishing (70%)</h3>
              <div className="skill-tags">
                <span className="skill-tag">HTML5</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">SCSS</span>
                <span className="skill-tag">Responsive Web</span>
                <span className="skill-tag">Cross Browser</span>
                <span className="skill-tag">Semantic Markup</span>
              </div>
            </Reveal>
            <Reveal as="div" className="skill-category secondary" delay={80}>
              <h3 className="skill-title">Frontend Development (30%)</h3>
              <div className="skill-tags">
                <span className="skill-tag">Vue</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">jQuery</span>
                <span className="skill-tag">Angular</span>
              </div>
            </Reveal>
            <Reveal as="div" className="skill-category" delay={160}>
              <h3 className="skill-title">Tools & Others</h3>
              <div className="skill-tags">
                <span className="skill-tag">Cursor</span>
                <span className="skill-tag">vsCode</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">SVN</span>
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Zeplin</span>
                <span className="skill-tag">XD</span>
                <span className="skill-tag">Photoshop</span>
                <span className="skill-tag">JIRA</span>
                <span className="skill-tag">REDMINE</span>
                <span className="skill-tag">Confluence</span>
                <span className="skill-tag">Notion</span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer id="contact" className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-text">limssong</span>
          </div>
          <div className="footer-links">
            <a href="https://github.com/limssong" className="footer-link">
              GitHub
            </a>
            <a href="mailto:limssong0411@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Limssong. Built with React & ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
