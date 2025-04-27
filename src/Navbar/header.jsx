
import React, { useState, useEffect } from 'react';
import { FiGithub, FiSun, FiMoon, FiX } from 'react-icons/fi';
import './Header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);  // D
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            <span className="logo-text">UA</span>
            <span className="logo-circle"></span>
          </a>

          <nav className="desktop-nav">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link" onClick={closeMenu}>
                <span className="nav-text">{item.name}</span>
              </a>
            ))}
            
            <a href="https://github.com/umarakhtar0" target="_blank" rel="noopener noreferrer" className="github-icon" aria-label="GitHub">
              <FiGithub />
            </a>
            
            <button className="theme-toggle" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <FiSun className="theme-icon sun" /> : <FiMoon className="theme-icon moon" />}
            </button>
          </nav>

          <button className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
  <div className="menu-bars">
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </div>
</button>

        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="mobile-link"
              onClick={closeMenu}
              style={{ transitionDelay: `${isOpen ? index * 0.1 : 0}s` }}
            >
              {item.name}
            </a>
          ))}
          
          <div className="mobile-icons">
            <a href="https://github.com/umarakhtar0" target="_blank" rel="noopener noreferrer" className="mobile-github" aria-label="GitHub">
              <FiGithub />
            </a>
            <button className="mobile-theme-toggle" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              {darkMode ? <FiSun className="theme-icon" /> : <FiMoon className="theme-icon" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
